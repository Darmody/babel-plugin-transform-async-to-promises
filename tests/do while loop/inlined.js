function(foo){try{let shouldContinue;const _temp=_do(function(){return Promise.resolve(foo()).then(function(_foo){shouldContinue=_foo;});},function(){return!!shouldContinue;});return Promise.resolve(_temp&&_temp.then?_temp.then(function(){}):void 0);}catch(e){return Promise.reject(e);}}