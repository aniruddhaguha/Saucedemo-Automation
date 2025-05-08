
class locked_out_user_login_locators{

    get user_name(){
        return $("//input[contains(@class, 'input_error form_input') and contains(@placeholder,'Username')]"      
        ); }

    get password(){
        return $("//input[contains(@class, 'input_error form_input') and contains(@placeholder,'Password')]");

    } 
    get login_button(){
        return $("//input[@class='submit-button btn_action']");

    }
    get error_massage(){
        return $("//div[@class='error-message-container error']");
    } 
}

module.exports=new locked_out_user_login_locators();