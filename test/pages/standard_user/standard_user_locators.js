
class standard_user_locators{
    get user_name(){
        return $("//input[contains(@class, 'input_error form_input') and contains(@placeholder,'Username')]"      
        ); }

    get password(){
        return $("//input[contains(@class, 'input_error form_input') and contains(@placeholder,'Password')]");

    } 
    
    get login_button(){
        return $("//input[@class='submit-button btn_action']");

    }

    get clickOnHamburger_menu(){
        return $("//button[@id='react-burger-menu-btn']");
    }

    get clickOnResetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }

    get clickOnCrossButton(){
        return $("//button[@id='react-burger-cross-btn']");
    }

    get addTocart(){
        return $$("//button[contains(text(), 'Add to cart')]");
    }
    
    //selected product name from the home page 
    get productName(){
        return $$("//div[@class='inventory_item_name ']")

    }
    
    get clickOnShoppingButton(){
        return $("//a[@class='shopping_cart_link']");
    }

    get clickOnCheckOutButton(){
        return $("//button[@class='btn btn_action btn_medium checkout_button ']");
    }

    get checkoutInformation(){
        return $("//input[@placeholder='First Name']")
    }

    //verify product name from the checkout page
    get CartItem_productName() {
        return $$("//div[@class='inventory_item_name']");
    }

    get productPrices() {
        return $$("//div[@class='inventory_item_price']");
    }

    get total_price(){
        return $("//div[@class='summary_subtotal_label']");
    }

    //Tax
    get tax(){
        return $("//div[@class='summary_tax_label']");
    }

    get added_tax_with_price(){
        return $("//div[@class='summary_total_label']");
    }
    
    get finishButton(){
        return $("//button[@class='btn btn_action btn_medium cart_button']");
    }

    get success_orderMassage(){
        return $("//h2[@class='complete-header']");
    }

    get logoutButton(){
        return $("//a[@id='logout_sidebar_link']");
    }
}

module.exports=new standard_user_locators();