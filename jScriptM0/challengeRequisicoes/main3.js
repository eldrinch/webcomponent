let employees = [];
let roles = [];
let selectedItem;
const listEl = document.querySelector("ul");
const formEl = document.querySelector("form");
const bdelete = document.getElementById("bdelete");
const bcancel = document.getElementById("bcancel");
const bsubmit = document.getElementById("bsubmit");

async function init() {
  try {
    [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    renderRoles();
    renderData();
    clearSelecton();
    bcancel.addEventListener("click", clearSelecton);
    //vamos a criar o submit do formulario, usando um listener e criando uma funcao onSubmit
    formEl.addEventListener("submit", onSubmit);
  } catch (erro) {
    showError("Error loading data", erro);
  }
}
init();
function selectItem(employee, li) {
  clearSelecton();
  selectedItem = employee;
  li.classList.add("selected");
  formEl.name.value = employee.name;
  formEl.salary.valueAsNumber = employee.salary;
  formEl.role_id.value = employee.role_id;
  bdelete.style.display = "inline";
  bcancel.style.display = "inline";
}
function clearSelecton() {
  selectedItem = undefined;
  const li = listEl.querySelector(".selected");
  if (li) {
    li.classList.remove("selected");
  }
  formEl.name.value = "";
  formEl.salary.value = "";
  formEl.role_id.value = "";
  bdelete.style.display = "none";
  bcancel.style.display = "none";
}

function onSubmit(evt) {
  //precisamos cancelar o comportamento padrão do submit que iria a recarregar a pag fazendo POSt
  evt.preventDefault();
  //obter os dados do employee, dados que vao ser enviado na requisiçao UPDATE
  const employeeData = {
    //qual seria o id o id vai ser do elemento selecionado que é nossa variavel selectedItem
    //modificamos o http para obter o id fora dos demais elementos
    name: formEl.name.value,
    salary: formEl.salary.valueAsNumber,
    role_id: +formEl.role_id.value,
  };
  //fez a atualização e resposta backend
  const updatedItem = updateEmployee(selectedItem.id, employeeData);
  //atualizando o frontend renderizando minha lista inteira descubro o indice do elemento que estaba selecionado
  const i = employees.indexOf(selectedItem);
  //agpra posso trocar o objeto updateItem
  employees[i] = updatedItem;
  // Renderiza os elementos todos novamente
  renderData();
}

function renderData() {
  //antes de ele començar apaga a lista
  listEl.innerHTML = "";
  for (const employee of employees) {
    let role = roles.find((role) => role.id == employee.role_id);
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = employee.name;
    const divRole = document.createElement("div");
    divRole.textContent = role.name;
    li.appendChild(divName);
    li.appendChild(divRole);
    listEl.appendChild(li);

    li.addEventListener("click", () => selectItem(employee, li)); //aqui passo o elemnto do li
  }
}

function renderRoles() {
  for (const role of roles) {
    const option = document.createElement("option");
    option.textContent = role.name;
    option.value = role.id;
    formEl.role_id.appendChild(option);
  }
}

function showError(error) {
  document.getElementById("errors").textContent = "Erro ao carregar dados";
  console.log(error);
}
