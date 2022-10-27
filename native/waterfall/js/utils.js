var xhr = (function(){
  
  function _doAjax(opt){
    var o = window.XMLHttpRequest ? 
          new XMLHttpRequest :
          new ActiveXObject('Microsoft.XMLHTTP');
       
    if(!o){
      throw new Error('您的浏览器不支持异步发起HTTP请求');
    }
    
    var opt = opt || {},
        type = (opt.type || 'GET').toUpperCase(),
        async = '' + opt.async === 'false' ? false : true,
        dataType = opt.dataType || 'JSON',
        jsonp = opt.jsonp || 'cb',
        jsonpCallback = opt.jsonpCallback || 'jQuery' + randomNum() + '_' + new Date().getTime();
        url = opt.url,
        data = opt.data || null,
        timeout = opt.timeout || 30000,
        error = opt.error || function(){},
        success = opt.success || function(){},
        complete = opt.complete || function(){},
        t = null;

    if(!url){
      throw new Error('您没有填写URL');
    }

    if(dataType.toUpperCase() === 'JSONP' && type !== 'GET'){
      throw new Error('如果dataType为JSONP，type请您设置GET或不设置');
    }

    if(dataType.toUpperCase() === 'JSONP'){
      var oScript = document.createElement('script');
      oScript.src = url.indexOf('?') === -1  
                        ? url + '?' + jsonp + '=' + jsonpCallback
                        : url + '&' + jsonp + '=' + jsonpCallback;
      document.body.appendChild(oScript);
      document.body.removeChild(oScript);
      window[jsonpCallback] = function(data){
        success(data);
      };
      return;
    }

    o.onreadystatechange = function(){
      if(o.readyState === 4){
        if((o.status >= 200 && o.status < 300) || o.status === 304){
          switch(dataType.toUpperCase()){
            case 'JSON':
              success(JSON.parse(o.responseText)); 
              break;
            case 'TEXT':
              success(o.responseText);
              break;
            case 'XML':
              success(o.responseXML);
              break;
            default:
              success(JSON.parse(o.responseText)); 
          } 
        }else{
          error();
        }
        complete();
        clearTimeout(t);
        t = null;
        o = null;
      }
    }

    o.open(type, url, async);
    type === 'POST' && o.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    o.send(type === 'GET' ? null : formatDatas(data));

    t = setTimeout(function(){
      throw new Error('本次请求已超时，API地址：' + url);
      o.abort();
      clearTimeout(t);
      t = null;
      o = null;
    }, timeout);
  }

  function formatDatas(obj){
    var str = '';
    for(var key in obj){
      str += key + '=' + obj[key] + '&';
    }
    return str.replace(/&$/, '');
  }

  function randomNum(){
    var num = '';
    for(var i = 0; i < 20; i++){
      num += Math.floor(Math.random() * 10);
    }
    return num;
  }

  return {
    ajax: function(opt){
      _doAjax(opt);
    },

    post: function(url, data, dataType, successCB, errorCB, completeCB){
      _doAjax({
        type: 'POST',
        url: url,
        data: data,
        dataType: dataType,
        success: csuccessCB,
        error: errorCB,
        complete: completeCB
      });
    },

    get: function(url, dataType, successCB, errorCB, completeCB){
      _doAjax({
        type: 'GET',
        url: url,
        dataType: dataType,
        success: csuccessCB,
        error: errorCB,
        complete: completeCB
      })
    }
  }
})();

function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}

function getScrollHeight(){
　　 var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　 if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　 }
　　 if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　 }
　　 scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　 return scrollHeight;
}

function getWindowHeight(){
　　 var windowHeight = 0;
　　 if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　 }else{
　　　　windowHeight = document.body.clientHeight;
　　 }
　　 return windowHeight;
}










