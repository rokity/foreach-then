
[![Build Status](https://travis-ci.org/rokity/foreach-then.svg?branch=master)](https://travis-ci.org/rokity/foreach-then)

# FOREACH-THEN

It's a shortcut , clean-code version of forEach in Javascript.

## Why?

I did it for `clean-code` , only for this.
We don't need to check if the iterate-function finishes the array and so we need invoke the then-callback .

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
var each = require('foreach-then')
var array = [1,2,3];
each(array,(element,index,array)=>
{   console.log("element:"+element);
    console.log("index:"+index);
    console.log("array.length:"+array.length);
},()=>{console.log('done')});
```

## Contribution

If you make a `pull-request` I'll give you a `beer`. 

