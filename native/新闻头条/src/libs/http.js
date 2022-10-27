import { BASE_URL } from '../config';

const doAjax = Symbol('doAjax');

class HTTP {
  [doAjax] (options) {
    let o = window.XMLHttpRequest ? 
            new XMLHttpRequest() :
            new ActiveXObject('Microsoft.XMLHTTP');

    if(!o){
      throw new Error('您的浏览器不支持异步发起HTTP请求');
    }

    let opt = options || {},
        type = (opt.type || 'GET').toUpperCase(),
        async = '' + opt.async === 'false' ? false : true,
        dataType = opt.dataType || 'JSON',
        jsonp = opt.jsonp || 'cb',
        jsonpCallback = opt.jsonpCallback || 'jQuery' + randomNum() + '_' + new Date().getTime(),
        url = BASE_URL + options.url,
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
      window[jsonpCallback] = (data) => {
        success(data);
      };
      return;
    }

    o.onreadystatechange = () => {
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

    t = setTimeout(() => {
      o.abort();
      clearTimeout(t);
      t = null;
      o = null;
      throw new Error('本次请求已超时，API地址：' + url);
    }, timeout);
  }

  ajax (opt) {
    this[doAjax](opt);
  }

  post (url, data, dataType, successCB, errorCB, completeCB) {
    this[doAjax]({
      type: 'POST',
      url: url,
      data: data,
      dataType: dataType,
      success: successCB,
      error: errorCB,
      complete: completeCB
    });
  }

  get (url, dataType, successCB, errorCB, completeCB) {
    this[doAjax]({
      type: 'GET',
      url: url,
      dataType: dataType,
      success: successCB,
      error: errorCB,
      complete: completeCB
    });
  }
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

export default HTTP;