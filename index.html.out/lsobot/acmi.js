// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('lsobot.acmi');
goog.require('cljs.core');
goog.require('clojure.string');
lsobot.acmi.log = cljs.core.constantly(null);
lsobot.acmi.id_digits = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 22, ["A",null,"a",null,"B",null,"b",null,"C",null,"c",null,"D",null,"d",null,"E",null,"e",null,"F",null,"f",null,"0",null,"1",null,"2",null,"3",null,"4",null,"5",null,"6",null,"7",null,"8",null,"9",null], null), null);
lsobot.acmi.id = null;
lsobot.acmi.event = null;
lsobot.acmi.entity_info = null;
lsobot.acmi.frame = null;
lsobot.acmi.file = null;
lsobot.acmi.parse_float = (function lsobot$acmi$parse_float(s){
(lsobot.acmi.log.cljs$core$IFn$_invoke$arity$3 ? lsobot.acmi.log.cljs$core$IFn$_invoke$arity$3("parsing",cljs.core.cst$kw$s,s) : lsobot.acmi.log.call(null,"parsing",cljs.core.cst$kw$s,s));

if(cljs.core.empty_QMARK_(s)){
return null;
} else {
return (new Number(s));
}
});
lsobot.acmi.fields = cljs.core.PersistentHashMap.fromArrays(["T","Importance","AOA","Parent","Country","Type","LockedTarget","Mach","LandingGear","Length","DragChute","HDG","Tailhook","Coalition","Squawk","Pilot","Width","Flaps","Throttle","Parachute","Debug","IAS","Slot","AirBrakes","Label","Height","Afterburner","Registration","Name","Group","Color","TAS"],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$location], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_important], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_aoa], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_parent], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_country], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$taglist,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_object_DASH_type], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_locked_DASH_target], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_mach], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_landing_DASH_gear], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_length], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_drag_DASH_chute], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_heading], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_tailhook], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_coalition], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_squawk], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_pilot], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_width], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_flaps], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_throttle], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_parachute], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_debug], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_indicated_DASH_airspeed], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$integer,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_slot], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_airbrakes], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_label], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_height], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_afterburner], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_registration], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_name], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_group], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_color], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parse_DASH_as,cljs.core.cst$kw$float,cljs.core.cst$kw$key,cljs.core.cst$kw$lsobot$acmi_SLASH_true_DASH_airspeed], null)]);
if(typeof lsobot.acmi.parse_field !== 'undefined'){
} else {
lsobot.acmi.parse_field = (function (){var method_table__18792__auto__ = (function (){var G__29566 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29566) : cljs.core.atom.call(null,G__29566));
})();
var prefer_table__18793__auto__ = (function (){var G__29567 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29567) : cljs.core.atom.call(null,G__29567));
})();
var method_cache__18794__auto__ = (function (){var G__29568 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29568) : cljs.core.atom.call(null,G__29568));
})();
var cached_hierarchy__18795__auto__ = (function (){var G__29569 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__29569) : cljs.core.atom.call(null,G__29569));
})();
var hierarchy__18796__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lsobot.acmi","parse-field"),((function (method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__){
return (function (p__29570){
var vec__29571 = p__29570;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(1),null);
return cljs.core.cst$kw$parse_DASH_as.cljs$core$IFn$_invoke$arity$1((lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1 ? lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1(k) : lsobot.acmi.fields.call(null,k)));
});})(method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__,hierarchy__18796__auto__))
,cljs.core.cst$kw$default,hierarchy__18796__auto__,method_table__18792__auto__,prefer_table__18793__auto__,method_cache__18794__auto__,cached_hierarchy__18795__auto__));
})();
}
lsobot.acmi.parse_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$location,(function (p__29574){
var vec__29575 = p__29574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29575,(1),null);
var parts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(lsobot.acmi.parse_float,clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,/\|/));
if((cljs.core.count(parts) < (6))){
var vec__29578 = parts;
var long$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29578,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29578,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29578,(2),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29578,(3),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29578,(4),null);
var G__29581 = cljs.core.PersistentArrayMap.EMPTY;
var G__29581__$1 = (cljs.core.truth_(long$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29581,cljs.core.cst$kw$lsobot$acmi_SLASH_long,long$):G__29581);
var G__29581__$2 = (cljs.core.truth_(lat)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29581__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_lat,lat):G__29581__$1);
var G__29581__$3 = (cljs.core.truth_(alt)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29581__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_alt,alt):G__29581__$2);
var G__29581__$4 = (cljs.core.truth_(u)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29581__$3,cljs.core.cst$kw$lsobot$acmi_SLASH_u,u):G__29581__$3);
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29581__$4,cljs.core.cst$kw$lsobot$acmi_SLASH_v,v__$1);
} else {
return G__29581__$4;
}
} else {
var vec__29582 = parts;
var long$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(0),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(1),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(2),null);
var roll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(3),null);
var pitch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(4),null);
var yaw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(5),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(6),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(7),null);
var heading = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29582,(8),null);
var G__29585 = cljs.core.PersistentArrayMap.EMPTY;
var G__29585__$1 = (cljs.core.truth_(long$)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585,cljs.core.cst$kw$lsobot$acmi_SLASH_long,long$):G__29585);
var G__29585__$2 = (cljs.core.truth_(lat)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_lat,lat):G__29585__$1);
var G__29585__$3 = (cljs.core.truth_(alt)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_alt,alt):G__29585__$2);
var G__29585__$4 = (cljs.core.truth_(roll)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$3,cljs.core.cst$kw$lsobot$acmi_SLASH_roll,roll):G__29585__$3);
var G__29585__$5 = (cljs.core.truth_(pitch)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$4,cljs.core.cst$kw$lsobot$acmi_SLASH_pitch,pitch):G__29585__$4);
var G__29585__$6 = (cljs.core.truth_(yaw)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$5,cljs.core.cst$kw$lsobot$acmi_SLASH_yaw,yaw):G__29585__$5);
var G__29585__$7 = (cljs.core.truth_(u)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$6,cljs.core.cst$kw$lsobot$acmi_SLASH_u,u):G__29585__$6);
var G__29585__$8 = (cljs.core.truth_(v__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$7,cljs.core.cst$kw$lsobot$acmi_SLASH_v,v__$1):G__29585__$7);
if(cljs.core.truth_(heading)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29585__$8,cljs.core.cst$kw$lsobot$acmi_SLASH_heading,heading);
} else {
return G__29585__$8;
}
}
}));
lsobot.acmi.parse_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$taglist,(function (p__29586){
var vec__29587 = p__29586;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29587,(1),null);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1((lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1 ? lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1(k) : lsobot.acmi.fields.call(null,k))),cljs.core.set(clojure.string.split.cljs$core$IFn$_invoke$arity$2(v,/\+/))], true, false);
}));
lsobot.acmi.parse_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__29590){
var vec__29591 = p__29590;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29591,(1),null);
return cljs.core.PersistentArrayMap.fromArray([(function (){var or__17769__auto__ = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1((lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1 ? lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1(k) : lsobot.acmi.fields.call(null,k)));
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return k;
}
})(),v], true, false);
}));
lsobot.acmi.parse_field.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$float,(function (p__29594){
var vec__29595 = p__29594;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29595,(1),null);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1((lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1 ? lsobot.acmi.fields.cljs$core$IFn$_invoke$arity$1(k) : lsobot.acmi.fields.call(null,k))),lsobot.acmi.parse_float(v)], true, false);
}));
lsobot.acmi.event_types = new cljs.core.PersistentArrayMap(null, 7, ["Message",cljs.core.cst$kw$lsobot$acmi_SLASH_message,"Bookmark",cljs.core.cst$kw$lsobot$acmi_SLASH_bookmark,"Debug",cljs.core.cst$kw$lsobot$acmi_SLASH_debug,"LeftArea",cljs.core.cst$kw$lsobot$acmi_SLASH_left_DASH_area,"Destroyed",cljs.core.cst$kw$lsobot$acmi_SLASH_destroyed,"TakenOff",cljs.core.cst$kw$lsobot$acmi_SLASH_takeoff,"Landed",cljs.core.cst$kw$lsobot$acmi_SLASH_landed], null);
lsobot.acmi.parse_event = (function lsobot$acmi$parse_event(event_data){
var vec__29601 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(event_data,/\|/);
var seq__29602 = cljs.core.seq(vec__29601);
var first__29603 = cljs.core.first(seq__29602);
var seq__29602__$1 = cljs.core.next(seq__29602);
var event_type = first__29603;
var more = seq__29602__$1;
var ids = ((((1) < cljs.core.count(more)))?cljs.core.butlast(more):null);
var text = cljs.core.last(more);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lsobot$acmi_SLASH_event_DASH_type,(lsobot.acmi.event_types.cljs$core$IFn$_invoke$arity$1 ? lsobot.acmi.event_types.cljs$core$IFn$_invoke$arity$1(event_type) : lsobot.acmi.event_types.call(null,event_type)),cljs.core.cst$kw$lsobot$acmi_SLASH_ids,ids,cljs.core.cst$kw$lsobot$acmi_SLASH_text,text], null);
});
lsobot.acmi.parse_entity_line = (function lsobot$acmi$parse_entity_line(line){
var vec__29608 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/);
var seq__29609 = cljs.core.seq(vec__29608);
var first__29610 = cljs.core.first(seq__29609);
var seq__29609__$1 = cljs.core.next(seq__29609);
var id = first__29610;
var fields = seq__29609__$1;
var raw = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__29608,seq__29609,first__29610,seq__29609__$1,id,fields){
return (function (p1__29604_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__29604_SHARP_,/=/);
});})(vec__29608,seq__29609,first__29610,seq__29609__$1,id,fields))
,fields));
if(cljs.core.contains_QMARK_(raw,"Event")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event,lsobot.acmi.parse_event(cljs.core.get.cljs$core$IFn$_invoke$arity$2(raw,"Event"))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$entity_DASH_info,cljs.core.PersistentArrayMap.fromArray([id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lsobot.acmi.parse_field,raw)),cljs.core.cst$kw$lsobot$acmi_SLASH_removed_QMARK_,false)], true, false)], null);
}
});
/**
 * Returns [line-type line-info] given a line from an ACMI file
 */
