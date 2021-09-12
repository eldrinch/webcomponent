// 1. for ...of permite iterarar com um iterador
// fomra mais antiga
// for (let i = 0; i, usPresidents.length; i++) {
//   usPresidents[i];
// }
//iterar com let e of um objeto que for iteravel, entrega um array
for (let item of usPresidents) {
  // console.log(item.president);
}

//2. forEach, pega uma referencia que quer iterar func que recebe uma outra func, composiçao de funçoes menores, vai receber uma funçao vai se declarar um arrow function e esa funçao vai receber o item atual da iteraçao e o indice
usPresidents.forEach((item, index) => {
  // console.log(`${index}: ${item.president}`);
});

//3. map vai criar um array a partir de um array de objetos "usPresidents", função map recebe outra funçao como parametro, nessa outra funçao o parametro recebido e um item e devemos retornar um novo valor substituido que vai ser subtituido pelo item do array, assim reducimos um objeto com varios campos apenas um array com elemento por exemplo array de nomes
let names = usPresidents.map((item) => item.president + " " + item.took_office);

//4.filter filtrar elementos do array, declaro uma variavel, filter recebe outra func como parametro, item da iteraçao atual se retorna true um novo array filtrado
let republicans = usPresidents.filter((item) => item.party == "Republican").map((item) => item.president);

//5. find encontrar o primer elemento em base em algum criterio, guardado em uma variavel, acha o primeiro criterio de um array
let p1 = usPresidents.find((item) => item.party == "Democratic");

//6. sort funçao de ordenação, pasa uma funçao como parametro uma de comparaçao, - =  ou = 0, qual que é a ordem relativa entre eles, ela no cria um novo array ele ordena o array
usPresidents.sort((i1, i2) => {
  if (i1.president < i2.president) {
    return -1; //indica que ele é menor
  } else if (i1.president > i2.president) {
    return 1;
  } else {
    return 0;
  }
});
