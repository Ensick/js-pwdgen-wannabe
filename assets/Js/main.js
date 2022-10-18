
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// aggiungiamo alla fine un numero
// Infine scriviamo sulla pagina "la tua password insicurissima è: nomecognomecolorepreferito21"
// Buon lavoro

let nome = prompt("Inserisci il tuo nome");
console.log(nome);

let cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

let colore = prompt("Inserisci il tuo colore preferito");
console.log(colore);

let numero = prompt("Insercisci un numero a DUE cifre");
console.log(numero);

document.getElementById("password").innerHTML = ` ${nome}${cognome}${colore}${numero}`;
console.log(document.getElementById("password").innerHTML)