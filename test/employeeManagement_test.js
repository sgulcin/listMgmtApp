import { html, fixture, expect, assert } from '@open-wc/testing';
import '../pages/employeeManagement.js';

suite('employee-management', () => {
  test('is defined', () => {
    const el = document.createElement('employee-management');
    assert.instanceOf(el, customElements.get('employee-management'));
  });

  test('renders the employee-list-header and employee-list-main elements', async () => {
    const el = await fixture(html`<employee-management></employee-management>`);
    const header = el.shadowRoot.querySelector('div');
    expect(header).to.exist;
    expect(header.getAttribute('class')).to.equal('employee-list-header');
  });

  test('renders the table view by default', async () => {
    const el = await fixture(html`<employee-management></employee-management>`);
    const table = el.shadowRoot.querySelector('table');
    expect(table).to.exist;
  });

  test('switches to list view', async () => {
    const el = await fixture(html`<employee-management></employee-management>`);
    el.switchView('list');
    await el.updateComplete;
    const ul = el.shadowRoot.querySelector('ul');
    expect(ul).to.exist;
  });

  test('filters employees based on search query', async () => {
    const el = await fixture(html`<employee-management></employee-management>`);
    el.employees = [
      { id: 1, firstName: 'Name', lastName: 'Lastname' },
      { id: 2, firstName: 'Eman', lastName: 'Lostname' },
      { id: 3, firstName: 'Nae', lastName: 'Last' }
    ];
    el.searchQuery = 'nam';
    await el.updateComplete;
    const filteredEmployees = el.filteredEmployees;
    expect(filteredEmployees.length).to.equal(2);
  });

});