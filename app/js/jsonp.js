function jsonp(url,params){
    var $script=document.createElement("script");
    // var url="https://www.baidu.com/su";
    var f=url.indexOf("?")>-1 ? "&":"?";
    url+=f+'_='+Date.now();
    for(var i in params){
        url+="&"+i+"="+params[i];
    }
    $script.src=url;
    document.body.appendChild($script);
    $script.remove();
}

