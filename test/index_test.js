import { html, fixture, expect, assert } from '@open-wc/testing';
import '../index.js';
import { Router } from '@vaadin/router';

suite('my-app', () => {
  test('is defined', () => {
    const el = document.createElement('my-app');
    assert.instanceOf(el, customElements.get('my-app'));
  });

  test('renders the header and main elements', async () => {
    const el = await fixture(html`<my-app></my-app>`);
    const header = el.shadowRoot.querySelector('header');
    const main = el.shadowRoot.querySelector('main');
    expect(header).to.exist;
    expect(main).to.exist;
    assert.shadowDom.equal(el, 
        `<header>
        <a href="/" class="logo"><img src="assets/ing-logo.png" />ING</a>
        <navigation-menu></navigation-menu>
        </header>
        <main id="outlet"></main>
        `);
  });
  
  test('router is initialized', async () => {
    const el = await fixture(html`<my-app></my-app>`);
    const outlet = el.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);
    expect(router).to.exist;
  });
});