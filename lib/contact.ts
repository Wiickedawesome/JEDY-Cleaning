/**
 * Contact-form delivery.
 *
 * The site is a static export on GitHub Pages, so there is no server to hold an
 * API secret. Web3Forms is designed for that: the access key is public by
 * design and tied to the destination inbox, and submissions are posted straight
 * from the browser.
 */

export interface Lead {
  name: string;
  email: string;
  phone: string;
  /** Human-readable service label. */
  service: string;
  message: string;
}

export type LeadFailureReason = 'unconfigured' | 'timeout' | 'network' | 'rejected';

export type LeadResult =
  | { ok: true }
  | { ok: false; reason: LeadFailureReason; detail?: string };

const ENDPOINT = 'https://api.web3forms.com/submit';

/** Give up on a stalled provider response so the visitor always gets feedback. */
export const SUBMIT_TIMEOUT_MS = 12000;

/** The build inlines this value; it is public and identifies the inbox. */
export function getAccessKey(): string | undefined {
  return process.env.NEXT_PUBLIC_WEB3FORMS_KEY || undefined;
}

export async function submitLead(lead: Lead): Promise<LeadResult> {
  const accessKey = getAccessKey();
  if (!accessKey) return { ok: false, reason: 'unconfigured' };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), SUBMIT_TIMEOUT_MS);

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New JEDY Cleaning Inquiry - ${lead.service}`,
        from_name: 'JEDY Cleaning Website',
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service: lead.service,
        message: lead.message,
      }),
    });

    if (!response.ok) {
      return { ok: false, reason: 'rejected', detail: `HTTP ${response.status}` };
    }

    // Web3Forms documents `success` as a boolean; anything else is a rejection.
    const data: unknown = await response.json().catch(() => null);
    const record = (data ?? {}) as { success?: unknown; message?: unknown };

    if (record.success === true) return { ok: true };

    return {
      ok: false,
      reason: 'rejected',
      detail: typeof record.message === 'string' ? record.message : undefined,
    };
  } catch (error) {
    const aborted = error instanceof DOMException && error.name === 'AbortError';
    return { ok: false, reason: aborted ? 'timeout' : 'network' };
  } finally {
    clearTimeout(timeoutId);
  }
}
