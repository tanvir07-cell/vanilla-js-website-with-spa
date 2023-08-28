// after loading all document in the dom:

import API from "./services/Api.js";
import { fetchMenu } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// for custom web components:
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

// This is the global app object that will be used by all modules

window.app = {};

app.store = Store;

app.router = Router;

window.addEventListener("DOMContentLoaded", async function fetchData() {
  app.router.init();
  await fetchMenu();
});
