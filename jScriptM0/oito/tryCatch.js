function fetchJson(url) {
  return fetch(url).then((r) => {
    //return r.json();
    //A promise da API fecth so vai falhar sim eu tiver um erro de conexão se a reposta do status for diferente de 200 ela nao falha, tem que se forçar a falhar a promise lançando um erro dentro do callback "then" fla ok se foi 200 ou nao se ok retorna o json senão retorna um erro pode lançar usando a palabra "throw" o erro pode ser um objeto qualquer valor, string.
    if (r.ok) {
      return r.json();
    } else {
      //console.log(r);
      //dentro do Response usamos o status text, vou lançar um objeto tipo Error que existe no js pasar como mensagem o status text
      throw new Error(r.statusText);
    }
  });
}
//na funcao "then" ele é chamado apenas quando ha sucesso na operaçao, se houver erro precisamos registrar o erro com a funçao catch que tem mais detalhes do erro
function solution2() {
  fetchJson("http://localhost:3000/employees")
    .then((arrEmployes) => {
      fetchJson("http://localhost:3000/roles")
        .then((roles) => {
          let table = renderTable(arrEmployes, roles);
          document.getElementById("app").innerHTML = table;
        })
        //temos duas chamadas precisamos de dois registros de erro, desvantagem por ter uma aninhamento de "then"
        .catch((error) => {
          showError();
        });
    })
    //aqui a forma simplificada do catch
    .catch(showError);
}
//solution2();

// usando TRY CATCH com uma promise
function trySolution2() {
  try {
    fetchJson("http://localhost:3000/employees").then((arrEmployes) => {
      fetchJson("http://localhost:3000/roles").then((roles) => {
        let table = renderTable(arrEmployes, roles);
        document.getElementById("app").innerHTML = table;
      });
    });
  } catch (error) {
    //nao acontece nada, o erro acontece dentro da biblioteca fecth e ele é propagado para a promise o codigo esta sendo executado numa outra funçao "fetchJson" e no na funçao "trySolution2" isso no vai ser capturado pelo TRY Catch por que ele so funciona com codigo sincrono
  }
}
//trySolution2();

//requisiçoes feitas em paralelo, funçao Promise.all
//simpli solution3
function solution3() {
  Promise.all([fetchJson("http://localhost:3000/employees"), fetchJson("http://localhost:3000/roles")])
    .then(([arrEmployes, roles]) => {
      let table = renderTable(arrEmployes, roles);
      document.getElementById("app").innerHTML = table;
    })
    //}, showError); Aqui chama dois callbacks o primeiro e de sucesso o segundo é o de showError
    .catch(showError)
    .finally(
      //finally recebe aqui um callback
      () => {
        console.log("Carregou");
      }
    );
}
solution3();

//O TRY um bloco e CATCH que vai capturar um erro que aconteceu naquele bloco, essas estrutura é usada em codigo sincrono, tradicional  mas quando se usa o "await " ela pasa a funcionar
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
//solution4();

async function solution5() {
  try {
    let [arrEmployes, roles] = await Promise.all([fetchJson("http://localhost:3000/employes"), fetchJson("http://localhost:3000/roles")]);
    let table = renderTable(arrEmployes, roles);
    document.getElementById("app").innerHTML = table;
  } catch (erro) {
    showError(erro);
  } finally {
    //executada o codigo executa com sucesso ou quando da erro, para fazer algum codigo de finalização
    console.log("Carregou");
  }
}
//solution5();

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
