"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getMonthDays", {
  enumerable: true,
  get: function get() {
    return _date.getMonthDays;
  }
});
Object.defineProperty(exports, "getSeparatorDate", {
  enumerable: true,
  get: function get() {
    return _date.getSeparatorDate;
  }
});
Object.defineProperty(exports, "setArraySessionStorage", {
  enumerable: true,
  get: function get() {
    return _storage.setArraySessionStorage;
  }
});
Object.defineProperty(exports, "getArraySessionStorage", {
  enumerable: true,
  get: function get() {
    return _storage.getArraySessionStorage;
  }
});
Object.defineProperty(exports, "addUrlParam", {
  enumerable: true,
  get: function get() {
    return _url.addUrlParam;
  }
});

var _date = require("./date/");

var _storage = require("./storage/");

var _url = require("./url/");

// Butterfly-Knife: date tools
// Butterfly-Knife: storage tools
// Butterfly-Knife: url tools
// include all function to BFN
// BFN = Butterfly Knife
(function () {
  var BFN = {
    getMonthDays: _date.getMonthDays,
    getSeparatorDate: _date.getSeparatorDate,
    setArraySessionStorage: _storage.setArraySessionStorage,
    getArraySessionStorage: _storage.getArraySessionStorage,
    addUrlParam: _url.addUrlParam
  };

  if (typeof window == "undefine") {
    return;
  }

  for (var i in BFN) {
    window["BFN_" + i] = BFN[i];
  }

  window.BFN = BFN;
})();