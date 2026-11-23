import { isActivePath } from '../lib/navigation';

describe('isActivePath', () => {
  it('matches the home route', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('matches subpage links when the pathname has a trailing slash', () => {
    expect(isActivePath('/about/', '/about')).toBe(true);
    expect(isActivePath('/services/', '/services')).toBe(true);
    expect(isActivePath('/contact/', '/contact')).toBe(true);
  });

  it('matches subpage links without a trailing slash', () => {
    expect(isActivePath('/about', '/about')).toBe(true);
  });

  it('does not match other routes', () => {
    expect(isActivePath('/about/', '/services')).toBe(false);
    expect(isActivePath('/', '/about')).toBe(false);
  });

  it('tolerates a missing pathname', () => {
    expect(isActivePath(null, '/')).toBe(false);
    expect(isActivePath(undefined, '/')).toBe(false);
    expect(isActivePath('', '/')).toBe(false);
  });
});
