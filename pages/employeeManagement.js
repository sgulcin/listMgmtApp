import { LitElement, html, css } from 'lit';
import { saveEmployees, loadEmployees } from '../store/storage.js';
import { style } from './employeeManagement-style.js';

class EmployeeManagement extends LitElement {
  
  static get styles() {
    return [style];
  }

  static properties = {
    employees: { type: Array },
    viewMode: { type: String },
    currentPage: { type: Number },
    itemsPerPage: { type: Number },
    searchQuery: { type: String },
    selectedEmployee: { type: Object }
  };

  constructor() {
    super();
    this.employees = loadEmployees();
    this.viewMode = 'table'; // Default view mode
    this.currentPage = 1;
    this.itemsPerPage = 10;
    this.searchQuery = '';
    this.selectedEmployee = null;
  }

  switchView(mode) {
    this.viewMode = mode;
  }
  handleSearch(event) {
    this.searchQuery = event.target.value.toLowerCase();
    this.currentPage = 1;
  }
  get filteredEmployees() {
    return this.employees.filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchQuery) ||
      employee.lastName.toLowerCase().includes(this.searchQuery)
    );
  }
  get paginatedEmployees() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredEmployees.slice(start, end);
  }
  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.itemsPerPage);
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  goToPage(page) {
    this.currentPage = page;
  }
  deleteEmployee() {
    const toast = this.shadowRoot.getElementById('toast');
    const elementId = toast.getAttribute("data-id");
    this.employees = this.employees.filter(employee => employee.id !== parseInt(elementId));
    saveEmployees(this.employees);
    this.closeToast();
  }
  showToast(id) {
    const toast = this.shadowRoot.getElementById('toast');
    toast.className = 'toast show';
    toast.setAttribute("data-id", id);
  }
  closeToast() {
    const toast = this.shadowRoot.getElementById('toast');
    toast.className = toast.className.replace('show', '');
    toast.setAttribute("data-id", "");
  }

  render() {
    return html`
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=chevron_left,chevron_right,delete,density_medium,edit_square,widget_small" />
      <div class="employee-list-header">
        <h3>Employee List</h3>
        <div class="employee-list-view">
          <button @click="${() => this.switchView('list')}" ?disabled="${this.viewMode !== 'table'}"><span class="material-symbols-outlined list-menu">density_medium</span></button>
          <button @click="${() => this.switchView('table')}" ?disabled="${this.viewMode === 'table'}"><span class="material-symbols-outlined">widget_small</span></button>
          
        </div>
      </div>
      <div class="employee-list-main">
        <div class="search">
          <input type="text" placeholder="Search..." @input="${this.handleSearch}" />
        </div>
        ${this.viewMode === 'table' ? this.renderTableView() : this.renderListView()}
       
      </div>
      <div>${this.renderPagination()}</div>
      <div id="toast" class="toast">
        <p>Are you sure you want to delete this employee?</p>
        <button class="toast-approve" @click="${() => this.deleteEmployee()}">Delete</button>
        <button class="toast-cancel" @click="${() => this.closeToast()}">Cancel</button>
      </div>
    `;
  }

  renderTableView() {
    return html`
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Employment</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Department</th>
            <th>Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.paginatedEmployees.map(employee => html`
            <tr>
              <td>${employee.firstName}</td>
              <td>${employee.lastName}</td>
              <td>${employee.dateOfEmployment}</td>
              <td>${employee.dateOfBirth}</td>
              <td>${employee.phoneNumber}</td>
              <td>${employee.emailAddress}</td>
              <td>${employee.department}</td>
              <td>${employee.position}</td>
              <td>
                <a href="/edit-employee/${employee.id}"><span class="material-symbols-outlined action-button">edit_square</span></a>
                <button @click="${() => this.showToast(employee.id)}"><span class="material-symbols-outlined action-button">delete</span></button>
              </td>
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }

  renderListView() {
    return html`
      <ul class="list-view-container">
          <li class="list-view-header">
            <p>First Name</p>
            <p>Last Name</p>
            <p>Date of Employment</p>
            <p>Date of Birth</p>
            <p>Phone Number</p>
            <p class="list-view-large">Email Address</p>
            <p>Department</p>
            <p>Position</p>
            <p>Actions</p>
          </li>
        ${this.paginatedEmployees.map(employee => html`
          <li class="list-view-item">
            <p>${employee.firstName} </p>
            <p>${employee.lastName} </p>
            <p>${employee.dateOfEmployment}</p>
            <p>${employee.dateOfBirth}</p>
            <p>${employee.phoneNumber}</p>
            <p class="list-view-large">${employee.emailAddress}</p>
            <p>${employee.department}</p>
            <p>${employee.position} </p>
            <p>
              <a href="/edit-employee/${employee.id}">Edit</a>
              <button @click="${() => this.showToast(employee.id)}">Delete</button>
            </p>
          </li>
        `)}
      </ul>
    `;
  }

  renderPagination() {
    return html`
      <div class="pagination">
        <button @click="${this.prevPage}"><span class="material-symbols-outlined">chevron_left</span></button>
        <!-- <span class="pagination-number">${this.currentPage}</span> -->
        ${Array.from({ length: this.totalPages }, (_, i) => i + 1).map(page => html`
          <button class="pagination-number" @click="${() => this.goToPage(page)}" ?disabled="${this.currentPage === page}">${page}</button>
        `)}
        <button @click="${this.nextPage}"><span class="material-symbols-outlined">chevron_right</span></button>
      </div>
    `;
  }
}

customElements.define('employee-management', EmployeeManagement);