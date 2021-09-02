function soma(a, b) {
  return a + b;
}

//ARROW
var soma2 = (a, b) => a + b;

function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

//ARROW

function Retangulo2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = () => this.altura * this.largura;
}
//Isso aqui não funciona
//Retangulo2.prototype.area = () => this.altura * this.largura;

var r1 = new Retangulo2(5, 6);

var imprimeMensagem = (m) => console.log(m);
var imprimeMensagem = () => console.log("teste");
