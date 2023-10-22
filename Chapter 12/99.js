const regex = /big/g            // /... represents the word that we want to change and then /g means change that word globally
const string="It is very big big big big."
console.log(string.replace("big","small"))          // it only changes the first big word with small not all
console.log(string.replace(regex,"small"))          // it changes all big word into small
