import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from '../app/contact/page';

const jsonResponse = (body: unknown, ok = true) =>
  ({ ok, json: async () => body }) as Response;

const fillValidForm = () => {
  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '8655551234' } });
};

const submit = () => fireEvent.click(screen.getByRole('button', { name: /send message/i }));

describe('ContactPage form', () => {
  const originalFetch = global.fetch;
  const originalKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY = 'test-access-key';
  });

  afterEach(() => {
    global.fetch = originalFetch;
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY = originalKey;
    jest.restoreAllMocks();
  });

  it('blocks submission and focuses the first invalid field', async () => {
    const fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<ContactPage />);
    submit();

    expect(await screen.findByText('Name must be at least 2 characters')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid 10-digit phone number')).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.getByLabelText(/full name/i)).toHaveFocus();
  });

  it('shows success when the provider accepts the lead', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: true })) as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/thank you for your message/i)).toBeInTheDocument();
  });

  it('shows the fallback banner when the provider rejects the lead', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue(jsonResponse({ success: false, message: 'rejected' })) as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect(screen.queryByText(/thank you for your message/i)).not.toBeInTheDocument();
  });

  it('shows the fallback banner on a network failure', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('offline')) as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('offers phone and email fallbacks when delivery fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('offline')) as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    const banner = await screen.findByText(/something went wrong/i);
    const panel = banner.closest('[role="alert"]') as HTMLElement;
    expect(panel.querySelector('a[href^="tel:"]')).toBeInTheDocument();
    expect(panel.querySelector('a[href^="mailto:"]')).toBeInTheDocument();
  });

  it('does not attempt a request when the access key is missing', async () => {
    delete process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('silently drops submissions that fill the honeypot', async () => {
    const fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    const { container } = render(<ContactPage />);
    const honeypot = container.querySelector<HTMLInputElement>('#website');
    expect(honeypot).not.toBeNull();

    fireEvent.change(honeypot as HTMLInputElement, { target: { value: 'https://spam.example' } });
    submit();

    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });
});
