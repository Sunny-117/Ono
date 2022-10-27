const reg_var = /\{\{(.+?)\}\}/;

class MVVM {
  constructor(el, data) {
    this.el = document.querySelector(el);
    // this._data = data;
    this.data = data;
    this.domPool = {};
    this.init();
  }

  init() {
    this.initData();
    this.initDom();
  }

  initDom() {
    this.bindDom(this.el);
    this.bindInput(this.el);
  }

  initData() {
    const _this = this;
    // this.data = {};

    // for (let key in this._data) {
    //   Object.defineProperty(this.data, key, {
    //     get () {
    //       console.log('获取数据：', key, _this._data[key]);
    //       return _this._data[key];
    //     },
    //     set (newValue) {
    //       console.log('设置数据：', key, newValue);
    //       _this.domPool[key].innerHTML = newValue;
    //       _this._data[key] = newValue;
    //     }
    //   });
    // }

    this.data = new Proxy(this.data, {
      get(target, key) {
        return Reflect.get(target, key);
      },
      set(target, key, value) {
        _this.domPool[key].innerHTML = value;
        return Reflect.set(target, key, value);
      }
    })
  }

  bindDom(el) {
    const childNodes = el.childNodes;

    childNodes.forEach(item => {
      if (item.nodeType === 3) {
        const _value = item.nodeValue;

        if (_value.trim().length) {
          let _isValid = reg_var.test(_value);
          if (_isValid) {
            const _key = _value.match(reg_var)[1].trim();
            this.domPool[_key] = item.parentNode;
            item.parentNode.innerText = this.data[_key] || undefined;
          }
        }
      }

      item.childNodes && this.bindDom(item);
    })
  }

  bindInput(el) {
    const _allInputs = el.querySelectorAll('input');

    _allInputs.forEach(input => {
      const _vModel = input.getAttribute('v-model');

      if (_vModel) {
        input.addEventListener('keyup', this.handleInput.bind(this, _vModel, input), false);
      }
    })
  }

  handleInput(key, input) {
    const _value = input.value;
    this.data[key] = _value;
  }

  setData(key, value) {
    this.data[key] = value;
  }
}

/**
 * 1. 数据 -> 响应式的数据  Object.defineProperty   Proxy
 * 2. input -> input/keyup -> 事件处理函数的绑定 -> 改变数据
 * 3. 相关的DOM -> 数据 => 绑定在一起
 *    操作数据的某个属性 -> 对应DOM就改变
 * 
 *    {
 *      'name': span节点
 *    }
 * 
 */