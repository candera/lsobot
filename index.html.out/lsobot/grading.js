// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('lsobot.grading');
goog.require('cljs.core');
goog.require('lsobot.acmi');
goog.require('lsobot.units');
goog.require('taoensso.timbre');
lsobot.grading.grades = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$lsobot$grading_SLASH_ok_PLUS_,cljs.core.cst$kw$lsobot$grading_SLASH_incomplete,cljs.core.cst$kw$lsobot$grading_SLASH_own_DASH_waveoff,cljs.core.cst$kw$lsobot$grading_SLASH_cut_DASH_pass,cljs.core.cst$kw$lsobot$grading_SLASH_waveoff,cljs.core.cst$kw$lsobot$grading_SLASH_foul_DASH_deck_DASH_waveoff,cljs.core.cst$kw$lsobot$grading_SLASH_bolter,cljs.core.cst$kw$lsobot$grading_SLASH_none,cljs.core.cst$kw$lsobot$grading_SLASH_waveoff_DASH_pattern,cljs.core.cst$kw$lsobot$grading_SLASH_fair,cljs.core.cst$kw$lsobot$grading_SLASH_ok],[new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A perfect pass. Reserved for outstanding landings with significant complicating factors (an engine out, for example). Naval aviators often have hundreds of carrier landings without ever receiving this grade.",cljs.core.cst$kw$score,(5)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$description,"Insufficient data to determine the status of the pass."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"Own waveoff, executed when clearance to land via Roger ball or cut lights are received",cljs.core.cst$kw$score,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"An unsafe pass with unacceptable deviations, typically after a wave off is possible. The worst grade. You definitely don\u2019t want to get many of those. They\u2019re career enders.",cljs.core.cst$kw$score,(0)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A pass defined as \u2018unsettled dynamics, potentially unsafe\u2019, with deviations from centerline, glideslope and/or angle of attack that are unsafe and need to be aborted.",cljs.core.cst$kw$score,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$description,"A pass that was aborted due to the landing area being \u2018fouled\u2019. No points are assigned, and the pass is not counted toward the pilot\u2019s landing grade average."], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A safe pass where the hook is down and the aircraft does not stop. Counts against pilot/squadron/wing \u2018boarding rate\u2019.",cljs.core.cst$kw$score,2.5], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A pass with gross deviations or inappropriate corrections. It\u2019s ugly, but safely ugly. Nevertheless, you don\u2019t want to make a habit of being safely ugly. Failure to respond to LSO calls will often result in this grade.",cljs.core.cst$kw$score,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"Usually issued for gross deviations in the approach turn.",cljs.core.cst$kw$score,(2)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A pass with one or more safe deviations and appropriate corrections. Fleet average.",cljs.core.cst$kw$score,(3)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$description,"A pass with only very minor deviations. Pretty much the best that you can do \u2013 above average, in other words. You don\u2019t count on Ok.",cljs.core.cst$kw$score,(4)], null)]);
lsobot.grading.frame = null;
lsobot.grading.frames = null;
lsobot.grading.deviation = null;
/**
 * Describes a series of deviations that summarize some aspect of an
 *   an approach. A perfect approach would have two deviations, one each
 *   at the start and the end, whose value would be the ideal for that
 *   dimension.
 */
lsobot.grading.deviations = null;
lsobot.grading.comments = null;
lsobot.grading.assessment = null;
lsobot.grading.default_parameters = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$coda,cljs.core.cst$kw$ramp_DASH_to_DASH_1_DASH_wire,cljs.core.cst$kw$trap_DASH_speed,cljs.core.cst$kw$recovery_DASH_skew,cljs.core.cst$kw$landing_DASH_area_DASH_length,cljs.core.cst$kw$max_DASH_dist,cljs.core.cst$kw$landing_DASH_window,cljs.core.cst$kw$touchdown_DASH_height,cljs.core.cst$kw$weights,cljs.core.cst$kw$landing_DASH_area_DASH_width,cljs.core.cst$kw$max_DASH_angle,cljs.core.cst$kw$wire_DASH_interval,cljs.core.cst$kw$landing_DASH_point,cljs.core.cst$kw$max_DASH_slope,cljs.core.cst$kw$glideslope,cljs.core.cst$kw$zones,cljs.core.cst$kw$aoa,cljs.core.cst$kw$lineup,cljs.core.cst$kw$min_DASH_time,cljs.core.cst$kw$min_DASH_dist,cljs.core.cst$kw$hook_DASH_offset],[(4),(176),lsobot.units.kts__GT_ft_per_sec((70)),(11),(795),1.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(150)], null),(10),new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$start,(1),cljs.core.cst$kw$end,(1),cljs.core.cst$kw$ideal,(1),cljs.core.cst$kw$good,(1),cljs.core.cst$kw$minor,(2),cljs.core.cst$kw$major,(3),cljs.core.cst$kw$unacceptable,(4)], null),(80),(20),(40),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-13.5,-295.2,67.75], null),(6),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ideal,3.3,cljs.core.cst$kw$good,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,3.1,cljs.core.cst$kw$high,3.5], null),cljs.core.cst$kw$minor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,2.7,cljs.core.cst$kw$high,3.9], null),cljs.core.cst$kw$major,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,2.3,cljs.core.cst$kw$high,4.3], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,(4500),cljs.core.cst$kw$to,(3000)], null),cljs.core.cst$kw$mid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,(3000),cljs.core.cst$kw$to,(1500)], null),cljs.core.cst$kw$in_DASH_close,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$from,(1500),cljs.core.cst$kw$to,(600)], null),cljs.core.cst$kw$at_DASH_ramp,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$in_DASH_the_DASH_wires,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ideal,8.1,cljs.core.cst$kw$good,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,7.4,cljs.core.cst$kw$high,8.8], null),cljs.core.cst$kw$minor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,7.4,cljs.core.cst$kw$high,8.8], null),cljs.core.cst$kw$major,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,6.9,cljs.core.cst$kw$high,9.3], null)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ideal,(0),cljs.core.cst$kw$good,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,(-1),cljs.core.cst$kw$high,(1)], null),cljs.core.cst$kw$minor,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,(-2),cljs.core.cst$kw$high,(2)], null),cljs.core.cst$kw$major,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,(-3),cljs.core.cst$kw$high,(3)], null)], null),(10),0.5,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,18.04,-6.87], null)]);
/**
 * Returns the bearing between two objects in degrees.
 */
lsobot.grading.bearing = (function lsobot$grading$bearing(from,to){
var u1 = (function (){var G__33845 = from;
var G__33845__$1 = (((G__33845 == null))?null:cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(G__33845));
if((G__33845__$1 == null)){
return null;
} else {
return lsobot.units.m__GT_ft(G__33845__$1);
}
})();
var u2 = (function (){var G__33846 = to;
var G__33846__$1 = (((G__33846 == null))?null:cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(G__33846));
if((G__33846__$1 == null)){
return null;
} else {
return lsobot.units.m__GT_ft(G__33846__$1);
}
})();
var v1 = (function (){var G__33847 = from;
var G__33847__$1 = (((G__33847 == null))?null:cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(G__33847));
if((G__33847__$1 == null)){
return null;
} else {
return lsobot.units.m__GT_ft(G__33847__$1);
}
})();
var v2 = (function (){var G__33848 = to;
var G__33848__$1 = (((G__33848 == null))?null:cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(G__33848));
if((G__33848__$1 == null)){
return null;
} else {
return lsobot.units.m__GT_ft(G__33848__$1);
}
})();
if(cljs.core.truth_((function (){var and__17757__auto__ = u1;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = u2;
if(cljs.core.truth_(and__17757__auto____$1)){
var and__17757__auto____$2 = v1;
if(cljs.core.truth_(and__17757__auto____$2)){
return v2;
} else {
return and__17757__auto____$2;
}
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})())){
var ud = (u2 - u1);
var vd = (v2 - v1);
return cljs.core.mod(lsobot.units.rad__GT_deg(Math.atan2(ud,vd)),(360));
} else {
return null;
}
});
/**
 * Rotate a point in 3D space around the z axis by deg.
 */
lsobot.grading.rotate_z = (function lsobot$grading$rotate_z(deg,p__33849){
var vec__33853 = p__33849;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33853,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33853,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33853,(2),null);
var theta = lsobot.units.deg__GT_rad(deg);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * Math.cos(theta)) - (y * Math.sin(theta))),((y * Math.cos(theta)) + (x * Math.sin(theta))),z], null);
});
/**
 * Classifies the deviation value v represents according to params.
 */
