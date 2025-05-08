const locked_out_user_locators=require('./locked_out_user_locators');

class Action{
    async clickOnUserInputField(username){
        await locked_out_user_locators.user_name.setValue(username);
        await browser.pause(2000);
    }
    async clickOnPasswordInputField(password){
        await locked_out_user_locators.password.setValue(password);
        await browser.pause(2000);
    }
    async clickOnLoginButton(){
        await locked_out_user_locators.login_button.click();
        await browser.pause(2000);
    }
    async errorMassage(){
        const message=await locked_out_user_locators.error_massage.getText();
        await browser.pause(2000);
        return message; 
    }
}

module.exports=new Action();