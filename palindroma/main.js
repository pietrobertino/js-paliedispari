// Chiedo all'utente una parola
let user_word = prompt("Inserire una parola");

//Per sicurezza rendo la parola tutta minuscola
user_word = user_word.toLowerCase();

//Creo la funzione per verificare se una parola è palindroma
function isPalindrome (word) {
    //creo una variabile per rovesciare la parola di partenza
    let reverse_word = "";

    //inverto la parola
    for (i = word.length-1; i>=0; i--) {
        let char = word[i];
        reverse_word += char;
    }

    //SE la parola di partenza e quella invertita coincidono
    if (word === reverse_word) {
        //la parola è un palindromo
        return true;
    }
    //ALTRIMENTI
    else {
        //la parola non è un palindromo
        return false;
    }
}

if (isPalindrome(user_word)) {
    console.log("La parola inserita è un palindromo");
} else { 
    console.log("La parola inserita non è un palindromo");
    
}