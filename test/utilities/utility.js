class Utility{

    async convertTextToNumber(text){
        //const value =parseFloat(text.replace(/[$,]/g, ""));
        const value = parseFloat(text.replace(/[^\d.]/g, ''));
        return value;
    }

    async randomNumber(max, min){
        const randomNumber =Math.floor(Math.random()*(max-min+1))+min;
        return randomNumber;
    }
}

module.exports=new Utility();