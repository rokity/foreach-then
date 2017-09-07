
[![Build Status](https://travis-ci.org/rokity/foreach-then.svg?branch=master)](https://travis-ci.org/rokity/foreach-then)

# FOREACH-THEN

It's a shortcut , clean-code version of forEach in Javascript with ASYNC .

## Why?

I did it for `clean-code` , only for this.
We don't need to check if the iterate-function finishes and invoke the callback .

### Installation

Yarn :
```
yarn add foreach-then
```
Npm :
```
npm i foreach-then --save
```

#### Example 
```javascript
const each = require('foreach-then');
var numeri = [1,2,3];

each(numeri,(element,index,collection,cb)=>
{   
    //iterate function    
    console.log(collection[index]);
    cb();  
},
(array)=>{
    //then function
    console.log("then")
    console.log(array);
});
```

## Contribution

If you make a `pull-request` I'll give you a `beer`. 

