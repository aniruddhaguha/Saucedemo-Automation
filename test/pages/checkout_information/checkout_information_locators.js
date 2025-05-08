class CheckOutInformation{

    get firstname(){
        return $("//input[@placeholder='First Name']"); 
    
    }
    get lastname(){
        return $("//input[@placeholder='Last Name']");

    } 
    get zip_or_postal_code(){
        return $("//input[@placeholder='Zip/Postal Code']");

    }
    get clickOnContinueButton(){
        return $("//input[@type='submit']");
        
    }
}

module.exports=new CheckOutInformation();