lsobot.grading.classify = (function lsobot$grading$classify(params,v){
var map__33858 = params;
var map__33858__$1 = ((((!((map__33858 == null)))?((((map__33858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33858):map__33858);
var ideal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,cljs.core.cst$kw$ideal);
var good = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,cljs.core.cst$kw$good);
var minor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,cljs.core.cst$kw$minor);
var major = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33858__$1,cljs.core.cst$kw$major);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lsobot$grading_SLASH_degree,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ideal,v))?cljs.core.cst$kw$ideal:((((cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(good) <= v)) && ((v <= cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(good))))?cljs.core.cst$kw$good:((((cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(minor) <= v)) && ((v <= cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(minor))))?cljs.core.cst$kw$minor:((((cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(major) <= v)) && ((v <= cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(major))))?cljs.core.cst$kw$major:cljs.core.cst$kw$unacceptable
)))),cljs.core.cst$kw$lsobot$grading_SLASH_direction,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,ideal))?null:(((v < ideal))?cljs.core.cst$kw$low:cljs.core.cst$kw$high))], null);
});
/**
 * Compute the glideslope, taking the landing window into
 *   consideration. Angles are in degrees.
 */
lsobot.grading.glideslope = (function lsobot$grading$glideslope(params,window,height,distance,downrange){
var w = (window / (2));
var d_far = (distance + w);
var d_near = (distance - w);
var g_ideal = lsobot.units.deg__GT_rad(cljs.core.cst$kw$ideal.cljs$core$IFn$_invoke$arity$1(params));
var g_near = Math.atan2(height,d_near);
var g_far = Math.atan2(height,d_far);
var value = lsobot.units.rad__GT_deg(((((g_far <= g_ideal)) && ((g_ideal <= g_near)))?g_ideal:(((g_ideal < g_far))?g_far:g_near
)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lsobot$grading_SLASH_value,value,cljs.core.cst$kw$lsobot$grading_SLASH_deviation,(((downrange > (0)))?lsobot.grading.classify(params,value):null)], null);
});
/**
 * Compute the lineup error, taking the landing window
 *   consideration. Angles are in degrees.
 */
lsobot.grading.lineup = (function lsobot$grading$lineup(params,window,crosstrack_error,downrange){
var w = (window / (2));
var c_right = (crosstrack_error + w);
var c_left = (crosstrack_error - w);
var l_ideal = lsobot.units.deg__GT_rad(cljs.core.cst$kw$ideal.cljs$core$IFn$_invoke$arity$1(params));
var l_left = Math.atan2(c_left,downrange);
var l_right = Math.atan2(c_right,downrange);
var value = lsobot.units.rad__GT_deg(((((l_left <= l_ideal)) && ((l_ideal <= l_right)))?l_ideal:(((l_ideal < l_left))?l_left:l_right
)));
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lsobot$grading_SLASH_value,value,cljs.core.cst$kw$lsobot$grading_SLASH_deviation,(((downrange > (0)))?lsobot.grading.classify(params,value):null)], null);
});
lsobot.grading.characterize_frame = (function lsobot$grading$characterize_frame(carrier_id,pilot_id,params,frame){
var map__33878 = frame;
var map__33878__$1 = ((((!((map__33878 == null)))?((((map__33878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33878):map__33878);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_t);
var entities = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33878__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_entities);
var carrier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entities,carrier_id);
var pilot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entities,pilot_id);
var pilot_loc = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(pilot),cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(pilot),cljs.core.cst$kw$lsobot$acmi_SLASH_alt.cljs$core$IFn$_invoke$arity$1(pilot)], null);
var removed_QMARK_ = cljs.core.cst$kw$lsobot$acmi_SLASH_removed_QMARK_.cljs$core$IFn$_invoke$arity$1(pilot);
if(cljs.core.truth_(cljs.core.some(cljs.core.nil_QMARK_,pilot_loc))){
return null;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$removed_QMARK_,removed_QMARK_], null),((cljs.core.not((function (){var and__17757__auto__ = cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(carrier);
if(cljs.core.truth_(and__17757__auto__)){
return cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(carrier);
} else {
return and__17757__auto__;
}
})()))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$approaching_QMARK_,false], null):(function (){var carrier_loc = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(carrier),cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(carrier),(0)], null);
var carrier_hdg = (function (){var or__17769__auto__ = cljs.core.cst$kw$lsobot$acmi_SLASH_heading.cljs$core$IFn$_invoke$arity$1(carrier);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})();
var landing_loc = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,lsobot.grading.rotate_z((- carrier_hdg),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lsobot.units.ft__GT_m,cljs.core.cst$kw$landing_DASH_point.cljs$core$IFn$_invoke$arity$1(params))),carrier_loc);
var vec__33880 = cljs.core.cst$kw$landing_DASH_window.cljs$core$IFn$_invoke$arity$1(params);
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33880,(0),null);
var window_length = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33880,(1),null);
var coords = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1),(1)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lsobot.units.m__GT_ft,lsobot.grading.rotate_z((carrier_hdg - cljs.core.cst$kw$recovery_DASH_skew.cljs$core$IFn$_invoke$arity$1(params)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._,pilot_loc,landing_loc))));
var vec__33883 = coords;
var crosstrack_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33883,(0),null);
var downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33883,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33883,(2),null);
var pitch = (function (){var or__17769__auto__ = (function (){var G__33893 = frame;
var G__33893__$1 = (((G__33893 == null))?null:lsobot.acmi.entity(G__33893,pilot_id));
var G__33893__$2 = (((G__33893__$1 == null))?null:cljs.core.cst$kw$lsobot$acmi_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(G__33893__$1));
var G__33893__$3 = (((G__33893__$2 == null))?null:lsobot.units.deg__GT_rad(G__33893__$2));
if((G__33893__$3 == null)){
return null;
} else {
return (- G__33893__$3);
}
})();
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})();
var vec__33886 = cljs.core.cst$kw$hook_DASH_offset.cljs$core$IFn$_invoke$arity$1(params);
var hx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(0),null);
var hy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(1),null);
var hz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33886,(2),null);
var hook_delta_y = ((hy * Math.cos(pitch)) - (hz * Math.sin(pitch)));
var hook_delta_z = ((hz * Math.cos(pitch)) + (hy * Math.sin(pitch)));
var hook_pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [crosstrack_error,(downrange + hook_delta_y),(height + hook_delta_z)], null);
var vec__33889 = hook_pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33889,(0),null);
var hook_downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33889,(1),null);
var hook_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33889,(2),null);
var distance = (function (){var G__33894 = ((crosstrack_error * crosstrack_error) + (hook_downrange * hook_downrange));
return Math.sqrt(G__33894);
})();
var s = lsobot.units.rad__GT_deg(Math.atan2(hook_height,distance));
var d = distance;
var c = (lsobot.units.rad__GT_deg((function (){var G__33895 = (crosstrack_error / distance);
return Math.asin(G__33895);
})()) + (((hook_downrange > (0)))?(0):(180)));
var approaching_QMARK_ = (function (){var and__17757__auto__ = s;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = d;
if(cljs.core.truth_(and__17757__auto____$1)){
var and__17757__auto____$2 = c;
if(cljs.core.truth_(and__17757__auto____$2)){
return ((s < cljs.core.cst$kw$max_DASH_slope.cljs$core$IFn$_invoke$arity$1(params))) && ((d < lsobot.units.nm__GT_ft(cljs.core.cst$kw$max_DASH_dist.cljs$core$IFn$_invoke$arity$1(params)))) && ((Math.abs(c) < cljs.core.cst$kw$max_DASH_angle.cljs$core$IFn$_invoke$arity$1(params)));
} else {
return and__17757__auto____$2;
}
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})();
var pass_frame = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([frame,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$lsobot$grading_SLASH_downrange,cljs.core.cst$kw$lsobot$grading_SLASH_glideslope,cljs.core.cst$kw$lsobot$grading_SLASH_course_DASH_deviation,cljs.core.cst$kw$lsobot$grading_SLASH_slope,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos,cljs.core.cst$kw$lsobot$grading_SLASH_crosstrack_DASH_error,cljs.core.cst$kw$lsobot$grading_SLASH_lineup,cljs.core.cst$kw$lsobot$grading_SLASH_height,cljs.core.cst$kw$lsobot$grading_SLASH_distance],[downrange,lsobot.grading.glideslope(cljs.core.cst$kw$glideslope.cljs$core$IFn$_invoke$arity$1(params),window_length,hook_height,distance,hook_downrange),c,s,hook_pos,crosstrack_error,lsobot.grading.lineup(cljs.core.cst$kw$lineup.cljs$core$IFn$_invoke$arity$1(params),window_width,crosstrack_error,hook_downrange),height,d])], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pilot_DASH_loc,cljs.core.cst$kw$pass_DASH_frame,cljs.core.cst$kw$s,cljs.core.cst$kw$c,cljs.core.cst$kw$approaching_QMARK_,cljs.core.cst$kw$landing_DASH_loc,cljs.core.cst$kw$d,cljs.core.cst$kw$distance,cljs.core.cst$kw$carrier_DASH_loc],[pilot_loc,pass_frame,s,c,approaching_QMARK_,landing_loc,d,d,carrier_loc]));
})())], 0));
}
});
/**
 * Computes angle of attack, speed, and other quantities given two frames
 */
