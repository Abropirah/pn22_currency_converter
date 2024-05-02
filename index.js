#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.8,
    INR: 83.41,
    PKR: 278.7,
};
let user_answer = await inquirer.prompt([
    {
        name: "From",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "To",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "Number",
    },
]);
let fromAmount = currency[user_answer.From];
let toAmount = currency[user_answer.To];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
