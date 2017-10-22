(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlinjs_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinjs_main'.");
    }
    root.kotlinjs_main = factory(typeof kotlinjs_main === 'undefined' ? {} : kotlinjs_main, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda() {
    println('Listening on port http://localhost:3000');
    return Unit;
  }
  function main(args) {
    var express = require('express');
    var app = express.invoke();
    var middleWareObject = (req, function (res) {
      res.type('text/plain');
      res.send('i am a beautiful butterfly');
    });
    app.get('/', middleWareObject);
    app.listen(3000, main$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('kotlinjs_main', _);
  return _;
}));

//# sourceMappingURL=kotlinjs_main.js.map