lsobot.grading.derived_data = (function lsobot$grading$derived_data(params,pilot_id,f0,f1){
var t0 = cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(f0);
var t1 = cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(f1);
var p0 = cljs.core.cst$kw$lsobot$grading_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(f0);
var vec__33904 = cljs.core.cst$kw$lsobot$grading_SLASH_pos.cljs$core$IFn$_invoke$arity$1(f0);
var u0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33904,(0),null);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33904,(1),null);
var z0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33904,(2),null);
var vec__33907 = cljs.core.cst$kw$lsobot$grading_SLASH_pos.cljs$core$IFn$_invoke$arity$1(f1);
var u1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33907,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33907,(1),null);
var z1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33907,(2),null);
var ud = (u1 - u0);
var vd = (v1 - v0);
var zd = (z1 - z0);
var d = (function (){var G__33910 = (((ud * ud) + (vd * vd)) + (zd * zd));
return Math.sqrt(G__33910);
})();
var path_a = lsobot.units.rad__GT_deg((function (){var G__33911 = (zd / d);
return Math.asin(G__33911);
})());
var pitch = cljs.core.cst$kw$lsobot$acmi_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(p0);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lsobot$grading_SLASH_zd,zd,cljs.core.cst$kw$lsobot$grading_SLASH_d,d,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a,path_a,cljs.core.cst$kw$lsobot$grading_SLASH_pitch,pitch,cljs.core.cst$kw$lsobot$grading_SLASH_speed,(d / (t1 - t0)),cljs.core.cst$kw$lsobot$grading_SLASH_aoa,(function (){var value = (pitch - path_a);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lsobot$grading_SLASH_value,value,cljs.core.cst$kw$lsobot$grading_SLASH_deviation,lsobot.grading.classify(params,value)], null);
})()], null);
});
/**
 * Compute the result of the pass - trap, bolter, etc.
 */
lsobot.grading.result = (function lsobot$grading$result(params,frames){
var map__33950 = params;
var map__33950__$1 = ((((!((map__33950 == null)))?((((map__33950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33950):map__33950);
var wire_interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$wire_DASH_interval);
var ramp_to_1_wire = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$ramp_DASH_to_DASH_1_DASH_wire);
var landing_area_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$landing_DASH_area_DASH_width);
var landing_area_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$landing_DASH_area_DASH_length);
var touchdown_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$touchdown_DASH_height);
var trap_speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33950__$1,cljs.core.cst$kw$trap_DASH_speed);
var deck_downrange = (ramp_to_1_wire + (2.5 * wire_interval));
var deck_uprange = (deck_downrange - landing_area_length);
var max_uprange = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_downrange,frames));
var min_speed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_speed,frames)));
var deck_frames = cljs.core.filterv(((function (map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed){
return (function (p1__33912_SHARP_){
return ((deck_uprange < cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(p1__33912_SHARP_))) && ((cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(p1__33912_SHARP_) < deck_downrange));
});})(map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed))
,frames);
var vec__33951 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(frames));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(1),null);
var last_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33951,(2),null);
var last_downrange = cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(cljs.core.last(frames));
var min_deck_height = ((cljs.core.empty_QMARK_(deck_frames))?null:cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_height,deck_frames)));
if((((function (){var vec__33971 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = last_height;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,424,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$last_DASH_height,"=>",result__11182__auto__], null);
});})(result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,-170076290);

return result__11182__auto__;
})(),null], null);
}catch (e33974){if((e33974 instanceof Error)){
var e__2358__auto__ = e33974;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e33974;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33971,(1),null);
var temp__6503__auto___33987 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___33987)){
var e__11144__auto___33988 = temp__6503__auto___33987;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,424,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___33988,temp__6503__auto___33987,vec__33971,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___33988], null);
});})(e__11144__auto___33988,temp__6503__auto___33987,vec__33971,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,997224436);

throw e__11144__auto___33988;
} else {
}

return _QMARK_result__11142__auto__;
})() < (0))) && (((function (){var vec__33975 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = last_downrange;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,425,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$last_DASH_downrange,"=>",result__11182__auto__], null);
});})(result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,2021815461);

return result__11182__auto__;
})(),null], null);
}catch (e33978){if((e33978 instanceof Error)){
var e__2358__auto__ = e33978;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e33978;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33975,(1),null);
var temp__6503__auto___33989 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___33989)){
var e__11144__auto___33990 = temp__6503__auto___33989;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,425,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___33990,temp__6503__auto___33989,vec__33975,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___33990], null);
});})(e__11144__auto___33990,temp__6503__auto___33989,vec__33975,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,1549154475);

throw e__11144__auto___33990;
} else {
}

return _QMARK_result__11142__auto__;
})() > (0))) && (((function (){var vec__33979 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = last_downrange;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,426,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$last_DASH_downrange,"=>",result__11182__auto__], null);
});})(result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,-900877969);

