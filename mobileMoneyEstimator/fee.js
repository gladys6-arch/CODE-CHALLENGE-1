function estimateTransactionFee(amountToSend){
  const Percentagefee=amountToSend * 0.05;
  let fee;

  if(Percentagefee<10){
    fee=10;
  } else if(Percentagefee>70){
    fee=70
  } else {
    fee=Percentagefee;
  }
  
  const totaldebited=amountToSend + fee;


  // the output
  console.log('Amount to send: KES ${amountToSend}:');
  console.log('Transaction fee: KES ${fee}');
  console.log('Total amount debited:KES ${totaldebited}');
  console.log('Send Money Securely!');

  
  }
  
  // prompt the user
  const userinput=prompt("unatuma ngapi? (KES)");
  
  const amountToSend= parseInt(userinput);

  if(amountToSend>0){
    estimateTransactionFee(amountToSend);
  } else{
     console.log('Enter a valid number greater than 0')
  }