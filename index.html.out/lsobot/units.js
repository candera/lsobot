// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('lsobot.units');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
lsobot.units.ft_per_m = 3.28084;
lsobot.units.m__GT_ft = (function lsobot$units$m__GT_ft(m){
return (m * lsobot.units.ft_per_m);
});
lsobot.units.ft__GT_m = (function lsobot$units$ft__GT_m(ft){
return (ft / lsobot.units.ft_per_m);
});
lsobot.units.nm__GT_ft = (function lsobot$units$nm__GT_ft(nm){
return (nm * 6076.12);
});
lsobot.units.deg_per_rad = (180.0 / Math.PI);
lsobot.units.rad__GT_deg = (function lsobot$units$rad__GT_deg(rad){
return (rad * lsobot.units.deg_per_rad);
});
lsobot.units.deg__GT_rad = (function lsobot$units$deg__GT_rad(deg){
return (deg / lsobot.units.deg_per_rad);
});
lsobot.units.kts__GT_m_per_sec = (function lsobot$units$kts__GT_m_per_sec(kts){
return (kts * 0.514444);
});
lsobot.units.kts__GT_ft_per_sec = (function lsobot$units$kts__GT_ft_per_sec(kts){
return (kts * 1.68781);
});
lsobot.units.s__GT_dhms = (function lsobot$units$s__GT_dhms(t){
var s = cljs.core.mod(t,(60));
var t__$1 = cljs.core.long$((t / (60)));
var m = cljs.core.mod(t__$1,(60));
var t__$2 = cljs.core.long$((t__$1 / (60)));
var h = cljs.core.mod(t__$2,(24));
var d = cljs.core.long$((t__$2 / (24)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$d,(d + (1)),cljs.core.cst$kw$h,h,cljs.core.cst$kw$m,m,cljs.core.cst$kw$s,s], null);
});
lsobot.units.time__GT_str = (function lsobot$units$time__GT_str(t){
var map__25419 = lsobot.units.s__GT_dhms(t);
var map__25419__$1 = ((((!((map__25419 == null)))?((((map__25419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25419):map__25419);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,cljs.core.cst$kw$d);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,cljs.core.cst$kw$h);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,cljs.core.cst$kw$m);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25419__$1,cljs.core.cst$kw$s);
var G__25421 = "%02d/%02d:%02d:%02d";
var G__25422 = d;
var G__25423 = h;
var G__25424 = m;
var G__25425 = cljs.core.long$(s);
return goog.string.format(G__25421,G__25422,G__25423,G__25424,G__25425);
});
