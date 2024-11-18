let userNumber=Math.ceil(Math.random() * 6);
let pcNumber=Math.ceil(Math.random() * 6);
let output = '';

while (userNumber===pcNumber){
  userNumber = Math.ceil(Math.random() * 6);
  pcNumber = Math.ceil(Math.random() * 6);  
}

if(userNumber>pcNumber){
  output= 'HAI VINTO'
} else{
  output= 'HAI PERSO'
}

console.log('I numeri estrati sono' , userNumber + ' e ' + pcNumber + ' quindi: ' + output);

