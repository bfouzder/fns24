﻿+function (e, f, b, j, c, i, k) {/*! Jssor */
    new (function () {
    });
    var d = e.$JssorEasing$ = {Bc:function (a) {
        return-b.cos(a * b.PI) / 2 + .5
    }, pd:function (a) {
        return a
    }, Jf:function (a) {
        return a * a
    }, Xc:function (a) {
        return-a * (a - 2)
    }, If:function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
    }, Hf:function (a) {
        return a * a * a
    }, Gf:function (a) {
        return(a -= 1) * a * a + 1
    }, Ff:function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
    }, Lf:function (a) {
        return a * a * a * a
    }, Ef:function (a) {
        return-((a -= 1) * a * a * a - 1)
    }, Cf:function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
    }, Bf:function (a) {
        return a * a * a * a * a
    }, Af:function (a) {
        return(a -= 1) * a * a * a * a + 1
    }, zf:function (a) {
        return(a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
    }, yf:function (a) {
        return 1 - b.cos(a * b.PI / 2)
    }, xf:function (a) {
        return b.sin(a * b.PI / 2)
    }, Df:function (a) {
        return-1 / 2 * (b.cos(b.PI * a) - 1)
    }, Nf:function (a) {
        return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
    }, Vf:function (a) {
        return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
    }, Of:function (a) {
        return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
    }, cg:function (a) {
        return-(b.sqrt(1 - a * a) - 1)
    }, bg:function (a) {
        return b.sqrt(1 - (a -= 1) * a)
    }, ag:function (a) {
        return(a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
    }, Zf:function (a) {
        if (!a || a == 1)return a;
        var c = .3, d = .075;
        return-(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
    }, Yf:function (a) {
        if (!a || a == 1)return a;
        var c = .3, d = .075;
        return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
    }, Xf:function (a) {
        if (!a || a == 1)return a;
        var c = .45, d = .1125;
        return(a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
    }, dg:function (a) {
        var b = 1.70158;
        return a * a * ((b + 1) * a - b)
    }, Wf:function (a) {
        var b = 1.70158;
        return(a -= 1) * a * ((b + 1) * a + b) + 1
    }, Uf:function (a) {
        var b = 1.70158;
        return(a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
    }, ed:function (a) {
        return 1 - d.Cc(1 - a)
    }, Cc:function (a) {
        return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
    }, Tf:function (a) {
        return a < 1 / 2 ? d.ed(a * 2) * .5 : d.Cc(a * 2 - 1) * .5 + .5
    }, Sf:function () {
        return 1 - b.abs(1)
    }, Rf:function (a) {
        return 1 - b.cos(a * b.PI * 2)
    }, Qf:function (a) {
        return b.sin(a * b.PI * 2)
    }, Pf:function (a) {
        return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
    }, wf:function (a) {
        return(a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
    }}, g = e.$Jease$ = {Mf:d.Bc, vf:d.pd, bf:d.Jf, Ze:d.Xc, Ye:d.If, Xe:d.Hf, We:d.Gf, Ve:d.Ff, Ue:d.Lf, af:d.Ef, Te:d.Cf, Re:d.Bf, Qe:d.Af, Pe:d.zf, Oe:d.yf, Ne:d.xf, Me:d.Df, Se:d.Nf, cf:d.Vf, lf:d.Of, df:d.cg, sf:d.bg, rf:d.ag, qf:d.Zf, pf:d.Yf, of:d.Xf, nf:d.dg, tf:d.Wf, mf:d.Uf, kf:d.ed, jf:d.Cc, hf:d.Tf, gf:d.Sf, fg:d.Rf, ef:d.Qf, uf:d.Pf, eg:d.wf};
    e.$JssorDirection$ = {};
    var a = e.$Jssor$ = new function () {
        var g = this, Ab = /\S+/g, S = 1, tb = 2, Z = 3, wb = 4, db = 5, I, s = 0, l = 0, q = 0, J = 0, C = 0, B = navigator, ib = B.appName, n = B.userAgent;

        function Jb() {
            if (!I) {
                I = {Pg:"ontouchstart"in e || "createTouch"in f};
                var a;
                if (B.pointerEnabled || (a = B.msPointerEnabled))I.sd = a ? "msTouchAction" : "touchAction"
            }
            return I
        }

        function t(i) {
            if (!s) {
                s = -1;
                if (ib == "Microsoft Internet Explorer" && !!e.attachEvent && !!e.ActiveXObject) {
                    var g = n.indexOf("MSIE");
                    s = S;
                    q = o(n.substring(g + 5, n.indexOf(";", g)));
                    /*@cc_on J=@_jscript_version@*/
                    ;
                    l = f.documentMode || q
                } else if (ib == "Netscape" && !!e.addEventListener) {
                    var d = n.indexOf("Firefox"), b = n.indexOf("Safari"), h = n.indexOf("Chrome"), c = n.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = tb;
                        l = o(n.substring(d + 8))
                    } else if (b >= 0) {
                        var j = n.substring(0, b).lastIndexOf("/");
                        s = h >= 0 ? wb : Z;
                        l = o(n.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
                        if (a) {
                            s = S;
                            l = q = o(a[1])
                        }
                    }
                    if (c >= 0)C = o(n.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
                    if (a) {
                        s = db;
                        l = o(a[2])
                    }
                }
            }
            return i == s
        }

        function p() {
            return t(S)
        }

        function N() {
            return p() && (l < 6 || f.compatMode == "BackCompat")
        }

        function vb() {
            return t(Z)
        }

        function cb() {
            return t(db)
        }

        function ob() {
            return vb() && C > 534 && C < 535
        }

        function L() {
            return p() && l < 9
        }

        function qb(a) {
            var b;
            return function (d) {
                if (!b) {
                    b = a;
                    var c = a.substr(0, 1).toUpperCase() + a.substr(1);
                    m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function (g, f) {
                        var e = a;
                        if (f)e = g + c;
                        if (d.style[e] != k)return b = e
                    })
                }
                return b
            }
        }

        var pb = qb("transform");

        function hb(a) {
            return{}.toString.call(a)
        }

        var H;

        function Gb() {
            if (!H) {
                H = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function (a) {
                    H["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return H
        }

        function m(a, d) {
            if (hb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)if (d(a[b], b, a))return c
            } else for (var e in a)if (d(a[e], e, a))return c
        }

        function z(a) {
            return a == j ? String(a) : Gb()[hb(a)] || "object"
        }

        function fb(a) {
            for (var b in a)return c
        }

        function x(a) {
            try {
                return z(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {
            }
        }

        function w(a, b) {
            return{x:a, y:b}
        }

        function lb(b, a) {
            setTimeout(b, a || 0)
        }

        function F(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function (c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index), e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function sb(b, a) {
            if (l < 9)b.style.filter = a
        }

        function Cb(f, a, i) {
            if (!J || J < 9) {
                var d = a.kb, e = a.lb, j = (a.q || 0) % 360, h = "";
                if (j || d != k || e != k) {
                    if (d == k)d = 1;
                    if (e == k)e = 1;
                    var c = g.Ug(j / 180 * b.PI, d || 1, e || 1), i = g.Sg(c, a.U, a.W);
                    g.Rg(f, i.y);
                    g.Qg(f, i.x);
                    h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')"
                }
                var m = f.style.filter, n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g), l = F(m, [n], h);
                sb(f, l)
            }
        }

        g.Og = Jb;
        g.Dd = p;
        g.Jg = vb;
        g.pc = cb;
        g.Z = L;
        g.ud = function () {
            return l
        };
        g.ig = function () {
            t();
            return C
        };
        g.L = lb;
        function V(a) {
            a.constructor === V.caller && a.Bd && a.Bd.apply(a, V.caller.arguments)
        }

        g.Bd = V;
        g.rb = function (a) {
            if (g.Fd(a))a = f.getElementById(a);
            return a
        };
        function r(a) {
            return a || e.event
        }

        g.Hd = r;
        g.rc = function (a) {
            a = r(a);
            return a.target || a.srcElement || f
        };
        g.Kd = function (a) {
            a = r(a);
            return{x:a.pageX || a.clientX || 0, y:a.pageY || a.clientY || 0}
        };
        function A(c, d, a) {
            if (a !== k)c.style[d] = a == k ? "" : a; else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && e.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a != k) {
                if (a == j)a = ""; else d && (a += "px");
                A(b, c, a)
            } else return o(A(b, c))
        }

        function h(c, a) {
            var d = a ? X : A, b;
            if (a & 4)b = qb(c);
            return function (e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Db(b) {
            if (p() && q < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? o(a[1]) / 100 : 1
            } else return o(b.style.opacity || "1")
        }

        function Fb(c, a, f) {
            if (p() && q < 9) {
                var h = c.style.filter || "", i = new RegExp(/[\s]*alpha\([^\)]*\)/g), e = b.round(100 * a), d = "";
                if (e < 100 || f)d = "alpha(opacity=" + e + ") ";
                var g = F(h, [i], d);
                sb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }

        var yb = {q:["rotate"], yb:["rotateX"], xb:["rotateY"], kb:["scaleX", 2], lb:["scaleY", 2], Wb:["translateX", 1], Lb:["translateY", 1], Nb:["translateZ", 1], Vb:["skewX"], Ub:["skewY"]};

        function nb(e, c) {
            if (p() && l && l < 10) {
                delete c.yb;
                delete c.xb
            }
            var d = pb(e);
            if (d) {
                var b = "";
                a.c(c, function (e, c) {
                    var a = yb[c];
                    if (a) {
                        var d = a[1] || 0;
                        b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
                    }
                });
                e.style[d] = b
            }
        }

        g.mg = function (b, a) {
            if (ob())lb(g.F(j, nb, b, a)); else(L() ? Cb : nb)(b, a)
        };
        g.Tc = h("transformOrigin", 4);
        g.ng = h("backfaceVisibility", 4);
        g.og = h("transformStyle", 4);
        g.qg = h("perspective", 6);
        g.gg = h("perspectiveOrigin", 4);
        g.sg = function (a, c) {
            if (p() && q < 9 || q < 10 && N())a.style.zoom = c == 1 ? "" : c; else {
                var b = pb(a);
                if (b) {
                    var f = "scale(" + c + ")", e = a.style[b], g = new RegExp(/[\s]*scale\(.*?\)/g), d = F(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        var bb = 0, ub = 0;
        g.tg = function (b, a) {
            return L() ? function () {
                var g = c, d = N() ? b.document.body : b.document.documentElement;
                if (d) {
                    var f = d.offsetWidth - bb, e = d.offsetHeight - ub;
                    if (f || e) {
                        bb += f;
                        ub += e
                    } else g = i
                }
                g && a()
            } : a
        };
        g.Kb = function (b, a) {
            return function (c) {
                c = r(c);
                var e = c.type, d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !g.ug(a, d)) && b(c)
            }
        };
        g.e = function (a, d, b, c) {
            a = g.rb(a);
            if (a.addEventListener) {
                d == "mousewheel" && a.addEventListener("DOMMouseScroll", b, c);
                a.addEventListener(d, b, c)
            } else if (a.attachEvent) {
                a.attachEvent("on" + d, b);
                c && a.setCapture && a.setCapture()
            }
        };
        g.N = function (a, c, d, b) {
            a = g.rb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        g.Yb = function (a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = i
        };
        g.vg = function (a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        g.F = function (d, c) {
            var a = [].slice.call(arguments, 2), b = function () {
                var b = a.concat([].slice.call(arguments, 0));
                return c.apply(d, b)
            };
            return b
        };
        g.wg = function (a, b) {
            if (b == k)return a.textContent || a.innerText;
            var c = f.createTextNode(b);
            g.tc(a);
            a.appendChild(c)
        };
        g.O = function (d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };
        function gb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (R(a, b) == c)return a;
                if (!e) {
                    var d = gb(a, c, e, b);
                    if (d)return d
                }
            }
        }

        g.z = gb;
        function P(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)if (a.nodeType == 1) {
                R(a, b) == d && c.push(a);
                if (!f) {
                    var e = P(a, d, f, b);
                    if (e.length)c = c.concat(e)
                }
            }
            return c
        }

        function ab(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)if (a.nodeType == 1) {
                if (a.tagName == c)return a;
                if (!d) {
                    var b = ab(a, c, d);
                    if (b)return b
                }
            }
        }

        g.zg = ab;
        function rb(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)if (a.nodeType == 1) {
                (!c || a.tagName == c) && b.push(a);
                if (!e) {
                    var d = rb(a, c, e);
                    if (d.length)b = b.concat(d)
                }
            }
            return b
        }

        g.yg = rb;
        g.xg = function (b, a) {
            return b.getElementsByTagName(a)
        };
        function y() {
            var e = arguments, d, c, b, a, g = 1 & e[0], f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)if (c = e[f])for (b in c) {
                a = c[b];
                if (a !== k) {
                    a = c[b];
                    var h = d[b];
                    d[b] = g && (x(h) || x(a)) ? y(g, {}, h, a) : a
                }
            }
            return d
        }

        g.n = y;
        function W(f, g) {
            var d = {}, c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (x(a) && x(b)) {
                        a = W(a, b);
                        e = !fb(a)
                    }
                    !e && (d[c] = a)
                }
            }
            return d
        }

        g.Qc = function (a) {
            return z(a) == "function"
        };
        g.vc = function (a) {
            return z(a) == "array"
        };
        g.Fd = function (a) {
            return z(a) == "string"
        };
        g.Pb = function (a) {
            return!isNaN(o(a)) && isFinite(a)
        };
        g.c = m;
        g.rg = x;
        function O(a) {
            return f.createElement(a)
        }

        g.tb = function () {
            return O("DIV")
        };
        g.lg = function () {
            return O("SPAN")
        };
        g.Pc = function () {
        };
        function T(b, c, a) {
            if (a == k)return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function R(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }

        g.v = T;
        g.i = R;
        function u(b, a) {
            if (a == k)return b.className;
            b.className = a
        }

        g.hd = u;
        function kb(b) {
            var a = {};
            m(b, function (b) {
                a[b] = b
            });
            return a
        }

        function mb(b, a) {
            return b.match(a || Ab)
        }

        function M(b, a) {
            return kb(mb(b || "", a))
        }

        g.jg = mb;
        function Y(b, c) {
            var a = "";
            m(c, function (c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            u(a, Y(" ", y(W(M(u(a)), M(c)), M(b))))
        }

        g.Yc = function (a) {
            return a.parentNode
        };
        g.R = function (a) {
            g.nb(a, "none")
        };
        g.C = function (a, b) {
            g.nb(a, b ? "none" : "")
        };
        g.hg = function (b, a) {
            b.removeAttribute(a)
        };
        g.Dg = function () {
            return p() && l < 10
        };
        g.Eg = function (d, c) {
            if (c)d.style.clip = "rect(" + b.round(c.f) + "px " + b.round(c.o) + "px " + b.round(c.p) + "px " + b.round(c.g) + "px)"; else {
                var g = d.style.cssText, f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)], e = F(g, f, "");
                a.Ib(d, e)
            }
        };
        g.eb = function () {
            return+new Date
        };
        g.I = function (b, a) {
            b.appendChild(a)
        };
        g.ac = function (b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        g.Bb = function (a, b) {
            (b || a.parentNode).removeChild(a)
        };
        g.Wd = function (a, b) {
            m(a, function (a) {
                g.Bb(a, b)
            })
        };
        g.tc = function (a) {
            g.Wd(g.O(a, c), a)
        };
        g.Xd = function (a, b) {
            var c = g.Yc(a);
            b & 1 && g.D(a, (g.j(c) - g.j(a)) / 2);
            b & 2 && g.E(a, (g.l(c) - g.l(a)) / 2)
        };
        g.Tb = function (b, a) {
            return parseInt(b, a || 10)
        };
        var o = parseFloat;
        g.xc = o;
        g.ug = function (b, a) {
            var c = f.body;
            while (a && b !== a && c !== a)try {
                a = a.parentNode
            } catch (d) {
                return i
            }
            return b === a
        };
        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && g.hg(a, "id");
            return a
        }

        g.hb = U;
        g.Eb = function (e, f) {
            var a = new Image;

            function b(e, c) {
                g.N(a, "load", b);
                g.N(a, "abort", d);
                g.N(a, "error", d);
                f && f(a, c)
            }

            function d(a) {
                b(a, c)
            }

            if (cb() && l < 11.6 || !e)b(!e); else {
                g.e(a, "load", b);
                g.e(a, "abort", d);
                g.e(a, "error", d);
                a.src = e
            }
        };
        g.ae = function (d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src)a = b;
                !c && e && e(a)
            }

            m(d, function (a) {
                g.Eb(a.src, b)
            });
            b()
        };
        g.Sc = function (b, g, i, h) {
            if (h)b = U(b);
            var c = P(b, g);
            if (!c.length)c = a.xg(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f], e = U(i);
                u(e, u(d));
                a.Ib(e, d.style.cssText);
                a.ac(e, d);
                a.Bb(d)
            }
            return b
        };
        function Hb(b) {
            var l = this, p = "", r = ["av", "pv", "ds", "dn"], e = [], q, j = 0, h = 0, d = 0;

            function i() {
                E(b, q, e[d || j || h & 2 || h]);
                a.gb(b, "pointer-events", d ? "none" : "")
            }

            function c() {
                j = 0;
                i();
                g.N(f, "mouseup", c);
                g.N(f, "touchend", c);
                g.N(f, "touchcancel", c)
            }

            function o(a) {
                if (d)g.Yb(a); else {
                    j = 4;
                    i();
                    g.e(f, "mouseup", c);
                    g.e(f, "touchend", c);
                    g.e(f, "touchcancel", c)
                }
            }

            l.jd = function (a) {
                if (a === k)return h;
                h = a & 2 || a & 1;
                i()
            };
            l.md = function (a) {
                if (a === k)return!d;
                d = a ? 0 : 3;
                i()
            };
            l.K = b = g.rb(b);
            var n = a.jg(u(b));
            if (n)p = n.shift();
            m(r, function (a) {
                e.push(p + a)
            });
            q = Y(" ", e);
            e.unshift("");
            g.e(b, "mousedown", o);
            g.e(b, "touchstart", o)
        }

        g.Ob = function (a) {
            return new Hb(a)
        };
        g.gb = A;
        g.ub = h("overflow");
        g.E = h("top", 2);
        g.D = h("left", 2);
        g.j = h("width", 2);
        g.l = h("height", 2);
        g.Qg = h("marginLeft", 2);
        g.Rg = h("marginTop", 2);
        g.B = h("position");
        g.nb = h("display");
        g.G = h("zIndex", 1);
        g.Cb = function (b, a, c) {
            if (a != k)Fb(b, a, c); else return Db(b)
        };
        g.Ib = function (a, b) {
            if (b != k)a.style.cssText = b; else return a.style.cssText
        };
        var Q = {s:g.Cb, f:g.E, g:g.D, P:g.j, S:g.l, vb:g.B, Q:g.G}, K;

        function G() {
            if (!K)K = y({a:g.Eg, A:g.mg}, Q);
            return K
        }

        function eb() {
            var a = {};
            a.A = a.A;
            a.A = a.q;
            a.A = a.yb;
            a.A = a.xb;
            a.A = a.Vb;
            a.A = a.Ub;
            a.A = a.Wb;
            a.A = a.Lb;
            a.A = a.Nb;
            return G()
        }

        g.qe = G;
        g.Md = eb;
        g.me = function (c, b) {
            G();
            var a = {};
            m(b, function (d, b) {
                if (Q[b])a[b] = Q[b](c)
            });
            return a
        };
        g.bb = function (c, b) {
            var a = G();
            m(b, function (d, b) {
                a[b] && a[b](c, d)
            })
        };
        g.ke = function (b, a) {
            eb();
            g.bb(b, a)
        };
        var D = new function () {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)for (var k = f[c] = [], b = 0; b < h; b++) {
                    for (var e = 0, a = 0; a < j; a++)e += d[c][a] * g[a][b];
                    k[b] = e
                }
                return f
            }

            a.kb = function (b, c) {
                return a.Ad(b, c, 0)
            };
            a.lb = function (b, c) {
                return a.Ad(b, 0, c)
            };
            a.Ad = function (a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.Rb = function (d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return w(a[0][0], a[1][0])
            }
        };
        g.Ug = function (d, a, c) {
            var e = b.cos(d), f = b.sin(d);
            return[
                [e * a, -f * c],
                [f * a, e * c]
            ]
        };
        g.Sg = function (d, c, a) {
            var e = D.Rb(d, w(-c / 2, -a / 2)), f = D.Rb(d, w(c / 2, -a / 2)), g = D.Rb(d, w(c / 2, a / 2)), h = D.Rb(d, w(-c / 2, a / 2));
            return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        var zb = {k:1, kb:1, lb:1, q:0, yb:0, xb:0, Wb:0, Lb:0, Nb:0, Vb:0, Ub:0};
        g.qc = function (b) {
            var c = b || {};
            if (b)if (a.Qc(b))c = {pb:c}; else if (a.Qc(b.a))c.a = {pb:b.a};
            return c
        };
        function jb(c, a) {
            var b = {};
            m(c, function (c, d) {
                var e = c;
                if (a[d] != k)if (g.Pb(c))e = c + a[d]; else e = jb(c, a[d]);
                b[d] = e
            });
            return b
        }

        g.ge = jb;
        g.rd = function (h, i, w, n, y, z, o) {
            var c = i;
            if (h) {
                c = {};
                for (var g in i) {
                    var A = z[g] || 1, v = y[g] || [0, 1], e = (w - v[0]) / v[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * A;
                    var u = b.floor(e);
                    if (e != u)e -= u;
                    var l = n.pb || d.Bc, m, B = h[g], q = i[g];
                    if (a.Pb(q)) {
                        l = n[g] || l;
                        var x = l(e);
                        m = B + q * x
                    } else {
                        m = a.n({Gb:{}}, h[g]);
                        a.c(q.Gb || q, function (d, a) {
                            if (n.a)l = n.a[a] || n.a.pb || l;
                            var c = l(e), b = d * c;
                            m.Gb[a] = b;
                            m[a] += b
                        })
                    }
                    c[g] = m
                }
                var t, f = {U:o.U, W:o.W};
                a.c(zb, function (d, a) {
                    t = t || i[a];
                    var b = c[a];
                    if (b != k) {
                        if (b != d)f[a] = b;
                        delete c[a]
                    } else if (h[a] != k && h[a] != d)f[a] = h[a]
                });
                if (i.k && f.k) {
                    f.kb = f.k;
                    f.lb = f.k
                }
                c.A = f
            }
            if (i.a && o.Y) {
                var p = c.a.Gb, s = (p.f || 0) + (p.p || 0), r = (p.g || 0) + (p.o || 0);
                c.g = (c.g || 0) + r;
                c.f = (c.f || 0) + s;
                c.a.g -= r;
                c.a.o -= r;
                c.a.f -= s;
                c.a.p -= s
            }
            if (c.a && a.Dg() && !c.a.f && !c.a.g && c.a.o == o.U && c.a.p == o.W)c.a = j;
            return c
        }
    };

    function m() {
        var b = this, d = [];

        function i(a, b) {
            d.push({uc:a, Dc:b})
        }

        function h(b, c) {
            a.c(d, function (a, e) {
                a.uc == b && a.Dc === c && d.splice(e, 1)
            })
        }

        b.Fb = b.addEventListener = i;
        b.removeEventListener = h;
        b.m = function (b) {
            var c = [].slice.call(arguments, 1);
            a.c(d, function (a) {
                a.uc == b && a.Dc.apply(e, c)
            })
        }
    }

    var l = e.$JssorAnimator$ = function (y, C, k, O, L, K) {
        y = y || 0;
        var d = this, q, n, o, u, z = 0, G, H, F, B, x = 0, h = 0, m = 0, D, l, g, f, p, w = [], A;

        function N(a) {
            g += a;
            f += a;
            l += a;
            h += a;
            m += a;
            x += a
        }

        function t(n) {
            var e = n;
            if (p && (e >= f || e <= g))e = ((e - g) % p + p) % p + g;
            if (!D || u || h != e) {
                var i = b.min(e, f);
                i = b.max(i, g);
                if (!D || u || i != m) {
                    if (K) {
                        var j = (i - l) / (C || 1);
                        if (k.Kc)j = 1 - j;
                        var o = a.rd(L, K, j, G, F, H, k);
                        a.c(o, function (b, a) {
                            A[a] && A[a](O, b)
                        })
                    }
                    d.Ic(m - l, i - l);
                    m = i;
                    a.c(w, function (b, c) {
                        var a = n < h ? w[w.length - c - 1] : b;
                        a.u(m - x)
                    });
                    var r = h, q = m;
                    h = e;
                    D = c;
                    d.Jb(r, q)
                }
            }
        }

        function E(a, c, d) {
            c && a.M(f);
            if (!d) {
                g = b.min(g, a.Mc() + x);
                f = b.max(f, a.X() + x)
            }
            w.push(a)
        }

        var r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame;
        if (a.Jg() && a.ud() < 7)r = j;
        r = r || function (b) {
            a.L(b, k.cb)
        };
        function I() {
            if (q) {
                var d = a.eb(), e = b.min(d - z, k.Rc), c = h + e * o;
                z = d;
                if (c * o >= n * o)c = n;
                t(c);
                if (!u && c * o >= n * o)J(B); else r(I)
            }
        }

        function s(e, i, j) {
            if (!q) {
                q = c;
                u = j;
                B = i;
                e = b.max(e, g);
                e = b.min(e, f);
                n = e;
                o = n < h ? -1 : 1;
                d.Jd();
                z = a.eb();
                r(I)
            }
        }

        function J(a) {
            if (q) {
                u = q = B = i;
                d.ad();
                a && a()
            }
        }

        d.Zc = function (a, b, c) {
            s(a ? h + a : f, b, c)
        };
        d.Cd = s;
        d.mb = J;
        d.de = function (a) {
            s(a)
        };
        d.ab = function () {
            return h
        };
        d.Ld = function () {
            return n
        };
        d.Hb = function () {
            return m
        };
        d.u = t;
        d.Y = function (a) {
            t(h + a)
        };
        d.vd = function () {
            return q
        };
        d.je = function (a) {
            p = a
        };
        d.M = N;
        d.H = function (a, b) {
            E(a, 0, b)
        };
        d.lc = function (a) {
            E(a, 1)
        };
        d.le = function (a) {
            f += a
        };
        d.Mc = function () {
            return g
        };
        d.X = function () {
            return f
        };
        d.Jb = d.Jd = d.ad = d.Ic = a.Pc;
        d.nc = a.eb();
        k = a.n({cb:16, Rc:50}, k);
        p = k.Nd;
        A = a.n({}, a.qe(), k.oc);
        g = l = y;
        f = y + C;
        H = k.ec || {};
        F = k.cc || {};
        G = a.qc(k.J)
    };
    var o = e.$JssorSlideshowFormations$ = new function () {
        var h = this;

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }

        h.Fe = function (d) {
            for (var e = [], a, c = 0; c < d.V; c++)for (a = 0; a < d.r; a++)g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        }
    };
    e.$JssorSlideshowRunner$ = function (n, s, q, t, y) {
        var f = this, u, g, e, x = 0, w = t.eh, r, h = 8;

        function k(g, f) {
            var e = {cb:f, bc:1, L:0, r:1, V:1, s:0, k:0, a:0, Y:i, sc:i, Kc:i, ye:o.Fe, ld:{xe:0, we:0}, J:d.Bc, ec:{}, dc:[], cc:{}};
            a.n(e, g);
            e.J = a.qc(e.J);
            e.ce = b.ceil(e.bc / e.cb);
            e.Ae = function (b, a) {
                b /= e.r;
                a /= e.V;
                var f = b + "x" + a;
                if (!e.dc[f]) {
                    e.dc[f] = {P:b, S:a};
                    for (var c = 0; c < e.r; c++)for (var d = 0; d < e.V; d++)e.dc[f][d + "," + c] = {f:d * a, o:c * b + b, p:d * a + a, g:c * b}
                }
                return e.dc[f]
            };
            if (e.wc) {
                e.wc = k(e.wc, f);
                e.sc = c
            }
            return e
        }

        function p(A, h, d, v, n, l) {
            var y = this, t, u = {}, j = {}, m = [], f, e, r, p = d.ld.xe || 0, q = d.ld.we || 0, g = d.Ae(n, l), o = B(d), C = o.length - 1, s = d.bc + d.L * C, w = v + s, k = d.sc, x;
            w += 50;
            function B(a) {
                var b = a.ye(a);
                return a.Kc ? b.reverse() : b
            }

            y.bd = w;
            y.fc = function (c) {
                c -= v;
                var e = c < s;
                if (e || x) {
                    x = e;
                    if (!k)c = s - c;
                    var f = b.ceil(c / d.cb);
                    a.c(j, function (c, e) {
                        var d = b.max(f, c.Sd);
                        d = b.min(d, c.length - 1);
                        if (c.id != d) {
                            if (!c.id && !k)a.C(m[e]); else d == c.Rd && k && a.R(m[e]);
                            c.id = d;
                            a.ke(m[e], c[d])
                        }
                    })
                }
            };
            h = a.hb(h);
            if (a.Z()) {
                var D = !h["no-image"], z = a.yg(h);
                a.c(z, function (b) {
                    (D || b["jssor-slider"]) && a.Cb(b, a.Cb(b), c)
                })
            }
            a.c(o, function (h, m) {
                a.c(h, function (G) {
                    var K = G[0], J = G[1], v = K + "," + J, o = i, s = i, x = i;
                    if (p && J % 2) {
                        if (p & 3)o = !o;
                        if (p & 12)s = !s;
                        if (p & 16)x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3)o = !o;
                        if (q & 12)s = !s;
                        if (q & 16)x = !x
                    }
                    d.f = d.f || d.a & 4;
                    d.p = d.p || d.a & 8;
                    d.g = d.g || d.a & 1;
                    d.o = d.o || d.a & 2;
                    var E = s ? d.p : d.f, B = s ? d.f : d.p, D = o ? d.o : d.g, C = o ? d.g : d.o;
                    d.a = E || B || D || C;
                    r = {};
                    e = {f:0, g:0, s:1, P:n, S:l};
                    f = a.n({}, e);
                    t = a.n({}, g[v]);
                    if (d.s)e.s = 2 - d.s;
                    if (d.Q) {
                        e.Q = d.Q;
                        f.Q = 0
                    }
                    var I = d.r * d.V > 1 || d.a;
                    if (d.k || d.q) {
                        var H = c;
                        if (a.Z())if (d.r * d.V > 1)H = i; else I = i;
                        if (H) {
                            e.k = d.k ? d.k - 1 : 1;
                            f.k = 1;
                            if (a.Z() || a.pc())e.k = b.min(e.k, 2);
                            var N = d.q || 0;
                            e.q = N * 360 * (x ? -1 : 1);
                            f.q = 0
                        }
                    }
                    if (I) {
                        var h = t.Gb = {};
                        if (d.a) {
                            var w = d.Td || 1;
                            if (E && B) {
                                h.f = g.S / 2 * w;
                                h.p = -h.f
                            } else if (E)h.p = -g.S * w; else if (B)h.f = g.S * w;
                            if (D && C) {
                                h.g = g.P / 2 * w;
                                h.o = -h.g
                            } else if (D)h.o = -g.P * w; else if (C)h.g = g.P * w
                        }
                        r.a = t;
                        f.a = g[v]
                    }
                    var L = o ? 1 : -1, M = s ? 1 : -1;
                    if (d.x)e.g += n * d.x * L;
                    if (d.y)e.f += l * d.y * M;
                    a.c(e, function (b, c) {
                        if (a.Pb(b))if (b != f[c])r[c] = b - f[c]
                    });
                    u[v] = k ? f : e;
                    var F = d.ce, A = b.round(m * d.L / d.cb);
                    j[v] = new Array(A);
                    j[v].Sd = A;
                    j[v].Rd = A + F - 1;
                    for (var z = 0; z <= F; z++) {
                        var y = a.rd(f, r, z / F, d.J, d.cc, d.ec, {Y:d.Y, U:n, W:l});
                        y.Q = y.Q || 1;
                        j[v].push(y)
                    }
                })
            });
            o.reverse();
            a.c(o, function (b) {
                a.c(b, function (c) {
                    var f = c[0], e = c[1], d = f + "," + e, b = h;
                    if (e || f)b = a.hb(h);
                    a.bb(b, u[d]);
                    a.ub(b, "hidden");
                    a.B(b, "absolute");
                    A.Ud(b);
                    m[d] = b;
                    a.C(b, !k)
                })
            })
        }

        function v() {
            var a = this, b = 0;
            l.call(a, 0, u);
            a.Jb = function (c, a) {
                if (a - b > h) {
                    b = a;
                    e && e.fc(a);
                    g && g.fc(a)
                }
            };
            a.db = r
        }

        f.Vd = function () {
            var a = 0, c = t.qb, d = c.length;
            if (w)a = x++ % d; else a = b.floor(b.random() * d);
            c[a] && (c[a].ob = a);
            return c[a]
        };
        f.Yd = function (w, x, j, l, a) {
            r = a;
            a = k(a, h);
            var i = l.wd, d = j.wd;
            i["no-image"] = !l.jc;
            d["no-image"] = !j.jc;
            var m = i, o = d, v = a, c = a.wc || k({}, h);
            if (!a.sc) {
                m = d;
                o = i
            }
            var t = c.M || 0;
            g = new p(n, o, c, b.max(t - c.cb, 0), s, q);
            e = new p(n, m, v, b.max(c.cb - t, 0), s, q);
            g.fc(0);
            e.fc(0);
            u = b.max(g.bd, e.bd);
            f.ob = w
        };
        f.Db = function () {
            n.Db();
            g = j;
            e = j
        };
        f.Qd = function () {
            var a = j;
            if (e)a = new v;
            return a
        };
        if (a.Z() || a.pc() || y && a.ig() < 537)h = 16;
        m.call(f);
        l.call(f, -1e7, 1e7)
    };
    var h = e.$JssorSlider$ = function (p, cc) {
        var o = this;

        function yc() {
            var a = this;
            l.call(a, -1e8, 2e8);
            a.Pd = function () {
                var c = a.Hb(), d = b.floor(c), f = t(d), e = c - b.floor(c);
                return{ob:f, pg:d, vb:e}
            };
            a.Jb = function (d, a) {
                var e = b.floor(a);
                if (e != a && a > d)e++;
                Rb(e, c);
                o.m(h.Ke, t(a), t(d), a, d)
            }
        }

        function xc() {
            var b = this;
            l.call(b, 0, 0, {Nd:r});
            a.c(C, function (a) {
                D & 1 && a.je(r);
                b.lc(a);
                a.M(ib / Yb)
            })
        }

        function wc() {
            var a = this, b = Tb.K;
            l.call(a, -1, 2, {J:d.pd, oc:{vb:Xb}, Nd:r}, b, {vb:1}, {vb:-2});
            a.kc = b
        }

        function jc(n, m) {
            var a = this, d, e, f, k, b;
            l.call(a, -1e8, 2e8, {Rc:100});
            a.Jd = function () {
                M = c;
                S = j;
                o.m(h.ze, t(w.ab()), w.ab())
            };
            a.ad = function () {
                M = i;
                k = i;
                var a = w.Pd();
                o.m(h.Be, t(w.ab()), w.ab());
                !a.vb && Ac(a.pg, s)
            };
            a.Jb = function (i, h) {
                var a;
                if (k)a = b; else {
                    a = e;
                    if (f) {
                        var c = h / f;
                        a = g.Ie(c) * (e - d) + d
                    }
                }
                w.u(a)
            };
            a.gc = function (b, g, c, h) {
                d = b;
                e = g;
                f = c;
                w.u(b);
                a.u(0);
                a.Cd(c, h)
            };
            a.Ee = function (d) {
                k = c;
                b = d;
                a.Zc(d, j, c)
            };
            a.Ge = function (a) {
                b = a
            };
            w = new yc;
            w.H(n);
            w.H(m)
        }

        function lc() {
            var c = this, b = Vb();
            a.G(b, 0);
            a.gb(b, "pointerEvents", "none");
            c.K = b;
            c.Ud = function (c) {
                a.I(b, c);
                a.C(b)
            };
            c.Db = function () {
                a.R(b);
                a.tc(b)
            }
        }

        function vc(n, e) {
            var d = this, q, L, v, k, y = [], x, B, W, G, Q, F, f, w, p;
            l.call(d, -u, u + 1, {});
            function E(b) {
                q && q.sb();
                T(n, b, 0);
                F = c;
                q = new I.T(n, I, a.xc(a.i(n, "idle")) || ic);
                q.u(0)
            }

            function Z() {
                q.nc < I.nc && E()
            }

            function M(p, r, n) {
                if (!G) {
                    G = c;
                    if (k && n) {
                        var f = n.width, b = n.height, m = f, l = b;
                        if (f && b && g.wb) {
                            if (g.wb & 3 && (!(g.wb & 4) || f > K || b > J)) {
                                var j = i, q = K / J * b / f;
                                if (g.wb & 1)j = q > 1; else if (g.wb & 2)j = q < 1;
                                m = j ? f * J / b : K;
                                l = j ? J : b * K / f
                            }
                            a.j(k, m);
                            a.l(k, l);
                            a.E(k, (J - l) / 2);
                            a.D(k, (K - m) / 2)
                        }
                        a.B(k, "absolute");
                        o.m(h.He, e)
                    }
                }
                a.R(r);
                p && p(d)
            }

            function Y(b, c, f, g) {
                if (g == S && s == e && N)if (!zc) {
                    var a = t(b);
                    A.Yd(a, e, c, d, f);
                    c.te();
                    U.M(a - U.Mc() - 1);
                    U.u(a);
                    z.gc(b, b, 0)
                }
            }

            function cb(b) {
                if (b == S && s == e) {
                    if (!f) {
                        var a = j;
                        if (A)if (A.ob == e)a = A.Qd(); else A.Db();
                        Z();
                        f = new sc(n, e, a, q);
                        f.Wc(p)
                    }
                    !f.vd() && f.mc()
                }
            }

            function R(h, c, i) {
                if (h == e) {
                    if (h != c)C[c] && C[c].Je(); else!i && f && f.pe();
                    p && p.md();
                    var k = S = a.eb();
                    d.Eb(a.F(j, cb, k))
                } else {
                    var m = b.abs(e - h), l = u + g.oe - 1;
                    (!Q || m <= l) && d.Eb()
                }
            }

            function db() {
                if (s == e && f) {
                    f.mb();
                    p && p.ne();
                    p && p.ie();
                    f.td()
                }
            }

            function eb() {
                s == e && f && f.mb()
            }

            function ab(a) {
                !P && o.m(h.he, e, a)
            }

            function O() {
                p = w.pInstance;
                f && f.Wc(p)
            }

            d.Eb = function (d, b) {
                b = b || v;
                if (y.length && !G) {
                    a.C(b);
                    if (!W) {
                        W = c;
                        o.m(h.fe, e);
                        a.c(y, function (b) {
                            if (!a.v(b, "src")) {
                                b.src = a.i(b, "src2");
                                a.nb(b, b["display-origin"])
                            }
                        })
                    }
                    a.ae(y, k, a.F(j, M, d, b))
                } else M(d, b)
            };
            d.ee = function () {
                var h = e;
                if (g.od < 0)h -= r;
                var c = h + g.od * qc;
                if (D & 2)c = t(c);
                if (!(D & 1))c = b.max(0, b.min(c, r - u));
                if (c != e) {
                    if (A) {
                        var d = A.Vd(r);
                        if (d) {
                            var i = S = a.eb(), f = C[t(c)];
                            return f.Eb(a.F(j, Y, c, f, d, i), v)
                        }
                    }
                    bb(c)
                }
            };
            d.Oc = function () {
                R(e, e, c)
            };
            d.Je = function () {
                p && p.ne();
                p && p.ie();
                d.cd();
                f && f.Zd();
                f = j;
                E()
            };
            d.te = function () {
                a.R(n)
            };
            d.cd = function () {
                a.C(n)
            };
            d.ue = function () {
                p && p.md()
            };
            function T(b, d, e) {
                if (a.v(b, "jssor-slider"))return;
                if (!F) {
                    if (b.tagName == "IMG") {
                        y.push(b);
                        if (!a.v(b, "src")) {
                            Q = c;
                            b["display-origin"] = a.nb(b);
                            a.R(b)
                        }
                    }
                    a.Z() && a.G(b, (a.G(b) || 0) + 1)
                }
                var f = a.O(b);
                a.c(f, function (f) {
                    var h = f.tagName, j = a.i(f, "u");
                    if (j == "player" && !w) {
                        w = f;
                        if (w.pInstance)O(); else a.e(w, "dataavailable", O)
                    }
                    if (j == "caption") {
                        if (d) {
                            a.Tc(f, a.i(f, "to"));
                            a.ng(f, a.i(f, "bf"));
                            a.og(f, "preserve-3d")
                        } else if (!a.Dd()) {
                            var g = a.hb(f, i, c);
                            a.ac(g, f, b);
                            a.Bb(f, b);
                            f = g;
                            d = c
                        }
                    } else if (!F && !e && !k) {
                        if (h == "A") {
                            if (a.i(f, "u") == "image")k = a.zg(f, "IMG"); else k = a.z(f, "image", c);
                            if (k) {
                                x = f;
                                a.nb(x, "block");
                                a.bb(x, V);
                                B = a.hb(x, c);
                                a.B(x, "relative");
                                a.Cb(B, 0);
                                a.gb(B, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && a.i(f, "u") == "image")k = f;
                        if (k) {
                            k.border = 0;
                            a.bb(k, V)
                        }
                    }
                    T(f, d, e + 1)
                })
            }

            d.Ic = function (c, b) {
                var a = u - b;
                Xb(L, a)
            };
            d.ob = e;
            m.call(d);
            a.qg(n, a.i(n, "p"));
            a.gg(n, a.i(n, "po"));
            var H = a.z(n, "thumb", c);
            if (H) {
                d.be = a.hb(H);
                a.R(H)
            }
            a.C(n);
            v = a.hb(fb);
            a.G(v, 1e3);
            a.e(n, "click", ab);
            E(c);
            d.jc = k;
            d.Ed = B;
            d.wd = n;
            d.kc = L = n;
            a.I(L, v);
            o.Fb(203, R);
            o.Fb(28, eb);
            o.Fb(24, db)
        }

        function sc(y, f, p, q) {
            var b = this, m = 0, u = 0, g, j, e, d, k, t, r, n = C[f];
            l.call(b, 0, 0);
            function v() {
                a.tc(L);
                Zb && k && n.Ed && a.I(L, n.Ed);
                a.C(L, !k && n.jc)
            }

            function w() {
                b.mc()
            }

            function x(a) {
                r = a;
                b.mb();
                b.mc()
            }

            b.mc = function () {
                var a = b.Hb();
                if (!B && !M && !r && s == f) {
                    if (!a) {
                        if (g && !k) {
                            k = c;
                            b.td(c);
                            o.m(h.De, f, m, u, g, d)
                        }
                        v()
                    }
                    var i, p = h.Vc;
                    if (a != d)if (a == e)i = d; else if (a == j)i = e; else if (!a)i = j; else i = b.Ld();
                    o.m(p, f, a, m, j, e, d);
                    var l = N && (!E || F);
                    if (a == d)(e != d && !(E & 12) || l) && n.ee(); else(l || a != e) && b.Cd(i, w)
                }
            };
            b.pe = function () {
                e == d && e == b.Hb() && b.u(j)
            };
            b.Zd = function () {
                A && A.ob == f && A.Db();
                var a = b.Hb();
                a < d && o.m(h.Vc, f, -a - 1, m, j, e, d)
            };
            b.td = function (b) {
                p && a.ub(jb, b && p.db.dh ? "" : "hidden")
            };
            b.Ic = function (b, a) {
                if (k && a >= g) {
                    k = i;
                    v();
                    n.cd();
                    A.Db();
                    o.m(h.se, f, m, u, g, d)
                }
                o.m(h.Ce, f, a, m, j, e, d)
            };
            b.Wc = function (a) {
                if (a && !t) {
                    t = a;
                    a.Fb($JssorPlayer$.re, x)
                }
            };
            p && b.lc(p);
            g = b.X();
            b.lc(q);
            j = g + q.Xb;
            e = g + q.Mb;
            d = b.X()
        }

        function Xb(g, f) {
            var e = x > 0 ? x : eb, c = zb * f * (e & 1), d = Ab * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.D(g, c);
            a.E(g, d)
        }

        function Nb() {
            pb = M;
            Ib = z.Ld();
            G = w.ab()
        }

        function ec() {
            Nb();
            if (B || !F && E & 12) {
                z.mb();
                o.m(h.ve)
            }
        }

        function bc(e) {
            if (!B && (F || !(E & 12)) && !z.vd()) {
                var c = w.ab(), a = b.ceil(G);
                if (e && b.abs(H) >= g.qd) {
                    a = b.ceil(c);
                    a += hb
                }
                if (!(D & 1))a = b.min(r - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!P && pb)z.de(Ib); else if (c == a) {
                    sb.ue();
                    sb.Oc()
                } else z.gc(c, a, d * Sb)
            }
        }

        function Hb(b) {
            !a.i(a.rc(b), "nodrag") && a.Yb(b)
        }

        function oc(a) {
            Wb(a, 1)
        }

        function Wb(b, d) {
            b = a.Hd(b);
            var k = a.rc(b);
            if (!O && !a.i(k, "nodrag") && pc() && (!d || b.touches.length == 1)) {
                B = c;
                yb = i;
                S = j;
                a.e(f, d ? "touchmove" : "mousemove", Bb);
                a.eb();
                P = 0;
                ec();
                if (!pb)x = 0;
                if (d) {
                    var g = b.touches[0];
                    ub = g.clientX;
                    vb = g.clientY
                } else {
                    var e = a.Kd(b);
                    ub = e.x;
                    vb = e.y
                }
                H = 0;
                gb = 0;
                hb = 0;
                o.m(h.ff, t(G), G, b)
            }
        }

        function Bb(e) {
            if (B) {
                e = a.Hd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {x:l.clientX, y:l.clientY}
                } else f = a.Kd(e);
                if (f) {
                    var j = f.x - ub, k = f.y - vb;
                    if (b.floor(G) != G)x = x || eb & O;
                    if ((j || k) && !x) {
                        if (O == 3)if (b.abs(k) > b.abs(j))x = 2; else x = 1; else x = O;
                        if (mb && x == 1 && b.abs(k) - b.abs(j) > 3)yb = c
                    }
                    if (x) {
                        var d = k, i = Ab;
                        if (x == 1) {
                            d = j;
                            i = zb
                        }
                        if (!(D & 1)) {
                            if (d > 0) {
                                var g = i * s, h = d - g;
                                if (h > 0)d = g + b.sqrt(h) * 5
                            }
                            if (d < 0) {
                                var g = i * (r - u - s), h = -d - g;
                                if (h > 0)d = -g - b.sqrt(h) * 5
                            }
                        }
                        if (H - gb < -2)hb = 0; else if (H - gb > 2)hb = -1;
                        gb = H;
                        H = d;
                        rb = G - H / i / (Y || 1);
                        if (H && x && !yb) {
                            a.Yb(e);
                            if (!M)z.Ee(rb); else z.Ge(rb)
                        }
                    }
                }
            }
        }

        function ab() {
            nc();
            if (B) {
                B = i;
                a.eb();
                a.N(f, "mousemove", Bb);
                a.N(f, "touchmove", Bb);
                P = H;
                z.mb();
                var b = w.ab();
                o.m(h.Le, t(b), b, t(G), G);
                E & 12 && Nb();
                bc(c)
            }
        }

        function fc(c) {
            if (P) {
                a.vg(c);
                var b = a.rc(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.Yb(c);
                    try {
                        b = b.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function hc(a) {
            C[s];
            s = t(a);
            sb = C[s];
            Rb(a);
            return s
        }

        function Ac(a, b) {
            x = 0;
            hc(a);
            o.m(h.Bg, t(a), b)
        }

        function Rb(b, c) {
            wb = b;
            a.c(T, function (a) {
                a.Ac(t(b), b, c)
            })
        }

        function pc() {
            var b = h.fd || 0, a = X;
            if (mb)a & 1 && (a &= 1);
            h.fd |= a;
            return O = a & ~b
        }

        function nc() {
            if (O) {
                h.fd &= ~X;
                O = 0
            }
        }

        function Vb() {
            var b = a.tb();
            a.bb(b, V);
            a.B(b, "absolute");
            return b
        }

        function t(a) {
            return(a % r + r) % r
        }

        function gc(a, c) {
            if (c)if (!D) {
                a = b.min(b.max(a + wb, 0), r - u);
                c = i
            } else if (D & 2) {
                a = t(a + wb);
                c = i
            }
            bb(a, g.zc, c)
        }

        function xb() {
            a.c(T, function (a) {
                a.yc(a.Qb.Wg <= F)
            })
        }

        function Cc() {
            if (!F) {
                F = 1;
                xb();
                if (!B) {
                    E & 12 && bc();
                    E & 3 && C[s].Oc()
                }
            }
        }

        function Bc() {
            if (F) {
                F = 0;
                xb();
                B || !(E & 12) || ec()
            }
        }

        function Dc() {
            V = {P:K, S:J, f:0, g:0};
            a.c(Q, function (b) {
                a.bb(b, V);
                a.B(b, "absolute");
                a.ub(b, "hidden");
                a.R(b)
            });
            a.bb(fb, V)
        }

        function ob(b, a) {
            bb(b, a, c)
        }

        function bb(f, e, l) {
            if (Pb && (!B && (F || !(E & 12)) || g.gd)) {
                M = c;
                B = i;
                z.mb();
                if (e == k)e = Sb;
                var d = Cb.Hb(), a = f;
                if (l) {
                    a = d + f;
                    if (f > 0)a = b.ceil(a); else a = b.floor(a)
                }
                if (D & 2)a = t(a);
                if (!(D & 1))a = b.max(0, b.min(a, r - u));
                var j = (a - d) % r;
                a = d + j;
                var h = d == a ? 0 : e * b.abs(j);
                h = b.min(h, e * u * 1.5);
                z.gc(d, a, h || 1)
            }
        }

        o.Ag = bb;
        o.Zc = function () {
            if (!N) {
                N = c;
                C[s] && C[s].Oc()
            }
        };
        o.kg = function () {
            return P
        };
        function W() {
            return a.j(y || p)
        }

        function lb() {
            return a.l(y || p)
        }

        o.U = W;
        o.W = lb;
        function Eb(c, d) {
            if (c == k)return a.j(p);
            if (!y) {
                var b = a.tb(f);
                a.hd(b, a.hd(p));
                a.Ib(b, a.Ib(p));
                a.nb(b, "block");
                a.B(b, "relative");
                a.E(b, 0);
                a.D(b, 0);
                a.ub(b, "visible");
                y = a.tb(f);
                a.B(y, "absolute");
                a.E(y, 0);
                a.D(y, 0);
                a.j(y, a.j(p));
                a.l(y, a.l(p));
                a.Tc(y, "0 0");
                a.I(y, b);
                var h = a.O(p);
                a.I(p, y);
                a.gb(p, "backgroundImage", "");
                a.c(h, function (c) {
                    a.I(a.i(c, "noscale") ? p : b, c);
                    a.i(c, "autocenter") && Jb.push(c)
                })
            }
            Y = c / (d ? a.l : a.j)(y);
            a.sg(y, Y);
            var g = d ? Y * W() : c, e = d ? c : Y * lb();
            a.j(p, g);
            a.l(p, e);
            a.c(Jb, function (b) {
                var c = a.Tb(a.i(b, "autocenter"));
                a.Xd(b, c)
            })
        }

        o.Cg = Eb;
        o.yd = function (a) {
            var d = b.ceil(t(ib / Yb)), c = t(a - s + d);
            if (c > u) {
                if (a - s > r / 2)a -= r; else if (a - s <= -r / 2)a += r
            } else a = s + c - d;
            return a
        };
        m.call(o);
        o.K = p = a.rb(p);
        var g = a.n({wb:0, oe:1, Jc:1, Hc:0, Gc:i, Zb:1, gd:c, od:1, xd:3e3, Uc:1, zc:500, Ie:d.Xc, qd:20, dd:0, r:1, Fc:0, Ng:1, Lc:1, kd:1}, cc);
        if (g.Tg != k)g.xd = g.Tg;
        if (g.Nc != k)g.r = g.Nc;
        if (g.Lg != k)g.Fc = g.Lg;
        var eb = g.Lc & 3, qc = (g.Lc & 4) / -4 || 1, kb = g.ch, I = a.n({T:q, Kg:1, Mg:1}, g.bh);
        I.qb = I.qb || I.ah;
        var Fb = g.Zg, Z = g.Ig, db = g.Hg, R = !g.Ng, y, v = a.z(p, "slides", R), fb = a.z(p, "loading", R) || a.tb(f), Lb = a.z(p, "navigator", R), dc = a.z(p, "arrowleft", R), ac = a.z(p, "arrowright", R), Kb = a.z(p, "thumbnavigator", R), mc = a.j(v), kc = a.l(v), V, Q = [], rc = a.O(v);
        a.c(rc, function (b) {
            if (b.tagName == "DIV" && !a.i(b, "u"))Q.push(b); else a.Z() && a.G(b, (a.G(b) || 0) + 1)
        });
        var s = -1, wb, sb, r = Q.length, K = g.Gg || mc, J = g.Fg || kc, Ub = g.dd, zb = K + Ub, Ab = J + Ub, Yb = eb & 1 ? zb : Ab, u = b.min(g.r, r), jb, x, O, yb, T = [], Ob, Qb, Mb, Zb, zc, N, E = g.Uc, ic = g.xd, Sb = g.zc, qb, tb, ib, Pb = u < r, D = Pb ? g.Zb : 0, X, P, F = 1, M, B, S, ub = 0, vb = 0, H, gb, hb, Cb, w, U, z, Tb = new lc, Y, Jb = [];
        N = g.Gc;
        o.Qb = cc;
        Dc();
        a.v(p, "jssor-slider", c);
        a.G(v, a.G(v) || 0);
        a.B(v, "absolute");
        jb = a.hb(v, c);
        a.ac(jb, v);
        if (kb) {
            Zb = kb.Yg;
            qb = kb.T;
            tb = u == 1 && r > 1 && qb && (!a.Dd() || a.ud() >= 8)
        }
        ib = tb || u >= r || !(D & 1) ? 0 : g.Fc;
        X = (u > 1 || ib ? eb : -1) & g.kd;
        var Gb = v, C = [], A, L, Db = a.Og(), mb = Db.Pg, G, pb, Ib, rb;
        Db.sd && a.gb(Gb, Db.sd, ([j, "pan-y", "pan-x", "none"])[X] || "");
        U = new wc;
        if (tb)A = new qb(Tb, K, J, kb, mb);
        a.I(jb, U.kc);
        a.ub(v, "hidden");
        L = Vb();
        a.gb(L, "backgroundColor", "#000");
        a.Cb(L, 0);
        a.ac(L, Gb.firstChild, Gb);
        for (var cb = 0; cb < Q.length; cb++) {
            var tc = Q[cb], uc = new vc(tc, cb);
            C.push(uc)
        }
        a.R(fb);
        Cb = new xc;
        z = new jc(Cb, U);
        if (X) {
            a.e(v, "mousedown", Wb);
            a.e(v, "touchstart", oc);
            a.e(v, "dragstart", Hb);
            a.e(v, "selectstart", Hb);
            a.e(f, "mouseup", ab);
            a.e(f, "touchend", ab);
            a.e(f, "touchcancel", ab);
            a.e(e, "blur", ab)
        }
        E &= mb ? 10 : 5;
        if (Lb && Fb) {
            Ob = new Fb.T(Lb, Fb, W(), lb());
            T.push(Ob)
        }
        if (Z && dc && ac) {
            Z.Zb = D;
            Z.r = u;
            Qb = new Z.T(dc, ac, Z, W(), lb());
            T.push(Qb)
        }
        if (Kb && db) {
            db.Hc = g.Hc;
            Mb = new db.T(Kb, db);
            T.push(Mb)
        }
        a.c(T, function (a) {
            a.Ec(r, C, fb);
            a.Fb(n.Sb, gc)
        });
        a.gb(p, "visibility", "visible");
        Eb(W());
        a.e(v, "click", fc);
        a.e(p, "mouseout", a.Kb(Cc, p));
        a.e(p, "mouseover", a.Kb(Bc, p));
        xb();
        g.Jc && a.e(f, "keydown", function (a) {
            if (a.keyCode == 37)ob(-g.Jc); else a.keyCode == 39 && ob(g.Jc)
        });
        var nb = g.Hc;
        if (!(D & 1))nb = b.max(0, b.min(nb, r - u));
        z.gc(nb, nb, 0)
    };
    h.he = 21;
    h.ff = 22;
    h.Le = 23;
    h.ze = 24;
    h.Be = 25;
    h.fe = 26;
    h.He = 27;
    h.ve = 28;
    h.Ke = 202;
    h.Bg = 203;
    h.De = 206;
    h.se = 207;
    h.Ce = 208;
    h.Vc = 209;
    var n = {Sb:1};
    e.$JssorBulletNavigator$ = function (e, C) {
        var f = this;
        m.call(f);
        e = a.rb(e);
        var s, A, z, r, l = 0, d, o, k, w, x, h, g, q, p, B = [], y = [];

        function v(a) {
            a != -1 && y[a].jd(a == l)
        }

        function t(a) {
            f.m(n.Sb, a * o)
        }

        f.K = e;
        f.Ac = function (a) {
            if (a != r) {
                var d = l, c = b.floor(a / o);
                l = c;
                r = a;
                v(d);
                v(c)
            }
        };
        f.yc = function (b) {
            a.C(e, b)
        };
        var u;
        f.Ec = function (D) {
            if (!u) {
                s = b.ceil(D / o);
                l = 0;
                var n = q + w, r = p + x, m = b.ceil(s / k) - 1;
                A = q + n * (!h ? m : k - 1);
                z = p + r * (h ? m : k - 1);
                a.j(e, A);
                a.l(e, z);
                for (var f = 0; f < s; f++) {
                    var C = a.lg();
                    a.wg(C, f + 1);
                    var i = a.Sc(g, "numbertemplate", C, c);
                    a.B(i, "absolute");
                    var v = f % (m + 1);
                    a.D(i, !h ? n * v : f % k * n);
                    a.E(i, h ? r * v : b.floor(f / (m + 1)) * r);
                    a.I(e, i);
                    B[f] = i;
                    d.Ab & 1 && a.e(i, "click", a.F(j, t, f));
                    d.Ab & 2 && a.e(i, "mouseover", a.Kb(a.F(j, t, f), i));
                    y[f] = a.Ob(i)
                }
                u = c
            }
        };
        f.Qb = d = a.n({ic:10, hc:10, jb:1, Ab:1}, C);
        g = a.z(e, "prototype");
        q = a.j(g);
        p = a.l(g);
        a.Bb(g, e);
        o = d.nd || 1;
        k = d.Id || 1;
        w = d.ic;
        x = d.hc;
        h = d.jb - 1;
        d.zd == i && a.v(e, "noscale", c);
        d.fb && a.v(e, "autocenter", d.fb)
    };
    var r = e.$JssorArrowNavigator$ = function (b, g, h) {
        var d = this;
        m.call(d);
        var r, q, e, f, k;
        a.j(b);
        a.l(b);
        function l(a) {
            d.m(n.Sb, a, c)
        }

        function p(c) {
            a.C(b, c || !h.Zb && e == 0);
            a.C(g, c || !h.Zb && e >= q - h.r);
            r = c
        }

        d.Ac = function (b, a, c) {
            if (c)e = a; else {
                e = b;
                p(r)
            }
        };
        d.yc = p;
        var o;
        d.Ec = function (d) {
            q = d;
            e = 0;
            if (!o) {
                a.e(b, "click", a.F(j, l, -k));
                a.e(g, "click", a.F(j, l, k));
                a.Ob(b);
                a.Ob(g);
                o = c
            }
        };
        d.Qb = f = a.n({nd:1}, h);
        k = f.nd;
        if (f.zd == i) {
            a.v(b, "noscale", c);
            a.v(g, "noscale", c)
        }
        if (f.fb) {
            a.v(b, "autocenter", f.fb);
            a.v(g, "autocenter", f.fb)
        }
    }, p = e.$JssorThumbnailNavigator$ = function (g, C) {
        var l = this, A, q, d, w = [], y, x, e, r, s, v, u, p, t, f, o;
        m.call(l);
        g = a.rb(g);
        function B(m, f) {
            var g = this, b, k, i;

            function p() {
                k.jd(q == f)
            }

            function h(d) {
                if (d || !t.kg()) {
                    var a = e - f % e, b = t.yd((f + a) / e - 1), c = b * e + e - a;
                    l.m(n.Sb, c)
                }
            }

            g.ob = f;
            g.Od = p;
            i = m.be || m.jc || a.tb();
            g.kc = b = a.Sc(o, "thumbnailtemplate", i, c);
            k = a.Ob(b);
            d.Ab & 1 && a.e(b, "click", a.F(j, h, 0));
            d.Ab & 2 && a.e(b, "mouseover", a.Kb(a.F(j, h, 1), b))
        }

        l.Ac = function (c, d, f) {
            var a = q;
            q = c;
            a != -1 && w[a].Od();
            w[c].Od();
            !f && t.Ag(t.yd(b.floor(d / e)))
        };
        l.yc = function (b) {
            a.C(g, b)
        };
        var z;
        l.Ec = function (D, C) {
            if (!z) {
                A = D;
                b.ceil(A / e);
                q = -1;
                p = b.min(p, C.length);
                var j = d.jb & 1, m = v + (v + r) * (e - 1) * (1 - j), l = u + (u + s) * (e - 1) * j, o = m + (m + r) * (p - 1) * j, n = l + (l + s) * (p - 1) * (1 - j);
                a.B(f, "absolute");
                a.ub(f, "hidden");
                d.fb & 1 && a.D(f, (y - o) / 2);
                d.fb & 2 && a.E(f, (x - n) / 2);
                a.j(f, o);
                a.l(f, n);
                var k = [];
                a.c(C, function (l, g) {
                    var h = new B(l, g), d = h.kc, c = b.floor(g / e), i = g % e;
                    a.D(d, (v + r) * i * (1 - j));
                    a.E(d, (u + s) * i * j);
                    if (!k[c]) {
                        k[c] = a.tb();
                        a.I(f, k[c])
                    }
                    a.I(k[c], d);
                    w.push(h)
                });
                var E = a.n({Gc:i, gd:i, Gg:m, Fg:l, dd:r * j + s * (1 - j), qd:12, zc:200, Uc:1, Lc:d.jb, kd:d.Xg || d.Vg ? 0 : d.jb}, d);
                t = new h(g, E);
                z = c
            }
        };
        l.Qb = d = a.n({ic:0, hc:0, r:1, jb:1, fb:3, Ab:1}, C);
        if (d.Nc != k)d.r = d.Nc;
        if (d.V != k)d.Id = d.V;
        y = a.j(g);
        x = a.l(g);
        f = a.z(g, "slides", c);
        o = a.z(f, "prototype");
        v = a.j(o);
        u = a.l(o);
        a.Bb(o, f);
        e = d.Id || 1;
        r = d.ic;
        s = d.hc;
        p = d.r;
        d.zd == i && a.v(g, "noscale", c)
    };

    function q(e, d, c) {
        var b = this;
        l.call(b, 0, c);
        b.sb = a.Pc;
        b.Xb = 0;
        b.Mb = c
    }

    e.$JssorCaptionSlider$ = function (h, f, i) {
        var c = this;
        l.call(c, 0, 0);
        var e, d;

        function g(p, h, f) {
            var c = this, g, n = f ? h.Kg : h.Mg, e = h.qb, o = {db:"t", L:"d", bc:"du", x:"x", y:"y", q:"r", k:"z", s:"f", zb:"b"}, d = {pb:function (b, a) {
                if (!isNaN(a.ib))b = a.ib; else b *= a.Kf;
                return b
            }, s:function (b, a) {
                return this.pb(b - 1, a)
            }};
            d.k = d.s;
            l.call(c, 0, 0);
            function j(r, m) {
                var l = [], i, k = [], c = [];

                function h(c, d) {
                    var b = {};
                    a.c(o, function (g, h) {
                        var e = a.i(c, g + (d || ""));
                        if (e) {
                            var f = {};
                            if (g == "t")f.ib = e; else if (e.indexOf("%") + 1)f.Kf = a.xc(e) / 100; else f.ib = a.xc(e);
                            b[h] = f
                        }
                    });
                    return b
                }

                function p() {
                    return e[b.floor(b.random() * e.length)]
                }

                function g(f) {
                    var h;
                    if (f == "*")h = p(); else if (f) {
                        var d = e[a.Tb(f)] || e[f];
                        if (a.vc(d)) {
                            if (f != i) {
                                i = f;
                                c[f] = 0;
                                k[f] = d[b.floor(b.random() * d.length)]
                            } else c[f]++;
                            d = k[f];
                            if (a.vc(d)) {
                                d = d.length && d[c[f] % d.length];
                                if (a.vc(d))d = d[b.floor(b.random() * d.length)]
                            }
                        }
                        h = d;
                        if (a.Fd(h))h = g(h)
                    }
                    return h
                }

                var q = a.O(r);
                a.c(q, function (b) {
                    var c = [];
                    c.K = b;
                    var e = a.i(b, "u") == "caption";
                    a.c(f ? [0, 3] : [2], function (l, o) {
                        if (e) {
                            var k, f;
                            if (l != 2 || !a.i(b, "t3")) {
                                f = h(b, l);
                                if (l == 2 && !f.db) {
                                    f.L = f.L || {ib:0};
                                    f = a.n(h(b, 0), f)
                                }
                            }
                            if (f && f.db) {
                                k = g(f.db.ib);
                                if (k) {
                                    var i = a.n({L:0}, k);
                                    a.c(f, function (c, a) {
                                        var b = (d[a] || d.pb).apply(d, [i[a], f[a]]);
                                        if (!isNaN(b))i[a] = b
                                    });
                                    if (!o)if (f.zb)i.zb = f.zb.ib || 0; else if (n & 2)i.zb = 0
                                }
                            }
                            c.push(i)
                        }
                        if (m % 2 && !o)c.O = j(b, m + 1)
                    });
                    l.push(c)
                });
                return l
            }

            function m(w, c, z) {
                var g = {J:c.J, ec:c.ec, cc:c.cc, Kc:f && !z}, m = w, r = a.Yc(w), k = a.j(m), j = a.l(m), y = a.j(r), x = a.l(r), h = {}, e = {}, i = c.Td || 1;
                if (c.s)e.s = 1 - c.s;
                g.U = k;
                g.W = j;
                if (c.k || c.q) {
                    e.k = (c.k || 2) - 2;
                    if (a.Z() || a.pc())e.k = b.min(e.k, 1);
                    h.k = 1;
                    var B = c.q || 0;
                    e.q = B * 360;
                    h.q = 0
                } else if (c.a) {
                    var s = {f:0, o:k, p:j, g:0}, v = a.n({}, s), d = v.Gb = {}, u = c.a & 4, p = c.a & 8, t = c.a & 1, q = c.a & 2;
                    if (u && p) {
                        d.f = j / 2 * i;
                        d.p = -d.f
                    } else if (u)d.p = -j * i; else if (p)d.f = j * i;
                    if (t && q) {
                        d.g = k / 2 * i;
                        d.o = -d.g
                    } else if (t)d.o = -k * i; else if (q)d.g = k * i;
                    g.Y = c.Y;
                    e.a = v;
                    h.a = s
                }
                var n = 0, o = 0;
                if (c.x)n -= y * c.x;
                if (c.y)o -= x * c.y;
                if (n || o || g.Y) {
                    e.g = n;
                    e.f = o
                }
                var A = c.bc;
                h = a.n(h, a.me(m, e));
                g.oc = a.Md();
                return new l(c.L, A, g, m, h, e)
            }

            function i(b, d) {
                a.c(d, function (d) {
                    var a, h = d.K, f = d[0], j = d[1];
                    if (f) {
                        a = m(h, f);
                        f.zb == k && a.M(b);
                        b = a.X()
                    }
                    b = i(b, d.O);
                    if (j) {
                        var e = m(h, j, 1);
                        e.M(b);
                        c.H(e);
                        g.H(e)
                    }
                    a && c.H(a)
                });
                return b
            }

            c.sb = function () {
                c.u(c.X() * (f || 0));
                g.u(0)
            };
            g = new l(0, 0);
            i(0, n ? j(p, 1) : [])
        }

        c.sb = function () {
            d.sb();
            e.sb()
        };
        e = new g(h, f, 1);
        c.Xb = e.X();
        c.Mb = c.Xb + i;
        d = new g(h, f);
        d.M(c.Mb);
        c.H(d);
        c.H(e)
    };
    e.$JssorCaptionSlideo$ = function (n, f, m) {
        var b = this, o, h = {}, i = f.qb, d = new l(0, 0);
        l.call(b, 0, 0);
        function j(d, c) {
            var b = {};
            a.c(d, function (d, f) {
                var e = h[f];
                if (e) {
                    if (a.rg(d))d = j(d, c || f == "e"); else if (c)if (a.Pb(d))d = o[d];
                    b[e] = d
                }
            });
            return b
        }

        function k(e, c) {
            var b = [], d = a.O(e);
            a.c(d, function (d) {
                var h = a.i(d, "u") == "caption";
                if (h) {
                    var e = a.i(d, "t"), g = i[a.Tb(e)] || i[e], f = {K:d, db:g};
                    b.push(f)
                }
                if (c < 5)b = b.concat(k(d, c + 1))
            });
            return b
        }

        function r(c, e, b) {
            a.c(e, function (f) {
                var e = j(f), h = {J:a.qc(e.J), oc:a.Md(), U:b.P, W:b.S}, g = new l(f.b, f.d, h, c, b, e);
                d.H(g);
                b = a.ge(b, e)
            });
            return b
        }

        function q(b) {
            a.c(b, function (c) {
                var b = c.K, e = a.j(b), d = a.l(b), f = {g:a.D(b), f:a.E(b), s:1, Q:a.G(b) || 0, q:0, yb:0, xb:0, kb:1, lb:1, Wb:0, Lb:0, Nb:0, Vb:0, Ub:0, P:e, S:d, a:{f:0, o:e, p:d, g:0}};
                r(b, c.db, f)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var a = new l(f, e);
                a.H(d, c);
                a.M(h);
                b.H(a)
            }
            b.le(g.d);
            return e
        }

        function s(f) {
            var c = d.Mc(), e = 0;
            a.c(f, function (d, f) {
                d = a.n({d:m}, d);
                t(d, c, e);
                c = d.b;
                e += d.d;
                if (!f || d.t == 2) {
                    b.Xb = c;
                    b.Mb = c + d.d
                }
            })
        }

        b.sb = function () {
            b.u(-1, c)
        };
        o = [g.Mf, g.vf, g.bf, g.Ze, g.Ye, g.Xe, g.We, g.Ve, g.Ue, g.af, g.Te, g.Re, g.Qe, g.Pe, g.Oe, g.Ne, g.Me, g.Se, g.cf, g.lf, g.df, g.sf, g.rf, g.qf, g.pf, g.of, g.nf, g.tf, g.mf, g.kf, g.jf, g.hf, g.gf, g.fg, g.ef, g.uf, g.eg];
        var u = {f:"y", g:"x", p:"m", o:"t", q:"r", yb:"rX", xb:"rY", kb:"sX", lb:"sY", Wb:"tX", Lb:"tY", Nb:"tZ", Vb:"kX", Ub:"kY", s:"o", J:"e", Q:"i", a:"c"};
        a.c(u, function (b, a) {
            h[b] = a
        });
        q(k(n, 1));
        d.u(-1);
        var p = f.fh || [], e = [].concat(p[a.Tb(a.i(n, "b"))] || []);
        e.push({b:d.X(), d:e.length ? 0 : m});
        s(e);
        b.u(-1)
    };
    jssor_1_slider_init = function () {
        var g = {Gc:c, Ig:{T:r}, Hg:{T:p, r:4, ic:4, hc:4, jb:2, Fc:0}}, f = new h("jssor_1", g);

        function d() {
            var a = f.K.parentNode.clientWidth;
            if (a) {
                a = b.min(a, 900);
                f.Cg(a)
            } else e.setTimeout(d, 30)
        }

        d();
        a.e(e, "load", d);
        a.e(e, "resize", a.tg(e, d));
        a.e(e, "orientationchange", d)
    }
}(window, document, Math, null, true, false)

