"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3131],
  {
    491: (e, t, n) => {
      n.d(t, { $: () => s });
      var r = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        o = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        a = /^(data-.*)$/,
        i = /^(aria-.*)$/,
        l = /^(on[A-Z].*)$/;
      function s(e, t = {}) {
        let {
            labelable: n = !0,
            enabled: d = !0,
            propNames: u,
            omitPropNames: c,
            omitEventNames: f,
            omitDataProps: p,
            omitEventProps: g,
          } = t,
          v = {};
        if (!d) return e;
        for (let t in e)
          !(
            (null == c ? void 0 : c.has(t)) ||
            ((null == f ? void 0 : f.has(t)) && l.test(t)) ||
            (l.test(t) && !o.has(t)) ||
            (p && a.test(t)) ||
            (g && l.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (r.has(t) ||
                (n && i.test(t)) ||
                (null == u ? void 0 : u.has(t)) ||
                a.test(t))) ||
              l.test(t)) &&
            (v[t] = e[t]);
        return v;
      }
    },
    3096: (e, t, n) => {
      n.d(t, { Wx: () => u });
      var r = n(12115),
        o = Object.defineProperty,
        a = (e, t, n) =>
          t in e
            ? o(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        i = new Map(),
        l = new WeakMap(),
        s = 0,
        d = void 0;
      function u() {
        var e;
        let {
            threshold: t,
            delay: n,
            trackVisibility: o,
            rootMargin: a,
            root: u,
            triggerOnce: c,
            skip: f,
            initialInView: p,
            fallbackInView: g,
            onChange: v,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [m, h] = r.useState(null),
          b = r.useRef(),
          [y, w] = r.useState({ inView: !!p, entry: void 0 });
        (b.current = v),
          r.useEffect(() => {
            let e;
            if (!f && m)
              return (
                (e = (function (e, t) {
                  let n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : d;
                  if (void 0 === window.IntersectionObserver && void 0 !== r) {
                    let o = e.getBoundingClientRect();
                    return (
                      t(r, {
                        isIntersecting: r,
                        target: e,
                        intersectionRatio:
                          "number" == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: o,
                        intersectionRect: o,
                        rootBounds: o,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: o,
                      observer: a,
                      elements: u,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var n;
                            return ""
                              .concat(t, "_")
                              .concat(
                                "root" === t
                                  ? (n = e.root)
                                    ? (l.has(n) ||
                                        ((s += 1), l.set(n, s.toString())),
                                      l.get(n))
                                    : "0"
                                  : e[t]
                              );
                          })
                          .toString(),
                        n = i.get(t);
                      if (!n) {
                        let r;
                        let o = new Map(),
                          a = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var n;
                              let a =
                                t.isIntersecting &&
                                r.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = a),
                                null == (n = o.get(t.target)) ||
                                  n.forEach((e) => {
                                    e(a, t);
                                  });
                            });
                          }, e);
                        (r =
                          a.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: a, elements: o }),
                          i.set(t, n);
                      }
                      return n;
                    })(n),
                    c = u.get(e) || [];
                  return (
                    u.has(e) || u.set(e, c),
                    c.push(t),
                    a.observe(e),
                    function () {
                      c.splice(c.indexOf(t), 1),
                        0 === c.length && (u.delete(e), a.unobserve(e)),
                        0 === u.size && (a.disconnect(), i.delete(o));
                    }
                  );
                })(
                  m,
                  (t, n) => {
                    w({ inView: t, entry: n }),
                      b.current && b.current(t, n),
                      n.isIntersecting && c && e && (e(), (e = void 0));
                  },
                  {
                    root: u,
                    rootMargin: a,
                    threshold: t,
                    trackVisibility: o,
                    delay: n,
                  },
                  g
                )),
                () => {
                  e && e();
                }
              );
          }, [Array.isArray(t) ? t.toString() : t, m, u, a, c, f, o, g, n]);
        let E = null == (e = y.entry) ? void 0 : e.target,
          x = r.useRef();
        m ||
          !E ||
          c ||
          f ||
          x.current === E ||
          ((x.current = E), w({ inView: !!p, entry: void 0 }));
        let k = [h, y.inView, y.entry];
        return (k.ref = k[0]), (k.inView = k[1]), (k.entry = k[2]), k;
      }
      r.Component;
    },
    9577: (e, t, n) => {
      n.d(t, { C: () => en });
      var r,
        o = n(99216),
        a = n(12115),
        i = n(56973),
        l = function () {
          return (l =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function s(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var d =
          ("function" == typeof SuppressedError && SuppressedError,
          "right-scroll-bar-position"),
        u = "width-before-scroll-bar";
      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var f = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        p = new WeakMap();
      function g(e) {
        return e;
      }
      var v = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            a =
              ((t = null),
              void 0 === n && (n = g),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    (r = []), t.forEach(e);
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    (r = []), n.forEach(e), (t = r);
                  }
                  var a = function () {
                      var n = t;
                      (t = []), n.forEach(e);
                    },
                    i = function () {
                      return Promise.resolve().then(a);
                    };
                  i(),
                    (r = {
                      push: function (e) {
                        t.push(e), i();
                      },
                      filter: function (e) {
                        return (t = t.filter(e)), r;
                      },
                    });
                },
              });
          return (a.options = l({ async: !0, ssr: !1 }, e)), a;
        })(),
        m = function () {},
        h = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            d = a.useRef(null),
            u = a.useState({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: m,
            }),
            g = u[0],
            h = u[1],
            b = e.forwardProps,
            y = e.children,
            w = e.className,
            E = e.removeScrollBar,
            x = e.enabled,
            k = e.shards,
            L = e.sideCar,
            T = e.noIsolation,
            C = e.inert,
            P = e.allowPinchZoom,
            M = e.as,
            S = e.gapMode,
            O = s(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            F =
              ((n = [d, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return c(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              f(
                function () {
                  var e = p.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || c(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || c(e, o);
                      });
                  }
                  p.set(i, n);
                },
                [n]
              ),
              i),
            N = l(l({}, O), g);
          return a.createElement(
            a.Fragment,
            null,
            x &&
              a.createElement(L, {
                sideCar: v,
                removeScrollBar: E,
                shards: k,
                noIsolation: T,
                inert: C,
                setCallbacks: h,
                allowPinchZoom: !!P,
                lockRef: d,
                gapMode: S,
              }),
            b
              ? a.cloneElement(a.Children.only(y), l(l({}, N), { ref: F }))
              : a.createElement(
                  void 0 === M ? "div" : M,
                  l({}, N, { className: w, ref: F }),
                  y
                )
          );
        });
      (h.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (h.classNames = { fullWidth: u, zeroRight: d });
      var b = function (e) {
        var t = e.sideCar,
          n = s(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, l({}, n));
      };
      b.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var a, i;
                (a = t).styleSheet
                  ? (a.styleSheet.cssText = o)
                  : a.appendChild(document.createTextNode(o)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = y();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        E = function () {
          var e = w();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        x = { left: 0, top: 0, right: 0, gap: 0 },
        k = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        L = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [k(n), k(r), k(o)];
        },
        T = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return x;
          var t = L(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        C = E(),
        P = "data-scroll-locked",
        M = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(P, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        i,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(d, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(d, " .")
              .concat(d, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(P, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        S = function () {
          var e = parseInt(document.body.getAttribute(P) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        O = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(P, (S() + 1).toString()),
              function () {
                var e = S() - 1;
                e <= 0
                  ? document.body.removeAttribute(P)
                  : document.body.setAttribute(P, e.toString());
              }
            );
          }, []);
        },
        F = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          O();
          var i = a.useMemo(
            function () {
              return T(o);
            },
            [o]
          );
          return a.createElement(C, {
            styles: M(i, !t, o, n ? "" : "!important"),
          });
        },
        N = !1;
      if ("undefined" != typeof window)
        try {
          var R = Object.defineProperty({}, "passive", {
            get: function () {
              return (N = !0), !0;
            },
          });
          window.addEventListener("test", R, R),
            window.removeEventListener("test", R, R);
        } catch (e) {
          N = !1;
        }
      var H = !!N && { passive: !1 },
        I = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        A = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              D(e, r))
            ) {
              var o = z(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        D = function (e, t) {
          return "v" === e ? I(t, "overflowY") : I(t, "overflowX");
        },
        z = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        W = function (e, t, n, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === a ? -1 : 1),
            l = i * r,
            s = n.target,
            d = t.contains(s),
            u = !1,
            c = l > 0,
            f = 0,
            p = 0;
          do {
            var g = z(e, s),
              v = g[0],
              m = g[1] - g[2] - i * v;
            (v || m) && D(e, s) && ((f += m), (p += v)),
              (s = s instanceof ShadowRoot ? s.host : s.parentNode);
          } while (
            (!d && s !== document.body) ||
            (d && (t.contains(s) || t === s))
          );
          return (
            c && ((o && 1 > Math.abs(f)) || (!o && l > f))
              ? (u = !0)
              : !c && ((o && 1 > Math.abs(p)) || (!o && -l > p)) && (u = !0),
            u
          );
        },
        j = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        B = function (e) {
          return [e.deltaX, e.deltaY];
        },
        _ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        V = 0,
        G = [];
      let K =
        (v.useMedium(function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(V++)[0],
            i = a.useState(E)[0],
            l = a.useRef(e);
          a.useEffect(
            function () {
              l.current = e;
            },
            [e]
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, a = t.length; o < a; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(_), !0).filter(
                    Boolean
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(o)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var s = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                a = j(e),
                i = n.current,
                s = "deltaX" in e ? e.deltaX : i[0] - a[0],
                d = "deltaY" in e ? e.deltaY : i[1] - a[1],
                u = e.target,
                c = Math.abs(s) > Math.abs(d) ? "h" : "v";
              if ("touches" in e && "h" === c && "range" === u.type) return !1;
              var f = A(c, u);
              if (!f) return !0;
              if (
                (f ? (o = c) : ((o = "v" === c ? "h" : "v"), (f = A(c, u))), !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (s || d) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return W(p, t, e, "h" === p ? s : d, !0);
            }, []),
            d = a.useCallback(function (e) {
              if (G.length && G[G.length - 1] === i) {
                var n = "deltaY" in e ? B(e) : j(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(_)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? s(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            u = a.useCallback(function (e, n, r, o) {
              var a = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(a),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== a;
                  });
                }, 1);
            }, []),
            c = a.useCallback(function (e) {
              (n.current = j(e)), (r.current = void 0);
            }, []),
            f = a.useCallback(function (t) {
              u(t.type, B(t), t.target, s(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              u(t.type, j(t), t.target, s(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              G.push(i),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", d, H),
              document.addEventListener("touchmove", d, H),
              document.addEventListener("touchstart", c, H),
              function () {
                (G = G.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", d, H),
                  document.removeEventListener("touchmove", d, H),
                  document.removeEventListener("touchstart", c, H);
              }
            );
          }, []);
          var g = e.removeScrollBar,
            v = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            v
              ? a.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            g ? a.createElement(F, { gapMode: e.gapMode }) : null
          );
        }),
        b);
      var Y = a.forwardRef(function (e, t) {
        return a.createElement(h, l({}, e, { ref: t, sideCar: K }));
      });
      Y.classNames = h.classNames;
      var X = n(72244),
        $ = n(9057),
        U = n(51251),
        q = n(53441),
        Z = n(14356),
        J = n(25981),
        Q = n(523),
        ee = n(95155),
        et = (0, i.Rf)((e, t) => {
          let { as: n, children: r, className: i, ...l } = e,
            {
              Component: s,
              isOpen: d,
              placement: u,
              backdrop: c,
              motionProps: f,
              disableAnimation: p,
              shouldBlockScroll: g,
              getPopoverProps: v,
              getDialogProps: m,
              getBackdropProps: h,
              getContentProps: b,
              isNonModal: y,
              onClose: w,
            } = (0, o.C)(),
            E = (0, a.useRef)(null),
            { dialogProps: x, titleProps: k } = (0, Q.s)({}, E),
            L = m({ ref: E, ...x, ...l }),
            T = (0, ee.jsxs)(ee.Fragment, {
              children: [
                !y && (0, ee.jsx)(X.R, { onDismiss: w }),
                (0, ee.jsx)(n || s || "div", {
                  ...L,
                  children: (0, ee.jsx)("div", {
                    ...b({ className: i }),
                    children: "function" == typeof r ? r(k) : r,
                  }),
                }),
                (0, ee.jsx)(X.R, { onDismiss: w }),
              ],
            }),
            C = (0, a.useMemo)(
              () =>
                "transparent" === c
                  ? null
                  : p
                  ? (0, ee.jsx)("div", { ...h() })
                  : (0, ee.jsx)(U.F, {
                      features: q.l,
                      children: (0, ee.jsx)(Z.m.div, {
                        animate: "enter",
                        exit: "exit",
                        initial: "exit",
                        variants: $.zF.fade,
                        ...h(),
                      }),
                    }),
              [c, p, h]
            ),
            P = (0, ee.jsx)(Y, {
              enabled: g && d,
              removeScrollBar: !1,
              children: p
                ? T
                : (0, ee.jsx)(U.F, {
                    features: q.l,
                    children: (0, ee.jsx)(Z.m.div, {
                      animate: "enter",
                      exit: "exit",
                      initial: "initial",
                      style: { ...(0, J.kn)("center" === u ? "top" : u) },
                      variants: $.zF.scaleSpringOpacity,
                      ...f,
                      children: T,
                    }),
                  }),
            });
          return (0, ee.jsxs)("div", { ...v(), children: [C, P] });
        });
      et.displayName = "NextUI.PopoverContent";
      var en = et;
    },
    10255: (e, t, n) => {
      function r(e) {
        let { moduleIds: t } = e;
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(95155),
        n(47650),
        n(85744),
        n(20589);
    },
    17828: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, n(64054).createAsyncLocalStorage)();
    },
    25981: (e, t, n) => {
      n.d(t, { Fh: () => i, VO: () => o, kn: () => r, p8: () => a });
      var r = (e) => {
          let t = {
            top: { originY: 1 },
            bottom: { originY: 0 },
            left: { originX: 1 },
            right: { originX: 0 },
            "top-start": { originX: 0, originY: 1 },
            "top-end": { originX: 1, originY: 1 },
            "bottom-start": { originX: 0, originY: 0 },
            "bottom-end": { originX: 1, originY: 0 },
            "right-start": { originX: 0, originY: 0 },
            "right-end": { originX: 0, originY: 1 },
            "left-start": { originX: 1, originY: 0 },
            "left-end": { originX: 1, originY: 1 },
          };
          return (null == t ? void 0 : t[e]) || {};
        },
        o = (e) =>
          ({
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right",
            "top-start": "top start",
            "top-end": "top end",
            "bottom-start": "bottom start",
            "bottom-end": "bottom end",
            "left-start": "left top",
            "left-end": "left bottom",
            "right-start": "right top",
            "right-end": "right bottom",
          }[e]),
        a = (e, t) => {
          if (t.includes("-")) {
            let [n] = t.split("-");
            if (n.includes(e)) return !1;
          }
          return !0;
        },
        i = (e, t) => {
          if (t.includes("-")) {
            let [, n] = t.split("-");
            return "".concat(e, "-").concat(n);
          }
          return e;
        };
    },
    27132: (e, t, n) => {
      n.d(t, { a: () => o, o: () => a });
      var r = n(12115);
      let o = new WeakMap();
      function a(e) {
        let { triggerRef: t, isOpen: n, onClose: a } = e;
        (0, r.useEffect)(() => {
          if (!n || null === a) return;
          let e = (e) => {
            let n = e.target;
            if (!t.current || (n instanceof Node && !n.contains(t.current)))
              return;
            let r = a || o.get(t.current);
            r && r();
          };
          return (
            window.addEventListener("scroll", e, !0),
            () => {
              window.removeEventListener("scroll", e, !0);
            }
          );
        }, [n, a, t]);
      }
    },
    27905: (e, t, n) => {
      n.d(t, { U: () => o });
      var r = n(12115),
        o = (null == globalThis ? void 0 : globalThis.document)
          ? r.useLayoutEffect
          : r.useEffect;
    },
    35680: (e, t, n) => {
      n.d(t, { k: () => r });
      var r = {
        solid: {
          default: "bg-default text-default-foreground",
          primary: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-secondary-foreground",
          success: "bg-success text-success-foreground",
          warning: "bg-warning text-warning-foreground",
          danger: "bg-danger text-danger-foreground",
          foreground: "bg-foreground text-background",
        },
        shadow: {
          default:
            "shadow-lg shadow-default/50 bg-default text-default-foreground",
          primary:
            "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
          secondary:
            "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
          success:
            "shadow-lg shadow-success/40 bg-success text-success-foreground",
          warning:
            "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
          danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
          foreground:
            "shadow-lg shadow-foreground/40 bg-foreground text-background",
        },
        bordered: {
          default: "bg-transparent border-default text-foreground",
          primary: "bg-transparent border-primary text-primary",
          secondary: "bg-transparent border-secondary text-secondary",
          success: "bg-transparent border-success text-success",
          warning: "bg-transparent border-warning text-warning",
          danger: "bg-transparent border-danger text-danger",
          foreground: "bg-transparent border-foreground text-foreground",
        },
        flat: {
          default: "bg-default/40 text-default-700",
          primary: "bg-primary/20 text-primary-700",
          secondary: "bg-secondary/20 text-secondary-700",
          success: "bg-success/20 text-success-800 dark:text-success",
          warning: "bg-warning/20 text-warning-800 dark:text-warning",
          danger: "bg-danger/20 text-danger-800 dark:text-danger-500",
          foreground: "bg-foreground/10 text-foreground",
        },
        faded: {
          default: "border-default bg-default-100 text-default-foreground",
          primary: "border-default bg-default-100 text-primary",
          secondary: "border-default bg-default-100 text-secondary",
          success: "border-default bg-default-100 text-success",
          warning: "border-default bg-default-100 text-warning",
          danger: "border-default bg-default-100 text-danger",
          foreground: "border-default bg-default-100 text-foreground",
        },
        light: {
          default: "bg-transparent text-default-foreground",
          primary: "bg-transparent text-primary",
          secondary: "bg-transparent text-secondary",
          success: "bg-transparent text-success",
          warning: "bg-transparent text-warning",
          danger: "bg-transparent text-danger",
          foreground: "bg-transparent text-foreground",
        },
        ghost: {
          default: "border-default text-default-foreground",
          primary: "border-primary text-primary",
          secondary: "border-secondary text-secondary",
          success: "border-success text-success",
          warning: "border-warning text-warning",
          danger: "border-danger text-danger",
          foreground: "border-foreground text-foreground hover:!bg-foreground",
        },
      };
    },
    55075: (e, t, n) => {
      n.d(t, { W: () => c });
      var r = n(30502),
        o = n(87826),
        a = n(21799),
        i = n(12115),
        l = n(660),
        s = n(87418);
      function d(e) {
        if (!e) return;
        let t = !0;
        return (n) => {
          e({
            ...n,
            preventDefault() {
              n.preventDefault();
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              console.error(
                "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
              );
            },
            continuePropagation() {
              t = !1;
            },
          }),
            t && n.stopPropagation();
        };
      }
      let u = i.createContext(null);
      function c(e, t) {
        let { focusProps: n } = (function (e) {
            let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: o } = e,
              a = (0, i.useCallback)(
                (e) => {
                  if (e.target === e.currentTarget)
                    return r && r(e), o && o(!1), !0;
                },
                [r, o]
              ),
              d = (0, l.y)(a),
              u = (0, i.useCallback)(
                (e) => {
                  let t = (0, s.T)(e.target);
                  e.target === e.currentTarget &&
                    t.activeElement === e.target &&
                    (n && n(e), o && o(!0), d(e));
                },
                [o, n, d]
              );
            return {
              focusProps: {
                onFocus: !t && (n || o || r) ? u : void 0,
                onBlur: !t && (r || o) ? a : void 0,
              },
            };
          })(e),
          { keyboardProps: c } = {
            keyboardProps: e.isDisabled
              ? {}
              : { onKeyDown: d(e.onKeyDown), onKeyUp: d(e.onKeyUp) },
          },
          f = (0, a.v)(n, c),
          p = (function (e) {
            let t = (0, i.useContext)(u) || {};
            (0, o.w)(t, e);
            let { ref: n, ...r } = t;
            return r;
          })(t),
          g = e.isDisabled ? {} : p,
          v = (0, i.useRef)(e.autoFocus);
        return (
          (0, i.useEffect)(() => {
            v.current && t.current && (0, r.l)(t.current), (v.current = !1);
          }, [t]),
          {
            focusableProps: (0, a.v)(
              {
                ...f,
                tabIndex: e.excludeFromTabOrder && !e.isDisabled ? -1 : void 0,
              },
              g
            ),
          }
        );
      }
    },
    55414: (e, t, n) => {
      n.d(t, { T: () => ei });
      var r = n(99216),
        o = n(12115),
        a = n(56973),
        i = (e, t) => {
          var n;
          let r = [];
          return [
            null ==
            (n = o.Children.map(e, (e) =>
              (0, o.isValidElement)(e) && e.type === t ? (r.push(e), null) : e
            ))
              ? void 0
              : n.filter(Boolean),
            r.length >= 0 ? r : void 0,
          ];
        },
        l = n(90129),
        [s, d] = (0, n(42810).q)({ name: "ButtonGroupContext", strict: !1 }),
        u = n(75894),
        c = n(672);
      let f = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        p = (e) =>
          e && "window" in e && e.window === e ? e : f(e).defaultView || window,
        g = null,
        v = new Set(),
        m = new Map(),
        h = !1,
        b = !1,
        y = { Tab: !0, Escape: !0 };
      function w(e, t) {
        for (let n of v) n(e, t);
      }
      function E(e) {
        var t, n;
        if (
          ((h = !0),
          !(
            e.metaKey ||
            ((t = /^Mac/i),
            !(
              "undefined" != typeof window &&
              null != window.navigator &&
              t.test(
                (null === (n = window.navigator.userAgentData) || void 0 === n
                  ? void 0
                  : n.platform) || window.navigator.platform
              )
            ) && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key
          ))
        )
          (g = "keyboard"), w("keyboard", e);
      }
      function x(e) {
        (g = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((h = !0), w("pointer", e));
      }
      function k(e) {
        var t, n;
        if (
          (0 === e.mozInputSource && e.isTrusted) ||
          (((t = /Android/i),
          "undefined" != typeof window &&
            null != window.navigator &&
            ((null === (n = window.navigator.userAgentData) || void 0 === n
              ? void 0
              : n.brands.some((e) => t.test(e.brand))) ||
              t.test(window.navigator.userAgent)) &&
            e.pointerType)
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        )
          (h = !0), (g = "virtual");
      }
      function L(e) {
        e.target !== window &&
          e.target !== document &&
          (h || b || ((g = "virtual"), w("virtual", e)), (h = !1), (b = !1));
      }
      function T() {
        (h = !1), (b = !0);
      }
      function C(e) {
        if ("undefined" == typeof window || m.get(p(e))) return;
        let t = p(e),
          n = f(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (h = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", E, !0),
          n.addEventListener("keyup", E, !0),
          n.addEventListener("click", k, !0),
          t.addEventListener("focus", L, !0),
          t.addEventListener("blur", T, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", x, !0),
              n.addEventListener("pointermove", x, !0),
              n.addEventListener("pointerup", x, !0))
            : (n.addEventListener("mousedown", x, !0),
              n.addEventListener("mousemove", x, !0),
              n.addEventListener("mouseup", x, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              P(e);
            },
            { once: !0 }
          ),
          m.set(t, { focus: r });
      }
      let P = (e, t) => {
        let n = p(e),
          r = f(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          m.has(n) &&
            ((n.HTMLElement.prototype.focus = m.get(n).focus),
            r.removeEventListener("keydown", E, !0),
            r.removeEventListener("keyup", E, !0),
            r.removeEventListener("click", k, !0),
            n.removeEventListener("focus", L, !0),
            n.removeEventListener("blur", T, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", x, !0),
                r.removeEventListener("pointermove", x, !0),
                r.removeEventListener("pointerup", x, !0))
              : (r.removeEventListener("mousedown", x, !0),
                r.removeEventListener("mousemove", x, !0),
                r.removeEventListener("mouseup", x, !0)),
            m.delete(n));
      };
      function M() {
        return "pointer" !== g;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = f(void 0);
          "loading" !== n.readyState
            ? C(void 0)
            : ((t = () => {
                C(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => P(e, t);
        })();
      let S = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        O = "undefined" != typeof document ? o.useLayoutEffect : () => {};
      class F {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function N(e) {
        let t = (0, o.useRef)({ isFocused: !1, observer: null });
        O(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (function (e) {
          let t = (0, o.useRef)(null);
          return (
            O(() => {
              t.current = e;
            }, [e]),
            (0, o.useCallback)((...e) => {
              let n = t.current;
              return null == n ? void 0 : n(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, o.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let r = e.target;
              r.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    r.disabled && n(new F("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let n =
                      r === document.activeElement
                        ? null
                        : document.activeElement;
                    r.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: n })
                    ),
                      r.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: n,
                        })
                      );
                  }
                })),
                t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [n]
        );
      }
      function R(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t);
        };
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      let H = new Map(),
        I = function () {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var a = t.length;
                    for (n = 0; n < a; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  } else for (r in t) t[r] && (o && (o += " "), (o += r));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        };
      var A = n(6548),
        D = n(491),
        z = n(35680),
        W = n(12184),
        j = n(9426),
        B = (0, W.tv)({
          base: [
            "z-0",
            "group",
            "relative",
            "inline-flex",
            "items-center",
            "justify-center",
            "box-border",
            "appearance-none",
            "outline-none",
            "select-none",
            "whitespace-nowrap",
            "min-w-max",
            "font-normal",
            "subpixel-antialiased",
            "overflow-hidden",
            "tap-highlight-transparent",
            "data-[pressed=true]:scale-[0.97]",
            ...j.zb,
          ],
          variants: {
            variant: {
              solid: "",
              bordered: "border-medium bg-transparent",
              light: "bg-transparent",
              flat: "",
              faded: "border-medium",
              shadow: "",
              ghost: "border-medium bg-transparent",
            },
            size: {
              sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
              md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
              lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
            },
            color: {
              default: "",
              primary: "",
              secondary: "",
              success: "",
              warning: "",
              danger: "",
            },
            radius: {
              none: "rounded-none",
              sm: "rounded-small",
              md: "rounded-medium",
              lg: "rounded-large",
              full: "rounded-full",
            },
            fullWidth: { true: "w-full" },
            isDisabled: { true: "opacity-disabled pointer-events-none" },
            isInGroup: {
              true: "[&:not(:first-child):not(:last-child)]:rounded-none",
            },
            isIconOnly: {
              true: "px-0 !gap-0",
              false: "[&>svg]:max-w-[theme(spacing.8)]",
            },
            disableAnimation: {
              true: "!transition-none data-[pressed=true]:scale-100",
              false:
                "transition-transform-colors-opacity motion-reduce:transition-none",
            },
          },
          defaultVariants: {
            size: "md",
            variant: "solid",
            color: "default",
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1,
          },
          compoundVariants: [
            { variant: "solid", color: "default", class: z.k.solid.default },
            { variant: "solid", color: "primary", class: z.k.solid.primary },
            {
              variant: "solid",
              color: "secondary",
              class: z.k.solid.secondary,
            },
            { variant: "solid", color: "success", class: z.k.solid.success },
            { variant: "solid", color: "warning", class: z.k.solid.warning },
            { variant: "solid", color: "danger", class: z.k.solid.danger },
            { variant: "shadow", color: "default", class: z.k.shadow.default },
            { variant: "shadow", color: "primary", class: z.k.shadow.primary },
            {
              variant: "shadow",
              color: "secondary",
              class: z.k.shadow.secondary,
            },
            { variant: "shadow", color: "success", class: z.k.shadow.success },
            { variant: "shadow", color: "warning", class: z.k.shadow.warning },
            { variant: "shadow", color: "danger", class: z.k.shadow.danger },
            {
              variant: "bordered",
              color: "default",
              class: z.k.bordered.default,
            },
            {
              variant: "bordered",
              color: "primary",
              class: z.k.bordered.primary,
            },
            {
              variant: "bordered",
              color: "secondary",
              class: z.k.bordered.secondary,
            },
            {
              variant: "bordered",
              color: "success",
              class: z.k.bordered.success,
            },
            {
              variant: "bordered",
              color: "warning",
              class: z.k.bordered.warning,
            },
            {
              variant: "bordered",
              color: "danger",
              class: z.k.bordered.danger,
            },
            { variant: "flat", color: "default", class: z.k.flat.default },
            { variant: "flat", color: "primary", class: z.k.flat.primary },
            { variant: "flat", color: "secondary", class: z.k.flat.secondary },
            { variant: "flat", color: "success", class: z.k.flat.success },
            { variant: "flat", color: "warning", class: z.k.flat.warning },
            { variant: "flat", color: "danger", class: z.k.flat.danger },
            { variant: "faded", color: "default", class: z.k.faded.default },
            { variant: "faded", color: "primary", class: z.k.faded.primary },
            {
              variant: "faded",
              color: "secondary",
              class: z.k.faded.secondary,
            },
            { variant: "faded", color: "success", class: z.k.faded.success },
            { variant: "faded", color: "warning", class: z.k.faded.warning },
            { variant: "faded", color: "danger", class: z.k.faded.danger },
            {
              variant: "light",
              color: "default",
              class: [z.k.light.default, "data-[hover=true]:bg-default/40"],
            },
            {
              variant: "light",
              color: "primary",
              class: [z.k.light.primary, "data-[hover=true]:bg-primary/20"],
            },
            {
              variant: "light",
              color: "secondary",
              class: [z.k.light.secondary, "data-[hover=true]:bg-secondary/20"],
            },
            {
              variant: "light",
              color: "success",
              class: [z.k.light.success, "data-[hover=true]:bg-success/20"],
            },
            {
              variant: "light",
              color: "warning",
              class: [z.k.light.warning, "data-[hover=true]:bg-warning/20"],
            },
            {
              variant: "light",
              color: "danger",
              class: [z.k.light.danger, "data-[hover=true]:bg-danger/20"],
            },
            {
              variant: "ghost",
              color: "default",
              class: [z.k.ghost.default, "data-[hover=true]:!bg-default"],
            },
            {
              variant: "ghost",
              color: "primary",
              class: [
                z.k.ghost.primary,
                "data-[hover=true]:!bg-primary data-[hover=true]:!text-primary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "secondary",
              class: [
                z.k.ghost.secondary,
                "data-[hover=true]:!bg-secondary data-[hover=true]:!text-secondary-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "success",
              class: [
                z.k.ghost.success,
                "data-[hover=true]:!bg-success data-[hover=true]:!text-success-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "warning",
              class: [
                z.k.ghost.warning,
                "data-[hover=true]:!bg-warning data-[hover=true]:!text-warning-foreground",
              ],
            },
            {
              variant: "ghost",
              color: "danger",
              class: [
                z.k.ghost.danger,
                "data-[hover=true]:!bg-danger !text-danger-foreground",
              ],
            },
            {
              isInGroup: !0,
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              size: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              isRounded: !0,
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              radius: "none",
              class: "rounded-none first:rounded-s-none last:rounded-e-none",
            },
            {
              isInGroup: !0,
              radius: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              radius: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              radius: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              radius: "full",
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "default",
              className: j.oT.default,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "primary",
              className: j.oT.primary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "secondary",
              className: j.oT.secondary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "success",
              className: j.oT.success,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "warning",
              className: j.oT.warning,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "danger",
              className: j.oT.danger,
            },
            { isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
            { isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
            { isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
            {
              variant: ["solid", "faded", "flat", "bordered", "shadow"],
              class: "data-[hover=true]:opacity-hover",
            },
          ],
        });
      (0, W.tv)({
        base: "inline-flex items-center justify-center h-auto",
        variants: { fullWidth: { true: "w-full" } },
        defaultVariants: { fullWidth: !1 },
      });
      let _ = !1,
        V = 0;
      function G() {
        (_ = !0),
          setTimeout(() => {
            _ = !1;
          }, 50);
      }
      function K(e) {
        "touch" === e.pointerType && G();
      }
      function Y() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", K)
              : document.addEventListener("touchend", G),
            V++,
            () => {
              --V > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", K)
                  : document.removeEventListener("touchend", G));
            }
          );
      }
      var X = n(63416),
        $ = (0, W.tv)({
          slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            circle1: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "animate-spinner-ease-spin",
              "border-2",
              "border-solid",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            circle2: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "opacity-75",
              "animate-spinner-linear-spin",
              "border-2",
              "border-dotted",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            label: "text-foreground dark:text-foreground-dark font-regular",
          },
          variants: {
            size: {
              sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                label: "text-small",
              },
              md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-medium",
              },
              lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-large",
              },
            },
            color: {
              current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
              },
              white: { circle1: "border-b-white", circle2: "border-b-white" },
              default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
              },
              primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
              },
              secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
              },
              success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
              },
              warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
              },
              danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
              },
            },
            labelColor: {
              foreground: { label: "text-foreground" },
              primary: { label: "text-primary" },
              secondary: { label: "text-secondary" },
              success: { label: "text-success" },
              warning: { label: "text-warning" },
              danger: { label: "text-danger" },
            },
          },
          defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground",
          },
        }),
        U = n(5712),
        q = n(95155),
        Z = (0, a.Rf)((e, t) => {
          let {
            slots: n,
            classNames: r,
            label: i,
            getSpinnerProps: l,
          } = (function (e) {
            let [t, n] = (0, a.rE)(e, $.variantKeys),
              { children: r, className: i, classNames: l, label: s, ...d } = t,
              u = (0, o.useMemo)(() => $({ ...n }), [(0, X.t6)(n)]),
              c = (0, U.$)(null == l ? void 0 : l.base, i),
              f = s || r,
              p = (0, o.useMemo)(
                () =>
                  f && "string" == typeof f
                    ? f
                    : d["aria-label"]
                    ? ""
                    : "Loading",
                [r, f, d["aria-label"]]
              ),
              g = (0, o.useCallback)(
                () => ({
                  "aria-label": p,
                  className: u.base({ class: c }),
                  ...d,
                }),
                [p, u, c, d]
              );
            return { label: f, slots: u, classNames: l, getSpinnerProps: g };
          })({ ...e });
          return (0, q.jsxs)("div", {
            ref: t,
            ...l(),
            children: [
              (0, q.jsxs)("div", {
                className: n.wrapper({ class: null == r ? void 0 : r.wrapper }),
                children: [
                  (0, q.jsx)("i", {
                    className: n.circle1({
                      class: null == r ? void 0 : r.circle1,
                    }),
                  }),
                  (0, q.jsx)("i", {
                    className: n.circle2({
                      class: null == r ? void 0 : r.circle2,
                    }),
                  }),
                ],
              }),
              i &&
                (0, q.jsx)("span", {
                  className: n.label({ class: null == r ? void 0 : r.label }),
                  children: i,
                }),
            ],
          });
        });
      Z.displayName = "NextUI.Spinner";
      var J = n(51251),
        Q = n(53441),
        ee = n(60760),
        et = n(14356),
        en = (e) => {
          let {
            ripples: t = [],
            motionProps: n,
            color: r = "currentColor",
            style: o,
            onClear: a,
          } = e;
          return (0, q.jsx)(q.Fragment, {
            children: t.map((e) => {
              let t = Math.min(
                Math.max(0.01 * e.size, 0.2),
                e.size > 100 ? 0.75 : 0.5
              );
              return (0, q.jsx)(
                J.F,
                {
                  features: Q.l,
                  children: (0, q.jsx)(ee.N, {
                    mode: "popLayout",
                    children: (0, q.jsx)(et.m.span, {
                      animate: { transform: "scale(2)", opacity: 0 },
                      className: "nextui-ripple",
                      exit: { opacity: 0 },
                      initial: { transform: "scale(0)", opacity: 0.35 },
                      style: {
                        position: "absolute",
                        backgroundColor: r,
                        borderRadius: "100%",
                        transformOrigin: "center",
                        pointerEvents: "none",
                        overflow: "hidden",
                        inset: 0,
                        zIndex: 0,
                        top: e.y,
                        left: e.x,
                        width: "".concat(e.size, "px"),
                        height: "".concat(e.size, "px"),
                        ...o,
                      },
                      transition: { duration: t },
                      onAnimationComplete: () => {
                        a(e.key);
                      },
                      ...n,
                    }),
                  }),
                },
                e.key
              );
            }),
          });
        };
      en.displayName = "NextUI.Ripple";
      var er = (0, a.Rf)((e, t) => {
        let {
          Component: n,
          domRef: r,
          children: a,
          styles: i,
          spinnerSize: s,
          spinner: g = (0, q.jsx)(Z, { color: "current", size: s }),
          spinnerPlacement: m,
          startContent: h,
          endContent: b,
          isLoading: w,
          disableRipple: E,
          getButtonProps: x,
          getRippleProps: k,
          isIconOnly: L,
        } = (function (e) {
          var t, n, r, a, i, s, g, m, h;
          let b = d(),
            w = (0, u.o)(),
            E = !!b,
            {
              ref: x,
              as: k,
              children: L,
              startContent: T,
              endContent: P,
              autoFocus: O,
              className: F,
              spinner: z,
              isLoading: W = !1,
              disableRipple: j = !1,
              fullWidth: V = null != (t = null == b ? void 0 : b.fullWidth) &&
                t,
              radius: G = null == b ? void 0 : b.radius,
              size: K = null != (n = null == b ? void 0 : b.size) ? n : "md",
              color: $ = null != (r = null == b ? void 0 : b.color)
                ? r
                : "default",
              variant: U = null != (a = null == b ? void 0 : b.variant)
                ? a
                : "solid",
              disableAnimation: q = null !=
                (s =
                  null != (i = null == b ? void 0 : b.disableAnimation)
                    ? i
                    : null == w
                    ? void 0
                    : w.disableAnimation) && s,
              isDisabled: Z = null != (g = null == b ? void 0 : b.isDisabled) &&
                g,
              isIconOnly: J = null != (m = null == b ? void 0 : b.isIconOnly) &&
                m,
              spinnerPlacement: Q = "start",
              onPress: ee,
              onClick: et,
              ...en
            } = e,
            er = k || "button",
            eo = "string" == typeof er,
            ea = (0, A.zD)(x),
            ei =
              null != (h = j || (null == w ? void 0 : w.disableRipple)) ? h : q,
            {
              isFocusVisible: el,
              isFocused: es,
              focusProps: ed,
            } = (function (e = {}) {
              var t, n, r;
              let { autoFocus: a = !1, isTextInput: i, within: l } = e,
                s = (0, o.useRef)({ isFocused: !1, isFocusVisible: a || M() }),
                [d, u] = (0, o.useState)(!1),
                [c, g] = (0, o.useState)(
                  () => s.current.isFocused && s.current.isFocusVisible
                ),
                m = (0, o.useCallback)(
                  () => g(s.current.isFocused && s.current.isFocusVisible),
                  []
                ),
                h = (0, o.useCallback)(
                  (e) => {
                    (s.current.isFocused = e), u(e), m();
                  },
                  [m]
                );
              (t = (e) => {
                (s.current.isFocusVisible = e), m();
              }),
                (n = []),
                (r = { isTextInput: i }),
                C(),
                (0, o.useEffect)(() => {
                  let e = (e, n) => {
                    (function (e, t, n) {
                      var r;
                      let o =
                          "undefined" != typeof window
                            ? p(null == n ? void 0 : n.target).HTMLInputElement
                            : HTMLInputElement,
                        a =
                          "undefined" != typeof window
                            ? p(null == n ? void 0 : n.target)
                                .HTMLTextAreaElement
                            : HTMLTextAreaElement,
                        i =
                          "undefined" != typeof window
                            ? p(null == n ? void 0 : n.target).HTMLElement
                            : HTMLElement,
                        l =
                          "undefined" != typeof window
                            ? p(null == n ? void 0 : n.target).KeyboardEvent
                            : KeyboardEvent;
                      return !(
                        (e =
                          e ||
                          ((null == n ? void 0 : n.target) instanceof o &&
                            !S.has(
                              null == n
                                ? void 0
                                : null === (r = n.target) || void 0 === r
                                ? void 0
                                : r.type
                            )) ||
                          (null == n ? void 0 : n.target) instanceof a ||
                          ((null == n ? void 0 : n.target) instanceof i &&
                            (null == n
                              ? void 0
                              : n.target.isContentEditable))) &&
                        "keyboard" === t &&
                        n instanceof l &&
                        !y[n.key]
                      );
                    })(!!(null == r ? void 0 : r.isTextInput), e, n) && t(M());
                  };
                  return (
                    v.add(e),
                    () => {
                      v.delete(e);
                    }
                  );
                }, n);
              let { focusProps: b } = (function (e) {
                  let {
                      isDisabled: t,
                      onFocus: n,
                      onBlur: r,
                      onFocusChange: a,
                    } = e,
                    i = (0, o.useCallback)(
                      (e) => {
                        if (e.target === e.currentTarget)
                          return r && r(e), a && a(!1), !0;
                      },
                      [r, a]
                    ),
                    l = N(i),
                    s = (0, o.useCallback)(
                      (e) => {
                        let t = f(e.target);
                        e.target === e.currentTarget &&
                          t.activeElement === e.target &&
                          (n && n(e), a && a(!0), l(e));
                      },
                      [a, n, l]
                    );
                  return {
                    focusProps: {
                      onFocus: !t && (n || a || r) ? s : void 0,
                      onBlur: !t && (r || a) ? i : void 0,
                    },
                  };
                })({ isDisabled: l, onFocusChange: h }),
                { focusWithinProps: w } = (function (e) {
                  let {
                      isDisabled: t,
                      onBlurWithin: n,
                      onFocusWithin: r,
                      onFocusWithinChange: a,
                    } = e,
                    i = (0, o.useRef)({ isFocusWithin: !1 }),
                    l = (0, o.useCallback)(
                      (e) => {
                        i.current.isFocusWithin &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((i.current.isFocusWithin = !1),
                          n && n(e),
                          a && a(!1));
                      },
                      [n, a, i]
                    ),
                    s = N(l),
                    d = (0, o.useCallback)(
                      (e) => {
                        i.current.isFocusWithin ||
                          document.activeElement !== e.target ||
                          (r && r(e),
                          a && a(!0),
                          (i.current.isFocusWithin = !0),
                          s(e));
                      },
                      [r, a, s]
                    );
                  return t
                    ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
                    : { focusWithinProps: { onFocus: d, onBlur: l } };
                })({ isDisabled: !l, onFocusWithinChange: h });
              return { isFocused: d, isFocusVisible: c, focusProps: l ? w : b };
            })({ autoFocus: O }),
            eu = Z || W,
            ec = (0, o.useMemo)(
              () =>
                B({
                  size: K,
                  color: $,
                  variant: U,
                  radius: G,
                  fullWidth: V,
                  isDisabled: eu,
                  isInGroup: E,
                  disableAnimation: q,
                  isIconOnly: J,
                  className: F,
                }),
              [K, $, U, G, V, eu, E, J, q, F]
            ),
            {
              onClick: ef,
              onClear: ep,
              ripples: eg,
            } = (function () {
              let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                [t, n] = (0, o.useState)([]);
              return {
                ripples: t,
                onClick: (0, o.useCallback)((e) => {
                  let t = e.currentTarget,
                    r = Math.max(t.clientWidth, t.clientHeight),
                    o = t.getBoundingClientRect();
                  n((t) => [
                    ...t,
                    {
                      key: (0, X.Lz)(t.length.toString()),
                      size: r,
                      x: e.clientX - o.left - r / 2,
                      y: e.clientY - o.top - r / 2,
                    },
                  ]);
                }, []),
                onClear: (0, o.useCallback)((e) => {
                  n((t) => t.filter((t) => t.key !== e));
                }, []),
                ...e,
              };
            })(),
            ev = (0, o.useCallback)(
              (e) => {
                ei || eu || q || !ea.current || ef(e);
              },
              [ei, eu, q, ea, ef]
            ),
            { buttonProps: em, isPressed: eh } = (0, l.l)(
              {
                elementType: k,
                isDisabled: eu,
                onPress: ee,
                onClick: R(et, ev),
                ...en,
              },
              ea
            ),
            { isHovered: eb, hoverProps: ey } = (function (e) {
              let {
                  onHoverStart: t,
                  onHoverChange: n,
                  onHoverEnd: r,
                  isDisabled: a,
                } = e,
                [i, l] = (0, o.useState)(!1),
                s = (0, o.useRef)({
                  isHovered: !1,
                  ignoreEmulatedMouseEvents: !1,
                  pointerType: "",
                  target: null,
                }).current;
              (0, o.useEffect)(Y, []);
              let { hoverProps: d, triggerHoverEnd: u } = (0, o.useMemo)(() => {
                let e = (e, r) => {
                    if (
                      ((s.pointerType = r),
                      a ||
                        "touch" === r ||
                        s.isHovered ||
                        !e.currentTarget.contains(e.target))
                    )
                      return;
                    s.isHovered = !0;
                    let o = e.currentTarget;
                    (s.target = o),
                      t && t({ type: "hoverstart", target: o, pointerType: r }),
                      n && n(!0),
                      l(!0);
                  },
                  o = (e, t) => {
                    if (
                      ((s.pointerType = ""),
                      (s.target = null),
                      "touch" === t || !s.isHovered)
                    )
                      return;
                    s.isHovered = !1;
                    let o = e.currentTarget;
                    r && r({ type: "hoverend", target: o, pointerType: t }),
                      n && n(!1),
                      l(!1);
                  },
                  i = {};
                return (
                  "undefined" != typeof PointerEvent
                    ? ((i.onPointerEnter = (t) => {
                        (_ && "mouse" === t.pointerType) || e(t, t.pointerType);
                      }),
                      (i.onPointerLeave = (e) => {
                        !a &&
                          e.currentTarget.contains(e.target) &&
                          o(e, e.pointerType);
                      }))
                    : ((i.onTouchStart = () => {
                        s.ignoreEmulatedMouseEvents = !0;
                      }),
                      (i.onMouseEnter = (t) => {
                        s.ignoreEmulatedMouseEvents || _ || e(t, "mouse"),
                          (s.ignoreEmulatedMouseEvents = !1);
                      }),
                      (i.onMouseLeave = (e) => {
                        !a &&
                          e.currentTarget.contains(e.target) &&
                          o(e, "mouse");
                      })),
                  { hoverProps: i, triggerHoverEnd: o }
                );
              }, [t, n, r, a, s]);
              return (
                (0, o.useEffect)(() => {
                  a && u({ currentTarget: s.target }, s.pointerType);
                }, [a]),
                { hoverProps: d, isHovered: i }
              );
            })({ isDisabled: eu }),
            ew = (0, o.useCallback)(
              function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  "data-disabled": (0, c.sE)(eu),
                  "data-focus": (0, c.sE)(es),
                  "data-pressed": (0, c.sE)(eh),
                  "data-focus-visible": (0, c.sE)(el),
                  "data-hover": (0, c.sE)(eb),
                  "data-loading": (0, c.sE)(W),
                  ...(function (...e) {
                    let t = { ...e[0] };
                    for (let n = 1; n < e.length; n++) {
                      let r = e[n];
                      for (let e in r) {
                        let n = t[e],
                          o = r[e];
                        "function" == typeof n &&
                        "function" == typeof o &&
                        "o" === e[0] &&
                        "n" === e[1] &&
                        e.charCodeAt(2) >= 65 &&
                        90 >= e.charCodeAt(2)
                          ? (t[e] = R(n, o))
                          : ("className" === e || "UNSAFE_className" === e) &&
                            "string" == typeof n &&
                            "string" == typeof o
                          ? (t[e] = I(n, o))
                          : "id" === e && n && o
                          ? (t.id = (function (e, t) {
                              if (e === t) return e;
                              let n = H.get(e);
                              if (n) return n(t), t;
                              let r = H.get(t);
                              return r ? (r(e), e) : t;
                            })(n, o))
                          : (t[e] = void 0 !== o ? o : n);
                      }
                    }
                    return t;
                  })(em, ed, ey, (0, D.$)(en, { enabled: eo }), (0, D.$)(e)),
                };
              },
              [W, eu, es, eh, eo, el, eb, em, ed, ey, en]
            ),
            eE = (e) =>
              (0, o.isValidElement)(e)
                ? (0, o.cloneElement)(e, {
                    "aria-hidden": !0,
                    focusable: !1,
                    tabIndex: -1,
                  })
                : null,
            ex = eE(T),
            ek = eE(P);
          return {
            Component: er,
            children: L,
            domRef: ea,
            spinner: z,
            styles: ec,
            startContent: ex,
            endContent: ek,
            isLoading: W,
            spinnerPlacement: Q,
            spinnerSize: (0, o.useMemo)(
              () => ({ sm: "sm", md: "sm", lg: "md" }[K]),
              [K]
            ),
            disableRipple: ei,
            getButtonProps: ew,
            getRippleProps: (0, o.useCallback)(
              () => ({ ripples: eg, onClear: ep }),
              [eg, ep]
            ),
            isIconOnly: J,
          };
        })({ ...e, ref: t });
        return (0, q.jsxs)(n, {
          ref: r,
          className: i,
          ...x(),
          children: [
            h,
            w && "start" === m && g,
            w && L ? null : a,
            w && "end" === m && g,
            b,
            !E && (0, q.jsx)(en, { ...k() }),
          ],
        });
      });
      er.displayName = "NextUI.Button";
      var eo = n(78607),
        ea = (0, a.Rf)((e, t) => {
          let { triggerRef: n, getTriggerProps: a } = (0, r.C)(),
            { children: s, ...d } = e,
            u = (0, o.useMemo)(
              () =>
                "string" == typeof s
                  ? (0, q.jsx)("p", { children: s })
                  : o.Children.only(s),
              [s]
            ),
            {
              onPress: c,
              isDisabled: f,
              ...p
            } = (0, o.useMemo)(
              () => a((0, eo.v)(d, u.props), u.ref),
              [a, u.props, d, u.ref]
            ),
            [, g] = i(s, er),
            { buttonProps: v } = (0, l.l)({ onPress: c, isDisabled: f }, n),
            m = (0, o.useMemo)(
              () => (null == g ? void 0 : g[0]) !== void 0,
              [g]
            );
          return (0, o.cloneElement)(
            u,
            (0, eo.v)(p, m ? { onPress: c, isDisabled: f } : v)
          );
        });
      ea.displayName = "NextUI.PopoverTrigger";
      var ei = ea;
    },
    55554: (e, t, n) => {
      n.d(t, { v: () => T });
      var r = n(66680);
      function o(e, t = -1 / 0, n = 1 / 0) {
        return Math.min(Math.max(e, t), n);
      }
      let a = { top: "top", bottom: "top", left: "left", right: "left" },
        i = { top: "bottom", bottom: "top", left: "right", right: "left" },
        l = { top: "left", left: "top" },
        s = { top: "height", left: "width" },
        d = { width: "totalWidth", height: "totalHeight" },
        u = {},
        c = "undefined" != typeof document && window.visualViewport;
      function f(e) {
        let t = 0,
          n = 0,
          o = 0,
          a = 0,
          i = 0,
          l = 0,
          s = {},
          d = (null == c ? void 0 : c.scale) > 1;
        if ("BODY" === e.tagName) {
          var u, f;
          let r = document.documentElement;
          (o = r.clientWidth),
            (a = r.clientHeight),
            (t =
              null !== (u = null == c ? void 0 : c.width) && void 0 !== u
                ? u
                : o),
            (n =
              null !== (f = null == c ? void 0 : c.height) && void 0 !== f
                ? f
                : a),
            (s.top = r.scrollTop || e.scrollTop),
            (s.left = r.scrollLeft || e.scrollLeft),
            c && ((i = c.offsetTop), (l = c.offsetLeft));
        } else
          ({ width: t, height: n, top: i, left: l } = h(e)),
            (s.top = e.scrollTop),
            (s.left = e.scrollLeft),
            (o = t),
            (a = n);
        return (
          (0, r.Tc)() &&
            ("BODY" === e.tagName || "HTML" === e.tagName) &&
            d &&
            ((s.top = 0), (s.left = 0), (i = c.pageTop), (l = c.pageLeft)),
          {
            width: t,
            height: n,
            totalWidth: o,
            totalHeight: a,
            scroll: s,
            top: i,
            left: l,
          }
        );
      }
      function p(e, t, n, r, o, i, l) {
        let d = o.scroll[e],
          u = r[s[e]],
          c = r.scroll[a[e]] + i,
          f = u + r.scroll[a[e]] - i,
          p = t - d + l[e] - r[a[e]],
          g = t - d + n + l[e] - r[a[e]];
        return p < c ? c - p : g > f ? Math.max(f - g, c - p) : 0;
      }
      function g(e) {
        if (u[e]) return u[e];
        let [t, n] = e.split(" "),
          r = a[t] || "right",
          o = l[r];
        a[n] || (n = "center");
        let i = s[r],
          d = s[o];
        return (
          (u[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: o,
            size: i,
            crossSize: d,
          }),
          u[e]
        );
      }
      function v(e, t, n, r, a, l, s, u, c, f) {
        let {
            placement: p,
            crossPlacement: g,
            axis: v,
            crossAxis: m,
            size: h,
            crossSize: b,
          } = r,
          y = {};
        (y[m] = e[m]),
          "center" === g
            ? (y[m] += (e[b] - n[b]) / 2)
            : g !== m && (y[m] += e[b] - n[b]),
          (y[m] += l);
        let w = e[m] - n[b] + c + f,
          E = e[m] + e[b] - c - f;
        if (((y[m] = o(y[m], w, E)), p === v)) {
          let n = u ? s[h] : t[d[h]];
          y[i[v]] = Math.floor(n - e[v] + a);
        } else y[v] = Math.floor(e[v] + e[h] + a);
        return y;
      }
      function m(e, t, n, r, o, a) {
        let { placement: l, axis: s, size: d } = a;
        return l === s
          ? Math.max(0, n[s] - e[s] - e.scroll[s] + t[s] - r[s] - r[i[s]] - o)
          : Math.max(
              0,
              e[d] +
                e[s] +
                e.scroll[s] -
                t[s] -
                n[s] -
                n[d] -
                r[s] -
                r[i[s]] -
                o
            );
      }
      function h(e) {
        let {
            top: t,
            left: n,
            width: r,
            height: o,
          } = e.getBoundingClientRect(),
          {
            scrollTop: a,
            scrollLeft: i,
            clientTop: l,
            clientLeft: s,
          } = document.documentElement;
        return { top: t + a - l, left: n + i - s, width: r, height: o };
      }
      function b(e, t) {
        let n,
          r = window.getComputedStyle(e);
        if ("fixed" === r.position) {
          let {
            top: t,
            left: r,
            width: o,
            height: a,
          } = e.getBoundingClientRect();
          n = { top: t, left: r, width: o, height: a };
        } else {
          n = h(e);
          let r = h(t),
            o = window.getComputedStyle(t);
          (r.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop),
            (r.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft),
            (n.top -= r.top),
            (n.left -= r.left);
        }
        return (
          (n.top -= parseInt(r.marginTop, 10) || 0),
          (n.left -= parseInt(r.marginLeft, 10) || 0),
          n
        );
      }
      function y(e) {
        let t = window.getComputedStyle(e);
        return (
          "none" !== t.transform ||
          /transform|perspective/.test(t.willChange) ||
          "none" !== t.filter ||
          "paint" === t.contain ||
          ("backdropFilter" in t && "none" !== t.backdropFilter) ||
          ("WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter)
        );
      }
      var w = n(27132),
        E = n(12115),
        x = n(33205),
        k = n(51804);
      let L = "undefined" != typeof document && window.visualViewport;
      function T(e) {
        var t;
        let { direction: n } = (0, k.Y)(),
          {
            arrowSize: r = 0,
            targetRef: a,
            overlayRef: l,
            scrollRef: s = l,
            placement: u = "bottom",
            containerPadding: c = 12,
            shouldFlip: T = !0,
            boundaryElement: C = "undefined" != typeof document
              ? document.body
              : null,
            offset: P = 0,
            crossOffset: M = 0,
            shouldUpdatePosition: S = !0,
            isOpen: O = !0,
            onClose: F,
            maxHeight: N,
            arrowBoundaryOffset: R = 0,
          } = e,
          [H, I] = (0, E.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0,
          }),
          A = [
            S,
            u,
            l.current,
            a.current,
            s.current,
            c,
            T,
            C,
            P,
            M,
            O,
            n,
            N,
            R,
            r,
          ],
          D = (0, E.useRef)(null == L ? void 0 : L.scale);
        (0, E.useEffect)(() => {
          O && (D.current = null == L ? void 0 : L.scale);
        }, [O]);
        let z = (0, E.useCallback)(() => {
          var e, t, w;
          if (
            !1 === S ||
            !O ||
            !l.current ||
            !a.current ||
            !s.current ||
            !C ||
            (null == L ? void 0 : L.scale) !== D.current
          )
            return;
          let E = l.current;
          if (!N && l.current) {
            (E.style.top = "0px"),
              (E.style.bottom = ""),
              (E.style.maxHeight =
                (null !==
                  (t =
                    null === (e = window.visualViewport) || void 0 === e
                      ? void 0
                      : e.height) && void 0 !== t
                  ? t
                  : window.innerHeight) + "px");
          }
          let x = (function (e) {
            let t,
              {
                placement: n,
                targetNode: r,
                overlayNode: a,
                scrollNode: l,
                padding: s,
                shouldFlip: u,
                boundaryElement: c,
                offset: w,
                crossOffset: E,
                maxHeight: x,
                arrowSize: k = 0,
                arrowBoundaryOffset: L = 0,
              } = e,
              T =
                a instanceof HTMLElement
                  ? (function (e) {
                      let t = e.offsetParent;
                      if (
                        (t &&
                          t === document.body &&
                          "static" === window.getComputedStyle(t).position &&
                          !y(t) &&
                          (t = document.documentElement),
                        null == t)
                      )
                        for (t = e.parentElement; t && !y(t); )
                          t = t.parentElement;
                      return t || document.documentElement;
                    })(a)
                  : document.documentElement,
              C = T === document.documentElement,
              P = window.getComputedStyle(T).position,
              M = C ? h(r) : b(r, T);
            if (!C) {
              let { marginTop: e, marginLeft: t } = window.getComputedStyle(r);
              (M.top += parseInt(e, 10) || 0), (M.left += parseInt(t, 10) || 0);
            }
            let S = h(a),
              O = {
                top:
                  parseInt((t = window.getComputedStyle(a)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0,
              };
            (S.width += O.left + O.right), (S.height += O.top + O.bottom);
            let F = {
                top: l.scrollTop,
                left: l.scrollLeft,
                width: l.scrollWidth,
                height: l.scrollHeight,
              },
              N = f(c),
              R = f(T),
              H = "BODY" === c.tagName ? h(T) : b(T, c);
            return (
              "HTML" === T.tagName &&
                "BODY" === c.tagName &&
                ((R.scroll.top = 0), (R.scroll.left = 0)),
              (function (e, t, n, r, a, l, s, u, c, f, h, b, y, w, E, x) {
                let k = g(e),
                  {
                    size: L,
                    crossAxis: T,
                    crossSize: C,
                    placement: P,
                    crossPlacement: M,
                  } = k,
                  S = v(t, u, n, k, h, b, f, y, E, x),
                  O = h,
                  F = m(u, f, t, a, l + h, k);
                if (s && r[L] > F) {
                  let e = g(`${i[P]} ${M}`),
                    r = v(t, u, n, e, h, b, f, y, E, x);
                  m(u, f, t, a, l + h, e) > F && ((k = e), (S = r), (O = h));
                }
                let N = "bottom";
                "top" === k.axis
                  ? "top" === k.placement
                    ? (N = "top")
                    : "bottom" === k.placement && (N = "bottom")
                  : "top" === k.crossAxis &&
                    ("top" === k.crossPlacement
                      ? (N = "bottom")
                      : "bottom" === k.crossPlacement && (N = "top"));
                let R = p(T, S[T], n[C], u, c, l, f);
                S[T] += R;
                let H = (function (e, t, n, r, o, a, i, l) {
                  let s = r ? n.height : t[d.height],
                    u =
                      null != e.top
                        ? n.top + e.top
                        : n.top + (s - e.bottom - i),
                    c =
                      "top" !== l
                        ? Math.max(
                            0,
                            t.height +
                              t.top +
                              t.scroll.top -
                              u -
                              (o.top + o.bottom + a)
                          )
                        : Math.max(
                            0,
                            u +
                              i -
                              (t.top + t.scroll.top) -
                              (o.top + o.bottom + a)
                          );
                  return Math.min(t.height - 2 * a, c);
                })(S, u, f, y, a, l, n.height, N);
                w && w < H && (H = w),
                  (n.height = Math.min(n.height, H)),
                  (R = p(
                    T,
                    (S = v(t, u, n, k, O, b, f, y, E, x))[T],
                    n[C],
                    u,
                    c,
                    l,
                    f
                  )),
                  (S[T] += R);
                let I = {},
                  A = t[T] + 0.5 * t[C] - S[T],
                  D = E / 2 + x,
                  z = n[C] - E / 2 - x,
                  W = o(A, t[T] - S[T] + E / 2, t[T] + t[C] - S[T] - E / 2);
                return (
                  (I[T] = o(W, D, z)),
                  {
                    position: S,
                    maxHeight: H,
                    arrowOffsetLeft: I.left,
                    arrowOffsetTop: I.top,
                    placement: k.placement,
                  }
                );
              })(
                n,
                M,
                S,
                F,
                O,
                s,
                u,
                N,
                R,
                H,
                w,
                E,
                !!P && "static" !== P,
                x,
                k,
                L
              )
            );
          })({
            placement:
              ((w = u),
              "rtl" === n
                ? w.replace("start", "right").replace("end", "left")
                : w.replace("start", "left").replace("end", "right")),
            overlayNode: l.current,
            targetNode: a.current,
            scrollNode: s.current,
            padding: c,
            shouldFlip: T,
            boundaryElement: C,
            offset: P,
            crossOffset: M,
            maxHeight: N,
            arrowSize: r,
            arrowBoundaryOffset: R,
          });
          (E.style.top = ""),
            (E.style.bottom = ""),
            Object.keys(x.position).forEach(
              (e) => (E.style[e] = x.position[e] + "px")
            ),
            (E.style.maxHeight =
              null != x.maxHeight ? x.maxHeight + "px" : void 0),
            I(x);
        }, A);
        (0, x.N)(z, A),
          (t = z),
          (0, x.N)(
            () => (
              window.addEventListener("resize", t, !1),
              () => {
                window.removeEventListener("resize", t, !1);
              }
            ),
            [t]
          ),
          (function (e) {
            let { ref: t, box: n, onResize: r } = e;
            (0, E.useEffect)(() => {
              let e = null == t ? void 0 : t.current;
              if (e) {
                if (void 0 === window.ResizeObserver)
                  return (
                    window.addEventListener("resize", r, !1),
                    () => {
                      window.removeEventListener("resize", r, !1);
                    }
                  );
                {
                  let t = new window.ResizeObserver((e) => {
                    e.length && r();
                  });
                  return (
                    t.observe(e, { box: n }),
                    () => {
                      e && t.unobserve(e);
                    }
                  );
                }
              }
            }, [r, t, n]);
          })({ ref: l, onResize: z });
        let W = (0, E.useRef)(!1);
        (0, x.N)(() => {
          let e;
          let t = () => {
              (W.current = !0),
                clearTimeout(e),
                (e = setTimeout(() => {
                  W.current = !1;
                }, 500)),
                z();
            },
            n = () => {
              W.current && t();
            };
          return (
            null == L || L.addEventListener("resize", t),
            null == L || L.addEventListener("scroll", n),
            () => {
              null == L || L.removeEventListener("resize", t),
                null == L || L.removeEventListener("scroll", n);
            }
          );
        }, [z]);
        let j = (0, E.useCallback)(() => {
          W.current || F();
        }, [F, W]);
        return (
          (0, w.o)({ triggerRef: a, isOpen: O, onClose: F && j }),
          {
            overlayProps: {
              style: {
                position: "absolute",
                zIndex: 1e5,
                ...H.position,
                maxHeight: H.maxHeight,
              },
            },
            placement: H.placement,
            arrowProps: {
              "aria-hidden": "true",
              role: "presentation",
              style: { left: H.arrowOffsetLeft, top: H.arrowOffsetTop },
            },
            updatePosition: z,
          }
        );
      }
    },
    61090: (e, t, n) => {
      let r, o;
      n.d(t, { L: () => I });
      var a = n(59779),
        i = n(82885),
        l = n(12115),
        s = n(67670),
        d = n(43220);
      let u = new WeakMap();
      function c({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = u.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function f(e) {
        e.forEach(c);
      }
      let p = new Set();
      var g = n(18210),
        v = n(15315);
      let m = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        h = () => ({ time: 0, x: m(), y: m() }),
        b = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function y(e, t, n, r) {
        let o = n[t],
          { length: a, position: i } = b[t],
          l = o.current,
          s = n.time;
        (o.current = e[`scroll${i}`]),
          (o.scrollLength = e[`scroll${a}`] - e[`client${a}`]),
          (o.offset.length = 0),
          (o.offset[0] = 0),
          (o.offset[1] = o.scrollLength),
          (o.progress = (0, g.q)(0, o.scrollLength, o.current));
        let d = r - s;
        o.velocity = d > 50 ? 0 : (0, v.f)(o.current - l, d);
      }
      let w = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        E = { start: 0, center: 0.5, end: 1 };
      function x(e, t, n = 0) {
        let r = 0;
        if ((e in E && (e = E[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
            ? (e = t / 100)
            : e.endsWith("vw")
            ? (r = (t / 100) * document.documentElement.clientWidth)
            : e.endsWith("vh")
            ? (r = (t / 100) * document.documentElement.clientHeight)
            : (e = t);
        }
        return "number" == typeof e && (r = t * e), n + r;
      }
      let k = [0, 0];
      var L = n(97846),
        T = n(7345);
      let C = { x: 0, y: 0 };
      var P = n(59210);
      let M = new WeakMap(),
        S = new WeakMap(),
        O = new WeakMap(),
        F = (e) => (e === document.documentElement ? window : e);
      var N = n(97494);
      function R(e, t) {
        (0, s.$)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
        );
      }
      let H = () => ({
        scrollX: (0, a.OQ)(0),
        scrollY: (0, a.OQ)(0),
        scrollXProgress: (0, a.OQ)(0),
        scrollYProgress: (0, a.OQ)(0),
      });
      function I({ container: e, target: t, layoutEffect: n = !0, ...a } = {}) {
        let s = (0, i.M)(H);
        return (
          (n ? N.E : l.useEffect)(
            () => (
              R("target", t),
              R("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {}
              ) {
                let a = O.get(t);
                a || ((a = new Set()), O.set(t, a));
                let i = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            (n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent);
                        }
                        (n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight);
                      })(e, r.target, n),
                    update: (t) => {
                      y(e, "x", n, t),
                        y(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = w.All } = n,
                              { target: o = e, axis: a = "y" } = n,
                              i = "y" === a ? "height" : "width",
                              l =
                                o !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          (n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent);
                                        else if ("svg" === r.tagName) {
                                          let e = r.getBoundingClientRect(),
                                            t = (r =
                                              r.parentElement).getBoundingClientRect();
                                          (n.x += e.left - t.left),
                                            (n.y += e.top - t.top);
                                        } else if (
                                          r instanceof SVGGraphicsElement
                                        ) {
                                          let { x: e, y: t } = r.getBBox();
                                          (n.x += e), (n.y += t);
                                          let o = null,
                                            a = r.parentNode;
                                          for (; !o; )
                                            "svg" === a.tagName && (o = a),
                                              (a = r.parentNode);
                                          r = o;
                                        } else break;
                                      return n;
                                    })(o, e)
                                  : C,
                              s =
                                o === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : "getBBox" in o && "svg" !== o.tagName
                                  ? o.getBBox()
                                  : {
                                      width: o.clientWidth,
                                      height: o.clientHeight,
                                    },
                              d = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[a].offset.length = 0;
                            let u = !t[a].interpolate,
                              c = r.length;
                            for (let e = 0; e < c; e++) {
                              let n = (function (e, t, n, r) {
                                let o = Array.isArray(e) ? e : k,
                                  a = 0,
                                  i = 0;
                                return (
                                  "number" == typeof e
                                    ? (o = [e, e])
                                    : "string" == typeof e &&
                                      (o = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, E[e] ? e : "0"]),
                                  (a = x(o[0], n, r)) - x(o[1], t)
                                );
                              })(r[e], d[i], s[i], l[a]);
                              u ||
                                n === t[a].interpolatorOffsets[e] ||
                                (u = !0),
                                (t[a].offset[e] = n);
                            }
                            u &&
                              ((t[a].interpolate = (0, L.G)(
                                t[a].offset,
                                (0, T.Z)(r)
                              )),
                              (t[a].interpolatorOffsets = [...t[a].offset])),
                              (t[a].progress = t[a].interpolate(t[a].current));
                          })(e, n, r);
                    },
                    notify: () => t(n),
                  };
                })(t, e, h(), n);
                if ((a.add(i), !M.has(t))) {
                  let e = () => {
                      for (let e of a) e.measure();
                    },
                    n = () => {
                      for (let e of a) e.update(P.uv.timestamp);
                    },
                    i = () => {
                      for (let e of a) e.notify();
                    },
                    l = () => {
                      P.Gt.read(e, !1, !0),
                        P.Gt.read(n, !1, !0),
                        P.Gt.update(i, !1, !0);
                    };
                  M.set(t, l);
                  let s = F(t);
                  if (
                    (window.addEventListener("resize", l, { passive: !0 }),
                    t !== document.documentElement)
                  )
                    S.set(
                      t,
                      "function" == typeof t
                        ? (p.add(t),
                          o ||
                            ((o = () => {
                              let e = {
                                  width: window.innerWidth,
                                  height: window.innerHeight,
                                },
                                t = { target: window, size: e, contentSize: e };
                              p.forEach((e) => e(t));
                            }),
                            window.addEventListener("resize", o)),
                          () => {
                            p.delete(t), !p.size && o && (o = void 0);
                          })
                        : (function (e, t) {
                            r ||
                              "undefined" == typeof ResizeObserver ||
                              (r = new ResizeObserver(f));
                            let n = (0, d.K)(e);
                            return (
                              n.forEach((e) => {
                                let n = u.get(e);
                                n || ((n = new Set()), u.set(e, n)),
                                  n.add(t),
                                  null == r || r.observe(e);
                              }),
                              () => {
                                n.forEach((e) => {
                                  let n = u.get(e);
                                  null == n || n.delete(t),
                                    (null == n ? void 0 : n.size) ||
                                      null == r ||
                                      r.unobserve(e);
                                });
                              }
                            );
                          })(t, l)
                    );
                  s.addEventListener("scroll", l, { passive: !0 });
                }
                let l = M.get(t);
                return (
                  P.Gt.read(l, !1, !0),
                  () => {
                    var e;
                    (0, P.WG)(l);
                    let n = O.get(t);
                    if (!n || (n.delete(i), n.size)) return;
                    let r = M.get(t);
                    M.delete(t),
                      r &&
                        (F(t).removeEventListener("scroll", r),
                        null === (e = S.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  s.scrollX.set(e.current),
                    s.scrollXProgress.set(e.progress),
                    s.scrollY.set(t.current),
                    s.scrollYProgress.set(t.progress);
                },
                {
                  ...a,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                }
              )
            ),
            [e, t, JSON.stringify(a.offset)]
          ),
          s
        );
      }
    },
    62146: (e, t, n) => {
      function r(e) {
        let { reason: t, children: n } = e;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(45262);
    },
    64054: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          bindSnapshot: function () {
            return i;
          },
          createAsyncLocalStorage: function () {
            return a;
          },
          createSnapshot: function () {
            return l;
          },
        });
      let n = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class r {
        disable() {
          throw n;
        }
        getStore() {}
        run() {
          throw n;
        }
        exit() {
          throw n;
        }
        enterWith() {
          throw n;
        }
        static bind(e) {
          return e;
        }
      }
      let o = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function a() {
        return o ? new o() : new r();
      }
      function i(e) {
        return o ? o.bind(e) : r.bind(e);
      }
      function l() {
        return o
          ? o.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    78607: (e, t, n) => {
      n.d(t, { v: () => a }),
        n(12115),
        "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      let r = new Map(),
        o = function () {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var a = t.length;
                    for (n = 0; n < a; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  } else for (r in t) t[r] && (o && (o += " "), (o += r));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        };
      function a(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let a = e[n];
          for (let e in a) {
            let n = t[e],
              i = a[e];
            "function" == typeof n &&
            "function" == typeof i &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let n of e) "function" == typeof n && n(...t);
                  };
                })(n, i))
              : ("className" === e || "UNSAFE_className" === e) &&
                "string" == typeof n &&
                "string" == typeof i
              ? (t[e] = o(n, i))
              : "id" === e && n && i
              ? (t.id = (function (e, t) {
                  if (e === t) return e;
                  let n = r.get(e);
                  if (n) return n(t), t;
                  let o = r.get(t);
                  return o ? (o(e), e) : t;
                })(n, i))
              : (t[e] = void 0 !== i ? i : n);
          }
        }
        return t;
      }
    },
    81340: (e, t, n) => {
      n.d(t, { o: () => i });
      var r = n(35680),
        o = n(12184),
        a = n(9426),
        i = (0, o.tv)({
          slots: {
            base: [
              "z-0",
              "relative",
              "bg-transparent",
              "before:content-['']",
              "before:hidden",
              "before:z-[-1]",
              "before:absolute",
              "before:rotate-45",
              "before:w-2.5",
              "before:h-2.5",
              "before:rounded-sm",
              "data-[arrow=true]:before:block",
              "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top]:before:left-1/2",
              "data-[placement=top]:before:-translate-x-1/2",
              "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top-start]:before:left-3",
              "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top-end]:before:right-3",
              "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom]:before:left-1/2",
              "data-[placement=bottom]:before:-translate-x-1/2",
              "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom-start]:before:left-3",
              "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom-end]:before:right-3",
              "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
              "data-[placement=left]:before:top-1/2",
              "data-[placement=left]:before:-translate-y-1/2",
              "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=left-start]:before:top-1/4",
              "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=left-end]:before:bottom-1/4",
              "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
              "data-[placement=right]:before:top-1/2",
              "data-[placement=right]:before:-translate-y-1/2",
              "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=right-start]:before:top-1/4",
              "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=right-end]:before:bottom-1/4",
              ...a.zb,
            ],
            content: [
              "z-10",
              "px-2.5",
              "py-1",
              "w-full",
              "inline-flex",
              "flex-col",
              "items-center",
              "justify-center",
              "box-border",
              "subpixel-antialiased",
              "outline-none",
              "box-border",
            ],
            trigger: ["z-10"],
            backdrop: ["hidden"],
            arrow: [],
          },
          variants: {
            size: {
              sm: { content: "text-tiny" },
              md: { content: "text-small" },
              lg: { content: "text-medium" },
            },
            color: {
              default: {
                base: "before:bg-content1 before:shadow-small",
                content: "bg-content1",
              },
              foreground: {
                base: "before:bg-foreground",
                content: r.k.solid.foreground,
              },
              primary: {
                base: "before:bg-primary",
                content: r.k.solid.primary,
              },
              secondary: {
                base: "before:bg-secondary",
                content: r.k.solid.secondary,
              },
              success: {
                base: "before:bg-success",
                content: r.k.solid.success,
              },
              warning: {
                base: "before:bg-warning",
                content: r.k.solid.warning,
              },
              danger: { base: "before:bg-danger", content: r.k.solid.danger },
            },
            radius: {
              none: { content: "rounded-none" },
              sm: { content: "rounded-small" },
              md: { content: "rounded-medium" },
              lg: { content: "rounded-large" },
              full: { content: "rounded-full" },
            },
            shadow: {
              sm: { content: "shadow-small" },
              md: { content: "shadow-medium" },
              lg: { content: "shadow-large" },
            },
            backdrop: {
              transparent: {},
              opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
              blur: {
                backdrop:
                  "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
              },
            },
            triggerScaleOnOpen: {
              true: {
                trigger: [
                  "aria-expanded:scale-[0.97]",
                  "aria-expanded:opacity-70",
                  "subpixel-antialiased",
                ],
              },
              false: {},
            },
            disableAnimation: { true: { base: "animate-none" } },
            isTriggerDisabled: {
              true: { trigger: "opacity-disabled pointer-events-none" },
              false: {},
            },
          },
          defaultVariants: {
            color: "default",
            radius: "lg",
            size: "md",
            shadow: "md",
            backdrop: "transparent",
            triggerScaleOnOpen: !0,
          },
          compoundVariants: [
            {
              backdrop: ["opaque", "blur"],
              class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
            },
          ],
        });
    },
    85744: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        });
      let r = n(17828);
    },
    87826: (e, t, n) => {
      n.d(t, { w: () => o });
      var r = n(33205);
      function o(e, t) {
        (0, r.N)(() => {
          if (e && e.ref && t)
            return (
              (e.ref.current = t.current),
              () => {
                e.ref && (e.ref.current = null);
              }
            );
        });
      }
    },
    92700: (e, t, n) => {
      n.d(t, { I: () => eg });
      var r = n(12115),
        o = n(51828);
      let a = {},
        i = 0,
        l = !1,
        s = null,
        d = null,
        u = "undefined" != typeof document ? r.useLayoutEffect : () => {};
      var c = n(44823);
      let f = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        p = new Map(),
        g = function () {
          for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
            (e = arguments[n]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t)) {
                    var a = t.length;
                    for (n = 0; n < a; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  } else for (r in t) t[r] && (o && (o += " "), (o += r));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        };
      function v(...e) {
        let t = { ...e[0] };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = (function (...e) {
                  return (...t) => {
                    for (let n of e) "function" == typeof n && n(...t);
                  };
                })(n, o))
              : ("className" === e || "UNSAFE_className" === e) &&
                "string" == typeof n &&
                "string" == typeof o
              ? (t[e] = g(n, o))
              : "id" === e && n && o
              ? (t.id = (function (e, t) {
                  if (e === t) return e;
                  let n = p.get(e);
                  if (n) return n(t), t;
                  let r = p.get(t);
                  return r ? (r(e), e) : t;
                })(n, o))
              : (t[e] = void 0 !== o ? o : n);
          }
        }
        return t;
      }
      let m = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        h = (e) =>
          e && "window" in e && e.window === e ? e : m(e).defaultView || window,
        b = null,
        y = new Set(),
        w = new Map(),
        E = !1,
        x = !1;
      function k(e, t) {
        for (let n of y) n(e, t);
      }
      function L(e) {
        var t, n;
        if (
          ((E = !0),
          !(
            e.metaKey ||
            ((t = /^Mac/i),
            !(
              "undefined" != typeof window &&
              null != window.navigator &&
              t.test(
                (null === (n = window.navigator.userAgentData) || void 0 === n
                  ? void 0
                  : n.platform) || window.navigator.platform
              )
            ) && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key
          ))
        )
          (b = "keyboard"), k("keyboard", e);
      }
      function T(e) {
        (b = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((E = !0), k("pointer", e));
      }
      function C(e) {
        var t, n;
        if (
          (0 === e.mozInputSource && e.isTrusted) ||
          (((t = /Android/i),
          "undefined" != typeof window &&
            null != window.navigator &&
            ((null === (n = window.navigator.userAgentData) || void 0 === n
              ? void 0
              : n.brands.some((e) => t.test(e.brand))) ||
              t.test(window.navigator.userAgent)) &&
            e.pointerType)
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        )
          (E = !0), (b = "virtual");
      }
      function P(e) {
        e.target !== window &&
          e.target !== document &&
          (E || x || ((b = "virtual"), k("virtual", e)), (E = !1), (x = !1));
      }
      function M() {
        (E = !1), (x = !0);
      }
      function S(e) {
        if ("undefined" == typeof window || w.get(h(e))) return;
        let t = h(e),
          n = m(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (E = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", L, !0),
          n.addEventListener("keyup", L, !0),
          n.addEventListener("click", C, !0),
          t.addEventListener("focus", P, !0),
          t.addEventListener("blur", M, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", T, !0),
              n.addEventListener("pointermove", T, !0),
              n.addEventListener("pointerup", T, !0))
            : (n.addEventListener("mousedown", T, !0),
              n.addEventListener("mousemove", T, !0),
              n.addEventListener("mouseup", T, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              O(e);
            },
            { once: !0 }
          ),
          w.set(t, { focus: r });
      }
      let O = (e, t) => {
        let n = h(e),
          r = m(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          w.has(n) &&
            ((n.HTMLElement.prototype.focus = w.get(n).focus),
            r.removeEventListener("keydown", L, !0),
            r.removeEventListener("keyup", L, !0),
            r.removeEventListener("click", C, !0),
            n.removeEventListener("focus", P, !0),
            n.removeEventListener("blur", M, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", T, !0),
                r.removeEventListener("pointermove", T, !0),
                r.removeEventListener("pointerup", T, !0))
              : (r.removeEventListener("mousedown", T, !0),
                r.removeEventListener("mousemove", T, !0),
                r.removeEventListener("mouseup", T, !0)),
            w.delete(n));
      };
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = m(void 0);
          "loading" !== n.readyState
            ? S(void 0)
            : ((t = () => {
                S(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => O(e, t);
        })();
      let F = !1,
        N = 0;
      function R() {
        (F = !0),
          setTimeout(() => {
            F = !1;
          }, 50);
      }
      function H(e) {
        "touch" === e.pointerType && R();
      }
      function I() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", H)
              : document.addEventListener("touchend", R),
            N++,
            () => {
              --N > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", H)
                  : document.removeEventListener("touchend", R));
            }
          );
      }
      function A(e) {
        let {
            onHoverStart: t,
            onHoverChange: n,
            onHoverEnd: o,
            isDisabled: a,
          } = e,
          [i, l] = (0, r.useState)(!1),
          s = (0, r.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, r.useEffect)(I, []);
        let { hoverProps: d, triggerHoverEnd: u } = (0, r.useMemo)(() => {
          let e = (e, r) => {
              if (
                ((s.pointerType = r),
                a ||
                  "touch" === r ||
                  s.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              s.isHovered = !0;
              let o = e.currentTarget;
              (s.target = o),
                t && t({ type: "hoverstart", target: o, pointerType: r }),
                n && n(!0),
                l(!0);
            },
            r = (e, t) => {
              if (
                ((s.pointerType = ""),
                (s.target = null),
                "touch" === t || !s.isHovered)
              )
                return;
              s.isHovered = !1;
              let r = e.currentTarget;
              o && o({ type: "hoverend", target: r, pointerType: t }),
                n && n(!1),
                l(!1);
            },
            i = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((i.onPointerEnter = (t) => {
                  (F && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (i.onPointerLeave = (e) => {
                  !a &&
                    e.currentTarget.contains(e.target) &&
                    r(e, e.pointerType);
                }))
              : ((i.onTouchStart = () => {
                  s.ignoreEmulatedMouseEvents = !0;
                }),
                (i.onMouseEnter = (t) => {
                  s.ignoreEmulatedMouseEvents || F || e(t, "mouse"),
                    (s.ignoreEmulatedMouseEvents = !1);
                }),
                (i.onMouseLeave = (e) => {
                  !a && e.currentTarget.contains(e.target) && r(e, "mouse");
                })),
            { hoverProps: i, triggerHoverEnd: r }
          );
        }, [t, n, o, a, s]);
        return (
          (0, r.useEffect)(() => {
            a && u({ currentTarget: s.target }, s.pointerType);
          }, [a]),
          { hoverProps: d, isHovered: i }
        );
      }
      var D = n(55075);
      let z = new Set(["id"]),
        W = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        j = new Set([
          "href",
          "hrefLang",
          "target",
          "rel",
          "download",
          "ping",
          "referrerPolicy",
        ]),
        B = /^(data-.*)$/;
      var _ = n(55554),
        V = n(16615),
        G = n(75894),
        K = n(56973),
        Y = n(81340),
        X = n(63416),
        $ = n(672),
        U = n(5712),
        q = n(6548),
        Z = n(25981),
        J = n(27905),
        Q = n(47650);
      let ee = r.createContext(null);
      function et(e) {
        let { children: t } = e,
          n = (0, r.useContext)(ee),
          [o, a] = (0, r.useState)(0),
          i = (0, r.useMemo)(
            () => ({
              parent: n,
              modalCount: o,
              addModal() {
                a((e) => e + 1), n && n.addModal();
              },
              removeModal() {
                a((e) => e - 1), n && n.removeModal();
              },
            }),
            [n, o]
          );
        return r.createElement(ee.Provider, { value: i }, t);
      }
      function en(e) {
        let t;
        let { modalProviderProps: n } = {
          modalProviderProps: {
            "aria-hidden":
              (!!(t = (0, r.useContext)(ee)) && t.modalCount > 0) || null,
          },
        };
        return r.createElement("div", {
          "data-overlay-container": !0,
          ...e,
          ...n,
        });
      }
      function er(e) {
        return r.createElement(et, null, r.createElement(en, e));
      }
      function eo(e) {
        let t = (0, c.wR)(),
          { portalContainer: n = t ? null : document.body, ...o } = e;
        if (
          (r.useEffect(() => {
            if (null == n ? void 0 : n.closest("[data-overlay-container]"))
              throw Error(
                "An OverlayContainer must not be inside another container. Please change the portalContainer prop."
              );
          }, [n]),
          !n)
        )
          return null;
        let a = r.createElement(er, o);
        return Q.createPortal(a, n);
      }
      var ea = n(51251),
        ei = n(53441),
        el = n(14356),
        es = n(60760),
        ed = n(9057),
        eu = n(49509),
        ec = {},
        ef = n(95155),
        ep = (0, K.Rf)((e, t) => {
          let n;
          let {
            Component: g,
            children: m,
            content: h,
            isOpen: y,
            portalContainer: w,
            placement: E,
            disableAnimation: x,
            motionProps: k,
            getTriggerProps: L,
            getTooltipProps: T,
            getTooltipContentProps: C,
          } = (function (e) {
            var t, n;
            let g = (0, G.o)(),
              [m, h] = (0, K.rE)(e, Y.o.variantKeys),
              {
                ref: y,
                as: w,
                isOpen: E,
                content: x,
                children: k,
                defaultOpen: L,
                onOpenChange: T,
                isDisabled: C,
                trigger: P,
                shouldFlip: M = !0,
                containerPadding: S = 12,
                placement: O = "top",
                delay: F = 0,
                closeDelay: N = 500,
                showArrow: R = !1,
                offset: H = 7,
                crossOffset: I = 0,
                isDismissable: Q,
                shouldCloseOnBlur: ee = !0,
                portalContainer: et,
                isKeyboardDismissDisabled: en = !1,
                updatePositionDeps: er = [],
                shouldCloseOnInteractOutside: eo,
                className: ea,
                onClose: ei,
                motionProps: el,
                classNames: es,
                ...ed
              } = m,
              eu =
                null !=
                  (n =
                    null != (t = null == e ? void 0 : e.disableAnimation)
                      ? t
                      : null == g
                      ? void 0
                      : g.disableAnimation) && n,
              ec = (function (e = {}) {
                let { delay: t = 1500, closeDelay: n = 500 } = e,
                  {
                    isOpen: u,
                    open: c,
                    close: f,
                  } = (function (e) {
                    let [t, n] = (0, o.P)(
                        e.isOpen,
                        e.defaultOpen || !1,
                        e.onOpenChange
                      ),
                      a = (0, r.useCallback)(() => {
                        n(!0);
                      }, [n]),
                      i = (0, r.useCallback)(() => {
                        n(!1);
                      }, [n]),
                      l = (0, r.useCallback)(() => {
                        n(!t);
                      }, [n, t]);
                    return {
                      isOpen: t,
                      setOpen: n,
                      open: a,
                      close: i,
                      toggle: l,
                    };
                  })(e),
                  p = (0, r.useMemo)(() => `${++i}`, []),
                  g = (0, r.useRef)(),
                  v = () => {
                    a[p] = b;
                  },
                  m = () => {
                    for (let e in a) e !== p && (a[e](!0), delete a[e]);
                  },
                  h = () => {
                    clearTimeout(g.current),
                      (g.current = null),
                      m(),
                      v(),
                      (l = !0),
                      c(),
                      s && (clearTimeout(s), (s = null)),
                      d && (clearTimeout(d), (d = null));
                  },
                  b = (e) => {
                    e || n <= 0
                      ? (clearTimeout(g.current), (g.current = null), f())
                      : g.current ||
                        (g.current = setTimeout(() => {
                          (g.current = null), f();
                        }, n)),
                      s && (clearTimeout(s), (s = null)),
                      l &&
                        (d && clearTimeout(d),
                        (d = setTimeout(() => {
                          delete a[p], (d = null), (l = !1);
                        }, Math.max(500, n))));
                  },
                  y = () => {
                    m(),
                      v(),
                      u || s || l
                        ? u || h()
                        : (s = setTimeout(() => {
                            (s = null), (l = !0), h();
                          }, t));
                  };
                return (
                  (0, r.useEffect)(
                    () => () => {
                      clearTimeout(g.current), a[p] && delete a[p];
                    },
                    [p]
                  ),
                  {
                    isOpen: u,
                    open: (e) => {
                      e || !(t > 0) || g.current ? h() : y();
                    },
                    close: b,
                  }
                );
              })({
                delay: F,
                closeDelay: N,
                isDisabled: C,
                defaultOpen: L,
                isOpen: E,
                onOpenChange: (e) => {
                  null == T || T(e), e || null == ei || ei();
                },
              }),
              ef = (0, r.useRef)(null),
              ep = (0, r.useRef)(null),
              eg = (0, r.useId)(),
              ev = ec.isOpen && !C;
            (0, r.useImperativeHandle)(y, () => (0, q.mK)(ep));
            let { triggerProps: em, tooltipProps: eh } = (function (e, t, n) {
                let { isDisabled: o, trigger: a } = e,
                  i = (function (e) {
                    let [t, n] = (0, r.useState)(void 0),
                      o = (0, r.useRef)(null),
                      a = (0, c.Cc)(t),
                      i = (0, r.useCallback)((e) => {
                        o.current = e;
                      }, []);
                    return (
                      f && p.set(a, i),
                      u(
                        () => () => {
                          p.delete(a);
                        },
                        [a]
                      ),
                      (0, r.useEffect)(() => {
                        let e = o.current;
                        e && ((o.current = null), n(e));
                      }),
                      a
                    );
                  })(),
                  l = (0, r.useRef)(!1),
                  s = (0, r.useRef)(!1),
                  d = () => {
                    (l.current || s.current) && t.open(s.current);
                  },
                  g = (e) => {
                    l.current || s.current || t.close(e);
                  };
                (0, r.useEffect)(() => {
                  let e = (e) => {
                    n &&
                      n.current &&
                      "Escape" === e.key &&
                      (e.stopPropagation(), t.close(!0));
                  };
                  if (t.isOpen)
                    return (
                      document.addEventListener("keydown", e, !0),
                      () => {
                        document.removeEventListener("keydown", e, !0);
                      }
                    );
                }, [n, t]);
                let m = () => {
                    (s.current = !1), (l.current = !1), g(!0);
                  },
                  { hoverProps: h } = A({
                    isDisabled: o,
                    onHoverStart: () => {
                      "focus" !== a &&
                        ("pointer" === b ? (l.current = !0) : (l.current = !1),
                        d());
                    },
                    onHoverEnd: () => {
                      "focus" !== a &&
                        ((s.current = !1), (l.current = !1), g());
                    },
                  }),
                  { focusableProps: y } = (0, D.W)(
                    {
                      isDisabled: o,
                      onFocus: () => {
                        "pointer" !== b && ((s.current = !0), d());
                      },
                      onBlur: () => {
                        (s.current = !1), (l.current = !1), g(!0);
                      },
                    },
                    n
                  );
                return {
                  triggerProps: {
                    "aria-describedby": t.isOpen ? i : void 0,
                    ...v(y, h, { onPointerDown: m, onKeyDown: m }),
                  },
                  tooltipProps: { id: i },
                };
              })({ isDisabled: C, trigger: P }, ec, ef),
              { tooltipProps: eb } = (function (e, t) {
                let n = (function (e, t = {}) {
                    let { labelable: n, isLink: r, propNames: o } = t,
                      a = {};
                    for (let t in e)
                      Object.prototype.hasOwnProperty.call(e, t) &&
                        (z.has(t) ||
                          (n && W.has(t)) ||
                          (r && j.has(t)) ||
                          (null == o ? void 0 : o.has(t)) ||
                          B.test(t)) &&
                        (a[t] = e[t]);
                    return a;
                  })(e, { labelable: !0 }),
                  { hoverProps: r } = A({
                    onHoverStart: () => (null == t ? void 0 : t.open(!0)),
                    onHoverEnd: () => (null == t ? void 0 : t.close()),
                  });
                return { tooltipProps: v(n, r, { role: "tooltip" }) };
              })({ isOpen: ev, ...v(m, eh) }, ec),
              {
                overlayProps: ey,
                placement: ew,
                updatePosition: eE,
              } = (0, _.v)({
                isOpen: ev,
                targetRef: ef,
                placement: (0, Z.VO)(O),
                overlayRef: ep,
                offset: R ? H + 3 : H,
                crossOffset: I,
                shouldFlip: M,
                containerPadding: S,
              });
            (0, J.U)(() => {
              er.length && eE();
            }, er);
            let { overlayProps: ex } = (0, V.e)(
                {
                  isOpen: ev,
                  onClose: ec.close,
                  isDismissable: Q,
                  shouldCloseOnBlur: ee,
                  isKeyboardDismissDisabled: en,
                  shouldCloseOnInteractOutside: eo,
                },
                ep
              ),
              ek = (0, r.useMemo)(() => {
                var t, n, r;
                return (0, Y.o)({
                  ...h,
                  disableAnimation: eu,
                  radius:
                    null != (t = null == e ? void 0 : e.radius) ? t : "md",
                  size: null != (n = null == e ? void 0 : e.size) ? n : "md",
                  shadow:
                    null != (r = null == e ? void 0 : e.shadow) ? r : "sm",
                });
              }, [
                (0, X.t6)(h),
                eu,
                null == e ? void 0 : e.radius,
                null == e ? void 0 : e.size,
                null == e ? void 0 : e.shadow,
              ]),
              eL = (0, r.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    ...v(em, e),
                    ref: (function () {
                      for (
                        var e = arguments.length, t = Array(e), n = 0;
                        n < e;
                        n++
                      )
                        t[n] = arguments[n];
                      return (e) => {
                        t.forEach((t) =>
                          (function (e, t) {
                            if (null != e) {
                              if ((0, $.Tn)(e)) {
                                e(t);
                                return;
                              }
                              try {
                                e.current = t;
                              } catch (n) {
                                throw Error(
                                  "Cannot assign value '"
                                    .concat(t, "' to ref '")
                                    .concat(e, "'")
                                );
                              }
                            }
                          })(t, e)
                        );
                      };
                    })(t, ef),
                    "aria-describedby": ev ? eg : void 0,
                  };
                },
                [em, ev, eg, ec]
              ),
              eT = (0, r.useCallback)(
                () => ({
                  ref: ep,
                  "data-slot": "base",
                  "data-open": (0, $.sE)(ev),
                  "data-arrow": (0, $.sE)(R),
                  "data-disabled": (0, $.sE)(C),
                  "data-placement": (0, Z.Fh)(ew, O),
                  ...v(eb, ex, ed),
                  style: v(ey.style, ed.style, m.style),
                  className: ek.base({ class: null == es ? void 0 : es.base }),
                  id: eg,
                }),
                [ek, ev, R, C, ew, O, eb, ex, ed, ey, m, eg]
              ),
              eC = (0, r.useCallback)(
                () => ({
                  "data-slot": "content",
                  "data-open": (0, $.sE)(ev),
                  "data-arrow": (0, $.sE)(R),
                  "data-disabled": (0, $.sE)(C),
                  "data-placement": (0, Z.Fh)(ew, O),
                  className: ek.content({
                    class: (0, U.$)(null == es ? void 0 : es.content, ea),
                  }),
                }),
                [ek, ev, R, C, ew, O, es]
              );
            return {
              Component: w || "div",
              content: x,
              children: k,
              isOpen: ev,
              triggerRef: ef,
              showArrow: R,
              portalContainer: et,
              placement: O,
              disableAnimation: eu,
              isDisabled: C,
              motionProps: el,
              getTooltipContentProps: eC,
              getTriggerProps: eL,
              getTooltipProps: eT,
            };
          })({ ...e, ref: t });
          try {
            let e = r.Children.count(m);
            if (1 !== e) throw Error();
            n = (0, r.isValidElement)(m)
              ? (0, r.cloneElement)(m, L(m.props, m.ref))
              : (0, ef.jsx)("p", { ...L(), children: m });
          } catch (e) {
            (n = (0, ef.jsx)("span", {})),
              (function (e, t, ...n) {
                var r;
                let o = `[Next UI] : ${e}`;
                "undefined" != typeof console &&
                  !ec[o] &&
                  ((ec[o] = !0),
                  (null == (r = null == eu ? void 0 : eu.env)
                    ? void 0
                    : r.NODE_ENV) !== "production") &&
                  console.warn(o, n);
              })(
                "Tooltip must have only one child node. Please, check your code."
              );
          }
          let { ref: P, id: M, style: S, ...O } = T(),
            F = (0, ef.jsx)("div", {
              ref: P,
              id: M,
              style: S,
              children: (0, ef.jsx)(ea.F, {
                features: ei.l,
                children: (0, ef.jsx)(el.m.div, {
                  animate: "enter",
                  exit: "exit",
                  initial: "exit",
                  variants: ed.zF.scaleSpring,
                  ...v(k, O),
                  style: { ...(0, Z.kn)(E) },
                  children: (0, ef.jsx)(g, { ...C(), children: h }),
                }),
              }),
            });
          return (0, ef.jsxs)(ef.Fragment, {
            children: [
              n,
              x && y
                ? (0, ef.jsx)(eo, {
                    portalContainer: w,
                    children: (0, ef.jsx)("div", {
                      ref: P,
                      id: M,
                      style: S,
                      ...O,
                      children: (0, ef.jsx)(g, { ...C(), children: h }),
                    }),
                  })
                : (0, ef.jsx)(es.N, {
                    children: y
                      ? (0, ef.jsx)(eo, { portalContainer: w, children: F })
                      : null,
                  }),
            ],
          });
        });
      ep.displayName = "NextUI.Tooltip";
      var eg = ep;
    },
    93226: (e, t, n) => {
      n.d(t, { y: () => U });
      var r = n(99216),
        o = n(12115),
        a = n(16615),
        i = n(55554),
        l = (e, t, n) => {
          let r = null == t ? void 0 : t.current;
          if (!r || !r.contains(e)) {
            let e = document.querySelectorAll(
                "body > span[data-focus-scope-start]"
              ),
              t = [];
            if (
              (e.forEach((e) => {
                t.push(e.nextElementSibling);
              }),
              1 === t.length)
            )
              return n.close(), !1;
          }
          return !r || !r.contains(e);
        },
        s = n(25981),
        d = new WeakMap(),
        u = [],
        c = n(78607),
        f = n(27905),
        p = n(6548),
        g = n(51828);
      let v = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        m = (e) =>
          e && "window" in e && e.window === e ? e : v(e).defaultView || window,
        h = null,
        b = new Set(),
        y = new Map(),
        w = !1,
        E = !1,
        x = { Tab: !0, Escape: !0 };
      function k(e, t) {
        for (let n of b) n(e, t);
      }
      function L(e) {
        var t, n;
        if (
          ((w = !0),
          !(
            e.metaKey ||
            ((t = /^Mac/i),
            !(
              "undefined" != typeof window &&
              null != window.navigator &&
              t.test(
                (null === (n = window.navigator.userAgentData) || void 0 === n
                  ? void 0
                  : n.platform) || window.navigator.platform
              )
            ) && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key
          ))
        )
          (h = "keyboard"), k("keyboard", e);
      }
      function T(e) {
        (h = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((w = !0), k("pointer", e));
      }
      function C(e) {
        var t, n;
        if (
          (0 === e.mozInputSource && e.isTrusted) ||
          (((t = /Android/i),
          "undefined" != typeof window &&
            null != window.navigator &&
            ((null === (n = window.navigator.userAgentData) || void 0 === n
              ? void 0
              : n.brands.some((e) => t.test(e.brand))) ||
              t.test(window.navigator.userAgent)) &&
            e.pointerType)
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        )
          (w = !0), (h = "virtual");
      }
      function P(e) {
        e.target !== window &&
          e.target !== document &&
          (w || E || ((h = "virtual"), k("virtual", e)), (w = !1), (E = !1));
      }
      function M() {
        (w = !1), (E = !0);
      }
      function S(e) {
        if ("undefined" == typeof window || y.get(m(e))) return;
        let t = m(e),
          n = v(e),
          r = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (w = !0), r.apply(this, arguments);
        }),
          n.addEventListener("keydown", L, !0),
          n.addEventListener("keyup", L, !0),
          n.addEventListener("click", C, !0),
          t.addEventListener("focus", P, !0),
          t.addEventListener("blur", M, !1),
          "undefined" != typeof PointerEvent
            ? (n.addEventListener("pointerdown", T, !0),
              n.addEventListener("pointermove", T, !0),
              n.addEventListener("pointerup", T, !0))
            : (n.addEventListener("mousedown", T, !0),
              n.addEventListener("mousemove", T, !0),
              n.addEventListener("mouseup", T, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              O(e);
            },
            { once: !0 }
          ),
          y.set(t, { focus: r });
      }
      let O = (e, t) => {
        let n = m(e),
          r = v(e);
        t && r.removeEventListener("DOMContentLoaded", t),
          y.has(n) &&
            ((n.HTMLElement.prototype.focus = y.get(n).focus),
            r.removeEventListener("keydown", L, !0),
            r.removeEventListener("keyup", L, !0),
            r.removeEventListener("click", C, !0),
            n.removeEventListener("focus", P, !0),
            n.removeEventListener("blur", M, !1),
            "undefined" != typeof PointerEvent
              ? (r.removeEventListener("pointerdown", T, !0),
                r.removeEventListener("pointermove", T, !0),
                r.removeEventListener("pointerup", T, !0))
              : (r.removeEventListener("mousedown", T, !0),
                r.removeEventListener("mousemove", T, !0),
                r.removeEventListener("mouseup", T, !0)),
            y.delete(n));
      };
      function F() {
        return "pointer" !== h;
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let n = v(void 0);
          "loading" !== n.readyState
            ? S(void 0)
            : ((t = () => {
                S(e);
              }),
              n.addEventListener("DOMContentLoaded", t)),
            () => O(e, t);
        })();
      let N = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        R = "undefined" != typeof document ? o.useLayoutEffect : () => {};
      class H {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function I(e) {
        let t = (0, o.useRef)({ isFocused: !1, observer: null });
        R(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let n = (function (e) {
          let t = (0, o.useRef)(null);
          return (
            R(() => {
              t.current = e;
            }, [e]),
            (0, o.useCallback)((...e) => {
              let n = t.current;
              return null == n ? void 0 : n(...e);
            }, [])
          );
        })((t) => {
          null == e || e(t);
        });
        return (0, o.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let r = e.target;
              r.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    r.disabled && n(new H("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let n =
                      r === document.activeElement
                        ? null
                        : document.activeElement;
                    r.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: n })
                    ),
                      r.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: n,
                        })
                      );
                  }
                })),
                t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [n]
        );
      }
      var A = n(27132),
        D = n(35421),
        z = n(38399),
        W = n(75894),
        j = n(56973),
        B = n(81340),
        _ = n(63416),
        V = n(5712),
        G = n(672),
        K = n(14127),
        Y = n(60760),
        X = n(95155),
        $ = (0, j.Rf)((e, t) => {
          let { children: n, ...h } = e,
            y = (function (e) {
              var t, n, r;
              let h = (0, W.o)(),
                [y, w] = (0, j.rE)(e, B.o.variantKeys),
                {
                  as: E,
                  ref: k,
                  children: L,
                  state: T,
                  triggerRef: C,
                  scrollRef: P,
                  defaultOpen: M,
                  onOpenChange: O,
                  isOpen: R,
                  isNonModal: H = !0,
                  shouldFlip: K = !0,
                  containerPadding: Y = 12,
                  shouldBlockScroll: X = !1,
                  isDismissable: $ = !0,
                  shouldCloseOnBlur: U,
                  portalContainer: q,
                  updatePositionDeps: Z,
                  dialogProps: J,
                  placement: Q = "top",
                  triggerType: ee = "dialog",
                  showArrow: et = !1,
                  offset: en = 7,
                  crossOffset: er = 0,
                  boundaryElement: eo,
                  isKeyboardDismissDisabled: ea,
                  shouldCloseOnInteractOutside: ei,
                  motionProps: el,
                  className: es,
                  classNames: ed,
                  onClose: eu,
                  ...ec
                } = y,
                ef = (0, p.zD)(k),
                ep = (0, o.useRef)(null),
                eg = (0, o.useRef)(!1),
                ev = C || ep,
                em =
                  null !=
                    (n =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == h
                        ? void 0
                        : h.disableAnimation) && n,
                eh = (function (e) {
                  let [t, n] = (0, g.P)(
                      e.isOpen,
                      e.defaultOpen || !1,
                      e.onOpenChange
                    ),
                    r = (0, o.useCallback)(() => {
                      n(!0);
                    }, [n]),
                    a = (0, o.useCallback)(() => {
                      n(!1);
                    }, [n]),
                    i = (0, o.useCallback)(() => {
                      n(!t);
                    }, [n, t]);
                  return {
                    isOpen: t,
                    setOpen: n,
                    open: r,
                    close: a,
                    toggle: i,
                  };
                })({
                  isOpen: R,
                  defaultOpen: M,
                  onOpenChange: (e) => {
                    null == O || O(e), e || null == eu || eu();
                  },
                }),
                eb = T || eh,
                {
                  popoverProps: ey,
                  underlayProps: ew,
                  placement: eE,
                } = (function (e, t) {
                  let {
                      triggerRef: n,
                      popoverRef: r,
                      showArrow: p,
                      offset: g = 7,
                      crossOffset: v = 0,
                      scrollRef: m,
                      shouldFlip: h,
                      boundaryElement: b,
                      isDismissable: y = !0,
                      shouldCloseOnBlur: w = !0,
                      placement: E = "top",
                      containerPadding: x,
                      shouldCloseOnInteractOutside: k,
                      isNonModal: L,
                      isKeyboardDismissDisabled: T,
                      updatePositionDeps: C = [],
                      ...P
                    } = e,
                    M = null == L || L,
                    { overlayProps: S, underlayProps: O } = (0, a.e)(
                      {
                        isOpen: t.isOpen,
                        onClose: t.close,
                        shouldCloseOnBlur: w,
                        isDismissable: y,
                        isKeyboardDismissDisabled: T,
                        shouldCloseOnInteractOutside: k || ((e) => l(e, n, t)),
                      },
                      r
                    ),
                    {
                      overlayProps: F,
                      arrowProps: N,
                      placement: R,
                      updatePosition: H,
                    } = (0, i.v)({
                      ...P,
                      shouldFlip: h,
                      crossOffset: v,
                      targetRef: n,
                      overlayRef: r,
                      isOpen: t.isOpen,
                      scrollRef: m,
                      boundaryElement: b,
                      containerPadding: x,
                      placement: (0, s.VO)(E),
                      offset: p ? g + 3 : g,
                      onClose: M ? t.close : () => {},
                    });
                  return (
                    (0, f.U)(() => {
                      C.length && H();
                    }, C),
                    (0, o.useEffect)(() => {
                      if (t.isOpen && !M && r.current)
                        return (function (e) {
                          let t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : document.body,
                            n = new Set(e),
                            r = new Set(),
                            o = (e) => {
                              for (let t of e.querySelectorAll(
                                "[data-live-announcer], [data-react-aria-top-layer]"
                              ))
                                n.add(t);
                              let t = (e) => {
                                  let t = e.parentElement;
                                  if (
                                    n.has(e) ||
                                    (r.has(t) &&
                                      "row" !== t.getAttribute("role"))
                                  )
                                    return NodeFilter.FILTER_REJECT;
                                  for (let t of n)
                                    if (e.contains(t))
                                      return NodeFilter.FILTER_SKIP;
                                  return NodeFilter.FILTER_ACCEPT;
                                },
                                o = document.createTreeWalker(
                                  e,
                                  NodeFilter.SHOW_ELEMENT,
                                  { acceptNode: t }
                                ),
                                i = t(e);
                              if (
                                (i === NodeFilter.FILTER_ACCEPT && a(e),
                                i !== NodeFilter.FILTER_REJECT)
                              ) {
                                let e = o.nextNode();
                                for (; null != e; ) a(e), (e = o.nextNode());
                              }
                            },
                            a = (e) => {
                              var t;
                              let n = null != (t = d.get(e)) ? t : 0;
                              ("true" !== e.getAttribute("aria-hidden") ||
                                0 !== n) &&
                                (0 === n &&
                                  e.setAttribute("aria-hidden", "true"),
                                r.add(e),
                                d.set(e, n + 1));
                            };
                          u.length && u[u.length - 1].disconnect(), o(t);
                          let i = new MutationObserver((e) => {
                            for (let t of e)
                              if (
                                "childList" === t.type &&
                                0 !== t.addedNodes.length &&
                                ![...n, ...r].some((e) => e.contains(t.target))
                              ) {
                                for (let e of t.removedNodes)
                                  e instanceof Element &&
                                    (n.delete(e), r.delete(e));
                                for (let e of t.addedNodes)
                                  (e instanceof HTMLElement ||
                                    e instanceof SVGElement) &&
                                  ("true" === e.dataset.liveAnnouncer ||
                                    "true" === e.dataset.reactAriaTopLayer)
                                    ? n.add(e)
                                    : e instanceof Element && o(e);
                              }
                          });
                          i.observe(t, { childList: !0, subtree: !0 });
                          let l = {
                            observe() {
                              i.observe(t, { childList: !0, subtree: !0 });
                            },
                            disconnect() {
                              i.disconnect();
                            },
                          };
                          return (
                            u.push(l),
                            () => {
                              for (let e of (i.disconnect(), r)) {
                                let t = d.get(e);
                                null != t &&
                                  (1 === t
                                    ? (e.removeAttribute("aria-hidden"),
                                      d.delete(e))
                                    : d.set(e, t - 1));
                              }
                              l === u[u.length - 1]
                                ? (u.pop(),
                                  u.length && u[u.length - 1].observe())
                                : u.splice(u.indexOf(l), 1);
                            }
                          );
                        })([r.current]);
                    }, [M, t.isOpen, r]),
                    {
                      popoverProps: (0, c.v)(S, F),
                      arrowProps: N,
                      underlayProps: O,
                      placement: R,
                    }
                  );
                })(
                  {
                    triggerRef: ev,
                    isNonModal: H,
                    popoverRef: ef,
                    placement: Q,
                    offset: en,
                    scrollRef: P,
                    isDismissable: $,
                    shouldCloseOnBlur: U,
                    boundaryElement: eo,
                    crossOffset: er,
                    shouldFlip: K,
                    containerPadding: Y,
                    updatePositionDeps: Z,
                    isKeyboardDismissDisabled: ea,
                    shouldCloseOnInteractOutside: ei,
                  },
                  eb
                ),
                { triggerProps: ex } = (function (e, t, n) {
                  let r,
                    { type: a } = e,
                    { isOpen: i } = t;
                  (0, o.useEffect)(() => {
                    n && n.current && (0, A.a).set(n.current, t.close);
                  }),
                    "menu" === a
                      ? (r = !0)
                      : "listbox" === a && (r = "listbox");
                  let l = (0, D.Bi)();
                  return {
                    triggerProps: {
                      "aria-haspopup": r,
                      "aria-expanded": i,
                      "aria-controls": i ? l : null,
                      onPress: t.toggle,
                    },
                    overlayProps: { id: l },
                  };
                })({ type: ee }, eb, ev),
                {
                  isFocusVisible: ek,
                  isFocused: eL,
                  focusProps: eT,
                } = (function (e = {}) {
                  var t, n, r;
                  let { autoFocus: a = !1, isTextInput: i, within: l } = e,
                    s = (0, o.useRef)({
                      isFocused: !1,
                      isFocusVisible: a || F(),
                    }),
                    [d, u] = (0, o.useState)(!1),
                    [c, f] = (0, o.useState)(
                      () => s.current.isFocused && s.current.isFocusVisible
                    ),
                    p = (0, o.useCallback)(
                      () => f(s.current.isFocused && s.current.isFocusVisible),
                      []
                    ),
                    g = (0, o.useCallback)(
                      (e) => {
                        (s.current.isFocused = e), u(e), p();
                      },
                      [p]
                    );
                  (t = (e) => {
                    (s.current.isFocusVisible = e), p();
                  }),
                    (n = []),
                    (r = { isTextInput: i }),
                    S(),
                    (0, o.useEffect)(() => {
                      let e = (e, n) => {
                        (function (e, t, n) {
                          var r;
                          let o =
                              "undefined" != typeof window
                                ? m(null == n ? void 0 : n.target)
                                    .HTMLInputElement
                                : HTMLInputElement,
                            a =
                              "undefined" != typeof window
                                ? m(null == n ? void 0 : n.target)
                                    .HTMLTextAreaElement
                                : HTMLTextAreaElement,
                            i =
                              "undefined" != typeof window
                                ? m(null == n ? void 0 : n.target).HTMLElement
                                : HTMLElement,
                            l =
                              "undefined" != typeof window
                                ? m(null == n ? void 0 : n.target).KeyboardEvent
                                : KeyboardEvent;
                          return !(
                            (e =
                              e ||
                              ((null == n ? void 0 : n.target) instanceof o &&
                                !N.has(
                                  null == n
                                    ? void 0
                                    : null === (r = n.target) || void 0 === r
                                    ? void 0
                                    : r.type
                                )) ||
                              (null == n ? void 0 : n.target) instanceof a ||
                              ((null == n ? void 0 : n.target) instanceof i &&
                                (null == n
                                  ? void 0
                                  : n.target.isContentEditable))) &&
                            "keyboard" === t &&
                            n instanceof l &&
                            !x[n.key]
                          );
                        })(!!(null == r ? void 0 : r.isTextInput), e, n) &&
                          t(F());
                      };
                      return (
                        b.add(e),
                        () => {
                          b.delete(e);
                        }
                      );
                    }, n);
                  let { focusProps: h } = (function (e) {
                      let {
                          isDisabled: t,
                          onFocus: n,
                          onBlur: r,
                          onFocusChange: a,
                        } = e,
                        i = (0, o.useCallback)(
                          (e) => {
                            if (e.target === e.currentTarget)
                              return r && r(e), a && a(!1), !0;
                          },
                          [r, a]
                        ),
                        l = I(i),
                        s = (0, o.useCallback)(
                          (e) => {
                            let t = v(e.target);
                            e.target === e.currentTarget &&
                              t.activeElement === e.target &&
                              (n && n(e), a && a(!0), l(e));
                          },
                          [a, n, l]
                        );
                      return {
                        focusProps: {
                          onFocus: !t && (n || a || r) ? s : void 0,
                          onBlur: !t && (r || a) ? i : void 0,
                        },
                      };
                    })({ isDisabled: l, onFocusChange: g }),
                    { focusWithinProps: y } = (function (e) {
                      let {
                          isDisabled: t,
                          onBlurWithin: n,
                          onFocusWithin: r,
                          onFocusWithinChange: a,
                        } = e,
                        i = (0, o.useRef)({ isFocusWithin: !1 }),
                        l = (0, o.useCallback)(
                          (e) => {
                            i.current.isFocusWithin &&
                              !e.currentTarget.contains(e.relatedTarget) &&
                              ((i.current.isFocusWithin = !1),
                              n && n(e),
                              a && a(!1));
                          },
                          [n, a, i]
                        ),
                        s = I(l),
                        d = (0, o.useCallback)(
                          (e) => {
                            i.current.isFocusWithin ||
                              document.activeElement !== e.target ||
                              (r && r(e),
                              a && a(!0),
                              (i.current.isFocusWithin = !0),
                              s(e));
                          },
                          [r, a, s]
                        );
                      return t
                        ? {
                            focusWithinProps: {
                              onFocus: void 0,
                              onBlur: void 0,
                            },
                          }
                        : { focusWithinProps: { onFocus: d, onBlur: l } };
                    })({ isDisabled: !l, onFocusWithinChange: g });
                  return {
                    isFocused: d,
                    isFocusVisible: c,
                    focusProps: l ? y : h,
                  };
                })(),
                eC = (0, o.useMemo)(() => (0, B.o)({ ...w }), [(0, _.t6)(w)]),
                eP = (0, V.$)(null == ed ? void 0 : ed.base, es),
                eM = (0, o.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      "data-slot": "content",
                      "data-open": (0, G.sE)(eb.isOpen),
                      "data-arrow": (0, G.sE)(et),
                      "data-placement": (0, s.Fh)(eE, Q),
                      className: eC.content({
                        class: (0, V.$)(
                          null == ed ? void 0 : ed.content,
                          e.className
                        ),
                      }),
                    };
                  },
                  [eC, eb.isOpen, et, eE, Q, ed]
                ),
                eS = (0, o.useMemo)(
                  () => ((0, s.p8)(eE, Q) && eE) || Q,
                  [eE, Q]
                ),
                eO = (0, o.useCallback)(
                  (t) => {
                    var n;
                    let r;
                    return (
                      "touch" === t.pointerType &&
                      ((null == e ? void 0 : e.backdrop) === "blur" ||
                        (null == e ? void 0 : e.backdrop) === "opaque")
                        ? (r = setTimeout(() => {
                            eg.current = !0;
                          }, 100))
                        : (eg.current = !0),
                      null == (n = ex.onPress) || n.call(ex, t),
                      () => {
                        clearTimeout(r);
                      }
                    );
                  },
                  [null == ex ? void 0 : ex.onPress]
                ),
                eF = (0, o.useCallback)(
                  function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : null,
                      { isDisabled: n, ...r } = e;
                    return {
                      "data-slot": "trigger",
                      ...(0, c.v)({ "aria-haspopup": "dialog" }, ex, r),
                      onPress: eO,
                      isDisabled: n,
                      className: eC.trigger({
                        class: (0, V.$)(
                          null == ed ? void 0 : ed.trigger,
                          e.className
                        ),
                        isTriggerDisabled: n,
                      }),
                      ref: (function (...e) {
                        return 1 === e.length
                          ? e[0]
                          : (t) => {
                              for (let n of e)
                                "function" == typeof n
                                  ? n(t)
                                  : null != n && (n.current = t);
                            };
                      })(t, ev),
                    };
                  },
                  [eb, ex, eO, ev]
                ),
                eN = (0, o.useCallback)(
                  function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      "data-slot": "backdrop",
                      className: eC.backdrop({
                        class: null == ed ? void 0 : ed.backdrop,
                      }),
                      onClick: (e) => {
                        if (!eg.current) {
                          e.preventDefault();
                          return;
                        }
                        eb.close(), (eg.current = !1);
                      },
                      ...ew,
                      ...e,
                    };
                  },
                  [eC, eb.isOpen, ed, ew]
                );
              return (
                (0, o.useEffect)(() => {
                  if (eb.isOpen && (null == ef ? void 0 : ef.current))
                    return (0, z.h)([null == ef ? void 0 : ef.current]);
                }, [eb.isOpen, ef]),
                {
                  state: eb,
                  Component: E || "div",
                  children: L,
                  classNames: ed,
                  showArrow: et,
                  triggerRef: ev,
                  placement: eS,
                  isNonModal: H,
                  popoverRef: ef,
                  portalContainer: q,
                  isOpen: eb.isOpen,
                  onClose: eb.close,
                  disableAnimation: em,
                  shouldBlockScroll: X,
                  backdrop: null != (r = e.backdrop) ? r : "transparent",
                  motionProps: el,
                  getBackdropProps: eN,
                  getPopoverProps: function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      ref: ef,
                      ...(0, c.v)(ey, ec, e),
                      style: (0, c.v)(ey.style, ec.style, e.style),
                    };
                  },
                  getTriggerProps: eF,
                  getDialogProps: function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    return {
                      "data-slot": "base",
                      "data-open": (0, G.sE)(eb.isOpen),
                      "data-focus": (0, G.sE)(eL),
                      "data-arrow": (0, G.sE)(et),
                      "data-focus-visible": (0, G.sE)(ek),
                      "data-placement": (0, s.Fh)(eE, Q),
                      ...(0, c.v)(eT, J, e),
                      className: eC.base({ class: (0, V.$)(eP) }),
                      style: { outline: "none" },
                    };
                  },
                  getContentProps: eM,
                }
              );
            })({ ...h, ref: t }),
            [w, E] = o.Children.toArray(n),
            k = (0, X.jsx)(K.hJ, {
              portalContainer: y.portalContainer,
              children: E,
            });
          return (0, X.jsxs)(r.p, {
            value: y,
            children: [
              w,
              y.disableAnimation && y.isOpen
                ? k
                : (0, X.jsx)(Y.N, { children: y.isOpen ? k : null }),
            ],
          });
        });
      $.displayName = "NextUI.Popover";
      var U = $;
    },
    99216: (e, t, n) => {
      n.d(t, { C: () => o, p: () => r });
      var [r, o] = (0, n(42810).q)({
        name: "PopoverContext",
        errorMessage:
          "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`",
      });
    },
  },
]);
