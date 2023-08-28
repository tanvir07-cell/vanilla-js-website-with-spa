export class OrderPage extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let template = document.getElementById("order-form-template");
    let templateContent = template.content.cloneNode(true);
    // order-page custom htmlelement er moddeh ei templateContent ke add kore dicchi:
    this.appendChild(templateContent);
  }
}

customElements.define("order-page", OrderPage);
