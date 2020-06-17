(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cwayne%5CDocuments%5Ccoingecko%5CReactCoinGecko%5Cpages%5Cindex.js!./":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cwayne%5CDocuments%5Ccoingecko%5CReactCoinGecko%5Cpages%5Cindex.js ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/numeral/numeral.js":
/*!*****************************************!*\
  !*** ./node_modules/numeral/numeral.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function () {
    /************************************
        Variables
    ************************************/

    var numeral,
        _,
        VERSION = '2.0.6',
        formats = {},
        locales = {},
        defaults = {
            currentLocale: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0',
            scalePercentBy100: true
        },
        options = {
            currentLocale: defaults.currentLocale,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat,
            scalePercentBy100: defaults.scalePercentBy100
        };


    /************************************
        Constructors
    ************************************/

    // Numeral prototype object
    function Numeral(input, number) {
        this._input = input;

        this._value = number;
    }

    numeral = function(input) {
        var value,
            kind,
            unformatFunction,
            regexp;

        if (numeral.isNumeral(input)) {
            value = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            value = 0;
        } else if (input === null || _.isNaN(input)) {
            value = null;
        } else if (typeof input === 'string') {
            if (options.zeroFormat && input === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && input === options.nullFormat || !input.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                for (kind in formats) {
                    regexp = typeof formats[kind].regexps.unformat === 'function' ? formats[kind].regexps.unformat() : formats[kind].regexps.unformat;

                    if (regexp && input.match(regexp)) {
                        unformatFunction = formats[kind].unformat;

                        break;
                    }
                }

                unformatFunction = unformatFunction || numeral._.stringToNumber;

                value = unformatFunction(input);
            }
        } else {
            value = Number(input)|| null;
        }

        return new Numeral(input, value);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };

    // helper functions
    numeral._ = _ = {
        // formats numbers separators, decimals places, signs, abbreviations
        numberToFormat: function(value, format, roundingFunction) {
            var locale = locales[numeral.options.currentLocale],
                negP = false,
                optDec = false,
                leadingCount = 0,
                abbr = '',
                trillion = 1000000000000,
                billion = 1000000000,
                million = 1000000,
                thousand = 1000,
                decimal = '',
                neg = false,
                abbrForce, // force abbreviation
                abs,
                min,
                max,
                power,
                int,
                precision,
                signed,
                thousands,
                output;

            // make sure we never format a null value
            value = value || 0;

            abs = Math.abs(value);

            // see if we should use parentheses for negative number or if we should prefix with a sign
            // if both are present we default to parentheses
            if (numeral._.includes(format, '(')) {
                negP = true;
                format = format.replace(/[\(|\)]/g, '');
            } else if (numeral._.includes(format, '+') || numeral._.includes(format, '-')) {
                signed = numeral._.includes(format, '+') ? format.indexOf('+') : value < 0 ? format.indexOf('-') : -1;
                format = format.replace(/[\+|\-]/g, '');
            }

            // see if abbreviation is wanted
            if (numeral._.includes(format, 'a')) {
                abbrForce = format.match(/a(k|m|b|t)?/);

                abbrForce = abbrForce ? abbrForce[1] : false;

                // check for space before abbreviation
                if (numeral._.includes(format, ' a')) {
                    abbr = ' ';
                }

                format = format.replace(new RegExp(abbr + 'a[kmbt]?'), '');

                if (abs >= trillion && !abbrForce || abbrForce === 't') {
                    // trillion
                    abbr += locale.abbreviations.trillion;
                    value = value / trillion;
                } else if (abs < trillion && abs >= billion && !abbrForce || abbrForce === 'b') {
                    // billion
                    abbr += locale.abbreviations.billion;
                    value = value / billion;
                } else if (abs < billion && abs >= million && !abbrForce || abbrForce === 'm') {
                    // million
                    abbr += locale.abbreviations.million;
                    value = value / million;
                } else if (abs < million && abs >= thousand && !abbrForce || abbrForce === 'k') {
                    // thousand
                    abbr += locale.abbreviations.thousand;
                    value = value / thousand;
                }
            }

            // check for optional decimals
            if (numeral._.includes(format, '[.]')) {
                optDec = true;
                format = format.replace('[.]', '.');
            }

            // break number and format
            int = value.toString().split('.')[0];
            precision = format.split('.')[1];
            thousands = format.indexOf(',');
            leadingCount = (format.split('.')[0].split(',')[0].match(/0/g) || []).length;

            if (precision) {
                if (numeral._.includes(precision, '[')) {
                    precision = precision.replace(']', '');
                    precision = precision.split('[');
                    decimal = numeral._.toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
                } else {
                    decimal = numeral._.toFixed(value, precision.length, roundingFunction);
                }

                int = decimal.split('.')[0];

                if (numeral._.includes(decimal, '.')) {
                    decimal = locale.delimiters.decimal + decimal.split('.')[1];
                } else {
                    decimal = '';
                }

                if (optDec && Number(decimal.slice(1)) === 0) {
                    decimal = '';
                }
            } else {
                int = numeral._.toFixed(value, 0, roundingFunction);
            }

            // check abbreviation again after rounding
            if (abbr && !abbrForce && Number(int) >= 1000 && abbr !== locale.abbreviations.trillion) {
                int = String(Number(int) / 1000);

                switch (abbr) {
                    case locale.abbreviations.thousand:
                        abbr = locale.abbreviations.million;
                        break;
                    case locale.abbreviations.million:
                        abbr = locale.abbreviations.billion;
                        break;
                    case locale.abbreviations.billion:
                        abbr = locale.abbreviations.trillion;
                        break;
                }
            }


            // format number
            if (numeral._.includes(int, '-')) {
                int = int.slice(1);
                neg = true;
            }

            if (int.length < leadingCount) {
                for (var i = leadingCount - int.length; i > 0; i--) {
                    int = '0' + int;
                }
            }

            if (thousands > -1) {
                int = int.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + locale.delimiters.thousands);
            }

            if (format.indexOf('.') === 0) {
                int = '';
            }

            output = int + decimal + (abbr ? abbr : '');

            if (negP) {
                output = (negP && neg ? '(' : '') + output + (negP && neg ? ')' : '');
            } else {
                if (signed >= 0) {
                    output = signed === 0 ? (neg ? '-' : '+') + output : output + (neg ? '-' : '+');
                } else if (neg) {
                    output = '-' + output;
                }
            }

            return output;
        },
        // unformats numbers separators, decimals places, signs, abbreviations
        stringToNumber: function(string) {
            var locale = locales[options.currentLocale],
                stringOriginal = string,
                abbreviations = {
                    thousand: 3,
                    million: 6,
                    billion: 9,
                    trillion: 12
                },
                abbreviation,
                value,
                i,
                regexp;

            if (options.zeroFormat && string === options.zeroFormat) {
                value = 0;
            } else if (options.nullFormat && string === options.nullFormat || !string.replace(/[^0-9]+/g, '').length) {
                value = null;
            } else {
                value = 1;

                if (locale.delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(locale.delimiters.decimal, '.');
                }

                for (abbreviation in abbreviations) {
                    regexp = new RegExp('[^a-zA-Z]' + locale.abbreviations[abbreviation] + '(?:\\)|(\\' + locale.currency.symbol + ')?(?:\\))?)?$');

                    if (stringOriginal.match(regexp)) {
                        value *= Math.pow(10, abbreviations[abbreviation]);
                        break;
                    }
                }

                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;

                // remove non numbers
                string = string.replace(/[^0-9\.]+/g, '');

                value *= Number(string);
            }

            return value;
        },
        isNaN: function(value) {
            return typeof value === 'number' && isNaN(value);
        },
        includes: function(string, search) {
            return string.indexOf(search) !== -1;
        },
        insert: function(string, subString, start) {
            return string.slice(0, start) + subString + string.slice(start);
        },
        reduce: function(array, callback /*, initialValue*/) {
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(array),
                len = t.length >>> 0,
                k = 0,
                value;

            if (arguments.length === 3) {
                value = arguments[2];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        },
        /**
         * Computes the multiplier necessary to make x >= 1,
         * effectively eliminating miscalculations caused by
         * finite precision.
         */
        multiplier: function (x) {
            var parts = x.toString().split('.');

            return parts.length < 2 ? 1 : Math.pow(10, parts[1].length);
        },
        /**
         * Given a variable number of arguments, returns the maximum
         * multiplier that must be used to normalize an operation involving
         * all of them.
         */
        correctionFactor: function () {
            var args = Array.prototype.slice.call(arguments);

            return args.reduce(function(accum, next) {
                var mn = _.multiplier(next);
                return accum > mn ? accum : mn;
            }, 1);
        },
        /**
         * Implementation of toFixed() that treats floats more like decimals
         *
         * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
         * problems for accounting- and finance-related software.
         */
        toFixed: function(value, maxDecimals, roundingFunction, optionals) {
            var splitValue = value.toString().split('.'),
                minDecimals = maxDecimals - (optionals || 0),
                boundedPrecision,
                optionalsRegExp,
                power,
                output;

            // Use the smallest precision value possible to avoid errors from floating point representation
            if (splitValue.length === 2) {
              boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
            } else {
              boundedPrecision = minDecimals;
            }

            power = Math.pow(10, boundedPrecision);

            // Multiply up by precision, round accurately, then divide and use native toFixed():
            output = (roundingFunction(value + 'e+' + boundedPrecision) / power).toFixed(boundedPrecision);

            if (optionals > maxDecimals - boundedPrecision) {
                optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
                output = output.replace(optionalsRegExp, '');
            }

            return output;
        }
    };

    // avaliable options
    numeral.options = options;

    // avaliable formats
    numeral.formats = formats;

    // avaliable formats
    numeral.locales = locales;

    // This function sets the current locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    numeral.locale = function(key) {
        if (key) {
            options.currentLocale = key.toLowerCase();
        }

        return options.currentLocale;
    };

    // This function provides access to the loaded locale data.  If
    // no arguments are passed in, it will simply return the current
    // global locale object.
    numeral.localeData = function(key) {
        if (!key) {
            return locales[options.currentLocale];
        }

        key = key.toLowerCase();

        if (!locales[key]) {
            throw new Error('Unknown locale : ' + key);
        }

        return locales[key];
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.register = function(type, name, format) {
        name = name.toLowerCase();

        if (this[type + 's'][name]) {
            throw new TypeError(name + ' ' + type + ' already registered.');
        }

        this[type + 's'][name] = format;

        return format;
    };


    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            localeData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';

            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if (!!val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.localeData
        try {
            //check if the culture is understood by numeral. if not, default it to current locale
            localeData = numeral.localeData(culture);
        } catch (e) {
            localeData = numeral.localeData(numeral.locale());
        }

        //setup the delimiters and currency symbol based on culture/locale
        _currSymbol = localeData.currency.symbol;
        _abbrObj = localeData.abbreviations;
        _decimalSep = localeData.delimiters.decimal;
        if (localeData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = localeData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };


    /************************************
        Numeral Prototype
    ************************************/

    numeral.fn = Numeral.prototype = {
        clone: function() {
            return numeral(this);
        },
        format: function(inputString, roundingFunction) {
            var value = this._value,
                format = inputString || options.defaultFormat,
                kind,
                output,
                formatFunction;

            // make sure we have a roundingFunction
            roundingFunction = roundingFunction || Math.round;

            // format based on value
            if (value === 0 && options.zeroFormat !== null) {
                output = options.zeroFormat;
            } else if (value === null && options.nullFormat !== null) {
                output = options.nullFormat;
            } else {
                for (kind in formats) {
                    if (format.match(formats[kind].regexps.format)) {
                        formatFunction = formats[kind].format;

                        break;
                    }
                }

                formatFunction = formatFunction || numeral._.numberToFormat;

                output = formatFunction(value, format, roundingFunction);
            }

            return output;
        },
        value: function() {
            return this._value;
        },
        input: function() {
            return this._input;
        },
        set: function(value) {
            this._value = Number(value);

            return this;
        },
        add: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + Math.round(corrFactor * curr);
            }

            this._value = _.reduce([this._value, value], cback, 0) / corrFactor;

            return this;
        },
        subtract: function(value) {
            var corrFactor = _.correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - Math.round(corrFactor * curr);
            }

            this._value = _.reduce([value], cback, Math.round(this._value * corrFactor)) / corrFactor;

            return this;
        },
        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) * Math.round(curr * corrFactor) / Math.round(corrFactor * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback, 1);

            return this;
        },
        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = _.correctionFactor(accum, curr);
                return Math.round(accum * corrFactor) / Math.round(curr * corrFactor);
            }

            this._value = _.reduce([this._value, value], cback);

            return this;
        },
        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }
    };

    /************************************
        Default Locale && Format
    ************************************/

    numeral.register('locale', 'en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    

(function() {
        numeral.register('format', 'bps', {
            regexps: {
                format: /(BPS)/,
                unformat: /(BPS)/
            },
            format: function(value, format, roundingFunction) {
                var space = numeral._.includes(format, ' BPS') ? ' ' : '',
                    output;

                value = value * 10000;

                // check for space before BPS
                format = format.replace(/\s?BPS/, '');

                output = numeral._.numberToFormat(value, format, roundingFunction);

                if (numeral._.includes(output, ')')) {
                    output = output.split('');

                    output.splice(-1, 0, space + 'BPS');

                    output = output.join('');
                } else {
                    output = output + space + 'BPS';
                }

                return output;
            },
            unformat: function(string) {
                return +(numeral._.stringToNumber(string) * 0.0001).toFixed(15);
            }
        });
})();


(function() {
        var decimal = {
            base: 1000,
            suffixes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        },
        binary = {
            base: 1024,
            suffixes: ['B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };

    var allSuffixes =  decimal.suffixes.concat(binary.suffixes.filter(function (item) {
            return decimal.suffixes.indexOf(item) < 0;
        }));
        var unformatRegex = allSuffixes.join('|');
        // Allow support for BPS (http://www.investopedia.com/terms/b/basispoint.asp)
        unformatRegex = '(' + unformatRegex.replace('B', 'B(?!PS)') + ')';

    numeral.register('format', 'bytes', {
        regexps: {
            format: /([0\s]i?b)/,
            unformat: new RegExp(unformatRegex)
        },
        format: function(value, format, roundingFunction) {
            var output,
                bytes = numeral._.includes(format, 'ib') ? binary : decimal,
                suffix = numeral._.includes(format, ' b') || numeral._.includes(format, ' ib') ? ' ' : '',
                power,
                min,
                max;

            // check for space before
            format = format.replace(/\s?i?b/, '');

            for (power = 0; power <= bytes.suffixes.length; power++) {
                min = Math.pow(bytes.base, power);
                max = Math.pow(bytes.base, power + 1);

                if (value === null || value === 0 || value >= min && value < max) {
                    suffix += bytes.suffixes[power];

                    if (min > 0) {
                        value = value / min;
                    }

                    break;
                }
            }

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + suffix;
        },
        unformat: function(string) {
            var value = numeral._.stringToNumber(string),
                power,
                bytesMultiplier;

            if (value) {
                for (power = decimal.suffixes.length - 1; power >= 0; power--) {
                    if (numeral._.includes(string, decimal.suffixes[power])) {
                        bytesMultiplier = Math.pow(decimal.base, power);

                        break;
                    }

                    if (numeral._.includes(string, binary.suffixes[power])) {
                        bytesMultiplier = Math.pow(binary.base, power);

                        break;
                    }
                }

                value *= (bytesMultiplier || 1);
            }

            return value;
        }
    });
})();


(function() {
        numeral.register('format', 'currency', {
        regexps: {
            format: /(\$)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                symbols = {
                    before: format.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                    after: format.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                },
                output,
                symbol,
                i;

            // strip format of spaces and $
            format = format.replace(/\s?\$\s?/, '');

            // format the number
            output = numeral._.numberToFormat(value, format, roundingFunction);

            // update the before and after based on value
            if (value >= 0) {
                symbols.before = symbols.before.replace(/[\-\(]/, '');
                symbols.after = symbols.after.replace(/[\-\)]/, '');
            } else if (value < 0 && (!numeral._.includes(symbols.before, '-') && !numeral._.includes(symbols.before, '('))) {
                symbols.before = '-' + symbols.before;
            }

            // loop through each before symbol
            for (i = 0; i < symbols.before.length; i++) {
                symbol = symbols.before[i];

                switch (symbol) {
                    case '$':
                        output = numeral._.insert(output, locale.currency.symbol, i);
                        break;
                    case ' ':
                        output = numeral._.insert(output, ' ', i + locale.currency.symbol.length - 1);
                        break;
                }
            }

            // loop through each after symbol
            for (i = symbols.after.length - 1; i >= 0; i--) {
                symbol = symbols.after[i];

                switch (symbol) {
                    case '$':
                        output = i === symbols.after.length - 1 ? output + locale.currency.symbol : numeral._.insert(output, locale.currency.symbol, -(symbols.after.length - (1 + i)));
                        break;
                    case ' ':
                        output = i === symbols.after.length - 1 ? output + ' ' : numeral._.insert(output, ' ', -(symbols.after.length - (1 + i) + locale.currency.symbol.length - 1));
                        break;
                }
            }


            return output;
        }
    });
})();


(function() {
        numeral.register('format', 'exponential', {
        regexps: {
            format: /(e\+|e-)/,
            unformat: /(e\+|e-)/
        },
        format: function(value, format, roundingFunction) {
            var output,
                exponential = typeof value === 'number' && !numeral._.isNaN(value) ? value.toExponential() : '0e+0',
                parts = exponential.split('e');

            format = format.replace(/e[\+|\-]{1}0/, '');

            output = numeral._.numberToFormat(Number(parts[0]), format, roundingFunction);

            return output + 'e' + parts[1];
        },
        unformat: function(string) {
            var parts = numeral._.includes(string, 'e+') ? string.split('e+') : string.split('e-'),
                value = Number(parts[0]),
                power = Number(parts[1]);

            power = numeral._.includes(string, 'e-') ? power *= -1 : power;

            function cback(accum, curr, currI, O) {
                var corrFactor = numeral._.correctionFactor(accum, curr),
                    num = (accum * corrFactor) * (curr * corrFactor) / (corrFactor * corrFactor);
                return num;
            }

            return numeral._.reduce([value, Math.pow(10, power)], cback, 1);
        }
    });
})();


(function() {
        numeral.register('format', 'ordinal', {
        regexps: {
            format: /(o)/
        },
        format: function(value, format, roundingFunction) {
            var locale = numeral.locales[numeral.options.currentLocale],
                output,
                ordinal = numeral._.includes(format, ' o') ? ' ' : '';

            // check for space before
            format = format.replace(/\s?o/, '');

            ordinal += locale.ordinal(value);

            output = numeral._.numberToFormat(value, format, roundingFunction);

            return output + ordinal;
        }
    });
})();


(function() {
        numeral.register('format', 'percentage', {
        regexps: {
            format: /(%)/,
            unformat: /(%)/
        },
        format: function(value, format, roundingFunction) {
            var space = numeral._.includes(format, ' %') ? ' ' : '',
                output;

            if (numeral.options.scalePercentBy100) {
                value = value * 100;
            }

            // check for space before %
            format = format.replace(/\s?\%/, '');

            output = numeral._.numberToFormat(value, format, roundingFunction);

            if (numeral._.includes(output, ')')) {
                output = output.split('');

                output.splice(-1, 0, space + '%');

                output = output.join('');
            } else {
                output = output + space + '%';
            }

            return output;
        },
        unformat: function(string) {
            var number = numeral._.stringToNumber(string);
            if (numeral.options.scalePercentBy100) {
                return number * 0.01;
            }
            return number;
        }
    });
})();


(function() {
        numeral.register('format', 'time', {
        regexps: {
            format: /(:)/,
            unformat: /(:)/
        },
        format: function(value, format, roundingFunction) {
            var hours = Math.floor(value / 60 / 60),
                minutes = Math.floor((value - (hours * 60 * 60)) / 60),
                seconds = Math.round(value - (hours * 60 * 60) - (minutes * 60));

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        unformat: function(string) {
            var timeArray = string.split(':'),
                seconds = 0;

            // turn hours and minutes into seconds and add them all up
            if (timeArray.length === 3) {
                // hours
                seconds = seconds + (Number(timeArray[0]) * 60 * 60);
                // minutes
                seconds = seconds + (Number(timeArray[1]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[2]);
            } else if (timeArray.length === 2) {
                // minutes
                seconds = seconds + (Number(timeArray[0]) * 60);
                // seconds
                seconds = seconds + Number(timeArray[1]);
            }
            return Number(seconds);
        }
    });
})();

return numeral;
}));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  true ? errorMap : undefined;
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (false) {} else {
    throw new Error(format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim());
  }
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if ( true && ((group | 0) < 0 || group > MAX_SMI)) {
    throwStyledComponentsError(16, "" + group);
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  true ? react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.only(props.children) : undefined));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ( true && Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  false && false;
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (true) dynamicHash = phash(dynamicHash, partRule + i);
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (true) {
    var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
    var message = "The component " + displayName + parsedIdString + " has been created dynamically.\n" + 'You may see this warning because you\'ve called styled inside another component.\n' + 'To resolve this only create new StyledComponents outside of any render method and function component.';

    try {
      // We purposefully call `useRef` outside of a component and expect it to throw
      // If it doesn't, then we're inside another component.
      // eslint-disable-next-line react-hooks/rules-of-hooks
      Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

      if (!seen.has(message)) {
        // eslint-disable-next-line no-console
        console.warn(message);
        seen.add(message);
      }
    } catch (error) {
      // The error here is expected, since we're expecting anything that uses `checkDynamicCreation` to
      // be called outside of a React component.
      if (invalidHookCallRe.test(error.message)) {
        // This shouldn't happen, but resets `warningSeen` if we had this error happen intermittently
        seen["delete"](message);
      }
    }
  }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme === null || Array.isArray(mergedTheme) || typeof mergedTheme !== 'object')) {
      return throwStyledComponentsError(7);
    }

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if ( true && !isStatic && warnTooManyClasses) {
    warnTooManyClasses(className);
  }

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  true ? forwardedComponent.warnTooManyClasses : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    checkDynamicCreation(displayName, styledComponentId);
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName, styledComponentId);
  } // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (true) {
    checkDynamicCreation(styledComponentId);
  }

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if ( true && react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(props.children)) {
      // eslint-disable-next-line no-console
      console.warn("The global style component " + styledComponentId + " was given child JSX. createGlobalStyle does not render children.");
    }

    if ( true && rules.some(function (rule) {
      return typeof rule === 'string' && rule.indexOf('@import') !== -1;
    })) {
      console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.");
    }

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    {
      return throwStyledComponentsError(3);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if ( true && themeProp === undefined) {
      // eslint-disable-next-line no-console
      console.warn("[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class \"" + getComponentName(Component) + "\"");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if ( true && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}
/* Warning if there are several instances of styled-components */


if ( true && typeof window !== 'undefined') {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process, ' + 'missing theme prop, and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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
    }), __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinData"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    }, coin.name), __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinData"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }, coin.symbol), __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinData"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, coin.current_price), __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinData"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, numeral(coin.circulating_supply).format()), __jsx(_styles_js__WEBPACK_IMPORTED_MODULE_3__["CoinData"], {
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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nfont: roboto;\nmargin-right: 30px\n"]);

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

/***/ }),

