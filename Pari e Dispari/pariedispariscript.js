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
var numero = getRandomArbitrary(5, 1);
alert("Ho scelto il numero " + numero);
