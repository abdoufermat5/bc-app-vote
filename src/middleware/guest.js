export default function guest({ next, store }) {
  console.log("middleware is auth-- ", store.getters.getIsAuthenticated);
  if (store.getters.getIsAuthenticated) {
    return next({
      name: "home"
    });
  }

  return next();
}
