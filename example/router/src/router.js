import DetailPage from "./pages/DetailPage.js";
import MainPage from "./pages/MainPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";

class Router {
  constructor(routes) {
    this.routes = routes;
    this.routeList = Object.keys(this.routes);
  }

  registerListener(listener) {
    window.addEventListener("changePath", listener);
  }

  go(path) {
    history.pushState(null, null, path);
    window.dispatchEvent(new Event("changePath"));
  }

  //   registerListener(listener) {
  //     window.addEventListener("hashchange", listener);
  //   }

  //   go(path) {
  //     window.location = `/#${path}`;
  //   }
}

const routes = {
  "/": MainPage,
  "/detail": DetailPage,
  "/404": NotFoundPage,
};

const router = new Router(routes);

export default router;
