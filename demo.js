const each = require('./app');
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


