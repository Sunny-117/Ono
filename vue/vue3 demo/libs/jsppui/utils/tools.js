export function getStyle (el, prop) {
  return parseInt(window.getComputedStyle(el, null)[prop]);
}