function calculateBodaFare(distanceInKm){
// Fare calculation rules
const basefare= 50;
const chargePerKm=15;

// calculation of  the fare
const perkmcharge=distanceInKm * chargePerKm;
const totalFare=basefare * perkmcharge;


// the output of the fare details
console.log('Uko kwote? Io ni $ {distanceInKm} km:');
console.log('Ukikalia Pikipiki: KES ${basefare}');
console.log('Mpaka Uko: KES ${perkmcharge}');
console.log('Total: KES ${totalFare}');
console.log('\n Panda Pikipiki!');

// Prompt the user and run the function
const userinput= prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
const distance= Number(userinput);

// validate input
if(!isNaN(distance) && distance >= 0){
  calculateBodaFare(distance);
}  else{
  console.log("Tafadhali ingiza nambari sahihi ya kilometer.");
  
}
}
