var { setArray, setArrayRange }  = require ('../Helpers/Array' );


var Checkbox = require( '../Inputs/Checkbox' );
var Radio = require( '../Inputs/Radio' );
var Range = require( '../Inputs/Range' );
var Select = require( '../Inputs/Select' );
var Search = require( '../Inputs/Search' );

var Url = require ( '../Core/Url' );

var LoadMore = require ( '../Options/LoadMore' );


module.exports = ( params ) => { return new Filter( params ) }

function Filter(params){

    this.options = {
      url : params.url ? params.url : false,
      create_url : params.create_url ? params.create_url : false,
    };

    this.url = params.create_url ? new Url() : false;
    this.debug = params.debug ? params.debug : false;
    this.datas = [];
    this.results = {
      target:           false,
      action:           false,
      id    :           false,
      path    :         '',
      prefix       :    '',
      visible_class:    false,
      hidden_class :    false,
      before_show  :    false,
      before_hide  :    false,
      template     :    false,
      container    :    ""
    };

    this.nb_results = {
        target: '',
        no_results: '',
        singular: '',
        plural: ''
    }

    this.form = {
        target: '',
        action: '',
        target: '',
    }

    this.load_more = new LoadMore();

    
    return this;

};

Filter.prototype.construct = function(params){
    this.inputs = {};

    if (params.results) this.results = setArray(this.results, params.results);
    if (params.nb_results) this.nb_results = setArray(this.nb_results, params.nb_results);
    if (params.form) this.form = setArray(this.form, params.form);
    if (params.load_more) {
        this.load_more = setArray(this.load_more, params.load_more)
        this.load_more.init(this)
    };
    
    return this;

} 

Filter.prototype.setInputs = function( inputs ) {

    // --- set inputs --- //
    // for (const key in inputs) {
    //     if (inputs[key])      this.get(inputs, key, capitalize(key))
    // }
    if (inputs.select)      this.get(inputs.select, "select", Select)
    if (inputs.search)      this.get(inputs.search, "search", Search)
    if (inputs.checkbox)    this.get(inputs.checkbox, "checkbox", Checkbox)
    if (inputs.radio)       this.get(inputs.radio, "radio", Radio)
    if (inputs.range)       this.get(inputs.range, "range", Range)

    return this;
}

Filter.prototype.get = function(array, val, fct ) {
    this.inputs[val] = [];

    array.forEach( (el, index)=> {
        let obj = new fct();

        if(val === "range" && el.multiple){
            if(!document.querySelector(`[name="${el.min.name}"]`) && !document.querySelector(`[name="${el.max.name}"]`)){
                delete array[index];
                return
            }
        }
        else if (val === "range" && !el.multiple && !el.name){
            if(!document.querySelector(`[name="${el.min.name}"]`) ){
                delete array[index];
                return
            }
        }
        else{
            if(!document.querySelector(`[name="${el.name}"]`)){
                delete array[index];
                return
            }
        }
        
       
        const els = el.url_name ? el.url_name : el.name;

        if(this.url && location.hash && this.url.params[els] ){
            if( this.url.params[els].indexOf(',') ) this.url.params[els] = this.url.params[els].split(',');
            if (el.id === true) {

                el.value = this.url.params[els].map( input => document.querySelector(`#${input}`).value )

            }
            else{
                el.value = this.url.params[els];
            }

        }

        if(val === "range") this.inputs[val].push( setArrayRange( obj, el, this.formObj ) )
        else this.inputs[val].push( setArray( obj, el ) )

        if(el.value) obj.create(this, el.value);
    })
}
