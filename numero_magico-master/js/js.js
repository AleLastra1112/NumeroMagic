let magic_n = Math.floor(Math.random() * 1000 + 1);
let times = 0;

function magic_number() {
  console.log(magic_n);

  var num = document.querySelector("#number").value;

  if (num != "") {
    if (num < magic_n) {
      times++;
      if (times == 10) {
        document.querySelector("p").innerHTML =
          "Perdiste :/ el número era " + magic_n + ". Intenta de nuevo!!";
        times = 0;
        magic_n = Math.floor(Math.random() * 1000 + 1);
      } else {
        document.querySelector("p").innerHTML =
          "El número mágico es mayor que este número. Intentos " +
          times +
          " de 10";
      }
    } else if (num > magic_n) {
      if (times == 10) {
        document.querySelector("p").innerHTML =
          "Perdiste :/ el número era " + magic_n + ". Intenta de nuevo!!";
        times = 0;
        magic_n = Math.floor(Math.random() * 1000 + 1);
      } else {
        document.querySelector("p").innerHTML =
          "El número mágico es menor que este número. Intentos " +
          times +
          " de 10";
      }
    } else {
      document.querySelector("p").innerHTML = "Felicitaciones!!! Has Ganado.";
    }
  } else {
    document.querySelector("p").innerHTML = "Inserta un número.";
  }
}

function reset() {
  document.querySelector("p").innerHTML =
    "Has reiniciado el juego. Prueba tu suerte y adivina el número.";
  times = 0;
  magic_n = Math.floor(Math.random() * 1000 + 1);
}
