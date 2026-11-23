/**
 * True when `href` is the current route.
 *
 * `usePathname()` returns null outside the App Router and, with
 * `trailingSlash: true`, returns '/about/' for the '/about' link.
 */
export function isActivePath(pathname: string | null | undefined, href: string): boolean {
  if (!pathname) return false;

  const currentPath = pathname === '/' ? pathname : pathname.replace(/\/+$/, '');
  return currentPath === href;
}
