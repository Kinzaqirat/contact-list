#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.greenBright(`Welcome to contact list`));
let list = [];
let idNumber = 1;
async function main() {
    let askInput = await inquirer.prompt([{
            name: "ask",
            type: "list",
            message: "Select you are option.",
            choices: ["Add contact", "Veiw contact", "Close menu"]
        }]);
    let { list } = askInput;
    if (askInput.ask === "Add contact")
        addContact();
    if (askInput.ask === "Veiw contact")
        veiwContact();
    if (askInput.ask === "Close menu")
        closeMenu();
}
main();
async function addContact() {
    let contactDetails = await inquirer.prompt([{
            name: "personName",
            type: "input",
            message: "Enter person name"
        },
        { name: "numberDetails",
            type: "number",
            message: "Enter phone number"
        }]);
    let { personName, numberDetails } = contactDetails;
    list.push({ ID: idNumber++, name: personName, phoneNumber: numberDetails });
    console.log(`\n New contact number has been added \n`);
    main();
}
;
function veiwContact() {
    if (list.length > 0)
        list.forEach((user) => console.log(`\n ${user.ID}. Person Name: ${user.name} ---- Contact Number: ${user.phoneNumber}`));
    else {
        console.log("No Contact available!");
    }
    main();
}
function closeMenu() {
    console.log(chalk.bgBlueBright("Thank your for using!"));
}
