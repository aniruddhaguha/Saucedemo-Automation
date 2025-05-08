const locked_out_user_Action=require('../pages/locked_out_user/locked_out_user_action');
var username='locked_out_user';
var password='secret_sauce'

describe("Locked Out User", ()=>{

    it("Try login with locked_out_user and verify the error message", async()=>{
        await locked_out_user_Action.clickOnUserInputField(username);
        await locked_out_user_Action.clickOnPasswordInputField(password);
        await locked_out_user_Action.clickOnLoginButton();
        const message = await locked_out_user_Action.errorMassage();
        console.log(message);
        await expect(message).toContain("Epic sadface: Sorry, this user has been locked out.");
    });

});