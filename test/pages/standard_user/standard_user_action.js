const standard_user_locators=require('./standard_user_locators');
const utility=require("../../utilities/utility"); 

class Action{

    async clickOnUserInputField(username){
        await standard_user_locators.user_name.setValue(username);
        await browser.pause(2000);

    }

    async clickOnPasswordInputField(password){
        await standard_user_locators.password.setValue(password);
        await browser.pause(2000);

    }

    async clickOnLoginButton(){
        await standard_user_locators.login_button.click();
        await browser.pause(2000);

    }
    
    async clickOnhamburgerButton(){
        await standard_user_locators.clickOnHamburger_menu.click();
        await browser.pause(2000);
    }
    async clickOnresetAppState(){
        await standard_user_locators.clickOnResetAppState.click();
        await browser.pause(2000);
    }

    async clickOnCrossButton(){
        await standard_user_locators.clickOnCrossButton.click();
        await browser.pause(2000);
    }

    async addToCart(){
       
        const addTocart= await standard_user_locators.addTocart;
        
        for (let item = 0; item <3; item++) {
            await addTocart[item].getText();
            
            await addTocart[item].click();
            

        }
        await browser.pause(2000);
    }

    async productNames(){
        const productname=await standard_user_locators.productName;
        const selectedProductNames = [];
        for (let i = 0; i < 3; i++) {
            let productName = await productname[i].getText();
            selectedProductNames.push(productName);

        }
        await browser.pause(2000);
        console.log(selectedProductNames);
        return selectedProductNames;

    }

    async clickOnShoppingCart(){
        await standard_user_locators.clickOnShoppingButton.click();
        await browser.pause(2000);
    }

    async clickOnCheckout(){
        await standard_user_locators.clickOnCheckOutButton.click();
        await browser.pause(2000);
    }

    async CartItem_productName(){
        const CartItem_productNames=await standard_user_locators.CartItem_productName;
        const Add_CartItem_productNames = [];
        for (let i = 0; i < 3; i++) {
            let productName = await CartItem_productNames[i].getText();
            Add_CartItem_productNames.push(productName);

        }
        console.log( Add_CartItem_productNames);
        await browser.pause(2000);
        return Add_CartItem_productNames;
    }

    async totalPrice(){
        const productPrices = await standard_user_locators.productPrices;
        let expectedTotalPrice = 0;
        for (let i = 0; i < 3; i++) {
        
        let priceText = await productPrices[i].getText();
        let total_price_inNumber=await utility.convertTextToNumber(priceText);
        expectedTotalPrice += total_price_inNumber;
        //return expectedTotalPrice;
    }
    //console.log(expectedTotalPrice);
    return expectedTotalPrice;
    }

    async finalPrice(){

        const price_text=await standard_user_locators.total_price.getText();
        let priceInNumber=await utility.convertTextToNumber(price_text);
        //console.log(priceInNumber);
        return priceInNumber; 

    }

    async Tax(){
        const tax_with_price=await standard_user_locators.tax.getText();
        console.log(tax_with_price);
        let tax_with_price_IN_number=await utility.convertTextToNumber(tax_with_price);
        console.log(tax_with_price_IN_number);
        return tax_with_price_IN_number; 
    }

    async priceWithTax(){
        const tax_with_price=await standard_user_locators.added_tax_with_price.getText();
        let tax_with_price_IN_number=await utility.convertTextToNumber(tax_with_price);
        return tax_with_price_IN_number; 
    }

    async finishPurchaseJourney(){
        await standard_user_locators.finishButton.click();
        await browser.pause(3000);

    }

    async success_massage(){
        let massage=await standard_user_locators.success_orderMassage.getText();
        return massage;

    }

    async clickOnLogOutButton(){
        await standard_user_locators.logoutButton.click();
        await browser.pause(3000);

    }
}

module.exports=new Action();