/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Chau prettier!!");

  console.log("Escoge una carta aleatoria");
  function generarcarta() {

  
  const palos =["♦", "♥", "♠", "♣"];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ]
  const suerte = palos[Math.floor(Math.random() * palos.length)];
  const numero = valores[Math.floor(Math.random() * valores.length)];
  let elementoConElValorCarta = document.querySelector(".valor");
  elementoConElValorCarta.innerHTML = numero;
  let elementosQueTienenElPalo = document.querySelectorAll(".palo");
  for (const div of elementosQueTienenElPalo) {
  div.innerHTML = suerte;
  
  if (suerte=="♥" || suerte=="♦") {
    div.style.color= "red";
  } else if (suerte=="♣" || suerte=="♠"){
    div.style.color= "black";
  }
}
}
generarcarta()
document.querySelector("#click").addEventListener("click",() =>{
  generarcarta()
})
};

