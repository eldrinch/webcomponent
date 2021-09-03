let employeesPromise = fetch("http://localhost:3000/employees");

// a funçao 'then' recebe outra função como parametro
console.log("log1");
employeesPromise.then((resp) => {
  resp.json().then((arrEmployes) => {
    let table = renderTable(arrEmployes);
    document.getElementById("app").innerHTML = table;
    // console.log("log2");
  });
  // console.log("log3");
});

// console.log("log4");return  log1 ,4, 3, 2

function renderTable(arrEmployes) {
  let rows = arrEmployes.map((employee) => {
    return `<tr><td>${employee.id} </td><td>${employee.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
//funcao de array join = junta todos os elementos de um array de strings em uma unica de string, passando um separador
