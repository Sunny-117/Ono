;(function(doc){
  
  var Waterfall = function(wrapper, opt){
    this.oWrapper = doc.getElementsByClassName(wrapper)[0];
    this.column = opt.column;
    this.gap = opt.gap;
    this.imgApi = opt.imgApi;
    this.itemWidth = (this.oWrapper.offsetWidth - (this.column - 1) * this.gap) / this.column;
    this.pageNum = 0;
    this.pageSize = 0;
    this.heightArr = [];
  }

  Waterfall.prototype = {
    init: function(){
      this.getImgDatas(this.pageNum);
      this.bindEvent();
    },

    bindEvent: function(){
      window.addEventListener('scroll', this.scrollToBottom.bind(this), false);
    },

    scrollToBottom: function(){
      if(getScrollTop() + getWindowHeight() == getScrollHeight()){
        this.pageNum++;

        if(this.pageNum <= this.pageSize - 1){
          this.getImgDatas(this.pageNum);
        }
      }
    },

    getImgDatas: function(pageNum){
      var _self = this;

      xhr.ajax({
        url: this.imgApi,
        type: 'POST',
        dataType: 'JSON',
        data: {
          pageNum: pageNum
        },
        success: function(data){
          if(data != 'NO DATA'){
            var pageData = JSON.parse(data.pageData);
            _self.pageSize = parseInt(data.pageSize);
            _self.renderList(pageData, _self.pageNum);
          }
        }
      });
    },
    
    renderList: function(data, pageNum){
      var _self = this,
          oItems = null,
          minIdx = -1;

      data.forEach(function(elem, idx){
        var oItem = doc.createElement('div'),
            oImg = new Image(),
            oTitle = doc.createElement('div');
            itemLeft = (idx + 1) % _self.column === 1 ? '0' : idx * (_self.itemWidth + _self.gap);
      
        oItem.className = 'wf-item';
        oItem.style.width = _self.itemWidth + 'px';
        oItem.style.height = (elem.height * _self.itemWidth / elem.width + 44) + 'px';
        oImg.src = elem.img;
        oTitle.innerHTML = '<p>测试文本</p>';
        oTitle.className = 'title-box';

        oItem.appendChild(oImg);
        oItem.appendChild(oTitle);
        _self.oWrapper.appendChild(oItem);

        oItems = doc.getElementsByClassName('wf-item');
        if(idx < _self.column && pageNum == 0){
          _self.heightArr.push(oItem.offsetHeight);
          oItem.style.top = '0';
          oItem.style.left = itemLeft + 'px';
        }else{
          minIdx = getMinIdx(_self.heightArr);
          oItem.style.left = oItems[minIdx].offsetLeft + 'px';
          oItem.style.top = (_self.heightArr[minIdx] + _self.gap) + 'px';
          _self.heightArr[minIdx] += (oItems[idx].offsetHeight + _self.gap);
        }
        oImg.style.opacity = '1';
      });
    }
  }
  
  function getMinIdx(arr){
    return [].indexOf.call(arr, Math.min.apply(null, arr));
  }

  window.Waterfall = Waterfall;

})(document);








