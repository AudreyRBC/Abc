
var ABCFilter = require('./Filter/init.js')
var ABCSelect = require('./Select/init.js')
var ABCRange = require('./Range/init.js')
var ABCAutoComplete = require('./AutoComplete/init.js')


let abc;
var Select = {
    init: function (params) { new ABCSelect.init(params) },
    test: function() { console.log('ABC Select is running') }
};

var Range = {
    init: function (params) { new ABCRange.init(params) },
}
var AutoComplete = {
    init: function (params){ new ABCAutoComplete.init(params) }
}
var Filter = {
    init: function (params) { 
        abc = new ABCFilter.init(params)
        return abc
     },
    test: function() { console.log('ABC Filter is running') }
    // template : function(){
    //     Promise.all([ABC.filter]).then( (abc) =>{
    //         console.log(abc[0]);
    //     } ); 
    // }
}



module.exports = {Filter, Select, Range, AutoComplete};