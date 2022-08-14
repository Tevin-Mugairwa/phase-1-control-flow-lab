function scuberGreetingForFeet(Feet){
  // Write your code here!
   if(Feet< 400)
   {
      return 'This one is on me!';
   }

   else if(Feet>2000 && Feet <= 2500 )
   {
     return  'I will gladly take your thirty bucks.';
   }

   else
   {
    return 'No can do.';
   }

}

function ternaryCheckCity(city){
  // Write your code here!
  return city ==='NYC'? 'Ok, sounds good.':`No go.`;

}

function switchOnCharmFromTip(Tip){
  switch(Tip)
  {
     case 'generous': 
           return "Thank you so much.";

     case 'not as generous':
          return "Thank you.";
           
      default:
        return "Bye.";


  }
  // Write your code here!
}