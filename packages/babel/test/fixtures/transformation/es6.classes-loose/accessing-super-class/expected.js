"use strict";

var Test = (function (_Foo) {
  babelHelpers.inherits(Test, _Foo);

  function Test() {
    var _Foo$prototype$test, _Foo$prototype$test2;

    babelHelpers.classCallCheck(this, Test);

    woops["super"].test();
    _Foo.call(this);
    _Foo.prototype.test.call(this);

    _Foo.apply(this, arguments);
    _Foo.call.apply(_Foo, [this, "test"].concat(babelHelpers.slice.call(arguments)));

    (_Foo$prototype$test = _Foo.prototype.test).call.apply(_Foo$prototype$test, [this].concat(babelHelpers.slice.call(arguments)));
    (_Foo$prototype$test2 = _Foo.prototype.test).call.apply(_Foo$prototype$test2, [this, "test"].concat(babelHelpers.slice.call(arguments)));
  }

  Test.prototype.test = function test() {
    var _Foo$prototype$test3, _Foo$prototype$test4;

    _Foo.prototype.test.call(this);
    (_Foo$prototype$test3 = _Foo.prototype.test).call.apply(_Foo$prototype$test3, [this].concat(babelHelpers.slice.call(arguments)));
    (_Foo$prototype$test4 = _Foo.prototype.test).call.apply(_Foo$prototype$test4, [this, "test"].concat(babelHelpers.slice.call(arguments)));
  };

  Test.foo = function foo() {
    var _Foo$foo, _Foo$foo2;

    _Foo.foo.call(this);
    (_Foo$foo = _Foo.foo).call.apply(_Foo$foo, [this].concat(babelHelpers.slice.call(arguments)));
    (_Foo$foo2 = _Foo.foo).call.apply(_Foo$foo2, [this, "test"].concat(babelHelpers.slice.call(arguments)));
  };

  return Test;
})(Foo);
