export default function auth({ next, store }) {
  if (!store.getters.getIsAuthenticated) {
    return next({
      name: "login"
    });
  }

  return next();
}
