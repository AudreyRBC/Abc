var Fuse = require ('fuse.js' );
var { setArray, inArray }  = require ('../../Helpers/Array' );


module.exports = () => { return new AutoComplete() }

function AutoComplete(){
    this.url = false
    this.datas = false
    this.results = {
        path : ''
    }
    this.label = {
        target: false,
        default: false,
        singular:false,
        plural:false,
        zero:false
    }
    this.max = 100
    this.target = false
    this.template = {}
}
AutoComplete.prototype.construct = function(params){
    let getDatas;
    if (params) setArray(this, params);
    if(this.url) {
        getDatas = this.find
        getDatas()

        
    }

    Promise.all([getDatas]).then( () => {
        var options = { 
            threshold: 0.4,
            keys: compare,
            distance: 10000,
          }
          var fuse = new Fuse(datas, options)
          return value ? fuse.search(value) : datas
    })
    
}
AutoComplete.prototype.find = function() {

    if(this.url){
      fetch(this.url, this)  
      .then( response => response.json() )
      .then( json => { this.Fetch(null, json, this)  })
      .catch(error => this.Fetch(error, null))
    }
  
}
AutoComplete.prototype.Fetch = function(error, success){
    if(error) console.log(error);
    else {
  
      this.datas = success;
      if(this.results.path) {
          this.datas = inArray(this.datas, this.results.path)
      }
 
    }
  }
  
  
//   function autocomplete(options){
  
//     options = {
//       'url'   : options.url ? options.url : '',
//       'datas' : options.datas ? options.datas : '',
//       'no_results' : options.no_results ? options.no_results : '',
//       'max_results_text' : options.max_results_text ? options.max_results_text : '',
//       'max_results': options.max_results ? options.max_results : '',
//       'targets' : options.targets ? options.targets : '',
//       'to_show' : options.to_show ? options.to_show : '',
//     }
  
//     options.targets = document.querySelectorAll(`${options.targets}`);
//     options.datas = getDatas(options);
  
//     if(!options.targets || !options.datas) return
//     init(options)
  
//   }
  
//   function init(options){
  
//     options.targets.forEach( t => {
//       const blockList = createDom_el('ul','autocomplete-items')
//       t.parentNode.appendChild(blockList)
  
//       t.addEventListener('keyup', e => displayMatches(t, options, blockList));
//     })
//   }
  
//   function findMatches(toMatch, options) {
//     return options.datas.filter(d => {
//       const attr = inArray(d, options.to_show)
//       const regex = new RegExp(toMatch, 'gi');
//       return String(attr).match(regex)
//     });
//   }
//   function displayMatches(t, options, blockList) {
//     const toMatch = t.value;
//     if (toMatch && toMatch.length > 0 ) t.parentNode.classList.add('isActive')
//     else t.parentNode.classList.remove('isActive')
  
//     const matchArray = findMatches(toMatch, options);
  
//     let html;
//     if (options.max_results && matchArray.length > options.max_results) html = fullResult(matchArray, options)
//     else if (matchArray.length === 0 ) html = noResult(matchArray, options)
//     else html = results(toMatch, matchArray, options)
  
//     blockList.innerHTML = html;
//     blockList.style.height = [...blockList.children].reduce((tot, num) => tot + Number( num.clientHeight ) + 28 , 0 ) + "px"
  
//     const items = blockList.querySelectorAll('.autocomplete-item');
//     items.forEach(item => {
//       item.addEventListener('click', e => {
//         t.value = item.innerText
//         t.setAttribute('value', item.innerText);
//         t.parentNode.classList.remove('isActive')
//       })
//       document.addEventListener('click', e => {
//         e.target != t && e.target != blockList && e.target != item && e.target.parentNode != blockList ? t.parentNode.classList.remove('isActive') :''
//       })
//     })
  
  
//   }
  
//   function results(toMatch, matchArray, options){
//     return matchArray.map(d => {
//       const attr = inArray(d, options.to_show)
//       const regex = new RegExp(toMatch, 'gi');
//       const name = attr.replace(regex, `<span class="hl">${toMatch}</span>`);
//       return `
//         <li class="autocomplete-item">
//           <span class="name">${name}</span>
//         </li>
//       `;
//     }).join('');
//   }
//   function noResult(matchArray, options){
//       return `
//         <li class="autocomplete-item">
//           <span class="no-result">${options.no_results ? options.no_results : "No results"}</span>
//         </li>
//       `;
//   }
//   function fullResult(matchArray, options){
//       return `
//         <li class="autocomplete-item">
//           <span class="name">${options.max_results_text ? options.max_results_text : "Please type another character to refine your search."}</span>
//         </li>
//       `;
//   }
//   function createDom_el(type, className){
//     const el = document.createElement(type);
//     if(className) el.classList.add(className)
//     return el
//   }
  
  
//   function getDatas(options){
//     if(options.datas) return options.datas;
//     else if(options.url) fetchDatas(options.url, (error, datas) => {
//       if (error){
//         console.log(error)
//       }
//       else{
//         options.datas = datas
//         init(options)
//       }
//     });
//   }
  
//   function fetchDatas(url, callback){
//     fetch(url)
//        .then(response => response.json())
//        .then(json => callback(null, json))
//        .catch(error => callback(error, null))
//   }
  
//   function inArray(data, compare, val){
//     const toCompare = compare.split('.')
//     val = data;
  
//     toCompare.forEach( (t, i) => {
//       val = typeof val[t] != "undefined" ? val[t] : val
//       return val
//     })
//     return val
//   }
  