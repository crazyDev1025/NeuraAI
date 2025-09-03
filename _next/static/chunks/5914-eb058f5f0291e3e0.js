(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5914],
  {
    10255: (t, n, e) => {
      "use strict";
      function r(t) {
        let { moduleIds: n } = t;
        return null;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        e(95155),
        e(47650),
        e(85744),
        e(20589);
    },
    17828: (t, n, e) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = (0, e(64054).createAsyncLocalStorage)();
    },
    24220: () => {},
    35695: (t, n, e) => {
      "use strict";
      var r = e(18999);
      e.o(r, "useParams") &&
        e.d(n, {
          useParams: function () {
            return r.useParams;
          },
        }),
        e.o(r, "useRouter") &&
          e.d(n, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        e.o(r, "useSearchParams") &&
          e.d(n, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          });
    },
    36645: (t, n, e) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = e(88229)._(e(67357));
      function i(t, n) {
        var e;
        let i = {};
        "function" == typeof t && (i.loader = t);
        let a = { ...i, ...n };
        return (0, r.default)({
          ...a,
          modules: null == (e = a.loadableGenerated) ? void 0 : e.modules,
        });
      }
      ("function" == typeof n.default ||
        ("object" == typeof n.default && null !== n.default)) &&
        void 0 === n.default.__esModule &&
        (Object.defineProperty(n.default, "__esModule", { value: !0 }),
        Object.assign(n.default, n),
        (t.exports = n.default));
    },
    55028: (t, n, e) => {
      "use strict";
      e.d(n, { default: () => i.a });
      var r = e(36645),
        i = e.n(r);
    },
    62146: (t, n, e) => {
      "use strict";
      function r(t) {
        let { reason: n, children: e } = t;
        return e;
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        e(45262);
    },
    64054: (t, n) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        !(function (t, n) {
          for (var e in n)
            Object.defineProperty(t, e, { enumerable: !0, get: n[e] });
        })(n, {
          bindSnapshot: function () {
            return o;
          },
          createAsyncLocalStorage: function () {
            return a;
          },
          createSnapshot: function () {
            return u;
          },
        });
      let e = Object.defineProperty(
        Error(
          "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
        ),
        "__NEXT_ERROR_CODE",
        { value: "E504", enumerable: !1, configurable: !0 }
      );
      class r {
        disable() {
          throw e;
        }
        getStore() {}
        run() {
          throw e;
        }
        exit() {
          throw e;
        }
        enterWith() {
          throw e;
        }
        static bind(t) {
          return t;
        }
      }
      let i = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;
      function a() {
        return i ? new i() : new r();
      }
      function o(t) {
        return i ? i.bind(t) : r.bind(t);
      }
      function u() {
        return i
          ? i.snapshot()
          : function (t, ...n) {
              return t(...n);
            };
      }
    },
    67357: (t, n, e) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = e(95155),
        i = e(12115),
        a = e(62146);
      function o(t) {
        return { default: t && "default" in t ? t.default : t };
      }
      e(10255);
      let u = {
          loader: () => Promise.resolve(o(() => null)),
          loading: null,
          ssr: !0,
        },
        s = function (t) {
          let n = { ...u, ...t },
            e = (0, i.lazy)(() => n.loader().then(o)),
            s = n.loading;
          function c(t) {
            let o = s
                ? (0, r.jsx)(s, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = !n.ssr || !!n.loading,
              c = u ? i.Suspense : i.Fragment,
              l = n.ssr
                ? (0, r.jsxs)(r.Fragment, {
                    children: [null, (0, r.jsx)(e, { ...t })],
                  })
                : (0, r.jsx)(a.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, r.jsx)(e, { ...t }),
                  });
            return (0, r.jsx)(c, {
              ...(u ? { fallback: o } : {}),
              children: l,
            });
          }
          return (c.displayName = "LoadableComponent"), c;
        };
    },
    85744: (t, n, e) => {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        Object.defineProperty(n, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return r.workAsyncStorageInstance;
          },
        });
      let r = e(17828);
    },
    98238: (t, n, e) => {
      "use strict";
      var r = e(12115);
      function i(t) {
        return Array.prototype.slice.call(t);
      }
      function a(t, n) {
        var e = Math.floor(t);
        return e === n || e + 1 === n ? t : n;
      }
      function o() {
        return Date.now();
      }
      function u(t, n, e) {
        if (((n = "data-keen-slider-" + n), null === e))
          return t.removeAttribute(n);
        t.setAttribute(n, e || "");
      }
      function s(t, n) {
        return (
          (n = n || document),
          "function" == typeof t && (t = t(n)),
          Array.isArray(t)
            ? t
            : "string" == typeof t
            ? i(n.querySelectorAll(t))
            : t instanceof HTMLElement
            ? [t]
            : t instanceof NodeList
            ? i(t)
            : []
        );
      }
      function c(t) {
        t.raw && (t = t.raw),
          t.cancelable && !t.defaultPrevented && t.preventDefault();
      }
      function l(t) {
        t.raw && (t = t.raw), t.stopPropagation && t.stopPropagation();
      }
      function d() {
        var t = [];
        return {
          add: function (n, e, r, i) {
            n.addListener ? n.addListener(r) : n.addEventListener(e, r, i),
              t.push([n, e, r, i]);
          },
          input: function (t, n, e, r) {
            this.add(
              t,
              n,
              function (t) {
                t.nativeEvent && (t = t.nativeEvent);
                var n = t.changedTouches || [],
                  r = t.targetTouches || [],
                  i = t.detail && t.detail.x ? t.detail : null;
                return e({
                  id: i
                    ? i.identifier
                      ? i.identifier
                      : "i"
                    : r[0]
                    ? r[0]
                      ? r[0].identifier
                      : "e"
                    : "d",
                  idChanged: i
                    ? i.identifier
                      ? i.identifier
                      : "i"
                    : n[0]
                    ? n[0]
                      ? n[0].identifier
                      : "e"
                    : "d",
                  raw: t,
                  x: i && i.x ? i.x : r[0] ? r[0].screenX : i ? i.x : t.pageX,
                  y: i && i.y ? i.y : r[0] ? r[0].screenY : i ? i.y : t.pageY,
                });
              },
              r
            );
          },
          purge: function () {
            t.forEach(function (t) {
              t[0].removeListener
                ? t[0].removeListener(t[2])
                : t[0].removeEventListener(t[1], t[2], t[3]);
            }),
              (t = []);
          },
        };
      }
      function f(t, n, e) {
        return Math.min(Math.max(t, n), e);
      }
      function p(t) {
        return +(t > 0) - +(t < 0) || +t;
      }
      function v(t) {
        var n = t.getBoundingClientRect();
        return {
          height: a(n.height, t.offsetHeight),
          width: a(n.width, t.offsetWidth),
        };
      }
      function h(t, n, e, r) {
        var i = t && t[n];
        return null == i ? e : r && "function" == typeof i ? i() : i;
      }
      function m(t) {
        return Math.round(1e6 * t) / 1e6;
      }
      var g = function () {
        return (g =
          Object.assign ||
          function (t) {
            for (var n, e = 1, r = arguments.length; e < r; e++)
              for (var i in (n = arguments[e]))
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
            return t;
          }).apply(this, arguments);
      };
      function b(t, n, e) {
        if (e || 2 == arguments.length)
          for (var r, i = 0, a = n.length; i < a; i++)
            (!r && i in n) ||
              (r || (r = Array.prototype.slice.call(n, 0, i)), (r[i] = n[i]));
        return t.concat(r || Array.prototype.slice.call(n));
      }
      function y(t) {
        var n, e, r, i, a, o, u, s;
        function c(t) {
          return 1 - Math.pow(1 - t, 3);
        }
        function l() {
          return r ? t.track.velocity() : 0;
        }
        function d(t, n) {
          void 0 === n && (n = 1e3);
          var e = 147e-9 + (t = Math.abs(t)) / n;
          return { dist: Math.pow(t, 2) / e, dur: t / e };
        }
        function v() {
          var n = t.track.details;
          n && ((a = n.min), (o = n.max), (u = n.minIdx), (s = n.maxIdx));
        }
        function h() {
          t.animator.stop();
        }
        t.on("updated", v),
          t.on("optionsChanged", v),
          t.on("created", v),
          t.on("dragStarted", function () {
            (r = !1), h(), (n = e = t.track.details.abs);
          }),
          t.on("dragChecked", function () {
            r = !0;
          }),
          t.on("dragEnded", function () {
            var r,
              v,
              m,
              g,
              b,
              y,
              w = t.options.mode;
            "snap" === w &&
              ((r = t.track),
              (m = (v = t.track.details).position),
              (g = p(l())),
              (m > o || m < a) && (g = 0),
              (b = n + g),
              0 === v.slides[r.absToRel(b)].portion && (b -= g),
              n !== e && (b = e),
              p(r.idxToDist(b, !0)) !== g && (b += g),
              (b = f(b, u, s)),
              (y = r.idxToDist(b, !0)),
              t.animator.start([
                {
                  distance: y,
                  duration: 500,
                  easing: function (t) {
                    return 1 + --t * t * t * t * t;
                  },
                },
              ])),
              ("free" !== w && "free-snap" !== w) ||
                (function () {
                  h();
                  var n = "free-snap" === t.options.mode,
                    e = t.track,
                    r = l();
                  i = p(r);
                  var v = t.track.details,
                    m = [];
                  if (r || !n) {
                    var g = d(r),
                      b = g.dist,
                      y = g.dur;
                    if (((y *= 2), (b *= i), n)) {
                      var w = e.idxToDist(e.distToIdx(b), !0);
                      w && (b = w);
                    }
                    m.push({ distance: b, duration: y, easing: c });
                    var x = v.position,
                      k = x + b;
                    if (k < a || k > o) {
                      var M = k < a ? a - x : o - x,
                        _ = 0,
                        P = r;
                      if (p(M) === i) {
                        var T = Math.min(Math.abs(M) / Math.abs(b), 1),
                          O = (1 - Math.pow(1 - T, 1 / 3)) * y;
                        (m[0].earlyExit = O), (P = r * (1 - T));
                      } else (m[0].earlyExit = 0), (_ += M);
                      var j = d(P, 100),
                        C = j.dist * i;
                      t.options.rubberband &&
                        (m.push({
                          distance: C,
                          duration: 2 * j.dur,
                          easing: c,
                        }),
                        m.push({ distance: -C + _, duration: 500, easing: c }));
                    }
                    t.animator.start(m);
                  } else
                    t.moveToIdx(f(v.abs, u, s), !0, {
                      duration: 500,
                      easing: function (t) {
                        return 1 + --t * t * t * t * t;
                      },
                    });
                })();
          }),
          t.on("dragged", function () {
            e = t.track.details.abs;
          });
      }
      function w(t) {
        var n,
          e,
          r,
          i,
          a,
          o,
          u,
          v,
          h,
          m,
          g,
          b,
          y,
          w,
          x,
          k,
          M,
          _,
          P = d();
        function T(n) {
          if (o && v === n.id) {
            var s = S(n);
            if (h) {
              if (!C(n)) return j(n);
              (m = s), (h = !1), t.emit("dragChecked");
            }
            if (k) return (m = s);
            c(n);
            var d = (function (n) {
              if (M === -1 / 0 && _ === 1 / 0) return n;
              var r = t.track.details,
                o = r.length,
                u = r.position,
                s = f(n, M - u, _ - u);
              if (0 === o) return 0;
              if (!t.options.rubberband) return s;
              if ((u <= _ && u >= M) || (u < M && e > 0) || (u > _ && e < 0))
                return n;
              var c = Math.max(
                0,
                1 - (Math.abs(((u < M ? u - M : u - _) / o) * (i * o)) / a) * 2
              );
              return c * c * n;
            })((u(m - s) / i) * r);
            e = p(d);
            var y = t.track.details.position;
            ((y > M && y < _) || (y === M && e > 0) || (y === _ && e < 0)) &&
              l(n),
              (g += d),
              !b && Math.abs(g * i) > 5 && (b = !0),
              t.track.add(d),
              (m = s),
              t.emit("dragged");
          }
        }
        function O(n) {
          !o &&
            t.track.details &&
            t.track.details.length &&
            ((g = 0),
            (o = !0),
            (b = !1),
            (h = !0),
            (v = n.id),
            C(n),
            (m = S(n)),
            t.emit("dragStarted"));
        }
        function j(n) {
          o && v === n.idChanged && ((o = !1), t.emit("dragEnded"));
        }
        function C(t) {
          var n = E(),
            e = n ? t.y : t.x,
            r = n ? t.x : t.y,
            i =
              void 0 !== y &&
              void 0 !== w &&
              Math.abs(w - r) <= Math.abs(y - e);
          return (y = e), (w = r), i;
        }
        function S(t) {
          return E() ? t.y : t.x;
        }
        function E() {
          return t.options.vertical;
        }
        function A() {
          (i = t.size), (a = E() ? window.innerHeight : window.innerWidth);
          var n = t.track.details;
          n && ((M = n.min), (_ = n.max));
        }
        function I(t) {
          b && (l(t), c(t));
        }
        function L() {
          if ((P.purge(), t.options.drag && !t.options.disabled)) {
            (u =
              "function" == typeof (i = t.options.dragSpeed || 1)
                ? i
                : function (t) {
                    return t * i;
                  }),
              (r = t.options.rtl ? -1 : 1),
              A(),
              (n = t.container),
              (e = "data-keen-slider-clickable"),
              s("[".concat(e, "]:not([").concat(e, "=false])"), n).map(
                function (t) {
                  P.add(t, "dragstart", l),
                    P.add(t, "mousedown", l),
                    P.add(t, "touchstart", l);
                }
              ),
              P.add(n, "dragstart", function (t) {
                c(t);
              }),
              P.add(n, "click", I, { capture: !0 }),
              P.input(n, "ksDragStart", O),
              P.input(n, "ksDrag", T),
              P.input(n, "ksDragEnd", j),
              P.input(n, "mousedown", O),
              P.input(n, "mousemove", T),
              P.input(n, "mouseleave", j),
              P.input(n, "mouseup", j),
              P.input(n, "touchstart", O, { passive: !0 }),
              P.input(n, "touchmove", T, { passive: !1 }),
              P.input(n, "touchend", j),
              P.input(n, "touchcancel", j),
              P.add(window, "wheel", function (t) {
                o && c(t);
              });
            var e,
              i,
              a = "data-keen-slider-scrollable";
            s("[".concat(a, "]:not([").concat(a, "=false])"), t.container).map(
              function (t) {
                var n;
                P.input(
                  t,
                  "touchstart",
                  function (t) {
                    (n = S(t)), (k = !0), (x = !0);
                  },
                  { passive: !0 }
                ),
                  P.input(t, "touchmove", function (e) {
                    var r = E(),
                      i = r
                        ? t.scrollHeight - t.clientHeight
                        : t.scrollWidth - t.clientWidth,
                      a = n - S(e),
                      o = r ? t.scrollTop : t.scrollLeft,
                      u =
                        (r && "scroll" === t.style.overflowY) ||
                        (!r && "scroll" === t.style.overflowX);
                    if (
                      ((n = S(e)),
                      ((a < 0 && o > 0) || (a > 0 && o < i)) && x && u)
                    )
                      return (k = !0);
                    (x = !1), c(e), (k = !1);
                  }),
                  P.input(t, "touchend", function () {
                    k = !1;
                  });
              }
            );
          }
        }
        t.on("updated", A),
          t.on("optionsChanged", L),
          t.on("created", L),
          t.on("destroyed", P.purge);
      }
      function x(t) {
        var n,
          e,
          r = null;
        function i(n, e, r) {
          t.animator.active
            ? o(n, e, r)
            : requestAnimationFrame(function () {
                return o(n, e, r);
              });
        }
        function a() {
          i(!1, !1, e);
        }
        function o(e, i, a) {
          var o = 0,
            u = t.size,
            l = t.track.details;
          if (l && n) {
            var d = l.slides;
            n.forEach(function (t, n) {
              if (e) !r && i && s(t, null, a), c(t, null, a);
              else {
                if (!d[n]) return;
                var l = d[n].size * u;
                !r && i && s(t, l, a), c(t, d[n].distance * u - o, a), (o += l);
              }
            });
          }
        }
        function u(n) {
          return "performance" === t.options.renderMode ? Math.round(n) : n;
        }
        function s(t, n, e) {
          var r = e ? "height" : "width";
          null !== n && (n = u(n) + "px"),
            (t.style["min-" + r] = n),
            (t.style["max-" + r] = n);
        }
        function c(t, n, e) {
          if (null !== n) {
            n = u(n);
            var r = e ? n : 0;
            n = "translate3d(".concat(e ? 0 : n, "px, ").concat(r, "px, 0)");
          }
          (t.style.transform = n), (t.style["-webkit-transform"] = n);
        }
        function l() {
          n && (o(!0, !0, e), (n = null)), t.on("detailsChanged", a, !0);
        }
        function d() {
          i(!1, !0, e);
        }
        function f() {
          l(),
            (e = t.options.vertical),
            t.options.disabled ||
              "custom" === t.options.renderMode ||
              ((r = "auto" === h(t.options.slides, "perView", null)),
              t.on("detailsChanged", a),
              (n = t.slides).length && d());
        }
        t.on("created", f),
          t.on("optionsChanged", f),
          t.on("beforeOptionsChanged", function () {
            l();
          }),
          t.on("updated", d),
          t.on("destroyed", l);
      }
      var k = function (t, n, e) {
        try {
          var r, i, a, c;
          return (
            (i = b(
              [
                ((r = {
                  drag: !0,
                  mode: "snap",
                  renderMode: "precision",
                  rubberband: !0,
                  selector: ".keen-slider__slide",
                }),
                function (n) {
                  var e,
                    i,
                    a,
                    o,
                    c,
                    l,
                    f = d();
                  function p(t) {
                    var e;
                    u(
                      n.container,
                      "reverse",
                      "rtl" !==
                        ((e = n.container),
                        window
                          .getComputedStyle(e, null)
                          .getPropertyValue("direction")) || t
                        ? null
                        : ""
                    ),
                      u(n.container, "v", n.options.vertical && !t ? "" : null),
                      u(
                        n.container,
                        "disabled",
                        n.options.disabled && !t ? "" : null
                      );
                  }
                  function m() {
                    b() && k();
                  }
                  function b() {
                    var t = null;
                    if (
                      (o.forEach(function (n) {
                        n.matches && (t = n.__media);
                      }),
                      t === e)
                    )
                      return !1;
                    e || n.emit("beforeOptionsChanged"), (e = t);
                    var r = t ? a.breakpoints[t] : a;
                    return (n.options = g(g({}, a), r)), p(), O(), j(), _(), !0;
                  }
                  function y() {
                    return n.options.trackConfig.length;
                  }
                  function w(t) {
                    for (var u in ((e = !1),
                    (a = g(g({}, r), t)),
                    f.purge(),
                    (i = n.size),
                    (o = []),
                    a.breakpoints || [])) {
                      var s = window.matchMedia(u);
                      (s.__media = u), o.push(s), f.add(s, "change", m);
                    }
                    f.add(window, "orientationchange", T),
                      f.add(window, "resize", P),
                      b();
                  }
                  function x(t) {
                    n.animator.stop();
                    var e = n.track.details;
                    n.track.init(null != t ? t : e ? e.abs : 0);
                  }
                  function k(t) {
                    x(t), n.emit("optionsChanged");
                  }
                  function M(t, e) {
                    if (t) return w(t), void k(e);
                    O(), j();
                    var r = y();
                    _(), y() !== r ? k(e) : x(e), n.emit("updated");
                  }
                  function _() {
                    var t = n.options.slides;
                    if ("function" == typeof t)
                      return (n.options.trackConfig = t(n.size, n.slides));
                    for (
                      var e = n.slides,
                        r = e.length,
                        i = "number" == typeof t ? t : h(t, "number", r, !0),
                        a = [],
                        o = h(t, "perView", 1, !0),
                        u = h(t, "spacing", 0, !0) / n.size || 0,
                        s = "auto" === o ? u : u / o,
                        c = h(t, "origin", "auto"),
                        l = 0,
                        d = 0;
                      d < i;
                      d++
                    ) {
                      var f =
                          "auto" === o
                            ? (function (t) {
                                var e = v(t);
                                return (
                                  (n.options.vertical ? e.height : e.width) /
                                    n.size || 1
                                );
                              })(e[d])
                            : 1 / o - u + s,
                        p = "center" === c ? 0.5 - f / 2 : "auto" === c ? 0 : c;
                      a.push({ origin: p, size: f, spacing: u }), (l += f);
                    }
                    if (
                      ((l += u * (i - 1)),
                      "auto" === c && !n.options.loop && 1 !== o)
                    ) {
                      var m = 0;
                      a.map(function (t) {
                        var n = l - m;
                        return (
                          (m += t.size + u),
                          n >= 1 || (t.origin = 1 - n - (l > 1 ? 0 : 1 - l)),
                          t
                        );
                      });
                    }
                    n.options.trackConfig = a;
                  }
                  function P() {
                    O();
                    var t = n.size;
                    n.options.disabled || t === i || ((i = t), M());
                  }
                  function T() {
                    P(), setTimeout(P, 500), setTimeout(P, 2e3);
                  }
                  function O() {
                    var t = v(n.container);
                    n.size = (n.options.vertical ? t.height : t.width) || 1;
                  }
                  function j() {
                    n.slides = s(n.options.selector, n.container);
                  }
                  (n.container = (l = s(t, c || document)).length
                    ? l[0]
                    : null),
                    (n.destroy = function () {
                      f.purge(), n.emit("destroyed"), p(!0);
                    }),
                    (n.prev = function () {
                      n.moveToIdx(n.track.details.abs - 1, !0);
                    }),
                    (n.next = function () {
                      n.moveToIdx(n.track.details.abs + 1, !0);
                    }),
                    (n.update = M),
                    w(n.options);
                }),
                x,
                w,
                y,
              ],
              e || [],
              !0
            )),
            (c = {}),
            (a = {
              emit: function (t) {
                c[t] &&
                  c[t].forEach(function (t) {
                    t(a);
                  });
                var n = a.options && a.options[t];
                n && n(a);
              },
              moveToIdx: function (t, n, e) {
                var r = a.track.idxToDist(t, n);
                if (r) {
                  var i = a.options.defaultAnimation;
                  a.animator.start([
                    {
                      distance: r,
                      duration: h(e || i, "duration", 500),
                      easing: h(e || i, "easing", function (t) {
                        return 1 + --t * t * t * t * t;
                      }),
                    },
                  ]);
                }
              },
              on: function (t, n, e) {
                void 0 === e && (e = !1), c[t] || (c[t] = []);
                var r = c[t].indexOf(n);
                r > -1 ? e && delete c[t][r] : e || c[t].push(n);
              },
              options: n,
            }),
            (function () {
              if (
                ((a.track = (function (t) {
                  var n,
                    e,
                    r,
                    i,
                    a,
                    u,
                    s,
                    c,
                    l,
                    d,
                    v,
                    g,
                    y,
                    w,
                    x = 1 / 0,
                    k = [],
                    M = null,
                    _ = 0;
                  function P(t) {
                    A(_ + t);
                  }
                  function T(t) {
                    var n,
                      e = O(_ + t).abs;
                    return ((n = e), S(n) === n) ? e : null;
                  }
                  function O(t) {
                    var n = Math.floor(Math.abs(m(t / e))),
                      r = m(((t % e) + e) % e);
                    r === e && (r = 0);
                    var i = p(t),
                      a = s.indexOf(
                        b([], s, !0).reduce(function (t, n) {
                          return Math.abs(n - r) < Math.abs(t - r) ? n : t;
                        })
                      ),
                      o = a;
                    return (
                      i < 0 && n++,
                      a === u && ((o = 0), (n += i > 0 ? 1 : -1)),
                      { abs: o + n * u * i, origin: a, rel: o }
                    );
                  }
                  function j(t, n, e) {
                    if (n || !i.loop) return C(t, e);
                    if (((r = t), S(r) !== r)) return null;
                    var r,
                      a,
                      o = O(null != e ? e : _),
                      s = o.abs,
                      c = t - o.rel,
                      l = s + c;
                    a = C(l);
                    var d = C(l - u * p(c));
                    return (
                      ((null !== d && Math.abs(d) < Math.abs(a)) ||
                        null === a) &&
                        (a = d),
                      m(a)
                    );
                  }
                  function C(t, n) {
                    if (
                      (null == n && (n = m(_)),
                      (r = t),
                      S(r) !== r || null === t)
                    )
                      return null;
                    t = Math.round(t);
                    var r,
                      i = O(n),
                      a = i.abs,
                      o = i.rel,
                      c = i.origin,
                      l = E(t),
                      d = ((n % e) + e) % e,
                      f = s[c],
                      p = Math.floor((t - (a - o)) / u) * e;
                    return m(f - d - f + s[l] + p + (c === u ? e : 0));
                  }
                  function S(t) {
                    return f(t, l, d);
                  }
                  function E(t) {
                    return ((t % u) + u) % u;
                  }
                  function A(n) {
                    (e = n - _),
                      k.push({ distance: e, timestamp: o() }),
                      k.length > 6 && (k = k.slice(-6)),
                      (_ = m(n));
                    var e,
                      r = I().abs;
                    if (r !== M) {
                      var i = null !== M;
                      (M = r), i && t.emit("slideChanged");
                    }
                  }
                  function I(o) {
                    var s = o
                      ? null
                      : (function () {
                          if (u) {
                            var t = i.loop,
                              n = t ? ((_ % e) + e) % e : _,
                              o = (t ? _ % e : _) - a[0][2],
                              s = 0 - (o < 0 && t ? e - Math.abs(o) : o),
                              c = 0,
                              f = O(_),
                              h = f.abs,
                              m = f.rel,
                              b = a[m][2],
                              x = a.map(function (n, r) {
                                var a = s + c;
                                (a < 0 - n[0] || a > 1) &&
                                  (a +=
                                    (Math.abs(a) > e - 1 && t ? e : 0) * p(-a));
                                var o = r - m,
                                  l = p(o),
                                  d = o + h;
                                t &&
                                  (-1 === l && a > b && (d += u),
                                  1 === l && a < b && (d -= u),
                                  null !== v && d < v && (a += e),
                                  null !== g && d > g && (a -= e));
                                var f = a + n[0] + n[1],
                                  y = Math.max(
                                    a >= 0 && f <= 1
                                      ? 1
                                      : f < 0 || a > 1
                                      ? 0
                                      : a < 0
                                      ? Math.min(1, (n[0] + a) / n[0])
                                      : (1 - a) / n[0],
                                    0
                                  );
                                return (
                                  (c += n[0] + n[1]),
                                  {
                                    abs: d,
                                    distance: i.rtl ? -1 * a + 1 - n[0] : a,
                                    portion: y,
                                    size: n[0],
                                  }
                                );
                              });
                            return (
                              (m = E((h = S(h)))),
                              {
                                abs: S(h),
                                length: r,
                                max: w,
                                maxIdx: d,
                                min: y,
                                minIdx: l,
                                position: _,
                                progress: t ? n / e : _ / r,
                                rel: m,
                                slides: x,
                                slidesLength: e,
                              }
                            );
                          }
                        })();
                    return (n.details = s), t.emit("detailsChanged"), s;
                  }
                  return (n = {
                    absToRel: E,
                    add: P,
                    details: null,
                    distToIdx: T,
                    idxToDist: j,
                    init: function (n) {
                      var o, f, p, b;
                      if (
                        ((function () {
                          if (
                            (u = (a = ((i = t.options).trackConfig || []).map(
                              function (t) {
                                return [
                                  h(t, "size", 1),
                                  h(t, "spacing", 0),
                                  h(t, "origin", 0),
                                ];
                              }
                            )).length)
                          ) {
                            e = m(
                              a.reduce(function (t, n) {
                                return t + n[0] + n[1];
                              }, 0)
                            );
                            var n,
                              o = u - 1;
                            (r = m(e + a[0][2] - a[o][0] - a[o][2] - a[o][1])),
                              (s = a.reduce(function (t, e) {
                                if (!t) return [0];
                                var r = a[t.length - 1],
                                  i = t[t.length - 1] + (r[0] + r[2]) + r[1];
                                return (
                                  (i -= e[2]),
                                  t[t.length - 1] > i && (i = t[t.length - 1]),
                                  (i = m(i)),
                                  t.push(i),
                                  (!n || n < i) && (c = t.length - 1),
                                  (n = i),
                                  t
                                );
                              }, null)),
                              0 === r && (c = 0),
                              s.push(m(e));
                          }
                        })(),
                        !u)
                      )
                        return I(!0);
                      (o = t.options.range),
                        (v = l =
                          (f = t.options.loop) ? h(f, "min", -1 / 0) : 0),
                        (g = d = f ? h(f, "max", x) : c),
                        (p = h(o, "min", null)),
                        (b = h(o, "max", null)),
                        null !== p && (l = p),
                        null !== b && (d = b),
                        (y =
                          l === -1 / 0 ? l : t.track.idxToDist(l || 0, !0, 0)),
                        (w = d === x ? d : j(d, !0, 0)),
                        null === b && (g = d),
                        h(o, "align", !1) &&
                          d !== x &&
                          0 === a[E(d)][2] &&
                          ((w -= 1 - a[E(d)][0]), (d = T(w - _))),
                        (y = m(y)),
                        (w = m(w)),
                        Number(n) === n ? P(C(S(n))) : I();
                    },
                    to: A,
                    velocity: function () {
                      var t = o(),
                        n = k.reduce(
                          function (n, e) {
                            var r = e.distance,
                              i = e.timestamp;
                            return (
                              t - i > 200 ||
                                (p(r) !== p(n.distance) &&
                                  n.distance &&
                                  (n = {
                                    distance: 0,
                                    lastTimestamp: 0,
                                    time: 0,
                                  }),
                                n.time && (n.distance += r),
                                n.lastTimestamp &&
                                  (n.time += i - n.lastTimestamp),
                                (n.lastTimestamp = i)),
                              n
                            );
                          },
                          { distance: 0, lastTimestamp: 0, time: 0 }
                        );
                      return n.distance / n.time || 0;
                    },
                  });
                })(a)),
                (a.animator = (function (t) {
                  var n, e, r, i, a, o;
                  function u(t) {
                    n.active = t;
                  }
                  function s(t) {
                    n.targetIdx = t;
                  }
                  function c() {
                    var n;
                    (n = a),
                      window.cancelAnimationFrame(n),
                      u(!1),
                      s(null),
                      o && t.emit("animationStopped"),
                      (o = null);
                  }
                  return (n = {
                    active: !1,
                    start: function (n) {
                      if ((c(), t.track.details)) {
                        var l = 0,
                          d = t.track.details.position;
                        (e = 0),
                          (r = 0),
                          (i = n.map(function (t) {
                            var n,
                              e = Number(d),
                              i =
                                null !== (n = t.earlyExit) && void 0 !== n
                                  ? n
                                  : t.duration,
                              a = t.easing,
                              o = t.distance * a(i / t.duration) || 0;
                            d += o;
                            var u = r;
                            return (
                              (r += i),
                              (l += o),
                              [e, t.distance, u, r, t.duration, a]
                            );
                          })),
                          s(t.track.distToIdx(l)),
                          (function n() {
                            a = window.requestAnimationFrame(function a(c) {
                              o || (o = c), u(!0);
                              var l = c - o;
                              l > r && (l = r);
                              var d = i[e];
                              if (d[3] < l) return e++, a(c);
                              var f = d[2],
                                p = d[4],
                                v = d[0],
                                h = d[1] * (0, d[5])(0 === p ? 1 : (l - f) / p);
                              if ((h && t.track.to(v + h), l < r)) return n();
                              (o = null),
                                u(!1),
                                s(null),
                                t.emit("animationEnded");
                            });
                          })(),
                          t.emit("animationStarted");
                      }
                    },
                    stop: c,
                    targetIdx: null,
                  });
                })(a)),
                i)
              )
                for (var t = 0; t < i.length; t++) (0, i[t])(a);
              a.track.init(a.options.initial || 0), a.emit("created");
            })(),
            a
          );
        } catch (t) {
          console.error(t);
        }
      };
      n.E = function (t, n) {
        var e = r.useRef(null),
          i = r.useRef(!1),
          a = r.useRef(t),
          o = r.useCallback(function (r) {
            r
              ? ((a.current = t),
                (e.current = new k(r, t, n)),
                (i.current = !1))
              : (e.current && e.current.destroy && e.current.destroy(),
                (e.current = null));
          }, []);
        return (
          r.useEffect(
            function () {
              (function t(n, e) {
                if (n === e) return !0;
                var r = typeof n;
                if (r !== typeof e) return !1;
                if ("object" !== r || null === n || null === e)
                  return "function" === r && n.toString() === e.toString();
                if (
                  n.length !== e.length ||
                  Object.getOwnPropertyNames(n).length !==
                    Object.getOwnPropertyNames(e).length
                )
                  return !1;
                for (var i in n) if (!t(n[i], e[i])) return !1;
                return !0;
              })(a.current, t) ||
                ((a.current = t), e.current && e.current.update(a.current));
            },
            [t]
          ),
          [o, e]
        );
      };
    },
  },
]);
