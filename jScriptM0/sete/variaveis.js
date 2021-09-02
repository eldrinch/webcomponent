// 1. Devlara variaveis com let e const

let a = 1;
const b = 1;

a = 2;
// b = 2;

function teste() {
  for (var i = 0; i < 5; i++) {
    //alguma coisa
  }

  for (let j = 0; j < 5; j++) {
    //alguma coisa
    console.log("j: " + j);
  }
  console.log("i: " + i);
  // console.log("j: " + j);
}

teste();

// 2.Usar atribuiçao via desestruturação

let primos = [2, 3, 5, 7, 11, 13];

let curso = {
  nome: "Bootcamp Front End",
  modulos: 4,
  presencial: false,
  turma: 1,
};

// let [p1, p2, ...resto] = primos;

// let { nome: outroCurso, turma, ...outros } = curso;

// function imprime({ nome }) {
//   console.log(nome);
// }

//SPREAD
let primos2 = [...primos, 17];
let primos3 = [1, ...primos, 17];

let curso2 = {
  ...curso,
  descricao: "bala de canhon",
  ativo: true,
};

let curso3 = {
  ...curso,
};

// 4. template literals

let c = 2,
  d = 3;
let soma = c + d;

console.log(c + " + " + d + " = " + soma);
console.log(`${a} + ${b} = ${soma} `);