return result__11182__auto__;
})(),null], null);
}catch (e33982){if((e33982 instanceof Error)){
var e__2358__auto__ = e33982;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e33982;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33979,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33979,(1),null);
var temp__6503__auto___33991 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___33991)){
var e__11144__auto___33992 = temp__6503__auto___33991;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,426,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___33992,temp__6503__auto___33991,vec__33979,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___33992], null);
});})(e__11144__auto___33992,temp__6503__auto___33991,vec__33979,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,870434260);

throw e__11144__auto___33992;
} else {
}

return _QMARK_result__11142__auto__;
})() < ((500) + (function (){var vec__33983 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = deck_downrange;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,426,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$deck_DASH_downrange,"=>",result__11182__auto__], null);
});})(result__11182__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,1005770867);

return result__11182__auto__;
})(),null], null);
}catch (e33986){if((e33986 instanceof Error)){
var e__2358__auto__ = e33986;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e33986;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33983,(1),null);
var temp__6503__auto___33993 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___33993)){
var e__11144__auto___33994 = temp__6503__auto___33993;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,426,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___33994,temp__6503__auto___33993,vec__33983,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___33994], null);
});})(e__11144__auto___33994,temp__6503__auto___33993,vec__33983,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__33950,map__33950__$1,wire_interval,ramp_to_1_wire,landing_area_width,landing_area_length,touchdown_height,trap_speed,deck_downrange,deck_uprange,max_uprange,min_speed,deck_frames,vec__33951,_,___$1,last_height,last_downrange,min_deck_height))
,null)),null,-980196154);

throw e__11144__auto___33994;
} else {
}

return _QMARK_result__11142__auto__;
})())))){
return cljs.core.cst$kw$ramp_DASH_strike;
} else {
if(cljs.core.truth_((function (){var and__17757__auto__ = min_deck_height;
if(cljs.core.truth_(and__17757__auto__)){
return (min_deck_height < cljs.core.cst$kw$touchdown_DASH_height.cljs$core$IFn$_invoke$arity$1(params));
} else {
return and__17757__auto__;
}
})())){
if((min_speed < trap_speed)){
return cljs.core.cst$kw$trap;
} else {
return cljs.core.cst$kw$bolter;
}
} else {
return cljs.core.cst$kw$waveoff;

}
}
});
/**
 * Returns the assessed deviation for the given zone.
 */
lsobot.grading.assess_deviation = (function lsobot$grading$assess_deviation(p__33996){
var map__34011 = p__33996;
var map__34011__$1 = ((((!((map__34011 == null)))?((((map__34011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34011):map__34011);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34011__$1,cljs.core.cst$kw$params);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34011__$1,cljs.core.cst$kw$path);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34011__$1,cljs.core.cst$kw$frames);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34011__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34011__$1,cljs.core.cst$kw$to);
var map__34013 = params;
var map__34013__$1 = ((((!((map__34013 == null)))?((((map__34013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34013):map__34013);
var weights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34013__$1,cljs.core.cst$kw$weights);
var map__34014 = weights;
var map__34014__$1 = ((((!((map__34014 == null)))?((((map__34014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34014):map__34014);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34014__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34014__$1,cljs.core.cst$kw$end);
var scores = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__34013,map__34013__$1,weights,map__34014,map__34014__$1,start,end,map__34011,map__34011__$1,params,path,frames,from,to){
return (function (scores,frame){
var map__34017 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(frame,path);
var map__34017__$1 = ((((!((map__34017 == null)))?((((map__34017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34017):map__34017);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34017__$1,cljs.core.cst$kw$lsobot$grading_SLASH_degree);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34017__$1,cljs.core.cst$kw$lsobot$grading_SLASH_direction);
var class_weight = (function (){var or__17769__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(weights,degree);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})();
var score = class_weight;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(scores,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [degree,direction], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),score);
});})(map__34013,map__34013__$1,weights,map__34014,map__34014__$1,start,end,map__34011,map__34011__$1,params,path,frames,from,to))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filterv(((function (map__34013,map__34013__$1,weights,map__34014,map__34014__$1,start,end,map__34011,map__34011__$1,params,path,frames,from,to){
return (function (p1__33995_SHARP_){
return ((to < cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(p1__33995_SHARP_))) && ((cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(p1__33995_SHARP_) < from));
});})(map__34013,map__34013__$1,weights,map__34014,map__34014__$1,start,end,map__34011,map__34011__$1,params,path,frames,from,to))
,frames));
if(cljs.core.empty_QMARK_(scores)){
return null;
} else {
var vec__34019 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.val,scores);
var vec__34022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(0),null);
var degree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(0),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34022,(1),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34019,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lsobot$grading_SLASH_degree,degree,cljs.core.cst$kw$lsobot$grading_SLASH_direction,direction,cljs.core.cst$kw$lsobot$grading_SLASH_scores,scores], null);
}
});
/**
 * Returns assessment of the given zone
 */
lsobot.grading.assess_zone = (function lsobot$grading$assess_zone(p__34025){
var map__34046 = p__34025;
var map__34046__$1 = ((((!((map__34046 == null)))?((((map__34046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34046):map__34046);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34046__$1,cljs.core.cst$kw$params);
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34046__$1,cljs.core.cst$kw$frames);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34046__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34046__$1,cljs.core.cst$kw$to);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18623__auto__ = ((function (map__34046,map__34046__$1,params,frames,from,to){
return (function lsobot$grading$assess_zone_$_iter__34048(s__34049){
return (new cljs.core.LazySeq(null,((function (map__34046,map__34046__$1,params,frames,from,to){
return (function (){
var s__34049__$1 = s__34049;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__34049__$1);
if(temp__6503__auto__){
var s__34049__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34049__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__34049__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__34051 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__34050 = (0);
while(true){
if((i__34050 < size__18622__auto__)){
var vec__34060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__34050);
var dimension = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34060,(1),null);
cljs.core.chunk_append(b__34051,(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,476,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (i__34050,vec__34060,dimension,key,c__18621__auto__,size__18622__auto__,b__34051,s__34049__$2,temp__6503__auto__,map__34046,map__34046__$1,params,frames,from,to){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assesssing",cljs.core.cst$kw$dimension,key], null);
});})(i__34050,vec__34060,dimension,key,c__18621__auto__,size__18622__auto__,b__34051,s__34049__$2,temp__6503__auto__,map__34046,map__34046__$1,params,frames,from,to))
,null)),null,-1660643540);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,lsobot.grading.assess_deviation(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$lsobot$grading_SLASH_deviation], null),cljs.core.cst$kw$frames,frames,cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null))], null);
})()
);

var G__34066 = (i__34050 + (1));
i__34050 = G__34066;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34051),lsobot$grading$assess_zone_$_iter__34048(cljs.core.chunk_rest(s__34049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34051),null);
}
} else {
var vec__34063 = cljs.core.first(s__34049__$2);
var dimension = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34063,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34063,(1),null);
return cljs.core.cons((function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,476,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (vec__34063,dimension,key,s__34049__$2,temp__6503__auto__,map__34046,map__34046__$1,params,frames,from,to){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assesssing",cljs.core.cst$kw$dimension,key], null);
});})(vec__34063,dimension,key,s__34049__$2,temp__6503__auto__,map__34046,map__34046__$1,params,frames,from,to))
,null)),null,1234385737);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,lsobot.grading.assess_deviation(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,cljs.core.cst$kw$lsobot$grading_SLASH_deviation], null),cljs.core.cst$kw$frames,frames,cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to], null))], null);
})()
,lsobot$grading$assess_zone_$_iter__34048(cljs.core.rest(s__34049__$2)));
}
} else {
return null;
}
break;
}
});})(map__34046,map__34046__$1,params,frames,from,to))
,null,null));
});})(map__34046,map__34046__$1,params,frames,from,to))
;
return iter__18623__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_aoa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_glideslope], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_lineup], null)], null));
})());
});
/**
 * Returns a wire number, or nil if wire cannot be determined.
 */
