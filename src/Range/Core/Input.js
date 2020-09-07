var { setArray }  = require ('../../Helpers/Array' );
var Min = require ('./Min' );
var Max = require ('./Max' );

module.exports = (el) => { return new RangeInput(el) }

function RangeInput(el){
    this.diff = 1
    this.multiple = false
    this.name    = false
    this.compare = false
    this.url_name= false
    this.operator= "or"
    this.relation= "and"

    this.min = new Min();
    this.max = new Max();

    this.line = {
        target : this.createLine()
    }

    return this;
    
}
RangeInput.prototype.construct = function(params){

    if (params) setArray(this, params);
    this.min = !this.min.name ? null : this.min.set()
    this.max = !this.max.name ? null : this.max.set()

    if (this.min) { 
      this.update('min')
      // this.updateLine('min')
      this.min.target.parentNode.appendChild(this.line.target)
      this.line.target.width = this.line.target.clientWidth
    }
    if (this.max) { 
      this.update('max')
      this.updateLine('max')
    }
    // if(this.min.name) this.min.target = document.querySelector(`[name="${this.min.name}"]`)
    // if(this.max.name) this.max.target = document.querySelector(`[name="${this.max.name}"]`)
    
    // if(this.min.label.target) this.min.label.el = document.querySelector(this.min.label.target)
    // if(this.max.label.target) this.max.label.el = document.querySelector(this.max.label.target)

    // if(this.min.target)  {
    //     this.min.target.parentNode.appendChild(this.line.target)
    //     this.line.target.width = this.line.target.clientWidth

    //      if(this.multiple && this.max.target){
    //        if(this.multiple && Number(this.min.target.value) <= Number(this.max.target.value) - this.diff) this.update('min')
    //        else this.min.target.value = Number(this.max.target.value) - this.diff
    //      }

    //     this.min.min = this.min.target.getAttribute('min')
    //     this.min.max = this.min.target.getAttribute('max')
    //     if(!this.multiple) this.update('min')
    //     this.update('min')
    //     this.updateLine('min')
    // }
    // if(this.max.target) {
    //     if(this.multiple && Number(this.min.target.value) + this.diff <= Number(this.max.target.value)) this.update('max')
    //     else this.max.target.value =  Number(this.min.target.value) + this.diff
    //     this.max.min = this.max.target.getAttribute('min')
    //     this.max.max = this.max.target.getAttribute('max')
    //     this.update('max')
    //     this.updateLine('max')
    // }
    // this.bindEvents()  
}
RangeInput.prototype.bindEvents = function(){

    // if(this.min.target) this.min.target.addEventListener('input', e => {

    //     if(this.multiple && this.max.target){
    //       if(this.multiple && Number(this.min.target.value) <= Number(this.max.target.value) - this.diff) this.update('min')
    //       else this.min.target.value = Number(this.max.target.value) - this.diff
    //     }
    //     this.updateLine('min')
    //     if(!this.multiple) {
    //         this.update('min')
           
    //     }
    // })
    // if(this.max.target) this.max.target.addEventListener('input', e => {
    //     if(this.multiple && Number(this.min.target.value) + this.diff <= Number(this.max.target.value)) this.update('max')
    //     else this.max.target.value =  Number(this.min.target.value) + this.diff

    //     this.update('max')
    //     this.updateLine('max')
    // })
    // if(this.min.target) this.min.target.addEventListener('reset', e => {
    //     if(this.multiple && Number(this.min.target.value) <= Number(this.max.target.value) - this.diff) this.update('min')
    //     else this.min.target.value = Number(this.max.target.value) - this.diff
    //     this.updateLine('min')
    //     if(!this.multiple) {
    //         this.update('min')
           
    //     }
    //     if(this.multiple && this.max.target){
    //       if(this.multiple && Number(this.min.target.value) + this.diff <= Number(this.max.target.value)) this.update('max')
    //       else this.max.target.value =  Number(this.min.target.value) + this.diff
    //     }
    //     this.update('max')
    //     this.updateLine('max')
    // })

}
RangeInput.prototype.update = function(input){
    this[input].target.setAttribute('value', this[input].target.value)
    this[input].value = this[input].target.value
    let HTML;

    if(Number(this[input].value) === 0){
        if(this[input].label.zero) HTML = this[input].label.zero(this[input].value)
        else if(this[input].label.singular) HTML = this[input].label.singular(this[input].value)
        else if(this[input].label.default) HTML = this[input].label.default(this[input].value)
    }
    else if(Number(this[input].value) === 1){
        if(this[input].label.singular) HTML = this[input].label.singular(this[input].value)
        else if(this[input].label.default) HTML = this[input].label.default(this[input].value)
    }else{
        if(this[input].label.plural) HTML = this[input].label.plural(this[input].value)
        else if(this[input].label.default) HTML = this[input].label.default(this[input].value)
    }

    if(this[input].label.el) this[input].label.el.innerHTML = HTML
}

RangeInput.prototype.createLine = function(){
    const line = document.createElement('span')
    line.classList.add('abc_range__line')
    line.style.transformOrigin = 'left'
    return line
}

RangeInput.prototype.updateLine = function( val ){
    const min = (100 * this.min.value) / this.min.max
    const max = (this.min.value / this.min.max) - (this.max.value / this.min.max)
        
    if(val === 'min'){
        this.line.target.style.left = min + '%'
        if(this.multiple) this.line.target.style.transform = `scaleX(${Math.abs(max)})`
    }
    if(val === 'max'){
        this.line.target.style.transform = `scaleX(${Math.abs(max)})`
    }
}