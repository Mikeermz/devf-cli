var path = require('path')
var os = require('os');

module.exports = {
    API_URL :"https://devfrank.herokuapp.com/api/v1",
    EXERCISE_PATH : path.join(os.homedir(),'.config/cli-devf')
}