lsobot.grading.assess_wire = (function lsobot$grading$assess_wire(params,frames){
var map__34087 = params;
var map__34087__$1 = ((((!((map__34087 == null)))?((((map__34087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34087):map__34087);
var wire_interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,cljs.core.cst$kw$wire_DASH_interval);
var hook_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,cljs.core.cst$kw$hook_DASH_offset);
var touchdown_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34087__$1,cljs.core.cst$kw$touchdown_DASH_height);
var aloft = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height){
return (function (frame){
var vec__34092 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(frame);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34092,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34092,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34092,(2),null);
return ((1) < height);
});})(map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height))
,frames));
var last_aloft = cljs.core.last(aloft);
var vec__34088 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(last_aloft);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(0),null);
var hook_downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(1),null);
var hook_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34088,(2),null);
var hook_contact = (hook_downrange + (hook_height / (function (){var G__34095 = lsobot.units.deg__GT_rad(cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(last_aloft));
return Math.tan(G__34095);
})()));
var penultimate_34107 = cljs.core.last(cljs.core.butlast(aloft));
var last_aloft_34108__$1 = penultimate_34107;
var vec__34096_34109 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(last_aloft_34108__$1);
var __34110__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34096_34109,(0),null);
var hook_downrange_34111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34096_34109,(1),null);
var hook_height_34112__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34096_34109,(2),null);
var hook_contact_34113__$1 = (hook_downrange_34111__$1 + (hook_height_34112__$1 / (function (){var G__34099 = lsobot.units.deg__GT_rad(cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(last_aloft_34108__$1));
return Math.tan(G__34099);
})()));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,505,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (penultimate_34107,last_aloft_34108__$1,vec__34096_34109,__34110__$1,hook_downrange_34111__$1,hook_height_34112__$1,hook_contact_34113__$1,map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assess-wire penultimate",cljs.core.cst$kw$t,cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(last_aloft_34108__$1),cljs.core.cst$kw$start,lsobot.units.s__GT_dhms(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames))),cljs.core.cst$kw$hook_DASH_downrange,hook_downrange_34111__$1,cljs.core.cst$kw$hook_DASH_height,hook_height_34112__$1,cljs.core.cst$kw$hook_DASH_contact,hook_contact_34113__$1,cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$acmi_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(last_aloft_34108__$1)),cljs.core.cst$kw$path_DASH_a,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(last_aloft_34108__$1)], null);
});})(penultimate_34107,last_aloft_34108__$1,vec__34096_34109,__34110__$1,hook_downrange_34111__$1,hook_height_34112__$1,hook_contact_34113__$1,map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact))
,null)),null,-2027314741);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,513,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assess-wire last",cljs.core.cst$kw$t,cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(last_aloft),cljs.core.cst$kw$start,lsobot.units.s__GT_dhms(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames))),cljs.core.cst$kw$hook_DASH_downrange,hook_downrange,cljs.core.cst$kw$hook_DASH_height,hook_height,cljs.core.cst$kw$hook_DASH_contact,hook_contact,cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$acmi_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(last_aloft)),cljs.core.cst$kw$path_DASH_a,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(last_aloft)], null);
});})(map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact))
,null)),null,-565754046);

var down_34114 = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact){
return (function (frame){
var vec__34103 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(frame);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34103,(2),null);
return ((1) < height);
});})(map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact))
,frames));
var vec__34100_34115 = cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(down_34114);
var __34116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100_34115,(0),null);
var hook_downrange_34117__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100_34115,(1),null);
var hook_height_34118__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34100_34115,(2),null);
var hook_contact_34119__$1 = (hook_downrange_34117__$1 + (hook_height_34118__$1 / (function (){var G__34106 = lsobot.units.deg__GT_rad(cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(last_aloft));
return Math.tan(G__34106);
})()));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,530,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (down_34114,vec__34100_34115,__34116__$1,hook_downrange_34117__$1,hook_height_34118__$1,hook_contact_34119__$1,map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assess-wire down",cljs.core.cst$kw$t,cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(down_34114),cljs.core.cst$kw$start,lsobot.units.s__GT_dhms(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames))),cljs.core.cst$kw$hook_DASH_downrange,hook_downrange_34117__$1,cljs.core.cst$kw$hook_DASH_height,hook_height_34118__$1,cljs.core.cst$kw$hook_DASH_contact,hook_contact_34119__$1,cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$acmi_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(down_34114)),cljs.core.cst$kw$path_DASH_a,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(down_34114)], null);
});})(down_34114,vec__34100_34115,__34116__$1,hook_downrange_34117__$1,hook_height_34118__$1,hook_contact_34119__$1,map__34087,map__34087__$1,wire_interval,hook_offset,touchdown_height,aloft,last_aloft,vec__34088,_,hook_downrange,hook_height,hook_contact))
,null)),null,607394852);

if(((1.5 * wire_interval) < hook_contact)){
return (1);
} else {
if(((wire_interval / (2)) < hook_contact)){
return (2);
} else {
if(((- (wire_interval / (2))) < hook_contact)){
return (3);
} else {
return (4);

}
}
}
});
/**
 * Augment the pass frames with any data that has to be derived from
 *   the sequence.
 */
lsobot.grading.augment_frames = (function lsobot$grading$augment_frames(params,pilot_id,frames){
var distinct_frames = cljs.core.cst$kw$frames.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__34123,frame){
var map__34124 = p__34123;
var map__34124__$1 = ((((!((map__34124 == null)))?((((map__34124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34124):map__34124);
var acc = map__34124__$1;
var frames__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34124__$1,cljs.core.cst$kw$frames);
var last_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34124__$1,cljs.core.cst$kw$last_DASH_pos);
var p = lsobot.acmi.entity(frame,pilot_id);
var u = cljs.core.cst$kw$lsobot$acmi_SLASH_u.cljs$core$IFn$_invoke$arity$1(p);
var v = cljs.core.cst$kw$lsobot$acmi_SLASH_v.cljs$core$IFn$_invoke$arity$1(p);
var z = cljs.core.cst$kw$lsobot$acmi_SLASH_alt.cljs$core$IFn$_invoke$arity$1(p);
var pos = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,z], null);
if(cljs.core.truth_((function (){var or__17769__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_pos,pos);
if(or__17769__auto__){
return or__17769__auto__;
} else {
return cljs.core.some(cljs.core.nil_QMARK_,pos);
}
})())){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(acc,cljs.core.cst$kw$frames,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(frames__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(frame,cljs.core.cst$kw$lsobot$grading_SLASH_pos,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lsobot.units.m__GT_ft,pos),cljs.core.array_seq([cljs.core.cst$kw$lsobot$grading_SLASH_pilot,p], 0))),cljs.core.array_seq([cljs.core.cst$kw$last_DASH_pos,pos], 0));
}
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$frames,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$last_DASH_pos,null], null),frames));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (distinct_frames){
return (function (f0,f1){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f1,lsobot.grading.derived_data(cljs.core.cst$kw$aoa.cljs$core$IFn$_invoke$arity$1(params),pilot_id,f0,f1)], 0));
});})(distinct_frames))
,distinct_frames,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),distinct_frames));
});
lsobot.grading.low_and_slow_at_ramp_QMARK_ = (function lsobot$grading$low_and_slow_at_ramp_QMARK_(assessment){
var and__17757__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$major,null,cljs.core.cst$kw$unacceptable,null], null), null).call(null,cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1((function (){var vec__34150 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp.cljs$core$IFn$_invoke$arity$1(assessment));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment,cljs.core.list(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp,cljs.core.cst$sym$assessment)),"=>",result__11182__auto__], null);
});})(result__11182__auto__))
,null)),null,-2104530635);

