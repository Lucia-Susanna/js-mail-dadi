// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

const correctMail = ['lucia@mail.it', 'boolean@boo.com', 'francesco@gmail.com', 'poppy@mail.it', 'fra@francesco.com']; 
let userMail = prompt('Inserisci l\'indirizo è-mail');
let isUserMailPresent = false;
let i=0;
let output = '';

while(!isUserMailPresent && i< correctMail.length){
    if(correctMail[i]=== userMail){
    isUserMailPresent = true;
  }
  i++
}

if(isUserMailPresent){
  output = 'la mail è presente nel database';
} else {
  output = 'la mail NON è presente nel database';
}
console.log(output);
