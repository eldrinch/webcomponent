// let employees = [];
// let roles = [];
// let selectedItem;
// const listEl = document.querySelector("ul");
// const formEl = document.querySelector("form");
// //obtendo referencia para os botoes cancel e delete
// const bdelete = document.getElementById("bdelete");
// const bcancel = document.getElementById("bcancel");
// const bsubmit = document.getElementById("bsubmit");

// async function init() {
//   try {
//     [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
//     renderRoles();
//     renderData();
//     //iniciando a tabela com o estado de botoes ocultos
//     clearSelecton();
//     //quando clicar no btn cancel
//     bcancel.addEventListener("click", clearSelecton);
//   } catch (erro) {
//     showError("Error loading data", erro);
//   }
// }
// init();
// //selecionando o elemento li e colorindo
// function selectItem(employee, li) {
//   clearSelecton();
//   selectedItem = employee;
//   li.classList.add("selected");
//   //preenchendo os campos dentro de nosso formulario, propiedade name do form
//   formEl.name.value = employee.name;
//   formEl.salary.value = employee.salary;
//   formEl.role_id.value = employee.role_id;
//   bdelete.style.display = "inline";
//   bcancel.style.display = "inline";
// }
// //limpando e deselecionando o elemento li selecionado
// function clearSelecton() {
//   selectedItem = undefined;
//   const li = listEl.querySelector(".selected");
//   if (li) {
//     li.classList.remove("selected");
//   }
//   formEl.name.value = "";
//   formEl.salary.valueAsNumber = "";
//   formEl.role_id.value = "";
//   bdelete.style.display = "none";
//   bcancel.style.display = "none";
// }

// function renderData() {
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

//     li.addEventListener("click", () => selectItem(employee, li)); //aqui passo o elemnto do li
//   }
// }

// //funçao para poder prencher e iterar gerar com os Roles
// function renderRoles() {
//   for (const role of roles) {
//     //criando o elemento option
//     const option = document.createElement("option");
//     //preenchendo o campo criado
//     option.textContent = role.name;
//     //setando o value do elemento option
//     option.value = role.id;
//     //adicionando no form o nome do campo select
//     formEl.role_id.appendChild(option);
//   }
// }

// function showError(error) {
//   document.getElementById("errors").textContent = "Erro ao carregar dados";
//   console.log(error);
// }
