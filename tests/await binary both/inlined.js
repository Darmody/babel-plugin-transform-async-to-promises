function(left,right){try{return Promise.resolve(left()).then(function(_left){return Promise.resolve(right()).then(function(_right){return _left+_right;});});}catch(e){return Promise.reject(e);}}