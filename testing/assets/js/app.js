import  "../scss/app.scss"


ABC.filter({
    url    :  `https://api.jcdecaux.com/vls/v1/stations?apiKey=6d5071ed0d0b3b68462ad73df43fd9e5479b03d6&contract=Bruxelles-Capitale`,
    create_url: true,
    debug:true,
    results :
    {
      target   : '.abc',
      action   : 'hide',
      id       : 'number',
      prefix   : 'abc-',
      template : ({ number, name, available_bike_stands }) => {
          return `<div class="abc" id="abc-${number}">
                      <h3>${name}</h3> 
                      <p>${available_bike_stands}</p>
          </div>`
          },
        container: '.abc-results'
      },
    // infiniteScroll : {
    //   target      : '.pager--scroll',
    //   container   : '[data-view]',
    //   thresholds  :  window.innerHeight,
    // },
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
          compare: "available_bike_stands",
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
    }

    

  })
