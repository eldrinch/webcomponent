//tenho que add o objeto option que fico fora antes de inserir o id
function fetchJson(url, options) {
  return fetch(url, options)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error(r.statusText);
      }
    })
    .catch((error) => {
      showError("Error loading data", error);
      //quando se trata uma promisse com catch ela vai retornar uma nova promise
      throw error;
    });
}
//criado uma variavel para substituir o localhost
const baseUrl = "http://localhost:3000";

function listEmployees() {
  return fetchJson(`${baseUrl}/employees`);
}
function listRoles() {
  return fetchJson(`${baseUrl}/roles`);
}
// modificamos nossa funçao para obter de forma independente o nosso id separado do restante dos dados
function updateEmployee(id, employee) {
  return fetchJson(`${baseUrl}/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

//função para criaçao de novos registros

function createEmployee(employee) {
  return fetchJson(`${baseUrl}/employees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

function deleteEmployee(id) {
  return fetchJson(`${baseUrl}/employees/${id}`, {
    method: "DELETE",
  });
}
