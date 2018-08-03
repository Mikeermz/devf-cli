const fs = require('fs');


const createFile = (apiKey) => {
    return new Promise((resolve,reject) => {
        let apiKeyString = JSON.stringify({apiKey:apiKey})
        fs.writeFile(".devf",apiKeyString,(err,data) => {
            if(err) reject(err)
            resolve(true)
        })


    });
}

module.exports = {
    createFile
}

