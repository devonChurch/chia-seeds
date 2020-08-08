const testRoute = (routes, pathname) => routes.every((route) => route.test(pathname))

const ensureArgIsArray = (arg) => Array.isArray(arg) ? arg : [arg];

const ensureArgHasTrailingSlash = arg => arg.endsWith("/") ? arg : `${arg}/`;

export const isNot = (routes) => (pathname) => !testRoute(
  ensureArgIsArray(routes),
  pathname
);

export const is = (routes) => (pathname) => testRoute(
  ensureArgIsArray(routes),
  pathname
);

export const testActiveStatus = (tests) => ({ pathname }) => 
    ensureArgIsArray(tests).every((test) => test(ensureArgHasTrailingSlash(pathname)));