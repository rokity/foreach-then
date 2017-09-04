module.exports = (array,iterateFunction,thenFunction)=>
{
    if(checkArray(array) && checkIterateFunction(iterateFunction) && checkThenFunction(thenFunction))
            array.forEach(function(element,index,collection) {
                iterateFunction(element,index,collection);
                if(index==collection.length-1)
                    thenFunction();
            });        
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

