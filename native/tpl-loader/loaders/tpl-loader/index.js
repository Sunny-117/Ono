const  { tplReplace } = require('../utils');
const { getOptions } = require('loader-utils');

function tplLoader (source) {
  source = source.replace(/\s+/g, '');
  const { log } = getOptions(this);

  const _log = log ? `console.log('compiled the file which is from ${ this.resourcePath }')` : '';

  return `
    export default (options) => {
      ${ tplReplace.toString() }
      ${ _log.toString() }
      return tplReplace('${source}', options);
    }
  `
}


module.exports = tplLoader;

/***
 * const info = tpl({
  name: '小野森森',
  age: 34,
  career: 'Web开发老师',
  hobby: '旅行、钢琴'
});
 */

 //<div><h1>{{name}}</h1><p>{{age}}</p><p>{{career}}</p><p>{{hobby}}</p></div>


// function tpl (options) {
//   function tplReplace(template, replaceObject) {
//     return template.replace(/\{\{(.*?)\}\}/g, (node, key) => {
//       return replaceObject[key]
//     })
//   }

//   return tplReplace(`${source}`, options);
// }