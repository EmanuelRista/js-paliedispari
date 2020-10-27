function strReverse(inputString) {
  var arrChars = inputString.split(""); //trasforma in array
  arrChars.reverse(); //invertire l'ordine degli elementi dell'array
  return arChars.join("");//riunisce gli elementi dell'array che sono già stati invertiti. NB =("")=stringa vuota, altrimenti () unirebbe gli elementi con la virgola
}
function isPalindroma(inputString) { //funzione di check se è palindroma
  var palindroma = false; //di default non è palindroma
  if(inputString == strReverse(inputString)){//se (stringa in input) = (stringa in input invertita tramite la funzione strReverse) allora è true
    palindroma = true;
  }
  return palindroma;
}
//test
console.log("pirla", isPalindroma("pirla")); //dovrebbe dare false
console.log("anna", isPalindroma("anna")); //dovrebbe dare true

// perchè non funziona? HELP Francesco & Sainato --> Ticket soon
