import API from "./Api.js";
import Store from "./Store.js";

export async function fetchMenu() {
  app.store.menu = await API.fetchMenu();
}
