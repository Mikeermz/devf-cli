const  workshopper = require('./workshopper');
const inquirer = require('inquirer')
const questions = require('./questions');
const path  = require("path");
const fs = require('fs');
const createFile = require('./file').createFile
const axios  = require('axios');
const {API_URL,EXERCISE_PATH} = require('./const')
const chalk = require('chalk');

let devfFile = path.join(EXERCISE_PATH,".devf")


const run  = async () => {
    if(fs.existsSync(devfFile)){
       workshopper.execute(process.argv.slice(2))

    }else{
        const {email} = await inquirer.prompt(questions)
       axios(API_URL+`/student/client/${email}`).then((student) => {
        const  created = createFile(email)
            if(created) workshopper.execute(process.argv.slice(2))
       }).catch((err) => {
        console.log(err)
        console.log(chalk.red('Hubo un problema'))

       })

        
    }

   
}




run();
