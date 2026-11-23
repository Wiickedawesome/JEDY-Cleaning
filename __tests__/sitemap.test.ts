import { SITE } from '../lib/constants';
import robots from '../app/robots';
import sitemap from '../app/sitemap';

describe('sitemap', () => {
  const entries = sitemap();
  const urls = entries.map((entry) => entry.url);

  it('lists every canonical route with a trailing slash', () => {
    expect(urls).toEqual([
      `${SITE.url}/`,
      `${SITE.url}/about/`,
      `${SITE.url}/services/`,
      `${SITE.url}/contact/`,
      `${SITE.url}/privacy/`,
    ]);
  });

  it('does not emit a build-time lastModified date', () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeUndefined();
    }
  });
});

describe('robots', () => {
  it('references the sitemap without a host directive', () => {
    const config = robots();

    expect(config.sitemap).toBe(`${SITE.url}/sitemap.xml`);
    expect(Object.keys(config)).not.toContain('host');
  });
});
