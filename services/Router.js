const Router = {
  init: function init() {
    document.querySelectorAll(".navlink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const route = e.target.getAttribute("href");

        // this means Router
        this.go(route);
      });
    });

    //   listen to the popstate event to handle the back button or forward button:
    window.addEventListener("popstate", (e) => {
      this.go(e.state.route, false);
    });

    //  process initial route:
    this.go(location.pathname);
  },

  go: function go(route, addToHistory = true) {
    if (addToHistory) {
      // adding route to the history.state object:
      history.pushState({ route }, null, route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");

        break;

      case "/order":
        pageElement = document.createElement("order-page");

        break;

      // for each product page:
      default:
        if (route.startsWith("/product-"))
          pageElement = document.createElement("product-page");

        pageElement.dataset.productId = route?.split("-")[1];
    }

    if (pageElement) {
      //   document.querySelector("main").children[0]?.remove();

      //   deleting the previous page's content:
      document.querySelector("main").innerHTML = "";
      document.querySelector("main").appendChild(pageElement);
    }

    window.scrollTo(0, 0);
  },
};

export default Router;
