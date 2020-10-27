var parola = prompt('Inserisci una parola:'); //Il campo per inserire la parola

function reverseString(string) {

    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var stringReverse = reverseArray.join("");
    return stringReverse;
} //questa funzione 1) separa le lettere della parola inserendole in un array
//2) inverte l'ordine delle lettere che sono ora elementi di un array
//3) riunisce le lettere in una parola. Alla fine le lettere della parola risultano invertite rispetto all'originale

if (parola == reverseString(parola)){ //se la parola in input = parola con lettere invertite con la funzione reverseString
  alert('La parola che hai inserito è palindroma!'); //allora fai apparire un alert che dice "è palindroma"
} else { //per tutti gli altri casi
  alert('La parola che hai inserito non è palindroma!');//fai apparire un alert che dice "non è palindroma"
}
