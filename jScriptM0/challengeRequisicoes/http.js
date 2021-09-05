// function fetchJson(url, options) {
//   return fetch(url, options).then((r) => {
//     if (r.ok) {
//       return r.json();
//     } else {
//       throw newError(r.statusText);
//     }
//   });
// }

// function listEmployees() {
//   return fetchJson("http://localhost:3000/employees");
// }
// function listRoles() {
//   return fetchJson("http://localhost:3000/roles");
// }

// function updateEmployee(id, employee) {
//   return fetchJson(`http://localhost:3000/employees/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "aplication/json" },
//     body: JSON.stringify(employee),
//   });
// }

// function createEmployee(employee) {
//   return fetchJson(`http://localhost:3000/employees`, {
//     method: "POST",
//     headers: { "Content-Type": "aplication/json" },
//     body: JSON.stringify(employee),
//   });
// }

// //CRIAR
// fetch(`http://localhost:3000/employees`, {
//   method: "POST",
//   headers: { "Content-Type": "aplication/json" },
//   body: JSON.stringify(employee),
// });

// //ATUALIZAR
// fetch(`http://localhost:3000/employees/$[id}`, {
//   method: "PUT",
//   headers: { "Content-Type": "aplication/json" },
//   body: JSON.stringify(employee),
// });

// //EXCLUIR
// fetch(`http://localhost:3000/employees/${id}`, {
//   method: "DELETE",
// });
