let userNumber=Math.ceil(Math.random() * 6);
let pcNumber=Math.ceil(Math.random() * 6);
let output = '';

while (userNumber===pcNumber){
  userNumber;
  pcNumber;  
}

if(userNumber>pcNumber){
  output= 'HAI VINTO!.'
} else{
  output= 'HAI PERSO!.'
}

alert(`I numeri estrati sono ${userNumber} e ${pcNumber} quindi: ${output}`);

