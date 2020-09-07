import  "../scss/app.scss"

import './Actions/Links'
import {Filter, Select, Range, AutoComplete} from './../../../build/abc/abc'

// import {Filter, Select, Range, AutoComplete} from 'abc-lib' 

// import Filter from './../../../build/abc_filter/abc_filter'
// import AutoComplete from './../../../build/abc_autocomplete/abc_autocomplete'
// import Select from './../../../build/abc_select/abc_select'
// import Range from './../../../build/abc_range/abc_range'
// console.log(ABCFilter);


const abc = Filter.init({
    url    :  `https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=stations-villo-disponibilites-en-temps-reel&rows=100`,
    create_url: true,
    // debug:true,
    results :
    {
      target   : '.abc-el',
      action   : 'hide',
      id       : 'fields.number',
      prefix   : 'abc-',
      path     : 'records',
      template : ({ fields }) => {
          return `<div class="abc-el" id="abc-${fields.number}">
                      <h3>${fields.name}</h3> 
                      <p>Stands: ${fields.bike_stands}</p>
                      <p>Availaible: ${fields.available_bike_stands}</p>
          </div>`
        },
      container: '.abc-results--els',
      // onStart: () => { console.log('before'); document.body.style.background = "red" },
      // onComplete: () => { console.log('after'); document.body.style.background = "transparent" },
    },
    nb_results : {
      target: '.abc-nbresults',
      no_results: ( ) => `No place found`,
      singular: ( number ) => `${number} place found`,
      plural: ( number ) => `${number} places found`,
    },
    form  :
    {
      container: '.abc-filter',
      action: "change",
      // target: ".abc-redirect"
    },
    inputs: {
      search: [
        {
          name: 'abc_search',
          compare : ['fields.name', 'fields.address'],
          url_name: "keywords",
          autocomplete : {
            fn : AutoComplete,
            target : '.abc-autocomplete__items',
            label : {
                target: false,
                default: false,
                singular:false,
                plural:false,
                zero:false
            },
            max : 100,
            template: {},
            }
        }
      ],
      checkbox: [
        {
          name: 'abc_status',
          compare : 'fields.status',
          url_name: "status",
        }
      ],
      radio: [
        {
          name: 'abc_contract',
          compare : 'fields.contract_name',
          url_name: "contract_name",
        }
      ],
      // range: [
      //   {
      //     name: "abc_range_min",
      //     compare: "fields.available_bike_stands",
      //     url_name: "available_bike_stands",
      //     // multiple: true,
      //     // limit: 0,
      //     min: {
      //       name: "abc_range_min",
      //       // text_target: '.abc_range_min__label'
      //     },
      //     // max: {
      //     //   name: "abc_range_max",
      //     //   // text_target: '.abc_range_max__label'
      //     // }
      //   }
      // ],
      select: [
        {
          name: "abc_select--simple",
          compare: "fields.bike_stands",
          id:false,
          url_name: "bike_stands",
        },
        {
          name: "abc_select--multi",
          compare: "fields.available_bikes",
          id:false,
          url_name: "available_bikes",
          multiple: true
        }
      ]
    },
    // load_more : {
    //   url : {
    //     params: "rows",
    //     add: 5
    //   },
    //   limit: 300,
    //   action: 'click',
    //   target: '.btn',
    //   thresold: window.innerHeight,
    //   // onStart: () => { console.log('before'); document.body.style.background = "red" },
    //   // onComplete: () => { console.log('after');document.body.style.background = "blue" }
    // },
    // facette: {
    //   visible_class: 'abc-filter-show',
    //   hidden_class: 'abc-filter-hide',
    // }

  })

const container = document.querySelector('.abc-filter');
const filter = document.querySelector('.btn-filter')
filter.addEventListener('click', e =>{
  e.preventDefault();
  container.classList.toggle('abc-filter--open')
})
const reset = document.querySelector('.btn-reset')
reset.addEventListener('click', e =>{
  e.preventDefault();
  abc.reset();
})
  const events = ['click', 'change', 'keyup', 'input']
  events.forEach( event => {
    document.querySelector('.abc-filter').addEventListener(event, e => {
      const values = abc.getValues();
    })
  })

  
  Select.init({
    target : '[name="abc_select--simple"]',
    multiple: false,
    all: true,
    // body : false
  })
  Select.init({
    target : '[name="abc_select--multi"]',
    multiple: true,
    head : {
      default: "Avalaible bike",
      max_char: 30
    }
    // body : false
  })



  // Range.init({
  //   multiple: true,
  //   // diff
  //   min: {
  //     name: "abc_range_min",
  //     label: {
  //       target: '.abc_range_min__label',
  //       zero:(val) => {return `no stand`},
  //       singular:(val) => {return `${val} stand`},
  //       plural:(val) => {return `${val} stands`},
  //     },
  //   },
  //   // max: {
  //   //   name: "abc_range_max",
  //   //   label: {
  //   //     target: '.abc_range_max__label',
  //   //     zero:(val) => {return `no stand`},
  //   //     singular:(val) => {return `${val} stand`},
  //   //     plural:(val) => {return `${val} stands`},

  //   //   },
  //   // }
  //   // body : false
  // })

  // AutoComplete.init({
  //   url    :  `https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=stations-villo-disponibilites-en-temps-reel&rows=100`,
  //   target : "[name='abc_search']",
  //   compare : ['fields.name', 'fields.address'],
  //   results : {
  //     path: 'records'
  //   }
  // })