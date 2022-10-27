const { randomNum } = require('./utils');

const reg_mark = /^(.+?)\s/;
const reg_sharp = /^\#/;
const reg_crossbar = /^\-/;
const reg_number = /^\d/;

function createTree (mdArr) {
  let _htmlPool = {};
  let _lastMark = '';
  let _key = 0;

  mdArr.forEach((mdFragment) => {
    const matched = mdFragment.match(reg_mark);
    
    if (matched) {
      const mark = matched[1];
      const input = matched['input'];

      if (reg_sharp.test(mark)) {
        const tag = `h${mark.length}`;
        const tagContent = input.replace(reg_mark, '');

        if (_lastMark === mark) {
          _htmlPool[`${tag}-${_key}`].tags = [..._htmlPool[`${tag}-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`];
        } else {
          _lastMark = mark;
          _key = randomNum();
          _htmlPool[`${tag}-${_key}`] = {
            type: 'single',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }

      if (reg_crossbar.test(mark)) {
        const tagContent = input.replace(reg_mark, '');
        const tag = `li`;

        if (reg_crossbar.test(_lastMark)) {
          _htmlPool[`ul-${_key}`].tags = [..._htmlPool[`ul-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`]
        } else {
          _lastMark = mark;
          _key = randomNum();
          _htmlPool[`ul-${_key}`] = {
            type: 'wrap',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }

      if (reg_number.test(mark)) {
        const tagContent = input.replace(reg_mark, '');
        const tag = `li`;

        if (reg_number.test(_lastMark)) {
          _htmlPool[`ol-${_key}`].tags = [..._htmlPool[`ol-${_key}`].tags, `<${tag}>${tagContent}</${tag}>`]
        } else {
          console.log(_lastMark, mark);
          _lastMark = mark;
          _key = randomNum();

          _htmlPool[`ol-${_key}`] = {
            type: 'wrap',
            tags: [`<${tag}>${tagContent}</${tag}>`]
          }
        }
      }
    }
  });

  return _htmlPool;
}


function compileHTML (_mdArr) {
  const _htmlPool = createTree(_mdArr);
  let _htmlStr = '';
  let item;

  for (let k in _htmlPool) {
    item = _htmlPool[k];

    if (item.type === 'single') {
      item.tags.forEach((tag) => {
        _htmlStr += tag;
      });
    } else if (item.type === 'wrap') {
      let _list = `<${k.split('-')[0]}>`;

      item.tags.forEach((tag) => {
        _list += tag;
      });
      _list += `</${k.split('-')[0]}>`;
      _htmlStr += _list;
    }
  }
  
  return _htmlStr;
}

module.exports = {
  compileHTML
}

/**
 * {
  'h1-1606831820464': { type: 'single', tags: [ '<h1>这是一个h1的标题</h1>' ] },
  'ul-1606831824302': {
    type: 'wrap',
    tags: [
      '<li>这是UL列表第1项</li>',
      '<li>这是UL列表第2项</li>',
      '<li>这是UL列表第3项</li>',
      '<li>这是UL列表第4项</li>'
    ]
  },
  'h2-1606831827189': { type: 'single', tags: [ '<h2>这是一个h2的标题</h2>' ] },
  'ol-1606831822499': {
    type: 'wrap',
    tags: [
      '<li>这是OL列表第1项</li>',
      '<li>这是OL列表第2项</li>',
      '<li>这是OL列表第3项</li>',
      '<li>这是OL列表第4项</li>'
    ]
  }
}
 */

/**
 * 
 * # 这是一个h1的标题

- 这是UL列表第1项
- 这是UL列表第2项
- 这是UL列表第3项
- 这是UL列表第4项

## 这时一个h2的标题

1. 这是OL列表第1项
2. 这是OL列表第2项
3. 这是OL列表第3项
4. 这是OL列表第4项
 */

/**
 * {
 *   h1: {
 *     type: 'single',
 *     tags: ['<h1>这是一个h1的标题</h1>']
 *   },
 *   ul: {
 *     type: 'wrap',
 *     tags: [
 *       '<li>这是UL列表第1项</li>',
 *       '<li>这是UL列表第1项</li>',
 *       '<li>这是UL列表第1项</li>',
 *       '<li>这是UL列表第1项</li>'
 *     ]
 *   }
 * }
 * 
 */