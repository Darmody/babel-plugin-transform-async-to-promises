function(foo){try{return Promise.resolve(foo()).then(function(_foo){if(_foo){return 1;}else{return 0;}});}catch(e){return Promise.reject(e);}}