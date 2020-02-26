var {Fetch} = require( '../Helpers/Fetch' )
var { inArray }  = require ('../Helpers/Array' );

var onChange = require ( '../Actions/Change' )
var onClick = require ( '../Actions/Click' )
var onRedirect = require ( '../Actions/Redirect' )

var Url = require ( './Url' );

var Template = require ( '../Options/Template' );
var NumberResults = require ( '../Options/NumberResults' );



module.exports = () => { return new Datas() }

function Datas(){
  this.extract = '';
  this.container = '';
  this.datas = []
};

Datas.prototype.get = function(el) {
  return Fetch(el.options.url, (error, success) => {
      if(error) console.log(error);
      else {

        this.datas = success;
        this.results = el.results
        
        if( el.results.path ) this.datas = inArray(this.datas, el.results.path);
        if( el.results.template ) this.container = document.querySelector(el.results.container)
       
          
        el.datas = this.filtered(this.datas, el)

        if( el.nb_results && el.nb_results.target) el.get_nbResult = new NumberResults(el.nb_results, el.datas.length)
        
        console.info("ABC Ready")
        if(el.debug) {
          console.info( "url: " + el.options.url)
          console.info( el.datas.length + " datas founds")
        }
        // if(el.options.create_url === true) el.options.url_settings = new Url();

        this.actions(el)

      }
  })
}

Datas.prototype.filtered = function(datas, el) {
  return datas.filter( (d, i)=> {
    //Status
    if(el.datas[i]) return
    d.hide = false;

    console.log();
    
    if( this.container && !d.abc_selector ) d.template = new Template(this.results, d, this.container)
    
    //stock DOM element
    const id = inArray(d, this.results.id);
    
    d.abc_selector = document.querySelector(`#${this.results.prefix}${id}`)
    
    if(d.abc_selector) return d;
  });

}

Datas.prototype.actions = (el) => {
  let action;
  switch (el.form.action) {
    case 'change':
      action = new onChange( el );
      break;
    case 'submit':
      action = new onClick(el);
      break;
    case 'redirect':
      action = new onRedirect(el);
      break;
  }
}
