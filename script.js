
(function(){
    var name ='repeat'
    if(typeof String[name]!=undefined){
        String.prototype[name]=function(n){
            var str="";
            for (var i=0;i<n;i++){
                str=str+this;
            }
            return str;
        }
    }

})();