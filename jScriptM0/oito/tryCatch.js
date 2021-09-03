// Simplificando a solução 2
function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      // console.log(r);
      throw new Error(r.statusText);
    }
  });
}

function simpliSolution2() {
  fetchJson("http://localhost:3000/employes")
    .then((arrEmployes) => {
      fetchJson("http://localhost:3000/roles")
        .then((roles) => {
          let table = renderTable(arrEmployes, roles);
          document.getElementById("app").innerHTML = table;
        })
        .catch((error) => {
          showError();
        });
    })
    .catch(showError);
}

// function simpliSolution2() {
//   try {
//     fetchJson("http://localhost:3000/employees").then((arrEmployes) => {
//       fetchJson("http://localhost:3000/roles").then((roles) => {
//         let table = renderTable(arrEmployes, roles);
//         document.getElementById("app").innerHTML = table;
//       });
//     });
//   } catch (error) {
//     //
//   }
// }

//O TRY CATCH bno codigo que é baseado em promise, ele não vai ser chamado, o erro acontece dentro de outra funçao internamente dentro da biblioteca fecth, ai e propagado para a promise, o segungo codigo esta sendo executado em outra funçao, o try catch so funciona com codigo sincrono. so se usa no awawit quando se esta aguardando pelo resultado da promise.

// simpliSolution2();

//requisiçoes feitas em paralelo, funçao Promise.all
//simpli solution3
function simplisolution3() {
  Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")])
    .then(([arrEmployes, roles]) => {
      let table = renderTable(arrEmployes, roles);
      document.getElementById("app").innerHTML = table;
    })
    .catch(showError)
    //}, showError); Aqui chama dois callbacks o primeiro e de sucesso o segundo é o de showError
    .finally(() => {
      console.log("Carregou");
    });
}
simplisolution3();

//vem da solution2
async function solution4() {
  try {
    let arrEmployes = await fetchJson("http://localhost:3000/employees");
    let roles = await fetchJson("http://localhost:3000/roles");
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  }
}
// solution4();

//vam da solution3

async function simplisolution5() {
  try {
    let [arrEmployes, roles] = await Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")]);
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  } finally {
    console.log("Carregou");
  }
}
// simplisolution5();

function renderTable(arrEmployes, roles) {
  let rows = arrEmployes.map((employee) => {
    let role = roles.find((role) => role.id == employee.role_id);
    return `<tr><td>${employee.id} </td><td>${employee.name}</td><td>${role.name} </td></tr>`;
  });

  return `<table>${rows.join("")}</table>`;
}

// function showError(arrEmployes, roles) {
//   document.getElementById("app").innerHTML = "Error ao carregar dados";
// }

function showError(error) {
  document.getElementById("app").innerHTML = "Error ao carregar dados";
  console.error();
}
