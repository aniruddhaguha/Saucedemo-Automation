const performance_glitch_userAction=require('../pages/performance_glitch_user/performance_glitch_user_action');
const utility=require("../utilities/utility");
const checkout_information_action=require("../pages/checkout_information/checkout_information_action");
var firstname='Anirudha'
var lastname='Guha' 
var zip_or_postal_code='1216'
var username='performance_glitch_user';
var password='secret_sauce';

let select_product=[] ;
let  cart_item=[];

let each_item_total_price;

describe("Performance Glitch User", ()=>{

    it("Try login with performance_glitch_user and verify the error message", async()=>{
        await performance_glitch_userAction.clickOnUserInputField(username);
        await performance_glitch_userAction.clickOnPasswordInputField(password);
        await performance_glitch_userAction.clickOnLoginButton();
        await performance_glitch_userAction.clickOnhamburgerButton();
        await performance_glitch_userAction.clickOnresetAppState();
        await performance_glitch_userAction.clickOnCrossButton();
    });

    it("Click On hamburger Menu and Reset App State", async()=>{
        await performance_glitch_userAction.clickOnFilter();
        await performance_glitch_userAction.clickOnOption();
        await performance_glitch_userAction.addToCart();
        select_product=await performance_glitch_userAction.productNames();
        await performance_glitch_userAction.clickOnShoppingCart();
    });
    
    it("Click On Checkout Button", async()=>{
        await performance_glitch_userAction.clickOnCheckout();
    });

    it("Final Checkout Page", async()=>{
        await checkout_information_action.firstnameInputField(firstname);
        await checkout_information_action.lastnameInputField(lastname);
        await checkout_information_action.zip_or_postal_code(zip_or_postal_code);
        await checkout_information_action.clickOnContinueButton();
    });

    it("Verify Product Name", async()=>{    
        cart_item=await performance_glitch_userAction.CartItem_productName();
        expect(select_product).toEqual(cart_item);
    });

    it("Verify Total Price", async()=>{
       const totalItemPrice=await performance_glitch_userAction.finalPrice();
       each_item_total_price=await performance_glitch_userAction.totalPrice();
       console.log(totalItemPrice);
       console.log(each_item_total_price);
       expect(totalItemPrice).toEqual(each_item_total_price);
    });

    it("Verify Total Price with Tax", async()=>{
        const Tax=await performance_glitch_userAction.Tax();
        console.log(Tax);
        const total_price_with_tax= Tax+each_item_total_price;
        console.log(total_price_with_tax);
        const price_with_tax=await performance_glitch_userAction.priceWithTax();
        //console.log(total_price_with_tax);
        console.log(price_with_tax);
        //const each_item_total_price_with_price=await performance_glitch_userAction.totalPrice(totalItemPrice_with_tax);
        expect(total_price_with_tax).toEqual(price_with_tax);
    });

    it("Finish Purchase Jouney", async()=>{
       await performance_glitch_userAction.finishPurchaseJourney();
    });

    it("Verify Successful Order", async()=>{
        const successMessage=await performance_glitch_userAction.success_massage();
        console.log(successMessage);
        //Thank you for your order!
        await expect(successMessage).toContain("Thank you for your order!");
    });

    it("Reset the app and Logout", async()=>{

        await performance_glitch_userAction.clickOnhamburgerButton();
        await performance_glitch_userAction.clickOnresetAppState();
        await performance_glitch_userAction.clickOnLogOutButton()
    })

});