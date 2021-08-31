"use strict";

palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola");
palindromo("abcddcba");
palindromo("");
palindromo("x");

function palindromo(s) {
  //implementar
  /*if (s.length <= 1) {
    console.log(s + " é palindromo");
    return;
  }*/
  for (var i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) != s.charAt(j)) {
      console.log(s + " não é um palindromo");
      return;
    }
  }
  console.log(s + " é palindromo");
}

var nomeString = "Eldrin Rafael";
for (let i = 0; i < nomeString.length; i++) {
  console.log(`A letra no indeice  ${i}  é  ${nomeString.charAt(i)} `);
}

var i = 0;
for (; i < 9; i++) {
  console.log(i);
  // more statements
}
