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
