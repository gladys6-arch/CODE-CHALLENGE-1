# 1. Weak 1 Code Challenge
## Prerequisites
1. Create a new git repository on your github account called (Code-Challenge-1).
2. Create a dedicated folder for each challenge in the main repository 
(e.g, *chaiCalculator*,*bodaFareCalculator*,*mobileMoneyEstimator*)
3. **JavaScript Files**: inside the folders created ,create javascript files in each , named (*chai.js*,*fare.js*,*fee.js*).
4. **Solution Implementation**: Use javascript to write your solutions.
5. **Version Control**: Push your solutions to the Github repository as you complete them.
6. **Documentation:** Ensure your repository has a well-written main *README.md* .
7. **Submission:** Submit the link to your Github repository.



#  Challenge 1: Chai Bora Ingredient Calculator
 This challenge involves creating a simple calculculator to determine the basic ingredients needed to make a specific number of cups of Kenya chai.

 ### The Standard Recipe for 1 Cup of Chai:
 **.** Water: 200 ml
 **.** Milk: 50 ml
 **.** Tea Leaves(Majani): 1 tablespoons
 **.** Sugar (Sukari): 2 teaspoons

 ### Your Task:
 Write a Javascript function named *calculateChaiIngredients* that:

 1. **Prompt the user** to enter the number of chai cups they want to make ( e.g., using *prompt()*).Remember to convert the input to a number.
 2. Takes the *numberofCups (as a number) as an argument.
 3. **Calculates** the  required amount for each ingredient based on *numberofCups*.
 4. **Prints the results** to the console in aclear,readable format.

 ### Example Interaction(for an input of 3 cups):
 **.** **User is prompted**: *Karibu! How many cups of Chai Bora would you like to make?*
 **.** **User enters**: *3*
 **.** **Console Output**:

 * To mke 3 cups of Kenyan Chai, you will need:*
  *water: 600ml*
  *milk: 150ml*
  *tealeaves(majani): 3 tablespoons*
  *sugar (sukari): 6 teaspoons

  *Enjoy your Chai Bora!


  # Challenge 2: Boda Boda Ride Fare Estimator
  Create a simple program to estimate the fare for a boda boda ride.

  ### Fare Calculation Rules:
  **.** **Base Fare**: KES 50 (applied to every ride).
  **.** **Per Kilometer Charge**: KES 15 for every kilometer traveled.

  #### Your Task:
  Write JavaScript function named *calculateBodaFare* that:
  1. **Prompts the user** to enter the distance of their trip in kilometers.Convert this input to a numder.
  2. Take the *distanceInKm* (as a number) as an argument.
  3. **Calculates** the total estimated fare using the formula: *totalFare = baseFare + (distanceInKm * chargePerKm)*
  4. **Prints the results** to the console in a user-friendly format.

  ### Example Interaction (for a trip of 5km):

**.** **User is prompted**: *Unafika wapi Mkubwa? Kilometer ngapi?:
**.** **User enters**: *5*
**.** **Console Output**:

* Uko Kwote? Io ni 5 km:*
*Ukikalia Pikipiki: KES 50*
*Mpaka Uko: KES 75*
*Total: KES 125*
*Panda Pikipiki!*


# Challenge 3: Simplified Mobile Money Transaction Fee Estimator
Create a simplified estimator for transaction fees.

#### Simplified Fee Structure:
**.** The basic transaction fee is 1.5% of the transaction amount.
**.** However, there's a **minimun fee of KES 10**.If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
**.** There's also a **maximum fee of KES 70**.if 1.5% of the amount is more than KES 70, the fee charged is KES 70.


#### Your Task:
Write a JavaScript function named *estimateTransactionFee* that:
1. **Prompt the user** to enter the amount of money they wish to send.Convert this input to a number.
2. Takes the *amountToSend* (as a number) as an argument.
3. **Calculates** the transaction fee based on the 1.5% rule, ensuring it adhers to the minimum(KES 10) and maximum(KES 70) fee limits.
      * Hint:You likely need conditional logic(*if-else if-else) or *Math.min()* and *Math.max()*
4. Calculates the total amount that will be debited(amount to send + transaction fee).
5. **Prints the results** to the console.

#### Example Interactions & Outputs:
**.** **User is prompted**: *Unatuma Ngapi? (KES):*
**.** **Scenario 1: User enters** *500*
(1.5% of 500 = 7.5.Fee becomes KES 10 due to minimum.)
**Console Output**:
Sending KES 500:
Calculated Transaction Fee: KES 10
Total amount to be debited: Kes 510


Send Money Securely!
