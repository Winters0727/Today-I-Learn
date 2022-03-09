import router from "./router.js";

export default function App({ $parent }) {
  this.initApp = () => {
    $parent.innerHTML = "";
  };

  this.render = () => {
    this.initApp();

    const { pathname } = location;

    if (!router.routeList.includes(pathname)) {
      history.pushState(null, null, "/404");
      new router.routes["/404"]({ $parent });
    } else {
      new router.routes[pathname]({ $parent });
    }

    // const { hash } = location;
    //
    // if (!hash.startsWith("#")) {
    //   if (location.pathname === "/") {
    //     router.go("/");
    //   } else {
    //     router.go("/404");
    //   }
    // } else {
    //   const pathname = hash.replace("#", "");
    //   if (!router.routeList.includes(pathname)) {
    //     window.location = `/#/404`;
    //     new router.routes["/404"]({ $parent });
    //   } else {
    //     new router.routes[pathname]({ $parent });
    //   }
    // }
  };

  router.registerListener(this.render);

  this.render();
}
