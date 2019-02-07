// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    /* it("does something (change this)", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(changethis).toBeDefined();
    }); */
	
	// 5 a
	
	it("Check to see if cashTendered is based on argument", function() {
		
		let sit = new ChangeHandler(7);
				
        expect(sit.amountDue).toBe(7);
			
    });
	
	it("Check to see if cashTendered is set to 0", function() {
		
		let sit = new ChangeHandler(30);
		
        expect(sit.cashTendered).toBe(0);
    });
	
	it("check to see if we add pennie", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("penny");
		
        expect(sit.cashTendered).toBe(1);
		
    });
	
	it("check to see if we add nickle", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("nickle");
		
        expect(sit.cashTendered).toBe(5);
		
    });
	
	it("check to see if we add dime", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("dime");
		
        expect(sit.cashTendered).toBe(10);
		
    });
	
	it("check to see if we add quarter", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("quarter");
		
        expect(sit.cashTendered).toBe(25);
		
    });
	
	it("check to see if we add dime", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("dime");
		sit.insertCoin("quarter");
		
        expect(sit.cashTendered).toBe(35);
		
    });
	
	it("check to see if equal to is true", function() {
        
		let sit = new ChangeHandler(0);
		
		sit.insertCoin("quarter");
		
        expect(sit.cashTendered).toBe(25);
		
    });
	
	it("check to see if less then is false", function() {
        
		let sit = new ChangeHandler(26);
		
		sit.insertCoin("quarter");
		
        expect(sit.isPaymentSufficient()).toBe(false);
		
    });
	
	it("check to see if greater then is true", function() {
        
		let sit = new ChangeHandler(20);
		
		sit.insertCoin("quarter");
		
        expect(sit.isPaymentSufficient()).toBe(true);
		
    });
	
	
	
	it("check to see if we add quarter", function() {
        
		let sit = new ChangeHandler(368);
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		expect(sit.giveChange().quarters).toBe(1);
		expect(sit.giveChange().dimes).toBe(0);
		expect(sit.giveChange().nickels).toBe(1);
		expect(sit.giveChange().pennies).toBe(2);
		
    });

	it("check to see if we add quarter", function() {
        
		let sit = new ChangeHandler(15);
		
		sit.insertCoin("quarter");
		
		expect(sit.giveChange().quarters).toBe(0);
		expect(sit.giveChange().dimes).toBe(1);
		expect(sit.giveChange().nickels).toBe(0);
		expect(sit.giveChange().pennies).toBe(0);
		
    });	
	
	it("check to see if we add quarter", function() {
        
		let sit = new ChangeHandler(73);
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		expect(sit.giveChange().quarters).toBe(1);
		expect(sit.giveChange().dimes).toBe(0);
		expect(sit.giveChange().nickels).toBe(0);
		expect(sit.giveChange().pennies).toBe(2);
		
    });	
	
	it("check to see if we add quarter", function() {
        
		let sit = new ChangeHandler(32);
		
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		sit.insertCoin("quarter");
		
		expect(sit.giveChange().quarters).toBe(2);
		expect(sit.giveChange().dimes).toBe(1);
		expect(sit.giveChange().nickels).toBe(1);
		expect(sit.giveChange().pennies).toBe(3);
		
    });	

});














