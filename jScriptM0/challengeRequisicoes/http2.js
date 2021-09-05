//tenho que add o objeto option que fico fora antes de inserir o id
function fetchJson(url, options) {
  return fetch(url, options).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw newError(r.statusText);
    }
  });
}

function listEmployees() {
  return fetchJson("http://localhost:3000/employees");
}
function listRoles() {
  return fetchJson("http://localhost:3000/roles");
}
// modificamos nossa funçao para obter de forma independente o nosso id separado do restante dos dados
function updateEmployee(id, employee) {
  return fetchJson(`http://localhost:3000/employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(employee),
  });
}
