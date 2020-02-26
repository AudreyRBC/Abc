var { inArray }  = require ('../Helpers/Array' );

module.exports = () => { return new Range() }

function Range(){
    this.name    = false
    this.compare = false
    this.url_name= false
    this.min = {
        text:   false,
        default: false,
        value: false,
        name: false,
        min: false
    }
    this.max = {
        text:    false,
        default: false,
        value: false,
        name: false,
        max: false
    }
    this.multiple= false
    this.operator= "or"
    this.relation= "and"

}

Range.prototype.validate = function (data){
    data.inputs = []
    if(!this.multiple) return this.validateMin( data );

    if(this.multiple) {
        const isMin = this.validateMin( data );
        const isMax = this.validateMax( data );

        return isMin && isMax
    }
}



Range.prototype.update = function(options){
    let isValidated;

    if(!this.multiple){
        const input = this.name ? options.el.formObj.querySelector(`[name="${this.name}"]`) : options.el.formObj.querySelector(`[name="${this.min.name}"]`)
        isValidated = this.updateMin( input );
    }

    if(this.multiple) {
        const inputMin = options.el.formObj.querySelector(`[name="${this.min.name}"]`)
        const inputMax = options.el.formObj.querySelector(`[name="${this.max.name}"]`)

        const isMin = this.updateMin( inputMin );
        const isMax = this.updateMax( inputMax );

        isValidated = isMin && isMax
    }
    
    return isValidated
}

Range.prototype.updateMin = function ( input ){
    input.setAttribute('value', input.value)
    this.min.value = input.value
}
Range.prototype.updateMax = function ( input ){
    input.setAttribute('value', input.value)
    this.max.value = input.value
}

Range.prototype.validateMin = function ( data ){
    let isValidated = inArray(data, this.compare, this.min.value);
    return isValidated >= this.min.value;
}
Range.prototype.validateMax = function ( data ){
    let isValidated = inArray(data, this.compare, this.max.value);
    return isValidated <= this.max.value;
}

Range.prototype.create = function(options, values){
    
    values = values[0].split('-');
    
    const inputMin = this.name ? options.formObj.querySelector(`[name="${this.name}"]`) : options.formObj.querySelector(`[name="${this.min.name}"]`)
       
    inputMin.setAttribute('value', values[0])
    this.min.value = values[0]
    this.min.min = inputMin.getAttribute('min')
    inputMin.value = values[0]

    if(values[1]){
        const inputMax = options.formObj.querySelector(`[name="${this.max.name}"]`)
        inputMax.setAttribute('value', values[1])
        this.max.max = inputMin.getAttribute('max')
        this.max.value = values[1]
        inputMax.value = values[1]
    }
}