/***/ 2:
/*!*************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cwayne%5CDocuments%5Ccoingecko%5CReactCoinGecko%5Cpages%5Cindex.js ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cwayne%5CDocuments%5Ccoingecko%5CReactCoinGecko%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cwayne%5CDocuments%5Ccoingecko%5CReactCoinGecko%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9zdHlsaXMvZGlzdC9zdHlsaXMuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvdW5pdGxlc3MuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbnVtZXJhbC9udW1lcmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3dlcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiIl0sIm5hbWVzIjpbIm51bWVyYWwiLCJyZXF1aXJlIiwidXNlU3RhdHMiLCJ1c2VTdGF0ZSIsInN0YXRzIiwic2V0U3RhdHMiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJTdGF0cyIsIm1hcCIsImNvaW4iLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwibmFtZSIsInN5bWJvbCIsImN1cnJlbnRfcHJpY2UiLCJjaXJjdWxhdGluZ19zdXBwbHkiLCJmb3JtYXQiLCJtYXJrZXRfY2FwIiwiSW5kZXhQYWdlIiwiQ29pbkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkNvaW5EYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7QUNWQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7Ozs7QUNBOUM7QUFBQTtBQUF1Qzs7QUFFdkMsazdIQUFrN0g7O0FBRWw3SCxZQUFZLGdFQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsb0VBQUssRUFBQzs7Ozs7Ozs7Ozs7OztBQ2RyQjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSdkI7QUFBQTtBQUNBO0FBQ0EseUtBQXlLLE9BQU87QUFDaEw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsT0FBTztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixrQ0FBa0M7QUFDMUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVU7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIs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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsRUFBRTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHlEQUF5RDtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRCxFQUFFOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNwL0JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsV0FBVztBQUM5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXNDLFFBQVE7QUFD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QU1JLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFXekIsT0FBTyxDQUFDaUIsSUFBSSxDQUFDUyxVQUFOLENBQVAsQ0FBeUJELE1BQXpCLENBQWdDLFdBQWhDLENBQVgsQ0FOSixDQURKO0FBVUgsR0FYQSxDQURULENBREosQ0FEQTtBQWtCSDs7SUF2QlFWLEs7VUFDU2IsUTs7O0tBRFRhLEs7QUF5Qk0sU0FBU1ksU0FBVCxHQUFxQjtBQUNoQyxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFjO0FBQUcsUUFBSSxFQUFDLDhDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWQsQ0FESixFQUVJLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1IO01BUHVCQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDeEI7QUFFQSxJQUFNQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0FBTUEsSUFBTUMsUUFBUSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywge1xuICAgIHJhdzoge1xuICAgICAgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KVxuICAgIH1cbiAgfSkpO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvYWRpbmd8bG9vcHxsb3d8bWFyZ2luSGVpZ2h0fG1hcmdpbldpZHRofG1heHxtYXhMZW5ndGh8bWVkaWF8bWVkaWFHcm91cHxtZXRob2R8bWlufG1pbkxlbmd0aHxtdWx0aXBsZXxtdXRlZHxuYW1lfG5vbmNlfG5vVmFsaWRhdGV8b3BlbnxvcHRpbXVtfHBhdHRlcm58cGxhY2Vob2xkZXJ8cGxheXNJbmxpbmV8cG9zdGVyfHByZWxvYWR8cHJvZmlsZXxyYWRpb0dyb3VwfHJlYWRPbmx5fHJlZmVycmVyUG9saWN5fHJlbHxyZXF1aXJlZHxyZXZlcnNlZHxyb2xlfHJvd3N8cm93U3BhbnxzYW5kYm94fHNjb3BlfHNjb3BlZHxzY3JvbGxpbmd8c2VhbWxlc3N8c2VsZWN0ZWR8c2hhcGV8c2l6ZXxzaXplc3xzbG90fHNwYW58c3BlbGxDaGVja3xzcmN8c3JjRG9jfHNyY0xhbmd8c3JjU2V0fHN0YXJ0fHN0ZXB8c3R5bGV8c3VtbWFyeXx0YWJJbmRleHx0YXJnZXR8dGl0bGV8dHlwZXx1c2VNYXB8dmFsdWV8d2lkdGh8d21vZGV8d3JhcHxhYm91dHxkYXRhdHlwZXxpbmxpc3R8cHJlZml4fHByb3BlcnR5fHJlc291cmNlfHR5cGVvZnx2b2NhYnxhdXRvQ2FwaXRhbGl6ZXxhdXRvQ29ycmVjdHxhdXRvU2F2ZXxjb2xvcnxpbmVydHxpdGVtUHJvcHxpdGVtU2NvcGV8aXRlbVR5cGV8aXRlbUlEfGl0ZW1SZWZ8b258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaW5kZXggPSBtZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiZnVuY3Rpb24gbWVtb2l6ZShmbikge1xuICB2YXIgY2FjaGUgPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAoY2FjaGVbYXJnXSA9PT0gdW5kZWZpbmVkKSBjYWNoZVthcmddID0gZm4oYXJnKTtcbiAgICByZXR1cm4gY2FjaGVbYXJnXTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsImZ1bmN0aW9uIHN0eWxpc19taW4gKFcpIHtcbiAgZnVuY3Rpb24gTShkLCBjLCBlLCBoLCBhKSB7XG4gICAgZm9yICh2YXIgbSA9IDAsIGIgPSAwLCB2ID0gMCwgbiA9IDAsIHEsIGcsIHggPSAwLCBLID0gMCwgaywgdSA9IGsgPSBxID0gMCwgbCA9IDAsIHIgPSAwLCBJID0gMCwgdCA9IDAsIEIgPSBlLmxlbmd0aCwgSiA9IEIgLSAxLCB5LCBmID0gJycsIHAgPSAnJywgRiA9ICcnLCBHID0gJycsIEM7IGwgPCBCOykge1xuICAgICAgZyA9IGUuY2hhckNvZGVBdChsKTtcbiAgICAgIGwgPT09IEogJiYgMCAhPT0gYiArIG4gKyB2ICsgbSAmJiAoMCAhPT0gYiAmJiAoZyA9IDQ3ID09PSBiID8gMTAgOiA0NyksIG4gPSB2ID0gbSA9IDAsIEIrKywgSisrKTtcblxuICAgICAgaWYgKDAgPT09IGIgKyBuICsgdiArIG0pIHtcbiAgICAgICAgaWYgKGwgPT09IEogJiYgKDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSksIDAgPCBmLnRyaW0oKS5sZW5ndGgpKSB7XG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgY2FzZSA1OTpcbiAgICAgICAgICAgIGNhc2UgMTM6XG4gICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgZiArPSBlLmNoYXJBdChsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnID0gNTk7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICBjYXNlIDEyMzpcbiAgICAgICAgICAgIGYgPSBmLnRyaW0oKTtcbiAgICAgICAgICAgIHEgPSBmLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgZm9yICh0ID0gKytsOyBsIDwgQjspIHtcbiAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAxMjM6XG4gICAgICAgICAgICAgICAgICBrKys7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgICAgICAgICAgay0tO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgc3dpdGNoIChnID0gZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ3OlxuICAgICAgICAgICAgICAgICAgICAgIGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodSA9IGwgKyAxOyB1IDwgSjsgKyt1KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5jaGFyQ29kZUF0KHUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0MiA9PT0gZyAmJiA0MiA9PT0gZS5jaGFyQ29kZUF0KHUgLSAxKSAmJiBsICsgMiAhPT0gdSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICg0NyA9PT0gZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsID0gdSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsID0gdTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDkxOlxuICAgICAgICAgICAgICAgICAgZysrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgIGcrKztcblxuICAgICAgICAgICAgICAgIGNhc2UgMzQ6XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgIGZvciAoOyBsKysgPCBKICYmIGUuY2hhckNvZGVBdChsKSAhPT0gZzspIHtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKDAgPT09IGspIGJyZWFrO1xuICAgICAgICAgICAgICBsKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGsgPSBlLnN1YnN0cmluZyh0LCBsKTtcbiAgICAgICAgICAgIDAgPT09IHEgJiYgKHEgPSAoZiA9IGYucmVwbGFjZShjYSwgJycpLnRyaW0oKSkuY2hhckNvZGVBdCgwKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocSkge1xuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIDAgPCByICYmIChmID0gZi5yZXBsYWNlKE4sICcnKSk7XG4gICAgICAgICAgICAgICAgZyA9IGYuY2hhckNvZGVBdCgxKTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICAgICAgICAgICAgY2FzZSAxMDA6XG4gICAgICAgICAgICAgICAgICBjYXNlIDEwOTpcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgY2FzZSA0NTpcbiAgICAgICAgICAgICAgICAgICAgciA9IGM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByID0gTztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBrID0gTShjLCByLCBrLCBnLCBhICsgMSk7XG4gICAgICAgICAgICAgICAgdCA9IGsubGVuZ3RoO1xuICAgICAgICAgICAgICAgIDAgPCBBICYmIChyID0gWChPLCBmLCBJKSwgQyA9IEgoMywgaywgciwgYywgRCwgeiwgdCwgZywgYSwgaCksIGYgPSByLmpvaW4oJycpLCB2b2lkIDAgIT09IEMgJiYgMCA9PT0gKHQgPSAoayA9IEMudHJpbSgpKS5sZW5ndGgpICYmIChnID0gMCwgayA9ICcnKSk7XG4gICAgICAgICAgICAgICAgaWYgKDAgPCB0KSBzd2l0Y2ggKGcpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgICAgICAgICBmID0gZi5yZXBsYWNlKGRhLCBlYSk7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgMTAwOlxuICAgICAgICAgICAgICAgICAgY2FzZSAxMDk6XG4gICAgICAgICAgICAgICAgICBjYXNlIDQ1OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArICd7JyArIGsgKyAnfSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIDEwNzpcbiAgICAgICAgICAgICAgICAgICAgZiA9IGYucmVwbGFjZShmYSwgJyQxICQyJyk7XG4gICAgICAgICAgICAgICAgICAgIGsgPSBmICsgJ3snICsgayArICd9JztcbiAgICAgICAgICAgICAgICAgICAgayA9IDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKCdAJyArIGssIDMpID8gJ0Atd2Via2l0LScgKyBrICsgJ0AnICsgayA6ICdAJyArIGs7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBrID0gZiArIGssIDExMiA9PT0gaCAmJiAoayA9IChwICs9IGssICcnKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGsgPSAnJztcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGsgPSBNKGMsIFgoYywgZiwgSSksIGssIGgsIGEgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgRiArPSBrO1xuICAgICAgICAgICAgayA9IEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDEyNTpcbiAgICAgICAgICBjYXNlIDU5OlxuICAgICAgICAgICAgZiA9ICgwIDwgciA/IGYucmVwbGFjZShOLCAnJykgOiBmKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoMSA8ICh0ID0gZi5sZW5ndGgpKSBzd2l0Y2ggKDAgPT09IHUgJiYgKHEgPSBmLmNoYXJDb2RlQXQoMCksIDQ1ID09PSBxIHx8IDk2IDwgcSAmJiAxMjMgPiBxKSAmJiAodCA9IChmID0gZi5yZXBsYWNlKCcgJywgJzonKSkubGVuZ3RoKSwgMCA8IEEgJiYgdm9pZCAwICE9PSAoQyA9IEgoMSwgZiwgYywgZCwgRCwgeiwgcC5sZW5ndGgsIGgsIGEsIGgpKSAmJiAwID09PSAodCA9IChmID0gQy50cmltKCkpLmxlbmd0aCkgJiYgKGYgPSAnXFx4MDBcXHgwMCcpLCBxID0gZi5jaGFyQ29kZUF0KDApLCBnID0gZi5jaGFyQ29kZUF0KDEpLCBxKSB7XG4gICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDY0OlxuICAgICAgICAgICAgICAgIGlmICgxMDUgPT09IGcgfHwgOTkgPT09IGcpIHtcbiAgICAgICAgICAgICAgICAgIEcgKz0gZiArIGUuY2hhckF0KGwpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgNTggIT09IGYuY2hhckNvZGVBdCh0IC0gMSkgJiYgKHAgKz0gUChmLCBxLCBnLCBmLmNoYXJDb2RlQXQoMikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEkgPSByID0gdSA9IHEgPSAwO1xuICAgICAgICAgICAgZiA9ICcnO1xuICAgICAgICAgICAgZyA9IGUuY2hhckNvZGVBdCgrK2wpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZykge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgIDQ3ID09PSBiID8gYiA9IDAgOiAwID09PSAxICsgcSAmJiAxMDcgIT09IGggJiYgMCA8IGYubGVuZ3RoICYmIChyID0gMSwgZiArPSAnXFx4MDAnKTtcbiAgICAgICAgICAwIDwgQSAqIFkgJiYgSCgwLCBmLCBjLCBkLCBELCB6LCBwLmxlbmd0aCwgaCwgYSwgaCk7XG4gICAgICAgICAgeiA9IDE7XG4gICAgICAgICAgRCsrO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgNTk6XG4gICAgICAgIGNhc2UgMTI1OlxuICAgICAgICAgIGlmICgwID09PSBiICsgbiArIHYgKyBtKSB7XG4gICAgICAgICAgICB6Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB6Kys7XG4gICAgICAgICAgeSA9IGUuY2hhckF0KGwpO1xuXG4gICAgICAgICAgc3dpdGNoIChnKSB7XG4gICAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgICAgICBpZiAoMCA9PT0gbiArIG0gKyBiKSBzd2l0Y2ggKHgpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAgIGNhc2UgNTg6XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICAgICAgICB5ID0gJyc7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAzMiAhPT0gZyAmJiAoeSA9ICcgJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgeSA9ICdcXFxcMCc7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICB5ID0gJ1xcXFxmJztcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICAgIHkgPSAnXFxcXHYnO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIChyID0gSSA9IDEsIHkgPSAnXFxmJyArIHkpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAxMDg6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0gKyBFICYmIDAgPCB1KSBzd2l0Y2ggKGwgLSB1KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgMTEyID09PSB4ICYmIDU4ID09PSBlLmNoYXJDb2RlQXQobCAtIDMpICYmIChFID0geCk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAxMTEgPT09IEsgJiYgKEUgPSBLKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA1ODpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmICh1ID0gbCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQ0OlxuICAgICAgICAgICAgICAwID09PSBiICsgdiArIG4gKyBtICYmIChyID0gMSwgeSArPSAnXFxyJyk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM0OlxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgMCA9PT0gYiAmJiAobiA9IG4gPT09IGcgPyAwIDogMCA9PT0gbiA/IGcgOiBuKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgOTE6XG4gICAgICAgICAgICAgIDAgPT09IG4gKyBiICsgdiAmJiBtKys7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDkzOlxuICAgICAgICAgICAgICAwID09PSBuICsgYiArIHYgJiYgbS0tO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MTpcbiAgICAgICAgICAgICAgMCA9PT0gbiArIGIgKyBtICYmIHYtLTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgIGlmICgwID09PSBuICsgYiArIG0pIHtcbiAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcSkgc3dpdGNoICgyICogeCArIDMgKiBLKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIDUzMzpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHEgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2Kys7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA2NDpcbiAgICAgICAgICAgICAgMCA9PT0gYiArIHYgKyBuICsgbSArIHUgKyBrICYmIChrID0gMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgY2FzZSA0NzpcbiAgICAgICAgICAgICAgaWYgKCEoMCA8IG4gKyBtICsgdikpIHN3aXRjaCAoYikge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoMiAqIGcgKyAzICogZS5jaGFyQ29kZUF0KGwgKyAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDIzNTpcbiAgICAgICAgICAgICAgICAgICAgICBiID0gNDc7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjA6XG4gICAgICAgICAgICAgICAgICAgICAgdCA9IGwsIGIgPSA0MjtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDQyOlxuICAgICAgICAgICAgICAgICAgNDcgPT09IGcgJiYgNDIgPT09IHggJiYgdCArIDIgIT09IGwgJiYgKDMzID09PSBlLmNoYXJDb2RlQXQodCArIDIpICYmIChwICs9IGUuc3Vic3RyaW5nKHQsIGwgKyAxKSksIHkgPSAnJywgYiA9IDApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgMCA9PT0gYiAmJiAoZiArPSB5KTtcbiAgICAgIH1cblxuICAgICAgSyA9IHg7XG4gICAgICB4ID0gZztcbiAgICAgIGwrKztcbiAgICB9XG5cbiAgICB0ID0gcC5sZW5ndGg7XG5cbiAgICBpZiAoMCA8IHQpIHtcbiAgICAgIHIgPSBjO1xuICAgICAgaWYgKDAgPCBBICYmIChDID0gSCgyLCBwLCByLCBkLCBELCB6LCB0LCBoLCBhLCBoKSwgdm9pZCAwICE9PSBDICYmIDAgPT09IChwID0gQykubGVuZ3RoKSkgcmV0dXJuIEcgKyBwICsgRjtcbiAgICAgIHAgPSByLmpvaW4oJywnKSArICd7JyArIHAgKyAnfSc7XG5cbiAgICAgIGlmICgwICE9PSB3ICogRSkge1xuICAgICAgICAyICE9PSB3IHx8IEwocCwgMikgfHwgKEUgPSAwKTtcblxuICAgICAgICBzd2l0Y2ggKEUpIHtcbiAgICAgICAgICBjYXNlIDExMTpcbiAgICAgICAgICAgIHAgPSBwLnJlcGxhY2UoaGEsICc6LW1vei0kMScpICsgcDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTI6XG4gICAgICAgICAgICBwID0gcC5yZXBsYWNlKFEsICc6Oi13ZWJraXQtaW5wdXQtJDEnKSArIHAucmVwbGFjZShRLCAnOjotbW96LSQxJykgKyBwLnJlcGxhY2UoUSwgJzotbXMtaW5wdXQtJDEnKSArIHA7XG4gICAgICAgIH1cblxuICAgICAgICBFID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gRyArIHAgKyBGO1xuICB9XG5cbiAgZnVuY3Rpb24gWChkLCBjLCBlKSB7XG4gICAgdmFyIGggPSBjLnRyaW0oKS5zcGxpdChpYSk7XG4gICAgYyA9IGg7XG4gICAgdmFyIGEgPSBoLmxlbmd0aCxcbiAgICAgICAgbSA9IGQubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHZhciBiID0gMDtcblxuICAgICAgICBmb3IgKGQgPSAwID09PSBtID8gJycgOiBkWzBdICsgJyAnOyBiIDwgYTsgKytiKSB7XG4gICAgICAgICAgY1tiXSA9IFooZCwgY1tiXSwgZSkudHJpbSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHZhciB2ID0gYiA9IDA7XG5cbiAgICAgICAgZm9yIChjID0gW107IGIgPCBhOyArK2IpIHtcbiAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG07ICsrbikge1xuICAgICAgICAgICAgY1t2KytdID0gWihkW25dICsgJyAnLCBoW2JdLCBlKS50cmltKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYztcbiAgfVxuXG4gIGZ1bmN0aW9uIFooZCwgYywgZSkge1xuICAgIHZhciBoID0gYy5jaGFyQ29kZUF0KDApO1xuICAgIDMzID4gaCAmJiAoaCA9IChjID0gYy50cmltKCkpLmNoYXJDb2RlQXQoMCkpO1xuXG4gICAgc3dpdGNoIChoKSB7XG4gICAgICBjYXNlIDM4OlxuICAgICAgICByZXR1cm4gYy5yZXBsYWNlKEYsICckMScgKyBkLnRyaW0oKSk7XG5cbiAgICAgIGNhc2UgNTg6XG4gICAgICAgIHJldHVybiBkLnRyaW0oKSArIGMucmVwbGFjZShGLCAnJDEnICsgZC50cmltKCkpO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoMCA8IDEgKiBlICYmIDAgPCBjLmluZGV4T2YoJ1xcZicpKSByZXR1cm4gYy5yZXBsYWNlKEYsICg1OCA9PT0gZC5jaGFyQ29kZUF0KDApID8gJycgOiAnJDEnKSArIGQudHJpbSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZCArIGM7XG4gIH1cblxuICBmdW5jdGlvbiBQKGQsIGMsIGUsIGgpIHtcbiAgICB2YXIgYSA9IGQgKyAnOycsXG4gICAgICAgIG0gPSAyICogYyArIDMgKiBlICsgNCAqIGg7XG5cbiAgICBpZiAoOTQ0ID09PSBtKSB7XG4gICAgICBkID0gYS5pbmRleE9mKCc6JywgOSkgKyAxO1xuICAgICAgdmFyIGIgPSBhLnN1YnN0cmluZyhkLCBhLmxlbmd0aCAtIDEpLnRyaW0oKTtcbiAgICAgIGIgPSBhLnN1YnN0cmluZygwLCBkKS50cmltKCkgKyBiICsgJzsnO1xuICAgICAgcmV0dXJuIDEgPT09IHcgfHwgMiA9PT0gdyAmJiBMKGIsIDEpID8gJy13ZWJraXQtJyArIGIgKyBiIDogYjtcbiAgICB9XG5cbiAgICBpZiAoMCA9PT0gdyB8fCAyID09PSB3ICYmICFMKGEsIDEpKSByZXR1cm4gYTtcblxuICAgIHN3aXRjaCAobSkge1xuICAgICAgY2FzZSAxMDE1OlxuICAgICAgICByZXR1cm4gOTcgPT09IGEuY2hhckNvZGVBdCgxMCkgPyAnLXdlYmtpdC0nICsgYSArIGEgOiBhO1xuXG4gICAgICBjYXNlIDk1MTpcbiAgICAgICAgcmV0dXJuIDExNiA9PT0gYS5jaGFyQ29kZUF0KDMpID8gJy13ZWJraXQtJyArIGEgKyBhIDogYTtcblxuICAgICAgY2FzZSA5NjM6XG4gICAgICAgIHJldHVybiAxMTAgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctd2Via2l0LScgKyBhICsgYSA6IGE7XG5cbiAgICAgIGNhc2UgMTAwOTpcbiAgICAgICAgaWYgKDEwMCAhPT0gYS5jaGFyQ29kZUF0KDQpKSBicmVhaztcblxuICAgICAgY2FzZSA5Njk6XG4gICAgICBjYXNlIDk0MjpcbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcblxuICAgICAgY2FzZSA5Nzg6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgYTtcblxuICAgICAgY2FzZSAxMDE5OlxuICAgICAgY2FzZSA5ODM6XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbW96LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgODgzOlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg4KSkgcmV0dXJuICctd2Via2l0LScgKyBhICsgYTtcbiAgICAgICAgaWYgKDAgPCBhLmluZGV4T2YoJ2ltYWdlLXNldCgnLCAxMSkpIHJldHVybiBhLnJlcGxhY2UoamEsICckMS13ZWJraXQtJDInKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDkzMjpcbiAgICAgICAgaWYgKDQ1ID09PSBhLmNoYXJDb2RlQXQoNCkpIHN3aXRjaCAoYS5jaGFyQ29kZUF0KDUpKSB7XG4gICAgICAgICAgY2FzZSAxMDM6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtYm94LScgKyBhLnJlcGxhY2UoJy1ncm93JywgJycpICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLScgKyBhLnJlcGxhY2UoJ2dyb3cnLCAncG9zaXRpdmUnKSArIGE7XG5cbiAgICAgICAgICBjYXNlIDExNTpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnc2hyaW5rJywgJ25lZ2F0aXZlJykgKyBhO1xuXG4gICAgICAgICAgY2FzZSA5ODpcbiAgICAgICAgICAgIHJldHVybiAnLXdlYmtpdC0nICsgYSArICctbXMtJyArIGEucmVwbGFjZSgnYmFzaXMnLCAncHJlZmVycmVkLXNpemUnKSArIGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYSArIGE7XG5cbiAgICAgIGNhc2UgOTY0OlxuICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtJyArIGEgKyBhO1xuXG4gICAgICBjYXNlIDEwMjM6XG4gICAgICAgIGlmICg5OSAhPT0gYS5jaGFyQ29kZUF0KDgpKSBicmVhaztcbiAgICAgICAgYiA9IGEuc3Vic3RyaW5nKGEuaW5kZXhPZignOicsIDE1KSkucmVwbGFjZSgnZmxleC0nLCAnJykucmVwbGFjZSgnc3BhY2UtYmV0d2VlbicsICdqdXN0aWZ5Jyk7XG4gICAgICAgIHJldHVybiAnLXdlYmtpdC1ib3gtcGFjaycgKyBiICsgJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtcGFjaycgKyBiICsgYTtcblxuICAgICAgY2FzZSAxMDA1OlxuICAgICAgICByZXR1cm4ga2EudGVzdChhKSA/IGEucmVwbGFjZShhYSwgJzotd2Via2l0LScpICsgYS5yZXBsYWNlKGFhLCAnOi1tb3otJykgKyBhIDogYTtcblxuICAgICAgY2FzZSAxZTM6XG4gICAgICAgIGIgPSBhLnN1YnN0cmluZygxMykudHJpbSgpO1xuICAgICAgICBjID0gYi5pbmRleE9mKCctJykgKyAxO1xuXG4gICAgICAgIHN3aXRjaCAoYi5jaGFyQ29kZUF0KDApICsgYi5jaGFyQ29kZUF0KGMpKSB7XG4gICAgICAgICAgY2FzZSAyMjY6XG4gICAgICAgICAgICBiID0gYS5yZXBsYWNlKEcsICd0YicpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIDIzMjpcbiAgICAgICAgICAgIGIgPSBhLnJlcGxhY2UoRywgJ3RiLXJsJyk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjIwOlxuICAgICAgICAgICAgYiA9IGEucmVwbGFjZShHLCAnbHInKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy0nICsgYiArIGE7XG5cbiAgICAgIGNhc2UgMTAxNzpcbiAgICAgICAgaWYgKC0xID09PSBhLmluZGV4T2YoJ3N0aWNreScsIDkpKSBicmVhaztcblxuICAgICAgY2FzZSA5NzU6XG4gICAgICAgIGMgPSAoYSA9IGQpLmxlbmd0aCAtIDEwO1xuICAgICAgICBiID0gKDMzID09PSBhLmNoYXJDb2RlQXQoYykgPyBhLnN1YnN0cmluZygwLCBjKSA6IGEpLnN1YnN0cmluZyhkLmluZGV4T2YoJzonLCA3KSArIDEpLnRyaW0oKTtcblxuICAgICAgICBzd2l0Y2ggKG0gPSBiLmNoYXJDb2RlQXQoMCkgKyAoYi5jaGFyQ29kZUF0KDcpIHwgMCkpIHtcbiAgICAgICAgICBjYXNlIDIwMzpcbiAgICAgICAgICAgIGlmICgxMTEgPiBiLmNoYXJDb2RlQXQoOCkpIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSAxMTU6XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKGIsICctd2Via2l0LScgKyBiKSArICc7JyArIGE7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgMjA3OlxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgICAgYSA9IGEucmVwbGFjZShiLCAnLXdlYmtpdC0nICsgKDEwMiA8IG0gPyAnaW5saW5lLScgOiAnJykgKyAnYm94JykgKyAnOycgKyBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgJzsnICsgYS5yZXBsYWNlKGIsICctbXMtJyArIGIgKyAnYm94JykgKyAnOycgKyBhO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGEgKyAnOyc7XG5cbiAgICAgIGNhc2UgOTM4OlxuICAgICAgICBpZiAoNDUgPT09IGEuY2hhckNvZGVBdCg1KSkgc3dpdGNoIChhLmNoYXJDb2RlQXQoNikpIHtcbiAgICAgICAgICBjYXNlIDEwNTpcbiAgICAgICAgICAgIHJldHVybiBiID0gYS5yZXBsYWNlKCctaXRlbXMnLCAnJyksICctd2Via2l0LScgKyBhICsgJy13ZWJraXQtYm94LScgKyBiICsgJy1tcy1mbGV4LScgKyBiICsgYTtcblxuICAgICAgICAgIGNhc2UgMTE1OlxuICAgICAgICAgICAgcmV0dXJuICctd2Via2l0LScgKyBhICsgJy1tcy1mbGV4LWl0ZW0tJyArIGEucmVwbGFjZShiYSwgJycpICsgYTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gJy13ZWJraXQtJyArIGEgKyAnLW1zLWZsZXgtbGluZS1wYWNrJyArIGEucmVwbGFjZSgnYWxpZ24tY29udGVudCcsICcnKS5yZXBsYWNlKGJhLCAnJykgKyBhO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk3MzpcbiAgICAgIGNhc2UgOTg5OlxuICAgICAgICBpZiAoNDUgIT09IGEuY2hhckNvZGVBdCgzKSB8fCAxMjIgPT09IGEuY2hhckNvZGVBdCg0KSkgYnJlYWs7XG5cbiAgICAgIGNhc2UgOTMxOlxuICAgICAgY2FzZSA5NTM6XG4gICAgICAgIGlmICghMCA9PT0gbGEudGVzdChkKSkgcmV0dXJuIDExNSA9PT0gKGIgPSBkLnN1YnN0cmluZyhkLmluZGV4T2YoJzonKSArIDEpKS5jaGFyQ29kZUF0KDApID8gUChkLnJlcGxhY2UoJ3N0cmV0Y2gnLCAnZmlsbC1hdmFpbGFibGUnKSwgYywgZSwgaCkucmVwbGFjZSgnOmZpbGwtYXZhaWxhYmxlJywgJzpzdHJldGNoJykgOiBhLnJlcGxhY2UoYiwgJy13ZWJraXQtJyArIGIpICsgYS5yZXBsYWNlKGIsICctbW96LScgKyBiLnJlcGxhY2UoJ2ZpbGwtJywgJycpKSArIGE7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDk2MjpcbiAgICAgICAgaWYgKGEgPSAnLXdlYmtpdC0nICsgYSArICgxMDIgPT09IGEuY2hhckNvZGVBdCg1KSA/ICctbXMtJyArIGEgOiAnJykgKyBhLCAyMTEgPT09IGUgKyBoICYmIDEwNSA9PT0gYS5jaGFyQ29kZUF0KDEzKSAmJiAwIDwgYS5pbmRleE9mKCd0cmFuc2Zvcm0nLCAxMCkpIHJldHVybiBhLnN1YnN0cmluZygwLCBhLmluZGV4T2YoJzsnLCAyNykgKyAxKS5yZXBsYWNlKG1hLCAnJDEtd2Via2l0LSQyJykgKyBhO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9XG5cbiAgZnVuY3Rpb24gTChkLCBjKSB7XG4gICAgdmFyIGUgPSBkLmluZGV4T2YoMSA9PT0gYyA/ICc6JyA6ICd7JyksXG4gICAgICAgIGggPSBkLnN1YnN0cmluZygwLCAzICE9PSBjID8gZSA6IDEwKTtcbiAgICBlID0gZC5zdWJzdHJpbmcoZSArIDEsIGQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIFIoMiAhPT0gYyA/IGggOiBoLnJlcGxhY2UobmEsICckMScpLCBlLCBjKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVhKGQsIGMpIHtcbiAgICB2YXIgZSA9IFAoYywgYy5jaGFyQ29kZUF0KDApLCBjLmNoYXJDb2RlQXQoMSksIGMuY2hhckNvZGVBdCgyKSk7XG4gICAgcmV0dXJuIGUgIT09IGMgKyAnOycgPyBlLnJlcGxhY2Uob2EsICcgb3IgKCQxKScpLnN1YnN0cmluZyg0KSA6ICcoJyArIGMgKyAnKSc7XG4gIH1cblxuICBmdW5jdGlvbiBIKGQsIGMsIGUsIGgsIGEsIG0sIGIsIHYsIG4sIHEpIHtcbiAgICBmb3IgKHZhciBnID0gMCwgeCA9IGMsIHc7IGcgPCBBOyArK2cpIHtcbiAgICAgIHN3aXRjaCAodyA9IFNbZ10uY2FsbChCLCBkLCB4LCBlLCBoLCBhLCBtLCBiLCB2LCBuLCBxKSkge1xuICAgICAgICBjYXNlIHZvaWQgMDpcbiAgICAgICAgY2FzZSAhMTpcbiAgICAgICAgY2FzZSAhMDpcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgeCA9IHc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHggIT09IGMpIHJldHVybiB4O1xuICB9XG5cbiAgZnVuY3Rpb24gVChkKSB7XG4gICAgc3dpdGNoIChkKSB7XG4gICAgICBjYXNlIHZvaWQgMDpcbiAgICAgIGNhc2UgbnVsbDpcbiAgICAgICAgQSA9IFMubGVuZ3RoID0gMDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZCkgU1tBKytdID0gZDtlbHNlIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIGQpIGZvciAodmFyIGMgPSAwLCBlID0gZC5sZW5ndGg7IGMgPCBlOyArK2MpIHtcbiAgICAgICAgICBUKGRbY10pO1xuICAgICAgICB9IGVsc2UgWSA9ICEhZCB8IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIFQ7XG4gIH1cblxuICBmdW5jdGlvbiBVKGQpIHtcbiAgICBkID0gZC5wcmVmaXg7XG4gICAgdm9pZCAwICE9PSBkICYmIChSID0gbnVsbCwgZCA/ICdmdW5jdGlvbicgIT09IHR5cGVvZiBkID8gdyA9IDEgOiAodyA9IDIsIFIgPSBkKSA6IHcgPSAwKTtcbiAgICByZXR1cm4gVTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEIoZCwgYykge1xuICAgIHZhciBlID0gZDtcbiAgICAzMyA+IGUuY2hhckNvZGVBdCgwKSAmJiAoZSA9IGUudHJpbSgpKTtcbiAgICBWID0gZTtcbiAgICBlID0gW1ZdO1xuXG4gICAgaWYgKDAgPCBBKSB7XG4gICAgICB2YXIgaCA9IEgoLTEsIGMsIGUsIGUsIEQsIHosIDAsIDAsIDAsIDApO1xuICAgICAgdm9pZCAwICE9PSBoICYmICdzdHJpbmcnID09PSB0eXBlb2YgaCAmJiAoYyA9IGgpO1xuICAgIH1cblxuICAgIHZhciBhID0gTShPLCBlLCBjLCAwLCAwKTtcbiAgICAwIDwgQSAmJiAoaCA9IEgoLTIsIGEsIGUsIGUsIEQsIHosIGEubGVuZ3RoLCAwLCAwLCAwKSwgdm9pZCAwICE9PSBoICYmIChhID0gaCkpO1xuICAgIFYgPSAnJztcbiAgICBFID0gMDtcbiAgICB6ID0gRCA9IDE7XG4gICAgcmV0dXJuIGE7XG4gIH1cblxuICB2YXIgY2EgPSAvXlxcMCsvZyxcbiAgICAgIE4gPSAvW1xcMFxcclxcZl0vZyxcbiAgICAgIGFhID0gLzogKi9nLFxuICAgICAga2EgPSAvem9vfGdyYS8sXG4gICAgICBtYSA9IC8oWyw6IF0pKHRyYW5zZm9ybSkvZyxcbiAgICAgIGlhID0gLyxcXHIrPy9nLFxuICAgICAgRiA9IC8oW1xcdFxcclxcbiBdKSpcXGY/Ji9nLFxuICAgICAgZmEgPSAvQChrXFx3KylcXHMqKFxcUyopXFxzKi8sXG4gICAgICBRID0gLzo6KHBsYWNlKS9nLFxuICAgICAgaGEgPSAvOihyZWFkLW9ubHkpL2csXG4gICAgICBHID0gL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFxuICAgICAgZGEgPSAvXFwoXFxzKiguKilcXHMqXFwpL2csXG4gICAgICBvYSA9IC8oW1xcc1xcU10qPyk7L2csXG4gICAgICBiYSA9IC8tc2VsZnxmbGV4LS9nLFxuICAgICAgbmEgPSAvW15dKj8oOltycF1bZWxdYVtcXHctXSspW15dKi8sXG4gICAgICBsYSA9IC9zdHJldGNofDpcXHMqXFx3K1xcLSg/OmNvbnRlfGF2YWlsKS8sXG4gICAgICBqYSA9IC8oW14tXSkoaW1hZ2Utc2V0XFwoKS8sXG4gICAgICB6ID0gMSxcbiAgICAgIEQgPSAxLFxuICAgICAgRSA9IDAsXG4gICAgICB3ID0gMSxcbiAgICAgIE8gPSBbXSxcbiAgICAgIFMgPSBbXSxcbiAgICAgIEEgPSAwLFxuICAgICAgUiA9IG51bGwsXG4gICAgICBZID0gMCxcbiAgICAgIFYgPSAnJztcbiAgQi51c2UgPSBUO1xuICBCLnNldCA9IFU7XG4gIHZvaWQgMCAhPT0gVyAmJiBVKFcpO1xuICByZXR1cm4gQjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3R5bGlzX21pbjtcbiIsInZhciB1bml0bGVzc0tleXMgPSB7XG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAxLFxuICBib3JkZXJJbWFnZU91dHNldDogMSxcbiAgYm9yZGVySW1hZ2VTbGljZTogMSxcbiAgYm9yZGVySW1hZ2VXaWR0aDogMSxcbiAgYm94RmxleDogMSxcbiAgYm94RmxleEdyb3VwOiAxLFxuICBib3hPcmRpbmFsR3JvdXA6IDEsXG4gIGNvbHVtbkNvdW50OiAxLFxuICBjb2x1bW5zOiAxLFxuICBmbGV4OiAxLFxuICBmbGV4R3JvdzogMSxcbiAgZmxleFBvc2l0aXZlOiAxLFxuICBmbGV4U2hyaW5rOiAxLFxuICBmbGV4TmVnYXRpdmU6IDEsXG4gIGZsZXhPcmRlcjogMSxcbiAgZ3JpZFJvdzogMSxcbiAgZ3JpZFJvd0VuZDogMSxcbiAgZ3JpZFJvd1NwYW46IDEsXG4gIGdyaWRSb3dTdGFydDogMSxcbiAgZ3JpZENvbHVtbjogMSxcbiAgZ3JpZENvbHVtbkVuZDogMSxcbiAgZ3JpZENvbHVtblNwYW46IDEsXG4gIGdyaWRDb2x1bW5TdGFydDogMSxcbiAgbXNHcmlkUm93OiAxLFxuICBtc0dyaWRSb3dTcGFuOiAxLFxuICBtc0dyaWRDb2x1bW46IDEsXG4gIG1zR3JpZENvbHVtblNwYW46IDEsXG4gIGZvbnRXZWlnaHQ6IDEsXG4gIGxpbmVIZWlnaHQ6IDEsXG4gIG9wYWNpdHk6IDEsXG4gIG9yZGVyOiAxLFxuICBvcnBoYW5zOiAxLFxuICB0YWJTaXplOiAxLFxuICB3aWRvd3M6IDEsXG4gIHpJbmRleDogMSxcbiAgem9vbTogMSxcbiAgV2Via2l0TGluZUNsYW1wOiAxLFxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiAxLFxuICBmbG9vZE9wYWNpdHk6IDEsXG4gIHN0b3BPcGFjaXR5OiAxLFxuICBzdHJva2VEYXNoYXJyYXk6IDEsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IDEsXG4gIHN0cm9rZU1pdGVybGltaXQ6IDEsXG4gIHN0cm9rZU9wYWNpdHk6IDEsXG4gIHN0cm9rZVdpZHRoOiAxXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bml0bGVzc0tleXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcd2F5bmVcXFxcRG9jdW1lbnRzXFxcXGNvaW5nZWNrb1xcXFxSZWFjdENvaW5HZWNrb1xcXFxwYWdlc1xcXFxpbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgIiwiLyohIEBwcmVzZXJ2ZVxuICogbnVtZXJhbC5qc1xuICogdmVyc2lvbiA6IDIuMC42XG4gKiBhdXRob3IgOiBBZGFtIERyYXBlclxuICogbGljZW5zZSA6IE1JVFxuICogaHR0cDovL2FkYW13ZHJhcGVyLmdpdGh1Yi5jb20vTnVtZXJhbC1qcy9cbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2xvYmFsLm51bWVyYWwgPSBmYWN0b3J5KCk7XG4gICAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBWYXJpYWJsZXNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICB2YXIgbnVtZXJhbCxcbiAgICAgICAgXyxcbiAgICAgICAgVkVSU0lPTiA9ICcyLjAuNicsXG4gICAgICAgIGZvcm1hdHMgPSB7fSxcbiAgICAgICAgbG9jYWxlcyA9IHt9LFxuICAgICAgICBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6ICdlbicsXG4gICAgICAgICAgICB6ZXJvRm9ybWF0OiBudWxsLFxuICAgICAgICAgICAgbnVsbEZvcm1hdDogbnVsbCxcbiAgICAgICAgICAgIGRlZmF1bHRGb3JtYXQ6ICcwLDAnLFxuICAgICAgICAgICAgc2NhbGVQZXJjZW50QnkxMDA6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IGRlZmF1bHRzLmN1cnJlbnRMb2NhbGUsXG4gICAgICAgICAgICB6ZXJvRm9ybWF0OiBkZWZhdWx0cy56ZXJvRm9ybWF0LFxuICAgICAgICAgICAgbnVsbEZvcm1hdDogZGVmYXVsdHMubnVsbEZvcm1hdCxcbiAgICAgICAgICAgIGRlZmF1bHRGb3JtYXQ6IGRlZmF1bHRzLmRlZmF1bHRGb3JtYXQsXG4gICAgICAgICAgICBzY2FsZVBlcmNlbnRCeTEwMDogZGVmYXVsdHMuc2NhbGVQZXJjZW50QnkxMDBcbiAgICAgICAgfTtcblxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICBDb25zdHJ1Y3RvcnNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvLyBOdW1lcmFsIHByb3RvdHlwZSBvYmplY3RcbiAgICBmdW5jdGlvbiBOdW1lcmFsKGlucHV0LCBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bWJlcjtcbiAgICB9XG5cbiAgICBudW1lcmFsID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICAgICAgdmFyIHZhbHVlLFxuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIHVuZm9ybWF0RnVuY3Rpb24sXG4gICAgICAgICAgICByZWdleHA7XG5cbiAgICAgICAgaWYgKG51bWVyYWwuaXNOdW1lcmFsKGlucHV0KSkge1xuICAgICAgICAgICAgdmFsdWUgPSBpbnB1dC52YWx1ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGlucHV0ID09PSAwIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dCA9PT0gbnVsbCB8fCBfLmlzTmFOKGlucHV0KSkge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnplcm9Gb3JtYXQgJiYgaW5wdXQgPT09IG9wdGlvbnMuemVyb0Zvcm1hdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5udWxsRm9ybWF0ICYmIGlucHV0ID09PSBvcHRpb25zLm51bGxGb3JtYXQgfHwgIWlucHV0LnJlcGxhY2UoL1teMC05XSsvZywgJycpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChraW5kIGluIGZvcm1hdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnZXhwID0gdHlwZW9mIGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdCA9PT0gJ2Z1bmN0aW9uJyA/IGZvcm1hdHNba2luZF0ucmVnZXhwcy51bmZvcm1hdCgpIDogZm9ybWF0c1traW5kXS5yZWdleHBzLnVuZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdleHAgJiYgaW5wdXQubWF0Y2gocmVnZXhwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbiA9IGZvcm1hdHNba2luZF0udW5mb3JtYXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdW5mb3JtYXRGdW5jdGlvbiA9IHVuZm9ybWF0RnVuY3Rpb24gfHwgbnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB1bmZvcm1hdEZ1bmN0aW9uKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKGlucHV0KXx8IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IE51bWVyYWwoaW5wdXQsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLy8gdmVyc2lvbiBudW1iZXJcbiAgICBudW1lcmFsLnZlcnNpb24gPSBWRVJTSU9OO1xuXG4gICAgLy8gY29tcGFyZSBudW1lcmFsIG9iamVjdFxuICAgIG51bWVyYWwuaXNOdW1lcmFsID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBOdW1lcmFsO1xuICAgIH07XG5cbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zXG4gICAgbnVtZXJhbC5fID0gXyA9IHtcbiAgICAgICAgLy8gZm9ybWF0cyBudW1iZXJzIHNlcGFyYXRvcnMsIGRlY2ltYWxzIHBsYWNlcywgc2lnbnMsIGFiYnJldmlhdGlvbnNcbiAgICAgICAgbnVtYmVyVG9Gb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBsb2NhbGVzW251bWVyYWwub3B0aW9ucy5jdXJyZW50TG9jYWxlXSxcbiAgICAgICAgICAgICAgICBuZWdQID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgb3B0RGVjID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgbGVhZGluZ0NvdW50ID0gMCxcbiAgICAgICAgICAgICAgICBhYmJyID0gJycsXG4gICAgICAgICAgICAgICAgdHJpbGxpb24gPSAxMDAwMDAwMDAwMDAwLFxuICAgICAgICAgICAgICAgIGJpbGxpb24gPSAxMDAwMDAwMDAwLFxuICAgICAgICAgICAgICAgIG1pbGxpb24gPSAxMDAwMDAwLFxuICAgICAgICAgICAgICAgIHRob3VzYW5kID0gMTAwMCxcbiAgICAgICAgICAgICAgICBkZWNpbWFsID0gJycsXG4gICAgICAgICAgICAgICAgbmVnID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgYWJickZvcmNlLCAvLyBmb3JjZSBhYmJyZXZpYXRpb25cbiAgICAgICAgICAgICAgICBhYnMsXG4gICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgIG1heCxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBpbnQsXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uLFxuICAgICAgICAgICAgICAgIHNpZ25lZCxcbiAgICAgICAgICAgICAgICB0aG91c2FuZHMsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgbmV2ZXIgZm9ybWF0IGEgbnVsbCB2YWx1ZVxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSB8fCAwO1xuXG4gICAgICAgICAgICBhYnMgPSBNYXRoLmFicyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIHNlZSBpZiB3ZSBzaG91bGQgdXNlIHBhcmVudGhlc2VzIGZvciBuZWdhdGl2ZSBudW1iZXIgb3IgaWYgd2Ugc2hvdWxkIHByZWZpeCB3aXRoIGEgc2lnblxuICAgICAgICAgICAgLy8gaWYgYm90aCBhcmUgcHJlc2VudCB3ZSBkZWZhdWx0IHRvIHBhcmVudGhlc2VzXG4gICAgICAgICAgICBpZiAobnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJygnKSkge1xuICAgICAgICAgICAgICAgIG5lZ1AgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9bXFwofFxcKV0vZywgJycpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKycpIHx8IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICctJykpIHtcbiAgICAgICAgICAgICAgICBzaWduZWQgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnKycpID8gZm9ybWF0LmluZGV4T2YoJysnKSA6IHZhbHVlIDwgMCA/IGZvcm1hdC5pbmRleE9mKCctJykgOiAtMTtcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvW1xcK3xcXC1dL2csICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2VlIGlmIGFiYnJldmlhdGlvbiBpcyB3YW50ZWRcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnYScpKSB7XG4gICAgICAgICAgICAgICAgYWJickZvcmNlID0gZm9ybWF0Lm1hdGNoKC9hKGt8bXxifHQpPy8pO1xuXG4gICAgICAgICAgICAgICAgYWJickZvcmNlID0gYWJickZvcmNlID8gYWJickZvcmNlWzFdIDogZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlIGFiYnJldmlhdGlvblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnIGEnKSkge1xuICAgICAgICAgICAgICAgICAgICBhYmJyID0gJyAnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKG5ldyBSZWdFeHAoYWJiciArICdhW2ttYnRdPycpLCAnJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWJzID49IHRyaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAndCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdHJpbGxpb25cbiAgICAgICAgICAgICAgICAgICAgYWJiciArPSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIHRyaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgdHJpbGxpb24gJiYgYWJzID49IGJpbGxpb24gJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdiJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBiaWxsaW9uXG4gICAgICAgICAgICAgICAgICAgIGFiYnIgKz0gbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIGJpbGxpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhYnMgPCBiaWxsaW9uICYmIGFicyA+PSBtaWxsaW9uICYmICFhYmJyRm9yY2UgfHwgYWJickZvcmNlID09PSAnbScpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbWlsbGlvblxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb247XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLyBtaWxsaW9uO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWJzIDwgbWlsbGlvbiAmJiBhYnMgPj0gdGhvdXNhbmQgJiYgIWFiYnJGb3JjZSB8fCBhYmJyRm9yY2UgPT09ICdrJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aG91c2FuZFxuICAgICAgICAgICAgICAgICAgICBhYmJyICs9IGxvY2FsZS5hYmJyZXZpYXRpb25zLnRob3VzYW5kO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC8gdGhvdXNhbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igb3B0aW9uYWwgZGVjaW1hbHNcbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnWy5dJykpIHtcbiAgICAgICAgICAgICAgICBvcHREZWMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdbLl0nLCAnLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBicmVhayBudW1iZXIgYW5kIGZvcm1hdFxuICAgICAgICAgICAgaW50ID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpWzBdO1xuICAgICAgICAgICAgcHJlY2lzaW9uID0gZm9ybWF0LnNwbGl0KCcuJylbMV07XG4gICAgICAgICAgICB0aG91c2FuZHMgPSBmb3JtYXQuaW5kZXhPZignLCcpO1xuICAgICAgICAgICAgbGVhZGluZ0NvdW50ID0gKGZvcm1hdC5zcGxpdCgnLicpWzBdLnNwbGl0KCcsJylbMF0ubWF0Y2goLzAvZykgfHwgW10pLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKHByZWNpc2lvbikge1xuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMocHJlY2lzaW9uLCAnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbi5yZXBsYWNlKCddJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24uc3BsaXQoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9IG51bWVyYWwuXy50b0ZpeGVkKHZhbHVlLCAocHJlY2lzaW9uWzBdLmxlbmd0aCArIHByZWNpc2lvblsxXS5sZW5ndGgpLCByb3VuZGluZ0Z1bmN0aW9uLCBwcmVjaXNpb25bMV0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIHByZWNpc2lvbi5sZW5ndGgsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGludCA9IGRlY2ltYWwuc3BsaXQoJy4nKVswXTtcblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMoZGVjaW1hbCwgJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gbG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCArIGRlY2ltYWwuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG9wdERlYyAmJiBOdW1iZXIoZGVjaW1hbC5zbGljZSgxKSkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbCA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW50ID0gbnVtZXJhbC5fLnRvRml4ZWQodmFsdWUsIDAsIHJvdW5kaW5nRnVuY3Rpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBhYmJyZXZpYXRpb24gYWdhaW4gYWZ0ZXIgcm91bmRpbmdcbiAgICAgICAgICAgIGlmIChhYmJyICYmICFhYmJyRm9yY2UgJiYgTnVtYmVyKGludCkgPj0gMTAwMCAmJiBhYmJyICE9PSBsb2NhbGUuYWJicmV2aWF0aW9ucy50cmlsbGlvbikge1xuICAgICAgICAgICAgICAgIGludCA9IFN0cmluZyhOdW1iZXIoaW50KSAvIDEwMDApO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhYmJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgbG9jYWxlLmFiYnJldmlhdGlvbnMudGhvdXNhbmQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMubWlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLm1pbGxpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMuYmlsbGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGxvY2FsZS5hYmJyZXZpYXRpb25zLmJpbGxpb246XG4gICAgICAgICAgICAgICAgICAgICAgICBhYmJyID0gbG9jYWxlLmFiYnJldmlhdGlvbnMudHJpbGxpb247XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gZm9ybWF0IG51bWJlclxuICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhpbnQsICctJykpIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBpbnQuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgbmVnID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGludC5sZW5ndGggPCBsZWFkaW5nQ291bnQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gbGVhZGluZ0NvdW50IC0gaW50Lmxlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgICAgICAgICBpbnQgPSAnMCcgKyBpbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhvdXNhbmRzID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpbnQgPSBpbnQudG9TdHJpbmcoKS5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMScgKyBsb2NhbGUuZGVsaW1pdGVycy50aG91c2FuZHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm9ybWF0LmluZGV4T2YoJy4nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGludCA9ICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvdXRwdXQgPSBpbnQgKyBkZWNpbWFsICsgKGFiYnIgPyBhYmJyIDogJycpO1xuXG4gICAgICAgICAgICBpZiAobmVnUCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IChuZWdQICYmIG5lZyA/ICcoJyA6ICcnKSArIG91dHB1dCArIChuZWdQICYmIG5lZyA/ICcpJyA6ICcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25lZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IHNpZ25lZCA9PT0gMCA/IChuZWcgPyAnLScgOiAnKycpICsgb3V0cHV0IDogb3V0cHV0ICsgKG5lZyA/ICctJyA6ICcrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZWcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gJy0nICsgb3V0cHV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gdW5mb3JtYXRzIG51bWJlcnMgc2VwYXJhdG9ycywgZGVjaW1hbHMgcGxhY2VzLCBzaWducywgYWJicmV2aWF0aW9uc1xuICAgICAgICBzdHJpbmdUb051bWJlcjogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxlID0gbG9jYWxlc1tvcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIHN0cmluZ09yaWdpbmFsID0gc3RyaW5nLFxuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRob3VzYW5kOiAzLFxuICAgICAgICAgICAgICAgICAgICBtaWxsaW9uOiA2LFxuICAgICAgICAgICAgICAgICAgICBiaWxsaW9uOiA5LFxuICAgICAgICAgICAgICAgICAgICB0cmlsbGlvbjogMTJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFiYnJldmlhdGlvbixcbiAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICBpLFxuICAgICAgICAgICAgICAgIHJlZ2V4cDtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuemVyb0Zvcm1hdCAmJiBzdHJpbmcgPT09IG9wdGlvbnMuemVyb0Zvcm1hdCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9ucy5udWxsRm9ybWF0ICYmIHN0cmluZyA9PT0gb3B0aW9ucy5udWxsRm9ybWF0IHx8ICFzdHJpbmcucmVwbGFjZSgvW14wLTldKy9nLCAnJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IDE7XG5cbiAgICAgICAgICAgICAgICBpZiAobG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCAhPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXC4vZywgJycpLnJlcGxhY2UobG9jYWxlLmRlbGltaXRlcnMuZGVjaW1hbCwgJy4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGFiYnJldmlhdGlvbiBpbiBhYmJyZXZpYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ1teYS16QS1aXScgKyBsb2NhbGUuYWJicmV2aWF0aW9uc1thYmJyZXZpYXRpb25dICsgJyg/OlxcXFwpfChcXFxcJyArIGxvY2FsZS5jdXJyZW5jeS5zeW1ib2wgKyAnKT8oPzpcXFxcKSk/KT8kJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cmluZ09yaWdpbmFsLm1hdGNoKHJlZ2V4cCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICo9IE1hdGgucG93KDEwLCBhYmJyZXZpYXRpb25zW2FiYnJldmlhdGlvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgbmVnYXRpdmUgbnVtYmVyXG4gICAgICAgICAgICAgICAgdmFsdWUgKj0gKHN0cmluZy5zcGxpdCgnLScpLmxlbmd0aCArIE1hdGgubWluKHN0cmluZy5zcGxpdCgnKCcpLmxlbmd0aCAtIDEsIHN0cmluZy5zcGxpdCgnKScpLmxlbmd0aCAtIDEpKSAlIDIgPyAxIDogLTE7XG5cbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbm9uIG51bWJlcnNcbiAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvW14wLTlcXC5dKy9nLCAnJyk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSAqPSBOdW1iZXIoc3RyaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBpc05hTjogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbHVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZXM6IGZ1bmN0aW9uKHN0cmluZywgc2VhcmNoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLmluZGV4T2Yoc2VhcmNoKSAhPT0gLTE7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydDogZnVuY3Rpb24oc3RyaW5nLCBzdWJTdHJpbmcsIHN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIHN0YXJ0KSArIHN1YlN0cmluZyArIHN0cmluZy5zbGljZShzdGFydCk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZHVjZTogZnVuY3Rpb24oYXJyYXksIGNhbGxiYWNrIC8qLCBpbml0aWFsVmFsdWUqLykge1xuICAgICAgICAgICAgaWYgKHRoaXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUucmVkdWNlIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihjYWxsYmFjayArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QoYXJyYXkpLFxuICAgICAgICAgICAgICAgIGxlbiA9IHQubGVuZ3RoID4+PiAwLFxuICAgICAgICAgICAgICAgIGsgPSAwLFxuICAgICAgICAgICAgICAgIHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoayA8IGxlbiAmJiAhKGsgaW4gdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaysrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrID49IGxlbikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0W2srK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGsgaW4gdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGNhbGxiYWNrKHZhbHVlLCB0W2tdLCBrLCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlcyB0aGUgbXVsdGlwbGllciBuZWNlc3NhcnkgdG8gbWFrZSB4ID49IDEsXG4gICAgICAgICAqIGVmZmVjdGl2ZWx5IGVsaW1pbmF0aW5nIG1pc2NhbGN1bGF0aW9ucyBjYXVzZWQgYnlcbiAgICAgICAgICogZmluaXRlIHByZWNpc2lvbi5cbiAgICAgICAgICovXG4gICAgICAgIG11bHRpcGxpZXI6IGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcnRzLmxlbmd0aCA8IDIgPyAxIDogTWF0aC5wb3coMTAsIHBhcnRzWzFdLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHaXZlbiBhIHZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMsIHJldHVybnMgdGhlIG1heGltdW1cbiAgICAgICAgICogbXVsdGlwbGllciB0aGF0IG11c3QgYmUgdXNlZCB0byBub3JtYWxpemUgYW4gb3BlcmF0aW9uIGludm9sdmluZ1xuICAgICAgICAgKiBhbGwgb2YgdGhlbS5cbiAgICAgICAgICovXG4gICAgICAgIGNvcnJlY3Rpb25GYWN0b3I6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFyZ3MucmVkdWNlKGZ1bmN0aW9uKGFjY3VtLCBuZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIG1uID0gXy5tdWx0aXBsaWVyKG5leHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSA+IG1uID8gYWNjdW0gOiBtbjtcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogSW1wbGVtZW50YXRpb24gb2YgdG9GaXhlZCgpIHRoYXQgdHJlYXRzIGZsb2F0cyBtb3JlIGxpa2UgZGVjaW1hbHNcbiAgICAgICAgICpcbiAgICAgICAgICogRml4ZXMgYmluYXJ5IHJvdW5kaW5nIGlzc3VlcyAoZWcuICgwLjYxNSkudG9GaXhlZCgyKSA9PT0gJzAuNjEnKSB0aGF0IHByZXNlbnRcbiAgICAgICAgICogcHJvYmxlbXMgZm9yIGFjY291bnRpbmctIGFuZCBmaW5hbmNlLXJlbGF0ZWQgc29mdHdhcmUuXG4gICAgICAgICAqL1xuICAgICAgICB0b0ZpeGVkOiBmdW5jdGlvbih2YWx1ZSwgbWF4RGVjaW1hbHMsIHJvdW5kaW5nRnVuY3Rpb24sIG9wdGlvbmFscykge1xuICAgICAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyksXG4gICAgICAgICAgICAgICAgbWluRGVjaW1hbHMgPSBtYXhEZWNpbWFscyAtIChvcHRpb25hbHMgfHwgMCksXG4gICAgICAgICAgICAgICAgYm91bmRlZFByZWNpc2lvbixcbiAgICAgICAgICAgICAgICBvcHRpb25hbHNSZWdFeHAsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAvLyBVc2UgdGhlIHNtYWxsZXN0IHByZWNpc2lvbiB2YWx1ZSBwb3NzaWJsZSB0byBhdm9pZCBlcnJvcnMgZnJvbSBmbG9hdGluZyBwb2ludCByZXByZXNlbnRhdGlvblxuICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgIGJvdW5kZWRQcmVjaXNpb24gPSBNYXRoLm1pbihNYXRoLm1heChzcGxpdFZhbHVlWzFdLmxlbmd0aCwgbWluRGVjaW1hbHMpLCBtYXhEZWNpbWFscyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBib3VuZGVkUHJlY2lzaW9uID0gbWluRGVjaW1hbHM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBvd2VyID0gTWF0aC5wb3coMTAsIGJvdW5kZWRQcmVjaXNpb24pO1xuXG4gICAgICAgICAgICAvLyBNdWx0aXBseSB1cCBieSBwcmVjaXNpb24sIHJvdW5kIGFjY3VyYXRlbHksIHRoZW4gZGl2aWRlIGFuZCB1c2UgbmF0aXZlIHRvRml4ZWQoKTpcbiAgICAgICAgICAgIG91dHB1dCA9IChyb3VuZGluZ0Z1bmN0aW9uKHZhbHVlICsgJ2UrJyArIGJvdW5kZWRQcmVjaXNpb24pIC8gcG93ZXIpLnRvRml4ZWQoYm91bmRlZFByZWNpc2lvbik7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25hbHMgPiBtYXhEZWNpbWFscyAtIGJvdW5kZWRQcmVjaXNpb24pIHtcbiAgICAgICAgICAgICAgICBvcHRpb25hbHNSZWdFeHAgPSBuZXcgUmVnRXhwKCdcXFxcLj8wezEsJyArIChvcHRpb25hbHMgLSAobWF4RGVjaW1hbHMgLSBib3VuZGVkUHJlY2lzaW9uKSkgKyAnfSQnKTtcbiAgICAgICAgICAgICAgICBvdXRwdXQgPSBvdXRwdXQucmVwbGFjZShvcHRpb25hbHNSZWdFeHAsICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBhdmFsaWFibGUgb3B0aW9uc1xuICAgIG51bWVyYWwub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAvLyBhdmFsaWFibGUgZm9ybWF0c1xuICAgIG51bWVyYWwuZm9ybWF0cyA9IGZvcm1hdHM7XG5cbiAgICAvLyBhdmFsaWFibGUgZm9ybWF0c1xuICAgIG51bWVyYWwubG9jYWxlcyA9IGxvY2FsZXM7XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHNldHMgdGhlIGN1cnJlbnQgbG9jYWxlLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50IGdsb2JhbFxuICAgIC8vIGxvY2FsZSBrZXkuXG4gICAgbnVtZXJhbC5sb2NhbGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgICAgb3B0aW9ucy5jdXJyZW50TG9jYWxlID0ga2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3B0aW9ucy5jdXJyZW50TG9jYWxlO1xuICAgIH07XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgbG9hZGVkIGxvY2FsZSBkYXRhLiAgSWZcbiAgICAvLyBubyBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbiwgaXQgd2lsbCBzaW1wbHkgcmV0dXJuIHRoZSBjdXJyZW50XG4gICAgLy8gZ2xvYmFsIGxvY2FsZSBvYmplY3QuXG4gICAgbnVtZXJhbC5sb2NhbGVEYXRhID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxlc1tvcHRpb25zLmN1cnJlbnRMb2NhbGVdO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFsb2NhbGVzW2tleV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsb2NhbGUgOiAnICsga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsb2NhbGVzW2tleV07XG4gICAgfTtcblxuICAgIG51bWVyYWwucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG9wdGlvbnNbcHJvcGVydHldID0gZGVmYXVsdHNbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG51bWVyYWwuemVyb0Zvcm1hdCA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLnplcm9Gb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiBudWxsO1xuICAgIH07XG5cbiAgICBudW1lcmFsLm51bGxGb3JtYXQgPSBmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgICAgIG9wdGlvbnMubnVsbEZvcm1hdCA9IHR5cGVvZihmb3JtYXQpID09PSAnc3RyaW5nJyA/IGZvcm1hdCA6IG51bGw7XG4gICAgfTtcblxuICAgIG51bWVyYWwuZGVmYXVsdEZvcm1hdCA9IGZ1bmN0aW9uKGZvcm1hdCkge1xuICAgICAgICBvcHRpb25zLmRlZmF1bHRGb3JtYXQgPSB0eXBlb2YoZm9ybWF0KSA9PT0gJ3N0cmluZycgPyBmb3JtYXQgOiAnMC4wJztcbiAgICB9O1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlciA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIGZvcm1hdCkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzW3R5cGUgKyAncyddW25hbWVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG5hbWUgKyAnICcgKyB0eXBlICsgJyBhbHJlYWR5IHJlZ2lzdGVyZWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3R5cGUgKyAncyddW25hbWVdID0gZm9ybWF0O1xuXG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfTtcblxuXG4gICAgbnVtZXJhbC52YWxpZGF0ZSA9IGZ1bmN0aW9uKHZhbCwgY3VsdHVyZSkge1xuICAgICAgICB2YXIgX2RlY2ltYWxTZXAsXG4gICAgICAgICAgICBfdGhvdXNhbmRTZXAsXG4gICAgICAgICAgICBfY3VyclN5bWJvbCxcbiAgICAgICAgICAgIF92YWxBcnJheSxcbiAgICAgICAgICAgIF9hYmJyT2JqLFxuICAgICAgICAgICAgX3Rob3VzYW5kUmVnRXgsXG4gICAgICAgICAgICBsb2NhbGVEYXRhLFxuICAgICAgICAgICAgdGVtcDtcblxuICAgICAgICAvL2NvZXJjZSB2YWwgdG8gc3RyaW5nXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsICs9ICcnO1xuXG4gICAgICAgICAgICBpZiAoY29uc29sZS53YXJuKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdOdW1lcmFsLmpzOiBWYWx1ZSBpcyBub3Qgc3RyaW5nLiBJdCBoYXMgYmVlbiBjby1lcmNlZCB0bzogJywgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vdHJpbSB3aGl0ZXNwYWNlcyBmcm9tIGVpdGhlciBzaWRlc1xuICAgICAgICB2YWwgPSB2YWwudHJpbSgpO1xuXG4gICAgICAgIC8vaWYgdmFsIGlzIGp1c3QgZGlnaXRzIHJldHVybiB0cnVlXG4gICAgICAgIGlmICghIXZhbC5tYXRjaCgvXlxcZCskLykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB2YWwgaXMgZW1wdHkgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICh2YWwgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2dldCB0aGUgZGVjaW1hbCBhbmQgdGhvdXNhbmRzIHNlcGFyYXRvciBmcm9tIG51bWVyYWwubG9jYWxlRGF0YVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9jaGVjayBpZiB0aGUgY3VsdHVyZSBpcyB1bmRlcnN0b29kIGJ5IG51bWVyYWwuIGlmIG5vdCwgZGVmYXVsdCBpdCB0byBjdXJyZW50IGxvY2FsZVxuICAgICAgICAgICAgbG9jYWxlRGF0YSA9IG51bWVyYWwubG9jYWxlRGF0YShjdWx0dXJlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9jYWxlRGF0YSA9IG51bWVyYWwubG9jYWxlRGF0YShudW1lcmFsLmxvY2FsZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vc2V0dXAgdGhlIGRlbGltaXRlcnMgYW5kIGN1cnJlbmN5IHN5bWJvbCBiYXNlZCBvbiBjdWx0dXJlL2xvY2FsZVxuICAgICAgICBfY3VyclN5bWJvbCA9IGxvY2FsZURhdGEuY3VycmVuY3kuc3ltYm9sO1xuICAgICAgICBfYWJick9iaiA9IGxvY2FsZURhdGEuYWJicmV2aWF0aW9ucztcbiAgICAgICAgX2RlY2ltYWxTZXAgPSBsb2NhbGVEYXRhLmRlbGltaXRlcnMuZGVjaW1hbDtcbiAgICAgICAgaWYgKGxvY2FsZURhdGEuZGVsaW1pdGVycy50aG91c2FuZHMgPT09ICcuJykge1xuICAgICAgICAgICAgX3Rob3VzYW5kU2VwID0gJ1xcXFwuJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aG91c2FuZFNlcCA9IGxvY2FsZURhdGEuZGVsaW1pdGVycy50aG91c2FuZHM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YWxpZGF0aW5nIGN1cnJlbmN5IHN5bWJvbFxuICAgICAgICB0ZW1wID0gdmFsLm1hdGNoKC9eW15cXGRdKy8pO1xuICAgICAgICBpZiAodGVtcCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdmFsID0gdmFsLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGlmICh0ZW1wWzBdICE9PSBfY3VyclN5bWJvbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmFsaWRhdGluZyBhYmJyZXZpYXRpb24gc3ltYm9sXG4gICAgICAgIHRlbXAgPSB2YWwubWF0Y2goL1teXFxkXSskLyk7XG4gICAgICAgIGlmICh0ZW1wICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgaWYgKHRlbXBbMF0gIT09IF9hYmJyT2JqLnRob3VzYW5kICYmIHRlbXBbMF0gIT09IF9hYmJyT2JqLm1pbGxpb24gJiYgdGVtcFswXSAhPT0gX2FiYnJPYmouYmlsbGlvbiAmJiB0ZW1wWzBdICE9PSBfYWJick9iai50cmlsbGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF90aG91c2FuZFJlZ0V4ID0gbmV3IFJlZ0V4cChfdGhvdXNhbmRTZXAgKyAnezJ9Jyk7XG5cbiAgICAgICAgaWYgKCF2YWwubWF0Y2goL1teXFxkLixdL2cpKSB7XG4gICAgICAgICAgICBfdmFsQXJyYXkgPSB2YWwuc3BsaXQoX2RlY2ltYWxTZXApO1xuICAgICAgICAgICAgaWYgKF92YWxBcnJheS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoX3ZhbEFycmF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKy4qXFxkJC8pICYmICFfdmFsQXJyYXlbMF0ubWF0Y2goX3Rob3VzYW5kUmVnRXgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3ZhbEFycmF5WzBdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICggISEgX3ZhbEFycmF5WzBdLm1hdGNoKC9eXFxkKyQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSAmJiAhISBfdmFsQXJyYXlbMV0ubWF0Y2goL15cXGQrJC8pKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoICEhIF92YWxBcnJheVswXS5tYXRjaCgvXlxcZCsuKlxcZCQvKSAmJiAhX3ZhbEFycmF5WzBdLm1hdGNoKF90aG91c2FuZFJlZ0V4KSAmJiAhISBfdmFsQXJyYXlbMV0ubWF0Y2goL15cXGQrJC8pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIE51bWVyYWwgUHJvdG90eXBlXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgbnVtZXJhbC5mbiA9IE51bWVyYWwucHJvdG90eXBlID0ge1xuICAgICAgICBjbG9uZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtZXJhbCh0aGlzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihpbnB1dFN0cmluZywgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fdmFsdWUsXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gaW5wdXRTdHJpbmcgfHwgb3B0aW9ucy5kZWZhdWx0Rm9ybWF0LFxuICAgICAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICAgICAgb3V0cHV0LFxuICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgaGF2ZSBhIHJvdW5kaW5nRnVuY3Rpb25cbiAgICAgICAgICAgIHJvdW5kaW5nRnVuY3Rpb24gPSByb3VuZGluZ0Z1bmN0aW9uIHx8IE1hdGgucm91bmQ7XG5cbiAgICAgICAgICAgIC8vIGZvcm1hdCBiYXNlZCBvbiB2YWx1ZVxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAwICYmIG9wdGlvbnMuemVyb0Zvcm1hdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IG9wdGlvbnMuemVyb0Zvcm1hdDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwgJiYgb3B0aW9ucy5udWxsRm9ybWF0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3B0aW9ucy5udWxsRm9ybWF0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGtpbmQgaW4gZm9ybWF0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0Lm1hdGNoKGZvcm1hdHNba2luZF0ucmVnZXhwcy5mb3JtYXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRGdW5jdGlvbiA9IGZvcm1hdHNba2luZF0uZm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm1hdEZ1bmN0aW9uID0gZm9ybWF0RnVuY3Rpb24gfHwgbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0O1xuXG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gZm9ybWF0RnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3Rvci5jYWxsKG51bGwsIHRoaXMuX3ZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSArIE1hdGgucm91bmQoY29yckZhY3RvciAqIGN1cnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjaywgMCkgLyBjb3JyRmFjdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgc3VidHJhY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3Rvci5jYWxsKG51bGwsIHRoaXMuX3ZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNiYWNrKGFjY3VtLCBjdXJyLCBjdXJySSwgTykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bSAtIE1hdGgucm91bmQoY29yckZhY3RvciAqIGN1cnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt2YWx1ZV0sIGNiYWNrLCBNYXRoLnJvdW5kKHRoaXMuX3ZhbHVlICogY29yckZhY3RvcikpIC8gY29yckZhY3RvcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIG11bHRpcGx5OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gY2JhY2soYWNjdW0sIGN1cnIsIGN1cnJJLCBPKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvcnJGYWN0b3IgPSBfLmNvcnJlY3Rpb25GYWN0b3IoYWNjdW0sIGN1cnIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFjY3VtICogY29yckZhY3RvcikgKiBNYXRoLnJvdW5kKGN1cnIgKiBjb3JyRmFjdG9yKSAvIE1hdGgucm91bmQoY29yckZhY3RvciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjaywgMSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBkaXZpZGU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IF8uY29ycmVjdGlvbkZhY3RvcihhY2N1bSwgY3Vycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoYWNjdW0gKiBjb3JyRmFjdG9yKSAvIE1hdGgucm91bmQoY3VyciAqIGNvcnJGYWN0b3IpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IF8ucmVkdWNlKFt0aGlzLl92YWx1ZSwgdmFsdWVdLCBjYmFjayk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBkaWZmZXJlbmNlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKG51bWVyYWwodGhpcy5fdmFsdWUpLnN1YnRyYWN0KHZhbHVlKS52YWx1ZSgpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgIERlZmF1bHQgTG9jYWxlICYmIEZvcm1hdFxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgIG51bWVyYWwucmVnaXN0ZXIoJ2xvY2FsZScsICdlbicsIHtcbiAgICAgICAgZGVsaW1pdGVyczoge1xuICAgICAgICAgICAgdGhvdXNhbmRzOiAnLCcsXG4gICAgICAgICAgICBkZWNpbWFsOiAnLidcbiAgICAgICAgfSxcbiAgICAgICAgYWJicmV2aWF0aW9uczoge1xuICAgICAgICAgICAgdGhvdXNhbmQ6ICdrJyxcbiAgICAgICAgICAgIG1pbGxpb246ICdtJyxcbiAgICAgICAgICAgIGJpbGxpb246ICdiJyxcbiAgICAgICAgICAgIHRyaWxsaW9uOiAndCdcbiAgICAgICAgfSxcbiAgICAgICAgb3JkaW5hbDogZnVuY3Rpb24obnVtYmVyKSB7XG4gICAgICAgICAgICB2YXIgYiA9IG51bWJlciAlIDEwO1xuICAgICAgICAgICAgcmV0dXJuICh+fihudW1iZXIgJSAxMDAgLyAxMCkgPT09IDEpID8gJ3RoJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDEpID8gJ3N0JyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XG4gICAgICAgICAgICAgICAgKGIgPT09IDMpID8gJ3JkJyA6ICd0aCc7XG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbmN5OiB7XG4gICAgICAgICAgICBzeW1ib2w6ICckJ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBcblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnYnBzJywge1xuICAgICAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogLyhCUFMpLyxcbiAgICAgICAgICAgICAgICB1bmZvcm1hdDogLyhCUFMpL1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBzcGFjZSA9IG51bWVyYWwuXy5pbmNsdWRlcyhmb3JtYXQsICcgQlBTJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0O1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAqIDEwMDAwO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZSBCUFNcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvXFxzP0JQUy8sICcnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMob3V0cHV0LCAnKScpKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5zcGxpdCgnJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnNwbGljZSgtMSwgMCwgc3BhY2UgKyAnQlBTJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dCArIHNwYWNlICsgJ0JQUyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICsobnVtZXJhbC5fLnN0cmluZ1RvTnVtYmVyKHN0cmluZykgKiAwLjAwMDEpLnRvRml4ZWQoMTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGVjaW1hbCA9IHtcbiAgICAgICAgICAgIGJhc2U6IDEwMDAsXG4gICAgICAgICAgICBzdWZmaXhlczogWydCJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cbiAgICAgICAgfSxcbiAgICAgICAgYmluYXJ5ID0ge1xuICAgICAgICAgICAgYmFzZTogMTAyNCxcbiAgICAgICAgICAgIHN1ZmZpeGVzOiBbJ0InLCAnS2lCJywgJ01pQicsICdHaUInLCAnVGlCJywgJ1BpQicsICdFaUInLCAnWmlCJywgJ1lpQiddXG4gICAgICAgIH07XG5cbiAgICB2YXIgYWxsU3VmZml4ZXMgPSAgZGVjaW1hbC5zdWZmaXhlcy5jb25jYXQoYmluYXJ5LnN1ZmZpeGVzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlY2ltYWwuc3VmZml4ZXMuaW5kZXhPZihpdGVtKSA8IDA7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIHVuZm9ybWF0UmVnZXggPSBhbGxTdWZmaXhlcy5qb2luKCd8Jyk7XG4gICAgICAgIC8vIEFsbG93IHN1cHBvcnQgZm9yIEJQUyAoaHR0cDovL3d3dy5pbnZlc3RvcGVkaWEuY29tL3Rlcm1zL2IvYmFzaXNwb2ludC5hc3ApXG4gICAgICAgIHVuZm9ybWF0UmVnZXggPSAnKCcgKyB1bmZvcm1hdFJlZ2V4LnJlcGxhY2UoJ0InLCAnQig/IVBTKScpICsgJyknO1xuXG4gICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2J5dGVzJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oWzBcXHNdaT9iKS8sXG4gICAgICAgICAgICB1bmZvcm1hdDogbmV3IFJlZ0V4cCh1bmZvcm1hdFJlZ2V4KVxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBvdXRwdXQsXG4gICAgICAgICAgICAgICAgYnl0ZXMgPSBudW1lcmFsLl8uaW5jbHVkZXMoZm9ybWF0LCAnaWInKSA/IGJpbmFyeSA6IGRlY2ltYWwsXG4gICAgICAgICAgICAgICAgc3VmZml4ID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBiJykgfHwgbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBpYicpID8gJyAnIDogJycsXG4gICAgICAgICAgICAgICAgcG93ZXIsXG4gICAgICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgICAgIG1heDtcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9pP2IvLCAnJyk7XG5cbiAgICAgICAgICAgIGZvciAocG93ZXIgPSAwOyBwb3dlciA8PSBieXRlcy5zdWZmaXhlcy5sZW5ndGg7IHBvd2VyKyspIHtcbiAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLnBvdyhieXRlcy5iYXNlLCBwb3dlcik7XG4gICAgICAgICAgICAgICAgbWF4ID0gTWF0aC5wb3coYnl0ZXMuYmFzZSwgcG93ZXIgKyAxKTtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gMCB8fCB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPCBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VmZml4ICs9IGJ5dGVzLnN1ZmZpeGVzW3Bvd2VyXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAvIG1pbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgc3VmZml4O1xuICAgICAgICB9LFxuICAgICAgICB1bmZvcm1hdDogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKSxcbiAgICAgICAgICAgICAgICBwb3dlcixcbiAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXI7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGZvciAocG93ZXIgPSBkZWNpbWFsLnN1ZmZpeGVzLmxlbmd0aCAtIDE7IHBvd2VyID49IDA7IHBvd2VyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsIGRlY2ltYWwuc3VmZml4ZXNbcG93ZXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZXNNdWx0aXBsaWVyID0gTWF0aC5wb3coZGVjaW1hbC5iYXNlLCBwb3dlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsIGJpbmFyeS5zdWZmaXhlc1twb3dlcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBieXRlc011bHRpcGxpZXIgPSBNYXRoLnBvdyhiaW5hcnkuYmFzZSwgcG93ZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbHVlICo9IChieXRlc011bHRpcGxpZXIgfHwgMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdjdXJyZW5jeScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKFxcJCkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IG51bWVyYWwubG9jYWxlc1tudW1lcmFsLm9wdGlvbnMuY3VycmVudExvY2FsZV0sXG4gICAgICAgICAgICAgICAgc3ltYm9scyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlOiBmb3JtYXQubWF0Y2goL14oW1xcK3xcXC18XFwofFxcc3xcXCRdKikvKVswXSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IGZvcm1hdC5tYXRjaCgvKFtcXCt8XFwtfFxcKXxcXHN8XFwkXSopJC8pWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvdXRwdXQsXG4gICAgICAgICAgICAgICAgc3ltYm9sLFxuICAgICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICAgIC8vIHN0cmlwIGZvcm1hdCBvZiBzcGFjZXMgYW5kICRcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/XFwkXFxzPy8sICcnKTtcblxuICAgICAgICAgICAgLy8gZm9ybWF0IHRoZSBudW1iZXJcbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdCh2YWx1ZSwgZm9ybWF0LCByb3VuZGluZ0Z1bmN0aW9uKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBiZWZvcmUgYW5kIGFmdGVyIGJhc2VkIG9uIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgPj0gMCkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYmVmb3JlID0gc3ltYm9scy5iZWZvcmUucmVwbGFjZSgvW1xcLVxcKF0vLCAnJyk7XG4gICAgICAgICAgICAgICAgc3ltYm9scy5hZnRlciA9IHN5bWJvbHMuYWZ0ZXIucmVwbGFjZSgvW1xcLVxcKV0vLCAnJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIDwgMCAmJiAoIW51bWVyYWwuXy5pbmNsdWRlcyhzeW1ib2xzLmJlZm9yZSwgJy0nKSAmJiAhbnVtZXJhbC5fLmluY2x1ZGVzKHN5bWJvbHMuYmVmb3JlLCAnKCcpKSkge1xuICAgICAgICAgICAgICAgIHN5bWJvbHMuYmVmb3JlID0gJy0nICsgc3ltYm9scy5iZWZvcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIGJlZm9yZSBzeW1ib2xcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzeW1ib2xzLmJlZm9yZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHN5bWJvbCA9IHN5bWJvbHMuYmVmb3JlW2ldO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChzeW1ib2wpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnJCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCwgaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8uaW5zZXJ0KG91dHB1dCwgJyAnLCBpICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggYWZ0ZXIgc3ltYm9sXG4gICAgICAgICAgICBmb3IgKGkgPSBzeW1ib2xzLmFmdGVyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sID0gc3ltYm9scy5hZnRlcltpXTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc3ltYm9sKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gaSA9PT0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxID8gb3V0cHV0ICsgbG9jYWxlLmN1cnJlbmN5LnN5bWJvbCA6IG51bWVyYWwuXy5pbnNlcnQob3V0cHV0LCBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLCAtKHN5bWJvbHMuYWZ0ZXIubGVuZ3RoIC0gKDEgKyBpKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0ID0gaSA9PT0gc3ltYm9scy5hZnRlci5sZW5ndGggLSAxID8gb3V0cHV0ICsgJyAnIDogbnVtZXJhbC5fLmluc2VydChvdXRwdXQsICcgJywgLShzeW1ib2xzLmFmdGVyLmxlbmd0aCAtICgxICsgaSkgKyBsb2NhbGUuY3VycmVuY3kuc3ltYm9sLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpO1xuXG5cbihmdW5jdGlvbigpIHtcbiAgICAgICAgbnVtZXJhbC5yZWdpc3RlcignZm9ybWF0JywgJ2V4cG9uZW50aWFsJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oZVxcK3xlLSkvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oZVxcK3xlLSkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIG91dHB1dCxcbiAgICAgICAgICAgICAgICBleHBvbmVudGlhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIW51bWVyYWwuXy5pc05hTih2YWx1ZSkgPyB2YWx1ZS50b0V4cG9uZW50aWFsKCkgOiAnMGUrMCcsXG4gICAgICAgICAgICAgICAgcGFydHMgPSBleHBvbmVudGlhbC5zcGxpdCgnZScpO1xuXG4gICAgICAgICAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZSgvZVtcXCt8XFwtXXsxfTAvLCAnJyk7XG5cbiAgICAgICAgICAgIG91dHB1dCA9IG51bWVyYWwuXy5udW1iZXJUb0Zvcm1hdChOdW1iZXIocGFydHNbMF0pLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgJ2UnICsgcGFydHNbMV07XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IG51bWVyYWwuXy5pbmNsdWRlcyhzdHJpbmcsICdlKycpID8gc3RyaW5nLnNwbGl0KCdlKycpIDogc3RyaW5nLnNwbGl0KCdlLScpLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHBhcnRzWzBdKSxcbiAgICAgICAgICAgICAgICBwb3dlciA9IE51bWJlcihwYXJ0c1sxXSk7XG5cbiAgICAgICAgICAgIHBvd2VyID0gbnVtZXJhbC5fLmluY2x1ZGVzKHN0cmluZywgJ2UtJykgPyBwb3dlciAqPSAtMSA6IHBvd2VyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjYmFjayhhY2N1bSwgY3VyciwgY3VyckksIE8pIHtcbiAgICAgICAgICAgICAgICB2YXIgY29yckZhY3RvciA9IG51bWVyYWwuXy5jb3JyZWN0aW9uRmFjdG9yKGFjY3VtLCBjdXJyKSxcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gKGFjY3VtICogY29yckZhY3RvcikgKiAoY3VyciAqIGNvcnJGYWN0b3IpIC8gKGNvcnJGYWN0b3IgKiBjb3JyRmFjdG9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVtZXJhbC5fLnJlZHVjZShbdmFsdWUsIE1hdGgucG93KDEwLCBwb3dlcildLCBjYmFjaywgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAnb3JkaW5hbCcsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKG8pL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBudW1lcmFsLmxvY2FsZXNbbnVtZXJhbC5vcHRpb25zLmN1cnJlbnRMb2NhbGVdLFxuICAgICAgICAgICAgICAgIG91dHB1dCxcbiAgICAgICAgICAgICAgICBvcmRpbmFsID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyBvJykgPyAnICcgOiAnJztcblxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHNwYWNlIGJlZm9yZVxuICAgICAgICAgICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UoL1xccz9vLywgJycpO1xuXG4gICAgICAgICAgICBvcmRpbmFsICs9IGxvY2FsZS5vcmRpbmFsKHZhbHVlKTtcblxuICAgICAgICAgICAgb3V0cHV0ID0gbnVtZXJhbC5fLm51bWJlclRvRm9ybWF0KHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0ICsgb3JkaW5hbDtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAgICAgIG51bWVyYWwucmVnaXN0ZXIoJ2Zvcm1hdCcsICdwZXJjZW50YWdlJywge1xuICAgICAgICByZWdleHBzOiB7XG4gICAgICAgICAgICBmb3JtYXQ6IC8oJSkvLFxuICAgICAgICAgICAgdW5mb3JtYXQ6IC8oJSkvXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24odmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgdmFyIHNwYWNlID0gbnVtZXJhbC5fLmluY2x1ZGVzKGZvcm1hdCwgJyAlJykgPyAnICcgOiAnJyxcbiAgICAgICAgICAgICAgICBvdXRwdXQ7XG5cbiAgICAgICAgICAgIGlmIChudW1lcmFsLm9wdGlvbnMuc2NhbGVQZXJjZW50QnkxMDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlICogMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBjaGVjayBmb3Igc3BhY2UgYmVmb3JlICVcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKC9cXHM/XFwlLywgJycpO1xuXG4gICAgICAgICAgICBvdXRwdXQgPSBudW1lcmFsLl8ubnVtYmVyVG9Gb3JtYXQodmFsdWUsIGZvcm1hdCwgcm91bmRpbmdGdW5jdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChudW1lcmFsLl8uaW5jbHVkZXMob3V0cHV0LCAnKScpKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0LnNwbGl0KCcnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dC5zcGxpY2UoLTEsIDAsIHNwYWNlICsgJyUnKTtcblxuICAgICAgICAgICAgICAgIG91dHB1dCA9IG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0ID0gb3V0cHV0ICsgc3BhY2UgKyAnJSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciBudW1iZXIgPSBudW1lcmFsLl8uc3RyaW5nVG9OdW1iZXIoc3RyaW5nKTtcbiAgICAgICAgICAgIGlmIChudW1lcmFsLm9wdGlvbnMuc2NhbGVQZXJjZW50QnkxMDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyICogMC4wMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKCk7XG5cblxuKGZ1bmN0aW9uKCkge1xuICAgICAgICBudW1lcmFsLnJlZ2lzdGVyKCdmb3JtYXQnLCAndGltZScsIHtcbiAgICAgICAgcmVnZXhwczoge1xuICAgICAgICAgICAgZm9ybWF0OiAvKDopLyxcbiAgICAgICAgICAgIHVuZm9ybWF0OiAvKDopL1xuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlLCBmb3JtYXQsIHJvdW5kaW5nRnVuY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBob3VycyA9IE1hdGguZmxvb3IodmFsdWUgLyA2MCAvIDYwKSxcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5mbG9vcigodmFsdWUgLSAoaG91cnMgKiA2MCAqIDYwKSkgLyA2MCksXG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IE1hdGgucm91bmQodmFsdWUgLSAoaG91cnMgKiA2MCAqIDYwKSAtIChtaW51dGVzICogNjApKTtcblxuICAgICAgICAgICAgcmV0dXJuIGhvdXJzICsgJzonICsgKG1pbnV0ZXMgPCAxMCA/ICcwJyArIG1pbnV0ZXMgOiBtaW51dGVzKSArICc6JyArIChzZWNvbmRzIDwgMTAgPyAnMCcgKyBzZWNvbmRzIDogc2Vjb25kcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVuZm9ybWF0OiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgICAgICAgIHZhciB0aW1lQXJyYXkgPSBzdHJpbmcuc3BsaXQoJzonKSxcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gMDtcblxuICAgICAgICAgICAgLy8gdHVybiBob3VycyBhbmQgbWludXRlcyBpbnRvIHNlY29uZHMgYW5kIGFkZCB0aGVtIGFsbCB1cFxuICAgICAgICAgICAgaWYgKHRpbWVBcnJheS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAvLyBob3Vyc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMF0pICogNjAgKiA2MCk7XG4gICAgICAgICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMV0pICogNjApO1xuICAgICAgICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIE51bWJlcih0aW1lQXJyYXlbMl0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aW1lQXJyYXkubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgLy8gbWludXRlc1xuICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzICsgKE51bWJlcih0aW1lQXJyYXlbMF0pICogNjApO1xuICAgICAgICAgICAgICAgIC8vIHNlY29uZHNcbiAgICAgICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyArIE51bWJlcih0aW1lQXJyYXlbMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihzZWNvbmRzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSkoKTtcblxucmV0dXJuIG51bWVyYWw7XG59KSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanNcIik7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgcnVudGltZSA9IChmdW5jdGlvbiAoZXhwb3J0cykge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgT3AgPSBPYmplY3QucHJvdG90eXBlO1xuICB2YXIgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgJFN5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiA/IFN5bWJvbCA6IHt9O1xuICB2YXIgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuICB2YXIgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiO1xuICB2YXIgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlW3RvU3RyaW5nVGFnU3ltYm9sXSA9XG4gICAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBBc3luY0l0ZXJhdG9yLnByb3RvdHlwZVthc3luY0l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcbiAgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvcjtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIGlmIChQcm9taXNlSW1wbCA9PT0gdm9pZCAwKSBQcm9taXNlSW1wbCA9IFByb21pc2U7XG5cbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksXG4gICAgICBQcm9taXNlSW1wbFxuICAgICk7XG5cbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tZXRob2QgPSBtZXRob2Q7XG4gICAgICBjb250ZXh0LmFyZyA9IGFyZztcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgICAgIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBjb250ZXh0LmFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIENhbGwgZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdKGNvbnRleHQuYXJnKSBhbmQgaGFuZGxlIHRoZVxuICAvLyByZXN1bHQsIGVpdGhlciBieSByZXR1cm5pbmcgYSB7IHZhbHVlLCBkb25lIH0gcmVzdWx0IGZyb20gdGhlXG4gIC8vIGRlbGVnYXRlIGl0ZXJhdG9yLCBvciBieSBtb2RpZnlpbmcgY29udGV4dC5tZXRob2QgYW5kIGNvbnRleHQuYXJnLFxuICAvLyBzZXR0aW5nIGNvbnRleHQuZGVsZWdhdGUgdG8gbnVsbCwgYW5kIHJldHVybmluZyB0aGUgQ29udGludWVTZW50aW5lbC5cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF07XG4gICAgaWYgKG1ldGhvZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBBIC50aHJvdyBvciAucmV0dXJuIHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyAudGhyb3dcbiAgICAgIC8vIG1ldGhvZCBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgLy8gTm90ZTogW1wicmV0dXJuXCJdIG11c3QgYmUgdXNlZCBmb3IgRVMzIHBhcnNpbmcgY29tcGF0aWJpbGl0eS5cbiAgICAgICAgaWYgKGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgLy8gSWYgbWF5YmVJbnZva2VEZWxlZ2F0ZShjb250ZXh0KSBjaGFuZ2VkIGNvbnRleHQubWV0aG9kIGZyb21cbiAgICAgICAgICAgIC8vIFwicmV0dXJuXCIgdG8gXCJ0aHJvd1wiLCBsZXQgdGhhdCBvdmVycmlkZSB0aGUgVHlwZUVycm9yIGJlbG93LlxuICAgICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICBcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ3Rocm93JyBtZXRob2RcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG5cbiAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcblxuICAgIGlmICghIGluZm8pIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIik7XG4gICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cblxuICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgIC8vIEFzc2lnbiB0aGUgcmVzdWx0IG9mIHRoZSBmaW5pc2hlZCBkZWxlZ2F0ZSB0byB0aGUgdGVtcG9yYXJ5XG4gICAgICAvLyB2YXJpYWJsZSBzcGVjaWZpZWQgYnkgZGVsZWdhdGUucmVzdWx0TmFtZSAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG5cbiAgICAgIC8vIFJlc3VtZSBleGVjdXRpb24gYXQgdGhlIGRlc2lyZWQgbG9jYXRpb24gKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG5cbiAgICAgIC8vIElmIGNvbnRleHQubWV0aG9kIHdhcyBcInRocm93XCIgYnV0IHRoZSBkZWxlZ2F0ZSBoYW5kbGVkIHRoZVxuICAgICAgLy8gZXhjZXB0aW9uLCBsZXQgdGhlIG91dGVyIGdlbmVyYXRvciBwcm9jZWVkIG5vcm1hbGx5LiBJZlxuICAgICAgLy8gY29udGV4dC5tZXRob2Qgd2FzIFwibmV4dFwiLCBmb3JnZXQgY29udGV4dC5hcmcgc2luY2UgaXQgaGFzIGJlZW5cbiAgICAgIC8vIFwiY29uc3VtZWRcIiBieSB0aGUgZGVsZWdhdGUgaXRlcmF0b3IuIElmIGNvbnRleHQubWV0aG9kIHdhc1xuICAgICAgLy8gXCJyZXR1cm5cIiwgYWxsb3cgdGhlIG9yaWdpbmFsIC5yZXR1cm4gY2FsbCB0byBjb250aW51ZSBpbiB0aGVcbiAgICAgIC8vIG91dGVyIGdlbmVyYXRvci5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCAhPT0gXCJyZXR1cm5cIikge1xuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZS15aWVsZCB0aGUgcmVzdWx0IHJldHVybmVkIGJ5IHRoZSBkZWxlZ2F0ZSBtZXRob2QuXG4gICAgICByZXR1cm4gaW5mbztcbiAgICB9XG5cbiAgICAvLyBUaGUgZGVsZWdhdGUgaXRlcmF0b3IgaXMgZmluaXNoZWQsIHNvIGZvcmdldCBpdCBhbmQgY29udGludWUgd2l0aFxuICAgIC8vIHRoZSBvdXRlciBnZW5lcmF0b3IuXG4gICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JcIjtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsImltcG9ydCB7IHR5cGVPZiwgaXNFbGVtZW50LCBpc1ZhbGlkRWxlbWVudFR5cGUgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZU1lbW8sIHVzZUVmZmVjdCwgdXNlUmVmLCBjcmVhdGVFbGVtZW50LCB1c2VEZWJ1Z1ZhbHVlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNoYWxsb3dlcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IFN0eWxpcyBmcm9tICdAZW1vdGlvbi9zdHlsaXMnO1xuaW1wb3J0IHVuaXRsZXNzIGZyb20gJ0BlbW90aW9uL3VuaXRsZXNzJztcbmltcG9ydCB2YWxpZEF0dHIgZnJvbSAnQGVtb3Rpb24vaXMtcHJvcC12YWxpZCc7XG5pbXBvcnQgaG9pc3QgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gXG52YXIgaW50ZXJsZWF2ZSA9IChmdW5jdGlvbiAoc3RyaW5ncywgaW50ZXJwb2xhdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtzdHJpbmdzWzBdXTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gaW50ZXJwb2xhdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICByZXN1bHQucHVzaChpbnRlcnBvbGF0aW9uc1tpXSwgc3RyaW5nc1tpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG4vLyBcbnZhciBpc1BsYWluT2JqZWN0ID0gKGZ1bmN0aW9uICh4KSB7XG4gIHJldHVybiB4ICE9PSBudWxsICYmIHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiAoeC50b1N0cmluZyA/IHgudG9TdHJpbmcoKSA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSkgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmICF0eXBlT2YoeCk7XG59KTtcblxuLy8gXG52YXIgRU1QVFlfQVJSQVkgPSBPYmplY3QuZnJlZXplKFtdKTtcbnZhciBFTVBUWV9PQkpFQ1QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodGFyZ2V0KSB7XG4gIHJldHVybiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIHRhcmdldCA6IGZhbHNlKSB8fCAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5kaXNwbGF5TmFtZSB8fCAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGlzU3RhdGVsZXNzRnVuY3Rpb24odGVzdCkge1xuICByZXR1cm4gdHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgISh0ZXN0LnByb3RvdHlwZSAmJiB0ZXN0LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1N0eWxlZENvbXBvbmVudCh0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldCAmJiB0eXBlb2YgdGFyZ2V0LnN0eWxlZENvbXBvbmVudElkID09PSAnc3RyaW5nJztcbn1cblxuLy8gXG52YXIgU0NfQVRUUiA9IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFIgfHwgcHJvY2Vzcy5lbnYuU0NfQVRUUikgfHwgJ2RhdGEtc3R5bGVkJztcbnZhciBTQ19BVFRSX0FDVElWRSA9ICdhY3RpdmUnO1xudmFyIFNDX0FUVFJfVkVSU0lPTiA9ICdkYXRhLXN0eWxlZC12ZXJzaW9uJztcbnZhciBTQ19WRVJTSU9OID0gXCI1LjEuMVwiO1xudmFyIFNQTElUVEVSID0gJy8qIXNjKi9cXG4nO1xudmFyIElTX0JST1dTRVIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAnSFRNTEVsZW1lbnQnIGluIHdpbmRvdztcbnZhciBESVNBQkxFX1NQRUVEWSA9IHR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWSA9PT0gJ2Jvb2xlYW4nICYmIFNDX0RJU0FCTEVfU1BFRURZIHx8IHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0RJU0FCTEVfU1BFRURZIHx8IHByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZKSB8fCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nOyAvLyBTaGFyZWQgZW1wdHkgZXhlY3V0aW9uIGNvbnRleHQgd2hlbiBnZW5lcmF0aW5nIHN0YXRpYyBzdHlsZXNcblxudmFyIFNUQVRJQ19FWEVDVVRJT05fQ09OVEVYVCA9IHt9O1xuXG4vLyBcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlLCBuby11bmRlZiAqL1xudmFyIGdldE5vbmNlID0gZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG4gIHJldHVybiB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xufTtcblxudmFyIGVycm9yTWFwID0ge1xuICBcIjFcIjogXCJDYW5ub3QgY3JlYXRlIHN0eWxlZC1jb21wb25lbnQgZm9yIGNvbXBvbmVudDogJXMuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIkNhbid0IGNvbGxlY3Qgc3R5bGVzIG9uY2UgeW91J3ZlIGNvbnN1bWVkIGEgYFNlcnZlclN0eWxlU2hlZXRgJ3Mgc3R5bGVzISBgU2VydmVyU3R5bGVTaGVldGAgaXMgYSBvbmUgb2ZmIGluc3RhbmNlIGZvciBlYWNoIHNlcnZlci1zaWRlIHJlbmRlciBjeWNsZS5cXG5cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJldXNlIGl0IGFjcm9zcyByZW5kZXJzP1xcbi0gQXJlIHlvdSBhY2NpZGVudGFsbHkgY2FsbGluZyBjb2xsZWN0U3R5bGVzIHR3aWNlP1xcblxcblwiLFxuICBcIjNcIjogXCJTdHJlYW1pbmcgU1NSIGlzIG9ubHkgc3VwcG9ydGVkIGluIGEgTm9kZS5qcyBlbnZpcm9ubWVudDsgUGxlYXNlIGRvIG5vdCB0cnkgdG8gY2FsbCB0aGlzIG1ldGhvZCBpbiB0aGUgYnJvd3Nlci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiVGhlIGBTdHlsZVNoZWV0TWFuYWdlcmAgZXhwZWN0cyBhIHZhbGlkIHRhcmdldCBvciBzaGVldCBwcm9wIVxcblxcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBjbGllbnQgYW5kIGlzIHlvdXIgdGFyZ2V0IGZhbHN5P1xcbi0gRG9lcyB0aGlzIGVycm9yIG9jY3VyIG9uIHRoZSBzZXJ2ZXIgYW5kIGlzIHRoZSBzaGVldCBmYWxzeT9cXG5cXG5cIixcbiAgXCI1XCI6IFwiVGhlIGNsb25lIG1ldGhvZCBjYW5ub3QgYmUgdXNlZCBvbiB0aGUgY2xpZW50IVxcblxcbi0gQXJlIHlvdSBydW5uaW5nIGluIGEgY2xpZW50LWxpa2UgZW52aXJvbm1lbnQgb24gdGhlIHNlcnZlcj9cXG4tIEFyZSB5b3UgdHJ5aW5nIHRvIHJ1biBTU1Igb24gdGhlIGNsaWVudD9cXG5cXG5cIixcbiAgXCI2XCI6IFwiVHJ5aW5nIHRvIGluc2VydCBhIG5ldyBzdHlsZSB0YWcsIGJ1dCB0aGUgZ2l2ZW4gTm9kZSBpcyB1bm1vdW50ZWQhXFxuXFxuLSBBcmUgeW91IHVzaW5nIGEgY3VzdG9tIHRhcmdldCB0aGF0IGlzbid0IG1vdW50ZWQ/XFxuLSBEb2VzIHlvdXIgZG9jdW1lbnQgbm90IGhhdmUgYSB2YWxpZCBoZWFkIGVsZW1lbnQ/XFxuLSBIYXZlIHlvdSBhY2NpZGVudGFsbHkgcmVtb3ZlZCBhIHN0eWxlIHRhZyBtYW51YWxseT9cXG5cXG5cIixcbiAgXCI3XCI6IFwiVGhlbWVQcm92aWRlcjogUGxlYXNlIHJldHVybiBhbiBvYmplY3QgZnJvbSB5b3VyIFxcXCJ0aGVtZVxcXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHlvdXIgXFxcInRoZW1lXFxcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiTWlzc2luZyBkb2N1bWVudCBgPGhlYWQ+YFxcblxcblwiLFxuICBcIjEwXCI6IFwiQ2Fubm90IGZpbmQgYSBTdHlsZVNoZWV0IGluc3RhbmNlLiBVc3VhbGx5IHRoaXMgaGFwcGVucyBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgY29waWVzIG9mIHN0eWxlZC1jb21wb25lbnRzIGxvYWRlZCBhdCBvbmNlLiBDaGVjayBvdXQgdGhpcyBpc3N1ZSBmb3IgaG93IHRvIHRyb3VibGVzaG9vdCBhbmQgZml4IHRoZSBjb21tb24gY2FzZXMgd2hlcmUgdGhpcyBzaXR1YXRpb24gY2FuIGhhcHBlbjogaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2lzc3Vlcy8xOTQxI2lzc3VlY29tbWVudC00MTc4NjIwMjFcXG5cXG5cIixcbiAgXCIxMVwiOiBcIl9UaGlzIGVycm9yIHdhcyByZXBsYWNlZCB3aXRoIGEgZGV2LXRpbWUgd2FybmluZywgaXQgd2lsbCBiZSBkZWxldGVkIGZvciB2NCBmaW5hbC5fIFtjcmVhdGVHbG9iYWxTdHlsZV0gcmVjZWl2ZWQgY2hpbGRyZW4gd2hpY2ggd2lsbCBub3QgYmUgcmVuZGVyZWQuIFBsZWFzZSB1c2UgdGhlIGNvbXBvbmVudCB3aXRob3V0IHBhc3NpbmcgY2hpbGRyZW4gZWxlbWVudHMuXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJJdCBzZWVtcyB5b3UgYXJlIGludGVycG9sYXRpbmcgYSBrZXlmcmFtZSBkZWNsYXJhdGlvbiAoJXMpIGludG8gYW4gdW50YWdnZWQgc3RyaW5nLiBUaGlzIHdhcyBzdXBwb3J0ZWQgaW4gc3R5bGVkLWNvbXBvbmVudHMgdjMsIGJ1dCBpcyBub3QgbG9uZ2VyIHN1cHBvcnRlZCBpbiB2NCBhcyBrZXlmcmFtZXMgYXJlIG5vdyBpbmplY3RlZCBvbi1kZW1hbmQuIFBsZWFzZSB3cmFwIHlvdXIgc3RyaW5nIGluIHRoZSBjc3NcXFxcYFxcXFxgIGhlbHBlciB3aGljaCBlbnN1cmVzIHRoZSBzdHlsZXMgYXJlIGluamVjdGVkIGNvcnJlY3RseS4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FwaSNjc3NcXG5cXG5cIixcbiAgXCIxM1wiOiBcIiVzIGlzIG5vdCBhIHN0eWxlZCBjb21wb25lbnQgYW5kIGNhbm5vdCBiZSByZWZlcnJlZCB0byB2aWEgY29tcG9uZW50IHNlbGVjdG9yLiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYWR2YW5jZWQjcmVmZXJyaW5nLXRvLW90aGVyLWNvbXBvbmVudHMgZm9yIG1vcmUgZGV0YWlscy5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlRoZW1lUHJvdmlkZXI6IFxcXCJ0aGVtZVxcXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIkEgc3R5bGlzIHBsdWdpbiBoYXMgYmVlbiBzdXBwbGllZCB0aGF0IGlzIG5vdCBuYW1lZC4gV2UgbmVlZCBhIG5hbWUgZm9yIGVhY2ggcGx1Z2luIHRvIGJlIGFibGUgdG8gcHJldmVudCBzdHlsaW5nIGNvbGxpc2lvbnMgYmV0d2VlbiBkaWZmZXJlbnQgc3R5bGlzIGNvbmZpZ3VyYXRpb25zIHdpdGhpbiB0aGUgc2FtZSBhcHAuIEJlZm9yZSB5b3UgcGFzcyB5b3VyIHBsdWdpbiB0byBgPFN0eWxlU2hlZXRNYW5hZ2VyIHN0eWxpc1BsdWdpbnM9e1tdfT5gLCBwbGVhc2UgbWFrZSBzdXJlIGVhY2ggcGx1Z2luIGlzIHVuaXF1ZWx5LW5hbWVkLCBlLmcuXFxuXFxuYGBganNcXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoaW1wb3J0ZWRQbHVnaW4sICduYW1lJywgeyB2YWx1ZTogJ3NvbWUtdW5pcXVlLW5hbWUnIH0pO1xcbmBgYFxcblxcblwiLFxuICBcIjE2XCI6IFwiUmVhY2hlZCB0aGUgbGltaXQgb2YgaG93IG1hbnkgc3R5bGVkIGNvbXBvbmVudHMgbWF5IGJlIGNyZWF0ZWQgYXQgZ3JvdXAgJXMuXFxuWW91IG1heSBvbmx5IGNyZWF0ZSB1cCB0byAxLDA3Myw3NDEsODI0IGNvbXBvbmVudHMuIElmIHlvdSdyZSBjcmVhdGluZyBjb21wb25lbnRzIGR5bmFtaWNhbGx5LFxcbmFzIGZvciBpbnN0YW5jZSBpbiB5b3VyIHJlbmRlciBtZXRob2QgdGhlbiB5b3UgbWF5IGJlIHJ1bm5pbmcgaW50byB0aGlzIGxpbWl0YXRpb24uXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJDU1NTdHlsZVNoZWV0IGNvdWxkIG5vdCBiZSBmb3VuZCBvbiBIVE1MU3R5bGVFbGVtZW50LlxcbkhhcyBzdHlsZWQtY29tcG9uZW50cycgc3R5bGUgdGFnIGJlZW4gdW5tb3VudGVkIG9yIGFsdGVyZWQgYnkgYW5vdGhlciBzY3JpcHQ/XFxuXCJcbn07XG5cbi8vIFxudmFyIEVSUk9SUyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBlcnJvck1hcCA6IHt9O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIHZhciBhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYiA9IFtdO1xuXG4gIGZvciAodmFyIGMgPSAxLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoOyBjIDwgbGVuOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYyA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBjID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKGNvZGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3N0eWxlZC1jb21wb25lbnRzL3NyYy91dGlscy9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIgKyAoaW50ZXJwb2xhdGlvbnMubGVuZ3RoID4gMCA/IFwiIEFkZGl0aW9uYWwgYXJndW1lbnRzOiBcIiArIGludGVycG9sYXRpb25zLmpvaW4oJywgJykgOiAnJykpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKS50cmltKCkpO1xuICB9XG59XG5cbi8vIFxudmFyIEVMRU1FTlRfVFlQRSA9IDE7XG4vKiBOb2RlLkVMRU1FTlRfVFlQRSAqL1xuXG4vKiogRmluZCBsYXN0IHN0eWxlIGVsZW1lbnQgaWYgYW55IGluc2lkZSB0YXJnZXQgKi9cblxudmFyIGZpbmRMYXN0U3R5bGVUYWcgPSBmdW5jdGlvbiBmaW5kTGFzdFN0eWxlVGFnKHRhcmdldCkge1xuICB2YXIgY2hpbGROb2RlcyA9IHRhcmdldC5jaGlsZE5vZGVzO1xuXG4gIGZvciAodmFyIGkgPSBjaGlsZE5vZGVzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgY2hpbGQgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgaWYgKGNoaWxkICYmIGNoaWxkLm5vZGVUeXBlID09PSBFTEVNRU5UX1RZUEUgJiYgY2hpbGQuaGFzQXR0cmlidXRlKFNDX0FUVFIpKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG4vKiogQ3JlYXRlIGEgc3R5bGUgZWxlbWVudCBpbnNpZGUgYHRhcmdldGAgb3IgPGhlYWQ+IGFmdGVyIHRoZSBsYXN0ICovXG5cblxudmFyIG1ha2VTdHlsZVRhZyA9IGZ1bmN0aW9uIG1ha2VTdHlsZVRhZyh0YXJnZXQpIHtcbiAgdmFyIGhlYWQgPSBkb2N1bWVudC5oZWFkO1xuICB2YXIgcGFyZW50ID0gdGFyZ2V0IHx8IGhlYWQ7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBwcmV2U3R5bGUgPSBmaW5kTGFzdFN0eWxlVGFnKHBhcmVudCk7XG4gIHZhciBuZXh0U2libGluZyA9IHByZXZTdHlsZSAhPT0gdW5kZWZpbmVkID8gcHJldlN0eWxlLm5leHRTaWJsaW5nIDogbnVsbDtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFNDX0FUVFIsIFNDX0FUVFJfQUNUSVZFKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFNDX0FUVFJfVkVSU0lPTiwgU0NfVkVSU0lPTik7XG4gIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gIGlmIChub25jZSkgc3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgcGFyZW50Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuICByZXR1cm4gc3R5bGU7XG59O1xuLyoqIEdldCB0aGUgQ1NTU3R5bGVTaGVldCBpbnN0YW5jZSBmb3IgYSBnaXZlbiBzdHlsZSBlbGVtZW50ICovXG5cbnZhciBnZXRTaGVldCA9IGZ1bmN0aW9uIGdldFNoZWV0KHRhZykge1xuICBpZiAodGFnLnNoZWV0KSB7XG4gICAgcmV0dXJuIHRhZy5zaGVldDtcbiAgfSAvLyBBdm9pZCBGaXJlZm94IHF1aXJrIHdoZXJlIHRoZSBzdHlsZSBlbGVtZW50IG1pZ2h0IG5vdCBoYXZlIGEgc2hlZXQgcHJvcGVydHlcblxuXG4gIHZhciBfZG9jdW1lbnQgPSBkb2N1bWVudCxcbiAgICAgIHN0eWxlU2hlZXRzID0gX2RvY3VtZW50LnN0eWxlU2hlZXRzO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gc3R5bGVTaGVldHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHNoZWV0ID0gc3R5bGVTaGVldHNbaV07XG5cbiAgICBpZiAoc2hlZXQub3duZXJOb2RlID09PSB0YWcpIHtcbiAgICAgIHJldHVybiBzaGVldDtcbiAgICB9XG4gIH1cblxuICB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNyk7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG4vLyBcbi8qKiBDcmVhdGUgYSBDU1NTdHlsZVNoZWV0LWxpa2UgdGFnIGRlcGVuZGluZyBvbiB0aGUgZW52aXJvbm1lbnQgKi9cblxudmFyIG1ha2VUYWcgPSBmdW5jdGlvbiBtYWtlVGFnKF9yZWYpIHtcbiAgdmFyIGlzU2VydmVyID0gX3JlZi5pc1NlcnZlcixcbiAgICAgIHVzZUNTU09NSW5qZWN0aW9uID0gX3JlZi51c2VDU1NPTUluamVjdGlvbixcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0O1xuXG4gIGlmIChpc1NlcnZlcikge1xuICAgIHJldHVybiBuZXcgVmlydHVhbFRhZyh0YXJnZXQpO1xuICB9IGVsc2UgaWYgKHVzZUNTU09NSW5qZWN0aW9uKSB7XG4gICAgcmV0dXJuIG5ldyBDU1NPTVRhZyh0YXJnZXQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgVGV4dFRhZyh0YXJnZXQpO1xuICB9XG59O1xudmFyIENTU09NVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ1NTT01UYWcodGFyZ2V0KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQgPSBtYWtlU3R5bGVUYWcodGFyZ2V0KTsgLy8gQXZvaWQgRWRnZSBidWcgd2hlcmUgZW1wdHkgc3R5bGUgZWxlbWVudHMgZG9uJ3QgY3JlYXRlIHNoZWV0c1xuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuICAgIHRoaXMuc2hlZXQgPSBnZXRTaGVldChlbGVtZW50KTtcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ1NTT01UYWcucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShpbmRleCwgcnVsZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgaW5kZXgpO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICB0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpO1xuICAgIHRoaXMubGVuZ3RoLS07XG4gIH07XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnNoZWV0LmNzc1J1bGVzW2luZGV4XTsgLy8gQXZvaWQgSUUxMSBxdWlyayB3aGVyZSBjc3NUZXh0IGlzIGluYWNjZXNzaWJsZSBvbiBzb21lIGludmFsaWQgcnVsZXNcblxuICAgIGlmIChydWxlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHJ1bGUuY3NzVGV4dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBydWxlLmNzc1RleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENTU09NVGFnO1xufSgpO1xuLyoqIEEgVGFnIHRoYXQgZW11bGF0ZXMgdGhlIENTU1N0eWxlU2hlZXQgQVBJIGJ1dCB1c2VzIHRleHQgbm9kZXMgKi9cblxudmFyIFRleHRUYWcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUZXh0VGFnKHRhcmdldCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50ID0gbWFrZVN0eWxlVGFnKHRhcmdldCk7XG4gICAgdGhpcy5ub2RlcyA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgICB0aGlzLmxlbmd0aCA9IDA7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRleHRUYWcucHJvdG90eXBlO1xuXG4gIF9wcm90bzIuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoaW5kZXgsIHJ1bGUpIHtcbiAgICBpZiAoaW5kZXggPD0gdGhpcy5sZW5ndGggJiYgaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShydWxlKTtcbiAgICAgIHZhciByZWZOb2RlID0gdGhpcy5ub2Rlc1tpbmRleF07XG4gICAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUgfHwgbnVsbCk7XG4gICAgICB0aGlzLmxlbmd0aCsrO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMi5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShpbmRleCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2luZGV4XSk7XG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgfTtcblxuICBfcHJvdG8yLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm5vZGVzW2luZGV4XS50ZXh0Q29udGVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVGV4dFRhZztcbn0oKTtcbi8qKiBBIGNvbXBsZXRlbHkgdmlydHVhbCAoc2VydmVyLXNpZGUpIFRhZyB0aGF0IGRvZXNuJ3QgbWFuaXB1bGF0ZSB0aGUgRE9NICovXG5cbnZhciBWaXJ0dWFsVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlydHVhbFRhZyhfdGFyZ2V0KSB7XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIHZhciBfcHJvdG8zID0gVmlydHVhbFRhZy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShpbmRleCwgcnVsZSkge1xuICAgIGlmIChpbmRleCA8PSB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5ydWxlcy5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpO1xuICAgICAgdGhpcy5sZW5ndGgrKztcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuZGVsZXRlUnVsZSA9IGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoaW5kZXgpIHtcbiAgICB0aGlzLnJ1bGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5sZW5ndGgtLTtcbiAgfTtcblxuICBfcHJvdG8zLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bGVzW2luZGV4XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVmlydHVhbFRhZztcbn0oKTtcblxuLy8gXG4vKiogQ3JlYXRlIGEgR3JvdXBlZFRhZyB3aXRoIGFuIHVuZGVybHlpbmcgVGFnIGltcGxlbWVudGF0aW9uICovXG5cbnZhciBtYWtlR3JvdXBlZFRhZyA9IGZ1bmN0aW9uIG1ha2VHcm91cGVkVGFnKHRhZykge1xuICByZXR1cm4gbmV3IERlZmF1bHRHcm91cGVkVGFnKHRhZyk7XG59O1xudmFyIEJBU0VfU0laRSA9IDEgPDwgOTtcblxudmFyIERlZmF1bHRHcm91cGVkVGFnID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRGVmYXVsdEdyb3VwZWRUYWcodGFnKSB7XG4gICAgdGhpcy5ncm91cFNpemVzID0gbmV3IFVpbnQzMkFycmF5KEJBU0VfU0laRSk7XG4gICAgdGhpcy5sZW5ndGggPSBCQVNFX1NJWkU7XG4gICAgdGhpcy50YWcgPSB0YWc7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gRGVmYXVsdEdyb3VwZWRUYWcucHJvdG90eXBlO1xuXG4gIF9wcm90by5pbmRleE9mR3JvdXAgPSBmdW5jdGlvbiBpbmRleE9mR3JvdXAoZ3JvdXApIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cDsgaSsrKSB7XG4gICAgICBpbmRleCArPSB0aGlzLmdyb3VwU2l6ZXNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9O1xuXG4gIF9wcm90by5pbnNlcnRSdWxlcyA9IGZ1bmN0aW9uIGluc2VydFJ1bGVzKGdyb3VwLCBydWxlcykge1xuICAgIGlmIChncm91cCA+PSB0aGlzLmdyb3VwU2l6ZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgb2xkQnVmZmVyID0gdGhpcy5ncm91cFNpemVzO1xuICAgICAgdmFyIG9sZFNpemUgPSBvbGRCdWZmZXIubGVuZ3RoO1xuICAgICAgdmFyIG5ld1NpemUgPSBvbGRTaXplO1xuXG4gICAgICB3aGlsZSAoZ3JvdXAgPj0gbmV3U2l6ZSkge1xuICAgICAgICBuZXdTaXplIDw8PSAxO1xuXG4gICAgICAgIGlmIChuZXdTaXplIDwgMCkge1xuICAgICAgICAgIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDE2LCBcIlwiICsgZ3JvdXApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZ3JvdXBTaXplcyA9IG5ldyBVaW50MzJBcnJheShuZXdTaXplKTtcbiAgICAgIHRoaXMuZ3JvdXBTaXplcy5zZXQob2xkQnVmZmVyKTtcbiAgICAgIHRoaXMubGVuZ3RoID0gbmV3U2l6ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IG9sZFNpemU7IGkgPCBuZXdTaXplOyBpKyspIHtcbiAgICAgICAgdGhpcy5ncm91cFNpemVzW2ldID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcnVsZUluZGV4ID0gdGhpcy5pbmRleE9mR3JvdXAoZ3JvdXAgKyAxKTtcblxuICAgIGZvciAodmFyIF9pID0gMCwgbCA9IHJ1bGVzLmxlbmd0aDsgX2kgPCBsOyBfaSsrKSB7XG4gICAgICBpZiAodGhpcy50YWcuaW5zZXJ0UnVsZShydWxlSW5kZXgsIHJ1bGVzW19pXSkpIHtcbiAgICAgICAgdGhpcy5ncm91cFNpemVzW2dyb3VwXSsrO1xuICAgICAgICBydWxlSW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyR3JvdXAgPSBmdW5jdGlvbiBjbGVhckdyb3VwKGdyb3VwKSB7XG4gICAgaWYgKGdyb3VwIDwgdGhpcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdO1xuICAgICAgdmFyIHN0YXJ0SW5kZXggPSB0aGlzLmluZGV4T2ZHcm91cChncm91cCk7XG4gICAgICB2YXIgZW5kSW5kZXggPSBzdGFydEluZGV4ICsgbGVuZ3RoO1xuICAgICAgdGhpcy5ncm91cFNpemVzW2dyb3VwXSA9IDA7XG5cbiAgICAgIGZvciAodmFyIGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICB0aGlzLnRhZy5kZWxldGVSdWxlKHN0YXJ0SW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZ2V0R3JvdXAgPSBmdW5jdGlvbiBnZXRHcm91cChncm91cCkge1xuICAgIHZhciBjc3MgPSAnJztcblxuICAgIGlmIChncm91cCA+PSB0aGlzLmxlbmd0aCB8fCB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdID09PSAwKSB7XG4gICAgICByZXR1cm4gY3NzO1xuICAgIH1cblxuICAgIHZhciBsZW5ndGggPSB0aGlzLmdyb3VwU2l6ZXNbZ3JvdXBdO1xuICAgIHZhciBzdGFydEluZGV4ID0gdGhpcy5pbmRleE9mR3JvdXAoZ3JvdXApO1xuICAgIHZhciBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBsZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gc3RhcnRJbmRleDsgaSA8IGVuZEluZGV4OyBpKyspIHtcbiAgICAgIGNzcyArPSBcIlwiICsgdGhpcy50YWcuZ2V0UnVsZShpKSArIFNQTElUVEVSO1xuICAgIH1cblxuICAgIHJldHVybiBjc3M7XG4gIH07XG5cbiAgcmV0dXJuIERlZmF1bHRHcm91cGVkVGFnO1xufSgpO1xuXG4vLyBcbnZhciBNQVhfU01JID0gMSA8PCAzMSAtIDE7XG52YXIgZ3JvdXBJRFJlZ2lzdGVyID0gbmV3IE1hcCgpO1xudmFyIHJldmVyc2VSZWdpc3RlciA9IG5ldyBNYXAoKTtcbnZhciBuZXh0RnJlZUdyb3VwID0gMTtcbnZhciBnZXRHcm91cEZvcklkID0gZnVuY3Rpb24gZ2V0R3JvdXBGb3JJZChpZCkge1xuICBpZiAoZ3JvdXBJRFJlZ2lzdGVyLmhhcyhpZCkpIHtcbiAgICByZXR1cm4gZ3JvdXBJRFJlZ2lzdGVyLmdldChpZCk7XG4gIH1cblxuICB2YXIgZ3JvdXAgPSBuZXh0RnJlZUdyb3VwKys7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgKChncm91cCB8IDApIDwgMCB8fCBncm91cCA+IE1BWF9TTUkpKSB7XG4gICAgdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMTYsIFwiXCIgKyBncm91cCk7XG4gIH1cblxuICBncm91cElEUmVnaXN0ZXIuc2V0KGlkLCBncm91cCk7XG4gIHJldmVyc2VSZWdpc3Rlci5zZXQoZ3JvdXAsIGlkKTtcbiAgcmV0dXJuIGdyb3VwO1xufTtcbnZhciBnZXRJZEZvckdyb3VwID0gZnVuY3Rpb24gZ2V0SWRGb3JHcm91cChncm91cCkge1xuICByZXR1cm4gcmV2ZXJzZVJlZ2lzdGVyLmdldChncm91cCk7XG59O1xudmFyIHNldEdyb3VwRm9ySWQgPSBmdW5jdGlvbiBzZXRHcm91cEZvcklkKGlkLCBncm91cCkge1xuICBpZiAoZ3JvdXAgPj0gbmV4dEZyZWVHcm91cCkge1xuICAgIG5leHRGcmVlR3JvdXAgPSBncm91cCArIDE7XG4gIH1cblxuICBncm91cElEUmVnaXN0ZXIuc2V0KGlkLCBncm91cCk7XG4gIHJldmVyc2VSZWdpc3Rlci5zZXQoZ3JvdXAsIGlkKTtcbn07XG5cbi8vIFxudmFyIFNFTEVDVE9SID0gXCJzdHlsZVtcIiArIFNDX0FUVFIgKyBcIl1bXCIgKyBTQ19BVFRSX1ZFUlNJT04gKyBcIj1cXFwiXCIgKyBTQ19WRVJTSU9OICsgXCJcXFwiXVwiO1xudmFyIE1BUktFUl9SRSA9IG5ldyBSZWdFeHAoXCJeXCIgKyBTQ19BVFRSICsgXCJcXFxcLmcoXFxcXGQrKVxcXFxbaWQ9XFxcIihbXFxcXHdcXFxcZC1dKylcXFwiXFxcXF0uKj9cXFwiKFteXFxcIl0qKVwiKTtcbnZhciBvdXRwdXRTaGVldCA9IGZ1bmN0aW9uIG91dHB1dFNoZWV0KHNoZWV0KSB7XG4gIHZhciB0YWcgPSBzaGVldC5nZXRUYWcoKTtcbiAgdmFyIGxlbmd0aCA9IHRhZy5sZW5ndGg7XG4gIHZhciBjc3MgPSAnJztcblxuICBmb3IgKHZhciBncm91cCA9IDA7IGdyb3VwIDwgbGVuZ3RoOyBncm91cCsrKSB7XG4gICAgdmFyIGlkID0gZ2V0SWRGb3JHcm91cChncm91cCk7XG4gICAgaWYgKGlkID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgIHZhciBuYW1lcyA9IHNoZWV0Lm5hbWVzLmdldChpZCk7XG4gICAgdmFyIHJ1bGVzID0gdGFnLmdldEdyb3VwKGdyb3VwKTtcbiAgICBpZiAobmFtZXMgPT09IHVuZGVmaW5lZCB8fCBydWxlcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgIHZhciBzZWxlY3RvciA9IFNDX0FUVFIgKyBcIi5nXCIgKyBncm91cCArIFwiW2lkPVxcXCJcIiArIGlkICsgXCJcXFwiXVwiO1xuICAgIHZhciBjb250ZW50ID0gJyc7XG5cbiAgICBpZiAobmFtZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBpZiAobmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29udGVudCArPSBuYW1lICsgXCIsXCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gTk9URTogSXQncyBlYXNpZXIgdG8gY29sbGVjdCBydWxlcyBhbmQgaGF2ZSB0aGUgbWFya2VyXG4gICAgLy8gYWZ0ZXIgdGhlIGFjdHVhbCBydWxlcyB0byBzaW1wbGlmeSB0aGUgcmVoeWRyYXRpb25cblxuXG4gICAgY3NzICs9IFwiXCIgKyBydWxlcyArIHNlbGVjdG9yICsgXCJ7Y29udGVudDpcXFwiXCIgKyBjb250ZW50ICsgXCJcXFwifVwiICsgU1BMSVRURVI7XG4gIH1cblxuICByZXR1cm4gY3NzO1xufTtcblxudmFyIHJlaHlkcmF0ZU5hbWVzRnJvbUNvbnRlbnQgPSBmdW5jdGlvbiByZWh5ZHJhdGVOYW1lc0Zyb21Db250ZW50KHNoZWV0LCBpZCwgY29udGVudCkge1xuICB2YXIgbmFtZXMgPSBjb250ZW50LnNwbGl0KCcsJyk7XG4gIHZhciBuYW1lO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gbmFtZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgaWYgKG5hbWUgPSBuYW1lc1tpXSkge1xuICAgICAgc2hlZXQucmVnaXN0ZXJOYW1lKGlkLCBuYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciByZWh5ZHJhdGVTaGVldEZyb21UYWcgPSBmdW5jdGlvbiByZWh5ZHJhdGVTaGVldEZyb21UYWcoc2hlZXQsIHN0eWxlKSB7XG4gIHZhciBwYXJ0cyA9IHN0eWxlLmlubmVySFRNTC5zcGxpdChTUExJVFRFUik7XG4gIHZhciBydWxlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIHBhcnQgPSBwYXJ0c1tpXS50cmltKCk7XG4gICAgaWYgKCFwYXJ0KSBjb250aW51ZTtcbiAgICB2YXIgbWFya2VyID0gcGFydC5tYXRjaChNQVJLRVJfUkUpO1xuXG4gICAgaWYgKG1hcmtlcikge1xuICAgICAgdmFyIGdyb3VwID0gcGFyc2VJbnQobWFya2VyWzFdLCAxMCkgfCAwO1xuICAgICAgdmFyIGlkID0gbWFya2VyWzJdO1xuXG4gICAgICBpZiAoZ3JvdXAgIT09IDApIHtcbiAgICAgICAgLy8gUmVoeWRyYXRlIGNvbXBvbmVudElkIHRvIGdyb3VwIGluZGV4IG1hcHBpbmdcbiAgICAgICAgc2V0R3JvdXBGb3JJZChpZCwgZ3JvdXApOyAvLyBSZWh5ZHJhdGUgbmFtZXMgYW5kIHJ1bGVzXG4gICAgICAgIC8vIGxvb2tzIGxpa2U6IGRhdGEtc3R5bGVkLmcxMVtpZD1cImlkQVwiXXtjb250ZW50OlwibmFtZUEsXCJ9XG5cbiAgICAgICAgcmVoeWRyYXRlTmFtZXNGcm9tQ29udGVudChzaGVldCwgaWQsIG1hcmtlclszXSk7XG4gICAgICAgIHNoZWV0LmdldFRhZygpLmluc2VydFJ1bGVzKGdyb3VwLCBydWxlcyk7XG4gICAgICB9XG5cbiAgICAgIHJ1bGVzLmxlbmd0aCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVzLnB1c2gocGFydCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcmVoeWRyYXRlU2hlZXQgPSBmdW5jdGlvbiByZWh5ZHJhdGVTaGVldChzaGVldCkge1xuICB2YXIgbm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNFTEVDVE9SKTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICBpZiAobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZShTQ19BVFRSKSAhPT0gU0NfQVRUUl9BQ1RJVkUpIHtcbiAgICAgIHJlaHlkcmF0ZVNoZWV0RnJvbVRhZyhzaGVldCwgbm9kZSk7XG5cbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxudmFyIFNIT1VMRF9SRUhZRFJBVEUgPSBJU19CUk9XU0VSO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICBpc1NlcnZlcjogIUlTX0JST1dTRVIsXG4gIHVzZUNTU09NSW5qZWN0aW9uOiAhRElTQUJMRV9TUEVFRFlcbn07XG4vKiogQ29udGFpbnMgdGhlIG1haW4gc3R5bGVzaGVldCBsb2dpYyBmb3Igc3RyaW5naWZpY2F0aW9uIGFuZCBjYWNoaW5nICovXG5cbnZhciBTdHlsZVNoZWV0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqIFJlZ2lzdGVyIGEgZ3JvdXAgSUQgdG8gZ2l2ZSBpdCBhbiBpbmRleCAqL1xuICBTdHlsZVNoZWV0LnJlZ2lzdGVySWQgPSBmdW5jdGlvbiByZWdpc3RlcklkKGlkKSB7XG4gICAgcmV0dXJuIGdldEdyb3VwRm9ySWQoaWQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIFN0eWxlU2hlZXQob3B0aW9ucywgZ2xvYmFsU3R5bGVzLCBuYW1lcykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoZ2xvYmFsU3R5bGVzID09PSB2b2lkIDApIHtcbiAgICAgIGdsb2JhbFN0eWxlcyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywge30sIG9wdGlvbnMpO1xuICAgIHRoaXMuZ3MgPSBnbG9iYWxTdHlsZXM7XG4gICAgdGhpcy5uYW1lcyA9IG5ldyBNYXAobmFtZXMpOyAvLyBXZSByZWh5ZHJhdGUgb25seSBvbmNlIGFuZCB1c2UgdGhlIHNoZWV0IHRoYXQgaXMgY3JlYXRlZCBmaXJzdFxuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuaXNTZXJ2ZXIgJiYgSVNfQlJPV1NFUiAmJiBTSE9VTERfUkVIWURSQVRFKSB7XG4gICAgICBTSE9VTERfUkVIWURSQVRFID0gZmFsc2U7XG4gICAgICByZWh5ZHJhdGVTaGVldCh0aGlzKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlY29uc3RydWN0V2l0aE9wdGlvbnMgPSBmdW5jdGlvbiByZWNvbnN0cnVjdFdpdGhPcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFN0eWxlU2hlZXQoX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge30sIG9wdGlvbnMpLCB0aGlzLmdzLCB0aGlzLm5hbWVzKTtcbiAgfTtcblxuICBfcHJvdG8uYWxsb2NhdGVHU0luc3RhbmNlID0gZnVuY3Rpb24gYWxsb2NhdGVHU0luc3RhbmNlKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3NbaWRdID0gKHRoaXMuZ3NbaWRdIHx8IDApICsgMTtcbiAgfVxuICAvKiogTGF6aWx5IGluaXRpYWxpc2VzIGEgR3JvdXBlZFRhZyBmb3Igd2hlbiBpdCdzIGFjdHVhbGx5IG5lZWRlZCAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFRhZyA9IGZ1bmN0aW9uIGdldFRhZygpIHtcbiAgICByZXR1cm4gdGhpcy50YWcgfHwgKHRoaXMudGFnID0gbWFrZUdyb3VwZWRUYWcobWFrZVRhZyh0aGlzLm9wdGlvbnMpKSk7XG4gIH1cbiAgLyoqIENoZWNrIHdoZXRoZXIgYSBuYW1lIGlzIGtub3duIGZvciBjYWNoaW5nICovXG4gIDtcblxuICBfcHJvdG8uaGFzTmFtZUZvcklkID0gZnVuY3Rpb24gaGFzTmFtZUZvcklkKGlkLCBuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXMuaGFzKGlkKSAmJiB0aGlzLm5hbWVzLmdldChpZCkuaGFzKG5hbWUpO1xuICB9XG4gIC8qKiBNYXJrIGEgZ3JvdXAncyBuYW1lIGFzIGtub3duIGZvciBjYWNoaW5nICovXG4gIDtcblxuICBfcHJvdG8ucmVnaXN0ZXJOYW1lID0gZnVuY3Rpb24gcmVnaXN0ZXJOYW1lKGlkLCBuYW1lKSB7XG4gICAgZ2V0R3JvdXBGb3JJZChpZCk7XG5cbiAgICBpZiAoIXRoaXMubmFtZXMuaGFzKGlkKSkge1xuICAgICAgdmFyIGdyb3VwTmFtZXMgPSBuZXcgU2V0KCk7XG4gICAgICBncm91cE5hbWVzLmFkZChuYW1lKTtcbiAgICAgIHRoaXMubmFtZXMuc2V0KGlkLCBncm91cE5hbWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uYW1lcy5nZXQoaWQpLmFkZChuYW1lKTtcbiAgICB9XG4gIH1cbiAgLyoqIEluc2VydCBuZXcgcnVsZXMgd2hpY2ggYWxzbyBtYXJrcyB0aGUgbmFtZSBhcyBrbm93biAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMoaWQsIG5hbWUsIHJ1bGVzKSB7XG4gICAgdGhpcy5yZWdpc3Rlck5hbWUoaWQsIG5hbWUpO1xuICAgIHRoaXMuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMoZ2V0R3JvdXBGb3JJZChpZCksIHJ1bGVzKTtcbiAgfVxuICAvKiogQ2xlYXJzIGFsbCBjYWNoZWQgbmFtZXMgZm9yIGEgZ2l2ZW4gZ3JvdXAgSUQgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhck5hbWVzID0gZnVuY3Rpb24gY2xlYXJOYW1lcyhpZCkge1xuICAgIGlmICh0aGlzLm5hbWVzLmhhcyhpZCkpIHtcbiAgICAgIHRoaXMubmFtZXMuZ2V0KGlkKS5jbGVhcigpO1xuICAgIH1cbiAgfVxuICAvKiogQ2xlYXJzIGFsbCBydWxlcyBmb3IgYSBnaXZlbiBncm91cCBJRCAqL1xuICA7XG5cbiAgX3Byb3RvLmNsZWFyUnVsZXMgPSBmdW5jdGlvbiBjbGVhclJ1bGVzKGlkKSB7XG4gICAgdGhpcy5nZXRUYWcoKS5jbGVhckdyb3VwKGdldEdyb3VwRm9ySWQoaWQpKTtcbiAgICB0aGlzLmNsZWFyTmFtZXMoaWQpO1xuICB9XG4gIC8qKiBDbGVhcnMgdGhlIGVudGlyZSB0YWcgd2hpY2ggZGVsZXRlcyBhbGwgcnVsZXMgYnV0IG5vdCBpdHMgbmFtZXMgKi9cbiAgO1xuXG4gIF9wcm90by5jbGVhclRhZyA9IGZ1bmN0aW9uIGNsZWFyVGFnKCkge1xuICAgIC8vIE5PVEU6IFRoaXMgZG9lcyBub3QgY2xlYXIgdGhlIG5hbWVzLCBzaW5jZSBpdCdzIG9ubHkgdXNlZCBkdXJpbmcgU1NSXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gY29udGludW91c2x5IG91dHB1dCBvbmx5IG5ldyBydWxlc1xuICAgIHRoaXMudGFnID0gdW5kZWZpbmVkO1xuICB9XG4gIC8qKiBPdXRwdXRzIHRoZSBjdXJyZW50IHNoZWV0IGFzIGEgQ1NTIHN0cmluZyB3aXRoIG1hcmtlcnMgZm9yIFNTUiAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIG91dHB1dFNoZWV0KHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG4vLyBcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBTRUVEID0gNTM4MTsgLy8gV2hlbiB3ZSBoYXZlIHNlcGFyYXRlIHN0cmluZ3MgaXQncyB1c2VmdWwgdG8gcnVuIGEgcHJvZ3Jlc3NpdmVcbi8vIHZlcnNpb24gb2YgZGpiMiB3aGVyZSB3ZSBwcmV0ZW5kIHRoYXQgd2UncmUgc3RpbGwgbG9vcGluZyBvdmVyXG4vLyB0aGUgc2FtZSBzdHJpbmdcblxudmFyIHBoYXNoID0gZnVuY3Rpb24gcGhhc2goaCwgeCkge1xuICB2YXIgaSA9IHgubGVuZ3RoO1xuXG4gIHdoaWxlIChpKSB7XG4gICAgaCA9IGggKiAzMyBeIHguY2hhckNvZGVBdCgtLWkpO1xuICB9XG5cbiAgcmV0dXJuIGg7XG59OyAvLyBUaGlzIGlzIGEgZGpiMiBoYXNoaW5nIGZ1bmN0aW9uXG5cbnZhciBoYXNoID0gZnVuY3Rpb24gaGFzaCh4KSB7XG4gIHJldHVybiBwaGFzaChTRUVELCB4KTtcbn07XG5cbi8qKlxuICogTUlUIExpY2Vuc2VcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgU3VsdGFuIFRhcmltb1xuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbiAqIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksXG4gKiB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3JcbiAqIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuICogT1IgSU1QTElFRCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG4gKiBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SXG4gKiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5mdW5jdGlvbiBpbnNlcnRSdWxlUGx1Z2luIChpbnNlcnRSdWxlKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSAnLyp8Ki8nO1xuICB2YXIgbmVlZGxlID0gZGVsaW1pdGVyICsgXCJ9XCI7XG5cbiAgZnVuY3Rpb24gdG9TaGVldChibG9jaykge1xuICAgIGlmIChibG9jaykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5zZXJ0UnVsZShibG9jayArIFwifVwiKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHJ1bGVTaGVldChjb250ZXh0LCBjb250ZW50LCBzZWxlY3RvcnMsIHBhcmVudHMsIGxpbmUsIGNvbHVtbiwgbGVuZ3RoLCBucywgZGVwdGgsIGF0KSB7XG4gICAgc3dpdGNoIChjb250ZXh0KSB7XG4gICAgICAvLyBwcm9wZXJ0eVxuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBAaW1wb3J0XG4gICAgICAgIGlmIChkZXB0aCA9PT0gMCAmJiBjb250ZW50LmNoYXJDb2RlQXQoMCkgPT09IDY0KSByZXR1cm4gaW5zZXJ0UnVsZShjb250ZW50ICsgXCI7XCIpLCAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICAvLyBzZWxlY3RvclxuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlmIChucyA9PT0gMCkgcmV0dXJuIGNvbnRlbnQgKyBkZWxpbWl0ZXI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gYXQtcnVsZVxuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHN3aXRjaCAobnMpIHtcbiAgICAgICAgICAvLyBAZm9udC1mYWNlLCBAcGFnZVxuICAgICAgICAgIGNhc2UgMTAyOlxuICAgICAgICAgIGNhc2UgMTEyOlxuICAgICAgICAgICAgcmV0dXJuIGluc2VydFJ1bGUoc2VsZWN0b3JzWzBdICsgY29udGVudCksICcnO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBjb250ZW50ICsgKGF0ID09PSAwID8gZGVsaW1pdGVyIDogJycpO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgLTI6XG4gICAgICAgIGNvbnRlbnQuc3BsaXQobmVlZGxlKS5mb3JFYWNoKHRvU2hlZXQpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIENPTU1FTlRfUkVHRVggPSAvXlxccypcXC9cXC8uKiQvZ207XG5mdW5jdGlvbiBjcmVhdGVTdHlsaXNJbnN0YW5jZShfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyBFTVBUWV9PQkpFQ1QgOiBfdGVtcCxcbiAgICAgIF9yZWYkb3B0aW9ucyA9IF9yZWYub3B0aW9ucyxcbiAgICAgIG9wdGlvbnMgPSBfcmVmJG9wdGlvbnMgPT09IHZvaWQgMCA/IEVNUFRZX09CSkVDVCA6IF9yZWYkb3B0aW9ucyxcbiAgICAgIF9yZWYkcGx1Z2lucyA9IF9yZWYucGx1Z2lucyxcbiAgICAgIHBsdWdpbnMgPSBfcmVmJHBsdWdpbnMgPT09IHZvaWQgMCA/IEVNUFRZX0FSUkFZIDogX3JlZiRwbHVnaW5zO1xuXG4gIHZhciBzdHlsaXMgPSBuZXcgU3R5bGlzKG9wdGlvbnMpOyAvLyBXcmFwIGBpbnNlcnRSdWxlUGx1Z2luIHRvIGJ1aWxkIGEgbGlzdCBvZiBydWxlcyxcbiAgLy8gYW5kIHRoZW4gbWFrZSBvdXIgb3duIHBsdWdpbiB0byByZXR1cm4gdGhlIHJ1bGVzLiBUaGlzXG4gIC8vIG1ha2VzIGl0IGVhc2llciB0byBob29rIGludG8gdGhlIGV4aXN0aW5nIFNTUiBhcmNoaXRlY3R1cmVcblxuICB2YXIgcGFyc2luZ1J1bGVzID0gW107IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXG4gIHZhciByZXR1cm5SdWxlc1BsdWdpbiA9IGZ1bmN0aW9uIHJldHVyblJ1bGVzUGx1Z2luKGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gLTIpIHtcbiAgICAgIHZhciBwYXJzZWRSdWxlcyA9IHBhcnNpbmdSdWxlcztcbiAgICAgIHBhcnNpbmdSdWxlcyA9IFtdO1xuICAgICAgcmV0dXJuIHBhcnNlZFJ1bGVzO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcGFyc2VSdWxlc1BsdWdpbiA9IGluc2VydFJ1bGVQbHVnaW4oZnVuY3Rpb24gKHJ1bGUpIHtcbiAgICBwYXJzaW5nUnVsZXMucHVzaChydWxlKTtcbiAgfSk7XG5cbiAgdmFyIF9jb21wb25lbnRJZDtcblxuICB2YXIgX3NlbGVjdG9yO1xuXG4gIHZhciBfc2VsZWN0b3JSZWdleHA7XG5cbiAgdmFyIHNlbGZSZWZlcmVuY2VSZXBsYWNlciA9IGZ1bmN0aW9uIHNlbGZSZWZlcmVuY2VSZXBsYWNlcihtYXRjaCwgb2Zmc2V0LCBzdHJpbmcpIHtcbiAgICBpZiAoIC8vIHRoZSBmaXJzdCBzZWxmLXJlZiBpcyBhbHdheXMgdW50b3VjaGVkXG4gICAgb2Zmc2V0ID4gMCAmJiAvLyB0aGVyZSBzaG91bGQgYmUgYXQgbGVhc3QgdHdvIHNlbGYtcmVmcyB0byBkbyBhIHJlcGxhY2VtZW50ICguYiA+IC5iKVxuICAgIHN0cmluZy5zbGljZSgwLCBvZmZzZXQpLmluZGV4T2YoX3NlbGVjdG9yKSAhPT0gLTEgJiYgLy8gbm8gY29uc2VjdXRpdmUgc2VsZiByZWZzICguYi5iKTsgdGhhdCBpcyBhIHByZWNlZGVuY2UgYm9vc3QgYW5kIHRyZWF0ZWQgZGlmZmVyZW50bHlcbiAgICBzdHJpbmcuc2xpY2Uob2Zmc2V0IC0gX3NlbGVjdG9yLmxlbmd0aCwgb2Zmc2V0KSAhPT0gX3NlbGVjdG9yKSB7XG4gICAgICByZXR1cm4gXCIuXCIgKyBfY29tcG9uZW50SWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoO1xuICB9O1xuICAvKipcbiAgICogV2hlbiB3cml0aW5nIGEgc3R5bGUgbGlrZVxuICAgKlxuICAgKiAmICsgJiB7XG4gICAqICAgY29sb3I6IHJlZDtcbiAgICogfVxuICAgKlxuICAgKiBUaGUgc2Vjb25kIGFtcGVyc2FuZCBzaG91bGQgYmUgYSByZWZlcmVuY2UgdG8gdGhlIHN0YXRpYyBjb21wb25lbnQgY2xhc3MuIHN0eWxpc1xuICAgKiBoYXMgbm8ga25vd2xlZGdlIG9mIHN0YXRpYyBjbGFzcyBzbyB3ZSBoYXZlIHRvIGludGVsbGlnZW50bHkgcmVwbGFjZSB0aGUgYmFzZSBzZWxlY3Rvci5cbiAgICpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3RoeXN1bHRhbi9zdHlsaXMuanMjcGx1Z2lucyA8LSBtb3JlIGluZm8gYWJvdXQgdGhlIGNvbnRleHQgcGhhc2UgdmFsdWVzXG4gICAqIFwiMlwiIG1lYW5zIHRoaXMgcGx1Z2luIGlzIHRha2luZyBlZmZlY3QgYXQgdGhlIHZlcnkgZW5kIGFmdGVyIGFsbCBvdGhlciBwcm9jZXNzaW5nIGlzIGNvbXBsZXRlXG4gICAqL1xuXG5cbiAgdmFyIHNlbGZSZWZlcmVuY2VSZXBsYWNlbWVudFBsdWdpbiA9IGZ1bmN0aW9uIHNlbGZSZWZlcmVuY2VSZXBsYWNlbWVudFBsdWdpbihjb250ZXh0LCBfLCBzZWxlY3RvcnMpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gMiAmJiBzZWxlY3RvcnMubGVuZ3RoICYmIHNlbGVjdG9yc1swXS5sYXN0SW5kZXhPZihfc2VsZWN0b3IpID4gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBzZWxlY3RvcnNbMF0gPSBzZWxlY3RvcnNbMF0ucmVwbGFjZShfc2VsZWN0b3JSZWdleHAsIHNlbGZSZWZlcmVuY2VSZXBsYWNlcik7XG4gICAgfVxuICB9O1xuXG4gIHN0eWxpcy51c2UoW10uY29uY2F0KHBsdWdpbnMsIFtzZWxmUmVmZXJlbmNlUmVwbGFjZW1lbnRQbHVnaW4sIHBhcnNlUnVsZXNQbHVnaW4sIHJldHVyblJ1bGVzUGx1Z2luXSkpO1xuXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeVJ1bGVzKGNzcywgc2VsZWN0b3IsIHByZWZpeCwgY29tcG9uZW50SWQpIHtcbiAgICBpZiAoY29tcG9uZW50SWQgPT09IHZvaWQgMCkge1xuICAgICAgY29tcG9uZW50SWQgPSAnJic7XG4gICAgfVxuXG4gICAgdmFyIGZsYXRDU1MgPSBjc3MucmVwbGFjZShDT01NRU5UX1JFR0VYLCAnJyk7XG4gICAgdmFyIGNzc1N0ciA9IHNlbGVjdG9yICYmIHByZWZpeCA/IHByZWZpeCArIFwiIFwiICsgc2VsZWN0b3IgKyBcIiB7IFwiICsgZmxhdENTUyArIFwiIH1cIiA6IGZsYXRDU1M7IC8vIHN0eWxpcyBoYXMgbm8gY29uY2VwdCBvZiBzdGF0ZSB0byBiZSBwYXNzZWQgdG8gcGx1Z2luc1xuICAgIC8vIGJ1dCBzaW5jZSBKUyBpcyBzaW5nbGU9dGhyZWFkZWQsIHdlIGNhbiByZWx5IG9uIHRoYXQgdG8gZW5zdXJlXG4gICAgLy8gdGhlc2UgcHJvcGVydGllcyBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY3VycmVudCBzdHlsaXMgcnVuXG5cbiAgICBfY29tcG9uZW50SWQgPSBjb21wb25lbnRJZDtcbiAgICBfc2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICBfc2VsZWN0b3JSZWdleHAgPSBuZXcgUmVnRXhwKFwiXFxcXFwiICsgX3NlbGVjdG9yICsgXCJcXFxcYlwiLCAnZycpO1xuICAgIHJldHVybiBzdHlsaXMocHJlZml4IHx8ICFzZWxlY3RvciA/ICcnIDogc2VsZWN0b3IsIGNzc1N0cik7XG4gIH1cblxuICBzdHJpbmdpZnlSdWxlcy5oYXNoID0gcGx1Z2lucy5sZW5ndGggPyBwbHVnaW5zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbHVnaW4pIHtcbiAgICBpZiAoIXBsdWdpbi5uYW1lKSB7XG4gICAgICB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBoYXNoKGFjYywgcGx1Z2luLm5hbWUpO1xuICB9LCBTRUVEKS50b1N0cmluZygpIDogJyc7XG4gIHJldHVybiBzdHJpbmdpZnlSdWxlcztcbn1cblxuLy8gXG52YXIgU3R5bGVTaGVldENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG52YXIgU3R5bGVTaGVldENvbnN1bWVyID0gU3R5bGVTaGVldENvbnRleHQuQ29uc3VtZXI7XG52YXIgU3R5bGlzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbnZhciBTdHlsaXNDb25zdW1lciA9IFN0eWxpc0NvbnRleHQuQ29uc3VtZXI7XG52YXIgbWFzdGVyU2hlZXQgPSBuZXcgU3R5bGVTaGVldCgpO1xudmFyIG1hc3RlclN0eWxpcyA9IGNyZWF0ZVN0eWxpc0luc3RhbmNlKCk7XG5mdW5jdGlvbiB1c2VTdHlsZVNoZWV0KCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTdHlsZVNoZWV0Q29udGV4dCkgfHwgbWFzdGVyU2hlZXQ7XG59XG5mdW5jdGlvbiB1c2VTdHlsaXMoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFN0eWxpc0NvbnRleHQpIHx8IG1hc3RlclN0eWxpcztcbn1cbmZ1bmN0aW9uIFN0eWxlU2hlZXRNYW5hZ2VyKHByb3BzKSB7XG4gIHZhciBfdXNlU3RhdGUgPSB1c2VTdGF0ZShwcm9wcy5zdHlsaXNQbHVnaW5zKSxcbiAgICAgIHBsdWdpbnMgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRQbHVnaW5zID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBjb250ZXh0U3R5bGVTaGVldCA9IHVzZVN0eWxlU2hlZXQoKTtcbiAgdmFyIHN0eWxlU2hlZXQgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2hlZXQgPSBjb250ZXh0U3R5bGVTaGVldDtcblxuICAgIGlmIChwcm9wcy5zaGVldCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICBzaGVldCA9IHByb3BzLnNoZWV0O1xuICAgIH0gZWxzZSBpZiAocHJvcHMudGFyZ2V0KSB7XG4gICAgICBzaGVldCA9IHNoZWV0LnJlY29uc3RydWN0V2l0aE9wdGlvbnMoe1xuICAgICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRpc2FibGVDU1NPTUluamVjdGlvbikge1xuICAgICAgc2hlZXQgPSBzaGVldC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHtcbiAgICAgICAgdXNlQ1NTT01JbmplY3Rpb246IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXQ7XG4gIH0sIFtwcm9wcy5kaXNhYmxlQ1NTT01JbmplY3Rpb24sIHByb3BzLnNoZWV0LCBwcm9wcy50YXJnZXRdKTtcbiAgdmFyIHN0eWxpcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjcmVhdGVTdHlsaXNJbnN0YW5jZSh7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHByZWZpeDogIXByb3BzLmRpc2FibGVWZW5kb3JQcmVmaXhlc1xuICAgICAgfSxcbiAgICAgIHBsdWdpbnM6IHBsdWdpbnNcbiAgICB9KTtcbiAgfSwgW3Byb3BzLmRpc2FibGVWZW5kb3JQcmVmaXhlcywgcGx1Z2luc10pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2hhbGxvd2VxdWFsKHBsdWdpbnMsIHByb3BzLnN0eWxpc1BsdWdpbnMpKSBzZXRQbHVnaW5zKHByb3BzLnN0eWxpc1BsdWdpbnMpO1xuICB9LCBbcHJvcHMuc3R5bGlzUGx1Z2luc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3R5bGVTaGVldENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogc3R5bGVTaGVldFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsaXNDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHN0eWxpc1xuICB9LCBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gUmVhY3QuQ2hpbGRyZW4ub25seShwcm9wcy5jaGlsZHJlbikgOiBwcm9wcy5jaGlsZHJlbikpO1xufVxuXG4vLyBcblxudmFyIEtleWZyYW1lcyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lcyhuYW1lLCBzdHJpbmdpZnlBcmdzKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuaW5qZWN0ID0gZnVuY3Rpb24gKHN0eWxlU2hlZXQpIHtcbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoX3RoaXMuaWQsIF90aGlzLm5hbWUpKSB7XG4gICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZXMoX3RoaXMuaWQsIF90aGlzLm5hbWUsIG1hc3RlclN0eWxpcy5hcHBseSh2b2lkIDAsIF90aGlzLnN0cmluZ2lmeUFyZ3MpKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdGhpcy50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxMiwgU3RyaW5nKF90aGlzLm5hbWUpKTtcbiAgICB9O1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmlkID0gXCJzYy1rZXlmcmFtZXMtXCIgKyBuYW1lO1xuICAgIHRoaXMuc3RyaW5naWZ5QXJncyA9IHN0cmluZ2lmeUFyZ3M7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gS2V5ZnJhbWVzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0TmFtZSA9IGZ1bmN0aW9uIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVzO1xufSgpO1xuXG4vLyBcblxuLyoqXG4gKiBpbmxpbmVkIHZlcnNpb24gb2ZcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvaHlwaGVuYXRlU3R5bGVOYW1lLmpzXG4gKi9cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS87XG4vKipcbiAqIEh5cGhlbmF0ZXMgYSBjYW1lbGNhc2VkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdiYWNrZ3JvdW5kQ29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZC1jb2xvclwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdNb3pUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tb3otdHJhbnNpdGlvblwiXG4gKiAgID4gaHlwaGVuYXRlU3R5bGVOYW1lKCdtc1RyYW5zaXRpb24nKVxuICogICA8IFwiLW1zLXRyYW5zaXRpb25cIlxuICpcbiAqIEFzIE1vZGVybml6ciBzdWdnZXN0cyAoaHR0cDovL21vZGVybml6ci5jb20vZG9jcy8jcHJlZml4ZWQpLCBhbiBgbXNgIHByZWZpeFxuICogaXMgY29udmVydGVkIHRvIGAtbXMtYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbi8vIFxuXG5mdW5jdGlvbiBhZGRVbml0SWZOZWVkZWQobmFtZSwgdmFsdWUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FtaWxhamFjay9lc2xpbnQtcGx1Z2luLWZsb3d0eXBlLWVycm9ycy9pc3N1ZXMvMTMzXG4gIC8vICRGbG93Rml4TWVcbiAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShuYW1lIGluIHVuaXRsZXNzKSkge1xuICAgIHJldHVybiB2YWx1ZSArIFwicHhcIjsgLy8gUHJlc3VtZXMgaW1wbGljaXQgJ3B4JyBzdWZmaXggZm9yIHVuaXRsZXNzIG51bWJlcnNcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbn1cblxuLy8gXG4vKipcbiAqIEl0J3MgZmFsc2lzaCBub3QgZmFsc3kgYmVjYXVzZSAwIGlzIGFsbG93ZWQuXG4gKi9cblxudmFyIGlzRmFsc2lzaCA9IGZ1bmN0aW9uIGlzRmFsc2lzaChjaHVuaykge1xuICByZXR1cm4gY2h1bmsgPT09IHVuZGVmaW5lZCB8fCBjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gZmFsc2UgfHwgY2h1bmsgPT09ICcnO1xufTtcblxudmFyIG9ialRvQ3NzQXJyYXkgPSBmdW5jdGlvbiBvYmpUb0Nzc0FycmF5KG9iaiwgcHJldktleSkge1xuICB2YXIgcnVsZXMgPSBbXTtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghaXNGYWxzaXNoKG9ialtrZXldKSkge1xuICAgICAgaWYgKGlzUGxhaW5PYmplY3Qob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2guYXBwbHkocnVsZXMsIG9ialRvQ3NzQXJyYXkob2JqW2tleV0sIGtleSkpO1xuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24ob2JqW2tleV0pKSB7XG4gICAgICAgIHJ1bGVzLnB1c2goaHlwaGVuYXRlU3R5bGVOYW1lKGtleSkgKyBcIjpcIiwgb2JqW2tleV0sICc7Jyk7XG4gICAgICAgIHJldHVybiBydWxlcztcbiAgICAgIH1cblxuICAgICAgcnVsZXMucHVzaChoeXBoZW5hdGVTdHlsZU5hbWUoa2V5KSArIFwiOiBcIiArIGFkZFVuaXRJZk5lZWRlZChrZXksIG9ialtrZXldKSArIFwiO1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH0pO1xuICByZXR1cm4gcHJldktleSA/IFtwcmV2S2V5ICsgXCIge1wiXS5jb25jYXQocnVsZXMsIFsnfSddKSA6IHJ1bGVzO1xufTtcbmZ1bmN0aW9uIGZsYXR0ZW4oY2h1bmssIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2h1bmspKSB7XG4gICAgdmFyIHJ1bGVTZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjaHVuay5sZW5ndGgsIHJlc3VsdDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICByZXN1bHQgPSBmbGF0dGVuKGNodW5rW2ldLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICAgIGlmIChyZXN1bHQgPT09ICcnKSBjb250aW51ZTtlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHJ1bGVTZXQucHVzaC5hcHBseShydWxlU2V0LCByZXN1bHQpO2Vsc2UgcnVsZVNldC5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVTZXQ7XG4gIH1cblxuICBpZiAoaXNGYWxzaXNoKGNodW5rKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICAvKiBIYW5kbGUgb3RoZXIgY29tcG9uZW50cyAqL1xuXG5cbiAgaWYgKGlzU3R5bGVkQ29tcG9uZW50KGNodW5rKSkge1xuICAgIHJldHVybiBcIi5cIiArIGNodW5rLnN0eWxlZENvbXBvbmVudElkO1xuICB9XG4gIC8qIEVpdGhlciBleGVjdXRlIG9yIGRlZmVyIHRoZSBmdW5jdGlvbiAqL1xuXG5cbiAgaWYgKGlzRnVuY3Rpb24oY2h1bmspKSB7XG4gICAgaWYgKGlzU3RhdGVsZXNzRnVuY3Rpb24oY2h1bmspICYmIGV4ZWN1dGlvbkNvbnRleHQpIHtcbiAgICAgIHZhciBfcmVzdWx0ID0gY2h1bmsoZXhlY3V0aW9uQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzRWxlbWVudChfcmVzdWx0KSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4oZ2V0Q29tcG9uZW50TmFtZShjaHVuaykgKyBcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmxhdHRlbihfcmVzdWx0LCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICB9IGVsc2UgcmV0dXJuIGNodW5rO1xuICB9XG5cbiAgaWYgKGNodW5rIGluc3RhbmNlb2YgS2V5ZnJhbWVzKSB7XG4gICAgaWYgKHN0eWxlU2hlZXQpIHtcbiAgICAgIGNodW5rLmluamVjdChzdHlsZVNoZWV0KTtcbiAgICAgIHJldHVybiBjaHVuay5nZXROYW1lKCk7XG4gICAgfSBlbHNlIHJldHVybiBjaHVuaztcbiAgfVxuICAvKiBIYW5kbGUgb2JqZWN0cyAqL1xuXG5cbiAgcmV0dXJuIGlzUGxhaW5PYmplY3QoY2h1bmspID8gb2JqVG9Dc3NBcnJheShjaHVuaykgOiBjaHVuay50b1N0cmluZygpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGNzcyhzdHlsZXMpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbihzdHlsZXMpIHx8IGlzUGxhaW5PYmplY3Qoc3R5bGVzKSkge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gZmxhdHRlbihpbnRlcmxlYXZlKEVNUFRZX0FSUkFZLCBbc3R5bGVzXS5jb25jYXQoaW50ZXJwb2xhdGlvbnMpKSk7XG4gIH1cblxuICBpZiAoaW50ZXJwb2xhdGlvbnMubGVuZ3RoID09PSAwICYmIHN0eWxlcy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHN0eWxlc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICByZXR1cm4gc3R5bGVzO1xuICB9IC8vICRGbG93Rml4TWVcblxuXG4gIHJldHVybiBmbGF0dGVuKGludGVybGVhdmUoc3R5bGVzLCBpbnRlcnBvbGF0aW9ucykpO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjb21wb25lbnRDb25zdHJ1Y3RvciwgdGFnLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0gRU1QVFlfT0JKRUNUO1xuICB9XG5cbiAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodGFnKSkge1xuICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxLCBTdHJpbmcodGFnKSk7XG4gIH1cbiAgLyogVGhpcyBpcyBjYWxsYWJsZSBkaXJlY3RseSBhcyBhIHRlbXBsYXRlIGZ1bmN0aW9uICovXG4gIC8vICRGbG93Rml4TWU6IE5vdCB0eXBlZCB0byBhdm9pZCBkZXN0cnVjdHVyaW5nIGFyZ3VtZW50c1xuXG5cbiAgdmFyIHRlbXBsYXRlRnVuY3Rpb24gPSBmdW5jdGlvbiB0ZW1wbGF0ZUZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb21wb25lbnRDb25zdHJ1Y3Rvcih0YWcsIG9wdGlvbnMsIGNzcy5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cykpO1xuICB9O1xuICAvKiBJZiBjb25maWcgbWV0aG9kcyBhcmUgY2FsbGVkLCB3cmFwIHVwIGEgbmV3IHRlbXBsYXRlIGZ1bmN0aW9uIGFuZCBtZXJnZSBvcHRpb25zICovXG5cblxuICB0ZW1wbGF0ZUZ1bmN0aW9uLndpdGhDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbnN0cnVjdFdpdGhPcHRpb25zKGNvbXBvbmVudENvbnN0cnVjdG9yLCB0YWcsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7fSwgY29uZmlnKSk7XG4gIH07XG4gIC8qIE1vZGlmeS9pbmplY3QgbmV3IHByb3BzIGF0IHJ1bnRpbWUgKi9cblxuXG4gIHRlbXBsYXRlRnVuY3Rpb24uYXR0cnMgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgICByZXR1cm4gY29uc3RydWN0V2l0aE9wdGlvbnMoY29tcG9uZW50Q29uc3RydWN0b3IsIHRhZywgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGF0dHJzOiBBcnJheS5wcm90b3R5cGUuY29uY2F0KG9wdGlvbnMuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbilcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHRlbXBsYXRlRnVuY3Rpb247XG59XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qKlxuICBtaXhpbi1kZWVwOyBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9taXhpbi1kZWVwXG4gIElubGluZWQgc3VjaCB0aGF0IGl0IHdpbGwgYmUgY29uc2lzdGVudGx5IHRyYW5zcGlsZWQgdG8gYW4gSUUtY29tcGF0aWJsZSBzeW50YXguXG5cbiAgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbiAgQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEpvbiBTY2hsaW5rZXJ0LlxuXG4gIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cbiAgVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAgYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICBUSEUgU09GVFdBUkUuXG4qL1xudmFyIGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWwpO1xufTtcblxudmFyIGlzVmFsaWRLZXkgPSBmdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICByZXR1cm4ga2V5ICE9PSAnX19wcm90b19fJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3RvcicgJiYga2V5ICE9PSAncHJvdG90eXBlJztcbn07XG5cbmZ1bmN0aW9uIG1peGluKHRhcmdldCwgdmFsLCBrZXkpIHtcbiAgdmFyIG9iaiA9IHRhcmdldFtrZXldO1xuXG4gIGlmIChpc09iamVjdCh2YWwpICYmIGlzT2JqZWN0KG9iaikpIHtcbiAgICBtaXhpbkRlZXAob2JqLCB2YWwpO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldFtrZXldID0gdmFsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1peGluRGVlcCh0YXJnZXQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHJlc3RbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcmVzdCA9IHJlc3Q7IF9pIDwgX3Jlc3QubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIG9iaiA9IF9yZXN0W19pXTtcblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChpc1ZhbGlkS2V5KGtleSkpIHtcbiAgICAgICAgICBtaXhpbih0YXJnZXQsIG9ialtrZXldLCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLy8gXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLWJpdHdpc2UgKi9cbnZhciBBRF9SRVBMQUNFUl9SID0gLyhhKShkKS9naTtcbi8qIFRoaXMgaXMgdGhlIFwiY2FwYWNpdHlcIiBvZiBvdXIgYWxwaGFiZXQgaS5lLiAyeDI2IGZvciBhbGwgbGV0dGVycyBwbHVzIHRoZWlyIGNhcGl0YWxpc2VkXG4gKiBjb3VudGVycGFydHMgKi9cblxudmFyIGNoYXJzTGVuZ3RoID0gNTI7XG4vKiBzdGFydCBhdCA3NSBmb3IgJ2EnIHVudGlsICd6JyAoMjUpIGFuZCB0aGVuIHN0YXJ0IGF0IDY1IGZvciBjYXBpdGFsaXNlZCBsZXR0ZXJzICovXG5cbnZhciBnZXRBbHBoYWJldGljQ2hhciA9IGZ1bmN0aW9uIGdldEFscGhhYmV0aWNDaGFyKGNvZGUpIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSArIChjb2RlID4gMjUgPyAzOSA6IDk3KSk7XG59O1xuLyogaW5wdXQgYSBudW1iZXIsIHVzdWFsbHkgYSBoYXNoIGFuZCBjb252ZXJ0IGl0IHRvIGJhc2UtNTIgKi9cblxuXG5mdW5jdGlvbiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKGNvZGUpIHtcbiAgdmFyIG5hbWUgPSAnJztcbiAgdmFyIHg7XG4gIC8qIGdldCBhIGNoYXIgYW5kIGRpdmlkZSBieSBhbHBoYWJldC1sZW5ndGggKi9cblxuICBmb3IgKHggPSBNYXRoLmFicyhjb2RlKTsgeCA+IGNoYXJzTGVuZ3RoOyB4ID0geCAvIGNoYXJzTGVuZ3RoIHwgMCkge1xuICAgIG5hbWUgPSBnZXRBbHBoYWJldGljQ2hhcih4ICUgY2hhcnNMZW5ndGgpICsgbmFtZTtcbiAgfVxuXG4gIHJldHVybiAoZ2V0QWxwaGFiZXRpY0NoYXIoeCAlIGNoYXJzTGVuZ3RoKSArIG5hbWUpLnJlcGxhY2UoQURfUkVQTEFDRVJfUiwgJyQxLSQyJyk7XG59XG5cbi8vIFxuZnVuY3Rpb24gaXNTdGF0aWNSdWxlcyhydWxlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIHJ1bGUgPSBydWxlc1tpXTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJ1bGUpICYmICFpc1N0eWxlZENvbXBvbmVudChydWxlKSkge1xuICAgICAgLy8gZnVuY3Rpb25zIGFyZSBhbGxvd2VkIHRvIGJlIHN0YXRpYyBpZiB0aGV5J3JlIGp1c3QgYmVpbmdcbiAgICAgIC8vIHVzZWQgdG8gZ2V0IHRoZSBjbGFzc25hbWUgb2YgYSBuZXN0ZWQgc3R5bGVkIGNvbXBvbmVudFxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vLyBcbi8qXG4gQ29tcG9uZW50U3R5bGUgaXMgYWxsIHRoZSBDU1Mtc3BlY2lmaWMgc3R1ZmYsIG5vdFxuIHRoZSBSZWFjdC1zcGVjaWZpYyBzdHVmZi5cbiAqL1xuXG52YXIgQ29tcG9uZW50U3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnRTdHlsZShydWxlcywgY29tcG9uZW50SWQpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5zdGF0aWNSdWxlc0lkID0gJyc7XG4gICAgdGhpcy5pc1N0YXRpYyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgaXNTdGF0aWNSdWxlcyhydWxlcyk7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgIHRoaXMuYmFzZUhhc2ggPSBoYXNoKGNvbXBvbmVudElkKTsgLy8gTk9URTogVGhpcyByZWdpc3RlcnMgdGhlIGNvbXBvbmVudElkLCB3aGljaCBlbnN1cmVzIGEgY29uc2lzdGVudCBvcmRlclxuICAgIC8vIGZvciB0aGlzIGNvbXBvbmVudCdzIHN0eWxlcyBjb21wYXJlZCB0byBvdGhlcnNcblxuICAgIFN0eWxlU2hlZXQucmVnaXN0ZXJJZChjb21wb25lbnRJZCk7XG4gIH1cbiAgLypcbiAgICogRmxhdHRlbnMgYSBydWxlIHNldCBpbnRvIHZhbGlkIENTU1xuICAgKiBIYXNoZXMgaXQsIHdyYXBzIHRoZSB3aG9sZSBjaHVuayBpbiBhIC5oYXNoMTIzNCB7fVxuICAgKiBSZXR1cm5zIHRoZSBoYXNoIHRvIGJlIGluamVjdGVkIG9uIHJlbmRlcigpXG4gICAqICovXG5cblxuICB2YXIgX3Byb3RvID0gQ29tcG9uZW50U3R5bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcyA9IGZ1bmN0aW9uIGdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcykge1xuICAgIHZhciBjb21wb25lbnRJZCA9IHRoaXMuY29tcG9uZW50SWQ7IC8vIGZvcmNlIGR5bmFtaWMgY2xhc3NuYW1lcyBpZiB1c2VyLXN1cHBsaWVkIHN0eWxpcyBwbHVnaW5zIGFyZSBpbiB1c2VcblxuICAgIGlmICh0aGlzLmlzU3RhdGljICYmICFzdHlsaXMuaGFzaCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGljUnVsZXNJZCAmJiBzdHlsZVNoZWV0Lmhhc05hbWVGb3JJZChjb21wb25lbnRJZCwgdGhpcy5zdGF0aWNSdWxlc0lkKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0aWNSdWxlc0lkO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3NzU3RhdGljID0gZmxhdHRlbih0aGlzLnJ1bGVzLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KS5qb2luKCcnKTtcbiAgICAgIHZhciBuYW1lID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShwaGFzaCh0aGlzLmJhc2VIYXNoLCBjc3NTdGF0aWMubGVuZ3RoKSA+Pj4gMCk7XG5cbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIG5hbWUpKSB7XG4gICAgICAgIHZhciBjc3NTdGF0aWNGb3JtYXR0ZWQgPSBzdHlsaXMoY3NzU3RhdGljLCBcIi5cIiArIG5hbWUsIHVuZGVmaW5lZCwgY29tcG9uZW50SWQpO1xuICAgICAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKGNvbXBvbmVudElkLCBuYW1lLCBjc3NTdGF0aWNGb3JtYXR0ZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YXRpY1J1bGVzSWQgPSBuYW1lO1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLnJ1bGVzLmxlbmd0aDtcbiAgICAgIHZhciBkeW5hbWljSGFzaCA9IHBoYXNoKHRoaXMuYmFzZUhhc2gsIHN0eWxpcy5oYXNoKTtcbiAgICAgIHZhciBjc3MgPSAnJztcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcGFydFJ1bGUgPSB0aGlzLnJ1bGVzW2ldO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFydFJ1bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgY3NzICs9IHBhcnRSdWxlO1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBkeW5hbWljSGFzaCA9IHBoYXNoKGR5bmFtaWNIYXNoLCBwYXJ0UnVsZSArIGkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBwYXJ0Q2h1bmsgPSBmbGF0dGVuKHBhcnRSdWxlLCBleGVjdXRpb25Db250ZXh0LCBzdHlsZVNoZWV0KTtcbiAgICAgICAgICB2YXIgcGFydFN0cmluZyA9IEFycmF5LmlzQXJyYXkocGFydENodW5rKSA/IHBhcnRDaHVuay5qb2luKCcnKSA6IHBhcnRDaHVuaztcbiAgICAgICAgICBkeW5hbWljSGFzaCA9IHBoYXNoKGR5bmFtaWNIYXNoLCBwYXJ0U3RyaW5nICsgaSk7XG4gICAgICAgICAgY3NzICs9IHBhcnRTdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIF9uYW1lID0gZ2VuZXJhdGVBbHBoYWJldGljTmFtZShkeW5hbWljSGFzaCA+Pj4gMCk7XG5cbiAgICAgIGlmICghc3R5bGVTaGVldC5oYXNOYW1lRm9ySWQoY29tcG9uZW50SWQsIF9uYW1lKSkge1xuICAgICAgICB2YXIgY3NzRm9ybWF0dGVkID0gc3R5bGlzKGNzcywgXCIuXCIgKyBfbmFtZSwgdW5kZWZpbmVkLCBjb21wb25lbnRJZCk7XG4gICAgICAgIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZXMoY29tcG9uZW50SWQsIF9uYW1lLCBjc3NGb3JtYXR0ZWQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX25hbWU7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnRTdHlsZTtcbn0oKTtcblxuLy8gXG52YXIgTElNSVQgPSAyMDA7XG52YXIgY3JlYXRlV2FyblRvb01hbnlDbGFzc2VzID0gKGZ1bmN0aW9uIChkaXNwbGF5TmFtZSwgY29tcG9uZW50SWQpIHtcbiAgdmFyIGdlbmVyYXRlZENsYXNzZXMgPSB7fTtcbiAgdmFyIHdhcm5pbmdTZWVuID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCF3YXJuaW5nU2Vlbikge1xuICAgICAgZ2VuZXJhdGVkQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGdlbmVyYXRlZENsYXNzZXMpLmxlbmd0aCA+PSBMSU1JVCkge1xuICAgICAgICAvLyBVbmFibGUgdG8gZmluZCBsYXRlc3RSdWxlIGluIHRlc3QgZW52aXJvbm1lbnQuXG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSwgcHJlZmVyLXRlbXBsYXRlICovXG4gICAgICAgIHZhciBwYXJzZWRJZFN0cmluZyA9IGNvbXBvbmVudElkID8gXCIgd2l0aCB0aGUgaWQgb2YgXFxcIlwiICsgY29tcG9uZW50SWQgKyBcIlxcXCJcIiA6ICcnO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJPdmVyIFwiICsgTElNSVQgKyBcIiBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIgKyBkaXNwbGF5TmFtZSArIHBhcnNlZElkU3RyaW5nICsgXCIuXFxuXCIgKyAnQ29uc2lkZXIgdXNpbmcgdGhlIGF0dHJzIG1ldGhvZCwgdG9nZXRoZXIgd2l0aCBhIHN0eWxlIG9iamVjdCBmb3IgZnJlcXVlbnRseSBjaGFuZ2VkIHN0eWxlcy5cXG4nICsgJ0V4YW1wbGU6XFxuJyArICcgIGNvbnN0IENvbXBvbmVudCA9IHN0eWxlZC5kaXYuYXR0cnMocHJvcHMgPT4gKHtcXG4nICsgJyAgICBzdHlsZToge1xcbicgKyAnICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4nICsgJyAgICB9LFxcbicgKyAnICB9KSlgd2lkdGg6IDEwMCU7YFxcblxcbicgKyAnICA8Q29tcG9uZW50IC8+Jyk7XG4gICAgICAgIHdhcm5pbmdTZWVuID0gdHJ1ZTtcbiAgICAgICAgZ2VuZXJhdGVkQ2xhc3NlcyA9IHt9O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG4vLyBcbnZhciBpbnZhbGlkSG9va0NhbGxSZSA9IC9pbnZhbGlkIGhvb2sgY2FsbC9pO1xudmFyIHNlZW4gPSBuZXcgU2V0KCk7XG52YXIgY2hlY2tEeW5hbWljQ3JlYXRpb24gPSBmdW5jdGlvbiBjaGVja0R5bmFtaWNDcmVhdGlvbihkaXNwbGF5TmFtZSwgY29tcG9uZW50SWQpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB2YXIgcGFyc2VkSWRTdHJpbmcgPSBjb21wb25lbnRJZCA/IFwiIHdpdGggdGhlIGlkIG9mIFxcXCJcIiArIGNvbXBvbmVudElkICsgXCJcXFwiXCIgOiAnJztcbiAgICB2YXIgbWVzc2FnZSA9IFwiVGhlIGNvbXBvbmVudCBcIiArIGRpc3BsYXlOYW1lICsgcGFyc2VkSWRTdHJpbmcgKyBcIiBoYXMgYmVlbiBjcmVhdGVkIGR5bmFtaWNhbGx5LlxcblwiICsgJ1lvdSBtYXkgc2VlIHRoaXMgd2FybmluZyBiZWNhdXNlIHlvdVxcJ3ZlIGNhbGxlZCBzdHlsZWQgaW5zaWRlIGFub3RoZXIgY29tcG9uZW50LlxcbicgKyAnVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC4nO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHB1cnBvc2VmdWxseSBjYWxsIGB1c2VSZWZgIG91dHNpZGUgb2YgYSBjb21wb25lbnQgYW5kIGV4cGVjdCBpdCB0byB0aHJvd1xuICAgICAgLy8gSWYgaXQgZG9lc24ndCwgdGhlbiB3ZSdyZSBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgIHVzZVJlZigpO1xuXG4gICAgICBpZiAoIXNlZW4uaGFzKG1lc3NhZ2UpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICAgICAgc2Vlbi5hZGQobWVzc2FnZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFRoZSBlcnJvciBoZXJlIGlzIGV4cGVjdGVkLCBzaW5jZSB3ZSdyZSBleHBlY3RpbmcgYW55dGhpbmcgdGhhdCB1c2VzIGBjaGVja0R5bmFtaWNDcmVhdGlvbmAgdG9cbiAgICAgIC8vIGJlIGNhbGxlZCBvdXRzaWRlIG9mIGEgUmVhY3QgY29tcG9uZW50LlxuICAgICAgaWYgKGludmFsaWRIb29rQ2FsbFJlLnRlc3QoZXJyb3IubWVzc2FnZSkpIHtcbiAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuLCBidXQgcmVzZXRzIGB3YXJuaW5nU2VlbmAgaWYgd2UgaGFkIHRoaXMgZXJyb3IgaGFwcGVuIGludGVybWl0dGVudGx5XG4gICAgICAgIHNlZW5bXCJkZWxldGVcIl0obWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vLyBcbnZhciBkZXRlcm1pbmVUaGVtZSA9IChmdW5jdGlvbiAocHJvcHMsIHByb3ZpZGVkVGhlbWUsIGRlZmF1bHRQcm9wcykge1xuICBpZiAoZGVmYXVsdFByb3BzID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0UHJvcHMgPSBFTVBUWV9PQkpFQ1Q7XG4gIH1cblxuICByZXR1cm4gcHJvcHMudGhlbWUgIT09IGRlZmF1bHRQcm9wcy50aGVtZSAmJiBwcm9wcy50aGVtZSB8fCBwcm92aWRlZFRoZW1lIHx8IGRlZmF1bHRQcm9wcy50aGVtZTtcbn0pO1xuXG4vLyBcbi8vIFNvdXJjZTogaHR0cHM6Ly93d3cudzMub3JnL1RSL2Nzc29tLTEvI3NlcmlhbGl6ZS1hbi1pZGVudGlmaWVyXG4vLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIG5vbi1sZXR0ZXIgZmlyc3Qgc3ltYm9scyBhcmUgbm90IHN1cHBvcnRlZFxudmFyIGVzY2FwZVJlZ2V4ID0gL1shXCIjJCUmJygpKissLi86Ozw9Pj9AW1xcXFxcXF1eYHt8fX4tXSsvZztcbnZhciBkYXNoZXNBdEVuZHMgPSAvKF4tfC0kKS9nO1xuLyoqXG4gKiBUT0RPOiBFeHBsb3JlIHVzaW5nIENTUy5lc2NhcGUgd2hlbiBpdCBiZWNvbWVzIG1vcmUgYXZhaWxhYmxlXG4gKiBpbiBldmVyZ3JlZW4gYnJvd3NlcnMuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKHN0cikge1xuICByZXR1cm4gc3RyIC8vIFJlcGxhY2UgYWxsIHBvc3NpYmxlIENTUyBzZWxlY3RvcnNcbiAgLnJlcGxhY2UoZXNjYXBlUmVnZXgsICctJykgLy8gUmVtb3ZlIGV4dHJhbmVvdXMgaHlwaGVucyBhdCB0aGUgc3RhcnQgYW5kIGVuZFxuICAucmVwbGFjZShkYXNoZXNBdEVuZHMsICcnKTtcbn1cblxuLy8gXG5mdW5jdGlvbiBpc1RhZyh0YXJnZXQpIHtcbiAgcmV0dXJuIHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnICYmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gdGFyZ2V0LmNoYXJBdCgwKSA9PT0gdGFyZ2V0LmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpIDogdHJ1ZSk7XG59XG5cbi8vIFxuZnVuY3Rpb24gZ2VuZXJhdGVEaXNwbGF5TmFtZSh0YXJnZXQpIHtcbiAgLy8gJEZsb3dGaXhNZVxuICByZXR1cm4gaXNUYWcodGFyZ2V0KSA/IFwic3R5bGVkLlwiICsgdGFyZ2V0IDogXCJTdHlsZWQoXCIgKyBnZXRDb21wb25lbnROYW1lKHRhcmdldCkgKyBcIilcIjtcbn1cblxuLy8gXG52YXIgZ2VuZXJhdGVDb21wb25lbnRJZCA9IChmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiBnZW5lcmF0ZUFscGhhYmV0aWNOYW1lKGhhc2goc3RyKSA+Pj4gMCk7XG59KTtcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBmdW5jdGlvbiBmb3Igam9pbmluZyBzdHJpbmdzIHRvIGZvcm0gY2xhc3NOYW1lIGNoYWluc1xuICovXG5mdW5jdGlvbiBqb2luU3RyaW5ncyhhLCBiKSB7XG4gIHJldHVybiBhICYmIGIgPyBhICsgXCIgXCIgKyBiIDogYSB8fCBiO1xufVxuXG52YXIgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xudmFyIFRoZW1lQ29uc3VtZXIgPSBUaGVtZUNvbnRleHQuQ29uc3VtZXI7XG5cbmZ1bmN0aW9uIG1lcmdlVGhlbWUodGhlbWUsIG91dGVyVGhlbWUpIHtcbiAgaWYgKCF0aGVtZSkge1xuICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigxNCk7XG4gIH1cblxuICBpZiAoaXNGdW5jdGlvbih0aGVtZSkpIHtcbiAgICB2YXIgbWVyZ2VkVGhlbWUgPSB0aGVtZShvdXRlclRoZW1lKTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIChtZXJnZWRUaGVtZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KG1lcmdlZFRoZW1lKSB8fCB0eXBlb2YgbWVyZ2VkVGhlbWUgIT09ICdvYmplY3QnKSkge1xuICAgICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDcpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRUaGVtZTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHRoZW1lKSB8fCB0eXBlb2YgdGhlbWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHRocm93U3R5bGVkQ29tcG9uZW50c0Vycm9yKDgpO1xuICB9XG5cbiAgcmV0dXJuIG91dGVyVGhlbWUgPyBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwge30sIHRoZW1lKSA6IHRoZW1lO1xufVxuLyoqXG4gKiBQcm92aWRlIGEgdGhlbWUgdG8gYW4gZW50aXJlIHJlYWN0IGNvbXBvbmVudCB0cmVlIHZpYSBjb250ZXh0XG4gKi9cblxuXG5mdW5jdGlvbiBUaGVtZVByb3ZpZGVyKHByb3BzKSB7XG4gIHZhciBvdXRlclRoZW1lID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpO1xuICB2YXIgdGhlbWVDb250ZXh0ID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG1lcmdlVGhlbWUocHJvcHMudGhlbWUsIG91dGVyVGhlbWUpO1xuICB9LCBbcHJvcHMudGhlbWUsIG91dGVyVGhlbWVdKTtcblxuICBpZiAoIXByb3BzLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGhlbWVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHRoZW1lQ29udGV4dFxuICB9LCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbi8qIGdsb2JhbCAkQ2FsbCAqL1xuXG52YXIgaWRlbnRpZmllcnMgPSB7fTtcbi8qIFdlIGRlcGVuZCBvbiBjb21wb25lbnRzIGhhdmluZyB1bmlxdWUgSURzICovXG5cbmZ1bmN0aW9uIGdlbmVyYXRlSWQoZGlzcGxheU5hbWUsIHBhcmVudENvbXBvbmVudElkKSB7XG4gIHZhciBuYW1lID0gdHlwZW9mIGRpc3BsYXlOYW1lICE9PSAnc3RyaW5nJyA/ICdzYycgOiBlc2NhcGUoZGlzcGxheU5hbWUpOyAvLyBFbnN1cmUgdGhhdCBubyBkaXNwbGF5TmFtZSBjYW4gbGVhZCB0byBkdXBsaWNhdGUgY29tcG9uZW50SWRzXG5cbiAgaWRlbnRpZmllcnNbbmFtZV0gPSAoaWRlbnRpZmllcnNbbmFtZV0gfHwgMCkgKyAxO1xuICB2YXIgY29tcG9uZW50SWQgPSBuYW1lICsgXCItXCIgKyBnZW5lcmF0ZUNvbXBvbmVudElkKG5hbWUgKyBpZGVudGlmaWVyc1tuYW1lXSk7XG4gIHJldHVybiBwYXJlbnRDb21wb25lbnRJZCA/IHBhcmVudENvbXBvbmVudElkICsgXCItXCIgKyBjb21wb25lbnRJZCA6IGNvbXBvbmVudElkO1xufVxuXG5mdW5jdGlvbiB1c2VSZXNvbHZlZEF0dHJzKHRoZW1lLCBwcm9wcywgYXR0cnMpIHtcbiAgaWYgKHRoZW1lID09PSB2b2lkIDApIHtcbiAgICB0aGVtZSA9IEVNUFRZX09CSkVDVDtcbiAgfVxuXG4gIC8vIE5PVEU6IGNhbid0IG1lbW9pemUgdGhpc1xuICAvLyByZXR1cm5zIFtjb250ZXh0LCByZXNvbHZlZEF0dHJzXVxuICAvLyB3aGVyZSByZXNvbHZlZEF0dHJzIGlzIG9ubHkgdGhlIHRoaW5ncyBpbmplY3RlZCBieSB0aGUgYXR0cnMgdGhlbXNlbHZlc1xuICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIHRoZW1lOiB0aGVtZVxuICB9KTtcblxuICB2YXIgcmVzb2x2ZWRBdHRycyA9IHt9O1xuICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyRGVmKSB7XG4gICAgdmFyIHJlc29sdmVkQXR0ckRlZiA9IGF0dHJEZWY7XG4gICAgdmFyIGtleTtcblxuICAgIGlmIChpc0Z1bmN0aW9uKHJlc29sdmVkQXR0ckRlZikpIHtcbiAgICAgIHJlc29sdmVkQXR0ckRlZiA9IHJlc29sdmVkQXR0ckRlZihjb250ZXh0KTtcbiAgICB9XG4gICAgLyogZXNsaW50LWRpc2FibGUgZ3VhcmQtZm9yLWluICovXG5cblxuICAgIGZvciAoa2V5IGluIHJlc29sdmVkQXR0ckRlZikge1xuICAgICAgY29udGV4dFtrZXldID0gcmVzb2x2ZWRBdHRyc1trZXldID0ga2V5ID09PSAnY2xhc3NOYW1lJyA/IGpvaW5TdHJpbmdzKHJlc29sdmVkQXR0cnNba2V5XSwgcmVzb2x2ZWRBdHRyRGVmW2tleV0pIDogcmVzb2x2ZWRBdHRyRGVmW2tleV07XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgZ3VhcmQtZm9yLWluICovXG5cbiAgfSk7XG4gIHJldHVybiBbY29udGV4dCwgcmVzb2x2ZWRBdHRyc107XG59XG5cbmZ1bmN0aW9uIHVzZUluamVjdGVkU3R5bGUoY29tcG9uZW50U3R5bGUsIGhhc0F0dHJzLCByZXNvbHZlZEF0dHJzLCB3YXJuVG9vTWFueUNsYXNzZXMpIHtcbiAgdmFyIHN0eWxlU2hlZXQgPSB1c2VTdHlsZVNoZWV0KCk7XG4gIHZhciBzdHlsaXMgPSB1c2VTdHlsaXMoKTsgLy8gc3RhdGljYWxseSBzdHlsZWQtY29tcG9uZW50cyBkb24ndCBuZWVkIHRvIGJ1aWxkIGFuIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCxcbiAgLy8gYW5kIHNob3VsZG4ndCBiZSBpbmNyZWFzaW5nIHRoZSBudW1iZXIgb2YgY2xhc3MgbmFtZXNcblxuICB2YXIgaXNTdGF0aWMgPSBjb21wb25lbnRTdHlsZS5pc1N0YXRpYyAmJiAhaGFzQXR0cnM7XG4gIHZhciBjbGFzc05hbWUgPSBpc1N0YXRpYyA/IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKEVNUFRZX09CSkVDVCwgc3R5bGVTaGVldCwgc3R5bGlzKSA6IGNvbXBvbmVudFN0eWxlLmdlbmVyYXRlQW5kSW5qZWN0U3R5bGVzKHJlc29sdmVkQXR0cnMsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gIHVzZURlYnVnVmFsdWUoY2xhc3NOYW1lKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhaXNTdGF0aWMgJiYgd2FyblRvb01hbnlDbGFzc2VzKSB7XG4gICAgd2FyblRvb01hbnlDbGFzc2VzKGNsYXNzTmFtZSk7XG4gIH1cblxuICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiB1c2VTdHlsZWRDb21wb25lbnRJbXBsKGZvcndhcmRlZENvbXBvbmVudCwgcHJvcHMsIGZvcndhcmRlZFJlZikge1xuICB2YXIgY29tcG9uZW50QXR0cnMgPSBmb3J3YXJkZWRDb21wb25lbnQuYXR0cnMsXG4gICAgICBjb21wb25lbnRTdHlsZSA9IGZvcndhcmRlZENvbXBvbmVudC5jb21wb25lbnRTdHlsZSxcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGZvcndhcmRlZENvbXBvbmVudC5kZWZhdWx0UHJvcHMsXG4gICAgICBmb2xkZWRDb21wb25lbnRJZHMgPSBmb3J3YXJkZWRDb21wb25lbnQuZm9sZGVkQ29tcG9uZW50SWRzLFxuICAgICAgc2hvdWxkRm9yd2FyZFByb3AgPSBmb3J3YXJkZWRDb21wb25lbnQuc2hvdWxkRm9yd2FyZFByb3AsXG4gICAgICBzdHlsZWRDb21wb25lbnRJZCA9IGZvcndhcmRlZENvbXBvbmVudC5zdHlsZWRDb21wb25lbnRJZCxcbiAgICAgIHRhcmdldCA9IGZvcndhcmRlZENvbXBvbmVudC50YXJnZXQ7XG4gIHVzZURlYnVnVmFsdWUoc3R5bGVkQ29tcG9uZW50SWQpOyAvLyBOT1RFOiB0aGUgbm9uLWhvb2tzIHZlcnNpb24gb25seSBzdWJzY3JpYmVzIHRvIHRoaXMgd2hlbiAhY29tcG9uZW50U3R5bGUuaXNTdGF0aWMsXG4gIC8vIGJ1dCB0aGF0J2QgYmUgYWdhaW5zdCB0aGUgcnVsZXMtb2YtaG9va3MuIFdlIGNvdWxkIGJlIG5hdWdodHkgYW5kIGRvIGl0IGFueXdheSBhcyBpdFxuICAvLyBzaG91bGQgYmUgYW4gaW1tdXRhYmxlIHZhbHVlLCBidXQgYmVoYXZlIGZvciBub3cuXG5cbiAgdmFyIHRoZW1lID0gZGV0ZXJtaW5lVGhlbWUocHJvcHMsIHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSwgZGVmYXVsdFByb3BzKTtcblxuICB2YXIgX3VzZVJlc29sdmVkQXR0cnMgPSB1c2VSZXNvbHZlZEF0dHJzKHRoZW1lIHx8IEVNUFRZX09CSkVDVCwgcHJvcHMsIGNvbXBvbmVudEF0dHJzKSxcbiAgICAgIGNvbnRleHQgPSBfdXNlUmVzb2x2ZWRBdHRyc1swXSxcbiAgICAgIGF0dHJzID0gX3VzZVJlc29sdmVkQXR0cnNbMV07XG5cbiAgdmFyIGdlbmVyYXRlZENsYXNzTmFtZSA9IHVzZUluamVjdGVkU3R5bGUoY29tcG9uZW50U3R5bGUsIGNvbXBvbmVudEF0dHJzLmxlbmd0aCA+IDAsIGNvbnRleHQsIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBmb3J3YXJkZWRDb21wb25lbnQud2FyblRvb01hbnlDbGFzc2VzIDogdW5kZWZpbmVkKTtcbiAgdmFyIHJlZlRvRm9yd2FyZCA9IGZvcndhcmRlZFJlZjtcbiAgdmFyIGVsZW1lbnRUb0JlQ3JlYXRlZCA9IGF0dHJzLiRhcyB8fCBwcm9wcy4kYXMgfHwgYXR0cnMuYXMgfHwgcHJvcHMuYXMgfHwgdGFyZ2V0O1xuICB2YXIgaXNUYXJnZXRUYWcgPSBpc1RhZyhlbGVtZW50VG9CZUNyZWF0ZWQpO1xuICB2YXIgY29tcHV0ZWRQcm9wcyA9IGF0dHJzICE9PSBwcm9wcyA/IF9leHRlbmRzKHt9LCBwcm9wcywge30sIGF0dHJzKSA6IHByb3BzO1xuICB2YXIgcHJvcEZpbHRlckZuID0gc2hvdWxkRm9yd2FyZFByb3AgfHwgaXNUYXJnZXRUYWcgJiYgdmFsaWRBdHRyO1xuICB2YXIgcHJvcHNGb3JFbGVtZW50ID0ge307IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cblxuICBmb3IgKHZhciBrZXkgaW4gY29tcHV0ZWRQcm9wcykge1xuICAgIGlmIChrZXlbMF0gPT09ICckJyB8fCBrZXkgPT09ICdhcycpIGNvbnRpbnVlO2Vsc2UgaWYgKGtleSA9PT0gJ2ZvcndhcmRlZEFzJykge1xuICAgICAgcHJvcHNGb3JFbGVtZW50LmFzID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgIH0gZWxzZSBpZiAoIXByb3BGaWx0ZXJGbiB8fCBwcm9wRmlsdGVyRm4oa2V5LCB2YWxpZEF0dHIpKSB7XG4gICAgICAvLyBEb24ndCBwYXNzIHRocm91Z2ggbm9uIEhUTUwgdGFncyB0aHJvdWdoIHRvIEhUTUwgZWxlbWVudHNcbiAgICAgIHByb3BzRm9yRWxlbWVudFtrZXldID0gY29tcHV0ZWRQcm9wc1trZXldO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5zdHlsZSAmJiBhdHRycy5zdHlsZSAhPT0gcHJvcHMuc3R5bGUpIHtcbiAgICBwcm9wc0ZvckVsZW1lbnQuc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIHt9LCBhdHRycy5zdHlsZSk7XG4gIH1cblxuICBwcm9wc0ZvckVsZW1lbnQuY2xhc3NOYW1lID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdChmb2xkZWRDb21wb25lbnRJZHMsIHN0eWxlZENvbXBvbmVudElkLCBnZW5lcmF0ZWRDbGFzc05hbWUgIT09IHN0eWxlZENvbXBvbmVudElkID8gZ2VuZXJhdGVkQ2xhc3NOYW1lIDogbnVsbCwgcHJvcHMuY2xhc3NOYW1lLCBhdHRycy5jbGFzc05hbWUpLmZpbHRlcihCb29sZWFuKS5qb2luKCcgJyk7XG4gIHByb3BzRm9yRWxlbWVudC5yZWYgPSByZWZUb0ZvcndhcmQ7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KGVsZW1lbnRUb0JlQ3JlYXRlZCwgcHJvcHNGb3JFbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVkQ29tcG9uZW50KHRhcmdldCwgb3B0aW9ucywgcnVsZXMpIHtcbiAgdmFyIGlzVGFyZ2V0U3R5bGVkQ29tcCA9IGlzU3R5bGVkQ29tcG9uZW50KHRhcmdldCk7XG4gIHZhciBpc0NvbXBvc2l0ZUNvbXBvbmVudCA9ICFpc1RhZyh0YXJnZXQpO1xuICB2YXIgX29wdGlvbnMkZGlzcGxheU5hbWUgPSBvcHRpb25zLmRpc3BsYXlOYW1lLFxuICAgICAgZGlzcGxheU5hbWUgPSBfb3B0aW9ucyRkaXNwbGF5TmFtZSA9PT0gdm9pZCAwID8gZ2VuZXJhdGVEaXNwbGF5TmFtZSh0YXJnZXQpIDogX29wdGlvbnMkZGlzcGxheU5hbWUsXG4gICAgICBfb3B0aW9ucyRjb21wb25lbnRJZCA9IG9wdGlvbnMuY29tcG9uZW50SWQsXG4gICAgICBjb21wb25lbnRJZCA9IF9vcHRpb25zJGNvbXBvbmVudElkID09PSB2b2lkIDAgPyBnZW5lcmF0ZUlkKG9wdGlvbnMuZGlzcGxheU5hbWUsIG9wdGlvbnMucGFyZW50Q29tcG9uZW50SWQpIDogX29wdGlvbnMkY29tcG9uZW50SWQsXG4gICAgICBfb3B0aW9ucyRhdHRycyA9IG9wdGlvbnMuYXR0cnMsXG4gICAgICBhdHRycyA9IF9vcHRpb25zJGF0dHJzID09PSB2b2lkIDAgPyBFTVBUWV9BUlJBWSA6IF9vcHRpb25zJGF0dHJzO1xuICB2YXIgc3R5bGVkQ29tcG9uZW50SWQgPSBvcHRpb25zLmRpc3BsYXlOYW1lICYmIG9wdGlvbnMuY29tcG9uZW50SWQgPyBlc2NhcGUob3B0aW9ucy5kaXNwbGF5TmFtZSkgKyBcIi1cIiArIG9wdGlvbnMuY29tcG9uZW50SWQgOiBvcHRpb25zLmNvbXBvbmVudElkIHx8IGNvbXBvbmVudElkOyAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCBhdHRycyB1cCAoaW1wbGljaXQgZXh0ZW5kKVxuXG4gIHZhciBmaW5hbEF0dHJzID0gLy8gJEZsb3dGaXhNZVxuICBpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LmF0dHJzID8gQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuYXR0cnMsIGF0dHJzKS5maWx0ZXIoQm9vbGVhbikgOiBhdHRyczsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wID0gb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcDsgLy8gJEZsb3dGaXhNZVxuXG4gIGlmIChpc1RhcmdldFN0eWxlZENvbXAgJiYgdGFyZ2V0LnNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgaWYgKHNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgICAvLyBjb21wb3NlIG5lc3RlZCBzaG91bGRGb3J3YXJkUHJvcCBjYWxsc1xuICAgICAgc2hvdWxkRm9yd2FyZFByb3AgPSBmdW5jdGlvbiBzaG91bGRGb3J3YXJkUHJvcChwcm9wLCBmaWx0ZXJGbikge1xuICAgICAgICByZXR1cm4gKC8vICRGbG93Rml4TWVcbiAgICAgICAgICB0YXJnZXQuc2hvdWxkRm9yd2FyZFByb3AocHJvcCwgZmlsdGVyRm4pICYmIG9wdGlvbnMuc2hvdWxkRm9yd2FyZFByb3AocHJvcCwgZmlsdGVyRm4pXG4gICAgICAgICk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgIHNob3VsZEZvcndhcmRQcm9wID0gdGFyZ2V0LnNob3VsZEZvcndhcmRQcm9wO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb21wb25lbnRTdHlsZSA9IG5ldyBDb21wb25lbnRTdHlsZShpc1RhcmdldFN0eWxlZENvbXAgPyAvLyBmb2xkIHRoZSB1bmRlcmx5aW5nIFN0eWxlZENvbXBvbmVudCBydWxlcyB1cCAoaW1wbGljaXQgZXh0ZW5kKVxuICAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC5jb21wb25lbnRTdHlsZS5ydWxlcy5jb25jYXQocnVsZXMpIDogcnVsZXMsIHN0eWxlZENvbXBvbmVudElkKTtcbiAgLyoqXG4gICAqIGZvcndhcmRSZWYgY3JlYXRlcyBhIG5ldyBpbnRlcmltIGNvbXBvbmVudCwgd2hpY2ggd2UnbGwgdGFrZSBhZHZhbnRhZ2Ugb2ZcbiAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcgUGFyZW50Q29tcG9uZW50IHRvIGNyZWF0ZSBfYW5vdGhlcl8gaW50ZXJpbSBjbGFzc1xuICAgKi9cblxuICB2YXIgV3JhcHBlZFN0eWxlZENvbXBvbmVudDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgdmFyIGZvcndhcmRSZWYgPSBmdW5jdGlvbiBmb3J3YXJkUmVmKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gdXNlU3R5bGVkQ29tcG9uZW50SW1wbChXcmFwcGVkU3R5bGVkQ29tcG9uZW50LCBwcm9wcywgcmVmKTtcbiAgfTtcblxuICBmb3J3YXJkUmVmLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7IC8vICRGbG93Rml4TWUgdGhpcyBpcyBhIGZvcmNlZCBjYXN0IHRvIG1lcmdlIGl0IFN0eWxlZENvbXBvbmVudFdyYXBwZXJQcm9wZXJ0aWVzXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZm9yd2FyZFJlZik7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuYXR0cnMgPSBmaW5hbEF0dHJzO1xuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmNvbXBvbmVudFN0eWxlID0gY29tcG9uZW50U3R5bGU7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC5zaG91bGRGb3J3YXJkUHJvcCA9IHNob3VsZEZvcndhcmRQcm9wOyAvLyB0aGlzIHN0YXRpYyBpcyB1c2VkIHRvIHByZXNlcnZlIHRoZSBjYXNjYWRlIG9mIHN0YXRpYyBjbGFzc2VzIGZvciBjb21wb25lbnQgc2VsZWN0b3JcbiAgLy8gcHVycG9zZXM7IHRoaXMgaXMgZXNwZWNpYWxseSBpbXBvcnRhbnQgd2l0aCB1c2FnZSBvZiB0aGUgY3NzIHByb3BcblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LmZvbGRlZENvbXBvbmVudElkcyA9IGlzVGFyZ2V0U3R5bGVkQ29tcCA/IC8vICRGbG93Rml4TWVcbiAgQXJyYXkucHJvdG90eXBlLmNvbmNhdCh0YXJnZXQuZm9sZGVkQ29tcG9uZW50SWRzLCB0YXJnZXQuc3R5bGVkQ29tcG9uZW50SWQpIDogRU1QVFlfQVJSQVk7XG4gIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQgPSBzdHlsZWRDb21wb25lbnRJZDsgLy8gZm9sZCB0aGUgdW5kZXJseWluZyBTdHlsZWRDb21wb25lbnQgdGFyZ2V0IHVwIHNpbmNlIHdlIGZvbGRlZCB0aGUgc3R5bGVzXG5cbiAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC50YXJnZXQgPSBpc1RhcmdldFN0eWxlZENvbXAgPyAvLyAkRmxvd0ZpeE1lXG4gIHRhcmdldC50YXJnZXQgOiB0YXJnZXQ7IC8vICRGbG93Rml4TWVcblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LndpdGhDb21wb25lbnQgPSBmdW5jdGlvbiB3aXRoQ29tcG9uZW50KHRhZykge1xuICAgIHZhciBwcmV2aW91c0NvbXBvbmVudElkID0gb3B0aW9ucy5jb21wb25lbnRJZCxcbiAgICAgICAgb3B0aW9uc1RvQ29weSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKG9wdGlvbnMsIFtcImNvbXBvbmVudElkXCJdKTtcblxuICAgIHZhciBuZXdDb21wb25lbnRJZCA9IHByZXZpb3VzQ29tcG9uZW50SWQgJiYgcHJldmlvdXNDb21wb25lbnRJZCArIFwiLVwiICsgKGlzVGFnKHRhZykgPyB0YWcgOiBlc2NhcGUoZ2V0Q29tcG9uZW50TmFtZSh0YWcpKSk7XG5cbiAgICB2YXIgbmV3T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBvcHRpb25zVG9Db3B5LCB7XG4gICAgICBhdHRyczogZmluYWxBdHRycyxcbiAgICAgIGNvbXBvbmVudElkOiBuZXdDb21wb25lbnRJZFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNyZWF0ZVN0eWxlZENvbXBvbmVudCh0YWcsIG5ld09wdGlvbnMsIHJ1bGVzKTtcbiAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyYXBwZWRTdHlsZWRDb21wb25lbnQsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9sZGVkRGVmYXVsdFByb3BzO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQob2JqKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHMgPSBpc1RhcmdldFN0eWxlZENvbXAgPyBtaXhpbkRlZXAoe30sIHRhcmdldC5kZWZhdWx0UHJvcHMsIG9iaikgOiBvYmo7XG4gICAgfVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrRHluYW1pY0NyZWF0aW9uKGRpc3BsYXlOYW1lLCBzdHlsZWRDb21wb25lbnRJZCk7XG4gICAgV3JhcHBlZFN0eWxlZENvbXBvbmVudC53YXJuVG9vTWFueUNsYXNzZXMgPSBjcmVhdGVXYXJuVG9vTWFueUNsYXNzZXMoZGlzcGxheU5hbWUsIHN0eWxlZENvbXBvbmVudElkKTtcbiAgfSAvLyAkRmxvd0ZpeE1lXG5cblxuICBXcmFwcGVkU3R5bGVkQ29tcG9uZW50LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIi5cIiArIFdyYXBwZWRTdHlsZWRDb21wb25lbnQuc3R5bGVkQ29tcG9uZW50SWQ7XG4gIH07XG5cbiAgaWYgKGlzQ29tcG9zaXRlQ29tcG9uZW50KSB7XG4gICAgaG9pc3QoV3JhcHBlZFN0eWxlZENvbXBvbmVudCwgdGFyZ2V0LCB7XG4gICAgICAvLyBhbGwgU0Mtc3BlY2lmaWMgdGhpbmdzIHNob3VsZCBub3QgYmUgaG9pc3RlZFxuICAgICAgYXR0cnM6IHRydWUsXG4gICAgICBjb21wb25lbnRTdHlsZTogdHJ1ZSxcbiAgICAgIGRpc3BsYXlOYW1lOiB0cnVlLFxuICAgICAgZm9sZGVkQ29tcG9uZW50SWRzOiB0cnVlLFxuICAgICAgc2hvdWxkRm9yd2FyZFByb3A6IHRydWUsXG4gICAgICBzZWxmOiB0cnVlLFxuICAgICAgc3R5bGVkQ29tcG9uZW50SWQ6IHRydWUsXG4gICAgICB0YXJnZXQ6IHRydWUsXG4gICAgICB3aXRoQ29tcG9uZW50OiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gV3JhcHBlZFN0eWxlZENvbXBvbmVudDtcbn1cblxuLy8gXG4vLyBUaGFua3MgdG8gUmVhY3RET01GYWN0b3JpZXMgZm9yIHRoaXMgaGFuZHkgbGlzdCFcbnZhciBkb21FbGVtZW50cyA9IFsnYScsICdhYmJyJywgJ2FkZHJlc3MnLCAnYXJlYScsICdhcnRpY2xlJywgJ2FzaWRlJywgJ2F1ZGlvJywgJ2InLCAnYmFzZScsICdiZGknLCAnYmRvJywgJ2JpZycsICdibG9ja3F1b3RlJywgJ2JvZHknLCAnYnInLCAnYnV0dG9uJywgJ2NhbnZhcycsICdjYXB0aW9uJywgJ2NpdGUnLCAnY29kZScsICdjb2wnLCAnY29sZ3JvdXAnLCAnZGF0YScsICdkYXRhbGlzdCcsICdkZCcsICdkZWwnLCAnZGV0YWlscycsICdkZm4nLCAnZGlhbG9nJywgJ2RpdicsICdkbCcsICdkdCcsICdlbScsICdlbWJlZCcsICdmaWVsZHNldCcsICdmaWdjYXB0aW9uJywgJ2ZpZ3VyZScsICdmb290ZXInLCAnZm9ybScsICdoMScsICdoMicsICdoMycsICdoNCcsICdoNScsICdoNicsICdoZWFkJywgJ2hlYWRlcicsICdoZ3JvdXAnLCAnaHInLCAnaHRtbCcsICdpJywgJ2lmcmFtZScsICdpbWcnLCAnaW5wdXQnLCAnaW5zJywgJ2tiZCcsICdrZXlnZW4nLCAnbGFiZWwnLCAnbGVnZW5kJywgJ2xpJywgJ2xpbmsnLCAnbWFpbicsICdtYXAnLCAnbWFyaycsICdtYXJxdWVlJywgJ21lbnUnLCAnbWVudWl0ZW0nLCAnbWV0YScsICdtZXRlcicsICduYXYnLCAnbm9zY3JpcHQnLCAnb2JqZWN0JywgJ29sJywgJ29wdGdyb3VwJywgJ29wdGlvbicsICdvdXRwdXQnLCAncCcsICdwYXJhbScsICdwaWN0dXJlJywgJ3ByZScsICdwcm9ncmVzcycsICdxJywgJ3JwJywgJ3J0JywgJ3J1YnknLCAncycsICdzYW1wJywgJ3NjcmlwdCcsICdzZWN0aW9uJywgJ3NlbGVjdCcsICdzbWFsbCcsICdzb3VyY2UnLCAnc3BhbicsICdzdHJvbmcnLCAnc3R5bGUnLCAnc3ViJywgJ3N1bW1hcnknLCAnc3VwJywgJ3RhYmxlJywgJ3Rib2R5JywgJ3RkJywgJ3RleHRhcmVhJywgJ3Rmb290JywgJ3RoJywgJ3RoZWFkJywgJ3RpbWUnLCAndGl0bGUnLCAndHInLCAndHJhY2snLCAndScsICd1bCcsICd2YXInLCAndmlkZW8nLCAnd2JyJywgLy8gU1ZHXG4nY2lyY2xlJywgJ2NsaXBQYXRoJywgJ2RlZnMnLCAnZWxsaXBzZScsICdmb3JlaWduT2JqZWN0JywgJ2cnLCAnaW1hZ2UnLCAnbGluZScsICdsaW5lYXJHcmFkaWVudCcsICdtYXJrZXInLCAnbWFzaycsICdwYXRoJywgJ3BhdHRlcm4nLCAncG9seWdvbicsICdwb2x5bGluZScsICdyYWRpYWxHcmFkaWVudCcsICdyZWN0JywgJ3N0b3AnLCAnc3ZnJywgJ3RleHQnLCAndHNwYW4nXTtcblxuLy8gXG5cbnZhciBzdHlsZWQgPSBmdW5jdGlvbiBzdHlsZWQodGFnKSB7XG4gIHJldHVybiBjb25zdHJ1Y3RXaXRoT3B0aW9ucyhjcmVhdGVTdHlsZWRDb21wb25lbnQsIHRhZyk7XG59OyAvLyBTaG9ydGhhbmRzIGZvciBhbGwgdmFsaWQgSFRNTCBFbGVtZW50c1xuXG5cbmRvbUVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGRvbUVsZW1lbnQpIHtcbiAgc3R5bGVkW2RvbUVsZW1lbnRdID0gc3R5bGVkKGRvbUVsZW1lbnQpO1xufSk7XG5cbi8vIFxuXG52YXIgR2xvYmFsU3R5bGUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBHbG9iYWxTdHlsZShydWxlcywgY29tcG9uZW50SWQpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5jb21wb25lbnRJZCA9IGNvbXBvbmVudElkO1xuICAgIHRoaXMuaXNTdGF0aWMgPSBpc1N0YXRpY1J1bGVzKHJ1bGVzKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBHbG9iYWxTdHlsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNyZWF0ZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKSB7XG4gICAgdmFyIGZsYXRDU1MgPSBmbGF0dGVuKHRoaXMucnVsZXMsIGV4ZWN1dGlvbkNvbnRleHQsIHN0eWxlU2hlZXQpO1xuICAgIHZhciBjc3MgPSBzdHlsaXMoZmxhdENTUy5qb2luKCcnKSwgJycpO1xuICAgIHZhciBpZCA9IHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZTsgLy8gTk9URTogV2UgdXNlIHRoZSBpZCBhcyBhIG5hbWUgYXMgd2VsbCwgc2luY2UgdGhlc2UgcnVsZXMgbmV2ZXIgY2hhbmdlXG5cbiAgICBzdHlsZVNoZWV0Lmluc2VydFJ1bGVzKGlkLCBpZCwgY3NzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlU3R5bGVzID0gZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKGluc3RhbmNlLCBzdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVTaGVldC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlclN0eWxlcyA9IGZ1bmN0aW9uIHJlbmRlclN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKSB7XG4gICAgU3R5bGVTaGVldC5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQgKyBpbnN0YW5jZSk7IC8vIE5PVEU6IFJlbW92ZSBvbGQgc3R5bGVzLCB0aGVuIGluamVjdCB0aGUgbmV3IG9uZXNcblxuICAgIHRoaXMucmVtb3ZlU3R5bGVzKGluc3RhbmNlLCBzdHlsZVNoZWV0KTtcbiAgICB0aGlzLmNyZWF0ZVN0eWxlcyhpbnN0YW5jZSwgZXhlY3V0aW9uQ29udGV4dCwgc3R5bGVTaGVldCwgc3R5bGlzKTtcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsU3R5bGU7XG59KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdsb2JhbFN0eWxlKHN0cmluZ3MpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGludGVycG9sYXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBpbnRlcnBvbGF0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgcnVsZXMgPSBjc3MuYXBwbHkodm9pZCAwLCBbc3RyaW5nc10uY29uY2F0KGludGVycG9sYXRpb25zKSk7XG4gIHZhciBzdHlsZWRDb21wb25lbnRJZCA9IFwic2MtZ2xvYmFsLVwiICsgZ2VuZXJhdGVDb21wb25lbnRJZChKU09OLnN0cmluZ2lmeShydWxlcykpO1xuICB2YXIgZ2xvYmFsU3R5bGUgPSBuZXcgR2xvYmFsU3R5bGUocnVsZXMsIHN0eWxlZENvbXBvbmVudElkKTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNoZWNrRHluYW1pY0NyZWF0aW9uKHN0eWxlZENvbXBvbmVudElkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdsb2JhbFN0eWxlQ29tcG9uZW50KHByb3BzKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSB1c2VTdHlsZVNoZWV0KCk7XG4gICAgdmFyIHN0eWxpcyA9IHVzZVN0eWxpcygpO1xuICAgIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcbiAgICB2YXIgaW5zdGFuY2VSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgICBpZiAoaW5zdGFuY2VSZWYuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgaW5zdGFuY2VSZWYuY3VycmVudCA9IHN0eWxlU2hlZXQuYWxsb2NhdGVHU0luc3RhbmNlKHN0eWxlZENvbXBvbmVudElkKTtcbiAgICB9XG5cbiAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZVJlZi5jdXJyZW50O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdsb2JhbCBzdHlsZSBjb21wb25lbnQgXCIgKyBzdHlsZWRDb21wb25lbnRJZCArIFwiIHdhcyBnaXZlbiBjaGlsZCBKU1guIGNyZWF0ZUdsb2JhbFN0eWxlIGRvZXMgbm90IHJlbmRlciBjaGlsZHJlbi5cIik7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgcnVsZXMuc29tZShmdW5jdGlvbiAocnVsZSkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBydWxlID09PSAnc3RyaW5nJyAmJiBydWxlLmluZGV4T2YoJ0BpbXBvcnQnKSAhPT0gLTE7XG4gICAgfSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIlBsZWFzZSBkbyBub3QgdXNlIEBpbXBvcnQgQ1NTIHN5bnRheCBpbiBjcmVhdGVHbG9iYWxTdHlsZSBhdCB0aGlzIHRpbWUsIGFzIHRoZSBDU1NPTSBBUElzIHdlIHVzZSBpbiBwcm9kdWN0aW9uIGRvIG5vdCBoYW5kbGUgaXQgd2VsbC4gSW5zdGVhZCwgd2UgcmVjb21tZW5kIHVzaW5nIGEgbGlicmFyeSBzdWNoIGFzIHJlYWN0LWhlbG1ldCB0byBpbmplY3QgYSB0eXBpY2FsIDxsaW5rPiBtZXRhIHRhZyB0byB0aGUgc3R5bGVzaGVldCwgb3Igc2ltcGx5IGVtYmVkZGluZyBpdCBtYW51YWxseSBpbiB5b3VyIGluZGV4Lmh0bWwgPGhlYWQ+IHNlY3Rpb24gZm9yIGEgc2ltcGxlciBhcHAuXCIpO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWxTdHlsZS5pc1N0YXRpYykge1xuICAgICAgZ2xvYmFsU3R5bGUucmVuZGVyU3R5bGVzKGluc3RhbmNlLCBTVEFUSUNfRVhFQ1VUSU9OX0NPTlRFWFQsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjb250ZXh0ID0gX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIHRoZW1lOiBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIEdsb2JhbFN0eWxlQ29tcG9uZW50LmRlZmF1bHRQcm9wcylcbiAgICAgIH0pO1xuXG4gICAgICBnbG9iYWxTdHlsZS5yZW5kZXJTdHlsZXMoaW5zdGFuY2UsIGNvbnRleHQsIHN0eWxlU2hlZXQsIHN0eWxpcyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWxTdHlsZS5yZW1vdmVTdHlsZXMoaW5zdGFuY2UsIHN0eWxlU2hlZXQpO1xuICAgICAgfTtcbiAgICB9LCBFTVBUWV9BUlJBWSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gLy8gJEZsb3dGaXhNZVxuXG5cbiAgcmV0dXJuIFJlYWN0Lm1lbW8oR2xvYmFsU3R5bGVDb21wb25lbnQpO1xufVxuXG4vLyBcbmZ1bmN0aW9uIGtleWZyYW1lcyhzdHJpbmdzKSB7XG4gIC8qIFdhcm5pbmcgaWYgeW91J3ZlIHVzZWQga2V5ZnJhbWVzIG9uIFJlYWN0IE5hdGl2ZSAqL1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS53YXJuKCdga2V5ZnJhbWVzYCBjYW5ub3QgYmUgdXNlZCBvbiBSZWFjdE5hdGl2ZSwgb25seSBvbiB0aGUgd2ViLiBUbyBkbyBhbmltYXRpb24gaW4gUmVhY3ROYXRpdmUgcGxlYXNlIHVzZSBBbmltYXRlZC4nKTtcbiAgfVxuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBpbnRlcnBvbGF0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgaW50ZXJwb2xhdGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHJ1bGVzID0gY3NzLmFwcGx5KHZvaWQgMCwgW3N0cmluZ3NdLmNvbmNhdChpbnRlcnBvbGF0aW9ucykpLmpvaW4oJycpO1xuICB2YXIgbmFtZSA9IGdlbmVyYXRlQ29tcG9uZW50SWQocnVsZXMpO1xuICByZXR1cm4gbmV3IEtleWZyYW1lcyhuYW1lLCBbcnVsZXMsIG5hbWUsICdAa2V5ZnJhbWVzJ10pO1xufVxuXG52YXIgU2VydmVyU3R5bGVTaGVldCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNlcnZlclN0eWxlU2hlZXQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMuX2VtaXRTaGVldENTUyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjc3MgPSBfdGhpcy5pbnN0YW5jZS50b1N0cmluZygpO1xuXG4gICAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuICAgICAgdmFyIGF0dHJzID0gW25vbmNlICYmIFwibm9uY2U9XFxcIlwiICsgbm9uY2UgKyBcIlxcXCJcIiwgU0NfQVRUUiArIFwiPVxcXCJ0cnVlXFxcIlwiLCBTQ19BVFRSX1ZFUlNJT04gKyBcIj1cXFwiXCIgKyBTQ19WRVJTSU9OICsgXCJcXFwiXCJdO1xuICAgICAgdmFyIGh0bWxBdHRyID0gYXR0cnMuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJyAnKTtcbiAgICAgIHJldHVybiBcIjxzdHlsZSBcIiArIGh0bWxBdHRyICsgXCI+XCIgKyBjc3MgKyBcIjwvc3R5bGU+XCI7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U3R5bGVUYWdzID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLnNlYWxlZCkge1xuICAgICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcy5fZW1pdFNoZWV0Q1NTKCk7XG4gICAgfTtcblxuICAgIHRoaXMuZ2V0U3R5bGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9wcm9wcztcblxuICAgICAgaWYgKF90aGlzLnNlYWxlZCkge1xuICAgICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgICB9XG5cbiAgICAgIHZhciBwcm9wcyA9IChfcHJvcHMgPSB7fSwgX3Byb3BzW1NDX0FUVFJdID0gJycsIF9wcm9wc1tTQ19BVFRSX1ZFUlNJT05dID0gU0NfVkVSU0lPTiwgX3Byb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID0ge1xuICAgICAgICBfX2h0bWw6IF90aGlzLmluc3RhbmNlLnRvU3RyaW5nKClcbiAgICAgIH0sIF9wcm9wcyk7XG4gICAgICB2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXG4gICAgICBpZiAobm9uY2UpIHtcbiAgICAgICAgcHJvcHMubm9uY2UgPSBub25jZTtcbiAgICAgIH0gLy8gdjQgcmV0dXJuZWQgYW4gYXJyYXkgZm9yIHRoaXMgZm4sIHNvIHdlJ2xsIGRvIHRoZSBzYW1lIGZvciB2NSBmb3IgYmFja3dhcmQgY29tcGF0XG5cblxuICAgICAgcmV0dXJuIFsvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBrZXk6IFwic2MtMC0wXCJcbiAgICAgIH0pKV07XG4gICAgfTtcblxuICAgIHRoaXMuc2VhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNlYWxlZCA9IHRydWU7XG4gICAgfTtcblxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3R5bGVTaGVldCh7XG4gICAgICBpc1NlcnZlcjogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuc2VhbGVkID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmVyU3R5bGVTaGVldC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbGxlY3RTdHlsZXMgPSBmdW5jdGlvbiBjb2xsZWN0U3R5bGVzKGNoaWxkcmVuKSB7XG4gICAgaWYgKHRoaXMuc2VhbGVkKSB7XG4gICAgICByZXR1cm4gdGhyb3dTdHlsZWRDb21wb25lbnRzRXJyb3IoMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0eWxlU2hlZXRNYW5hZ2VyLCB7XG4gICAgICBzaGVldDogdGhpcy5pbnN0YW5jZVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgX3Byb3RvLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbSA9IGZ1bmN0aW9uIGludGVybGVhdmVXaXRoTm9kZVN0cmVhbShpbnB1dCkge1xuICAgIHtcbiAgICAgIHJldHVybiB0aHJvd1N0eWxlZENvbXBvbmVudHNFcnJvcigzKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNlcnZlclN0eWxlU2hlZXQ7XG59KCk7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IDxDb25maWc6IHsgdGhlbWU/OiBhbnkgfSwgSW5zdGFuY2U+KFxuLy8gIENvbXBvbmVudDogQWJzdHJhY3RDb21wb25lbnQ8Q29uZmlnLCBJbnN0YW5jZT5cbi8vICk6IEFic3RyYWN0Q29tcG9uZW50PCREaWZmPENvbmZpZywgeyB0aGVtZT86IGFueSB9PiAmIHsgdGhlbWU/OiBhbnkgfSwgSW5zdGFuY2U+XG4vL1xuLy8gYnV0IHRoZSBvbGQgYnVpbGQgc3lzdGVtIHRvb2xpbmcgZG9lc24ndCBzdXBwb3J0IHRoZSBzeW50YXhcblxudmFyIHdpdGhUaGVtZSA9IChmdW5jdGlvbiAoQ29tcG9uZW50KSB7XG4gIC8vICRGbG93Rml4TWUgVGhpcyBzaG91bGQgYmUgUmVhY3QuZm9yd2FyZFJlZjxDb25maWcsIEluc3RhbmNlPlxuICB2YXIgV2l0aFRoZW1lID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHZhciB0aGVtZSA9IHVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTsgLy8gJEZsb3dGaXhNZSBkZWZhdWx0UHJvcHMgaXNuJ3QgZGVjbGFyZWQgc28gaXQgY2FuIGJlIGluZmVycmFibGVcblxuICAgIHZhciBkZWZhdWx0UHJvcHMgPSBDb21wb25lbnQuZGVmYXVsdFByb3BzO1xuICAgIHZhciB0aGVtZVByb3AgPSBkZXRlcm1pbmVUaGVtZShwcm9wcywgdGhlbWUsIGRlZmF1bHRQcm9wcyk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0aGVtZVByb3AgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlt3aXRoVGhlbWVdIFlvdSBhcmUgbm90IHVzaW5nIGEgVGhlbWVQcm92aWRlciBub3IgcGFzc2luZyBhIHRoZW1lIHByb3Agb3IgYSB0aGVtZSBpbiBkZWZhdWx0UHJvcHMgaW4gY29tcG9uZW50IGNsYXNzIFxcXCJcIiArIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSArIFwiXFxcIlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIHRoZW1lOiB0aGVtZVByb3AsXG4gICAgICByZWY6IHJlZlxuICAgIH0pKTtcbiAgfSk7XG4gIGhvaXN0KFdpdGhUaGVtZSwgQ29tcG9uZW50KTtcbiAgV2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgKyBcIilcIjtcbiAgcmV0dXJuIFdpdGhUaGVtZTtcbn0pO1xuXG4vLyBcblxudmFyIHVzZVRoZW1lID0gZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG59O1xuXG4vLyBcbnZhciBfX1BSSVZBVEVfXyA9IHtcbiAgU3R5bGVTaGVldDogU3R5bGVTaGVldCxcbiAgbWFzdGVyU2hlZXQ6IG1hc3RlclNoZWV0XG59O1xuXG4vLyBcbi8qIERlZmluZSBidW5kbGUgdmVyc2lvbiBmb3IgZXhwb3J0ICovXG5cbnZhciB2ZXJzaW9uID0gXCI1LjEuMVwiO1xuLyogV2FybmluZyBpZiB5b3UndmUgaW1wb3J0ZWQgdGhpcyBmaWxlIG9uIFJlYWN0IE5hdGl2ZSAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5cIiArIFwiUGVyaGFwcyB5b3UncmUgbG9va2luZyB0byBpbXBvcnQgJ3N0eWxlZC1jb21wb25lbnRzL25hdGl2ZSc/XFxuXCIgKyAnUmVhZCBtb3JlIGFib3V0IHRoaXMgYXQgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYmFzaWNzI3JlYWN0LW5hdGl2ZScpO1xufVxuLyogV2FybmluZyBpZiB0aGVyZSBhcmUgc2V2ZXJhbCBpbnN0YW5jZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgKi9cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSA9IHdpbmRvd1snX19zdHlsZWQtY29tcG9uZW50cy1pbml0X18nXSB8fCAwO1xuXG4gIGlmICh3aW5kb3dbJ19fc3R5bGVkLWNvbXBvbmVudHMtaW5pdF9fJ10gPT09IDEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gXCIgKyAnVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgbm90IHJlbmRlcmluZyBwcm9wZXJseSwgZXJyb3JzIGhhcHBlbmluZyBkdXJpbmcgcmVoeWRyYXRpb24gcHJvY2VzcywgJyArICdtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGEgZ29vZCByZWFzb24uXFxuXFxuJyArICdTZWUgaHR0cHM6Ly9zLWMuc2gvMkJBWHplZCBmb3IgbW9yZSBpbmZvLicpO1xuICB9XG5cbiAgd2luZG93WydfX3N0eWxlZC1jb21wb25lbnRzLWluaXRfXyddICs9IDE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZDtcbmV4cG9ydCB7IFNlcnZlclN0eWxlU2hlZXQsIFN0eWxlU2hlZXRDb25zdW1lciwgU3R5bGVTaGVldENvbnRleHQsIFN0eWxlU2hlZXRNYW5hZ2VyLCBUaGVtZUNvbnN1bWVyLCBUaGVtZUNvbnRleHQsIFRoZW1lUHJvdmlkZXIsIF9fUFJJVkFURV9fLCBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzLCBpc1N0eWxlZENvbXBvbmVudCwga2V5ZnJhbWVzLCB1c2VUaGVtZSwgdmVyc2lvbiwgd2l0aFRoZW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmVzbS5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQ29pbkNvbnRhaW5lciwgQ29pbkRhdGEgfSBmcm9tIFwiLi9zdHlsZXMuanNcIlxyXG52YXIgbnVtZXJhbCA9IHJlcXVpcmUoJ251bWVyYWwnKVxyXG5cclxuZnVuY3Rpb24gdXNlU3RhdHMoKSB7XHJcbiAgICBjb25zdCBbc3RhdHMsIHNldFN0YXRzXSA9IHVzZVN0YXRlKCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZldGNoaW5nIGRhdGEnKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9tYXJrZXRzP3ZzX2N1cnJlbmN5PXVzZCcpLnRoZW4ocmVzID0+IHJlcy5qc29uKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgc2V0U3RhdHMoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgICAgIFxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gc3RhdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN0YXRzKCkge1xyXG4gICAgY29uc3Qgc3RhdHMgPSB1c2VTdGF0cygpO1xyXG4gICAgaWYoIXN0YXRzKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0cylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3RhdEJsb2NrJz5cclxuICAgICAgICAgICAgICAgIHtzdGF0cy5tYXAoY29pbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvaW5Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6ICcyNXB4JywgaGVpZ2h0OiAnYXV0byd9fSBzcmM9e2NvaW4uaW1hZ2V9PjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvaW5EYXRhPntjb2luLm5hbWV9PC9Db2luRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2luRGF0YT57Y29pbi5zeW1ib2x9PC9Db2luRGF0YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2luRGF0YT57Y29pbi5jdXJyZW50X3ByaWNlfTwvQ29pbkRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29pbkRhdGE+e251bWVyYWwoY29pbi5jaXJjdWxhdGluZ19zdXBwbHkpLmZvcm1hdCgpfTwvQ29pbkRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29pbkRhdGE+e251bWVyYWwoY29pbi5tYXJrZXRfY2FwKS5mb3JtYXQoJyQwLDBbLl0wMCcpfTwvQ29pbkRhdGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29pbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlBvd2VyZWQgYnkgPGEgaHJlZj0naHR0cHM6Ly93d3cuY29pbmdlY2tvLmNvbS9lbi9hcGkjZXhwbG9yZS1hcGknPkNvaW5HZWNrbyBBUEk8L2E+PC9wPlxyXG4gICAgICAgICAgICA8U3RhdHM+PC9TdGF0cz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29pbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbjogMTBweDtcclxuYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlM1xyXG5gO1xyXG5cclxuY29uc3QgQ29pbkRhdGEgPSBzdHlsZWQuZGl2YFxyXG5mb250OiByb2JvdG87XHJcbm1hcmdpbi1yaWdodDogMzBweFxyXG5gO1xyXG5cclxuZXhwb3J0IHtcclxuICAgIENvaW5Db250YWluZXIsXHJcbiAgICBDb2luRGF0YVxyXG59ICIsIm1vZHVsZS5leHBvcnRzID0gZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1OyJdLCJzb3VyY2VSb290IjoiIn0=