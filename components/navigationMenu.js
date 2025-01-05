import { LitElement, html, css } from 'lit';
import { style } from './navigationMenu-style.js';

class NavigationMenu extends LitElement {
  static get styles() {
    return [style];
  }
  navigate(event, path) {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new CustomEvent('location-changed'));
  }

  render() {
    return html`
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200&icon_names=add,group,person,search,settings" rel="stylesheet" />
      <nav>
        <a href="/"><span class="material-symbols-outlined">person</span>Employees</a>
        <a href="/add-employee"><span class="material-symbols-outlined">add</span>Add New</a>
      </nav>
    `;
  }
}

customElements.define('navigation-menu', NavigationMenu);