//chamada assincrona retorna um objeto promisse resposta futura
let employeesPromise = fetch("http://localhost:3000/employees");

// a funçao 'then' recebe outra função como parametro
console.log("log1");
//uso a promisse juntamente com a funçao "then" recebe otra função como parametro nessa outra funçao receber a minha requisiçao  HTTP que é um objeto que vai representar a resposta
employeesPromise.then((resp) => {
  //esa resposta que é uma requisiçao tenho que tratar el por ser json tenho que transformar ela em um objeto do JS, por meio do metodo "json"  que converte o corpo da resposta em um objeto JSON o problemas que o objeto me retorna mais um vez uma promise asincrona por isso tenho que usar mais una vez a funçao "then" e passar um callback, ai nesse callback vou ter meu array
  resp.json().then((arrEmployes) => {
    //chama a função rendertable e coloco ele dentro do elemento "app" do HTML mudando a propiedade "innerHTML" e jogar a tabela
    let table = renderTable(arrEmployes);
    document.getElementById("app").innerHTML = table;
    // console.log("log2");
  });
  // console.log("log3");
});

// console.log("log4");return  log1 ,4, 3, 2

//crio uma funçao para tratar o array dos elementos
function renderTable(arrEmployes) {
  let rows = arrEmployes.map((employee) => {
    //usando um template string
    return `<tr><td>${employee.id}</td><td>${employee.name}</td></tr>`;
  });
  return `<table>${rows.join(" ")}</table>`;
}
//funcao de array join precisa de um a separador senao gera virgola, o "join" junta todos os elementos de um array de strings em uma unica string, passando um separador
