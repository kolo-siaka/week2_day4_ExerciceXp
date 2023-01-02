//Function isDivisible
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = {
	"banana":1,
	"orange":1,
	"apple":1

}

function myBill(){
	const  keys0 = Object.keys(shoppingList)
	const  keys =Object.keys(stock)
	let total = 0

	for (let i in keys) {
          for (let j in keys0) { 
               
               if ( keys0[j] ==keys[i]  && stock[keys[i]] != 0 ) {

               	total = total + shoppingList[keys0[j]]*prices[keys0[j]]

               	
               }
          }

	}console.log(total)
}

myBill()
