/**
 *   @author Thrasher, Isaac ()
 *   @version 0.0.3
 *   @summary Project 1 || created: 09.22.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let customerLastName, customFirstName;
let policyNumber, birthdate, basePrice, totalBill, month, day, year, currentYear, age, numberOfFaults;

function main() {
    process.stdout.write('\x1Bc');
    if (continueResponse == null) {
        setContinueResponse();
    }
    if (continueResponse === 1) {
        setPolicyNumber();
        setLastName();
        setFirstName();
        setBirthdate();
        setPremiumDate();
        setNumOfFaults();
        totalPrice();
        verify();
        setContinueResponse();
        return main();
    }
    printGoodBye();
}

main();

function setContinueResponse() {
    if (continueResponse === 1) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        if (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = 1;
            return setContinueResponse();
        }
    } else {
        continueResponse = 1;
    }
}

function setPolicyNumber() {
    policyNumber = Math.floor((Math.random() * 100) + 1);
    //console.log(`\n Your policy number is \t${policyNumber}`);
}

function setLastName() {
    customerLastName = PROMPT.question('\n Please enter your last name: ');
}

function setFirstName() {
    customFirstName = PROMPT.question('\n Please enter your first name: ');
}

function setBirthdate() {
    currentYear = 2016;
    birthdate = PROMPT.question('\n What year were you born? ');
    age = (currentYear - birthdate);
    if (age !==
}

function setPremiumDate() {
    year = (2018);
    day = (25);
    month = (10);
    //console.log(year, day, month);
}

function setNumOfFaults() {
    numberOfFaults = PROMPT.question('\n How many at-fault accidents do you have within the last three years? ');
}

function totalPrice() {
    basePrice = 100;
    const YOUNG_AGE = 20;
    const MIDDLE_AGE = 10;
    const MEDIUM_AGE = 0;
    const OLD_AGE = 30;
    const AT_FAULT = 50;

    if (age > 0){
        if (age > 15 && age < 30){
            totalBill = YOUNG_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }
        else if (age > 30 && age < 45) {
            totalBill = MIDDLE_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }
        else if (age > 45 && age < 60){
            totalBill = MEDIUM_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }

        else if (age > 60){
            totalBill = OLD_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }
    }

}

function printGoodBye() {
    process.stdout.write('\x1Bc');
    console.log(`\n\tGoodbye.`);
}

function verify() {
    process.stdout.write('\x1Bc');
    console.log(`\n Your policy number is\t${policyNumber}. `);
    console.log(`\n Your full name is\ ${customFirstName} ${customerLastName}.`);
    //console.log(`\n Your first name is\ ${customFirstName}.`);
    console.log(`\n Your age is\ ${age}.`);
    console.log(`\n Your Premium date is ${month} ${day}, ${year}: `)
    //console.log(`\n You have\ ${numberOfFaults} at fault accidents.`);
    console.log(`\n Your total bill is\ ${totalBill} dollars: `);
}





