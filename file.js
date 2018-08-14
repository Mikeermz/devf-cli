const fs = require('fs');


const createFile = (email) => {
    return new Promise((resolve,reject) => {
        let apiKeyString = JSON.stringify({ email })
        fs.writeFile(".devf",apiKeyString,(err,data) => {
            if(err) reject(err)
            resolve(true)
        })


    });
}

module.exports = {
    createFile
}

