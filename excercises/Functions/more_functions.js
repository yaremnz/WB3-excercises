

function displayMailingLabel(name, address, city, state, zipcode){
    console.log(name);
    console.log(address);
    console.log(city + ",", state , zipcode)
    // console.log(city + ",", + state, + " " + zipcode);
    //console.log('${city}, ${state}, ${zip}'))// template string backtic
}
displayMailingLabel("Yareli", "123 Street", "Sleepy Town", "GA", "30052")

displayMailingLabel("Kevin", "568 Some Steet", "Glasses Town", "Ohio", "10001")


function addNumbers(num1, num2){
    console.log(num1, "+" , num2, "=", num1 + num2 )
}

addNumbers(10, 3)
addNumbers(16, 5)


function displayReceipt(totalDue, amountPaid){
    console.log("Total Due: ", totalDue)
    console.log("Amount Paid: ", amountPaid)
    console.log(" ")
    console.log("Change Due: ", amountPaid - totalDue)

}

displayReceipt(15, 20);
displayReceipt(15, 15);
displayReceipt(15, 10);
