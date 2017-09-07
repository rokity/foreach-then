"use strict";

module.exports = (array,iterateFunction,thenFunction)=>
    {
        if(checkArray(array) && checkIterateFunction(iterateFunction) && checkThenFunction(thenFunction))
            {
                var length = array.length;
                var index = -1;
                var async;
                (function next()
                {
                    index++;                
                    
                    if(index == length)
                        {
                            thenFunction(array);
                            return;
                        }                       
                    
                        async = ()  => next();
                        
                        
                        iterateFunction.call(this,array[index], index, array,async);

                })();         

            }


    }               

var checkIterateFunction = (iterateFunction)=>
{
    if(typeof(iterateFunction)!="function")
        throw new ForEachException('\'iterate\' isn\'t a function');
    else
        return true;
}

var checkThenFunction = (thenFunction)=>
{
    if(typeof(thenFunction)!="function")
        throw new ForEachException('\'then\' isn\'t a function');
    else
        return true;
}

var checkArray = (array)=>
{
    if(typeof(array)!="object")
        throw new ForEachException('\'array\' isn\'t an array');
    else if(array.length>0)
        return true;
    else
        throw new ForEachException('\'array\' is empty');
}


function ForEachException(message) {
    this.message = message;
    this.name = 'ForEachException';
  }

