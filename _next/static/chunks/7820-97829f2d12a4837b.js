"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7820],
  {
    175: (t, e, i) => {
      i.d(e, { Q: () => n });
      let r = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function n(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (r.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
    },
    567: (t, e, i) => {
      i.d(e, { V: () => r });
      let r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    2217: (t, e, i) => {
      i.d(e, { D: () => a });
      var r = i(82897),
        n = i(23492);
      let s = {
          ...i(89976).W,
          color: r.y,
          backgroundColor: r.y,
          outlineColor: r.y,
          fill: r.y,
          stroke: r.y,
          borderColor: r.y,
          borderTopColor: r.y,
          borderRightColor: r.y,
          borderBottomColor: r.y,
          borderLeftColor: r.y,
          filter: n.p,
          WebkitFilter: n.p,
        },
        a = (t) => s[t];
    },
    2735: (t, e, i) => {
      function r(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function n(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, a] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, a);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, a] = r(n);
          e = e(void 0 !== i ? i : t.custom, s, a);
        }
        return e;
      }
      i.d(e, { a: () => n });
    },
    3870: (t, e, i) => {
      i.d(e, { i: () => r });
      let r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    },
    3886: (t, e, i) => {
      i.d(e, { $: () => n, q: () => s });
      var r = i(30234);
      let n = (t, e) => (i) =>
          !!(
            ((0, r.Kg)(i) && r.Fl.test(i) && i.startsWith(t)) ||
            (e && !(0, r.uy)(i) && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (n) => {
          if (!(0, r.Kg)(n)) return n;
          let [s, a, o, l] = n.match(r.SY);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    5910: (t, e, i) => {
      i.d(e, { p: () => r });
      let r = (t) => Array.isArray(t);
    },
    6340: (t, e, i) => {
      i.d(e, { N: () => r });
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
    },
    6642: (t, e, i) => {
      i.d(e, { B: () => n });
      let r = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        n = {};
      for (let t in r) n[t] = { isEnabled: (e) => r[t].some((t) => !!e[t]) };
    },
    7345: (t, e, i) => {
      i.d(e, { Z: () => s });
      var r = i(21109),
        n = i(18210);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let a = (0, n.q)(0, e, s);
              t.push((0, r.k)(i, 1, a));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    9480: (t, e, i) => {
      i.d(e, { Y: () => n });
      var r = i(6642);
      function n(t) {
        for (let e in t) r.B[e] = { ...r.B[e], ...t[e] };
      }
    },
    12083: (t, e, i) => {
      i.d(e, { V: () => o });
      var r = i(23082),
        n = i(45471),
        s = i(30234),
        a = i(3886);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.KN.transform((0, s.aj)(e)) +
          ", " +
          n.KN.transform((0, s.aj)(i)) +
          ", " +
          (0, s.aj)(r.X4.transform(a)) +
          ")",
      };
    },
    14060: (t, e, i) => {
      i.d(e, { I: () => r });
      function r(t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      }
    },
    14206: (t, e, i) => {
      i.d(e, { U: () => r, f: () => n });
      let r = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        n = new Set(r);
    },
    14570: (t, e, i) => {
      i.d(e, { S: () => r });
      let r = (t) => !!(t && t.getVelocity);
    },
    15315: (t, e, i) => {
      i.d(e, { f: () => r });
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
    },
    16326: (t, e, i) => {
      i.d(e, { n: () => P });
      var r = i(26953),
        n = i(97007),
        s = i(78754),
        a = i(52290),
        o = i(59210);
      function l(t, e) {
        let i = e ? "onHoverStart" : "onHoverEnd";
        return (0, r.h)(
          t.current,
          e ? "pointerenter" : "pointerleave",
          (r, n) => {
            if ("touch" === r.pointerType || (0, s.D3)()) return;
            let a = t.getProps();
            t.animationState &&
              a.whileHover &&
              t.animationState.setActive("whileHover", e);
            let l = a[i];
            l && o.Gt.postRender(() => l(r, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class u extends a.X {
        mount() {
          this.unmount = (0, n.F)(l(this.node, !0), l(this.node, !1));
        }
        unmount() {}
      }
      var h = i(51442);
      class d extends a.X {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, n.F)(
            (0, h.k)(this.node.current, "focus", () => this.onFocus()),
            (0, h.k)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var p = i(51586);
      let c = (t, e) => !!e && (t === e || c(t, e.parentElement));
      var f = i(69147);
      function m(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, (0, p.e)(i));
      }
      class v extends a.X {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = f.l),
            (this.removeEndListeners = f.l),
            (this.removeAccessibleListeners = f.l),
            (this.startPointerPress = (t, e) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let i = this.node.getProps(),
                s = (0, r.h)(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTap: i,
                        onTapCancel: r,
                        globalTapTarget: n,
                      } = this.node.getProps(),
                      s = n || c(this.node.current, t.target) ? i : r;
                    s && o.Gt.update(() => s(t, e));
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                a = (0, r.h)(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, n.F)(s, a)), this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = (0, h.k)(this.node.current, "keydown", (t) => {
                  "Enter" === t.key &&
                    !this.isPressing &&
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, h.k)(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          m("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && o.Gt.postRender(() => i(t, e));
                          });
                      }
                    )),
                    m("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = (0, h.k)(this.node.current, "blur", () => {
                  this.isPressing &&
                    m("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, n.F)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && o.Gt.postRender(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, s.D3)()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && o.Gt.postRender(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = (0, r.h)(
              t.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(t.onTapStart || t.onPointerStart) }
            ),
            i = (0, h.k)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, n.F)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let g = new WeakMap(),
        y = new WeakMap(),
        w = (t) => {
          let e = g.get(t.target);
          e && e(t);
        },
        x = (t) => {
          t.forEach(w);
        },
        b = { some: 0, all: 1 };
      class S extends a.X {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : b[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              y.has(i) || y.set(i, {});
              let r = y.get(i),
                n = JSON.stringify(e);
              return (
                r[n] || (r[n] = new IntersectionObserver(x, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              g.set(t, i),
              r.observe(t),
              () => {
                g.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let P = {
        inView: { Feature: S },
        tap: { Feature: v },
        focus: { Feature: d },
        hover: { Feature: u },
      };
    },
    16498: (t, e, i) => {
      i.d(e, { G: () => r });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    18203: (t, e, i) => {
      i.d(e, { h: () => d, q: () => h });
      var r = i(79280),
        n = i(59210);
      let s = new Set(),
        a = !1,
        o = !1;
      function l() {
        if (o) {
          let t = Array.from(s).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (0, r.W9)(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var r;
                  null === (r = t.getValue(e)) || void 0 === r || r.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (o = !1), (a = !1), s.forEach((t) => t.complete()), s.clear();
      }
      function u() {
        s.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (o = !0);
        });
      }
      function h() {
        u(), l();
      }
      class d {
        constructor(t, e, i, r, n, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (s.add(this),
                a || ((a = !0), n.Gt.read(u), n.Gt.resolveKeyframes(l)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          for (let n = 0; n < t.length; n++)
            if (null === t[n]) {
              if (0 === n) {
                let n = null == r ? void 0 : r.get(),
                  s = t[t.length - 1];
                if (void 0 !== n) t[0] = n;
                else if (i && e) {
                  let r = i.readValue(e, s);
                  null != r && (t[0] = r);
                }
                void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]);
              } else t[n] = t[n - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            s.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), s.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
    },
    18210: (t, e, i) => {
      i.d(e, { q: () => r });
      let r = (t, e, i) => {
        let r = e - t;
        return 0 === r ? 1 : (i - t) / r;
      };
    },
    18831: (t, e, i) => {
      i.d(e, { C: () => z });
      var r = i(95155),
        n = i(12115),
        s = i(51508);
      let a = (0, n.createContext)({});
      var o = i(80845),
        l = i(97494),
        u = i(25214),
        h = i(31788),
        d = i(48466),
        p = i(33991),
        c = i(70797);
      let f = !1;
      function m() {
        window.MotionHandoffIsComplete = !0;
      }
      var v = i(65305),
        g = i(19253);
      function y(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var w = i(9480),
        x = i(68972),
        b = i(90869);
      let S = Symbol.for("motionComponentSymbol");
      var P = i(6642),
        V = i(175),
        A = i(33869),
        T = i(34527),
        C = i(6340),
        M = i(2735),
        k = i(82885),
        F = i(95902),
        E = i(41211),
        O = i(63284);
      let I = (t) => (e, i) => {
        let r = (0, n.useContext)(a),
          s = (0, n.useContext)(o.t),
          l = () =>
            (function (
              {
                applyWillChange: t = !1,
                scrapeMotionValuesFromProps: e,
                createRenderState: i,
                onMount: r,
              },
              n,
              s,
              a,
              o
            ) {
              let l = {
                latestValues: (function (t, e, i, r, n) {
                  var s;
                  let a = {},
                    o = [],
                    l =
                      r &&
                      (null === (s = t.style) || void 0 === s
                        ? void 0
                        : s.willChange) === void 0,
                    u = n(t, {});
                  for (let t in u) a[t] = (0, F.u)(u[t]);
                  let { initial: h, animate: d } = t,
                    p = (0, g.e)(t),
                    c = (0, g.O)(t);
                  e &&
                    c &&
                    !p &&
                    !1 !== t.inherit &&
                    (void 0 === h && (h = e.initial),
                    void 0 === d && (d = e.animate));
                  let f = !!i && !1 === i.initial,
                    m = (f = f || !1 === h) ? d : h;
                  return (
                    m &&
                      "boolean" != typeof m &&
                      !(0, C.N)(m) &&
                      j(t, m, (t, e) => {
                        for (let e in t) {
                          let i = t[e];
                          if (Array.isArray(i)) {
                            let t = f ? i.length - 1 : 0;
                            i = i[t];
                          }
                          null !== i && (a[e] = i);
                        }
                        for (let t in e) a[t] = e[t];
                      }),
                    l &&
                      (d &&
                        !1 !== h &&
                        !(0, C.N)(d) &&
                        j(t, d, (t) => {
                          for (let e in t)
                            !(function (t, e) {
                              let i = (0, E.I)(e);
                              i && (0, O.Kq)(t, i);
                            })(o, e);
                        }),
                      o.length && (a.willChange = o.join(","))),
                    a
                  );
                })(n, s, a, !o && t, e),
                renderState: i(),
              };
              return r && (l.mount = (t) => r(n, t, l)), l;
            })(t, e, r, s, i);
        return i ? l() : (0, k.M)(l);
      };
      function j(t, e, i) {
        let r = Array.isArray(e) ? e : [e];
        for (let e = 0; e < r.length; e++) {
          let n = (0, M.a)(t, r[e]);
          if (n) {
            let { transitionEnd: t, transition: e, ...r } = n;
            i(r, t);
          }
        }
      }
      let R = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        B = () => ({ ...R(), attrs: {} });
      var W = i(97914),
        $ = i(93095),
        N = i(59210);
      let L = {
          useVisualState: I({
            scrapeMotionValuesFromProps: T.x,
            createRenderState: B,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              N.Gt.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                N.Gt.render(() => {
                  (0, W.B)(i, r, (0, $.n)(e.tagName), t.transformTemplate),
                    (0, A.d)(e, i);
                });
            },
          }),
        },
        K = {
          useVisualState: I({
            applyWillChange: !0,
            scrapeMotionValuesFromProps: i(60990).x,
            createRenderState: R,
          }),
        };
      var D = i(33055),
        X = i(14570),
        q = i(86169);
      function Y(t, e, i) {
        for (let r in e) (0, X.S)(e[r]) || (0, D.z)(r, i) || (t[r] = e[r]);
      }
      let G = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function U(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          G.has(t)
        );
      }
      let H = (t) => !U(t);
      try {
        !(function (t) {
          t && (H = (e) => (e.startsWith("on") ? !U(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function z(t, e) {
        return function (
          i,
          { forwardMotionProps: A } = { forwardMotionProps: !1 }
        ) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: V,
              useVisualState: A,
              Component: T,
            } = t;
            e && (0, w.Y)(e);
            let C = (0, n.forwardRef)(function (t, e) {
              var w, S, C;
              let M;
              let k = {
                  ...(0, n.useContext)(s.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, n.useContext)(b.L).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: F } = k,
                E = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if ((0, g.e)(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || (0, v.w)(e) ? e : void 0,
                        animate: (0, v.w)(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, n.useContext)(a));
                  return (0, n.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [y(e), y(i)]
                  );
                })(t),
                O = A(t, F);
              if (!F && x.B) {
                (S = 0), (C = 0), (0, n.useContext)(u.Y).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = P.B;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(k);
                (M = t.MeasureLayout),
                  (E.visualElement = (function (t, e, i, r, v) {
                    var g;
                    let { visualElement: y } = (0, n.useContext)(a),
                      w = (0, n.useContext)(u.Y),
                      x = (0, n.useContext)(o.t),
                      b = (0, n.useContext)(s.Q).reducedMotion,
                      S = (0, n.useRef)(void 0);
                    (r = r || w.renderer),
                      !S.current &&
                        r &&
                        (S.current = r(t, {
                          visualState: e,
                          parent: y,
                          props: i,
                          presenceContext: x,
                          blockInitialAnimation: !!x && !1 === x.initial,
                          reducedMotionConfig: b,
                        }));
                    let P = S.current,
                      V = (0, n.useContext)(c.N);
                    P &&
                      !P.projection &&
                      v &&
                      ("html" === P.type || "svg" === P.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: a,
                          dragConstraints: o,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!a || (o && (0, p.X)(o)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(S.current, i, v, V),
                      (0, n.useInsertionEffect)(() => {
                        P && P.update(i, x);
                      });
                    let A = i[h.n],
                      T = (0, n.useRef)(
                        !!A &&
                          !window.MotionHandoffIsComplete &&
                          (null === (g = window.MotionHasOptimisedAnimation) ||
                          void 0 === g
                            ? void 0
                            : g.call(window, A))
                      );
                    return (
                      (0, l.E)(() => {
                        P &&
                          (P.updateFeatures(),
                          d.k.render(P.render),
                          T.current &&
                            P.animationState &&
                            P.animationState.animateChanges());
                      }),
                      (0, n.useEffect)(() => {
                        P &&
                          (!T.current &&
                            P.animationState &&
                            P.animationState.animateChanges(),
                          (T.current = !1),
                          f || ((f = !0), queueMicrotask(m)));
                      }),
                      P
                    );
                  })(T, O, k, i, t.ProjectionNode));
              }
              return (0, r.jsxs)(a.Provider, {
                value: E,
                children: [
                  M && E.visualElement
                    ? (0, r.jsx)(M, { visualElement: E.visualElement, ...k })
                    : null,
                  V(
                    T,
                    t,
                    ((w = E.visualElement),
                    (0, n.useCallback)(
                      (t) => {
                        t && O.mount && O.mount(t),
                          w && (t ? w.mount(t) : w.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : (0, p.X)(e) && (e.current = t));
                      },
                      [w]
                    )),
                    O,
                    F,
                    E.visualElement
                  ),
                ],
              });
            });
            return (C[S] = T), C;
          })({
            ...((0, V.Q)(i) ? L : K),
            preloadedFeatures: t,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: s }, a) => {
                let o = (
                    (0, V.Q)(e)
                      ? function (t, e, i, r) {
                          let s = (0, n.useMemo)(() => {
                            let i = B();
                            return (
                              (0, W.B)(i, e, (0, $.n)(r), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            Y(e, t.style, t), (s.style = { ...e, ...s.style });
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                Y(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, n.useMemo)(() => {
                                      let i = R();
                                      return (
                                        (0, q.O)(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, s, a, e),
                  l = (function (t, e, i) {
                    let r = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (H(n) ||
                          (!0 === i && U(n)) ||
                          (!e && !U(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (r[n] = t[n]);
                    return r;
                  })(i, "string" == typeof e, t),
                  u = e !== n.Fragment ? { ...l, ...o, ref: r } : {},
                  { children: h } = i,
                  d = (0, n.useMemo)(() => ((0, X.S)(h) ? h.get() : h), [h]);
                return (0, n.createElement)(e, { ...u, children: d });
              };
            })(A),
            createVisualElement: e,
            Component: i,
          });
        };
      }
    },
    19253: (t, e, i) => {
      i.d(e, { O: () => o, e: () => a });
      var r = i(6340),
        n = i(65305),
        s = i(98312);
      function a(t) {
        return (0, r.N)(t.animate) || s._.some((e) => (0, n.w)(t[e]));
      }
      function o(t) {
        return !!(a(t) || t.variants);
      }
    },
    19780: (t, e, i) => {
      i.d(e, { J: () => a });
      var r = i(90664),
        n = i(23492),
        s = i(2217);
      function a(t, e) {
        let i = (0, s.D)(t);
        return (
          i !== n.p && (i = r.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
    },
    19932: (t, e, i) => {
      let r;
      i.d(e, { k: () => o });
      var n = i(74492),
        s = i(59210);
      function a() {
        r = void 0;
      }
      let o = {
        now: () => (
          void 0 === r &&
            o.set(
              s.uv.isProcessing || n.W.useManualTiming
                ? s.uv.timestamp
                : performance.now()
            ),
          r
        ),
        set: (t) => {
          (r = t), queueMicrotask(a);
        },
      };
    },
    20600: (t, e, i) => {
      i.d(e, { e: () => r });
      function r(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
    },
    20637: (t, e, i) => {
      i.d(e, { $: () => n, H: () => r });
      let r = {};
      function n(t) {
        Object.assign(r, t);
      }
    },
    21109: (t, e, i) => {
      i.d(e, { k: () => r });
      let r = (t, e, i) => t + (e - t) * i;
    },
    21809: (t, e, i) => {
      i.d(e, { W: () => k });
      var r = i(6340),
        n = i(5910);
      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      var a = i(65305),
        o = i(2735);
      function l(t, e, i) {
        let r = t.getProps();
        return (0, o.a)(r, e, void 0 !== i ? i : r.custom, t);
      }
      var u = i(98312),
        h = i(14206),
        d = i(51917),
        p = i(34379),
        c = i(59779),
        f = i(28060),
        m = i(46926),
        v = i(76333),
        g = i(59210);
      function y(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        var s;
        let {
          transition: a = t.getDefaultTransition(),
          transitionEnd: o,
          ...u
        } = e;
        r && (a = r);
        let w = [],
          x = n && t.animationState && t.animationState.getState()[n];
        for (let e in u) {
          let r = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            n = u[e];
          if (
            void 0 === n ||
            (x &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(x, e))
          )
            continue;
          let o = { delay: i, ...(0, f.r)(a || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = (0, m.P)(t);
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, g.Gt);
              null !== t && ((o.startTime = t), (l = !0));
            }
          }
          r.start(
            (0, d.f)(
              e,
              r,
              n,
              t.shouldReduceMotion && h.f.has(e) ? { type: !1 } : o,
              t,
              l,
              (0, v.g)(t, e)
            )
          );
          let p = r.animation;
          p && w.push(p);
        }
        return (
          o &&
            Promise.all(w).then(() => {
              g.Gt.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = l(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      let i = (0, p.K)(n[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, c.OQ)(i));
                    }
                  })(t, o);
              });
            }),
          w
        );
      }
      function w(t, e, i = {}) {
        var r;
        let n = l(
            t,
            e,
            "exit" === i.type
              ? null === (r = t.presenceContext) || void 0 === r
                ? void 0
                : r.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let a = n ? () => Promise.all(y(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: n = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => o - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(x)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              w(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, n + r, a, o, i);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([a(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [a, o] : [o, a];
          return t().then(() => e());
        }
      }
      function x(t, e) {
        return t.sortNodePosition(e);
      }
      let b = [...u.U].reverse(),
        S = u.U.length;
      function P(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function V() {
        return {
          animate: P(!0),
          whileInView: P(),
          whileHover: P(),
          whileTap: P(),
          whileDrag: P(),
          whileFocus: P(),
          exit: P(),
        };
      }
      var A = i(52290);
      class T extends A.X {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => w(t, e, i)));
                          else if ("string" == typeof e) r = w(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? l(t, e, i.custom) : e;
                            r = Promise.all(y(t, n, i));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = V(),
                  o = !0,
                  u = (e) => (i, r) => {
                    var n;
                    let s = l(
                      t,
                      r,
                      "exit" === e
                        ? null === (n = t.presenceContext) || void 0 === n
                          ? void 0
                          : n.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...r } = s;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function h(l) {
                  let h = t.getProps(),
                    d = t.getVariantContext(!0) || {},
                    p = [],
                    c = new Set(),
                    f = {},
                    m = 1 / 0;
                  for (let e = 0; e < S; e++) {
                    var v, g;
                    let y = b[e],
                      w = i[y],
                      x = void 0 !== h[y] ? h[y] : d[y],
                      S = (0, a.w)(x),
                      P = y === l ? w.isActive : null;
                    !1 === P && (m = e);
                    let V = x === d[y] && x !== h[y] && S;
                    if (
                      (V && o && t.manuallyAnimateOnMount && (V = !1),
                      (w.protectedKeys = { ...f }),
                      (!w.isActive && null === P) ||
                        (!x && !w.prevProp) ||
                        (0, r.N)(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let A =
                        ((v = w.prevProp),
                        ("string" == typeof (g = x)
                          ? g !== v
                          : !!Array.isArray(g) && !s(g, v)) ||
                          (y === l && w.isActive && !V && S) ||
                          (e > m && S)),
                      T = !1,
                      C = Array.isArray(x) ? x : [x],
                      M = C.reduce(u(y), {});
                    !1 === P && (M = {});
                    let { prevResolvedValues: k = {} } = w,
                      F = { ...k, ...M },
                      E = (e) => {
                        (A = !0),
                          c.has(e) && ((T = !0), c.delete(e)),
                          (w.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in F) {
                      let e = M[t],
                        i = k[t];
                      if (f.hasOwnProperty(t)) continue;
                      let r = !1;
                      ((0, n.p)(e) && (0, n.p)(i) ? s(e, i) : e === i)
                        ? void 0 !== e && c.has(t)
                          ? E(t)
                          : (w.protectedKeys[t] = !0)
                        : null != e
                        ? E(t)
                        : c.add(t);
                    }
                    (w.prevProp = x),
                      (w.prevResolvedValues = M),
                      w.isActive && (f = { ...f, ...M }),
                      o && t.blockInitialAnimation && (A = !1),
                      A &&
                        (!V || T) &&
                        p.push(
                          ...C.map((t) => ({
                            animation: t,
                            options: { type: y },
                          }))
                        );
                  }
                  if (c.size) {
                    let e = {};
                    c.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      n && (n.liveStyle = !0), (e[i] = null != r ? r : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    o &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (o = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: h,
                  setActive: function (e, r) {
                    var n;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (n = t.variantChildren) ||
                      void 0 === n ||
                      n.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let s = h(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = V()), (o = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, r.N)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let C = 0;
      class M extends A.X {
        constructor() {
          super(...arguments), (this.id = C++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e && !t && r.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let k = { animation: { Feature: T }, exit: { Feature: M } };
    },
    23082: (t, e, i) => {
      i.d(e, { X4: () => s, ai: () => n, hs: () => a });
      var r = i(77782);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...n, transform: (t) => (0, r.q)(0, 1, t) },
        a = { ...n, default: 1 };
    },
    23492: (t, e, i) => {
      i.d(e, { p: () => l });
      var r = i(90664),
        n = i(30234);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function a(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(n.SY) || [];
        if (!r) return t;
        let a = i.replace(r, ""),
          o = +!!s.has(e);
        return r !== i && (o *= 100), e + "(" + o + a + ")";
      }
      let o = /\b([a-z-]*)\(.*?\)/gu,
        l = {
          ...r.f,
          getAnimatableNone: (t) => {
            let e = t.match(o);
            return e ? e.map(a).join(" ") : t;
          },
        };
    },
    24935: (t, e, i) => {
      i.d(e, { B: () => u });
      var r = i(77782),
        n = i(23082),
        s = i(30234),
        a = i(3886);
      let o = (t) => (0, r.q)(0, 255, t),
        l = { ...n.ai, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.aj)(n.X4.transform(r)) +
            ")",
        };
    },
    25214: (t, e, i) => {
      i.d(e, { Y: () => r });
      let r = (0, i(12115).createContext)({ strict: !1 });
    },
    26953: (t, e, i) => {
      i.d(e, { h: () => s });
      var r = i(51442),
        n = i(51586);
      function s(t, e, i, s) {
        return (0, r.k)(t, e, (0, n.F)(i), s);
      }
    },
    28060: (t, e, i) => {
      function r({
        when: t,
        delay: e,
        delayChildren: i,
        staggerChildren: r,
        staggerDirection: n,
        repeat: s,
        repeatType: a,
        repeatDelay: o,
        from: l,
        elapsed: u,
        ...h
      }) {
        return !!Object.keys(h).length;
      }
      function n(t, e) {
        return t[e] || t.default || t;
      }
      i.d(e, { D: () => r, r: () => n });
    },
    30234: (t, e, i) => {
      i.d(e, {
        Fl: () => a,
        Kg: () => o,
        SY: () => n,
        aj: () => r,
        ne: () => s,
        uy: () => l,
      });
      let r = (t) => Math.round(1e5 * t) / 1e5,
        n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        s =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        a =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
      function o(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return null == t;
      }
    },
    31788: (t, e, i) => {
      i.d(e, { n: () => r });
      let r = "data-" + (0, i(78450).I)("framerAppearId");
    },
    33055: (t, e, i) => {
      i.d(e, { z: () => s });
      var r = i(20637),
        n = i(14206);
      function s(t, { layout: e, layoutId: i }) {
        return (
          n.f.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!r.H[t] || "opacity" === t))
        );
      }
    },
    33757: (t, e, i) => {
      i.d(e, { L: () => a, m: () => s });
      var r = i(78588),
        n = i(96147);
      function s(t, e) {
        return (0, r.FY)((0, r.bS)(t.getBoundingClientRect(), e));
      }
      function a(t, e, i) {
        let r = s(t, i),
          { scroll: a } = e;
        return a && ((0, n.Ql)(r.x, a.offset.x), (0, n.Ql)(r.y, a.offset.y)), r;
      }
    },
    33796: (t, e, i) => {
      i.d(e, { K: () => f });
      var r = i(56440),
        n = i(67670),
        s = i(3870),
        a = i(93676);
      let o = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
      var l = i(79280),
        u = i(39067),
        h = i(18203),
        d = i(90664),
        p = i(19780);
      let c = new Set(["auto", "none", "0"]);
      class f extends h.h {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && ((r = r.trim()), (0, a.p)(r))) {
              let l = (function t(e, i, r = 1) {
                (0, n.V)(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [l, u] = (function (t) {
                  let e = o.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${null != i ? i : r}`, n];
                })(e);
                if (!l) return;
                let h = window.getComputedStyle(i).getPropertyValue(l);
                if (h) {
                  let t = h.trim();
                  return (0, s.i)(t) ? parseFloat(t) : t;
                }
                return (0, a.p)(u) ? t(u, i, r + 1) : u;
              })(r, e.current);
              void 0 !== l && (t[i] = l),
                i === t.length - 1 && (this.finalKeyframe = r);
            }
          }
          if ((this.resolveNoneKeyframes(), !l.$y.has(i) || 2 !== t.length))
            return;
          let [r, h] = t,
            d = (0, u.n)(r),
            p = (0, u.n)(h);
          if (d !== p) {
            if ((0, l.E4)(d) && (0, l.E4)(p))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || (0, r.$)(n)) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                "string" == typeof e &&
                  !c.has(e) &&
                  (0, d.V)(e).values.length &&
                  (r = t[n]),
                  n++;
              }
              if (r && i) for (let n of e) t[n] = (0, p.J)(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = l.Hr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: r } = this;
          if (!e || !e.current) return;
          let n = e.getValue(i);
          n && n.jump(this.measuredOrigin, !1);
          let s = r.length - 1,
            a = r[s];
          (r[s] = l.Hr[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
    },
    33869: (t, e, i) => {
      i.d(e, { d: () => a });
      var r = i(78450),
        n = i(20600),
        s = i(36381);
      function a(t, e, i, a) {
        for (let i in ((0, n.e)(t, e, void 0, a), e.attrs))
          t.setAttribute(s.e.has(i) ? i : (0, r.I)(i), e.attrs[i]);
      }
    },
    33991: (t, e, i) => {
      i.d(e, { X: () => r });
      function r(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
    },
    34379: (t, e, i) => {
      i.d(e, { B: () => n, K: () => s });
      var r = i(5910);
      let n = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, r.p)(t) ? t[t.length - 1] || 0 : t);
    },
    34527: (t, e, i) => {
      i.d(e, { x: () => a });
      var r = i(14570),
        n = i(60990),
        s = i(14206);
      function a(t, e, i) {
        let a = (0, n.x)(t, e, i);
        for (let i in t)
          ((0, r.S)(t[i]) || (0, r.S)(e[i])) &&
            (a[
              -1 !== s.U.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return a;
      }
    },
    35124: (t, e, i) => {
      i.d(e, { M: () => r });
      let r = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
    },
    36381: (t, e, i) => {
      i.d(e, { e: () => r });
      let r = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    39067: (t, e, i) => {
      i.d(e, { T: () => a, n: () => o });
      var r = i(23082),
        n = i(45471),
        s = i(61987);
      let a = [
          r.ai,
          n.px,
          n.KN,
          n.uj,
          n.vw,
          n.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        o = (t) => a.find((0, s.w)(t));
    },
    41211: (t, e, i) => {
      i.d(e, { I: () => a });
      var r = i(92295),
        n = i(78450),
        s = i(14206);
      function a(t) {
        return s.f.has(t) ? "transform" : r.M.has(t) ? (0, n.I)(t) : void 0;
      }
    },
    45471: (t, e, i) => {
      i.d(e, {
        KN: () => a,
        gQ: () => h,
        px: () => o,
        uj: () => s,
        vh: () => l,
        vw: () => u,
      });
      var r = i(30234);
      let n = (t) => ({
          test: (e) =>
            (0, r.Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = n("deg"),
        a = n("%"),
        o = n("px"),
        l = n("vh"),
        u = n("vw"),
        h = {
          ...a,
          parse: (t) => a.parse(t) / 100,
          transform: (t) => a.transform(100 * t),
        };
    },
    46926: (t, e, i) => {
      i.d(e, { P: () => n });
      var r = i(31788);
      function n(t) {
        return t.props[r.n];
      }
    },
    47437: (t, e, i) => {
      i.d(e, { j: () => A });
      var r = i(21109),
        n = i(67670);
      function s(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var a = i(67730),
        o = i(24935),
        l = i(12083);
      function u(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let h = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        d = [a.u, o.B, l.V],
        p = (t) => d.find((e) => e.test(t));
      function c(t) {
        let e = p(t);
        if (
          ((0, n.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === l.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                a = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - r;
                (n = s(l, r, t + 1 / 3)),
                  (a = s(l, r, t)),
                  (o = s(l, r, t - 1 / 3));
              } else n = a = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * a),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let f = (t, e) => {
        let i = c(t),
          n = c(e);
        if (!i || !n) return u(t, e);
        let s = { ...i };
        return (t) => (
          (s.red = h(i.red, n.red, t)),
          (s.green = h(i.green, n.green, t)),
          (s.blue = h(i.blue, n.blue, t)),
          (s.alpha = (0, r.k)(i.alpha, n.alpha, t)),
          o.B.transform(s)
        );
      };
      var m = i(97007),
        v = i(82897),
        g = i(90664),
        y = i(93676);
      let w = new Set(["none", "hidden"]);
      function x(t, e) {
        return (i) => (0, r.k)(t, e, i);
      }
      function b(t) {
        return "number" == typeof t
          ? x
          : "string" == typeof t
          ? (0, y.p)(t)
            ? u
            : v.y.test(t)
            ? f
            : V
          : Array.isArray(t)
          ? S
          : "object" == typeof t
          ? v.y.test(t)
            ? f
            : P
          : u;
      }
      function S(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => b(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function P(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = b(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let V = (t, e) => {
        let i = g.f.createTransformer(e),
          r = (0, g.V)(t),
          s = (0, g.V)(e);
        return r.indexes.var.length === s.indexes.var.length &&
          r.indexes.color.length === s.indexes.color.length &&
          r.indexes.number.length >= s.indexes.number.length
          ? (w.has(t) && !s.values.length) || (w.has(e) && !r.values.length)
            ? (function (t, e) {
                return w.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, m.F)(
                S(
                  (function (t, e) {
                    var i;
                    let r = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let a = e.types[s],
                        o = t.indexes[a][n[a]],
                        l = null !== (i = t.values[o]) && void 0 !== i ? i : 0;
                      (r[s] = l), n[a]++;
                    }
                    return r;
                  })(r, s),
                  s.values
                ),
                i
              )
          : ((0, n.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            u(t, e));
      };
      function A(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, r.k)(t, e, i)
          : b(t)(t, e);
      }
    },
    48466: (t, e, i) => {
      i.d(e, { k: () => r });
      let { schedule: r, cancel: n } = (0, i(70554).I)(queueMicrotask, !1);
    },
    51442: (t, e, i) => {
      i.d(e, { k: () => r });
      function r(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
    },
    51508: (t, e, i) => {
      i.d(e, { Q: () => r });
      let r = (0, i(12115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    51586: (t, e, i) => {
      i.d(e, { F: () => s, e: () => n });
      var r = i(35124);
      function n(t, e = "page") {
        return { point: { x: t[`${e}X`], y: t[`${e}Y`] } };
      }
      let s = (t) => (e) => (0, r.M)(e) && t(e, n(e));
    },
    51917: (t, e, i) => {
      i.d(e, { f: () => tc });
      var r = i(70071),
        n = i(14206);
      let s = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        a = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        o = { type: "keyframes", duration: 0.8 },
        l = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        u = (t, { keyframes: e }) =>
          e.length > 2
            ? o
            : n.f.has(t)
            ? t.startsWith("scale")
              ? a(e[1])
              : s
            : l;
      var h = i(28060),
        d = i(74492);
      let p = { current: !1 },
        c = (t) => null !== t;
      function f(t, { repeat: e, repeatType: i = "loop" }, r) {
        let n = t.filter(c),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
        return s && void 0 !== r ? r : n[s];
      }
      var m = i(59210),
        v = i(33796);
      function g(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      var y = i(69147),
        w = i(19932),
        x = i(18203),
        b = i(67670),
        S = i(90664);
      let P = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (S.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      class V {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = w.k.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (0, x.q)(),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = w.k.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: r,
            velocity: n,
            delay: s,
            onComplete: a,
            onUpdate: o,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = P(n, e),
                o = P(s, e);
              return (
                (0, b.$)(
                  a === o,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    ("spring" === i && r))
              );
            })(t, i, r, n)
          ) {
            if (p.current || !s) {
              null == o || o(f(t, this.options, e)),
                null == a || a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      var A = i(15315);
      function T(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, A.f)(i - t(r), e - r);
      }
      var C = i(77782);
      function M(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let k = ["duration", "bounce"],
        F = ["stiffness", "damping", "mass"];
      function E(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function O({ keyframes: t, restDelta: e, restSpeed: i, ...n }) {
        let s;
        let a = t[0],
          o = t[t.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: p,
            velocity: c,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!E(t, F) && E(t, k)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: n = 1,
              }) {
                let s, a;
                (0, b.$)(
                  t <= (0, r.f)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, C.q)(0.05, 1, o)),
                  (t = (0, C.q)(0.01, 10, (0, r.X)(t))),
                  o < 1
                    ? ((s = (e) => {
                        let r = e * o,
                          n = r * t;
                        return 0.001 - ((r - i) / M(e, o)) * Math.exp(-n);
                      }),
                      (a = (e) => {
                        let r = e * o * t,
                          n = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = Math.exp(-r),
                          l = M(Math.pow(e, 2), o);
                        return (
                          ((r * i + i - n) * a * (-s(e) + 0.001 > 0 ? -1 : 1)) /
                          l
                        );
                      }))
                    : ((s = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (a = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let l = (function (t, e, i) {
                  let r = i;
                  for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                  return r;
                })(s, a, 5 / t);
                if (((t = (0, r.f)(t)), isNaN(l)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(l, 2) * n;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(n * e),
                    duration: t,
                  };
                }
              })(t);
              (e = { ...e, ...i, mass: 1 }).isResolvedFromDuration = !0;
            }
            return e;
          })({ ...n, velocity: -(0, r.X)(n.velocity || 0) }),
          m = c || 0,
          v = h / (2 * Math.sqrt(u * d)),
          g = o - a,
          y = (0, r.X)(Math.sqrt(u / d)),
          w = 5 > Math.abs(g);
        if ((i || (i = w ? 0.01 : 2), e || (e = w ? 0.005 : 0.5), v < 1)) {
          let t = M(y, v);
          s = (e) =>
            o -
            Math.exp(-v * y * e) *
              (((m + v * y * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
        } else if (1 === v)
          s = (t) => o - Math.exp(-y * t) * (g + (m + y * g) * t);
        else {
          let t = y * Math.sqrt(v * v - 1);
          s = (e) => {
            let i = Math.exp(-v * y * e),
              r = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + v * y * g) * Math.sinh(r) + t * g * Math.cosh(r))) / t
            );
          };
        }
        return {
          calculatedDuration: (f && p) || null,
          next: (t) => {
            let n = s(t);
            if (f) l.done = t >= p;
            else {
              let a = 0;
              v < 1 && (a = 0 === t ? (0, r.f)(m) : T(s, t, n));
              let u = Math.abs(o - n) <= e;
              l.done = Math.abs(a) <= i && u;
            }
            return (l.value = l.done ? o : n), l;
          },
        };
      }
      function I({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, p;
        let c = t[0],
          f = { done: !1, value: c },
          m = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === o
              ? l
              : void 0 === l
              ? o
              : Math.abs(o - t) < Math.abs(l - t)
              ? o
              : l,
          g = i * e,
          y = c + g,
          w = void 0 === a ? y : a(y);
        w !== y && (g = w - c);
        let x = (t) => -g * Math.exp(-t / r),
          b = (t) => w + x(t),
          S = (t) => {
            let e = x(t),
              i = b(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? w : i);
          },
          P = (t) => {
            m(f.value) &&
              ((d = t),
              (p = O({
                keyframes: [f.value, v(f.value)],
                velocity: T(b, t, f.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== d || ((e = !0), S(t), P(t)),
              void 0 !== d && t >= d)
                ? p.next(t - d)
                : (e || S(t), f);
            },
          }
        );
      }
      let j = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function R(t, e, i, r) {
        if (t === e && i === r) return y.l;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, a;
            let o = 0;
            do (s = j((a = e + (i - e) / 2), r, n) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(s) > 1e-7 && ++o < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : j(n(t), e, r));
      }
      let B = R(0.42, 0, 1, 1),
        W = R(0, 0, 0.58, 1),
        $ = R(0.42, 0, 0.58, 1),
        N = (t) => Array.isArray(t) && "number" != typeof t[0];
      var L = i(59282),
        K = i(567),
        D = i(16498);
      let X = R(0.33, 1.53, 0.69, 0.99),
        q = (0, D.G)(X),
        Y = (0, K.V)(q),
        G = {
          linear: y.l,
          easeIn: B,
          easeInOut: $,
          easeOut: W,
          circIn: L.po,
          circInOut: L.tn,
          circOut: L.yT,
          backIn: q,
          backInOut: Y,
          backOut: X,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * q(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        U = (t) => {
          if (Array.isArray(t)) {
            (0, b.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return R(e, i, r, n);
          }
          return "string" == typeof t
            ? ((0, b.V)(void 0 !== G[t], `Invalid easing type '${t}'`), G[t])
            : t;
        };
      var H = i(97846),
        z = i(7345);
      function Q({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = N(r) ? r.map(U) : U(r),
          s = { done: !1, value: e[0] },
          a = (i && i.length === e.length ? i : (0, z.Z)(e)).map((e) => e * t),
          o = (0, H.G)(a, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || $).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      var _ = i(97007),
        Z = i(47437);
      let J = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => m.Gt.update(e, !0),
            stop: () => (0, m.WG)(e),
            now: () => (m.uv.isProcessing ? m.uv.timestamp : w.k.now()),
          };
        },
        tt = { decay: I, inertia: I, tween: Q, keyframes: Q, spring: O },
        te = (t) => t / 100;
      class ti extends V {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              let { onStop: t } = this.options;
              t && t(),
                this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" !== this.state && this.teardown();
            });
          let {
              name: e,
              motionValue: i,
              element: r,
              keyframes: n,
            } = this.options,
            s = (null == r ? void 0 : r.KeyframeResolver) || x.h;
          (this.resolver = new s(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t) {
          let e, i;
          let {
              type: r = "keyframes",
              repeat: n = 0,
              repeatDelay: s = 0,
              repeatType: a,
              velocity: o = 0,
            } = this.options,
            l = tt[r] || Q;
          l !== Q &&
            "number" != typeof t[0] &&
            ((e = (0, _.F)(te, (0, Z.j)(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === a &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -o,
            })),
            null === u.calculatedDuration &&
              (u.calculatedDuration = (function (t) {
                let e = 0,
                  i = t.next(e);
                for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
                return e >= 2e4 ? 1 / 0 : e;
              })(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (n + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: r,
            generator: n,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: o,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return n.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: c,
            repeatDelay: m,
            onUpdate: v,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            y = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let w = this.currentTime,
            x = n;
          if (p) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === c
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === c && (x = s)),
              (w = (0, C.q)(0, 1, i) * h);
          }
          let b = y ? { done: !1, value: o[0] } : x.next(w);
          a && (b.value = a(b.value));
          let { done: S } = b;
          y ||
            null === l ||
            (S =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            P && void 0 !== r && (b.value = f(o, this.options, r)),
            v && v(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? (0, r.X)(t.calculatedDuration) : 0;
        }
        get time() {
          return (0, r.X)(this.currentTime);
        }
        set time(t) {
          (t = (0, r.f)(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t),
            e && (this.time = (0, r.X)(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = J, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let r = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = r)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      var tr = i(92295);
      let tn = (t) => Array.isArray(t) && "number" == typeof t[0],
        ts = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        ta = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ts([0, 0.65, 0.55, 1]),
          circOut: ts([0.55, 0, 1, 0.45]),
          backIn: ts([0.31, 0.01, 0.66, -0.59]),
          backOut: ts([0.33, 1.53, 0.69, 0.99]),
        };
      function to(t) {
        return tl(t) || ta.easeOut;
      }
      function tl(t) {
        if (t) return tn(t) ? ts(t) : Array.isArray(t) ? t.map(to) : ta[t];
      }
      let tu = g(() =>
        Object.hasOwnProperty.call(Element.prototype, "animate")
      );
      class th extends V {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: r,
            keyframes: n,
          } = this.options;
          (this.resolver = new v.K(
            n,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            r
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, r;
          let {
            duration: n = 300,
            times: s,
            ease: a,
            type: o,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            "spring" === (r = this.options).type ||
            !(function t(e) {
              return !!(
                !e ||
                ("string" == typeof e && e in ta) ||
                tn(e) ||
                (Array.isArray(e) && e.every(t))
              );
            })(r.ease)
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: r,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new ti({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  r = { done: !1, value: t[0] },
                  n = [],
                  s = 0;
                for (; !r.done && s < 2e4; )
                  n.push((r = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: n,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (s = h.times),
              (a = h.ease),
              (o = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o,
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = tl(o);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: r,
                duration: n,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === a ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: n,
            times: s,
            ease: a,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? ((d.timeline = this.pendingTimeline),
                (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(f(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: n,
              times: s,
              type: o,
              ease: a,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return (0, r.X)(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return (0, r.X)(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = (0, r.f)(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return y.l;
            let { animation: i } = e;
            (i.timeline = t), (i.onfinish = null);
          } else this.pendingTimeline = t;
          return y.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: s,
            ease: a,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: l,
                element: u,
                ...h
              } = this.options,
              d = new ti({
                ...h,
                keyframes: i,
                duration: n,
                type: s,
                ease: a,
                times: o,
                isGenerator: !0,
              }),
              p = (0, r.f)(this.time);
            t.setWithVelocity(d.sample(p - 10).value, d.sample(p).value, 10);
          }
          let { onStop: l } = this.options;
          l && l(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: r,
            repeatType: n,
            damping: s,
            type: a,
          } = t;
          return (
            tu() &&
            i &&
            tr.M.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !r &&
            "mirror" !== n &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      let td = g(() => void 0 !== window.ScrollTimeline);
      class tp {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!td() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let i;
                  let r = () => {
                    let { currentTime: r } = e,
                      n = (null === r ? 0 : r.value) / 100;
                    i !== n && t(n), (i = n);
                  };
                  return m.Gt.update(r, !0), () => (0, m.WG)(r);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let tc =
        (t, e, i, n = {}, s, a, o) =>
        (l) => {
          let c = (0, h.r)(n, t) || {},
            v = c.delay || n.delay || 0,
            { elapsed: g = 0 } = n;
          g -= (0, r.f)(v);
          let y = {
            keyframes: Array.isArray(i) ? i : [null, i],
            ease: "easeOut",
            velocity: e.getVelocity(),
            ...c,
            delay: -g,
            onUpdate: (t) => {
              e.set(t), c.onUpdate && c.onUpdate(t);
            },
            onComplete: () => {
              l(), c.onComplete && c.onComplete(), o && o();
            },
            onStop: o,
            name: t,
            motionValue: e,
            element: a ? void 0 : s,
          };
          (0, h.D)(c) || (y = { ...y, ...u(t, y) }),
            y.duration && (y.duration = (0, r.f)(y.duration)),
            y.repeatDelay && (y.repeatDelay = (0, r.f)(y.repeatDelay)),
            void 0 !== y.from && (y.keyframes[0] = y.from);
          let w = !1;
          if (
            ((!1 !== y.type && (0 !== y.duration || y.repeatDelay)) ||
              ((y.duration = 0), 0 !== y.delay || (w = !0)),
            (p.current || d.W.skipAnimations) &&
              ((w = !0), (y.duration = 0), (y.delay = 0)),
            w && !a && void 0 !== e.get())
          ) {
            let t = f(y.keyframes, c);
            if (void 0 !== t)
              return (
                m.Gt.update(() => {
                  y.onUpdate(t), y.onComplete();
                }),
                new tp([])
              );
          }
          return !a && th.supports(y) ? new th(y) : new ti(y);
        };
    },
    52290: (t, e, i) => {
      i.d(e, { X: () => r });
      class r {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
    },
    56440: (t, e, i) => {
      i.d(e, { $: () => r });
      let r = (t) => /^0[^.\s]+$/u.test(t);
    },
    58492: (t, e, i) => {
      i.d(e, { I: () => a });
      var r = i(59779),
        n = i(41211),
        s = i(63284);
      class a extends r.KG {
        constructor() {
          super(...arguments), (this.output = []), (this.counts = new Map());
        }
        add(t) {
          let e = (0, n.I)(t);
          if (!e) return;
          let i = this.counts.get(e) || 0;
          this.counts.set(e, i + 1),
            0 === i && (this.output.push(e), this.update());
          let r = !1;
          return () => {
            if (r) return;
            r = !0;
            let t = this.counts.get(e) - 1;
            this.counts.set(e, t),
              0 === t && ((0, s.Ai)(this.output, e), this.update());
          };
        }
        update() {
          this.set(this.output.length ? this.output.join(", ") : "auto");
        }
      }
    },
    59210: (t, e, i) => {
      i.d(e, { Ci: () => o, Gt: () => n, WG: () => s, uv: () => a });
      var r = i(69147);
      let {
        schedule: n,
        cancel: s,
        state: a,
        steps: o,
      } = (0, i(70554).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : r.l,
        !0
      );
    },
    59282: (t, e, i) => {
      i.d(e, { po: () => s, tn: () => o, yT: () => a });
      var r = i(567),
        n = i(16498);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, n.G)(s),
        o = (0, r.V)(s);
    },
    59779: (t, e, i) => {
      i.d(e, { KG: () => u, OQ: () => h });
      var r = i(66802),
        n = i(15315),
        s = i(19932),
        a = i(59210);
      let o = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          (this.version = "12.0.0-alpha.1"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = s.k.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = o(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  a.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return l.current && l.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, n.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    60990: (t, e, i) => {
      i.d(e, { x: () => s });
      var r = i(33055),
        n = i(14570);
      function s(t, e, i) {
        var s;
        let { style: a } = t,
          o = {};
        for (let l in a)
          ((0, n.S)(a[l]) ||
            (e.style && (0, n.S)(e.style[l])) ||
            (0, r.z)(l, t) ||
            (null === (s = null == i ? void 0 : i.getValue(l)) || void 0 === s
              ? void 0
              : s.liveStyle) !== void 0) &&
            (o[l] = a[l]);
        return (
          i && a && "string" == typeof a.willChange && (i.applyWillChange = !1),
          o
        );
      }
    },
    61710: (t, e, i) => {
      i.d(e, { J: () => z });
      var r = i(12115),
        n = i(86169),
        s = i(93676),
        a = i(14206),
        o = i(60990),
        l = i(20600),
        u = i(2217),
        h = i(33757),
        d = i(68972);
      let p = { current: null },
        c = { current: !1 };
      var f = i(66802),
        m = i(59779),
        v = i(14570),
        g = i(19253),
        y = i(65305),
        w = i(2735),
        x = i(6642),
        b = i(98312);
      let S = new WeakMap();
      var P = i(18203),
        V = i(3870),
        A = i(56440),
        T = i(82897),
        C = i(90664),
        M = i(39067),
        k = i(61987);
      let F = [...M.T, T.y, C.f],
        E = (t) => F.find((0, k.w)(t));
      var O = i(19780),
        I = i(81786),
        j = i(59210);
      let R = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        B = b._.length;
      class W {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          a = {}
        ) {
          (this.applyWillChange = !1),
            (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = P.h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              (this.isRenderScheduled = !1),
                this.current &&
                  (this.triggerBuild(),
                  this.renderInstance(
                    this.current,
                    this.renderState,
                    this.props.style,
                    this.projection
                  ));
            }),
            (this.isRenderScheduled = !1),
            (this.scheduleRender = () => {
              this.isRenderScheduled ||
                ((this.isRenderScheduled = !0),
                j.Gt.render(this.render, !1, !0));
            });
          let { latestValues: o, renderState: l } = s;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = a),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = (0, g.e)(e)),
            (this.isVariantNode = (0, g.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== o[t] && (0, v.S)(e) && e.set(o[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            S.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            c.current ||
              (function () {
                if (((c.current = !0), d.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (p.current = t.matches);
                    t.addListener(e), e();
                  } else p.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || p.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (S.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, j.WG)(this.notifyUpdate),
          (0, j.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = a.f.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && j.Gt.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in x.B) {
            let e = x.B[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, I.ge)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < R.length; e++) {
            let i = R[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if ((0, v.S)(n)) t.addValue(r, n);
              else if ((0, v.S)(s)) t.addValue(r, (0, m.OQ)(n, { owner: t }));
              else if (s !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, (0, m.OQ)(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < B; t++) {
            let i = b._[t],
              r = this.props[i];
            ((0, y.w)(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, m.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let r =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && ((0, V.i)(r) || (0, A.$)(r))
                ? (r = parseFloat(r))
                : !E(r) && C.f.test(e) && (r = (0, O.J)(t, e)),
              this.setBaseTarget(t, (0, v.S)(r) ? r.get() : r)),
            (0, v.S)(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let n = (0, w.a)(
              this.props,
              r,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            n && (i = n[t]);
          }
          if (r && void 0 !== i) return i;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, v.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new f.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      var $ = i(33796);
      class N extends W {
        constructor() {
          super(...arguments), (this.KeyframeResolver = $.K);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
      }
      class L extends N {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.applyWillChange = !0),
            (this.renderInstance = l.e);
        }
        readValueFromInstance(t, e) {
          if (a.f.has(e)) {
            let t = (0, u.D)(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = ((0, s.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, h.m)(t, e);
        }
        build(t, e, i) {
          (0, n.O)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, o.x)(t, e, i);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, v.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var K = i(34527),
        D = i(97914),
        X = i(78450),
        q = i(36381),
        Y = i(33869),
        G = i(93095);
      class U extends N {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = I.ge);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (a.f.has(e)) {
            let t = (0, u.D)(e);
            return (t && t.default) || 0;
          }
          return (e = q.e.has(e) ? e : (0, X.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, K.x)(t, e, i);
        }
        build(t, e, i) {
          (0, D.B)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          (0, Y.d)(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = (0, G.n)(t.tagName)), super.mount(t);
        }
      }
      var H = i(175);
      let z = (t, e) =>
        (0, H.Q)(t)
          ? new U(e)
          : new L(e, { allowProjection: t !== r.Fragment });
    },
    61987: (t, e, i) => {
      i.d(e, { w: () => r });
      let r = (t) => (e) => e.test(t);
    },
    62662: (t, e, i) => {
      function r(t) {
        return void 0 === t || 1 === t;
      }
      function n({ scale: t, scaleX: e, scaleY: i }) {
        return !r(t) || !r(e) || !r(i);
      }
      function s(t) {
        return (
          n(t) ||
          a(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function a(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      i.d(e, { HD: () => s, vF: () => a, vk: () => n });
    },
    63284: (t, e, i) => {
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => n, Kq: () => r });
    },
    65305: (t, e, i) => {
      i.d(e, { w: () => r });
      function r(t) {
        return "string" == typeof t || Array.isArray(t);
      }
    },
    66802: (t, e, i) => {
      i.d(e, { v: () => n });
      var r = i(63284);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.Kq)(this.subscriptions, t),
            () => (0, r.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    67670: (t, e, i) => {
      i.d(e, { $: () => n, V: () => s });
      var r = i(69147);
      let n = r.l,
        s = r.l;
    },
    67730: (t, e, i) => {
      i.d(e, { u: () => n });
      var r = i(24935);
      let n = {
        test: (0, i(3886).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            r = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: r.B.transform,
      };
    },
    68972: (t, e, i) => {
      i.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    69147: (t, e, i) => {
      i.d(e, { l: () => r });
      let r = (t) => t;
    },
    70071: (t, e, i) => {
      i.d(e, { X: () => n, f: () => r });
      let r = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
    70554: (t, e, i) => {
      i.d(e, { I: () => s });
      var r = i(74492);
      let n = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      function s(t, e) {
        let i = !1,
          s = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          o = () => (i = !0),
          l = n.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  r = !1,
                  n = !1,
                  s = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 };
                function o(e) {
                  s.has(e) && (l.schedule(e), t()), e(a);
                }
                let l = {
                  schedule: (t, n = !1, a = !1) => {
                    let o = a && r ? e : i;
                    return n && s.add(t), o.has(t) || o.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), r)) {
                      n = !0;
                      return;
                    }
                    (r = !0),
                      ([e, i] = [i, e]),
                      i.clear(),
                      e.forEach(o),
                      (r = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(o)),
              t
            ),
            {}
          ),
          {
            read: u,
            resolveKeyframes: h,
            update: d,
            preRender: p,
            render: c,
            postRender: f,
          } = l,
          m = () => {
            let n = r.W.useManualTiming ? a.timestamp : performance.now();
            (i = !1),
              (a.delta = s
                ? 1e3 / 60
                : Math.max(Math.min(n - a.timestamp, 40), 1)),
              (a.timestamp = n),
              (a.isProcessing = !0),
              u.process(a),
              h.process(a),
              d.process(a),
              p.process(a),
              c.process(a),
              f.process(a),
              (a.isProcessing = !1),
              i && e && ((s = !1), t(m));
          },
          v = () => {
            (i = !0), (s = !0), a.isProcessing || t(m);
          };
        return {
          schedule: n.reduce((t, e) => {
            let r = l[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || v(), r.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < n.length; e++) l[n[e]].cancel(t);
          },
          state: a,
          steps: l,
        };
      }
    },
    70797: (t, e, i) => {
      i.d(e, { N: () => r });
      let r = (0, i(12115).createContext)({});
    },
    74492: (t, e, i) => {
      i.d(e, { W: () => r });
      let r = { skipAnimations: !1, useManualTiming: !1 };
    },
    76333: (t, e, i) => {
      i.d(e, { g: () => s });
      var r = i(58492),
        n = i(14570);
      function s(t, e) {
        var i, s;
        if (!t.applyWillChange) return;
        let a = t.getValue("willChange");
        if (
          (a ||
            (null === (i = t.props.style) || void 0 === i
              ? void 0
              : i.willChange) ||
            ((a = new r.I("auto")), t.addValue("willChange", a)),
          (s = a),
          (0, n.S)(s) && s.add)
        )
          return a.add(e);
      }
    },
    77782: (t, e, i) => {
      i.d(e, { q: () => r });
      let r = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    78450: (t, e, i) => {
      i.d(e, { I: () => r });
      let r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    78588: (t, e, i) => {
      function r({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function n({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let i = e({ x: t.left, y: t.top }),
          r = e({ x: t.right, y: t.bottom });
        return { top: i.y, left: i.x, bottom: r.y, right: r.x };
      }
      i.d(e, { FY: () => r, bS: () => s, pA: () => n });
    },
    78754: (t, e, i) => {
      function r(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      i.d(e, { D3: () => o, nQ: () => a });
      let n = r("dragHorizontal"),
        s = r("dragVertical");
      function a(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = n();
        else {
          let t = n(),
            i = s();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function o() {
        let t = a(!0);
        return !t || (t(), !1);
      }
    },
    79280: (t, e, i) => {
      i.d(e, { $y: () => a, E4: () => o, Hr: () => c, W9: () => p });
      var r = i(14206),
        n = i(23082),
        s = i(45471);
      let a = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        o = (t) => t === n.ai || t === s.px,
        l = (t, e) => parseFloat(t.split(", ")[e]),
        u =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/u);
            if (n) return l(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/u);
              return e ? l(e[1], t) : 0;
            }
          },
        h = new Set(["x", "y", "z"]),
        d = r.U.filter((t) => !h.has(t));
      function p(t) {
        let e = [];
        return (
          d.forEach((i) => {
            let r = t.getValue(i);
            void 0 !== r &&
              (e.push([i, r.get()]), r.set(+!!i.startsWith("scale")));
          }),
          e
        );
      }
      let c = {
        width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
          t.max - t.min - parseFloat(e) - parseFloat(i),
        top: (t, { top: e }) => parseFloat(e),
        left: (t, { left: e }) => parseFloat(e),
        bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
        right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
        x: u(4, 13),
        y: u(5, 14),
      };
      (c.translateX = c.x), (c.translateY = c.y);
    },
    80845: (t, e, i) => {
      i.d(e, { t: () => r });
      let r = (0, i(12115).createContext)(null);
    },
    81786: (t, e, i) => {
      i.d(e, { ge: () => a, xU: () => n });
      let r = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        n = () => ({ x: r(), y: r() }),
        s = () => ({ min: 0, max: 0 }),
        a = () => ({ x: s(), y: s() });
    },
    82885: (t, e, i) => {
      i.d(e, { M: () => n });
      var r = i(12115);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    82897: (t, e, i) => {
      i.d(e, { y: () => o });
      var r = i(30234),
        n = i(67730),
        s = i(12083),
        a = i(24935);
      let o = {
        test: (t) => a.B.test(t) || n.u.test(t) || s.V.test(t),
        parse: (t) =>
          a.B.test(t)
            ? a.B.parse(t)
            : s.V.test(t)
            ? s.V.parse(t)
            : n.u.parse(t),
        transform: (t) =>
          (0, r.Kg)(t)
            ? t
            : t.hasOwnProperty("red")
            ? a.B.transform(t)
            : s.V.transform(t),
      };
    },
    86169: (t, e, i) => {
      i.d(e, { O: () => u });
      var r = i(14206);
      let n = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var s = i(89976);
      let a = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        o = r.U.length;
      var l = i(93676);
      function u(t, e, i) {
        let { style: u, vars: h, transformOrigin: d } = t,
          p = !1,
          c = !1;
        for (let t in e) {
          let i = e[t];
          if (r.f.has(t)) {
            p = !0;
            continue;
          }
          if ((0, l.j)(t)) {
            h[t] = i;
            continue;
          }
          {
            let e = n(i, s.W[t]);
            t.startsWith("origin") ? ((c = !0), (d[t] = e)) : (u[t] = e);
          }
        }
        if (
          (!e.transform &&
            (p || i
              ? (u.transform = (function (t, e, i) {
                  let l = "",
                    u = !0;
                  for (let h = 0; h < o; h++) {
                    let o = r.U[h],
                      d = t[o];
                    if (void 0 === d) continue;
                    let p = !0;
                    if (
                      !(p =
                        "number" == typeof d
                          ? d === +!!o.startsWith("scale")
                          : 0 === parseFloat(d)) ||
                      i
                    ) {
                      let t = n(d, s.W[o]);
                      if (!p) {
                        u = !1;
                        let e = a[o] || o;
                        l += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (l = l.trim()),
                    i ? (l = i(e, u ? "" : l)) : u && (l = "none"),
                    l
                  );
                })(e, t.transform, i))
              : u.transform && (u.transform = "none")),
          c)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = d;
          u.transformOrigin = `${t} ${e} ${i}`;
        }
      }
    },
    89976: (t, e, i) => {
      i.d(e, { W: () => a });
      var r = i(23082),
        n = i(45471);
      let s = { ...r.ai, transform: Math.round },
        a = {
          borderWidth: n.px,
          borderTopWidth: n.px,
          borderRightWidth: n.px,
          borderBottomWidth: n.px,
          borderLeftWidth: n.px,
          borderRadius: n.px,
          radius: n.px,
          borderTopLeftRadius: n.px,
          borderTopRightRadius: n.px,
          borderBottomRightRadius: n.px,
          borderBottomLeftRadius: n.px,
          width: n.px,
          maxWidth: n.px,
          height: n.px,
          maxHeight: n.px,
          size: n.px,
          top: n.px,
          right: n.px,
          bottom: n.px,
          left: n.px,
          padding: n.px,
          paddingTop: n.px,
          paddingRight: n.px,
          paddingBottom: n.px,
          paddingLeft: n.px,
          margin: n.px,
          marginTop: n.px,
          marginRight: n.px,
          marginBottom: n.px,
          marginLeft: n.px,
          rotate: n.uj,
          rotateX: n.uj,
          rotateY: n.uj,
          rotateZ: n.uj,
          scale: r.hs,
          scaleX: r.hs,
          scaleY: r.hs,
          scaleZ: r.hs,
          skew: n.uj,
          skewX: n.uj,
          skewY: n.uj,
          distance: n.px,
          translateX: n.px,
          translateY: n.px,
          translateZ: n.px,
          x: n.px,
          y: n.px,
          z: n.px,
          perspective: n.px,
          transformPerspective: n.px,
          opacity: r.X4,
          originX: n.gQ,
          originY: n.gQ,
          originZ: n.px,
          zIndex: s,
          backgroundPositionX: n.px,
          backgroundPositionY: n.px,
          fillOpacity: r.X4,
          strokeOpacity: r.X4,
          numOctaves: s,
        };
    },
    90664: (t, e, i) => {
      i.d(e, { V: () => l, f: () => p });
      var r = i(82897),
        n = i(30234);
      let s = "number",
        a = "color",
        o =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function l(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          l = [],
          u = 0,
          h = e
            .replace(
              o,
              (t) => (
                r.y.test(t)
                  ? (n.color.push(u), l.push(a), i.push(r.y.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(u), l.push("var"), i.push(t))
                  : (n.number.push(u), l.push(s), i.push(parseFloat(t))),
                ++u,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: h, indexes: n, types: l };
      }
      function u(t) {
        return l(t).values;
      }
      function h(t) {
        let { split: e, types: i } = l(t),
          o = e.length;
        return (t) => {
          let l = "";
          for (let u = 0; u < o; u++)
            if (((l += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === s
                ? (l += (0, n.aj)(t[u]))
                : e === a
                ? (l += r.y.transform(t[u]))
                : (l += t[u]);
            }
          return l;
        };
      }
      let d = (t) => ("number" == typeof t ? 0 : t),
        p = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, n.Kg)(t) &&
              ((null === (e = t.match(n.SY)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(n.ne)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: u,
          createTransformer: h,
          getAnimatableNone: function (t) {
            let e = u(t);
            return h(t)(e.map(d));
          },
        };
    },
    90869: (t, e, i) => {
      i.d(e, { L: () => r });
      let r = (0, i(12115).createContext)({});
    },
    92295: (t, e, i) => {
      i.d(e, { M: () => r });
      let r = new Set(["opacity", "clipPath", "filter", "transform"]);
    },
    93095: (t, e, i) => {
      i.d(e, { n: () => r });
      let r = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    93676: (t, e, i) => {
      i.d(e, { j: () => n, p: () => a });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = r("--"),
        s = r("var(--"),
        a = (t) => !!s(t) && o.test(t.split("/*")[0].trim()),
        o =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    95902: (t, e, i) => {
      i.d(e, { u: () => s });
      var r = i(34379),
        n = i(14570);
      function s(t) {
        let e = (0, n.S)(t) ? t.get() : t;
        return (0, r.B)(e) ? e.toValue() : e;
      }
    },
    96147: (t, e, i) => {
      i.d(e, {
        OU: () => u,
        Ql: () => h,
        Ww: () => p,
        hq: () => s,
        o4: () => l,
      });
      var r = i(21109),
        n = i(62662);
      function s(t, e, i) {
        return i + e * (t - i);
      }
      function a(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function o(t, e = 0, i = 1, r, n) {
        (t.min = a(t.min, e, i, r, n)), (t.max = a(t.max, e, i, r, n));
      }
      function l(t, { x: e, y: i }) {
        o(t.x, e.translate, e.scale, e.originPoint),
          o(t.y, i.translate, i.scale, i.originPoint);
      }
      function u(t, e, i, r = !1) {
        let s, a;
        let o = i.length;
        if (o) {
          e.x = e.y = 1;
          for (let u = 0; u < o; u++) {
            a = (s = i[u]).projectionDelta;
            let { visualElement: o } = s.options;
            (!o || !o.props.style || "contents" !== o.props.style.display) &&
              (r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                p(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              a && ((e.x *= a.x.scale), (e.y *= a.y.scale), l(t, a)),
              r && (0, n.HD)(s.latestValues) && p(t, s.latestValues));
          }
          e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
            e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
        }
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, i, n, s = 0.5) {
        let a = (0, r.k)(t.min, t.max, s);
        o(t, e, i, a, n);
      }
      function p(t, e) {
        d(t.x, e.x, e.scaleX, e.scale, e.originX),
          d(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
    },
    97007: (t, e, i) => {
      i.d(e, { F: () => n });
      let r = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(r);
    },
    97494: (t, e, i) => {
      i.d(e, { E: () => n });
      var r = i(12115);
      let n = i(68972).B ? r.useLayoutEffect : r.useEffect;
    },
    97846: (t, e, i) => {
      i.d(e, { G: () => u });
      var r = i(67670),
        n = i(77782),
        s = i(97007),
        a = i(18210),
        o = i(69147),
        l = i(47437);
      function u(t, e, { clamp: i = !0, ease: h, mixer: d } = {}) {
        let p = t.length;
        if (
          ((0, r.V)(
            p === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === p)
        )
          return () => e[0];
        if (2 === p && t[0] === t[1]) return () => e[1];
        t[0] > t[p - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let c = (function (t, e, i) {
            let r = [],
              n = i || l.j,
              a = t.length - 1;
            for (let i = 0; i < a; i++) {
              let a = n(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || o.l : e;
                a = (0, s.F)(t, a);
              }
              r.push(a);
            }
            return r;
          })(e, h, d),
          f = c.length,
          m = (e) => {
            let i = 0;
            if (f > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = (0, a.q)(t[i], t[i + 1], e);
            return c[i](r);
          };
        return i ? (e) => m((0, n.q)(t[0], t[p - 1], e)) : m;
      }
    },
    97914: (t, e, i) => {
      i.d(e, { B: () => l });
      var r = i(86169),
        n = i(45471);
      function s(t, e, i) {
        return "string" == typeof t ? t : n.px.transform(e + i * t);
      }
      let a = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        o = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: l,
          originX: u,
          originY: h,
          pathLength: d,
          pathSpacing: p = 1,
          pathOffset: c = 0,
          ...f
        },
        m,
        v
      ) {
        if (((0, r.O)(t, f, v), m)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: y, dimensions: w } = t;
        g.transform && (w && (y.transform = g.transform), delete g.transform),
          w &&
            (void 0 !== u || void 0 !== h || y.transform) &&
            (y.transformOrigin = (function (t, e, i) {
              let r = s(e, t.x, t.width),
                n = s(i, t.y, t.height);
              return `${r} ${n}`;
            })(w, void 0 !== u ? u : 0.5, void 0 !== h ? h : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== i && (g.y = i),
          void 0 !== l && (g.scale = l),
          void 0 !== d &&
            (function (t, e, i = 1, r = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? a : o;
              t[l.offset] = n.px.transform(-r);
              let u = n.px.transform(e),
                h = n.px.transform(i);
              t[l.array] = `${u} ${h}`;
            })(g, d, p, c, !1);
      }
    },
    98312: (t, e, i) => {
      i.d(e, { U: () => r, _: () => n });
      let r = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        n = ["initial", ...r];
    },
  },
]);
