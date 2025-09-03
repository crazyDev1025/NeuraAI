(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    1538: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ResearchrLogo.925693c0.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    3925: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/AnalysrLogo.89378600.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7800: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/AllProductsLogo.ae1aa786.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    9876: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/EngagerLogo.3c452745.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    12591: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/SyntheticLogo.ac888d3c.png",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUYBzOEaZHZzN2+u9QYCDIRAC4OACcVBy0eCzoeCziHcZ81JlNweJGbfao5I1VrapKJfKgzbCD8AAAACnRSTlPh/////////kNEs6iTngAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADpJREFUeJwtxkkOwCAMBME2zNhAFvL/10aRUqdiINlMqPIKgyqPdlkoz94iv+w/fvqdJXAsV8HElhgvLm4BS5as2SoAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    22822: (e, t, l) => {
      "use strict";
      l.d(t, { E: () => s });
      var i = l(95155),
        r = l(72150);
      let s = (e) => {
        let { children: t, className: l } = e;
        return (0, i.jsx)("div", {
          className: (0, r.cn)(
            "m-auto w-full max-w-[1440px] px-[120px] max-lg:px-20 max-md:px-10 max-sm:px-4",
            l
          ),
          children: t,
        });
      };
    },
    24694: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/Icon1.aafce0de.svg",
        height: 24,
        width: 23,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    25338: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/LinqHubLogo.2c69c1b0.svg",
        height: 36,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    25859: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => n });
      var i = l(95155),
        r = l(66766),
        s = l(52964);
      let a = (e) => {
          let t = e.slice(0, 6),
            l = e.slice(-6);
          return "".concat(t, "...").concat(l);
        },
        n = (e) => {
          let { icon: t, lnqToken: l } = e;
          return (0, i.jsxs)("div", {
            className:
              "relative flex h-10 w-fit max-w-[256px] items-center gap-1 rounded-full bg-dark-gray p-2 text-md",
            children: [
              t &&
                (0, i.jsx)(r.default, {
                  src: t,
                  alt: "logo",
                  width: 24,
                  height: 24,
                }),
              (0, i.jsx)("span", {
                className: "text-md-bold",
                children: "NEURA",
              }),
              (0, i.jsx)("div", { className: "h-[17px] w-[1px] bg-[#434345]" }),
              (0, i.jsx)("span", { className: "text-gray", children: a(l) }),
              (0, i.jsx)(s.A, {
                onClick: () => window.navigator.clipboard.writeText(l),
                className: "cursor-pointer active:opacity-75",
              }),
            ],
          });
        };
    },
    31674: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/ComposrLogo.234184ea.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    34113: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => n });
      var i = l(95155),
        r = l(12115),
        s = l(76604),
        a = l(74600);
      let n = (e) => {
        let {
            children: t,
            motionProps: l,
            margin: n,
            className: o,
            rootClassName: d,
          } = e,
          c = (0, r.useRef)(null),
          u = (0, s.W)(c, {
            margin: null != n ? n : "-200px 100px -40% 0px",
            once: !0,
          });
        return (0, i.jsx)(a.P.div, {
          initial: { y: -30, opacity: 0 },
          transition: { duration: 0.6, ease: "easeInOut" },
          className: d,
          ...l,
          animate: u
            ? (null == l ? void 0 : l.animate)
              ? l.animate
              : { y: 0, opacity: 1 }
            : {},
          children: (0, i.jsx)("div", { className: o, ref: c, children: t }),
        });
      };
    },
    35786: () => {},
    40091: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/LinqHubLogo.33ff2d70.png",
        height: 48,
        width: 47,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVMaXEAHGeGl7xxf6kCUIsIFWQ6EmwREmkxGG8HSIdvPY6dkLgbD2MAUI0ASYoCR4YAT4yuV66BMZSRPZoTCV0FL3eqUaoYQH7DwNUyap5bLYOzq8mUo8HPz98mEWWUZKqMOphUK4AOJnHp6PAEU5JHhbiUerOHO5uwdsF7baEDlp+QAAAAInRSTlMAsv7+T7GX/v4n7/6Sv63T3SaUuzT+Ufr7/l/7/fzJ/tv+7hP4XgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEZJREFUeJwFwQUCgCAAALFTQBC7u/v/H3QDervWQDmbbXmKDKVNENg3x9mn4xtuD8d1xdEaj/hqRqF1iB+dXbUrH5BpIuEHmXAD9OZpEksAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    43208: (e, t, l) => {
      "use strict";
      l.d(t, { w: () => i.default });
      var i = l(34113);
    },
    44993: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/x.png",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    49911: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/MarketrLogo.a7555919.svg",
        height: 80,
        width: 81,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    52349: (e, t, l) => {
      "use strict";
      l.d(t, { $: () => s });
      var i = l(95155),
        r = l(72150);
      let s = (e) => {
        let {
          children: t,
          rounded: l = !1,
          borderGradient: s,
          rootClassName: a,
          className: n,
          variant: o,
          icon: d,
          onClick: c,
          disabled: u,
        } = e;
        return (0, i.jsx)("button", {
          onClick: c,
          className: (0, r.cn)(
            "overflow-hidden border-[1px] border-solid border-transparent text-white",
            l ? "rounded-[100px]" : "rounded-[10px]",
            { "border !border-white": "outlined" === o },
            { ["".concat(s, " border-none p-[1px]")]: s },
            { "bg-transparent": "secondary" === o },
            { "pointer-events-none cursor-not-allowed opacity-20": u },
            a
          ),
          children: (0, i.jsxs)("div", {
            className: (0, r.cn)(
              "flex h-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2",
              l ? "rounded-[98px]" : "rounded-[8px]",
              { "bg-black hover:bg-light-black": s },
              n
            ),
            children: [t, d],
          }),
        });
      };
    },
    58212: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/DesignerLogo.5a13dd78.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58862: (e, t, l) => {
      "use strict";
      l.d(t, { default: () => j });
      var i = l(95155),
        r = l(20817),
        s = l(66766),
        a = l(6874),
        n = l.n(a),
        o = l(6567),
        d = l(43208),
        c = l(52349),
        u = l(12115),
        h = l(95777),
        m = l(72150),
        x = l(92080);
      let p = [
          {
            img: x.g2,
            title: "Marketr",
            subtitle: "Automate Your Marketing",
            link: "https://marketr.linqai.app",
          },
          {
            img: x.HL,
            title: "Composr",
            subtitle: "Create Captivating Content",
            link: "https://hub.linqai.com/composr",
          },
          {
            img: x.zL,
            title: "Researchr",
            subtitle: "AI Powered Research",
            link: "https://hub.linqai.com/researchr",
          },
          {
            img: x.bI,
            title: "Creatr",
            subtitle: "AI Powered Design",
            link: "https://hub.linqai.com/creatr",
          },
          {
            img: x.vV,
            title: "LinqHub",
            subtitle: "Web App for $NEURA Holders",
            link: "https://hub.linqai.com",
          },
          {
            img: x.n5,
            title: "Synthetiq",
            subtitle: "Social Media Simulation",
            link: "https://linqai.com/synthetiq",
          },
          {
            img: x.XI,
            title: "All Products",
            subtitle: "Vote on Upcoming Products",
            link: "https://hub.linqai.com/all-apps",
          },
        ],
        g = (e) => {
          let { img: t, subtitle: l, title: r, link: a, mobile: o } = e,
            d = o ? 48 : 32;
          return (0, i.jsx)("div", {
            className: (0, m.cn)(
              "h-[70px] w-full cursor-pointer rounded-[6px] bg-transparent py-[11px]",
              { "max-w-[220px] pl-[13px] hover:bg-[#252733]": !o }
            ),
            children: (0, i.jsx)(n(), {
              href: a,
              rel: "noopener noreferrer",
              target: "_blank",
              children: (0, i.jsxs)("div", {
                className: "flex h-full items-center gap-4",
                children: [
                  (0, i.jsx)(s.default, {
                    src: t,
                    alt: "product image",
                    width: d,
                    height: d,
                  }),
                  (0, i.jsxs)("div", {
                    className: "",
                    children: [
                      (0, i.jsx)("p", {
                        className: (0, m.cn)(o ? "text-lg" : "text-md-bold"),
                        children: r,
                      }),
                      (0, i.jsx)("p", {
                        className: (0, m.cn)(
                          "text-gray",
                          o ? "text-md" : "text-sm"
                        ),
                        children: l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        b = "products",
        f = [
        ],
        v = () => {
          let e = (0, u.useRef)(null),
            t = (0, u.useRef)(null),
            [l, s] = (0, u.useState)(!1);
          (0, h.W3)({
            refs: [e, t],
            onClickAway: () => {
              s(!1);
            },
          });
          let a = (e) => {
              e === b && s(!0);
            },
            o = () => {
              s(!1);
            };
          return (0, i.jsxs)("div", {
            className: "relative",
            onMouseLeave: o,
            children: [
              (0, i.jsx)("div", {
                ref: e,
                className: (0, m.cn)(
                  "absolute left-0 top-0 z-[-1] h-fit w-full transition-all duration-500 ease-in-out",
                  l ? "opacity-100" : "opacity-0"
                ),
                onMouseLeave: o,
                children: (0, i.jsx)("div", {
                  className:
                    "w-full rounded-[20px] bg-lightblue-purple-grad-lr p-[1px]",
                  children: (0, i.jsx)("div", {
                    className: (0, m.cn)(
                      "w-full overflow-hidden rounded-[19px] bg-eerie-black transition-all duration-500 ease-in-out",
                      l ? "h-[292px]" : "h-[50px]"
                    ),
                    children: (0, i.jsx)("div", {
                      className: "flex flex-wrap gap-x-5 gap-y-2 p-4 pt-[50px]",
                      children: p.map((e) =>
                        (0, i.jsx)(
                          g,
                          {
                            img: e.img,
                            subtitle: e.subtitle,
                            title: e.title,
                            link: e.link,
                          },
                          e.title
                        )
                      ),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        A = () => {
          let [e, t] = (0, u.useState)(!1),
            l = () => t(!e),
            [a, d] = (0, u.useState)(!1),
            h = () => {
              d((e) => !e);
            };
          (0, u.useEffect)(() => {
            e
              ? ((document.body.style.overflow = "hidden"),
                (document.body.style.height = "100vh"))
              : (document.body.style.overflow = "auto");
          }, [e]);
          let x = function (e, l) {
            let i =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "_blank";
            if (l) return window.open(l, i);
            t(!1), r.XG.scrollTo(e, { smooth: !0, offset: -50 });
          };
          return (0, i.jsxs)("div", {
            className: "z-10 flex lg:hidden",
            children: [
              (0, i.jsx)("button", {
                onClick: l,
                children: (0, i.jsx)(o.ZB, { className: "h-[24px] w-[24px]" }),
              }),
              (0, i.jsx)("div", {
                className: "relative",
                children: (0, i.jsxs)("div", {
                  className: (0, m.cn)(
                    "fixed right-0 top-0 flex h-screen w-full transform flex-col items-start bg-[#000000] bg-opacity-70 p-5 backdrop-blur-md transition-transform duration-300 ease-in-out",
                    { "translate-x-0": e, "translate-x-full": !e }
                  ),
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "no-scrollbar mb-10 h-full w-full overflow-auto",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "flex w-full items-center justify-between gap-[20px]",
                          children: [
                            (0, i.jsx)(s.default, {
                              src: o.wm,
                              alt: "logo",
                              width: 40,
                              height: 40,
                              className: "md-plus:h-[46px] md-plus:w-[46px]",
                              onClick: () => x("home"),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("button", {
                                className: "text-2xl text-white",
                                onClick: l,
                                children: (0, i.jsx)(o.US, {}),
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: (0, m.cn)(
                            "relative mt-[56px] flex w-full flex-col gap-6 text-xl text-white"
                          ),
                          children: f.map((e, t) => {
                            let {
                              text: l,
                              id: r,
                              goTo: s,
                              link: n,
                              target: d,
                            } = e;
                            return (0, i.jsxs)(
                              "div",
                              {
                                className: "flex-col",
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: "flex flex-row items-center",
                                    children: [
                                      (0, i.jsx)(
                                        "button",
                                        {
                                          onClick: () => x(s, n, d),
                                          className:
                                            "menu-item relative mr-[30px] text-left",
                                          children: l,
                                        },
                                        r
                                      ),
                                      "products" === r &&
                                        (0, i.jsx)("div", {
                                          onClick: h,
                                          className: (0, m.cn)(
                                            "cursor-pointer transition-all duration-150 ease-in-out",
                                            { "rotate-90": a }
                                          ),
                                          children: (0, i.jsx)(o.mZ, {}),
                                        }),
                                    ],
                                  }),
                                  "products" === r &&
                                    a &&
                                    (0, i.jsx)("div", {
                                      className:
                                        "mt-4 flex w-full flex-col gap-4",
                                      children: p.map((e) =>
                                        (0, i.jsx)(
                                          g,
                                          {
                                            img: e.img,
                                            link: e.link,
                                            subtitle: e.subtitle,
                                            title: e.title,
                                            mobile: !0,
                                          },
                                          "mobile-menu-item-".concat(e.title)
                                        )
                                      ),
                                    }),
                                  t !== f.length - 1 &&
                                    (0, i.jsx)("div", {
                                      className:
                                        "mt-6 h-[1px] w-full bg-white opacity-20",
                                    }),
                                ],
                              },
                              "nav-item-".concat(r)
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "mb-20 mt-auto flex w-full justify-center",
                      children: (0, i.jsx)(n(), {
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "w-full",
                        children: (0, i.jsx)(c.$, {
                          rounded: !0,
                          borderGradient: "bg-lightblue-purple-grad-tl-br",
                          className: "h-[40px] md-plus:h-[46px]",
                          rootClassName: "ml-auto w-full",
                          children: "Buy Now",
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "absolute bottom-0 left-0 z-[-1] w-full",
                      children: (0, i.jsxs)("svg", {
                        width: "100%",
                        height: "429",
                        viewBox: "0 0 100% 429",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          (0, i.jsx)("rect", {
                            opacity: "0.8",
                            width: "100%",
                            height: "429",
                            fill: "url(#paint0_radial_1686_2356)",
                            fillOpacity: "0.7",
                          }),
                          (0, i.jsx)("defs", {
                            children: (0, i.jsxs)("radialGradient", {
                              id: "paint0_radial_1686_2356",
                              cx: "0",
                              cy: "0",
                              r: "1",
                              gradientUnits: "userSpaceOnUse",
                              gradientTransform:
                                "translate(211.957 456.601) rotate(-90) scale(268.914 380.947)",
                              children: [
                                (0, i.jsx)("stop", { stopColor: "#A53BD0" }),
                                (0, i.jsx)("stop", {
                                  offset: "0.5",
                                  stopColor: "#37289C",
                                }),
                                (0, i.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "#080809",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
      var w = l(22822);
      let j = () =>
        (0, i.jsx)("header", {
          className: "fixed left-0 top-0 z-50 h-[96px] w-full",
          style: {
            background:
              "linear-gradient(0deg, rgb(0 0 0 / 7%) 10%, #000000 100%)",
          },
          children: (0, i.jsx)(d.w, {
            margin: "0px 0px 0px 0px",
            children: (0, i.jsxs)(w.E, {
              className: "flex items-center justify-between gap-4 pt-6",
              children: [
                (0, i.jsx)("div", {
                  className: "w-[148px]",
                  children: (0, i.jsx)(n(), {
                    href: "/",
                    children: (0, i.jsx)(s.default, {
                      src: o.wm,
                      alt: "logo",
                      width: 40,
                      height: 40,
                      unoptimized: !0,
                      className:
                        "min-w-[46px] md-plus:h-[46px] md-plus:w-[46px]",
                      onClick: () => r.XG.scrollTo("home", { smooth: !0 }),
                    }),
                  }),
                }),
                (0, i.jsx)(v, {}),
                (0, i.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    (0, i.jsx)(n(), {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, i.jsx)(c.$, {
                        rounded: !0,
                        borderGradient: "bg-lightblue-purple-grad-tl-br",
                        rootClassName: "max-md-plus:h-[40px] h-[46px]",
                        children: "Buy Now",
                      }),
                    }),
                    (0, i.jsx)(A, {}),
                  ],
                }),
              ],
            }),
          }),
        });
    },
    67048: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/CreatrLogo.d5ffeeb0.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    67455: (e, t, l) => {
      Promise.resolve().then(l.t.bind(l, 6874, 23)),
        Promise.resolve().then(l.t.bind(l, 33063, 23)),
        Promise.resolve().then(l.bind(l, 94879)),
        Promise.resolve().then(l.bind(l, 29277)),
        Promise.resolve().then(l.bind(l, 11588)),
        Promise.resolve().then(l.bind(l, 95474)),
        Promise.resolve().then(l.bind(l, 97642)),
        Promise.resolve().then(l.bind(l, 78794)),
        Promise.resolve().then(l.bind(l, 85090)),
        Promise.resolve().then(l.bind(l, 15119)),
        Promise.resolve().then(l.bind(l, 44993)),
        Promise.resolve().then(l.bind(l, 24694)),
        Promise.resolve().then(l.bind(l, 92581)),
        Promise.resolve().then(l.bind(l, 40091)),
        Promise.resolve().then(l.bind(l, 90658)),
        Promise.resolve().then(l.bind(l, 35880)),
        Promise.resolve().then(l.bind(l, 72218)),
        Promise.resolve().then(l.bind(l, 7800)),
        Promise.resolve().then(l.bind(l, 3925)),
        Promise.resolve().then(l.bind(l, 31674)),
        Promise.resolve().then(l.bind(l, 67048)),
        Promise.resolve().then(l.bind(l, 58212)),
        Promise.resolve().then(l.bind(l, 9876)),
        Promise.resolve().then(l.bind(l, 25338)),
        Promise.resolve().then(l.bind(l, 49911)),
        Promise.resolve().then(l.bind(l, 1538)),
        Promise.resolve().then(l.bind(l, 12591)),
        Promise.resolve().then(l.bind(l, 58862)),
        Promise.resolve().then(l.bind(l, 25859)),
        Promise.resolve().then(l.t.bind(l, 35786, 23));
    },
    90658: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/TelegramIcon.dd7e4649.svg",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    92080: (e, t, l) => {
      "use strict";
      l.d(t, {
        HL: () => s.default,
        Kw: () => r.default,
        XI: () => i.default,
        bI: () => a.default,
        fk: () => o.default,
        fs: () => n.default,
        g2: () => c.default,
        n5: () => h.default,
        vV: () => d.default,
        zL: () => u.default,
      });
      var i = l(7800),
        r = l(3925),
        s = l(31674),
        a = l(67048),
        n = l(58212),
        o = l(9876),
        d = l(25338),
        c = l(49911),
        u = l(1538),
        h = l(12591);
    },
    92581: (e, t, l) => {
      "use strict";
      l.r(t), l.d(t, { default: () => i });
      let i = {
        src: "/_next/static/media/Icon2.27f0d84d.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    95777: (e, t, l) => {
      "use strict";
      l.d(t, { dv: () => s, W3: () => a, Mj: () => n, iA: () => o });
      var i = l(12115);
      let r = {
          sm: 425,
          md: 768,
          "md-plus": 875,
          lg: 1024,
          "lg-plus": 1200,
          xl: 1280,
          "2xl": 1536,
        },
        s = () => {
          let [e, t] = (0, i.useState)(() =>
            Object.keys(r).reduce((e, t) => ((e[t] = !1), e), {})
          );
          return (
            (0, i.useEffect)(() => {
              let e = () => {
                let e = window.innerWidth;
                t(Object.keys(r).reduce((t, l) => ((t[l] = e >= r[l]), t), {}));
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            e
          );
        },
        a = (e) => {
          let { refs: t, onClickAway: l } = e;
          (0, i.useEffect)(() => {
            let e = (e) => {
              for (let l = 0; l < t.length; l++) {
                let i = t[l];
                if (i.current && i.current.contains(e.target)) return;
              }
              l();
            };
            return (
              document.addEventListener("click", e),
              () => {
                document.removeEventListener("click", e);
              }
            );
          }, [t, l]);
        };
      function n(e, t) {
        let l = localStorage.getItem(e),
          [r, s] = (0, i.useState)(l ? JSON.parse(l) : t);
        return (
          (0, i.useEffect)(() => {}, [t, e]),
          [
            r,
            (t) => {
              try {
                s(t),
                  localStorage.setItem(e, JSON.stringify(t)),
                  window.dispatchEvent(new StorageEvent("storage", { key: e }));
              } catch (e) {
                console.error(e);
              }
            },
          ]
        );
      }
      let o = () => {
        let [e, t] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            t(
              (() => {
                try {
                  let e = document.createElement("canvas");
                  return !!(
                    e.getContext("webgl") || e.getContext("experimental-webgl")
                  );
                } catch (e) {
                  return console.error(e), !1;
                }
              })()
            );
          }, []),
          e
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [4523, 7820, 4609, 5992, 7097, 6567, 8441, 1684, 7358], () =>
      t(67455)
    ),
      (_N_E = e.O());
  },
]);
