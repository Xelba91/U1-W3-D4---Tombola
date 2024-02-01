//selezionato il tabellone
const tabellone = document.getElementById("tabellone");
//creo i div numeri
const numero = document.createElement("div");
for (i = 0; i < 76; i++) {
  const numero = document.createElement("div");
  numero.className = "numero";
  numero.id = i + 1;
  numero.innerText = i + 1;
  tabellone.appendChild(numero);
}

// function ritonaNumero() {
//   const numeroEstratto = Math.ceil(Math.random() * 77);
//   return numeroEstratto;
// }
//seleziono il bottone
const bottoneEstrazione = document.getElementById("bottoneEstrazione");
//funzione genera numeri random al click del bottone
bottoneEstrazione.onclick = () => {
  const numeroEstratto2 = Math.ceil(Math.random() * 77);
  console.log(numeroEstratto2);

  //   if (numeroEstratto2 === numero.id) {
  //     numero.classList.add("numeroEstratto");
  // il bottone attiva la funzione di creazione numero e deve ritornare un numero
  // con questo numero devo trovare il div con id corrispondente e devo applicare la classe estratto
};
// };
// const random = document.getElementById(Math.ceil(Math.random() * 77));
// console.log(Math.ceil(Math.random() * 77));
