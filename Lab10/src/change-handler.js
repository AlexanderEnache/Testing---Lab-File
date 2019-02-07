/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
		
		if(type == "quarter"){
			
			this.cashTendered += 25;
			
		}else if(type == "dime"){
			
			this.cashTendered += 10;
			
		}else if(type == "nickle"){
			
			this.cashTendered += 5;
			
		}else if(type == "penny"){
			
			this.cashTendered += 1;
			
		}
		
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
		
		if(this.amountDue <= this.cashTendered){
			return true;			
		}else{
			return false;
		}
	
    }

    giveChange() {
        // TODO return the correct change in the following format...
		
		let changeSum = this.cashTendered - this.amountDue;
		
		let cur = [25, 10, 5, 1];
		let amt = [0, 0, 0, 0];
			
		for(let i = 0; i < 4; i++){
			
			for(let j = 0; (changeSum - cur[i]) >= 0; j++){
				
				changeSum -= cur[i];
				amt[i] = j+1;
				
				console.log(changeSum);
				
			}
			
		}
		
        return {
            quarters: amt[0],
            dimes: amt[1],
            nickels: amt[2],
            pennies: amt[3]
        }
    }
}


	





