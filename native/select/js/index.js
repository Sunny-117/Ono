; (function (data) {
  class Select {
    constructor(opt) {
      this.wrapper = document.getElementsByClassName(opt.wrapper)[0];
      this.header = document.getElementsByClassName(opt.header)[0];
      this.option = document.getElementsByClassName(opt.option)[0];
      this.content = document.getElementById(opt.tpl).innerHTML;
      this.input = document.getElementById('search');
      this.selectText = this.header.children[0];
      this.optionList = this.option.children[1];
      this.status = false;
    }

    init() {
      this.render();
    }

    render() {
      this.renderList(data);
      this.bindEvent();
    }

    bindEvent() {
      this.header.addEventListener('click', this.headerClick.bind(this), false);
      this.optionList.addEventListener('click', this.optionListClick.bind(this), false);
      this.input.addEventListener('input', this.matchKeyWords.bind(this), false);
    }

    renderList(data) {
      // var tpl = '';

      // data.forEach(item => {
      //   tpl += Select.replace(this.content, item)
      // });

      // this.optionList.innerHTML = tpl;
      this.optionList.innerHTML = data.reduce((prev, cur) => {
        return prev += Select.replace(this.content, cur)
      }, '')
    }

    headerClick() {
      if (this.status) {
        Select.hideList.call(this);
      } else {
        Select.showList.call(this)
      }
    }

    optionListClick(ev) {
      let e = ev || window.event,
        target = e.target || e.srcElement;

      if (target.tagName.toLowerCase() === 'a') {
        this.selectText.innerHTML = target.innerHTML;
      }

      Select.hideList.call(this);
    }

    matchKeyWords() {
      var val = this.input.value,
        newData = '';

      if (val.length <= 0) {
        return;
      }

      newData = data.filter(item => {
        return item.optionText.toLowerCase().includes(val.toLowerCase())
      })

      if (newData.length <= 0) {
        this.optionList.innerHTML = '<li class="option-item">没有匹配到相应字符</li>';
        return;
      }

      this.renderList(newData);
    }

    static showList() {
      this.status = true;

      this.option.style.display = 'block';

      setTimeout(() => {
        this.option.style.opacity = '1';
      }, 300)
    }

    static hideList() {
      this.status = false;
      setTimeout(() => {
        this.option.style.display = 'none';
      }, 300)

      this.option.style.opacity = '0';
    }

    static replace(tpl, data) {
      return tpl.replace(/{{(.*?)}}/gim, function (node, key) {
        return {
          option: data.option,
          optionText: data.optionText
        }[key]
      })
    }
  }

  window.Select = Select;
})(data);