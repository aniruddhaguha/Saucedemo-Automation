const CheckOutInformation_locators=require('./checkout_information_locators');

class Action{
    async firstnameInputField(firstname){
        await CheckOutInformation_locators.firstname.setValue(firstname);
        await browser.pause(2000);

    }
    async lastnameInputField(lastname){
        await CheckOutInformation_locators.lastname.setValue(lastname);
        await browser.pause(2000);
    }
    async zip_or_postal_code(zip_or_postalcode){
        await CheckOutInformation_locators.zip_or_postal_code.setValue(zip_or_postalcode);
        await browser.pause(2000);
    }
    async clickOnContinueButton(){
        await CheckOutInformation_locators.clickOnContinueButton.click();
        await browser.pause(3000);

    }   
}

module.exports=new Action();