
export const setArray = function(array, options){
    for (var key in array) {
        if (typeof array[key] === "function" )
          array[key] = array[key];

        else if (typeof array[key] !== "object" || key === "value" || key === "compare")
        {          
            array[key] = key in options ? options[key] : array[key];
        }
        else if ( typeof array[key] === "object" && options[key] && options[key].length ) {
          array[key] = options[key];
        }
        else if ( typeof array[key] === "object" ) {
          array[key] =  key in options ? setArray(array[key], options[key] ) : array[key]
        };
    }
    return array;
}

export const setArrayRange = function(array, range, form){

  // Set attributes from input to Object 
  // Min input
  range.min = range.min ? range.min : {}
  range.max = range.max ? range.max : {}

  const inputMin = range.name ? form.querySelector(`[name="${range.name}"]`) : form.querySelector(`[name="${range.min.name}"]`)
  
  if(inputMin){
    range.min.value = inputMin.value
    range.min.min = inputMin.getAttribute('min')
  }
  //Max input
  const inputMax = range.max ? form.querySelector(`[name="${range.max.name}"]`) : false
  if(inputMax){
    range.max.value = inputMax.value
    range.max.max = inputMax.getAttribute('max')
  }


  array = setArray( array, range )

  return array;
}

export const inArray = (data, compare, val) => {

  const toCompare = compare.split('.')


  val = data;

  toCompare.forEach( (t, i) => {
    val = typeof val[t] != "undefined" ? val[t] : false
  })
  return val

}
 