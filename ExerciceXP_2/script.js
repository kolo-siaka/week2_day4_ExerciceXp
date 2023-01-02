//Function calculateTip

function calculateTip() {
	let amount = Number(prompt("Entre le Montant de la facture :"))

	   	 if (amount < 32500){
	   	         console.log("Vous aurez droit à un pourboit de 20%")
	   	         console.log("Ma facture est de :",(amount+((amount*20)/100)))
	   	         }

	   	 else if (amount > 32500 && amount < 130000) {
               
                 console.log("Vous aurez droit à un pourboit de 15%")
	   	         console.log("Ma facture est de :",amount+((amount*15)/100))
	   	         
	   	 }else {
	  
	   	         console.log("Vous aurez droit à un pourboit de 10%")
	   	         console.log("Ma facture est de :",amount+((amount*10)/100))
	   }  
}
       calculateTip()