lsobot.acmi.parse_line = (function lsobot$acmi$parse_line(line){
if(cljs.core.truth_(line.startsWith("//"))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$comment], null);
} else {
if(cljs.core.truth_(line.startsWith("#"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timestamp,(new Number(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(1))))], null);
} else {
if(cljs.core.truth_(line.startsWith("-"))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$deletion,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(line,(1))], null);
} else {
return lsobot.acmi.parse_entity_line(line);

}
}
}
});
lsobot.acmi.read_acmi = (function lsobot$acmi$read_acmi(var_args){
var args29611 = [];
var len__18952__auto___29639 = arguments.length;
var i__18953__auto___29640 = (0);
while(true){
if((i__18953__auto___29640 < len__18952__auto___29639)){
args29611.push((arguments[i__18953__auto___29640]));

var G__29641 = (i__18953__auto___29640 + (1));
i__18953__auto___29640 = G__29641;
continue;
} else {
}
break;
}

var G__29613 = args29611.length;
switch (G__29613) {
case 1:
return lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29611.length)].join('')));

}
});

lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$1 = (function (contents){
return lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$2(contents,cljs.core.constantly(true));
});

lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$2 = (function (contents,entity_pred){
var lines = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),clojure.string.split.cljs$core$IFn$_invoke$arity$2(contents,"\n"));
var G__29614_29643 = cljs.core.cst$kw$lines;
var G__29615_29644 = cljs.core.count(lines);
(lsobot.acmi.log.cljs$core$IFn$_invoke$arity$2 ? lsobot.acmi.log.cljs$core$IFn$_invoke$arity$2(G__29614_29643,G__29615_29644) : lsobot.acmi.log.call(null,G__29614_29643,G__29615_29644));

