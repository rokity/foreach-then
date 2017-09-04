const each = require('./app');
var array = [1,2,3];
var str= "cane"
each(str,(element,index,array)=>
{   
    console.log("element:"+element);
    console.log("index:"+index);
    console.log("array.length:"+array.length);
},()=>{console.log('done')});