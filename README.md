Mail-Dadi
repo: js-mail-dadi
===

ESERCIZIO MAIL:

Istruzioni:
- Chiedi all’utente la sua email
- Controlla che sia nella lista di chi può accedere
- Stampa un messaggio appropriato sull’esito del controllo.

Svolgimento:
- mi creo un array delle correctMail
- creo una variabile userMail dentro la quale inserisco un propt in cui l'utente inserisce la mail
- creo una variabile isUserMailPresent a cui do valore false di default
- creo una variabile output vuote in cui verrà stampato il messaggio finale
- creo un ciclo while valido finchè la mail inserita non è corretta, quindi finchè isUserMailPresent non diventa true
- isUserMailPresent diventa true se correctMail.indexOf(userMail)>=0

ESERCIZIO DADI:

Istruzioni:
- Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
- Stabilire il vincitore, in base a chi fa il punteggio più alto.

Svolgimento:
- creo due variabili pcNumber e userNumber vuote
- creo un ciclo while valido finchè pcNumber===userNumber in cui metto un Math.ceil(Math.random() * 6) per ogni variabile
- se il pcNumber è pù alto vince altrimenti vince lo userNumber 
