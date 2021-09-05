// function fetchJson(url) {
//   return fetch(url).then((r) => {
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

// function updateEmployee(employee) {
//   return fetchJson(`http://localhost:3000/employees/${employee.id}`, {
//     method: "PUT",
//     //precisamos de um header por que estamos passando um corpo em nossa requisiçao
//     headers: { "Content-Type": "aplication/json" },
//     // o body é o objeto employee transformado em JSON com a função JSON.strinfy
//     body: JSON.stringify(employee),
//   });
// }
// // vou retornar essa promise e minha funçao vai devover uma promise tambem
