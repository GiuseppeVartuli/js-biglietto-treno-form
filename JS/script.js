/* Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per la seconda milestone.
Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
:saetta: NOTA BENE:
Seguite le milestone in ordine, non lavorate alla milestone due se prima non avete fatto funzionare la milestone 1!
Mi raccomando altrimenti sará tutto piú complicato. Procedete in ordine. */
console.log("ciao");

// - Chiedere i km da percorrere

// - Chiedere età del passeggero

// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)

// - Va applicato uno sconto del 20% per i minorenni

// - Va applicato uno sconto del 40% per gli over 65

const generateElement = document.getElementById("generate");
const ageElement = document.getElementById("age");
const kmElement = document.getElementById("km");
const userEL = document.getElementById("user");
const card_nameEL = document.getElementById("card_name");
const offer_cardEl = document.getElementById("offer_Card");
const ticket_cardEl = document.getElementById("ticket_card");

generateElement.addEventListener("click", function () {
  console.log(ageElement.value, kmElement.value);
  const age = ageElement.value;
  const km = kmElement.value;

  let discount = 0;
  const price = km * 0.21;

  if (age == "minor") {
    discount = (price * 20) / 100;
  } else if (age == "senior") {
    discount = (price * 40) / 100;
  } else {
    discount = 0;
  }
  console.log(discount);
  let discounted_price = price - discount;

  ticket_cardEl.innerHTML = discounted_price;
  console.log(discounted_price);
  card_nameEL.innerHTML = `Il passeggero è: ${user.value}`;

  document.getElementById("coach_card").innerHTML = Math.floor(
    Math.random() * 10
  );
  document.getElementById("offer_card").innerHTML = `${age}`;
  document.getElementById("cp_code").innerHTML = Math.floor(
    Math.random() * 10000
  );
});
