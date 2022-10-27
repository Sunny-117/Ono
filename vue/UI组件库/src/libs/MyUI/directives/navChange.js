export default {
  mounted (el, bindings) { // bind
    const { tabClass, activeClass, currentIndex } = bindings.value;
    
    el.tabClass = tabClass;
    el.activeClass = activeClass;
    el.oTabItems = el.getElementsByClassName(tabClass);

    el.oTabItems[currentIndex].className = `${ tabClass } ${ activeClass }`;
  },
  updated (el, bindings) {
    const { currentIndex } = bindings.value,
          oldIndex = bindings.oldValue.currentIndex,
          { tabClass, activeClass, oTabItems } = el;
    
    oTabItems[oldIndex].className = tabClass;
    oTabItems[currentIndex].className = `${ tabClass } ${ activeClass }`;
  }
}