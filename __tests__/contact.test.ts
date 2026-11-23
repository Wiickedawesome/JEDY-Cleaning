import { submitLead, SUBMIT_TIMEOUT_MS } from '../lib/contact';

const jsonResponse = (body: unknown, ok = true) =>
  ({ ok, json: async () => body }) as Response;

const lead = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '8655551234',
  service: 'Deep Cleaning',
  message: 'Please quote.',
};

describe('submitLead', () => {
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

  it('posts the lead to Web3Forms with the access key', async () => {
    const fetchMock = jest.fn().mockResolvedValue(jsonResponse({ success: true }));
    global.fetch = fetchMock as unknown as typeof fetch;

    const result = await submitLead(lead);

    expect(result).toEqual({ ok: true });
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(init.body)).toMatchObject({
      access_key: 'test-access-key',
      name: 'Jane Doe',
      email: 'jane@example.com',
      phone: '8655551234',
      service: 'Deep Cleaning',
    });
  });

  it('rejects a truthy-but-not-true success value', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: 'true' })) as unknown as typeof fetch;

    expect(await submitLead(lead)).toMatchObject({ ok: false, reason: 'rejected' });
  });

  it('treats a non-2xx response as a rejection', async () => {
    global.fetch = jest.fn().mockResolvedValue(jsonResponse({ success: true }, false)) as unknown as typeof fetch;

    expect(await submitLead(lead)).toMatchObject({ ok: false, reason: 'rejected' });
  });

  it('surfaces the provider message on rejection', async () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue(jsonResponse({ success: false, message: 'Invalid access key' })) as unknown as typeof fetch;

    expect(await submitLead(lead)).toEqual({
      ok: false,
      reason: 'rejected',
      detail: 'Invalid access key',
    });
  });

  it('reports a network failure', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('offline')) as unknown as typeof fetch;

    expect(await submitLead(lead)).toEqual({ ok: false, reason: 'network' });
  });

  it('aborts a stalled request instead of hanging forever', async () => {
    jest.useFakeTimers();
    global.fetch = jest.fn(
      (_url, init) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () =>
            reject(new DOMException('Aborted', 'AbortError'))
          );
        })
    ) as unknown as typeof fetch;

    const pending = submitLead(lead);
    jest.advanceTimersByTime(SUBMIT_TIMEOUT_MS);

    expect(await pending).toEqual({ ok: false, reason: 'timeout' });
    jest.useRealTimers();
  });

  it('refuses to submit when no access key is configured', async () => {
    delete process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const fetchMock = jest.fn();
    global.fetch = fetchMock as unknown as typeof fetch;

    expect(await submitLead(lead)).toEqual({ ok: false, reason: 'unconfigured' });
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
