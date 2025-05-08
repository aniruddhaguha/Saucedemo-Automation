const performance_glitch_user_locators=require('./performance_glitch_user_locators');
const utility=require("../../utilities/utility"); 

class Action{
    async clickOnUserInputField(username){
        await performance_glitch_user_locators.user_name.setValue(username);
        await browser.pause(2000);

    }

    async clickOnPasswordInputField(password){
        await performance_glitch_user_locators.password.setValue(password);
        await browser.pause(2000);

    }

    async clickOnLoginButton(){
        await performance_glitch_user_locators.login_button.click();
        await browser.pause(2000);

    }
    
    async clickOnhamburgerButton(){
        await performance_glitch_user_locators.clickOnHamburger_menu.click();
        await browser.pause(2000);
    }
    async clickOnresetAppState(){
        await performance_glitch_user_locators.clickOnResetAppState.click();
        await browser.pause(2000);
    }

    async clickOnCrossButton(){
        await performance_glitch_user_locators.clickOnCrossButton.click();
        await browser.pause(2000);
    }

    async clickOnFilter(){
        await performance_glitch_user_locators.clickOnFilter.click();
        await browser.pause(2000);
    }
    

    async clickOnOption(){
        await performance_glitch_user_locators.clickOnOption.click();
        await browser.pause(2000);
    }

    async addToCart(){
       
        const addTocart= await performance_glitch_user_locators.addTocart;     
        await addTocart[0].getText();
        await addTocart[0].click();  
        await browser.pause(3000);
    }

    async productNames(){
        const productname=await performance_glitch_user_locators.productName;
        const selectedProductNames = [];
        for (let i = 0; i < 1; i++) {
            let productName = await productname[i].getText();
            selectedProductNames.push(productName);

        }
        console.log(selectedProductNames);
        await browser.pause(2000);
        return selectedProductNames;
    }

    async clickOnShoppingCart(){
        await performance_glitch_user_locators.clickOnShoppingButton.click();
        await browser.pause(2000);
    }

    async clickOnCheckout(){
        await performance_glitch_user_locators.clickOnCheckOutButton.click();
        await browser.pause(2000);
    }

    async CartItem_productName(){
        const CartItem_productNames=await performance_glitch_user_locators.CartItem_productName;
        const Add_CartItem_productNames = [];
        for (let i = 0; i < 1; i++) {
            let productName = await CartItem_productNames[i].getText();
            Add_CartItem_productNames.push(productName);

        }
        console.log( Add_CartItem_productNames);
        return Add_CartItem_productNames;
    }

    async totalPrice(){
        const productPrices = await performance_glitch_user_locators.productPrices;
        let expectedTotalPrice = 0;
        for (let i = 0; i < 1; i++) {
        
        let priceText = await productPrices[i].getText();
        let total_price_inNumber=await utility.convertTextToNumber(priceText);
        expectedTotalPrice += total_price_inNumber;
        //return expectedTotalPrice;
        }
        //console.log(expectedTotalPrice);
        return expectedTotalPrice;
    }

    async finalPrice(){

        const price_text=await performance_glitch_user_locators.total_price.getText();
        let priceInNumber=await utility.convertTextToNumber(price_text);
        //console.log(priceInNumber);
        return priceInNumber; 
    }
    
    async Tax(){
        const tax_with_price=await performance_glitch_user_locators.tax.getText();
        console.log(tax_with_price);
        let tax_with_price_IN_number=await utility.convertTextToNumber(tax_with_price);
        console.log(tax_with_price_IN_number);
        return tax_with_price_IN_number; 
    }

    async priceWithTax(){
        const tax_with_price=await performance_glitch_user_locators.added_tax_with_price.getText();
        let tax_with_price_IN_number=await utility.convertTextToNumber(tax_with_price);
        return tax_with_price_IN_number; 
    }

    async finishPurchaseJourney(){
        await performance_glitch_user_locators.finishButton.click();
        await browser.pause(3000);
    }

    async success_massage(){
        let massage=await performance_glitch_user_locators.success_orderMassage.getText();
        return massage;
    }

    async clickOnLogOutButton(){
        await performance_glitch_user_locators.logoutButton.click();
        await browser.pause(3000);
    }

}

module.exports=new Action();