const  workshopper = require('./workshopper');
const inquirer = require('inquirer')
const questions = require('./questions');
const path  = require("path");
const fs = require('fs');
const createFile = require('./file').createFile

let devfFile = path.join(__dirname,".devf")


const run  = async () => {
    if(fs.existsSync(devfFile)){
       workshopper.execute(process.argv.slice(2))

    }else{
        const key = await inquirer.prompt(questions)
        const  created = createFile(key)
        if(created) workshopper.execute(process.argv.slice(2))
    }

   
}




run();
