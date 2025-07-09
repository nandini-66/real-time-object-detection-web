!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() :
    "function" == typeof define && define.amd ? define([], t) :
    "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }(
        [
            function(e, t, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = n(1),
                a = (o(r), n(6)),
                u = o(a),
                c = n(7),
                f = o(c),
                s = n(8),
                d = o(s),
                l = n(9),
                p = o(l),
                m = n(10),
                b = o(m),
                v = n(11),
                y = o(v),
                g = n(14),
                h = o(g),
                w = [],
                k = !1,
                x = document.all && !window.atob,
                j = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded"
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
                },
                S = function() {
                    w = (0, h.default)(),
                    O()
                },
                _ = function() {
                    w.forEach(function(e, t) {
                        e.node.removeAttribute("data-aos"),
                        e.node.removeAttribute("data-aos-easing"),
                        e.node.removeAttribute("data-aos-duration"),
                        e.node.removeAttribute("data-aos-delay")
                    })
                },
                E = function(e) {
                    return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
                },
                z = function(e) {
                    return j = i(j, e), 
                    w = (0, h.default)(), 
                    E(j.disable) || x ? _() : (
                        document.querySelector("body").setAttribute("data-aos-easing", j.easing), 
                        document.querySelector("body").setAttribute("data-aos-duration", j.duration), 
                        document.querySelector("body").setAttribute("data-aos-delay", j.delay), 
                        "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : 
                        "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                            O(!0)
                        }) : 
                        document.addEventListener(j.startEvent, function() {
                            O(!0)
                        }), 
                        window.addEventListener("resize", (0, f.default)(O, 50, !0)), 
                        window.addEventListener("orientationchange", (0, f.default)(O, 50, !0)), 
                        window.addEventListener("scroll", (0, u.default)(function() {
                            (0, b.default)(w, j.once)
                        }, 99)), 
                        document.addEventListener("DOMNodeRemoved", function(e) {
                            var t = e.target;
                            t && 1 === t.nodeType && t.hasAttribute && t.hasAttribute("data-aos") && (0, f.default)(S, 50, !0)
                        }), 
                        (0, d.default)("[data-aos]", S), 
                        w
                    )
                };

                e.exports = {
                    init: z,
                    refresh: O,
                    refreshHard: S
                }
            },
            function(e, t) {},
            // other modules here...
        ]
    );
});