//Comments...
//Hey I start freecode camp today.
/* I am Joan Kinyanjui
I am a developer.
*/

//Declare Javascript Variables...
var myName;
myName ="Joan Kinyanjui"

//Returning Boolean Values from Functions
function isLess(a, b) {

    return (a===b);
  
  }
  
  isLess(10, 15);

//   Return Early Pattern for Functions
//When a return statement is reached, the execution of the current function stops and control returns to the calling location.
function myFun() {
    console.log("Hello");
    return "World";
    console.log("byebye")
  }
  myFun();
  //Counting Cards
  let count = 0;
  let quote=' ' 
  let plusOne=[2,3,4,5,6];
  let plusZero=[7,8,9];
  let minusOne=[10,'J','Q','K','A']
  
  function cc(card) {
    if(plusOne.includes(card) == true){
      count++;
      if(count >=1){
        quote='Bet'
      }else{
        quote='Hold'
      }
      return count + ' '+ quote
    }else if(plusZero.includes(card)==true){
      count+=0;
       if(count >=1){
        quote='Bet'
      }else{
        quote='Hold'
      }
       return count + " "+quote;
    }else if(minusOne.includes(card)==true){
      count--;
       if(count >=1){
        quote='Bet'
      }else{
        quote='Hold'
      }
       return count + " "+quote;
    }
   
  }
  
  cc(2); cc(3); cc(7); cc('K'); cc('A');
/*
Delete Properties from a JavaScript Object
We can also delete properties from objects like this:
delete ourDog.bark; 
*/
// Testing Objects for Properties

const myObj = {
    top: "hat",
    bottom: "pants"
  };
  
  myObj.hasOwnProperty("top");
  myObj.hasOwnProperty("middle");
//   The first hasOwnProperty returns true, while the second returns false.

