var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('../../utils/comparestdout')

var nameExercise = ""
 
function prueba(equal) {
 console.log(equal)
}
// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)
exercise.addSetup(function(mode,cb){
   

    cb();

})

// compare stdout of solution and submission
exercise = comparestdout(exercise,nameExercise)







module.exports = exercise