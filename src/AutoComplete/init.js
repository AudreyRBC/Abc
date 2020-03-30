var Input = require('./Core/Input')
var AutoComplete = module.exports = {
    init: function (params) {
        return new Input().construct(params) 
    }
}