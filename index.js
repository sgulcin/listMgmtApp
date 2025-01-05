import { LitElement, html } from 'lit';
import './components/navigationMenu.js';
import './pages/employeeManagement.js';
import './pages/addEmployee.js';
import { Router } from '@vaadin/router';
import { style } from './index-style.js';

class App extends LitElement {
  static get styles() {
    return [style];
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);

    router.setRoutes([
      { path: '/', component: 'employee-management' },
      { path: '/add-employee', component: 'add-employee' },
      { path: '/edit-employee/:id', component: 'add-employee' },
      { path: '(.*)', component: 'employee-management' }
    ]);

    window.addEventListener('location-changed', () => {
      router.render(outlet);
    });
  }

  render() {
    return html`
      <header>
        <a href="/" class="logo"><img src="assets/ing-logo.png" />ING</a>
        <navigation-menu></navigation-menu>
      </header>
      <main id="outlet"></main>
    `;
  }
}

customElements.define('my-app', App);