var privacy = document.querySelector(".privacy");
var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var btnClose = document.getElementById("#close");
var outputContainer = document.querySelector("#output-container");
var checkBtn = document.querySelector("#check-btn");

checkBtn.addEventListener("click", checkBirthdayIsLucky);

function calculateSum(date){
    let sum=0;
    date = date.replaceAll("-", "");
    for (let digit of date) {
        sum = sum + Number(digit);
      }
      return sum;
    }

    function compareValues(sum, luckyNumber){
        if(sum%luckyNumber===0){
            return showMessage(`${numberToCheck} is a lucky number!! 🤗🤗🤗 `);
        }
        showMessage(`${numberToCheck} is not that lucky 😕`);
    }

    function showMessage(message){
        outputContainer.innerText = message;
    }

    function checkBirthdayIsLucky(){
        const dob = dateOfBirth.value;
        const numberToCheck = luckyNumber.value;
        if (dob && numberToCheck) {
            const sumOfDate = calculateSum(date);
            compareValues(sumOfDate, numberToCheck);
          } else {
            showMessage("Please enter both the fields");
          }
        };
    

    

    