//RECORD COLLECTION...
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value
    } else if (prop === 'tracks' && records[id].hasOwnProperty('tracks') === false) {
      records[id][prop] = [value]
    } else if (prop === 'tracks' && value !== "") {
      records[id][prop].push(value)
    } else if (value === "") {
      delete records[id][prop]
    }
    return records;
  }
  
  //PROFILE LOOKUP
  function lookUpProfile(name, prop) {
    for (let x = 0; x < contacts.length; x++) {
      if (contacts[x].firstName === name) {
        if (contacts[x].hasOwnProperty(prop)) {
          return contacts[x][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  }

  // Generate Random Whole Numbers within a Range
  // Math.floor(Math.random() * (max - min + 1)) + min
  function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  
    
  }

  // Use the parseInt Function with a Radix
  /*
The function call looks like:
parseInt(string, radix);
*/
const a = parseInt("11", 2);
console.log(a);

//converts binary '11' to 3...


//RECURSION...
/*We have defined a function called countdown with one parameter (n). 
The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
If the function is called with a number less than 1, the function should return an empty array. 
For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. 
Your function must use recursion by calling itself and must not use loops of any kind.
*/

function countdown(n){
  if(n<1){
    return [];
  }else{
    const countArray = countdown(n-1);
    countArray.unshift(n);
      return countArray; 
  }
}
countdown(5);

//Use Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if(endNum<startNum){
     return [];
   }else{
     const countArray = rangeOfNumbers(startNum, endNum - 1);
     countArray.push(endNum);
       return countArray; 
   }
 };

 console.log(rangeOfNumbers(4,9))

 //Iterate Through the Keys of an Object with a for...in Statement...
 const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(obj) {
  // change code below this line
  var counter = 0;
  for (var user in obj) {
      if (obj[user]["online"] === true) {
          counter++
      }
      // change code above this line

  } return counter;
}



const students={
  Joan :{
    name:'Joan',
    accounts:'twitter',
    hobbies:'Swimming,movies'
  },
  Belle :{
    name:'Esther',
    accounts:'twitter',
    hobbies:'Swimming,movies'
  },
  Mana :{
    name:'Ruth',
    accounts:'twitter',
    hobbies:'Swimming,movies'
  }
};

console.log(students)
// console.log(students['Joan'])

// for(const student of Object.keys(students)){
//   console.log(students[student])
// }

  for (const info of Object.keys(students)){
    console.log(students[info]);
  }

  console.log(Object.entries(students))

  //REVERSING A STRING...
  function reverseString(str) {
    let array=str.split('')
    let newArray=[];
    for(let i=array.length-1; i>=0; i--){
      newArray.push(array[i]);
    }
    let newString= newArray.join('')
      console.log(newString)
    return newString;
  
  }
  
  reverseString("hello");

  //FIND THE LONGEST WORD IN A STRING
  function findLongestWordLength(str) {
    let array= str.split(' ');
    console.log(array)
    let numbersArray=[];
    for (let i=0; i<=array.length-1;i++){
      numbersArray.push(array[i].length);
      
    }
   let largest=Math.max(...numbersArray);
      console.log(largest)
    console.log(numbersArray)
    return largest;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


  //RETURN LARGEST NUMBERS IN EACH ARRAY INTO AN ARRAY
  function largestOfFour(arr) {
    let largestArray=[]
      for (let i=0; i<=arr.length-1;i++){
      let largest=Math.max(...arr[i])
      largestArray.push(largest)
  
    }
    return largestArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  clearInterval.console()

  // Title Case a Sentence
  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }


  // Mutations
  function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }
  
//Chunk MONKEY...


//SEEK AND DESTROY...
function destroyer(arr,...args) {
 
  return   arr.filter((elem)=> !args.includes(elem)) ;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//WHEREFORE ART THOU ...

/*Make a function that looks through an array of objects (first argument) and returns an array of all 
objects that have matching name and value pairs (second argument). Each name and value pair of the source
 object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is 
[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
{ first: "Tybalt", last: "Capulet" }], 
and the second argument is 
{ last: "Capulet" }, then you must return the third object from the array
 (the first argument), because it contains the name and its value, that was passed
  on as the second argument.

*/
function whatIsInAName(collection, source) {
  const souceKeys = Object.keys(source);
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);


//SPINAL TAP CASE...
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");



//DNA PAIRING...
function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");

//MISSING LETTERS
// function fearNotLetter(str) {
//   var alphabet='abcdefghijklmnopqrstuvwxyz';
//   var setStr=str.split('');
//   var startPoint=alphabet.indexOf(str[0]);
//   var endPoint=alphabet.indexOf(str[str.length-1]);
 
  

//   for(var i=startPoint; i<=endPoint; i++){
    
//   if(setStr.includes(alphabet[i])=== false){
//       console.log(startPoint)
//     return alphabet[i]
   
//   }else{
//     return undefined;
//   }
//   }
// };

// fearNotLetter("abce");
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");


//SUM ALL PRIME NUMBERS...
//check for prime numbers function...
function isPrime(singleNum){
  let counter=2;
  while(counter < singleNum){
    if(singleNum % counter === 0){
      return false;
    }
    counter++;
}
return true
}

function sumPrimes(num){
let counter =2;
let sum =0;

while(counter<=num){
  if(isPrime(counter)){
    sum +=counter;
  }
  counter+=1
}
return sum
}
//SMALLEST COMMON DIVISOR
function smallestCommons(arr) {
  // Setup
  const [min, max] = arr.sort((a, b) => a - b);
  const numberDivisors = max - min + 1;
  // Largest possible value for SCM
  let upperBound = 1;
  for (let i = min; i <= max; i++) {
    upperBound *= i;
  }
  // Test all multiples of 'max'
  for (let multiple = max; multiple <= upperBound; multiple += max) {
    // Check if every value in range divides 'multiple'
    let divisorCount = 0;
    for (let i = min; i <= max; i++) {
      // Count divisors
      if (multiple % i === 0) {
        divisorCount += 1;
      }
    }
    if (divisorCount === numberDivisors) {
      return multiple;
    }
  }
}

smallestCommons([1, 5]);


//CONVERT TO ROMAN NUMBERS...
function convertToRoman(num) {
  /* 
  Main IDea
  convert num to str 
  convert each str char to it's corresponding Roman number considering it's order 
  join the result 
  */ 
  var str ='';
  str += num;
  var result = [];
  var res1 = '';
  var res2 = '';
  var res3 = '';
  var res4 = '';
  if (str.length == 0){
  result = [];
  }else if (str.length > 0){
    switch (str[str.length-1]){
    case "1" :
    res1 = "I";
    break;
    case "2" :
    res1 = "II";
    break;
      case "3" :
    res1 = "III";
    break;
      case "4" :
    res1 = "IV";
    break;
      case "5" :
    res1 = "V";
    break;
      case "6" :
    res1 = "VI";
    break;
      case "7" :
    res1 = "VII";
    break;
      case "8" :
    res1 = "VIII";
    break;
      case "9" :
    res1 = "IX";
    break;
      
  }
    switch (str[str.length-2]){
        
      case "1" :
    res2 = "X";
    break;
      case "2" :
    res2 = "XX";
    break;
      case "3" :
    res2 = "XXX";
    break;
      case "4" :
    res2 = "XL";
    break;
      case "5" :
    res2 = "L";
    break;
      case "6" :
    res2 = "LX";
    break;
      case "7" :
    res2 = "LXX";
    break;
      case "8" :
    res2 = "LXXX";
    break;
      case "9" :
    res2 = "XC";
    break;
    }
    switch (str[str.length-3]){
        
      case "1" :
    res3 = "C";
    break;
      case "2" :
    res3 = "CC";
    break;
      case "3" :
    res3 = "CCC";
    break;
      case "4" :
    res3 = "CD";
    break;
      case "5" :
    res3 = "D";
    break;
      case "6" :
    res3 = "DC";
    break;
      case "7" :
    res3 = "DCC";
    break;
      case "8" :
    res3 = "DCCC";
    break;
      case "9" :
    res3 = "CM";
    break;
    }
    switch (str[str.length-4]){
        
      case "1" :
    res4 = "M";
    break;
      case "2" :
    res4 = "MM";
    break;
      case "3" :
    res4 = "MMM";
    break;
    }
  }
result.push(res4,res3,res2,res1);
  return result.join("");
}

convertToRoman(39999);

//CASH REGISTER...\

var money = [
  { name: "ONE HUNDRED", value: 100.0 },
  { name: "TWENTY", value: 20.0 },
  { name: "TEN", value: 10.0 },
  { name: "FIVE", value: 5.0 },
  { name: "ONE", value: 1.0 },
  { name: "QUARTER", value: 0.25 },
  { name: "DIME", value: 0.1 },
  { name: "NICKEL", value: 0.05 },
  { name: "PENNY", value: 0.01 },
];
function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let result = {
    status: "",
    change: [],
  };
  let sumCid = 0;
  for (let i = 0; i < cid.length; i++) {
    sumCid += cid[i][1]
  }
  console.log(sumCid, '=sumCid')
  if (sumCid < change) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }
  if (sumCid === change) {
    result.status = "CLOSED"
    result.change = cid
    return result;
  }
  let newResult = [];
  cid = cid.reverse();
  for (let i = 0; i < cid.length; i++) {
    let val = 0
    console.log(money[i].value, "denom val")
    console.log(cid[i][0], "=cid i of zero")
    while (money[i].value <= change && cid[i][1] > 0) {
      console.log('reached while')
      cid[i][1] -= money[i].value
      change = change.toFixed(2)
      change -= money[i].value
      console.log(change, "=change")
      val += money[i].value
    }
    if (val > 0) {
      newResult.push([cid[i][0], val])
    }
  }
  if (change > 0) {
    console.log('change=', change)
    result.status = "INSUFFICIENT_FUNDS";
    return result
  }
  result.status = "OPEN";
  result.change = newResult;
  return result;
}
console.log(
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
);


//PALINDROME CHECKER...

//CAESARS CIPHER...
function rot13(str) { // LBH QVQ VG!
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  
  var replacer = [];
  for (var x = 0; x < str.length; x++)  { //loops through the given string
  var index = alphabet.indexOf(str[x]);  //sets the index of letter from the coded string
  if (cipher.charCodeAt(index) > 0) {  //check to see if the letter is alphanumeric
     replacer.push(String.fromCharCode(cipher.charCodeAt(index))); //add to array
  }
    else replacer.push(str[x]); //adds non-alphanumeric to the array
  }
  return replacer.join(""); //combines it all back together
}

// Change the inputs below to test
rot13("SERR CVMMN!");


//TELEPHONE NUMBER VALIDATOR...
function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }

}

telephoneCheck("555-555-5555");

//