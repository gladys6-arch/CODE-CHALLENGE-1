function calculateChaiIngredients(numberofcups){
  // The ingredients amount per a cup for the chai
  const waterpercup= 200; // in ml
  const milkpercup= 50; // in ml
  const teaLeavespercup= 1; // in teaspoons
  const sugarpercup= 2; // in teaspoons


  // The total amounts of the ingredients
  const totalWater= waterpercup * numberofcups;
  const totalMilk= milkpercup * numberofcups;
  const totalTeaLeaves=teaLeavespercup * numberofcups;
  const totalSugar=sugarpercup * numberofcups;



  // the output
  console.log('To make ${numberofcups} cup(s) of Kenyan Chai,you will need:');
  console.log('Water: ${totalWater} ml');
  console.log('Milk: ${totalMilk} ml');
  console.log('Tea Leaves (Majani): ${totalTeaLeaves} teaspoon(s)');
  console.log('Sugar(Sukari): $ {totalSugar} teaspoon(s)');
  console.log("Enjoy your Chai Bora!");


  // Prompt the user 
  const input= prompt("Karibu! How many cups of Chai Bora would you like to make?");
  const numberofCups= parseInt(input,8);
  if(!isNaN(numberofcups) && numberofcups > 0){
    calculateChaiIngredients(numberofcups);
  } else{
    console.log("Tafadhali, enter a valid number of cups.")
  }
}