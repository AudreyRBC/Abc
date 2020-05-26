var AutoCompleteInput = require('./Core/Input')
var AutoComplete = module.exports = {
    init: function (params) {
        console.log(params)
        return new AutoCompleteInput().construct(params) 
    }
}