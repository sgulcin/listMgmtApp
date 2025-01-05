const STORAGE_KEY = 'employees';

const firstData = [
  {"id":1,"firstName":"Gülçin","lastName":"Güven editlendi","dateOfEmployment":"2025-01-04","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin@gmail.com","department":"Tech","position":"Senior"},
  {"id":2,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2025-01-04","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin1@gmail.com","department":"Analytics","position":"Junior"},
  {"id":4,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2025-01-01","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin2@gmail.com","department":"Analytics","position":"Medior"},
  {"id":5,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2025-01-01","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin3@gmail.com","department":"Analytics","position":"Medior"},
  {"id":6,"firstName":"sevinç","lastName":"Güven","dateOfEmployment":"2023-01-01","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin4@gmail.com","department":"Tech","position":"Junior"},
  {"id":7,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2020-06-06","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin5@gmail.com","department":"Analytics","position":"Junior"},
  {"id":8,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2020-03-03","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin6@gmail.com","department":"Analytics","position":"Junior"},
  {"id":9,"firstName":"sevinç","lastName":"güven","dateOfEmployment":"2023-01-01","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcin5@gmail.com","department":"Tech","position":"Medior"},
  {"id":10,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2024-01-09","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcin3@gmail.com","department":"Analytics","position":"Senior"},
  {"id":11,"firstName":"sevinç","lastName":"güven","dateOfEmployment":"2023-02-07","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcin9@gmail.com","department":"Analytics","position":"Junior"},
  {"id":12,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2025-01-05","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin10@gmail.com","department":"Analytics","position":"Medior"},
  {"id":13,"firstName":"Gülçin","lastName":"Güven","dateOfEmployment":"2025-01-04","dateOfBirth":"1989-07-07","phoneNumber":"5549877789","emailAddress":"sgulcingirgin11@gmail.com","department":"Analytics","position":"Junior"}
];

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export function saveEmployees(employees) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
}

export function loadEmployees() {
  const employees = localStorage.getItem(STORAGE_KEY);
  return employees ? JSON.parse(employees) : firstData;
}