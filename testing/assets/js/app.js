import  "../scss/app.scss"


ABC.filter({
    url    :  `https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=stations-villo-disponibilites-en-temps-reel&rows=10`,
    create_url: true,
    debug:true,
    results :
    {
      target   : '.abc',
      action   : 'hide',
      id       : 'fields.number',
      prefix   : 'abc-',
      path     : 'records',
      template : ({ fields }) => {
          return `<div class="abc" id="abc-${fields.number}">
                      <h3>${fields.name}</h3> 
                      <p>${fields.available_bike_stands}</p>
          </div>`
          },
        container: '.abc-results'
      },
    nb_results : {
      target: '.abc-nbresults',
      no_results: ( number ) => `${number} ok`,
      singular: ( number ) => `${number} ok test`,
      plural: ( number ) => `${number} ok tests`,
    },
    form  :
    {
      container: '.abc-filter',
      action: "change",
      // target: ".submit__search"
    },
    inputs: {
      range: [
        {
          // name: "m_range_min",
          compare: "fields.available_bike_stands",
          url_name: "nombre-de-place",
          multiple: true,
          min: {
            name: "m_range_min"
          },
          max: {
            name: "m_range_max"
          }
        }
      ],
    },
    load_more : {
      url : {
        params: "rows",
        add: 5
      },
      action: 'click',
      target: '.btn'
      // thresold: window.innerHeight
    }

    

  })
