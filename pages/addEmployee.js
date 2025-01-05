import { LitElement, html, css } from 'lit';
import { saveEmployees, loadEmployees } from '../store/storage.js';
import { style } from './addEmployee-style.js';

class AddEmployee extends LitElement {

  static get styles() {
    return [style];
  }
  
  static properties = {
    employees: { type: Array },
    employee: { type: Object },
    isEditMode: { type: Boolean }
  };

  constructor() {
    super();
    this.employees = loadEmployees();
    this.employee = null;
    this.isEditMode = false;
  }
  firstUpdated() {
    const params = this.location.params;
    if (params?.id) {
      this.isEditMode = true;
      this.employee = this.employees.find(emp => emp.id === Number(params.id));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newEmployee = {
      id: this.isEditMode ? this.employee.id : this.employees.length + 1,
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      dateOfEmployment: formData.get('dateOfEmployment'),
      dateOfBirth: formData.get('dateOfBirth'),
      phoneNumber: formData.get('phoneNumber'),
      emailAddress: formData.get('emailAddress'),
      department: formData.get('department'),
      position: formData.get('position')
    };

    if (!this.isEditMode && this.employees.some(employee => employee.emailAddress === newEmployee.emailAddress)) {
      alert('this email address already exists.');
      return;
    }

    if (this.isEditMode) {
      this.updateEmployee(newEmployee);
    } else {
      this.addEmployee(newEmployee);
    }
   
    this.navigateToEmployeeList();
    event.target.reset();
  }

  addEmployee(employee) {
    this.employees = [...this.employees, employee];
    saveEmployees(this.employees);
  }

  updateEmployee(updatedEmployee) {
    this.employees = this.employees.map(employee =>
      employee.id === updatedEmployee.id ? updatedEmployee : employee
    );
    saveEmployees(this.employees);
  }

  navigateToEmployeeList() {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new CustomEvent('location-changed'));
  }

  render() {
    return html`
      <form @submit="${this.handleSubmit}">
        <label>
          <span>First Name:</span>
          <input type="text" name="firstName" .value="${this.employee?.firstName || ''}" required />
        </label>
        <label>
          <span>Last Name:</span>
          <input type="text" name="lastName" .value="${this.employee?.lastName || ''}" required />
        </label>
        <label>
          <span>Date of Employment:</span>
          <input type="date" name="dateOfEmployment" .value="${this.employee?.dateOfEmployment || ''}" required />
        </label>
        <label>
          <span>Date of Birth:</span>
          <input type="date" name="dateOfBirth" .value="${this.employee?.dateOfBirth || ''}" required />
        </label>
        <label>
          <span>Phone Number:</span>
          <input type="tel" name="phoneNumber" pattern="[0-9]{10}" .value="${this.employee?.phoneNumber || ''}" required />
        </label>
        <label>
        <span>Email Address:</span>
          <input type="email" name="emailAddress" .value="${this.employee?.emailAddress || ''}" required />
        </label>
        <label>
        <span>Department:</span>
          <select name="department" .value="${this.employee?.department || ''}" required>
            <option value="Analytics">Analytics</option>
            <option value="Tech">Tech</option>
          </select>
        </label>
        <label>
        <span>Position:</span>
          <select name="position" .value="${this.employee?.position || ''}" required>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
          </select>
        </label>
        <button type="submit">${this.isEditMode ? 'Update Employee' : 'Add Employee'}</button>
      </form>
      
    `;
  }
}

customElements.define('add-employee', AddEmployee);