var G__29619 = lines;
var vec__29620 = G__29619;
var seq__29621 = cljs.core.seq(vec__29620);
var first__29622 = cljs.core.first(seq__29621);
var seq__29621__$1 = cljs.core.next(seq__29621);
var line = first__29622;
var more_lines = seq__29621__$1;
var entities = cljs.core.PersistentArrayMap.EMPTY;
var events = cljs.core.PersistentVector.EMPTY;
var t = 0.0;
var frames = cljs.core.PersistentVector.EMPTY;
var G__29619__$1 = G__29619;
var entities__$1 = entities;
var events__$1 = events;
var t__$1 = t;
var frames__$1 = frames;
while(true){
var vec__29623 = G__29619__$1;
var seq__29624 = cljs.core.seq(vec__29623);
var first__29625 = cljs.core.first(seq__29624);
var seq__29624__$1 = cljs.core.next(seq__29624);
var line__$1 = first__29625;
var more_lines__$1 = seq__29624__$1;
var entities__$2 = entities__$1;
var events__$2 = events__$1;
var t__$2 = t__$1;
var frames__$2 = frames__$1;
var G__29626_29645 = cljs.core.cst$kw$t;
var G__29627_29646 = t__$2;
var G__29628_29647 = cljs.core.cst$kw$frames;
var G__29629_29648 = cljs.core.count(frames__$2);
(lsobot.acmi.log.cljs$core$IFn$_invoke$arity$4 ? lsobot.acmi.log.cljs$core$IFn$_invoke$arity$4(G__29626_29645,G__29627_29646,G__29628_29647,G__29629_29648) : lsobot.acmi.log.call(null,G__29626_29645,G__29627_29646,G__29628_29647,G__29629_29648));

if(cljs.core.not(line__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$lsobot$acmi_SLASH_frames,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames__$2,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lsobot$acmi_SLASH_t,t__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_events,events__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_entities,entities__$2], null))], null);
} else {
var vec__29630 = lsobot.acmi.parse_line(line__$1);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(0),null);
var line_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29630,(1),null);
var G__29633_29649 = cljs.core.cst$kw$line;
var G__29634_29650 = line__$1;
var G__29635_29651 = cljs.core.cst$kw$line_DASH_info;
var G__29636_29652 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([line_info], 0));
(lsobot.acmi.log.cljs$core$IFn$_invoke$arity$4 ? lsobot.acmi.log.cljs$core$IFn$_invoke$arity$4(G__29633_29649,G__29634_29650,G__29635_29651,G__29636_29652) : lsobot.acmi.log.call(null,G__29633_29649,G__29634_29650,G__29635_29651,G__29636_29652));

