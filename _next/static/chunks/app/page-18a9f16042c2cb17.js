(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    777: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => n });
      var r = i(95155),
        A = i(12115),
        s = i(43208),
        l = i(1254),
        a = i(72150);
      let n = () => {
        let [e, t] = (0, A.useState)(0);
        return (
          (0, A.useEffect)(() => {
            let e = () => {
              let e = window.innerWidth < 768;
              t(0.5 * Math.min(window.scrollY / 2, e ? 80 : 140));
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [e]),
          (0, r.jsx)(s.w, {
            children: (0, r.jsxs)("div", {
              style: { transform: "translateY(".concat(e, "px)") },
              className: (0, a.cn)(
                "mx-auto mt-[180px] flex max-w-[600px] flex-col items-center justify-center gap-6 text-center",
                "max-md-plus:mt-[142px] max-md:items-start"
              ),
              children: [
                (0, r.jsxs)("h1", {
                  className:
                    "max-w-[400px] text-center text-3xl max-md-plus:text-2xl max-md:text-left",
                  children: [
                    "A",
                    " ",
                    (0, r.jsx)(l.u, {
                      gradient: "bg-lightblue-purple-grad-lr",
                      className: "whitespace-nowrap",
                      children: "New Era",
                    }),
                    " ",
                    "of Digital Work is",
                    " ",
                    (0, r.jsx)(l.u, {
                      gradient: "bg-lightblue-purple-grad-lr",
                      className: "whitespace-nowrap",
                      children: "AI-First",
                    }),
                  ],
                }),
                (0, r.jsx)("span", {
                  className:
                    "max-w-[480px] text-center text-md text-gray max-md:text-left",
                  children:
                    "NeuraAI bridges today with tomorrow, linking human potential and AI innovation for a smarter, more productive future.",
                }),
              ],
            }),
          })
        );
      };
    },
    1254: (e, t, i) => {
      "use strict";
      i.d(t, { u: () => s });
      var r = i(95155),
        A = i(72150);
      let s = (e) => {
        let { className: t, gradient: i, children: s } = e;
        return (0, r.jsx)("span", {
          className: (0, A.cn)(i, "bg-clip-text text-transparent", t),
          children: s,
        });
      };
    },
    1538: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/ResearchrLogo.925693c0.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    2793: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-6.810a6d3e.png",
        height: 200,
        width: 200,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEUrJzDdl6H/vcwhHyrysL8QFB38rLv6qrocGiP/t8b2pLVNNEDsmqqnamzRkZxHKB+3iIVDMDuscX/BkZJ1SlO3gn+hY1lhQEus0fp/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nAXBBwLAIAgAsVNRwN39/582oaqLuFbU5driSolzPyEWNIbxBld0fmvdXTmTYbl1DoNEHpgB5PYDTuYCCivYvAkAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    2898: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => a });
      var r = i(95155),
        A = i(6567),
        s = i(25859);
      let l = {
          title: "Tokenomics",
          text: "ERC-20 token on the Ethereum blockchain, designed to power our ecosystem with 1 billion tokens, ensuring abundant liquidity and exciting opportunities for all participants in the ecosystem.",
          lnqToken: "0xcomingsoon",
        },
        a = () =>
          (0, r.jsxs)("div", {
            className: "flex max-w-[500px] flex-col items-start gap-8",
            children: [
              (0, r.jsx)("h2", { className: "text-2xl", children: l.title }),
              (0, r.jsx)("span", {
                className: "text-md text-gray",
                children: l.text,
              }),
              (0, r.jsxs)("button", {
                onClick: () => {
                  console.log("Button clicked! Opening litepaper..."),
                    alert("Button was clicked! Opening PDF..."),
                    window.open("/tokenomics-litepaper", "_blank");
                },
                className:
                  "m-0 flex cursor-pointer flex-row items-center gap-1 border-0 bg-transparent p-0 text-left transition-opacity hover:opacity-80",
                style: {
                  all: "unset",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                },
                children: [
                  (0, r.jsx)("span", {
                    className: "text-purple",
                    style: { color: "#AD7DFC" },
                    children: "Read Token Economy Litepaper",
                  }),
                  (0, r.jsx)(A.cL, { direction: "right", color: "#AD7DFC" }),
                ],
              }),
              (0, r.jsx)(s.default, { icon: A.wm, lnqToken: l.lnqToken }),
            ],
          });
    },
    3925: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/AnalysrLogo.89378600.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    7795: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coin_2.267ce9ab.png",
        height: 127,
        width: 133,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEUwAF8nCT0rCDw1C0IyAzWnWsghBDM0IlM6CUBGD1FFR8IhD0EkEESnV8AnG0vHbswvP7coBz1AC0M3H3bXcOaDNppGEVE9Ek0+GFg2FkhSJXd3NYGTTqShRFWyAAAAG3RSTlMBVyy9+xIb/fj9coCoyPGrfGuXuTQh5f////7t/phYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBwKAIAwAsUNGAfdsQf//ThOAq9YbiOvX7RmI8xtyKZ6tBzUrnjOrNrGdQ0VEJhhyk2UESM4l4AdtCwK7Hq6qIwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    7800: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/AllProductsLogo.ae1aa786.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    9256: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => c });
      var r = i(95155),
        A = i(12115),
        s = i(66766),
        l = i(57680),
        a = i(72150);
      let n = (e) => {
          let { className: t } = e;
          return (0, r.jsxs)("svg", {
            viewBox: "0 0 776 776",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: [
              (0, r.jsx)("g", {
                filter: "url(#filter0_f_1051_1797)",
                children: (0, r.jsx)("circle", {
                  cx: "388",
                  cy: "388",
                  r: "188",
                  fill: "url(#paint0_linear_1051_1797)",
                  fillOpacity: "0.2",
                }),
              }),
              (0, r.jsxs)("defs", {
                children: [
                  (0, r.jsxs)("filter", {
                    id: "filter0_f_1051_1797",
                    x: "0",
                    y: "0",
                    width: "776",
                    height: "776",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                      (0, r.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix",
                      }),
                      (0, r.jsx)("feBlend", {
                        mode: "normal",
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape",
                      }),
                      (0, r.jsx)("feGaussianBlur", {
                        stdDeviation: "100",
                        result: "effect1_foregroundBlur_1051_1797",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_1051_1797",
                    x1: "388",
                    y1: "245.5",
                    x2: "388",
                    y2: "652",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#4AD2E6" }),
                      (0, r.jsx)("stop", { offset: "1", stopColor: "#FB55FA" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        c = () => {
          let e = (0, A.useRef)(null),
            [t, i] = (0, A.useState)(0);
          (0, A.useEffect)(() => {
            let t = () => {
              if (!e.current) return i(0);
              i(e.current.getBoundingClientRect().top);
            };
            return (
              window.addEventListener("scroll", t),
              () => {
                window.removeEventListener("scroll", t);
              }
            );
          }, []);
          let c = Math.min(t / 2, 0),
            o = Math.max(-((t / 2) * 1), -20);
          return (0, r.jsxs)("div", {
            ref: e,
            className:
              "pointer-events-none absolute top-0 h-[800px] w-full overflow-hidden",
            children: [
              (0, r.jsx)("div", {
                className: "relative h-full w-full",
                children: (0, r.jsx)("div", {
                  className: (0, a.cn)(
                    "absolute right-[30vw] top-[220px] h-[376px] w-[376px]",
                    "rounded-full opacity-80",
                    "max-md-plus:right-[40px] max-md:top-[220px]"
                  ),
                  children: (0, r.jsx)(n, { className: "h-[576px] w-[576px]" }),
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute bottom-[180px] right-[558px] max-md-plus:left-[-86px] max-md-plus:right-auto",
                style: { transform: "translateY(".concat(c, "px)") },
                children: (0, r.jsx)(s.default, {
                  src: l.OW,
                  alt: "coin 1",
                  unoptimized: !0,
                  quality: 100,
                }),
              }),
              (0, r.jsx)("div", {
                className:
                  "absolute bottom-[360px] right-[308px] max-md-plus:right-[-50px]",
                style: { transform: "translateY(".concat(o, "px)") },
                children: (0, r.jsx)(s.default, {
                  src: l.VE,
                  alt: "coin 2",
                  unoptimized: !0,
                  quality: 100,
                }),
              }),
            ],
          });
        };
    },
    9876: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/EngagerLogo.3c452745.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    9897: (e, t, i) => {
      "use strict";
      i.d(t, { Y: () => s });
      var r = i(95155),
        A = i(72150);
      let s = () =>
        (0, r.jsxs)("div", {
          className: (0, A.cn)(
            "flex w-full flex-col items-center gap-6 max-lg:items-start max-lg:gap-4",
            "absolute left-1/2 -translate-x-1/2 max-lg:relative max-lg:top-0"
          ),
          children: [
            (0, r.jsx)("h2", {
              className: "max-w-[672px] text-center text-2xl max-lg:text-left",
              children:
                "A powerful team synergising elite talent and expert insight.",
            }),
            (0, r.jsx)("span", {
              className:
                "max-w-[524px] text-center text-md text-gray max-lg:text-left",
              children:
                "Experienced professionals in AI, blockchain, and business development, supported by an advisory board with expertise in legal, financial, and technological aspects.",
            }),
          ],
        });
    },
    9994: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/aboubakr-benhass.8879880d.jpeg",
        height: 800,
        width: 800,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACMB//EABwQAAMAAQUAAAAAAAAAAAAAAAECAwAREiJBUf/aAAgBAQABPwCVocJuGK6uNw68z//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    10287: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/tomass-sola.652ac88b.jpeg",
        height: 764,
        width: 764,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACbB//EAB4QAAAEBwAAAAAAAAAAAAAAAAABAhMDBAYSFCFT/9oACAEBAAE/ALoKqbaYRlFN66D/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    12591: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/SyntheticLogo.ac888d3c.png",
        height: 72,
        width: 72,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEUYBzOEaZHZzN2+u9QYCDIRAC4OACcVBy0eCzoeCziHcZ81JlNweJGbfao5I1VrapKJfKgzbCD8AAAACnRSTlPh/////////kNEs6iTngAAAAlwSFlzAAAQnAAAEJwBJs06NAAAADpJREFUeJwtxkkOwCAMBME2zNhAFvL/10aRUqdiINlMqPIKgyqPdlkoz94iv+w/fvqdJXAsV8HElhgvLm4BS5as2SoAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    13855: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => o });
      var r = i(95155),
        A = i(92700),
        s = i(66766),
        l = i(43208),
        a = i(72150),
        n = i(9897),
        c = i(63035);
      let o = (e) => {
        let { teamMembers: t } = e;
        return (0, r.jsx)("div", {
          className: "flex w-full justify-center",
          children: (0, r.jsxs)("div", {
            className: "relative h-[628px] w-[920px] max-md-plus:hidden",
            children: [
              (0, r.jsx)(l.w, { children: (0, r.jsx)(n.Y, {}) }),
              (0, r.jsx)("div", {
                className: "absolute bottom-0 w-full",
                children: (0, r.jsxs)("svg", {
                  width: "100%",
                  height: "840",
                  viewBox: "0 0 920 840",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                  className: "w-full",
                  children: [
                    (0, r.jsx)("circle", {
                      cx: "455.5",
                      cy: "419.5",
                      r: "197",
                      stroke: "url(#paint0_linear_0_1)",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "455.5",
                      cy: "419.5",
                      r: "302",
                      stroke: "url(#paint1_linear_0_1)",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "456",
                      cy: "420",
                      r: "419.5",
                      stroke: "url(#paint2_linear_0_1)",
                    }),
                    t.map((e, t) => {
                      let {
                        img: i,
                        position: { left: l, bottom: n },
                        name: o,
                        role: d,
                        socials: g,
                      } = e;
                      return (0, r.jsx)(
                        "foreignObject",
                        {
                          x: l,
                          y: n,
                          width: "76",
                          height: "76",
                          children: (0, r.jsx)(
                            A.I,
                            {
                              showArrow: !0,
                              placement: "bottom",
                              size: "lg",
                              content: (0, r.jsx)(c.Z, {
                                name: o,
                                role: d,
                                socials: g,
                              }),
                              children: (0, r.jsx)("div", {
                                className: (0, a.cn)(
                                  "fixed overflow-hidden rounded-full border-[2px] border-solid border-[#7657A9]"
                                ),
                                children: (0, r.jsx)(s.default, {
                                  src: i.src,
                                  alt: "img",
                                  width: 72,
                                  height: 72,
                                  className:
                                    "max-h-[72px] min-h-[72px] min-w-[72px] max-w-[72px] object-cover object-top grayscale",
                                }),
                              }),
                            },
                            i.src
                          ),
                        },
                        t
                      );
                    }),
                    (0, r.jsxs)("defs", {
                      children: [
                        (0, r.jsx)("pattern", {
                          id: "pattern0_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image0_0_1",
                            transform: "scale(0.0013089)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern1_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image1_0_1",
                            transform: "scale(0.0015625)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern2_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image2_0_1",
                            transform: "scale(0.00125)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern3_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image3_0_1",
                            transform:
                              "translate(-0.434917 -0.125) scale(0.00111883)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern4_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image4_0_1",
                            transform:
                              "translate(-0.0163043) scale(0.00108696)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern5_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image5_0_1",
                            transform:
                              "translate(0 -0.00779501) scale(0.00242718)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern6_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image6_0_1",
                            transform:
                              "translate(-0.261426 -0.0622443) scale(0.00364207)",
                          }),
                        }),
                        (0, r.jsx)("pattern", {
                          id: "pattern7_0_1",
                          patternContentUnits: "objectBoundingBox",
                          width: "1",
                          height: "1",
                          children: (0, r.jsx)("use", {
                            xlinkHref: "#image7_0_1",
                            transform: "scale(0.00125)",
                          }),
                        }),
                        (0, r.jsxs)("linearGradient", {
                          id: "paint0_linear_0_1",
                          x1: "455.5",
                          y1: "222",
                          x2: "455.5",
                          y2: "617",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, r.jsx)("stop", {
                              stopColor: "#121112",
                              stopOpacity: "0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "1",
                              stopColor: "#AD7DFC",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                          id: "paint1_linear_0_1",
                          x1: "455.5",
                          y1: "117",
                          x2: "455.5",
                          y2: "722",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, r.jsx)("stop", {
                              stopColor: "#121112",
                              stopOpacity: "0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "1",
                              stopColor: "#AD7DFC",
                            }),
                          ],
                        }),
                        (0, r.jsxs)("linearGradient", {
                          id: "paint2_linear_0_1",
                          x1: "456",
                          y1: "0",
                          x2: "456",
                          y2: "840",
                          gradientUnits: "userSpaceOnUse",
                          children: [
                            (0, r.jsx)("stop", {
                              stopColor: "#121112",
                              stopOpacity: "0",
                            }),
                            (0, r.jsx)("stop", {
                              offset: "1",
                              stopColor: "#AD7DFC",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    14171: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-4.00ccd379.png",
        height: 65,
        width: 65,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXGsqXDr6ColoitkoDCr6HJtaainZvErZ/Dr6OopKWZko2FYk23pZewoZepj37Gs6XLuKrPu63DrJt0VUWsf2aUhnq9t7WuoJaZg3SZc10ZlsaRAAAAD3RSTlP21f3+6f3v4/Dt/v790/7eXJF+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBwKAIAwAsVORFlfL1v9/1IRFA6gqYqVPN0N8rbU7iG+tvRkkP/UrBmLX2dwgzKPkMXbumFKKKfxqBQMEp2X+WgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    16975: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => p });
      var r = i(95155),
        A = i(12115),
        s = i(93226),
        l = i(55414),
        a = i(9577),
        n = i(66766),
        c = i(43208),
        o = i(72150),
        d = i(9897),
        g = i(63035);
      let p = (e) => {
        let { teamMembers: t } = e,
          [i, p] = (0, A.useState)(null),
          x = (e) => {
            p(e === i ? null : e);
          };
        return (0, r.jsxs)("div", {
          className:
            "relative flex flex-col max-md-plus:block max-sm:mt-0 md-plus:hidden",
          children: [
            (0, r.jsx)(c.w, { children: (0, r.jsx)(d.Y, {}) }),
            (0, r.jsx)("div", {
              className: "max-lg:mx-[-40px] max-sm:mx-[-16px]",
              children: (0, r.jsxs)("svg", {
                viewBox: "0 0 390 540",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-[520px] w-full",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "195",
                    cy: "247",
                    r: "115.5",
                    stroke: "url(#paint0_linear_519_2251)",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "195",
                    cy: "247",
                    r: "177.5",
                    stroke: "url(#paint1_linear_519_2251)",
                  }),
                  (0, r.jsx)("circle", {
                    cx: "195",
                    cy: "247",
                    r: "246.5",
                    stroke: "url(#paint2_linear_519_2251)",
                  }),
                  t.map((e, t) => {
                    let {
                      img: A,
                      position: { left: c, bottom: d },
                      name: u,
                      role: h,
                      socials: m,
                    } = e;
                    return (0, r.jsx)(
                      "foreignObject",
                      {
                        x: c,
                        y: d,
                        width: "60",
                        height: "60",
                        children: (0, r.jsxs)(
                          s.y,
                          {
                            showArrow: !0,
                            isOpen: i === t,
                            shouldCloseOnBlur: !0,
                            onClose: () => p(null),
                            children: [
                              (0, r.jsx)(l.T, {
                                children: (0, r.jsx)("div", {
                                  className: (0, o.cn)(
                                    "fixed overflow-hidden rounded-full border-[2px] border-solid border-[#7657A9]"
                                  ),
                                  onClick: () => x(t),
                                  children: (0, r.jsx)(n.default, {
                                    src: A.src,
                                    alt: "img",
                                    width: 56,
                                    height: 56,
                                    className:
                                      "max-h-[56px] min-h-[56px] min-w-[56px] max-w-[56px] scale-110 object-cover object-top grayscale",
                                  }),
                                }),
                              }),
                              (0, r.jsx)(a.C, {
                                children: (0, r.jsx)(g.Z, {
                                  name: u,
                                  role: h,
                                  socials: m,
                                }),
                              }),
                            ],
                          },
                          A.src
                        ),
                      },
                      t
                    );
                  }),
                  (0, r.jsxs)("defs", {
                    children: [
                      (0, r.jsxs)("linearGradient", {
                        id: "paint0_linear_519_2251",
                        x1: "195",
                        y1: "131",
                        x2: "195",
                        y2: "363",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, r.jsx)("stop", {
                            stopColor: "#121112",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#AD7DFC",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "paint1_linear_519_2251",
                        x1: "195",
                        y1: "69",
                        x2: "195",
                        y2: "425",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, r.jsx)("stop", {
                            stopColor: "#121112",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#AD7DFC",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "paint2_linear_519_2251",
                        x1: "195",
                        y1: "0",
                        x2: "195",
                        y2: "494",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                          (0, r.jsx)("stop", {
                            stopColor: "#121112",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "1",
                            stopColor: "#AD7DFC",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    18013: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => a });
      var r = i(95155),
        A = i(6567),
        s = i(72150);
      let l =
          "flex h-10 w-10 items-center justify-center overflow-hidden rounded-full opacity-50 bg-arsenic-gray hover:opacity-100 cursor-pointer max-md:hover:opacity-50 max-md:active:opacity-100",
        a = (e) => {
          let { onNextClick: t, onPrevClick: i } = e;
          return (0, r.jsxs)("div", {
            className: "flex w-fit flex-nowrap gap-2",
            children: [
              (0, r.jsx)("div", {
                onClick: i,
                className: l,
                children: (0, r.jsx)(A.cL, {}),
              }),
              (0, r.jsx)("div", {
                onClick: t,
                className: (0, s.cn)(l, "rotate-180"),
                children: (0, r.jsx)(A.cL, {}),
              }),
            ],
          });
        };
    },
    22822: (e, t, i) => {
      "use strict";
      i.d(t, { E: () => s });
      var r = i(95155),
        A = i(72150);
      let s = (e) => {
        let { children: t, className: i } = e;
        return (0, r.jsx)("div", {
          className: (0, A.cn)(
            "m-auto w-full max-w-[1440px] px-[120px] max-lg:px-20 max-md:px-10 max-sm:px-4",
            i
          ),
          children: t,
        });
      };
    },
    23052: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => g });
      var r = i(95155),
        A = i(12115),
        s = i(29771),
        l = i(71813),
        a = i(6874),
        n = i.n(a),
        c = i(52349),
        o = i(1254),
        d = i(95777);
      let g = () => {
        let [e, t] = (0, A.useState)(!1),
          [i, a] = (0, d.Mj)("terms-and-conditions-modal", !1),
          g = () => {
            e && a(!0);
          },
          p = (e) => {
            t(e.target.checked);
          };
        return (0, r.jsx)(s.Y, {
          isOpen: !i,
          hideCloseButton: !0,
          backdrop: "blur",
          className: "!mt-[-5%]",
          children: (0, r.jsx)(l.g, {
            className: "w-full max-w-[600px]",
            children: () =>
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsx)("div", {
                  children: (0, r.jsxs)("div", {
                    className:
                      "relative w-full overflow-hidden rounded-[20px] bg-lightblue-purple-grad-lr p-[1px]",
                    children: [
                      (0, r.jsx)("div", {
                        className: "absolute bottom-0 left-0 w-full opacity-80",
                        children: (0, r.jsxs)("svg", {
                          width: "100%",
                          height: "380",
                          viewBox: "0 0 100% 380",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, r.jsx)("rect", {
                              opacity: "0.8",
                              width: "100%",
                              height: "380",
                              fill: "url(#paint0_radial_1705_568)",
                              fillOpacity: "0.7",
                            }),
                            (0, r.jsx)("defs", {
                              children: (0, r.jsxs)("radialGradient", {
                                id: "paint0_radial_1705_568",
                                cx: "0",
                                cy: "0",
                                r: "1",
                                gradientUnits: "userSpaceOnUse",
                                gradientTransform:
                                  "translate(326.087 404.449) rotate(-90) scale(238.199 586.072)",
                                children: [
                                  (0, r.jsx)("stop", { stopColor: "#A53BD0" }),
                                  (0, r.jsx)("stop", {
                                    offset: "0.5",
                                    stopColor: "#37289C",
                                  }),
                                  (0, r.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#080809",
                                    stopOpacity: "0",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "z-[1] flex h-full w-full justify-center rounded-[19px] bg-black px-5 py-[72px]",
                        children: (0, r.jsxs)("div", {
                          className: "z-10 max-w-[440px]",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "flex w-full flex-col items-center justify-center gap-5 text-center",
                              children: [
                                (0, r.jsxs)("p", {
                                  className: "text-2xl",
                                  children: [
                                    "Welcome to",
                                    " ",
                                    (0, r.jsx)(o.u, {
                                      gradient: "bg-purple-blue-grad-lr",
                                      children: "NeuraAI",
                                    }),
                                    " ",
                                    "\uD83D\uDC4B",
                                  ],
                                }),
                                (0, r.jsx)("p", {
                                  children:
                                    "Before you continue, please review and accept our Terms and Conditions to proceed.",
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-row items-start justify-start gap-4 align-top",
                                  children: [
                                    (0, r.jsxs)("label", {
                                      className:
                                        "relative flex cursor-pointer items-center",
                                      htmlFor: "ripple-off",
                                      children: [
                                        (0, r.jsx)("input", {
                                          type: "checkbox",
                                          className:
                                            "peer h-5 w-5 cursor-pointer appearance-none rounded border border-purple shadow transition-all checked:border-purple checked:bg-black hover:shadow-md",
                                          id: "ripple-off",
                                          onChange: p,
                                        }),
                                        (0, r.jsx)("span", {
                                          className:
                                            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-purple opacity-0 peer-checked:opacity-100",
                                          children: (0, r.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-3.5 w-3.5",
                                            viewBox: "0 0 20 20",
                                            fill: "#AD7DFC",
                                            stroke: "#AD7DFC",
                                            strokeWidth: "1",
                                            children: (0, r.jsx)("path", {
                                              fillRule: "evenodd",
                                              d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                              clipRule: "evenodd",
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("p", {
                                      className: "text-left",
                                      children: [
                                        "I have read and agree to the",
                                        " ",
                                        (0, r.jsx)(n(), {
                                          href: "/terms-and-conditions",
                                          target: "_blank",
                                          className: "underline",
                                          children: "Terms and Conditions",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "flex w-full justify-center",
                              children: (0, r.jsx)(c.$, {
                                borderGradient:
                                  "bg-lightblue-purple-grad-tl-br",
                                rounded: !0,
                                rootClassName: "w-full max-w-[320px] mt-10 ",
                                className: "bg-black",
                                onClick: g,
                                disabled: !e,
                                children: "Continue",
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
          }),
        });
      };
    },
    23679: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => s });
      var r = i(95155),
        A = i(20817);
      let s = (e) => {
        let { name: t } = e;
        return (0, r.jsx)(A.Hg, { name: t });
      };
    },
    24694: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Icon1.aafce0de.svg",
        height: 24,
        width: 23,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    25338: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/LinqHubLogo.2c69c1b0.svg",
        height: 36,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    25859: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => a });
      var r = i(95155),
        A = i(66766),
        s = i(52964);
      let l = (e) => {
          let t = e.slice(0, 6),
            i = e.slice(-6);
          return "".concat(t, "...").concat(i);
        },
        a = (e) => {
          let { icon: t, lnqToken: i } = e;
          return (0, r.jsxs)("div", {
            className:
              "relative flex h-10 w-fit max-w-[256px] items-center gap-1 rounded-full bg-dark-gray p-2 text-md",
            children: [
              t &&
                (0, r.jsx)(A.default, {
                  src: t,
                  alt: "logo",
                  width: 24,
                  height: 24,
                }),
              (0, r.jsx)("span", {
                className: "text-md-bold",
                children: "NEURA",
              }),
              (0, r.jsx)("div", { className: "h-[17px] w-[1px] bg-[#434345]" }),
              (0, r.jsx)("span", { className: "text-gray", children: l(i) }),
              (0, r.jsx)(s.A, {
                onClick: () => window.navigator.clipboard.writeText(i),
                className: "cursor-pointer active:opacity-75",
              }),
            ],
          });
        };
    },
    26125: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/private_hub_bg_2.9bf759e9.png",
        height: 486,
        width: 830,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEUeHigeHikkJC8sKTrE7Ot5AAAAAXRSTlPYyO6CgAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACJJREFUeJwlibENAAAIgyj9/2ejMhGgJolQ1wTrAv135WQABcgAPkL/P04AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    31408: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-7.df1a87d5.png",
        height: 200,
        width: 200,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEUfHRnFPCYXHRo7IBmjLhZlKR4MJD+FKRmVKxpaJRtJJB5JMkgUJDUnIynEMhNxJhXUQA6tQyzaSyF+MEJ0Kyh2QVAaKlsqLVC4OBMHOYWtNBevNjTSSSkUIyqCRjPEUFa4XCkhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nAXBBQLAIAwEsEPb4jD3//9yCU4mqlUMvstKjk5wq/74I88Y6vVpnSyGcn5bmNFKDymSRSss0IGwOxhA4wd2MwLcrTzZeAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    31545: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/ryan-kinney.e41e3c61.jpeg",
        height: 640,
        width: 412,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAUDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACVB//EABwQAAICAgMAAAAAAAAAAAAAAAEDAgUABBNCcf/aAAgBAQABPwC2dHXRXNQoL51GRMe3uf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        blurWidth: 5,
        blurHeight: 8,
      };
    },
    31674: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/ComposrLogo.234184ea.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    32031: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-8.61f418d6.png",
        height: 200,
        width: 200,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEU0UU5BW1wsUFQbKSouRkNmcW/Upnw1WVomREo0VlQmNzjCqo9dZWCZgWK7jGTUH1AhUXjPr4qGioScl4R5gH2jdELYvZ+kdkzKnImVbE1uQyNCVEemZWlfanGcYE63PoJ+VjKLXJrYRm/ohKODmKBWnkBKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nAXBhQGAMBAEsKt9XXCHIvvPSAJnVK+kEDDt2PgOEsxPQ6JgoGhdKMKCxZpmxjU4D+dutQbKnZ/DArJc+f029wNlxgNNMn2yXwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    32350: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-1.b08bd04e.png",
        height: 65,
        width: 65,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEX/zFn/x1V/Ti3iq0f/01b7xVKAlYD+x1n9yFn/yVZOLi/iwHGsdTTvq1cnZFzhwHRnnZuxroJSm5uKb1ozgXz/0Fryt07Fd1dvTh/XjXLRvnWgdi3ZiV6KZkrWj3HJH0nRAAAAGXRSTlP+1f7+7/n25Pvu/un+/u3T7v7x7e3////+z+WdIAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEFJREFUeJwlxlcSgCAMBcCHtAQLKiLFcv9jOhP3a6EsG8PM8FnXCyD4XMNgJVO7T8lcigTU/vTtfVwnxN2l5VjHD2WAAzN601/IAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    34113: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => a });
      var r = i(95155),
        A = i(12115),
        s = i(76604),
        l = i(74600);
      let a = (e) => {
        let {
            children: t,
            motionProps: i,
            margin: a,
            className: n,
            rootClassName: c,
          } = e,
          o = (0, A.useRef)(null),
          d = (0, s.W)(o, {
            margin: null != a ? a : "-200px 100px -40% 0px",
            once: !0,
          });
        return (0, r.jsx)(l.P.div, {
          initial: { y: -30, opacity: 0 },
          transition: { duration: 0.6, ease: "easeInOut" },
          className: c,
          ...i,
          animate: d
            ? (null == i ? void 0 : i.animate)
              ? i.animate
              : { y: 0, opacity: 1 }
            : {},
          children: (0, r.jsx)("div", { className: n, ref: o, children: t }),
        });
      };
    },
    37471: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => p });
      var r = i(95155),
        A = i(12115),
        s = i(66766),
        l = i(6567),
        a = i(43208),
        n = i(1254),
        c = i(72150),
        o = i(48702);
      let d = (e) => {
          let { message: t } = e;
          return (0, r.jsx)("div", {
            className:
              "flex w-full overflow-hidden rounded-[10px] border border-arsenic-gray bg-[#1C1D26] p-4",
            children: (0, r.jsx)("span", { className: "text-md", children: t }),
          });
        },
        g = (e) => {
          let { isMe: t, message: i } = e;
          return (0, r.jsx)("div", {
            className: (0, c.cn)(
              "w-full rounded-[20px] bg-black-white-grad-tl-br p-5",
              {
                "rounded-tl-none bg-black-white-grad-tl-br": !t,
                "rounded-br-none bg-gradient-to-r from-[#8C5ADD] to-[#4B3177]":
                  t,
              }
            ),
            children: (0, r.jsx)("span", { className: "text-md", children: i }),
          });
        },
        p = (e) => {
          let { messages: t, animateLine: i } = e,
            p = (0, A.useRef)(null);
          return (0, r.jsxs)("div", {
            className: "relative",
            children: [
              (0, r.jsxs)("div", {
                className: (0, c.cn)(
                  "bg-gradient-to-t from-[#121112] to-[#1C1D26]",
                  "rounded-[20px] px-[50px] py-[40px] max-md:px-5"
                ),
                children: [
                  (0, r.jsx)("div", {
                    className: "mb-10 w-full text-center",
                    children: (0, r.jsx)(n.u, {
                      gradient: "bg-white-black-grad-tb",
                      className: "text-lg",
                      children: "AI Agents",
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex w-full gap-2",
                    children: [
                      (0, r.jsx)(a.w, {
                        motionProps: {
                          animate: { y: 0, opacity: 1 },
                          initial: { y: 20, opacity: 0 },
                          transition: { duration: 0.2, ease: "easeInOut" },
                        },
                        children: (0, r.jsx)(s.default, {
                          src: l.wm,
                          width: 32,
                          height: 32,
                          alt: "logo",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "flex w-full flex-col gap-4",
                        ref: p,
                        children: t.map((e, t) =>
                          (0, r.jsx)(
                            a.w,
                            {
                              motionProps: {
                                animate: { y: 0, opacity: 1 },
                                initial: { y: 20, opacity: 0 },
                                transition: {
                                  duration: 0.2,
                                  ease: "easeInOut",
                                  delay: 0.7 * t,
                                },
                              },
                              children:
                                "content" === e.type
                                  ? (0, r.jsx)(d, { message: e.message }, e.id)
                                  : (0, r.jsx)(
                                      g,
                                      { message: e.message, isMe: e.isMe },
                                      e.id
                                    ),
                            },
                            e.id
                          )
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              i && (0, r.jsx)(o.A, {}),
            ],
          });
        };
    },
    38718: () => {},
    40091: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/LinqHubLogo.33ff2d70.png",
        height: 48,
        width: 47,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVMaXEAHGeGl7xxf6kCUIsIFWQ6EmwREmkxGG8HSIdvPY6dkLgbD2MAUI0ASYoCR4YAT4yuV66BMZSRPZoTCV0FL3eqUaoYQH7DwNUyap5bLYOzq8mUo8HPz98mEWWUZKqMOphUK4AOJnHp6PAEU5JHhbiUerOHO5uwdsF7baEDlp+QAAAAInRSTlMAsv7+T7GX/v4n7/6Sv63T3SaUuzT+Ufr7/l/7/fzJ/tv+7hP4XgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAEZJREFUeJwFwQUCgCAAALFTQBC7u/v/H3QDervWQDmbbXmKDKVNENg3x9mn4xtuD8d1xdEaj/hqRqF1iB+dXbUrH5BpIuEHmXAD9OZpEksAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    41445: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => h });
      var r = i(95155),
        A = i(12115),
        s = i(20817),
        l = i(76604),
        a = i(74600),
        n = i(98238),
        c = i(43208),
        o = i(72150),
        d = i(18013),
        g = i(66766),
        p = i(57680),
        x = i(95777);
      let u = A.memo(() => {
          let e = (0, x.iA)(),
            t = (0, A.useRef)(null),
            { md: i } = (0, x.dv)();
          return (
            (0, A.useEffect)(() => {
              let i;
              if (!e || !(null == t ? void 0 : t.current)) return;
              let r = t.current,
                A = Math.min(window.devicePixelRatio, 2),
                s = { x: 0, y: 0, tX: 0, tY: 0 },
                l = (function () {
                  var e, t;
                  let A =
                      null === (e = document.getElementById("vertShader")) ||
                      void 0 === e
                        ? void 0
                        : e.innerHTML,
                    s =
                      null === (t = document.getElementById("fragShader")) ||
                      void 0 === t
                        ? void 0
                        : t.innerHTML,
                    l =
                      r.getContext("webgl") ||
                      r.getContext("experimental-webgl");
                  function a(e, t, i) {
                    let r = e.createShader(i);
                    return (e.shaderSource(r, t),
                    e.compileShader(r),
                    e.getShaderParameter(r, e.COMPILE_STATUS))
                      ? r
                      : (console.error(
                          "An error occurred compiling the shaders: " +
                            e.getShaderInfoLog(r)
                        ),
                        e.deleteShader(r),
                        null);
                  }
                  let n = a(l, A, l.VERTEX_SHADER),
                    c = a(l, s, l.FRAGMENT_SHADER),
                    o = (function (e, t, i) {
                      let r = e.createProgram();
                      return (e.attachShader(r, t),
                      e.attachShader(r, i),
                      e.linkProgram(r),
                      e.getProgramParameter(r, e.LINK_STATUS))
                        ? r
                        : (console.error(
                            "Unable to initialize the shader program: " +
                              e.getProgramInfoLog(r)
                          ),
                          null);
                    })(l, n, c);
                  i = (function (e) {
                    let t = [],
                      i = l.getProgramParameter(e, l.ACTIVE_UNIFORMS);
                    for (let r = 0; r < i; r++) {
                      let i = l.getActiveUniform(e, r).name;
                      t[i] = l.getUniformLocation(e, i);
                    }
                    return t;
                  })(o);
                  let d = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
                    g = l.createBuffer();
                  l.bindBuffer(l.ARRAY_BUFFER, g),
                    l.bufferData(l.ARRAY_BUFFER, d, l.STATIC_DRAW),
                    l.useProgram(o);
                  let p = l.getAttribLocation(o, "a_position");
                  return (
                    l.enableVertexAttribArray(p),
                    l.bindBuffer(l.ARRAY_BUFFER, g),
                    l.vertexAttribPointer(p, 2, l.FLOAT, !1, 0, 0),
                    l
                  );
                })();
              function a() {
                (r.width = window.innerWidth * A),
                  (r.height = window.innerHeight * A),
                  l.uniform1f(i.u_ratio, r.width / r.height),
                  l.viewport(0, 0, r.width, r.height);
              }
              (function () {
                function e(e, t) {
                  (s.tX = e), (s.tY = t);
                }
                window.addEventListener("pointermove", (t) => {
                  e(t.clientX, t.clientY);
                }),
                  window.addEventListener("touchmove", (t) => {
                    e(t.targetTouches[0].clientX, t.targetTouches[0].clientY);
                  }),
                  window.addEventListener("click", (t) => {
                    e(t.clientX, t.clientY);
                  });
              })(),
                a(),
                window.addEventListener("resize", a),
                (function e() {
                  let t = performance.now();
                  (s.x += (s.tX - s.x) * 0.5),
                    (s.y += (s.tY - s.y) * 0.5),
                    l.uniform1f(i.u_time, t),
                    l.uniform2f(
                      i.u_pointer_position,
                      s.x / window.innerWidth,
                      1 - s.y / window.innerHeight
                    ),
                    l.uniform1f(
                      i.u_scroll_progress,
                      window.pageYOffset / (2 * window.innerHeight)
                    ),
                    l.drawArrays(l.TRIANGLE_STRIP, 0, 4),
                    requestAnimationFrame(e);
                })();
            }, [e, t]),
            e &&
              (0, r.jsxs)("div", {
                className: "relative w-full",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "absolute top-0 h-[300px] w-full bg-gradient-to-b from-black",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "absolute bottom-0 h-[300px] w-full bg-gradient-to-t from-black",
                  }),
                  i
                    ? (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)("canvas", {
                            ref: t,
                            id: "neuro",
                            style: { width: "100vw", height: "100vh" },
                          }),
                          (0, r.jsx)("script", {
                            type: "x-shader/x-fragment",
                            id: "vertShader",
                            children:
                              "precision mediump float;\n        varying vec2 vUv;\n        attribute vec2 a_position;\n\n        void main() {\n        vUv = .5 * (a_position + 1.);\n        gl_Position = vec4(a_position, 0.0, 1.0);\n        }",
                          }),
                          (0, r.jsx)("script", {
                            type: "x-shader/x-fragment",
                            id: "fragShader",
                            children:
                              "precision mediump float;\n\n        varying vec2 vUv;\n        uniform float u_time;\n        uniform float u_ratio;\n        uniform vec2 u_pointer_position;\n        uniform float u_scroll_progress;\n\n        vec2 rotate(vec2 uv, float th) {\n        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;\n      }\n\n        float neuro_shape(vec2 uv, float t, float p) {\n        vec2 sine_acc = vec2(0.);\n        vec2 res = vec2(0.);\n        float scale = 8.;\n\n        for (int j = 0; j < 15; j++) {\n        uv = rotate(uv, 1.);\n        sine_acc = rotate(sine_acc, 1.);\n        vec2 layer = uv * scale + float(j) + sine_acc - t;\n        sine_acc += sin(layer);\n        res += (.5 + .5 * cos(layer)) / scale;\n        scale *= (1.2 - .07 * p);\n      }\n        return res.x + res.y;\n      }\n\n       void main() {\n        vec2 uv = .5 * vUv;\n        uv.x *= u_ratio;\n\n        vec2 pointer = vUv - u_pointer_position;\n        pointer.x *= u_ratio;\n        float p = clamp(length(pointer), 0., 1.);\n        p = .5 * pow(1. - p, 2.);\n\n        float t = .001 * u_time;\n        vec3 color = vec3(0.);\n\n        float noise = neuro_shape(uv, t, p);\n\n        noise = 1.2 * pow(noise, 3.);\n        noise += pow(noise, 10.);\n        noise = max(.0, noise - .5);\n        noise *= (1. - length(vUv - .5));\n\n        // Define blue and purple colors\n        vec3 blue = vec3(0.0, 0.0, 1.0);\n        vec3 purple = vec3(0.5, 0.0, 1);\n\n        // Mix the colors based on a fixed ratio\n        color = mix(blue, purple, 0.5);\n\n        color = color * noise;\n\n        gl_FragColor = vec4(color, noise);\n      }",
                          }),
                        ],
                      })
                    : (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(g.default, {
                          src: p.E1,
                          alt: "neural-noise-capture-mobile",
                          className: "mt-[10vh] h-screen w-screen object-cover",
                        }),
                      }),
                ],
              })
          );
        }),
        h = (e) => {
          let { titles: t } = e,
            i = (0, A.useRef)(null),
            g = (0, l.W)(i, { margin: "0px 0px -100% 0px" }),
            [p, x] = (0, n.E)(
              {
                loop: !1,
                rubberband: !1,
                vertical: !0,
                slides: { perView: 1, origin: "center" },
                defaultAnimation: { duration: 0 },
                renderMode: "precision",
              },
              []
            );
          return (
            (0, A.useEffect)(() => {
              let e = () => {
                if (!i.current) return;
                let e = Math.round(
                  i.current.getBoundingClientRect().bottom / window.innerHeight
                );
                if (e <= t.length) {
                  var r;
                  let i = Math.min(t.length - e, t.length - 1);
                  null === (r = x.current) || void 0 === r || r.moveToIdx(i);
                }
              };
              return (
                document.addEventListener("scroll", e),
                () => removeEventListener("scroll", e)
              );
            }, [x, i, t.length]),
            (0, r.jsx)("div", {
              className: "relative",
              style: { height: "".concat(100 * t.length, "vh") },
              ref: i,
              children: (0, r.jsxs)("div", {
                className: "sticky top-0 h-screen overflow-hidden",
                children: [
                  (0, r.jsx)("div", {
                    className: (0, o.cn)(
                      "absolute right-0 top-[50%] z-[1050] w-fit -translate-y-1/2 rotate-90 max-md:top-[90%]"
                    ),
                    children: (0, r.jsx)(d.A, {
                      onNextClick: () => {
                        var e;
                        if (!g) {
                          s.XG.scrollTo("noise", { smooth: !0 });
                          return;
                        }
                        window.scrollTo({
                          top: window.scrollY + window.innerHeight,
                          behavior: "smooth",
                        }),
                          null === (e = x.current) || void 0 === e || e.next();
                      },
                      onPrevClick: () => {
                        var e;
                        if (
                          i.current &&
                          (null === (e = i.current) || void 0 === e
                            ? void 0
                            : e.getBoundingClientRect().bottom) <
                            window.innerHeight
                        ) {
                          let e =
                            i.current.getBoundingClientRect().bottom +
                            window.scrollY -
                            window.innerHeight;
                          return window.scrollTo({
                            top: e,
                            behavior: "smooth",
                          });
                        }
                        window.scrollTo({
                          top: window.scrollY - window.innerHeight,
                          behavior: "smooth",
                        });
                      },
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "absolute top-0",
                    children: (0, r.jsx)(c.w, {
                      motionProps: {
                        initial: { top: -30, filter: "blur(20px)" },
                        animate: { top: 0, filter: "blur(0px)" },
                        transition: { duration: 2 },
                      },
                      children: (0, r.jsx)(u, {}),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    ref: p,
                    className: "keen-slider pointer-events-none h-screen",
                    children: t.map((e) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "keen-slider__slide flex h-screen flex-col items-center justify-center",
                          id: e.id,
                          children: (0, r.jsx)(a.P.div, {
                            className: (0, o.cn)(
                              "items-cs text-center align-middle"
                            ),
                            initial: {
                              opacity: 0,
                              y: -100,
                              filter: "blur(20px)",
                            },
                            whileInView: {
                              opacity: 1,
                              y: 0,
                              filter: "blur(0px)",
                            },
                            transition: { duration: 0.5 },
                            children: (0, r.jsxs)("div", {
                              className:
                                "flex w-full max-w-[540px] flex-col gap-4 px-4",
                              children: [
                                !!e.heading && e.heading,
                                (0, r.jsx)("h1", {
                                  className: "text-2xl",
                                  children: e.title,
                                }),
                                !!e.text &&
                                  (0, r.jsx)("p", {
                                    className: "p-0 text-gray",
                                    children: e.text,
                                  }),
                              ],
                            }),
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                ],
              }),
            })
          );
        };
    },
    43208: (e, t, i) => {
      "use strict";
      i.d(t, { w: () => r.default });
      var r = i(34113);
    },
    43584: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => I });
      var r = i(95155),
        A = i(12115),
        s = i(98238),
        l = i(6874),
        a = i.n(l),
        n = i(43208),
        c = i(66766),
        o = i(6567);
      let d = (e) => {
        let { color: t = "yellow" } = e;
        return (0, r.jsxs)("svg", {
          width: "350",
          height: "350",
          viewBox: "0 0 250 250",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          className: "rounded-full blur-lg",
          children: [
            (0, r.jsx)("g", {
              filter: "url(#filter0_f_88_1054)",
              children: (0, r.jsx)("circle", {
                cx: "233.5",
                cy: "16.5",
                r: "129.5",
                fill: t,
                fillOpacity: "0.2",
              }),
            }),
            (0, r.jsx)("defs", {
              children: (0, r.jsxs)("filter", {
                id: "filter0_f_88_1054",
                x: "0",
                y: "-217",
                width: "467",
                height: "467",
                filterUnits: "userSpaceOnUse",
                colorInterpolationFilters: "sRGB",
                children: [
                  (0, r.jsx)("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix",
                  }),
                  (0, r.jsx)("feBlend", {
                    mode: "normal",
                    in: "SourceGraphic",
                    in2: "BackgroundImageFix",
                    result: "shape",
                  }),
                  (0, r.jsx)("feGaussianBlur", {
                    stdDeviation: "52",
                    result: "effect1_foregroundBlur_88_1054",
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var g = i(72150);
      let p = (e) => {
        let { icon: t, description: i, title: A, color: s, letter: l } = e,
          a = s.slice(1);
        return (0, r.jsxs)("div", {
          className:
            "letter-card relative flex h-[371px] w-[370px] items-center justify-center overflow-hidden rounded-[30px] bg-[#0C0C0C] align-middle max-md:h-[300px] max-md:max-h-[300px] max-md:w-[300px] max-md:max-w-[300px]",
          children: [
            (0, r.jsx)("div", {
              className: "absolute z-0",
              children: (0, r.jsx)(c.default, {
                src: l,
                alt: "letter-card-logo",
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, g.cn)(
                "absolute z-0 h-[350px] w-[1000px]",
                "light-sweep-animation-".concat(a),
                "hover:invisible"
              ),
            }),
            (0, r.jsx)("div", {
              className:
                "absolute left-[7px] top-0 h-full w-full mix-blend-overlay",
              children: (0, r.jsx)(c.default, {
                src: o.m7,
                alt: "noisy-texture",
              }),
            }),
            (0, r.jsx)("div", {
              className: "absolute top-[-113px] z-0",
              children: (0, r.jsx)(d, { color: s }),
            }),
            (0, r.jsxs)("div", {
              className:
                "absolute flex h-full w-full flex-col justify-between px-8 pb-6 pt-8",
              children: [
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(c.default, {
                    src: t,
                    alt: "Image",
                    className: "max-md:w-[65px]",
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col justify-between gap-2",
                  children: [
                    (0, r.jsx)("span", {
                      className: "text-md text-gray",
                      children: A,
                    }),
                    (0, r.jsx)("span", {
                      className: "text-md text-white",
                      children: i,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("style", {
              children:
                "\n        .letter-card:hover {\n          .light-sweep-animation-"
                  .concat(
                    a,
                    " {\n            background: -webkit-linear-gradient(\n                right,\n                "
                  )
                  .concat(s, ",\n                ")
                  .concat(
                    s,
                    "\n              )\n              no-repeat 0 0 / 41px;\n            filter: blur(50px);\n            animation: sweep 2s ease-in-out infinite;\n            rotate: 45deg;\n          }\n        }\n        \n        @keyframes sweep {\n          0% {\n            background-position: 100% 100%;\n          }\n\n          100% {\n            background-position: 0 0;\n          }\n        }"
                  ),
            }),
          ],
        });
      };
      var x = i(92080);
      let u = [
        {
          color: "#f16acb",
          icon: x.g2,
          letter: {
            src: "/_next/static/media/MletterSvg.2e93042b.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Marketr",
          description: "Automate Your Marketing with AI-powered Tools.",
          link: "https://marketr.linqai.app",
        },
        {
          color: "#a24bfa",
          icon: x.fs,
          letter: {
            src: "/_next/static/media/DletterSvg.f050e73c.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Designer",
          description: "Create captivating content effortlessly with AI.",
          link: "https://hub.linqai.com",
        },
        {
          color: "#4285f5",
          icon: x.HL,
          letter: {
            src: "/_next/static/media/CletterSvg.57e26c0f.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Composr",
          description:
            "Create and edit branded graphics using AI templates or your own creativity.",
          link: "https://hub.linqai.com",
        },
        {
          color: "#44a6b8",
          icon: x.zL,
          letter: {
            src: "/_next/static/media/RletterSvg.d7374dc2.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Researchr",
          description: "Scour the web and create custom research documents.",
          link: "https://hub.linqai.com",
        },
        {
          color: "#ffffff",
          icon: x.fk,
          letter: {
            src: "/_next/static/media/EletterSvg.efe388a3.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Engager (Coming Soon)",
          description:
            "Boost customer engagement with AI-driven insights and interactions.",
        },
        {
          color: "#ffffff",
          icon: x.Kw,
          letter: {
            src: "/_next/static/media/AletterSvg.a40a13b2.svg",
            height: 371,
            width: 370,
            blurWidth: 0,
            blurHeight: 0,
          },
          title: "Analysr (Coming Soon)",
          description: "Insight-driven decisions with AI-powered analytics.",
        },
      ];
      var h = i(18013),
        m = i(22822);
      let C = () =>
        (0, r.jsx)(m.E, {
          className: "mb-24 flex w-full flex-wrap justify-between gap-4",
          children: (0, r.jsxs)("div", {
            className: "w-full flex-col",
            children: [
              (0, r.jsx)("div", {
                className: "mb-[29px] flex w-fit max-lg:justify-center",
                children: (0, r.jsx)("span", {
                  className: "text-md text-purple",
                  children: "Our Mission",
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "flex flex-nowrap items-center justify-between gap-8 align-middle text-md max-lg:flex-wrap max-lg:justify-center",
                children: [
                  (0, r.jsx)("span", {
                    className: "w-full max-w-[524px] text-2xl",
                    children:
                      "Building AI-Driven SaaS Tools for a New Age of Work",
                  }),
                  (0, r.jsx)("span", {
                    className: "w-full max-w-[518px] text-md text-gray",
                    children:
                      "SaaS tools that bring AI to the forefront of digital work. Our tools are built to collaborate, combining advanced AI with your insights to solve real-world challenges faster and more effectively.",
                  }),
                ],
              }),
            ],
          }),
        });
      i(24220);
      let I = () => {
        let [e, t] = (0, A.useState)(!1),
          [i, l] = (0, s.E)({
            mode: "snap",
            initial: 1,
            slides: { perView: "auto", spacing: 16, origin: "center" },
            breakpoints: {
              "(max-width: 874px)": {
                initial: 0,
                slides: { perView: "auto", spacing: 16, origin: "auto" },
              },
            },
            created: () => t(!0),
          });
        return (0, r.jsxs)("div", {
          className: "w-full",
          children: [
            (0, r.jsx)(n.w, { children: (0, r.jsx)(C, {}) }),
            (0, r.jsxs)(n.w, {
              children: [
                (0, r.jsx)("div", {
                  className:
                    "flex justify-end pl-5 max-lg:pl-20 max-md:pl-10 max-sm:pl-4",
                  children: (0, r.jsx)("div", {
                    ref: i,
                    className: "keen-slider max-md:max-w-full",
                    children: u.map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className:
                            "keen-slider__slide keen-slider__slide--".concat(
                              t,
                              " min-w-[370px] max-w-[370px] max-md:!min-w-[300px] max-md:!max-w-[300px]"
                            ),
                          children: (0, r.jsx)(n.w, {
                            motionProps: {
                              initial: { y: -30, opacity: 0 },
                              transition: { delay: 0.15 * t, duration: 0.4 },
                              animate: { y: 0, opacity: 1 },
                            },
                            children: e.link
                              ? (0, r.jsx)(a(), {
                                  href: e.link,
                                  rel: "noopener noreferrer",
                                  children: (0, r.jsx)(p, {
                                    description: e.description,
                                    icon: e.icon,
                                    title: e.title,
                                    color: e.color,
                                    letter: e.letter,
                                    link: e.link,
                                  }),
                                })
                              : (0, r.jsx)(p, {
                                  description: e.description,
                                  icon: e.icon,
                                  title: e.title,
                                  color: e.color,
                                  letter: e.letter,
                                  link: e.link,
                                }),
                          }),
                        },
                        "keen-slider__slide-".concat(t)
                      )
                    ),
                  }),
                }),
                e &&
                  l.current &&
                  (0, r.jsx)("div", {
                    className:
                      "mt-10 flex w-full justify-end pr-[120px] max-lg:pr-10",
                    children: (0, r.jsx)(h.A, {
                      onNextClick: () => {
                        var e;
                        return null === (e = l.current) || void 0 === e
                          ? void 0
                          : e.next();
                      },
                      onPrevClick: () => {
                        var e;
                        return null === (e = l.current) || void 0 === e
                          ? void 0
                          : e.prev();
                      },
                    }),
                  }),
              ],
            }),
          ],
        });
      };
    },
    44993: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/x.png",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    45044: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/private_hub_bg_3.f004bd3b.png",
        height: 492,
        width: 841,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAADFBMVEUWFhwdHSUnJzdEPF4GrqERAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACFJREFUeJw1yMEJADAQwzDbt//OhUD1FKAIXKlJC9nOnwcDDAAe2m3yOAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    46789: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-2.5aa5a49d.png",
        height: 65,
        width: 65,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWc2O+KtsW/knWIcV6W0efV2dfU1tOb1e2h3vWMxdmW0eih3/etnI3LrpaYgWyeina/zMzLxb5GOS2Z1e0hGRJghJOe3fRnkJ+isrLPrZHOpIaSzeOR1vGjzduxgWPIlHicoZwuPUMZpBnrAAAAFnRSTlP6/vb+5P3s8O/61OP+7f7+7O3+4/3+jdq3DwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwdxkcSgCAQBMAhLmDAuATz/z9paZ8agZxzRISZ1ycxA01aVC/+TKVmBrRX9co7oDcRZXt88fdZjEHwwyg7a19/+AODcl9jiwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    48702: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => a });
      var r = i(95155),
        A = i(12115),
        s = i(61090),
        l = i(74600);
      let a = () => {
        let e = (0, A.useRef)(null),
          { scrollYProgress: t } = (0, s.L)({
            target: e,
            offset: ["end end", "start start"],
          });
        return (0, r.jsxs)("div", {
          ref: e,
          className:
            "relative flex h-[250px] w-full max-w-[500px] justify-center overflow-hidden max-md-plus:h-[200px]",
          children: [
            (0, r.jsx)("div", {
              className:
                "absolute left-0 top-0 h-[40%] w-full bg-gradient-to-b from-black",
            }),
            (0, r.jsx)("svg", {
              className: "max-md-plus:h-[200px]",
              viewBox: "0 0 100 250",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, r.jsx)(l.P.line, {
                x1: "50%",
                y1: "0",
                x2: "50%",
                y2: "100%",
                stroke: "#AD7DFC",
                strokeWidth: 1,
                style: { pathLength: t },
              }),
            }),
          ],
        });
      };
    },
    49911: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/MarketrLogo.a7555919.svg",
        height: 80,
        width: 81,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    51794: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-5.6b82f77e.png",
        height: 300,
        width: 300,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEU1ODpQSkVtTTg/SkwaZIwFbJ4fYII7LCMVaJQYbZoTYYkZdaMiISBUPC6ZZ0aEWERZW1kDZJevm4wqeKQMTm8XTWgWMkA0VWciP0wsUWBcQDGteFeafm6ji3icoJp9cWR4l6FHMie1SIihAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBhQHAMAwDMBeTMoyx+//KSTD+2BcTJhhFMc7OISgpaWWGrpdMQns0m0tWbNHcU05Yje+tiQgb+hD9BsQPZy8C8KGpRqYAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    52169: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => a });
      var r = i(95155),
        A = i(12115),
        s = i(6567),
        l = i(72150);
      let a = () => {
        let [e, t] = (0, A.useState)(0);
        return (
          (0, A.useEffect)(() => {
            let e = () => {
              t(-0.2 * Math.min(window.scrollY, 130));
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, [e]),
          (0, r.jsx)("div", {
            style: {
              backgroundImage: "url(".concat(s.H$.src, ")"),
              transform: "translateY(".concat(e, "px)"),
            },
            className: (0, l.cn)(
              "absolute left-0 top-[139px] z-[-1] h-[867px] w-full bg-contain bg-top bg-no-repeat",
              "max-md-plus:bg-cover max-md-plus:bg-left max-md-plus:opacity-50"
            ),
          })
        );
      };
    },
    52349: (e, t, i) => {
      "use strict";
      i.d(t, { $: () => s });
      var r = i(95155),
        A = i(72150);
      let s = (e) => {
        let {
          children: t,
          rounded: i = !1,
          borderGradient: s,
          rootClassName: l,
          className: a,
          variant: n,
          icon: c,
          onClick: o,
          disabled: d,
        } = e;
        return (0, r.jsx)("button", {
          onClick: o,
          className: (0, A.cn)(
            "overflow-hidden border-[1px] border-solid border-transparent text-white",
            i ? "rounded-[100px]" : "rounded-[10px]",
            { "border !border-white": "outlined" === n },
            { ["".concat(s, " border-none p-[1px]")]: s },
            { "bg-transparent": "secondary" === n },
            { "pointer-events-none cursor-not-allowed opacity-20": d },
            l
          ),
          children: (0, r.jsxs)("div", {
            className: (0, A.cn)(
              "flex h-full items-center justify-center gap-2 whitespace-nowrap px-4 py-2",
              i ? "rounded-[98px]" : "rounded-[8px]",
              { "bg-black hover:bg-light-black": s },
              a
            ),
            children: [t, c],
          }),
        });
      };
    },
    53067: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/ejay-rivera.8a90066f.jpeg",
        height: 1800,
        width: 1440,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACaD//EAB4QAQABAgcAAAAAAAAAAAAAAAIBAxEABAUTFDGC/9oACAEBAAE/ABquW3U+OUUqoiCuopK0T6vj/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k=",
        blurWidth: 6,
        blurHeight: 8,
      };
    },
    53580: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/com-3.755a42db.png",
        height: 200,
        width: 200,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAb1BMVEWKiIy6wMmYoKzn1Mva2NT37ufv5NyrrLV8fX/l39yamJeUk5WgoZ7++vVnPDDQ0tR8g3tKSUmcqKbK1cNzg5pFMDFMW3dVMCN5YVg/Ix+jkY2ITkBuXVzDxcVxVlW+tamysrJ2dW/ezLbVvLSRf3qfDo7XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBQLAIAwEsGMrUpy5+//fuATEUtYqMJioG1KQ0K3v50U9qBoT1+06oSszRksJQrvp86VAWMDt9wGGAXJ+f3N9A1+QktyqAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    57680: (e, t, i) => {
      "use strict";
      i.d(t, { E1: () => s.default, OW: () => r.default, VE: () => A.default });
      var r = i(81256),
        A = i(7795);
      i(63309),
        i(9994),
        i(53067),
        i(92993),
        i(74978),
        i(76192),
        i(31545),
        i(10287);
      var s = i(91525);
      i(83554), i(26125), i(45044);
    },
    58212: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/DesignerLogo.5a13dd78.svg",
        height: 80,
        width: 80,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    63035: (e, t, i) => {
      "use strict";
      i.d(t, { Z: () => n });
      var r = i(95155),
        A = i(66766),
        s = i(6874),
        l = i.n(s),
        a = i(72150);
      let n = (e) => {
        let { name: t, role: i, socials: s } = e;
        return (0, r.jsxs)("div", {
          className: (0, a.cn)(
            "z-50 min-h-[110px] w-[180px] px-3 py-4",
            "flex flex-col items-center gap-2 rounded-[10px] bg-[#1C1D26] bg-radial-blue text-center shadow"
          ),
          style: {
            backgroundColor: "hsl(234, 15%, 13%)",
            boxShadow: "0px 6px 12px 0px rgba(0, 0, 0, 0.2)",
            backgroundImage:
              "radial-gradient(ellipse farthest-side at center top, hsl(234, 100%, 61%) 0%, hsl(235, 11%, 19%) 80%, hsl(234, 15%, 13%) 100%)",
            backgroundSize: "150% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
          },
          children: [
            (0, r.jsx)("span", { className: "text-md", children: t }),
            (0, r.jsx)("span", {
              className: "max-w-[120px] text-sm text-gray",
              children: i,
            }),
            (0, r.jsx)("div", {
              className: "flex w-full items-center justify-center gap-2",
              children:
                null == s
                  ? void 0
                  : s.map((e) => {
                      let { icon: t, link: i } = e;
                      return (0, r.jsx)(
                        l(),
                        {
                          href: i,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: (0, r.jsx)(A.default, {
                            src: t,
                            alt: "Social Icon",
                            width: 16,
                            height: 16,
                          }),
                        },
                        i
                      );
                    }),
            }),
          ],
        });
      };
    },
    63309: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/CommunitySection-bg.e707d9bd.png",
        height: 412,
        width: 648,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAGFBMVEUbITZYj950h6WjpLdQXHQ6Q1cbXK7m4d8JfFcKAAAACHRSTlMzMzMzMzMzM85JBgUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAnSURBVHicFci5EQAwCASxvQfov2OPFQrA0gZYKQZG6/vhA3egnUIeBzMAW+nPN0AAAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 5,
      };
    },
    67048: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/CreatrLogo.d5ffeeb0.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    71801: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => s });
      var r = i(95155),
        A = i(95777);
      let s = () =>
        (0, A.iA)() &&
        (0, r.jsx)("iframe", {
          style: {
            WebkitMaskImage:
              "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          },
          src: "data:text/html;base64,PGh0bWw+CiAgICAgICAgPGhlYWQ+CiAgICAgICAgICAgIDxtZXRhIG5hbWU9InZpZXdwb3J0IiBjb250ZW50PSJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSI+CiAgICAgICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgICAgIGh0bWwsIGJvZHl7CiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgPC9zdHlsZT4KICAgICAgICAgICAgPHNjcmlwdCB0eXBlPSJpbXBvcnRtYXAiPgp7CiAgICAiaW1wb3J0cyI6IHsKICAgICAgICAicmVhY3QiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvcmVhY3RAMTguMC4yIiwKICAgICAgICAicmVhY3QtZG9tIjogImh0dHBzOi8vY2RuLnNreXBhY2suZGV2L3JlYWN0LWRvbUAxOC4wLjIiLAogICAgICAgICJ0aHJlZSI6ICJodHRwczovL2Nkbi5za3lwYWNrLmRldi90aHJlZUAwLjE0OC4wIiwKICAgICAgICAicmVhY3QtdGhyZWUvZmliZXIiOiAiaHR0cHM6Ly9jZG4uc2t5cGFjay5kZXYvQHJlYWN0LXRocmVlL2ZpYmVyQDcuMC4yNCIKICAgIH0KfQo8L3NjcmlwdD4KPHN0eWxlPgogICAgaHRtbCwgYm9keXsKICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgcGFkZGluZzogMDsKICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgYm9yZGVyOiAwOwogICAgfQogICAgLm50LWVtYmVkewogICAgICAgIHdpZHRoOiAxMDAlOwogICAgICAgIGhlaWdodDogMTAwJTsKICAgIH0KICAgIC5udC1lbWJlZCBjYW52YXN7CiAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgfQo8L3N0eWxlPgo8c2NyaXB0IHR5cGU9Im1vZHVsZSI+CiAgICBpbXBvcnQgUmVhY3QsIHt1c2VSZWYsdXNlTWVtb30gZnJvbSAncmVhY3QnOwogICAgaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7CiAgICBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7CiAgICBpbXBvcnQge0NhbnZhcywgdXNlRnJhbWUsIHVzZVRocmVlfSBmcm9tICdyZWFjdC10aHJlZS9maWJlcic7CgogICAgbGV0IGVtYmVkUm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOwogICAgZW1iZWRSb290LmNsYXNzTmFtZSA9ICJudC1lbWJlZCI7CiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVtYmVkUm9vdCk7CgogICAgY29uc3QgVGV4dHVyZU1lc2ggPSAoKSA9PiB7CiAgICAgICAgY29uc3QgbWVzaCA9IHVzZVJlZihudWxsKQogICAgICAgIHVzZUZyYW1lKHN0YXRlID0+IHsKICAgICAgICAgICAgY29uc3QgeyBjbG9jaywgbW91c2UsIGdsLCBzY2VuZSwgY2FtZXJhIH0gPSBzdGF0ZQogICAgICAgICAgICBpZihtZXNoLmN1cnJlbnQpewogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfbW91c2UudmFsdWUgPSBbbW91c2UueCAvIDIgKyAwLjUsIG1vdXNlLnkgLyAyICsgMC41XQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfdGltZS52YWx1ZSA9IGNsb2NrLmdldEVsYXBzZWRUaW1lKCkKICAgICAgICAgICAgICAgIGxldCBjID0gZ2wuZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKQogICAgICAgICAgICAgICAgbWVzaC5jdXJyZW50Lm1hdGVyaWFsLnVuaWZvcm1zLnVfcmVzb2x1dGlvbi52YWx1ZSA9IFtjLndpZHRoLGMuaGVpZ2h0XQogICAgICAgICAgICB9CiAgICAgICAgfSkKICAgICAgICAKICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnbWVzaCcsCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIHJlZjptZXNoLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsMF0sCiAgICAgICAgICAgICAgICBzY2FsZTogMSwKICAgICAgICAgICAgICAgIHJvdGF0aW9uOiBbMCwwLDBdCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BsYW5lR2VvbWV0cnknLHthcmdzOlsyNDAsNTgwXX0pLCAKICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc2hhZGVyTWF0ZXJpYWwnLHsKICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgdW5pZm9ybSB2ZWMyIHVfcmVzb2x1dGlvbjsKCnVuaWZvcm0gZmxvYXQgdV90aW1lOwoKdW5pZm9ybSB2ZWMzIHVfY29sb3I7Cgp1bmlmb3JtIHZlYzQgdV9iYWNrZ3JvdW5kOwoKdW5pZm9ybSBmbG9hdCB1X3NwZWVkOwoKdW5pZm9ybSBmbG9hdCB1X2RldGFpbDsKCgoKLyoKCiogQGF1dGhvciBIYXpzaSAoa2luZGEpCgoqLwoKbWF0MiBtKGZsb2F0IGEpIHsKCiAgICBmbG9hdCBjPWNvcyhhKSwgcz1zaW4oYSk7CgogICAgcmV0dXJuIG1hdDIoYywtcyxzLGMpOwoKfQoKCgoKCgojaWZuZGVmIEZOQ19SR0IyTFVNQQojZGVmaW5lIEZOQ19SR0IyTFVNQQpmbG9hdCByZ2IybHVtYShpbiB2ZWMzIGNvbG9yKSB7CiAgICByZXR1cm4gZG90KGNvbG9yLCB2ZWMzKDAuMjk5LCAwLjU4NywgMC4xMTQpKTsKfQpmbG9hdCByZ2IybHVtYShpbiB2ZWM0IGNvbG9yKSB7CiAgICByZXR1cm4gcmdiMmx1bWEoY29sb3IucmdiKTsKfQojZW5kaWYKCgojaWZuZGVmIEZOQ19MVU1BCiNkZWZpbmUgRk5DX0xVTUEKZmxvYXQgbHVtYShmbG9hdCB2KSB7IHJldHVybiB2OyB9CmZsb2F0IGx1bWEoaW4gdmVjMyB2KSB7IHJldHVybiByZ2IybHVtYSh2KTsgfQpmbG9hdCBsdW1hKGluIHZlYzQgdikgeyByZXR1cm4gcmdiMmx1bWEodi5yZ2IpOyB9CiNlbmRpZgoKCgpmbG9hdCBtYXAodmVjMyBwKSB7CgogICAgZmxvYXQgdCA9IHVfdGltZSAqIHVfc3BlZWQ7CgogICAgcC54eiAqPSBtKHQgKiAwLjQpO3AueHkqPSBtKHQgKiAwLjEpOwoKICAgIHZlYzMgcSA9IHAgKiAyLjAgKyB0OwoKICAgIHJldHVybiBsZW5ndGgocCt2ZWMzKHNpbigodCp1X3NwZWVkKSAqIDAuMSkpKSAqIGxvZyhsZW5ndGgocCkgKyAwLjkpICsgY29zKHEueCArIHNpbihxLnogKyBjb3MocS55KSkpICogMC41IC0gMS4wOwoKfQoKCgp2b2lkIG1haW4oKSB7CgogICAgdmVjMiBhID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gdV9yZXNvbHV0aW9uLnggLSB2ZWMyKDAuNSwgMC41KTsKCiAgICB2ZWMzIGNsID0gdmVjMygwLjApOwoKICAgIGZsb2F0IGQgPSAyLjU7CgoKCiAgICBmb3IgKGZsb2F0IGkgPSAwLjsgaSA8PSAoMS4gKyAyMC4gKiB1X2RldGFpbCk7IGkrKykgewoKICAgICAgICB2ZWMzIHAgPSB2ZWMzKDAsIDAsIDQuMCkgKyBub3JtYWxpemUodmVjMyhhLCAtMS4wKSkgKiBkOwoKICAgICAgICBmbG9hdCByeiA9IG1hcChwKTsKCiAgICAgICAgZmxvYXQgZiA9ICBjbGFtcCgocnogLSBtYXAocCArIDAuMSkpICogMC41LCAtMC4xLCAxLjApOwoKICAgICAgICB2ZWMzIGwgPSB2ZWMzKDAuMSwgMC4zLCAwLjQpICsgdmVjMyg1LjAsIDIuNSwgMy4wKSAqIGY7CgogICAgICAgIGNsID0gY2wgKiBsICsgc21vb3Roc3RlcCgyLjUsIDAuMCwgcnopICogMC42ICogbDsKCiAgICAgICAgZCArPSBtaW4ocnosIDEuMCk7CgogICAgfQoKICAgIAoKICAgIHZlYzQgY29sb3IgPSB2ZWM0KG1pbih1X2NvbG9yLCBjbCksMS4wKTsKCiAgICAvL2NvbG9yID0gbWluKHVfYmFja2dyb3VuZCwgdV9jb2xvcik7CgogICAgY29sb3IuciA9IG1heCh1X2JhY2tncm91bmQucixjb2xvci5yKTsKCiAgICBjb2xvci5nID0gbWF4KHVfYmFja2dyb3VuZC5nLGNvbG9yLmcpOwoKICAgIGNvbG9yLmIgPSBtYXgodV9iYWNrZ3JvdW5kLmIsY29sb3IuYik7CgogICAgCgoKCiAgICBnbF9GcmFnQ29sb3IgPSBjb2xvcjsKCn0KCmAsCiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGAKICAgICAgICAgICAgdm9pZCBtYWluKCkgewogICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTsKICAgICAgICB9YCwKICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7dV9jb2xvcjoge3ZhbHVlOiBbMC4zMTM3MjU0OTAxOTYwNzg0LDAsMV19LHVfYmFja2dyb3VuZDoge3ZhbHVlOiBbMCwwLDAsMV19LHVfc3BlZWQ6IHt2YWx1ZTogMC4xfSx1X2RldGFpbDoge3ZhbHVlOiAwLjR9LHVfdGltZToge3ZhbHVlOiAwfSx1X21vdXNlOiB7dmFsdWU6IFswLDBdfSx1X3Jlc29sdXRpb246IHt2YWx1ZTogWzI0MCw1ODBdfX0sCiAgICAgICAgICAgICAgICB3aXJlZnJhbWU6IGZhbHNlLCAKICAgICAgICAgICAgICAgIHdpcmVmcmFtZUxpbmV3aWR0aDogMCwKICAgICAgICAgICAgICAgIGRpdGhlcmluZzogZmFsc2UsCiAgICAgICAgICAgICAgICBmbGF0U2hhZGluZzogdHJ1ZSwKICAgICAgICAgICAgICAgIGRvdWJsZVNpZGVkOiB0cnVlLAogICAgICAgICAgICAgICAgZ2xzbFZlcnNpb246ICIxMDAiCiAgICAgICAgICAgIH0pCiAgICAgICAgKTsgIAogICAgfQoKICAgIFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KENhbnZhcyx7CiAgICAgICAgICAgIGdsOiB7CiAgICAgICAgICAgICAgICBwcmVzZXJ2ZURyYXdpbmdCdWZmZXI6IHRydWUsCiAgICAgICAgICAgICAgICBwcmVtdWx0aXBsaWVkQWxwaGE6IGZhbHNlLAogICAgICAgICAgICAgICAgYWxwaGE6IHRydWUsCiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwKICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSwKICAgICAgICAgICAgICAgIHByZWNpc2lvbjogImhpZ2hwIiwKICAgICAgICAgICAgICAgIHBvd2VyUHJlZmVyZW5jZTogImhpZ2gtcGVyZm9ybWFuY2UiCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHJlc2l6ZTp7CiAgICAgICAgICAgICAgICBkZWJvdW5jZTogMCwKICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsCiAgICAgICAgICAgICAgICBvZmZzZXRTaXplOiB0cnVlCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIGRwcjogMSwKICAgICAgICAgICAgY2FtZXJhOiB7CiAgICAgICAgICAgICAgICBmb3Y6IDc1LAogICAgICAgICAgICAgICAgbmVhcjogMC4xLAogICAgICAgICAgICAgICAgZmFyOiAxMDAwLAogICAgICAgICAgICAgICAgcG9zaXRpb246IFswLDAsNV0KICAgICAgICAgICAgfSwKICAgICAgICAgICAgc3R5bGU6eyBoZWlnaHQ6ICIxMDAlIiwgd2lkdGg6ICIxMDAlIiB9CiAgICAgICAgfSwKICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRleHR1cmVNZXNoKSAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgKSwgZW1iZWRSb290KTsKPC9zY3JpcHQ+CiAgICAgICAgPC9oZWFkPgogICAgICAgIDxib2R5Pgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvYm9vay41ZmIxMWI4ZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvbHlnaWEuZjc0OTA1OTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL292ZXJmbG93LjhkNTA0MTVkLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy90cmFzaC41MjRkYmNkMy5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvdmVydGljYWwuOTA2MTA4NDkuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2hvcml6b250YWwuNDRmNzcxZjguc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL2FkZC5hNTUyNDBkZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvc2lnLjg1MGE4NWU3LnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9taW51cy4xZTFhMGFiZC5zdmcgLS0+Cgo8IS0tIEFTU0VUIE5PVCBJTkxJTkVEOiBhc3NldHMvZWZmZWN0LjQ1NTcyNDNmLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy92aXNpYmxlLmM2ZDRlMWMwLnN2ZyAtLT4KCjwhLS0gQVNTRVQgTk9UIElOTElORUQ6IGFzc2V0cy9oaWRkZW4uNWE0ZmMyNTQuc3ZnIC0tPgoKPCEtLSBBU1NFVCBOT1QgSU5MSU5FRDogYXNzZXRzL3dvcmtlci5iNzYxZmIxMS5qcyAtLT4KPC9ib2R5PgogICAgICAgIDwvaHRtbD4=",
          className:
            "absolute left-0 top-0 z-[-1] m-0 h-[1200px] w-full border-0 bg-gradient-to-b opacity-50 max-md-plus:h-[786px] max-md-plus:opacity-35",
        });
    },
    73731: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => m });
      var r = i(95155),
        A = i(12115),
        s = i(98238),
        l = i(92080),
        a = i(66766),
        n = i(72150);
      let c = {
        src: "/_next/static/media/GradientBorderCardBg.ce7dca51.svg",
        height: 612,
        width: 500,
        blurWidth: 0,
        blurHeight: 0,
      };
      var o = i(88787),
        d = i.n(o);
      let g = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
          className: (0, n.cn)(d()["rotating-border"]),
          children: (0, r.jsxs)("div", {
            className: (0, n.cn)(d().content, "w-full bg-black"),
            children: [
              (0, r.jsx)("div", {
                className: "absolute left-0 top-0 h-full w-full",
                children: (0, r.jsx)(a.default, {
                  src: c,
                  alt: "gradient-background",
                }),
              }),
              (0, r.jsx)("div", { className: "pt-10", children: t }),
            ],
          }),
        });
      };
      var p = i(1254),
        x = i(48702);
      let u = (e) => {
          let { img: t, text: i } = e;
          return (0, r.jsxs)("div", {
            className:
              "flex w-fit flex-nowrap items-center justify-center gap-6 align-middle",
            children: [
              (0, r.jsx)(a.default, {
                src: t,
                alt: "vertical-carousel-item-".concat(i),
              }),
              (0, r.jsx)("span", { className: "h-fit text-lg", children: i }),
            ],
          });
        },
        h = [
          { id: "researchr", text: "Researchr", img: l.zL },
          { id: "composr", text: "Composr", img: l.HL },
          { id: "analysr", text: "Analysr", img: l.Kw },
          { id: "marketr", text: "Marketr", img: l.g2 },
          { id: "engager", text: "Engager", img: l.fk },
          { id: "designer", text: "Designer", img: l.fs },
        ],
        m = () => {
          let [e, t] = (0, A.useState)(0),
            [i, l] = (0, s.E)({
              loop: !0,
              vertical: !0,
              slides: { perView: "auto", spacing: 36, origin: "center" },
              slideChanged(e) {
                t(e.track.details.rel);
              },
            });
          return (
            (0, A.useEffect)(() => {
              let e = setInterval(() => {
                l.current && l.current.next();
              }, 2e3);
              return () => clearInterval(e);
            }, [l]),
            (0, r.jsxs)("div", {
              children: [
                (0, r.jsx)("div", {
                  className: "w-full max-w-[500px]",
                  children: (0, r.jsx)(g, {
                    children: (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center",
                      children: [
                        (0, r.jsx)(p.u, {
                          className: "mb-2 text-lg",
                          gradient: "bg-white-black-grad-tb",
                          children: "Neura AI-SAAS Tools",
                        }),
                        (0, r.jsx)("div", {
                          className: "flex max-w-[243px] flex-col align-middle",
                          children: (0, r.jsx)("div", {
                            ref: i,
                            className: "keen-slider justify-center",
                            children: h.map((t, i) => {
                              let A = (function (e, t, i) {
                                return Math.min(
                                  Math.abs(e - t),
                                  i - Math.abs(e - t)
                                );
                              })(e, i, h.length);
                              return (0, r.jsx)(
                                "div",
                                {
                                  className: "keen-slider__slide slide-".concat(
                                    i + 1,
                                    " !w-fit"
                                  ),
                                  children: (0, r.jsx)("div", {
                                    className: (0, n.cn)(
                                      "w-full",
                                      "transition-all duration-300 ease-in-out"
                                    ),
                                    style: {
                                      scale: 1 - A / 8,
                                      opacity: 1 - A / 3,
                                    },
                                    children: (0, r.jsx)(u, { ...t }),
                                  }),
                                },
                                t.id
                              );
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, r.jsx)(x.A, {}),
              ],
            })
          );
        };
    },
    74978: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/logan-audie.7c1ce999.jpeg",
        height: 800,
        width: 800,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACVB//EABsQAAICAwEAAAAAAAAAAAAAAAIDBCEAERMV/9oACAEBAAE/AEv8+LElIMkyOhAyqux3n//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    76192: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/narek-avetisyan.5749fe8b.jpeg",
        height: 460,
        width: 460,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAC7B//EAB4QAAAEBwAAAAAAAAAAAAAAAAABAiEDBBEiIzJx/9oACAEBAAE/AFRkJnTO58ezV4P/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    81256: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/coin_1.d05444d3.png",
        height: 133,
        width: 173,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEVMaXGnKIJtL5mCLZhdI4JrQKuHWLd2ZcNHEFJWNKRIF3JcF3NmWK5wQaN1O6AJBi0kAipAIW93OKVgI4yRSLZ5UsFMFFtYO6ScPKe1BVESAAAAFXRSTlMAd5H+PPP7/TVnxhb64exVf/1+HQ6LHyz5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nBXGRxLAIAwAsSWBmE4a5f8vZayT+N/woUIXdyTNuqQXC5hzZqkesHGMRwP+bmwrQAGMCUc+ZgAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 6,
      };
    },
    83271: (e, t, i) => {
      Promise.resolve().then(i.t.bind(i, 6874, 23)),
        Promise.resolve().then(i.t.bind(i, 33063, 23)),
        Promise.resolve().then(i.bind(i, 62146)),
        Promise.resolve().then(i.bind(i, 10255)),
        Promise.resolve().then(i.bind(i, 23052)),
        Promise.resolve().then(i.bind(i, 32350)),
        Promise.resolve().then(i.bind(i, 46789)),
        Promise.resolve().then(i.bind(i, 53580)),
        Promise.resolve().then(i.bind(i, 14171)),
        Promise.resolve().then(i.bind(i, 51794)),
        Promise.resolve().then(i.bind(i, 2793)),
        Promise.resolve().then(i.bind(i, 31408)),
        Promise.resolve().then(i.bind(i, 32031)),
        Promise.resolve().then(i.bind(i, 94879)),
        Promise.resolve().then(i.bind(i, 29277)),
        Promise.resolve().then(i.bind(i, 11588)),
        Promise.resolve().then(i.bind(i, 95474)),
        Promise.resolve().then(i.bind(i, 97642)),
        Promise.resolve().then(i.bind(i, 78794)),
        Promise.resolve().then(i.bind(i, 85090)),
        Promise.resolve().then(i.bind(i, 15119)),
        Promise.resolve().then(i.bind(i, 44993)),
        Promise.resolve().then(i.bind(i, 24694)),
        Promise.resolve().then(i.bind(i, 92581)),
        Promise.resolve().then(i.bind(i, 40091)),
        Promise.resolve().then(i.bind(i, 90658)),
        Promise.resolve().then(i.bind(i, 35880)),
        Promise.resolve().then(i.bind(i, 72218)),
        Promise.resolve().then(i.bind(i, 81256)),
        Promise.resolve().then(i.bind(i, 7795)),
        Promise.resolve().then(i.bind(i, 63309)),
        Promise.resolve().then(i.bind(i, 9994)),
        Promise.resolve().then(i.bind(i, 53067)),
        Promise.resolve().then(i.bind(i, 92993)),
        Promise.resolve().then(i.bind(i, 74978)),
        Promise.resolve().then(i.bind(i, 76192)),
        Promise.resolve().then(i.bind(i, 31545)),
        Promise.resolve().then(i.bind(i, 10287)),
        Promise.resolve().then(i.bind(i, 91525)),
        Promise.resolve().then(i.bind(i, 26125)),
        Promise.resolve().then(i.bind(i, 45044)),
        Promise.resolve().then(i.bind(i, 83554)),
        Promise.resolve().then(i.bind(i, 34113)),
        Promise.resolve().then(i.bind(i, 71801)),
        Promise.resolve().then(i.bind(i, 94161)),
        Promise.resolve().then(i.bind(i, 25859)),
        Promise.resolve().then(i.bind(i, 23679)),
        Promise.resolve().then(i.t.bind(i, 38718, 23)),
        Promise.resolve().then(i.bind(i, 52169)),
        Promise.resolve().then(i.bind(i, 93234)),
        Promise.resolve().then(i.bind(i, 777)),
        Promise.resolve().then(i.bind(i, 41445)),
        Promise.resolve().then(i.bind(i, 43584)),
        Promise.resolve().then(i.bind(i, 37471)),
        Promise.resolve().then(i.bind(i, 73731)),
        Promise.resolve().then(i.bind(i, 13855)),
        Promise.resolve().then(i.bind(i, 16975)),
        Promise.resolve().then(i.bind(i, 9256)),
        Promise.resolve().then(i.bind(i, 2898));
    },
    83554: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/private_hub_bg.676f955e.png",
        height: 1902,
        width: 1846,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUcHSYVFh0qLDglJDEpLEM+PklKTFPb3t55dnp5Q7xuAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAMElEQVR4nB3GwQ0AMQyEQFg7yfVf8cl+MAJAzwmZ3vvoxtwbUhB0caYKaqaLbVH9ARR0AH2l0+6oAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    88787: (e) => {
      e.exports = {
        "rotating-border": "GradientBorderCard_rotating-border__trl8a",
        content: "GradientBorderCard_content__B_kq1",
        "rotate-gradient": "GradientBorderCard_rotate-gradient__rBmF9",
      };
    },
    90658: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/TelegramIcon.dd7e4649.svg",
        height: 25,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    91525: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/neural-noise-capture-mobile.7bf5049f.png",
        height: 1192,
        width: 2204,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUSERIYDy4cDUMhC1x10KduAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAHklEQVR4nCXFwQ0AMBCDMCD771yp549BbUK1xaf3eQKeABqmlnpXAAAAAElFTkSuQmCC",
        blurWidth: 8,
        blurHeight: 4,
      };
    },
    92080: (e, t, i) => {
      "use strict";
      i.d(t, {
        HL: () => s.default,
        Kw: () => A.default,
        XI: () => r.default,
        bI: () => l.default,
        fk: () => n.default,
        fs: () => a.default,
        g2: () => o.default,
        n5: () => g.default,
        vV: () => c.default,
        zL: () => d.default,
      });
      var r = i(7800),
        A = i(3925),
        s = i(31674),
        l = i(67048),
        a = i(58212),
        n = i(9876),
        c = i(25338),
        o = i(49911),
        d = i(1538),
        g = i(12591);
    },
    92581: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/Icon2.27f0d84d.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    92993: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => r });
      let r = {
        src: "/_next/static/media/george-fox.b523d321.jpeg",
        height: 640,
        width: 640,
        blurDataURL:
          "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAC+D//EAB4QAAEEAQUAAAAAAAAAAAAAAAIBAwQRAAUTIzJB/9oACAEBAAE/AGZ8NvW3FOYQ71CKm7xEVdR8vP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    93234: (e, t, i) => {
      "use strict";
      i.d(t, { default: () => o });
      var r = i(95155),
        A = i(12115),
        s = i(66766),
        l = i(43208),
        a = i(52349),
        n = i(72150);
      let c = [
          {
            id: "bt1",
            name: "Web3",
            content: [
              {
                id: "aws",
                name: "aws",
                img: {
                  src: "/_next/static/media/bitget.d47b026e.svg",
                  height: 26,
                  width: 85,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "coinGecko",
                name: "CoinGecko ",
                img: {
                  src: "/_next/static/media/CoinGecko.57da1b03.svg",
                  height: 34,
                  width: 120,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "google",
                name: "google",
                img: {
                  src: "/_next/static/media/mexc.7cfb26ac.svg",
                  height: 18,
                  width: 119,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "apple",
                name: "apple",
                img: {
                  src: "/_next/static/media/spectre-ai.1ce85615.svg",
                  height: 37,
                  width: 126,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "nvidia",
                name: "nvidia",
                img: {
                  src: "/_next/static/media/travala.560c7934.svg",
                  height: 19,
                  width: 152,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "coinMarketCap",
                name: "coin market cap",
                img: {
                  src: "/_next/static/media/zignaly.a9478410.svg",
                  height: 24,
                  width: 96,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
            ],
          },
          {
            id: "bt2",
            name: "Web2",
            content: [
              {
                id: "aws2",
                name: "aws",
                img: {
                  src: "/_next/static/media/Aws.36c4bf23.svg",
                  height: 48,
                  width: 168,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "nvidia2",
                name: "nvidia",
                img: {
                  src: "/_next/static/media/Nvidia.d93c2022.svg",
                  height: 48,
                  width: 126,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "coinMarketCap2",
                name: "coin market cap",
                img: {
                  src: "/_next/static/media/Coin.4d097e9f.svg",
                  height: 26,
                  width: 154,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "microsoft2",
                name: "microsoft ",
                img: {
                  src: "/_next/static/media/Ms.034f043c.svg",
                  height: 54,
                  width: 144,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "google2",
                name: "google",
                img: {
                  src: "/_next/static/media/Google.e06761f8.svg",
                  height: 32,
                  width: 165,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
              {
                id: "apple2",
                name: "apple",
                img: {
                  src: "/_next/static/media/AppleDev.61448eec.svg",
                  height: 48,
                  width: 153,
                  blurWidth: 0,
                  blurHeight: 0,
                },
              },
            ],
          },
        ],
        o = () => {
          var e;
          let [t, i] = (0, A.useState)(c[0].id),
            o =
              null ===
                (e = c.find((e) => {
                  let { id: i } = e;
                  return t === i;
                })) || void 0 === e
                ? void 0
                : e.content;
          return (0, r.jsxs)("div", {
            className:
              "mt-[82px] flex flex-col items-center gap-8 md-plus:mt-[274px]",
            children: [
              (0, r.jsxs)(l.w, {
                margin: "0px",
                className: "flex flex-col items-center gap-8",
                children: [
                  (0, r.jsx)("span", {
                    className: "text-md text-gray",
                    children: "Our Partners",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex gap-1 rounded-[52px] bg-light-black px-1.5 py-1",
                    children: c.map((e) => {
                      let { id: A, name: s } = e;
                      return (0, r.jsx)(
                        a.$,
                        {
                          onClick: () => i(A),
                          rounded: !0,
                          borderGradient:
                            t === A && "bg-lightblue-purple-grad-tl-br",
                          className: (0, n.cn)("w-[72px] text-gray", {
                            "text-white hover:bg-black": t === A,
                            "hover:text-white": t !== A,
                          }),
                          children: s,
                        },
                        s
                      );
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: (0, n.cn)(
                  "grid grid-cols-3 justify-items-center gap-x-5 gap-y-[42px]",
                  "max-md:max-w-[340px] max-md:grid-cols-2 max-md:gap-x-7 max-md:gap-y-5",
                  "w-full max-w-[560px]"
                ),
                children:
                  null == o
                    ? void 0
                    : o.map((e, t) => {
                        let { id: i, name: A, img: a } = e;
                        return (0, r.jsx)(
                          l.w,
                          {
                            className: "flex h-[48px] w-fit items-center",
                            margin: "0px",
                            motionProps: {
                              transition: { duration: 0.4, delay: 0.15 * t },
                            },
                            children: (0, r.jsx)(s.default, { src: a, alt: A }),
                          },
                          i
                        );
                      }),
              }),
            ],
          });
        };
    },
    94161: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => b });
      var r = i(95155),
        A = i(12115),
        s = i(74600),
        l = i(3096),
        a = i(95777),
        n = i(76604);
      let c = (e, t) => {
          let [i, r] = [t.x - e.x, t.y - e.y],
            A = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
            [s, l] = [i / A, r / A],
            a = e.x + s * e.r,
            n = e.y + l * e.r;
          return { x1: a, y1: n, x2: t.x - s * t.r, y2: t.y - l * t.r };
        },
        o = (e) => {
          let {
              x1: t,
              x2: i,
              y1: l,
              y2: a,
              stroke: c = "#4B409A",
              custom: o = 2,
              ...d
            } = e,
            g = (0, A.useRef)(null),
            p = (0, n.W)(g, { margin: "-10% 0px -10% 0px" }),
            x = 1 / 0,
            [u, h, m, C] = [
              Number(t || 0),
              Number(i || 0),
              Number(l || 0),
              Number(a || 0),
            ],
            I = Math.floor(4 * Math.random()) + 2,
            b = Math.floor(5 * Math.random()) + 1;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(s.P.svg, {
              children: [
                (0, r.jsxs)("defs", {
                  children: [
                    (0, r.jsxs)("linearGradient", {
                      id: "whiteToTransparent",
                      x1: "0",
                      y1: "0",
                      x2: "0",
                      y2: "100%",
                      children: [
                        (0, r.jsx)("stop", {
                          offset: "0",
                          stopColor: "white",
                          stopOpacity: "0",
                        }),
                        (0, r.jsx)("stop", {
                          offset: "100%",
                          stopColor: "white",
                          stopOpacity: "1",
                        }),
                      ],
                    }),
                    (0, r.jsx)("filter", {
                      id: "circle-blur-sm",
                      children: (0, r.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "0",
                      }),
                    }),
                    (0, r.jsx)("filter", {
                      id: "circle-blur-md",
                      children: (0, r.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "2",
                      }),
                    }),
                    (0, r.jsx)("filter", {
                      id: "circle-blur-lg",
                      children: (0, r.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: "3",
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)("foreignObject", {
                  x: u,
                  y: m,
                  children: (0, r.jsx)("div", {
                    className: "h-[30px] w-[30px]",
                    ref: g,
                  }),
                }),
                (0, r.jsx)(s.P.line, {
                  x1: t,
                  x2: t,
                  y1: l,
                  y2: l,
                  animate: p
                    ? { x2: Number(i), y2: Number(a) }
                    : { x2: Number(t), y2: Number(l) },
                  transition: { duration: 0.3 },
                  stroke: c,
                  strokeWidth: 2,
                  custom: o,
                  ...d,
                }),
                p &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(s.P.line, {
                        initial: { opacity: 100 },
                        x1: t,
                        x2: t,
                        y1: l,
                        y2: l,
                        animate: p && {
                          x1: u,
                          x2: h,
                          y1: m,
                          y2: C,
                          opacity: 0,
                        },
                        transition: {
                          duration: b,
                          repeat: x,
                          ease: "easeInOut",
                          repeatDelay: I,
                        },
                        stroke: "url(#whiteToTransparent)",
                        strokeWidth: 2,
                        custom: o,
                      }),
                      (0, r.jsx)(s.P.circle, {
                        cx: u,
                        cy: m,
                        r: 5,
                        fill: "#4C419B",
                        filter: "url(#circle-blur-md)",
                        initial: { opacity: 100 },
                        animate: p
                          ? { cx: h, cy: C, opacity: 0 }
                          : { cx: u, cy: m },
                        transition: {
                          duration: b,
                          repeat: x,
                          ease: "easeInOut",
                          repeatDelay: I,
                        },
                      }),
                      (0, r.jsx)(s.P.circle, {
                        cx: u,
                        cy: m,
                        r: 9,
                        fill: "#4C419B",
                        filter: "url(#circle-blur-lg)",
                        initial: { opacity: 100 },
                        animate: p
                          ? { cx: h, cy: C, opacity: 0 }
                          : { cx: u, cy: m },
                        transition: {
                          duration: b,
                          repeat: x,
                          ease: "easeInOut",
                          repeatDelay: I,
                        },
                      }),
                      (0, r.jsx)(s.P.circle, {
                        cx: u,
                        cy: m,
                        r: 3,
                        fill: "white",
                        filter: "url(#circle-blur-sm)",
                        initial: { opacity: 100 },
                        animate: p
                          ? { cx: h, cy: C, opacity: 0 }
                          : { cx: u, cy: m },
                        transition: {
                          duration: b,
                          repeat: x,
                          ease: "easeInOut",
                          repeatDelay: I,
                        },
                      }),
                    ],
                  }),
              ],
            }),
          });
        },
        d = (e) => {
          let {
              circleType: t = "gradient",
              cx: i,
              cy: l,
              r: a,
              pulsate: d,
              connectedCirclesCoordinates: g,
              popupEmoji: p,
            } = e,
            x = 1 / 0,
            u = Number(a),
            h = d ? [10, 15, 20] : [],
            m = (0, A.useRef)(null),
            C = (0, n.W)(m, { margin: "-10% 0px -10% 0px" }),
            I = Number(i),
            b = Number(l);
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(s.P.svg, {
              className: "cursor-pointer",
              children: [
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: "gradient-fill",
                    x1: "0",
                    y1: "0",
                    x2: "100%",
                    y2: "100%",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#433DF1" }),
                      (0, r.jsx)("stop", { offset: "1", stopColor: "#EB4AF8" }),
                    ],
                  }),
                }),
                (0, r.jsx)("foreignObject", {
                  x: I,
                  y: b,
                  children: (0, r.jsx)("div", {
                    className: "h-[30px] w-[30px]",
                    ref: m,
                  }),
                }),
                C &&
                  h.map((e, t) =>
                    (0, r.jsx)(
                      s.P.circle,
                      {
                        cx: i,
                        cy: l,
                        fill: "transparent",
                        stroke: "#4C419B",
                        strokeWidth: 1,
                        opacity: 100 - 10 * t,
                        initial: { r: 0 },
                        animate: C
                          ? { r: u + e, opacity: 0 }
                          : { r: 0, opacity: 100 },
                        transition: {
                          duration: 2,
                          repeatDelay: 1,
                          repeat: x,
                          delay: h.length - t / 5,
                        },
                      },
                      "pulsating-circle-radius-".concat(e)
                    )
                  ),
                (0, r.jsx)(s.P.circle, {
                  cx: i,
                  cy: l,
                  animate: C ? { r: u } : { r: 0 },
                  fill: "border" === t ? "none" : "url(#gradient-fill)",
                  stroke: "border" === t ? "#4C419B" : void 0,
                  strokeWidth: "border" === t ? "1" : void 0,
                }),
                null == g
                  ? void 0
                  : g.map((e, t) => {
                      let {
                        x1: i,
                        x2: A,
                        y1: s,
                        y2: l,
                      } = c({ x: I, y: b, r: u }, { x: e.cx, y: e.cy, r: e.r });
                      return (0, r.jsx)(
                        o,
                        { x1: i, y1: s, x2: A, y2: l },
                        "pulsating-line-item-".concat(t)
                      );
                    }),
                (0, r.jsx)("foreignObject", {
                  x: I,
                  y: b,
                  width: "200px",
                  height: "100%",
                  overflow: "visible",
                  children: (0, r.jsx)(s.P.div, {
                    animate: C
                      ? { scale: 1, opacity: 100 }
                      : { scale: 0, opacity: 0 },
                    transition: { duration: 0.5 },
                    children: p,
                  }),
                }),
              ],
            }),
          });
        };
      var g = i(72150);
      let p = (e) => {
          let { emoji: t, text: i, position: A = "left" } = e,
            l = Math.floor(Math.random() + 1);
          return (0, r.jsx)("div", {
            children: (0, r.jsxs)("div", {
              className: "relative max-w-[200px]",
              children: [
                (0, r.jsx)("div", {
                  className: "absolute flex",
                  children: [1, 2, 3].map((e, i) =>
                    (0, r.jsx)(
                      s.P.div,
                      {
                        initial: { x: i, y: 0 },
                        transition: {
                          delay: l / (i + 1),
                          duration: 2,
                          repeatDelay: 2,
                          repeat: 1 / 0,
                        },
                        animate: { y: -100, opacity: 0, scale: 1.4 },
                        children: t,
                      },
                      "emoji-animated-".concat(i)
                    )
                  ),
                }),
                i &&
                  (0, r.jsx)("div", {
                    className: (0, g.cn)(
                      "z-1 absolute w-fit whitespace-pre rounded-[10px] bg-[#4589FF] px-4 py-[10px]",
                      {
                        "rounded-tl-none": "left" === A,
                        "rounded-tr-none": "right" === A,
                      }
                    ),
                    children: i,
                  }),
              ],
            }),
          });
        },
        x = [
          { props: { x1: 500, y1: 0, x2: 500, y2: 194.38 } },
          { props: { x1: 400, y1: 100, x2: 600, y2: 100 } },
          { props: { x1: 400, y1: 100, x2: 400, y2: 156 } },
          { props: { x1: 600, y1: 100, x2: 600, y2: 156 } },
          { props: { x1: 500, y1: 855, x2: 500, y2: 1325 } },
          { props: { x1: 352, y1: 1050, x2: 652, y2: 1050 } },
          { props: { x1: 352, y1: 1050, x2: 352, y2: 910 } },
          { props: { x1: 652, y1: 1050, x2: 652, y2: 890 } },
        ],
        u = [
          { id: 1, props: { cx: 400, cy: 174, custom: 2, r: 19, pulsate: !0 } },
          {
            id: 2,
            props: {
              cx: 600,
              cy: 174,
              custom: 2,
              r: 19,
              pulsate: !1,
              circleType: "border",
            },
          },
          {
            id: 3,
            props: {
              cx: 500,
              cy: 227,
              custom: 2,
              r: 33,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [17, 4],
            },
          },
          {
            id: 4,
            props: {
              cx: 242,
              cy: 259,
              r: 25,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [1],
            },
          },
          {
            id: 5,
            props: {
              r: 44,
              cx: 843,
              cy: 246,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [6],
            },
          },
          {
            id: 6,
            props: {
              r: 44,
              cx: 623,
              cy: 319,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [3, 2, 23],
            },
          },
          {
            id: 7,
            props: {
              r: 8,
              cx: 253,
              cy: 315,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [8, 9, 14],
            },
          },
          {
            id: 8,
            props: {
              r: 8,
              cx: 81,
              cy: 323,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [11, 14],
            },
          },
          {
            id: 9,
            props: {
              cx: 407,
              cy: 346,
              r: 32,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [17],
            },
          },
          {
            id: 10,
            props: {
              r: 8,
              cx: 881,
              cy: 348,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [5, 19],
            },
          },
          {
            id: 11,
            props: {
              cx: 41,
              cy: 428,
              r: 19,
              pulsate: !0,
              circleType: "gradient",
              popupEmoji: (0, r.jsx)(p, { emoji: "❤️" }),
            },
          },
          {
            id: 12,
            props: {
              r: 9,
              cx: 668,
              cy: 394,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [5],
              popupEmoji: (0, r.jsx)(p, { emoji: "❤️" }),
            },
          },
          {
            id: 13,
            props: {
              r: 9,
              cx: 432,
              cy: 432,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [17, 14, 20],
            },
          },
          {
            id: 14,
            props: {
              r: 9,
              cx: 218,
              cy: 453,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [18],
            },
          },
          {
            id: 16,
            props: {
              r: 9,
              cx: 926,
              cy: 431,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [10, 19],
            },
          },
          {
            id: 17,
            props: {
              r: 33,
              cx: 504,
              cy: 484,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [25, 23],
              popupEmoji: (0, r.jsx)(p, {
                emoji: "\uD83D\uDCAC",
                text: "You need to see this!",
              }),
            },
          },
          {
            id: 18,
            props: {
              r: 8,
              cx: 124,
              cy: 513,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [20, 28],
            },
          },
          {
            id: 19,
            props: {
              r: 8,
              cx: 794,
              cy: 486,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [24, 21, 23],
            },
          },
          {
            id: 20,
            props: {
              r: 29,
              cx: 189,
              cy: 540,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [28],
            },
          },
          {
            id: 21,
            props: {
              r: 8,
              cx: 683,
              cy: 531,
              pulsate: !1,
              circleType: "gradient",
            },
          },
          {
            id: 22,
            props: {
              r: 33,
              cx: 875,
              cy: 548,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [24, 27],
              popupEmoji: (0, r.jsx)(p, { emoji: "\uD83D\uDC4D" }),
            },
          },
          {
            id: 23,
            props: {
              r: 70,
              cx: 627,
              cy: 605,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [29, 33, 31, 24],
            },
          },
          {
            id: 24,
            props: {
              r: 8,
              cx: 780,
              cy: 600,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [30],
            },
          },
          {
            id: 25,
            props: {
              r: 8,
              cx: 441,
              cy: 646,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [29],
            },
          },
          {
            id: 26,
            props: {
              r: 42,
              cx: 241,
              cy: 671,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [34],
            },
          },
          {
            id: 27,
            props: {
              r: 8,
              cx: 985,
              cy: 686,
              pulsate: !1,
              circleType: "gradient",
            },
          },
          {
            id: 28,
            props: {
              r: 19,
              cx: 40,
              cy: 698,
              pulsate: !0,
              circleType: "gradient",
              popupEmoji: (0, r.jsx)(p, {
                emoji: "\uD83D\uDCAC",
                text: "Future of work is here! \uD83D\uDE80",
              }),
            },
          },
          {
            id: 29,
            props: {
              r: 8,
              cx: 445,
              cy: 763,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [34],
            },
          },
          {
            id: 30,
            props: {
              r: 25,
              cx: 910,
              cy: 760,
              pulsate: !1,
              circleType: "border",
            },
          },
          {
            id: 31,
            props: {
              r: 25,
              cx: 750,
              cy: 778,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [35],
            },
          },
          {
            id: 32,
            props: {
              r: 45,
              cx: 500,
              cy: 810,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [34, 36, 37],
            },
          },
          {
            id: 33,
            props: {
              r: 8,
              cx: 608,
              cy: 799,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [36],
            },
          },
          {
            id: 34,
            props: {
              r: 8,
              cx: 335,
              cy: 819,
              pulsate: !1,
              circleType: "gradient",
            },
          },
          {
            id: 35,
            props: {
              r: 9,
              cx: 701,
              cy: 832,
              pulsate: !0,
              circleType: "gradient",
              popupEmoji: (0, r.jsx)(p, {
                emoji: "\uD83D\uDCAC",
                text: "This is great!",
              }),
            },
          },
          {
            id: 36,
            props: {
              r: 25,
              cx: 648,
              cy: 865,
              pulsate: !1,
              circleType: "border",
            },
          },
          {
            id: 37,
            props: {
              r: 25,
              cx: 352,
              cy: 896,
              pulsate: !0,
              circleType: "gradient",
            },
          },
          {
            id: 38,
            props: {
              r: 29,
              cx: 648,
              cy: 943,
              pulsate: !0,
              circleType: "gradient",
            },
          },
        ],
        h = [
          { props: { x1: 144, y1: 0, x2: 144, y2: 155 } },
          { props: { x1: 47, y1: 70, x2: 242, y2: 70 } },
          { props: { x1: 46, y1: 69, x2: 47, y2: 115 } },
          { props: { x1: 242, y1: 69, x2: 242, y2: 97 } },
          { props: { x1: 144, y1: 730, x2: 144, y2: 1130 } },
          { props: { x1: 48, y1: 770, x2: 48, y2: 1060 } },
          { props: { x1: 236, y1: 810, x2: 236, y2: 1060 } },
          { props: { x1: 48, y1: 1060, x2: 236, y2: 1060 } },
        ],
        m = [
          {
            id: 1,
            props: {
              cx: 47,
              cy: 115,
              r: 19,
              custom: 2,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [5],
            },
          },
          {
            id: 2,
            props: {
              cx: 242,
              cy: 115,
              r: 19,
              custom: 2,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [4],
            },
          },
          {
            id: 3,
            props: {
              cx: 145,
              cy: 188,
              custom: 2,
              r: 33,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [5, 9],
            },
          },
          {
            id: 4,
            props: {
              cx: 242,
              cy: 186,
              r: 4,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [7],
            },
          },
          {
            id: 5,
            props: {
              cx: 51,
              cy: 222,
              r: 10,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [6, 8],
            },
          },
          {
            id: 6,
            props: {
              cx: 10,
              cy: 257,
              r: 6,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [8],
            },
          },
          {
            id: 7,
            props: {
              cx: 261,
              cy: 252,
              r: 10,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [10, 13],
            },
          },
          {
            id: 8,
            props: {
              cx: 74,
              cy: 296,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [9, 11],
            },
          },
          {
            id: 9,
            props: {
              cx: 140,
              cy: 310,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [11],
            },
          },
          {
            id: 10,
            props: {
              cx: 185,
              cy: 338,
              r: 9,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [13],
              popupEmoji: (0, r.jsx)(p, { emoji: "❤️" }),
            },
          },
          {
            id: 11,
            props: {
              cx: 73,
              cy: 363,
              r: 4,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [14, 17],
            },
          },
          {
            id: 12,
            props: {
              cx: 273,
              cy: 364,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [13],
            },
          },
          {
            id: 13,
            props: {
              cx: 249,
              cy: 372,
              r: 6,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [15, 16],
            },
          },
          {
            id: 14,
            props: {
              cx: 38,
              cy: 385,
              r: 19,
              pulsate: !0,
              circleType: "gradient",
              popupEmoji: (0, r.jsx)(p, { emoji: "\uD83D\uDC4D" }),
            },
          },
          {
            id: 15,
            props: {
              cx: 216,
              cy: 404,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [16],
            },
          },
          {
            id: 16,
            props: {
              cx: 259,
              cy: 451,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [17, 18],
            },
          },
          {
            id: 17,
            props: {
              cx: 142,
              cy: 466,
              r: 33,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [20],
              popupEmoji: (0, r.jsx)(p, {
                emoji: "\uD83D\uDCAC",
                text: "You need to \nsee this!",
                position: "left",
              }),
            },
          },
          {
            id: 18,
            props: {
              cx: 208,
              cy: 547,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [21],
            },
          },
          {
            id: 19,
            props: {
              cx: 24,
              cy: 555,
              r: 10,
              pulsate: !1,
              circleType: "border",
              connectedCirclesIds: [20, 24],
            },
          },
          {
            id: 20,
            props: {
              cx: 94,
              cy: 574,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [22, 24],
            },
          },
          {
            id: 21,
            props: {
              cx: 245,
              cy: 610,
              r: 9,
              pulsate: !0,
              circleType: "gradient",
              connectedCirclesIds: [23],
            },
          },
          {
            id: 22,
            props: {
              cx: 97,
              cy: 627,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
            },
          },
          {
            id: 23,
            props: {
              cx: 142,
              cy: 692,
              r: 38.5,
              pulsate: !0,
              circleType: "gradient",
            },
          },
          {
            id: 24,
            props: {
              cx: 17,
              cy: 695,
              r: 4,
              pulsate: !1,
              circleType: "gradient",
              connectedCirclesIds: [25],
            },
          },
          {
            id: 25,
            props: {
              cx: 48,
              cy: 761,
              r: 16,
              pulsate: !0,
              circleType: "gradient",
              popupEmoji: (0, r.jsx)(p, {
                emoji: "\uD83D\uDCAC",
                text: "This is great!",
              }),
            },
          },
          {
            id: 26,
            props: {
              cx: 236,
              cy: 802,
              r: 25,
              pulsate: !0,
              circleType: "gradient",
            },
          },
        ],
        C = () =>
          (0, r.jsxs)(s.P.svg, {
            width: "100%",
            height: "1325",
            viewBox: "0 0 1000 1325",
            className: "h-[1325px] w-full",
            children: [
              x.map((e, t) =>
                (0, A.createElement)(o, {
                  ...e.props,
                  key: "pulsating-line-".concat(t),
                })
              ),
              u.map((e, t) => {
                let i = u.filter((t) => {
                  var i;
                  let r =
                    null === (i = e.props) || void 0 === i
                      ? void 0
                      : i.connectedCirclesIds;
                  return null == r ? void 0 : r.includes(t.id);
                });
                return (0, A.createElement)(d, {
                  connectedCirclesCoordinates: i.map((e) => {
                    var t, i, r;
                    return {
                      cx: Number(
                        null === (t = e.props) || void 0 === t ? void 0 : t.cx
                      ),
                      cy: Number(
                        null === (i = e.props) || void 0 === i ? void 0 : i.cy
                      ),
                      r: Number(
                        null === (r = e.props) || void 0 === r ? void 0 : r.r
                      ),
                    };
                  }),
                  ...e.props,
                  id: e.id.toString(),
                  key: "pulsating-cirlce-".concat(t),
                });
              }),
            ],
          }),
        I = () =>
          (0, r.jsxs)(s.P.svg, {
            width: "288px",
            height: "1130",
            viewBox: "0 0 288 1130",
            className: "h-[1130px] w-full",
            children: [
              h.map((e, t) =>
                (0, A.createElement)(o, {
                  ...e.props,
                  key: "pulsating-line-mobile-".concat(t),
                })
              ),
              m.map((e, t) => {
                let i = m.filter((t) => {
                  var i;
                  let r =
                    null === (i = e.props) || void 0 === i
                      ? void 0
                      : i.connectedCirclesIds;
                  return null == r ? void 0 : r.includes(t.id);
                });
                return (0, A.createElement)(d, {
                  connectedCirclesCoordinates: i.map((e) => {
                    var t, i, r;
                    return {
                      cx: Number(
                        null === (t = e.props) || void 0 === t ? void 0 : t.cx
                      ),
                      cy: Number(
                        null === (i = e.props) || void 0 === i ? void 0 : i.cy
                      ),
                      r: Number(
                        null === (r = e.props) || void 0 === r ? void 0 : r.r
                      ),
                    };
                  }),
                  ...e.props,
                  id: e.id.toString(),
                  key: "pulsating-cirlce-mobile-".concat(t),
                });
              }),
            ],
          }),
        b = (function (e, t) {
          let { rootMargin: i = "0px", threshold: A = 0.1 } = t || {};
          return (t) => {
            let { ref: s, inView: a } = (0, l.Wx)({
              rootMargin: i,
              threshold: A,
            });
            return (0, r.jsx)("div", {
              ref: s,
              className: "w-auto",
              children: a && (0, r.jsx)(e, { ...t }),
            });
          };
        })(
          () => {
            let e = (0, a.dv)();
            return (0, r.jsxs)("div", {
              className: "relative flex w-full justify-center align-middle",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute left-0 top-0 z-20 h-[100px] w-full bg-gradient-to-b from-black",
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute bottom-0 left-0 z-20 h-[150px] w-full bg-gradient-to-t from-black",
                }),
                (0, r.jsx)("div", {
                  className: "h-[1325px] w-full max-w-[1000px] max-md:hidden",
                  children: e.md && (0, r.jsx)(C, {}),
                }),
                (0, r.jsx)("div", {
                  className:
                    "relative h-[1130px] w-full max-w-[288px] md:hidden",
                  children: !e.md && (0, r.jsx)(I, {}),
                }),
              ],
            });
          },
          { rootMargin: "1130px", threshold: 0.1 }
        );
    },
    95777: (e, t, i) => {
      "use strict";
      i.d(t, { dv: () => s, W3: () => l, Mj: () => a, iA: () => n });
      var r = i(12115);
      let A = {
          sm: 425,
          md: 768,
          "md-plus": 875,
          lg: 1024,
          "lg-plus": 1200,
          xl: 1280,
          "2xl": 1536,
        },
        s = () => {
          let [e, t] = (0, r.useState)(() =>
            Object.keys(A).reduce((e, t) => ((e[t] = !1), e), {})
          );
          return (
            (0, r.useEffect)(() => {
              let e = () => {
                let e = window.innerWidth;
                t(Object.keys(A).reduce((t, i) => ((t[i] = e >= A[i]), t), {}));
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
        l = (e) => {
          let { refs: t, onClickAway: i } = e;
          (0, r.useEffect)(() => {
            let e = (e) => {
              for (let i = 0; i < t.length; i++) {
                let r = t[i];
                if (r.current && r.current.contains(e.target)) return;
              }
              i();
            };
            return (
              document.addEventListener("click", e),
              () => {
                document.removeEventListener("click", e);
              }
            );
          }, [t, i]);
        };
      function a(e, t) {
        let i = localStorage.getItem(e),
          [A, s] = (0, r.useState)(i ? JSON.parse(i) : t);
        return (
          (0, r.useEffect)(() => {}, [t, e]),
          [
            A,
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
      let n = () => {
        let [e, t] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
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
    e.O(
      0,
      [
        2167, 2820, 7820, 4609, 5992, 7097, 6307, 6951, 3131, 6567, 8441, 1684,
        7358,
      ],
      () => t(83271)
    ),
      (_N_E = e.O());
  },
]);
