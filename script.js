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