var G__29637 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29637) {
case "comment":
var G__29654 = more_lines__$1;
var G__29655 = entities__$2;
var G__29656 = cljs.core.PersistentVector.EMPTY;
var G__29657 = t__$2;
var G__29658 = frames__$2;
G__29619__$1 = G__29654;
entities__$1 = G__29655;
events__$1 = G__29656;
t__$1 = G__29657;
frames__$1 = G__29658;
continue;

break;
case "timestamp":
var G__29659 = more_lines__$1;
var G__29660 = entities__$2;
var G__29661 = cljs.core.PersistentVector.EMPTY;
var G__29662 = line_info;
var G__29663 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames__$2,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lsobot$acmi_SLASH_t,t__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_events,events__$2,cljs.core.cst$kw$lsobot$acmi_SLASH_entities,entities__$2], null));
G__29619__$1 = G__29659;
entities__$1 = G__29660;
events__$1 = G__29661;
t__$1 = G__29662;
frames__$1 = G__29663;
continue;

break;
case "entity-info":
var G__29664 = more_lines__$1;
var G__29665 = (function (){var id = cljs.core.first(cljs.core.keys(line_info));
var props = cljs.core.first(cljs.core.vals(line_info));
if(cljs.core.truth_((function (){var or__17769__auto__ = (entity_pred.cljs$core$IFn$_invoke$arity$1 ? entity_pred.cljs$core$IFn$_invoke$arity$1(props) : entity_pred.call(null,props));
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
var G__29638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entities__$2,id);
return (entity_pred.cljs$core$IFn$_invoke$arity$1 ? entity_pred.cljs$core$IFn$_invoke$arity$1(G__29638) : entity_pred.call(null,G__29638));
}
})())){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([entities__$2,line_info], 0));
} else {
return entities__$2;
}
})();
var G__29666 = events__$2;
var G__29667 = t__$2;
var G__29668 = frames__$2;
G__29619__$1 = G__29664;
entities__$1 = G__29665;
events__$1 = G__29666;
t__$1 = G__29667;
frames__$1 = G__29668;
continue;

