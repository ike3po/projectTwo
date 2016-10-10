/**
 *   @author Thrasher, Isaac ()
 *   @version 0.0.3
 *   @summary Project 2 || created: 09.22.2016
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
}

function setLastName() {
    customerLastName = PROMPT.question('\n Please enter your last name: ');
}

function setFirstName() {
    customFirstName = PROMPT.question('\n Please enter your first name: ');
}

function setBirthdate() {
    const MIN_YEAR = 1900,
        MAX_YEAR = 2002;
    currentYear = 2016;
    birthdate = PROMPT.question('\n What year were you born? ');
    age = (currentYear - birthdate);
    if (birthdate < MIN_YEAR || birthdate > MAX_YEAR){
        console.log(`${birthdate} is an incorrect value. Please try again.`);
        return setBirthdate();
    }
}

function setPremiumDate() {
    year = (2018);
    day = (25);
    month = (10);
}

function setNumOfFaults() {
    const MIN_FAULT = 0,
        MAX_FAULT = 4;
    numberOfFaults = PROMPT.question('\n How many at-fault accidents do you have within the last three years? ');
    if (numberOfFaults < MIN_FAULT || numberOfFaults > MAX_FAULT){
           console.log(`${numberOfFaults} is an  incorrect value. Please try again.`);
           return setNumOfFaults();
       }



}

function totalPrice() {
    basePrice = 100;
    const YOUNG_AGE = 20;
    const MIDDLE_AGE = 10;
    const MEDIUM_AGE = 0;
    const OLD_AGE = 30;
    const AT_FAULT = 50;
    const YOUNG =15,
        MIDDLE = 30,
        MEDIUM = 45,
        OLD = 60;

    if (age > 0){
        if (age > YOUNG && age < MIDDLE){
            totalBill = YOUNG_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }
        else if (age > MIDDLE && age < MEDIUM) {
            totalBill = MIDDLE_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }
        else if (age > MEDIUM && age < OLD){
            totalBill = MEDIUM_AGE + basePrice + (numberOfFaults * AT_FAULT);
        }

        else if (age > OLD){
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
    console.log(`\n Your age is\ ${age}.`);
    console.log(`\n Your Premium date is ${month} ${day}, ${year}: `)
    console.log(`\n Your total bill is\ ${totalBill} dollars: `);
}





