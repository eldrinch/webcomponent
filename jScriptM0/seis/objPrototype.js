function Retangulo(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = function () {
    return this.altura * this.largura;
  };
}

var r1 = new.Retangulo(3,4);
var r1 = new.Retangulo(7,2);

function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}
//Quando se define a area no prototype da funcao, prototype dos objetos instanciados com o construtor, colocando a propiedade area no prototype e todas as instancia do retanguloV2 apontam para o mesmo objeto prototype e essa função esta armazenada nele e vai ser a mesma instancia.
RetanguloV2.prototype.area = function (){
  return this.altura * this.largura
}

var r3 = new.RetanguloV2(3,4);
var r4 = new.RetanguloV2(7,2);
