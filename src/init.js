
var Filter = require('./Core/Filter')
var Datas = require('./Core/Datas')
var ABC = module.exports = {
    filter: function (params) {
        if(!params.form || !document.querySelector(params.form.container) ) {
           console.error('No container form found');
           return;
        }
        const abc =  new Filter(params);
        abc.construct(params);

        abc.formObj = document.querySelector(params.form.container);

        if( params.inputs ) abc.setInputs(params.inputs)

        abc.alldatas = new Datas();
        abc.alldatas.get( abc ) ;
    }
}
