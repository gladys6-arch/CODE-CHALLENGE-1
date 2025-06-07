function estimateTransactionFee(amountToSend){
  const percentageFee= amountToSend * 0.015;
  const fee= 
  Math.min(Math.max(percentageFee, 10), 70);
  const totaldebited= amountToSend + fee;


  console.log('Sending KES ${amountToSend}:');
  console.log('Calculated Transaction Fee: KES ${fee}');
  console.log('Total amount to be debited: KES ${totaldebited}');
  console.log('Send Money Securely!');

  // Prompt the user
  const userinput= prompt("Unatuwa Ngapi? (KES):");
  const amount= Number(userinput);

  // validate the process
  if(!isNaN(amount) && amount > 0){
    estimateTransactionFee(amount);
  }  else{
    console.log("Tafadhali andika kiasi sahihi cha kutuma.");
  }
}