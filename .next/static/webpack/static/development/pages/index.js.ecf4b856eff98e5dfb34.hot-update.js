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
    return __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }
    }, __jsx("img", {
      style: "width:25px, height:auto",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJudW1lcmFsIiwicmVxdWlyZSIsInVzZVN0YXRzIiwidXNlU3RhdGUiLCJzdGF0cyIsInNldFN0YXRzIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiU3RhdHMiLCJtYXAiLCJjb2luIiwiaW1hZ2UiLCJuYW1lIiwic3ltYm9sIiwiY3VycmVudF9wcmljZSIsImNpcmN1bGF0aW5nX3N1cHBseSIsImZvcm1hdCIsIm1hcmtldF9jYXAiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBSUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFELENBQXJCOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDVUMsc0RBQVEsRUFEbEI7QUFBQSxNQUNUQyxLQURTO0FBQUEsTUFDRkMsUUFERTs7QUFFaEJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFNBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsb01BQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBREo7QUFBQSx1QkFFdUJDLEtBQUssQ0FBQyxnRUFBRCxDQUFMLENBQXdFQyxJQUF4RSxDQUE2RSxVQUFBQyxHQUFHO0FBQUEseUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsaUJBQWhGLENBRnZCOztBQUFBO0FBRVVDLG9CQUZWO0FBSUlULHdCQUFRLENBQUNTLElBQUQsQ0FBUjs7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURZO0FBQUE7QUFBQTs7QUFPWlAsYUFBUztBQUVaLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxTQUFPSCxLQUFQO0FBQ0g7O0dBYlFGLFE7O0FBZVQsU0FBU2EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUNiLE1BQU1YLEtBQUssR0FBR0YsUUFBUSxFQUF0QjtBQUNBLE1BQUcsQ0FBQ0UsS0FBSixFQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBUDtBQUNYSSxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUVBLFNBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNTQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZixXQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssV0FBSyxFQUFDLHlCQUFYO0FBQXFDLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxLQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELElBQUksQ0FBQ0UsSUFBVixDQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLRixJQUFJLENBQUNHLE1BQVYsQ0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsSUFBSSxDQUFDSSxhQUFWLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtyQixPQUFPLENBQUNpQixJQUFJLENBQUNLLGtCQUFOLENBQVAsQ0FBaUNDLE1BQWpDLEVBQUwsQ0FMSixFQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS3ZCLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQ08sVUFBTixDQUFQLENBQXlCRCxNQUF6QixDQUFnQyxXQUFoQyxDQUFMLENBTkosQ0FESjtBQVVILEdBWEEsQ0FEVCxDQURKLENBREE7QUFrQkg7O0lBdkJRUixLO1VBQ1NiLFE7OztLQURUYSxLO0FBeUJNLFNBQVNVLFNBQVQsR0FBcUI7QUFDaEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBYztBQUFHLFFBQUksRUFBQyw4Q0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFkLENBREosRUFFSSxNQUFDLEtBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSDtNQVB1QkEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWNmNGI4NTZlZmY5OGU1ZGZiMzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgQ29pbkluZm8gZnJvbSBcIi4vc3R5bGVzLmpzXCJcclxudmFyIG51bWVyYWwgPSByZXF1aXJlKCdudW1lcmFsJylcclxuXHJcbmZ1bmN0aW9uIHVzZVN0YXRzKCkge1xyXG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyBkYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbWFya2V0cz92c19jdXJyZW5jeT11c2QnKS50aGVuKHJlcyA9PiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFN0YXRzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIHN0YXRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGF0cygpIHtcclxuICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoKTtcclxuICAgIGlmKCFzdGF0cykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgY29uc29sZS5sb2coc3RhdHMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXRCbG9jayc+XHJcbiAgICAgICAgICAgICAgICB7c3RhdHMubWFwKGNvaW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2luSW5mbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9J3dpZHRoOjI1cHgsIGhlaWdodDphdXRvJyBzcmM9e2NvaW4uaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjb2luLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y29pbi5zeW1ib2x9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y29pbi5jdXJyZW50X3ByaWNlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e251bWVyYWwoY29pbi5jaXJjdWxhdGluZ19zdXBwbHkpLmZvcm1hdCgpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e251bWVyYWwoY29pbi5tYXJrZXRfY2FwKS5mb3JtYXQoJyQwLDBbLl0wMCcpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29pbkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5Qb3dlcmVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3LmNvaW5nZWNrby5jb20vZW4vYXBpI2V4cGxvcmUtYXBpJz5Db2luR2Vja28gQVBJPC9hPjwvcD5cclxuICAgICAgICAgICAgPFN0YXRzPjwvU3RhdHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9