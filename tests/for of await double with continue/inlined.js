function(matrix){try{var result=0;const _temp2=_forOf(matrix,function(row){let _innerInterrupt=false;const _temp=_forOf(row,function(cell){return Promise.resolve(cell).then(function(value){if(value>10)return;result+=value;if(result<0){_innerInterrupt=true;}});},function(){return _innerInterrupt;});return _temp&&_temp.then?_temp.then(function(){}):void 0;});return Promise.resolve(_temp2&&_temp2.then?_temp2.then(function(){return result;}):result);}catch(e){return Promise.reject(e);}}