module.exports = () => { return new Min() }

function Min(el) {
  this.label = {
    target: false,
    default: false,
    singular:false,
    plural:false,
    zero:false
  };
  this.value = false;
  this.name = false;
  this.min = false;
  this.default = false;


  return this;
}

Min.prototype.set = function(){
  if(this.name) this.target = document.querySelector(`[name="${this.name}"]`)
  if(this.label.target) this.label.el = document.querySelector(this.label.target)
  
    if(this.target)  {
      
      //  if(this.multiple && this.max.target){
      //    if(this.multiple && Number(this.target.value) <= Number(this.max.target.value) - this.diff) this.update('min')
      //    else this.target.value = Number(this.max.target.value) - this.diff
      //  }

      this.min = this.target.getAttribute('min')
      this.max = this.target.getAttribute('max')
  }

  return this;
}

