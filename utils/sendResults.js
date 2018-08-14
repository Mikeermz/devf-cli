 var path = require('path')
 var fs = require('fs');
 var {EXERCISE_PATH,API_URL} = require('../const')
 var axios = require('axios');
 var https =  require('https');



module.exports = (equal) =>  {
    
    var current = JSON.parse(fs.readFileSync(path.join(EXERCISE_PATH,'current.json'), 'utf8'));
    var completed = JSON.parse(fs.readFileSync(path.join(EXERCISE_PATH,'completed.json'), 'utf8'));
    var {email} =JSON.parse(fs.readFileSync(path.join(EXERCISE_PATH,'.devf'), 'utf8'));



    if(completed.indexOf(current) == -1 && equal){
        let data = {
            "resolve":[{
                "program":"Cinta Roja",
                "type":current.split('_')[0],
                "exersise":current
            }]
        }
        console.log(data)
        console.log(API_URL+`/student/${email}`)
        
        axios({
            method: 'patch',
            url: API_URL+`/student/${email}`,
            data: data
          }).then((alumno) => {
              console.log('todo chido')
            console.log(alumno)
        }).catch((err) => {
            console.log('todo NO chido')
            console.log(err)

        })

    }else{
        console.log("no hay que enviarlo")
    }



}