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
const numeroEstrattoVisualizzato = document.createElement("div");
numeroEstrattoVisualizzato.classList.add("numeroEstratto");

bottoneEstrazione.onclick = () => {
  const numeroEstratto = Math.ceil(Math.random() * 76);
  numeroEstrattoVisualizzato.innerText = numeroEstratto;
  tabellone.appendChild(numeroEstrattoVisualizzato);
  //   console.log(document.getElementsByClassName("numero")[numeroEstratto - 1]);

  document.getElementsByClassName("numero")[numeroEstratto - 1].classList.add("numeroEstratto");
  //   console.log(numeroEstratto);
};
