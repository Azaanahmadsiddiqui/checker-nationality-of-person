import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "QuestionOne",
        message: "Choose your country:",
        type: "list",
        choices: ["PAKISTAN", "USA", "UK", "INDIA", "CANADA"]
    },
    {
        name: "QuestionTwo",
        message: "choose your currency:",
        type: "list",
        choices: ["PKR", "USD", "GBP", "INR", "CDA"]
    }
]);
if (answer.QuestionOne === "PAKISTAN") {
    if (answer.QuestionTwo === "PKR") {
        console.log("Now it's confirm that you're a 'Pakistani' because you entered correct information.");
    }
    else {
        console.log("You are'nt a 'Pakistani' bacause you entered something wrong information");
    }
}
else if (answer.QuestionOne === "USA") {
    if (answer.QuestionTwo === "USD") {
        console.log("Now it's confirm that you're a 'American' because you entered correct information.");
    }
    else {
        console.log("You are'nt a 'American' bacause you entered something wrong information.");
    }
}
else if (answer.QuestionOne === "UK") {
    if (answer.QuestionTwo === "GBP") {
        console.log("Now it's confirm that you're a 'British' because you entered correct information.");
    }
    else {
        console.log("You are'nt a 'British' bacause you entered something wrong information.");
    }
}
else if (answer.QuestionOne === "INDIA") {
    if (answer.QuestionTwo === "INR") {
        console.log("Now it's confirm that you're a 'Indian' because you entered correct information.");
    }
    else {
        console.log("You are'nt a 'Indian' bacause you entered something wrong information.");
    }
}
else if (answer.QuestionOne === "CANADA") {
    if (answer.QuestionTwo === "CDA") {
        console.log("Now it's confirm that you're a 'Canadian' because you entered correct infomation.");
    }
    else {
        console.log("You are'nt a 'Canadian' bacause you entered something wrong information.");
    }
}
else {
    console.log("*Please Enter a Valid Value*");
}
