//Chiedo al fra di scegliere tra pari o dispari;
var userChoicePariDispari = prompt("Ciao fra! Pari o Dispari?");
//Voglio visualizzare un alert che mi dica "hai scelto pari" oppure "hai scelto dispari";
if (userChoicePariDispari == "Pari") { //se la risposta è "Pari"
  alert("Hai scelto Pari!");//allora mandami un alert che dica "Hai scelto Pari!"
} else if (userChoicePariDispari == "Dispari") {//se invece la risposta è "Dispari"
  alert("Hai scelto Dispari!");//allora mandami un alert che dica "Hai scelto Dispari!"
} else {//diversamente
  alert("Non ho capito fra...");//allora dì al fra che non hai capito
}
//Chiedo al fra di scegliere un numero tra 1 e 5;
var userChoiceNumber = parseInt(prompt("Scegli un numero tra 1 e 5..."));
//Voglio visualizzare un alert che mi dica "Hai scelto (numero)";
if (userChoiceNumber == "1") {//se la risposta è "1"
  alert("Hai scelto 1");//allora mandami un alert che dica 1
} else if (userChoiceNumber == "2") {//se è 2
  alert("Hai scelto 2");//allora mandami un alert che dica 2
} else if (userChoiceNumber == "3") {//se è 3
  alert("Hai scelto 3");//allora mandami un alert che dica 3
} else if (userChoiceNumber == "4") {//se è 4
  alert("Hai scelto 4");//allora mandami un alert che dica 4
} else if (userChoiceNumber == "5") {//se è 5
  alert("Hai scelto 5");//allora mandami un alert che dica 5
} else {//diversamente
  alert("Non va bene fra... devi scegliere un numero da 1 a 5!");//allora mandami un alert che dica al fra che non va bene
}
//Voglio visualizzare un alert che dica "Ora sceglierò anche io un numero"
var iaChoiseNumber = alert("Ora anche io sceglierò un numero...")
//Voglio far si che il pc scelga un numero random da 1 a 5
function getRandomArbitrary(1, 5) {
  return Math.random() * (1 - 5) + min;
}// <---Non so se funziona
