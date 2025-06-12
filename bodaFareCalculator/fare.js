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

}

// prompt the user
const useinput=window.prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
const distanceInKm= parseInt(useinput);

if(distanceInKm > 0){
  calculateBodaFare(distanceInKm);
} else{
  console.log('Please enter a valid distance')
}


