_async(function(list){let _exit;function _temp(_list$i){if(_list$i){_exit=1;}}return _forTo(list,function(i){return _await(list[i](),_temp);},function(){return _exit;});})