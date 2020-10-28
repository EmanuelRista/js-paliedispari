//Chiedo al fra di scegliere tra pari o dispari;
var userChoicePariDispari = prompt("Ciao fra! Pari o Dispari?");
//Validazione: Se il fra scrive qualcosa di diverso da Pari o Dispari deve comprarire un alert che gli dica di ritentare
while (userChoicePariDispari != "Pari" && userChoicePariDispari != "Dispari") {
   userChoicePariDispari = prompt("No fra! Devi scegliere Pari o Dispari!");
}
//Se tutto invece prosegue liscio dare conferma:
alert("Hai scelto " + userChoicePariDispari)

//Chiedo al fra di scegliere un numero tra 1 e 5;
var userChoiceNumber = parseInt(prompt("Scegli un numero tra 1 e 5..."));
//Voglio visualizzare un alert che mi dica "Hai scelto (numero)";

//Validazione: Se il fra scrive un numero non compreso tra 1 e 5 non va bene, ritentare;
while (userChoiceNumber < 1 || userChoiceNumber > 5) {
  userChoiceNumber = parseInt(prompt("Non va bene fra, puoi scegliere solo tra 1 e 5..."));
}

//Se tutto invece prosegue liscio dare conferma:
alert("Hai scelto " + userChoiceNumber);

//Voglio visualizzare un alert che dica "Ora sceglierò anche io un numero"
alert("Ora anche io sceglierò un numero...");

//Voglio far si che il pc scelga un numero random da 1 a 5 <--- si è rivelato necessario Math.round perchè altrimenti sceglieva un numero decimale
function getRandomArbitrary(max, min) {
  return Math.round(Math.random() * (max - min) + min);
}

//Voglio far si che ci sia una conferma richiamando il numero scelto dal pc in un alert
var iaChoiceNumber = getRandomArbitrary(5, 1);
alert("Ho scelto il numero " + iaChoiceNumber);

//Voglio sommare il numero scelto dall'utente con quello scelto dal pc
var sumResult = (userChoiceNumber + iaChoiceNumber);

//Voglio far si che appaia un alert in cui viene illustrata la somma tra il numero scelto dall'utente e quello del pc
alert("Il tuo numero " + userChoiceNumber + " + " + "il mio numero " + iaChoiceNumber + " = "  + sumResult);

//Se sumResult è pari = alert "la somma dei due numeri è pari", diversamente "la somma dei due numeri è dispari"
if (sumResult % 2 == 0) {
  alert("La somma dei due numeri è pari!");
} else {
  alert("La somma dei due numeri è dispari!");
}

//creo una funzione somma è pari = true/false
function isEven(sumResult) {
	if (sumResult % 2 == 0)
		return true;
	else
		return false;
}

//Se il fra ha scelto Pari e la somma è pari = "Complimenti hai vinto", se ha scelto Dispari e la somma è dispari "Complimenti hai vinto", diversamente "Hai perso"
if (userChoicePariDispari == "Pari" && isEven(sumResult) == true)  {
  alert("Complimenti fra! Hai vinto!");
} else if (userChoicePariDispari == "Dispari" && isEven(sumResult) == false) {
  alert("Complimenti fra! Hai vinto!");
} else {
  alert("Hai perso fra! Sei scarso...");
}
