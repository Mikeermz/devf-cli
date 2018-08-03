var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
let generateRandom = require('../../utils').generateRandom

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

//Genera Entero aleatorio 

exercise.addSetup(function(mode,cb){
    
    let int1 = generateRandom(1,15)
    let int2 = generateRandom(1,15)


    this.submissionArgs = [int1,int2]
    this.solutionArgs = [int1,int2]


    cb();

})

module.exports = exercise