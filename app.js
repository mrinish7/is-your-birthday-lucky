const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const showMessage = document.querySelector("#output-container");

var alert = (prompt("this site does not store data"));

function compareValues(sum, luckyNumber) {
    if(sum%luckyNumber===0){
        showMessage.innerText=("your birthday is lucky!");
    }else {
        showMessage.innerText=("your birthday is not lucky!");
    }
}

function checkBdayIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value)
} 

function calculateSum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0;
    for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }
    return(sum)
}

checkButton.addEventListener('click',checkBdayIsLucky);