return result__11182__auto__;
})(),null], null);
}catch (e34153){if((e34153 instanceof Error)){
var e__2358__auto__ = e34153;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e34153;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34150,(1),null);
var temp__6503__auto___34166 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___34166)){
var e__11144__auto___34167 = temp__6503__auto___34166;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___34167,temp__6503__auto___34166,vec__34150,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___34167], null);
});})(e__11144__auto___34167,temp__6503__auto___34166,vec__34150,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__))
,null)),null,2006298166);

throw e__11144__auto___34167;
} else {
}

return _QMARK_result__11142__auto__;
})()));
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_direction.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp.cljs$core$IFn$_invoke$arity$1(assessment))),cljs.core.cst$kw$high);
if(and__17757__auto____$1){
var and__17757__auto____$2 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$major,null,cljs.core.cst$kw$unacceptable,null], null), null).call(null,cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1((function (){var vec__34162 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp.cljs$core$IFn$_invoke$arity$1(assessment));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,and__17757__auto____$1,and__17757__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment,cljs.core.list(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp,cljs.core.cst$sym$assessment)),"=>",result__11182__auto__], null);
});})(result__11182__auto__,and__17757__auto____$1,and__17757__auto__))
,null)),null,557946925);

return result__11182__auto__;
})(),null], null);
}catch (e34165){if((e34165 instanceof Error)){
var e__2358__auto__ = e34165;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e34165;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34162,(1),null);
var temp__6503__auto___34168 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___34168)){
var e__11144__auto___34169 = temp__6503__auto___34168;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"lsobot.grading",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___34169,temp__6503__auto___34168,vec__34162,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,and__17757__auto____$1,and__17757__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___34169], null);
});})(e__11144__auto___34169,temp__6503__auto___34168,vec__34162,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,and__17757__auto____$1,and__17757__auto__))
,null)),null,518001656);

throw e__11144__auto___34169;
} else {
}

return _QMARK_result__11142__auto__;
})()));
if(cljs.core.truth_(and__17757__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_direction.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp.cljs$core$IFn$_invoke$arity$1(assessment))),cljs.core.cst$kw$low);
} else {
return and__17757__auto____$2;
}
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
});
lsobot.grading.grade_trap = (function lsobot$grading$grade_trap(params,assessment){
var map__34179 = assessment;
var map__34179__$1 = ((((!((map__34179 == null)))?((((map__34179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34179):map__34179);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_result);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_start);
var mid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_mid);
var in_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close);
var at_ramp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp);
var wire = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34179__$1,cljs.core.cst$kw$lsobot$grading_SLASH_wire);
var deviation_score = ((function (map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire){
return (function (dimension){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [null,(0),cljs.core.cst$kw$ideal,(0),cljs.core.cst$kw$good,(0),cljs.core.cst$kw$minor,(1),cljs.core.cst$kw$major,(2),cljs.core.cst$kw$unacceptable,(4)], null),(function (){var iter__18623__auto__ = ((function (map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire){
return (function lsobot$grading$grade_trap_$_iter__34181(s__34182){
return (new cljs.core.LazySeq(null,((function (map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire){
return (function (){
var s__34182__$1 = s__34182;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__34182__$1);
if(temp__6503__auto__){
var s__34182__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34182__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__34182__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__34184 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__34183 = (0);
while(true){
if((i__34183 < size__18622__auto__)){
var phase = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__34183);
cljs.core.chunk_append(b__34184,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(phase,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,cljs.core.cst$kw$lsobot$grading_SLASH_degree], null)));

var G__34188 = (i__34183 + (1));
i__34183 = G__34188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34184),lsobot$grading$grade_trap_$_iter__34181(cljs.core.chunk_rest(s__34182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34184),null);
}
} else {
var phase = cljs.core.first(s__34182__$2);
return cljs.core.cons(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(phase,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,cljs.core.cst$kw$lsobot$grading_SLASH_degree], null)),lsobot$grading$grade_trap_$_iter__34181(cljs.core.rest(s__34182__$2)));
}
} else {
return null;
}
break;
}
});})(map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire))
,null,null));
});})(map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire))
;
return iter__18623__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,mid,in_close,at_ramp], null));
})()));
});})(map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire))
;
var aoa_score = deviation_score(cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment);
var lineup_score = deviation_score(cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment);
var glideslope_score = deviation_score(cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment);
var exactly = ((function (map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire,deviation_score,aoa_score,lineup_score,glideslope_score){
return (function (_,n){
return n;
});})(map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire,deviation_score,aoa_score,lineup_score,glideslope_score))
;
var overall = (function (){var G__34187 = (5);
var G__34187__$1 = (cljs.core.truth_(lsobot.grading.low_and_slow_at_ramp_QMARK_(assessment))?exactly(G__34187,(0)):G__34187);
var G__34187__$2 = ((((20) <= aoa_score))?(G__34187__$1 - (1)):G__34187__$1);
var G__34187__$3 = ((((10) <= aoa_score))?(G__34187__$2 - (1)):G__34187__$2);
var G__34187__$4 = ((((0) < aoa_score))?(G__34187__$3 - 0.1):G__34187__$3);
var G__34187__$5 = ((((8) <= glideslope_score))?(G__34187__$4 - (1)):G__34187__$4);
var G__34187__$6 = ((((4) <= glideslope_score))?(G__34187__$5 - (1)):G__34187__$5);
var G__34187__$7 = ((((0) < glideslope_score))?(G__34187__$6 - 0.1):G__34187__$6);
var G__34187__$8 = ((((8) <= lineup_score))?(G__34187__$7 - (1)):G__34187__$7);
var G__34187__$9 = ((((4) <= lineup_score))?(G__34187__$8 - (1)):G__34187__$8);
if(((0) < lineup_score)){
return (G__34187__$9 - 0.1);
} else {
return G__34187__$9;
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"lsobot.grading",null,616,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire,deviation_score,aoa_score,lineup_score,glideslope_score,exactly,overall){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scoring",cljs.core.cst$kw$overall,overall,cljs.core.cst$kw$aoa,aoa_score,cljs.core.cst$kw$lineup,lineup_score,cljs.core.cst$kw$glideslope,glideslope_score], null);
});})(map__34179,map__34179__$1,result,start,mid,in_close,at_ramp,wire,deviation_score,aoa_score,lineup_score,glideslope_score,exactly,overall))
,null)),null,-367765004);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((5),overall)){
return cljs.core.cst$kw$lsobot$grading_SLASH_ok_PLUS_;
} else {
if(((4) <= overall)){
return cljs.core.cst$kw$lsobot$grading_SLASH_ok;
} else {
if(((3) <= overall)){
return cljs.core.cst$kw$lsobot$grading_SLASH_fair;
} else {
if(((2) <= overall)){
return cljs.core.cst$kw$lsobot$grading_SLASH_none;
} else {
return cljs.core.cst$kw$lsobot$grading_SLASH_cut_DASH_pass;

}
}
}
}
});
/**
 * Given an initial assessment, return a grade.
 */
