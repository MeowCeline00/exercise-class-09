/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5
 * 
 * Concatenate two different arrays using the .concat() method. 
 * Initialize a variable called 'food'.
 * Initialize a variable called 'junkFood' and list the items 'burger', 'fries', 'pizza' inside this array.
 * Initialize a variable called 'healthyFood' and list the items 'vegetable', 'rice', 'milk' inside this array.
 * Combine the items from 'junkFood' and 'healthyFood' into the 'food' variable.
 * Use the .concat() method to merge the arrays and store the result in the 'food' variable.
 * Finally, use console.log() to display the 'food' array.
 */

var junkFood = ['burger', 'fries', 'pizza'];
var healthyFood = ['vegetable', 'rice', 'milk'];
var food = junkFood.concat(healthyFood);
console.log(food); // [ 'burger', 'fries', 'pizza', 'vegetable', 'rice', 'milk' ]






/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * initialise the variable 'preference' to a 2-Dimensional array containing the values below:
 * 
 *         column[0]    column[1]    column[2]    column[3]
 * Row 1     boy         cat         yellow         13
 * Row 2     girl        rabbit        blue         17
 * then use console.table() to showcase the information in a table.
 * then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * "Tom is a _13_ years old _boy_, he has a _yellow_ _cat_."
 *  
 */

var preference = [
    ["boy", "cat", "yellow", 13],
    ["girl", "rabbit", "blue", 17]
];

console.table(preference);


var ageRow1 = preference[0][3];
var genderRow1 = preference[0][0];
var color1Row1 = preference[0][2];
var animalRow1 = preference[0][1];

var sentence = `Tom is a ${ageRow1} years old ${genderRow1}, he has a ${color1Row1} ${animalRow1}.`;
console.log(sentence); // Tom is a 13 years old boy, he has a yellow cat.


