const relogio = document.getElementById("relogio");
const btb = document.getElementById("btn");
let interval;

function inicia() {
  interval = setInterval(() => {
    relogio.textContent = formataHora(new Date());
    // const date = new Date();
    // relogio.textContent = date.toString();
    relogio.textContent = formataHora(new Date());
  }, 1000);

  btn.textContent = "Para Relogio";
}

inicia();

function para() {
  clearInterval(interval);
  interval = undefined;
  btn.textContent = "Inicia Relogio";
}

function iniciaOuPara() {
  if (interval) {
    para();
  } else {
    inicia();
  }
}

function formataHora(date) {
  const h = date.getHours().toString().padStart(2, "0"),
    m = date.getMinutes().toString().padStart(2, "0"),
    s = date.getSeconds().toString().padStart(2, "0");
  return `${h} : ${m} : ${s}`;
}
