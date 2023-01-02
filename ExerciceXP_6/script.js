//functions that calculate your vacation’s costs

function hotelCost() {
    let numberOfNights = undefined;
    const costs = 140;
    do 
       numberOfNights =prompt("how many nights would you stay in the hotel ?");
    while(isNaN(numberOfNights))
 
        return console.log(`\n The total price of the hotel : ${Number(numberOfNights) * costs} \n`);
    
}

// planeRideCost function
function planeRideCost(){

    let destinations = {"London": 183, "Paris":220}
    const other = 330 
    const  keys =Object.keys(destinations)
    let destination = undefined;

    do {
        destination = prompt('Your destination please : ');
        destination =destination.charAt(0).toUpperCase() + destination.slice(1);
        
    } while (isNaN(destination) != true);



     for(let i in keys){
      if (destination == keys[i]) {
        console.log("Your destination price is :",destinations[keys[i]])
      } else{
        console.log("Your destination price is :",other)
      }
  }
    }
    

// function rentalCarCost()
function rentalCarCost(){
    let rent =0

    do 
       rent =prompt("how many days would you like to rent a car ?");
    while(isNaN(rent))
        if (rent < 10) {
            console.log("the cost to rent the car is :",rent*40)
        }else {
               console.log("the cost to rent the car is :",rent*40 - ((rent*40)*5)/100)   
        } 
}


//function totalVacationCost

function totalVacationCost(){
    hotelCost() , planeRideCost() , rentalCarCost()
    
}
totalVacationCost()