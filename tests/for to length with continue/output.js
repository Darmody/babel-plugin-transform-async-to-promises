_async(function(list){let _exit=false;return _continue(_forTo(list,function(i){return _await(list[i](),function(_list$i){if(_list$i){return;}_exit=true;return false;});},function(){return _exit;}),function(_result){return _exit?_result:true;});})