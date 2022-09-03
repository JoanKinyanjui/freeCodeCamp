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
  
