import { $c as effect, Ei as provideAppInitializer, Eo as ɵɵgetInheritedFactory, Fc as PLATFORM_ID, Fn as Injectable, Hi as setClassMetadata, Ll as Subject, al as inject, dl as makeEnvironmentProviders, fc as DOCUMENT, qt as untracked, wc as InjectionToken, wl as ɵɵdefineInjectable, yl as signal } from "./core-DUNqMioj.js";
import "./common-BHPz-doM.js";
import { E as m$1, i as FilterMatchMode, y as Y$3 } from "./primeng-api-D5hmbmkR.js";
//#region node_modules/primeng/node_modules/@primeuix/utils/dist/dom/index.mjs
function k$1(t, e) {
	return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function P(t, e) {
	if (t && e) {
		let o = (n) => {
			k$1(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function F$1() {
	return window.innerWidth - document.documentElement.offsetWidth;
}
function lt(t) {
	typeof t == "string" ? P(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.setProperty(t.variableName, F$1() + "px"), P(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function M(t, e) {
	if (t && e) {
		let o = (n) => {
			t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function dt$1(t) {
	typeof t == "string" ? M(document.body, t || "p-overflow-hidden") : (t != null && t.variableName && document.body.style.removeProperty(t.variableName), M(document.body, (t == null ? void 0 : t.className) || "p-overflow-hidden"));
}
function E$1(t) {
	for (let e of document == null ? void 0 : document.styleSheets) try {
		for (let o of e == null ? void 0 : e.cssRules) for (let n of o == null ? void 0 : o.style) if (t.test(n)) return {
			name: n,
			value: o.style.getPropertyValue(n).trim()
		};
	} catch (o) {}
	return null;
}
function y() {
	let t = window, e = document, o = e.documentElement, n = e.getElementsByTagName("body")[0];
	return {
		width: t.innerWidth || o.clientWidth || n.clientWidth,
		height: t.innerHeight || o.clientHeight || n.clientHeight
	};
}
function S$1(t) {
	return t ? Math.abs(t.scrollLeft) : 0;
}
function $$1() {
	let t = document.documentElement;
	return (window.pageXOffset || S$1(t)) - (t.clientLeft || 0);
}
function D() {
	let t = document.documentElement;
	return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0);
}
function C$1(t, e) {
	if (t instanceof HTMLElement) {
		let o = t.offsetWidth;
		if (e) {
			let n = getComputedStyle(t);
			o += parseFloat(n.marginLeft) + parseFloat(n.marginRight);
		}
		return o;
	}
	return 0;
}
function h$1(t) {
	if (t) {
		let e = t.parentNode;
		return e && e instanceof ShadowRoot && e.host && (e = e.host), e;
	}
	return null;
}
function H(t) {
	return !!(t !== null && typeof t != "undefined" && t.nodeName && h$1(t));
}
function p(t) {
	return typeof Element != "undefined" ? t instanceof Element : t !== null && typeof t == "object" && t.nodeType === 1 && typeof t.nodeName == "string";
}
function b$1(t) {
	var o;
	if (p(t)) return t;
	if (!t || typeof t != "object") return;
	let e = t;
	if ("current" in t) e = t.current, e = (o = b$1(e == null ? void 0 : e.elementRef)) != null ? o : e;
	else if ("value" in t) e = t.value;
	else if ("nativeElement" in t) e = t.nativeElement;
	else if ("el" in t) {
		let n = t.el;
		n && typeof n == "object" && "nativeElement" in n ? e = n.nativeElement : e = n;
	} else if ("elementRef" in t) return b$1(t.elementRef);
	return e = m$1(e), p(e) ? e : void 0;
}
function U(t, e) {
	var o, n, r;
	if (t) switch (t) {
		case "document": return document;
		case "window": return window;
		case "body": return document.body;
		case "@next": return e == null ? void 0 : e.nextElementSibling;
		case "@prev": return e == null ? void 0 : e.previousElementSibling;
		case "@first": return e == null ? void 0 : e.firstElementChild;
		case "@last": return e == null ? void 0 : e.lastElementChild;
		case "@child": return (o = e == null ? void 0 : e.children) == null ? void 0 : o[0];
		case "@parent": return e == null ? void 0 : e.parentElement;
		case "@grandparent": return (n = e == null ? void 0 : e.parentElement) == null ? void 0 : n.parentElement;
		default: {
			if (typeof t == "string") {
				let l = t.match(/^@child\[(\d+)]/);
				return l ? ((r = e == null ? void 0 : e.children) == null ? void 0 : r[parseInt(l[1], 10)]) || null : document.querySelector(t) || null;
			}
			let s = ((l) => typeof l == "function" && "call" in l && "apply" in l)(t) ? t() : t, a = b$1(s);
			return H(a) ? a : (s == null ? void 0 : s.nodeType) === 9 ? s : void 0;
		}
	}
}
function ut(t, e) {
	let o = U(t, e);
	if (o) o.appendChild(e);
	else throw new Error("Cannot append " + e + " to " + t);
}
function O(t, e = {}) {
	if (p(t)) {
		let o = (r, i) => {
			var a, l;
			let s = (a = t == null ? void 0 : t.$attrs) != null && a[r] ? [(l = t == null ? void 0 : t.$attrs) == null ? void 0 : l[r]] : [];
			return [i].flat().reduce((d, f) => {
				if (f != null) {
					let c = typeof f;
					if (c === "string" || c === "number") d.push(f);
					else if (c === "object") {
						let u = Array.isArray(f) ? o(r, f) : Object.entries(f).map(([g, w]) => r === "style" && (w || w === 0) ? `${g.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${w}` : w ? g : void 0);
						d = u.length ? d.concat(u.filter((g) => !!g)) : d;
					}
				}
				return d;
			}, s);
		}, n = (r) => {
			o("style", r).forEach((s) => {
				let a = s.indexOf(":");
				if (a < 0) return;
				let l = s.slice(0, a).trim(), d = s.slice(a + 1).trim();
				l && t.style.setProperty(l, d);
			});
		};
		Object.entries(e).forEach(([r, i]) => {
			if (i != null) {
				let s = r.match(/^on(.+)/);
				s ? t.addEventListener(s[1].toLowerCase(), i) : r === "p-bind" || r === "pBind" ? O(t, i) : r === "style" ? (n(i), (t.$attrs = t.$attrs || {}) && (t.$attrs[r] = t.style.cssText)) : (i = r === "class" ? [...new Set(o("class", i))].join(" ").trim() : i, (t.$attrs = t.$attrs || {}) && (t.$attrs[r] = i), t.setAttribute(r, i));
			}
		});
	}
}
function q(t, e = {}, ...o) {
	if (t) {
		let n = document.createElement(t);
		return O(n, e), n.append(...o), n;
	}
}
function yt(t, e) {
	if (t) {
		t.style.opacity = "0";
		let o = +/* @__PURE__ */ new Date(), n = "0", r = function() {
			n = `${+t.style.opacity + ((/* @__PURE__ */ new Date()).getTime() - o) / e}`, t.style.opacity = n, o = +/* @__PURE__ */ new Date(), +n < 1 && ("requestAnimationFrame" in window ? requestAnimationFrame(r) : setTimeout(r, 16));
		};
		r();
	}
}
function Y$2(t, e) {
	return p(t) ? Array.from(t.querySelectorAll(e)) : [];
}
function Z(t, e) {
	return p(t) ? t.matches(e) ? t : t.querySelector(e) : null;
}
function bt(t, e) {
	t && document.activeElement !== t && t.focus(e);
}
function x$1(t, e = "") {
	let o = Y$2(t, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [href]:not([tabindex = "-1"]):not([style*="display:none"]):not([hidden])${e},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`), n = [];
	for (let r of o) getComputedStyle(r).display != "none" && getComputedStyle(r).visibility != "hidden" && n.push(r);
	return n;
}
function vt(t, e) {
	let o = x$1(t, e);
	return o.length > 0 ? o[0] : null;
}
function Tt(t) {
	if (t) {
		let e = t.offsetHeight, o = getComputedStyle(t);
		return e -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), e;
	}
	return 0;
}
function Lt(t, e) {
	let o = x$1(t, e);
	return o.length > 0 ? o[o.length - 1] : null;
}
function _(t) {
	if (t) {
		let e = t.getBoundingClientRect();
		return {
			top: e.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
			left: e.left + (window.pageXOffset || S$1(document.documentElement) || S$1(document.body) || 0)
		};
	}
	return {
		top: "auto",
		left: "auto"
	};
}
function L(t, e) {
	if (t) {
		let o = t.offsetHeight;
		if (e) {
			let n = getComputedStyle(t);
			o += parseFloat(n.marginTop) + parseFloat(n.marginBottom);
		}
		return o;
	}
	return 0;
}
function Nt(t) {
	if (t) {
		let e = t.offsetWidth, o = getComputedStyle(t);
		return e -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), e;
	}
	return 0;
}
function Yt() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Qt() {
	return new Promise((t) => {
		requestAnimationFrame(() => {
			requestAnimationFrame(t);
		});
	});
}
function Gt(t) {
	var e;
	t && ("remove" in Element.prototype ? t.remove() : (e = t.parentNode) == null || e.removeChild(t));
}
function Jt(t, e) {
	let o = b$1(t);
	if (o) o.removeChild(e);
	else throw new Error("Cannot remove " + e + " from " + t);
}
function te(t, e = "", o) {
	if (p(t) && o !== null && o !== void 0) {
		if (e === "style") {
			typeof o == "string" ? t.style.cssText = o : typeof o == "object" && Object.entries(o).forEach(([n, r]) => {
				if (r == null) return;
				let i = n.startsWith("--") ? n : n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
				t.style.setProperty(i, String(r));
			});
			return;
		}
		t.setAttribute(e, o);
	}
}
//#endregion
//#region node_modules/primeng/node_modules/@primeuix/styled/node_modules/@primeuix/utils/dist/object/index.mjs
function l(e) {
	return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function c(e) {
	return typeof e == "function" && "call" in e && "apply" in e;
}
function s$1(e) {
	return !l(e);
}
function i(e, t = !0) {
	return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function m(e, ...t) {
	return c(e) ? e(...t) : e;
}
function a(e, t = !0) {
	return typeof e == "string" && (t || e !== "");
}
function z(e) {
	return s$1(e) && !isNaN(e);
}
function G(e, t) {
	if (t) {
		let n = t.test(e);
		return t.lastIndex = 0, n;
	}
	return !1;
}
function Y$1(e) {
	return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":").trim();
}
function re(e) {
	return a(e) ? e.replace(/(_)/g, "-").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() : e;
}
//#endregion
//#region node_modules/primeng/node_modules/@primeuix/styled/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function s() {
	let r = /* @__PURE__ */ new Map();
	return {
		on(e, t) {
			let n = r.get(e);
			return n ? n.push(t) : n = [t], r.set(e, n), this;
		},
		off(e, t) {
			let n = r.get(e);
			return n && n.splice(n.indexOf(t) >>> 0, 1), this;
		},
		emit(e, t) {
			let n = r.get(e);
			n && n.forEach((i) => {
				i(t);
			});
		},
		clear() {
			r.clear();
		}
	};
}
//#endregion
//#region node_modules/primeng/node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e, t, r) => t in e ? rt(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: r
}) : e[t] = r;
var h = (e, t) => {
	for (var r in t || (t = {})) xe.call(t, r) && _e(e, r, t[r]);
	if (F) for (var r of F(t)) be.call(t, r) && _e(e, r, t[r]);
	return e;
};
var $ = (e, t) => st(e, nt(t));
var v = (e, t) => {
	var r = {};
	for (var s in e) xe.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
	if (e != null && F) for (var s of F(e)) t.indexOf(s) < 0 && be.call(e, s) && (r[s] = e[s]);
	return r;
};
var N = s();
var k = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie = /var\([^)]+\)/g;
function oe(e) {
	return a(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function ve(e) {
	return i(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function dt(e) {
	return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e = "", t = "") {
	return dt(`${a(e, !1) && a(t, !1) ? `${e}-` : e}${t}`);
}
function ae(e = "", t = "") {
	return `--${Q(e, t)}`;
}
function ht(e = "") {
	return ((e.match(/{/g) || []).length + (e.match(/}/g) || []).length) % 2 !== 0;
}
function Y(e, t = "", r = "", s = [], i) {
	if (a(e)) {
		let a = e.trim();
		if (ht(a)) return;
		if (G(a, k)) {
			let n = a.replaceAll(k, (l) => {
				return `var(${ae(r, re(l.replace(/{|}/g, "").split(".").filter((m) => !s.some((d) => G(m, d))).join("-")))}${s$1(i) ? `, ${i}` : ""})`;
			});
			return G(n.replace(ie, "0"), ne) ? `calc(${n})` : n;
		}
		return a;
	} else if (z(e)) return e;
}
function Re(e, t, r) {
	a(t, !1) && e.push(`${t}:${r};`);
}
function C(e, t) {
	return e ? `${e}{${t}}` : "";
}
function le(e, t) {
	if (e.indexOf("dt(") === -1) return e;
	function r(n, l) {
		let o = [], c = 0, m = "", d = null, u = 0;
		for (; c <= n.length;) {
			let g = n[c];
			if ((g === "\"" || g === "'" || g === "`") && n[c - 1] !== "\\" && (d = d === g ? null : g), !d && (g === "(" && u++, g === ")" && u--, (g === "," || c === n.length) && u === 0)) {
				let f = m.trim();
				f.startsWith("dt(") ? o.push(le(f, l)) : o.push(s(f)), m = "", c++;
				continue;
			}
			g !== void 0 && (m += g), c++;
		}
		return o;
	}
	function s(n) {
		let l = n[0];
		if ((l === "\"" || l === "'" || l === "`") && n[n.length - 1] === l) return n.slice(1, -1);
		let o = Number(n);
		return isNaN(o) ? n : o;
	}
	let i = [], a = [];
	for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") a.push(n), n += 2;
	else if (e[n] === ")" && a.length > 0) {
		let l = a.pop();
		a.length === 0 && i.push([l, n]);
	}
	if (!i.length) return e;
	for (let n = i.length - 1; n >= 0; n--) {
		let [l, o] = i[n], d = t(...r(e.slice(l + 3, o), t));
		e = e.slice(0, l) + d + e.slice(o + 1);
	}
	return e;
}
var rr = (e) => {
	var a;
	let t = S.getTheme(), r = ue(t, e, void 0, "variable");
	return {
		name: (a = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a[0],
		variable: r,
		value: ue(t, e, void 0, "value")
	};
};
var E = (...e) => ue(S.getTheme(), ...e);
var ue = (e = {}, t, r, s) => {
	if (t) {
		let { variable: i, options: a } = S.defaults || {}, { prefix: n, transform: l$2 } = (e == null ? void 0 : e.options) || a || {}, o = G(t, k) ? t : `{${t}}`;
		return s === "value" || l(s) && l$2 === "strict" ? S.getTokenValue(t) : Y(o, void 0, n, [i.excludedKeyRegex], r);
	}
	return "";
};
function ar(e, ...t) {
	if (e instanceof Array) return le(e.reduce((s, i, a) => {
		var n;
		return s + i + ((n = m(t[a], { dt: E })) != null ? n : "");
	}, ""), E);
	return m(e, { dt: E });
}
function de(e, t = {}) {
	let r = S.defaults.variable, { prefix: s = r.prefix, selector: i$4 = r.selector, excludedKeyRegex: a = r.excludedKeyRegex } = t, n = [], l = [], o = [{
		node: e,
		path: s
	}];
	for (; o.length;) {
		let { node: m, path: d } = o.pop();
		for (let u in m) {
			let g = m[u], f = ve(g), p = G(u, a) ? Q(d) : Q(d, re(u));
			if (i(f)) o.push({
				node: f,
				path: p
			});
			else {
				Re(l, ae(p), Y(f, p, s, [a]));
				let T = p;
				s && T.startsWith(s + "-") && (T = T.slice(s.length + 1)), n.push(T.replace(/-/g, "."));
			}
		}
	}
	let c = l.join("");
	return {
		value: l,
		tokens: n,
		declarations: c,
		css: C(i$4, c)
	};
}
var b = {
	regex: {
		rules: {
			class: {
				pattern: /^\.([a-zA-Z][\w-]*)$/,
				resolve(e) {
					return {
						type: "class",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			attr: {
				pattern: /^\[(.*)\]$/,
				resolve(e) {
					return {
						type: "attr",
						selector: `:root${e},:host${e}`,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			media: {
				pattern: /^@media (.*)$/,
				resolve(e) {
					return {
						type: "media",
						selector: e,
						matched: this.pattern.test(e.trim())
					};
				}
			},
			system: {
				pattern: /^system$/,
				resolve(e) {
					return {
						type: "system",
						selector: "@media (prefers-color-scheme: dark)",
						matched: this.pattern.test(e.trim())
					};
				}
			},
			custom: { resolve(e) {
				return {
					type: "custom",
					selector: e,
					matched: !0
				};
			} }
		},
		resolve(e) {
			let t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
			return [e].flat().map((r) => {
				var s;
				return (s = t.map((i) => i.resolve(r)).find((i) => i.matched)) != null ? s : this.rules.custom.resolve(r);
			});
		}
	},
	_toVariables(e, t) {
		return de(e, { prefix: t == null ? void 0 : t.prefix });
	},
	getCommon({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) {
		var R, T, j, O, M, z, V;
		let { preset: a, options: n } = t, l, o, c, m$2, d, u, g;
		if (s$1(a) && n.transform !== "strict") {
			let { primitive: L, semantic: te, extend: re } = a, f = te || {}, { colorScheme: K } = f, A = v(f, ["colorScheme"]), x = re || {}, { colorScheme: X } = x, G = v(x, ["colorScheme"]), p = K || {}, { dark: U } = p, B = v(p, ["dark"]), y = X || {}, { dark: I } = y, H = v(y, ["dark"]), W = s$1(L) ? this._toVariables({ primitive: L }, n) : {}, q = s$1(A) ? this._toVariables({ semantic: A }, n) : {}, Z = s$1(B) ? this._toVariables({ light: B }, n) : {}, pe = s$1(U) ? this._toVariables({ dark: U }, n) : {}, fe = s$1(G) ? this._toVariables({ semantic: G }, n) : {}, ye = s$1(H) ? this._toVariables({ light: H }, n) : {}, Se = s$1(I) ? this._toVariables({ dark: I }, n) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T = q.declarations) != null ? T : "", q.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z = ye.declarations) != null ? z : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
			l = this.transformCSS(e, Me, "light", "variable", n, s, i), o = ze;
			c = `${this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n, s, i)}${this.transformCSS(e, `${Be}`, "dark", "variable", n, s, i)}`, m$2 = [.../* @__PURE__ */ new Set([
				...Xe,
				...Ue,
				...Ie
			])];
			d = `${this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n, s, i)}${this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n, s, i)}`, u = [.../* @__PURE__ */ new Set([
				...We,
				...Ze,
				...Je
			])], g = m(a.css, { dt: E });
		}
		return {
			primitive: {
				css: l,
				tokens: o
			},
			semantic: {
				css: c,
				tokens: m$2
			},
			global: {
				css: d,
				tokens: u
			},
			style: g
		};
	},
	getPreset({ name: e = "", preset: t = {}, options: r, params: s, set: i, defaults: a, selector: n }) {
		var f, x, p;
		let l, o, c;
		if (s$1(t) && r.transform !== "strict") {
			let y = e.replace("-directive", ""), m$3 = t, { colorScheme: R, extend: T, css: j } = m$3, O = v(m$3, [
				"colorScheme",
				"extend",
				"css"
			]), d = T || {}, { colorScheme: M } = d, z = v(d, ["colorScheme"]), u = R || {}, { dark: V } = u, L = v(u, ["dark"]), g = M || {}, { dark: te } = g, re = v(g, ["dark"]), K = s$1(O) ? this._toVariables({ [y]: h(h({}, O), z) }, r) : {}, A = s$1(L) ? this._toVariables({ [y]: h(h({}, L), re) }, r) : {}, X = s$1(V) ? this._toVariables({ [y]: h(h({}, V), te) }, r) : {}, [G, U] = [(f = K.declarations) != null ? f : "", K.tokens || []], [B, I] = [(x = A.declarations) != null ? x : "", A.tokens || []], [H, W] = [(p = X.declarations) != null ? p : "", X.tokens || []];
			l = `${this.transformCSS(y, `${G}${B}`, "light", "variable", r, i, a, n)}${this.transformCSS(y, H, "dark", "variable", r, i, a, n)}`, o = [.../* @__PURE__ */ new Set([
				...U,
				...I,
				...W
			])], c = m(j, { dt: E });
		}
		return {
			css: l,
			tokens: o,
			style: c
		};
	},
	getPresetC({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) {
		var o;
		let { preset: a, options: n } = t, l = (o = a == null ? void 0 : a.components) == null ? void 0 : o[e];
		return this.getPreset({
			name: e,
			preset: l,
			options: n,
			params: r,
			set: s,
			defaults: i
		});
	},
	getPresetD({ name: e = "", theme: t = {}, params: r, set: s, defaults: i }) {
		var c, m;
		let a = e.replace("-directive", ""), { preset: n, options: l } = t, o = ((c = n == null ? void 0 : n.components) == null ? void 0 : c[a]) || ((m = n == null ? void 0 : n.directives) == null ? void 0 : m[a]);
		return this.getPreset({
			name: a,
			preset: o,
			options: l,
			params: r,
			set: s,
			defaults: i
		});
	},
	applyDarkColorScheme(e) {
		return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
	},
	getColorSchemeOption(e, t) {
		var r;
		return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
	},
	getLayerOrder(e, t = {}, r, s) {
		let { cssLayer: i } = t;
		return i ? `@layer ${m(i.order || i.name || "primeui", r)}` : "";
	},
	getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: i$1, defaults: a }) {
		let n = this.getCommon({
			name: e,
			theme: t,
			params: r,
			set: i$1,
			defaults: a
		}), l = Object.entries(s).reduce((o, [c, m]) => o.push(`${c}="${m}"`) && o, []).join(" ");
		return Object.entries(n || {}).reduce((o, [c, m]) => {
			if (i(m) && Object.hasOwn(m, "css")) {
				let d = Y$1(m.css), u = `${c}-variables`;
				o.push(`<style type="text/css" data-primevue-style-id="${u}" ${l}>${d}</style>`);
			}
			return o;
		}, []).join("");
	},
	getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s = {}, set: i, defaults: a }) {
		var c;
		let n = {
			name: e,
			theme: t,
			params: r,
			set: i,
			defaults: a
		}, l = (c = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : c.css, o = Object.entries(s).reduce((m, [d, u]) => m.push(`${d}="${u}"`) && m, []).join(" ");
		return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${Y$1(l)}</style>` : "";
	},
	createTokens(e = {}, t, r = "", s = "", i$2 = {}) {
		let a = function(l$1, o = {}, c = []) {
			if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), {
				colorScheme: l$1,
				path: this.path,
				paths: o,
				value: void 0
			};
			c.push(this.path), o.name = this.path, o.binding || (o.binding = {});
			let m = this.value;
			if (typeof this.value == "string" && k.test(this.value)) {
				let u = this.value.trim().replace(k, (g) => {
					var y;
					let f = g.slice(1, -1), x = this.tokens[f];
					if (!x) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
					let p = x.computed(l$1, o, c);
					return Array.isArray(p) && p.length === 2 ? `light-dark(${p[0].value},${p[1].value})` : (y = p == null ? void 0 : p.value) != null ? y : "__UNRESOLVED__";
				});
				m = ne.test(u.replace(ie, "0")) ? `calc(${u})` : u;
			}
			return l(o.binding) && delete o.binding, c.pop(), {
				colorScheme: l$1,
				path: this.path,
				paths: o,
				value: m.includes("__UNRESOLVED__") ? void 0 : m
			};
		}, n = (l, o, c) => {
			Object.entries(l).forEach(([m, d]) => {
				let u = G(m, t.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m)}` : oe(m), g = c ? `${c}.${m}` : m;
				i(d) ? n(d, u, g) : (i$2[u] || (i$2[u] = {
					paths: [],
					computed: (f, x = {}, p = []) => {
						if (i$2[u].paths.length === 1) return i$2[u].paths[0].computed(i$2[u].paths[0].scheme, x.binding, p);
						if (f && f !== "none") for (let y = 0; y < i$2[u].paths.length; y++) {
							let R = i$2[u].paths[y];
							if (R.scheme === f) return R.computed(f, x.binding, p);
						}
						return i$2[u].paths.map((y) => y.computed(y.scheme, x[y.scheme], p));
					}
				}), i$2[u].paths.push({
					path: g,
					value: d,
					scheme: g.includes("colorScheme.light") ? "light" : g.includes("colorScheme.dark") ? "dark" : "none",
					computed: a,
					tokens: i$2
				}));
			});
		};
		return n(e, r, s), i$2;
	},
	getTokenValue(e, t, r) {
		var l;
		let i = ((o) => o.split(".").filter((m) => !G(m.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), a = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, n = [(l = e[i]) == null ? void 0 : l.computed(a)].flat().filter((o) => o);
		return n.length === 1 ? n[0].value : n.reduce((o = {}, c) => {
			let u = c, { colorScheme: m } = u;
			return o[m] = v(u, ["colorScheme"]), o;
		}, void 0);
	},
	getSelectorRule(e, t, r, s) {
		return r === "class" || r === "attr" ? C(s$1(t) ? `${e}${t},${e} ${t}` : e, s) : C(e, C(t != null ? t : ":root,:host", s));
	},
	transformCSS(e, t, r, s, i$3 = {}, a, n, l) {
		if (s$1(t)) {
			let { cssLayer: o } = i$3;
			if (s !== "style") {
				let c = this.getColorSchemeOption(i$3, n);
				t = r === "dark" ? c.reduce((m, { type: d, selector: u }) => (s$1(u) && (m += u.includes("[CSS]") ? u.replace("[CSS]", t) : this.getSelectorRule(u, l, d, t)), m), "") : C(l != null ? l : ":root,:host", t);
			}
			if (o) {
				let c = {
					name: "primeui",
					order: "primeui"
				};
				i(o) && (c.name = m(o.name, {
					name: e,
					type: s
				})), s$1(c.name) && (t = C(`@layer ${c.name}`, t), a?.layerNames(c.name));
			}
			return t;
		}
		return "";
	}
};
var S = {
	defaults: {
		variable: {
			prefix: "p",
			selector: ":root,:host",
			excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
		},
		options: {
			prefix: "p",
			darkModeSelector: "system",
			cssLayer: !1
		}
	},
	_theme: void 0,
	_layerNames: /* @__PURE__ */ new Set(),
	_loadedStyleNames: /* @__PURE__ */ new Set(),
	_loadingStyles: /* @__PURE__ */ new Set(),
	_tokens: {},
	update(e = {}) {
		let { theme: t } = e;
		t && (this._theme = $(h({}, t), { options: h(h({}, this.defaults.options), t.options) }), this._tokens = b.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
	},
	get theme() {
		return this._theme;
	},
	get preset() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.preset) || {};
	},
	get options() {
		var e;
		return ((e = this.theme) == null ? void 0 : e.options) || {};
	},
	get tokens() {
		return this._tokens;
	},
	getTheme() {
		return this.theme;
	},
	setTheme(e) {
		this.update({ theme: e }), N.emit("theme:change", e);
	},
	getPreset() {
		return this.preset;
	},
	setPreset(e) {
		this._theme = $(h({}, this.theme), { preset: e }), this._tokens = b.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
	},
	getOptions() {
		return this.options;
	},
	setOptions(e) {
		this._theme = $(h({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
	},
	getLayerNames() {
		return [...this._layerNames];
	},
	setLayerNames(e) {
		this._layerNames.add(e);
	},
	getLoadedStyleNames() {
		return this._loadedStyleNames;
	},
	isStyleNameLoaded(e) {
		return this._loadedStyleNames.has(e);
	},
	setLoadedStyleName(e) {
		this._loadedStyleNames.add(e);
	},
	deleteLoadedStyleName(e) {
		this._loadedStyleNames.delete(e);
	},
	clearLoadedStyleNames() {
		this._loadedStyleNames.clear();
	},
	getTokenValue(e) {
		return b.getTokenValue(this.tokens, e, this.defaults);
	},
	getCommon(e = "", t) {
		return b.getCommon({
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getComponent(e = "", t) {
		let r = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b.getPresetC(r);
	},
	getDirective(e = "", t) {
		let r = {
			name: e,
			theme: this.theme,
			params: t,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b.getPresetD(r);
	},
	getCustomPreset(e = "", t, r, s) {
		let i = {
			name: e,
			preset: t,
			options: this.options,
			selector: r,
			params: s,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		};
		return b.getPreset(i);
	},
	getLayerOrderCSS(e = "") {
		return b.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
	},
	transformCSS(e = "", t, r = "style", s) {
		return b.transformCSS(e, t, s, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
	},
	getCommonStyleSheet(e = "", t, r = {}) {
		return b.getCommonStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	getStyleSheet(e, t, r = {}) {
		return b.getStyleSheet({
			name: e,
			theme: this.theme,
			params: t,
			props: r,
			defaults: this.defaults,
			set: { layerNames: this.setLayerNames.bind(this) }
		});
	},
	onStyleMounted(e) {
		this._loadingStyles.add(e);
	},
	onStyleUpdated(e) {
		this._loadingStyles.add(e);
	},
	onStyleLoaded(e, { name: t }) {
		this._loadingStyles.size && (this._loadingStyles.delete(t), N.emit(`theme:${t}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
	}
};
//#endregion
//#region node_modules/@primeuix/styles/dist/base/index.mjs
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: dt('icon.size');\n        height: dt('icon.size');\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";
//#endregion
//#region node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var UseStyle = class UseStyle {
	document = inject(DOCUMENT);
	use(css, options = {}) {
		let cssRef = css;
		let styleRef = null;
		const { immediate = true, manual = false, name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, first = false, props = {} } = options;
		if (!this.document) return;
		styleRef = this.document.querySelector(`style[data-primeng-style-id="${name}"]`) || id && this.document.getElementById(id) || this.document.createElement("style");
		if (styleRef) {
			if (!styleRef.isConnected) {
				cssRef = css;
				const HEAD = this.document.head;
				te(styleRef, "nonce", nonce);
				first && HEAD.firstChild ? HEAD.insertBefore(styleRef, HEAD.firstChild) : HEAD.appendChild(styleRef);
				O(styleRef, {
					type: "text/css",
					media,
					nonce,
					"data-primeng-style-id": name
				});
			}
			if (styleRef.textContent !== cssRef) styleRef.textContent = cssRef;
		}
		return {
			id,
			name,
			el: styleRef,
			css: cssRef
		};
	}
	static ɵfac = function UseStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || UseStyle)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: UseStyle,
		factory: UseStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-base.mjs
var base = {
	_loadedStyleNames: /* @__PURE__ */ new Set(),
	getLoadedStyleNames() {
		return this._loadedStyleNames;
	},
	isStyleNameLoaded(name) {
		return this._loadedStyleNames.has(name);
	},
	setLoadedStyleName(name) {
		this._loadedStyleNames.add(name);
	},
	deleteLoadedStyleName(name) {
		this._loadedStyleNames.delete(name);
	},
	clearLoadedStyleNames() {
		this._loadedStyleNames.clear();
	}
};
var css = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`;
var BaseStyle = class BaseStyle {
	name = "base";
	useStyle = inject(UseStyle);
	css = void 0;
	style = void 0;
	classes = {};
	inlineStyles = {};
	load = (style, options = {}, transform = (cs) => cs) => {
		const computedStyle = transform(ar`${m$1(style, { dt: E })}`);
		return computedStyle ? this.useStyle.use(Y$3(computedStyle), {
			name: this.name,
			...options
		}) : {};
	};
	loadCSS = (options = {}) => {
		return this.load(this.css, options);
	};
	loadStyle = (options = {}, style = "") => {
		return this.load(this.style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style}`}`));
	};
	loadBaseCSS = (options = {}) => {
		return this.load(css, options);
	};
	loadBaseStyle = (options = {}, style$1 = "") => {
		return this.load(style, options, (computedStyle = "") => S.transformCSS(options.name || this.name, `${computedStyle}${ar`${style$1}`}`));
	};
	getCommonTheme = (params) => {
		return S.getCommon(this.name, params);
	};
	getComponentTheme = (params) => {
		return S.getComponent(this.name, params);
	};
	getPresetTheme = (preset, selector, params) => {
		return S.getCustomPreset(this.name, preset, selector, params);
	};
	getLayerOrderThemeCSS = () => {
		return S.getLayerOrderCSS(this.name);
	};
	getStyleSheet = (extendedCSS = "", props = {}) => {
		if (this.css) {
			const _style = Y$3(ar`${m$1(this.css, { dt: E })}${extendedCSS}`);
			const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
			return `<style type="text/css" data-primeng-style-id="${this.name}" ${_props}>${_style}</style>`;
		}
		return "";
	};
	getCommonThemeStyleSheet = (params, props = {}) => {
		return S.getCommonStyleSheet(this.name, params, props);
	};
	getThemeStyleSheet = (params, props = {}) => {
		let css = [S.getStyleSheet(this.name, params, props)];
		if (this.style) {
			const name = this.name === "base" ? "global-style" : `${this.name}-style`;
			const _css = ar`${m$1(this.style, { dt: E })}`;
			const _style = Y$3(S.transformCSS(name, _css));
			const _props = Object.entries(props).reduce((acc, [k, v]) => acc.push(`${k}="${v}"`) && acc, []).join(" ");
			css.push(`<style type="text/css" data-primeng-style-id="${name}" ${_props}>${_style}</style>`);
		}
		return css.join("");
	};
	static ɵfac = function BaseStyle_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || BaseStyle)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: BaseStyle,
		factory: BaseStyle.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class ThemeProvider {
	theme = signal(void 0, ...ngDevMode ? [{ debugName: "theme" }] : 	/* istanbul ignore next */ []);
	csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : 	/* istanbul ignore next */ []);
	isThemeChanged = false;
	document = inject(DOCUMENT);
	baseStyle = inject(BaseStyle);
	constructor() {
		effect(() => {
			N.on("theme:change", (newTheme) => {
				untracked(() => {
					this.isThemeChanged = true;
					this.theme.set(newTheme);
				});
			});
		});
		effect(() => {
			const themeValue = this.theme();
			if (this.document && themeValue) {
				if (!this.isThemeChanged) this.onThemeChange(themeValue);
				this.isThemeChanged = false;
			}
		});
	}
	ngOnDestroy() {
		S.clearLoadedStyleNames();
		N.clear();
	}
	onThemeChange(value) {
		S.setTheme(value);
		if (this.document) this.loadCommonTheme();
	}
	loadCommonTheme() {
		if (this.theme() === "none") return;
		if (!S.isStyleNameLoaded("common")) {
			const { primitive, semantic, global, style } = this.baseStyle.getCommonTheme?.() || {};
			const styleOptions = { nonce: this.csp?.()?.nonce };
			this.baseStyle.load(primitive?.css, {
				name: "primitive-variables",
				...styleOptions
			});
			this.baseStyle.load(semantic?.css, {
				name: "semantic-variables",
				...styleOptions
			});
			this.baseStyle.load(global?.css, {
				name: "global-variables",
				...styleOptions
			});
			this.baseStyle.loadBaseStyle({
				name: "global-style",
				...styleOptions
			}, style);
			S.setLoadedStyleName("common");
		}
	}
	setThemeConfig(config) {
		const { theme, csp } = config || {};
		if (theme) this.theme.set(theme);
		if (csp) this.csp.set(csp);
	}
	static ɵfac = function ThemeProvider_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ThemeProvider)();
	};
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ThemeProvider,
		factory: ThemeProvider.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], () => [], null);
})();
var PrimeNG = class PrimeNG extends ThemeProvider {
	ripple = signal(false, ...ngDevMode ? [{ debugName: "ripple" }] : 	/* istanbul ignore next */ []);
	platformId = inject(PLATFORM_ID);
	/**
	* @deprecated Since v20. Use `inputVariant` instead.
	*/
	inputStyle = signal(null, ...ngDevMode ? [{ debugName: "inputStyle" }] : 	/* istanbul ignore next */ []);
	inputVariant = signal(null, ...ngDevMode ? [{ debugName: "inputVariant" }] : 	/* istanbul ignore next */ []);
	overlayAppendTo = signal("self", ...ngDevMode ? [{ debugName: "overlayAppendTo" }] : 	/* istanbul ignore next */ []);
	overlayOptions = {};
	csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : 	/* istanbul ignore next */ []);
	unstyled = signal(void 0, ...ngDevMode ? [{ debugName: "unstyled" }] : 	/* istanbul ignore next */ []);
	pt = signal(void 0, ...ngDevMode ? [{ debugName: "pt" }] : 	/* istanbul ignore next */ []);
	ptOptions = signal(void 0, ...ngDevMode ? [{ debugName: "ptOptions" }] : 	/* istanbul ignore next */ []);
	filterMatchModeOptions = {
		text: [
			FilterMatchMode.STARTS_WITH,
			FilterMatchMode.CONTAINS,
			FilterMatchMode.NOT_CONTAINS,
			FilterMatchMode.ENDS_WITH,
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS
		],
		numeric: [
			FilterMatchMode.EQUALS,
			FilterMatchMode.NOT_EQUALS,
			FilterMatchMode.LESS_THAN,
			FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
			FilterMatchMode.GREATER_THAN,
			FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
		],
		date: [
			FilterMatchMode.DATE_IS,
			FilterMatchMode.DATE_IS_NOT,
			FilterMatchMode.DATE_BEFORE,
			FilterMatchMode.DATE_AFTER
		]
	};
	translation = {
		startsWith: "Starts with",
		contains: "Contains",
		notContains: "Not contains",
		endsWith: "Ends with",
		equals: "Equals",
		notEquals: "Not equals",
		noFilter: "No Filter",
		lt: "Less than",
		lte: "Less than or equal to",
		gt: "Greater than",
		gte: "Greater than or equal to",
		is: "Is",
		isNot: "Is not",
		before: "Before",
		after: "After",
		dateIs: "Date is",
		dateIsNot: "Date is not",
		dateBefore: "Date is before",
		dateAfter: "Date is after",
		clear: "Clear",
		apply: "Apply",
		matchAll: "Match All",
		matchAny: "Match Any",
		addRule: "Add Rule",
		removeRule: "Remove Rule",
		accept: "Yes",
		reject: "No",
		choose: "Choose",
		completed: "Completed",
		upload: "Upload",
		cancel: "Cancel",
		pending: "Pending",
		fileSizeTypes: [
			"B",
			"KB",
			"MB",
			"GB",
			"TB",
			"PB",
			"EB",
			"ZB",
			"YB"
		],
		dayNames: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday"
		],
		dayNamesShort: [
			"Sun",
			"Mon",
			"Tue",
			"Wed",
			"Thu",
			"Fri",
			"Sat"
		],
		dayNamesMin: [
			"Su",
			"Mo",
			"Tu",
			"We",
			"Th",
			"Fr",
			"Sa"
		],
		monthNames: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
		monthNamesShort: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec"
		],
		chooseYear: "Choose Year",
		chooseMonth: "Choose Month",
		chooseDate: "Choose Date",
		prevDecade: "Previous Decade",
		nextDecade: "Next Decade",
		prevYear: "Previous Year",
		nextYear: "Next Year",
		prevMonth: "Previous Month",
		nextMonth: "Next Month",
		prevHour: "Previous Hour",
		nextHour: "Next Hour",
		prevMinute: "Previous Minute",
		nextMinute: "Next Minute",
		prevSecond: "Previous Second",
		nextSecond: "Next Second",
		am: "am",
		pm: "pm",
		dateFormat: "mm/dd/yy",
		firstDayOfWeek: 0,
		today: "Today",
		weekHeader: "Wk",
		weak: "Weak",
		medium: "Medium",
		strong: "Strong",
		passwordPrompt: "Enter a password",
		emptyMessage: "No results found",
		searchMessage: "Search results are available",
		selectionMessage: "{0} items selected",
		emptySelectionMessage: "No selected item",
		emptySearchMessage: "No results found",
		emptyFilterMessage: "No results found",
		fileChosenMessage: "Files",
		noFileChosenMessage: "No file chosen",
		aria: {
			trueLabel: "True",
			falseLabel: "False",
			nullLabel: "Not Selected",
			star: "1 star",
			stars: "{star} stars",
			selectAll: "All items selected",
			unselectAll: "All items unselected",
			close: "Close",
			previous: "Previous",
			next: "Next",
			navigation: "Navigation",
			scrollTop: "Scroll Top",
			moveTop: "Move Top",
			moveUp: "Move Up",
			moveDown: "Move Down",
			moveBottom: "Move Bottom",
			moveToTarget: "Move to Target",
			moveToSource: "Move to Source",
			moveAllToTarget: "Move All to Target",
			moveAllToSource: "Move All to Source",
			pageLabel: "{page}",
			firstPageLabel: "First Page",
			lastPageLabel: "Last Page",
			nextPageLabel: "Next Page",
			prevPageLabel: "Previous Page",
			rowsPerPageLabel: "Rows per page",
			previousPageLabel: "Previous Page",
			jumpToPageDropdownLabel: "Jump to Page Dropdown",
			jumpToPageInputLabel: "Jump to Page Input",
			selectRow: "Row Selected",
			unselectRow: "Row Unselected",
			expandRow: "Row Expanded",
			collapseRow: "Row Collapsed",
			showFilterMenu: "Show Filter Menu",
			hideFilterMenu: "Hide Filter Menu",
			filterOperator: "Filter Operator",
			filterConstraint: "Filter Constraint",
			editRow: "Row Edit",
			saveEdit: "Save Edit",
			cancelEdit: "Cancel Edit",
			listView: "List View",
			gridView: "Grid View",
			slide: "Slide",
			slideNumber: "{slideNumber}",
			zoomImage: "Zoom Image",
			zoomIn: "Zoom In",
			zoomOut: "Zoom Out",
			rotateRight: "Rotate Right",
			rotateLeft: "Rotate Left",
			listLabel: "Option List",
			selectColor: "Select a color",
			removeLabel: "Remove",
			browseFiles: "Browse Files",
			maximizeLabel: "Maximize",
			minimizeLabel: "Minimize"
		}
	};
	zIndex = {
		modal: 1100,
		overlay: 1e3,
		menu: 1e3,
		tooltip: 1100
	};
	translationSource = new Subject();
	translationObserver = this.translationSource.asObservable();
	getTranslation(key) {
		return this.translation[key];
	}
	setTranslation(value) {
		this.translation = {
			...this.translation,
			...value
		};
		this.translationSource.next(this.translation);
	}
	setConfig(config) {
		const { csp, ripple, inputStyle, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo, zIndex, ptOptions, pt, unstyled } = config || {};
		if (csp) this.csp.set(csp);
		if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
		if (ripple) this.ripple.set(ripple);
		if (inputStyle) this.inputStyle.set(inputStyle);
		if (inputVariant) this.inputVariant.set(inputVariant);
		if (overlayOptions) this.overlayOptions = overlayOptions;
		if (translation) this.setTranslation(translation);
		if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
		if (zIndex) this.zIndex = zIndex;
		if (pt) this.pt.set(pt);
		if (ptOptions) this.ptOptions.set(ptOptions);
		if (unstyled) this.unstyled.set(unstyled);
		if (theme) this.setThemeConfig({
			theme,
			csp
		});
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵPrimeNG_BaseFactory;
		return function PrimeNG_Factory(__ngFactoryType__) {
			return (ɵPrimeNG_BaseFactory || (ɵPrimeNG_BaseFactory = ɵɵgetInheritedFactory(PrimeNG)))(__ngFactoryType__ || PrimeNG);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: PrimeNG,
		factory: PrimeNG.ɵfac,
		providedIn: "root"
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
		type: Injectable,
		args: [{ providedIn: "root" }]
	}], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
function providePrimeNG(...features) {
	const providers = features?.map((feature) => ({
		provide: PRIME_NG_CONFIG,
		useValue: feature,
		multi: false
	}));
	const initializer = provideAppInitializer(() => {
		const PrimeNGConfig = inject(PrimeNG);
		features?.forEach((feature) => PrimeNGConfig.setConfig(feature));
	});
	return makeEnvironmentProviders([...providers, initializer]);
}
//#endregion
export { q as A, Yt as C, dt$1 as D, bt as E, yt as F, ut as M, vt as N, k$1 as O, y as P, Tt as S, _ as T, Lt as _, BaseStyle as a, P as b, S as c, C$1 as d, D as f, L as g, Jt as h, providePrimeNG as i, te as j, lt as k, rr as l, Gt as m, PrimeNG as n, base as o, E$1 as p, ThemeProvider as r, N as s, PRIME_NG_CONFIG as t, $$1 as u, M as v, Z as w, Qt as x, Nt as y };