break;
case "event":
var G__29669 = more_lines__$1;
var G__29670 = entities__$2;
var G__29671 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(events__$2,line_info);
var G__29672 = t__$2;
var G__29673 = frames__$2;
G__29619__$1 = G__29669;
entities__$1 = G__29670;
events__$1 = G__29671;
t__$1 = G__29672;
frames__$1 = G__29673;
continue;

break;
case "deletion":
var G__29674 = more_lines__$1;
var G__29675 = (function (){var id = line_info;
if(cljs.core.contains_QMARK_(entities__$2,id)){
return cljs.core.assoc_in(entities__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_info,cljs.core.cst$kw$lsobot$acmi_SLASH_removed_QMARK_], null),true);
} else {
return entities__$2;
}
})();
var G__29676 = events__$2;
var G__29677 = t__$2;
var G__29678 = frames__$2;
G__29619__$1 = G__29674;
entities__$1 = G__29675;
events__$1 = G__29676;
t__$1 = G__29677;
frames__$1 = G__29678;
continue;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
}
break;
}
});

lsobot.acmi.read_acmi.cljs$lang$maxFixedArity = 2;

/**
 * Returns index of the closest frame at or after the specified time.
 */
lsobot.acmi.frame_index_at = (function lsobot$acmi$frame_index_at(file,t){
var frames = cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(file);
var low = (0);
var high = (cljs.core.count(frames) - (1));
while(true){
var idx = (((low + high) / (2)) | (0));
var t0 = cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frames,idx));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t0,t)){
return idx;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(low,(high - (1)))){
return (idx + (1));
} else {
if((t0 < t)){
var G__29679 = idx;
var G__29680 = high;
low = G__29679;
high = G__29680;
continue;
} else {
var G__29681 = low;
var G__29682 = idx;
low = G__29681;
high = G__29682;
continue;

}
}
}
break;
}
});
/**
 * Returns the closest frame at or after the specified time.
 */
lsobot.acmi.frame_at = (function lsobot$acmi$frame_at(file,t){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(file),lsobot.acmi.frame_index_at(file,t));
});
/**
 * Returns the entities of a frame
 */
lsobot.acmi.entities = (function lsobot$acmi$entities(frame){
return cljs.core.cst$kw$lsobot$acmi_SLASH_entities.cljs$core$IFn$_invoke$arity$1(frame);
});
/**
 * Returns an entity from a frame
 */
lsobot.acmi.entity = (function lsobot$acmi$entity(frame,id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(lsobot.acmi.entities(frame),id);
});
/**
 * Return entity `id` from closest frame at or after specified time.
 */
lsobot.acmi.entity_at = (function lsobot$acmi$entity_at(file,id,t){
var frame = lsobot.acmi.frame_at(file,t);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$acmi_SLASH_entities.cljs$core$IFn$_invoke$arity$1(frame),id);
});
