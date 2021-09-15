// Simplificando a solução 2
function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

function simpliSolution2() {
  fetchJson("http://localhost:3000/employees").then((arrEmployes) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
      let table = renderTable(arrEmployes, roles);
      document.getElementById("app").innerHTML = table;
    });
  });
}
// simpliSolution2();

//requisiçoes feitas em paralelo, funçao Promise.all
//simpli solution3
function simplisolution3() {
  Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")]).then(([arrEmployes, roles]) => {
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  });
}
// simplisolution3();

//vem da solution2 com assync await, quando se tem uma chamada que retorna uma promise o "await" vai retornar o resultado ja da promise,  tranforma uma chamada asincrona em um codigo que para todos os efetos parece uma chamada sincrona, podendo guardar ja a resposta numa variavel, na chamada "await" no precisa pasar mas os callbacks. O await sempre vai esperar a resposta da funçao para continuar, tem o problema do carregamento sequencial
async function solution4() {
  let arrEmployes = await fetchJson("http://localhost:3000/employees");
  let roles = await fetchJson("http://localhost:3000/roles");
  let table = renderTable(arrEmployes, roles);
  document.getElementById("app").innerHTML = table;
}

//solution4();

//vam da solution3 o "Promise.all" que retorna outra promise que aguarda o resultado podemo aplicar um await nela, usamos desestruturando em variaveis

async function solution5() {
  let [arrEmployes, roles] = await Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")]);
  let table = renderTable(arrEmployes, roles);
  document.getElementById("app").innerHTML = table;
}
solution5();

function renderTable(arrEmployes, roles) {
  let rows = arrEmployes.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id} </td><td>${employee.name}</td><td>${role.name} </td></tr>`;
  });

  return `<table>${rows.join("")}</table>`;
}
