'use strict';

var forEach = Array.prototype.forEach;
var reduce = Array.prototype.reduce;

var attrs = require('html-attrs');
var rects = ['top', 'right', 'bottom', 'left', 'width', 'height'];

function setAttr(a, b, value) {
  b.setAttribute(value, a.getAttribute(value));
}
function setRect(a, b, value) {
  b.style[value] = a.getBoundingClientRect()[value] + 'px';
}

module.exports = function setElements(group, value, reduct) {
  var target = reduct && (
    'function' === typeof reduct
      ? reduce.call(group, reduct)
      : reduct
  ) || group[0];

  var method = (
    rects.indexOf(value) !== -1
      ? setRect
      : attrs.indexOf(value) !== -1
        ? setAttr
        : false
  );

  if (! method) {
    throw new Error(attr +
      'is not a valid html attribute or client rect value');
  }

  forEach.call(group, function (element) {
    method(target, element, value);
  });
};
