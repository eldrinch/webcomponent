function Retangulo(altura,largura){
  this.altura = altura;
  this.largura = largura;
  // this.area = functon(){
  // return this.altura * this.largura
  // }
  this.area = calculaArea;
}

function calculaArea(){
  return this.altura * this.largura
}

//operador instanceof; para ver se um objeto foi instanciado ou nao, para poder chamar a funcao tem que se referenciar o objeto com alvo da chamada, this depende de como foi chamada e nao como ela foi definida. Para poder fixar o valor de this na funcao o objeto alvo, crio uma variavel que chama a funcao var fn2 =calcularArea.bind(r1) o valor de this que vai ser fixado na função 

//var r1 = new Retangulo(4,7) => r1.area() ==> 28