lsobot.grading.grade = (function lsobot$grading$grade(params,assessment){
var result = cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$bolter)){
return cljs.core.cst$kw$lsobot$grading_SLASH_bolter;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$waveoff)){
return cljs.core.cst$kw$lsobot$grading_SLASH_waveoff;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$ramp_DASH_strike)){
return cljs.core.cst$kw$lsobot$grading_SLASH_cut_DASH_pass;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$trap)){
return lsobot.grading.grade_trap(params,assessment);
} else {
return null;
}
}
}
}
});
/**
 * Perform any processing that can only happen once we have the whole
 *   pass. Returns the assessment.
 */
lsobot.grading.assess_pass = (function lsobot$grading$assess_pass(params,pilot_id,frames){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,643,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assessing pass",cljs.core.cst$kw$pilot,cljs.core.cst$kw$lsobot$acmi_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(lsobot.acmi.entity(cljs.core.last(frames),pilot_id)),cljs.core.cst$kw$start,lsobot.units.s__GT_dhms(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(frames)))], null);
}),null)),null,254513819);

var augmented_frames = lsobot.grading.augment_frames(params,pilot_id,frames);
var result = lsobot.grading.result(params,augmented_frames);
var map__34192 = params;
var map__34192__$1 = ((((!((map__34192 == null)))?((((map__34192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34192):map__34192);
var touchdown_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34192__$1,cljs.core.cst$kw$touchdown_DASH_height);
var zones = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34192__$1,cljs.core.cst$kw$zones);
var touchdown = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bolter,null,cljs.core.cst$kw$trap,null], null), null).call(null,result))?cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones){
return (function (p1__34189_SHARP_){
return (cljs.core.cst$kw$lsobot$grading_SLASH_height.cljs$core$IFn$_invoke$arity$1(p1__34189_SHARP_) < touchdown_height);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones))
,augmented_frames))):null);
var initial = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$lsobot$grading_SLASH_result,result,cljs.core.cst$kw$lsobot$grading_SLASH_start,(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,661,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Asessing start"], null);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown))
,null)),null,907786648);

return lsobot.grading.assess_zone(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$frames,augmented_frames,cljs.core.cst$kw$from,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(zones)),cljs.core.cst$kw$to,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params)))], null));
})()
,cljs.core.cst$kw$lsobot$grading_SLASH_mid,(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,666,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Asssessing mid"], null);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown))
,null)),null,-387621968);

return lsobot.grading.assess_zone(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$frames,augmented_frames,cljs.core.cst$kw$from,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mid.cljs$core$IFn$_invoke$arity$1(zones)),cljs.core.cst$kw$to,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mid.cljs$core$IFn$_invoke$arity$1(zones))], null));
})()
,cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close,(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,671,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assessing in close"], null);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown))
,null)),null,-1005741020);

return lsobot.grading.assess_zone(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$frames,augmented_frames,cljs.core.cst$kw$from,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_close.cljs$core$IFn$_invoke$arity$1(zones)),cljs.core.cst$kw$to,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_close.cljs$core$IFn$_invoke$arity$1(zones))], null));
})()
,cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp,(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,676,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assessing at ramp"], null);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown))
,null)),null,-715183366);

return lsobot.grading.assess_zone(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$params,params,cljs.core.cst$kw$frames,augmented_frames,cljs.core.cst$kw$from,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_close.cljs$core$IFn$_invoke$arity$1(zones)),cljs.core.cst$kw$to,(function (){var or__17769__auto__ = touchdown;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})()], null));
})()
,cljs.core.cst$kw$lsobot$grading_SLASH_wire,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,cljs.core.cst$kw$trap))?(function (){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"lsobot.grading",null,682,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Assessing wire"], null);
});})(augmented_frames,result,map__34192,map__34192__$1,touchdown_height,zones,touchdown))
,null)),null,1607765790);

return lsobot.grading.assess_wire(params,augmented_frames);
})()
:null),cljs.core.cst$kw$lsobot$grading_SLASH_frames,augmented_frames], null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(initial,cljs.core.cst$kw$lsobot$grading_SLASH_grade,lsobot.grading.grade(params,initial));
});
/**
 * Returns a seq of seq of pass frames found for the given pilot and
 *   carrier.
 */
