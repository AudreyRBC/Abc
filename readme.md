# ABC Filter 

ABC filter is an open librairy for people who don't make any other filter in their life.

## How to use 

Make sure to install the latest version of ABC filter 

`npm i abcfilter`


```
import ABC from 'abcfilter'


ABC.filter({
    //Your parameters
});

```

### Formats availables

- Json to HTML

### Inputs availables

- [`search`](#search)
- [`select`](#select)
- [`checkbox`](#checkbox)
- [`radio`](#radio)
- range // not yet

### Events availables

- On change (https://www.wolubilis.be/type/a-voir/spectacles/)
- On click ()
- On redirect (https://www.tousapied.be/)

### Params



`url` _typeof string_

 Your json url who contain all informations to compare between filters and datas

___

`create_url`  _typeof boolean_

**optionnal**

Create a friendly url depending on selected filters.
**default set to false**

___

`debug`  _typeof boolean_

**optionnal**

Add warning in the console or more specific error.
**default set to false**
___

### Results

`results` _typeof object_

Define all paramaters to based filter on datas elements in HTML

```
results: {
    target:           false,
    id    :           false,
    visible_class:    false,
    hidden_class :    false,
    before_show  :    false, // not yet
    before_hide  :    false, // not yet
    after_hide   :    false, // not yet
    after_show   :    false, // not yet
}
```

`results`//`target` _typeof string_

Define targets elements by `class`, `attribute` or `id`

___

`results`//`id` _typeof string_

Define params in the json to base on and can match with ids elements.

___

`results`//`visible_class` _typeof string_

**optionnal**

Add class when visible.

___

`results`//`hidden_class` _typeof string_

**optionnal**

Add class when hide.

___

`results`//`before_show` _typeof function_

**optionnal**

Not available

___

`results`//`before_hide` _typeof function_

**optionnal**

Not available

___

`results`//`after_show` _typeof function_

**optionnal**

Not available

___

`results`//`after_hide` _typeof function_

**optionnal**

Not available

___
___
### Number of results

`nb_results` _typeof object_

**optionnal**

Define the number of results in your HTML.

```
nb_results: {
    target: '',
    no_results: '',
    singular: '',
    plural: ''
}

```
`nb_results`//`target` _typeof string_

Define targets elements by `class`, `attribute` or `id`

___

`nb_results`//`no_results` _typeof string_

**optionnal**

Sentence in case of no result.

___

`nb_results`//`no_results` _typeof string_

**optionnal**

Sentence in case of one result. 
Use `-var-` to replace by the number of results.

___

`nb_results`//`no_results` _typeof string_

**optionnal**

Sentence in case of more than one result. 
Use `-var-` to replace by the number of results.

___
___

### Form

`form` _typeof object_

Define container of form target and the right action o apply

```
form: {
    target: 'form',
    action: 'change',
    action_target: '',
}

```


`form`//`target` _typeof string_

Define the container (`class`,`attribute`,`id`, `tag`) that contains all filters.

___

`form`//`action` _typeof string_

Action to apply : `change`, `submit`, `redirect`.

___

`form`//`action` _typeof string_

Define submit target on `submit` or `redirect` actions

**Must be a `<a>`for the redirect action.**

___
___

### Inputs

`inputs` _typeof object_

```
inputs: {
    search:[],
    select:[],
    checkbox:[],
    radio:[],
    range:[], //not yet
}
```
___



# #Search

`inputs`//`search` _typeof array_

**optionnal**

Define one or more `object` by input text or search to filtered
The search has a dependance to fuse.js to control threesold.

```
search: [
    {
        name    : false,
        compare : false,
        url_name: false,
        threshold: 0.4,
        relation: "and",
        value   : "",
    }
]
```

`inputs`//`search`//`name` _typeof string_

Attribute name of the input to based on.

___

`inputs`//`search`//`compare` _typeof array_

Datas to compare with the value of the input.

___

`inputs`//`search`//`url_name` _typeof string_

**optionnal**

**CREATE URL MODE ONLY**

You can add a nice name to replace the input attribute name in the url.

___

`inputs`//`search`//`threshold` _typeof number_

**optionnal**

Define a error threshold 
**default: 0.4**

___

`inputs`//`search`//`relation` _typeof string_

**optionnal**

Relation between this input and other inputs in the form.
**default:  "and"**

___

`inputs`//`search`//`value` _typeof string_

**optionnal**

Define a default value for your input.

___
___

# Select

`inputs`//`select` _typeof array_

**optionnal**

Define one or more `object` by select input  to filtered

```
select: [
    {
        name    : false
        compare : false
        url_name: false
        multiple: false
        operator: "or"
        relation: "and"
        value   : []
        id      : true
    }
]
```


`inputs`//`select`//`name` _typeof string_

Attribute name of the input to based on.

___

`inputs`//`select`//`compare` _typeof string_

Datas to compare with the value of the input.

___

`inputs`//`select`//`url_name` _typeof string_

**optionnal**

**CREATE URL MODE ONLY**

You can add a nice name to replace the input attribute name in the url.

___

`inputs`//`select`//`multiple` _typeof boolean_

**optionnal**

Define if the select input can have several values selected in the same time 

Do not forget to add the attribute on your select

___

`inputs`//`select`//`operator` _typeof string_

**optionnal**

**MULTIPLE MODE ONLY**
Relation between options selected in a select.

**default:  "or"**

___


`inputs`//`select`//`relation` _typeof string_

**optionnal**

Relation between this input and other inputs in the form.
**default:  "and"**

___

`inputs`//`select`//`value` _typeof array_

**optionnal**

Define a default value for your select.

**MULTIPLE MODE ONLY**
Define several values for your select.

___

`inputs`//`select`//`id` _typeof boolean_

**optionnal**

**CREATE URL MODE ONLY**

If `id` is set on true AND options tags have an id attribute, 
the value of the option in the url can be replaced by a nicer name.

___
___


# Checkbox

`inputs`//`checkbox` _typeof array_

**optionnal**

Define one or more `object` by checkbox group to filtered

```
checkbox: [
    {
        name    : false
        compare : false
        url_name: false
        operator: "or"
        relation: "and"
        value   : []
        id      : true
    }
]
```



`inputs`//`checkbox`//`name` _typeof string_

Attribute name of the input to based on.

___

`inputs`//`checkbox`//`compare` _typeof string_

Datas to compare with the value of the input.

___

`inputs`//`checkbox`//`url_name` _typeof string_

**optionnal**

**CREATE URL MODE ONLY**

You can add a nice name to replace the input attribute name in the url.

___


`inputs`//`checkbox`//`operator` _typeof string_

**optionnal**

Relation between inputs checked in a group.

**default:  "or"**

___


`inputs`//`checkbox`//`relation` _typeof string_

**optionnal**

Relation between this input and other inputs in the form.
**default:  "and"**

___

`inputs`//`checkbox`//`value` _typeof array_

**optionnal**

Define one or several values for your checkbox group.

___

`inputs`//`checkbox`//`id` _typeof boolean_

**optionnal**

**CREATE URL MODE ONLY**

If `id` is set on true AND checkbox tags have an id attribute, 
the value of the checkbox in the url can be replaced by a nicer name.

___
___

# Radio

`inputs`//`radio` _typeof array_

**optionnal**

Define one or more `object` by radio group to filtered

```
radio: [
    {
        name    : false
        compare : false
        url_name: false
        relation: "and"
        value   : []
        id      : true
    }
]
```



`inputs`//`radio`//`name` _typeof string_

Attribute name of the input to based on.

___

`inputs`//`radio`//`compare` _typeof string_

Datas to compare with the value of the input.

___

`inputs`//`radio`//`url_name` _typeof string_

**optionnal**

**CREATE URL MODE ONLY**

You can add a nice name to replace the input attribute name in the url.

___


`inputs`//`radio`//`relation` _typeof string_

**optionnal**

Relation between this input and other inputs in the form.
**default:  "and"**

___

`inputs`//`radio`//`value` _typeof array_

**optionnal**

Define one or several values for your radio group.

___

`inputs`//`radio`//`id` _typeof boolean_

**optionnal**

**CREATE URL MODE ONLY**

If `id` is set on true AND radio tags have an id attribute, 
the value of the radio in the url can be replaced by a nicer name.

___
___

Exemple : 


```
{   
    url : 'https://www.myjson_url.be',
    create_url:true,
    results: {
        target: 'my-element'
        id: 'myArray.mySubArray.myIDKey`
        visible_class: 'abc-show',
        hidden_class : 'abc-hide',
    },
    nb_results: {
        target: 'my-element-results'
        no_results: 'Sorry there is no result for your search'
        singular: 'Only -var- result found.',
        plural : 'Your good! We found -var- results for your search.',
    },
    inputs: [
        search: [
            {
                name: "my_search",
                compare: ['data_1', 'myArray.data_2', 'myArray.data_3'],
                url_name: "keywords",
            }
        ]
    ]
}
```