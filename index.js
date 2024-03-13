function receivesAFunction(callback) {
    callback();
};

function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }

  const myFunction = returnsANamedFunction();

  myFunction();


  function returnsAnAnonymousFunction() {
    return function(){
        console.log("I am an anonymous function")
    };
  }
