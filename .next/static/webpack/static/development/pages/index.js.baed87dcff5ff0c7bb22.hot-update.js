webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "./pages/styles.js");



var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\wayne\\Documents\\coingecko\\ReactCoinGecko\\pages\\index.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var numeral = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");

function useStats() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('fetching data');
                _context.next = 3;
                return fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd').then(function (res) {
                  return res.json();
                });

              case 3:
                data = _context.sent;
                setStats(data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, []);
  return stats;
}

_s(useStats, "Mp/QVXeoqe/OOvjesPlqtG3ZKME=");

function Stats() {
  _s2();

  var _this = this;

  var stats = useStats();
  if (!stats) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 23
    }
  }, "Loading...");
  console.log(stats);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "statBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, stats.map(function (coin) {
    return __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinContainer"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx("img", {
      style: {
        width: '25px',
        height: 'auto'
      },
      src: coin.image,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, coin.name), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, coin.symbol), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, coin.current_price), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, numeral(coin.circulating_supply).format()), __jsx("h3", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }, numeral(coin.market_cap).format('$0,0[.]00')));
  })));
}

_s2(Stats, "s+Z56IfX4wiafbK0Bc4N0iptpVY=", false, function () {
  return [useStats];
});

_c = Stats;
function IndexPage() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Powered by ", __jsx("a", {
    href: "https://www.coingecko.com/en/api#explore-api",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 27
    }
  }, "CoinGecko API")), __jsx(Stats, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }));
}
_c2 = IndexPage;

var _c, _c2;

$RefreshReg$(_c, "Stats");
$RefreshReg$(_c2, "IndexPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/styles.js":
/*!*************************!*\
  !*** ./pages/styles.js ***!
  \*************************/
/*! exports provided: CoinContainer, CoinData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinContainer", function() { return CoinContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinData", function() { return CoinData; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\nmargin: 10px;\nbackground-color: #e3e3e3\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\ndisplay: flex;\nmargin: 10px;\nbackground-color: #e3e3e3\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CoinContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var CoinData = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZXMuanMiXSwibmFtZXMiOlsibnVtZXJhbCIsInJlcXVpcmUiLCJ1c2VTdGF0cyIsInVzZVN0YXRlIiwic3RhdHMiLCJzZXRTdGF0cyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIlN0YXRzIiwibWFwIiwiY29pbiIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2UiLCJuYW1lIiwic3ltYm9sIiwiY3VycmVudF9wcmljZSIsImNpcmN1bGF0aW5nX3N1cHBseSIsImZvcm1hdCIsIm1hcmtldF9jYXAiLCJJbmRleFBhZ2UiLCJDb2luQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiQ29pbkRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQXJCOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsRUFEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFFaEJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFNBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsb01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBREo7QUFBQSx1QkFFdUJDLEtBQUssQ0FBQyxnRUFBRCxDQUFMLENBQXdFQyxJQUF4RSxDQUE2RSxVQUFBQyxHQUFHO0FBQUEseUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsaUJBQWhGLENBRnZCOztBQUFBO0FBRVVDLG9CQUZWO0FBSUlULHdCQUFRLENBQUNTLElBQUQsQ0FBUjs7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFPWlAsYUFBUztBQUVaLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxTQUFPSCxLQUFQO0FBQ0g7O0dBYlFGLFE7O0FBZVQsU0FBU2EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUNiLE1BQU1YLEtBQUssR0FBR0YsUUFBUSxFQUF0QjtBQUNBLE1BQUcsQ0FBQ0UsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNYSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUVBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNTQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZixXQUNJLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRSxNQUFSO0FBQWdCQyxjQUFNLEVBQUU7QUFBeEIsT0FBWjtBQUE2QyxTQUFHLEVBQUVGLElBQUksQ0FBQ0csS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLSCxJQUFJLENBQUNJLElBQVYsQ0FGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0osSUFBSSxDQUFDSyxNQUFWLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtMLElBQUksQ0FBQ00sYUFBVixDQUpKLEVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLdkIsT0FBTyxDQUFDaUIsSUFBSSxDQUFDTyxrQkFBTixDQUFQLENBQWlDQyxNQUFqQyxFQUFMLENBTEosRUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUt6QixPQUFPLENBQUNpQixJQUFJLENBQUNTLFVBQU4sQ0FBUCxDQUF5QkQsTUFBekIsQ0FBZ0MsV0FBaEMsQ0FBTCxDQU5KLENBREo7QUFVSCxHQVhBLENBRFQsQ0FESixDQURBO0FBa0JIOztJQXZCUVYsSztVQUNTYixROzs7S0FEVGEsSztBQXlCTSxTQUFTWSxTQUFULEdBQXFCO0FBQ2hDLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWM7QUFBRyxRQUFJLEVBQUMsOENBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZCxDQURKLEVBRUksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUg7TUFQdUJBLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN4QjtBQUVBLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7QUFNQSxJQUFNQyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWQ7QUFNQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYmFlZDg3ZGNmZjVmZjBjN2JiMjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0NvaW5Db250YWluZXJ9IGZyb20gXCIuL3N0eWxlcy5qc1wiXHJcbnZhciBudW1lcmFsID0gcmVxdWlyZSgnbnVtZXJhbCcpXHJcblxyXG5mdW5jdGlvbiB1c2VTdGF0cygpIHtcclxuICAgIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmV0Y2hpbmcgZGF0YScpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9dXNkJykudGhlbihyZXMgPT4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBzZXRTdGF0cyhkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiBzdGF0cztcclxufVxyXG5cclxuZnVuY3Rpb24gU3RhdHMoKSB7XHJcbiAgICBjb25zdCBzdGF0cyA9IHVzZVN0YXRzKCk7XHJcbiAgICBpZighc3RhdHMpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRzKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdGF0QmxvY2snPlxyXG4gICAgICAgICAgICAgICAge3N0YXRzLm1hcChjb2luID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29pbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDogJzI1cHgnLCBoZWlnaHQ6ICdhdXRvJ319IHNyYz17Y29pbi5pbWFnZX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NvaW4ubmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjb2luLnN5bWJvbH08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjb2luLmN1cnJlbnRfcHJpY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bnVtZXJhbChjb2luLmNpcmN1bGF0aW5nX3N1cHBseSkuZm9ybWF0KCl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57bnVtZXJhbChjb2luLm1hcmtldF9jYXApLmZvcm1hdCgnJDAsMFsuXTAwJyl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2luQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+UG93ZXJlZCBieSA8YSBocmVmPSdodHRwczovL3d3dy5jb2luZ2Vja28uY29tL2VuL2FwaSNleHBsb3JlLWFwaSc+Q29pbkdlY2tvIEFQSTwvYT48L3A+XHJcbiAgICAgICAgICAgIDxTdGF0cz48L1N0YXRzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb2luQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuZGlzcGxheTogZmxleDtcclxubWFyZ2luOiAxMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzXHJcbmA7XHJcblxyXG5jb25zdCBDb2luRGF0YSA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbjogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENvaW5Db250YWluZXIsXHJcbiAgICBDb2luRGF0YVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0=