const fs = require('fs');
const path =  require('path')
const {EXERCISE_PATH} = require('./const');



const createFile = (email) => {
    return new Promise((resolve,reject) => {
        let apiKeyString = JSON.stringify({ email })
        fs.writeFile(path.join(EXERCISE_PATH,".devf"),apiKeyString,(err,data) => {
            if(err) reject(err)
            resolve(true)
        })


    });
}

module.exports = {
    createFile
}

