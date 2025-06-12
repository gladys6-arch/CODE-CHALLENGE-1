function calculateChaiIngredients(numberofCups){
  // The ingredients amount per a cup for the chai
  const waterPerCup= 200; // in ml
  const milkPerCup= 50; // in ml
  const teaLeavesPerCup= 1; // in teaspoons
  const sugarPerCup= 2; // in teaspoons


  // The total amounts of the ingredients
  const totalWater= waterPerCup * numberofCups;
  const totalMilk= milkPerCup * numberofCups;
  const totalTeaLeaves=teaLeavesPerCup * numberofCups;
  const totalSugar=sugarPerCup * numberofCups;



  // the output
  console.log('To make ${numberofcups} cup(s) of Kenyan Chai,you will need:');
  console.log('Water: ${totalWater} ml');
  console.log('Milk: ${totalMilk} ml');
  console.log('Tea Leaves (Majani): ${totalTeaLeaves} teaspoon(s)');
  console.log('Sugar(Sukari): $ {totalSugar} teaspoon(s)');
  console.log("Enjoy your Chai Bora!");


  
}


// Prompt the user 
  

   let userinput= window.prompt("Karibu! How many cups of Chai Bora would you like to make?");
   const numberofCups= parseInt(userinput);


   if(numberofCups> 0){
    calculateChaiIngredients(numberofCups);
   } else{
    console.log('Enter valid number of cups');
   }
