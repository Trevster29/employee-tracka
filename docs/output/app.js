const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { parse } = require("path");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

async function start(){
    let goTeam = [];
    await inquirer.prompt(
        {
            type: 'number',
            name: 'amountOnTeam',
            message:"How many are on the team?",
            validate: (value) => {
                var valid = !isNaN(parse(value));
                return valid || 'Numbers only';
            },
        }
    )
    .then((data) => {
        amountOnTeam = data.amountOnTeam;
        console.log(amountOnTeam);
    });

    for(i = 0; i < teamSize; i++){
        let name;
        let company;
        let job;
        let contact;

        await inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What's your name?",
            },
            {
                type: "input",
                name: "company",
                message: "What's the company name?"
            },
            {
                type: "input",
                name: "job"
                message: "What is your job?"
                choices: ["Seasonal", "Year-long", "Hourly"],
            },
            {
                type: "input",
                name: "contact"
                message: "How should we contact you?",
            },
        ])
    });
    .then((data) => {
        name = data.name;
        company = data.company;
        job = data.job;
        contact = data.contact;
    }



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
let htmlCompleteTeam = render(goTeam);
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
fs.writeFile(outputPath, htmlCompleteTeam, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log("finished");
    }
});
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
start();
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
