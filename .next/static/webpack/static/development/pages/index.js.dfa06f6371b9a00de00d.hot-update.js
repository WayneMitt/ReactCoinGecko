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
      style: {
        width: 25,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJudW1lcmFsIiwicmVxdWlyZSIsInVzZVN0YXRzIiwidXNlU3RhdGUiLCJzdGF0cyIsInNldFN0YXRzIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiU3RhdHMiLCJtYXAiLCJjb2luIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZSIsIm5hbWUiLCJzeW1ib2wiLCJjdXJyZW50X3ByaWNlIiwiY2lyY3VsYXRpbmdfc3VwcGx5IiwiZm9ybWF0IiwibWFya2V0X2NhcCIsIkluZGV4UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFJQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBckI7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxFQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUVoQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsU0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFESjtBQUFBLHVCQUV1QkMsS0FBSyxDQUFDLGdFQUFELENBQUwsQ0FBd0VDLElBQXhFLENBQTZFLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFBaEYsQ0FGdkI7O0FBQUE7QUFFVUMsb0JBRlY7QUFJSVQsd0JBQVEsQ0FBQ1MsSUFBRCxDQUFSOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQU9aUCxhQUFTO0FBRVosR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBLFNBQU9ILEtBQVA7QUFDSDs7R0FiUUYsUTs7QUFlVCxTQUFTYSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsTUFBTVgsS0FBSyxHQUFHRixRQUFRLEVBQXRCO0FBQ0EsTUFBRyxDQUFDRSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1hJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBRUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1NBLEtBQUssQ0FBQ1ksR0FBTixDQUFVLFVBQUFDLElBQUksRUFBSTtBQUNmLFdBQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFLEVBQVI7QUFBWUMsY0FBTSxFQUFFO0FBQXBCLE9BQVo7QUFBeUMsU0FBRyxFQUFFRixJQUFJLENBQUNHLEtBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS0gsSUFBSSxDQUFDSSxJQUFWLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtKLElBQUksQ0FBQ0ssTUFBVixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLTCxJQUFJLENBQUNNLGFBQVYsQ0FKSixFQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBS3ZCLE9BQU8sQ0FBQ2lCLElBQUksQ0FBQ08sa0JBQU4sQ0FBUCxDQUFpQ0MsTUFBakMsRUFBTCxDQUxKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFLekIsT0FBTyxDQUFDaUIsSUFBSSxDQUFDUyxVQUFOLENBQVAsQ0FBeUJELE1BQXpCLENBQWdDLFdBQWhDLENBQUwsQ0FOSixDQURKO0FBVUgsR0FYQSxDQURULENBREosQ0FEQTtBQWtCSDs7SUF2QlFWLEs7VUFDU2IsUTs7O0tBRFRhLEs7QUF5Qk0sU0FBU1ksU0FBVCxHQUFxQjtBQUNoQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFjO0FBQUcsUUFBSSxFQUFDLDhDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWQsQ0FESixFQUVJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1IO01BUHVCQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZmEwNmY2MzcxYjlhMDBkZTAwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBDb2luSW5mbyBmcm9tIFwiLi9zdHlsZXMuanNcIlxyXG52YXIgbnVtZXJhbCA9IHJlcXVpcmUoJ251bWVyYWwnKVxyXG5cclxuZnVuY3Rpb24gdXNlU3RhdHMoKSB7XHJcbiAgICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9tYXJrZXRzP3ZzX2N1cnJlbmN5PXVzZCcpLnRoZW4ocmVzID0+IHJlcy5qc29uKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0U3RhdHMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gc3RhdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXRzKCkge1xyXG4gICAgY29uc3Qgc3RhdHMgPSB1c2VTdGF0cygpO1xyXG4gICAgaWYoIXN0YXRzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0cylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdEJsb2NrJz5cclxuICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoY29pbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvaW5JbmZvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOiAyNSwgaGVpZ2h0OiAnYXV0byd9fSBzcmM9e2NvaW4uaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjb2luLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y29pbi5zeW1ib2x9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y29pbi5jdXJyZW50X3ByaWNlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e251bWVyYWwoY29pbi5jaXJjdWxhdGluZ19zdXBwbHkpLmZvcm1hdCgpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e251bWVyYWwoY29pbi5tYXJrZXRfY2FwKS5mb3JtYXQoJyQwLDBbLl0wMCcpfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29pbkluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5Qb3dlcmVkIGJ5IDxhIGhyZWY9J2h0dHBzOi8vd3d3LmNvaW5nZWNrby5jb20vZW4vYXBpI2V4cGxvcmUtYXBpJz5Db2luR2Vja28gQVBJPC9hPjwvcD5cclxuICAgICAgICAgICAgPFN0YXRzPjwvU3RhdHM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9