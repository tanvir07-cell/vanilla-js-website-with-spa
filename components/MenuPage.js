export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // for shadow dom:
    this.root = this.attachShadow({ mode: "open" });

    // for shadow dom css:
    let style = document.createElement("style");
    this.root.appendChild(style);

    async function loadCss() {
      const css = await fetch("./components/MenuPage.css");
      const cssText = await css.text();
      style.textContent = cssText;
    }

    loadCss();
  }
  connectedCallback() {
    let template = document.getElementById("menu-page-template");
    let templateContent = template.content.cloneNode(true);
    this.root.appendChild(templateContent);
  }
}

customElements.define("menu-page", MenuPage);
