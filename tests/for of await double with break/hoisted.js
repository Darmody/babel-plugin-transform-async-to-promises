_async(function(matrix){let _outerInterrupt;function _outerInterrupt2(){return _outerInterrupt;}function _value2(value){return _await(value,_temp);}function _temp(_value){result+=_value;if(result>10){_outerInterrupt=1;}}var result=0;return _continue(_forOf(matrix,function(row){return _continueIgnored(_forOf(row,_value2,_outerInterrupt2));}),function(){return result;});})