function(delay,callback){try{const _temp=function(){if(delay)return Promise.resolve(0).then(function(){});}();return Promise.resolve(_temp&&_temp.then?_temp.then(function(){return callback();}):callback());}catch(e){return Promise.reject(e);}}