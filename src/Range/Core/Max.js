module.exports = () => { return new Max() }

function Max() {
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

Max.prototype.set = function() {
  if(this.max.name) this.max.target = document.querySelector(`[name="${this.max.name}"]`)
  if(this.max.label.target) this.max.label.el = document.querySelector(this.max.label.target)

  if(this.max.target) {
      if(this.multiple && Number(this.min.target.value) + this.diff <= Number(this.max.target.value)) this.update('max')
      else this.max.target.value =  Number(this.min.target.value) + this.diff
      this.max.min = this.max.target.getAttribute('min')
      this.max.max = this.max.target.getAttribute('max')
      // this.update('max')
      // this.updateLine('max')
  }
};