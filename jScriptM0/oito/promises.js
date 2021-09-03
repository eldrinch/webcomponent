function solution1() {
  let employeesPromise = fetch("http://localhost:3000/employees");

  employeesPromise.then((r1) => {
    r1.json().then((arrEmployes) => {
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
// solution2();

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
function solution3() {
  let empPromise = fetchJson("http://localhost:3000/employees");
  let rolesPromise = fetchJson("http://localhost:3000/roles");
  Promise.all([empPromise, rolesPromise]).then((result) => {
    let arrEmployes = result[0];
    let roles = result[1];
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  });
}
// solution3();

//simpli solution3
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
