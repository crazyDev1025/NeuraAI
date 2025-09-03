(() => {
  "use strict";
  var e = {},
    r = {};
  function t(a) {
    var o = r[a];
    if (void 0 !== o) return o.exports;
    var c = (r[a] = { exports: {} }),
      n = !0;
    try {
      e[a].call(c.exports, c, c.exports, t), (n = !1);
    } finally {
      n && delete r[a];
    }
    return c.exports;
  }
  (t.m = e),
    (() => {
      var e = [];
      t.O = (r, a, o, c) => {
        if (a) {
          c = c || 0;
          for (var n = e.length; n > 0 && e[n - 1][2] > c; n--) e[n] = e[n - 1];
          e[n] = [a, o, c];
          return;
        }
        for (var i = 1 / 0, n = 0; n < e.length; n++) {
          for (var [a, o, c] = e[n], l = !0, d = 0; d < a.length; d++)
            (!1 & c || i >= c) && Object.keys(t.O).every((e) => t.O[e](a[d]))
              ? a.splice(d--, 1)
              : ((l = !1), c < i && (i = c));
          if (l) {
            e.splice(n--, 1);
            var f = o();
            void 0 !== f && (r = f);
          }
        }
        return r;
      };
    })(),
    (t.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, { a: r }), r;
    }),
    (() => {
      var e,
        r = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      t.t = function (a, o) {
        if (
          (1 & o && (a = this(a)),
          8 & o ||
            ("object" == typeof a &&
              a &&
              ((4 & o && a.__esModule) ||
                (16 & o && "function" == typeof a.then))))
        )
          return a;
        var c = Object.create(null);
        t.r(c);
        var n = {};
        e = e || [null, r({}), r([]), r(r)];
        for (
          var i = 2 & o && a;
          "object" == typeof i && !~e.indexOf(i);
          i = r(i)
        )
          Object.getOwnPropertyNames(i).forEach((e) => (n[e] = () => a[e]));
        return (n.default = () => a), t.d(c, n), c;
      };
    })(),
    (t.d = (e, r) => {
      for (var a in r)
        t.o(r, a) &&
          !t.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: r[a] });
    }),
    (t.f = {}),
    (t.e = (e) =>
      Promise.all(Object.keys(t.f).reduce((r, a) => (t.f[a](e, r), r), []))),
    (t.u = (e) =>
      "static/chunks/" +
      ({
        594: "8ffc485e",
        950: "b055d1fb",
        1831: "bd904a5c",
        2042: "reactPlayerTwitch",
        2723: "reactPlayerMux",
        3392: "reactPlayerVidyard",
        6173: "reactPlayerVimeo",
        6328: "reactPlayerDailyMotion",
        6353: "reactPlayerPreview",
        6463: "reactPlayerKaltura",
        6887: "reactPlayerFacebook",
        7458: "reactPlayerFilePlayer",
        7570: "reactPlayerMixcloud",
        7627: "reactPlayerStreamable",
        8446: "reactPlayerYouTube",
        9340: "reactPlayerWistia",
        9367: "b536a0f1",
        9804: "5e094596",
        9979: "reactPlayerSoundCloud",
      }[e] || e) +
      "." +
      {
        396: "01547d03245a930e",
        594: "42cad48a7821e149",
        950: "7f679ca454c6d775",
        1155: "1b626e2d5034e24f",
        1831: "623825f4840438e0",
        2042: "e6343bced5c77a3c",
        2723: "6ec336818cca01d1",
        3392: "224d58ebe9da61db",
        6173: "861918b14bbc28ec",
        6328: "e15e11f1e003eaa4",
        6353: "971f31e7ce9d1271",
        6463: "087a47d9a36c1e15",
        6887: "1700df7615189e05",
        7190: "7afb1e9961f4ee7d",
        7458: "a4acbe9d673f1a5e",
        7570: "c7aa7f0d44556a69",
        7627: "dc2bcaa7bc2d17f1",
        8446: "d66f020c1dd2dc9f",
        8637: "71db598a1ed0c2ff",
        9340: "fc0c62ae5f4412ec",
        9367: "b6912b3f7f26f897",
        9804: "33bd1104174ce3ca",
        9979: "c48e2e3b80c91e50",
      }[e] +
      ".js"),
    (t.miniCssF = (e) => {}),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (() => {
      var e = {},
        r = "_N_E:";
      t.l = (a, o, c, n) => {
        if (e[a]) {
          e[a].push(o);
          return;
        }
        if (void 0 !== c)
          for (
            var i, l, d = document.getElementsByTagName("script"), f = 0;
            f < d.length;
            f++
          ) {
            var u = d[f];
            if (
              u.getAttribute("src") == a ||
              u.getAttribute("data-webpack") == r + c
            ) {
              i = u;
              break;
            }
          }
        i ||
          ((l = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          t.nc && i.setAttribute("nonce", t.nc),
          i.setAttribute("data-webpack", r + c),
          (i.src = t.tu(a))),
          (e[a] = [o]);
        var s = (r, t) => {
            (i.onerror = i.onload = null), clearTimeout(b);
            var o = e[a];
            if (
              (delete e[a],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          b = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = s.bind(null, i.onerror)),
          (i.onload = s.bind(null, i.onload)),
          l && document.head.appendChild(i);
      };
    })(),
    (t.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      t.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (t.tu = (e) => t.tt().createScriptURL(e)),
    (t.p = "/_next/"),
    (() => {
      var e = { 8068: 0, 4523: 0, 2167: 0, 2820: 0 };
      (t.f.j = (r, a) => {
        var o = t.o(e, r) ? e[r] : void 0;
        if (0 !== o) {
          if (o) a.push(o[2]);
          else if (/^(2167|2820|4523|8068)$/.test(r)) e[r] = 0;
          else {
            var c = new Promise((t, a) => (o = e[r] = [t, a]));
            a.push((o[2] = c));
            var n = t.p + t.u(r),
              i = Error();
            t.l(
              n,
              (a) => {
                if (t.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var c = a && ("load" === a.type ? "missing" : a.type),
                    n = a && a.target && a.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + c + ": " + n + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = c),
                    (i.request = n),
                    o[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
        }
      }),
        (t.O.j = (r) => 0 === e[r]);
      var r = (r, a) => {
          var o,
            c,
            [n, i, l] = a,
            d = 0;
          if (n.some((r) => 0 !== e[r])) {
            for (o in i) t.o(i, o) && (t.m[o] = i[o]);
            if (l) var f = l(t);
          }
          for (r && r(a); d < n.length; d++)
            (c = n[d]), t.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return t.O(f);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      a.forEach(r.bind(null, 0)), (a.push = r.bind(null, a.push.bind(a)));
    })(),
    (t.nc = void 0);
})();
(function () {
  if (!/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
  var s = document.createElement("script");
  s.src = "https://vercel.live/_next-live/feedback/feedback.js";
  s.setAttribute("data-explicit-opt-in", "true");
  s.setAttribute("data-cookie-opt-in", "true");
  s.setAttribute("data-deployment-id", "dpl_3QSJUA8Q33Dnjy5DqPasd6WddgoL");
  (document.head || document.documentElement).appendChild(s);
})();
