import { $a as ɵɵdefineComponent, $c as effect, $n as Output, A as contentChild, Bs as ɵɵtemplate, Bt as computed, Dr as ViewEncapsulation, En as ElementRef, Eo as ɵɵgetInheritedFactory, Fc as PLATFORM_ID, Fn as Injectable, Hi as setClassMetadata, Hs as ɵɵtext, In as Input, Jo as ɵɵloadQuery, Ml as ɵɵnamespaceSVG, O as booleanAttribute, Ta as ɵɵcontentQuerySignal, Tl as ɵɵdefineInjector, Us as ɵɵtextInterpolate, X as input, Yo as ɵɵnextContext, _a as ɵɵattribute, _o as ɵɵelementContainerStart, a as ContentChildren, aa as ɵɵHostDirectivesFeature, al as inject, an as ChangeDetectionStrategy, ca as ɵɵProvidersFeature, cn as Component, eo as ɵɵdefineDirective, fc as DOCUMENT, go as ɵɵelementContainerEnd, gs as ɵɵqueryRefresh, ho as ɵɵelementContainer, hs as ɵɵqueryAdvance, i as ContentChild, is as ɵɵproperty, la as ɵɵadvance, mo as ɵɵelement, ns as ɵɵprojection, oa as ɵɵInheritDefinitionFeature, qn as NgModule, qo as ɵɵlistener, rs as ɵɵprojectionDef, rt as numberAttribute, ss as ɵɵpureFunction2, tl as forwardRef, to as ɵɵdefineNgModule, va as ɵɵclassMap, vc as EventEmitter, vo as ɵɵelementEnd, wa as ɵɵcontentQuery, wc as InjectionToken, wl as ɵɵdefineInjectable, wn as Directive, ya as ɵɵclassProp, yo as ɵɵelementStart } from "./core-DUNqMioj.js";
import { i as isPlatformBrowser } from "./common-BHPz-doM.js";
import { a as NgIf, o as NgStyle, s as NgTemplateOutlet, t as CommonModule } from "./_common_module-chunk-D9APm2rv.js";
import { c as BadgeModule, f as DomHandler, g as PARENT_INSTANCE, h as BaseComponent, l as Bind, r as SpinnerIcon, s as Badge, t as Ripple } from "./primeng-ripple-CmwUPNxU.js";
import { T as l, f as PrimeTemplate, p as SharedModule } from "./primeng-api-D5hmbmkR.js";
import { A as q, a as BaseStyle, b as P, w as Z } from "./primeng-config-TEe12t9g.js";
//#region node_modules/primeng/fesm2022/primeng-autofocus.mjs
/**
* AutoFocus manages focus on focusable element on load.
* @group Components
*/
var AutoFocus = class AutoFocus extends BaseComponent {
	/**
	* When present, it specifies that the component should automatically get focus on load.
	* @group Props
	*/
	autofocus = false;
	focused = false;
	platformId = inject(PLATFORM_ID);
	document = inject(DOCUMENT);
	host = inject(ElementRef);
	onAfterContentChecked() {
		if (this.autofocus === false) this.host.nativeElement.removeAttribute("autofocus");
		else this.host.nativeElement.setAttribute("autofocus", true);
		if (!this.focused) this.autoFocus();
	}
	onAfterViewChecked() {
		if (!this.focused) this.autoFocus();
	}
	autoFocus() {
		if (isPlatformBrowser(this.platformId) && this.autofocus) setTimeout(() => {
			const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
			if (focusableElements.length === 0) this.host.nativeElement.focus();
			if (focusableElements.length > 0) focusableElements[0].focus();
			this.focused = true;
		});
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵAutoFocus_BaseFactory;
		return function AutoFocus_Factory(__ngFactoryType__) {
			return (ɵAutoFocus_BaseFactory || (ɵAutoFocus_BaseFactory = ɵɵgetInheritedFactory(AutoFocus)))(__ngFactoryType__ || AutoFocus);
		};
	})();
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: AutoFocus,
		selectors: [[
			"",
			"pAutoFocus",
			""
		]],
		inputs: { autofocus: [
			0,
			"pAutoFocus",
			"autofocus"
		] },
		features: [ɵɵInheritDefinitionFeature]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
		type: Directive,
		args: [{
			selector: "[pAutoFocus]",
			standalone: true
		}]
	}], null, { autofocus: [{
		type: Input,
		args: ["pAutoFocus"]
	}] });
})();
var AutoFocusModule = class AutoFocusModule {
	static ɵfac = function AutoFocusModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || AutoFocusModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: AutoFocusModule,
		imports: [AutoFocus],
		exports: [AutoFocus]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
		type: NgModule,
		args: [{
			imports: [AutoFocus],
			exports: [AutoFocus]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/primeng/fesm2022/primeng-fluid.mjs
var _c0$1 = ["*"];
var classes$1 = { root: "p-fluid" };
var FluidStyle = class FluidStyle extends BaseStyle {
	name = "fluid";
	classes = classes$1;
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵFluidStyle_BaseFactory;
		return function FluidStyle_Factory(__ngFactoryType__) {
			return (ɵFluidStyle_BaseFactory || (ɵFluidStyle_BaseFactory = ɵɵgetInheritedFactory(FluidStyle)))(__ngFactoryType__ || FluidStyle);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: FluidStyle,
		factory: FluidStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidStyle, [{ type: Injectable }], null, null);
})();
/**
*
* Fluid is a layout component to make descendant components span full width of their container.
*
* [Live Demo](https://www.primeng.org/fluid/)
*
* @module fluidstyle
*
*/
var FluidClasses;
(function(FluidClasses) {
	/**
	* Class name of the root element
	*/
	FluidClasses["root"] = "p-fluid";
})(FluidClasses || (FluidClasses = {}));
var FLUID_INSTANCE = new InjectionToken("FLUID_INSTANCE");
/**
* Fluid is a layout component to make descendant components span full width of their container.
* @group Components
*/
var Fluid = class Fluid extends BaseComponent {
	componentName = "Fluid";
	$pcFluid = inject(FLUID_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	_componentStyle = inject(FluidStyle);
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵFluid_BaseFactory;
		return function Fluid_Factory(__ngFactoryType__) {
			return (ɵFluid_BaseFactory || (ɵFluid_BaseFactory = ɵɵgetInheritedFactory(Fluid)))(__ngFactoryType__ || Fluid);
		};
	})();
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: Fluid,
		selectors: [["p-fluid"]],
		hostVars: 2,
		hostBindings: function Fluid_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassMap(ctx.cx("root"));
		},
		features: [
			ɵɵProvidersFeature([
				FluidStyle,
				{
					provide: FLUID_INSTANCE,
					useExisting: Fluid
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Fluid
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		ngContentSelectors: _c0$1,
		decls: 1,
		vars: 0,
		template: function Fluid_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵprojection(0);
			}
		},
		dependencies: [CommonModule],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fluid, [{
		type: Component,
		args: [{
			selector: "p-fluid",
			template: ` <ng-content></ng-content> `,
			standalone: true,
			imports: [CommonModule],
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				FluidStyle,
				{
					provide: FLUID_INSTANCE,
					useExisting: Fluid
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Fluid
				}
			],
			host: { "[class]": "cx('root')" },
			hostDirectives: [Bind]
		}]
	}], null, null);
})();
var FluidModule = class FluidModule {
	static ɵfac = function FluidModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || FluidModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: FluidModule,
		imports: [Fluid],
		exports: [Fluid]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [Fluid] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FluidModule, [{
		type: NgModule,
		args: [{
			imports: [Fluid],
			exports: [Fluid]
		}]
	}], null, null);
})();
//#endregion
//#region node_modules/@primeuix/styles/dist/button/index.mjs
var style = "\n    .p-button {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        color: dt('button.primary.color');\n        background: dt('button.primary.background');\n        border: 1px solid dt('button.primary.border.color');\n        padding: dt('button.padding.y') dt('button.padding.x');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('button.transition.duration'),\n            color dt('button.transition.duration'),\n            border-color dt('button.transition.duration'),\n            outline-color dt('button.transition.duration'),\n            box-shadow dt('button.transition.duration');\n        border-radius: dt('button.border.radius');\n        outline-color: transparent;\n        gap: dt('button.gap');\n    }\n\n    .p-button:disabled {\n        cursor: default;\n    }\n\n    .p-button-icon-right {\n        order: 1;\n    }\n\n    .p-button-icon-right:dir(rtl) {\n        order: -1;\n    }\n\n    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {\n        order: 1;\n    }\n\n    .p-button-icon-bottom {\n        order: 2;\n    }\n\n    .p-button-icon-only {\n        width: dt('button.icon.only.width');\n        padding-inline-start: 0;\n        padding-inline-end: 0;\n        gap: 0;\n    }\n\n    .p-button-icon-only.p-button-rounded {\n        border-radius: 50%;\n        height: dt('button.icon.only.width');\n    }\n\n    .p-button-icon-only .p-button-label {\n        visibility: hidden;\n        width: 0;\n    }\n\n    .p-button-icon-only::after {\n        content: \"\xA0\";\n        visibility: hidden;\n        width: 0;\n    }\n\n    .p-button-sm {\n        font-size: dt('button.sm.font.size');\n        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');\n    }\n\n    .p-button-sm .p-button-icon {\n        font-size: dt('button.sm.font.size');\n    }\n\n    .p-button-sm.p-button-icon-only {\n        width: dt('button.sm.icon.only.width');\n    }\n\n    .p-button-sm.p-button-icon-only.p-button-rounded {\n        height: dt('button.sm.icon.only.width');\n    }\n\n    .p-button-lg {\n        font-size: dt('button.lg.font.size');\n        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');\n    }\n\n    .p-button-lg .p-button-icon {\n        font-size: dt('button.lg.font.size');\n    }\n\n    .p-button-lg.p-button-icon-only {\n        width: dt('button.lg.icon.only.width');\n    }\n\n    .p-button-lg.p-button-icon-only.p-button-rounded {\n        height: dt('button.lg.icon.only.width');\n    }\n\n    .p-button-vertical {\n        flex-direction: column;\n    }\n\n    .p-button-label {\n        font-weight: dt('button.label.font.weight');\n    }\n\n    .p-button-fluid {\n        width: 100%;\n    }\n\n    .p-button-fluid.p-button-icon-only {\n        width: dt('button.icon.only.width');\n    }\n\n    .p-button:not(:disabled):hover {\n        background: dt('button.primary.hover.background');\n        border: 1px solid dt('button.primary.hover.border.color');\n        color: dt('button.primary.hover.color');\n    }\n\n    .p-button:not(:disabled):active {\n        background: dt('button.primary.active.background');\n        border: 1px solid dt('button.primary.active.border.color');\n        color: dt('button.primary.active.color');\n    }\n\n    .p-button:focus-visible {\n        box-shadow: dt('button.primary.focus.ring.shadow');\n        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');\n        outline-offset: dt('button.focus.ring.offset');\n    }\n\n    .p-button .p-badge {\n        min-width: dt('button.badge.size');\n        height: dt('button.badge.size');\n        line-height: dt('button.badge.size');\n    }\n\n    .p-button-raised {\n        box-shadow: dt('button.raised.shadow');\n    }\n\n    .p-button-rounded {\n        border-radius: dt('button.rounded.border.radius');\n    }\n\n    .p-button-secondary {\n        background: dt('button.secondary.background');\n        border: 1px solid dt('button.secondary.border.color');\n        color: dt('button.secondary.color');\n    }\n\n    .p-button-secondary:not(:disabled):hover {\n        background: dt('button.secondary.hover.background');\n        border: 1px solid dt('button.secondary.hover.border.color');\n        color: dt('button.secondary.hover.color');\n    }\n\n    .p-button-secondary:not(:disabled):active {\n        background: dt('button.secondary.active.background');\n        border: 1px solid dt('button.secondary.active.border.color');\n        color: dt('button.secondary.active.color');\n    }\n\n    .p-button-secondary:focus-visible {\n        outline-color: dt('button.secondary.focus.ring.color');\n        box-shadow: dt('button.secondary.focus.ring.shadow');\n    }\n\n    .p-button-success {\n        background: dt('button.success.background');\n        border: 1px solid dt('button.success.border.color');\n        color: dt('button.success.color');\n    }\n\n    .p-button-success:not(:disabled):hover {\n        background: dt('button.success.hover.background');\n        border: 1px solid dt('button.success.hover.border.color');\n        color: dt('button.success.hover.color');\n    }\n\n    .p-button-success:not(:disabled):active {\n        background: dt('button.success.active.background');\n        border: 1px solid dt('button.success.active.border.color');\n        color: dt('button.success.active.color');\n    }\n\n    .p-button-success:focus-visible {\n        outline-color: dt('button.success.focus.ring.color');\n        box-shadow: dt('button.success.focus.ring.shadow');\n    }\n\n    .p-button-info {\n        background: dt('button.info.background');\n        border: 1px solid dt('button.info.border.color');\n        color: dt('button.info.color');\n    }\n\n    .p-button-info:not(:disabled):hover {\n        background: dt('button.info.hover.background');\n        border: 1px solid dt('button.info.hover.border.color');\n        color: dt('button.info.hover.color');\n    }\n\n    .p-button-info:not(:disabled):active {\n        background: dt('button.info.active.background');\n        border: 1px solid dt('button.info.active.border.color');\n        color: dt('button.info.active.color');\n    }\n\n    .p-button-info:focus-visible {\n        outline-color: dt('button.info.focus.ring.color');\n        box-shadow: dt('button.info.focus.ring.shadow');\n    }\n\n    .p-button-warn {\n        background: dt('button.warn.background');\n        border: 1px solid dt('button.warn.border.color');\n        color: dt('button.warn.color');\n    }\n\n    .p-button-warn:not(:disabled):hover {\n        background: dt('button.warn.hover.background');\n        border: 1px solid dt('button.warn.hover.border.color');\n        color: dt('button.warn.hover.color');\n    }\n\n    .p-button-warn:not(:disabled):active {\n        background: dt('button.warn.active.background');\n        border: 1px solid dt('button.warn.active.border.color');\n        color: dt('button.warn.active.color');\n    }\n\n    .p-button-warn:focus-visible {\n        outline-color: dt('button.warn.focus.ring.color');\n        box-shadow: dt('button.warn.focus.ring.shadow');\n    }\n\n    .p-button-help {\n        background: dt('button.help.background');\n        border: 1px solid dt('button.help.border.color');\n        color: dt('button.help.color');\n    }\n\n    .p-button-help:not(:disabled):hover {\n        background: dt('button.help.hover.background');\n        border: 1px solid dt('button.help.hover.border.color');\n        color: dt('button.help.hover.color');\n    }\n\n    .p-button-help:not(:disabled):active {\n        background: dt('button.help.active.background');\n        border: 1px solid dt('button.help.active.border.color');\n        color: dt('button.help.active.color');\n    }\n\n    .p-button-help:focus-visible {\n        outline-color: dt('button.help.focus.ring.color');\n        box-shadow: dt('button.help.focus.ring.shadow');\n    }\n\n    .p-button-danger {\n        background: dt('button.danger.background');\n        border: 1px solid dt('button.danger.border.color');\n        color: dt('button.danger.color');\n    }\n\n    .p-button-danger:not(:disabled):hover {\n        background: dt('button.danger.hover.background');\n        border: 1px solid dt('button.danger.hover.border.color');\n        color: dt('button.danger.hover.color');\n    }\n\n    .p-button-danger:not(:disabled):active {\n        background: dt('button.danger.active.background');\n        border: 1px solid dt('button.danger.active.border.color');\n        color: dt('button.danger.active.color');\n    }\n\n    .p-button-danger:focus-visible {\n        outline-color: dt('button.danger.focus.ring.color');\n        box-shadow: dt('button.danger.focus.ring.shadow');\n    }\n\n    .p-button-contrast {\n        background: dt('button.contrast.background');\n        border: 1px solid dt('button.contrast.border.color');\n        color: dt('button.contrast.color');\n    }\n\n    .p-button-contrast:not(:disabled):hover {\n        background: dt('button.contrast.hover.background');\n        border: 1px solid dt('button.contrast.hover.border.color');\n        color: dt('button.contrast.hover.color');\n    }\n\n    .p-button-contrast:not(:disabled):active {\n        background: dt('button.contrast.active.background');\n        border: 1px solid dt('button.contrast.active.border.color');\n        color: dt('button.contrast.active.color');\n    }\n\n    .p-button-contrast:focus-visible {\n        outline-color: dt('button.contrast.focus.ring.color');\n        box-shadow: dt('button.contrast.focus.ring.shadow');\n    }\n\n    .p-button-outlined {\n        background: transparent;\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined:not(:disabled):hover {\n        background: dt('button.outlined.primary.hover.background');\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined:not(:disabled):active {\n        background: dt('button.outlined.primary.active.background');\n        border-color: dt('button.outlined.primary.border.color');\n        color: dt('button.outlined.primary.color');\n    }\n\n    .p-button-outlined.p-button-secondary {\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-secondary:not(:disabled):hover {\n        background: dt('button.outlined.secondary.hover.background');\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-secondary:not(:disabled):active {\n        background: dt('button.outlined.secondary.active.background');\n        border-color: dt('button.outlined.secondary.border.color');\n        color: dt('button.outlined.secondary.color');\n    }\n\n    .p-button-outlined.p-button-success {\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-success:not(:disabled):hover {\n        background: dt('button.outlined.success.hover.background');\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-success:not(:disabled):active {\n        background: dt('button.outlined.success.active.background');\n        border-color: dt('button.outlined.success.border.color');\n        color: dt('button.outlined.success.color');\n    }\n\n    .p-button-outlined.p-button-info {\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-info:not(:disabled):hover {\n        background: dt('button.outlined.info.hover.background');\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-info:not(:disabled):active {\n        background: dt('button.outlined.info.active.background');\n        border-color: dt('button.outlined.info.border.color');\n        color: dt('button.outlined.info.color');\n    }\n\n    .p-button-outlined.p-button-warn {\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-warn:not(:disabled):hover {\n        background: dt('button.outlined.warn.hover.background');\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-warn:not(:disabled):active {\n        background: dt('button.outlined.warn.active.background');\n        border-color: dt('button.outlined.warn.border.color');\n        color: dt('button.outlined.warn.color');\n    }\n\n    .p-button-outlined.p-button-help {\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-help:not(:disabled):hover {\n        background: dt('button.outlined.help.hover.background');\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-help:not(:disabled):active {\n        background: dt('button.outlined.help.active.background');\n        border-color: dt('button.outlined.help.border.color');\n        color: dt('button.outlined.help.color');\n    }\n\n    .p-button-outlined.p-button-danger {\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-danger:not(:disabled):hover {\n        background: dt('button.outlined.danger.hover.background');\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-danger:not(:disabled):active {\n        background: dt('button.outlined.danger.active.background');\n        border-color: dt('button.outlined.danger.border.color');\n        color: dt('button.outlined.danger.color');\n    }\n\n    .p-button-outlined.p-button-contrast {\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-contrast:not(:disabled):hover {\n        background: dt('button.outlined.contrast.hover.background');\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-contrast:not(:disabled):active {\n        background: dt('button.outlined.contrast.active.background');\n        border-color: dt('button.outlined.contrast.border.color');\n        color: dt('button.outlined.contrast.color');\n    }\n\n    .p-button-outlined.p-button-plain {\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-outlined.p-button-plain:not(:disabled):hover {\n        background: dt('button.outlined.plain.hover.background');\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-outlined.p-button-plain:not(:disabled):active {\n        background: dt('button.outlined.plain.active.background');\n        border-color: dt('button.outlined.plain.border.color');\n        color: dt('button.outlined.plain.color');\n    }\n\n    .p-button-text {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text:not(:disabled):hover {\n        background: dt('button.text.primary.hover.background');\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text:not(:disabled):active {\n        background: dt('button.text.primary.active.background');\n        border-color: transparent;\n        color: dt('button.text.primary.color');\n    }\n\n    .p-button-text.p-button-secondary {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-secondary:not(:disabled):hover {\n        background: dt('button.text.secondary.hover.background');\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-secondary:not(:disabled):active {\n        background: dt('button.text.secondary.active.background');\n        border-color: transparent;\n        color: dt('button.text.secondary.color');\n    }\n\n    .p-button-text.p-button-success {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-success:not(:disabled):hover {\n        background: dt('button.text.success.hover.background');\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-success:not(:disabled):active {\n        background: dt('button.text.success.active.background');\n        border-color: transparent;\n        color: dt('button.text.success.color');\n    }\n\n    .p-button-text.p-button-info {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-info:not(:disabled):hover {\n        background: dt('button.text.info.hover.background');\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-info:not(:disabled):active {\n        background: dt('button.text.info.active.background');\n        border-color: transparent;\n        color: dt('button.text.info.color');\n    }\n\n    .p-button-text.p-button-warn {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-warn:not(:disabled):hover {\n        background: dt('button.text.warn.hover.background');\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-warn:not(:disabled):active {\n        background: dt('button.text.warn.active.background');\n        border-color: transparent;\n        color: dt('button.text.warn.color');\n    }\n\n    .p-button-text.p-button-help {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-help:not(:disabled):hover {\n        background: dt('button.text.help.hover.background');\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-help:not(:disabled):active {\n        background: dt('button.text.help.active.background');\n        border-color: transparent;\n        color: dt('button.text.help.color');\n    }\n\n    .p-button-text.p-button-danger {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-danger:not(:disabled):hover {\n        background: dt('button.text.danger.hover.background');\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-danger:not(:disabled):active {\n        background: dt('button.text.danger.active.background');\n        border-color: transparent;\n        color: dt('button.text.danger.color');\n    }\n\n    .p-button-text.p-button-contrast {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-contrast:not(:disabled):hover {\n        background: dt('button.text.contrast.hover.background');\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-contrast:not(:disabled):active {\n        background: dt('button.text.contrast.active.background');\n        border-color: transparent;\n        color: dt('button.text.contrast.color');\n    }\n\n    .p-button-text.p-button-plain {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-text.p-button-plain:not(:disabled):hover {\n        background: dt('button.text.plain.hover.background');\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-text.p-button-plain:not(:disabled):active {\n        background: dt('button.text.plain.active.background');\n        border-color: transparent;\n        color: dt('button.text.plain.color');\n    }\n\n    .p-button-link {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.color');\n    }\n\n    .p-button-link:not(:disabled):hover {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.hover.color');\n    }\n\n    .p-button-link:not(:disabled):hover .p-button-label {\n        text-decoration: underline;\n    }\n\n    .p-button-link:not(:disabled):active {\n        background: transparent;\n        border-color: transparent;\n        color: dt('button.link.active.color');\n    }\n";
//#endregion
//#region node_modules/primeng/fesm2022/primeng-button.mjs
var _c0 = ["content"];
var _c1 = ["loadingicon"];
var _c2 = ["icon"];
var _c3 = ["*"];
var _c4 = (a0, a1) => ({
	class: a0,
	pt: a1
});
function Button_ng_container_2_Template(rf, ctx) {
	if (rf & 1) ɵɵelementContainer(0);
}
function Button_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 7);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(3);
		ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), "pi-spin", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
		ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"));
		ɵɵattribute("aria-hidden", true);
	}
}
function Button_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵnamespaceSVG();
		ɵɵelement(0, "svg", 8);
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(3);
		ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("loadingIcon"), ctx_r0.cx("spinnerIcon")));
		ɵɵproperty("pBind", ctx_r0.ptm("loadingIcon"))("spin", true);
		ɵɵattribute("aria-hidden", true);
	}
}
function Button_ng_container_3_ng_container_1_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtemplate(1, Button_ng_container_3_ng_container_1_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 5, "svg", 6);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(2);
		ɵɵadvance();
		ɵɵproperty("ngIf", ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon));
		ɵɵadvance();
		ɵɵproperty("ngIf", !(ctx_r0.loadingIcon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.loadingIcon)));
	}
}
function Button_ng_container_3_2_ng_template_0_Template(rf, ctx) {}
function Button_ng_container_3_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, Button_ng_container_3_2_ng_template_0_Template, 0, 0, "ng-template", 9);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(2);
		ɵɵproperty("ngIf", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate);
	}
}
function Button_ng_container_3_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtemplate(1, Button_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 2)(2, Button_ng_container_3_2_Template, 1, 1, null, 5);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngIf", !ctx_r0.loadingIconTemplate && !ctx_r0._loadingIconTemplate);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r0.loadingIconTemplate || ctx_r0._loadingIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c4, ctx_r0.cx("loadingIcon"), ctx_r0.ptm("loadingIcon")));
	}
}
function Button_ng_container_4_span_1_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "span", 7);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(2);
		ɵɵclassMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)));
		ɵɵproperty("pBind", ctx_r0.ptm("icon"));
		ɵɵattribute("data-p", ctx_r0.dataIconP);
	}
}
function Button_ng_container_4_2_ng_template_0_Template(rf, ctx) {}
function Button_ng_container_4_2_Template(rf, ctx) {
	if (rf & 1) ɵɵtemplate(0, Button_ng_container_4_2_ng_template_0_Template, 0, 0, "ng-template", 9);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext(2);
		ɵɵproperty("ngIf", !ctx_r0.icon && (ctx_r0.iconTemplate || ctx_r0._iconTemplate));
	}
}
function Button_ng_container_4_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementContainerStart(0);
		ɵɵtemplate(1, Button_ng_container_4_span_1_Template, 1, 4, "span", 3)(2, Button_ng_container_4_2_Template, 1, 1, null, 5);
		ɵɵelementContainerEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵadvance();
		ɵɵproperty("ngIf", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !ctx_r0.iconTemplate && !ctx_r0._iconTemplate);
		ɵɵadvance();
		ɵɵproperty("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c4, ctx_r0.cx("icon"), ctx_r0.ptm("icon")));
	}
}
function Button_span_5_Template(rf, ctx) {
	if (rf & 1) {
		ɵɵelementStart(0, "span", 7);
		ɵɵtext(1);
		ɵɵelementEnd();
	}
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵclassMap(ctx_r0.cx("label"));
		ɵɵproperty("pBind", ctx_r0.ptm("label"));
		ɵɵattribute("aria-hidden", (ctx_r0.icon || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.icon)) && !(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label)))("data-p", ctx_r0.dataLabelP);
		ɵɵadvance();
		ɵɵtextInterpolate(ctx_r0.label || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.label));
	}
}
function Button_p_badge_6_Template(rf, ctx) {
	if (rf & 1) ɵɵelement(0, "p-badge", 10);
	if (rf & 2) {
		const ctx_r0 = ɵɵnextContext();
		ɵɵproperty("value", ctx_r0.badge || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badge))("severity", ctx_r0.badgeSeverity || (ctx_r0.buttonProps == null ? null : ctx_r0.buttonProps.badgeSeverity))("pt", ctx_r0.ptm("pcBadge"))("unstyled", ctx_r0.unstyled());
	}
}
var classes = {
	root: ({ instance }) => ["p-button p-component", {
		"p-button-icon-only": instance.hasIcon && !instance.label && !instance.buttonProps?.label && !instance.badge,
		"p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
		"p-button-loading": instance.loading || instance.buttonProps?.loading,
		"p-button-link": instance.link || instance.buttonProps?.link,
		[`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
		"p-button-raised": instance.raised || instance.buttonProps?.raised,
		"p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
		"p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
		"p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
		"p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
		"p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
		"p-button-plain": instance.plain || instance.buttonProps?.plain,
		"p-button-fluid": instance.hasFluid
	}],
	loadingIcon: "p-button-loading-icon",
	icon: ({ instance }) => [
		"p-button-icon",
		{
			[`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
			"p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
			"p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label,
			"p-button-icon-top": (instance.iconPos === "top" || instance.buttonProps?.iconPos === "top") && instance.label || instance.buttonProps?.label,
			"p-button-icon-bottom": (instance.iconPos === "bottom" || instance.buttonProps?.iconPos === "bottom") && instance.label || instance.buttonProps?.label
		},
		instance.icon,
		instance.buttonProps?.icon
	],
	spinnerIcon: ({ instance }) => {
		return Object.entries(instance.cx("icon")).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
	},
	label: "p-button-label"
};
var ButtonStyle = class ButtonStyle extends BaseStyle {
	name = "button";
	style = style;
	classes = classes;
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵButtonStyle_BaseFactory;
		return function ButtonStyle_Factory(__ngFactoryType__) {
			return (ɵButtonStyle_BaseFactory || (ɵButtonStyle_BaseFactory = ɵɵgetInheritedFactory(ButtonStyle)))(__ngFactoryType__ || ButtonStyle);
		};
	})();
	static ɵprov = /* @__PURE__ */ ɵɵdefineInjectable({
		token: ButtonStyle,
		factory: ButtonStyle.ɵfac
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonStyle, [{ type: Injectable }], null, null);
})();
/**
*
* Button is an extension to standard button element with icons and theming.
*
* [Live Demo](https://www.primeng.org/button/)
*
* @module buttonstyle
*
*/
var ButtonClasses;
(function(ButtonClasses) {
	/**
	* Class name of the root element
	*/
	ButtonClasses["root"] = "p-button";
	/**
	* Class name of the loading icon element
	*/
	ButtonClasses["loadingIcon"] = "p-button-loading-icon";
	/**
	* Class name of the icon element
	*/
	ButtonClasses["icon"] = "p-button-icon";
	/**
	* Class name of the label element
	*/
	ButtonClasses["label"] = "p-button-label";
})(ButtonClasses || (ButtonClasses = {}));
var BUTTON_INSTANCE = new InjectionToken("BUTTON_INSTANCE");
var BUTTON_DIRECTIVE_INSTANCE = new InjectionToken("BUTTON_DIRECTIVE_INSTANCE");
var BUTTON_LABEL_INSTANCE = new InjectionToken("BUTTON_LABEL_INSTANCE");
var BUTTON_ICON_INSTANCE = new InjectionToken("BUTTON_ICON_INSTANCE");
var INTERNAL_BUTTON_CLASSES = {
	button: "p-button",
	component: "p-component",
	iconOnly: "p-button-icon-only",
	disabled: "p-disabled",
	loading: "p-button-loading",
	labelOnly: "p-button-loading-label-only"
};
var ButtonLabel = class ButtonLabel extends BaseComponent {
	componentName = "ButtonLabel";
	/**
	* Used to pass attributes to DOM elements inside the pButtonLabel.
	* @defaultValue undefined
	* @deprecated use pButtonLabelPT instead.
	* @group Props
	*/
	ptButtonLabel = input(...ngDevMode ? [void 0, { debugName: "ptButtonLabel" }] : 	/* istanbul ignore next */ []);
	/**
	* Used to pass attributes to DOM elements inside the pButtonLabel.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonLabelPT = input(...ngDevMode ? [void 0, { debugName: "pButtonLabelPT" }] : 	/* istanbul ignore next */ []);
	/**
	* Indicates whether the component should be rendered without styles.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonLabelUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonLabelUnstyled" }] : 	/* istanbul ignore next */ []);
	$pcButtonLabel = inject(BUTTON_LABEL_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	constructor() {
		super();
		effect(() => {
			const pt = this.ptButtonLabel() || this.pButtonLabelPT();
			pt && this.directivePT.set(pt);
		});
		effect(() => {
			this.pButtonLabelUnstyled() && this.directiveUnstyled.set(this.pButtonLabelUnstyled());
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = function ButtonLabel_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonLabel)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: ButtonLabel,
		selectors: [[
			"",
			"pButtonLabel",
			""
		]],
		hostVars: 2,
		hostBindings: function ButtonLabel_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("p-button-label", !ctx.$unstyled() && true);
		},
		inputs: {
			ptButtonLabel: [1, "ptButtonLabel"],
			pButtonLabelPT: [1, "pButtonLabelPT"],
			pButtonLabelUnstyled: [1, "pButtonLabelUnstyled"]
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_LABEL_INSTANCE,
					useExisting: ButtonLabel
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonLabel
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonLabel, [{
		type: Directive,
		args: [{
			selector: "[pButtonLabel]",
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_LABEL_INSTANCE,
					useExisting: ButtonLabel
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonLabel
				}
			],
			standalone: true,
			host: { "[class.p-button-label]": "!$unstyled() && true" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		ptButtonLabel: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ptButtonLabel",
				required: false
			}]
		}],
		pButtonLabelPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonLabelPT",
				required: false
			}]
		}],
		pButtonLabelUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonLabelUnstyled",
				required: false
			}]
		}]
	});
})();
var ButtonIcon = class ButtonIcon extends BaseComponent {
	componentName = "ButtonIcon";
	/**
	* Used to pass attributes to DOM elements inside the pButtonIcon.
	* @defaultValue undefined
	* @deprecated use pButtonIconPT instead.
	* @group Props
	*/
	ptButtonIcon = input(...ngDevMode ? [void 0, { debugName: "ptButtonIcon" }] : 	/* istanbul ignore next */ []);
	/**
	* Used to pass attributes to DOM elements inside the pButtonIcon.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonIconPT = input(...ngDevMode ? [void 0, { debugName: "pButtonIconPT" }] : 	/* istanbul ignore next */ []);
	/**
	* Indicates whether the component should be rendered without styles.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonUnstyled" }] : 	/* istanbul ignore next */ []);
	$pcButtonIcon = inject(BUTTON_ICON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	constructor() {
		super();
		effect(() => {
			const pt = this.ptButtonIcon() || this.pButtonIconPT();
			pt && this.directivePT.set(pt);
		});
		effect(() => {
			this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
		});
	}
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
	}
	static ɵfac = function ButtonIcon_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonIcon)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: ButtonIcon,
		selectors: [[
			"",
			"pButtonIcon",
			""
		]],
		hostVars: 2,
		hostBindings: function ButtonIcon_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("p-button-icon", !ctx.$unstyled() && true);
		},
		inputs: {
			ptButtonIcon: [1, "ptButtonIcon"],
			pButtonIconPT: [1, "pButtonIconPT"],
			pButtonUnstyled: [1, "pButtonUnstyled"]
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_ICON_INSTANCE,
					useExisting: ButtonIcon
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonIcon
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonIcon, [{
		type: Directive,
		args: [{
			selector: "[pButtonIcon]",
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_ICON_INSTANCE,
					useExisting: ButtonIcon
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonIcon
				}
			],
			standalone: true,
			host: { "[class.p-button-icon]": "!$unstyled() && true" },
			hostDirectives: [Bind]
		}]
	}], () => [], {
		ptButtonIcon: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ptButtonIcon",
				required: false
			}]
		}],
		pButtonIconPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonIconPT",
				required: false
			}]
		}],
		pButtonUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonUnstyled",
				required: false
			}]
		}]
	});
})();
/**
* Button directive is an extension to button component.
* @group Components
*/
var ButtonDirective = class ButtonDirective extends BaseComponent {
	componentName = "Button";
	$pcButtonDirective = inject(BUTTON_DIRECTIVE_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(ButtonStyle);
	/**
	* Used to pass attributes to DOM elements inside the Button component.
	* @defaultValue undefined
	* @deprecated use pButtonPT instead.
	* @group Props
	*/
	ptButtonDirective = input(...ngDevMode ? [void 0, { debugName: "ptButtonDirective" }] : 	/* istanbul ignore next */ []);
	/**
	* Used to pass attributes to DOM elements inside the Button component.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonPT = input(...ngDevMode ? [void 0, { debugName: "pButtonPT" }] : 	/* istanbul ignore next */ []);
	/**
	* Indicates whether the component should be rendered without styles.
	* @defaultValue undefined
	* @group Props
	*/
	pButtonUnstyled = input(...ngDevMode ? [void 0, { debugName: "pButtonUnstyled" }] : 	/* istanbul ignore next */ []);
	hostName = "";
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("root"));
	}
	constructor() {
		super();
		effect(() => {
			const pt = this.ptButtonDirective() || this.pButtonPT();
			pt && this.directivePT.set(pt);
		});
		effect(() => {
			this.pButtonUnstyled() && this.directiveUnstyled.set(this.pButtonUnstyled());
		});
		effect(() => {
			const unstyled = this.$unstyled();
			if (this.initialized && unstyled) this.setStyleClass();
		});
	}
	/**
	* Add a textual class to the button without a background initially.
	* @group Props
	*/
	text = false;
	/**
	* Add a plain textual class to the button without a background initially.
	* @group Props
	*/
	plain = false;
	/**
	* Add a shadow to indicate elevation.
	* @group Props
	*/
	raised = false;
	/**
	* Defines the size of the button.
	* @group Props
	*/
	size;
	/**
	* Add a border class without a background initially.
	* @group Props
	*/
	outlined = false;
	/**
	* Add a circular border radius to the button.
	* @group Props
	*/
	rounded = false;
	/**
	* Position of the icon.
	* @group Props
	*/
	iconPos = "left";
	/**
	* Icon to display in loading state.
	* @group Props
	*/
	loadingIcon;
	/**
	* Spans 100% width of the container when enabled.
	* @defaultValue undefined
	* @group Props
	*/
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : 		/* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{ debugName: "iconSignal" }] : 	/* istanbul ignore next */ []);
	labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{ debugName: "labelSignal" }] : 	/* istanbul ignore next */ []);
	isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{ debugName: "isIconOnly" }] : 	/* istanbul ignore next */ []);
	_label;
	_icon;
	_loading = false;
	_severity;
	_buttonProps;
	initialized;
	get htmlElement() {
		return this.el.nativeElement;
	}
	_internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{ debugName: "isTextButton" }] : 	/* istanbul ignore next */ []);
	/**
	* Text of the button.
	* @deprecated use pButtonLabel directive instead.
	* @group Props
	*/
	get label() {
		return this._label;
	}
	set label(val) {
		this._label = val;
		if (this.initialized) {
			this.updateLabel();
			this.updateIcon();
			this.setStyleClass();
		}
	}
	/**
	* Name of the icon.
	* @deprecated use pButtonIcon directive instead
	* @group Props
	*/
	get icon() {
		return this._icon;
	}
	set icon(val) {
		this._icon = val;
		if (this.initialized) {
			this.updateIcon();
			this.setStyleClass();
		}
	}
	/**
	* Whether the button is in loading state.
	* @group Props
	*/
	get loading() {
		return this._loading;
	}
	set loading(val) {
		this._loading = val;
		if (this.initialized) {
			this.updateIcon();
			this.setStyleClass();
		}
	}
	/**
	* Used to pass all properties of the ButtonProps to the Button component.
	* @deprecated assign props directly to the button element.
	* @group Props
	*/
	get buttonProps() {
		return this._buttonProps;
	}
	set buttonProps(val) {
		this._buttonProps = val;
		if (val && typeof val === "object") Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
	}
	/**
	* Defines the style of the button.
	* @group Props
	*/
	get severity() {
		return this._severity;
	}
	set severity(value) {
		this._severity = value;
		if (this.initialized) this.setStyleClass();
	}
	spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
	onAfterViewInit() {
		!this.$unstyled() && P(this.htmlElement, this.getStyleClass().join(" "));
		if (isPlatformBrowser(this.platformId)) {
			this.createIcon();
			this.createLabel();
			this.initialized = true;
		}
	}
	getStyleClass() {
		const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
		if (this.icon && !this.label && l(this.htmlElement.textContent)) styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
		if (this.loading) {
			styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
			if (!this.icon && this.label) styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
			if (this.icon && !this.label && !l(this.htmlElement.textContent)) styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
		}
		if (this.text) styleClass.push("p-button-text");
		if (this.severity) styleClass.push(`p-button-${this.severity}`);
		if (this.plain) styleClass.push("p-button-plain");
		if (this.raised) styleClass.push("p-button-raised");
		if (this.size) styleClass.push(`p-button-${this.size}`);
		if (this.outlined) styleClass.push("p-button-outlined");
		if (this.rounded) styleClass.push("p-button-rounded");
		if (this.size === "small") styleClass.push("p-button-sm");
		if (this.size === "large") styleClass.push("p-button-lg");
		if (this.hasFluid) styleClass.push("p-button-fluid");
		return this.$unstyled() ? [] : styleClass;
	}
	get hasFluid() {
		return this.fluid() ?? !!this.pcFluid;
	}
	setStyleClass() {
		const styleClass = this.getStyleClass();
		this.removeExistingSeverityClass();
		this.htmlElement.classList.remove(...this._internalClasses);
		this.htmlElement.classList.add(...styleClass);
	}
	removeExistingSeverityClass() {
		const severityArray = [
			"success",
			"info",
			"warn",
			"danger",
			"help",
			"primary",
			"secondary",
			"contrast"
		];
		const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
		if (existingSeverityClass) this.htmlElement.classList.remove(existingSeverityClass);
	}
	createLabel() {
		if (!Z(this.htmlElement, "[data-pc-section=\"buttonlabel\"]") && this.label) {
			let labelElement = q("span", {
				class: this.cx("label"),
				"p-bind": this.ptm("buttonlabel"),
				"aria-hidden": this.icon && !this.label ? "true" : null
			});
			labelElement.appendChild(this.document.createTextNode(this.label));
			this.htmlElement.appendChild(labelElement);
		}
	}
	createIcon() {
		if (!Z(this.htmlElement, "[data-pc-section=\"buttonicon\"]") && (this.icon || this.loading)) {
			let iconPosClass = this.label && !this.$unstyled() ? "p-button-icon-" + this.iconPos : null;
			let iconClass = !this.$unstyled() && this.getIconClass();
			let iconElement = q("span", {
				class: this.cn(this.cx("icon"), iconPosClass, iconClass),
				"aria-hidden": "true",
				"p-bind": this.ptm("buttonicon")
			});
			if (!this.loadingIcon && this.loading) iconElement.innerHTML = this.spinnerIcon;
			this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
		}
	}
	updateLabel() {
		let labelElement = Z(this.htmlElement, "[data-pc-section=\"buttonlabel\"]");
		if (!this.label) {
			labelElement && this.htmlElement.removeChild(labelElement);
			return;
		}
		labelElement ? labelElement.textContent = this.label : this.createLabel();
	}
	updateIcon() {
		let iconElement = Z(this.htmlElement, "[data-pc-section=\"buttonicon\"]");
		let labelElement = Z(this.htmlElement, "[data-pc-section=\"buttonlabel\"]");
		if (this.loading && !this.loadingIcon && iconElement) iconElement.innerHTML = this.spinnerIcon;
		else if (iconElement?.innerHTML) iconElement.innerHTML = "";
		if (iconElement && !this.$unstyled()) if (this.iconPos) iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
		else iconElement.className = "p-button-icon " + this.getIconClass();
		else this.createIcon();
	}
	getIconClass() {
		return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
	}
	onDestroy() {
		this.initialized = false;
	}
	static ɵfac = function ButtonDirective_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonDirective)();
	};
	static ɵdir = /* @__PURE__ */ ɵɵdefineDirective({
		type: ButtonDirective,
		selectors: [[
			"",
			"pButton",
			""
		]],
		contentQueries: function ButtonDirective_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuerySignal(dirIndex, ctx.iconSignal, ButtonIcon, 5)(dirIndex, ctx.labelSignal, ButtonLabel, 5);
			if (rf & 2) ɵɵqueryAdvance(2);
		},
		hostVars: 4,
		hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
			if (rf & 2) ɵɵclassProp("p-button-icon-only", !ctx.$unstyled() && ctx.isIconOnly())("p-button-text", !ctx.$unstyled() && ctx.isTextButton());
		},
		inputs: {
			ptButtonDirective: [1, "ptButtonDirective"],
			pButtonPT: [1, "pButtonPT"],
			pButtonUnstyled: [1, "pButtonUnstyled"],
			hostName: "hostName",
			text: [
				2,
				"text",
				"text",
				booleanAttribute
			],
			plain: [
				2,
				"plain",
				"plain",
				booleanAttribute
			],
			raised: [
				2,
				"raised",
				"raised",
				booleanAttribute
			],
			size: "size",
			outlined: [
				2,
				"outlined",
				"outlined",
				booleanAttribute
			],
			rounded: [
				2,
				"rounded",
				"rounded",
				booleanAttribute
			],
			iconPos: "iconPos",
			loadingIcon: "loadingIcon",
			fluid: [1, "fluid"],
			label: "label",
			icon: "icon",
			loading: "loading",
			buttonProps: "buttonProps",
			severity: "severity"
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_DIRECTIVE_INSTANCE,
					useExisting: ButtonDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonDirective
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		]
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonDirective, [{
		type: Directive,
		args: [{
			selector: "[pButton]",
			standalone: true,
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_DIRECTIVE_INSTANCE,
					useExisting: ButtonDirective
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: ButtonDirective
				}
			],
			host: {
				"[class.p-button-icon-only]": "!$unstyled() && isIconOnly()",
				"[class.p-button-text]": " !$unstyled() && isTextButton()"
			},
			hostDirectives: [Bind]
		}]
	}], () => [], {
		ptButtonDirective: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "ptButtonDirective",
				required: false
			}]
		}],
		pButtonPT: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonPT",
				required: false
			}]
		}],
		pButtonUnstyled: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "pButtonUnstyled",
				required: false
			}]
		}],
		hostName: [{ type: Input }],
		text: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		plain: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		raised: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		size: [{ type: Input }],
		outlined: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		rounded: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		iconPos: [{ type: Input }],
		loadingIcon: [{ type: Input }],
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
				required: false
			}]
		}],
		iconSignal: [{
			type: ContentChild,
			args: [forwardRef(() => ButtonIcon), { isSignal: true }]
		}],
		labelSignal: [{
			type: ContentChild,
			args: [forwardRef(() => ButtonLabel), { isSignal: true }]
		}],
		label: [{ type: Input }],
		icon: [{ type: Input }],
		loading: [{ type: Input }],
		buttonProps: [{ type: Input }],
		severity: [{ type: Input }]
	});
})();
/**
* Button is an extension to standard button element with icons and theming.
* @group Components
*/
var Button = class Button extends BaseComponent {
	componentName = "Button";
	hostName = "";
	$pcButton = inject(BUTTON_INSTANCE, {
		optional: true,
		skipSelf: true
	}) ?? void 0;
	bindDirectiveInstance = inject(Bind, { self: true });
	_componentStyle = inject(ButtonStyle);
	onAfterViewChecked() {
		this.bindDirectiveInstance.setAttrs(this.ptm("host"));
	}
	/**
	* Type of the button.
	* @group Props
	*/
	type = "button";
	/**
	* Value of the badge.
	* @group Props
	*/
	badge;
	/**
	* When present, it specifies that the component should be disabled.
	* @group Props
	*/
	disabled;
	/**
	* Add a shadow to indicate elevation.
	* @group Props
	*/
	raised = false;
	/**
	* Add a circular border radius to the button.
	* @group Props
	*/
	rounded = false;
	/**
	* Add a textual class to the button without a background initially.
	* @group Props
	*/
	text = false;
	/**
	* Add a plain textual class to the button without a background initially.
	* @group Props
	*/
	plain = false;
	/**
	* Add a border class without a background initially.
	* @group Props
	*/
	outlined = false;
	/**
	* Add a link style to the button.
	* @group Props
	*/
	link = false;
	/**
	* Add a tabindex to the button.
	* @group Props
	*/
	tabindex;
	/**
	* Defines the size of the button.
	* @group Props
	*/
	size;
	/**
	* Specifies the variant of the component.
	* @group Props
	*/
	variant;
	/**
	* Inline style of the element.
	* @group Props
	*/
	style;
	/**
	* Class of the element.
	* @group Props
	*/
	styleClass;
	/**
	* Style class of the badge.
	* @group Props
	* @deprecated use badgeSeverity instead.
	*/
	badgeClass;
	/**
	* Severity type of the badge.
	* @group Props
	* @defaultValue secondary
	*/
	badgeSeverity = "secondary";
	/**
	* Used to define a string that autocomplete attribute the current element.
	* @group Props
	*/
	ariaLabel;
	/**
	* When present, it specifies that the component should automatically get focus on load.
	* @group Props
	*/
	autofocus;
	/**
	* Position of the icon.
	* @group Props
	*/
	iconPos = "left";
	/**
	* Name of the icon.
	* @group Props
	*/
	icon;
	/**
	* Text of the button.
	* @group Props
	*/
	label;
	/**
	* Whether the button is in loading state.
	* @group Props
	*/
	loading = false;
	/**
	* Icon to display in loading state.
	* @group Props
	*/
	loadingIcon;
	/**
	* Defines the style of the button.
	* @group Props
	*/
	severity;
	/**
	* Used to pass all properties of the ButtonProps to the Button component.
	* @group Props
	*/
	buttonProps;
	/**
	* Spans 100% width of the container when enabled.
	* @defaultValue undefined
	* @group Props
	*/
	fluid = input(void 0, {
		...ngDevMode ? { debugName: "fluid" } : 		/* istanbul ignore next */ {},
		transform: booleanAttribute
	});
	/**
	* Callback to execute when button is clicked.
	* This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
	* @param {MouseEvent} event - Mouse event.
	* @group Emits
	*/
	onClick = new EventEmitter();
	/**
	* Callback to execute when button is focused.
	* This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
	* @param {FocusEvent} event - Focus event.
	* @group Emits
	*/
	onFocus = new EventEmitter();
	/**
	* Callback to execute when button loses focus.
	* This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
	* @param {FocusEvent} event - Focus event.
	* @group Emits
	*/
	onBlur = new EventEmitter();
	/**
	* Custom content template.
	* @group Templates
	**/
	contentTemplate;
	/**
	* Custom loading icon template.
	* @group Templates
	**/
	loadingIconTemplate;
	/**
	* Custom icon template.
	* @group Templates
	**/
	iconTemplate;
	templates;
	pcFluid = inject(Fluid, {
		optional: true,
		host: true,
		skipSelf: true
	});
	get hasFluid() {
		return this.fluid() ?? !!this.pcFluid;
	}
	get hasIcon() {
		return this.icon || this.buttonProps?.icon || this.iconTemplate || this._iconTemplate || this.loadingIcon || this.loadingIconTemplate || this._loadingIconTemplate;
	}
	_contentTemplate;
	_iconTemplate;
	_loadingIconTemplate;
	onAfterContentInit() {
		this.templates?.forEach((item) => {
			switch (item.getType()) {
				case "content":
					this._contentTemplate = item.template;
					break;
				case "icon":
					this._iconTemplate = item.template;
					break;
				case "loadingicon":
					this._loadingIconTemplate = item.template;
					break;
				default:
					this._contentTemplate = item.template;
					break;
			}
		});
	}
	get dataP() {
		return this.cn({
			[this.size]: this.size,
			"icon-only": this.hasIcon && !this.label && !this.badge,
			loading: this.loading,
			fluid: this.hasFluid,
			rounded: this.rounded,
			raised: this.raised,
			outlined: this.outlined || this.variant === "outlined",
			text: this.text || this.variant === "text",
			link: this.link,
			vertical: (this.iconPos === "top" || this.iconPos === "bottom") && this.label
		});
	}
	get dataIconP() {
		return this.cn({
			[this.iconPos]: this.iconPos,
			[this.size]: this.size
		});
	}
	get dataLabelP() {
		return this.cn({
			[this.size]: this.size,
			"icon-only": this.hasIcon && !this.label && !this.badge
		});
	}
	static ɵfac = /* @__PURE__ */ (() => {
		let ɵButton_BaseFactory;
		return function Button_Factory(__ngFactoryType__) {
			return (ɵButton_BaseFactory || (ɵButton_BaseFactory = ɵɵgetInheritedFactory(Button)))(__ngFactoryType__ || Button);
		};
	})();
	static ɵcmp = /* @__PURE__ */ ɵɵdefineComponent({
		type: Button,
		selectors: [["p-button"]],
		contentQueries: function Button_ContentQueries(rf, ctx, dirIndex) {
			if (rf & 1) ɵɵcontentQuery(dirIndex, _c0, 5)(dirIndex, _c1, 5)(dirIndex, _c2, 5)(dirIndex, PrimeTemplate, 4);
			if (rf & 2) {
				let _t;
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.loadingIconTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iconTemplate = _t.first);
				ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
			}
		},
		inputs: {
			hostName: "hostName",
			type: "type",
			badge: "badge",
			disabled: [
				2,
				"disabled",
				"disabled",
				booleanAttribute
			],
			raised: [
				2,
				"raised",
				"raised",
				booleanAttribute
			],
			rounded: [
				2,
				"rounded",
				"rounded",
				booleanAttribute
			],
			text: [
				2,
				"text",
				"text",
				booleanAttribute
			],
			plain: [
				2,
				"plain",
				"plain",
				booleanAttribute
			],
			outlined: [
				2,
				"outlined",
				"outlined",
				booleanAttribute
			],
			link: [
				2,
				"link",
				"link",
				booleanAttribute
			],
			tabindex: [
				2,
				"tabindex",
				"tabindex",
				numberAttribute
			],
			size: "size",
			variant: "variant",
			style: "style",
			styleClass: "styleClass",
			badgeClass: "badgeClass",
			badgeSeverity: "badgeSeverity",
			ariaLabel: "ariaLabel",
			autofocus: [
				2,
				"autofocus",
				"autofocus",
				booleanAttribute
			],
			iconPos: "iconPos",
			icon: "icon",
			label: "label",
			loading: [
				2,
				"loading",
				"loading",
				booleanAttribute
			],
			loadingIcon: "loadingIcon",
			severity: "severity",
			buttonProps: "buttonProps",
			fluid: [1, "fluid"]
		},
		outputs: {
			onClick: "onClick",
			onFocus: "onFocus",
			onBlur: "onBlur"
		},
		features: [
			ɵɵProvidersFeature([
				ButtonStyle,
				{
					provide: BUTTON_INSTANCE,
					useExisting: Button
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Button
				}
			]),
			ɵɵHostDirectivesFeature([Bind]),
			ɵɵInheritDefinitionFeature
		],
		ngContentSelectors: _c3,
		decls: 7,
		vars: 17,
		consts: [
			[
				"pRipple",
				"",
				3,
				"click",
				"focus",
				"blur",
				"ngStyle",
				"disabled",
				"pAutoFocus",
				"pBind"
			],
			[4, "ngTemplateOutlet"],
			[4, "ngIf"],
			[
				3,
				"class",
				"pBind",
				4,
				"ngIf"
			],
			[
				3,
				"value",
				"severity",
				"pt",
				"unstyled",
				4,
				"ngIf"
			],
			[
				4,
				"ngTemplateOutlet",
				"ngTemplateOutletContext"
			],
			[
				"data-p-icon",
				"spinner",
				3,
				"class",
				"pBind",
				"spin",
				4,
				"ngIf"
			],
			[3, "pBind"],
			[
				"data-p-icon",
				"spinner",
				3,
				"pBind",
				"spin"
			],
			[3, "ngIf"],
			[
				3,
				"value",
				"severity",
				"pt",
				"unstyled"
			]
		],
		template: function Button_Template(rf, ctx) {
			if (rf & 1) {
				ɵɵprojectionDef();
				ɵɵelementStart(0, "button", 0);
				ɵɵlistener("click", function Button_Template_button_click_0_listener($event) {
					return ctx.onClick.emit($event);
				})("focus", function Button_Template_button_focus_0_listener($event) {
					return ctx.onFocus.emit($event);
				})("blur", function Button_Template_button_blur_0_listener($event) {
					return ctx.onBlur.emit($event);
				});
				ɵɵprojection(1);
				ɵɵtemplate(2, Button_ng_container_2_Template, 1, 0, "ng-container", 1)(3, Button_ng_container_3_Template, 3, 6, "ng-container", 2)(4, Button_ng_container_4_Template, 3, 6, "ng-container", 2)(5, Button_span_5_Template, 2, 6, "span", 3)(6, Button_p_badge_6_Template, 1, 4, "p-badge", 4);
				ɵɵelementEnd();
			}
			if (rf & 2) {
				ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass, ctx.buttonProps == null ? null : ctx.buttonProps.styleClass));
				ɵɵproperty("ngStyle", ctx.style || (ctx.buttonProps == null ? null : ctx.buttonProps.style))("disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("pAutoFocus", ctx.autofocus || (ctx.buttonProps == null ? null : ctx.buttonProps.autofocus))("pBind", ctx.ptm("root"));
				ɵɵattribute("type", ctx.type || (ctx.buttonProps == null ? null : ctx.buttonProps.type))("aria-label", ctx.ariaLabel || (ctx.buttonProps == null ? null : ctx.buttonProps.ariaLabel))("tabindex", ctx.tabindex || (ctx.buttonProps == null ? null : ctx.buttonProps.tabindex))("data-p", ctx.dataP)("data-p-disabled", ctx.disabled || ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.disabled))("data-p-severity", ctx.severity || (ctx.buttonProps == null ? null : ctx.buttonProps.severity));
				ɵɵadvance(2);
				ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
				ɵɵadvance();
				ɵɵproperty("ngIf", ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading));
				ɵɵadvance();
				ɵɵproperty("ngIf", !(ctx.loading || (ctx.buttonProps == null ? null : ctx.buttonProps.loading)));
				ɵɵadvance();
				ɵɵproperty("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.label || (ctx.buttonProps == null ? null : ctx.buttonProps.label)));
				ɵɵadvance();
				ɵɵproperty("ngIf", !ctx.contentTemplate && !ctx._contentTemplate && (ctx.badge || (ctx.buttonProps == null ? null : ctx.buttonProps.badge)));
			}
		},
		dependencies: [
			CommonModule,
			NgIf,
			NgTemplateOutlet,
			NgStyle,
			Ripple,
			AutoFocus,
			SpinnerIcon,
			BadgeModule,
			Badge,
			SharedModule,
			Bind
		],
		encapsulation: 2
	});
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Button, [{
		type: Component,
		args: [{
			selector: "p-button",
			standalone: true,
			imports: [
				CommonModule,
				Ripple,
				AutoFocus,
				SpinnerIcon,
				BadgeModule,
				SharedModule,
				Bind
			],
			template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
            [pBind]="ptm('root')"
            [attr.data-p]="dataP"
            [attr.data-p-disabled]="disabled || loading || buttonProps?.disabled"
            [attr.data-p-severity]="severity || buttonProps?.severity"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading || buttonProps?.loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon || buttonProps?.loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin', loadingIcon || buttonProps?.loadingIcon)" [pBind]="ptm('loadingIcon')" [attr.aria-hidden]="true"></span>
                    <svg data-p-icon="spinner" *ngIf="!(loadingIcon || buttonProps?.loadingIcon)" [class]="cn(cx('loadingIcon'), cx('spinnerIcon'))" [pBind]="ptm('loadingIcon')" [spin]="true" [attr.aria-hidden]="true" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon'), pt: ptm('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!(loading || buttonProps?.loading)">
                <span *ngIf="(icon || buttonProps?.icon) && !iconTemplate && !_iconTemplate" [class]="cn(cx('icon'), icon || buttonProps?.icon)" [pBind]="ptm('icon')" [attr.data-p]="dataIconP"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon'), pt: ptm('icon') }"></ng-template>
            </ng-container>
            <span
                [class]="cx('label')"
                [attr.aria-hidden]="(icon || buttonProps?.icon) && !(label || buttonProps?.label)"
                *ngIf="!contentTemplate && !_contentTemplate && (label || buttonProps?.label)"
                [pBind]="ptm('label')"
                [attr.data-p]="dataLabelP"
                >{{ label || buttonProps?.label }}</span
            >
            <p-badge
                *ngIf="!contentTemplate && !_contentTemplate && (badge || buttonProps?.badge)"
                [value]="badge || buttonProps?.badge"
                [severity]="badgeSeverity || buttonProps?.badgeSeverity"
                [pt]="ptm('pcBadge')"
                [unstyled]="unstyled()"
            ></p-badge>
        </button>
    `,
			changeDetection: ChangeDetectionStrategy.OnPush,
			encapsulation: ViewEncapsulation.None,
			providers: [
				ButtonStyle,
				{
					provide: BUTTON_INSTANCE,
					useExisting: Button
				},
				{
					provide: PARENT_INSTANCE,
					useExisting: Button
				}
			],
			hostDirectives: [Bind]
		}]
	}], null, {
		hostName: [{ type: Input }],
		type: [{ type: Input }],
		badge: [{ type: Input }],
		disabled: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		raised: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		rounded: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		text: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		plain: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		outlined: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		link: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		tabindex: [{
			type: Input,
			args: [{ transform: numberAttribute }]
		}],
		size: [{ type: Input }],
		variant: [{ type: Input }],
		style: [{ type: Input }],
		styleClass: [{ type: Input }],
		badgeClass: [{ type: Input }],
		badgeSeverity: [{ type: Input }],
		ariaLabel: [{ type: Input }],
		autofocus: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		iconPos: [{ type: Input }],
		icon: [{ type: Input }],
		label: [{ type: Input }],
		loading: [{
			type: Input,
			args: [{ transform: booleanAttribute }]
		}],
		loadingIcon: [{ type: Input }],
		severity: [{ type: Input }],
		buttonProps: [{ type: Input }],
		fluid: [{
			type: Input,
			args: [{
				isSignal: true,
				alias: "fluid",
				required: false
			}]
		}],
		onClick: [{ type: Output }],
		onFocus: [{ type: Output }],
		onBlur: [{ type: Output }],
		contentTemplate: [{
			type: ContentChild,
			args: ["content"]
		}],
		loadingIconTemplate: [{
			type: ContentChild,
			args: ["loadingicon"]
		}],
		iconTemplate: [{
			type: ContentChild,
			args: ["icon"]
		}],
		templates: [{
			type: ContentChildren,
			args: [PrimeTemplate]
		}]
	});
})();
var ButtonModule = class ButtonModule {
	static ɵfac = function ButtonModule_Factory(__ngFactoryType__) {
		return new (__ngFactoryType__ || ButtonModule)();
	};
	static ɵmod = /* @__PURE__ */ ɵɵdefineNgModule({
		type: ButtonModule,
		imports: [
			CommonModule,
			ButtonDirective,
			Button,
			SharedModule,
			ButtonLabel,
			ButtonIcon
		],
		exports: [
			ButtonDirective,
			Button,
			ButtonLabel,
			ButtonIcon,
			SharedModule
		]
	});
	static ɵinj = /* @__PURE__ */ ɵɵdefineInjector({ imports: [
		CommonModule,
		Button,
		SharedModule,
		SharedModule
	] });
};
(() => {
	(typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
		type: NgModule,
		args: [{
			imports: [
				CommonModule,
				ButtonDirective,
				Button,
				SharedModule,
				ButtonLabel,
				ButtonIcon
			],
			exports: [
				ButtonDirective,
				Button,
				ButtonLabel,
				ButtonIcon,
				SharedModule
			]
		}]
	}], null, null);
})();
//#endregion
export { ButtonLabel as a, ButtonIcon as i, ButtonClasses as n, ButtonModule as o, ButtonDirective as r, ButtonStyle as s, Button as t };
