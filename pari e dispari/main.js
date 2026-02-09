// Chiedo all'utente di scegliere tra pari e dispari
let user_choice = prompt("Scegliere tra pari e dispari (digitare 'pari' o 'dispari')");

//Per sicurezza rendo la parola digitata tutta minuscola
user_choice = user_choice.toLowerCase();

//Chiedo all'utente di inserire un numero da 1 a 5
const user_number = Number(prompt("Inserire un numero da 1 a 5"));

//Definisco la funzione per generare un numero da 1 a 5
function getNumber1to5() {
    numb = Math.floor(Math.random() * 5) + 1;
    return numb;
}

//Genero un numero da uno a 5
const comp_number = Number(getNumber1to5());

//Sommo il numero del computer e quello dell'utente
result = user_number + comp_number;


//Definisco la funzione per stabilire se un numero è pari o dispari
function isEven(number) {
    if (number%2 === 0) {
        return true;
    }
    else {
        return false;
    }
}


//SE la somma è pari e l'utente ha scelto pari, oppure SE l'utente ha scelto dispari e il risultato è dispari(non è pari)
if (((isEven(result)) && (user_choice=="pari")) || (!(isEven(result)) && (user_choice=="dispari"))) {
    //vince l'utente
    console.log(`Tu: ${user_number}, Io: ${comp_number}, Risultato: ${result}, HAI VINTO!`);
} 
//ALTRIMENTI 
else {
    //Vincono le macchine
    console.log(`Tu: ${user_number}, Io: ${comp_number}, Risultato: ${result}, HAI PERSO!`);
}


