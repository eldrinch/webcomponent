// let employees = [];
// let roles = [];
// const listEl = document.querySelector("ul");
// const formEl = document.querySelector("form");

// async function init() {
//   try {
//     [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
//     //let [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
//     // let table = renderTable();
//     renderData();
//     //let table = renderTable(employees, roles);
//     //document.getElementById("app").innerHTML = table;
//   } catch (erro) {
//     showError("Error loading data", erro);
//   }
// }
// init();

// //function renderTable() {
// function renderData() {
//   // // let rows = employees.map((employee) => {
//   // let items = employees.map((employee) => {
//   //   let role = roles.find((role) => role.id == employee.role_id);
//   //   // return `<tr><td>${employee.id}</td><td>${employee.name}</td><td>${role.name}</td></tr>`;
//   //   return `<li>${employee.name}<br>${role.name}</li>`;
//   // });
//   // listEl.innerHTML = items.join("");
//   // //return `<table>${rows.join("")}  </table>`;

//   for (const employee of employees) {
//     let role = roles.find((role) => role.id == employee.role_id);
//     const li = document.createElement("li");
//     const divName = document.createElement("div");
//     divName.textContent = employee.name;
//     const divRole = document.createElement("div");
//     divRole.textContent = role.name;
//     li.appendChild(divName);
//     li.appendChild(divRole);
//     listEl.appendChild(li);
//   }
// }

// function showError(error) {
//   // document.getElementById("app").innerHTML = "Erro ao carregar dados";
//   document.getElementById("errors").textContent = "Erro ao carregar dados";
//   console.log(error);
// }
