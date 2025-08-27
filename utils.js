// Function to get companies from localStorage
function getCompanies() {
  const stored = localStorage.getItem('companies');
  return stored ? JSON.parse(stored) : [];
}

// Function to save companies to localStorage
function saveCompanies(companies) {
  localStorage.setItem('companies', JSON.stringify(companies));
}

// Function to generate unique ID
function generateId() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// Function to get temp company data for add/edit
function getTempCompany() {
  const stored = localStorage.getItem('tempCompany');
  return stored ? JSON.parse(stored) : {};
}

// Function to save temp company data
function saveTempCompany(data) {
  localStorage.setItem('tempCompany', JSON.stringify(data));
}

// Function to clear temp company data
function clearTempCompany() {
  localStorage.removeItem('tempCompany');
}

// Function to parse query params
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}