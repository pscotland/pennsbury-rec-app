import { $a as ɵɵdefineComponent, $n as Output, Bs as ɵɵtemplate, Bt as computed, Ca as ɵɵconditionalCreate, Dr as ViewEncapsulation, El as ɵɵdefineInjector, Eo as ɵɵgetInheritedFactory, Fl as ɵɵrestoreView, Fn as Injectable, Hi as setClassMetadata, Hs as ɵɵtext, Ic as PLATFORM_ID, In as Input, Is as ɵɵstyleMap, Jo as ɵɵloadQuery, Nl as ɵɵnamespaceSVG, O as booleanAttribute, Pl as ɵɵresetView, S as ViewChild, T as afterRenderEffect, Tc as InjectionToken, Tl as ɵɵdefineInjectable, To as ɵɵgetCurrentView, Us as ɵɵtextInterpolate, Vs as ɵɵtemplateRefExtractor, X as input, Yo as ɵɵnextContext, _a as ɵɵattribute, _o as ɵɵelementContainerStart, a as ContentChildren, aa as ɵɵHostDirectivesFeature, ac as ɵɵviewQuery, an as ChangeDetectionStrategy, at as output, bl as signal, ca as ɵɵProvidersFeature, cn as Component, el as effect, eo as ɵɵdefineDirective, go as ɵɵelementContainerEnd, gs as ɵɵqueryRefresh, ho as ɵɵelementContainer, i as ContentChild, is as ɵɵproperty, la as ɵɵadvance, mo as ɵɵelement, ns as ɵɵprojection, oa as ɵɵInheritDefinitionFeature, ol as inject, pc as DOCUMENT, qn as NgModule, qo as ɵɵlistener, qt as untracked, rs as ɵɵprojectionDef, rt as numberAttribute, to as ɵɵdefineNgModule, va as ɵɵclassMap, vo as ɵɵelementEnd, wa as ɵɵcontentQuery, wn as Directive, xa as ɵɵconditional, yc as EventEmitter, yo as ɵɵelementStart } from "./core-BHryx6LR.js";
import { o as isPlatformBrowser } from "./common-BQDfx3gy.js";
import { a as NgIf, r as NgClass, s as NgTemplateOutlet, t as CommonModule } from "./_common_module-chunk-BQFtUVpq.js";
import { g as PARENT_INSTANCE, h as BaseComponent, l as Bind, m as unblockBodyScroll, n as TimesIcon, p as blockBodyScroll, u as BindModule } from "./primeng-ripple-CD5ZGSbi.js";
import { f as PrimeTemplate, p as SharedModule } from "./primeng-api-B8pw7ffr.js";
import { A as q$1, E as bt, M as ut, N as vt, _ as Lt, a as BaseStyle, b as P$1, j as te$1, v as M, x as Qt } from "./primeng-config-D3Iqsfuk.js";
import { t as Button } from "./primeng-button-DQzlB8cC.js";
import { t as zindexutils } from "./primeng-utils-d0waJCQQ.js";
//#region node_modules/primeng/fesm2022/primeng-focustrap.mjs
/**
* Focus Trap keeps focus within a certain DOM element while tabbing.
* @group Components
*/
var FocusTrap = class FocusTrap extends BaseComponent {
	/**
	* When set as true, focus wouldn't be managed.
	* @group Props
	*/
	pFocusTrapDisabled = false;
	platformId = inject(PLATFORM_ID);
	document = inject(DOCUMENT);
	firstHiddenFocusableElement;
	lastHiddenFocusableElement;
	onInit() {
		if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
	}
	onChanges(changes) {
		if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) if (changes.pFocusTrapDisabled.currentValue) this.removeHiddenFocusableElements();
		else this.createHiddenFocusableElements();
	}
	removeHiddenFocusableElements() {
		if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
		if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
	}
	getComputedSelector(selector) {
		return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
	}
	createHiddenFocusableElements() {
		const tabindex = "0";
		const createFocusableElement = (onFocus) => {
			return q$1("span", {
				class: "p-hidden-accessible p-hidden-focusable",
				tabindex,
				role: "presentation",
				"aria-hidden": true,
				"data-p-hidden-accessible": true,
				"data-p-hidden-focusable": true,
				onFocus: onFocus?.bind(this)
			});
		};
		this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
		this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
		this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
		this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
		this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
		this.el.nativeElement.append(this.lastHiddenFocusableElement);
	}
	onFirstHiddenElementFocus(event) {
		const { currentTarget, relatedTarget } = event;
		bt(relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? vt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement);
	}
	onLastHiddenElementFocus(event) {
		const { currentTarget, relatedTarget } = event;
		bt(relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Lt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement);
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵFocusTrap_BaseFactory;
		return function FocusTrap_Factory(__ngFactoryType__) {
			return (ɵFocusTrap_BaseFactory || (ɵFocusTrap_BaseFactory = ɵɵgetInheritedFactory(FocusTrap)))(__ngFactoryType__ || FocusTrap);
		};
	})();
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: FocusTrap,
		selectors: [[
			"",
			"pFocusTrap",
			""
		]],
		inputs: { pFocusTrapDisabled: [
			2,
			"pFocusTrapDisabled",
			"pFocusTrapDisabled",
			booleanAttribute
		] },
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
		type: Directive,
		args: [{
			selector: "[pFocusTrap]",
			standalone: true
		}]
	}], null, { pFocusTrapDisabled: [{
		type: Input,
		args: [{ transform: booleanAttribute }]
	}] });
})();
var FocusTrapModule = class FocusTrapModule {
	static ɵfac = function FocusTrapModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FocusTrapModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: FocusTrapModule,
		imports: [FocusTrap],
		exports: [FocusTrap]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
		type: NgModule,
		args: [{
			imports: [FocusTrap],
			exports: [FocusTrap]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/dom/index.mjs
function R(t, e) {
	return t ? t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className) : !1;
}
function W$1(t, e) {
	if (t && e) {
		let o = (n) => {
			R(t, n) || (t.classList ? t.classList.add(n) : t.className += " " + n);
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function P(t, e) {
	if (t && e) {
		let o = (n) => {
			t.classList ? t.classList.remove(n) : t.className = t.className.replace(new RegExp("(^|\\b)" + n.split(" ").join("|") + "(\\b|$)", "gi"), " ");
		};
		[e].flat().filter(Boolean).forEach((n) => n.split(" ").forEach(o));
	}
}
function w(t) {
	let e = {
		width: 0,
		height: 0
	};
	if (t) {
		let [o, n] = [t.style.visibility, t.style.display], r = t.getBoundingClientRect();
		t.style.visibility = "hidden", t.style.display = "block", e.width = r.width || t.offsetWidth, e.height = r.height || t.offsetHeight, t.style.display = n, t.style.visibility = o;
	}
	return e;
}
function qt() {
	return typeof window == "undefined" || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function te(t, e, o = null, n) {
	var r;
	e && ((r = t == null ? void 0 : t.style) == null || r.setProperty(e, o, n));
}
//#endregion
//#region node_modules/@primeuix/motion/node_modules/@primeuix/utils/dist/object/index.mjs
function oe(e) {
	return e === "auto" ? 0 : typeof e == "number" ? e : Number(e.replace(/[^\d.]/g, "").replace(",", ".")) * 1e3;
}
//#endregion
//#region node_modules/@primeuix/motion/dist/index.mjs
var j = Object.defineProperty;
var T = Object.getOwnPropertySymbols;
var q = Object.prototype.hasOwnProperty;
var V = Object.prototype.propertyIsEnumerable;
var D = (t, n, e) => n in t ? j(t, n, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: e
}) : t[n] = e;
var p = (t, n) => {
	for (var e in n || (n = {})) q.call(n, e) && D(t, e, n[e]);
	if (T) for (var e of T(n)) V.call(n, e) && D(t, e, n[e]);
	return t;
};
var N = (t, n, e) => new Promise((o, m) => {
	var i = (r) => {
		try {
			f(e.next(r));
		} catch (u) {
			m(u);
		}
	}, M = (r) => {
		try {
			f(e.throw(r));
		} catch (u) {
			m(u);
		}
	}, f = (r) => r.done ? o(r.value) : Promise.resolve(r.value).then(i, M);
	f((e = e.apply(t, n)).next());
});
var E = "animation";
var v = "transition";
function H(t) {
	return t ? t.disabled || !!(t.safe && qt()) : !1;
}
function k(t, n) {
	return t ? p(p({}, t), Object.entries(n).reduce((e, [o, m]) => {
		var i;
		return e[o] = (i = t[o]) != null ? i : m, e;
	}, {})) : n;
}
function L(t) {
	let { name: n, enterClass: e, leaveClass: o } = t || {};
	return {
		enter: {
			from: (e == null ? void 0 : e.from) || `${n}-enter-from`,
			to: (e == null ? void 0 : e.to) || `${n}-enter-to`,
			active: (e == null ? void 0 : e.active) || `${n}-enter-active`
		},
		leave: {
			from: (o == null ? void 0 : o.from) || `${n}-leave-from`,
			to: (o == null ? void 0 : o.to) || `${n}-leave-to`,
			active: (o == null ? void 0 : o.active) || `${n}-leave-active`
		}
	};
}
function W(t) {
	return {
		enter: {
			onBefore: t == null ? void 0 : t.onBeforeEnter,
			onStart: t == null ? void 0 : t.onEnter,
			onAfter: t == null ? void 0 : t.onAfterEnter,
			onCancelled: t == null ? void 0 : t.onEnterCancelled
		},
		leave: {
			onBefore: t == null ? void 0 : t.onBeforeLeave,
			onStart: t == null ? void 0 : t.onLeave,
			onAfter: t == null ? void 0 : t.onAfterLeave,
			onCancelled: t == null ? void 0 : t.onLeaveCancelled
		}
	};
}
function A(t, n) {
	let e = window.getComputedStyle(t), o = (l) => {
		let c = e[`${l}Delay`], h = e[`${l}Duration`];
		return [c.split(", ").map(oe), h.split(", ").map(oe)];
	}, [m, i] = o(v), [M, f] = o(E), r = Math.max(...i.map((l, c) => l + m[c])), u = Math.max(...f.map((l, c) => l + M[c])), a, s = 0, d = 0;
	return n === "transition" ? r > 0 && (a = "transition", s = r, d = i.length) : n === "animation" ? u > 0 && (a = "animation", s = u, d = f.length) : (s = Math.max(r, u), a = s > 0 ? r > u ? v : E : void 0, d = a ? a === "transition" ? i.length : f.length : 0), {
		type: a,
		timeout: s,
		count: d
	};
}
function $(t, n) {
	return typeof t == "number" ? t : typeof t == "object" && t[n] != null ? t[n] : null;
}
function S(t, n = !0, e = !1) {
	if (!n && !e) return;
	let o = w(t);
	n && te(t, "--pui-motion-height", o.height + "px"), e && te(t, "--pui-motion-width", o.width + "px");
}
var U = {
	name: "p",
	safe: !0,
	disabled: !1,
	enter: !0,
	leave: !0,
	autoHeight: !0,
	autoWidth: !1
};
function tt(t, n) {
	if (!t) throw new Error("Element is required.");
	let e = {}, o = !1, m = {}, i = null, M = {}, f = (a) => {
		if (Object.assign(e, k(a, U)), !e.enter && !e.leave) throw new Error("Enter or leave must be true.");
		M = W(e), o = H(e), m = L(e), i = null;
	}, r = (a) => N(null, null, function* () {
		i?.();
		let { onBefore: s, onStart: d, onAfter: l, onCancelled: c } = M[a] || {}, h = { element: t };
		if (o) {
			s?.(h), d?.(h), l?.(h);
			return;
		}
		let { from: g, active: y, to: P$2 } = m[a] || {};
		return S(t, e.autoHeight, e.autoWidth), s?.(h), W$1(t, g), W$1(t, y), t.offsetHeight, P(t, g), W$1(t, P$2), d?.(h), new Promise((b) => {
			let C = $(e.duration, a), x = () => {
				P(t, [P$2, y]), i = null;
			}, R = () => {
				x(), l?.(h), b();
			};
			i = () => {
				x(), c?.(h), b();
			}, G(t, e.type, C, R);
		});
	});
	f(n);
	let u = {
		enter: () => e.enter ? r("enter") : Promise.resolve(),
		leave: () => e.leave ? r("leave") : Promise.resolve(),
		cancel: () => {
			i?.(), i = null;
		},
		update: (a, s) => {
			if (!a) throw new Error("Element is required.");
			t = a, u.cancel(), f(s);
		}
	};
	return e.appear && u.enter(), u;
}
var z = 0;
function G(t, n, e, o) {
	let m = t._motionEndId = ++z, i = () => {
		m === t._motionEndId && o();
	};
	if (e != null) return setTimeout(i, e);
	let { type: M, timeout: f, count: r } = A(t, n);
	if (!M) {
		o();
		return;
	}
	let u = M + "end", a = 0, s = () => {
		t.removeEventListener(u, d, !0), i();
	}, d = (l) => {
		l.target === t && ++a >= r && s();
	};
	t.addEventListener(u, d, {
		capture: !0,
		once: !0
	}), setTimeout(() => {
		a < r && s();
	}, f + 1);
}
//#endregion
//#region node_modules/primeng/fesm2022/primeng-motion.mjs
var _c0$1 = ["*"];
function Motion_Conditional_0_Template(rf, ctx) {
	if (rf & 1) ɵɵprojection(0);
}
var originalStyles = /* @__PURE__ */ new WeakMap();
function applyHiddenStyles(element, strategy) {
	if (!element) return;
	if (!originalStyles.has(element)) originalStyles.set(element, {
		display: element.style.display,
		visibility: element.style.visibility,
		maxHeight: element.style.maxHeight,
		overflow: element.style.overflow
	});
	switch (strategy) {
		case "display":
			element.style.display = "none";
			break;
		case "visibility":
			element.style.visibility = "hidden";
			element.style.maxHeight = "0";
			element.style.overflow = "hidden";
			break;
	}
}
function resetStyles(element, strategy) {
	if (!element) return;
	const original = originalStyles.get(element) ?? element.style;
	switch (strategy) {
		case "display":
			element.style.display = original?.display || "";
			break;
		case "visibility":
			element.style.visibility = original?.visibility || "";
			element.style.maxHeight = original?.maxHeight || "";
			element.style.overflow = original?.overflow || "";
			break;
	}
	originalStyles.delete(element);
}
var style$2 = `
    .p-motion {
        display: block;
    }
`;
var classes$1 = { root: "p-motion" };
var MotionStyle = class MotionStyle extends BaseStyle {
	name = "motion";
	style = style$2;
	classes = classes$1;
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵMotionStyle_BaseFactory;
		return function MotionStyle_Factory(__ngFactoryType__) {
			return (ɵMotionStyle_BaseFactory || (ɵMotionStyle_BaseFactory = ɵɵgetInheritedFactory(MotionStyle)))(__ngFactoryType__ || MotionStyle);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: MotionStyle,
		factory: MotionStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionStyle, [{ type: Injectable }], null, null);
})();
/**
*
* Motion and MotionDirective provide an easy way to add motion effects to Angular applications.
*
* [Live Demo](https://www.primeng.org/motion)
*
* @module motionstyle
*
*/
var MotionClasses;
(function(MotionClasses) {
	/**
	* Class name of the root element
	*/
	MotionClasses["root"] = "p-motion";
})(MotionClasses || (MotionClasses = {}));
var MOTION_INSTANCE = new InjectionToken("MOTION_INSTANCE");
/**
* Motion component is a container to apply motion effects to its content.
* @group Components
*/
var Motion = class Motion extends BaseComponent {
	$pcMotion = inject(MOTION_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	onAfterViewChecked() {
		const optionsAttrs = this.options()?.root || {};
		this.bindDirectiveInstance.setAttrs({
			...this.ptms(["host", "root"]),
			...optionsAttrs
		});
	}
	_componentStyle = inject(MotionStyle);
	/******************** Inputs ********************/
	/**
	* Whether the element is visible or not.
	* @group Props
	*/
	visible = input(false, ...ngDevMode ? [{ debugName: "visible" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether to mount the element on enter.
	* @group Props
	*/
	mountOnEnter = input(true, ...ngDevMode ? [{ debugName: "mountOnEnter" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether to unmount the element on leave.
	* @group Props
	*/
	unmountOnLeave = input(true, ...ngDevMode ? [{ debugName: "unmountOnLeave" }] : 	/* istanbul ignore next */ []);
	/**
	* The name of the motion. It can be a predefined motion name or a custom one.
	* phases:
	*     [name]-enter
	*     [name]-enter-active
	*     [name]-enter-to
	*     [name]-leave
	*     [name]-leave-active
	*     [name]-leave-to
	* @group Props
	*/
	name = input(void 0, ...ngDevMode ? [{ debugName: "name" }] : 	/* istanbul ignore next */ []);
	/**
	* The type of the motion, valid values 'transition' and 'animation'.
	* @group Props
	*/
	type = input(void 0, ...ngDevMode ? [{ debugName: "type" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether the motion is safe.
	* @group Props
	*/
	safe = input(void 0, ...ngDevMode ? [{ debugName: "safe" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether the motion is disabled.
	* @group Props
	*/
	disabled = input(false, ...ngDevMode ? [{ debugName: "disabled" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether the motion should appear.
	* @group Props
	*/
	appear = input(false, ...ngDevMode ? [{ debugName: "appear" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether the motion should enter.
	* @group Props
	*/
	enter = input(true, ...ngDevMode ? [{ debugName: "enter" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether the motion should leave.
	* @group Props
	*/
	leave = input(true, ...ngDevMode ? [{ debugName: "leave" }] : 	/* istanbul ignore next */ []);
	/**
	* The duration of the motion.
	* @group Props
	*/
	duration = input(void 0, ...ngDevMode ? [{ debugName: "duration" }] : 	/* istanbul ignore next */ []);
	/**
	* The hide strategy of the motion, valid values 'display' and 'visibility'.
	* @group Props
	*/
	hideStrategy = input("display", ...ngDevMode ? [{ debugName: "hideStrategy" }] : 	/* istanbul ignore next */ []);
	/**
	* The enter from class of the motion.
	* @group Props
	*/
	enterFromClass = input(void 0, ...ngDevMode ? [{ debugName: "enterFromClass" }] : 	/* istanbul ignore next */ []);
	/**
	* The enter to class of the motion.
	* @group Props
	*/
	enterToClass = input(void 0, ...ngDevMode ? [{ debugName: "enterToClass" }] : 	/* istanbul ignore next */ []);
	/**
	* The enter active class of the motion.
	* @group Props
	*/
	enterActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "enterActiveClass" }] : 	/* istanbul ignore next */ []);
	/**
	* The leave from class of the motion.
	* @group Props
	*/
	leaveFromClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveFromClass" }] : 	/* istanbul ignore next */ []);
	/**
	* The leave to class of the motion.
	* @group Props
	*/
	leaveToClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveToClass" }] : 	/* istanbul ignore next */ []);
	/**
	* The leave active class of the motion.
	* @group Props
	*/
	leaveActiveClass = input(void 0, ...ngDevMode ? [{ debugName: "leaveActiveClass" }] : 	/* istanbul ignore next */ []);
	/******************** All Inputs ********************/
	/**
	* The motion options.
	* @group Props
	*/
	options = input({}, ...ngDevMode ? [{ debugName: "options" }] : 	/* istanbul ignore next */ []);
	/******************** Outputs ********************/
	/**
	* Callback fired before the enter transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onBeforeEnter = output();
	/**
	* Callback fired when the enter transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onEnter = output();
	/**
	* Callback fired after the enter transition/animation ends.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onAfterEnter = output();
	/**
	* Callback fired when the enter transition/animation is cancelled.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onEnterCancelled = output();
	/**
	* Callback fired before the leave transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onBeforeLeave = output();
	/**
	* Callback fired when the leave transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onLeave = output();
	/**
	* Callback fired after the leave transition/animation ends.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onAfterLeave = output();
	/**
	* Callback fired when the leave transition/animation is cancelled.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onLeaveCancelled = output();
	/******************** Computed ********************/
	motionOptions = computed(() => {
		const options = this.options();
		return {
			name: options.name ?? this.name(),
			type: options.type ?? this.type(),
			safe: options.safe ?? this.safe(),
			disabled: options.disabled ?? this.disabled(),
			appear: false,
			enter: options.enter ?? this.enter(),
			leave: options.leave ?? this.leave(),
			duration: options.duration ?? this.duration(),
			enterClass: {
				from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
				to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
				active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
			},
			leaveClass: {
				from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
				to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
				active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
			},
			onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
			onEnter: options.onEnter ?? this.handleEnter,
			onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
			onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
			onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
			onLeave: options.onLeave ?? this.handleLeave,
			onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
			onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
		};
	}, ...ngDevMode ? [{ debugName: "motionOptions" }] : 	/* istanbul ignore next */ []);
	motion;
	isInitialMount = true;
	cancelled = false;
	destroyed = false;
	rendered = signal(false, ...ngDevMode ? [{ debugName: "rendered" }] : 	/* istanbul ignore next */ []);
	handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
	handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
	handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
	handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
	handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
	handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
	handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
	handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
	constructor() {
		super();
		effect(() => {
			const hideStrategy = this.hideStrategy();
			if (this.isInitialMount) {
				applyHiddenStyles(this.$el, hideStrategy);
				this.rendered.set(this.visible() && this.mountOnEnter() || !this.mountOnEnter());
			} else if (this.visible() && !this.rendered()) {
				applyHiddenStyles(this.$el, hideStrategy);
				this.rendered.set(true);
			}
		});
		effect(() => {
			if (!this.motion) this.motion = tt(this.$el, this.motionOptions());
		});
		afterRenderEffect(async () => {
			if (!this.$el) return;
			const shouldAppear = this.isInitialMount && this.visible() && this.appear();
			const hideStrategy = this.hideStrategy();
			if (this.visible()) {
				await Qt();
				resetStyles(this.$el, hideStrategy);
				if (shouldAppear || !this.isInitialMount) {
					this.applyMotionDuration("enter");
					this.motion?.enter();
				}
			} else if (!this.isInitialMount) {
				await Qt();
				this.applyMotionDuration("leave");
				this.motion?.leave()?.then(async () => {
					if (this.$el && !this.cancelled && !this.visible()) {
						applyHiddenStyles(this.$el, hideStrategy);
						if (this.unmountOnLeave()) {
							await Qt();
							if (!this.cancelled) this.rendered.set(false);
						}
					}
				});
			}
			this.isInitialMount = false;
		});
	}
	applyMotionDuration(phase) {
		const options = untracked(this.motionOptions);
		const ms = $(options.duration, phase);
		if (ms == null || !this.$el) return;
		const el = this.$el;
		const durationValue = `${ms}ms`;
		if (options.type === "transition") el.style.transitionDuration = durationValue;
		else el.style.animationDuration = durationValue;
	}
	onDestroy() {
		this.destroyed = true;
		this.cancelled = true;
		this.motion?.cancel();
		this.motion = void 0;
		resetStyles(this.$el, this.hideStrategy());
		this.$el?.remove();
		this.isInitialMount = true;
	}
	static ɵfac = function Motion_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || Motion)();
	};
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: Motion,
		selectors: [["p-motion"]],
		hostVars: 2,
		hostBindings: function Motion_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassMap(ctx.cx("root"));
		},
		inputs: {
			visible: [1, "visible"],
			mountOnEnter: [1, "mountOnEnter"],
			unmountOnLeave: [1, "unmountOnLeave"],
			name: [1, "name"],
			type: [1, "type"],
			safe: [1, "safe"],
			disabled: [1, "disabled"],
			appear: [1, "appear"],
			enter: [1, "enter"],
			leave: [1, "leave"],
			duration: [1, "duration"],
			hideStrategy: [1, "hideStrategy"],
			enterFromClass: [1, "enterFromClass"],
			enterToClass: [1, "enterToClass"],
			enterActiveClass: [1, "enterActiveClass"],
			leaveFromClass: [1, "leaveFromClass"],
			leaveToClass: [1, "leaveToClass"],
			leaveActiveClass: [1, "leaveActiveClass"],
			options: [1, "options"]
		},
		outputs: {
			onBeforeEnter: "onBeforeEnter",
			onEnter: "onEnter",
			onAfterEnter: "onAfterEnter",
			onEnterCancelled: "onEnterCancelled",
			onBeforeLeave: "onBeforeLeave",
			onLeave: "onLeave",
			onAfterLeave: "onAfterLeave",
			onLeaveCancelled: "onLeaveCancelled"
		},
		features: [
			ɵɵProvidersFeature([
				MotionStyle,
				{
					provide: MOTION_INSTANCE,
					useExisting: Motion
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Motion
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		ngContentSelectors: _c0$1,
		decls: 1,
		vars: 1,
		template: function Motion_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵconditionalCreate(0, Motion_Conditional_0_Template, 1, 0);
			}
			if (rf & 2) ɵɵconditional(ctx.rendered() ? 0 : -1);
		},
		dependencies: [CommonModule, BindModule],
		encapsulation: 2,
		changeDetection: 1
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Motion, [{
		type: Component,
		args: [{
			selector: "p-motion",
			standalone: true,
			imports: [CommonModule, BindModule],
			template: `
        @if (rendered()) {
            <ng-content />
        }
    `,
			providers: [
				MotionStyle,
				{
					provide: MOTION_INSTANCE,
					useExisting: Motion
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Motion
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		visible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "visible",
				required: false
			}]
		}],
		mountOnEnter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "mountOnEnter",
				required: false
			}]
		}],
		unmountOnLeave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "unmountOnLeave",
				required: false
			}]
		}],
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "name",
				required: false
			}]
		}],
		type: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "type",
				required: false
			}]
		}],
		safe: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "safe",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "disabled",
				required: false
			}]
		}],
		appear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appear",
				required: false
			}]
		}],
		enter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enter",
				required: false
			}]
		}],
		leave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leave",
				required: false
			}]
		}],
		duration: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "duration",
				required: false
			}]
		}],
		hideStrategy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "hideStrategy",
				required: false
			}]
		}],
		enterFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterFromClass",
				required: false
			}]
		}],
		enterToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterToClass",
				required: false
			}]
		}],
		enterActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "enterActiveClass",
				required: false
			}]
		}],
		leaveFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveFromClass",
				required: false
			}]
		}],
		leaveToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveToClass",
				required: false
			}]
		}],
		leaveActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "leaveActiveClass",
				required: false
			}]
		}],
		options: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "options",
				required: false
			}]
		}],
		onBeforeEnter: [{
			type: Output,
			args: ["onBeforeEnter"]
		}],
		onEnter: [{
			type: Output,
			args: ["onEnter"]
		}],
		onAfterEnter: [{
			type: Output,
			args: ["onAfterEnter"]
		}],
		onEnterCancelled: [{
			type: Output,
			args: ["onEnterCancelled"]
		}],
		onBeforeLeave: [{
			type: Output,
			args: ["onBeforeLeave"]
		}],
		onLeave: [{
			type: Output,
			args: ["onLeave"]
		}],
		onAfterLeave: [{
			type: Output,
			args: ["onAfterLeave"]
		}],
		onLeaveCancelled: [{
			type: Output,
			args: ["onLeaveCancelled"]
		}]
	});
})();
var MOTION_DIRECTIVE_INSTANCE = new InjectionToken("MOTION_DIRECTIVE_INSTANCE");
/**
* Motion Directive is directive to apply motion effects to elements.
* @group Components
*/
var MotionDirective = class MotionDirective extends BaseComponent {
	$pcMotionDirective = inject(MOTION_DIRECTIVE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	/******************** Inputs ********************/
	/**
	* Whether the element is visible or not.
	* @group Props
	*/
	visible = input(false, {
		...ngDevMode ? { debugName: "visible" } : 		/* istanbul ignore next */ {},
		alias: "pMotion"
	});
	/**
	* The name of the motion. It can be a predefined motion name or a custom one.
	* phases:
	*     [name]-enter
	*     [name]-enter-active
	*     [name]-enter-to
	*     [name]-leave
	*     [name]-leave-active
	*     [name]-leave-to
	* @group Props
	*/
	name = input(void 0, {
		...ngDevMode ? { debugName: "name" } : 		/* istanbul ignore next */ {},
		alias: "pMotionName"
	});
	/**
	* The type of the motion, valid values 'transition' and 'animation'.
	* @group Props
	*/
	type = input(void 0, {
		...ngDevMode ? { debugName: "type" } : 		/* istanbul ignore next */ {},
		alias: "pMotionType"
	});
	/**
	* Whether the motion is safe.
	* @group Props
	*/
	safe = input(void 0, {
		...ngDevMode ? { debugName: "safe" } : 		/* istanbul ignore next */ {},
		alias: "pMotionSafe"
	});
	/**
	* Whether the motion is disabled.
	* @group Props
	*/
	disabled = input(false, {
		...ngDevMode ? { debugName: "disabled" } : 		/* istanbul ignore next */ {},
		alias: "pMotionDisabled"
	});
	/**
	* Whether the motion should appear.
	* @group Props
	*/
	appear = input(false, {
		...ngDevMode ? { debugName: "appear" } : 		/* istanbul ignore next */ {},
		alias: "pMotionAppear"
	});
	/**
	* Whether the motion should enter.
	* @group Props
	*/
	enter = input(true, {
		...ngDevMode ? { debugName: "enter" } : 		/* istanbul ignore next */ {},
		alias: "pMotionEnter"
	});
	/**
	* Whether the motion should leave.
	* @group Props
	*/
	leave = input(true, {
		...ngDevMode ? { debugName: "leave" } : 		/* istanbul ignore next */ {},
		alias: "pMotionLeave"
	});
	/**
	* The duration of the motion.
	* @group Props
	*/
	duration = input(void 0, {
		...ngDevMode ? { debugName: "duration" } : 		/* istanbul ignore next */ {},
		alias: "pMotionDuration"
	});
	/**
	* The hide strategy of the motion, valid values 'display' and 'visibility'.
	* @group Props
	*/
	hideStrategy = input("display", {
		...ngDevMode ? { debugName: "hideStrategy" } : 		/* istanbul ignore next */ {},
		alias: "pMotionHideStrategy"
	});
	/**
	* The enter from class of the motion.
	* @group Props
	*/
	enterFromClass = input(void 0, {
		...ngDevMode ? { debugName: "enterFromClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionEnterFromClass"
	});
	/**
	* The enter to class of the motion.
	* @group Props
	*/
	enterToClass = input(void 0, {
		...ngDevMode ? { debugName: "enterToClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionEnterToClass"
	});
	/**
	* The enter active class of the motion.
	* @group Props
	*/
	enterActiveClass = input(void 0, {
		...ngDevMode ? { debugName: "enterActiveClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionEnterActiveClass"
	});
	/**
	* The leave from class of the motion.
	* @group Props
	*/
	leaveFromClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveFromClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionLeaveFromClass"
	});
	/**
	* The leave to class of the motion.
	* @group Props
	*/
	leaveToClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveToClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionLeaveToClass"
	});
	/**
	* The leave active class of the motion.
	* @group Props
	*/
	leaveActiveClass = input(void 0, {
		...ngDevMode ? { debugName: "leaveActiveClass" } : 		/* istanbul ignore next */ {},
		alias: "pMotionLeaveActiveClass"
	});
	/******************** All Inputs ********************/
	/**
	* The motion options.
	* @group Props
	*/
	options = input({}, {
		...ngDevMode ? { debugName: "options" } : 		/* istanbul ignore next */ {},
		alias: "pMotionOptions"
	});
	/******************** Outputs ********************/
	/**
	* Callback fired before the enter transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onBeforeEnter = output({ alias: "pMotionOnBeforeEnter" });
	/**
	* Callback fired when the enter transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onEnter = output({ alias: "pMotionOnEnter" });
	/**
	* Callback fired after the enter transition/animation ends.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onAfterEnter = output({ alias: "pMotionOnAfterEnter" });
	/**
	* Callback fired when the enter transition/animation is cancelled.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onEnterCancelled = output({ alias: "pMotionOnEnterCancelled" });
	/**
	* Callback fired before the leave transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onBeforeLeave = output({ alias: "pMotionOnBeforeLeave" });
	/**
	* Callback fired when the leave transition/animation starts.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onLeave = output({ alias: "pMotionOnLeave" });
	/**
	* Callback fired after the leave transition/animation ends.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onAfterLeave = output({ alias: "pMotionOnAfterLeave" });
	/**
	* Callback fired when the leave transition/animation is cancelled.
	* @param {MotionEvent} [event] - The event object containing details about the motion.
	* @param {Element} event.element - The element being transitioned/animated.
	* @group Emits
	*/
	onLeaveCancelled = output({ alias: "pMotionOnLeaveCancelled" });
	/******************** Computed ********************/
	motionOptions = computed(() => {
		const options = this.options() ?? {};
		return {
			name: options.name ?? this.name(),
			type: options.type ?? this.type(),
			safe: options.safe ?? this.safe(),
			disabled: options.disabled ?? this.disabled(),
			appear: false,
			enter: options.enter ?? this.enter(),
			leave: options.leave ?? this.leave(),
			duration: options.duration ?? this.duration(),
			enterClass: {
				from: options.enterClass?.from ?? (!options.name ? this.enterFromClass() : void 0),
				to: options.enterClass?.to ?? (!options.name ? this.enterToClass() : void 0),
				active: options.enterClass?.active ?? (!options.name ? this.enterActiveClass() : void 0)
			},
			leaveClass: {
				from: options.leaveClass?.from ?? (!options.name ? this.leaveFromClass() : void 0),
				to: options.leaveClass?.to ?? (!options.name ? this.leaveToClass() : void 0),
				active: options.leaveClass?.active ?? (!options.name ? this.leaveActiveClass() : void 0)
			},
			onBeforeEnter: options.onBeforeEnter ?? this.handleBeforeEnter,
			onEnter: options.onEnter ?? this.handleEnter,
			onAfterEnter: options.onAfterEnter ?? this.handleAfterEnter,
			onEnterCancelled: options.onEnterCancelled ?? this.handleEnterCancelled,
			onBeforeLeave: options.onBeforeLeave ?? this.handleBeforeLeave,
			onLeave: options.onLeave ?? this.handleLeave,
			onAfterLeave: options.onAfterLeave ?? this.handleAfterLeave,
			onLeaveCancelled: options.onLeaveCancelled ?? this.handleLeaveCancelled
		};
	}, ...ngDevMode ? [{ debugName: "motionOptions" }] : 	/* istanbul ignore next */ []);
	motion;
	isInitialMount = true;
	cancelled = false;
	destroyed = false;
	handleBeforeEnter = (event) => !this.destroyed && this.onBeforeEnter.emit(event);
	handleEnter = (event) => !this.destroyed && this.onEnter.emit(event);
	handleAfterEnter = (event) => !this.destroyed && this.onAfterEnter.emit(event);
	handleEnterCancelled = (event) => !this.destroyed && this.onEnterCancelled.emit(event);
	handleBeforeLeave = (event) => !this.destroyed && this.onBeforeLeave.emit(event);
	handleLeave = (event) => !this.destroyed && this.onLeave.emit(event);
	handleAfterLeave = (event) => !this.destroyed && this.onAfterLeave.emit(event);
	handleLeaveCancelled = (event) => !this.destroyed && this.onLeaveCancelled.emit(event);
	constructor() {
		super();
		effect(() => {
			if (!this.motion) this.motion = tt(this.$el, this.motionOptions());
		});
		afterRenderEffect(() => {
			if (!this.$el) return;
			const shouldAppear = this.isInitialMount && this.visible() && this.appear();
			const hideStrategy = this.hideStrategy();
			if (this.visible()) {
				resetStyles(this.$el, hideStrategy);
				if (shouldAppear || !this.isInitialMount) {
					this.applyMotionDuration("enter");
					this.motion?.enter();
				}
			} else if (!this.isInitialMount) {
				this.applyMotionDuration("leave");
				this.motion?.leave()?.then(() => {
					if (this.$el && !this.cancelled && !this.visible()) applyHiddenStyles(this.$el, hideStrategy);
				});
			} else applyHiddenStyles(this.$el, hideStrategy);
			this.isInitialMount = false;
		});
	}
	applyMotionDuration(phase) {
		const options = untracked(this.motionOptions);
		const ms = $(options.duration, phase);
		if (ms == null || !this.$el) return;
		const el = this.$el;
		const durationValue = `${ms}ms`;
		if (options.type === "transition") el.style.transitionDuration = durationValue;
		else el.style.animationDuration = durationValue;
	}
	onDestroy() {
		this.destroyed = true;
		this.cancelled = true;
		this.motion?.cancel();
		this.motion = void 0;
		resetStyles(this.$el, this.hideStrategy());
		this.$el?.remove();
		this.isInitialMount = true;
	}
	static ɵfac = function MotionDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MotionDirective)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: MotionDirective,
		selectors: [[
			"",
			"pMotion",
			""
		]],
		inputs: {
			visible: [
				1,
				"pMotion",
				"visible"
			],
			name: [
				1,
				"pMotionName",
				"name"
			],
			type: [
				1,
				"pMotionType",
				"type"
			],
			safe: [
				1,
				"pMotionSafe",
				"safe"
			],
			disabled: [
				1,
				"pMotionDisabled",
				"disabled"
			],
			appear: [
				1,
				"pMotionAppear",
				"appear"
			],
			enter: [
				1,
				"pMotionEnter",
				"enter"
			],
			leave: [
				1,
				"pMotionLeave",
				"leave"
			],
			duration: [
				1,
				"pMotionDuration",
				"duration"
			],
			hideStrategy: [
				1,
				"pMotionHideStrategy",
				"hideStrategy"
			],
			enterFromClass: [
				1,
				"pMotionEnterFromClass",
				"enterFromClass"
			],
			enterToClass: [
				1,
				"pMotionEnterToClass",
				"enterToClass"
			],
			enterActiveClass: [
				1,
				"pMotionEnterActiveClass",
				"enterActiveClass"
			],
			leaveFromClass: [
				1,
				"pMotionLeaveFromClass",
				"leaveFromClass"
			],
			leaveToClass: [
				1,
				"pMotionLeaveToClass",
				"leaveToClass"
			],
			leaveActiveClass: [
				1,
				"pMotionLeaveActiveClass",
				"leaveActiveClass"
			],
			options: [
				1,
				"pMotionOptions",
				"options"
			]
		},
		outputs: {
			onBeforeEnter: "pMotionOnBeforeEnter",
			onEnter: "pMotionOnEnter",
			onAfterEnter: "pMotionOnAfterEnter",
			onEnterCancelled: "pMotionOnEnterCancelled",
			onBeforeLeave: "pMotionOnBeforeLeave",
			onLeave: "pMotionOnLeave",
			onAfterLeave: "pMotionOnAfterLeave",
			onLeaveCancelled: "pMotionOnLeaveCancelled"
		},
		features: [ɵɵProvidersFeature([
			MotionStyle,
			{
				provide: MOTION_DIRECTIVE_INSTANCE,
				useExisting: MotionDirective
			},
			{
				provide: PARENT_INSTANCE,
				useExisting: MotionDirective
			}
		]), ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionDirective, [{
		type: Directive,
		args: [{
			selector: "[pMotion]",
			standalone: true,
			providers: [
				MotionStyle,
				{
					provide: MOTION_DIRECTIVE_INSTANCE,
					useExisting: MotionDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: MotionDirective
				}
			]
		}]
	}], () => [], {
		visible: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotion",
				required: false
			}]
		}],
		name: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionName",
				required: false
			}]
		}],
		type: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionType",
				required: false
			}]
		}],
		safe: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionSafe",
				required: false
			}]
		}],
		disabled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionDisabled",
				required: false
			}]
		}],
		appear: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionAppear",
				required: false
			}]
		}],
		enter: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnter",
				required: false
			}]
		}],
		leave: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeave",
				required: false
			}]
		}],
		duration: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionDuration",
				required: false
			}]
		}],
		hideStrategy: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionHideStrategy",
				required: false
			}]
		}],
		enterFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterFromClass",
				required: false
			}]
		}],
		enterToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterToClass",
				required: false
			}]
		}],
		enterActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionEnterActiveClass",
				required: false
			}]
		}],
		leaveFromClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveFromClass",
				required: false
			}]
		}],
		leaveToClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveToClass",
				required: false
			}]
		}],
		leaveActiveClass: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionLeaveActiveClass",
				required: false
			}]
		}],
		options: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pMotionOptions",
				required: false
			}]
		}],
		onBeforeEnter: [{
			type: Output,
			args: ["pMotionOnBeforeEnter"]
		}],
		onEnter: [{
			type: Output,
			args: ["pMotionOnEnter"]
		}],
		onAfterEnter: [{
			type: Output,
			args: ["pMotionOnAfterEnter"]
		}],
		onEnterCancelled: [{
			type: Output,
			args: ["pMotionOnEnterCancelled"]
		}],
		onBeforeLeave: [{
			type: Output,
			args: ["pMotionOnBeforeLeave"]
		}],
		onLeave: [{
			type: Output,
			args: ["pMotionOnLeave"]
		}],
		onAfterLeave: [{
			type: Output,
			args: ["pMotionOnAfterLeave"]
		}],
		onLeaveCancelled: [{
			type: Output,
			args: ["pMotionOnLeaveCancelled"]
		}]
	});
})();
var MotionModule = class MotionModule {
	static ɵfac = function MotionModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || MotionModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: MotionModule,
		imports: [Motion, MotionDirective],
		exports: [Motion, MotionDirective]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [Motion] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MotionModule, [{
		type: NgModule,
		args: [{
			imports: [Motion, MotionDirective],
			exports: [Motion, MotionDirective]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@primeuix/styles/dist/drawer/index.mjs
var style$1 = "\n    .p-drawer {\n        display: flex;\n        flex-direction: column;\n        transform: translate3d(0px, 0px, 0px);\n        position: relative;\n        transition: transform 0.3s;\n        background: dt('drawer.background');\n        color: dt('drawer.color');\n        border-style: solid;\n        border-color: dt('drawer.border.color');\n        box-shadow: dt('drawer.shadow');\n    }\n\n    .p-drawer-content {\n        overflow-y: auto;\n        flex-grow: 1;\n        padding: dt('drawer.content.padding');\n    }\n\n    .p-drawer-header {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-shrink: 0;\n        padding: dt('drawer.header.padding');\n    }\n\n    .p-drawer-footer {\n        padding: dt('drawer.footer.padding');\n    }\n\n    .p-drawer-title {\n        font-weight: dt('drawer.title.font.weight');\n        font-size: dt('drawer.title.font.size');\n    }\n\n    .p-drawer-full .p-drawer {\n        transition: none;\n        transform: none;\n        width: 100vw !important;\n        height: 100vh !important;\n        max-height: 100%;\n        top: 0px !important;\n        left: 0px !important;\n        border-width: 1px;\n    }\n\n    .p-drawer-left .p-drawer-enter-active {\n        animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    .p-drawer-left .p-drawer-leave-active {\n        animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n\n    .p-drawer-right .p-drawer-enter-active {\n        animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    .p-drawer-right .p-drawer-leave-active {\n        animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n\n    .p-drawer-top .p-drawer-enter-active {\n        animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    .p-drawer-top .p-drawer-leave-active {\n        animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n\n    .p-drawer-bottom .p-drawer-enter-active {\n        animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    .p-drawer-bottom .p-drawer-leave-active {\n        animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n\n    .p-drawer-full .p-drawer-enter-active {\n        animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    .p-drawer-full .p-drawer-leave-active {\n        animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);\n    }\n    \n    .p-drawer-left .p-drawer {\n        width: 20rem;\n        height: 100%;\n        border-inline-end-width: 1px;\n    }\n\n    .p-drawer-right .p-drawer {\n        width: 20rem;\n        height: 100%;\n        border-inline-start-width: 1px;\n    }\n\n    .p-drawer-top .p-drawer {\n        height: 10rem;\n        width: 100%;\n        border-block-end-width: 1px;\n    }\n\n    .p-drawer-bottom .p-drawer {\n        height: 10rem;\n        width: 100%;\n        border-block-start-width: 1px;\n    }\n\n    .p-drawer-left .p-drawer-content,\n    .p-drawer-right .p-drawer-content,\n    .p-drawer-top .p-drawer-content,\n    .p-drawer-bottom .p-drawer-content {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-drawer-open {\n        display: flex;\n    }\n\n    .p-drawer-mask:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    @keyframes p-animate-drawer-enter-left {\n        from {\n            transform: translate3d(-100%, 0px, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-leave-left {\n        to {\n            transform: translate3d(-100%, 0px, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-enter-right {\n        from {\n            transform: translate3d(100%, 0px, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-leave-right {\n        to {\n            transform: translate3d(100%, 0px, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-enter-top {\n        from {\n            transform: translate3d(0px, -100%, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-leave-top {\n        to {\n            transform: translate3d(0px, -100%, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-enter-bottom {\n        from {\n            transform: translate3d(0px, 100%, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-leave-bottom {\n        to {\n            transform: translate3d(0px, 100%, 0px);\n        }\n    }\n\n    @keyframes p-animate-drawer-enter-full {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-drawer-leave-full {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";
//#endregion
//#region node_modules/primeng/fesm2022/primeng-drawer.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["content"];
var _c3 = ["closeicon"];
var _c4 = ["headless"];
var _c5 = ["container"];
var _c6 = ["closeButton"];
var _c7 = ["*"];
function Drawer_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function Drawer_Conditional_0_Conditional_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, Drawer_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 4);
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵproperty("ngTemplateOutlet", ctx_r1.headlessTemplate || ctx_r1._headlessTemplate);
	}
}
function Drawer_Conditional_0_Conditional_3_ng_container_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function Drawer_Conditional_0_Conditional_3_div_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 9);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(3);
		ɵɵclassMap(ctx_r1.cx("title"));
		ɵɵproperty("pBind", ctx_r1.ptm("title"));
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r1.header);
	}
}
function Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1__svg_svg_0_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵnamespaceSVG();
		ɵɵelement(0, "svg", 12);
	}
	if (rf & 2) ɵɵattribute("data-pc-section", "closeicon");
}
function Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_1_ng_template_0_Template(rf, ctx) {}
function Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_1_ng_template_0_Template, 0, 0, "ng-template");
}
function Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1__svg_svg_0_Template, 1, 1, "svg", 11)(1, Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_1_Template, 1, 0, null, 4);
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(4);
		ɵɵproperty("ngIf", !ctx_r1.closeIconTemplate && !ctx_r1._closeIconTemplate);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r1.closeIconTemplate || ctx_r1._closeIconTemplate);
	}
}
function Drawer_Conditional_0_Conditional_3_p_button_3_Template(rf, ctx) {
	if (rf & 1) {
		const _r3 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "p-button", 10);
		ɵɵlistener("onClick", function Drawer_Conditional_0_Conditional_3_p_button_3_Template_p_button_onClick_0_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext(3).close($event));
		})("keydown.enter", function Drawer_Conditional_0_Conditional_3_p_button_3_Template_p_button_keydown_enter_0_listener($event) {
			ɵɵrestoreView(_r3);
			return ɵɵresetView(ɵɵnextContext(3).close($event));
		});
		ɵɵtemplate(1, Drawer_Conditional_0_Conditional_3_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(3);
		ɵɵproperty("pt", ctx_r1.ptm("pcCloseButton"))("ngClass", ctx_r1.cx("pcCloseButton"))("buttonProps", ctx_r1.closeButtonProps)("ariaLabel", ctx_r1.ariaCloseLabel)("unstyled", ctx_r1.unstyled());
		ɵɵattribute("data-pc-group-section", "iconcontainer");
	}
}
function Drawer_Conditional_0_Conditional_3_ng_container_6_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function Drawer_Conditional_0_Conditional_3_ng_container_7_ng_container_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function Drawer_Conditional_0_Conditional_3_ng_container_7_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵelementStart(1, "div", 5);
		ɵɵtemplate(2, Drawer_Conditional_0_Conditional_3_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 4);
		ɵɵelementEnd();
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(3);
		ɵɵadvance();
		ɵɵproperty("pBind", ctx_r1.ptm("footer"))("ngClass", ctx_r1.cx("footer"));
		ɵɵattribute("data-pc-section", "footer");
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
	}
}
function Drawer_Conditional_0_Conditional_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "div", 5);
		ɵɵtemplate(1, Drawer_Conditional_0_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 4)(2, Drawer_Conditional_0_Conditional_3_div_2_Template, 2, 4, "div", 6)(3, Drawer_Conditional_0_Conditional_3_p_button_3_Template, 3, 6, "p-button", 7);
		ɵɵelementEnd();
		ɵɵelementStart(4, "div", 5);
		ɵɵprojection(5);
		ɵɵtemplate(6, Drawer_Conditional_0_Conditional_3_ng_container_6_Template, 1, 0, "ng-container", 4);
		ɵɵelementEnd();
		ɵɵtemplate(7, Drawer_Conditional_0_Conditional_3_ng_container_7_Template, 3, 4, "ng-container", 8);
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext(2);
		ɵɵproperty("pBind", ctx_r1.ptm("header"))("ngClass", ctx_r1.cx("header"));
		ɵɵattribute("data-pc-section", "header");
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate);
		ɵɵadvance();
		ɵɵproperty("ngIf", ctx_r1.header);
		ɵɵadvance();
		ɵɵproperty("ngIf", ctx_r1.showCloseIcon && ctx_r1.closable);
		ɵɵadvance();
		ɵɵproperty("pBind", ctx_r1.ptm("content"))("ngClass", ctx_r1.cx("content"));
		ɵɵattribute("data-pc-section", "content");
		ɵɵadvance(2);
		ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate);
		ɵɵadvance();
		ɵɵproperty("ngIf", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
	}
}
function Drawer_Conditional_0_Template(rf, ctx) {
	if (rf & 1) {
		const _r1 = ɵɵgetCurrentView();
		ɵɵelementStart(0, "div", 3, 0);
		ɵɵlistener("pMotionOnBeforeEnter", function Drawer_Conditional_0_Template_div_pMotionOnBeforeEnter_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onBeforeEnter($event));
		})("pMotionOnAfterLeave", function Drawer_Conditional_0_Template_div_pMotionOnAfterLeave_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onAfterLeave($event));
		})("keydown", function Drawer_Conditional_0_Template_div_keydown_0_listener($event) {
			ɵɵrestoreView(_r1);
			return ɵɵresetView(ɵɵnextContext().onKeyDown($event));
		});
		ɵɵconditionalCreate(2, Drawer_Conditional_0_Conditional_2_Template, 1, 1, "ng-container")(3, Drawer_Conditional_0_Conditional_3_Template, 8, 11);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r1 = ɵɵnextContext();
		ɵɵstyleMap(ctx_r1.style);
		ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
		ɵɵproperty("pBind", ctx_r1.ptm("root"))("pMotion", ctx_r1.visible)("pMotionAppear", true)("pMotionEnterActiveClass", ctx_r1.$enterAnimation())("pMotionLeaveActiveClass", ctx_r1.$leaveAnimation())("pMotionOptions", ctx_r1.computedMotionOptions());
		ɵɵattribute("data-p", ctx_r1.dataP)("data-p-open", ctx_r1.visible);
		ɵɵadvance(2);
		ɵɵconditional(ctx_r1.headlessTemplate || ctx_r1._headlessTemplate ? 2 : 3);
	}
}
var style = `
${style$1}

/** For PrimeNG **/
.p-drawer {
    position: fixed;
}

.p-drawer-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    border-inline-end-width: 1px;
}

.p-drawer-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    border-inline-start-width: 1px;
}

.p-drawer-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-end-width: 1px;
}

.p-drawer-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
    border-block-start-width: 1px;
}

.p-drawer-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}

/* Animations */
.p-drawer-enter-left {
    animation: p-animate-drawer-enter-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-left {
    animation: p-animate-drawer-leave-left 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-right {
    animation: p-animate-drawer-enter-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-right {
    animation: p-animate-drawer-leave-right 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-top {
    animation: p-animate-drawer-enter-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-top {
    animation: p-animate-drawer-leave-top 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-bottom {
    animation: p-animate-drawer-enter-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-bottom {
    animation: p-animate-drawer-leave-bottom 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-enter-full {
    animation: p-animate-drawer-enter-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}

.p-drawer-leave-full {
    animation: p-animate-drawer-leave-full 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
`;
var classes = {
	mask: ({ instance }) => [
		"p-drawer-mask",
		{ [`p-overlay-mask p-overlay-mask-enter-active`]: instance.modal },
		{ "p-drawer-full": instance.fullScreen() }
	],
	root: ({ instance }) => [
		"p-drawer p-component",
		{
			"p-drawer-full": instance.fullScreen(),
			"p-drawer-open": instance.visible
		},
		`p-drawer-${instance.position()}`
	],
	header: "p-drawer-header",
	title: "p-drawer-title",
	pcCloseButton: "p-drawer-close-button",
	content: "p-drawer-content",
	footer: "p-drawer-footer"
};
var DrawerStyle = class DrawerStyle extends BaseStyle {
	name = "drawer";
	style = style;
	classes = classes;
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵDrawerStyle_BaseFactory;
		return function DrawerStyle_Factory(__ngFactoryType__) {
			return (ɵDrawerStyle_BaseFactory || (ɵDrawerStyle_BaseFactory = ɵɵgetInheritedFactory(DrawerStyle)))(__ngFactoryType__ || DrawerStyle);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: DrawerStyle,
		factory: DrawerStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerStyle, [{ type: Injectable }], null, null);
})();
/**
*
* Drawer is a panel component displayed as an overlay at the edges of the screen.
*
* [Live Demo](https://www.primeng.org/drawer)
*
* @module drawerstyle
*
*/
var DrawerClasses;
(function(DrawerClasses) {
	/**
	* Class name of the mask element
	*/
	DrawerClasses["mask"] = "p-drawer-mask";
	/**
	* Class name of the root element
	*/
	DrawerClasses["root"] = "p-drawer";
	/**
	* Class name of the header element
	*/
	DrawerClasses["header"] = "p-drawer-header";
	/**
	* Class name of the title element
	*/
	DrawerClasses["title"] = "p-drawer-title";
	/**
	* Class name of the close button element
	*/
	DrawerClasses["pcCloseButton"] = "p-drawer-close-button";
	/**
	* Class name of the content element
	*/
	DrawerClasses["content"] = "p-drawer-content";
})(DrawerClasses || (DrawerClasses = {}));
var DRAWER_INSTANCE = new InjectionToken("DRAWER_INSTANCE");
/**
* Sidebar is a panel component displayed as an overlay at the edges of the screen.
* @group Components
*/
var Drawer = class Drawer extends BaseComponent {
	componentName = "Drawer";
	$pcDrawer = inject(DRAWER_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
	}
	/**
	* Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
	* @defaultValue 'self'
	* @group Props
	*/
	appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : 	/* istanbul ignore next */ []);
	/**
	* The motion options.
	* @group Props
	*/
	motionOptions = input(void 0, ...ngDevMode ? [{ debugName: "motionOptions" }] : 	/* istanbul ignore next */ []);
	computedMotionOptions = computed(() => {
		return {
			...this.ptm("motion"),
			...this.motionOptions()
		};
	}, ...ngDevMode ? [{ debugName: "computedMotionOptions" }] : 	/* istanbul ignore next */ []);
	/**
	* Whether to block scrolling of the document when drawer is active.
	* @group Props
	*/
	blockScroll = false;
	/**
	* Inline style of the component.
	* @group Props
	*/
	style;
	/**
	* Style class of the component.
	* @group Props
	*/
	styleClass;
	/**
	* Aria label of the close icon.
	* @group Props
	*/
	ariaCloseLabel;
	/**
	* Whether to automatically manage layering.
	* @group Props
	*/
	autoZIndex = true;
	/**
	* Base zIndex value to use in layering.
	* @group Props
	*/
	baseZIndex = 0;
	/**
	* Whether an overlay mask is displayed behind the drawer.
	* @group Props
	*/
	modal = true;
	/**
	* Used to pass all properties of the ButtonProps to the Button component.
	* @group Props
	*/
	closeButtonProps = {
		severity: "secondary",
		text: true,
		rounded: true
	};
	/**
	* Whether to dismiss drawer on click of the mask.
	* @group Props
	*/
	dismissible = true;
	/**
	* Whether to display the close icon.
	* @group Props
	* @deprecated use 'closable' instead.
	*/
	showCloseIcon = true;
	/**
	* Specifies if pressing escape key should hide the drawer.
	* @group Props
	*/
	closeOnEscape = true;
	/**
	* Transition options of the animation.
	* @group Props
	* @deprecated since v21.0.0. Use `motionOptions` instead.
	*/
	transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
	/**
	* The visible property is an input that determines the visibility of the component.
	* @defaultValue false
	* @group Props
	*/
	get visible() {
		return this._visible ?? false;
	}
	set visible(value) {
		this._visible = value;
		if (this._visible && !this.modalVisible) this.modalVisible = true;
	}
	/**
	* Specifies the position of the drawer, valid values are "left", "right", "bottom" and "top".
	* @defaultValue 'left'
	* @group Props
	*/
	position = input("left", ...ngDevMode ? [{ debugName: "position" }] : 	/* istanbul ignore next */ []);
	/**
	* Adds a close icon to the header to hide the dialog.
	* @defaultValue false
	* @group Props
	*/
	fullScreen = input(false, ...ngDevMode ? [{ debugName: "fullScreen" }] : 	/* istanbul ignore next */ []);
	$enterAnimation = computed(() => this.fullScreen() ? "p-drawer-enter-full" : `p-drawer-enter-${this.position()}`, ...ngDevMode ? [{ debugName: "$enterAnimation" }] : 	/* istanbul ignore next */ []);
	$leaveAnimation = computed(() => this.fullScreen() ? "p-drawer-leave-full" : `p-drawer-leave-${this.position()}`, ...ngDevMode ? [{ debugName: "$leaveAnimation" }] : 	/* istanbul ignore next */ []);
	/**
	* Title content of the dialog.
	* @group Props
	*/
	header;
	/**
	* Style of the mask.
	* @group Props
	*/
	maskStyle;
	/**
	* Whether to display close button.
	* @group Props
	* @defaultValue true
	*/
	closable = true;
	/**
	* Callback to invoke when dialog is shown.
	* @group Emits
	*/
	onShow = new EventEmitter();
	/**
	* Callback to invoke when dialog is hidden.
	* @group Emits
	*/
	onHide = new EventEmitter();
	/**
	* Callback to invoke when dialog visibility is changed.
	* @param {boolean} value - Visible value.
	* @group Emits
	*/
	visibleChange = new EventEmitter();
	containerViewChild;
	closeButtonViewChild;
	initialized;
	_visible;
	_position = "left";
	_fullScreen = false;
	modalVisible = false;
	container;
	mask;
	maskClickListener;
	documentEscapeListener;
	animationEndListener;
	_componentStyle = inject(DrawerStyle);
	onAfterViewInit() {
		this.initialized = true;
	}
	/**
	* Custom header template.
	* @group Templates
	*/
	headerTemplate;
	/**
	* Custom footer template.
	* @group Templates
	*/
	footerTemplate;
	/**
	* Custom content template.
	* @group Templates
	*/
	contentTemplate;
	/**
	* Custom close icon template.
	* @group Templates
	*/
	closeIconTemplate;
	/**
	* Custom headless template to replace the entire drawer content.
	* @group Templates
	*/
	headlessTemplate;
	$appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : 	/* istanbul ignore next */ []);
	_headerTemplate;
	_footerTemplate;
	_contentTemplate;
	_closeIconTemplate;
	_headlessTemplate;
	templates;
	onAfterContentInit() {
		this.templates?.forEach((item) => {
			switch (item.getType()) {
				case "content":
					this._contentTemplate = item.template;
					break;
				case "header":
					this._headerTemplate = item.template;
					break;
				case "footer":
					this._footerTemplate = item.template;
					break;
				case "closeicon":
					this._closeIconTemplate = item.template;
					break;
				case "headless":
					this._headlessTemplate = item.template;
					break;
				default:
					this._contentTemplate = item.template;
					break;
			}
		});
	}
	onKeyDown(event) {
		if (event.code === "Escape") this.hide(false);
	}
	show() {
		this.container?.setAttribute(this.$attrSelector, "");
		if (this.autoZIndex) zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
		if (this.modal) this.enableModality();
		this.onShow.emit({});
		this.visibleChange.emit(true);
	}
	hide(emit = true) {
		if (emit) this.onHide.emit({});
		if (this.modal) this.disableModality();
	}
	close(event) {
		this.hide();
		this.visibleChange.emit(false);
		this.cd.markForCheck();
		event.preventDefault();
	}
	enableModality() {
		const activeDrawers = this.document.querySelectorAll("[data-p-open=\"true\"]");
		const activeDrawersLength = activeDrawers.length;
		const zIndex = activeDrawersLength == 1 ? String(parseInt(this.container.style.zIndex) - 1) : String(parseInt(activeDrawers[activeDrawersLength - 1].style.zIndex) - 1);
		if (!this.mask) {
			this.mask = this.renderer.createElement("div");
			if (this.mask) {
				const style = `z-index: ${zIndex};${this.getMaskStyle()}`;
				te$1(this.mask, "style", style);
				te$1(this.mask, "data-p", this.dataP);
				P$1(this.mask, this.cx("mask"));
			}
			if (this.dismissible) this.maskClickListener = this.renderer.listen(this.mask, "click", (event) => {
				if (this.dismissible) this.close(event);
			});
			this.renderer.appendChild(this.document.body, this.mask);
			if (this.blockScroll) blockBodyScroll();
		}
	}
	getMaskStyle() {
		return this.maskStyle ? Object.entries(this.maskStyle).map(([key, value]) => `${key}: ${value}`).join("; ") : "";
	}
	disableModality() {
		if (this.mask) {
			!this.$unstyled() && M(this.mask, "p-overlay-mask-enter-active");
			!this.$unstyled() && P$1(this.mask, "p-overlay-mask-leave-active");
			this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyModal.bind(this));
		}
	}
	destroyModal() {
		this.unbindMaskClickListener();
		if (this.mask) this.renderer.removeChild(this.document.body, this.mask);
		if (this.blockScroll) unblockBodyScroll();
		this.unbindAnimationEndListener();
		this.mask = null;
	}
	onBeforeEnter(event) {
		this.container = event.element;
		this.appendContainer();
		this.show();
		if (this.closeOnEscape) this.bindDocumentEscapeListener();
	}
	onAfterLeave() {
		this.hide(false);
		zindexutils.clear(this.container);
		this.unbindGlobalListeners();
		this.modalVisible = false;
		this.container = null;
	}
	appendContainer() {
		if (this.$appendTo() && this.$appendTo() !== "self") if (this.$appendTo() === "body") ut(this.document.body, this.container);
		else ut(this.$appendTo(), this.container);
	}
	bindDocumentEscapeListener() {
		const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
		this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
			if (event.which == 27) {
				if (parseInt(this.container?.style.zIndex) === zindexutils.get(this.container)) this.close(event);
			}
		});
	}
	unbindDocumentEscapeListener() {
		if (this.documentEscapeListener) {
			this.documentEscapeListener();
			this.documentEscapeListener = null;
		}
	}
	unbindMaskClickListener() {
		if (this.maskClickListener) {
			this.maskClickListener();
			this.maskClickListener = null;
		}
	}
	unbindGlobalListeners() {
		this.unbindMaskClickListener();
		this.unbindDocumentEscapeListener();
	}
	unbindAnimationEndListener() {
		if (this.animationEndListener && this.mask) {
			this.animationEndListener();
			this.animationEndListener = null;
		}
	}
	onDestroy() {
		this.initialized = false;
		if (this.visible && this.modal) this.destroyModal();
		if (this.$appendTo() && this.container) this.renderer.appendChild(this.el.nativeElement, this.container);
		if (this.container && this.autoZIndex) zindexutils.clear(this.container);
		this.container = null;
		this.unbindGlobalListeners();
		this.unbindAnimationEndListener();
	}
	get dataP() {
		return this.cn({
			"full-screen": this.position() === "full",
			[this.position()]: this.position(),
			open: this.visible,
			modal: this.modal
		});
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵDrawer_BaseFactory;
		return function Drawer_Factory(__ngFactoryType__) {
			return (ɵDrawer_BaseFactory || (ɵDrawer_BaseFactory = ɵɵgetInheritedFactory(Drawer)))(__ngFactoryType__ || Drawer);
		};
	})();
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: Drawer,
		selectors: [["p-drawer"]],
		contentQueries: function Drawer_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, _c2, 4)(dirIndex, _c3, 4)(dirIndex, _c4, 4)(dirIndex, PrimeTemplate, 4);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeIconTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headlessTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
			}
		},
		viewQuery: function Drawer_Query(rf, ctx) {
			if (rf & 1) ɵɵviewQuery(_c5, 5)(_c6, 5);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeButtonViewChild = _t.first);
			}
		},
		inputs: {
			appendTo: [1, "appendTo"],
			motionOptions: [1, "motionOptions"],
			blockScroll: [
				2,
				"blockScroll",
				"blockScroll",
				booleanAttribute
			],
			style: "style",
			styleClass: "styleClass",
			ariaCloseLabel: "ariaCloseLabel",
			autoZIndex: [
				2,
				"autoZIndex",
				"autoZIndex",
				booleanAttribute
			],
			baseZIndex: [
				2,
				"baseZIndex",
				"baseZIndex",
				numberAttribute
			],
			modal: [
				2,
				"modal",
				"modal",
				booleanAttribute
			],
			closeButtonProps: "closeButtonProps",
			dismissible: [
				2,
				"dismissible",
				"dismissible",
				booleanAttribute
			],
			showCloseIcon: [
				2,
				"showCloseIcon",
				"showCloseIcon",
				booleanAttribute
			],
			closeOnEscape: [
				2,
				"closeOnEscape",
				"closeOnEscape",
				booleanAttribute
			],
			transitionOptions: "transitionOptions",
			visible: "visible",
			position: [1, "position"],
			fullScreen: [1, "fullScreen"],
			header: "header",
			maskStyle: "maskStyle",
			closable: [
				2,
				"closable",
				"closable",
				booleanAttribute
			]
		},
		outputs: {
			onShow: "onShow",
			onHide: "onHide",
			visibleChange: "visibleChange"
		},
		features: [
			ɵɵProvidersFeature([
				DrawerStyle,
				{
					provide: DRAWER_INSTANCE,
					useExisting: Drawer
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Drawer
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		ngContentSelectors: _c7,
		decls: 1,
		vars: 1,
		consts: [
			["container", ""],
			["icon", ""],
			[
				"role",
				"complementary",
				"pFocusTrap",
				"",
				3,
				"pBind",
				"pMotion",
				"pMotionAppear",
				"pMotionEnterActiveClass",
				"pMotionLeaveActiveClass",
				"pMotionOptions",
				"class",
				"style"
			],
			[
				"role",
				"complementary",
				"pFocusTrap",
				"",
				3,
				"pMotionOnBeforeEnter",
				"pMotionOnAfterLeave",
				"keydown",
				"pBind",
				"pMotion",
				"pMotionAppear",
				"pMotionEnterActiveClass",
				"pMotionLeaveActiveClass",
				"pMotionOptions"
			],
			[4, "ngTemplateOutlet"],
			[
				3,
				"pBind",
				"ngClass"
			],
			[
				3,
				"pBind",
				"class",
				4,
				"ngIf"
			],
			[
				3,
				"pt",
				"ngClass",
				"buttonProps",
				"ariaLabel",
				"unstyled",
				"onClick",
				"keydown.enter",
				4,
				"ngIf"
			],
			[4, "ngIf"],
			[3, "pBind"],
			[
				3,
				"onClick",
				"keydown.enter",
				"pt",
				"ngClass",
				"buttonProps",
				"ariaLabel",
				"unstyled"
			],
			[
				"data-p-icon",
				"times",
				4,
				"ngIf"
			],
			["data-p-icon", "times"]
		],
		template: function Drawer_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵconditionalCreate(0, Drawer_Conditional_0_Template, 4, 13, "div", 2);
			}
			if (rf & 2) ɵɵconditional(ctx.modalVisible ? 0 : -1);
		},
		dependencies: [
			CommonModule,
			NgClass,
			NgIf,
			NgTemplateOutlet,
			Button,
			TimesIcon,
			SharedModule,
			Bind,
			FocusTrapModule,
			FocusTrap,
			MotionModule,
			MotionDirective
		],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Drawer, [{
		type: Component,
		args: [{
			selector: "p-drawer",
			standalone: true,
			imports: [
				CommonModule,
				Button,
				TimesIcon,
				SharedModule,
				Bind,
				FocusTrapModule,
				MotionModule
			],
			providers: [
				DrawerStyle,
				{
					provide: DRAWER_INSTANCE,
					useExisting: Drawer
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Drawer
				}
			],
			hostDirectives: [Bind],
			template: `
        @if (modalVisible) {
            <div
                #container
                [pBind]="ptm('root')"
                [pMotion]="visible"
                [pMotionAppear]="true"
                [pMotionEnterActiveClass]="$enterAnimation()"
                [pMotionLeaveActiveClass]="$leaveAnimation()"
                [pMotionOptions]="computedMotionOptions()"
                (pMotionOnBeforeEnter)="onBeforeEnter($event)"
                (pMotionOnAfterLeave)="onAfterLeave($event)"
                [class]="cn(cx('root'), styleClass)"
                [style]="style"
                role="complementary"
                (keydown)="onKeyDown($event)"
                pFocusTrap
                [attr.data-p]="dataP"
                [attr.data-p-open]="visible"
            >
                @if (headlessTemplate || _headlessTemplate) {
                    <ng-container *ngTemplateOutlet="headlessTemplate || _headlessTemplate"></ng-container>
                } @else {
                    <div [pBind]="ptm('header')" [ngClass]="cx('header')" [attr.data-pc-section]="'header'">
                        <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                        <div *ngIf="header" [pBind]="ptm('title')" [class]="cx('title')">{{ header }}</div>
                        <p-button
                            *ngIf="showCloseIcon && closable"
                            [pt]="ptm('pcCloseButton')"
                            [ngClass]="cx('pcCloseButton')"
                            (onClick)="close($event)"
                            (keydown.enter)="close($event)"
                            [buttonProps]="closeButtonProps"
                            [ariaLabel]="ariaCloseLabel"
                            [attr.data-pc-group-section]="'iconcontainer'"
                            [unstyled]="unstyled()"
                        >
                            <ng-template #icon>
                                <svg data-p-icon="times" *ngIf="!closeIconTemplate && !_closeIconTemplate" [attr.data-pc-section]="'closeicon'" />
                                <ng-template *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-template>
                            </ng-template>
                        </p-button>
                    </div>

                    <div [pBind]="ptm('content')" [ngClass]="cx('content')" [attr.data-pc-section]="'content'">
                        <ng-content></ng-content>
                        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                    </div>

                    <ng-container *ngIf="footerTemplate || _footerTemplate">
                        <div [pBind]="ptm('footer')" [ngClass]="cx('footer')" [attr.data-pc-section]="'footer'">
                            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                        </div>
                    </ng-container>
                }
            </div>
        }
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None
		}]
	}], null, {
		appendTo: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "appendTo",
				required: false
			}]
		}],
		motionOptions: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "motionOptions",
				required: false
			}]
		}],
		blockScroll: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		style: [{ type: Input }],
		styleClass: [{ type: Input }],
		ariaCloseLabel: [{ type: Input }],
		autoZIndex: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		baseZIndex: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		modal: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		closeButtonProps: [{ type: Input }],
		dismissible: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		showCloseIcon: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		closeOnEscape: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		transitionOptions: [{ type: Input }],
		visible: [{ type: Input }],
		position: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "position",
				required: false
			}]
		}],
		fullScreen: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fullScreen",
				required: false
			}]
		}],
		header: [{ type: Input }],
		maskStyle: [{ type: Input }],
		closable: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		onShow: [{ type: Output }],
		onHide: [{ type: Output }],
		visibleChange: [{ type: Output }],
		containerViewChild: [{
			type: ViewChild,
			args: ["container"]
		}],
		closeButtonViewChild: [{
			type: ViewChild,
			args: ["closeButton"]
		}],
		headerTemplate: [{
			type: ContentChild,
			args: ["header", { descendants: false }]
		}],
		footerTemplate: [{
			type: ContentChild,
			args: ["footer", { descendants: false }]
		}],
		contentTemplate: [{
			type: ContentChild,
			args: ["content", { descendants: false }]
		}],
		closeIconTemplate: [{
			type: ContentChild,
			args: ["closeicon", { descendants: false }]
		}],
		headlessTemplate: [{
			type: ContentChild,
			args: ["headless", { descendants: false }]
		}],
		templates: [{
			type: ContentChildren,
			args: [PrimeTemplate]
		}]
	});
})();
var DrawerModule = class DrawerModule {
	static ɵfac = function DrawerModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || DrawerModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: DrawerModule,
		imports: [Drawer, SharedModule],
		exports: [Drawer, SharedModule]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		Drawer,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DrawerModule, [{
		type: NgModule,
		args: [{
			imports: [Drawer, SharedModule],
			exports: [Drawer, SharedModule]
		}]
	}], null, null);
})();
//#endregion
export { Drawer, DrawerClasses, DrawerModule, DrawerStyle };
