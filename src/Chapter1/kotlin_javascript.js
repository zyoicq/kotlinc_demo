var kotlin = require("kotlin");

if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_javascript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_javascript'.");
}
var kotlin_javascript = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function greeting(name) {
    println('hello ' + name);
  }
  function main(args) {
    greeting('\u674E\u5B81');
  }
  _.greeting_61zpoe$ = greeting;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlin_javascript', _);
  return _;
}(typeof kotlin_javascript === 'undefined' ? {} : kotlin_javascript, kotlin);
