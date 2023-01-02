//Function isDivisible

let i 
let range = new Array()

function isDivisible() {
	for (i=0; i <= 500; i++) {
		if (i%23==0) {
			range.push(i)
		}
}
      let sommes =0
      range.forEach(y => sommes=sommes+y)

      console.log(range) 
      console.log(sommes)
      	
} 
      
isDivisible()


