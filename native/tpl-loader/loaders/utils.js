function tplReplace (template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    return replaceObject[key];
  });
}

module.exports = {
  tplReplace
}