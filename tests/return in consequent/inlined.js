function(foo,bar){try{let _exit=false;const _temp=function(){if(foo){return Promise.resolve(bar()).then(function(baz){if(baz){_exit=true;return baz;}});}}();return Promise.resolve(_temp&&_temp.then?_temp.then(function(_result){return _exit?_result:0;}):_exit?_temp:0);}catch(e){return Promise.reject(e);}}