lsobot.grading.find_passes = (function lsobot$grading$find_passes(file,carrier_id,pilot_id,params){
var G__34222 = cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(file);
var vec__34223 = G__34222;
var seq__34224 = cljs.core.seq(vec__34223);
var first__34225 = cljs.core.first(seq__34224);
var seq__34224__$1 = cljs.core.next(seq__34224);
var frame = first__34225;
var frames = seq__34224__$1;
var start = null;
var end = null;
var pass_frames = cljs.core.PersistentVector.EMPTY;
var passes = cljs.core.PersistentVector.EMPTY;
var G__34222__$1 = G__34222;
var start__$1 = start;
var end__$1 = end;
var pass_frames__$1 = pass_frames;
var passes__$1 = passes;
while(true){
var vec__34226 = G__34222__$1;
var seq__34227 = cljs.core.seq(vec__34226);
var first__34228 = cljs.core.first(seq__34227);
var seq__34227__$1 = cljs.core.next(seq__34227);
var frame__$1 = first__34228;
var frames__$1 = seq__34227__$1;
var start__$2 = start__$1;
var end__$2 = end__$1;
var pass_frames__$2 = pass_frames__$1;
var passes__$2 = passes__$1;
if(cljs.core.not(frame__$1)){
return passes__$2;
} else {
var t = cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(frame__$1);
var map__34229 = lsobot.grading.characterize_frame(carrier_id,pilot_id,params,frame__$1);
var map__34229__$1 = ((((!((map__34229 == null)))?((((map__34229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34229):map__34229);
var distance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,cljs.core.cst$kw$distance);
var approaching_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,cljs.core.cst$kw$approaching_QMARK_);
var pass_frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,cljs.core.cst$kw$pass_DASH_frame);
var removed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,cljs.core.cst$kw$removed_QMARK_);
if(cljs.core.not(start__$2)){
var G__34244 = frames__$1;
var G__34245 = (cljs.core.truth_((function (){var and__17757__auto__ = approaching_QMARK_;
if(cljs.core.truth_(and__17757__auto__)){
return (lsobot.units.nm__GT_ft(cljs.core.cst$kw$min_DASH_dist.cljs$core$IFn$_invoke$arity$1(params)) < distance);
} else {
return and__17757__auto__;
}
})())?t:null);
var G__34246 = null;
var G__34247 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pass_frame], null);
var G__34248 = passes__$2;
G__34222__$1 = G__34244;
start__$1 = G__34245;
end__$1 = G__34246;
pass_frames__$1 = G__34247;
passes__$1 = G__34248;
continue;
} else {
if(cljs.core.truth_((function (){var or__17769__auto__ = cljs.core.not(approaching_QMARK_);
if(or__17769__auto__){
return or__17769__auto__;
} else {
var or__17769__auto____$1 = removed_QMARK_;
if(cljs.core.truth_(or__17769__auto____$1)){
return or__17769__auto____$1;
} else {
return cljs.core.empty_QMARK_(frames__$1);
}
}
})())){
if((cljs.core.cst$kw$min_DASH_time.cljs$core$IFn$_invoke$arity$1(params) < (t - (function (){var or__17769__auto__ = start__$2;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})()))){
var pass_frames_STAR_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pass_frames__$2,pass_frame);
var vec__34231 = (function (){var coda = cljs.core.PersistentVector.EMPTY;
var G__34237 = frames__$1;
var vec__34238 = G__34237;
var seq__34239 = cljs.core.seq(vec__34238);
var first__34240 = cljs.core.first(seq__34239);
var seq__34239__$1 = cljs.core.next(seq__34239);
var frame__$2 = first__34240;
var more = seq__34239__$1;
var t0 = null;
var coda__$1 = coda;
var G__34237__$1 = G__34237;
var t0__$1 = t0;
while(true){
var coda__$2 = coda__$1;
var vec__34241 = G__34237__$1;
var seq__34242 = cljs.core.seq(vec__34241);
var first__34243 = cljs.core.first(seq__34242);
var seq__34242__$1 = cljs.core.next(seq__34242);
var frame__$3 = first__34243;
var more__$1 = seq__34242__$1;
var t0__$2 = t0__$1;
var cf = cljs.core.cst$kw$pass_DASH_frame.cljs$core$IFn$_invoke$arity$1(lsobot.grading.characterize_frame(carrier_id,pilot_id,params,frame__$3));
if(cljs.core.truth_((function (){var or__17769__auto__ = (frame__$3 == null);
if(or__17769__auto__){
return or__17769__auto__;
} else {
var or__17769__auto____$1 = (function (){var and__17757__auto__ = t0__$2;
if(cljs.core.truth_(and__17757__auto__)){
return ((cljs.core.long$(t0__$2) + cljs.core.cst$kw$coda.cljs$core$IFn$_invoke$arity$1(params)) < cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(frame__$3));
} else {
return and__17757__auto__;
}
})();
if(cljs.core.truth_(or__17769__auto____$1)){
return or__17769__auto____$1;
} else {
return ((t + (30)) < cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(frame__$3));
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coda__$2,cf),more__$1], null);
} else {
var G__34249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coda__$2,cf);
var G__34250 = more__$1;
var G__34251 = (function (){var or__17769__auto__ = t0__$2;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
if((cljs.core.cst$kw$lsobot$grading_SLASH_downrange.cljs$core$IFn$_invoke$arity$1(cf) < (0))){
return cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(frame__$3);
} else {
return null;
}
}
})();
coda__$1 = G__34249;
G__34237__$1 = G__34250;
t0__$1 = G__34251;
continue;
}
break;
}
})();
var coda = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34231,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34231,(1),null);
var coda_frames = coda;
var G__34252 = remainder;
var G__34253 = null;
var G__34254 = null;
var G__34255 = cljs.core.PersistentVector.EMPTY;
var G__34256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(passes__$2,cljs.core.into.cljs$core$IFn$_invoke$arity$2(pass_frames_STAR_,coda_frames));
G__34222__$1 = G__34252;
start__$1 = G__34253;
end__$1 = G__34254;
pass_frames__$1 = G__34255;
passes__$1 = G__34256;
continue;
} else {
var G__34257 = frames__$1;
var G__34258 = null;
var G__34259 = null;
var G__34260 = cljs.core.PersistentVector.EMPTY;
var G__34261 = passes__$2;
G__34222__$1 = G__34257;
start__$1 = G__34258;
end__$1 = G__34259;
pass_frames__$1 = G__34260;
passes__$1 = G__34261;
continue;
}
} else {
var G__34262 = frames__$1;
var G__34263 = start__$2;
var G__34264 = end__$2;
var G__34265 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pass_frames__$2,pass_frame);
var G__34266 = passes__$2;
G__34222__$1 = G__34262;
start__$1 = G__34263;
end__$1 = G__34264;
pass_frames__$1 = G__34265;
passes__$1 = G__34266;
continue;

}
}
}
break;
}
});
lsobot.grading.carrier_id = lsobot.acmi.id;
lsobot.grading.pilot_id = lsobot.acmi.id;
lsobot.grading.carriers = (function lsobot$grading$carriers(file){
var entities = lsobot.acmi.entities(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(file)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (entities){
return (function (p__34271){
var vec__34272 = p__34271;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34272,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$acmi_SLASH_object_DASH_type.cljs$core$IFn$_invoke$arity$1(properties),"AircraftCarrier");
});})(entities))
,entities));
});
lsobot.grading.pilots = (function lsobot$grading$pilots(file){
var entities = lsobot.acmi.entities(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(file)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (entities){
return (function (p__34279){
var vec__34280 = p__34279;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34280,(0),null);
var properties = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34280,(1),null);
return cljs.core.cst$kw$lsobot$acmi_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(properties);
});})(entities))
,entities));
});
/**
 * Returns a map from IDs of carriers to map of pilot ids to sequences
 *   of pass assessments.
 */
lsobot.grading.passes = (function lsobot$grading$passes(file,params){
var carriers = lsobot.grading.carriers(file);
var pilots = lsobot.grading.pilots(file);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (carriers,pilots){
return (function (m,p__34299){
var vec__34300 = p__34299;
var carrier_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300,(0),null);
var pilot_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300,(1),null);
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carrier_id,pilot_id], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__34300,carrier_id,pilot_id,carriers,pilots){
return (function (p1__34283_SHARP_){
return lsobot.grading.assess_pass(params,pilot_id,p1__34283_SHARP_);
});})(vec__34300,carrier_id,pilot_id,carriers,pilots))
,lsobot.grading.find_passes(file,carrier_id,pilot_id,params)));
});})(carriers,pilots))
,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__18623__auto__ = ((function (carriers,pilots){
return (function lsobot$grading$passes_$_iter__34303(s__34304){
return (new cljs.core.LazySeq(null,((function (carriers,pilots){
return (function (){
var s__34304__$1 = s__34304;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__34304__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var carrier_id = cljs.core.first(xs__7059__auto__);
var iterys__18619__auto__ = ((function (s__34304__$1,carrier_id,xs__7059__auto__,temp__6503__auto__,carriers,pilots){
return (function lsobot$grading$passes_$_iter__34303_$_iter__34305(s__34306){
return (new cljs.core.LazySeq(null,((function (s__34304__$1,carrier_id,xs__7059__auto__,temp__6503__auto__,carriers,pilots){
return (function (){
var s__34306__$1 = s__34306;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__34306__$1);
if(temp__6503__auto____$1){
var s__34306__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34306__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__34306__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__34308 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__34307 = (0);
while(true){
if((i__34307 < size__18622__auto__)){
var pilot_id = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__34307);
cljs.core.chunk_append(b__34308,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carrier_id,pilot_id], null));

var G__34314 = (i__34307 + (1));
i__34307 = G__34314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34308),lsobot$grading$passes_$_iter__34303_$_iter__34305(cljs.core.chunk_rest(s__34306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34308),null);
}
} else {
var pilot_id = cljs.core.first(s__34306__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [carrier_id,pilot_id], null),lsobot$grading$passes_$_iter__34303_$_iter__34305(cljs.core.rest(s__34306__$2)));
}
} else {
return null;
}
break;
}
});})(s__34304__$1,carrier_id,xs__7059__auto__,temp__6503__auto__,carriers,pilots))
,null,null));
});})(s__34304__$1,carrier_id,xs__7059__auto__,temp__6503__auto__,carriers,pilots))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(pilots));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,lsobot$grading$passes_$_iter__34303(cljs.core.rest(s__34304__$1)));
} else {
var G__34315 = cljs.core.rest(s__34304__$1);
s__34304__$1 = G__34315;
continue;
}
} else {
return null;
}
break;
}
});})(carriers,pilots))
,null,null));
});})(carriers,pilots))
;
return iter__18623__auto__(carriers);
})());
});
