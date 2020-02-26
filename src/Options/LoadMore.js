var { inArray }  = require ('../Helpers/Array' );
var Datas = require( '../Core/Datas' )
var {Fetch} = require( '../Helpers/Fetch' )

module.exports = () => { return new LoadMore() }

function LoadMore(){
    this.url =  {
        params : '',
        add : 0,
    }
    this.limit = ''
    this.number = ''

    this.action = ''
    this.thresold = ''
    this.target = ''
    this.search = '';
}

LoadMore.prototype.init = function(el){
    if(this.action === 'click') this.initClick(el)
    
}
LoadMore.prototype.initClick = function(el){
    const btn = document.querySelector(this.target)
    this.search = new URLSearchParams(el.options.url)
    btn.addEventListener('click', e => {
        this.update(el);
    })
}
LoadMore.prototype.update = function(el){
    const number = this.search.get(this.url.params);
    const newNumber = Number(number) + Number(this.url.add)
    this.search.set(this.url.params, newNumber);

    el.options.url = decodeURIComponent(decodeURIComponent( this.search.toString() ));
    

    return Fetch(el.options.url, (error, success) => {
        if(error) console.log(error);
        else { 
            this.datas = success;
            
            this.results = el.results
            
            if( el.results.path ) this.datas = inArray(this.datas, el.results.path);
            if( el.results.template ) this.container = document.querySelector(el.results.container)
              
            const newDatas = el.alldatas.filtered(this.datas, el)

            el.datas = [...el.datas, ...newDatas]
            
            if(el.debug) {
              console.info( el.datas.length + " datas founds")
            }                
        }  
    }); 
}