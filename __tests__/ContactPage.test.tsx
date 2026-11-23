import '@testing-library/jest-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

  afterEach(() => {
    global.fetch = originalFetch;
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

  it('shows success only when FormSubmit reports success: "true"', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: 'true' }));

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/thank you for your message/i)).toBeInTheDocument();
  });

  it('shows an error for success: "false" even though the string is truthy', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: 'false' }));

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('shows an error when the response status is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: 'true' }, false));

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('shows an error when the request fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('offline'));

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
  });

  it('gives up and shows an error when the provider never responds', async () => {
    jest.useFakeTimers();
    // A fetch that only ever settles when its signal aborts, like a stalled request.
    global.fetch = jest.fn(
      (_url, init) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () =>
            reject(new DOMException('Aborted', 'AbortError'))
          );
        })
    ) as unknown as typeof fetch;

    render(<ContactPage />);
    fillValidForm();
    submit();

    expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled();

    await act(async () => {
      jest.advanceTimersByTime(12000);
    });

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    jest.useRealTimers();
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
