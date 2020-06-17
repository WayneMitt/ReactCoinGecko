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



var _s = $RefreshSig$(),
    _jsxFileName = "C:\\Users\\wayne\\Documents\\coingecko\\ReactCoinGecko\\pages\\index.js",
    _s2 = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


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
      lineNumber: 20,
      columnNumber: 23
    }
  }, "Loading...");
  console.log(stats);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "statBlock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, stats.map(function (coin) {
    return __jsx("ul", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 29
      }
    }, "Name: ", coin.name), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, "Mass: ", props.mass), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, "Birth Year: ", props.birthYear), __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, "Gender: ", props.gender));
  }))));
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
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(Stats, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdGF0cyIsInVzZVN0YXRlIiwic3RhdHMiLCJzZXRTdGF0cyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsIlN0YXRzIiwibWFwIiwiY29pbiIsIm5hbWUiLCJwcm9wcyIsIm1hc3MiLCJiaXJ0aFllYXIiLCJnZW5kZXIiLCJJbmRleFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxFQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUVoQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDR0MsU0FESDtBQUFBO0FBQUE7O0FBQUE7QUFBQSxvTUFDWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFESjtBQUFBLHVCQUV1QkMsS0FBSyxDQUFDLGdFQUFELENBQUwsQ0FBd0VDLElBQXhFLENBQTZFLFVBQUFDLEdBQUc7QUFBQSx5QkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxpQkFBaEYsQ0FGdkI7O0FBQUE7QUFFVUMsb0JBRlY7QUFJSVQsd0JBQVEsQ0FBQ1MsSUFBRCxDQUFSOztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRFk7QUFBQTtBQUFBOztBQU9aUCxhQUFTO0FBRVosR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBLFNBQU9ILEtBQVA7QUFDSDs7R0FiUUYsUTs7QUFlVCxTQUFTYSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQ2IsTUFBTVgsS0FBSyxHQUFHRixRQUFRLEVBQXRCO0FBQ0EsTUFBRyxDQUFDRSxLQUFKLEVBQVcsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFQO0FBQ1hJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBRUEsU0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFBQyxJQUFJLEVBQUk7QUFDZixXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFXQSxJQUFJLENBQUNDLElBQWhCLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFXQyxLQUFLLENBQUNDLElBQWpCLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFpQkQsS0FBSyxDQUFDRSxTQUF2QixDQUhKLEVBSUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBYUYsS0FBSyxDQUFDRyxNQUFuQixDQUpKLENBREo7QUFRSCxHQVRBLENBREwsQ0FESixDQURKLENBREE7QUFrQkg7O0lBdkJRUCxLO1VBQ1NiLFE7OztLQURUYSxLO0FBeUJNLFNBQVNRLFNBQVQsR0FBcUI7QUFDaEMsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBS0g7TUFOdUJBLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjY0Mzk2YWNkODI2ZmU2NWVkZThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmZ1bmN0aW9uIHVzZVN0YXRzKCkge1xyXG4gICAgY29uc3QgW3N0YXRzLCBzZXRTdGF0c10gPSB1c2VTdGF0ZSgpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGluZyBkYXRhJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbWFya2V0cz92c19jdXJyZW5jeT11c2QnKS50aGVuKHJlcyA9PiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHNldFN0YXRzKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIHN0YXRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTdGF0cygpIHtcclxuICAgIGNvbnN0IHN0YXRzID0gdXNlU3RhdHMoKTtcclxuICAgIGlmKCFzdGF0cykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gICAgY29uc29sZS5sb2coc3RhdHMpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXRCbG9jayc+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge3N0YXRzLm1hcChjb2luID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+TmFtZToge2NvaW4ubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPk1hc3M6IHtwcm9wcy5tYXNzfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+QmlydGggWWVhcjoge3Byb3BzLmJpcnRoWWVhcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkdlbmRlcjoge3Byb3BzLmdlbmRlcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8U3RhdHM+PC9TdGF0cz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=