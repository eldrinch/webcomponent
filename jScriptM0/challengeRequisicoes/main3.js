// let employees = [];
// let roles = [];
// let selectedItem;
// const listEl = document.querySelector("ul");
// const formEl = document.querySelector("form");
// const bdelete = document.getElementById("bdelete");
// const bcancel = document.getElementById("bcancel");
// const bsubmit = document.getElementById("bsubmit");

// async function init() {
//   try {
//     [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
//     renderRoles();
//     renderData();
//     clearSelecton();
//     bcancel.addEventListener("click", clearSelecton);
//     //vamos a criar o submit do formulario, usando um listener e criando uma funcao onSubmit
//     formEl.addEventListener("submit", onSubmit);
//   } catch (error) {
//     showError("Error loading data", erro);
//   }
// }
// init();
// function selectItem(employee, li) {
//   clearSelecton();
//   selectedItem = employee;
//   li.classList.add("selected");
//   formEl.name.value = employee.name;
//   formEl.salary.valueAsNumber = employee.salary;
//   formEl.role_id.value = employee.role_id;
//   bdelete.style.display = "inline";
//   bcancel.style.display = "inline";
//   bsubmit.textContent = "Update";
// }
// function clearSelecton() {
//   clearError();
//   selectedItem = undefined;
//   const li = listEl.querySelector(".selected");
//   if (li) {
//     li.classList.remove("selected");
//   }
//   formEl.name.value = "";
//   formEl.salary.value = "";
//   formEl.role_id.value = "";
//   bdelete.style.display = "none";
//   bcancel.style.display = "none";
//   bsubmit.textContent = "Create";
// }

// async function onSubmit(evt) {
//   //precisamos cancelar o comportamento padrão do submit que iria a recarregar a pag fazendo POSt
//   evt.preventDefault();
//   //obter os dados do employee, dados que vao ser enviado na requisiçao UPDATE
//   const employeeData = {
//     //qual seria o id o id vai ser do elemento selecionado que é nossa variavel selectedItem
//     //modificamos o http para obter o id fora dos demais elementos
//     name: formEl.name.value,
//     salary: formEl.salary.valueAsNumber,
//     role_id: +formEl.role_id.value,
//   };
//   //evitando criar registros com campos vacios
//   if (!employeeData.name || !employeeData.salary || !employeeData.role_id) {
//     showError("You must fill all form fields");
//   } else {
//     //add uma logica para poder inserir novos registros, se vemos que esta com algo selecionado
//     if (selectedItem) {
//       //fez a atualização e resposta backend
//       const updatedItem = await updateEmployee(selectedItem.id, employeeData);
//       //atualizando o frontend renderizando minha lista inteira descubro o indice do elemento que estaba selecionado
//       const i = employees.indexOf(selectedItem);
//       //agpra posso trocar o objeto updateItem
//       employees[i] = updatedItem;
//       // Renderiza os elementos todos novamente
//       renderData();
//       //quando selecionado perde a classe css corrigindo e chamar a função depois de dar o renderdata
//       selectedItem(updatedItem, listEl.children[i]);
//     } else {
//       //se nao add um novo registro
//       const createdItem = await createEmployee(employeeData);
//       employees.push(createdItem);
//       renderData();
//       selectItem(createdItem, listEl.lastChild);
//       //funçao para navegador fique visivel
//       listEl.lastChild.scrollIntoView;
//     }
//   }
// }

// function renderData() {
//   //antes de ele començar apaga a lista
//   listEl.innerHTML = "";
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
//     //aqui passo o elemnto do li
//     li.addEventListener("click", () => selectItem(employee, li));
//   }
// }

// function renderRoles() {
//   for (const role of roles) {
//     const option = document.createElement("option");
//     option.textContent = role.name;
//     option.value = role.id;
//     formEl.role_id.appendChild(option);
//   }
// }

// function showError(message, error) {
//   //document.getElementById("errors").textContent = "Erro ao carregar dados";
//   document.getElementById("errors").textContent = message;
//   if (error) {
//     console.error(error);
//   }

//   console.log(error);
// }

// function clearError() {
//   document.getElementById("errors").textContent = "";
// }
