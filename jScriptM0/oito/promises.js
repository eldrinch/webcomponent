function solution1() {
  //para renderizar nossa tabela precisamos de dois paramentro employees e roles vamos chamar os dois
  let employeesPromise = fetch("http://localhost:3000/employees");

  employeesPromise.then((r1) => {
    r1.json().then((arrEmployes) => {
      //aqui faço a chamada de da URL com o endPoint de roles

      let rolesPromise = fetch("http://localhost:3000/roles");

      rolesPromise.then((r2) => {
        r2.json().then((roles) => {
          let table = renderTable(arrEmployes, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}
// solution1();

function solution2() {
  fetch("http://localhost:3000/employees")
    //eliminamos a variavel aplicando diretamente o callback ao fetch
    //A função "then" oseja nosso callback ele retorna um valor, nossa função "then" ele retornna uma outra promise.
    //fetch me retorna uma promise e o resultado dessa chamda é uma outra promise  ela encapsula el valor retornado dentro do chamado callback do "then", si retonnar o valor dentro do callback, minha chamada ao then vai ser o resultado da chamada
    .then((r1) => {
      return r1.json();
    })
    .then((arrEmployes) => {
      fetch("http://localhost:3000/roles")
        .then((r2) => {
          return r2.json();
        })
        .then((roles) => {
          let table = renderTable(arrEmployes, roles);
          document.getElementById("app").innerHTML = table;
        });
    });
}
// cadeamento de promises
//solution2();

// Simplificando a solução 2
//fazer a função auxiliar que faz o fech que ja transforma a resposta em JSON que muda o endPoint
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
//simpliSolution2();

//requisiçoes feitas em paralelo, funçao Promise.all para fazer o paralelismo, fazer as requisiçoes separadamente, depois uso variaveis
function solution3() {
  let empPromise = fetchJson("http://localhost:3000/employees");
  let rolesPromise = fetchJson("http://localhost:3000/roles");
  //Promise.all recebe um array on de cada item e uma promise e retornar outra promise, vai retornar o resultado é uma array com o resultado de cada promise
  Promise.all([empPromise, rolesPromise]).then((result) => {
    let arrEmployes = result[0];
    let roles = result[1];
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  });
}
//solution3();

//simpli solution3
//fazendo uma atribuição com desestruturação
function simplisolution3() {
  Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")]).then(([arrEmployes, roles]) => {
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  });
}
simplisolution3();

function renderTable(arrEmployes, roles) {
  let rows = arrEmployes.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id} </td><td>${employee.name}</td><td>${role.name} </td></tr>`;
  });

  return `<table>${rows.join("")}</table>`;
}
