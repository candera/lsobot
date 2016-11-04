// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('lsobot.svg_fix');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('hoplon.svg');
/**
 * Fix Hoplon SVG rendering.
 */
lsobot.svg_fix.fix_svg_BANG_ = (function lsobot$svg_fix$fix_svg_BANG_(){
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$viewBox,(function (elem,_,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,value)){
return elem.removeAttribute("viewBox");
} else {
return elem.setAttribute("viewBox",value);
}
}));

return hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$preserveAspectRatio,(function (elem,_,value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,value)){
return elem.removeAttribute("preserveAspectRatio");
} else {
return elem.setAttribute("preserveAspectRatio",value);
}
}));
});
