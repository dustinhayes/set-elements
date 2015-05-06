(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.setElements = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
module.exports = [
  'hidden',
  'high',
  'href',
  'hreflang',
  'http-equiv',
  'icon',
  'id',
  'ismap',
  'itemprop',
  'keytype',
  'kind',
  'label',
  'lang',
  'language',
  'list',
  'loop',
  'low',
  'manifest',
  'max',
  'maxlength',
  'media',
  'method',
  'min',
  'multiple',
  'name',
  'novalidate',
  'open',
  'optimum',
  'pattern',
  'ping',
  'placeholder',
  'poster',
  'preload',
  'pubdate',
  'radiogroup',
  'readonly',
  'rel',
  'required',
  'reversed',
  'rows',
  'rowspan',
  'sandbox',
  'spellcheck',
  'scope',
  'scoped',
  'seamless',
  'selected',
  'shape',
  'size',
  'sizes',
  'span',
  'src',
  'srcdoc',
  'srclang',
  'srcset',
  'start',
  'step',
  'style',
  'summary',
  'tabindex',
  'target',
  'title',
  'type',
  'usemap',
  'value',
  'width',
  'wrap',
  'border',
  'buffered',
  'challenge',
  'charset',
  'checked',
  'cite',
  'class',
  'code',
  'codebase',
  'color',
  'cols',
  'colspan',
  'content',
  'contenteditable',
  'contextmenu',
  'controls',
  'coords',
  'data↵↵',
  'data-*↵↵',
  'datetime',
  'default',
  'defer',
  'dir',
  'dirname',
  'disabled',
  'download',
  'draggable',
  'dropzone',
  'enctype',
  'for',
  'form',
  'formaction',
  'headers',
  'height',
  'accept',
  'accept-charset',
  'accesskey',
  'action',
  'align',
  'alt',
  'async',
  'autocomplete',
  'autofocus',
  'autoplay',
  'autosave',
  'bgcolor'
];

},{}],2:[function(require,module,exports){
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

},{"html-attrs":1}]},{},[2])(2)
});