// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var q = Object.create;
var $ = Object.defineProperty;
var A = Object.getOwnPropertyDescriptor;
var M = Object.getOwnPropertyNames;
var z = Object.getPrototypeOf, B = Object.prototype.hasOwnProperty;
var k = (e, t)=>()=>(t || e((t = {
            exports: {}
        }).exports, t), t.exports);
var H = (e, t, r, u)=>{
    if (t && typeof t == "object" || typeof t == "function") for (let o of M(t))!B.call(e, o) && o !== r && $(e, o, {
        get: ()=>t[o],
        enumerable: !(u = A(t, o)) || u.enumerable
    });
    return e;
};
var w = (e, t, r)=>(r = e != null ? q(z(e)) : {}, H(t || !e || !e.__esModule ? $(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
var L = k((n)=>{
    "use strict";
    var y = Symbol.for("react.element"), W = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), Q = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), ee = Symbol.for("react.memo"), te = Symbol.for("react.lazy"), b = Symbol.iterator;
    function re(e) {
        return e === null || typeof e != "object" ? null : (e = b && e[b] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var j = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }, I = Object.assign, g = {};
    function p(e, t, r) {
        this.props = e, this.context = t, this.refs = g, this.updater = r || j;
    }
    p.prototype.isReactComponent = {};
    p.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
    };
    p.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function P() {}
    P.prototype = p.prototype;
    function v(e, t, r) {
        this.props = e, this.context = t, this.refs = g, this.updater = r || j;
    }
    var S = v.prototype = new P;
    S.constructor = v;
    I(S, p.prototype);
    S.isPureReactComponent = !0;
    var x = Array.isArray, T = Object.prototype.hasOwnProperty, E = {
        current: null
    }, D = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function V(e, t, r) {
        var u, o = {}, c = null, f = null;
        if (t != null) for(u in t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = "" + t.key), t)T.call(t, u) && !D.hasOwnProperty(u) && (o[u] = t[u]);
        var i = arguments.length - 2;
        if (i === 1) o.children = r;
        else if (1 < i) {
            for(var s = Array(i), a = 0; a < i; a++)s[a] = arguments[a + 2];
            o.children = s;
        }
        if (e && e.defaultProps) for(u in i = e.defaultProps, i)o[u] === void 0 && (o[u] = i[u]);
        return {
            $$typeof: y,
            type: e,
            key: c,
            ref: f,
            props: o,
            _owner: E.current
        };
    }
    function ne(e, t) {
        return {
            $$typeof: y,
            type: e.type,
            key: t,
            ref: e.ref,
            props: e.props,
            _owner: e._owner
        };
    }
    function R(e) {
        return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function oe(e) {
        var t = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + e.replace(/[=:]/g, function(r) {
            return t[r];
        });
    }
    var O = /\/+/g;
    function h(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? oe("" + e.key) : t.toString(36);
    }
    function _(e, t, r, u, o) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var f = !1;
        if (e === null) f = !0;
        else switch(c){
            case "string":
            case "number":
                f = !0;
                break;
            case "object":
                switch(e.$$typeof){
                    case y:
                    case W:
                        f = !0;
                }
        }
        if (f) return f = e, o = o(f), e = u === "" ? "." + h(f, 0) : u, x(o) ? (r = "", e != null && (r = e.replace(O, "$&/") + "/"), _(o, t, r, "", function(a) {
            return a;
        })) : o != null && (R(o) && (o = ne(o, r + (!o.key || f && f.key === o.key ? "" : ("" + o.key).replace(O, "$&/") + "/") + e)), t.push(o)), 1;
        if (f = 0, u = u === "" ? "." : u + ":", x(e)) for(var i = 0; i < e.length; i++){
            c = e[i];
            var s = u + h(c, i);
            f += _(c, t, r, s, o);
        }
        else if (s = re(e), typeof s == "function") for(e = s.call(e), i = 0; !(c = e.next()).done;)c = c.value, s = u + h(c, i++), f += _(c, t, r, s, o);
        else if (c === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
        return f;
    }
    function d(e, t, r) {
        if (e == null) return e;
        var u = [], o = 0;
        return _(e, u, "", "", function(c) {
            return t.call(r, c, o++);
        }), u;
    }
    function ue(e) {
        if (e._status === -1) {
            var t = e._result;
            t = t(), t.then(function(r) {
                (e._status === 0 || e._status === -1) && (e._status = 1, e._result = r);
            }, function(r) {
                (e._status === 0 || e._status === -1) && (e._status = 2, e._result = r);
            }), e._status === -1 && (e._status = 0, e._result = t);
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
    }
    var l = {
        current: null
    }, m = {
        transition: null
    }, se = {
        ReactCurrentDispatcher: l,
        ReactCurrentBatchConfig: m,
        ReactCurrentOwner: E
    };
    n.Children = {
        map: d,
        forEach: function(e, t, r) {
            d(e, function() {
                t.apply(this, arguments);
            }, r);
        },
        count: function(e) {
            var t = 0;
            return d(e, function() {
                t++;
            }), t;
        },
        toArray: function(e) {
            return d(e, function(t) {
                return t;
            }) || [];
        },
        only: function(e) {
            if (!R(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e;
        }
    };
    n.Component = p;
    n.Fragment = Y;
    n.Profiler = J;
    n.PureComponent = v;
    n.StrictMode = G;
    n.Suspense = Z;
    n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = se;
    n.cloneElement = function(e, t, r) {
        if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var u = I({}, e.props), o = e.key, c = e.ref, f = e._owner;
        if (t != null) {
            if (t.ref !== void 0 && (c = t.ref, f = E.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
            for(s in t)T.call(t, s) && !D.hasOwnProperty(s) && (u[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
        }
        var s = arguments.length - 2;
        if (s === 1) u.children = r;
        else if (1 < s) {
            i = Array(s);
            for(var a = 0; a < s; a++)i[a] = arguments[a + 2];
            u.children = i;
        }
        return {
            $$typeof: y,
            type: e.type,
            key: o,
            ref: c,
            props: u,
            _owner: f
        };
    };
    n.createContext = function(e) {
        return e = {
            $$typeof: Q,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        }, e.Provider = {
            $$typeof: K,
            _context: e
        }, e.Consumer = e;
    };
    n.createElement = V;
    n.createFactory = function(e) {
        var t = V.bind(null, e);
        return t.type = e, t;
    };
    n.createRef = function() {
        return {
            current: null
        };
    };
    n.forwardRef = function(e) {
        return {
            $$typeof: X,
            render: e
        };
    };
    n.isValidElement = R;
    n.lazy = function(e) {
        return {
            $$typeof: te,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: ue
        };
    };
    n.memo = function(e, t) {
        return {
            $$typeof: ee,
            type: e,
            compare: t === void 0 ? null : t
        };
    };
    n.startTransition = function(e) {
        var t = m.transition;
        m.transition = {};
        try {
            e();
        } finally{
            m.transition = t;
        }
    };
    n.unstable_act = function() {
        throw Error("act(...) is not supported in production builds of React.");
    };
    n.useCallback = function(e, t) {
        return l.current.useCallback(e, t);
    };
    n.useContext = function(e) {
        return l.current.useContext(e);
    };
    n.useDebugValue = function() {};
    n.useDeferredValue = function(e) {
        return l.current.useDeferredValue(e);
    };
    n.useEffect = function(e, t) {
        return l.current.useEffect(e, t);
    };
    n.useId = function() {
        return l.current.useId();
    };
    n.useImperativeHandle = function(e, t, r) {
        return l.current.useImperativeHandle(e, t, r);
    };
    n.useInsertionEffect = function(e, t) {
        return l.current.useInsertionEffect(e, t);
    };
    n.useLayoutEffect = function(e, t) {
        return l.current.useLayoutEffect(e, t);
    };
    n.useMemo = function(e, t) {
        return l.current.useMemo(e, t);
    };
    n.useReducer = function(e, t, r) {
        return l.current.useReducer(e, t, r);
    };
    n.useRef = function(e) {
        return l.current.useRef(e);
    };
    n.useState = function(e) {
        return l.current.useState(e);
    };
    n.useSyncExternalStore = function(e, t, r) {
        return l.current.useSyncExternalStore(e, t, r);
    };
    n.useTransition = function() {
        return l.current.useTransition();
    };
    n.version = "18.2.0";
});
var C = k((ae, N)=>{
    "use strict";
    N.exports = L();
});
var F = w(C()), U = w(C()), { Children: pe , Component: ye , Fragment: de , Profiler: _e , PureComponent: me , StrictMode: he , Suspense: ve , __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Se , cloneElement: Ee , createContext: Re , createElement: Ce , createFactory: $e , createRef: ke , forwardRef: we , isValidElement: be , lazy: xe , memo: Oe , startTransition: je , unstable_act: Ie , useCallback: ge , useContext: Pe , useDebugValue: Te , useDeferredValue: De , useEffect: Ve , useId: Le , useImperativeHandle: Ne , useInsertionEffect: Fe , useLayoutEffect: Ue , useMemo: qe , useReducer: Ae , useRef: Me , useState: ze , useSyncExternalStore: Be , useTransition: He , version: We  } = U, { default: ce , ...ie } = U, Ye = (F.default ?? ce) ?? ie;
const mod = {
    default: Ye,
    Children: pe,
    Component: ye,
    Fragment: de,
    Profiler: _e,
    PureComponent: me,
    StrictMode: he,
    Suspense: ve,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Se,
    cloneElement: Ee,
    createContext: Re,
    createElement: Ce,
    createFactory: $e,
    createRef: ke,
    forwardRef: we,
    isValidElement: be,
    lazy: xe,
    memo: Oe,
    startTransition: je,
    unstable_act: Ie,
    useCallback: ge,
    useContext: Pe,
    useDebugValue: Te,
    useDeferredValue: De,
    useEffect: Ve,
    useId: Le,
    useImperativeHandle: Ne,
    useInsertionEffect: Fe,
    useLayoutEffect: Ue,
    useMemo: qe,
    useReducer: Ae,
    useRef: Me,
    useState: ze,
    useSyncExternalStore: Be,
    useTransition: He,
    version: We
};
var f = Object.defineProperty;
var s = (n, t)=>{
    for(var r in t)f(n, r, {
        get: t[r],
        enumerable: !0
    });
};
var o = {};
s(o, {
    default: ()=>e
});
function e() {
    return e = Object.assign ? Object.assign.bind() : function(n) {
        for(var t = 1; t < arguments.length; t++){
            var r = arguments[t];
            for(var a in r)Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
        }
        return n;
    }, e.apply(this, arguments);
}
var { default: u , ...l } = o, i = (e ?? u) ?? l;
var b;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(b || (b = {}));
var R = function(e) {
    return e;
};
var M1 = "beforeunload", Y = "popstate";
function K(e) {
    e === void 0 && (e = {});
    var y = e, s = y.window, i1 = s === void 0 ? document.defaultView : s, h = i1.history;
    function f() {
        var r = i1.location, n = r.pathname, t = r.search, c = r.hash, l = h.state || {};
        return [
            l.idx,
            R({
                pathname: n,
                search: t,
                hash: c,
                state: l.usr || null,
                key: l.key || "default"
            })
        ];
    }
    var u = null;
    function L() {
        if (u) v.call(u), u = null;
        else {
            var r = b.Pop, n = f(), t = n[0], c = n[1];
            if (v.length) {
                if (t != null) {
                    var l = p - t;
                    l && (u = {
                        action: r,
                        location: c,
                        retry: function() {
                            d(l * -1);
                        }
                    }, d(l));
                }
            } else T(r);
        }
    }
    i1.addEventListener(Y, L);
    var x = b.Pop, O = f(), p = O[0], k = O[1], _ = $1(), v = $1();
    p == null && (p = 0, h.replaceState(i({}, h.state, {
        idx: p
    }), ""));
    function A(r) {
        return typeof r == "string" ? r : D(r);
    }
    function S(r, n) {
        return n === void 0 && (n = null), R(i({
            pathname: k.pathname,
            hash: "",
            search: ""
        }, typeof r == "string" ? J(r) : r, {
            state: n,
            key: j()
        }));
    }
    function H(r, n) {
        return [
            {
                usr: r.state,
                key: r.key,
                idx: n
            },
            A(r)
        ];
    }
    function E(r, n, t) {
        return !v.length || (v.call({
            action: r,
            location: n,
            retry: t
        }), !1);
    }
    function T(r) {
        x = r;
        var n = f();
        p = n[0], k = n[1], _.call({
            action: x,
            location: k
        });
    }
    function a(r, n) {
        var t = b.Push, c = S(r, n);
        function l() {
            a(r, n);
        }
        if (E(t, c, l)) {
            var w = H(c, p + 1), m = w[0], P = w[1];
            try {
                h.pushState(m, "", P);
            } catch  {
                i1.location.assign(P);
            }
            T(t);
        }
    }
    function o(r, n) {
        var t = b.Replace, c = S(r, n);
        function l() {
            o(r, n);
        }
        if (E(t, c, l)) {
            var w = H(c, p), m = w[0], P = w[1];
            h.replaceState(m, "", P), T(t);
        }
    }
    function d(r) {
        h.go(r);
    }
    var g = {
        get action () {
            return x;
        },
        get location () {
            return k;
        },
        createHref: A,
        push: a,
        replace: o,
        go: d,
        back: function() {
            d(-1);
        },
        forward: function() {
            d(1);
        },
        listen: function(n) {
            return _.push(n);
        },
        block: function(n) {
            var t = v.push(n);
            return v.length === 1 && i1.addEventListener(M1, B1), function() {
                t(), v.length || i1.removeEventListener(M1, B1);
            };
        }
    };
    return g;
}
function B1(e) {
    e.preventDefault(), e.returnValue = "";
}
function $1() {
    var e = [];
    return {
        get length () {
            return e.length;
        },
        push: function(s) {
            return e.push(s), function() {
                e = e.filter(function(i) {
                    return i !== s;
                });
            };
        },
        call: function(s) {
            e.forEach(function(i) {
                return i && i(s);
            });
        }
    };
}
function j() {
    return Math.random().toString(36).substr(2, 8);
}
function D(e) {
    var y = e.pathname, s = y === void 0 ? "/" : y, i = e.search, h = i === void 0 ? "" : i, f = e.hash, u = f === void 0 ? "" : f;
    return h && h !== "?" && (s += h.charAt(0) === "?" ? h : "?" + h), u && u !== "#" && (s += u.charAt(0) === "#" ? u : "#" + u), s;
}
function J(e) {
    var y = {};
    if (e) {
        var s = e.indexOf("#");
        s >= 0 && (y.hash = e.substr(s), e = e.substr(0, s));
        var i = e.indexOf("?");
        i >= 0 && (y.search = e.substr(i), e = e.substr(0, i)), e && (y.pathname = e);
    }
    return y;
}
var _ = Re(null), w1 = Re(null), y = Re({
    outlet: null,
    matches: []
});
function h(e, t) {
    if (!e) throw new Error(t);
}
function k1(e, t, n) {
    n === void 0 && (n = "/");
    let a = typeof t == "string" ? J(t) : t, o = L1(a.pathname || "/", n);
    if (o == null) return null;
    let s = W(e);
    G(s);
    let r = null;
    for(let i = 0; r == null && i < s.length; ++i)r = ae(s[i], o);
    return r;
}
function W(e, t, n, a) {
    return t === void 0 && (t = []), n === void 0 && (n = []), a === void 0 && (a = ""), e.forEach((o, s)=>{
        let r = {
            relativePath: o.path || "",
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        r.relativePath.startsWith("/") && (r.relativePath.startsWith(a) || h(!1), r.relativePath = r.relativePath.slice(a.length));
        let i = m([
            a,
            r.relativePath
        ]), l = n.concat(r);
        o.children && o.children.length > 0 && (o.index === !0 && h(!1), W(o.children, t, l, i)), !(o.path == null && !o.index) && t.push({
            path: i,
            score: te(i, o.index),
            routesMeta: l
        });
    }), t;
}
function G(e) {
    e.sort((t, n)=>t.score !== n.score ? n.score - t.score : ne(t.routesMeta.map((a)=>a.childrenIndex), n.routesMeta.map((a)=>a.childrenIndex)));
}
var q1 = /^:\w+$/, K1 = 3, Q = 2, X = 1, Z = 10, ee = -2, S = (e)=>e === "*";
function te(e, t) {
    let n = e.split("/"), a = n.length;
    return n.some(S) && (a += ee), t && (a += Q), n.filter((o)=>!S(o)).reduce((o, s)=>o + (q1.test(s) ? K1 : s === "" ? X : Z), a);
}
function ne(e, t) {
    return e.length === t.length && e.slice(0, -1).every((a, o)=>a === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function ae(e, t) {
    let { routesMeta: n  } = e, a = {}, o = "/", s = [];
    for(let r = 0; r < n.length; ++r){
        let i = n[r], l = r === n.length - 1, c = o === "/" ? t : t.slice(o.length) || "/", u = B2({
            path: i.relativePath,
            caseSensitive: i.caseSensitive,
            end: l
        }, c);
        if (!u) return null;
        Object.assign(a, u.params);
        let f = i.route;
        s.push({
            params: a,
            pathname: m([
                o,
                u.pathname
            ]),
            pathnameBase: T(m([
                o,
                u.pathnameBase
            ])),
            route: f
        }), u.pathnameBase !== "/" && (o = m([
            o,
            u.pathnameBase
        ]));
    }
    return s;
}
function B2(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, a] = oe(e.path, e.caseSensitive, e.end), o = t.match(n);
    if (!o) return null;
    let s = o[0], r = s.replace(/(.)\/+$/, "$1"), i = o.slice(1);
    return {
        params: a.reduce((c, u, f)=>{
            if (u === "*") {
                let g = i[f] || "";
                r = s.slice(0, s.length - g.length).replace(/(.)\/+$/, "$1");
            }
            return c[u] = re(i[f] || "", u), c;
        }, {}),
        pathname: s,
        pathnameBase: r,
        pattern: e
    };
}
function oe(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0);
    let a = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (r, i)=>(a.push(i), "([^\\/]+)"));
    return e.endsWith("*") ? (a.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)", [
        new RegExp(o, t ? void 0 : "i"),
        a
    ];
}
function re(e, t) {
    try {
        return decodeURIComponent(e);
    } catch  {
        return e;
    }
}
function ie1(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n , search: a = "" , hash: o = ""  } = typeof e == "string" ? J(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : se(n, t) : t,
        search: ue(a),
        hash: ce1(o)
    };
}
function se(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach((o)=>{
        o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }), n.length > 1 ? n.join("/") : "/";
}
function $2(e, t, n) {
    let a = typeof e == "string" ? J(e) : e, o = e === "" || a.pathname === "" ? "/" : a.pathname, s;
    if (o == null) s = n;
    else {
        let i = t.length - 1;
        if (o.startsWith("..")) {
            let l = o.split("/");
            for(; l[0] === "..";)l.shift(), i -= 1;
            a.pathname = l.join("/");
        }
        s = i >= 0 ? t[i] : "/";
    }
    let r = ie1(a, s);
    return o && o !== "/" && o.endsWith("/") && !r.pathname.endsWith("/") && (r.pathname += "/"), r;
}
function le(e) {
    return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? J(e).pathname : e.pathname;
}
function L1(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = e.charAt(t.length);
    return n && n !== "/" ? null : e.slice(t.length) || "/";
}
var m = (e)=>e.join("/").replace(/\/\/+/g, "/"), T = (e)=>e.replace(/\/+$/, "").replace(/^\/*/, "/"), ue = (e)=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ce1 = (e)=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function Ee1(e) {
    v() || h(!1);
    let { basename: t , navigator: n  } = Pe(_), { hash: a , pathname: o , search: s  } = de1(e), r = o;
    if (t !== "/") {
        let i = le(e), l = i != null && i.endsWith("/");
        r = o === "/" ? t + (l ? "/" : "") : m([
            t,
            o
        ]);
    }
    return n.createHref({
        pathname: r,
        search: s,
        hash: a
    });
}
function v() {
    return Pe(w1) != null;
}
function O() {
    return v() || h(!1), Pe(w1).location;
}
function he1() {
    v() || h(!1);
    let { basename: e , navigator: t  } = Pe(_), { matches: n  } = Pe(y), { pathname: a  } = O(), o = JSON.stringify(n.map((i)=>i.pathnameBase)), s = Me(!1);
    return Ve(()=>{
        s.current = !0;
    }), ge(function(i, l) {
        if (l === void 0 && (l = {}), !s.current) return;
        if (typeof i == "number") {
            t.go(i);
            return;
        }
        let c = $2(i, JSON.parse(o), a);
        e !== "/" && (c.pathname = m([
            e,
            c.pathname
        ])), (l.replace ? t.replace : t.push)(c, l.state);
    }, [
        e,
        t,
        o,
        a
    ]);
}
Re(null);
function de1(e) {
    let { matches: t  } = Pe(y), { pathname: n  } = O(), a = JSON.stringify(t.map((o)=>o.pathnameBase));
    return qe(()=>$2(e, JSON.parse(a), n), [
        e,
        a,
        n
    ]);
}
function fe(e, t) {
    v() || h(!1);
    let { matches: n  } = Pe(y), a = n[n.length - 1], o = a ? a.params : {}, s = a ? a.pathname : "/", r = a ? a.pathnameBase : "/", i = a && a.route, l = O(), c;
    if (t) {
        var u;
        let p = typeof t == "string" ? J(t) : t;
        r === "/" || ((u = p.pathname) == null ? void 0 : u.startsWith(r)) || h(!1), c = p;
    } else c = l;
    let f = c.pathname || "/", g = r === "/" ? f : f.slice(r.length) || "/", E = k1(e, {
        pathname: g
    });
    return I(E && E.map((p)=>Object.assign({}, p, {
            params: Object.assign({}, o, p.params),
            pathname: m([
                r,
                p.pathname
            ]),
            pathnameBase: p.pathnameBase === "/" ? r : m([
                r,
                p.pathnameBase
            ])
        })), n);
}
function I(e, t) {
    return t === void 0 && (t = []), e == null ? null : e.reduceRight((n, a, o)=>Ce(y.Provider, {
            children: a.route.element !== void 0 ? a.route.element : n,
            value: {
                outlet: n,
                matches: t.concat(e.slice(0, o + 1))
            }
        }), null);
}
function me1(e) {
    h(!1);
}
function ve1(e) {
    let { basename: t = "/" , children: n = null , location: a , navigationType: o = b.Pop , navigator: s , static: r = !1  } = e;
    v() && h(!1);
    let i = T(t), l = qe(()=>({
            basename: i,
            navigator: s,
            static: r
        }), [
        i,
        s,
        r
    ]);
    typeof a == "string" && (a = J(a));
    let { pathname: c = "/" , search: u = "" , hash: f = "" , state: g = null , key: E = "default"  } = a, p = qe(()=>{
        let V = L1(c, i);
        return V == null ? null : {
            pathname: V,
            search: u,
            hash: f,
            state: g,
            key: E
        };
    }, [
        i,
        c,
        u,
        f,
        g,
        E
    ]);
    return p == null ? null : Ce(_.Provider, {
        value: l
    }, Ce(w1.Provider, {
        children: n,
        value: {
            location: p,
            navigationType: o
        }
    }));
}
function Ve1(e) {
    let { children: t , location: n  } = e;
    return fe(b1(t), n);
}
function b1(e) {
    let t = [];
    return pe.forEach(e, (n)=>{
        if (!be(n)) return;
        if (n.type === de) {
            t.push.apply(t, b1(n.props.children));
            return;
        }
        n.type !== me1 && h(!1);
        let a = {
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            index: n.props.index,
            path: n.props.path
        };
        n.props.children && (a.children = b1(n.props.children)), t.push(a);
    }), t;
}
function d() {
    return d = Object.assign || function(e) {
        for(var n = 1; n < arguments.length; n++){
            var r = arguments[n];
            for(var t in r)Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        }
        return e;
    }, d.apply(this, arguments);
}
function x(e, n) {
    if (e == null) return {};
    var r = {}, t = Object.keys(e), o, a;
    for(a = 0; a < t.length; a++)o = t[a], !(n.indexOf(o) >= 0) && (r[o] = e[o]);
    return r;
}
var I1 = [
    "onClick",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to"
], K2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children"
];
function Y1(e) {
    let { basename: n , children: r , window: t  } = e, o = Me();
    o.current == null && (o.current = K({
        window: t
    }));
    let a = o.current, [i, s] = ze({
        action: a.action,
        location: a.location
    });
    return Ue(()=>a.listen(s), [
        a
    ]), Ce(ve1, {
        basename: n,
        children: r,
        location: i.location,
        navigationType: i.action,
        navigator: a
    });
}
function M2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var T1 = we(function(n, r) {
    let { onClick: t , reloadDocument: o , replace: a = !1 , state: i , target: s , to: l  } = n, u = x(n, I1), m = Ee1(l), y = F1(l, {
        replace: a,
        state: i,
        target: s
    });
    function v(c) {
        t && t(c), !c.defaultPrevented && !o && y(c);
    }
    return Ce("a", d({}, u, {
        href: m,
        onClick: v,
        ref: r,
        target: s
    }));
}), G1 = we(function(n, r) {
    let { "aria-current": t = "page" , caseSensitive: o = !1 , className: a = "" , end: i = !1 , style: s , to: l , children: u  } = n, m = x(n, K2), y = O(), v = de1(l), c = y.pathname, f = v.pathname;
    o || (c = c.toLowerCase(), f = f.toLowerCase());
    let h = c === f || !i && c.startsWith(f) && c.charAt(f.length) === "/", A = h ? t : void 0, g;
    typeof a == "function" ? g = a({
        isActive: h
    }) : g = [
        a,
        h ? "active" : null
    ].filter(Boolean).join(" ");
    let H = typeof s == "function" ? s({
        isActive: h
    }) : s;
    return Ce(T1, d({}, m, {
        "aria-current": A,
        className: g,
        ref: r,
        style: H,
        to: l
    }), typeof u == "function" ? u({
        isActive: h
    }) : u);
});
function F1(e, n) {
    let { target: r , replace: t , state: o  } = n === void 0 ? {} : n, a = he1(), i = O(), s = de1(e);
    return ge((l)=>{
        if (l.button === 0 && (!r || r === "_self") && !M2(l)) {
            l.preventDefault();
            let u = !!t || D(i) === D(s);
            a(e, {
                replace: u,
                state: o
            });
        }
    }, [
        i,
        a,
        s,
        t,
        o,
        r,
        e
    ]);
}
var __setImmediate$ = (cb, ...args)=>setTimeout(cb, 0, ...args);
var U1 = Object.create;
var $3 = Object.defineProperty;
var X1 = Object.getOwnPropertyDescriptor;
var Z1 = Object.getOwnPropertyNames;
var ee1 = Object.getPrototypeOf, ne1 = Object.prototype.hasOwnProperty;
var B3 = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports);
var te1 = (e, n, t, l)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let i of Z1(n))!ne1.call(e, i) && i !== t && $3(e, i, {
        get: ()=>n[i],
        enumerable: !(l = X1(n, i)) || l.enumerable
    });
    return e;
};
var D1 = (e, n, t)=>(t = e != null ? U1(ee1(e)) : {}, te1(n || !e || !e.__esModule ? $3(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var K3 = B3((r)=>{
    "use strict";
    function T(e, n) {
        var t = e.length;
        e.push(n);
        e: for(; 0 < t;){
            var l = t - 1 >>> 1, i = e[l];
            if (0 < g(i, n)) e[l] = n, e[t] = i, t = l;
            else break e;
        }
    }
    function o(e) {
        return e.length === 0 ? null : e[0];
    }
    function k(e) {
        if (e.length === 0) return null;
        var n = e[0], t = e.pop();
        if (t !== n) {
            e[0] = t;
            e: for(var l = 0, i = e.length, y = i >>> 1; l < y;){
                var f = 2 * (l + 1) - 1, x = e[f], b = f + 1, m = e[b];
                if (0 > g(x, t)) b < i && 0 > g(m, x) ? (e[l] = m, e[b] = t, l = b) : (e[l] = x, e[f] = t, l = f);
                else if (b < i && 0 > g(m, t)) e[l] = m, e[b] = t, l = b;
                else break e;
            }
        }
        return n;
    }
    function g(e, n) {
        var t = e.sortIndex - n.sortIndex;
        return t !== 0 ? t : e.id - n.id;
    }
    typeof performance == "object" && typeof performance.now == "function" ? (q = performance, r.unstable_now = function() {
        return q.now();
    }) : (I = Date, O = I.now(), r.unstable_now = function() {
        return I.now() - O;
    });
    var q, I, O, s = [], c = [], re = 1, a = null, u = 3, P = !1, p = !1, d = !1, z = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, W = typeof __setImmediate$ < "u" ? __setImmediate$ : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function L(e) {
        for(var n = o(c); n !== null;){
            if (n.callback === null) k(c);
            else if (n.startTime <= e) k(c), n.sortIndex = n.expirationTime, T(s, n);
            else break;
            n = o(c);
        }
    }
    function N(e) {
        if (d = !1, L(e), !p) if (o(s) !== null) p = !0, M(F);
        else {
            var n = o(c);
            n !== null && j(N, n.startTime - e);
        }
    }
    function F(e, n) {
        p = !1, d && (d = !1, A(v), v = -1), P = !0;
        var t = u;
        try {
            for(L(n), a = o(s); a !== null && (!(a.expirationTime > n) || e && !J());){
                var l = a.callback;
                if (typeof l == "function") {
                    a.callback = null, u = a.priorityLevel;
                    var i = l(a.expirationTime <= n);
                    n = r.unstable_now(), typeof i == "function" ? a.callback = i : a === o(s) && k(s), L(n);
                } else k(s);
                a = o(s);
            }
            if (a !== null) var y = !0;
            else {
                var f = o(c);
                f !== null && j(N, f.startTime - n), y = !1;
            }
            return y;
        } finally{
            a = null, u = t, P = !1;
        }
    }
    var w = !1, h = null, v = -1, G = 5, H = -1;
    function J() {
        return !(r.unstable_now() - H < G);
    }
    function C() {
        if (h !== null) {
            var e = r.unstable_now();
            H = e;
            var n = !0;
            try {
                n = h(!0, e);
            } finally{
                n ? _() : (w = !1, h = null);
            }
        } else w = !1;
    }
    var _;
    typeof W == "function" ? _ = function() {
        W(C);
    } : typeof MessageChannel < "u" ? (E = new MessageChannel, Y = E.port2, E.port1.onmessage = C, _ = function() {
        Y.postMessage(null);
    }) : _ = function() {
        z(C, 0);
    };
    var E, Y;
    function M(e) {
        h = e, w || (w = !0, _());
    }
    function j(e, n) {
        v = z(function() {
            e(r.unstable_now());
        }, n);
    }
    r.unstable_IdlePriority = 5;
    r.unstable_ImmediatePriority = 1;
    r.unstable_LowPriority = 4;
    r.unstable_NormalPriority = 3;
    r.unstable_Profiling = null;
    r.unstable_UserBlockingPriority = 2;
    r.unstable_cancelCallback = function(e) {
        e.callback = null;
    };
    r.unstable_continueExecution = function() {
        p || P || (p = !0, M(F));
    };
    r.unstable_forceFrameRate = function(e) {
        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < e ? Math.floor(1e3 / e) : 5;
    };
    r.unstable_getCurrentPriorityLevel = function() {
        return u;
    };
    r.unstable_getFirstCallbackNode = function() {
        return o(s);
    };
    r.unstable_next = function(e) {
        switch(u){
            case 1:
            case 2:
            case 3:
                var n = 3;
                break;
            default:
                n = u;
        }
        var t = u;
        u = n;
        try {
            return e();
        } finally{
            u = t;
        }
    };
    r.unstable_pauseExecution = function() {};
    r.unstable_requestPaint = function() {};
    r.unstable_runWithPriority = function(e, n) {
        switch(e){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3;
        }
        var t = u;
        u = e;
        try {
            return n();
        } finally{
            u = t;
        }
    };
    r.unstable_scheduleCallback = function(e, n, t) {
        var l = r.unstable_now();
        switch(typeof t == "object" && t !== null ? (t = t.delay, t = typeof t == "number" && 0 < t ? l + t : l) : t = l, e){
            case 1:
                var i = -1;
                break;
            case 2:
                i = 250;
                break;
            case 5:
                i = 1073741823;
                break;
            case 4:
                i = 1e4;
                break;
            default:
                i = 5e3;
        }
        return i = t + i, e = {
            id: re++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: i,
            sortIndex: -1
        }, t > l ? (e.sortIndex = t, T(c, e), o(s) === null && e === o(c) && (d ? (A(v), v = -1) : d = !0, j(N, t - l))) : (e.sortIndex = i, T(s, e), p || P || (p = !0, M(F))), e;
    };
    r.unstable_shouldYield = J;
    r.unstable_wrapCallback = function(e) {
        var n = u;
        return function() {
            var t = u;
            u = n;
            try {
                return e.apply(this, arguments);
            } finally{
                u = t;
            }
        };
    };
});
var R1 = B3((oe, Q)=>{
    "use strict";
    Q.exports = K3();
});
var S1 = D1(R1()), V = D1(R1()), { unstable_now: se1 , unstable_IdlePriority: ce2 , unstable_ImmediatePriority: fe1 , unstable_LowPriority: be1 , unstable_NormalPriority: pe1 , unstable_Profiling: _e1 , unstable_UserBlockingPriority: de2 , unstable_cancelCallback: ve2 , unstable_continueExecution: ye1 , unstable_forceFrameRate: me2 , unstable_getCurrentPriorityLevel: ge1 , unstable_getFirstCallbackNode: he2 , unstable_next: ke1 , unstable_pauseExecution: Pe1 , unstable_requestPaint: we1 , unstable_runWithPriority: xe1 , unstable_scheduleCallback: Ie1 , unstable_shouldYield: Ce1 , unstable_wrapCallback: Ee2  } = V, { default: le1 , ...ie2 } = V, Te1 = (S1.default ?? le1) ?? ie2;
var Sa = Object.create;
var lu = Object.defineProperty;
var ka = Object.getOwnPropertyDescriptor;
var Ea = Object.getOwnPropertyNames;
var Ca = Object.getPrototypeOf, xa = Object.prototype.hasOwnProperty;
((e)=>typeof require != "undefined" ? require : typeof Proxy != "undefined" ? new Proxy(e, {
        get: (n, t)=>(typeof require != "undefined" ? require : n)[t]
    }) : e)(function(e) {
    if (typeof require != "undefined") return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported');
});
var uu = (e, n)=>()=>(n || e((n = {
            exports: {}
        }).exports, n), n.exports);
var Na = (e, n, t, r)=>{
    if (n && typeof n == "object" || typeof n == "function") for (let l of Ea(n))!xa.call(e, l) && l !== t && lu(e, l, {
        get: ()=>n[l],
        enumerable: !(r = ka(n, l)) || r.enumerable
    });
    return e;
};
var ou = (e, n, t)=>(t = e != null ? Sa(Ca(e)) : {}, Na(n || !e || !e.__esModule ? lu(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e));
var ma = uu((fe)=>{
    "use strict";
    var ho = Ye, ae = Te1;
    function v(e) {
        for(var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)n += "&args[]=" + encodeURIComponent(arguments[t]);
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    var vo = new Set, gt = {};
    function Sn(e, n) {
        Hn(e, n), Hn(e + "Capture", n);
    }
    function Hn(e, n) {
        for(gt[e] = n, e = 0; e < n.length; e++)vo.add(n[e]);
    }
    var Fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), kl = Object.prototype.hasOwnProperty, _a = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, su = {}, au = {};
    function za(e) {
        return kl.call(au, e) ? !0 : kl.call(su, e) ? !1 : _a.test(e) ? au[e] = !0 : (su[e] = !0, !1);
    }
    function Pa(e, n, t, r) {
        if (t !== null && t.type === 0) return !1;
        switch(typeof n){
            case "function":
            case "symbol":
                return !0;
            case "boolean":
                return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
            default:
                return !1;
        }
    }
    function La(e, n, t, r) {
        if (n === null || typeof n > "u" || Pa(e, n, t, r)) return !0;
        if (r) return !1;
        if (t !== null) switch(t.type){
            case 3:
                return !n;
            case 4:
                return n === !1;
            case 5:
                return isNaN(n);
            case 6:
                return isNaN(n) || 1 > n;
        }
        return !1;
    }
    function ee(e, n, t, r, l, i, u) {
        this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = i, this.removeEmptyString = u;
    }
    var Y = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        Y[e] = new ee(e, 0, !1, e, null, !1, !1);
    });
    [
        [
            "acceptCharset",
            "accept-charset"
        ],
        [
            "className",
            "class"
        ],
        [
            "htmlFor",
            "for"
        ],
        [
            "httpEquiv",
            "http-equiv"
        ]
    ].forEach(function(e) {
        var n = e[0];
        Y[n] = new ee(n, 1, !1, e[1], null, !1, !1);
    });
    [
        "contentEditable",
        "draggable",
        "spellCheck",
        "value"
    ].forEach(function(e) {
        Y[e] = new ee(e, 2, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha"
    ].forEach(function(e) {
        Y[e] = new ee(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        Y[e] = new ee(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
    [
        "checked",
        "multiple",
        "muted",
        "selected"
    ].forEach(function(e) {
        Y[e] = new ee(e, 3, !0, e, null, !1, !1);
    });
    [
        "capture",
        "download"
    ].forEach(function(e) {
        Y[e] = new ee(e, 4, !1, e, null, !1, !1);
    });
    [
        "cols",
        "rows",
        "size",
        "span"
    ].forEach(function(e) {
        Y[e] = new ee(e, 6, !1, e, null, !1, !1);
    });
    [
        "rowSpan",
        "start"
    ].forEach(function(e) {
        Y[e] = new ee(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var pi = /[\-:]([a-z])/g;
    function mi(e) {
        return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var n = e.replace(pi, mi);
        Y[n] = new ee(n, 1, !1, e, null, !1, !1);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var n = e.replace(pi, mi);
        Y[n] = new ee(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
    [
        "xml:base",
        "xml:lang",
        "xml:space"
    ].forEach(function(e) {
        var n = e.replace(pi, mi);
        Y[n] = new ee(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    });
    [
        "tabIndex",
        "crossOrigin"
    ].forEach(function(e) {
        Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Y.xlinkHref = new ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
    [
        "src",
        "href",
        "action",
        "formAction"
    ].forEach(function(e) {
        Y[e] = new ee(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function hi(e, n, t, r) {
        var l = Y.hasOwnProperty(n) ? Y[n] : null;
        (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (La(n, t, l, r) && (t = null), r || l === null ? za(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    var Ve = ho.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Vt = Symbol.for("react.element"), xn = Symbol.for("react.portal"), Nn = Symbol.for("react.fragment"), vi = Symbol.for("react.strict_mode"), El = Symbol.for("react.profiler"), yo = Symbol.for("react.provider"), go = Symbol.for("react.context"), yi = Symbol.for("react.forward_ref"), Cl = Symbol.for("react.suspense"), xl = Symbol.for("react.suspense_list"), gi = Symbol.for("react.memo"), He = Symbol.for("react.lazy");
    Symbol.for("react.scope");
    Symbol.for("react.debug_trace_mode");
    var wo = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden");
    Symbol.for("react.cache");
    Symbol.for("react.tracing_marker");
    var cu = Symbol.iterator;
    function Jn(e) {
        return e === null || typeof e != "object" ? null : (e = cu && e[cu] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var F = Object.assign, br;
    function it(e) {
        if (br === void 0) try {
            throw Error();
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            br = n && n[1] || "";
        }
        return `
` + br + e;
    }
    var el = !1;
    function nl(e, n) {
        if (!e || el) return "";
        el = !0;
        var t = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (n) if (n = function() {
                throw Error();
            }, Object.defineProperty(n.prototype, "props", {
                set: function() {
                    throw Error();
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, []);
                } catch (d) {
                    var r = d;
                }
                Reflect.construct(e, [], n);
            } else {
                try {
                    n.call();
                } catch (d1) {
                    r = d1;
                }
                e.call(n.prototype);
            }
            else {
                try {
                    throw Error();
                } catch (d2) {
                    r = d2;
                }
                e();
            }
        } catch (d3) {
            if (d3 && r && typeof d3.stack == "string") {
                for(var l = d3.stack.split(`
`), i = r.stack.split(`
`), u = l.length - 1, o = i.length - 1; 1 <= u && 0 <= o && l[u] !== i[o];)o--;
                for(; 1 <= u && 0 <= o; u--, o--)if (l[u] !== i[o]) {
                    if (u !== 1 || o !== 1) do if (u--, o--, 0 > o || l[u] !== i[o]) {
                        var s = `
` + l[u].replace(" at new ", " at ");
                        return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                    }
                    while (1 <= u && 0 <= o)
                    break;
                }
            }
        } finally{
            el = !1, Error.prepareStackTrace = t;
        }
        return (e = e ? e.displayName || e.name : "") ? it(e) : "";
    }
    function Ta(e) {
        switch(e.tag){
            case 5:
                return it(e.type);
            case 16:
                return it("Lazy");
            case 13:
                return it("Suspense");
            case 19:
                return it("SuspenseList");
            case 0:
            case 2:
            case 15:
                return e = nl(e.type, !1), e;
            case 11:
                return e = nl(e.type.render, !1), e;
            case 1:
                return e = nl(e.type, !0), e;
            default:
                return "";
        }
    }
    function Nl(e) {
        if (e == null) return null;
        if (typeof e == "function") return e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch(e){
            case Nn:
                return "Fragment";
            case xn:
                return "Portal";
            case El:
                return "Profiler";
            case vi:
                return "StrictMode";
            case Cl:
                return "Suspense";
            case xl:
                return "SuspenseList";
        }
        if (typeof e == "object") switch(e.$$typeof){
            case go:
                return (e.displayName || "Context") + ".Consumer";
            case yo:
                return (e._context.displayName || "Context") + ".Provider";
            case yi:
                var n = e.render;
                return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case gi:
                return n = e.displayName || null, n !== null ? n : Nl(e.type) || "Memo";
            case He:
                n = e._payload, e = e._init;
                try {
                    return Nl(e(n));
                } catch  {}
        }
        return null;
    }
    function Ma(e) {
        var n = e.type;
        switch(e.tag){
            case 24:
                return "Cache";
            case 9:
                return (n.displayName || "Context") + ".Consumer";
            case 10:
                return (n._context.displayName || "Context") + ".Provider";
            case 18:
                return "DehydratedFragment";
            case 11:
                return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
            case 7:
                return "Fragment";
            case 5:
                return n;
            case 4:
                return "Portal";
            case 3:
                return "Root";
            case 6:
                return "Text";
            case 16:
                return Nl(n);
            case 8:
                return n === vi ? "StrictMode" : "Mode";
            case 22:
                return "Offscreen";
            case 12:
                return "Profiler";
            case 21:
                return "Scope";
            case 13:
                return "Suspense";
            case 19:
                return "SuspenseList";
            case 25:
                return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
                if (typeof n == "function") return n.displayName || n.name || null;
                if (typeof n == "string") return n;
        }
        return null;
    }
    function tn(e) {
        switch(typeof e){
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return "";
        }
    }
    function So(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
    }
    function Da(e) {
        var n = So(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
        if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
            var l = t.get, i = t.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return l.call(this);
                },
                set: function(u) {
                    r = "" + u, i.call(this, u);
                }
            }), Object.defineProperty(e, n, {
                enumerable: t.enumerable
            }), {
                getValue: function() {
                    return r;
                },
                setValue: function(u) {
                    r = "" + u;
                },
                stopTracking: function() {
                    e._valueTracker = null, delete e[n];
                }
            };
        }
    }
    function At(e) {
        e._valueTracker || (e._valueTracker = Da(e));
    }
    function ko(e) {
        if (!e) return !1;
        var n = e._valueTracker;
        if (!n) return !0;
        var t = n.getValue(), r = "";
        return e && (r = So(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
    }
    function mr(e) {
        if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
        try {
            return e.activeElement || e.body;
        } catch  {
            return e.body;
        }
    }
    function _l(e, n) {
        var t = n.checked;
        return F({}, n, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: t ?? e._wrapperState.initialChecked
        });
    }
    function fu(e, n) {
        var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
        t = tn(n.value != null ? n.value : t), e._wrapperState = {
            initialChecked: r,
            initialValue: t,
            controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
        };
    }
    function Eo(e, n) {
        n = n.checked, n != null && hi(e, "checked", n, !1);
    }
    function zl(e, n) {
        Eo(e, n);
        var t = tn(n.value), r = n.type;
        if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
        else if (r === "submit" || r === "reset") {
            e.removeAttribute("value");
            return;
        }
        n.hasOwnProperty("value") ? Pl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Pl(e, n.type, tn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
    }
    function du(e, n, t) {
        if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
            var r = n.type;
            if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
            n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
        }
        t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
    }
    function Pl(e, n, t) {
        (n !== "number" || mr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    var ut = Array.isArray;
    function In(e, n, t, r) {
        if (e = e.options, n) {
            n = {};
            for(var l = 0; l < t.length; l++)n["$" + t[l]] = !0;
            for(t = 0; t < e.length; t++)l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
        } else {
            for(t = "" + tn(t), n = null, l = 0; l < e.length; l++){
                if (e[l].value === t) {
                    e[l].selected = !0, r && (e[l].defaultSelected = !0);
                    return;
                }
                n !== null || e[l].disabled || (n = e[l]);
            }
            n !== null && (n.selected = !0);
        }
    }
    function Ll(e, n) {
        if (n.dangerouslySetInnerHTML != null) throw Error(v(91));
        return F({}, n, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        });
    }
    function pu(e, n) {
        var t = n.value;
        if (t == null) {
            if (t = n.children, n = n.defaultValue, t != null) {
                if (n != null) throw Error(v(92));
                if (ut(t)) {
                    if (1 < t.length) throw Error(v(93));
                    t = t[0];
                }
                n = t;
            }
            n == null && (n = ""), t = n;
        }
        e._wrapperState = {
            initialValue: tn(t)
        };
    }
    function Co(e, n) {
        var t = tn(n.value), r = tn(n.defaultValue);
        t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
    }
    function mu(e) {
        var n = e.textContent;
        n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
    }
    function xo(e) {
        switch(e){
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml";
        }
    }
    function Tl(e, n) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? xo(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
    }
    var Bt, No = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(n, t, r, l);
            });
        } : e;
    }(function(e, n) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
        else {
            for(Bt = Bt || document.createElement("div"), Bt.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = Bt.firstChild; e.firstChild;)e.removeChild(e.firstChild);
            for(; n.firstChild;)e.appendChild(n.firstChild);
        }
    });
    function wt(e, n) {
        if (n) {
            var t = e.firstChild;
            if (t && t === e.lastChild && t.nodeType === 3) {
                t.nodeValue = n;
                return;
            }
        }
        e.textContent = n;
    }
    var at = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    }, Oa = [
        "Webkit",
        "ms",
        "Moz",
        "O"
    ];
    Object.keys(at).forEach(function(e) {
        Oa.forEach(function(n) {
            n = n + e.charAt(0).toUpperCase() + e.substring(1), at[n] = at[e];
        });
    });
    function _o(e, n, t) {
        return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || at.hasOwnProperty(e) && at[e] ? ("" + n).trim() : n + "px";
    }
    function zo(e, n) {
        e = e.style;
        for(var t in n)if (n.hasOwnProperty(t)) {
            var r = t.indexOf("--") === 0, l = _o(t, n[t], r);
            t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
        }
    }
    var Ra = F({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Ml(e, n) {
        if (n) {
            if (Ra[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
            if (n.dangerouslySetInnerHTML != null) {
                if (n.children != null) throw Error(v(60));
                if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(v(61));
            }
            if (n.style != null && typeof n.style != "object") throw Error(v(62));
        }
    }
    function Dl(e, n) {
        if (e.indexOf("-") === -1) return typeof n.is == "string";
        switch(e){
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var Ol = null;
    function wi(e) {
        return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var Rl = null, Un = null, jn = null;
    function hu(e) {
        if (e = Ut(e)) {
            if (typeof Rl != "function") throw Error(v(280));
            var n = e.stateNode;
            n && (n = Hr(n), Rl(e.stateNode, e.type, n));
        }
    }
    function Po(e) {
        Un ? jn ? jn.push(e) : jn = [
            e
        ] : Un = e;
    }
    function Lo() {
        if (Un) {
            var e = Un, n = jn;
            if (jn = Un = null, hu(e), n) for(e = 0; e < n.length; e++)hu(n[e]);
        }
    }
    function To(e, n) {
        return e(n);
    }
    function Mo() {}
    var tl = !1;
    function Do(e, n, t) {
        if (tl) return e(n, t);
        tl = !0;
        try {
            return To(e, n, t);
        } finally{
            tl = !1, (Un !== null || jn !== null) && (Mo(), Lo());
        }
    }
    function St(e, n) {
        var t = e.stateNode;
        if (t === null) return null;
        var r = Hr(t);
        if (r === null) return null;
        t = r[n];
        e: switch(n){
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
                break e;
            default:
                e = !1;
        }
        if (e) return null;
        if (t && typeof t != "function") throw Error(v(231, n, typeof t));
        return t;
    }
    var Fl = !1;
    if (Fe) try {
        En = {}, Object.defineProperty(En, "passive", {
            get: function() {
                Fl = !0;
            }
        }), window.addEventListener("test", En, En), window.removeEventListener("test", En, En);
    } catch  {
        Fl = !1;
    }
    var En;
    function Fa(e, n, t, r, l, i, u, o, s) {
        var d = Array.prototype.slice.call(arguments, 3);
        try {
            n.apply(t, d);
        } catch (m) {
            this.onError(m);
        }
    }
    var ct = !1, hr = null, vr = !1, Il = null, Ia = {
        onError: function(e) {
            ct = !0, hr = e;
        }
    };
    function Ua(e, n, t, r, l, i, u, o, s) {
        ct = !1, hr = null, Fa.apply(Ia, arguments);
    }
    function ja(e, n, t, r, l, i, u, o, s) {
        if (Ua.apply(this, arguments), ct) {
            if (ct) {
                var d = hr;
                ct = !1, hr = null;
            } else throw Error(v(198));
            vr || (vr = !0, Il = d);
        }
    }
    function kn(e) {
        var n = e, t = e;
        if (e.alternate) for(; n.return;)n = n.return;
        else {
            e = n;
            do n = e, (n.flags & 4098) !== 0 && (t = n.return), e = n.return;
            while (e)
        }
        return n.tag === 3 ? t : null;
    }
    function Oo(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
        }
        return null;
    }
    function vu(e) {
        if (kn(e) !== e) throw Error(v(188));
    }
    function Va(e) {
        var n = e.alternate;
        if (!n) {
            if (n = kn(e), n === null) throw Error(v(188));
            return n !== e ? null : e;
        }
        for(var t = e, r = n;;){
            var l = t.return;
            if (l === null) break;
            var i = l.alternate;
            if (i === null) {
                if (r = l.return, r !== null) {
                    t = r;
                    continue;
                }
                break;
            }
            if (l.child === i.child) {
                for(i = l.child; i;){
                    if (i === t) return vu(l), e;
                    if (i === r) return vu(l), n;
                    i = i.sibling;
                }
                throw Error(v(188));
            }
            if (t.return !== r.return) t = l, r = i;
            else {
                for(var u = !1, o = l.child; o;){
                    if (o === t) {
                        u = !0, t = l, r = i;
                        break;
                    }
                    if (o === r) {
                        u = !0, r = l, t = i;
                        break;
                    }
                    o = o.sibling;
                }
                if (!u) {
                    for(o = i.child; o;){
                        if (o === t) {
                            u = !0, t = i, r = l;
                            break;
                        }
                        if (o === r) {
                            u = !0, r = i, t = l;
                            break;
                        }
                        o = o.sibling;
                    }
                    if (!u) throw Error(v(189));
                }
            }
            if (t.alternate !== r) throw Error(v(190));
        }
        if (t.tag !== 3) throw Error(v(188));
        return t.stateNode.current === t ? e : n;
    }
    function Ro(e) {
        return e = Va(e), e !== null ? Fo(e) : null;
    }
    function Fo(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for(e = e.child; e !== null;){
            var n = Fo(e);
            if (n !== null) return n;
            e = e.sibling;
        }
        return null;
    }
    var Io = ae.unstable_scheduleCallback, yu = ae.unstable_cancelCallback, Aa = ae.unstable_shouldYield, Ba = ae.unstable_requestPaint, j = ae.unstable_now, Ha = ae.unstable_getCurrentPriorityLevel, Si = ae.unstable_ImmediatePriority, Uo = ae.unstable_UserBlockingPriority, yr = ae.unstable_NormalPriority, Wa = ae.unstable_LowPriority, jo = ae.unstable_IdlePriority, jr = null, Pe = null;
    function Qa(e) {
        if (Pe && typeof Pe.onCommitFiberRoot == "function") try {
            Pe.onCommitFiberRoot(jr, e, void 0, (e.current.flags & 128) === 128);
        } catch  {}
    }
    var Ee = Math.clz32 ? Math.clz32 : Ya, $a = Math.log, Ka = Math.LN2;
    function Ya(e) {
        return e >>>= 0, e === 0 ? 32 : 31 - ($a(e) / Ka | 0) | 0;
    }
    var Ht = 64, Wt = 4194304;
    function ot(e) {
        switch(e & -e){
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194240;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return e & 130023424;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 1073741824;
            default:
                return e;
        }
    }
    function gr(e, n) {
        var t = e.pendingLanes;
        if (t === 0) return 0;
        var r = 0, l = e.suspendedLanes, i = e.pingedLanes, u = t & 268435455;
        if (u !== 0) {
            var o = u & ~l;
            o !== 0 ? r = ot(o) : (i &= u, i !== 0 && (r = ot(i)));
        } else u = t & ~l, u !== 0 ? r = ot(u) : i !== 0 && (r = ot(i));
        if (r === 0) return 0;
        if (n !== 0 && n !== r && (n & l) === 0 && (l = r & -r, i = n & -n, l >= i || l === 16 && (i & 4194240) !== 0)) return n;
        if ((r & 4) !== 0 && (r |= t & 16), n = e.entangledLanes, n !== 0) for(e = e.entanglements, n &= r; 0 < n;)t = 31 - Ee(n), l = 1 << t, r |= e[t], n &= ~l;
        return r;
    }
    function Xa(e, n) {
        switch(e){
            case 1:
            case 2:
            case 4:
                return n + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return n + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                return -1;
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function Ga(e, n) {
        for(var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;){
            var u = 31 - Ee(i), o = 1 << u, s = l[u];
            s === -1 ? ((o & t) === 0 || (o & r) !== 0) && (l[u] = Xa(o, n)) : s <= n && (e.expiredLanes |= o), i &= ~o;
        }
    }
    function Ul(e) {
        return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
    }
    function Vo() {
        var e = Ht;
        return Ht <<= 1, (Ht & 4194240) === 0 && (Ht = 64), e;
    }
    function rl(e) {
        for(var n = [], t = 0; 31 > t; t++)n.push(e);
        return n;
    }
    function Ft(e, n, t) {
        e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Ee(n), e[n] = t;
    }
    function Za(e, n) {
        var t = e.pendingLanes & ~n;
        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
        var r = e.eventTimes;
        for(e = e.expirationTimes; 0 < t;){
            var l = 31 - Ee(t), i = 1 << l;
            n[l] = 0, r[l] = -1, e[l] = -1, t &= ~i;
        }
    }
    function ki(e, n) {
        var t = e.entangledLanes |= n;
        for(e = e.entanglements; t;){
            var r = 31 - Ee(t), l = 1 << r;
            l & n | e[r] & n && (e[r] |= n), t &= ~l;
        }
    }
    var P = 0;
    function Ao(e) {
        return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
    }
    var Bo, Ei, Ho, Wo, Qo, jl = !1, Qt = [], Xe = null, Ge = null, Ze = null, kt = new Map, Et = new Map, Qe = [], Ja = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function gu(e, n) {
        switch(e){
            case "focusin":
            case "focusout":
                Xe = null;
                break;
            case "dragenter":
            case "dragleave":
                Ge = null;
                break;
            case "mouseover":
            case "mouseout":
                Ze = null;
                break;
            case "pointerover":
            case "pointerout":
                kt.delete(n.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Et.delete(n.pointerId);
        }
    }
    function qn(e, n, t, r, l, i) {
        return e === null || e.nativeEvent !== i ? (e = {
            blockedOn: n,
            domEventName: t,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [
                l
            ]
        }, n !== null && (n = Ut(n), n !== null && Ei(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
    }
    function qa(e, n, t, r, l) {
        switch(n){
            case "focusin":
                return Xe = qn(Xe, e, n, t, r, l), !0;
            case "dragenter":
                return Ge = qn(Ge, e, n, t, r, l), !0;
            case "mouseover":
                return Ze = qn(Ze, e, n, t, r, l), !0;
            case "pointerover":
                var i = l.pointerId;
                return kt.set(i, qn(kt.get(i) || null, e, n, t, r, l)), !0;
            case "gotpointercapture":
                return i = l.pointerId, Et.set(i, qn(Et.get(i) || null, e, n, t, r, l)), !0;
        }
        return !1;
    }
    function $o(e) {
        var n = cn(e.target);
        if (n !== null) {
            var t = kn(n);
            if (t !== null) {
                if (n = t.tag, n === 13) {
                    if (n = Oo(t), n !== null) {
                        e.blockedOn = n, Qo(e.priority, function() {
                            Ho(t);
                        });
                        return;
                    }
                } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        e.blockedOn = null;
    }
    function lr(e) {
        if (e.blockedOn !== null) return !1;
        for(var n = e.targetContainers; 0 < n.length;){
            var t = Vl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
            if (t === null) {
                t = e.nativeEvent;
                var r = new t.constructor(t.type, t);
                Ol = r, t.target.dispatchEvent(r), Ol = null;
            } else return n = Ut(t), n !== null && Ei(n), e.blockedOn = t, !1;
            n.shift();
        }
        return !0;
    }
    function wu(e, n, t) {
        lr(e) && t.delete(n);
    }
    function ba() {
        jl = !1, Xe !== null && lr(Xe) && (Xe = null), Ge !== null && lr(Ge) && (Ge = null), Ze !== null && lr(Ze) && (Ze = null), kt.forEach(wu), Et.forEach(wu);
    }
    function bn(e, n) {
        e.blockedOn === n && (e.blockedOn = null, jl || (jl = !0, ae.unstable_scheduleCallback(ae.unstable_NormalPriority, ba)));
    }
    function Ct(e) {
        function n(l) {
            return bn(l, e);
        }
        if (0 < Qt.length) {
            bn(Qt[0], e);
            for(var t = 1; t < Qt.length; t++){
                var r = Qt[t];
                r.blockedOn === e && (r.blockedOn = null);
            }
        }
        for(Xe !== null && bn(Xe, e), Ge !== null && bn(Ge, e), Ze !== null && bn(Ze, e), kt.forEach(n), Et.forEach(n), t = 0; t < Qe.length; t++)r = Qe[t], r.blockedOn === e && (r.blockedOn = null);
        for(; 0 < Qe.length && (t = Qe[0], t.blockedOn === null);)$o(t), t.blockedOn === null && Qe.shift();
    }
    var Vn = Ve.ReactCurrentBatchConfig, wr = !0;
    function ec(e, n, t, r) {
        var l = P, i = Vn.transition;
        Vn.transition = null;
        try {
            P = 1, Ci(e, n, t, r);
        } finally{
            P = l, Vn.transition = i;
        }
    }
    function nc(e, n, t, r) {
        var l = P, i = Vn.transition;
        Vn.transition = null;
        try {
            P = 4, Ci(e, n, t, r);
        } finally{
            P = l, Vn.transition = i;
        }
    }
    function Ci(e, n, t, r) {
        if (wr) {
            var l = Vl(e, n, t, r);
            if (l === null) cl(e, n, r, Sr, t), gu(e, r);
            else if (qa(l, e, n, t, r)) r.stopPropagation();
            else if (gu(e, r), n & 4 && -1 < Ja.indexOf(e)) {
                for(; l !== null;){
                    var i = Ut(l);
                    if (i !== null && Bo(i), i = Vl(e, n, t, r), i === null && cl(e, n, r, Sr, t), i === l) break;
                    l = i;
                }
                l !== null && r.stopPropagation();
            } else cl(e, n, r, null, t);
        }
    }
    var Sr = null;
    function Vl(e, n, t, r) {
        if (Sr = null, e = wi(r), e = cn(e), e !== null) if (n = kn(e), n === null) e = null;
        else if (t = n.tag, t === 13) {
            if (e = Oo(n), e !== null) return e;
            e = null;
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null;
        } else n !== e && (e = null);
        return Sr = e, null;
    }
    function Ko(e) {
        switch(e){
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 4;
            case "message":
                switch(Ha()){
                    case Si:
                        return 1;
                    case Uo:
                        return 4;
                    case yr:
                    case Wa:
                        return 16;
                    case jo:
                        return 536870912;
                    default:
                        return 16;
                }
            default:
                return 16;
        }
    }
    var Ke = null, xi = null, ir = null;
    function Yo() {
        if (ir) return ir;
        var e, n = xi, t = n.length, r, l = "value" in Ke ? Ke.value : Ke.textContent, i = l.length;
        for(e = 0; e < t && n[e] === l[e]; e++);
        var u = t - e;
        for(r = 1; r <= u && n[t - r] === l[i - r]; r++);
        return ir = l.slice(e, 1 < r ? 1 - r : void 0);
    }
    function ur(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function $t() {
        return !0;
    }
    function Su() {
        return !1;
    }
    function ce(e) {
        function n(t, r, l, i, u) {
            this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = u, this.currentTarget = null;
            for(var o in e)e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
            return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? $t : Su, this.isPropagationStopped = Su, this;
        }
        return F(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var t = this.nativeEvent;
                t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = $t);
            },
            stopPropagation: function() {
                var t = this.nativeEvent;
                t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = $t);
            },
            persist: function() {},
            isPersistent: $t
        }), n;
    }
    var Gn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Ni = ce(Gn), It = F({}, Gn, {
        view: 0,
        detail: 0
    }), tc = ce(It), ll, il, et, Vr = F({}, It, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: _i,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== et && (et && e.type === "mousemove" ? (ll = e.screenX - et.screenX, il = e.screenY - et.screenY) : il = ll = 0, et = e), ll);
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : il;
        }
    }), ku = ce(Vr), rc = F({}, Vr, {
        dataTransfer: 0
    }), lc = ce(rc), ic = F({}, It, {
        relatedTarget: 0
    }), ul = ce(ic), uc = F({}, Gn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), oc = ce(uc), sc = F({}, Gn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        }
    }), ac = ce(sc), cc = F({}, Gn, {
        data: 0
    }), Eu = ce(cc), fc = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, dc = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, pc = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function mc(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = pc[e]) ? !!n[e] : !1;
    }
    function _i() {
        return mc;
    }
    var hc = F({}, It, {
        key: function(e) {
            if (e.key) {
                var n = fc[e.key] || e.key;
                if (n !== "Unidentified") return n;
            }
            return e.type === "keypress" ? (e = ur(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dc[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: _i,
        charCode: function(e) {
            return e.type === "keypress" ? ur(e) : 0;
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function(e) {
            return e.type === "keypress" ? ur(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        }
    }), vc = ce(hc), yc = F({}, Vr, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }), Cu = ce(yc), gc = F({}, It, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: _i
    }), wc = ce(gc), Sc = F({}, Gn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), kc = ce(Sc), Ec = F({}, Vr, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
    }), Cc = ce(Ec), xc = [
        9,
        13,
        27,
        32
    ], zi = Fe && "CompositionEvent" in window, ft = null;
    Fe && "documentMode" in document && (ft = document.documentMode);
    var Nc = Fe && "TextEvent" in window && !ft, Xo = Fe && (!zi || ft && 8 < ft && 11 >= ft), xu = String.fromCharCode(32), Nu = !1;
    function Go(e, n) {
        switch(e){
            case "keyup":
                return xc.indexOf(n.keyCode) !== -1;
            case "keydown":
                return n.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function Zo(e) {
        return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var _n = !1;
    function _c(e, n) {
        switch(e){
            case "compositionend":
                return Zo(n);
            case "keypress":
                return n.which !== 32 ? null : (Nu = !0, xu);
            case "textInput":
                return e = n.data, e === xu && Nu ? null : e;
            default:
                return null;
        }
    }
    function zc(e, n) {
        if (_n) return e === "compositionend" || !zi && Go(e, n) ? (e = Yo(), ir = xi = Ke = null, _n = !1, e) : null;
        switch(e){
            case "paste":
                return null;
            case "keypress":
                if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                    if (n.char && 1 < n.char.length) return n.char;
                    if (n.which) return String.fromCharCode(n.which);
                }
                return null;
            case "compositionend":
                return Xo && n.locale !== "ko" ? null : n.data;
            default:
                return null;
        }
    }
    var Pc = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function _u(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!Pc[e.type] : n === "textarea";
    }
    function Jo(e, n, t, r) {
        Po(r), n = kr(n, "onChange"), 0 < n.length && (t = new Ni("onChange", "change", null, t, r), e.push({
            event: t,
            listeners: n
        }));
    }
    var dt = null, xt = null;
    function Lc(e) {
        ss(e, 0);
    }
    function Ar(e) {
        var n = Ln(e);
        if (ko(n)) return e;
    }
    function Tc(e, n) {
        if (e === "change") return n;
    }
    var qo = !1;
    Fe && (Fe ? (Yt = "oninput" in document, Yt || (ol = document.createElement("div"), ol.setAttribute("oninput", "return;"), Yt = typeof ol.oninput == "function"), Kt = Yt) : Kt = !1, qo = Kt && (!document.documentMode || 9 < document.documentMode));
    var Kt, Yt, ol;
    function zu() {
        dt && (dt.detachEvent("onpropertychange", bo), xt = dt = null);
    }
    function bo(e) {
        if (e.propertyName === "value" && Ar(xt)) {
            var n = [];
            Jo(n, xt, e, wi(e)), Do(Lc, n);
        }
    }
    function Mc(e, n, t) {
        e === "focusin" ? (zu(), dt = n, xt = t, dt.attachEvent("onpropertychange", bo)) : e === "focusout" && zu();
    }
    function Dc(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ar(xt);
    }
    function Oc(e, n) {
        if (e === "click") return Ar(n);
    }
    function Rc(e, n) {
        if (e === "input" || e === "change") return Ar(n);
    }
    function Fc(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
    }
    var xe = typeof Object.is == "function" ? Object.is : Fc;
    function Nt(e, n) {
        if (xe(e, n)) return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
        var t = Object.keys(e), r = Object.keys(n);
        if (t.length !== r.length) return !1;
        for(r = 0; r < t.length; r++){
            var l = t[r];
            if (!kl.call(n, l) || !xe(e[l], n[l])) return !1;
        }
        return !0;
    }
    function Pu(e) {
        for(; e && e.firstChild;)e = e.firstChild;
        return e;
    }
    function Lu(e, n) {
        var t = Pu(e);
        e = 0;
        for(var r; t;){
            if (t.nodeType === 3) {
                if (r = e + t.textContent.length, e <= n && r >= n) return {
                    node: t,
                    offset: n - e
                };
                e = r;
            }
            e: {
                for(; t;){
                    if (t.nextSibling) {
                        t = t.nextSibling;
                        break e;
                    }
                    t = t.parentNode;
                }
                t = void 0;
            }
            t = Pu(t);
        }
    }
    function es(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? es(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
    }
    function ns() {
        for(var e = window, n = mr(); n instanceof e.HTMLIFrameElement;){
            try {
                var t = typeof n.contentWindow.location.href == "string";
            } catch  {
                t = !1;
            }
            if (t) e = n.contentWindow;
            else break;
            n = mr(e.document);
        }
        return n;
    }
    function Pi(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
    }
    function Ic(e) {
        var n = ns(), t = e.focusedElem, r = e.selectionRange;
        if (n !== t && t && t.ownerDocument && es(t.ownerDocument.documentElement, t)) {
            if (r !== null && Pi(t)) {
                if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
                else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
                    e = e.getSelection();
                    var l = t.textContent.length, i = Math.min(r.start, l);
                    r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Lu(t, i);
                    var u = Lu(t, r);
                    l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
                }
            }
            for(n = [], e = t; e = e.parentNode;)e.nodeType === 1 && n.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for(typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
        }
    }
    var Uc = Fe && "documentMode" in document && 11 >= document.documentMode, zn = null, Al = null, pt = null, Bl = !1;
    function Tu(e, n, t) {
        var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
        Bl || zn == null || zn !== mr(r) || (r = zn, "selectionStart" in r && Pi(r) ? r = {
            start: r.selectionStart,
            end: r.selectionEnd
        } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset
        }), pt && Nt(pt, r) || (pt = r, r = kr(Al, "onSelect"), 0 < r.length && (n = new Ni("onSelect", "select", null, n, t), e.push({
            event: n,
            listeners: r
        }), n.target = zn)));
    }
    function Xt(e, n) {
        var t = {};
        return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
    }
    var Pn = {
        animationend: Xt("Animation", "AnimationEnd"),
        animationiteration: Xt("Animation", "AnimationIteration"),
        animationstart: Xt("Animation", "AnimationStart"),
        transitionend: Xt("Transition", "TransitionEnd")
    }, sl = {}, ts = {};
    Fe && (ts = document.createElement("div").style, "AnimationEvent" in window || (delete Pn.animationend.animation, delete Pn.animationiteration.animation, delete Pn.animationstart.animation), "TransitionEvent" in window || delete Pn.transitionend.transition);
    function Br(e) {
        if (sl[e]) return sl[e];
        if (!Pn[e]) return e;
        var n = Pn[e], t;
        for(t in n)if (n.hasOwnProperty(t) && t in ts) return sl[e] = n[t];
        return e;
    }
    var rs = Br("animationend"), ls = Br("animationiteration"), is = Br("animationstart"), us = Br("transitionend"), os = new Map, Mu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function ln(e, n) {
        os.set(e, n), Sn(n, [
            e
        ]);
    }
    for(Gt = 0; Gt < Mu.length; Gt++)Zt = Mu[Gt], Du = Zt.toLowerCase(), Ou = Zt[0].toUpperCase() + Zt.slice(1), ln(Du, "on" + Ou);
    var Zt, Du, Ou, Gt;
    ln(rs, "onAnimationEnd");
    ln(ls, "onAnimationIteration");
    ln(is, "onAnimationStart");
    ln("dblclick", "onDoubleClick");
    ln("focusin", "onFocus");
    ln("focusout", "onBlur");
    ln(us, "onTransitionEnd");
    Hn("onMouseEnter", [
        "mouseout",
        "mouseover"
    ]);
    Hn("onMouseLeave", [
        "mouseout",
        "mouseover"
    ]);
    Hn("onPointerEnter", [
        "pointerout",
        "pointerover"
    ]);
    Hn("onPointerLeave", [
        "pointerout",
        "pointerover"
    ]);
    Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
    Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
    Sn("onBeforeInput", [
        "compositionend",
        "keypress",
        "textInput",
        "paste"
    ]);
    Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
    Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
    Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var st = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), jc = new Set("cancel close invalid load scroll toggle".split(" ").concat(st));
    function Ru(e, n, t) {
        var r = e.type || "unknown-event";
        e.currentTarget = t, ja(r, n, void 0, e), e.currentTarget = null;
    }
    function ss(e, n) {
        n = (n & 4) !== 0;
        for(var t = 0; t < e.length; t++){
            var r = e[t], l = r.event;
            r = r.listeners;
            e: {
                var i = void 0;
                if (n) for(var u = r.length - 1; 0 <= u; u--){
                    var o = r[u], s = o.instance, d = o.currentTarget;
                    if (o = o.listener, s !== i && l.isPropagationStopped()) break e;
                    Ru(l, o, d), i = s;
                }
                else for(u = 0; u < r.length; u++){
                    if (o = r[u], s = o.instance, d = o.currentTarget, o = o.listener, s !== i && l.isPropagationStopped()) break e;
                    Ru(l, o, d), i = s;
                }
            }
        }
        if (vr) throw e = Il, vr = !1, Il = null, e;
    }
    function T(e, n) {
        var t = n[Kl];
        t === void 0 && (t = n[Kl] = new Set);
        var r = e + "__bubble";
        t.has(r) || (as(n, e, 2, !1), t.add(r));
    }
    function al(e, n, t) {
        var r = 0;
        n && (r |= 4), as(t, e, r, n);
    }
    var Jt = "_reactListening" + Math.random().toString(36).slice(2);
    function _t(e) {
        if (!e[Jt]) {
            e[Jt] = !0, vo.forEach(function(t) {
                t !== "selectionchange" && (jc.has(t) || al(t, !1, e), al(t, !0, e));
            });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[Jt] || (n[Jt] = !0, al("selectionchange", !1, n));
        }
    }
    function as(e, n, t, r) {
        switch(Ko(n)){
            case 1:
                var l = ec;
                break;
            case 4:
                l = nc;
                break;
            default:
                l = Ci;
        }
        t = l.bind(null, n, t, e), l = void 0, !Fl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, {
            capture: !0,
            passive: l
        }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, {
            passive: l
        }) : e.addEventListener(n, t, !1);
    }
    function cl(e, n, t, r, l) {
        var i = r;
        if ((n & 1) === 0 && (n & 2) === 0 && r !== null) e: for(;;){
            if (r === null) return;
            var u = r.tag;
            if (u === 3 || u === 4) {
                var o = r.stateNode.containerInfo;
                if (o === l || o.nodeType === 8 && o.parentNode === l) break;
                if (u === 4) for(u = r.return; u !== null;){
                    var s = u.tag;
                    if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    u = u.return;
                }
                for(; o !== null;){
                    if (u = cn(o), u === null) return;
                    if (s = u.tag, s === 5 || s === 6) {
                        r = i = u;
                        continue e;
                    }
                    o = o.parentNode;
                }
            }
            r = r.return;
        }
        Do(function() {
            var d = i, m = wi(t), h = [];
            e: {
                var p = os.get(e);
                if (p !== void 0) {
                    var g = Ni, S = e;
                    switch(e){
                        case "keypress":
                            if (ur(t) === 0) break e;
                        case "keydown":
                        case "keyup":
                            g = vc;
                            break;
                        case "focusin":
                            S = "focus", g = ul;
                            break;
                        case "focusout":
                            S = "blur", g = ul;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            g = ul;
                            break;
                        case "click":
                            if (t.button === 2) break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            g = ku;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            g = lc;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            g = wc;
                            break;
                        case rs:
                        case ls:
                        case is:
                            g = oc;
                            break;
                        case us:
                            g = kc;
                            break;
                        case "scroll":
                            g = tc;
                            break;
                        case "wheel":
                            g = Cc;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            g = ac;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            g = Cu;
                    }
                    var k = (n & 4) !== 0, U = !k && e === "scroll", c = k ? p !== null ? p + "Capture" : null : p;
                    k = [];
                    for(var a = d, f; a !== null;){
                        f = a;
                        var y = f.stateNode;
                        if (f.tag === 5 && y !== null && (f = y, c !== null && (y = St(a, c), y != null && k.push(zt(a, y, f)))), U) break;
                        a = a.return;
                    }
                    0 < k.length && (p = new g(p, S, null, t, m), h.push({
                        event: p,
                        listeners: k
                    }));
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== Ol && (S = t.relatedTarget || t.fromElement) && (cn(S) || S[Ie])) break e;
                    if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (S = t.relatedTarget || t.toElement, g = d, S = S ? cn(S) : null, S !== null && (U = kn(S), S !== U || S.tag !== 5 && S.tag !== 6) && (S = null)) : (g = null, S = d), g !== S)) {
                        if (k = ku, y = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = Cu, y = "onPointerLeave", c = "onPointerEnter", a = "pointer"), U = g == null ? p : Ln(g), f = S == null ? p : Ln(S), p = new k(y, a + "leave", g, t, m), p.target = U, p.relatedTarget = f, y = null, cn(m) === d && (k = new k(c, a + "enter", S, t, m), k.target = f, k.relatedTarget = U, y = k), U = y, g && S) n: {
                            for(k = g, c = S, a = 0, f = k; f; f = Cn(f))a++;
                            for(f = 0, y = c; y; y = Cn(y))f++;
                            for(; 0 < a - f;)k = Cn(k), a--;
                            for(; 0 < f - a;)c = Cn(c), f--;
                            for(; a--;){
                                if (k === c || c !== null && k === c.alternate) break n;
                                k = Cn(k), c = Cn(c);
                            }
                            k = null;
                        }
                        else k = null;
                        g !== null && Fu(h, p, g, k, !1), S !== null && U !== null && Fu(h, U, S, k, !0);
                    }
                }
                e: {
                    if (p = d ? Ln(d) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file") var E = Tc;
                    else if (_u(p)) if (qo) E = Rc;
                    else {
                        E = Dc;
                        var C = Mc;
                    }
                    else (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Oc);
                    if (E && (E = E(e, d))) {
                        Jo(h, E, t, m);
                        break e;
                    }
                    C && C(e, p, d), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Pl(p, "number", p.value);
                }
                switch(C = d ? Ln(d) : window, e){
                    case "focusin":
                        (_u(C) || C.contentEditable === "true") && (zn = C, Al = d, pt = null);
                        break;
                    case "focusout":
                        pt = Al = zn = null;
                        break;
                    case "mousedown":
                        Bl = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Bl = !1, Tu(h, t, m);
                        break;
                    case "selectionchange":
                        if (Uc) break;
                    case "keydown":
                    case "keyup":
                        Tu(h, t, m);
                }
                var x;
                if (zi) e: {
                    switch(e){
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
                else _n ? Go(e, t) && (N = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (N = "onCompositionStart");
                N && (Xo && t.locale !== "ko" && (_n || N !== "onCompositionStart" ? N === "onCompositionEnd" && _n && (x = Yo()) : (Ke = m, xi = "value" in Ke ? Ke.value : Ke.textContent, _n = !0)), C = kr(d, N), 0 < C.length && (N = new Eu(N, e, null, t, m), h.push({
                    event: N,
                    listeners: C
                }), x ? N.data = x : (x = Zo(t), x !== null && (N.data = x)))), (x = Nc ? _c(e, t) : zc(e, t)) && (d = kr(d, "onBeforeInput"), 0 < d.length && (m = new Eu("onBeforeInput", "beforeinput", null, t, m), h.push({
                    event: m,
                    listeners: d
                }), m.data = x));
            }
            ss(h, n);
        });
    }
    function zt(e, n, t) {
        return {
            instance: e,
            listener: n,
            currentTarget: t
        };
    }
    function kr(e, n) {
        for(var t = n + "Capture", r = []; e !== null;){
            var l = e, i = l.stateNode;
            l.tag === 5 && i !== null && (l = i, i = St(e, t), i != null && r.unshift(zt(e, i, l)), i = St(e, n), i != null && r.push(zt(e, i, l))), e = e.return;
        }
        return r;
    }
    function Cn(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5)
        return e || null;
    }
    function Fu(e, n, t, r, l) {
        for(var i = n._reactName, u = []; t !== null && t !== r;){
            var o = t, s = o.alternate, d = o.stateNode;
            if (s !== null && s === r) break;
            o.tag === 5 && d !== null && (o = d, l ? (s = St(t, i), s != null && u.unshift(zt(t, s, o))) : l || (s = St(t, i), s != null && u.push(zt(t, s, o)))), t = t.return;
        }
        u.length !== 0 && e.push({
            event: n,
            listeners: u
        });
    }
    var Vc = /\r\n?/g, Ac = /\u0000|\uFFFD/g;
    function Iu(e) {
        return (typeof e == "string" ? e : "" + e).replace(Vc, `
`).replace(Ac, "");
    }
    function qt(e, n, t) {
        if (n = Iu(n), Iu(e) !== n && t) throw Error(v(425));
    }
    function Er() {}
    var Hl = null, Wl = null;
    function Ql(e, n) {
        return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
    }
    var $l = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Uu = typeof Promise == "function" ? Promise : void 0, Hc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uu < "u" ? function(e) {
        return Uu.resolve(null).then(e).catch(Wc);
    } : $l;
    function Wc(e) {
        setTimeout(function() {
            throw e;
        });
    }
    function fl(e, n) {
        var t = n, r = 0;
        do {
            var l = t.nextSibling;
            if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
                if (r === 0) {
                    e.removeChild(l), Ct(n);
                    return;
                }
                r--;
            } else t !== "$" && t !== "$?" && t !== "$!" || r++;
            t = l;
        }while (t)
        Ct(n);
    }
    function Je(e) {
        for(; e != null; e = e.nextSibling){
            var n = e.nodeType;
            if (n === 1 || n === 3) break;
            if (n === 8) {
                if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
                if (n === "/$") return null;
            }
        }
        return e;
    }
    function ju(e) {
        e = e.previousSibling;
        for(var n = 0; e;){
            if (e.nodeType === 8) {
                var t = e.data;
                if (t === "$" || t === "$!" || t === "$?") {
                    if (n === 0) return e;
                    n--;
                } else t === "/$" && n++;
            }
            e = e.previousSibling;
        }
        return null;
    }
    var Zn = Math.random().toString(36).slice(2), ze = "__reactFiber$" + Zn, Pt = "__reactProps$" + Zn, Ie = "__reactContainer$" + Zn, Kl = "__reactEvents$" + Zn, Qc = "__reactListeners$" + Zn, $c = "__reactHandles$" + Zn;
    function cn(e) {
        var n = e[ze];
        if (n) return n;
        for(var t = e.parentNode; t;){
            if (n = t[Ie] || t[ze]) {
                if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for(e = ju(e); e !== null;){
                    if (t = e[ze]) return t;
                    e = ju(e);
                }
                return n;
            }
            e = t, t = e.parentNode;
        }
        return null;
    }
    function Ut(e) {
        return e = e[ze] || e[Ie], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
    }
    function Ln(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(v(33));
    }
    function Hr(e) {
        return e[Pt] || null;
    }
    var Yl = [], Tn = -1;
    function un(e) {
        return {
            current: e
        };
    }
    function M(e) {
        0 > Tn || (e.current = Yl[Tn], Yl[Tn] = null, Tn--);
    }
    function L(e, n) {
        Tn++, Yl[Tn] = e.current, e.current = n;
    }
    var rn = {}, J = un(rn), re = un(!1), hn = rn;
    function Wn(e, n) {
        var t = e.type.contextTypes;
        if (!t) return rn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
        var l = {}, i;
        for(i in t)l[i] = n[i];
        return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
    }
    function le(e) {
        return e = e.childContextTypes, e != null;
    }
    function Cr() {
        M(re), M(J);
    }
    function Vu(e, n, t) {
        if (J.current !== rn) throw Error(v(168));
        L(J, n), L(re, t);
    }
    function cs(e, n, t) {
        var r = e.stateNode;
        if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
        r = r.getChildContext();
        for(var l in r)if (!(l in n)) throw Error(v(108, Ma(e) || "Unknown", l));
        return F({}, t, r);
    }
    function xr(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || rn, hn = J.current, L(J, e), L(re, re.current), !0;
    }
    function Au(e, n, t) {
        var r = e.stateNode;
        if (!r) throw Error(v(169));
        t ? (e = cs(e, n, hn), r.__reactInternalMemoizedMergedChildContext = e, M(re), M(J), L(J, e)) : M(re), L(re, t);
    }
    var Me = null, Wr = !1, dl = !1;
    function fs(e) {
        Me === null ? Me = [
            e
        ] : Me.push(e);
    }
    function Kc(e) {
        Wr = !0, fs(e);
    }
    function on() {
        if (!dl && Me !== null) {
            dl = !0;
            var e = 0, n = P;
            try {
                var t = Me;
                for(P = 1; e < t.length; e++){
                    var r = t[e];
                    do r = r(!0);
                    while (r !== null)
                }
                Me = null, Wr = !1;
            } catch (l) {
                throw Me !== null && (Me = Me.slice(e + 1)), Io(Si, on), l;
            } finally{
                P = n, dl = !1;
            }
        }
        return null;
    }
    var Mn = [], Dn = 0, Nr = null, _r = 0, de = [], pe = 0, vn = null, De = 1, Oe = "";
    function sn(e, n) {
        Mn[Dn++] = _r, Mn[Dn++] = Nr, Nr = e, _r = n;
    }
    function ds(e, n, t) {
        de[pe++] = De, de[pe++] = Oe, de[pe++] = vn, vn = e;
        var r = De;
        e = Oe;
        var l = 32 - Ee(r) - 1;
        r &= ~(1 << l), t += 1;
        var i = 32 - Ee(n) + l;
        if (30 < i) {
            var u = l - l % 5;
            i = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, De = 1 << 32 - Ee(n) + l | t << l | r, Oe = i + e;
        } else De = 1 << i | t << l | r, Oe = e;
    }
    function Li(e) {
        e.return !== null && (sn(e, 1), ds(e, 1, 0));
    }
    function Ti(e) {
        for(; e === Nr;)Nr = Mn[--Dn], Mn[Dn] = null, _r = Mn[--Dn], Mn[Dn] = null;
        for(; e === vn;)vn = de[--pe], de[pe] = null, Oe = de[--pe], de[pe] = null, De = de[--pe], de[pe] = null;
    }
    var se = null, oe = null, D = !1, ke = null;
    function ps(e, n) {
        var t = me(5, null, null, 0);
        t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [
            t
        ], e.flags |= 16) : n.push(t);
    }
    function Bu(e, n) {
        switch(e.tag){
            case 5:
                var t = e.type;
                return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, se = e, oe = Je(n.firstChild), !0) : !1;
            case 6:
                return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, se = e, oe = null, !0) : !1;
            case 13:
                return n = n.nodeType !== 8 ? null : n, n !== null ? (t = vn !== null ? {
                    id: De,
                    overflow: Oe
                } : null, e.memoizedState = {
                    dehydrated: n,
                    treeContext: t,
                    retryLane: 1073741824
                }, t = me(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, se = e, oe = null, !0) : !1;
            default:
                return !1;
        }
    }
    function Xl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Gl(e) {
        if (D) {
            var n = oe;
            if (n) {
                var t = n;
                if (!Bu(e, n)) {
                    if (Xl(e)) throw Error(v(418));
                    n = Je(t.nextSibling);
                    var r = se;
                    n && Bu(e, n) ? ps(r, t) : (e.flags = e.flags & -4097 | 2, D = !1, se = e);
                }
            } else {
                if (Xl(e)) throw Error(v(418));
                e.flags = e.flags & -4097 | 2, D = !1, se = e;
            }
        }
    }
    function Hu(e) {
        for(e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)e = e.return;
        se = e;
    }
    function bt(e) {
        if (e !== se) return !1;
        if (!D) return Hu(e), D = !0, !1;
        var n;
        if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Ql(e.type, e.memoizedProps)), n && (n = oe)) {
            if (Xl(e)) throw ms(), Error(v(418));
            for(; n;)ps(e, n), n = Je(n.nextSibling);
        }
        if (Hu(e), e.tag === 13) {
            if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
            e: {
                for(e = e.nextSibling, n = 0; e;){
                    if (e.nodeType === 8) {
                        var t = e.data;
                        if (t === "/$") {
                            if (n === 0) {
                                oe = Je(e.nextSibling);
                                break e;
                            }
                            n--;
                        } else t !== "$" && t !== "$!" && t !== "$?" || n++;
                    }
                    e = e.nextSibling;
                }
                oe = null;
            }
        } else oe = se ? Je(e.stateNode.nextSibling) : null;
        return !0;
    }
    function ms() {
        for(var e = oe; e;)e = Je(e.nextSibling);
    }
    function Qn() {
        oe = se = null, D = !1;
    }
    function Mi(e) {
        ke === null ? ke = [
            e
        ] : ke.push(e);
    }
    var Yc = Ve.ReactCurrentBatchConfig;
    function we(e, n) {
        if (e && e.defaultProps) {
            n = F({}, n), e = e.defaultProps;
            for(var t in e)n[t] === void 0 && (n[t] = e[t]);
            return n;
        }
        return n;
    }
    var zr = un(null), Pr = null, On = null, Di = null;
    function Oi() {
        Di = On = Pr = null;
    }
    function Ri(e) {
        var n = zr.current;
        M(zr), e._currentValue = n;
    }
    function Zl(e, n, t) {
        for(; e !== null;){
            var r = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
            e = e.return;
        }
    }
    function An(e, n) {
        Pr = e, Di = On = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (te = !0), e.firstContext = null);
    }
    function ve(e) {
        var n = e._currentValue;
        if (Di !== e) if (e = {
            context: e,
            memoizedValue: n,
            next: null
        }, On === null) {
            if (Pr === null) throw Error(v(308));
            On = e, Pr.dependencies = {
                lanes: 0,
                firstContext: e
            };
        } else On = On.next = e;
        return n;
    }
    var fn = null;
    function Fi(e) {
        fn === null ? fn = [
            e
        ] : fn.push(e);
    }
    function hs(e, n, t, r) {
        var l = n.interleaved;
        return l === null ? (t.next = t, Fi(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ue(e, r);
    }
    function Ue(e, n) {
        e.lanes |= n;
        var t = e.alternate;
        for(t !== null && (t.lanes |= n), t = e, e = e.return; e !== null;)e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
        return t.tag === 3 ? t.stateNode : null;
    }
    var We = !1;
    function Ii(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        };
    }
    function vs(e, n) {
        e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        });
    }
    function Re(e, n) {
        return {
            eventTime: e,
            lane: n,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        };
    }
    function qe(e, n, t) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (r = r.shared, (_ & 2) !== 0) {
            var l = r.pending;
            return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ue(e, t);
        }
        return l = r.interleaved, l === null ? (n.next = n, Fi(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ue(e, t);
    }
    function or(e, n, t) {
        if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
            var r = n.lanes;
            r &= e.pendingLanes, t |= r, n.lanes = t, ki(e, t);
        }
    }
    function Wu(e, n) {
        var t = e.updateQueue, r = e.alternate;
        if (r !== null && (r = r.updateQueue, t === r)) {
            var l = null, i = null;
            if (t = t.firstBaseUpdate, t !== null) {
                do {
                    var u = {
                        eventTime: t.eventTime,
                        lane: t.lane,
                        tag: t.tag,
                        payload: t.payload,
                        callback: t.callback,
                        next: null
                    };
                    i === null ? l = i = u : i = i.next = u, t = t.next;
                }while (t !== null)
                i === null ? l = i = n : i = i.next = n;
            } else l = i = n;
            t = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects
            }, e.updateQueue = t;
            return;
        }
        e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
    }
    function Lr(e, n, t, r) {
        var l = e.updateQueue;
        We = !1;
        var i = l.firstBaseUpdate, u = l.lastBaseUpdate, o = l.shared.pending;
        if (o !== null) {
            l.shared.pending = null;
            var s = o, d = s.next;
            s.next = null, u === null ? i = d : u.next = d, u = s;
            var m = e.alternate;
            m !== null && (m = m.updateQueue, o = m.lastBaseUpdate, o !== u && (o === null ? m.firstBaseUpdate = d : o.next = d, m.lastBaseUpdate = s));
        }
        if (i !== null) {
            var h = l.baseState;
            u = 0, m = d = s = null, o = i;
            do {
                var p = o.lane, g = o.eventTime;
                if ((r & p) === p) {
                    m !== null && (m = m.next = {
                        eventTime: g,
                        lane: 0,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    });
                    e: {
                        var S = e, k = o;
                        switch(p = n, g = t, k.tag){
                            case 1:
                                if (S = k.payload, typeof S == "function") {
                                    h = S.call(g, h, p);
                                    break e;
                                }
                                h = S;
                                break e;
                            case 3:
                                S.flags = S.flags & -65537 | 128;
                            case 0:
                                if (S = k.payload, p = typeof S == "function" ? S.call(g, h, p) : S, p == null) break e;
                                h = F({}, h, p);
                                break e;
                            case 2:
                                We = !0;
                        }
                    }
                    o.callback !== null && o.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [
                        o
                    ] : p.push(o));
                } else g = {
                    eventTime: g,
                    lane: p,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null
                }, m === null ? (d = m = g, s = h) : m = m.next = g, u |= p;
                if (o = o.next, o === null) {
                    if (o = l.shared.pending, o === null) break;
                    p = o, o = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
                }
            }while (1)
            if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = d, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
                l = n;
                do u |= l.lane, l = l.next;
                while (l !== n)
            } else i === null && (l.shared.lanes = 0);
            gn |= u, e.lanes = u, e.memoizedState = h;
        }
    }
    function Qu(e, n, t) {
        if (e = n.effects, n.effects = null, e !== null) for(n = 0; n < e.length; n++){
            var r = e[n], l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = t, typeof l != "function") throw Error(v(191, l));
                l.call(r);
            }
        }
    }
    var ys = new ho.Component().refs;
    function Jl(e, n, t, r) {
        n = e.memoizedState, t = t(r, n), t = t == null ? n : F({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var Qr = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? kn(e) === e : !1;
        },
        enqueueSetState: function(e, n, t) {
            e = e._reactInternals;
            var r = b(), l = en(e), i = Re(r, l);
            i.payload = n, t != null && (i.callback = t), n = qe(e, i, l), n !== null && (Ce(n, e, l, r), or(n, e, l));
        },
        enqueueReplaceState: function(e, n, t) {
            e = e._reactInternals;
            var r = b(), l = en(e), i = Re(r, l);
            i.tag = 1, i.payload = n, t != null && (i.callback = t), n = qe(e, i, l), n !== null && (Ce(n, e, l, r), or(n, e, l));
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var t = b(), r = en(e), l = Re(t, r);
            l.tag = 2, n != null && (l.callback = n), n = qe(e, l, r), n !== null && (Ce(n, e, r, t), or(n, e, r));
        }
    };
    function $u(e, n, t, r, l, i, u) {
        return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, u) : n.prototype && n.prototype.isPureReactComponent ? !Nt(t, r) || !Nt(l, i) : !0;
    }
    function gs(e, n, t) {
        var r = !1, l = rn, i = n.contextType;
        return typeof i == "object" && i !== null ? i = ve(i) : (l = le(n) ? hn : J.current, r = n.contextTypes, i = (r = r != null) ? Wn(e, l) : rn), n = new n(t, i), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Qr, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), n;
    }
    function Ku(e, n, t, r) {
        e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && Qr.enqueueReplaceState(n, n.state, null);
    }
    function ql(e, n, t, r) {
        var l = e.stateNode;
        l.props = t, l.state = e.memoizedState, l.refs = ys, Ii(e);
        var i = n.contextType;
        typeof i == "object" && i !== null ? l.context = ve(i) : (i = le(n) ? hn : J.current, l.context = Wn(e, i)), l.state = e.memoizedState, i = n.getDerivedStateFromProps, typeof i == "function" && (Jl(e, n, i, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && Qr.enqueueReplaceState(l, l.state, null), Lr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
    }
    function nt(e, n, t) {
        if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
            if (t._owner) {
                if (t = t._owner, t) {
                    if (t.tag !== 1) throw Error(v(309));
                    var r = t.stateNode;
                }
                if (!r) throw Error(v(147, e));
                var l = r, i = "" + e;
                return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === i ? n.ref : (n = function(u) {
                    var o = l.refs;
                    o === ys && (o = l.refs = {}), u === null ? delete o[i] : o[i] = u;
                }, n._stringRef = i, n);
            }
            if (typeof e != "string") throw Error(v(284));
            if (!t._owner) throw Error(v(290, e));
        }
        return e;
    }
    function er(e, n) {
        throw e = Object.prototype.toString.call(n), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
    }
    function Yu(e) {
        var n = e._init;
        return n(e._payload);
    }
    function ws(e) {
        function n(c, a) {
            if (e) {
                var f = c.deletions;
                f === null ? (c.deletions = [
                    a
                ], c.flags |= 16) : f.push(a);
            }
        }
        function t(c, a) {
            if (!e) return null;
            for(; a !== null;)n(c, a), a = a.sibling;
            return null;
        }
        function r(c, a) {
            for(c = new Map; a !== null;)a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
            return c;
        }
        function l(c, a) {
            return c = nn(c, a), c.index = 0, c.sibling = null, c;
        }
        function i(c, a, f) {
            return c.index = f, e ? (f = c.alternate, f !== null ? (f = f.index, f < a ? (c.flags |= 2, a) : f) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
        }
        function u(c) {
            return e && c.alternate === null && (c.flags |= 2), c;
        }
        function o(c, a, f, y) {
            return a === null || a.tag !== 6 ? (a = wl(f, c.mode, y), a.return = c, a) : (a = l(a, f), a.return = c, a);
        }
        function s(c, a, f, y) {
            var E = f.type;
            return E === Nn ? m(c, a, f.props.children, y, f.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === He && Yu(E) === a.type) ? (y = l(a, f.props), y.ref = nt(c, a, f), y.return = c, y) : (y = pr(f.type, f.key, f.props, null, c.mode, y), y.ref = nt(c, a, f), y.return = c, y);
        }
        function d(c, a, f, y) {
            return a === null || a.tag !== 4 || a.stateNode.containerInfo !== f.containerInfo || a.stateNode.implementation !== f.implementation ? (a = Sl(f, c.mode, y), a.return = c, a) : (a = l(a, f.children || []), a.return = c, a);
        }
        function m(c, a, f, y, E) {
            return a === null || a.tag !== 7 ? (a = mn(f, c.mode, y, E), a.return = c, a) : (a = l(a, f), a.return = c, a);
        }
        function h(c, a, f) {
            if (typeof a == "string" && a !== "" || typeof a == "number") return a = wl("" + a, c.mode, f), a.return = c, a;
            if (typeof a == "object" && a !== null) {
                switch(a.$$typeof){
                    case Vt:
                        return f = pr(a.type, a.key, a.props, null, c.mode, f), f.ref = nt(c, null, a), f.return = c, f;
                    case xn:
                        return a = Sl(a, c.mode, f), a.return = c, a;
                    case He:
                        var y = a._init;
                        return h(c, y(a._payload), f);
                }
                if (ut(a) || Jn(a)) return a = mn(a, c.mode, f, null), a.return = c, a;
                er(c, a);
            }
            return null;
        }
        function p(c, a, f, y) {
            var E = a !== null ? a.key : null;
            if (typeof f == "string" && f !== "" || typeof f == "number") return E !== null ? null : o(c, a, "" + f, y);
            if (typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case Vt:
                        return f.key === E ? s(c, a, f, y) : null;
                    case xn:
                        return f.key === E ? d(c, a, f, y) : null;
                    case He:
                        return E = f._init, p(c, a, E(f._payload), y);
                }
                if (ut(f) || Jn(f)) return E !== null ? null : m(c, a, f, y, null);
                er(c, f);
            }
            return null;
        }
        function g(c, a, f, y, E) {
            if (typeof y == "string" && y !== "" || typeof y == "number") return c = c.get(f) || null, o(a, c, "" + y, E);
            if (typeof y == "object" && y !== null) {
                switch(y.$$typeof){
                    case Vt:
                        return c = c.get(y.key === null ? f : y.key) || null, s(a, c, y, E);
                    case xn:
                        return c = c.get(y.key === null ? f : y.key) || null, d(a, c, y, E);
                    case He:
                        var C = y._init;
                        return g(c, a, f, C(y._payload), E);
                }
                if (ut(y) || Jn(y)) return c = c.get(f) || null, m(a, c, y, E, null);
                er(a, y);
            }
            return null;
        }
        function S(c, a, f, y) {
            for(var E = null, C = null, x = a, N = a = 0, H = null; x !== null && N < f.length; N++){
                x.index > N ? (H = x, x = null) : H = x.sibling;
                var z = p(c, x, f[N], y);
                if (z === null) {
                    x === null && (x = H);
                    break;
                }
                e && x && z.alternate === null && n(c, x), a = i(z, a, N), C === null ? E = z : C.sibling = z, C = z, x = H;
            }
            if (N === f.length) return t(c, x), D && sn(c, N), E;
            if (x === null) {
                for(; N < f.length; N++)x = h(c, f[N], y), x !== null && (a = i(x, a, N), C === null ? E = x : C.sibling = x, C = x);
                return D && sn(c, N), E;
            }
            for(x = r(c, x); N < f.length; N++)H = g(x, c, N, f[N], y), H !== null && (e && H.alternate !== null && x.delete(H.key === null ? N : H.key), a = i(H, a, N), C === null ? E = H : C.sibling = H, C = H);
            return e && x.forEach(function(Ae) {
                return n(c, Ae);
            }), D && sn(c, N), E;
        }
        function k(c, a, f, y) {
            var E = Jn(f);
            if (typeof E != "function") throw Error(v(150));
            if (f = E.call(f), f == null) throw Error(v(151));
            for(var C = E = null, x = a, N = a = 0, H = null, z = f.next(); x !== null && !z.done; N++, z = f.next()){
                x.index > N ? (H = x, x = null) : H = x.sibling;
                var Ae = p(c, x, z.value, y);
                if (Ae === null) {
                    x === null && (x = H);
                    break;
                }
                e && x && Ae.alternate === null && n(c, x), a = i(Ae, a, N), C === null ? E = Ae : C.sibling = Ae, C = Ae, x = H;
            }
            if (z.done) return t(c, x), D && sn(c, N), E;
            if (x === null) {
                for(; !z.done; N++, z = f.next())z = h(c, z.value, y), z !== null && (a = i(z, a, N), C === null ? E = z : C.sibling = z, C = z);
                return D && sn(c, N), E;
            }
            for(x = r(c, x); !z.done; N++, z = f.next())z = g(x, c, N, z.value, y), z !== null && (e && z.alternate !== null && x.delete(z.key === null ? N : z.key), a = i(z, a, N), C === null ? E = z : C.sibling = z, C = z);
            return e && x.forEach(function(wa) {
                return n(c, wa);
            }), D && sn(c, N), E;
        }
        function U(c, a, f, y) {
            if (typeof f == "object" && f !== null && f.type === Nn && f.key === null && (f = f.props.children), typeof f == "object" && f !== null) {
                switch(f.$$typeof){
                    case Vt:
                        e: {
                            for(var E = f.key, C = a; C !== null;){
                                if (C.key === E) {
                                    if (E = f.type, E === Nn) {
                                        if (C.tag === 7) {
                                            t(c, C.sibling), a = l(C, f.props.children), a.return = c, c = a;
                                            break e;
                                        }
                                    } else if (C.elementType === E || typeof E == "object" && E !== null && E.$$typeof === He && Yu(E) === C.type) {
                                        t(c, C.sibling), a = l(C, f.props), a.ref = nt(c, C, f), a.return = c, c = a;
                                        break e;
                                    }
                                    t(c, C);
                                    break;
                                } else n(c, C);
                                C = C.sibling;
                            }
                            f.type === Nn ? (a = mn(f.props.children, c.mode, y, f.key), a.return = c, c = a) : (y = pr(f.type, f.key, f.props, null, c.mode, y), y.ref = nt(c, a, f), y.return = c, c = y);
                        }
                        return u(c);
                    case xn:
                        e: {
                            for(C = f.key; a !== null;){
                                if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === f.containerInfo && a.stateNode.implementation === f.implementation) {
                                    t(c, a.sibling), a = l(a, f.children || []), a.return = c, c = a;
                                    break e;
                                } else {
                                    t(c, a);
                                    break;
                                }
                                else n(c, a);
                                a = a.sibling;
                            }
                            a = Sl(f, c.mode, y), a.return = c, c = a;
                        }
                        return u(c);
                    case He:
                        return C = f._init, U(c, a, C(f._payload), y);
                }
                if (ut(f)) return S(c, a, f, y);
                if (Jn(f)) return k(c, a, f, y);
                er(c, f);
            }
            return typeof f == "string" && f !== "" || typeof f == "number" ? (f = "" + f, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, f), a.return = c, c = a) : (t(c, a), a = wl(f, c.mode, y), a.return = c, c = a), u(c)) : t(c, a);
        }
        return U;
    }
    var $n = ws(!0), Ss = ws(!1), jt = {}, Le = un(jt), Lt = un(jt), Tt = un(jt);
    function dn(e) {
        if (e === jt) throw Error(v(174));
        return e;
    }
    function Ui(e, n) {
        switch(L(Tt, n), L(Lt, e), L(Le, jt), e = n.nodeType, e){
            case 9:
            case 11:
                n = (n = n.documentElement) ? n.namespaceURI : Tl(null, "");
                break;
            default:
                e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Tl(n, e);
        }
        M(Le), L(Le, n);
    }
    function Kn() {
        M(Le), M(Lt), M(Tt);
    }
    function ks(e) {
        dn(Tt.current);
        var n = dn(Le.current), t = Tl(n, e.type);
        n !== t && (L(Lt, e), L(Le, t));
    }
    function ji(e) {
        Lt.current === e && (M(Le), M(Lt));
    }
    var O = un(0);
    function Tr(e) {
        for(var n = e; n !== null;){
            if (n.tag === 13) {
                var t = n.memoizedState;
                if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
            } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
                if ((n.flags & 128) !== 0) return n;
            } else if (n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
            }
            if (n === e) break;
            for(; n.sibling === null;){
                if (n.return === null || n.return === e) return null;
                n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
        }
        return null;
    }
    var pl = [];
    function Vi() {
        for(var e = 0; e < pl.length; e++)pl[e]._workInProgressVersionPrimary = null;
        pl.length = 0;
    }
    var sr = Ve.ReactCurrentDispatcher, ml = Ve.ReactCurrentBatchConfig, yn = 0, R = null, A = null, W = null, Mr = !1, mt = !1, Mt = 0, Xc = 0;
    function X() {
        throw Error(v(321));
    }
    function Ai(e, n) {
        if (n === null) return !1;
        for(var t = 0; t < n.length && t < e.length; t++)if (!xe(e[t], n[t])) return !1;
        return !0;
    }
    function Bi(e, n, t, r, l, i) {
        if (yn = i, R = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, sr.current = e === null || e.memoizedState === null ? qc : bc, e = t(r, l), mt) {
            i = 0;
            do {
                if (mt = !1, Mt = 0, 25 <= i) throw Error(v(301));
                i += 1, W = A = null, n.updateQueue = null, sr.current = ef, e = t(r, l);
            }while (mt)
        }
        if (sr.current = Dr, n = A !== null && A.next !== null, yn = 0, W = A = R = null, Mr = !1, n) throw Error(v(300));
        return e;
    }
    function Hi() {
        var e = Mt !== 0;
        return Mt = 0, e;
    }
    function _e() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return W === null ? R.memoizedState = W = e : W = W.next = e, W;
    }
    function ye() {
        if (A === null) {
            var e = R.alternate;
            e = e !== null ? e.memoizedState : null;
        } else e = A.next;
        var n = W === null ? R.memoizedState : W.next;
        if (n !== null) W = n, A = e;
        else {
            if (e === null) throw Error(v(310));
            A = e, e = {
                memoizedState: A.memoizedState,
                baseState: A.baseState,
                baseQueue: A.baseQueue,
                queue: A.queue,
                next: null
            }, W === null ? R.memoizedState = W = e : W = W.next = e;
        }
        return W;
    }
    function Dt(e, n) {
        return typeof n == "function" ? n(e) : n;
    }
    function hl(e) {
        var n = ye(), t = n.queue;
        if (t === null) throw Error(v(311));
        t.lastRenderedReducer = e;
        var r = A, l = r.baseQueue, i = t.pending;
        if (i !== null) {
            if (l !== null) {
                var u = l.next;
                l.next = i.next, i.next = u;
            }
            r.baseQueue = l = i, t.pending = null;
        }
        if (l !== null) {
            i = l.next, r = r.baseState;
            var o = u = null, s = null, d = i;
            do {
                var m = d.lane;
                if ((yn & m) === m) s !== null && (s = s.next = {
                    lane: 0,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
                else {
                    var h = {
                        lane: m,
                        action: d.action,
                        hasEagerState: d.hasEagerState,
                        eagerState: d.eagerState,
                        next: null
                    };
                    s === null ? (o = s = h, u = r) : s = s.next = h, R.lanes |= m, gn |= m;
                }
                d = d.next;
            }while (d !== null && d !== i)
            s === null ? u = r : s.next = o, xe(r, n.memoizedState) || (te = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
        }
        if (e = t.interleaved, e !== null) {
            l = e;
            do i = l.lane, R.lanes |= i, gn |= i, l = l.next;
            while (l !== e)
        } else l === null && (t.lanes = 0);
        return [
            n.memoizedState,
            t.dispatch
        ];
    }
    function vl(e) {
        var n = ye(), t = n.queue;
        if (t === null) throw Error(v(311));
        t.lastRenderedReducer = e;
        var r = t.dispatch, l = t.pending, i = n.memoizedState;
        if (l !== null) {
            t.pending = null;
            var u = l = l.next;
            do i = e(i, u.action), u = u.next;
            while (u !== l)
            xe(i, n.memoizedState) || (te = !0), n.memoizedState = i, n.baseQueue === null && (n.baseState = i), t.lastRenderedState = i;
        }
        return [
            i,
            r
        ];
    }
    function Es() {}
    function Cs(e, n) {
        var t = R, r = ye(), l = n(), i = !xe(r.memoizedState, l);
        if (i && (r.memoizedState = l, te = !0), r = r.queue, Wi(_s.bind(null, t, r, e), [
            e
        ]), r.getSnapshot !== n || i || W !== null && W.memoizedState.tag & 1) {
            if (t.flags |= 2048, Ot(9, Ns.bind(null, t, r, l, n), void 0, null), Q === null) throw Error(v(349));
            (yn & 30) !== 0 || xs(t, n, l);
        }
        return l;
    }
    function xs(e, n, t) {
        e.flags |= 16384, e = {
            getSnapshot: n,
            value: t
        }, n = R.updateQueue, n === null ? (n = {
            lastEffect: null,
            stores: null
        }, R.updateQueue = n, n.stores = [
            e
        ]) : (t = n.stores, t === null ? n.stores = [
            e
        ] : t.push(e));
    }
    function Ns(e, n, t, r) {
        n.value = t, n.getSnapshot = r, zs(n) && Ps(e);
    }
    function _s(e, n, t) {
        return t(function() {
            zs(n) && Ps(e);
        });
    }
    function zs(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var t = n();
            return !xe(e, t);
        } catch  {
            return !0;
        }
    }
    function Ps(e) {
        var n = Ue(e, 1);
        n !== null && Ce(n, e, 1, -1);
    }
    function Xu(e) {
        var n = _e();
        return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Dt,
            lastRenderedState: e
        }, n.queue = e, e = e.dispatch = Jc.bind(null, R, e), [
            n.memoizedState,
            e
        ];
    }
    function Ot(e, n, t, r) {
        return e = {
            tag: e,
            create: n,
            destroy: t,
            deps: r,
            next: null
        }, n = R.updateQueue, n === null ? (n = {
            lastEffect: null,
            stores: null
        }, R.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
    }
    function Ls() {
        return ye().memoizedState;
    }
    function ar(e, n, t, r) {
        var l = _e();
        R.flags |= e, l.memoizedState = Ot(1 | n, t, void 0, r === void 0 ? null : r);
    }
    function $r(e, n, t, r) {
        var l = ye();
        r = r === void 0 ? null : r;
        var i = void 0;
        if (A !== null) {
            var u = A.memoizedState;
            if (i = u.destroy, r !== null && Ai(r, u.deps)) {
                l.memoizedState = Ot(n, t, i, r);
                return;
            }
        }
        R.flags |= e, l.memoizedState = Ot(1 | n, t, i, r);
    }
    function Gu(e, n) {
        return ar(8390656, 8, e, n);
    }
    function Wi(e, n) {
        return $r(2048, 8, e, n);
    }
    function Ts(e, n) {
        return $r(4, 2, e, n);
    }
    function Ms(e, n) {
        return $r(4, 4, e, n);
    }
    function Ds(e, n) {
        if (typeof n == "function") return e = e(), n(e), function() {
            n(null);
        };
        if (n != null) return e = e(), n.current = e, function() {
            n.current = null;
        };
    }
    function Os(e, n, t) {
        return t = t != null ? t.concat([
            e
        ]) : null, $r(4, 4, Ds.bind(null, n, e), t);
    }
    function Qi() {}
    function Rs(e, n) {
        var t = ye();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Ai(n, r[1]) ? r[0] : (t.memoizedState = [
            e,
            n
        ], e);
    }
    function Fs(e, n) {
        var t = ye();
        n = n === void 0 ? null : n;
        var r = t.memoizedState;
        return r !== null && n !== null && Ai(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [
            e,
            n
        ], e);
    }
    function Is(e, n, t) {
        return (yn & 21) === 0 ? (e.baseState && (e.baseState = !1, te = !0), e.memoizedState = t) : (xe(t, n) || (t = Vo(), R.lanes |= t, gn |= t, e.baseState = !0), n);
    }
    function Gc(e, n) {
        var t = P;
        P = t !== 0 && 4 > t ? t : 4, e(!0);
        var r = ml.transition;
        ml.transition = {};
        try {
            e(!1), n();
        } finally{
            P = t, ml.transition = r;
        }
    }
    function Us() {
        return ye().memoizedState;
    }
    function Zc(e, n, t) {
        var r = en(e);
        if (t = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, js(e)) Vs(n, t);
        else if (t = hs(e, n, t, r), t !== null) {
            var l = b();
            Ce(t, e, r, l), As(t, n, r);
        }
    }
    function Jc(e, n, t) {
        var r = en(e), l = {
            lane: r,
            action: t,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (js(e)) Vs(n, l);
        else {
            var i = e.alternate;
            if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = n.lastRenderedReducer, i !== null)) try {
                var u = n.lastRenderedState, o = i(u, t);
                if (l.hasEagerState = !0, l.eagerState = o, xe(o, u)) {
                    var s = n.interleaved;
                    s === null ? (l.next = l, Fi(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
                    return;
                }
            } catch  {} finally{}
            t = hs(e, n, l, r), t !== null && (l = b(), Ce(t, e, r, l), As(t, n, r));
        }
    }
    function js(e) {
        var n = e.alternate;
        return e === R || n !== null && n === R;
    }
    function Vs(e, n) {
        mt = Mr = !0;
        var t = e.pending;
        t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
    }
    function As(e, n, t) {
        if ((t & 4194240) !== 0) {
            var r = n.lanes;
            r &= e.pendingLanes, t |= r, n.lanes = t, ki(e, t);
        }
    }
    var Dr = {
        readContext: ve,
        useCallback: X,
        useContext: X,
        useEffect: X,
        useImperativeHandle: X,
        useInsertionEffect: X,
        useLayoutEffect: X,
        useMemo: X,
        useReducer: X,
        useRef: X,
        useState: X,
        useDebugValue: X,
        useDeferredValue: X,
        useTransition: X,
        useMutableSource: X,
        useSyncExternalStore: X,
        useId: X,
        unstable_isNewReconciler: !1
    }, qc = {
        readContext: ve,
        useCallback: function(e, n) {
            return _e().memoizedState = [
                e,
                n === void 0 ? null : n
            ], e;
        },
        useContext: ve,
        useEffect: Gu,
        useImperativeHandle: function(e, n, t) {
            return t = t != null ? t.concat([
                e
            ]) : null, ar(4194308, 4, Ds.bind(null, n, e), t);
        },
        useLayoutEffect: function(e, n) {
            return ar(4194308, 4, e, n);
        },
        useInsertionEffect: function(e, n) {
            return ar(4, 2, e, n);
        },
        useMemo: function(e, n) {
            var t = _e();
            return n = n === void 0 ? null : n, e = e(), t.memoizedState = [
                e,
                n
            ], e;
        },
        useReducer: function(e, n, t) {
            var r = _e();
            return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: n
            }, r.queue = e, e = e.dispatch = Zc.bind(null, R, e), [
                r.memoizedState,
                e
            ];
        },
        useRef: function(e) {
            var n = _e();
            return e = {
                current: e
            }, n.memoizedState = e;
        },
        useState: Xu,
        useDebugValue: Qi,
        useDeferredValue: function(e) {
            return _e().memoizedState = e;
        },
        useTransition: function() {
            var e = Xu(!1), n = e[0];
            return e = Gc.bind(null, e[1]), _e().memoizedState = e, [
                n,
                e
            ];
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, n, t) {
            var r = R, l = _e();
            if (D) {
                if (t === void 0) throw Error(v(407));
                t = t();
            } else {
                if (t = n(), Q === null) throw Error(v(349));
                (yn & 30) !== 0 || xs(r, n, t);
            }
            l.memoizedState = t;
            var i = {
                value: t,
                getSnapshot: n
            };
            return l.queue = i, Gu(_s.bind(null, r, i, e), [
                e
            ]), r.flags |= 2048, Ot(9, Ns.bind(null, r, i, t, n), void 0, null), t;
        },
        useId: function() {
            var e = _e(), n = Q.identifierPrefix;
            if (D) {
                var t = Oe, r = De;
                t = (r & ~(1 << 32 - Ee(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Mt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
            } else t = Xc++, n = ":" + n + "r" + t.toString(32) + ":";
            return e.memoizedState = n;
        },
        unstable_isNewReconciler: !1
    }, bc = {
        readContext: ve,
        useCallback: Rs,
        useContext: ve,
        useEffect: Wi,
        useImperativeHandle: Os,
        useInsertionEffect: Ts,
        useLayoutEffect: Ms,
        useMemo: Fs,
        useReducer: hl,
        useRef: Ls,
        useState: function() {
            return hl(Dt);
        },
        useDebugValue: Qi,
        useDeferredValue: function(e) {
            var n = ye();
            return Is(n, A.memoizedState, e);
        },
        useTransition: function() {
            var e = hl(Dt)[0], n = ye().memoizedState;
            return [
                e,
                n
            ];
        },
        useMutableSource: Es,
        useSyncExternalStore: Cs,
        useId: Us,
        unstable_isNewReconciler: !1
    }, ef = {
        readContext: ve,
        useCallback: Rs,
        useContext: ve,
        useEffect: Wi,
        useImperativeHandle: Os,
        useInsertionEffect: Ts,
        useLayoutEffect: Ms,
        useMemo: Fs,
        useReducer: vl,
        useRef: Ls,
        useState: function() {
            return vl(Dt);
        },
        useDebugValue: Qi,
        useDeferredValue: function(e) {
            var n = ye();
            return A === null ? n.memoizedState = e : Is(n, A.memoizedState, e);
        },
        useTransition: function() {
            var e = vl(Dt)[0], n = ye().memoizedState;
            return [
                e,
                n
            ];
        },
        useMutableSource: Es,
        useSyncExternalStore: Cs,
        useId: Us,
        unstable_isNewReconciler: !1
    };
    function Yn(e, n) {
        try {
            var t = "", r = n;
            do t += Ta(r), r = r.return;
            while (r)
            var l = t;
        } catch (i) {
            l = `
Error generating stack: ` + i.message + `
` + i.stack;
        }
        return {
            value: e,
            source: n,
            stack: l,
            digest: null
        };
    }
    function yl(e, n, t) {
        return {
            value: e,
            source: null,
            stack: t ?? null,
            digest: n ?? null
        };
    }
    function bl(e, n) {
        try {
            console.error(n.value);
        } catch (t) {
            setTimeout(function() {
                throw t;
            });
        }
    }
    var nf = typeof WeakMap == "function" ? WeakMap : Map;
    function Bs(e, n, t) {
        t = Re(-1, t), t.tag = 3, t.payload = {
            element: null
        };
        var r = n.value;
        return t.callback = function() {
            Rr || (Rr = !0, ai = r), bl(e, n);
        }, t;
    }
    function Hs(e, n, t) {
        t = Re(-1, t), t.tag = 3;
        var r = e.type.getDerivedStateFromError;
        if (typeof r == "function") {
            var l = n.value;
            t.payload = function() {
                return r(l);
            }, t.callback = function() {
                bl(e, n);
            };
        }
        var i = e.stateNode;
        return i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
            bl(e, n), typeof r != "function" && (be === null ? be = new Set([
                this
            ]) : be.add(this));
            var u = n.stack;
            this.componentDidCatch(n.value, {
                componentStack: u !== null ? u : ""
            });
        }), t;
    }
    function Zu(e, n, t) {
        var r = e.pingCache;
        if (r === null) {
            r = e.pingCache = new nf;
            var l = new Set;
            r.set(n, l);
        } else l = r.get(n), l === void 0 && (l = new Set, r.set(n, l));
        l.has(t) || (l.add(t), e = vf.bind(null, e, n, t), n.then(e, e));
    }
    function Ju(e) {
        do {
            var n;
            if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
            e = e.return;
        }while (e !== null)
        return null;
    }
    function qu(e, n, t, r, l) {
        return (e.mode & 1) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Re(-1, 1), n.tag = 2, qe(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
    }
    var tf = Ve.ReactCurrentOwner, te = !1;
    function q(e, n, t, r) {
        n.child = e === null ? Ss(n, null, t, r) : $n(n, e.child, t, r);
    }
    function bu(e, n, t, r, l) {
        t = t.render;
        var i = n.ref;
        return An(n, l), r = Bi(e, n, t, r, i, l), t = Hi(), e !== null && !te ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, je(e, n, l)) : (D && t && Li(n), n.flags |= 1, q(e, n, r, l), n.child);
    }
    function eo(e, n, t, r, l) {
        if (e === null) {
            var i = t.type;
            return typeof i == "function" && !qi(i) && i.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = i, Ws(e, n, i, r, l)) : (e = pr(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
        }
        if (i = e.child, (e.lanes & l) === 0) {
            var u = i.memoizedProps;
            if (t = t.compare, t = t !== null ? t : Nt, t(u, r) && e.ref === n.ref) return je(e, n, l);
        }
        return n.flags |= 1, e = nn(i, r), e.ref = n.ref, e.return = n, n.child = e;
    }
    function Ws(e, n, t, r, l) {
        if (e !== null) {
            var i = e.memoizedProps;
            if (Nt(i, r) && e.ref === n.ref) if (te = !1, n.pendingProps = r = i, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (te = !0);
            else return n.lanes = e.lanes, je(e, n, l);
        }
        return ei(e, n, t, r, l);
    }
    function Qs(e, n, t) {
        var r = n.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden") if ((n.mode & 1) === 0) n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, L(Fn, ue), ue |= t;
        else {
            if ((t & 1073741824) === 0) return e = i !== null ? i.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, n.updateQueue = null, L(Fn, ue), ue |= e, null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : t, L(Fn, ue), ue |= r;
        }
        else i !== null ? (r = i.baseLanes | t, n.memoizedState = null) : r = t, L(Fn, ue), ue |= r;
        return q(e, n, l, t), n.child;
    }
    function $s(e, n) {
        var t = n.ref;
        (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
    }
    function ei(e, n, t, r, l) {
        var i = le(t) ? hn : J.current;
        return i = Wn(n, i), An(n, l), t = Bi(e, n, t, r, i, l), r = Hi(), e !== null && !te ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, je(e, n, l)) : (D && r && Li(n), n.flags |= 1, q(e, n, t, l), n.child);
    }
    function no(e, n, t, r, l) {
        if (le(t)) {
            var i = !0;
            xr(n);
        } else i = !1;
        if (An(n, l), n.stateNode === null) cr(e, n), gs(n, t, r), ql(n, t, r, l), r = !0;
        else if (e === null) {
            var u = n.stateNode, o = n.memoizedProps;
            u.props = o;
            var s = u.context, d = t.contextType;
            typeof d == "object" && d !== null ? d = ve(d) : (d = le(t) ? hn : J.current, d = Wn(n, d));
            var m = t.getDerivedStateFromProps, h = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function";
            h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== r || s !== d) && Ku(n, u, r, d), We = !1;
            var p = n.memoizedState;
            u.state = p, Lr(n, r, u, l), s = n.memoizedState, o !== r || p !== s || re.current || We ? (typeof m == "function" && (Jl(n, t, m, r), s = n.memoizedState), (o = We || $u(n, t, o, r, p, s, d)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = d, r = o) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
        } else {
            u = n.stateNode, vs(e, n), o = n.memoizedProps, d = n.type === n.elementType ? o : we(n.type, o), u.props = d, h = n.pendingProps, p = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = ve(s) : (s = le(t) ? hn : J.current, s = Wn(n, s));
            var g = t.getDerivedStateFromProps;
            (m = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o !== h || p !== s) && Ku(n, u, r, s), We = !1, p = n.memoizedState, u.state = p, Lr(n, r, u, l);
            var S = n.memoizedState;
            o !== h || p !== S || re.current || We ? (typeof g == "function" && (Jl(n, t, g, r), S = n.memoizedState), (d = We || $u(n, t, d, r, p, S, s) || !1) ? (m || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, S, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, S, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = S), u.props = r, u.state = S, u.context = s, r = d) : (typeof u.componentDidUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
        }
        return ni(e, n, t, r, i, l);
    }
    function ni(e, n, t, r, l, i) {
        $s(e, n);
        var u = (n.flags & 128) !== 0;
        if (!r && !u) return l && Au(n, t, !1), je(e, n, i);
        r = n.stateNode, tf.current = n;
        var o = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
        return n.flags |= 1, e !== null && u ? (n.child = $n(n, e.child, null, i), n.child = $n(n, null, o, i)) : q(e, n, o, i), n.memoizedState = r.state, l && Au(n, t, !0), n.child;
    }
    function Ks(e) {
        var n = e.stateNode;
        n.pendingContext ? Vu(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Vu(e, n.context, !1), Ui(e, n.containerInfo);
    }
    function to(e, n, t, r, l) {
        return Qn(), Mi(l), n.flags |= 256, q(e, n, t, r), n.child;
    }
    var ti = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function ri(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        };
    }
    function Ys(e, n, t) {
        var r = n.pendingProps, l = O.current, i = !1, u = (n.flags & 128) !== 0, o;
        if ((o = u) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (i = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), L(O, l & 1), e === null) return Gl(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((n.mode & 1) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824, null) : (u = r.children, e = r.fallback, i ? (r = n.mode, i = n.child, u = {
            mode: "hidden",
            children: u
        }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = u) : i = Xr(u, r, 0, null), e = mn(e, r, t, null), i.return = n, e.return = n, i.sibling = e, n.child = i, n.child.memoizedState = ri(t), n.memoizedState = ti, e) : $i(n, u));
        if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return rf(e, n, u, r, o, l, t);
        if (i) {
            i = r.fallback, u = n.mode, l = e.child, o = l.sibling;
            var s = {
                mode: "hidden",
                children: r.children
            };
            return (u & 1) === 0 && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = nn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? i = nn(o, i) : (i = mn(i, u, t, null), i.flags |= 2), i.return = n, r.return = n, r.sibling = i, n.child = r, r = i, i = n.child, u = e.child.memoizedState, u = u === null ? ri(t) : {
                baseLanes: u.baseLanes | t,
                cachePool: null,
                transitions: u.transitions
            }, i.memoizedState = u, i.childLanes = e.childLanes & ~t, n.memoizedState = ti, r;
        }
        return i = e.child, e = i.sibling, r = nn(i, {
            mode: "visible",
            children: r.children
        }), (n.mode & 1) === 0 && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [
            e
        ], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
    }
    function $i(e, n) {
        return n = Xr({
            mode: "visible",
            children: n
        }, e.mode, 0, null), n.return = e, e.child = n;
    }
    function nr(e, n, t, r) {
        return r !== null && Mi(r), $n(n, e.child, null, t), e = $i(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
    }
    function rf(e, n, t, r, l, i, u) {
        if (t) return n.flags & 256 ? (n.flags &= -257, r = yl(Error(v(422))), nr(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, l = n.mode, r = Xr({
            mode: "visible",
            children: r.children
        }, l, 0, null), i = mn(i, l, u, null), i.flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, (n.mode & 1) !== 0 && $n(n, e.child, null, u), n.child.memoizedState = ri(u), n.memoizedState = ti, i);
        if ((n.mode & 1) === 0) return nr(e, n, u, null);
        if (l.data === "$!") {
            if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
            return r = o, i = Error(v(419)), r = yl(i, r, void 0), nr(e, n, u, r);
        }
        if (o = (u & e.childLanes) !== 0, te || o) {
            if (r = Q, r !== null) {
                switch(u & -u){
                    case 4:
                        l = 2;
                        break;
                    case 16:
                        l = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        l = 32;
                        break;
                    case 536870912:
                        l = 268435456;
                        break;
                    default:
                        l = 0;
                }
                l = (l & (r.suspendedLanes | u)) !== 0 ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Ue(e, l), Ce(r, e, l, -1));
            }
            return Ji(), r = yl(Error(v(421))), nr(e, n, u, r);
        }
        return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = yf.bind(null, e), l._reactRetry = n, null) : (e = i.treeContext, oe = Je(l.nextSibling), se = n, D = !0, ke = null, e !== null && (de[pe++] = De, de[pe++] = Oe, de[pe++] = vn, De = e.id, Oe = e.overflow, vn = n), n = $i(n, r.children), n.flags |= 4096, n);
    }
    function ro(e, n, t) {
        e.lanes |= n;
        var r = e.alternate;
        r !== null && (r.lanes |= n), Zl(e.return, n, t);
    }
    function gl(e, n, t, r, l) {
        var i = e.memoizedState;
        i === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l
        } : (i.isBackwards = n, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = t, i.tailMode = l);
    }
    function Xs(e, n, t) {
        var r = n.pendingProps, l = r.revealOrder, i = r.tail;
        if (q(e, n, r.children, t), r = O.current, (r & 2) !== 0) r = r & 1 | 2, n.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0) e: for(e = n.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && ro(e, t, n);
                else if (e.tag === 19) ro(e, t, n);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === n) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === n) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            r &= 1;
        }
        if (L(O, r), (n.mode & 1) === 0) n.memoizedState = null;
        else switch(l){
            case "forwards":
                for(t = n.child, l = null; t !== null;)e = t.alternate, e !== null && Tr(e) === null && (l = t), t = t.sibling;
                t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), gl(n, !1, l, t, i);
                break;
            case "backwards":
                for(t = null, l = n.child, n.child = null; l !== null;){
                    if (e = l.alternate, e !== null && Tr(e) === null) {
                        n.child = l;
                        break;
                    }
                    e = l.sibling, l.sibling = t, t = l, l = e;
                }
                gl(n, !0, t, null, i);
                break;
            case "together":
                gl(n, !1, null, null, void 0);
                break;
            default:
                n.memoizedState = null;
        }
        return n.child;
    }
    function cr(e, n) {
        (n.mode & 1) === 0 && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
    }
    function je(e, n, t) {
        if (e !== null && (n.dependencies = e.dependencies), gn |= n.lanes, (t & n.childLanes) === 0) return null;
        if (e !== null && n.child !== e.child) throw Error(v(153));
        if (n.child !== null) {
            for(e = n.child, t = nn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null;)e = e.sibling, t = t.sibling = nn(e, e.pendingProps), t.return = n;
            t.sibling = null;
        }
        return n.child;
    }
    function lf(e, n, t) {
        switch(n.tag){
            case 3:
                Ks(n), Qn();
                break;
            case 5:
                ks(n);
                break;
            case 1:
                le(n.type) && xr(n);
                break;
            case 4:
                Ui(n, n.stateNode.containerInfo);
                break;
            case 10:
                var r = n.type._context, l = n.memoizedProps.value;
                L(zr, r._currentValue), r._currentValue = l;
                break;
            case 13:
                if (r = n.memoizedState, r !== null) return r.dehydrated !== null ? (L(O, O.current & 1), n.flags |= 128, null) : (t & n.child.childLanes) !== 0 ? Ys(e, n, t) : (L(O, O.current & 1), e = je(e, n, t), e !== null ? e.sibling : null);
                L(O, O.current & 1);
                break;
            case 19:
                if (r = (t & n.childLanes) !== 0, (e.flags & 128) !== 0) {
                    if (r) return Xs(e, n, t);
                    n.flags |= 128;
                }
                if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), L(O, O.current), r) break;
                return null;
            case 22:
            case 23:
                return n.lanes = 0, Qs(e, n, t);
        }
        return je(e, n, t);
    }
    var Gs, li, Zs, Js;
    Gs = function(e, n) {
        for(var t = n.child; t !== null;){
            if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
            else if (t.tag !== 4 && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
            }
            if (t === n) break;
            for(; t.sibling === null;){
                if (t.return === null || t.return === n) return;
                t = t.return;
            }
            t.sibling.return = t.return, t = t.sibling;
        }
    };
    li = function() {};
    Zs = function(e, n, t, r) {
        var l = e.memoizedProps;
        if (l !== r) {
            e = n.stateNode, dn(Le.current);
            var i = null;
            switch(t){
                case "input":
                    l = _l(e, l), r = _l(e, r), i = [];
                    break;
                case "select":
                    l = F({}, l, {
                        value: void 0
                    }), r = F({}, r, {
                        value: void 0
                    }), i = [];
                    break;
                case "textarea":
                    l = Ll(e, l), r = Ll(e, r), i = [];
                    break;
                default:
                    typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Er);
            }
            Ml(t, r);
            var u;
            t = null;
            for(d in l)if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null) if (d === "style") {
                var o = l[d];
                for(u in o)o.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
            } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (gt.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
            for(d in r){
                var s = r[d];
                if (o = l?.[d], r.hasOwnProperty(d) && s !== o && (s != null || o != null)) if (d === "style") if (o) {
                    for(u in o)!o.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
                    for(u in s)s.hasOwnProperty(u) && o[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
                } else t || (i || (i = []), i.push(d, t)), t = s;
                else d === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (i = i || []).push(d, s)) : d === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(d, "" + s) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (gt.hasOwnProperty(d) ? (s != null && d === "onScroll" && T("scroll", e), i || o === s || (i = [])) : (i = i || []).push(d, s));
            }
            t && (i = i || []).push("style", t);
            var d = i;
            (n.updateQueue = d) && (n.flags |= 4);
        }
    };
    Js = function(e, n, t, r) {
        t !== r && (n.flags |= 4);
    };
    function tt(e, n) {
        if (!D) switch(e.tailMode){
            case "hidden":
                n = e.tail;
                for(var t = null; n !== null;)n.alternate !== null && (t = n), n = n.sibling;
                t === null ? e.tail = null : t.sibling = null;
                break;
            case "collapsed":
                t = e.tail;
                for(var r = null; t !== null;)t.alternate !== null && (r = t), t = t.sibling;
                r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
        }
    }
    function G(e) {
        var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
        if (n) for(var l = e.child; l !== null;)t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
        else for(l = e.child; l !== null;)t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
        return e.subtreeFlags |= r, e.childLanes = t, n;
    }
    function uf(e, n, t) {
        var r = n.pendingProps;
        switch(Ti(n), n.tag){
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return G(n), null;
            case 1:
                return le(n.type) && Cr(), G(n), null;
            case 3:
                return r = n.stateNode, Kn(), M(re), M(J), Vi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (bt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, ke !== null && (di(ke), ke = null))), li(e, n), G(n), null;
            case 5:
                ji(n);
                var l = dn(Tt.current);
                if (t = n.type, e !== null && n.stateNode != null) Zs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                else {
                    if (!r) {
                        if (n.stateNode === null) throw Error(v(166));
                        return G(n), null;
                    }
                    if (e = dn(Le.current), bt(n)) {
                        r = n.stateNode, t = n.type;
                        var i = n.memoizedProps;
                        switch(r[ze] = n, r[Pt] = i, e = (n.mode & 1) !== 0, t){
                            case "dialog":
                                T("cancel", r), T("close", r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                T("load", r);
                                break;
                            case "video":
                            case "audio":
                                for(l = 0; l < st.length; l++)T(st[l], r);
                                break;
                            case "source":
                                T("error", r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                T("error", r), T("load", r);
                                break;
                            case "details":
                                T("toggle", r);
                                break;
                            case "input":
                                fu(r, i), T("invalid", r);
                                break;
                            case "select":
                                r._wrapperState = {
                                    wasMultiple: !!i.multiple
                                }, T("invalid", r);
                                break;
                            case "textarea":
                                pu(r, i), T("invalid", r);
                        }
                        Ml(t, i), l = null;
                        for(var u in i)if (i.hasOwnProperty(u)) {
                            var o = i[u];
                            u === "children" ? typeof o == "string" ? r.textContent !== o && (i.suppressHydrationWarning !== !0 && qt(r.textContent, o, e), l = [
                                "children",
                                o
                            ]) : typeof o == "number" && r.textContent !== "" + o && (i.suppressHydrationWarning !== !0 && qt(r.textContent, o, e), l = [
                                "children",
                                "" + o
                            ]) : gt.hasOwnProperty(u) && o != null && u === "onScroll" && T("scroll", r);
                        }
                        switch(t){
                            case "input":
                                At(r), du(r, i, !0);
                                break;
                            case "textarea":
                                At(r), mu(r);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                typeof i.onClick == "function" && (r.onclick = Er);
                        }
                        r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
                    } else {
                        u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = xo(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, {
                            is: r.is
                        }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[ze] = n, e[Pt] = r, Gs(e, n, !1, !1), n.stateNode = e;
                        e: {
                            switch(u = Dl(t, r), t){
                                case "dialog":
                                    T("cancel", e), T("close", e), l = r;
                                    break;
                                case "iframe":
                                case "object":
                                case "embed":
                                    T("load", e), l = r;
                                    break;
                                case "video":
                                case "audio":
                                    for(l = 0; l < st.length; l++)T(st[l], e);
                                    l = r;
                                    break;
                                case "source":
                                    T("error", e), l = r;
                                    break;
                                case "img":
                                case "image":
                                case "link":
                                    T("error", e), T("load", e), l = r;
                                    break;
                                case "details":
                                    T("toggle", e), l = r;
                                    break;
                                case "input":
                                    fu(e, r), l = _l(e, r), T("invalid", e);
                                    break;
                                case "option":
                                    l = r;
                                    break;
                                case "select":
                                    e._wrapperState = {
                                        wasMultiple: !!r.multiple
                                    }, l = F({}, r, {
                                        value: void 0
                                    }), T("invalid", e);
                                    break;
                                case "textarea":
                                    pu(e, r), l = Ll(e, r), T("invalid", e);
                                    break;
                                default:
                                    l = r;
                            }
                            Ml(t, l), o = l;
                            for(i in o)if (o.hasOwnProperty(i)) {
                                var s = o[i];
                                i === "style" ? zo(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && No(e, s)) : i === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && wt(e, s) : typeof s == "number" && wt(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (gt.hasOwnProperty(i) ? s != null && i === "onScroll" && T("scroll", e) : s != null && hi(e, i, s, u));
                            }
                            switch(t){
                                case "input":
                                    At(e), du(e, r, !1);
                                    break;
                                case "textarea":
                                    At(e), mu(e);
                                    break;
                                case "option":
                                    r.value != null && e.setAttribute("value", "" + tn(r.value));
                                    break;
                                case "select":
                                    e.multiple = !!r.multiple, i = r.value, i != null ? In(e, !!r.multiple, i, !1) : r.defaultValue != null && In(e, !!r.multiple, r.defaultValue, !0);
                                    break;
                                default:
                                    typeof l.onClick == "function" && (e.onclick = Er);
                            }
                            switch(t){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    r = !!r.autoFocus;
                                    break e;
                                case "img":
                                    r = !0;
                                    break e;
                                default:
                                    r = !1;
                            }
                        }
                        r && (n.flags |= 4);
                    }
                    n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
                }
                return G(n), null;
            case 6:
                if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
                else {
                    if (typeof r != "string" && n.stateNode === null) throw Error(v(166));
                    if (t = dn(Tt.current), dn(Le.current), bt(n)) {
                        if (r = n.stateNode, t = n.memoizedProps, r[ze] = n, (i = r.nodeValue !== t) && (e = se, e !== null)) switch(e.tag){
                            case 3:
                                qt(r.nodeValue, t, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && qt(r.nodeValue, t, (e.mode & 1) !== 0);
                        }
                        i && (n.flags |= 4);
                    } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[ze] = n, n.stateNode = r;
                }
                return G(n), null;
            case 13:
                if (M(O), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (D && oe !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0) ms(), Qn(), n.flags |= 98560, i = !1;
                    else if (i = bt(n), r !== null && r.dehydrated !== null) {
                        if (e === null) {
                            if (!i) throw Error(v(318));
                            if (i = n.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(v(317));
                            i[ze] = n;
                        } else Qn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
                        G(n), i = !1;
                    } else ke !== null && (di(ke), ke = null), i = !0;
                    if (!i) return n.flags & 65536 ? n : null;
                }
                return (n.flags & 128) !== 0 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, (n.mode & 1) !== 0 && (e === null || (O.current & 1) !== 0 ? B === 0 && (B = 3) : Ji())), n.updateQueue !== null && (n.flags |= 4), G(n), null);
            case 4:
                return Kn(), li(e, n), e === null && _t(n.stateNode.containerInfo), G(n), null;
            case 10:
                return Ri(n.type._context), G(n), null;
            case 17:
                return le(n.type) && Cr(), G(n), null;
            case 19:
                if (M(O), i = n.memoizedState, i === null) return G(n), null;
                if (r = (n.flags & 128) !== 0, u = i.rendering, u === null) if (r) tt(i, !1);
                else {
                    if (B !== 0 || e !== null && (e.flags & 128) !== 0) for(e = n.child; e !== null;){
                        if (u = Tr(e), u !== null) {
                            for(n.flags |= 128, tt(i, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null;)i = t, e = r, i.flags &= 14680066, u = i.alternate, u === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = e === null ? null : {
                                lanes: e.lanes,
                                firstContext: e.firstContext
                            }), t = t.sibling;
                            return L(O, O.current & 1 | 2), n.child;
                        }
                        e = e.sibling;
                    }
                    i.tail !== null && j() > Xn && (n.flags |= 128, r = !0, tt(i, !1), n.lanes = 4194304);
                }
                else {
                    if (!r) if (e = Tr(u), e !== null) {
                        if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), tt(i, !0), i.tail === null && i.tailMode === "hidden" && !u.alternate && !D) return G(n), null;
                    } else 2 * j() - i.renderingStartTime > Xn && t !== 1073741824 && (n.flags |= 128, r = !0, tt(i, !1), n.lanes = 4194304);
                    i.isBackwards ? (u.sibling = n.child, n.child = u) : (t = i.last, t !== null ? t.sibling = u : n.child = u, i.last = u);
                }
                return i.tail !== null ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = j(), n.sibling = null, t = O.current, L(O, r ? t & 1 | 2 : t & 1), n) : (G(n), null);
            case 22:
            case 23:
                return Zi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && (n.mode & 1) !== 0 ? (ue & 1073741824) !== 0 && (G(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : G(n), null;
            case 24:
                return null;
            case 25:
                return null;
        }
        throw Error(v(156, n.tag));
    }
    function of(e, n) {
        switch(Ti(n), n.tag){
            case 1:
                return le(n.type) && Cr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 3:
                return Kn(), M(re), M(J), Vi(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
            case 5:
                return ji(n), null;
            case 13:
                if (M(O), e = n.memoizedState, e !== null && e.dehydrated !== null) {
                    if (n.alternate === null) throw Error(v(340));
                    Qn();
                }
                return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
            case 19:
                return M(O), null;
            case 4:
                return Kn(), null;
            case 10:
                return Ri(n.type._context), null;
            case 22:
            case 23:
                return Zi(), null;
            case 24:
                return null;
            default:
                return null;
        }
    }
    var tr = !1, Z = !1, sf = typeof WeakSet == "function" ? WeakSet : Set, w = null;
    function Rn(e, n) {
        var t = e.ref;
        if (t !== null) if (typeof t == "function") try {
            t(null);
        } catch (r) {
            I(e, n, r);
        }
        else t.current = null;
    }
    function ii(e, n, t) {
        try {
            t();
        } catch (r) {
            I(e, n, r);
        }
    }
    var lo = !1;
    function af(e, n) {
        if (Hl = wr, e = ns(), Pi(e)) {
            if ("selectionStart" in e) var t = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
            else e: {
                t = (t = e.ownerDocument) && t.defaultView || window;
                var r = t.getSelection && t.getSelection();
                if (r && r.rangeCount !== 0) {
                    t = r.anchorNode;
                    var l = r.anchorOffset, i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        t.nodeType, i.nodeType;
                    } catch  {
                        t = null;
                        break e;
                    }
                    var u = 0, o = -1, s = -1, d = 0, m = 0, h = e, p = null;
                    n: for(;;){
                        for(var g; h !== t || l !== 0 && h.nodeType !== 3 || (o = u + l), h !== i || r !== 0 && h.nodeType !== 3 || (s = u + r), h.nodeType === 3 && (u += h.nodeValue.length), (g = h.firstChild) !== null;)p = h, h = g;
                        for(;;){
                            if (h === e) break n;
                            if (p === t && ++d === l && (o = u), p === i && ++m === r && (s = u), (g = h.nextSibling) !== null) break;
                            h = p, p = h.parentNode;
                        }
                        h = g;
                    }
                    t = o === -1 || s === -1 ? null : {
                        start: o,
                        end: s
                    };
                } else t = null;
            }
            t = t || {
                start: 0,
                end: 0
            };
        } else t = null;
        for(Wl = {
            focusedElem: e,
            selectionRange: t
        }, wr = !1, w = n; w !== null;)if (n = w, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, w = e;
        else for(; w !== null;){
            n = w;
            try {
                var S = n.alternate;
                if ((n.flags & 1024) !== 0) switch(n.tag){
                    case 0:
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if (S !== null) {
                            var k = S.memoizedProps, U = S.memoizedState, c = n.stateNode, a = c.getSnapshotBeforeUpdate(n.elementType === n.type ? k : we(n.type, k), U);
                            c.__reactInternalSnapshotBeforeUpdate = a;
                        }
                        break;
                    case 3:
                        var f = n.stateNode.containerInfo;
                        f.nodeType === 1 ? f.textContent = "" : f.nodeType === 9 && f.documentElement && f.removeChild(f.documentElement);
                        break;
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        throw Error(v(163));
                }
            } catch (y) {
                I(n, n.return, y);
            }
            if (e = n.sibling, e !== null) {
                e.return = n.return, w = e;
                break;
            }
            w = n.return;
        }
        return S = lo, lo = !1, S;
    }
    function ht(e, n, t) {
        var r = n.updateQueue;
        if (r = r !== null ? r.lastEffect : null, r !== null) {
            var l = r = r.next;
            do {
                if ((l.tag & e) === e) {
                    var i = l.destroy;
                    l.destroy = void 0, i !== void 0 && ii(n, t, i);
                }
                l = l.next;
            }while (l !== r)
        }
    }
    function Kr(e, n) {
        if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
            var t = n = n.next;
            do {
                if ((t.tag & e) === e) {
                    var r = t.create;
                    t.destroy = r();
                }
                t = t.next;
            }while (t !== n)
        }
    }
    function ui(e) {
        var n = e.ref;
        if (n !== null) {
            var t = e.stateNode;
            switch(e.tag){
                case 5:
                    e = t;
                    break;
                default:
                    e = t;
            }
            typeof n == "function" ? n(e) : n.current = e;
        }
    }
    function qs(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null, qs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[ze], delete n[Pt], delete n[Kl], delete n[Qc], delete n[$c])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function bs(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function io(e) {
        e: for(;;){
            for(; e.sibling === null;){
                if (e.return === null || bs(e.return)) return null;
                e = e.return;
            }
            for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
                e.child.return = e, e = e.child;
            }
            if (!(e.flags & 2)) return e.stateNode;
        }
    }
    function oi(e, n, t) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Er));
        else if (r !== 4 && (e = e.child, e !== null)) for(oi(e, n, t), e = e.sibling; e !== null;)oi(e, n, t), e = e.sibling;
    }
    function si(e, n, t) {
        var r = e.tag;
        if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
        else if (r !== 4 && (e = e.child, e !== null)) for(si(e, n, t), e = e.sibling; e !== null;)si(e, n, t), e = e.sibling;
    }
    var $ = null, Se = !1;
    function Be(e, n, t) {
        for(t = t.child; t !== null;)ea(e, n, t), t = t.sibling;
    }
    function ea(e, n, t) {
        if (Pe && typeof Pe.onCommitFiberUnmount == "function") try {
            Pe.onCommitFiberUnmount(jr, t);
        } catch  {}
        switch(t.tag){
            case 5:
                Z || Rn(t, n);
            case 6:
                var r = $, l = Se;
                $ = null, Be(e, n, t), $ = r, Se = l, $ !== null && (Se ? (e = $, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : $.removeChild(t.stateNode));
                break;
            case 18:
                $ !== null && (Se ? (e = $, t = t.stateNode, e.nodeType === 8 ? fl(e.parentNode, t) : e.nodeType === 1 && fl(e, t), Ct(e)) : fl($, t.stateNode));
                break;
            case 4:
                r = $, l = Se, $ = t.stateNode.containerInfo, Se = !0, Be(e, n, t), $ = r, Se = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                if (!Z && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                    l = r = r.next;
                    do {
                        var i = l, u = i.destroy;
                        i = i.tag, u !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && ii(t, n, u), l = l.next;
                    }while (l !== r)
                }
                Be(e, n, t);
                break;
            case 1:
                if (!Z && (Rn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
                    r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
                } catch (o) {
                    I(t, n, o);
                }
                Be(e, n, t);
                break;
            case 21:
                Be(e, n, t);
                break;
            case 22:
                t.mode & 1 ? (Z = (r = Z) || t.memoizedState !== null, Be(e, n, t), Z = r) : Be(e, n, t);
                break;
            default:
                Be(e, n, t);
        }
    }
    function uo(e) {
        var n = e.updateQueue;
        if (n !== null) {
            e.updateQueue = null;
            var t = e.stateNode;
            t === null && (t = e.stateNode = new sf), n.forEach(function(r) {
                var l = gf.bind(null, e, r);
                t.has(r) || (t.add(r), r.then(l, l));
            });
        }
    }
    function ge(e, n) {
        var t = n.deletions;
        if (t !== null) for(var r = 0; r < t.length; r++){
            var l = t[r];
            try {
                var i = e, u = n, o = u;
                e: for(; o !== null;){
                    switch(o.tag){
                        case 5:
                            $ = o.stateNode, Se = !1;
                            break e;
                        case 3:
                            $ = o.stateNode.containerInfo, Se = !0;
                            break e;
                        case 4:
                            $ = o.stateNode.containerInfo, Se = !0;
                            break e;
                    }
                    o = o.return;
                }
                if ($ === null) throw Error(v(160));
                ea(i, u, l), $ = null, Se = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null;
            } catch (d) {
                I(l, n, d);
            }
        }
        if (n.subtreeFlags & 12854) for(n = n.child; n !== null;)na(n, e), n = n.sibling;
    }
    function na(e, n) {
        var t = e.alternate, r = e.flags;
        switch(e.tag){
            case 0:
            case 11:
            case 14:
            case 15:
                if (ge(n, e), Ne(e), r & 4) {
                    try {
                        ht(3, e, e.return), Kr(3, e);
                    } catch (k) {
                        I(e, e.return, k);
                    }
                    try {
                        ht(5, e, e.return);
                    } catch (k1) {
                        I(e, e.return, k1);
                    }
                }
                break;
            case 1:
                ge(n, e), Ne(e), r & 512 && t !== null && Rn(t, t.return);
                break;
            case 5:
                if (ge(n, e), Ne(e), r & 512 && t !== null && Rn(t, t.return), e.flags & 32) {
                    var l = e.stateNode;
                    try {
                        wt(l, "");
                    } catch (k2) {
                        I(e, e.return, k2);
                    }
                }
                if (r & 4 && (l = e.stateNode, l != null)) {
                    var i = e.memoizedProps, u = t !== null ? t.memoizedProps : i, o = e.type, s = e.updateQueue;
                    if (e.updateQueue = null, s !== null) try {
                        o === "input" && i.type === "radio" && i.name != null && Eo(l, i), Dl(o, u);
                        var d = Dl(o, i);
                        for(u = 0; u < s.length; u += 2){
                            var m = s[u], h = s[u + 1];
                            m === "style" ? zo(l, h) : m === "dangerouslySetInnerHTML" ? No(l, h) : m === "children" ? wt(l, h) : hi(l, m, h, d);
                        }
                        switch(o){
                            case "input":
                                zl(l, i);
                                break;
                            case "textarea":
                                Co(l, i);
                                break;
                            case "select":
                                var p = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!i.multiple;
                                var g = i.value;
                                g != null ? In(l, !!i.multiple, g, !1) : p !== !!i.multiple && (i.defaultValue != null ? In(l, !!i.multiple, i.defaultValue, !0) : In(l, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        l[Pt] = i;
                    } catch (k3) {
                        I(e, e.return, k3);
                    }
                }
                break;
            case 6:
                if (ge(n, e), Ne(e), r & 4) {
                    if (e.stateNode === null) throw Error(v(162));
                    l = e.stateNode, i = e.memoizedProps;
                    try {
                        l.nodeValue = i;
                    } catch (k4) {
                        I(e, e.return, k4);
                    }
                }
                break;
            case 3:
                if (ge(n, e), Ne(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
                    Ct(n.containerInfo);
                } catch (k5) {
                    I(e, e.return, k5);
                }
                break;
            case 4:
                ge(n, e), Ne(e);
                break;
            case 13:
                ge(n, e), Ne(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Xi = j())), r & 4 && uo(e);
                break;
            case 22:
                if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (Z = (d = Z) || m, ge(n, e), Z = d) : ge(n, e), Ne(e), r & 8192) {
                    if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !m && (e.mode & 1) !== 0) for(w = e, m = e.child; m !== null;){
                        for(h = w = m; w !== null;){
                            switch(p = w, g = p.child, p.tag){
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    ht(4, p, p.return);
                                    break;
                                case 1:
                                    Rn(p, p.return);
                                    var S = p.stateNode;
                                    if (typeof S.componentWillUnmount == "function") {
                                        r = p, t = p.return;
                                        try {
                                            n = r, S.props = n.memoizedProps, S.state = n.memoizedState, S.componentWillUnmount();
                                        } catch (k6) {
                                            I(r, t, k6);
                                        }
                                    }
                                    break;
                                case 5:
                                    Rn(p, p.return);
                                    break;
                                case 22:
                                    if (p.memoizedState !== null) {
                                        so(h);
                                        continue;
                                    }
                            }
                            g !== null ? (g.return = p, w = g) : so(h);
                        }
                        m = m.sibling;
                    }
                    e: for(m = null, h = e;;){
                        if (h.tag === 5) {
                            if (m === null) {
                                m = h;
                                try {
                                    l = h.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (o = h.stateNode, s = h.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = _o("display", u));
                                } catch (k7) {
                                    I(e, e.return, k7);
                                }
                            }
                        } else if (h.tag === 6) {
                            if (m === null) try {
                                h.stateNode.nodeValue = d ? "" : h.memoizedProps;
                            } catch (k8) {
                                I(e, e.return, k8);
                            }
                        } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                            h.child.return = h, h = h.child;
                            continue;
                        }
                        if (h === e) break e;
                        for(; h.sibling === null;){
                            if (h.return === null || h.return === e) break e;
                            m === h && (m = null), h = h.return;
                        }
                        m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
                    }
                }
                break;
            case 19:
                ge(n, e), Ne(e), r & 4 && uo(e);
                break;
            case 21:
                break;
            default:
                ge(n, e), Ne(e);
        }
    }
    function Ne(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                e: {
                    for(var t = e.return; t !== null;){
                        if (bs(t)) {
                            var r = t;
                            break e;
                        }
                        t = t.return;
                    }
                    throw Error(v(160));
                }
                switch(r.tag){
                    case 5:
                        var l = r.stateNode;
                        r.flags & 32 && (wt(l, ""), r.flags &= -33);
                        var i = io(e);
                        si(e, i, l);
                        break;
                    case 3:
                    case 4:
                        var u = r.stateNode.containerInfo, o = io(e);
                        oi(e, o, u);
                        break;
                    default:
                        throw Error(v(161));
                }
            } catch (s) {
                I(e, e.return, s);
            }
            e.flags &= -3;
        }
        n & 4096 && (e.flags &= -4097);
    }
    function cf(e, n, t) {
        w = e, ta(e, n, t);
    }
    function ta(e, n, t) {
        for(var r = (e.mode & 1) !== 0; w !== null;){
            var l = w, i = l.child;
            if (l.tag === 22 && r) {
                var u = l.memoizedState !== null || tr;
                if (!u) {
                    var o = l.alternate, s = o !== null && o.memoizedState !== null || Z;
                    o = tr;
                    var d = Z;
                    if (tr = u, (Z = s) && !d) for(w = l; w !== null;)u = w, s = u.child, u.tag === 22 && u.memoizedState !== null ? ao(l) : s !== null ? (s.return = u, w = s) : ao(l);
                    for(; i !== null;)w = i, ta(i, n, t), i = i.sibling;
                    w = l, tr = o, Z = d;
                }
                oo(e, n, t);
            } else (l.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = l, w = i) : oo(e, n, t);
        }
    }
    function oo(e) {
        for(; w !== null;){
            var n = w;
            if ((n.flags & 8772) !== 0) {
                var t = n.alternate;
                try {
                    if ((n.flags & 8772) !== 0) switch(n.tag){
                        case 0:
                        case 11:
                        case 15:
                            Z || Kr(5, n);
                            break;
                        case 1:
                            var r = n.stateNode;
                            if (n.flags & 4 && !Z) if (t === null) r.componentDidMount();
                            else {
                                var l = n.elementType === n.type ? t.memoizedProps : we(n.type, t.memoizedProps);
                                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            var i = n.updateQueue;
                            i !== null && Qu(n, i, r);
                            break;
                        case 3:
                            var u = n.updateQueue;
                            if (u !== null) {
                                if (t = null, n.child !== null) switch(n.child.tag){
                                    case 5:
                                        t = n.child.stateNode;
                                        break;
                                    case 1:
                                        t = n.child.stateNode;
                                }
                                Qu(n, u, t);
                            }
                            break;
                        case 5:
                            var o = n.stateNode;
                            if (t === null && n.flags & 4) {
                                t = o;
                                var s = n.memoizedProps;
                                switch(n.type){
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        s.autoFocus && t.focus();
                                        break;
                                    case "img":
                                        s.src && (t.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (n.memoizedState === null) {
                                var d = n.alternate;
                                if (d !== null) {
                                    var m = d.memoizedState;
                                    if (m !== null) {
                                        var h = m.dehydrated;
                                        h !== null && Ct(h);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(v(163));
                    }
                    Z || n.flags & 512 && ui(n);
                } catch (p) {
                    I(n, n.return, p);
                }
            }
            if (n === e) {
                w = null;
                break;
            }
            if (t = n.sibling, t !== null) {
                t.return = n.return, w = t;
                break;
            }
            w = n.return;
        }
    }
    function so(e) {
        for(; w !== null;){
            var n = w;
            if (n === e) {
                w = null;
                break;
            }
            var t = n.sibling;
            if (t !== null) {
                t.return = n.return, w = t;
                break;
            }
            w = n.return;
        }
    }
    function ao(e) {
        for(; w !== null;){
            var n = w;
            try {
                switch(n.tag){
                    case 0:
                    case 11:
                    case 15:
                        var t = n.return;
                        try {
                            Kr(4, n);
                        } catch (s) {
                            I(n, t, s);
                        }
                        break;
                    case 1:
                        var r = n.stateNode;
                        if (typeof r.componentDidMount == "function") {
                            var l = n.return;
                            try {
                                r.componentDidMount();
                            } catch (s1) {
                                I(n, l, s1);
                            }
                        }
                        var i = n.return;
                        try {
                            ui(n);
                        } catch (s2) {
                            I(n, i, s2);
                        }
                        break;
                    case 5:
                        var u = n.return;
                        try {
                            ui(n);
                        } catch (s3) {
                            I(n, u, s3);
                        }
                }
            } catch (s4) {
                I(n, n.return, s4);
            }
            if (n === e) {
                w = null;
                break;
            }
            var o = n.sibling;
            if (o !== null) {
                o.return = n.return, w = o;
                break;
            }
            w = n.return;
        }
    }
    var ff = Math.ceil, Or = Ve.ReactCurrentDispatcher, Ki = Ve.ReactCurrentOwner, he = Ve.ReactCurrentBatchConfig, _ = 0, Q = null, V = null, K = 0, ue = 0, Fn = un(0), B = 0, Rt = null, gn = 0, Yr = 0, Yi = 0, vt = null, ne = null, Xi = 0, Xn = 1 / 0, Te = null, Rr = !1, ai = null, be = null, rr = !1, Ye1 = null, Fr = 0, yt = 0, ci = null, fr = -1, dr = 0;
    function b() {
        return (_ & 6) !== 0 ? j() : fr !== -1 ? fr : fr = j();
    }
    function en(e) {
        return (e.mode & 1) === 0 ? 1 : (_ & 2) !== 0 && K !== 0 ? K & -K : Yc.transition !== null ? (dr === 0 && (dr = Vo()), dr) : (e = P, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ko(e.type)), e);
    }
    function Ce(e, n, t, r) {
        if (50 < yt) throw yt = 0, ci = null, Error(v(185));
        Ft(e, t, r), ((_ & 2) === 0 || e !== Q) && (e === Q && ((_ & 2) === 0 && (Yr |= t), B === 4 && $e(e, K)), ie(e, r), t === 1 && _ === 0 && (n.mode & 1) === 0 && (Xn = j() + 500, Wr && on()));
    }
    function ie(e, n) {
        var t = e.callbackNode;
        Ga(e, n);
        var r = gr(e, e === Q ? K : 0);
        if (r === 0) t !== null && yu(t), e.callbackNode = null, e.callbackPriority = 0;
        else if (n = r & -r, e.callbackPriority !== n) {
            if (t != null && yu(t), n === 1) e.tag === 0 ? Kc(co.bind(null, e)) : fs(co.bind(null, e)), Hc(function() {
                (_ & 6) === 0 && on();
            }), t = null;
            else {
                switch(Ao(r)){
                    case 1:
                        t = Si;
                        break;
                    case 4:
                        t = Uo;
                        break;
                    case 16:
                        t = yr;
                        break;
                    case 536870912:
                        t = jo;
                        break;
                    default:
                        t = yr;
                }
                t = ca(t, ra.bind(null, e));
            }
            e.callbackPriority = n, e.callbackNode = t;
        }
    }
    function ra(e, n) {
        if (fr = -1, dr = 0, (_ & 6) !== 0) throw Error(v(327));
        var t = e.callbackNode;
        if (Bn() && e.callbackNode !== t) return null;
        var r = gr(e, e === Q ? K : 0);
        if (r === 0) return null;
        if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || n) n = Ir(e, r);
        else {
            n = r;
            var l = _;
            _ |= 2;
            var i = ia();
            (Q !== e || K !== n) && (Te = null, Xn = j() + 500, pn(e, n));
            do try {
                mf();
                break;
            } catch (o) {
                la(e, o);
            }
            while (1)
            Oi(), Or.current = i, _ = l, V !== null ? n = 0 : (Q = null, K = 0, n = B);
        }
        if (n !== 0) {
            if (n === 2 && (l = Ul(e), l !== 0 && (r = l, n = fi(e, l))), n === 1) throw t = Rt, pn(e, 0), $e(e, r), ie(e, j()), t;
            if (n === 6) $e(e, r);
            else {
                if (l = e.current.alternate, (r & 30) === 0 && !df(l) && (n = Ir(e, r), n === 2 && (i = Ul(e), i !== 0 && (r = i, n = fi(e, i))), n === 1)) throw t = Rt, pn(e, 0), $e(e, r), ie(e, j()), t;
                switch(e.finishedWork = l, e.finishedLanes = r, n){
                    case 0:
                    case 1:
                        throw Error(v(345));
                    case 2:
                        an(e, ne, Te);
                        break;
                    case 3:
                        if ($e(e, r), (r & 130023424) === r && (n = Xi + 500 - j(), 10 < n)) {
                            if (gr(e, 0) !== 0) break;
                            if (l = e.suspendedLanes, (l & r) !== r) {
                                b(), e.pingedLanes |= e.suspendedLanes & l;
                                break;
                            }
                            e.timeoutHandle = $l(an.bind(null, e, ne, Te), n);
                            break;
                        }
                        an(e, ne, Te);
                        break;
                    case 4:
                        if ($e(e, r), (r & 4194240) === r) break;
                        for(n = e.eventTimes, l = -1; 0 < r;){
                            var u = 31 - Ee(r);
                            i = 1 << u, u = n[u], u > l && (l = u), r &= ~i;
                        }
                        if (r = l, r = j() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ff(r / 1960)) - r, 10 < r) {
                            e.timeoutHandle = $l(an.bind(null, e, ne, Te), r);
                            break;
                        }
                        an(e, ne, Te);
                        break;
                    case 5:
                        an(e, ne, Te);
                        break;
                    default:
                        throw Error(v(329));
                }
            }
        }
        return ie(e, j()), e.callbackNode === t ? ra.bind(null, e) : null;
    }
    function fi(e, n) {
        var t = vt;
        return e.current.memoizedState.isDehydrated && (pn(e, n).flags |= 256), e = Ir(e, n), e !== 2 && (n = ne, ne = t, n !== null && di(n)), e;
    }
    function di(e) {
        ne === null ? ne = e : ne.push.apply(ne, e);
    }
    function df(e) {
        for(var n = e;;){
            if (n.flags & 16384) {
                var t = n.updateQueue;
                if (t !== null && (t = t.stores, t !== null)) for(var r = 0; r < t.length; r++){
                    var l = t[r], i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!xe(i(), l)) return !1;
                    } catch  {
                        return !1;
                    }
                }
            }
            if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
            else {
                if (n === e) break;
                for(; n.sibling === null;){
                    if (n.return === null || n.return === e) return !0;
                    n = n.return;
                }
                n.sibling.return = n.return, n = n.sibling;
            }
        }
        return !0;
    }
    function $e(e, n) {
        for(n &= ~Yi, n &= ~Yr, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;){
            var t = 31 - Ee(n), r = 1 << t;
            e[t] = -1, n &= ~r;
        }
    }
    function co(e) {
        if ((_ & 6) !== 0) throw Error(v(327));
        Bn();
        var n = gr(e, 0);
        if ((n & 1) === 0) return ie(e, j()), null;
        var t = Ir(e, n);
        if (e.tag !== 0 && t === 2) {
            var r = Ul(e);
            r !== 0 && (n = r, t = fi(e, r));
        }
        if (t === 1) throw t = Rt, pn(e, 0), $e(e, n), ie(e, j()), t;
        if (t === 6) throw Error(v(345));
        return e.finishedWork = e.current.alternate, e.finishedLanes = n, an(e, ne, Te), ie(e, j()), null;
    }
    function Gi(e, n) {
        var t = _;
        _ |= 1;
        try {
            return e(n);
        } finally{
            _ = t, _ === 0 && (Xn = j() + 500, Wr && on());
        }
    }
    function wn(e) {
        Ye1 !== null && Ye1.tag === 0 && (_ & 6) === 0 && Bn();
        var n = _;
        _ |= 1;
        var t = he.transition, r = P;
        try {
            if (he.transition = null, P = 1, e) return e();
        } finally{
            P = r, he.transition = t, _ = n, (_ & 6) === 0 && on();
        }
    }
    function Zi() {
        ue = Fn.current, M(Fn);
    }
    function pn(e, n) {
        e.finishedWork = null, e.finishedLanes = 0;
        var t = e.timeoutHandle;
        if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), V !== null) for(t = V.return; t !== null;){
            var r = t;
            switch(Ti(r), r.tag){
                case 1:
                    r = r.type.childContextTypes, r != null && Cr();
                    break;
                case 3:
                    Kn(), M(re), M(J), Vi();
                    break;
                case 5:
                    ji(r);
                    break;
                case 4:
                    Kn();
                    break;
                case 13:
                    M(O);
                    break;
                case 19:
                    M(O);
                    break;
                case 10:
                    Ri(r.type._context);
                    break;
                case 22:
                case 23:
                    Zi();
            }
            t = t.return;
        }
        if (Q = e, V = e = nn(e.current, null), K = ue = n, B = 0, Rt = null, Yi = Yr = gn = 0, ne = vt = null, fn !== null) {
            for(n = 0; n < fn.length; n++)if (t = fn[n], r = t.interleaved, r !== null) {
                t.interleaved = null;
                var l = r.next, i = t.pending;
                if (i !== null) {
                    var u = i.next;
                    i.next = l, r.next = u;
                }
                t.pending = r;
            }
            fn = null;
        }
        return e;
    }
    function la(e, n) {
        do {
            var t = V;
            try {
                if (Oi(), sr.current = Dr, Mr) {
                    for(var r = R.memoizedState; r !== null;){
                        var l = r.queue;
                        l !== null && (l.pending = null), r = r.next;
                    }
                    Mr = !1;
                }
                if (yn = 0, W = A = R = null, mt = !1, Mt = 0, Ki.current = null, t === null || t.return === null) {
                    B = 1, Rt = n, V = null;
                    break;
                }
                e: {
                    var i = e, u = t.return, o = t, s = n;
                    if (n = K, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                        var d = s, m = o, h = m.tag;
                        if ((m.mode & 1) === 0 && (h === 0 || h === 11 || h === 15)) {
                            var p = m.alternate;
                            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
                        }
                        var g = Ju(u);
                        if (g !== null) {
                            g.flags &= -257, qu(g, u, o, i, n), g.mode & 1 && Zu(i, d, n), n = g, s = d;
                            var S = n.updateQueue;
                            if (S === null) {
                                var k = new Set;
                                k.add(s), n.updateQueue = k;
                            } else S.add(s);
                            break e;
                        } else {
                            if ((n & 1) === 0) {
                                Zu(i, d, n), Ji();
                                break e;
                            }
                            s = Error(v(426));
                        }
                    } else if (D && o.mode & 1) {
                        var U = Ju(u);
                        if (U !== null) {
                            (U.flags & 65536) === 0 && (U.flags |= 256), qu(U, u, o, i, n), Mi(Yn(s, o));
                            break e;
                        }
                    }
                    i = s = Yn(s, o), B !== 4 && (B = 2), vt === null ? vt = [
                        i
                    ] : vt.push(i), i = u;
                    do {
                        switch(i.tag){
                            case 3:
                                i.flags |= 65536, n &= -n, i.lanes |= n;
                                var c = Bs(i, s, n);
                                Wu(i, c);
                                break e;
                            case 1:
                                o = s;
                                var a = i.type, f = i.stateNode;
                                if ((i.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (be === null || !be.has(f)))) {
                                    i.flags |= 65536, n &= -n, i.lanes |= n;
                                    var y = Hs(i, o, n);
                                    Wu(i, y);
                                    break e;
                                }
                        }
                        i = i.return;
                    }while (i !== null)
                }
                oa(t);
            } catch (E) {
                n = E, V === t && t !== null && (V = t = t.return);
                continue;
            }
            break;
        }while (1)
    }
    function ia() {
        var e = Or.current;
        return Or.current = Dr, e === null ? Dr : e;
    }
    function Ji() {
        (B === 0 || B === 3 || B === 2) && (B = 4), Q === null || (gn & 268435455) === 0 && (Yr & 268435455) === 0 || $e(Q, K);
    }
    function Ir(e, n) {
        var t = _;
        _ |= 2;
        var r = ia();
        (Q !== e || K !== n) && (Te = null, pn(e, n));
        do try {
            pf();
            break;
        } catch (l) {
            la(e, l);
        }
        while (1)
        if (Oi(), _ = t, Or.current = r, V !== null) throw Error(v(261));
        return Q = null, K = 0, B;
    }
    function pf() {
        for(; V !== null;)ua(V);
    }
    function mf() {
        for(; V !== null && !Aa();)ua(V);
    }
    function ua(e) {
        var n = aa(e.alternate, e, ue);
        e.memoizedProps = e.pendingProps, n === null ? oa(e) : V = n, Ki.current = null;
    }
    function oa(e) {
        var n = e;
        do {
            var t = n.alternate;
            if (e = n.return, (n.flags & 32768) === 0) {
                if (t = uf(t, n, ue), t !== null) {
                    V = t;
                    return;
                }
            } else {
                if (t = of(t, n), t !== null) {
                    t.flags &= 32767, V = t;
                    return;
                }
                if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
                else {
                    B = 6, V = null;
                    return;
                }
            }
            if (n = n.sibling, n !== null) {
                V = n;
                return;
            }
            V = n = e;
        }while (n !== null)
        B === 0 && (B = 5);
    }
    function an(e, n, t) {
        var r = P, l = he.transition;
        try {
            he.transition = null, P = 1, hf(e, n, t, r);
        } finally{
            he.transition = l, P = r;
        }
        return null;
    }
    function hf(e, n, t, r) {
        do Bn();
        while (Ye1 !== null)
        if ((_ & 6) !== 0) throw Error(v(327));
        t = e.finishedWork;
        var l = e.finishedLanes;
        if (t === null) return null;
        if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(v(177));
        e.callbackNode = null, e.callbackPriority = 0;
        var i = t.lanes | t.childLanes;
        if (Za(e, i), e === Q && (V = Q = null, K = 0), (t.subtreeFlags & 2064) === 0 && (t.flags & 2064) === 0 || rr || (rr = !0, ca(yr, function() {
            return Bn(), null;
        })), i = (t.flags & 15990) !== 0, (t.subtreeFlags & 15990) !== 0 || i) {
            i = he.transition, he.transition = null;
            var u = P;
            P = 1;
            var o = _;
            _ |= 4, Ki.current = null, af(e, t), na(t, e), Ic(Wl), wr = !!Hl, Wl = Hl = null, e.current = t, cf(t, e, l), Ba(), _ = o, P = u, he.transition = i;
        } else e.current = t;
        if (rr && (rr = !1, Ye1 = e, Fr = l), i = e.pendingLanes, i === 0 && (be = null), Qa(t.stateNode, r), ie(e, j()), n !== null) for(r = e.onRecoverableError, t = 0; t < n.length; t++)l = n[t], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
        if (Rr) throw Rr = !1, e = ai, ai = null, e;
        return (Fr & 1) !== 0 && e.tag !== 0 && Bn(), i = e.pendingLanes, (i & 1) !== 0 ? e === ci ? yt++ : (yt = 0, ci = e) : yt = 0, on(), null;
    }
    function Bn() {
        if (Ye1 !== null) {
            var e = Ao(Fr), n = he.transition, t = P;
            try {
                if (he.transition = null, P = 16 > e ? 16 : e, Ye1 === null) var r = !1;
                else {
                    if (e = Ye1, Ye1 = null, Fr = 0, (_ & 6) !== 0) throw Error(v(331));
                    var l = _;
                    for(_ |= 4, w = e.current; w !== null;){
                        var i = w, u = i.child;
                        if ((w.flags & 16) !== 0) {
                            var o = i.deletions;
                            if (o !== null) {
                                for(var s = 0; s < o.length; s++){
                                    var d = o[s];
                                    for(w = d; w !== null;){
                                        var m = w;
                                        switch(m.tag){
                                            case 0:
                                            case 11:
                                            case 15:
                                                ht(8, m, i);
                                        }
                                        var h = m.child;
                                        if (h !== null) h.return = m, w = h;
                                        else for(; w !== null;){
                                            m = w;
                                            var p = m.sibling, g = m.return;
                                            if (qs(m), m === d) {
                                                w = null;
                                                break;
                                            }
                                            if (p !== null) {
                                                p.return = g, w = p;
                                                break;
                                            }
                                            w = g;
                                        }
                                    }
                                }
                                var S = i.alternate;
                                if (S !== null) {
                                    var k = S.child;
                                    if (k !== null) {
                                        S.child = null;
                                        do {
                                            var U = k.sibling;
                                            k.sibling = null, k = U;
                                        }while (k !== null)
                                    }
                                }
                                w = i;
                            }
                        }
                        if ((i.subtreeFlags & 2064) !== 0 && u !== null) u.return = i, w = u;
                        else e: for(; w !== null;){
                            if (i = w, (i.flags & 2048) !== 0) switch(i.tag){
                                case 0:
                                case 11:
                                case 15:
                                    ht(9, i, i.return);
                            }
                            var c = i.sibling;
                            if (c !== null) {
                                c.return = i.return, w = c;
                                break e;
                            }
                            w = i.return;
                        }
                    }
                    var a = e.current;
                    for(w = a; w !== null;){
                        u = w;
                        var f = u.child;
                        if ((u.subtreeFlags & 2064) !== 0 && f !== null) f.return = u, w = f;
                        else e: for(u = a; w !== null;){
                            if (o = w, (o.flags & 2048) !== 0) try {
                                switch(o.tag){
                                    case 0:
                                    case 11:
                                    case 15:
                                        Kr(9, o);
                                }
                            } catch (E) {
                                I(o, o.return, E);
                            }
                            if (o === u) {
                                w = null;
                                break e;
                            }
                            var y = o.sibling;
                            if (y !== null) {
                                y.return = o.return, w = y;
                                break e;
                            }
                            w = o.return;
                        }
                    }
                    if (_ = l, on(), Pe && typeof Pe.onPostCommitFiberRoot == "function") try {
                        Pe.onPostCommitFiberRoot(jr, e);
                    } catch  {}
                    r = !0;
                }
                return r;
            } finally{
                P = t, he.transition = n;
            }
        }
        return !1;
    }
    function fo(e, n, t) {
        n = Yn(t, n), n = Bs(e, n, 1), e = qe(e, n, 1), n = b(), e !== null && (Ft(e, 1, n), ie(e, n));
    }
    function I(e, n, t) {
        if (e.tag === 3) fo(e, e, t);
        else for(; n !== null;){
            if (n.tag === 3) {
                fo(n, e, t);
                break;
            } else if (n.tag === 1) {
                var r = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (be === null || !be.has(r))) {
                    e = Yn(t, e), e = Hs(n, e, 1), n = qe(n, e, 1), e = b(), n !== null && (Ft(n, 1, e), ie(n, e));
                    break;
                }
            }
            n = n.return;
        }
    }
    function vf(e, n, t) {
        var r = e.pingCache;
        r !== null && r.delete(n), n = b(), e.pingedLanes |= e.suspendedLanes & t, Q === e && (K & t) === t && (B === 4 || B === 3 && (K & 130023424) === K && 500 > j() - Xi ? pn(e, 0) : Yi |= t), ie(e, n);
    }
    function sa(e, n) {
        n === 0 && ((e.mode & 1) === 0 ? n = 1 : (n = Wt, Wt <<= 1, (Wt & 130023424) === 0 && (Wt = 4194304)));
        var t = b();
        e = Ue(e, n), e !== null && (Ft(e, n, t), ie(e, t));
    }
    function yf(e) {
        var n = e.memoizedState, t = 0;
        n !== null && (t = n.retryLane), sa(e, t);
    }
    function gf(e, n) {
        var t = 0;
        switch(e.tag){
            case 13:
                var r = e.stateNode, l = e.memoizedState;
                l !== null && (t = l.retryLane);
                break;
            case 19:
                r = e.stateNode;
                break;
            default:
                throw Error(v(314));
        }
        r !== null && r.delete(n), sa(e, t);
    }
    var aa;
    aa = function(e, n, t) {
        if (e !== null) if (e.memoizedProps !== n.pendingProps || re.current) te = !0;
        else {
            if ((e.lanes & t) === 0 && (n.flags & 128) === 0) return te = !1, lf(e, n, t);
            te = (e.flags & 131072) !== 0;
        }
        else te = !1, D && (n.flags & 1048576) !== 0 && ds(n, _r, n.index);
        switch(n.lanes = 0, n.tag){
            case 2:
                var r = n.type;
                cr(e, n), e = n.pendingProps;
                var l = Wn(n, J.current);
                An(n, t), l = Bi(null, n, r, e, l, t);
                var i = Hi();
                return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, le(r) ? (i = !0, xr(n)) : i = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ii(n), l.updater = Qr, n.stateNode = l, l._reactInternals = n, ql(n, r, e, t), n = ni(null, n, r, !0, i, t)) : (n.tag = 0, D && i && Li(n), q(null, n, l, t), n = n.child), n;
            case 16:
                r = n.elementType;
                e: {
                    switch(cr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sf(r), e = we(r, e), l){
                        case 0:
                            n = ei(null, n, r, e, t);
                            break e;
                        case 1:
                            n = no(null, n, r, e, t);
                            break e;
                        case 11:
                            n = bu(null, n, r, e, t);
                            break e;
                        case 14:
                            n = eo(null, n, r, we(r.type, e), t);
                            break e;
                    }
                    throw Error(v(306, r, ""));
                }
                return n;
            case 0:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : we(r, l), ei(e, n, r, l, t);
            case 1:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : we(r, l), no(e, n, r, l, t);
            case 3:
                e: {
                    if (Ks(n), e === null) throw Error(v(387));
                    r = n.pendingProps, i = n.memoizedState, l = i.element, vs(e, n), Lr(n, r, null, t);
                    var u = n.memoizedState;
                    if (r = u.element, i.isDehydrated) if (i = {
                        element: r,
                        isDehydrated: !1,
                        cache: u.cache,
                        pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
                        transitions: u.transitions
                    }, n.updateQueue.baseState = i, n.memoizedState = i, n.flags & 256) {
                        l = Yn(Error(v(423)), n), n = to(e, n, r, t, l);
                        break e;
                    } else if (r !== l) {
                        l = Yn(Error(v(424)), n), n = to(e, n, r, t, l);
                        break e;
                    } else for(oe = Je(n.stateNode.containerInfo.firstChild), se = n, D = !0, ke = null, t = Ss(n, null, r, t), n.child = t; t;)t.flags = t.flags & -3 | 4096, t = t.sibling;
                    else {
                        if (Qn(), r === l) {
                            n = je(e, n, t);
                            break e;
                        }
                        q(e, n, r, t);
                    }
                    n = n.child;
                }
                return n;
            case 5:
                return ks(n), e === null && Gl(n), r = n.type, l = n.pendingProps, i = e !== null ? e.memoizedProps : null, u = l.children, Ql(r, l) ? u = null : i !== null && Ql(r, i) && (n.flags |= 32), $s(e, n), q(e, n, u, t), n.child;
            case 6:
                return e === null && Gl(n), null;
            case 13:
                return Ys(e, n, t);
            case 4:
                return Ui(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = $n(n, null, r, t) : q(e, n, r, t), n.child;
            case 11:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : we(r, l), bu(e, n, r, l, t);
            case 7:
                return q(e, n, n.pendingProps, t), n.child;
            case 8:
                return q(e, n, n.pendingProps.children, t), n.child;
            case 12:
                return q(e, n, n.pendingProps.children, t), n.child;
            case 10:
                e: {
                    if (r = n.type._context, l = n.pendingProps, i = n.memoizedProps, u = l.value, L(zr, r._currentValue), r._currentValue = u, i !== null) if (xe(i.value, u)) {
                        if (i.children === l.children && !re.current) {
                            n = je(e, n, t);
                            break e;
                        }
                    } else for(i = n.child, i !== null && (i.return = n); i !== null;){
                        var o = i.dependencies;
                        if (o !== null) {
                            u = i.child;
                            for(var s = o.firstContext; s !== null;){
                                if (s.context === r) {
                                    if (i.tag === 1) {
                                        s = Re(-1, t & -t), s.tag = 2;
                                        var d = i.updateQueue;
                                        if (d !== null) {
                                            d = d.shared;
                                            var m = d.pending;
                                            m === null ? s.next = s : (s.next = m.next, m.next = s), d.pending = s;
                                        }
                                    }
                                    i.lanes |= t, s = i.alternate, s !== null && (s.lanes |= t), Zl(i.return, t, n), o.lanes |= t;
                                    break;
                                }
                                s = s.next;
                            }
                        } else if (i.tag === 10) u = i.type === n.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (u = i.return, u === null) throw Error(v(341));
                            u.lanes |= t, o = u.alternate, o !== null && (o.lanes |= t), Zl(u, t, n), u = i.sibling;
                        } else u = i.child;
                        if (u !== null) u.return = i;
                        else for(u = i; u !== null;){
                            if (u === n) {
                                u = null;
                                break;
                            }
                            if (i = u.sibling, i !== null) {
                                i.return = u.return, u = i;
                                break;
                            }
                            u = u.return;
                        }
                        i = u;
                    }
                    q(e, n, l.children, t), n = n.child;
                }
                return n;
            case 9:
                return l = n.type, r = n.pendingProps.children, An(n, t), l = ve(l), r = r(l), n.flags |= 1, q(e, n, r, t), n.child;
            case 14:
                return r = n.type, l = we(r, n.pendingProps), l = we(r.type, l), eo(e, n, r, l, t);
            case 15:
                return Ws(e, n, n.type, n.pendingProps, t);
            case 17:
                return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : we(r, l), cr(e, n), n.tag = 1, le(r) ? (e = !0, xr(n)) : e = !1, An(n, t), gs(n, r, l), ql(n, r, l, t), ni(null, n, r, !0, e, t);
            case 19:
                return Xs(e, n, t);
            case 22:
                return Qs(e, n, t);
        }
        throw Error(v(156, n.tag));
    };
    function ca(e, n) {
        return Io(e, n);
    }
    function wf(e, n, t, r) {
        this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function me(e, n, t, r) {
        return new wf(e, n, t, r);
    }
    function qi(e) {
        return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Sf(e) {
        if (typeof e == "function") return qi(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof, e === yi) return 11;
            if (e === gi) return 14;
        }
        return 2;
    }
    function nn(e, n) {
        var t = e.alternate;
        return t === null ? (t = me(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
    }
    function pr(e, n, t, r, l, i) {
        var u = 2;
        if (r = e, typeof e == "function") qi(e) && (u = 1);
        else if (typeof e == "string") u = 5;
        else e: switch(e){
            case Nn:
                return mn(t.children, l, i, n);
            case vi:
                u = 8, l |= 8;
                break;
            case El:
                return e = me(12, t, n, l | 2), e.elementType = El, e.lanes = i, e;
            case Cl:
                return e = me(13, t, n, l), e.elementType = Cl, e.lanes = i, e;
            case xl:
                return e = me(19, t, n, l), e.elementType = xl, e.lanes = i, e;
            case wo:
                return Xr(t, l, i, n);
            default:
                if (typeof e == "object" && e !== null) switch(e.$$typeof){
                    case yo:
                        u = 10;
                        break e;
                    case go:
                        u = 9;
                        break e;
                    case yi:
                        u = 11;
                        break e;
                    case gi:
                        u = 14;
                        break e;
                    case He:
                        u = 16, r = null;
                        break e;
                }
                throw Error(v(130, e == null ? e : typeof e, ""));
        }
        return n = me(u, t, n, l), n.elementType = e, n.type = r, n.lanes = i, n;
    }
    function mn(e, n, t, r) {
        return e = me(7, e, r, n), e.lanes = t, e;
    }
    function Xr(e, n, t, r) {
        return e = me(22, e, r, n), e.elementType = wo, e.lanes = t, e.stateNode = {
            isHidden: !1
        }, e;
    }
    function wl(e, n, t) {
        return e = me(6, e, null, n), e.lanes = t, e;
    }
    function Sl(e, n, t) {
        return n = me(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, n;
    }
    function kf(e, n, t, r, l) {
        this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = rl(0), this.expirationTimes = rl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = rl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
    }
    function bi(e, n, t, r, l, i, u, o, s) {
        return e = new kf(e, n, t, o, s), n === 1 ? (n = 1, i === !0 && (n |= 8)) : n = 0, i = me(3, null, null, n), e.current = i, i.stateNode = e, i.memoizedState = {
            element: r,
            isDehydrated: t,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        }, Ii(i), e;
    }
    function Ef(e, n, t) {
        var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: xn,
            key: r == null ? null : "" + r,
            children: e,
            containerInfo: n,
            implementation: t
        };
    }
    function fa(e) {
        if (!e) return rn;
        e = e._reactInternals;
        e: {
            if (kn(e) !== e || e.tag !== 1) throw Error(v(170));
            var n = e;
            do {
                switch(n.tag){
                    case 3:
                        n = n.stateNode.context;
                        break e;
                    case 1:
                        if (le(n.type)) {
                            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                            break e;
                        }
                }
                n = n.return;
            }while (n !== null)
            throw Error(v(171));
        }
        if (e.tag === 1) {
            var t = e.type;
            if (le(t)) return cs(e, t, n);
        }
        return n;
    }
    function da(e, n, t, r, l, i, u, o, s) {
        return e = bi(t, r, !0, e, l, i, u, o, s), e.context = fa(null), t = e.current, r = b(), l = en(t), i = Re(r, l), i.callback = n ?? null, qe(t, i, l), e.current.lanes = l, Ft(e, l, r), ie(e, r), e;
    }
    function Gr(e, n, t, r) {
        var l = n.current, i = b(), u = en(l);
        return t = fa(t), n.context === null ? n.context = t : n.pendingContext = t, n = Re(i, u), n.payload = {
            element: e
        }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = qe(l, n, u), e !== null && (Ce(e, l, u, i), or(e, l, u)), u;
    }
    function Ur(e) {
        if (e = e.current, !e.child) return null;
        switch(e.child.tag){
            case 5:
                return e.child.stateNode;
            default:
                return e.child.stateNode;
        }
    }
    function po(e, n) {
        if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
            var t = e.retryLane;
            e.retryLane = t !== 0 && t < n ? t : n;
        }
    }
    function eu(e, n) {
        po(e, n), (e = e.alternate) && po(e, n);
    }
    function Cf() {
        return null;
    }
    var pa = typeof reportError == "function" ? reportError : function(e) {
        console.error(e);
    };
    function nu(e) {
        this._internalRoot = e;
    }
    Zr.prototype.render = nu.prototype.render = function(e) {
        var n = this._internalRoot;
        if (n === null) throw Error(v(409));
        Gr(e, n, null, null);
    };
    Zr.prototype.unmount = nu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            wn(function() {
                Gr(null, e, null, null);
            }), n[Ie] = null;
        }
    };
    function Zr(e) {
        this._internalRoot = e;
    }
    Zr.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var n = Wo();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for(var t = 0; t < Qe.length && n !== 0 && n < Qe[t].priority; t++);
            Qe.splice(t, 0, e), t === 0 && $o(e);
        }
    };
    function tu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Jr(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
    }
    function mo() {}
    function xf(e, n, t, r, l) {
        if (l) {
            if (typeof r == "function") {
                var i = r;
                r = function() {
                    var d = Ur(u);
                    i.call(d);
                };
            }
            var u = da(n, r, e, 0, null, !1, !1, "", mo);
            return e._reactRootContainer = u, e[Ie] = u.current, _t(e.nodeType === 8 ? e.parentNode : e), wn(), u;
        }
        for(; l = e.lastChild;)e.removeChild(l);
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = Ur(s);
                o.call(d);
            };
        }
        var s = bi(e, 0, !1, null, null, !1, !1, "", mo);
        return e._reactRootContainer = s, e[Ie] = s.current, _t(e.nodeType === 8 ? e.parentNode : e), wn(function() {
            Gr(n, s, t, r);
        }), s;
    }
    function qr(e, n, t, r, l) {
        var i = t._reactRootContainer;
        if (i) {
            var u = i;
            if (typeof l == "function") {
                var o = l;
                l = function() {
                    var s = Ur(u);
                    o.call(s);
                };
            }
            Gr(n, u, e, l);
        } else u = xf(t, n, e, l, r);
        return Ur(u);
    }
    Bo = function(e) {
        switch(e.tag){
            case 3:
                var n = e.stateNode;
                if (n.current.memoizedState.isDehydrated) {
                    var t = ot(n.pendingLanes);
                    t !== 0 && (ki(n, t | 1), ie(n, j()), (_ & 6) === 0 && (Xn = j() + 500, on()));
                }
                break;
            case 13:
                wn(function() {
                    var r = Ue(e, 1);
                    if (r !== null) {
                        var l = b();
                        Ce(r, e, 1, l);
                    }
                }), eu(e, 1);
        }
    };
    Ei = function(e) {
        if (e.tag === 13) {
            var n = Ue(e, 134217728);
            if (n !== null) {
                var t = b();
                Ce(n, e, 134217728, t);
            }
            eu(e, 134217728);
        }
    };
    Ho = function(e) {
        if (e.tag === 13) {
            var n = en(e), t = Ue(e, n);
            if (t !== null) {
                var r = b();
                Ce(t, e, n, r);
            }
            eu(e, n);
        }
    };
    Wo = function() {
        return P;
    };
    Qo = function(e, n) {
        var t = P;
        try {
            return P = e, n();
        } finally{
            P = t;
        }
    };
    Rl = function(e, n, t) {
        switch(n){
            case "input":
                if (zl(e, t), n = t.name, t.type === "radio" && n != null) {
                    for(t = e; t.parentNode;)t = t.parentNode;
                    for(t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++){
                        var r = t[n];
                        if (r !== e && r.form === e.form) {
                            var l = Hr(r);
                            if (!l) throw Error(v(90));
                            ko(r), zl(r, l);
                        }
                    }
                }
                break;
            case "textarea":
                Co(e, t);
                break;
            case "select":
                n = t.value, n != null && In(e, !!t.multiple, n, !1);
        }
    };
    To = Gi;
    Mo = wn;
    var Nf = {
        usingClientEntryPoint: !1,
        Events: [
            Ut,
            Ln,
            Hr,
            Po,
            Lo,
            Gi
        ]
    }, rt = {
        findFiberByHostInstance: cn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    }, _f = {
        bundleType: rt.bundleType,
        version: rt.version,
        rendererPackageName: rt.rendererPackageName,
        rendererConfig: rt.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Ve.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Ro(e), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: rt.findFiberByHostInstance || Cf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (lt = __REACT_DEVTOOLS_GLOBAL_HOOK__, !lt.isDisabled && lt.supportsFiber)) try {
        jr = lt.inject(_f), Pe = lt;
    } catch  {}
    var lt;
    fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf;
    fe.createPortal = function(e, n) {
        var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!tu(n)) throw Error(v(200));
        return Ef(e, n, null, t);
    };
    fe.createRoot = function(e, n) {
        if (!tu(e)) throw Error(v(299));
        var t = !1, r = "", l = pa;
        return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = bi(e, 1, !1, null, null, t, !1, r, l), e[Ie] = n.current, _t(e.nodeType === 8 ? e.parentNode : e), new nu(n);
    };
    fe.findDOMNode = function(e) {
        if (e == null) return null;
        if (e.nodeType === 1) return e;
        var n = e._reactInternals;
        if (n === void 0) throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
        return e = Ro(n), e = e === null ? null : e.stateNode, e;
    };
    fe.flushSync = function(e) {
        return wn(e);
    };
    fe.hydrate = function(e, n, t) {
        if (!Jr(n)) throw Error(v(200));
        return qr(null, e, n, !0, t);
    };
    fe.hydrateRoot = function(e, n, t) {
        if (!tu(e)) throw Error(v(405));
        var r = t != null && t.hydratedSources || null, l = !1, i = "", u = pa;
        if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = da(n, null, e, 1, t ?? null, l, !1, i, u), e[Ie] = n.current, _t(e), r) for(e = 0; e < r.length; e++)t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [
            t,
            l
        ] : n.mutableSourceEagerHydrationData.push(t, l);
        return new Zr(n);
    };
    fe.render = function(e, n, t) {
        if (!Jr(n)) throw Error(v(200));
        return qr(null, e, n, !1, t);
    };
    fe.unmountComponentAtNode = function(e) {
        if (!Jr(e)) throw Error(v(40));
        return e._reactRootContainer ? (wn(function() {
            qr(null, null, e, !1, function() {
                e._reactRootContainer = null, e[Ie] = null;
            });
        }), !0) : !1;
    };
    fe.unstable_batchedUpdates = Gi;
    fe.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
        if (!Jr(t)) throw Error(v(200));
        if (e == null || e._reactInternals === void 0) throw Error(v(38));
        return qr(e, n, t, !1, r);
    };
    fe.version = "18.2.0-next-9e3b772b8-20220608";
});
var ru = uu((Mf, va)=>{
    "use strict";
    function ha() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ha);
        } catch (e) {
            console.error(e);
        }
    }
    ha(), va.exports = ma();
});
var ya = ou(ru()), ga = ou(ru()), { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Df , createPortal: Of , createRoot: Rf , findDOMNode: Ff , flushSync: If , hydrate: Uf , hydrateRoot: jf , render: Vf , unmountComponentAtNode: Af , unstable_batchedUpdates: Bf , unstable_renderSubtreeIntoContainer: Hf , version: Wf  } = ga, { default: zf , ...Pf } = ga, Qf = (ya.default ?? zf) ?? Pf;
const mod1 = {
    default: Qf,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Df,
    createPortal: Of,
    createRoot: Rf,
    findDOMNode: Ff,
    flushSync: If,
    hydrate: Uf,
    hydrateRoot: jf,
    render: Vf,
    unmountComponentAtNode: Af,
    unstable_batchedUpdates: Bf,
    unstable_renderSubtreeIntoContainer: Hf,
    version: Wf
};
const SideBar = (props)=>{
    const { elementsArr , setElementsArr , currentElement , setCurrentElement  } = props;
    const { setInputText , setTextAlign , setTextDecoration , setBackgroundColor , setColor , setMargin , setWidth , setHeight , setPadding , setFontSize , setClassName  } = props;
    const [dragOver, setDragOver] = mod.useState(false);
    const [content, setContent] = mod.useState('drag into here');
    const handleDragOverStart = ()=>setDragOver(true);
    const handleDragOverEnd = ()=>setDragOver(false);
    const dragItem = mod.useRef(null);
    const dragOverItem = mod.useRef(null);
    const handleDragStart = (event, area)=>{
        if (area === "dragArea") {
            event.dataTransfer.setData("id", event.currentTarget.id);
        } else if (area === "dropArea") {
            dragItem.current = event.currentTarget.id;
        }
        event.dataTransfer.setData("area", area);
    };
    const dragEnter = (e, position)=>{
        dragOverItem.current = position;
    };
    const enableDropping = (event)=>{
        event.preventDefault();
        const id = event.dataTransfer.getData("id");
        setContent(id);
    };
    const handleDrop = (event)=>{
        const area = event.dataTransfer.getData("area");
        const newElementsArr = [
            ...elementsArr
        ];
        if (area === "dragArea") {
            const id = event.dataTransfer.getData("id");
            setContent(id);
            const newElement = {
                id: elementsArr.length,
                element: id,
                text: "",
                texAlign: "",
                textDecoration: "",
                backgroundColor: "",
                color: "",
                margin: "",
                width: "",
                height: "",
                padding: "",
                fontSize: "",
                fontWeight: ""
            };
            newElementsArr.push(newElement);
            setElementsArr(newElementsArr);
            setCurrentElement(newElement);
        } else if (area === "dropArea") {
            const dragItemContent = newElementsArr[dragItem.current];
            const dragItemEnterContent = newElementsArr[dragOverItem.current];
            console.log("handleDrop selected item:", dragItemContent);
            console.log("handleDrop drager over item:", dragItemEnterContent);
            newElementsArr.splice(dragItem.current, 1);
            newElementsArr.splice(dragOverItem.current, 0, dragItemContent);
            dragItem.current = null;
            dragOverItem.current = null;
            reorderElArr(newElementsArr);
            setElementsArr(newElementsArr);
        }
    };
    const reorderElArr = (arr)=>{
        arr.forEach((el, ind)=>{
            el.id = ind;
        });
    };
    const deleteElement = (id)=>{
        if (elementsArr.length === 1) {
            setElementsArr([]);
            setCurrentElement('');
        } else {
            const filteredElementsArr = elementsArr.filter((element)=>element.id !== id);
            console.log('filtered', filteredElementsArr);
            setElementsArr(filteredElementsArr);
            setCurrentElement('');
        }
    };
    function addNesting(index) {}
    function removeNesting(index) {}
    const elementsList = [
        {
            id: 'div',
            element: 'DIV',
            backgroundColor: 'rgb(142,233,172)'
        },
        {
            id: 'paragraph',
            element: 'PARAGRAPH',
            backgroundColor: 'rgb(148,233,168)'
        },
        {
            id: 'button',
            element: 'BUTTON',
            backgroundColor: 'rgb(152,233,166)'
        },
        {
            id: 'img',
            element: 'IMAGE',
            backgroundColor: 'rgb(158,233,163)'
        },
        {
            id: 'h1',
            element: 'HEADER 1',
            backgroundColor: 'rgb(163,233,160)'
        },
        {
            id: 'h2',
            element: 'HEADER 2',
            backgroundColor: 'rgb(168,233,158)'
        },
        {
            id: 'h3',
            element: 'HEADER 3',
            backgroundColor: 'rgb(173,233,155)'
        },
        {
            id: 'footer',
            element: 'FOOTER',
            backgroundColor: 'rgb(178,233,152)'
        },
        {
            id: 'ol',
            element: 'LIST (OL)',
            backgroundColor: 'rgb(187,233,147)'
        },
        {
            id: 'ul',
            element: 'LIST (UL)',
            backgroundColor: 'rgb(196,233,143'
        },
        {
            id: 'input',
            element: 'INPUT',
            backgroundColor: 'rgb(202,233,139)'
        },
        {
            id: 'link',
            element: 'LINK',
            backgroundColor: 'rgb(207,233,137)'
        },
        {
            id: 'label',
            element: 'LABEL',
            backgroundColor: 'rgb(212,233,134)'
        },
        {
            id: 'span',
            element: 'SPAN',
            backgroundColor: 'rgb(218,233,131)'
        },
        {
            id: 'button',
            element: 'LIST (UL)',
            backgroundColor: 'rgb(152,233,166)'
        },
        {
            id: 'form',
            element: 'FORM',
            backgroundColor: 'rgb(222,233,128)'
        },
        {
            id: 'menu',
            element: 'MENU',
            backgroundColor: 'rgb(227,233,126)'
        },
        {
            id: 'title',
            element: 'TITLE',
            backgroundColor: 'rgb(232,233,123)'
        },
        {
            id: 'area',
            element: 'AREA',
            backgroundColor: 'rgb(238,233,120)'
        }
    ];
    const renderElementsList = elementsList.map((el)=>{
        return mod.createElement("div", {
            id: el.id,
            onDragStart: (e)=>handleDragStart(e, 'dragArea')
        }, mod.createElement("button", {
            style: {
                backgroundColor: el.backgroundColor,
                color: "#2d3033",
                width: "100%",
                fontSize: '20px',
                fontWeight: 'bolder'
            },
            draggable: "true"
        }, " ", el.element));
    });
    const createdElements = elementsArr.map((elements, index)=>{
        return mod.createElement("div", {
            draggable: "true",
            onDrop: handleDrop,
            onDragStart: (e)=>handleDragStart(e, 'dropArea'),
            onDragEnter: (e)=>{
                dragEnter(e, index);
            },
            className: "draggedTags",
            onDragOver: enableDropping,
            id: index
        }, elementsArr[index].element, mod.createElement("button", {
            id: "add-nesting-btn",
            style: {
                backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
                color: "#2D3033",
                float: 'right',
                marginTop: '0px',
                marginRight: '-1px',
                height: '3px'
            },
            onClick: ()=>addNesting(index)
        }, "+"), mod.createElement("button", {
            id: "remove-nesting-btn",
            style: {
                backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
                color: "#2D3033",
                float: 'right',
                marginTop: '0px',
                marginRight: '-1px',
                height: '3px'
            },
            onClick: ()=>removeNesting(index)
        }, "-"), mod.createElement("button", {
            id: "delete-btn",
            style: {
                backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
                color: "#2D3033",
                float: 'right',
                marginTop: '0px',
                marginRight: '-1px',
                height: '3px'
            },
            onClick: ()=>deleteElement(index)
        }, "X"));
    });
    return mod.createElement("div", {
        id: "scroll"
    }, mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/App.css'
    }), mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/sideBarStyle.css'
    }), mod.createElement("div", {
        className: "app"
    }), mod.createElement("div", {
        id: "side"
    }, renderElementsList), mod.createElement("div", {
        id: "drop",
        onDragOver: enableDropping,
        onDrop: handleDrop,
        onDragEnter: handleDragOverStart,
        onDragLeave: handleDragOverEnd
    }, mod.createElement("div", {
        id: "hov"
    }, createdElements)));
};
const Routing = (props)=>{
    return mod.createElement("div", null, "Routing page in react router");
};
const Styling = (props)=>{
    const { elementsArr , setElementsArr , currentElement , setCurrentElement , inputText , setInputText , textAlign , setTextAlign , textDecoration , setTextDecoration , backgroundColor , setBackgroundColor , color , setColor , margin , setMargin , width , setWidth , height , setHeight , padding , setPadding , fontSize , setFontSize , className , setClassName ,  } = props;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const updateCurrentElement = {
            id: currentElement.id,
            element: currentElement.element,
            text: inputText,
            textAlign: textAlign,
            textDecoration: textDecoration,
            backgroundColor: backgroundColor,
            color: color,
            margin: margin,
            width: width,
            height: height,
            padding: padding,
            fontSize: fontSize,
            className: className
        };
        setCurrentElement(updateCurrentElement);
        elementsArr[currentElement.id] = updateCurrentElement;
        setInputText('');
        setTextAlign('');
        setTextDecoration('');
        setBackgroundColor('');
        setColor('');
        setMargin('');
        setWidth('');
        setHeight('');
        setPadding('');
        setFontSize('');
        setClassName('');
    };
    return mod.createElement("form", {
        onSubmit: handleSubmit,
        style: {
            fontSize: '20px',
            color: 'white'
        }
    }, mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/customizationStyles.css'
    }), mod.createElement("div", {
        style: {
            fontSize: '26px',
            textAlign: 'center',
            marginTop: '20px'
        },
        id: "selectedEle"
    }, "Element selected: ", currentElement.element), mod.createElement("br", null), mod.createElement("div", {
        style: {
            marginLeft: '40px'
        }
    }, mod.createElement("label", {
        htmlFor: "inputText"
    }, "Input Text "), mod.createElement("input", {
        value: inputText,
        onChange: (e)=>setInputText(e.target.value),
        type: "text",
        placeholder: "Enter text",
        className: "input",
        style: {
            backgroundColor: '#68EDA7',
            color: 'black'
        }
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "fontSize"
    }, "Font Size "), mod.createElement("input", {
        value: fontSize,
        onChange: (e)=>setFontSize(e.target.value),
        type: "text",
        placeholder: "Enter font size",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "backgroundColor"
    }, "Background "), mod.createElement("input", {
        value: backgroundColor,
        onChange: (e)=>setBackgroundColor(e.target.value),
        type: "text",
        placeholder: "Enter color name",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "color"
    }, "Text Color "), mod.createElement("input", {
        value: color,
        onChange: (e)=>setColor(e.target.value),
        type: "text",
        placeholder: "Enter color name",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "margin"
    }, "Margin "), mod.createElement("input", {
        value: margin,
        onChange: (e)=>setMargin(e.target.value),
        type: "text",
        placeholder: "Enter margin value",
        className: "input"
    }), mod.createElement("br", null)), mod.createElement("div", {
        style: {
            float: 'right',
            marginTop: '-175px',
            marginRight: '40px'
        }
    }, mod.createElement("label", {
        htmlFor: "height"
    }, "Height "), mod.createElement("input", {
        value: height,
        onChange: (e)=>setHeight(e.target.value),
        type: "text",
        placeholder: "Enter height",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "width"
    }, "Width "), mod.createElement("input", {
        value: width,
        onChange: (e)=>setWidth(e.target.value),
        type: "text",
        placeholder: "Enter width",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "padding"
    }, "Padding "), mod.createElement("input", {
        value: padding,
        onChange: (e)=>setPadding(e.target.value),
        type: "text",
        placeholder: "Enter padding",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "className"
    }, "Class Name "), mod.createElement("input", {
        value: className,
        onChange: (e)=>setClassName(e.target.value),
        type: "text",
        placeholder: "Enter Class Name",
        className: "input"
    }), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "textDecoration"
    }, "Text Decoration "), mod.createElement("select", {
        className: "textDecoration",
        onChange: (e)=>setTextDecoration(e.target.value),
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033"
        }
    }, mod.createElement("option", null, "default"), mod.createElement("option", null, "overline"), mod.createElement("option", null, "line-through"), mod.createElement("option", null, "underline"), mod.createElement("option", null, "none")), mod.createElement("br", null), mod.createElement("label", {
        htmlFor: "textAlign"
    }, "Text Align "), mod.createElement("select", {
        onChange: (e)=>setTextAlign(e.target.value),
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033"
        }
    }, mod.createElement("option", null, "default"), mod.createElement("option", null, "center"), mod.createElement("option", null, "right"), mod.createElement("option", null, "left"), mod.createElement("option", null, "justify")), mod.createElement("br", null), mod.createElement("br", null), mod.createElement("br", null)), mod.createElement("button", {
        type: "submit",
        className: "btn",
        style: {
            marginLeft: '42%',
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            fontSize: '20px',
            marginBottom: '20px',
            color: "#2D3033",
            marginTop: '20px'
        }
    }, "Submit"));
};
const MainContainer = (props)=>{
    const { elementsArr , setElementsArr , currentElement , setCurrentElement , inputText , setInputText , textAlign , setTextAlign , textDecoration , setTextDecoration , backgroundColor , setBackgroundColor , color , setColor , margin , setMargin , width , setWidth , height , setHeight , padding , setPadding , fontSize , setFontSize , className , setClassName ,  } = props;
    const { customizationPage , setCustomizationPage  } = props;
    let page;
    if (customizationPage === 'styling') page = mod.createElement(Styling, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr,
        currentElement: currentElement,
        setCurrentElement: setCurrentElement,
        inputText: inputText,
        setInputText: setInputText,
        textAlign: textAlign,
        setTextAlign: setTextAlign,
        textDecoration: textDecoration,
        setTextDecoration: setTextDecoration,
        backgroundColor: backgroundColor,
        setBackgroundColor: setBackgroundColor,
        color: color,
        setColor: setColor,
        margin: margin,
        setMargin: setMargin,
        width: width,
        setWidth: setWidth,
        height: height,
        setHeight: setHeight,
        padding: padding,
        setPadding: setPadding,
        fontSize: fontSize,
        setFontSize: setFontSize,
        className: className,
        setClassName: setClassName
    });
    if (customizationPage === 'routing') page = mod.createElement(Routing, null);
    return mod.createElement("div", {
        className: "customizationPage"
    }, page);
};
const Navbar = (props)=>{
    const { setCustomizationPage  } = props;
    return mod.createElement("div", {
        className: "navBar"
    });
};
const Customization = (props)=>{
    const { elementsArr , setElementsArr , currentElement , setCurrentElement , inputText , setInputText , textAlign , setTextAlign , textDecoration , setTextDecoration , backgroundColor , setBackgroundColor , color , setColor , margin , setMargin , width , setWidth , height , setHeight , padding , setPadding , fontSize , setFontSize , className , setClassName ,  } = props;
    const [customizationPage, setCustomizationPage] = mod.useState('styling');
    return mod.createElement("div", {
        className: "container"
    }, mod.createElement(Navbar, {
        setCustomizationPage: setCustomizationPage
    }), mod.createElement(MainContainer, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr,
        customizationPage: customizationPage,
        setCustomizationPage: setCustomizationPage,
        currentElement: currentElement,
        setCurrentElement: setCurrentElement,
        inputText: inputText,
        setInputText: setInputText,
        textAlign: textAlign,
        setTextAlign: setTextAlign,
        textDecoration: textDecoration,
        setTextDecoration: setTextDecoration,
        backgroundColor: backgroundColor,
        setBackgroundColor: setBackgroundColor,
        color: color,
        setColor: setColor,
        margin: margin,
        setMargin: setMargin,
        width: width,
        setWidth: setWidth,
        height: height,
        setHeight: setHeight,
        padding: padding,
        setPadding: setPadding,
        fontSize: fontSize,
        setFontSize: setFontSize,
        className: className,
        setClassName: setClassName
    }));
};
const CodePreview = (props)=>{
    const { elementsArr , setElementsArr  } = props;
    let testArray = [];
    const htmlTags = elementsArr.map((elements, index)=>{
        let eleFirst;
        let eleSecond;
        let endBr;
        if (elementsArr[index].element === 'div') {
            eleFirst = `<div `;
            endBr = '>';
            eleSecond = `</div>`;
        }
        if (elementsArr[index].element === 'paragraph') {
            eleFirst = `<p `;
            endBr = '>';
            eleSecond = `</p>`;
        }
        if (elementsArr[index].element === 'img') {
            eleFirst = `<img `;
            endBr = ' src=';
            eleSecond = `/>`;
        }
        if (elementsArr[index].element === 'button') {
            eleFirst = `<button`;
            endBr = '>';
            eleSecond = `</button>`;
        }
        if (elementsArr[index].element === 'form') {
            eleFirst = `<form `;
            endBr = '>';
            eleSecond = `</form>`;
        }
        if (elementsArr[index].element === 'ol') {
            eleFirst = `<ol `;
            endBr = '>';
            eleSecond = `</ol>`;
        }
        if (elementsArr[index].element === 'ul') {
            eleFirst = `<ul `;
            endBr = '>';
            eleSecond = `</ul>`;
        }
        if (elementsArr[index].element === 'h1') {
            eleFirst = `<h1 `;
            endBr = '>';
            eleSecond = `</h1>`;
        }
        if (elementsArr[index].element === 'h2') {
            eleFirst = `<h2 `;
            endBr = '>';
            eleSecond = `</h2>`;
        }
        if (elementsArr[index].element === 'h3') {
            eleFirst = `<h3 `;
            endBr = '>';
            eleSecond = `</h3>`;
        }
        if (elementsArr[index].element === 'footer') {
            eleFirst = `<footer `;
            endBr = '>';
            eleSecond = `</footer>`;
        }
        if (elementsArr[index].element === 'span') {
            eleFirst = `<span `;
            endBr = '>';
            eleSecond = `</span>`;
        }
        if (elementsArr[index].element === 'menu') {
            eleFirst = `<menu `;
            endBr = '>';
            eleSecond = `</menu>`;
        }
        if (elementsArr[index].element === 'input') {
            eleFirst = `<input `;
            endBr = '>';
            eleSecond = `</input>`;
        }
        if (elementsArr[index].element === 'label') {
            eleFirst = `<label `;
            endBr = '>';
            eleSecond = `</label>`;
        }
        if (elementsArr[index].element === 'link') {
            eleFirst = `<link `;
            endBr = '';
            eleSecond = `/>`;
        }
        if (elementsArr[index].element === 'title') {
            eleFirst = `<title `;
            endBr = '>';
            eleSecond = `</title>`;
        }
        if (elementsArr[index].element === 'area') {
            eleFirst = `<area `;
            endBr = '>';
            eleSecond = `</area>`;
        }
        let bracket = '';
        let classTag = '';
        let bracket2 = '';
        let tw = '';
        let slash = '';
        if (elementsArr[index].padding !== '' || elementsArr[index].textAlign !== undefined || elementsArr[index].backgroundColor !== '' || elementsArr[index].color !== '' || elementsArr[index].margin !== '' || elementsArr[index].height !== '' || elementsArr[index].height !== '' || elementsArr[index].padding !== '' || elementsArr[index].width !== '') {
            classTag = `class=`;
            bracket = '{';
            tw = 'tw`';
            slash = '`';
            bracket2 = '}';
        }
        let text1 = '';
        if (elementsArr[index].textAlign !== '' && elementsArr[index].textAlign !== undefined) {
            text1 = 'text-';
        }
        let bg = '';
        if (elementsArr[index].backgroundColor !== '') {
            bg = 'bg-';
        }
        let color = '';
        if (elementsArr[index].color !== '') {
            color = 'text-';
        }
        let m = '';
        if (elementsArr[index].margin !== '') {
            m = 'm-';
        }
        let h = '';
        if (elementsArr[index].height !== '') {
            h = 'h-';
        }
        let w = '';
        if (elementsArr[index].width !== '') {
            w = 'w-';
        }
        let p = '';
        if (elementsArr[index].padding !== '') {
            p = 'p-';
        }
        let fs = '';
        if (elementsArr[index].fontSize !== '') {
            fs = 'text-';
        }
        let fw = '';
        if (elementsArr[index].fontWeight !== '') {
            fw = 'font-';
        }
        let cn = '';
        if (elementsArr[index].className !== undefined && elementsArr[index].className !== '') {
            cn = 'className=';
        } else {
            elementsArr[index].className = index;
        }
        console.log(45, elementsArr[index]);
        return mod.createElement("div", {
            id: index
        }, mod.createElement("span", {
            style: {
                color: '#5FD389'
            }
        }, eleFirst, " ", cn, elementsArr[index].className, " "), mod.createElement("span", {
            style: {
                color: '#37CFE0'
            }
        }, classTag), " ", mod.createElement("span", {
            style: {
                color: 'white'
            }
        }, bracket), mod.createElement("span", {
            style: {
                color: '#5FD389'
            }
        }, " ", tw), mod.createElement("span", {
            style: {
                color: '#37CFE0'
            }
        }, " ", elementsArr[index].textDecoration, " ", bg, " ", elementsArr[index].backgroundColor, " ", color, elementsArr[index].color, " ", m, elementsArr[index].margin, "  ", w, elementsArr[index].width, " ", h, elementsArr[index].height, " ", p, elementsArr[index].padding, " ", fs, elementsArr[index].fontSize, " ", text1, elementsArr[index].textAlign, " ", fw, elementsArr[index].fontWeight, " "), mod.createElement("span", {
            style: {
                color: '#5FD389'
            }
        }, " ", slash), " ", mod.createElement("span", {
            style: {
                color: 'white'
            }
        }, " ", bracket2), " ", mod.createElement("span", {
            style: {
                color: '#FDE086'
            }
        }, " id='", index, "'"), mod.createElement("span", {
            style: {
                color: '#5FD389'
            }
        }, endBr), mod.createElement("span", {
            style: {
                color: 'white'
            }
        }, " ", elementsArr[index].text), " ", mod.createElement("span", {
            style: {
                color: '#5FD389'
            }
        }, eleSecond));
    });
    let html = testArray.map((e, i)=>e).join('\n');
    return mod.createElement("div", {
        id: "codePreview"
    }, mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/codePreview.css'
    }), mod.createElement("p", {
        id: "import"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "import"), " ", '{', mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, " h"), " ", '}', " ", mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, " from"), " ", mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, "'preact'"), ";"), mod.createElement("p", {
        id: "import"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "import"), " ", '{', mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, " PageProps "), " ", '}', " ", mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, " from"), " ", mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, "'$fresh/server.ts'"), " ;"), mod.createElement("p", {
        id: "import"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "import"), " ", '{', mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, " useEffect, useState "), " ", '}', " ", mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, " from"), " ", mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, "'preact/hooks'"), ";"), mod.createElement("p", {
        id: "import"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "import"), " ", '{', mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, " tw "), " ", '}', " ", mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, " from"), " ", mod.createElement("span", {
        style: {
            color: '#ffff76'
        }
    }, "'twind'"), ";"), mod.createElement("p", {
        id: "export"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "export default function "), " ", mod.createElement("span", {
        style: {
            color: '#37CFE0'
        }
    }, "App "), "(", mod.createElement("span", {
        style: {
            color: '#8B7FDA'
        }
    }, "props: PageProps"), ") ", mod.createElement("span", {
        style: {
            color: 'white'
        }
    }, '{')), mod.createElement("p", {
        id: "return"
    }, mod.createElement("span", {
        style: {
            color: '#FF5581'
        }
    }, "return "), "("), mod.createElement("p", {
        id: "mainOpeningTag"
    }, mod.createElement("span", {
        style: {
            color: '#8B7FDA'
        }
    }, '<main>')), mod.createElement("div", {
        id: "htmlTags"
    }, mod.createElement("span", {
        style: {
            color: 'pink'
        }
    }, htmlTags)), mod.createElement("p", {
        id: "mainClosingTag"
    }, mod.createElement("span", {
        style: {
            color: '#8B7FDA'
        }
    }, '</main>')), mod.createElement("p", {
        id: "paren"
    }, ");"), mod.createElement("p", {
        id: "endingCurly"
    }, '}', ";"), mod.createElement("div", {
        className: "tooltip"
    }, mod.createElement("button", {
        id: "btn",
        onClick: ()=>navigator.clipboard.writeText(`
      import { h } from 'preact';
      
      import { PageProps } from '$fresh/server.ts' ;
      
      import { useEffect, useState } from 'preact/hooks';
      
      import { tw } from 'twind';
      
      export default function App (props: PageProps) {
      
        return (
      
          <main>
      
              ${html} 
       
          </main>

        );
       
       };`)
    }, mod.createElement("p", {
        id: "clip"
    }, "\u{1F4CB}")), mod.createElement("span", {
        className: "tooltiptext"
    }, "Click to copy!")));
};
const IslandPreview = (props)=>{
    const { elementsArr , setElementsArr  } = props;
    let htmlElement;
    let htmlText;
    let htmlTextAlign;
    let htmlTextDecoration;
    let htmlBackground;
    let htmlColor;
    let htmlMargin;
    let htmlWidth;
    let htmlHeight;
    let htmlPadding;
    let htmlFontSize;
    let htmlFontWeight;
    const testArray = [];
    elementsArr.forEach((ele)=>{
        for(let key in ele){
            htmlElement = Object.values(ele)[1];
            htmlText = Object.values(ele)[2];
            htmlTextAlign = Object.values(ele)[3];
            htmlTextDecoration = Object.values(ele)[4];
            htmlBackground = Object.values(ele)[5];
            htmlColor = Object.values(ele)[6];
            htmlMargin = Object.values(ele)[7];
            htmlWidth = Object.values(ele)[8];
            htmlHeight = Object.values(ele)[9];
            htmlPadding = Object.values(ele)[10];
            htmlFontSize = Object.values(ele)[11];
            htmlFontWeight = Object.values(ele)[12];
        }
        testArray.push(`<${htmlElement} style='color:${htmlColor};background-color:${htmlBackground};height:${htmlHeight};width:${htmlWidth};text-align:${htmlTextAlign};margin:${htmlMargin};text-decoration:${htmlTextDecoration};padding:${htmlPadding};font-size:${htmlFontSize};font-weight:${htmlFontWeight}'>${htmlText}</${htmlElement}>`);
    });
    console.log(73, testArray);
    let html = testArray.map((e, i)=>e).join(' ');
    console.log(74, html);
    return mod.createElement("div", {
        style: {
            height: '100%',
            width: '100%'
        }
    }, mod.createElement("iframe", {
        height: "750px",
        width: "100%",
        frameBorder: "0",
        srcDoc: html
    }));
};
const MainContainer1 = (props)=>{
    const { previewPage , setPreviewPage  } = props;
    const { elementsArr , setElementsArr  } = props;
    let page;
    if (previewPage === 'codePreview') page = mod.createElement(CodePreview, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr
    });
    if (previewPage === 'islandPreview') page = mod.createElement(IslandPreview, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr
    });
    return mod.createElement("div", {
        className: "previewPage"
    }, page);
};
const Navbar1 = (props)=>{
    const { setPreviewPage  } = props;
    return mod.createElement("div", {
        className: "navBar",
        style: {
            width: '100%',
            padding: '0px',
            fontSize: '25px',
            marginTop: '-29px',
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            textAlign: 'center',
            border: 'none'
        }
    }, mod.createElement("button", {
        style: {
            width: '50%',
            padding: '0px',
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            fontWeight: 'bolder',
            height: '50px',
            border: 'none'
        },
        className: "codePreviewBtn",
        onClick: ()=>{
            setPreviewPage('codePreview');
        }
    }, mod.createElement("h3", {
        className: "codePreviewBtn"
    }, "Code Preview")), mod.createElement("button", {
        style: {
            width: '50%',
            padding: '0px',
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            fontWeight: 'bolder',
            height: '50px',
            border: 'none',
            borderLeft: '2px solid black'
        },
        className: "islandPreviewBtn",
        onClick: ()=>{
            setPreviewPage('islandPreview');
        }
    }, mod.createElement("h3", {
        className: "islandPreviewBtn"
    }, "Island Preview")));
};
const Preview = (props)=>{
    const { elementsArr , setElementsArr  } = props;
    const [previewPage, setPreviewPage] = mod.useState('codePreview');
    return mod.createElement("div", {
        className: "preview"
    }, mod.createElement(Navbar1, {
        setPreviewPage: setPreviewPage
    }), mod.createElement(MainContainer1, {
        previewPage: previewPage,
        setPreviewPage: setPreviewPage,
        elementsArr: elementsArr,
        setElementsArr: setElementsArr
    }));
};
const Popup = (props)=>{
    return mod.createElement("div", {
        className: "popup-box"
    }, mod.createElement("link", {
        rel: "stylesheet",
        href: "./static/css/popup.css"
    }), mod.createElement("div", {
        className: "box"
    }, mod.createElement("span", {
        className: "close-icon",
        onClick: props.handleClose
    }, "x"), props.content));
};
function Buttons(props) {
    const [isOpen, setIsOpen] = mod.useState(false);
    const [data, setData] = mod.useState('');
    const { elementsArr , setElementsArr , currentElement , setCurrentElement , project , setProject , user , setUser ,  } = props;
    async function togglePopup() {
        setIsOpen(!isOpen);
        const data = await fetch("http://localhost:8080/home/get", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: 1
            }),
            mode: "no-cors"
        }).then((data)=>data.json()).then((data)=>console.log("I'm on the front end", data)).catch((err)=>console.log(err));
        console.log(data);
    }
    async function deleteData() {
        await fetch("http://localhost:8080/home", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                project_id: project
            }),
            mode: "no-cors"
        }).then((data)=>data.json()).catch((err)=>console.log(err));
    }
    function clear() {
        setElementsArr([]);
        setCurrentElement("");
    }
    async function save() {
        const body = {
            project_id: project,
            elementsArr: elementsArr,
            project: project,
            user: user
        };
<<<<<<< HEAD
        await fetch("http://localhost:8080/home", {
            method: "POST",
=======
                "Content-Type": "application/json"
            },
            mode: "no-cors"
        }).then((data)=>data.json()).then((data)=>console.log("I'm on the front end", data)).catch((err)=>console.log(err));
    }
    return mod.createElement("main", null, mod.createElement("link", {
        rel: "stylesheet",
        href: "./static/css/sideBarStyle.css"
    }), mod.createElement("div", {
        id: "buttonContainer"
    }, mod.createElement("button", {
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "10px",
            marginLeft: "7px"
        },
        id: "clearBtn",
        onClick: ()=>{
            clear();
        }
    }, "Clear Project"), mod.createElement("button", {
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px"
        },
        id: "saveBtn",
        onClick: ()=>{
            save();
            console.log("clicked");
        }
    }, "Save Progress"), mod.createElement("button", {
        id: "loadBtn",
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px"
        },
        onClick: ()=>{
            alert("Project deleted");
            deleteData();
        }
    }, "Delete Project"), mod.createElement("div", null, mod.createElement("button", {
        onClick: togglePopup,
        style: {
            backgroundImage: "linear-gradient(#68EDA7, #FFE958)",
            color: "#2D3033",
            width: "90%",
            fontSize: "20px",
            fontWeight: "bolder",
            marginTop: "15px",
            marginLeft: "7px"
        }
    }, "Load Project"), isOpen && mod.createElement(Popup, {
        content: mod.createElement(mod.Fragment, null, mod.createElement("div", {
            id: "search"
        }, mod.createElement("div", {
            id: "tableDiv"
        }, mod.createElement("table", null, mod.createElement("tbody", null, data))), mod.createElement("button", {
            type: "submit",
            id: "loadButton"
        }, "Load project"))),
        handleClose: togglePopup
    }))));
}
const App = ()=>{
    const sideBarStyle = {
        gridArea: 'side'
    };
    const customizationStyle = {
        gridArea: 'cust',
        backgroundColor: "#2D3033",
        borderColor: "rgb(250,224,66)",
        borderWidth: '3px',
        borderStyle: 'solid',
        fontSize: '30px'
    };
    const previewStyle = {
        gridArea: 'prev',
        backgroundColor: "#2D3033",
        fontSize: '30px',
        borderRight: "3px solid #68EDA7",
        borderButtom: "3px solid #FFE958"
    };
    const buttonsStyle = {
        gridArea: 'buttons',
        backgroundColor: "#2D3033",
        borderLeft: "3px solid #FFE958",
        borderButtom: "3px solid #FFE958",
        fontSize: '30px'
    };
    const styles = {
        display: 'grid',
        backgroundColor: 'black',
        borderButtom: "3px solid #FFE958",
        color: '#68EDA7',
        gridTemplate: 'auto / repeat(15, 1fr)',
        gridTemplateAreas: `"side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "side side side side side side side side prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"
    "buttons cust cust cust cust cust cust cust prev prev prev prev prev prev prev"`,
        width: '100%',
        height: '100%'
    };
    const [elementsArr, setElementsArr] = mod.useState([]);
    const [currentElement, setCurrentElement] = mod.useState('drag into here');
    const [project, setProject] = mod.useState('');
    const [user, setUser] = mod.useState('');
    const [inputText, setInputText] = mod.useState('');
    const [textAlign, setTextAlign] = mod.useState('');
    const [textDecoration, setTextDecoration] = mod.useState('');
    const [backgroundColor, setBackgroundColor] = mod.useState('');
    const [color, setColor] = mod.useState('');
    const [margin, setMargin] = mod.useState('');
    const [width, setWidth] = mod.useState('');
    const [height, setHeight] = mod.useState('');
    const [padding, setPadding] = mod.useState('');
    const [fontSize, setFontSize] = mod.useState('');
    const [className, setClassName] = mod.useState('');
    console.log("elementsArr in app", elementsArr);
    return mod.createElement("div", {
        className: "app",
        style: styles
    }, mod.createElement("div", {
        style: sideBarStyle
    }, mod.createElement(SideBar, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr,
        currentElement: currentElement,
        setCurrentElement: setCurrentElement,
        inputText: inputText,
        setInputText: setInputText,
        textAlign: textAlign,
        setTextAlign: setTextAlign,
        textDecoration: textDecoration,
        setTextDecoration: setTextDecoration,
        backgroundColor: backgroundColor,
        setBackgroundColor: setBackgroundColor,
        color: color,
        setColor: setColor,
        margin: margin,
        setMargin: setMargin,
        width: width,
        setWidth: setWidth,
        height: height,
        setHeight: setHeight,
        padding: padding,
        setPadding: setPadding,
        fontSize: fontSize,
        setFontSize: setFontSize,
        className: className,
        setClassName: setClassName
    })), mod.createElement("div", {
        style: customizationStyle
    }, mod.createElement(Customization, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr,
        currentElement: currentElement,
        setCurrentElement: setCurrentElement,
        inputText: inputText,
        setInputText: setInputText,
        textAlign: textAlign,
        setTextAlign: setTextAlign,
        textDecoration: textDecoration,
        setTextDecoration: setTextDecoration,
        backgroundColor: backgroundColor,
        setBackgroundColor: setBackgroundColor,
        color: color,
        setColor: setColor,
        margin: margin,
        setMargin: setMargin,
        width: width,
        setWidth: setWidth,
        height: height,
        setHeight: setHeight,
        padding: padding,
        setPadding: setPadding,
        fontSize: fontSize,
        setFontSize: setFontSize,
        className: className,
        setClassName: setClassName
    })), mod.createElement("div", {
        style: previewStyle
    }, mod.createElement(Preview, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr
    })), mod.createElement("div", {
        style: buttonsStyle
    }, mod.createElement(Buttons, {
        elementsArr: elementsArr,
        setElementsArr: setElementsArr,
        project: project,
        setProject: setProject,
        user: user,
        setUser: setUser
    })));
};
const Login = ()=>{
    const [username, usernameOnChange] = mod.useState('');
    const [password, passwordOnChange] = mod.useState('');
    const navigate = he1();
    const navigateToHome = ()=>{
        navigate('http://localhost:8000/home');
    };
    const handleClick = (e)=>{
        e.preventDefault();
        const body = {
            username: username,
            password: password
        };
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
            mode: 'no-cors'
        }).then((data)=>{
            return data.json();
        }).then((data)=>{
            console.log('res on front end: ', data);
            if (data === true) {
                console.log(data);
                navigateToHome();
            } else {
                alert('Wrong username and password combination');
            }
        }).catch((error)=>console.log(error));
    };
    return mod.createElement("div", null, mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/login.css'
    }), mod.createElement("div", {
        className: "login"
    }), mod.createElement("div", {
        className: "login_box"
    }, mod.createElement("div", {
        className: "left"
    }, mod.createElement("div", {
        className: "contact"
    }, mod.createElement("form", {
        method: "POST",
        action: "/login"
    }, mod.createElement("h3", null, "LOG IN"), mod.createElement("input", {
        type: "text",
        placeholder: "Username",
        name: "username",
        required: true
    }), mod.createElement("input", {
        type: "password",
        placeholder: "Password",
        name: "password",
        required: true
    }), mod.createElement("button", {
        onClick: handleClick,
        className: "submit"
    }, "LOG IN"), " ", mod.createElement("br", null), mod.createElement(T1, {
        to: "/signup",
        id: "signuplink"
    }, mod.createElement("p", null, "Need an account? Sign up!"))))), mod.createElement("div", {
        className: "right"
    }, mod.createElement("div", {
        className: "right-text"
    }))));
};
const Signup = ()=>{
    return mod.createElement("div", null, mod.createElement("link", {
        rel: 'stylesheet',
        href: './static/css/signup.css'
    }), mod.createElement("div", {
        className: "signup"
    }), mod.createElement("div", {
        className: "signup_box"
    }, mod.createElement("div", {
        className: "left"
    }, mod.createElement("div", {
        className: "contact"
    }, mod.createElement("form", {
        method: "POST"
    }, mod.createElement("h3", null, "SIGN UP"), mod.createElement("input", {
        type: "text",
        placeholder: "Email",
        name: "email",
        required: true
    }), mod.createElement("input", {
        type: "text",
        placeholder: "Username",
        name: "username",
        required: true
    }), mod.createElement("input", {
        type: "password",
        placeholder: "Password",
        name: "password",
        required: true
    }), mod.createElement(T1, {
        to: "/home"
    }, mod.createElement("button", {
        className: "submit"
    }, "SIGN UP"), " "), mod.createElement("br", null), mod.createElement(T1, {
        to: "/",
        id: "loginlink"
    }, mod.createElement("p", null, "Have an account? Log in!"))))), mod.createElement("div", {
        className: "right"
    }, mod.createElement("div", {
        className: "right-text"
    }))));
};
mod1.render(mod.createElement(mod.StrictMode, null, mod.createElement(Y1, null, mod.createElement(T1, {
    to: "/"
}, "login"), mod.createElement(T1, {
    to: "/signup"
}, "Signup"), mod.createElement(T1, {
    to: "/home"
}, "App"), mod.createElement(Ve1, null, mod.createElement(me1, {
    path: "/",
    element: mod.createElement(Login, null)
}), mod.createElement(me1, {
    path: "/signup",
    element: mod.createElement(Signup, null)
}), mod.createElement(me1, {
    path: "/home",
    element: mod.createElement(App, null)
})))), document.getElementById('root'));
