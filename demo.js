const each = require('./app');
var array = [1,2,3];
each(array,(element,index,array)=>
{   
    console.log("element:"+element);
    console.log("index:"+index);
    console.log("array.length:"+array.length);
},()=>{console.log('done')});