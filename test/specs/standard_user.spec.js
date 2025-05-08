const standard_userAction=require('../pages/standard_user/standard_user_action');
const utility=require("../utilities/utility");
const checkout_information_action=require("../pages/checkout_information/checkout_information_action");
var firstname='Anirudha'
var lastname='Guha' 
var zip_or_postal_code='1216'
var username='standard_user';
var password='secret_sauce';

let select_product=[] ;
let  cart_item=[];

let each_item_total_price;

describe("Standard User", ()=>{

    it("Try login with standard_user and verify the error message", async()=>{
        await standard_userAction.clickOnUserInputField(username);
        await standard_userAction.clickOnPasswordInputField(password);
        await standard_userAction.clickOnLoginButton();
        await standard_userAction.clickOnhamburgerButton();
        await standard_userAction.clickOnresetAppState();
    });

    it("Click On Hamburger Menu and Reset App State", async()=>{
        await standard_userAction.clickOnCrossButton();
        await standard_userAction.addToCart();
        select_product=await standard_userAction.productNames();
        await standard_userAction.clickOnShoppingCart();
    });


    it("Click On Checkout Button", async()=>{
        await standard_userAction.clickOnCheckout();
    })

    it("Final Checkout Page", async()=>{
        await checkout_information_action.firstnameInputField(firstname);
        await checkout_information_action.lastnameInputField(lastname);
        await checkout_information_action.zip_or_postal_code(zip_or_postal_code);
        await checkout_information_action.clickOnContinueButton();
    });

    it("Verify Product Name", async()=>{
        cart_item=await standard_userAction.CartItem_productName();
        expect(select_product).toEqual(cart_item);
     });

    it("Verify Total Price", async()=>{
       const totalItemPrice=await standard_userAction.finalPrice();
       each_item_total_price=await standard_userAction.totalPrice();
       expect(totalItemPrice).toEqual(each_item_total_price);
    });

    it("Verify Total Price with Tax", async()=>{
        const Tax=await standard_userAction.Tax();
        console.log(Tax);
        const total_price_with_tax= Tax+each_item_total_price;
        console.log(total_price_with_tax);
        const price_with_tax=await standard_userAction.priceWithTax();
        //console.log(total_price_with_tax);
        console.log(price_with_tax);
        //const each_item_total_price_with_price=await performance_glitch_userAction.totalPrice(totalItemPrice_with_tax);
        expect(total_price_with_tax).toEqual(price_with_tax);
    });

    it("Finish Purchase Jouney", async()=>{
       await standard_userAction.finishPurchaseJourney();
    });

    it("Verify Successful Order", async()=>{
        const successMessage=await standard_userAction.success_massage();
        console.log(successMessage);
        //Thank you for your order!
        await expect(successMessage).toContain("Thank you for your order!");
    });

    it("Reset the app and Logout", async()=>{

        await standard_userAction.clickOnhamburgerButton();
        await standard_userAction.clickOnresetAppState();
        await standard_userAction.clickOnLogOutButton()
       // await browser.quit();
    })

});
