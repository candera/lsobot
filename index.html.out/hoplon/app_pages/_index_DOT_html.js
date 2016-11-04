// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('hoplon.svg');
goog.require('lsobot.units');
goog.require('goog.events');
goog.require('lsobot.grading');
goog.require('goog.dom');
goog.require('lsobot.help');
goog.require('goog.string');
goog.require('taoensso.timbre');
goog.require('lsobot.svg_fix');
goog.require('javelin.core');
goog.require('goog.style');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('hoplon.core');
goog.require('lsobot.acmi');
goog.require('goog.string.format');
goog.require('clojure.string');
lsobot.svg_fix.fix_svg_BANG_();
hoplon.app_pages._index_DOT_html.property = (function hoplon$app_pages$_index_DOT_html$property(acmi,id,prop){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$acmi_SLASH_entities.cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(acmi))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,prop], null));
});
if(cljs.core.truth_(String.prototype.startsWith)){
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,35,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Setting IE polyfill for String.startsWith"], null);
}),null)),null,254426350);

String.prototype.startsWith = (function (s,pos){
var pos_STAR_ = (function (){var or__17769__auto__ = pos;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (0);
}
})();
var me = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos_STAR_,me.indexOf(s,pos_STAR_));
});
}
hoplon.app_pages._index_DOT_html.show_debug_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.pass_parameters = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(lsobot.grading.default_parameters);
hoplon.app_pages._index_DOT_html.acmi_name = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.acmi = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.loading_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.selected_pass = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.limit_displayed_passes_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(false);
hoplon.app_pages._index_DOT_html.get_passes = (function hoplon$app_pages$_index_DOT_html$get_passes(acmi,params){
var iter__18623__auto__ = (function hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530(s__34531){
return (new cljs.core.LazySeq(null,(function (){
var s__34531__$1 = s__34531;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__34531__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var vec__34553 = cljs.core.first(xs__7059__auto__);
var carrier_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(0),null);
var pilot_passes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34553,(1),null);
var iterys__18619__auto__ = ((function (s__34531__$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__){
return (function hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530_$_iter__34532(s__34533){
return (new cljs.core.LazySeq(null,((function (s__34531__$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__){
return (function (){
var s__34533__$1 = s__34533;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__34533__$1);
if(temp__6503__auto____$1){
var xs__7059__auto____$1 = temp__6503__auto____$1;
var vec__34562 = cljs.core.first(xs__7059__auto____$1);
var pilot_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(0),null);
var assessments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34562,(1),null);
var iterys__18619__auto__ = ((function (s__34533__$1,s__34531__$1,vec__34562,pilot_id,assessments,xs__7059__auto____$1,temp__6503__auto____$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__){
return (function hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530_$_iter__34532_$_iter__34534(s__34535){
return (new cljs.core.LazySeq(null,((function (s__34533__$1,s__34531__$1,vec__34562,pilot_id,assessments,xs__7059__auto____$1,temp__6503__auto____$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__){
return (function (){
var s__34535__$1 = s__34535;
while(true){
var temp__6503__auto____$2 = cljs.core.seq(s__34535__$1);
if(temp__6503__auto____$2){
var s__34535__$2 = temp__6503__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34535__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__34535__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__34537 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__34536 = (0);
while(true){
if((i__34536 < size__18622__auto__)){
var assessment = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__34536);
cljs.core.chunk_append(b__34537,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$assessment,assessment,cljs.core.cst$kw$carrier,cljs.core.cst$kw$lsobot$acmi_SLASH_name.cljs$core$IFn$_invoke$arity$1(lsobot.acmi.entity(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(acmi)),carrier_id)),cljs.core.cst$kw$pilot,cljs.core.cst$kw$lsobot$acmi_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(lsobot.acmi.entity(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(acmi)),pilot_id)),cljs.core.cst$kw$start,lsobot.units.time__GT_str(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$lsobot$grading_SLASH_frames.cljs$core$IFn$_invoke$arity$1(assessment))))], null));

var G__34567 = (i__34536 + (1));
i__34536 = G__34567;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34537),hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530_$_iter__34532_$_iter__34534(cljs.core.chunk_rest(s__34535__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34537),null);
}
} else {
var assessment = cljs.core.first(s__34535__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$assessment,assessment,cljs.core.cst$kw$carrier,cljs.core.cst$kw$lsobot$acmi_SLASH_name.cljs$core$IFn$_invoke$arity$1(lsobot.acmi.entity(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(acmi)),carrier_id)),cljs.core.cst$kw$pilot,cljs.core.cst$kw$lsobot$acmi_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(lsobot.acmi.entity(cljs.core.last(cljs.core.cst$kw$lsobot$acmi_SLASH_frames.cljs$core$IFn$_invoke$arity$1(acmi)),pilot_id)),cljs.core.cst$kw$start,lsobot.units.time__GT_str(cljs.core.cst$kw$lsobot$acmi_SLASH_t.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$lsobot$grading_SLASH_frames.cljs$core$IFn$_invoke$arity$1(assessment))))], null),hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530_$_iter__34532_$_iter__34534(cljs.core.rest(s__34535__$2)));
}
} else {
return null;
}
break;
}
});})(s__34533__$1,s__34531__$1,vec__34562,pilot_id,assessments,xs__7059__auto____$1,temp__6503__auto____$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__))
,null,null));
});})(s__34533__$1,s__34531__$1,vec__34562,pilot_id,assessments,xs__7059__auto____$1,temp__6503__auto____$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(assessments));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530_$_iter__34532(cljs.core.rest(s__34533__$1)));
} else {
var G__34568 = cljs.core.rest(s__34533__$1);
s__34533__$1 = G__34568;
continue;
}
} else {
return null;
}
break;
}
});})(s__34531__$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__))
,null,null));
});})(s__34531__$1,vec__34553,carrier_id,pilot_passes,xs__7059__auto__,temp__6503__auto__))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(pilot_passes));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$get_passes_$_iter__34530(cljs.core.rest(s__34531__$1)));
} else {
var G__34569 = cljs.core.rest(s__34531__$1);
s__34531__$1 = G__34569;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18623__auto__(lsobot.grading.passes(acmi,params));
});
hoplon.app_pages._index_DOT_html.sort_criteria = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$carrier,cljs.core.cst$kw$ascending], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pilot,cljs.core.cst$kw$ascending], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$ascending], null)], null));
hoplon.app_pages._index_DOT_html.unsorted_passes = javelin.core.formula((function (acmi,pass_parameters){
return hoplon.app_pages._index_DOT_html.get_passes(acmi,pass_parameters);
})).call(null,hoplon.app_pages._index_DOT_html.acmi,hoplon.app_pages._index_DOT_html.pass_parameters);
hoplon.app_pages._index_DOT_html.passes = javelin.core.formula((function (unsorted_passes,sort_criteria){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.comparator((function (a,b){
var G__34576 = sort_criteria;
var vec__34577 = G__34576;
var seq__34578 = cljs.core.seq(vec__34577);
var first__34579 = cljs.core.first(seq__34578);
var seq__34578__$1 = cljs.core.next(seq__34578);
var vec__34580 = first__34579;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34580,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34580,(1),null);
var more = seq__34578__$1;
var G__34576__$1 = G__34576;
while(true){
var vec__34583 = G__34576__$1;
var seq__34584 = cljs.core.seq(vec__34583);
var first__34585 = cljs.core.first(seq__34584);
var seq__34584__$1 = cljs.core.next(seq__34584);
var vec__34586 = first__34585;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586,(0),null);
var dir__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34586,(1),null);
var more__$1 = seq__34584__$1;
if(cljs.core.not(k__$1)){
return false;
} else {
var comparison = (cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k__$1),cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k__$1)) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dir__$1,cljs.core.cst$kw$ascending))?(1):(-1)));
if((comparison < (0))){
return true;
} else {
if((comparison > (0))){
return false;
} else {
var G__34589 = more__$1;
G__34576__$1 = G__34589;
continue;

}
}
}
break;
}
})),unsorted_passes);
})).call(null,hoplon.app_pages._index_DOT_html.unsorted_passes,hoplon.app_pages._index_DOT_html.sort_criteria);
/**
 * Moves to the next pass in the list, if there is one.
 */
hoplon.app_pages._index_DOT_html.next_pass = (function hoplon$app_pages$_index_DOT_html$next_pass(){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes)))){
return null;
} else {
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)) == null)){
var G__34595 = hoplon.app_pages._index_DOT_html.selected_pass;
var G__34596 = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34595,G__34596) : cljs.core.reset_BANG_.call(null,G__34595,G__34596));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)),cljs.core.last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))))){
return null;
} else {
var G__34597 = hoplon.app_pages._index_DOT_html.selected_pass;
var G__34598 = cljs.core.second(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(((function (G__34597){
return (function (p1__34590_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)),p1__34590_SHARP_);
});})(G__34597))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34597,G__34598) : cljs.core.reset_BANG_.call(null,G__34597,G__34598));

}
}
}
});
/**
 * Moves to the previous pass in the list, if ther eis one
 */
hoplon.app_pages._index_DOT_html.prev_pass = (function hoplon$app_pages$_index_DOT_html$prev_pass(){
if(cljs.core.empty_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes)))){
return null;
} else {
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)) == null)){
var G__34604 = hoplon.app_pages._index_DOT_html.selected_pass;
var G__34605 = cljs.core.last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34604,G__34605) : cljs.core.reset_BANG_.call(null,G__34604,G__34605));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)),cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))))){
return null;
} else {
var G__34606 = hoplon.app_pages._index_DOT_html.selected_pass;
var G__34607 = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (G__34606){
return (function (p1__34599_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.selected_pass) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.selected_pass)),p1__34599_SHARP_);
});})(G__34606))
,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34606,G__34607) : cljs.core.reset_BANG_.call(null,G__34606,G__34607));

}
}
}
});
hoplon.app_pages._index_DOT_html.load_acmi = (function hoplon$app_pages$_index_DOT_html$load_acmi(_){
var i = goog.dom.createElement("input");
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
i.type = "file";

var G__34666_34723 = goog.dom.getDocument().body;
var G__34667_34724 = i;
goog.dom.appendChild(G__34666_34723,G__34667_34724);

goog.style.showElement(i,false);

i.onchange = ((function (i,ch){
return (function (e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,e);

return cljs.core.async.close_BANG_(ch);
});})(i,ch))
;

i.click();

var c__26728__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto__,i,ch){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto__,i,ch){
return (function (state_34682){
var state_val_34683 = (state_34682[(1)]);
if((state_val_34683 === (1))){
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34682__$1,(2),ch);
} else {
if((state_val_34683 === (2))){
var inst_34672 = (state_34682[(7)]);
var inst_34669 = (state_34682[(8)]);
var inst_34669__$1 = (state_34682[(2)]);
var inst_34670 = inst_34669__$1.target;
var inst_34671 = inst_34670.files;
var inst_34672__$1 = (inst_34671[(0)]);
var state_34682__$1 = (function (){var statearr_34684 = state_34682;
(statearr_34684[(7)] = inst_34672__$1);

(statearr_34684[(8)] = inst_34669__$1);

return statearr_34684;
})();
if(cljs.core.truth_(inst_34672__$1)){
var statearr_34685_34725 = state_34682__$1;
(statearr_34685_34725[(1)] = (3));

} else {
var statearr_34686_34726 = state_34682__$1;
(statearr_34686_34726[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_34683 === (3))){
var inst_34672 = (state_34682[(7)]);
var inst_34669 = (state_34682[(8)]);
var inst_34674 = (new FileReader());
var inst_34675 = (function (){var e = inst_34669;
var temp__6503__auto__ = inst_34672;
var file = inst_34672;
var reader = inst_34674;
return ((function (e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (p1__34608_SHARP_){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.loading_QMARK_,true) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.loading_QMARK_,true));

var c__26728__auto____$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (){
var f__26729__auto__ = (function (){var switch__26612__auto__ = ((function (c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (state_34697){
var state_val_34698 = (state_34697[(1)]);
if((state_val_34698 === (1))){
var inst_34687 = cljs.core.async.timeout((100));
var state_34697__$1 = state_34697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34697__$1,(2),inst_34687);
} else {
if((state_val_34698 === (2))){
var inst_34689 = (state_34697[(2)]);
var inst_34690 = p1__34608_SHARP_.target;
var inst_34691 = inst_34690.result;
var inst_34692 = (function (){var contents = inst_34691;
return ((function (contents,inst_34689,inst_34690,inst_34691,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (){
var G__34699_34727 = hoplon.app_pages._index_DOT_html.acmi;
var G__34700_34728 = lsobot.acmi.read_acmi.cljs$core$IFn$_invoke$arity$2(contents,((function (G__34699_34727,contents,inst_34689,inst_34690,inst_34691,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (e__$1){
var or__17769__auto__ = cljs.core.cst$kw$lsobot$acmi_SLASH_pilot.cljs$core$IFn$_invoke$arity$1(e__$1);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$acmi_SLASH_object_DASH_type.cljs$core$IFn$_invoke$arity$1(e__$1),"AircraftCarrier");
}
});})(G__34699_34727,contents,inst_34689,inst_34690,inst_34691,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34699_34727,G__34700_34728) : cljs.core.reset_BANG_.call(null,G__34699_34727,G__34700_34728));

var G__34701 = hoplon.app_pages._index_DOT_html.acmi_name;
var G__34702 = file.name;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34701,G__34702) : cljs.core.reset_BANG_.call(null,G__34701,G__34702));
});
;})(contents,inst_34689,inst_34690,inst_34691,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
})();
var inst_34693 = javelin.core.dosync_STAR_(inst_34692);
var inst_34694 = (function (){var contents = inst_34691;
return ((function (contents,inst_34689,inst_34690,inst_34691,inst_34692,inst_34693,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function (){
var G__34703_34729 = hoplon.app_pages._index_DOT_html.selected_pass;
var G__34704_34730 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes)))))?cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))):null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__34703_34729,G__34704_34730) : cljs.core.reset_BANG_.call(null,G__34703_34729,G__34704_34730));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.loading_QMARK_,false) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.loading_QMARK_,false));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.limit_displayed_passes_QMARK_,false) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.limit_displayed_passes_QMARK_,false));
});
;})(contents,inst_34689,inst_34690,inst_34691,inst_34692,inst_34693,state_val_34698,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
})();
var inst_34695 = javelin.core.dosync_STAR_(inst_34694);
var state_34697__$1 = (function (){var statearr_34705 = state_34697;
(statearr_34705[(7)] = inst_34693);

(statearr_34705[(8)] = inst_34689);

return statearr_34705;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34697__$1,inst_34695);
} else {
return null;
}
}
});})(c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
;
return ((function (switch__26612__auto__,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch){
return (function() {
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__ = null;
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0 = (function (){
var statearr_34709 = [null,null,null,null,null,null,null,null,null];
(statearr_34709[(0)] = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__);

(statearr_34709[(1)] = (1));

return statearr_34709;
});
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1 = (function (state_34697){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_34697);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e34710){if((e34710 instanceof Object)){
var ex__26616__auto__ = e34710;
var statearr_34711_34731 = state_34697;
(statearr_34711_34731[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34697);

return cljs.core.cst$kw$recur;
} else {
throw e34710;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__34732 = state_34697;
state_34697 = G__34732;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__ = function(state_34697){
switch(arguments.length){
case 0:
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0.call(this);
case 1:
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1.call(this,state_34697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0;
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1;
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
})();
var state__26730__auto__ = (function (){var statearr_34712 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_34712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto____$1);

return statearr_34712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto____$1,e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
);

return c__26728__auto____$1;
});
;})(e,temp__6503__auto__,file,reader,inst_34672,inst_34669,inst_34674,state_val_34683,c__26728__auto__,i,ch))
})();
var inst_34676 = inst_34674.onload = inst_34675;
var inst_34677 = inst_34674.readAsText(inst_34672);
var state_34682__$1 = (function (){var statearr_34713 = state_34682;
(statearr_34713[(9)] = inst_34676);

return statearr_34713;
})();
var statearr_34714_34733 = state_34682__$1;
(statearr_34714_34733[(2)] = inst_34677);

(statearr_34714_34733[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34683 === (4))){
var state_34682__$1 = state_34682;
var statearr_34715_34734 = state_34682__$1;
(statearr_34715_34734[(2)] = null);

(statearr_34715_34734[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_34683 === (5))){
var inst_34680 = (state_34682[(2)]);
var state_34682__$1 = state_34682;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34682__$1,inst_34680);
} else {
return null;
}
}
}
}
}
});})(c__26728__auto__,i,ch))
;
return ((function (switch__26612__auto__,c__26728__auto__,i,ch){
return (function() {
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__ = null;
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0 = (function (){
var statearr_34719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34719[(0)] = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__);

(statearr_34719[(1)] = (1));

return statearr_34719;
});
var hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1 = (function (state_34682){
while(true){
var ret_value__26614__auto__ = (function (){try{while(true){
var result__26615__auto__ = switch__26612__auto__(state_34682);
if(cljs.core.keyword_identical_QMARK_(result__26615__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__26615__auto__;
}
break;
}
}catch (e34720){if((e34720 instanceof Object)){
var ex__26616__auto__ = e34720;
var statearr_34721_34735 = state_34682;
(statearr_34721_34735[(5)] = ex__26616__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34682);

return cljs.core.cst$kw$recur;
} else {
throw e34720;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26614__auto__,cljs.core.cst$kw$recur)){
var G__34736 = state_34682;
state_34682 = G__34736;
continue;
} else {
return ret_value__26614__auto__;
}
break;
}
});
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__ = function(state_34682){
switch(arguments.length){
case 0:
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0.call(this);
case 1:
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1.call(this,state_34682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$0 = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____0;
hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__.cljs$core$IFn$_invoke$arity$1 = hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto____1;
return hoplon$app_pages$_index_DOT_html$load_acmi_$_state_machine__26613__auto__;
})()
;})(switch__26612__auto__,c__26728__auto__,i,ch))
})();
var state__26730__auto__ = (function (){var statearr_34722 = (f__26729__auto__.cljs$core$IFn$_invoke$arity$0 ? f__26729__auto__.cljs$core$IFn$_invoke$arity$0() : f__26729__auto__.call(null));
(statearr_34722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26728__auto__);

return statearr_34722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26730__auto__);
});})(c__26728__auto__,i,ch))
);

return c__26728__auto__;
});
hoplon.app_pages._index_DOT_html.save_data = (function hoplon$app_pages$_index_DOT_html$save_data(blob,filename){
return saveAs(blob,filename);
});
hoplon.app_pages._index_DOT_html.export_csv = (function hoplon$app_pages$_index_DOT_html$export_csv(){
if((cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes))) === (0))){
return null;
} else {
return hoplon.app_pages._index_DOT_html.save_data((function (){var G__34740 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.passes) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.passes));
return (hoplon.app_pages._index_DOT_html.make_csv.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.make_csv.cljs$core$IFn$_invoke$arity$1(G__34740) : hoplon.app_pages._index_DOT_html.make_csv.call(null,G__34740));
})(),[cljs.core.str((cljs.core.truth_((function (){var G__34741 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.acmi_name) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.acmi_name)).toLowerCase();
var G__34742 = ".txt.acmi";
return goog.string.endsWith(G__34741,G__34742);
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.acmi_name) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.acmi_name)),(0),(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.acmi_name) : cljs.core.deref.call(null,hoplon.app_pages._index_DOT_html.acmi_name))) - cljs.core.count(".txt.acmi"))):null)),cljs.core.str(".csv")].join(''));
}
});
var help_states_34839 = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.help = ((function (help_states_34839){
return (function() { 
var hoplon$app_pages$_index_DOT_html$help__delegate = function (args__24721__auto__){
var vec__34791 = hoplon.core.parse_args(args__24721__auto__);
var map__34794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(0),null);
var map__34794__$1 = ((((!((map__34794 == null)))?((((map__34794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34794):map__34794);
var contents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34791,(1),null);
var id = [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0())].join('');
var content_id = [cljs.core.str("content-"),cljs.core.str(id)].join('');
var img_id = [cljs.core.str("img-"),cljs.core.str(id)].join('');
var G__34812 = cljs.core.cst$kw$class;
var G__34813 = "help";
var G__34814 = (function (){var G__34819 = cljs.core.cst$kw$id;
var G__34820 = content_id;
var G__34821 = cljs.core.cst$kw$fade_DASH_toggle;
var G__34822 = javelin.core.formula(((function (G__34819,G__34820,G__34821,G__34812,G__34813,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839){
return (function (G__34829,G__34830,G__34831){
return (G__34829.cljs$core$IFn$_invoke$arity$2 ? G__34829.cljs$core$IFn$_invoke$arity$2(G__34830,G__34831) : G__34829.call(null,G__34830,G__34831));
});})(G__34819,G__34820,G__34821,G__34812,G__34813,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839))
).call(null,cljs.core.get,help_states_34839,id);
var G__34823 = cljs.core.cst$kw$class;
var G__34824 = "content";
var G__34825 = cljs.core.cst$kw$click;
var G__34826 = ((function (G__34819,G__34820,G__34821,G__34822,G__34823,G__34824,G__34825,G__34812,G__34813,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(help_states_34839,cljs.core.assoc,id,false);
});})(G__34819,G__34820,G__34821,G__34822,G__34823,G__34824,G__34825,G__34812,G__34813,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839))
;
var G__34827 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"close-help","X") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"close-help","X"));
var G__34828 = contents;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$10 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$10(G__34819,G__34820,G__34821,G__34822,G__34823,G__34824,G__34825,G__34826,G__34827,G__34828) : hoplon.core.div.call(null,G__34819,G__34820,G__34821,G__34822,G__34823,G__34824,G__34825,G__34826,G__34827,G__34828));
})();
var G__34815 = (function (){var G__34832 = cljs.core.cst$kw$id;
var G__34833 = img_id;
var G__34834 = cljs.core.cst$kw$class;
var G__34835 = "img";
var G__34836 = cljs.core.cst$kw$click;
var G__34837 = ((function (G__34832,G__34833,G__34834,G__34835,G__34836,G__34812,G__34813,G__34814,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(help_states_34839,((function (G__34832,G__34833,G__34834,G__34835,G__34836,G__34812,G__34813,G__34814,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839){
return (function (hs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.zipmap(cljs.core.keys(hs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false)),cljs.core.PersistentArrayMap.fromArray([id,cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(hs,id))], true, false)], 0));
});})(G__34832,G__34833,G__34834,G__34835,G__34836,G__34812,G__34813,G__34814,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839))
);
});})(G__34832,G__34833,G__34834,G__34835,G__34836,G__34812,G__34813,G__34814,id,content_id,img_id,vec__34791,map__34794,map__34794__$1,contents,help_states_34839))
;
var G__34838 = "?";
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__34832,G__34833,G__34834,G__34835,G__34836,G__34837,G__34838) : hoplon.core.div.call(null,G__34832,G__34833,G__34834,G__34835,G__34836,G__34837,G__34838));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__34812,G__34813,G__34814,G__34815) : hoplon.core.div.call(null,G__34812,G__34813,G__34814,G__34815));
};
var hoplon$app_pages$_index_DOT_html$help = function (var_args){
var args__24721__auto__ = null;
if (arguments.length > 0) {
var G__34840__i = 0, G__34840__a = new Array(arguments.length -  0);
while (G__34840__i < G__34840__a.length) {G__34840__a[G__34840__i] = arguments[G__34840__i + 0]; ++G__34840__i;}
  args__24721__auto__ = new cljs.core.IndexedSeq(G__34840__a,0);
} 
return hoplon$app_pages$_index_DOT_html$help__delegate.call(this,args__24721__auto__);};
hoplon$app_pages$_index_DOT_html$help.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$help.cljs$lang$applyTo = (function (arglist__34841){
var args__24721__auto__ = cljs.core.seq(arglist__34841);
return hoplon$app_pages$_index_DOT_html$help__delegate(args__24721__auto__);
});
hoplon$app_pages$_index_DOT_html$help.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$help__delegate;
return hoplon$app_pages$_index_DOT_html$help;
})()
;})(help_states_34839))
;
hoplon.app_pages._index_DOT_html.help_for = (function hoplon$app_pages$_index_DOT_html$help_for(help_path){
return hoplon.app_pages._index_DOT_html.help.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__17769__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(lsobot.help.content,help_path);
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Help content has not yet been written for this feature.") : hoplon.core.p.call(null,"Help content has not yet been written for this feature."));
}
})()], 0));
});
hoplon.app_pages._index_DOT_html.urls = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tyrant,"http://firstfighterwing.com/VFW/member.php?893-Tyrant",cljs.core.cst$kw$shady,"http://firstfighterwing.com/VFW/member.php?484-Shady",cljs.core.cst$kw$flounder,"http://firstfighterwing.com/VFW/member.php?217-Flounder",cljs.core.cst$kw$drillin,"http://firstfighterwing.com/VFW/member.php?133-Drillin"], null);
hoplon.app_pages._index_DOT_html.view_bounds = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$aoa_DASH_aspect,cljs.core.cst$kw$fast,cljs.core.cst$kw$west,cljs.core.cst$kw$south,cljs.core.cst$kw$east,cljs.core.cst$kw$high,cljs.core.cst$kw$slow,cljs.core.cst$kw$low,cljs.core.cst$kw$north],[(3),5.5,(-1100),lsobot.units.nm__GT_ft(0.25),(7000),lsobot.units.nm__GT_ft(0.35),10.5,(-500),lsobot.units.nm__GT_ft(-0.25)]);
hoplon.app_pages._index_DOT_html.carrier_dimensions = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$length,(1100),cljs.core.cst$kw$x_DASH_offset,(-102),cljs.core.cst$kw$y_DASH_offset,(300)], null);
/**
 * SVG data for the elevation view of the carrier
 */
hoplon.app_pages._index_DOT_html.carrier_elevation = (function hoplon$app_pages$_index_DOT_html$carrier_elevation(deck_height){
var G__34898 = cljs.core.cst$kw$transform;
var G__34899 = (function (){var G__34904 = "scale(-1 1) translate(%f -%f)";
var G__34905 = (cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions) - cljs.core.cst$kw$y_DASH_offset.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions));
var G__34906 = deck_height;
return goog.string.format(G__34904,G__34905,G__34906);
})();
var G__34900 = (function (){var G__34907 = cljs.core.cst$kw$id;
var G__34908 = "carrier-outline-elevation";
var G__34909 = cljs.core.cst$kw$attr;
var G__34910 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-side"], null);
var G__34911 = cljs.core.cst$kw$d;
var G__34912 = (function (){var G__34913 = "M-50 0 L0 %f L%f %f L%f 0";
var G__34914 = deck_height;
var G__34915 = (- cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions));
var G__34916 = deck_height;
var G__34917 = (- cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions));
return goog.string.format(G__34913,G__34914,G__34915,G__34916,G__34917);
})();
return (hoplon.svg.path.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.path.cljs$core$IFn$_invoke$arity$6(G__34907,G__34908,G__34909,G__34910,G__34911,G__34912) : hoplon.svg.path.call(null,G__34907,G__34908,G__34909,G__34910,G__34911,G__34912));
})();
var G__34901 = (function (){var G__34918 = cljs.core.cst$kw$attr;
var G__34919 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-side"], null);
var G__34920 = cljs.core.cst$kw$x;
var G__34921 = (-850);
var G__34922 = cljs.core.cst$kw$y;
var G__34923 = deck_height;
var G__34924 = cljs.core.cst$kw$width;
var G__34925 = (150);
var G__34926 = cljs.core.cst$kw$height;
var G__34927 = (90);
return (hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10(G__34918,G__34919,G__34920,G__34921,G__34922,G__34923,G__34924,G__34925,G__34926,G__34927) : hoplon.svg.rect.call(null,G__34918,G__34919,G__34920,G__34921,G__34922,G__34923,G__34924,G__34925,G__34926,G__34927));
})();
var G__34902 = (function (){var G__34928 = cljs.core.cst$kw$attr;
var G__34929 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-side"], null);
var G__34930 = cljs.core.cst$kw$x;
var G__34931 = (-800);
var G__34932 = cljs.core.cst$kw$y;
var G__34933 = (150);
var G__34934 = cljs.core.cst$kw$width;
var G__34935 = (50);
var G__34936 = cljs.core.cst$kw$height;
var G__34937 = deck_height;
return (hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10(G__34928,G__34929,G__34930,G__34931,G__34932,G__34933,G__34934,G__34935,G__34936,G__34937) : hoplon.svg.rect.call(null,G__34928,G__34929,G__34930,G__34931,G__34932,G__34933,G__34934,G__34935,G__34936,G__34937));
})();
var G__34903 = (function (){var G__34938 = cljs.core.cst$kw$attr;
var G__34939 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-side"], null);
var G__34940 = cljs.core.cst$kw$x;
var G__34941 = (-850);
var G__34942 = cljs.core.cst$kw$y;
var G__34943 = (150);
var G__34944 = cljs.core.cst$kw$width;
var G__34945 = (25);
var G__34946 = cljs.core.cst$kw$height;
var G__34947 = (40);
return (hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10(G__34938,G__34939,G__34940,G__34941,G__34942,G__34943,G__34944,G__34945,G__34946,G__34947) : hoplon.svg.rect.call(null,G__34938,G__34939,G__34940,G__34941,G__34942,G__34943,G__34944,G__34945,G__34946,G__34947));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$6(G__34898,G__34899,G__34900,G__34901,G__34902,G__34903) : hoplon.svg.g.call(null,G__34898,G__34899,G__34900,G__34901,G__34902,G__34903));
});
hoplon.app_pages._index_DOT_html.carrier_plan = (function hoplon$app_pages$_index_DOT_html$carrier_plan(){

var outline = (function (){var G__35064 = cljs.core.cst$kw$attr;
var G__35065 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-top"], null);
var G__35066 = cljs.core.cst$kw$d;
var G__35067 = "M80 1100\nL250 1100\nL280 920\nL280 350\nL200 200\nL180 0\nL100 0\nL80 200\nL0 350\nL0 920\nL30 1100";
return (hoplon.svg.path.cljs$core$IFn$_invoke$arity$4 ? hoplon.svg.path.cljs$core$IFn$_invoke$arity$4(G__35064,G__35065,G__35066,G__35067) : hoplon.svg.path.call(null,G__35064,G__35065,G__35066,G__35067));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35071 = (function (){var G__35072 = cljs.core.cst$kw$id;
var G__35073 = "carrier-outline-clip";
var G__35074 = (hoplon.svg.path.cljs$core$IFn$_invoke$arity$2 ? hoplon.svg.path.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$d,"M80 1100\nL250 1100\nL280 920\nL280 350\nL200 200\nL180 0\nL100 0\nL80 200\nL0 350\nL0 920\nL30 1100") : hoplon.svg.path.call(null,cljs.core.cst$kw$d,"M80 1100\nL250 1100\nL280 920\nL280 350\nL200 200\nL180 0\nL100 0\nL80 200\nL0 350\nL0 920\nL30 1100"));
return (hoplon.svg.clipPath.cljs$core$IFn$_invoke$arity$3 ? hoplon.svg.clipPath.cljs$core$IFn$_invoke$arity$3(G__35072,G__35073,G__35074) : hoplon.svg.clipPath.call(null,G__35072,G__35073,G__35074));
})();
return (hoplon.svg.defs.cljs$core$IFn$_invoke$arity$1 ? hoplon.svg.defs.cljs$core$IFn$_invoke$arity$1(G__35071) : hoplon.svg.defs.call(null,G__35071));
})(),(function (){var G__35078 = cljs.core.cst$kw$transform;
var G__35079 = (function (){var G__35082 = "rotate(-83) translate(%f %f)";
var G__35083 = cljs.core.cst$kw$x_DASH_offset.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions);
var G__35084 = (cljs.core.cst$kw$y_DASH_offset.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions) - cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.carrier_dimensions));
return goog.string.format(G__35082,G__35083,G__35084);
})();
var G__35080 = outline;
var G__35081 = (function (){var G__35131 = cljs.core.cst$kw$clip_DASH_path;
var G__35132 = "url(#carrier-outline-clip)";
var G__35133 = (function (){var G__35134 = cljs.core.cst$kw$transform;
var G__35135 = goog.string.format("rotate(-7 180 1100)");
var G__35136 = (function (){var G__35140 = cljs.core.cst$kw$attr;
var G__35141 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-top-markings end"], null);
var G__35142 = cljs.core.cst$kw$x1;
var G__35143 = "180";
var G__35144 = cljs.core.cst$kw$y1;
var G__35145 = "1090";
var G__35146 = cljs.core.cst$kw$x2;
var G__35147 = "100";
var G__35148 = cljs.core.cst$kw$y2;
var G__35149 = "1090";
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149) : hoplon.svg.line.call(null,G__35140,G__35141,G__35142,G__35143,G__35144,G__35145,G__35146,G__35147,G__35148,G__35149));
})();
var G__35137 = (function (){var G__35150 = cljs.core.cst$kw$attr;
var G__35151 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-top-markings"], null);
var G__35152 = cljs.core.cst$kw$x1;
var G__35153 = "180";
var G__35154 = cljs.core.cst$kw$y1;
var G__35155 = "1100";
var G__35156 = cljs.core.cst$kw$x2;
var G__35157 = "180";
var G__35158 = cljs.core.cst$kw$y2;
var G__35159 = "0";
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35150,G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159) : hoplon.svg.line.call(null,G__35150,G__35151,G__35152,G__35153,G__35154,G__35155,G__35156,G__35157,G__35158,G__35159));
})();
var G__35138 = (function (){var G__35160 = cljs.core.cst$kw$attr;
var G__35161 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-top-markings"], null);
var G__35162 = cljs.core.cst$kw$x1;
var G__35163 = "100";
var G__35164 = cljs.core.cst$kw$y1;
var G__35165 = "1100";
var G__35166 = cljs.core.cst$kw$x2;
var G__35167 = "100";
var G__35168 = cljs.core.cst$kw$y2;
var G__35169 = "0";
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166,G__35167,G__35168,G__35169) : hoplon.svg.line.call(null,G__35160,G__35161,G__35162,G__35163,G__35164,G__35165,G__35166,G__35167,G__35168,G__35169));
})();
var G__35139 = (function (){var G__35170 = cljs.core.cst$kw$attr;
var G__35171 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"carrier-top-markings middle"], null);
var G__35172 = cljs.core.cst$kw$x1;
var G__35173 = "140";
var G__35174 = cljs.core.cst$kw$y1;
var G__35175 = "1100";
var G__35176 = cljs.core.cst$kw$x2;
var G__35177 = "140";
var G__35178 = cljs.core.cst$kw$y2;
var G__35179 = "0";
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179) : hoplon.svg.line.call(null,G__35170,G__35171,G__35172,G__35173,G__35174,G__35175,G__35176,G__35177,G__35178,G__35179));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$6 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$6(G__35134,G__35135,G__35136,G__35137,G__35138,G__35139) : hoplon.svg.g.call(null,G__35134,G__35135,G__35136,G__35137,G__35138,G__35139));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$3 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$3(G__35131,G__35132,G__35133) : hoplon.svg.g.call(null,G__35131,G__35132,G__35133));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$4 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$4(G__35078,G__35079,G__35080,G__35081) : hoplon.svg.g.call(null,G__35078,G__35079,G__35080,G__35081));
})()], null);
});
hoplon.app_pages._index_DOT_html.pitch_exaggeration = (1);
hoplon.app_pages._index_DOT_html.deviation_classes = (function hoplon$app_pages$_index_DOT_html$deviation_classes(base,deviation){
var map__35182 = deviation;
var map__35182__$1 = ((((!((map__35182 == null)))?((((map__35182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35182):map__35182);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,cljs.core.cst$kw$lsobot$grading_SLASH_direction);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35182__$1,cljs.core.cst$kw$lsobot$grading_SLASH_degree);
return [cljs.core.str(base),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(direction)?cljs.core.name(direction):null)),cljs.core.str(" "),cljs.core.str((cljs.core.truth_(degree)?cljs.core.name(degree):null))].join('');
});
hoplon.app_pages._index_DOT_html.aoa_smoothing = 0.9;
/**
 * Returns SVG data that shows the AOA data
 */
hoplon.app_pages._index_DOT_html.aoa_path = (function hoplon$app_pages$_index_DOT_html$aoa_path(params,scale,pass){
var G__35261 = cljs.core.cst$kw$attr;
var G__35262 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"aoa-data"], null);
var G__35263 = (function (){var frames = cljs.core.cst$kw$lsobot$grading_SLASH_frames.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$assessment.cljs$core$IFn$_invoke$arity$1(pass));
var iter__18623__auto__ = ((function (frames,G__35261,G__35262){
return (function hoplon$app_pages$_index_DOT_html$aoa_path_$_iter__35264(s__35265){
return (new cljs.core.LazySeq(null,((function (frames,G__35261,G__35262){
return (function (){
var s__35265__$1 = s__35265;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__35265__$1);
if(temp__6503__auto__){
var s__35265__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35265__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__35265__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__35267 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__35266 = (0);
while(true){
if((i__35266 < size__18622__auto__)){
var frame = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__35266);
var map__35304 = frame;
var map__35304__$1 = ((((!((map__35304 == null)))?((((map__35304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35304):map__35304);
var aoa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,cljs.core.cst$kw$lsobot$grading_SLASH_aoa);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,cljs.core.cst$kw$lsobot$grading_SLASH_t);
var downrange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35304__$1,cljs.core.cst$kw$lsobot$grading_SLASH_downrange);
var map__35305 = aoa;
var map__35305__$1 = ((((!((map__35305 == null)))?((((map__35305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35305):map__35305);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35305__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
if(cljs.core.truth_((function (){var and__17757__auto__ = aoa;
if(cljs.core.truth_(and__17757__auto__)){
return (downrange > (0));
} else {
return and__17757__auto__;
}
})())){
cljs.core.chunk_append(b__35267,(function (){var G__35308 = cljs.core.cst$kw$attr;
var G__35309 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("aoa-value ",deviation),cljs.core.cst$kw$t,t], null);
var G__35310 = cljs.core.cst$kw$transform;
var G__35311 = (function (){var G__35318 = "translate(%f %f)";
var G__35319 = downrange;
var G__35320 = (scale * value);
return goog.string.format(G__35318,G__35319,G__35320);
})();
var G__35312 = cljs.core.cst$kw$cx;
var G__35313 = (0);
var G__35314 = cljs.core.cst$kw$cy;
var G__35315 = (0);
var G__35316 = cljs.core.cst$kw$r;
var G__35317 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$10(G__35308,G__35309,G__35310,G__35311,G__35312,G__35313,G__35314,G__35315,G__35316,G__35317) : hoplon.svg.circle.call(null,G__35308,G__35309,G__35310,G__35311,G__35312,G__35313,G__35314,G__35315,G__35316,G__35317));
})());

var G__35338 = (i__35266 + (1));
i__35266 = G__35338;
continue;
} else {
var G__35339 = (i__35266 + (1));
i__35266 = G__35339;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35267),hoplon$app_pages$_index_DOT_html$aoa_path_$_iter__35264(cljs.core.chunk_rest(s__35265__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35267),null);
}
} else {
var frame = cljs.core.first(s__35265__$2);
var map__35321 = frame;
var map__35321__$1 = ((((!((map__35321 == null)))?((((map__35321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35321):map__35321);
var aoa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,cljs.core.cst$kw$lsobot$grading_SLASH_aoa);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,cljs.core.cst$kw$lsobot$grading_SLASH_t);
var downrange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35321__$1,cljs.core.cst$kw$lsobot$grading_SLASH_downrange);
var map__35322 = aoa;
var map__35322__$1 = ((((!((map__35322 == null)))?((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35322):map__35322);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35322__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
if(cljs.core.truth_((function (){var and__17757__auto__ = aoa;
if(cljs.core.truth_(and__17757__auto__)){
return (downrange > (0));
} else {
return and__17757__auto__;
}
})())){
return cljs.core.cons((function (){var G__35325 = cljs.core.cst$kw$attr;
var G__35326 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("aoa-value ",deviation),cljs.core.cst$kw$t,t], null);
var G__35327 = cljs.core.cst$kw$transform;
var G__35328 = (function (){var G__35335 = "translate(%f %f)";
var G__35336 = downrange;
var G__35337 = (scale * value);
return goog.string.format(G__35335,G__35336,G__35337);
})();
var G__35329 = cljs.core.cst$kw$cx;
var G__35330 = (0);
var G__35331 = cljs.core.cst$kw$cy;
var G__35332 = (0);
var G__35333 = cljs.core.cst$kw$r;
var G__35334 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$10(G__35325,G__35326,G__35327,G__35328,G__35329,G__35330,G__35331,G__35332,G__35333,G__35334) : hoplon.svg.circle.call(null,G__35325,G__35326,G__35327,G__35328,G__35329,G__35330,G__35331,G__35332,G__35333,G__35334));
})(),hoplon$app_pages$_index_DOT_html$aoa_path_$_iter__35264(cljs.core.rest(s__35265__$2)));
} else {
var G__35340 = cljs.core.rest(s__35265__$2);
s__35265__$1 = G__35340;
continue;
}
}
} else {
return null;
}
break;
}
});})(frames,G__35261,G__35262))
,null,null));
});})(frames,G__35261,G__35262))
;
return iter__18623__auto__(frames);
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$3 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$3(G__35261,G__35262,G__35263) : hoplon.svg.g.call(null,G__35261,G__35262,G__35263));
});
hoplon.app_pages._index_DOT_html.elevation_exaggeration = (4);
hoplon.app_pages._index_DOT_html.elevation_path = (function hoplon$app_pages$_index_DOT_html$elevation_path(params,pass){
var G__35442 = cljs.core.cst$kw$attr;
var G__35443 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"approach-path"], null);
var G__35444 = (function (){var iter__18623__auto__ = ((function (G__35442,G__35443){
return (function hoplon$app_pages$_index_DOT_html$elevation_path_$_iter__35445(s__35446){
return (new cljs.core.LazySeq(null,((function (G__35442,G__35443){
return (function (){
var s__35446__$1 = s__35446;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__35446__$1);
if(temp__6503__auto__){
var s__35446__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35446__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__35446__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__35448 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__35447 = (0);
while(true){
if((i__35447 < size__18622__auto__)){
var frame = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__35447);
cljs.core.chunk_append(b__35448,(function (){var map__35497 = frame;
var map__35497__$1 = ((((!((map__35497 == null)))?((((map__35497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35497):map__35497);
var glideslope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,cljs.core.cst$kw$lsobot$grading_SLASH_glideslope);
var hook_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35497__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_t);
var vec__35498 = hook_pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(0),null);
var downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35498,(2),null);
var map__35501 = glideslope;
var map__35501__$1 = ((((!((map__35501 == null)))?((((map__35501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35501):map__35501);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35501__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35504 = cljs.core.cst$kw$attr;
var G__35505 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$glideslope,value,cljs.core.cst$kw$hook,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$grading_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$height,height,cljs.core.cst$kw$t,t,cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("glideslope-data",deviation)], null);
var G__35506 = cljs.core.cst$kw$cx;
var G__35507 = downrange;
var G__35508 = cljs.core.cst$kw$cy;
var G__35509 = (hoplon.app_pages._index_DOT_html.elevation_exaggeration * height);
var G__35510 = cljs.core.cst$kw$r;
var G__35511 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35504,G__35505,G__35506,G__35507,G__35508,G__35509,G__35510,G__35511) : hoplon.svg.circle.call(null,G__35504,G__35505,G__35506,G__35507,G__35508,G__35509,G__35510,G__35511));
})(),(((downrange < (0)))?cljs.core.PersistentVector.EMPTY:(function (){var aoa = cljs.core.cst$kw$lsobot$grading_SLASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame));
var G__35512 = cljs.core.cst$kw$attr;
var G__35513 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("aoa-deviation",cljs.core.cst$kw$lsobot$grading_SLASH_deviation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame))),cljs.core.cst$kw$aoa,cljs.core.cst$kw$lsobot$grading_SLASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame)),cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$grading_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$path_DASH_a,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(frame)], null);
var G__35514 = cljs.core.cst$kw$cx;
var G__35515 = downrange;
var G__35516 = cljs.core.cst$kw$cy;
var G__35517 = (((100) * (aoa - cljs.core.cst$kw$ideal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$aoa.cljs$core$IFn$_invoke$arity$1(params)))) + (hoplon.app_pages._index_DOT_html.elevation_exaggeration * height));
var G__35518 = cljs.core.cst$kw$r;
var G__35519 = (10);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35512,G__35513,G__35514,G__35515,G__35516,G__35517,G__35518,G__35519) : hoplon.svg.circle.call(null,G__35512,G__35513,G__35514,G__35515,G__35516,G__35517,G__35518,G__35519));
})())], null);
})());

var G__35543 = (i__35447 + (1));
i__35447 = G__35543;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35448),hoplon$app_pages$_index_DOT_html$elevation_path_$_iter__35445(cljs.core.chunk_rest(s__35446__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35448),null);
}
} else {
var frame = cljs.core.first(s__35446__$2);
return cljs.core.cons((function (){var map__35520 = frame;
var map__35520__$1 = ((((!((map__35520 == null)))?((((map__35520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35520):map__35520);
var glideslope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520__$1,cljs.core.cst$kw$lsobot$grading_SLASH_glideslope);
var hook_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520__$1,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35520__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_t);
var vec__35521 = hook_pos;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35521,(0),null);
var downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35521,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35521,(2),null);
var map__35524 = glideslope;
var map__35524__$1 = ((((!((map__35524 == null)))?((((map__35524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35524):map__35524);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35524__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35524__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35527 = cljs.core.cst$kw$attr;
var G__35528 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$glideslope,value,cljs.core.cst$kw$hook,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$grading_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$height,height,cljs.core.cst$kw$t,t,cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("glideslope-data",deviation)], null);
var G__35529 = cljs.core.cst$kw$cx;
var G__35530 = downrange;
var G__35531 = cljs.core.cst$kw$cy;
var G__35532 = (hoplon.app_pages._index_DOT_html.elevation_exaggeration * height);
var G__35533 = cljs.core.cst$kw$r;
var G__35534 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35527,G__35528,G__35529,G__35530,G__35531,G__35532,G__35533,G__35534) : hoplon.svg.circle.call(null,G__35527,G__35528,G__35529,G__35530,G__35531,G__35532,G__35533,G__35534));
})(),(((downrange < (0)))?cljs.core.PersistentVector.EMPTY:(function (){var aoa = cljs.core.cst$kw$lsobot$grading_SLASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame));
var G__35535 = cljs.core.cst$kw$attr;
var G__35536 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("aoa-deviation",cljs.core.cst$kw$lsobot$grading_SLASH_deviation.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame))),cljs.core.cst$kw$aoa,cljs.core.cst$kw$lsobot$grading_SLASH_value.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_aoa.cljs$core$IFn$_invoke$arity$1(frame)),cljs.core.cst$kw$pitch,cljs.core.cst$kw$lsobot$grading_SLASH_pitch.cljs$core$IFn$_invoke$arity$1(frame),cljs.core.cst$kw$path_DASH_a,cljs.core.cst$kw$lsobot$grading_SLASH_path_DASH_a.cljs$core$IFn$_invoke$arity$1(frame)], null);
var G__35537 = cljs.core.cst$kw$cx;
var G__35538 = downrange;
var G__35539 = cljs.core.cst$kw$cy;
var G__35540 = (((100) * (aoa - cljs.core.cst$kw$ideal.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$aoa.cljs$core$IFn$_invoke$arity$1(params)))) + (hoplon.app_pages._index_DOT_html.elevation_exaggeration * height));
var G__35541 = cljs.core.cst$kw$r;
var G__35542 = (10);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35535,G__35536,G__35537,G__35538,G__35539,G__35540,G__35541,G__35542) : hoplon.svg.circle.call(null,G__35535,G__35536,G__35537,G__35538,G__35539,G__35540,G__35541,G__35542));
})())], null);
})(),hoplon$app_pages$_index_DOT_html$elevation_path_$_iter__35445(cljs.core.rest(s__35446__$2)));
}
} else {
return null;
}
break;
}
});})(G__35442,G__35443))
,null,null));
});})(G__35442,G__35443))
;
return iter__18623__auto__(cljs.core.cst$kw$lsobot$grading_SLASH_frames.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$assessment.cljs$core$IFn$_invoke$arity$1(pass)));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$3 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$3(G__35442,G__35443,G__35444) : hoplon.svg.g.call(null,G__35442,G__35443,G__35444));
});
var angular_exaggeration_35548 = (2);
var x1_35549 = lsobot.units.deg__GT_rad((4));
var x2_35550 = lsobot.units.deg__GT_rad((10));
/**
 * Make small angles bigger.
 */
hoplon.app_pages._index_DOT_html.exaggerate_angle = ((function (angular_exaggeration_35548,x1_35549,x2_35550){
return (function hoplon$app_pages$_index_DOT_html$exaggerate_angle(var_args){
var args35544 = [];
var len__18952__auto___35551 = arguments.length;
var i__18953__auto___35552 = (0);
while(true){
if((i__18953__auto___35552 < len__18952__auto___35551)){
args35544.push((arguments[i__18953__auto___35552]));

var G__35553 = (i__18953__auto___35552 + (1));
i__18953__auto___35552 = G__35553;
continue;
} else {
}
break;
}

var G__35546 = args35544.length;
switch (G__35546) {
case 1:
return hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35544.length)].join('')));

}
});})(angular_exaggeration_35548,x1_35549,x2_35550))
;

hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$1 = ((function (angular_exaggeration_35548,x1_35549,x2_35550){
return (function (rad){
if((Math.abs(rad) < x1_35549)){
return (angular_exaggeration_35548 * rad);
} else {
if((Math.abs(rad) < x2_35550)){
return ((((Math.abs(rad) - x1_35549) * ((x2_35550 - (angular_exaggeration_35548 * x1_35549)) / (x2_35550 - x1_35549))) + (angular_exaggeration_35548 * x1_35549)) * (rad / Math.abs(rad)));
} else {
return rad;

}
}
});})(angular_exaggeration_35548,x1_35549,x2_35550))
;

hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$2 = ((function (angular_exaggeration_35548,x1_35549,x2_35550){
return (function (x,y){
var r = (function (){var G__35547 = ((x * x) + (y * y));
return Math.sqrt(G__35547);
})();
var ax = Math.abs(x);
var ay = Math.abs(y);
var theta = Math.atan2(ay,ax);
var theta_SINGLEQUOTE_ = hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$1(theta);
var x_SINGLEQUOTE_ = (r * Math.cos(theta_SINGLEQUOTE_));
var y_SINGLEQUOTE_ = (r * Math.sin(theta_SINGLEQUOTE_));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x_SINGLEQUOTE_ * (x / ax)),(y_SINGLEQUOTE_ * (y / ay))], null);
});})(angular_exaggeration_35548,x1_35549,x2_35550))
;

hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$lang$maxFixedArity = 2;

hoplon.app_pages._index_DOT_html.plan_path = (function hoplon$app_pages$_index_DOT_html$plan_path(params,pass){
var G__35636 = cljs.core.cst$kw$attr;
var G__35637 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"approach-path"], null);
var G__35638 = (function (){var iter__18623__auto__ = ((function (G__35636,G__35637){
return (function hoplon$app_pages$_index_DOT_html$plan_path_$_iter__35639(s__35640){
return (new cljs.core.LazySeq(null,((function (G__35636,G__35637){
return (function (){
var s__35640__$1 = s__35640;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__35640__$1);
if(temp__6503__auto__){
var s__35640__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35640__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__35640__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__35642 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__35641 = (0);
while(true){
if((i__35641 < size__18622__auto__)){
var frame = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__35641);
cljs.core.chunk_append(b__35642,(function (){var map__35681 = frame;
var map__35681__$1 = ((((!((map__35681 == null)))?((((map__35681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35681):map__35681);
var lineup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35681__$1,cljs.core.cst$kw$lsobot$grading_SLASH_lineup);
var hook_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35681__$1,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35681__$1,cljs.core.cst$kw$lsobot$grading_SLASH_speed);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35681__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_t);
var vec__35682 = hook_pos;
var crosstrack_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(0),null);
var downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35682,(2),null);
var map__35685 = lineup;
var map__35685__$1 = ((((!((map__35685 == null)))?((((map__35685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35685):map__35685);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35685__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35685__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
var vec__35686 = hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$2(downrange,crosstrack_error);
var downrange_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35686,(0),null);
var crosstrack_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35686,(1),null);
var G__35691 = cljs.core.cst$kw$attr;
var G__35692 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineup,value,cljs.core.cst$kw$t,t,cljs.core.cst$kw$speed,speed,cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("lineup-data",deviation)], null);
var G__35693 = cljs.core.cst$kw$cx;
var G__35694 = (((downrange > (0)))?downrange_STAR_:downrange);
var G__35695 = cljs.core.cst$kw$cy;
var G__35696 = (((downrange > (0)))?crosstrack_STAR_:crosstrack_error);
var G__35697 = cljs.core.cst$kw$r;
var G__35698 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35691,G__35692,G__35693,G__35694,G__35695,G__35696,G__35697,G__35698) : hoplon.svg.circle.call(null,G__35691,G__35692,G__35693,G__35694,G__35695,G__35696,G__35697,G__35698));
})());

var G__35717 = (i__35641 + (1));
i__35641 = G__35717;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35642),hoplon$app_pages$_index_DOT_html$plan_path_$_iter__35639(cljs.core.chunk_rest(s__35640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35642),null);
}
} else {
var frame = cljs.core.first(s__35640__$2);
return cljs.core.cons((function (){var map__35699 = frame;
var map__35699__$1 = ((((!((map__35699 == null)))?((((map__35699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35699):map__35699);
var lineup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699__$1,cljs.core.cst$kw$lsobot$grading_SLASH_lineup);
var hook_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699__$1,cljs.core.cst$kw$lsobot$grading_SLASH_hook_DASH_pos);
var speed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699__$1,cljs.core.cst$kw$lsobot$grading_SLASH_speed);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35699__$1,cljs.core.cst$kw$lsobot$acmi_SLASH_t);
var vec__35700 = hook_pos;
var crosstrack_error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(0),null);
var downrange = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(1),null);
var height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35700,(2),null);
var map__35703 = lineup;
var map__35703__$1 = ((((!((map__35703 == null)))?((((map__35703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35703):map__35703);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35703__$1,cljs.core.cst$kw$lsobot$grading_SLASH_value);
var deviation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35703__$1,cljs.core.cst$kw$lsobot$grading_SLASH_deviation);
var vec__35704 = hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$2(downrange,crosstrack_error);
var downrange_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(0),null);
var crosstrack_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(1),null);
var G__35709 = cljs.core.cst$kw$attr;
var G__35710 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineup,value,cljs.core.cst$kw$t,t,cljs.core.cst$kw$speed,speed,cljs.core.cst$kw$class,hoplon.app_pages._index_DOT_html.deviation_classes("lineup-data",deviation)], null);
var G__35711 = cljs.core.cst$kw$cx;
var G__35712 = (((downrange > (0)))?downrange_STAR_:downrange);
var G__35713 = cljs.core.cst$kw$cy;
var G__35714 = (((downrange > (0)))?crosstrack_STAR_:crosstrack_error);
var G__35715 = cljs.core.cst$kw$r;
var G__35716 = (25);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__35709,G__35710,G__35711,G__35712,G__35713,G__35714,G__35715,G__35716) : hoplon.svg.circle.call(null,G__35709,G__35710,G__35711,G__35712,G__35713,G__35714,G__35715,G__35716));
})(),hoplon$app_pages$_index_DOT_html$plan_path_$_iter__35639(cljs.core.rest(s__35640__$2)));
}
} else {
return null;
}
break;
}
});})(G__35636,G__35637))
,null,null));
});})(G__35636,G__35637))
;
return iter__18623__auto__(cljs.core.cst$kw$lsobot$grading_SLASH_frames.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$assessment.cljs$core$IFn$_invoke$arity$1(pass)));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$3 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$3(G__35636,G__35637,G__35638) : hoplon.svg.g.call(null,G__35636,G__35637,G__35638));
});
/**
 * Draw the lines that show range and zones, with their labels.
 */
hoplon.app_pages._index_DOT_html.zones = (function hoplon$app_pages$_index_DOT_html$zones(params,y1,y2,zone_label_y,text_transform,class$){
var zones__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$mid,cljs.core.cst$kw$in_DASH_close], null);
var zone_starts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (zones__$1){
return (function (p1__35718_SHARP_){
return cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((function (){var G__35874 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (p1__35718_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35718_SHARP_.cljs$core$IFn$_invoke$arity$1(G__35874) : p1__35718_SHARP_.call(null,G__35874));
})());
});})(zones__$1))
,zones__$1);
var zone_ends = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (zones__$1,zone_starts){
return (function (p1__35719_SHARP_){
return cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1((function (){var G__35875 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (p1__35719_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35719_SHARP_.cljs$core$IFn$_invoke$arity$1(G__35875) : p1__35719_SHARP_.call(null,G__35875));
})());
});})(zones__$1,zone_starts))
,zones__$1);
var zone_ranges = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.set(zone_starts),zone_ends);
var all_ranges = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(zone_ranges,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(6001),(1500))));
var G__35876 = cljs.core.cst$kw$attr;
var G__35877 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"zone-markings"], null);
var G__35878 = (function (){var iter__18623__auto__ = ((function (G__35876,G__35877,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges){
return (function hoplon$app_pages$_index_DOT_html$zones_$_iter__35881(s__35882){
return (new cljs.core.LazySeq(null,((function (G__35876,G__35877,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges){
return (function (){
var s__35882__$1 = s__35882;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__35882__$1);
if(temp__6503__auto__){
var s__35882__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35882__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__35882__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__35884 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__35883 = (0);
while(true){
if((i__35883 < size__18622__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__35883);
cljs.core.chunk_append(b__35884,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35925 = cljs.core.cst$kw$attr;
var G__35926 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" range guideline"),cljs.core.str((cljs.core.truth_((zone_ranges.cljs$core$IFn$_invoke$arity$1 ? zone_ranges.cljs$core$IFn$_invoke$arity$1(x) : zone_ranges.call(null,x)))?" zone":null))].join('')], null);
var G__35927 = cljs.core.cst$kw$x1;
var G__35928 = x;
var G__35929 = cljs.core.cst$kw$y1;
var G__35930 = y1;
var G__35931 = cljs.core.cst$kw$x2;
var G__35932 = x;
var G__35933 = cljs.core.cst$kw$y2;
var G__35934 = y2;
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35925,G__35926,G__35927,G__35928,G__35929,G__35930,G__35931,G__35932,G__35933,G__35934) : hoplon.svg.line.call(null,G__35925,G__35926,G__35927,G__35928,G__35929,G__35930,G__35931,G__35932,G__35933,G__35934));
})(),(function (){var G__35935 = cljs.core.cst$kw$transform;
var G__35936 = text_transform;
var G__35937 = cljs.core.cst$kw$attr;
var G__35938 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" axis-label range")].join('')], null);
var G__35939 = cljs.core.cst$kw$x;
var G__35940 = (x + (20));
var G__35941 = cljs.core.cst$kw$y;
var G__35942 = (0);
var G__35943 = [cljs.core.str(x)].join('');
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__35935,G__35936,G__35937,G__35938,G__35939,G__35940,G__35941,G__35942,G__35943) : hoplon.svg.text.call(null,G__35935,G__35936,G__35937,G__35938,G__35939,G__35940,G__35941,G__35942,G__35943));
})()], null));

var G__36028 = (i__35883 + (1));
i__35883 = G__36028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35884),hoplon$app_pages$_index_DOT_html$zones_$_iter__35881(cljs.core.chunk_rest(s__35882__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35884),null);
}
} else {
var x = cljs.core.first(s__35882__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35944 = cljs.core.cst$kw$attr;
var G__35945 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" range guideline"),cljs.core.str((cljs.core.truth_((zone_ranges.cljs$core$IFn$_invoke$arity$1 ? zone_ranges.cljs$core$IFn$_invoke$arity$1(x) : zone_ranges.call(null,x)))?" zone":null))].join('')], null);
var G__35946 = cljs.core.cst$kw$x1;
var G__35947 = x;
var G__35948 = cljs.core.cst$kw$y1;
var G__35949 = y1;
var G__35950 = cljs.core.cst$kw$x2;
var G__35951 = x;
var G__35952 = cljs.core.cst$kw$y2;
var G__35953 = y2;
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__35944,G__35945,G__35946,G__35947,G__35948,G__35949,G__35950,G__35951,G__35952,G__35953) : hoplon.svg.line.call(null,G__35944,G__35945,G__35946,G__35947,G__35948,G__35949,G__35950,G__35951,G__35952,G__35953));
})(),(function (){var G__35954 = cljs.core.cst$kw$transform;
var G__35955 = text_transform;
var G__35956 = cljs.core.cst$kw$attr;
var G__35957 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" axis-label range")].join('')], null);
var G__35958 = cljs.core.cst$kw$x;
var G__35959 = (x + (20));
var G__35960 = cljs.core.cst$kw$y;
var G__35961 = (0);
var G__35962 = [cljs.core.str(x)].join('');
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__35954,G__35955,G__35956,G__35957,G__35958,G__35959,G__35960,G__35961,G__35962) : hoplon.svg.text.call(null,G__35954,G__35955,G__35956,G__35957,G__35958,G__35959,G__35960,G__35961,G__35962));
})()], null),hoplon$app_pages$_index_DOT_html$zones_$_iter__35881(cljs.core.rest(s__35882__$2)));
}
} else {
return null;
}
break;
}
});})(G__35876,G__35877,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges))
,null,null));
});})(G__35876,G__35877,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges))
;
return iter__18623__auto__(all_ranges);
})();
var G__35879 = (function (){var iter__18623__auto__ = ((function (G__35876,G__35877,G__35878,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges){
return (function hoplon$app_pages$_index_DOT_html$zones_$_iter__35963(s__35964){
return (new cljs.core.LazySeq(null,((function (G__35876,G__35877,G__35878,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges){
return (function (){
var s__35964__$1 = s__35964;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__35964__$1);
if(temp__6503__auto__){
var s__35964__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35964__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__35964__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__35966 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__35965 = (0);
while(true){
if((i__35965 < size__18622__auto__)){
var zone = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__35965);
var from = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((function (){var G__35993 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__35993) : zone.call(null,G__35993));
})());
var to = cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1((function (){var G__35994 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__35994) : zone.call(null,G__35994));
})());
var midpoint = ((from + to) / (2));
cljs.core.chunk_append(b__35966,(function (){var G__35995 = cljs.core.cst$kw$transform;
var G__35996 = text_transform;
var G__35997 = cljs.core.cst$kw$attr;
var G__35998 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" axis-label range zone")].join('')], null);
var G__35999 = cljs.core.cst$kw$x;
var G__36000 = (midpoint - (60));
var G__36001 = cljs.core.cst$kw$y;
var G__36002 = zone_label_y;
var G__36003 = (function (){var G__36004 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,"X",cljs.core.cst$kw$mid,"IM",cljs.core.cst$kw$in_DASH_close,"IC"], null);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__36004) : zone.call(null,G__36004));
})();
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__35995,G__35996,G__35997,G__35998,G__35999,G__36000,G__36001,G__36002,G__36003) : hoplon.svg.text.call(null,G__35995,G__35996,G__35997,G__35998,G__35999,G__36000,G__36001,G__36002,G__36003));
})());

var G__36029 = (i__35965 + (1));
i__35965 = G__36029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35966),hoplon$app_pages$_index_DOT_html$zones_$_iter__35963(cljs.core.chunk_rest(s__35964__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35966),null);
}
} else {
var zone = cljs.core.first(s__35964__$2);
var from = cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1((function (){var G__36005 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__36005) : zone.call(null,G__36005));
})());
var to = cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1((function (){var G__36006 = cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__36006) : zone.call(null,G__36006));
})());
var midpoint = ((from + to) / (2));
return cljs.core.cons((function (){var G__36007 = cljs.core.cst$kw$transform;
var G__36008 = text_transform;
var G__36009 = cljs.core.cst$kw$attr;
var G__36010 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" axis-label range zone")].join('')], null);
var G__36011 = cljs.core.cst$kw$x;
var G__36012 = (midpoint - (60));
var G__36013 = cljs.core.cst$kw$y;
var G__36014 = zone_label_y;
var G__36015 = (function (){var G__36016 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$start,"X",cljs.core.cst$kw$mid,"IM",cljs.core.cst$kw$in_DASH_close,"IC"], null);
return (zone.cljs$core$IFn$_invoke$arity$1 ? zone.cljs$core$IFn$_invoke$arity$1(G__36016) : zone.call(null,G__36016));
})();
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36007,G__36008,G__36009,G__36010,G__36011,G__36012,G__36013,G__36014,G__36015) : hoplon.svg.text.call(null,G__36007,G__36008,G__36009,G__36010,G__36011,G__36012,G__36013,G__36014,G__36015));
})(),hoplon$app_pages$_index_DOT_html$zones_$_iter__35963(cljs.core.rest(s__35964__$2)));
}
} else {
return null;
}
break;
}
});})(G__35876,G__35877,G__35878,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges))
,null,null));
});})(G__35876,G__35877,G__35878,zones__$1,zone_starts,zone_ends,zone_ranges,all_ranges))
;
return iter__18623__auto__(zones__$1);
})();
var G__35880 = (function (){var ar_start = cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$in_DASH_close.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$zones.cljs$core$IFn$_invoke$arity$1(params)));
var map__36017 = params;
var map__36017__$1 = ((((!((map__36017 == null)))?((((map__36017.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36017.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36017):map__36017);
var ramp_to_1_wire = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,cljs.core.cst$kw$ramp_DASH_to_DASH_1_DASH_wire);
var wire_interval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36017__$1,cljs.core.cst$kw$wire_DASH_interval);
var ar_end = (0);
var midpoint = ((ar_start + ar_end) / (2));
var G__36019 = cljs.core.cst$kw$transform;
var G__36020 = text_transform;
var G__36021 = cljs.core.cst$kw$attr;
var G__36022 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str(class$),cljs.core.str(" axis-label range zone")].join('')], null);
var G__36023 = cljs.core.cst$kw$x;
var G__36024 = (midpoint - (60));
var G__36025 = cljs.core.cst$kw$y;
var G__36026 = zone_label_y;
var G__36027 = "AR";
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36019,G__36020,G__36021,G__36022,G__36023,G__36024,G__36025,G__36026,G__36027) : hoplon.svg.text.call(null,G__36019,G__36020,G__36021,G__36022,G__36023,G__36024,G__36025,G__36026,G__36027));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$5 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$5(G__35876,G__35877,G__35878,G__35879,G__35880) : hoplon.svg.g.call(null,G__35876,G__35877,G__35878,G__35879,G__35880));
});
/**
 * Draws the side view of the pass.
 */
hoplon.app_pages._index_DOT_html.elevation = javelin.core.formula((function (pass_parameters,selected_pass){
var map__36030 = hoplon.app_pages._index_DOT_html.view_bounds;
var map__36030__$1 = ((((!((map__36030 == null)))?((((map__36030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36030):map__36030);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,cljs.core.cst$kw$west);
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,cljs.core.cst$kw$east);
var high = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,cljs.core.cst$kw$high);
var low = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36030__$1,cljs.core.cst$kw$low);
var vec__36031 = cljs.core.cst$kw$landing_DASH_point.cljs$core$IFn$_invoke$arity$1((function (){var vec__36035 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = pass_parameters;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,527,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__,map__36030,map__36030__$1,west,east,high,low){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$pass_DASH_parameters,"=>",result__11182__auto__], null);
});})(result__11182__auto__,map__36030,map__36030__$1,west,east,high,low))
,null)),null,-419248734);

return result__11182__auto__;
})(),null], null);
}catch (e36038){if((e36038 instanceof Error)){
var e__2358__auto__ = e36038;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e36038;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36035,(1),null);
var temp__6503__auto___36182 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___36182)){
var e__11144__auto___36183 = temp__6503__auto___36182;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"hoplon.app-pages._index_DOT_html",null,527,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___36183,temp__6503__auto___36182,vec__36035,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__36030,map__36030__$1,west,east,high,low){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___36183], null);
});})(e__11144__auto___36183,temp__6503__auto___36182,vec__36035,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__,map__36030,map__36030__$1,west,east,high,low))
,null)),null,1562940495);

throw e__11144__auto___36183;
} else {
}

return _QMARK_result__11142__auto__;
})());
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(2),null);
var G__36039 = cljs.core.cst$kw$class;
var G__36040 = "svg-container";
var G__36041 = cljs.core.cst$kw$css;
var G__36042 = new cljs.core.PersistentArrayMap(null, 1, ["padding-bottom",[cljs.core.str((((high - low) / (east - west)) * 100.0)),cljs.core.str("%")].join('')], null);
var G__36043 = (function (){var G__36044 = cljs.core.cst$kw$attr;
var G__36045 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"graph","xmlns","http://www.w3.org/2000/svg"], null);
var G__36046 = cljs.core.cst$kw$viewBox;
var G__36047 = (function (){var G__36051 = "%d %d %d %d";
var G__36052 = west;
var G__36053 = (high - z);
var G__36054 = (east - west);
var G__36055 = (high - low);
return goog.string.format(G__36051,G__36052,G__36053,G__36054,G__36055);
})();
var G__36048 = cljs.core.cst$kw$id;
var G__36049 = "elevation";
var G__36050 = (function (){var G__36058 = cljs.core.cst$kw$transform;
var G__36059 = (function (){var G__36068 = "scale(1 -1) translate(0 %f)";
var G__36069 = ((-2) * high);
return goog.string.format(G__36068,G__36069);
})();
var G__36060 = (function (){var G__36070 = cljs.core.cst$kw$attr;
var G__36071 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"sky"], null);
var G__36072 = cljs.core.cst$kw$x;
var G__36073 = west;
var G__36074 = cljs.core.cst$kw$y;
var G__36075 = (- z);
var G__36076 = cljs.core.cst$kw$width;
var G__36077 = (east - west);
var G__36078 = cljs.core.cst$kw$height;
var G__36079 = (((2) * z) + high);
return (hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.rect.cljs$core$IFn$_invoke$arity$10(G__36070,G__36071,G__36072,G__36073,G__36074,G__36075,G__36076,G__36077,G__36078,G__36079) : hoplon.svg.rect.call(null,G__36070,G__36071,G__36072,G__36073,G__36074,G__36075,G__36076,G__36077,G__36078,G__36079));
})();
var G__36061 = hoplon.app_pages._index_DOT_html.carrier_elevation(z);
var G__36062 = hoplon.app_pages._index_DOT_html.zones(pass_parameters,low,(high + z),((- (hoplon.app_pages._index_DOT_html.elevation_exaggeration * z)) - high),(function (){var G__36080 = "scale(1 -1) translate(0 %f)";
var G__36081 = (- ((low + z) + (50)));
return goog.string.format(G__36080,G__36081);
})(),"elevation");
var G__36063 = (function (){var params = cljs.core.cst$kw$glideslope.cljs$core$IFn$_invoke$arity$1(pass_parameters);
var guideline = ((function (params,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z){
return (function (angle,class$,tx){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36082 = cljs.core.cst$kw$attr;
var G__36083 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("elevation guideline glideslope "),cljs.core.str(class$)].join('')], null);
var G__36084 = cljs.core.cst$kw$transform;
var G__36085 = (function (){var G__36094 = "translate(%f 0) rotate(%f)";
var G__36095 = tx;
var G__36096 = (angle * hoplon.app_pages._index_DOT_html.elevation_exaggeration);
return goog.string.format(G__36094,G__36095,G__36096);
})();
var G__36086 = cljs.core.cst$kw$x1;
var G__36087 = (0);
var G__36088 = cljs.core.cst$kw$y1;
var G__36089 = (0);
var G__36090 = cljs.core.cst$kw$x2;
var G__36091 = ((2) * east);
var G__36092 = cljs.core.cst$kw$y2;
var G__36093 = (0);
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$12 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$12(G__36082,G__36083,G__36084,G__36085,G__36086,G__36087,G__36088,G__36089,G__36090,G__36091,G__36092,G__36093) : hoplon.svg.line.call(null,G__36082,G__36083,G__36084,G__36085,G__36086,G__36087,G__36088,G__36089,G__36090,G__36091,G__36092,G__36093));
})(),(function (){var G__36100 = cljs.core.cst$kw$transform;
var G__36101 = (function (){var G__36109 = "translate(%f 0) rotate(%f) scale(1 -1)";
var G__36110 = tx;
var G__36111 = (angle * hoplon.app_pages._index_DOT_html.elevation_exaggeration);
return goog.string.format(G__36109,G__36110,G__36111);
})();
var G__36102 = cljs.core.cst$kw$attr;
var G__36103 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("axis-label elevation glideslope "),cljs.core.str(class$)].join('')], null);
var G__36104 = cljs.core.cst$kw$x;
var G__36105 = (east - (500));
var G__36106 = cljs.core.cst$kw$y;
var G__36107 = (-20);
var G__36108 = [cljs.core.str(angle),cljs.core.str("\u00B0")].join('');
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36100,G__36101,G__36102,G__36103,G__36104,G__36105,G__36106,G__36107,G__36108) : hoplon.svg.text.call(null,G__36100,G__36101,G__36102,G__36103,G__36104,G__36105,G__36106,G__36107,G__36108));
})()], null);
});})(params,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z))
;
var G__36112 = guideline(cljs.core.cst$kw$ideal.cljs$core$IFn$_invoke$arity$1(params),"ideal",(0));
var G__36113 = (function (){var iter__18623__auto__ = ((function (G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z){
return (function hoplon$app_pages$_index_DOT_html$iter__36114(s__36115){
return (new cljs.core.LazySeq(null,((function (G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z){
return (function (){
var s__36115__$1 = s__36115;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36115__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var vec__36138 = cljs.core.first(xs__7059__auto__);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
var iterys__18619__auto__ = ((function (s__36115__$1,vec__36138,k1,m,xs__7059__auto__,temp__6503__auto__,G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z){
return (function hoplon$app_pages$_index_DOT_html$iter__36114_$_iter__36116(s__36117){
return (new cljs.core.LazySeq(null,((function (s__36115__$1,vec__36138,k1,m,xs__7059__auto__,temp__6503__auto__,G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z){
return (function (){
var s__36117__$1 = s__36117;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__36117__$1);
if(temp__6503__auto____$1){
var s__36117__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36117__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36117__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36119 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36118 = (0);
while(true){
if((i__36118 < size__18622__auto__)){
var vec__36149 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36118);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36149,(1),null);
var class$ = [cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('');
var tx = (cljs.core.second(cljs.core.cst$kw$landing_DASH_window.cljs$core$IFn$_invoke$arity$1(pass_parameters)) / (2));
cljs.core.chunk_append(b__36119,guideline(v,class$,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k2,cljs.core.cst$kw$low))?tx:(- tx))));

var G__36184 = (i__36118 + (1));
i__36118 = G__36184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36119),hoplon$app_pages$_index_DOT_html$iter__36114_$_iter__36116(cljs.core.chunk_rest(s__36117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36119),null);
}
} else {
var vec__36152 = cljs.core.first(s__36117__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36152,(1),null);
var class$ = [cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('');
var tx = (cljs.core.second(cljs.core.cst$kw$landing_DASH_window.cljs$core$IFn$_invoke$arity$1(pass_parameters)) / (2));
return cljs.core.cons(guideline(v,class$,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k2,cljs.core.cst$kw$low))?tx:(- tx))),hoplon$app_pages$_index_DOT_html$iter__36114_$_iter__36116(cljs.core.rest(s__36117__$2)));
}
} else {
return null;
}
break;
}
});})(s__36115__$1,vec__36138,k1,m,xs__7059__auto__,temp__6503__auto__,G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z))
,null,null));
});})(s__36115__$1,vec__36138,k1,m,xs__7059__auto__,temp__6503__auto__,G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$low,cljs.core.cst$kw$high], null))));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$iter__36114(cljs.core.rest(s__36115__$1)));
} else {
var G__36185 = cljs.core.rest(s__36115__$1);
s__36115__$1 = G__36185;
continue;
}
} else {
return null;
}
break;
}
});})(G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z))
,null,null));
});})(G__36112,params,guideline,G__36058,G__36059,G__36060,G__36061,G__36062,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36039,G__36040,G__36041,G__36042,map__36030,map__36030__$1,west,east,high,low,vec__36031,x,y,z))
;
return iter__18623__auto__(cljs.core.select_keys(params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$good,cljs.core.cst$kw$minor,cljs.core.cst$kw$major], null)));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$2 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$2(G__36112,G__36113) : hoplon.svg.g.call(null,G__36112,G__36113));
})();
var G__36064 = (function (){var G__36155 = cljs.core.cst$kw$attr;
var G__36156 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"elevation guideline zone"], null);
var G__36157 = cljs.core.cst$kw$x1;
var G__36158 = west;
var G__36159 = cljs.core.cst$kw$y1;
var G__36160 = (((450) - z) * hoplon.app_pages._index_DOT_html.elevation_exaggeration);
var G__36161 = cljs.core.cst$kw$x2;
var G__36162 = east;
var G__36163 = cljs.core.cst$kw$y2;
var G__36164 = (((450) - z) * hoplon.app_pages._index_DOT_html.elevation_exaggeration);
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__36155,G__36156,G__36157,G__36158,G__36159,G__36160,G__36161,G__36162,G__36163,G__36164) : hoplon.svg.line.call(null,G__36155,G__36156,G__36157,G__36158,G__36159,G__36160,G__36161,G__36162,G__36163,G__36164));
})();
var G__36065 = (function (){var G__36165 = cljs.core.cst$kw$transform;
var G__36166 = "scale(1 -1)";
var G__36167 = cljs.core.cst$kw$attr;
var G__36168 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"axis-label elevation height zone"], null);
var G__36169 = cljs.core.cst$kw$x;
var G__36170 = (west + (20));
var G__36171 = cljs.core.cst$kw$y;
var G__36172 = ((z - (460)) * hoplon.app_pages._index_DOT_html.elevation_exaggeration);
var G__36173 = "450";
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36165,G__36166,G__36167,G__36168,G__36169,G__36170,G__36171,G__36172,G__36173) : hoplon.svg.text.call(null,G__36165,G__36166,G__36167,G__36168,G__36169,G__36170,G__36171,G__36172,G__36173));
})();
var G__36066 = (cljs.core.truth_(selected_pass)?hoplon.app_pages._index_DOT_html.elevation_path(pass_parameters,selected_pass):cljs.core.PersistentVector.EMPTY);
var G__36067 = (function (){var G__36174 = cljs.core.cst$kw$attr;
var G__36175 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"landing-point-dot"], null);
var G__36176 = cljs.core.cst$kw$cx;
var G__36177 = (0);
var G__36178 = cljs.core.cst$kw$cy;
var G__36179 = (0);
var G__36180 = cljs.core.cst$kw$r;
var G__36181 = (20);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__36174,G__36175,G__36176,G__36177,G__36178,G__36179,G__36180,G__36181) : hoplon.svg.circle.call(null,G__36174,G__36175,G__36176,G__36177,G__36178,G__36179,G__36180,G__36181));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$10(G__36058,G__36059,G__36060,G__36061,G__36062,G__36063,G__36064,G__36065,G__36066,G__36067) : hoplon.svg.g.call(null,G__36058,G__36059,G__36060,G__36061,G__36062,G__36063,G__36064,G__36065,G__36066,G__36067));
})();
return (hoplon.svg.svg.cljs$core$IFn$_invoke$arity$7 ? hoplon.svg.svg.cljs$core$IFn$_invoke$arity$7(G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36050) : hoplon.svg.svg.call(null,G__36044,G__36045,G__36046,G__36047,G__36048,G__36049,G__36050));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__36039,G__36040,G__36041,G__36042,G__36043) : hoplon.core.div.call(null,G__36039,G__36040,G__36041,G__36042,G__36043));
})).call(null,hoplon.app_pages._index_DOT_html.pass_parameters,hoplon.app_pages._index_DOT_html.selected_pass);
/**
 * Draws the top view of the pass.
 */
hoplon.app_pages._index_DOT_html.plan = (function (){var map__36186 = hoplon.app_pages._index_DOT_html.view_bounds;
var map__36186__$1 = ((((!((map__36186 == null)))?((((map__36186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36186):map__36186);
var west = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186__$1,cljs.core.cst$kw$west);
var east = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186__$1,cljs.core.cst$kw$east);
var north = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186__$1,cljs.core.cst$kw$north);
var south = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36186__$1,cljs.core.cst$kw$south);
var G__36188 = cljs.core.cst$kw$class;
var G__36189 = "svg-container";
var G__36190 = cljs.core.cst$kw$css;
var G__36191 = new cljs.core.PersistentArrayMap(null, 1, ["padding-bottom",[cljs.core.str((((south - north) / (east - west)) * 100.0)),cljs.core.str("%")].join('')], null);
var G__36192 = (function (){var G__36193 = cljs.core.cst$kw$attr;
var G__36194 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"graph","xmlns","http://www.w3.org/2000/svg"], null);
var G__36195 = cljs.core.cst$kw$id;
var G__36196 = "plan";
var G__36197 = cljs.core.cst$kw$viewBox;
var G__36198 = (function (){var G__36203 = "%d %d %d %d";
var G__36204 = west;
var G__36205 = north;
var G__36206 = (east - west);
var G__36207 = (south - north);
return goog.string.format(G__36203,G__36204,G__36205,G__36206,G__36207);
})();
var G__36199 = hoplon.app_pages._index_DOT_html.carrier_plan();
var G__36200 = (function (){var G__36208 = cljs.core.cst$kw$attr;
var G__36209 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"plan angle zero guideline"], null);
var G__36210 = cljs.core.cst$kw$x1;
var G__36211 = west;
var G__36212 = cljs.core.cst$kw$y1;
var G__36213 = (0);
var G__36214 = cljs.core.cst$kw$x2;
var G__36215 = east;
var G__36216 = cljs.core.cst$kw$y2;
var G__36217 = (0);
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$10(G__36208,G__36209,G__36210,G__36211,G__36212,G__36213,G__36214,G__36215,G__36216,G__36217) : hoplon.svg.line.call(null,G__36208,G__36209,G__36210,G__36211,G__36212,G__36213,G__36214,G__36215,G__36216,G__36217));
})();
var G__36201 = javelin.core.formula(((function (G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function (pass_parameters){
var G__36220 = hoplon.app_pages._index_DOT_html.zones(pass_parameters,north,south,((north - south) + (200)),(function (){var G__36222 = "translate(0 %f)";
var G__36223 = (south - (50));
return goog.string.format(G__36222,G__36223);
})(),"plan");
var G__36221 = (function (){var params = cljs.core.cst$kw$lineup.cljs$core$IFn$_invoke$arity$1(pass_parameters);
var iter__18623__auto__ = ((function (params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function hoplon$app_pages$_index_DOT_html$iter__36224(s__36225){
return (new cljs.core.LazySeq(null,((function (params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function (){
var s__36225__$1 = s__36225;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36225__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var vec__36332 = cljs.core.first(xs__7059__auto__);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36332,(1),null);
var iterys__18619__auto__ = ((function (s__36225__$1,vec__36332,k1,m,xs__7059__auto__,temp__6503__auto__,params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function hoplon$app_pages$_index_DOT_html$iter__36224_$_iter__36226(s__36227){
return (new cljs.core.LazySeq(null,((function (s__36225__$1,vec__36332,k1,m,xs__7059__auto__,temp__6503__auto__,params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function (){
var s__36227__$1 = s__36227;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__36227__$1);
if(temp__6503__auto____$1){
var s__36227__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36227__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36227__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36229 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36228 = (0);
while(true){
if((i__36228 < size__18622__auto__)){
var vec__36385 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36228);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36385,(1),null);
cljs.core.chunk_append(b__36229,(function (){var angle = lsobot.units.rad__GT_deg(hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$1(lsobot.units.deg__GT_rad(v)));
var ty = ((cljs.core.first(cljs.core.cst$kw$landing_DASH_window.cljs$core$IFn$_invoke$arity$1(pass_parameters)) / (2)) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k2,cljs.core.cst$kw$low))?(-1):(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36388 = cljs.core.cst$kw$transform;
var G__36389 = goog.string.format("translate(0 %f) rotate(%f)",ty,angle);
var G__36390 = cljs.core.cst$kw$attr;
var G__36391 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("plan angle guideline "),cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('')], null);
var G__36392 = cljs.core.cst$kw$x1;
var G__36393 = (0);
var G__36394 = cljs.core.cst$kw$y1;
var G__36395 = (0);
var G__36396 = cljs.core.cst$kw$x2;
var G__36397 = (east * (2));
var G__36398 = cljs.core.cst$kw$y2;
var G__36399 = (0);
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$12 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$12(G__36388,G__36389,G__36390,G__36391,G__36392,G__36393,G__36394,G__36395,G__36396,G__36397,G__36398,G__36399) : hoplon.svg.line.call(null,G__36388,G__36389,G__36390,G__36391,G__36392,G__36393,G__36394,G__36395,G__36396,G__36397,G__36398,G__36399));
})(),(function (){var G__36400 = cljs.core.cst$kw$transform;
var G__36401 = goog.string.format("translate(0 %f) rotate(%f)",ty,angle);
var G__36402 = cljs.core.cst$kw$attr;
var G__36403 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("axis-label plan angle "),cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('')], null);
var G__36404 = cljs.core.cst$kw$x;
var G__36405 = (east - (500));
var G__36406 = cljs.core.cst$kw$y;
var G__36407 = (-20);
var G__36408 = [cljs.core.str(v.toFixed((1))),cljs.core.str("\u00B0")].join('');
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36400,G__36401,G__36402,G__36403,G__36404,G__36405,G__36406,G__36407,G__36408) : hoplon.svg.text.call(null,G__36400,G__36401,G__36402,G__36403,G__36404,G__36405,G__36406,G__36407,G__36408));
})()], null);
})());

var G__36445 = (i__36228 + (1));
i__36228 = G__36445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36229),hoplon$app_pages$_index_DOT_html$iter__36224_$_iter__36226(cljs.core.chunk_rest(s__36227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36229),null);
}
} else {
var vec__36409 = cljs.core.first(s__36227__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36409,(1),null);
return cljs.core.cons((function (){var angle = lsobot.units.rad__GT_deg(hoplon.app_pages._index_DOT_html.exaggerate_angle.cljs$core$IFn$_invoke$arity$1(lsobot.units.deg__GT_rad(v)));
var ty = ((cljs.core.first(cljs.core.cst$kw$landing_DASH_window.cljs$core$IFn$_invoke$arity$1(pass_parameters)) / (2)) * ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k2,cljs.core.cst$kw$low))?(-1):(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36412 = cljs.core.cst$kw$transform;
var G__36413 = goog.string.format("translate(0 %f) rotate(%f)",ty,angle);
var G__36414 = cljs.core.cst$kw$attr;
var G__36415 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("plan angle guideline "),cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('')], null);
var G__36416 = cljs.core.cst$kw$x1;
var G__36417 = (0);
var G__36418 = cljs.core.cst$kw$y1;
var G__36419 = (0);
var G__36420 = cljs.core.cst$kw$x2;
var G__36421 = (east * (2));
var G__36422 = cljs.core.cst$kw$y2;
var G__36423 = (0);
return (hoplon.svg.line.cljs$core$IFn$_invoke$arity$12 ? hoplon.svg.line.cljs$core$IFn$_invoke$arity$12(G__36412,G__36413,G__36414,G__36415,G__36416,G__36417,G__36418,G__36419,G__36420,G__36421,G__36422,G__36423) : hoplon.svg.line.call(null,G__36412,G__36413,G__36414,G__36415,G__36416,G__36417,G__36418,G__36419,G__36420,G__36421,G__36422,G__36423));
})(),(function (){var G__36424 = cljs.core.cst$kw$transform;
var G__36425 = goog.string.format("translate(0 %f) rotate(%f)",ty,angle);
var G__36426 = cljs.core.cst$kw$attr;
var G__36427 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("axis-label plan angle "),cljs.core.str(cljs.core.name(k1)),cljs.core.str(" "),cljs.core.str(cljs.core.name(k2))].join('')], null);
var G__36428 = cljs.core.cst$kw$x;
var G__36429 = (east - (500));
var G__36430 = cljs.core.cst$kw$y;
var G__36431 = (-20);
var G__36432 = [cljs.core.str(v.toFixed((1))),cljs.core.str("\u00B0")].join('');
return (hoplon.svg.text.cljs$core$IFn$_invoke$arity$9 ? hoplon.svg.text.cljs$core$IFn$_invoke$arity$9(G__36424,G__36425,G__36426,G__36427,G__36428,G__36429,G__36430,G__36431,G__36432) : hoplon.svg.text.call(null,G__36424,G__36425,G__36426,G__36427,G__36428,G__36429,G__36430,G__36431,G__36432));
})()], null);
})(),hoplon$app_pages$_index_DOT_html$iter__36224_$_iter__36226(cljs.core.rest(s__36227__$2)));
}
} else {
return null;
}
break;
}
});})(s__36225__$1,vec__36332,k1,m,xs__7059__auto__,temp__6503__auto__,params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
,null,null));
});})(s__36225__$1,vec__36332,k1,m,xs__7059__auto__,temp__6503__auto__,params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$low,cljs.core.cst$kw$high], null))));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$iter__36224(cljs.core.rest(s__36225__$1)));
} else {
var G__36446 = cljs.core.rest(s__36225__$1);
s__36225__$1 = G__36446;
continue;
}
} else {
return null;
}
break;
}
});})(params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
,null,null));
});})(params,G__36220,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
;
return iter__18623__auto__(cljs.core.select_keys(params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$good,cljs.core.cst$kw$minor,cljs.core.cst$kw$major], null)));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$2 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$2(G__36220,G__36221) : hoplon.svg.g.call(null,G__36220,G__36221));
});})(G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
).call(null,hoplon.app_pages._index_DOT_html.pass_parameters);
var G__36202 = (function (){var G__36433 = cljs.core.cst$kw$transform;
var G__36434 = "scale(1 -1)";
var G__36435 = javelin.core.formula(((function (G__36433,G__36434,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36201,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south){
return (function (selected_pass,pass_parameters){
if(cljs.core.truth_(selected_pass)){
return hoplon.app_pages._index_DOT_html.plan_path(cljs.core.cst$kw$lineup.cljs$core$IFn$_invoke$arity$1(pass_parameters),selected_pass);
} else {
return null;
}
});})(G__36433,G__36434,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36201,G__36188,G__36189,G__36190,G__36191,map__36186,map__36186__$1,west,east,north,south))
).call(null,hoplon.app_pages._index_DOT_html.selected_pass,hoplon.app_pages._index_DOT_html.pass_parameters);
var G__36436 = (function (){var G__36437 = cljs.core.cst$kw$attr;
var G__36438 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"landing-point-dot"], null);
var G__36439 = cljs.core.cst$kw$cx;
var G__36440 = (0);
var G__36441 = cljs.core.cst$kw$cy;
var G__36442 = (0);
var G__36443 = cljs.core.cst$kw$r;
var G__36444 = (20);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__36437,G__36438,G__36439,G__36440,G__36441,G__36442,G__36443,G__36444) : hoplon.svg.circle.call(null,G__36437,G__36438,G__36439,G__36440,G__36441,G__36442,G__36443,G__36444));
})();
return (hoplon.svg.g.cljs$core$IFn$_invoke$arity$4 ? hoplon.svg.g.cljs$core$IFn$_invoke$arity$4(G__36433,G__36434,G__36435,G__36436) : hoplon.svg.g.call(null,G__36433,G__36434,G__36435,G__36436));
})();
return (hoplon.svg.svg.cljs$core$IFn$_invoke$arity$10 ? hoplon.svg.svg.cljs$core$IFn$_invoke$arity$10(G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36201,G__36202) : hoplon.svg.svg.call(null,G__36193,G__36194,G__36195,G__36196,G__36197,G__36198,G__36199,G__36200,G__36201,G__36202));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__36188,G__36189,G__36190,G__36191,G__36192) : hoplon.core.div.call(null,G__36188,G__36189,G__36190,G__36191,G__36192));
})();
hoplon.app_pages._index_DOT_html.titlebar = (function (){var G__36473 = cljs.core.cst$kw$id;
var G__36474 = "titlebar";
var G__36475 = (function (){var G__36477 = cljs.core.cst$kw$id;
var G__36478 = "words";
var G__36479 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,"title","LSOBot") : hoplon.core.span.call(null,cljs.core.cst$kw$id,"title","LSOBot"));
var G__36480 = (function (){var G__36487 = cljs.core.cst$kw$id;
var G__36488 = "byline";
var G__36489 = "by";
var G__36490 = (function (){var G__36493 = cljs.core.cst$kw$href;
var G__36494 = (hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tyrant) : hoplon.app_pages._index_DOT_html.urls.call(null,cljs.core.cst$kw$tyrant));
var G__36495 = cljs.core.cst$kw$target;
var G__36496 = "_blank";
var G__36497 = "Tyrant";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__36493,G__36494,G__36495,G__36496,G__36497) : hoplon.core.a.call(null,G__36493,G__36494,G__36495,G__36496,G__36497));
})();
var G__36491 = "and";
var G__36492 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"#",cljs.core.cst$kw$data_DASH_featherlight,"#credits","Team LSOBot") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"#",cljs.core.cst$kw$data_DASH_featherlight,"#credits","Team LSOBot"));
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$6(G__36487,G__36488,G__36489,G__36490,G__36491,G__36492) : hoplon.core.span.call(null,G__36487,G__36488,G__36489,G__36490,G__36491,G__36492));
})();
var G__36481 = (function (){var G__36498 = cljs.core.cst$kw$id;
var G__36499 = "helpstring";
var G__36500 = "Help? Bug? Feature request? Click";
var G__36501 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"help.html",cljs.core.cst$kw$target,"_blank","here") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"help.html",cljs.core.cst$kw$target,"_blank","here"));
var G__36502 = ".";
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$5(G__36498,G__36499,G__36500,G__36501,G__36502) : hoplon.core.span.call(null,G__36498,G__36499,G__36500,G__36501,G__36502));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__36477,G__36478,G__36479,G__36480,G__36481) : hoplon.core.div.call(null,G__36477,G__36478,G__36479,G__36480,G__36481));
})();
var G__36476 = (function (){var G__36503 = cljs.core.cst$kw$href;
var G__36504 = "http://firstfighterwing.com";
var G__36505 = cljs.core.cst$kw$target;
var G__36506 = "_blank";
var G__36507 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$id,"winglogo",cljs.core.cst$kw$src,"images/1stVFW_Insignia-64.png") : hoplon.core.img.call(null,cljs.core.cst$kw$id,"winglogo",cljs.core.cst$kw$src,"images/1stVFW_Insignia-64.png"));
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__36503,G__36504,G__36505,G__36506,G__36507) : hoplon.core.a.call(null,G__36503,G__36504,G__36505,G__36506,G__36507));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__36473,G__36474,G__36475,G__36476) : hoplon.core.div.call(null,G__36473,G__36474,G__36475,G__36476));
})();
hoplon.app_pages._index_DOT_html.result_text = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$trap,"Trap",cljs.core.cst$kw$waveoff,"Waveoff",cljs.core.cst$kw$ramp_DASH_strike,"Ramp Strike",cljs.core.cst$kw$bolter,"Bolter"], null);
hoplon.app_pages._index_DOT_html.symbol_mapping = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,"F",cljs.core.cst$kw$high,"SLO"], null),cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,"LO",cljs.core.cst$kw$high,"H"], null),cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,"LUL",cljs.core.cst$kw$high,"LUR"], null)], null);
hoplon.app_pages._index_DOT_html.phase_symbol = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lsobot$grading_SLASH_start,"X",cljs.core.cst$kw$lsobot$grading_SLASH_mid,"IM",cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close,"IC",cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp,"AR"], null);
hoplon.app_pages._index_DOT_html.assessment_mark = (function hoplon$app_pages$_index_DOT_html$assessment_mark(var_args){
var args36508 = [];
var len__18952__auto___36514 = arguments.length;
var i__18953__auto___36515 = (0);
while(true){
if((i__18953__auto___36515 < len__18952__auto___36514)){
args36508.push((arguments[i__18953__auto___36515]));

var G__36516 = (i__18953__auto___36515 + (1));
i__18953__auto___36515 = G__36516;
continue;
} else {
}
break;
}

var G__36510 = args36508.length;
switch (G__36510) {
case 2:
return hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36508.length)].join('')));

}
});

hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$2 = (function (dimension,deviation){
return hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3(dimension,deviation,null);
});

hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3 = (function (dimension,deviation,phase){
var map__36511 = deviation;
var map__36511__$1 = ((((!((map__36511 == null)))?((((map__36511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36511):map__36511);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36511__$1,cljs.core.cst$kw$lsobot$grading_SLASH_degree);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36511__$1,cljs.core.cst$kw$lsobot$grading_SLASH_direction);
if(cljs.core.not(direction)){
return "";
} else {
var mark = (function (){var G__36513 = (dimension.cljs$core$IFn$_invoke$arity$1 ? dimension.cljs$core$IFn$_invoke$arity$1(hoplon.app_pages._index_DOT_html.symbol_mapping) : dimension.call(null,hoplon.app_pages._index_DOT_html.symbol_mapping));
return (direction.cljs$core$IFn$_invoke$arity$1 ? direction.cljs$core$IFn$_invoke$arity$1(G__36513) : direction.call(null,G__36513));
})();
var mark__$1 = (cljs.core.truth_(phase)?[cljs.core.str(mark),cljs.core.str((hoplon.app_pages._index_DOT_html.phase_symbol.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.phase_symbol.cljs$core$IFn$_invoke$arity$1(phase) : hoplon.app_pages._index_DOT_html.phase_symbol.call(null,phase)))].join(''):mark);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$good,null,cljs.core.cst$kw$ideal,null], null), null).call(null,degree))){
return "";
} else {
return mark__$1;
}
}
});

hoplon.app_pages._index_DOT_html.assessment_mark.cljs$lang$maxFixedArity = 3;

hoplon.app_pages._index_DOT_html.assessment_symbol = (function hoplon$app_pages$_index_DOT_html$assessment_symbol(var_args){
var args36518 = [];
var len__18952__auto___36521 = arguments.length;
var i__18953__auto___36522 = (0);
while(true){
if((i__18953__auto___36522 < len__18952__auto___36521)){
args36518.push((arguments[i__18953__auto___36522]));

var G__36523 = (i__18953__auto___36522 + (1));
i__18953__auto___36522 = G__36523;
continue;
} else {
}
break;
}

var G__36520 = args36518.length;
switch (G__36520) {
case 2:
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36518.length)].join('')));

}
});

hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$2 = (function (dimension,deviation){
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$3(dimension,deviation,null);
});

hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$3 = (function (dimension,deviation,phase){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"assessment-symbol",cljs.core.cst$kw$degree,cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1(deviation),cljs.core.cst$kw$text,hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3(dimension,deviation,phase)], null);
});

hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$lang$maxFixedArity = 3;

hoplon.app_pages._index_DOT_html.not_implemented_cell = (function hoplon$app_pages$_index_DOT_html$not_implemented_cell(assessment){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"not-implemented"], null)], null);
});
hoplon.app_pages._index_DOT_html.grade_cell = (function hoplon$app_pages$_index_DOT_html$grade_cell(assessment){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$text,(function (){var G__36534 = ((((function (){var vec__36535 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,765,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$assessment,cljs.core.cst$kw$lsobot$grading_SLASH_grade),"=>",result__11182__auto__], null);
});})(result__11182__auto__))
,null)),null,-2011077104);

return result__11182__auto__;
})(),null], null);
}catch (e36538){if((e36538 instanceof Error)){
var e__2358__auto__ = e36538;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e36538;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(1),null);
var temp__6503__auto___36543 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___36543)){
var e__11144__auto___36544 = temp__6503__auto___36543;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"hoplon.app-pages._index_DOT_html",null,765,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___36544,temp__6503__auto___36543,vec__36535,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___36544], null);
});})(e__11144__auto___36544,temp__6503__auto___36543,vec__36535,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__))
,null)),null,-1384734338);

throw e__11144__auto___36544;
} else {
}

return _QMARK_result__11142__auto__;
})() instanceof cljs.core.Keyword))?(function (){var vec__36539 = (function (){try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var result__11182__auto__ = cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,765,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (result__11182__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$assessment,cljs.core.cst$kw$lsobot$grading_SLASH_grade),"=>",result__11182__auto__], null);
});})(result__11182__auto__))
,null)),null,979895106);

return result__11182__auto__;
})(),null], null);
}catch (e36542){if((e36542 instanceof Error)){
var e__2358__auto__ = e36542;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,e__2358__auto__], null);
} else {
throw e36542;

}
}})();
var _QMARK_result__11142__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(0),null);
var _QMARK_error__11143__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36539,(1),null);
var temp__6503__auto___36545 = _QMARK_error__11143__auto__;
if(cljs.core.truth_(temp__6503__auto___36545)){
var e__11144__auto___36546 = temp__6503__auto___36545;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"hoplon.app-pages._index_DOT_html",null,765,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (e__11144__auto___36546,temp__6503__auto___36545,vec__36539,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__11144__auto___36546], null);
});})(e__11144__auto___36546,temp__6503__auto___36545,vec__36539,_QMARK_result__11142__auto__,_QMARK_error__11143__auto__))
,null)),null,255709913);

throw e__11144__auto___36546;
} else {
}

return _QMARK_result__11142__auto__;
})().fqn:null);
switch (G__36534) {
case "lsobot.grading/bolter":
return "B";

break;
case "lsobot.grading/waveoff":
return "WO";

break;
case "lsobot.grading/ok+":
return "OK";

break;
case "lsobot.grading/ok":
return "OK";

break;
case "lsobot.grading/fair":
return "(OK)";

break;
case "lsobot.grading/none":
return "-";

break;
case "lsobot.grading/cut-pass":
return "C";

break;
default:
return "";

}
})(),cljs.core.cst$kw$class,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$lsobot$grading_SLASH_ok_PLUS_,cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment)))?"perfect":"")], null)], null);
});
hoplon.app_pages._index_DOT_html.score_cell = (function hoplon$app_pages$_index_DOT_html$score_cell(assessment){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,[cljs.core.str(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$2((function (){var G__36549 = cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment);
return (lsobot.grading.grades.cljs$core$IFn$_invoke$arity$1 ? lsobot.grading.grades.cljs$core$IFn$_invoke$arity$1(G__36549) : lsobot.grading.grades.call(null,G__36549));
})(),""))].join('')], null)], null);
});
hoplon.app_pages._index_DOT_html.aw_cell = (function hoplon$app_pages$_index_DOT_html$aw_cell(assessment){
var iter__18623__auto__ = (function hoplon$app_pages$_index_DOT_html$aw_cell_$_iter__36563(s__36564){
return (new cljs.core.LazySeq(null,(function (){
var s__36564__$1 = s__36564;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36564__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var dimension = cljs.core.first(xs__7059__auto__);
var iterys__18619__auto__ = ((function (s__36564__$1,dimension,xs__7059__auto__,temp__6503__auto__){
return (function hoplon$app_pages$_index_DOT_html$aw_cell_$_iter__36563_$_iter__36565(s__36566){
return (new cljs.core.LazySeq(null,((function (s__36564__$1,dimension,xs__7059__auto__,temp__6503__auto__){
return (function (){
var s__36566__$1 = s__36566;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__36566__$1);
if(temp__6503__auto____$1){
var s__36566__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36566__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36566__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36568 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36567 = (0);
while(true){
if((i__36567 < size__18622__auto__)){
var deviation = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36567);
cljs.core.chunk_append(b__36568,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"assessment-symbol",cljs.core.cst$kw$degree,cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1(deviation),cljs.core.cst$kw$text,hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3(dimension,deviation,null)], null));

var G__36576 = (i__36567 + (1));
i__36567 = G__36576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36568),hoplon$app_pages$_index_DOT_html$aw_cell_$_iter__36563_$_iter__36565(cljs.core.chunk_rest(s__36566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36568),null);
}
} else {
var deviation = cljs.core.first(s__36566__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"assessment-symbol",cljs.core.cst$kw$degree,cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1(deviation),cljs.core.cst$kw$text,hoplon.app_pages._index_DOT_html.assessment_mark.cljs$core$IFn$_invoke$arity$3(dimension,deviation,null)], null),hoplon$app_pages$_index_DOT_html$aw_cell_$_iter__36563_$_iter__36565(cljs.core.rest(s__36566__$2)));
}
} else {
return null;
}
break;
}
});})(s__36564__$1,dimension,xs__7059__auto__,temp__6503__auto__))
,null,null));
});})(s__36564__$1,dimension,xs__7059__auto__,temp__6503__auto__))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__((function (){var G__36575 = cljs.core.cst$kw$hoplon$app_DASH_pages$_index_DOT_html_SLASH_all_DASH_the_DASH_way.cljs$core$IFn$_invoke$arity$1(assessment);
return (dimension.cljs$core$IFn$_invoke$arity$1 ? dimension.cljs$core$IFn$_invoke$arity$1(G__36575) : dimension.call(null,G__36575));
})()));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$aw_cell_$_iter__36563(cljs.core.rest(s__36564__$1)));
} else {
var G__36577 = cljs.core.rest(s__36564__$1);
s__36564__$1 = G__36577;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18623__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment], null));
});
hoplon.app_pages._index_DOT_html.glideslope_and_speed_cell = (function hoplon$app_pages$_index_DOT_html$glideslope_and_speed_cell(phase,assessment){
var iter__18623__auto__ = (function hoplon$app_pages$_index_DOT_html$glideslope_and_speed_cell_$_iter__36584(s__36585){
return (new cljs.core.LazySeq(null,(function (){
var s__36585__$1 = s__36585;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36585__$1);
if(temp__6503__auto__){
var s__36585__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36585__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36585__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36587 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36586 = (0);
while(true){
if((i__36586 < size__18622__auto__)){
var dimension = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36586);
cljs.core.chunk_append(b__36587,(function (){var deviation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assessment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phase,dimension], null));
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$2(dimension,deviation);
})());

var G__36590 = (i__36586 + (1));
i__36586 = G__36590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36587),hoplon$app_pages$_index_DOT_html$glideslope_and_speed_cell_$_iter__36584(cljs.core.chunk_rest(s__36585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36587),null);
}
} else {
var dimension = cljs.core.first(s__36585__$2);
return cljs.core.cons((function (){var deviation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assessment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phase,dimension], null));
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$2(dimension,deviation);
})(),hoplon$app_pages$_index_DOT_html$glideslope_and_speed_cell_$_iter__36584(cljs.core.rest(s__36585__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18623__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment], null));
});
hoplon.app_pages._index_DOT_html.x_cell = (function hoplon$app_pages$_index_DOT_html$x_cell(assessment){
return hoplon.app_pages._index_DOT_html.glideslope_and_speed_cell(cljs.core.cst$kw$lsobot$grading_SLASH_start,assessment);
});
hoplon.app_pages._index_DOT_html.im_cell = (function hoplon$app_pages$_index_DOT_html$im_cell(assessment){
return hoplon.app_pages._index_DOT_html.glideslope_and_speed_cell(cljs.core.cst$kw$lsobot$grading_SLASH_mid,assessment);
});
hoplon.app_pages._index_DOT_html.ic_cell = (function hoplon$app_pages$_index_DOT_html$ic_cell(assessment){
return hoplon.app_pages._index_DOT_html.glideslope_and_speed_cell(cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close,assessment);
});
hoplon.app_pages._index_DOT_html.ar_cell = (function hoplon$app_pages$_index_DOT_html$ar_cell(assessment){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bolter,null,cljs.core.cst$kw$trap,null], null), null).call(null,cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment)))){
return hoplon.app_pages._index_DOT_html.glideslope_and_speed_cell(cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp,assessment);
} else {
return null;
}
});
hoplon.app_pages._index_DOT_html.power_cell = hoplon.app_pages._index_DOT_html.not_implemented_cell;
hoplon.app_pages._index_DOT_html.att_cell = hoplon.app_pages._index_DOT_html.not_implemented_cell;
hoplon.app_pages._index_DOT_html.lineup_and_wing_cell = (function hoplon$app_pages$_index_DOT_html$lineup_and_wing_cell(assessment){
var iter__18623__auto__ = (function hoplon$app_pages$_index_DOT_html$lineup_and_wing_cell_$_iter__36597(s__36598){
return (new cljs.core.LazySeq(null,(function (){
var s__36598__$1 = s__36598;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36598__$1);
if(temp__6503__auto__){
var s__36598__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36598__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36598__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36600 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36599 = (0);
while(true){
if((i__36599 < size__18622__auto__)){
var phase = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36599);
cljs.core.chunk_append(b__36600,(function (){var deviation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assessment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phase,cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment], null));
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,deviation,phase);
})());

var G__36603 = (i__36599 + (1));
i__36599 = G__36603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36600),hoplon$app_pages$_index_DOT_html$lineup_and_wing_cell_$_iter__36597(cljs.core.chunk_rest(s__36598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36600),null);
}
} else {
var phase = cljs.core.first(s__36598__$2);
return cljs.core.cons((function (){var deviation = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(assessment,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phase,cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment], null));
return hoplon.app_pages._index_DOT_html.assessment_symbol.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,deviation,phase);
})(),hoplon$app_pages$_index_DOT_html$lineup_and_wing_cell_$_iter__36597(cljs.core.rest(s__36598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18623__auto__(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_start,cljs.core.cst$kw$lsobot$grading_SLASH_mid,cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close], null),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$bolter,null,cljs.core.cst$kw$trap,null], null), null).call(null,cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp], null):null)));
});
hoplon.app_pages._index_DOT_html.wire_cell = (function hoplon$app_pages$_index_DOT_html$wire_cell(assessment){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,(function (){var G__36605 = (((cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment) instanceof cljs.core.Keyword))?cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment).fqn:null);
switch (G__36605) {
case "bolter":
return "B";

break;
case "waveoff":
return "WO";

break;
case "trap":
return [cljs.core.str(cljs.core.cst$kw$lsobot$grading_SLASH_wire.cljs$core$IFn$_invoke$arity$1(assessment))].join('');

break;
default:
return "";

}
})()], null)], null);
});
hoplon.app_pages._index_DOT_html.remarks_cell = (function hoplon$app_pages$_index_DOT_html$remarks_cell(assessment){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"remark",cljs.core.cst$kw$text,(function (){var G__36608 = (((cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment) instanceof cljs.core.Keyword))?cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment).fqn:null);
switch (G__36608) {
case "trap":
return "Trap";

break;
case "ramp-strike":
return "Ramp strike";

break;
default:
return "";

}
})()], null)], null);
});
/**
 * Looks for ways to consolidate assessments into the 'AW' column.
 */
hoplon.app_pages._index_DOT_html.consolidate = (function hoplon$app_pages$_index_DOT_html$consolidate(assessment){
var phases = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$waveoff,cljs.core.cst$kw$lsobot$grading_SLASH_result.cljs$core$IFn$_invoke$arity$1(assessment)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_start,cljs.core.cst$kw$lsobot$grading_SLASH_mid,cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_start,cljs.core.cst$kw$lsobot$grading_SLASH_mid,cljs.core.cst$kw$lsobot$grading_SLASH_in_DASH_close,cljs.core.cst$kw$lsobot$grading_SLASH_at_DASH_ramp], null));
var match_QMARK_ = ((function (phases){
return (function (degree,direction,deviation){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [degree,direction], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_degree.cljs$core$IFn$_invoke$arity$1(deviation),cljs.core.cst$kw$lsobot$grading_SLASH_direction.cljs$core$IFn$_invoke$arity$1(deviation)], null));
});})(phases))
;
var common = (function (){var iter__18623__auto__ = ((function (phases,match_QMARK_){
return (function hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653(s__36654){
return (new cljs.core.LazySeq(null,((function (phases,match_QMARK_){
return (function (){
var s__36654__$1 = s__36654;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36654__$1);
if(temp__6503__auto__){
var xs__7059__auto__ = temp__6503__auto__;
var direction = cljs.core.first(xs__7059__auto__);
var iterys__18619__auto__ = ((function (s__36654__$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653_$_iter__36655(s__36656){
return (new cljs.core.LazySeq(null,((function (s__36654__$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function (){
var s__36656__$1 = s__36656;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__36656__$1);
if(temp__6503__auto____$1){
var xs__7059__auto____$1 = temp__6503__auto____$1;
var degree = cljs.core.first(xs__7059__auto____$1);
var iterys__18619__auto__ = ((function (s__36656__$1,s__36654__$1,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653_$_iter__36655_$_iter__36657(s__36658){
return (new cljs.core.LazySeq(null,((function (s__36656__$1,s__36654__$1,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function (){
var s__36658__$1 = s__36658;
while(true){
var temp__6503__auto____$2 = cljs.core.seq(s__36658__$1);
if(temp__6503__auto____$2){
var s__36658__$2 = temp__6503__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__36658__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36658__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36660 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36659 = (0);
while(true){
if((i__36659 < size__18622__auto__)){
var dimension = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36659);
if(cljs.core.every_QMARK_(((function (i__36659,s__36658__$1,s__36656__$1,s__36654__$1,dimension,c__18621__auto__,size__18622__auto__,b__36660,s__36658__$2,temp__6503__auto____$2,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function (phase){
return match_QMARK_(degree,direction,(function (){var G__36686 = (phase.cljs$core$IFn$_invoke$arity$1 ? phase.cljs$core$IFn$_invoke$arity$1(assessment) : phase.call(null,assessment));
return (dimension.cljs$core$IFn$_invoke$arity$1 ? dimension.cljs$core$IFn$_invoke$arity$1(G__36686) : dimension.call(null,G__36686));
})());
});})(i__36659,s__36658__$1,s__36656__$1,s__36654__$1,dimension,c__18621__auto__,size__18622__auto__,b__36660,s__36658__$2,temp__6503__auto____$2,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
,phases)){
cljs.core.chunk_append(b__36660,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,degree,direction], null));

var G__36696 = (i__36659 + (1));
i__36659 = G__36696;
continue;
} else {
var G__36697 = (i__36659 + (1));
i__36659 = G__36697;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36660),hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653_$_iter__36655_$_iter__36657(cljs.core.chunk_rest(s__36658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36660),null);
}
} else {
var dimension = cljs.core.first(s__36658__$2);
if(cljs.core.every_QMARK_(((function (s__36658__$1,s__36656__$1,s__36654__$1,dimension,s__36658__$2,temp__6503__auto____$2,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_){
return (function (phase){
return match_QMARK_(degree,direction,(function (){var G__36687 = (phase.cljs$core$IFn$_invoke$arity$1 ? phase.cljs$core$IFn$_invoke$arity$1(assessment) : phase.call(null,assessment));
return (dimension.cljs$core$IFn$_invoke$arity$1 ? dimension.cljs$core$IFn$_invoke$arity$1(G__36687) : dimension.call(null,G__36687));
})());
});})(s__36658__$1,s__36656__$1,s__36654__$1,dimension,s__36658__$2,temp__6503__auto____$2,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
,phases)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dimension,degree,direction], null),hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653_$_iter__36655_$_iter__36657(cljs.core.rest(s__36658__$2)));
} else {
var G__36698 = cljs.core.rest(s__36658__$2);
s__36658__$1 = G__36698;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36656__$1,s__36654__$1,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
,null,null));
});})(s__36656__$1,s__36654__$1,degree,xs__7059__auto____$1,temp__6503__auto____$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lsobot$grading_SLASH_aoa_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_lineup_DASH_assessment,cljs.core.cst$kw$lsobot$grading_SLASH_glideslope_DASH_assessment], null)));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653_$_iter__36655(cljs.core.rest(s__36656__$1)));
} else {
var G__36699 = cljs.core.rest(s__36656__$1);
s__36656__$1 = G__36699;
continue;
}
} else {
return null;
}
break;
}
});})(s__36654__$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
,null,null));
});})(s__36654__$1,direction,xs__7059__auto__,temp__6503__auto__,phases,match_QMARK_))
;
var fs__18620__auto__ = cljs.core.seq(iterys__18619__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ideal,cljs.core.cst$kw$good,cljs.core.cst$kw$minor,cljs.core.cst$kw$major,cljs.core.cst$kw$unacceptable], null)));
if(fs__18620__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__18620__auto__,hoplon$app_pages$_index_DOT_html$consolidate_$_iter__36653(cljs.core.rest(s__36654__$1)));
} else {
var G__36700 = cljs.core.rest(s__36654__$1);
s__36654__$1 = G__36700;
continue;
}
} else {
return null;
}
break;
}
});})(phases,match_QMARK_))
,null,null));
});})(phases,match_QMARK_))
;
return iter__18623__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$high,cljs.core.cst$kw$low], null));
})();
var assessment_STAR_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (phases,match_QMARK_,common){
return (function (assessment__$1,p__36688){
var vec__36689 = p__36688;
var dimension = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36689,(0),null);
var degree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36689,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36689,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__36689,dimension,degree,direction,phases,match_QMARK_,common){
return (function (assessment__$2,phase){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(assessment__$2,phase,cljs.core.dissoc,dimension);
});})(vec__36689,dimension,degree,direction,phases,match_QMARK_,common))
,assessment__$1,phases);
});})(phases,match_QMARK_,common))
,assessment,common);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (phases,match_QMARK_,common,assessment_STAR_){
return (function (assessment__$1,p__36692){
var vec__36693 = p__36692;
var dimension = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(0),null);
var degree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(1),null);
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36693,(2),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(assessment__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hoplon$app_DASH_pages$_index_DOT_html_SLASH_all_DASH_the_DASH_way,dimension], null),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lsobot$grading_SLASH_degree,degree,cljs.core.cst$kw$lsobot$grading_SLASH_direction,direction], null));
});})(phases,match_QMARK_,common,assessment_STAR_))
,assessment_STAR_,common);
});
/**
 * Change the sort criteria, such that a change of order preserves
 *   direction, but a second change does not.
 */
hoplon.app_pages._index_DOT_html.change_sort_criteria = (function hoplon$app_pages$_index_DOT_html$change_sort_criteria(criteria,column){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,891,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["change-sort-criteria",cljs.core.cst$kw$criteria,criteria,cljs.core.cst$kw$column,column], null);
}),null)),null,-1312310939);

var vec__36715 = criteria;
var vec__36718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36715,(0),null);
var primary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36718,(0),null);
var direction = cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36715,vec__36718,primary){
return (function (p__36721){
var vec__36722 = p__36721;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36722,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,column);
});})(vec__36715,vec__36718,primary))
,criteria)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(primary,column)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [primary,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ascending,direction))?cljs.core.cst$kw$descending:cljs.core.cst$kw$ascending)], null)], null),cljs.core.rest(criteria));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,direction], null)], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__36715,vec__36718,primary,direction){
return (function (p__36725){
var vec__36726 = p__36725;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36726,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36726,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,column);
});})(vec__36715,vec__36718,primary,direction))
,criteria));
}
});
hoplon.app_pages._index_DOT_html.sorted = (function hoplon$app_pages$_index_DOT_html$sorted(label,criteria,column){
var G__36747 = cljs.core.cst$kw$class;
var G__36748 = "sorted-column";
var G__36749 = cljs.core.cst$kw$click;
var G__36750 = ((function (G__36747,G__36748,G__36749){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(criteria,hoplon.app_pages._index_DOT_html.change_sort_criteria,column);
});})(G__36747,G__36748,G__36749))
;
var G__36751 = label;
var G__36752 = javelin.core.formula(((function (G__36747,G__36748,G__36749,G__36750,G__36751){
return (function (criteria__$1){
var vec__36753 = criteria__$1;
var vec__36756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36753,(0),null);
var primary = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36756,(0),null);
var direction = cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__36753,vec__36756,primary,G__36747,G__36748,G__36749,G__36750,G__36751){
return (function (p__36759){
var vec__36760 = p__36759;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36760,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36760,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,column);
});})(vec__36753,vec__36756,primary,G__36747,G__36748,G__36749,G__36750,G__36751))
,criteria__$1)));
var G__36763 = cljs.core.cst$kw$class;
var G__36764 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["column-sorter",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(primary,column))?"primary":"secondary"),cljs.core.name(direction)], null);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__36763,G__36764) : hoplon.core.div.call(null,G__36763,G__36764));
});})(G__36747,G__36748,G__36749,G__36750,G__36751))
).call(null,criteria);
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__36747,G__36748,G__36749,G__36750,G__36751,G__36752) : hoplon.core.div.call(null,G__36747,G__36748,G__36749,G__36750,G__36751,G__36752));
});
hoplon.app_pages._index_DOT_html.htmlize_cell = (function hoplon$app_pages$_index_DOT_html$htmlize_cell(cell){
var iter__18623__auto__ = (function hoplon$app_pages$_index_DOT_html$htmlize_cell_$_iter__36791(s__36792){
return (new cljs.core.LazySeq(null,(function (){
var s__36792__$1 = s__36792;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__36792__$1);
if(temp__6503__auto__){
var s__36792__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36792__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__36792__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__36794 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__36793 = (0);
while(true){
if((i__36793 < size__18622__auto__)){
var map__36807 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__36793);
var map__36807__$1 = ((((!((map__36807 == null)))?((((map__36807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36807):map__36807);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36807__$1,cljs.core.cst$kw$text);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36807__$1,cljs.core.cst$kw$class);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36807__$1,cljs.core.cst$kw$degree);
cljs.core.chunk_append(b__36794,((cljs.core.empty_QMARK_(text))?cljs.core.PersistentVector.EMPTY:(function (){var G__36809 = cljs.core.cst$kw$class;
var G__36810 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__17769__auto__ = class$;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return "";
}
})(),(cljs.core.truth_(degree)?cljs.core.name(degree):"")], null);
var G__36811 = text;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__36809,G__36810,G__36811) : hoplon.core.span.call(null,G__36809,G__36810,G__36811));
})()));

var G__36817 = (i__36793 + (1));
i__36793 = G__36817;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36794),hoplon$app_pages$_index_DOT_html$htmlize_cell_$_iter__36791(cljs.core.chunk_rest(s__36792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36794),null);
}
} else {
var map__36812 = cljs.core.first(s__36792__$2);
var map__36812__$1 = ((((!((map__36812 == null)))?((((map__36812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36812):map__36812);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,cljs.core.cst$kw$text);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,cljs.core.cst$kw$class);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36812__$1,cljs.core.cst$kw$degree);
return cljs.core.cons(((cljs.core.empty_QMARK_(text))?cljs.core.PersistentVector.EMPTY:(function (){var G__36814 = cljs.core.cst$kw$class;
var G__36815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__17769__auto__ = class$;
if(cljs.core.truth_(or__17769__auto__)){
return or__17769__auto__;
} else {
return "";
}
})(),(cljs.core.truth_(degree)?cljs.core.name(degree):"")], null);
var G__36816 = text;
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__36814,G__36815,G__36816) : hoplon.core.span.call(null,G__36814,G__36815,G__36816));
})()),hoplon$app_pages$_index_DOT_html$htmlize_cell_$_iter__36791(cljs.core.rest(s__36792__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__18623__auto__(cell);
});
/**
 * Returns UI for the assessment section
 */
hoplon.app_pages._index_DOT_html.assessment = (function hoplon$app_pages$_index_DOT_html$assessment(passes,selected_pass,limit_displayed_passes_QMARK_,sort_criteria){
var G__37625 = cljs.core.cst$kw$id;
var G__37626 = "assessments";
var G__37627 = (function (){var G__37702 = (function (){var G__37733 = cljs.core.cst$kw$class;
var G__37734 = "header-1";
var G__37735 = (function (){var G__37753 = cljs.core.cst$kw$class;
var G__37754 = "toggle-button";
var G__37755 = cljs.core.cst$kw$colspan;
var G__37756 = (4);
var G__37757 = (function (){var limit_cell = limit_displayed_passes_QMARK_;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37758 = cljs.core.cst$kw$id;
var G__37759 = "scoresheet-help";
var G__37760 = hoplon.app_pages._index_DOT_html.help_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scoresheet], null));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(G__37758,G__37759,G__37760) : hoplon.core.div.call(null,G__37758,G__37759,G__37760));
})(),javelin.core.formula(((function (limit_cell,G__37753,G__37754,G__37755,G__37756,G__37733,G__37734,G__37625,G__37626){
return (function (passes__$1,selected_pass__$1,limit_displayed_passes_QMARK___$1){
var G__37761 = cljs.core.cst$kw$id;
var G__37762 = "limit-pass-display";
var G__37763 = cljs.core.cst$kw$toggle;
var G__37764 = (function (){var and__17757__auto__ = passes__$1;
if(cljs.core.truth_(and__17757__auto__)){
var and__17757__auto____$1 = selected_pass__$1;
if(cljs.core.truth_(and__17757__auto____$1)){
return ((1) < cljs.core.count(passes__$1));
} else {
return and__17757__auto____$1;
}
} else {
return and__17757__auto__;
}
})();
var G__37765 = cljs.core.cst$kw$click;
var G__37766 = ((function (G__37761,G__37762,G__37763,G__37764,G__37765,limit_cell,G__37753,G__37754,G__37755,G__37756,G__37733,G__37734,G__37625,G__37626){
return (function (){
var G__37768 = limit_cell;
var G__37769 = cljs.core.not(limit_displayed_passes_QMARK___$1);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__37768,G__37769) : cljs.core.reset_BANG_.call(null,G__37768,G__37769));
});})(G__37761,G__37762,G__37763,G__37764,G__37765,limit_cell,G__37753,G__37754,G__37755,G__37756,G__37733,G__37734,G__37625,G__37626))
;
var G__37767 = (cljs.core.truth_(limit_displayed_passes_QMARK___$1)?"Show all passes":"Only show selected pass");
return (hoplon.core.button.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$7(G__37761,G__37762,G__37763,G__37764,G__37765,G__37766,G__37767) : hoplon.core.button.call(null,G__37761,G__37762,G__37763,G__37764,G__37765,G__37766,G__37767));
});})(limit_cell,G__37753,G__37754,G__37755,G__37756,G__37733,G__37734,G__37625,G__37626))
).call(null,passes,selected_pass,limit_displayed_passes_QMARK_)], null);
})();
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$5(G__37753,G__37754,G__37755,G__37756,G__37757) : hoplon.core.th.call(null,G__37753,G__37754,G__37755,G__37756,G__37757));
})();
var G__37736 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"gs-speed-errors",cljs.core.cst$kw$colspan,(7),"Glideslope and Speed Errors") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"gs-speed-errors",cljs.core.cst$kw$colspan,(7),"Glideslope and Speed Errors"));
var G__37737 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"control-errors",cljs.core.cst$kw$colspan,(2),"Control Errors") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"control-errors",cljs.core.cst$kw$colspan,(2),"Control Errors"));
var G__37738 = (function (){var G__37770 = cljs.core.cst$kw$class;
var G__37771 = "lineup-and-wing";
var G__37772 = cljs.core.cst$kw$rowspan;
var G__37773 = (2);
var G__37774 = "Lineup ";
var G__37775 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__37776 = "& Wing";
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$7(G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776) : hoplon.core.th.call(null,G__37770,G__37771,G__37772,G__37773,G__37774,G__37775,G__37776));
})();
var G__37739 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"wire",cljs.core.cst$kw$rowspan,(2),"Wire #") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"wire",cljs.core.cst$kw$rowspan,(2),"Wire #"));
var G__37740 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"remarks",cljs.core.cst$kw$rowspan,(2),"Remarks") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"remarks",cljs.core.cst$kw$rowspan,(2),"Remarks"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$8(G__37733,G__37734,G__37735,G__37736,G__37737,G__37738,G__37739,G__37740) : hoplon.core.tr.call(null,G__37733,G__37734,G__37735,G__37736,G__37737,G__37738,G__37739,G__37740));
})();
var G__37703 = (function (){var G__37777 = cljs.core.cst$kw$class;
var G__37778 = "header-2";
var G__37779 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"select","") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"select",""));
var G__37780 = (function (){var G__37792 = cljs.core.cst$kw$class;
var G__37793 = "carrier";
var G__37794 = hoplon.app_pages._index_DOT_html.sorted("Carrier",sort_criteria,cljs.core.cst$kw$carrier);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(G__37792,G__37793,G__37794) : hoplon.core.th.call(null,G__37792,G__37793,G__37794));
})();
var G__37781 = (function (){var G__37795 = cljs.core.cst$kw$class;
var G__37796 = "pilot";
var G__37797 = hoplon.app_pages._index_DOT_html.sorted("Pilot",sort_criteria,cljs.core.cst$kw$pilot);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(G__37795,G__37796,G__37797) : hoplon.core.th.call(null,G__37795,G__37796,G__37797));
})();
var G__37782 = (function (){var G__37798 = cljs.core.cst$kw$class;
var G__37799 = "start";
var G__37800 = hoplon.app_pages._index_DOT_html.sorted("Time",sort_criteria,cljs.core.cst$kw$start);
return (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(G__37798,G__37799,G__37800) : hoplon.core.th.call(null,G__37798,G__37799,G__37800));
})();
var G__37783 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"grade","Grade") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"grade","Grade"));
var G__37784 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"score","Score") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"score","Score"));
var G__37785 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"aw","AW") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"aw","AW"));
var G__37786 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"x","X") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"x","X"));
var G__37787 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"im","IM") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"im","IM"));
var G__37788 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"ic","IC") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"ic","IC"));
var G__37789 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"ar","AR") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"ar","AR"));
var G__37790 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"power","Power") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"power","Power"));
var G__37791 = (hoplon.core.th.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.th.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"att","ATT") : hoplon.core.th.call(null,cljs.core.cst$kw$class,"att","ATT"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$15 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$15(G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787,G__37788,G__37789,G__37790,G__37791) : hoplon.core.tr.call(null,G__37777,G__37778,G__37779,G__37780,G__37781,G__37782,G__37783,G__37784,G__37785,G__37786,G__37787,G__37788,G__37789,G__37790,G__37791));
})();
return (hoplon.core.thead.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.thead.cljs$core$IFn$_invoke$arity$2(G__37702,G__37703) : hoplon.core.thead.call(null,G__37702,G__37703));
})();
var G__37628 = (function (){var G__37944 = (function (){var selected_pass_cell = selected_pass;
return javelin.core.formula(((function (selected_pass_cell,G__37625,G__37626,G__37627){
return (function (passes__$1,selected_pass__$1,limit_displayed_passes_QMARK___$1){
if(cljs.core.empty_QMARK_(passes__$1)){
var G__37945 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$class,"none-loaded",cljs.core.cst$kw$colspan,(16),"No Passes Detected") : hoplon.core.td.call(null,cljs.core.cst$kw$class,"none-loaded",cljs.core.cst$kw$colspan,(16),"No Passes Detected"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$1(G__37945) : hoplon.core.tr.call(null,G__37945));
} else {
var iter__18623__auto__ = ((function (selected_pass_cell,G__37625,G__37626,G__37627){
return (function hoplon$app_pages$_index_DOT_html$assessment_$_iter__37946(s__37947){
return (new cljs.core.LazySeq(null,((function (selected_pass_cell,G__37625,G__37626,G__37627){
return (function (){
var s__37947__$1 = s__37947;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__37947__$1);
if(temp__6503__auto__){
var s__37947__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37947__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__37947__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__37949 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__37948 = (0);
while(true){
if((i__37948 < size__18622__auto__)){
var pass = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__37948);
var map__38020 = pass;
var map__38020__$1 = ((((!((map__38020 == null)))?((((map__38020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38020):map__38020);
var carrier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,cljs.core.cst$kw$carrier);
var pilot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,cljs.core.cst$kw$pilot);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,cljs.core.cst$kw$start);
var assessment__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38020__$1,cljs.core.cst$kw$assessment);
var assessment_STAR_ = hoplon.app_pages._index_DOT_html.consolidate(assessment__$1);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,988,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grade",cljs.core.cst$kw$consolidated,cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment_STAR_),cljs.core.cst$kw$normal,cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment__$1)], null);
});})(i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
,null)),null,2031846691);
var lead_td = ((function (i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (class$,content){
var G__38022 = cljs.core.cst$kw$class;
var G__38023 = [cljs.core.str(class$),cljs.core.str(" assessment-cell")].join('');
var G__38024 = content;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38022,G__38023,G__38024) : hoplon.core.td.call(null,G__38022,G__38023,G__38024));
});})(i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
var data_td = ((function (i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (class$,cell_f){
var G__38025 = cljs.core.cst$kw$class;
var G__38026 = [cljs.core.str(class$),cljs.core.str(" assessment-cell")].join('');
var G__38027 = hoplon.app_pages._index_DOT_html.htmlize_cell((cell_f.cljs$core$IFn$_invoke$arity$1 ? cell_f.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : cell_f.call(null,assessment_STAR_)));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38025,G__38026,G__38027) : hoplon.core.td.call(null,G__38025,G__38026,G__38027));
});})(i__37948,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
cljs.core.chunk_append(b__37949,(function (){var G__38028 = cljs.core.cst$kw$css;
var G__38029 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(((cljs.core.not(selected_pass__$1)) || (cljs.core.not(limit_displayed_passes_QMARK___$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_pass__$1,pass)))?"table-row":"none")], null);
var G__38030 = lead_td("select",(function (){var G__38046 = cljs.core.cst$kw$type;
var G__38047 = "radio";
var G__38048 = cljs.core.cst$kw$name;
var G__38049 = "pass";
var G__38050 = cljs.core.cst$kw$click;
var G__38051 = ((function (i__37948,G__38046,G__38047,G__38048,G__38049,G__38050,G__38028,G__38029,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,data_td,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_pass_cell,pass) : cljs.core.reset_BANG_.call(null,selected_pass_cell,pass));
});})(i__37948,G__38046,G__38047,G__38048,G__38049,G__38050,G__38028,G__38029,map__38020,map__38020__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,data_td,pass,c__18621__auto__,size__18622__auto__,b__37949,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
var G__38052 = cljs.core.cst$kw$checked;
var G__38053 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_pass__$1,pass);
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$8(G__38046,G__38047,G__38048,G__38049,G__38050,G__38051,G__38052,G__38053) : hoplon.core.input.call(null,G__38046,G__38047,G__38048,G__38049,G__38050,G__38051,G__38052,G__38053));
})());
var G__38031 = lead_td("carrier",carrier);
var G__38032 = lead_td("pilot",pilot);
var G__38033 = lead_td("start",start);
var G__38034 = data_td("grade",hoplon.app_pages._index_DOT_html.grade_cell);
var G__38035 = data_td("score",hoplon.app_pages._index_DOT_html.score_cell);
var G__38036 = data_td("aw",hoplon.app_pages._index_DOT_html.aw_cell);
var G__38037 = data_td("x",hoplon.app_pages._index_DOT_html.x_cell);
var G__38038 = data_td("im",hoplon.app_pages._index_DOT_html.im_cell);
var G__38039 = data_td("ic",hoplon.app_pages._index_DOT_html.ic_cell);
var G__38040 = data_td("ar",hoplon.app_pages._index_DOT_html.ar_cell);
var G__38041 = data_td("power",hoplon.app_pages._index_DOT_html.power_cell);
var G__38042 = data_td("att",hoplon.app_pages._index_DOT_html.att_cell);
var G__38043 = data_td("lineup-and-wing",hoplon.app_pages._index_DOT_html.lineup_and_wing_cell);
var G__38044 = data_td("wire",hoplon.app_pages._index_DOT_html.wire_cell);
var G__38045 = data_td("remarks",hoplon.app_pages._index_DOT_html.remarks_cell);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$18 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$18(G__38028,G__38029,G__38030,G__38031,G__38032,G__38033,G__38034,G__38035,G__38036,G__38037,G__38038,G__38039,G__38040,G__38041,G__38042,G__38043,G__38044,G__38045) : hoplon.core.tr.call(null,G__38028,G__38029,G__38030,G__38031,G__38032,G__38033,G__38034,G__38035,G__38036,G__38037,G__38038,G__38039,G__38040,G__38041,G__38042,G__38043,G__38044,G__38045));
})());

var G__38088 = (i__37948 + (1));
i__37948 = G__38088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37949),hoplon$app_pages$_index_DOT_html$assessment_$_iter__37946(cljs.core.chunk_rest(s__37947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37949),null);
}
} else {
var pass = cljs.core.first(s__37947__$2);
var map__38054 = pass;
var map__38054__$1 = ((((!((map__38054 == null)))?((((map__38054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38054):map__38054);
var carrier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054__$1,cljs.core.cst$kw$carrier);
var pilot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054__$1,cljs.core.cst$kw$pilot);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054__$1,cljs.core.cst$kw$start);
var assessment__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054__$1,cljs.core.cst$kw$assessment);
var assessment_STAR_ = hoplon.app_pages._index_DOT_html.consolidate(assessment__$1);
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,988,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["grade",cljs.core.cst$kw$consolidated,cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment_STAR_),cljs.core.cst$kw$normal,cljs.core.cst$kw$lsobot$grading_SLASH_grade.cljs$core$IFn$_invoke$arity$1(assessment__$1)], null);
});})(map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
,null)),null,-1405560836);
var lead_td = ((function (map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (class$,content){
var G__38056 = cljs.core.cst$kw$class;
var G__38057 = [cljs.core.str(class$),cljs.core.str(" assessment-cell")].join('');
var G__38058 = content;
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38056,G__38057,G__38058) : hoplon.core.td.call(null,G__38056,G__38057,G__38058));
});})(map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
var data_td = ((function (map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (class$,cell_f){
var G__38059 = cljs.core.cst$kw$class;
var G__38060 = [cljs.core.str(class$),cljs.core.str(" assessment-cell")].join('');
var G__38061 = hoplon.app_pages._index_DOT_html.htmlize_cell((cell_f.cljs$core$IFn$_invoke$arity$1 ? cell_f.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : cell_f.call(null,assessment_STAR_)));
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38059,G__38060,G__38061) : hoplon.core.td.call(null,G__38059,G__38060,G__38061));
});})(map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
return cljs.core.cons((function (){var G__38062 = cljs.core.cst$kw$css;
var G__38063 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(((cljs.core.not(selected_pass__$1)) || (cljs.core.not(limit_displayed_passes_QMARK___$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_pass__$1,pass)))?"table-row":"none")], null);
var G__38064 = lead_td("select",(function (){var G__38080 = cljs.core.cst$kw$type;
var G__38081 = "radio";
var G__38082 = cljs.core.cst$kw$name;
var G__38083 = "pass";
var G__38084 = cljs.core.cst$kw$click;
var G__38085 = ((function (G__38080,G__38081,G__38082,G__38083,G__38084,G__38062,G__38063,map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,data_td,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(selected_pass_cell,pass) : cljs.core.reset_BANG_.call(null,selected_pass_cell,pass));
});})(G__38080,G__38081,G__38082,G__38083,G__38084,G__38062,G__38063,map__38054,map__38054__$1,carrier,pilot,start,assessment__$1,assessment_STAR_,_,lead_td,data_td,pass,s__37947__$2,temp__6503__auto__,selected_pass_cell,G__37625,G__37626,G__37627))
;
var G__38086 = cljs.core.cst$kw$checked;
var G__38087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_pass__$1,pass);
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$8(G__38080,G__38081,G__38082,G__38083,G__38084,G__38085,G__38086,G__38087) : hoplon.core.input.call(null,G__38080,G__38081,G__38082,G__38083,G__38084,G__38085,G__38086,G__38087));
})());
var G__38065 = lead_td("carrier",carrier);
var G__38066 = lead_td("pilot",pilot);
var G__38067 = lead_td("start",start);
var G__38068 = data_td("grade",hoplon.app_pages._index_DOT_html.grade_cell);
var G__38069 = data_td("score",hoplon.app_pages._index_DOT_html.score_cell);
var G__38070 = data_td("aw",hoplon.app_pages._index_DOT_html.aw_cell);
var G__38071 = data_td("x",hoplon.app_pages._index_DOT_html.x_cell);
var G__38072 = data_td("im",hoplon.app_pages._index_DOT_html.im_cell);
var G__38073 = data_td("ic",hoplon.app_pages._index_DOT_html.ic_cell);
var G__38074 = data_td("ar",hoplon.app_pages._index_DOT_html.ar_cell);
var G__38075 = data_td("power",hoplon.app_pages._index_DOT_html.power_cell);
var G__38076 = data_td("att",hoplon.app_pages._index_DOT_html.att_cell);
var G__38077 = data_td("lineup-and-wing",hoplon.app_pages._index_DOT_html.lineup_and_wing_cell);
var G__38078 = data_td("wire",hoplon.app_pages._index_DOT_html.wire_cell);
var G__38079 = data_td("remarks",hoplon.app_pages._index_DOT_html.remarks_cell);
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$18 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$18(G__38062,G__38063,G__38064,G__38065,G__38066,G__38067,G__38068,G__38069,G__38070,G__38071,G__38072,G__38073,G__38074,G__38075,G__38076,G__38077,G__38078,G__38079) : hoplon.core.tr.call(null,G__38062,G__38063,G__38064,G__38065,G__38066,G__38067,G__38068,G__38069,G__38070,G__38071,G__38072,G__38073,G__38074,G__38075,G__38076,G__38077,G__38078,G__38079));
})(),hoplon$app_pages$_index_DOT_html$assessment_$_iter__37946(cljs.core.rest(s__37947__$2)));
}
} else {
return null;
}
break;
}
});})(selected_pass_cell,G__37625,G__37626,G__37627))
,null,null));
});})(selected_pass_cell,G__37625,G__37626,G__37627))
;
return iter__18623__auto__(passes__$1);
}
});})(selected_pass_cell,G__37625,G__37626,G__37627))
).call(null,passes,selected_pass,limit_displayed_passes_QMARK_);
})();
return (hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.tbody.cljs$core$IFn$_invoke$arity$1(G__37944) : hoplon.core.tbody.call(null,G__37944));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__37625,G__37626,G__37627,G__37628) : hoplon.core.table.call(null,G__37625,G__37626,G__37627,G__37628));
});
/**
 * Returns a Blob containing CSV data for the passes.
 */
hoplon.app_pages._index_DOT_html.make_csv = (function hoplon$app_pages$_index_DOT_html$make_csv(passes){
var fixed_columns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Carrier",cljs.core.cst$kw$carrier], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pilot",cljs.core.cst$kw$pilot], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Start",cljs.core.cst$kw$start], null)], null);
var computed_columns = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Grade",hoplon.app_pages._index_DOT_html.grade_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Score",hoplon.app_pages._index_DOT_html.score_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AW",hoplon.app_pages._index_DOT_html.aw_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X",hoplon.app_pages._index_DOT_html.x_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IM",hoplon.app_pages._index_DOT_html.im_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IC",hoplon.app_pages._index_DOT_html.ic_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["AR",hoplon.app_pages._index_DOT_html.ar_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Power",hoplon.app_pages._index_DOT_html.power_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ATT",hoplon.app_pages._index_DOT_html.att_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lineup and Wing",hoplon.app_pages._index_DOT_html.lineup_and_wing_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wire",hoplon.app_pages._index_DOT_html.wire_cell], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Remarks",hoplon.app_pages._index_DOT_html.remarks_cell], null)], null);
var header_row = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fixed_columns),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,computed_columns))));
var comment_text = ((function (fixed_columns,computed_columns,header_row){
return (function (p__38188){
var map__38189 = p__38188;
var map__38189__$1 = ((((!((map__38189 == null)))?((((map__38189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38189):map__38189);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38189__$1,cljs.core.cst$kw$text);
var degree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38189__$1,cljs.core.cst$kw$degree);
return [cljs.core.str((function (){var G__38191 = (((degree instanceof cljs.core.Keyword))?degree.fqn:null);
switch (G__38191) {
case "minor":
return "(";

break;
case "unacceptable":
return "_";

break;
default:
return "";

}
})()),cljs.core.str(text),cljs.core.str((function (){var G__38192 = (((degree instanceof cljs.core.Keyword))?degree.fqn:null);
switch (G__38192) {
case "minor":
return ")";

break;
case "unacceptable":
return "_";

break;
default:
return "";

}
})())].join('');
});})(fixed_columns,computed_columns,header_row))
;
var pass_rows = (function (){var iter__18623__auto__ = ((function (fixed_columns,computed_columns,header_row,comment_text){
return (function hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193(s__38194){
return (new cljs.core.LazySeq(null,((function (fixed_columns,computed_columns,header_row,comment_text){
return (function (){
var s__38194__$1 = s__38194;
while(true){
var temp__6503__auto__ = cljs.core.seq(s__38194__$1);
if(temp__6503__auto__){
var s__38194__$2 = temp__6503__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38194__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__38194__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__38196 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__38195 = (0);
while(true){
if((i__38195 < size__18622__auto__)){
var pass = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__38195);
cljs.core.chunk_append(b__38196,(function (){var assessment_STAR_ = hoplon.app_pages._index_DOT_html.consolidate(cljs.core.cst$kw$assessment.cljs$core$IFn$_invoke$arity$1(pass));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function (p__38243){
var vec__38244 = p__38243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38244,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38244,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pass,k);
});})(i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
,fixed_columns),(function (){var iter__18623__auto__ = ((function (i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38247(s__38248){
return (new cljs.core.LazySeq(null,((function (i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function (){
var s__38248__$1 = s__38248;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__38248__$1);
if(temp__6503__auto____$1){
var s__38248__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38248__$2)){
var c__18621__auto____$1 = cljs.core.chunk_first(s__38248__$2);
var size__18622__auto____$1 = cljs.core.count(c__18621__auto____$1);
var b__38250 = cljs.core.chunk_buffer(size__18622__auto____$1);
if((function (){var i__38249 = (0);
while(true){
if((i__38249 < size__18622__auto____$1)){
var vec__38259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto____$1,i__38249);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38259,(0),null);
var comments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38259,(1),null);
cljs.core.chunk_append(b__38250,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(comment_text,(comments.cljs$core$IFn$_invoke$arity$1 ? comments.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : comments.call(null,assessment_STAR_))))));

var G__38289 = (i__38249 + (1));
i__38249 = G__38289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38250),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38247(cljs.core.chunk_rest(s__38248__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38250),null);
}
} else {
var vec__38262 = cljs.core.first(s__38248__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38262,(0),null);
var comments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38262,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(comment_text,(comments.cljs$core$IFn$_invoke$arity$1 ? comments.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : comments.call(null,assessment_STAR_))))),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38247(cljs.core.rest(s__38248__$2)));
}
} else {
return null;
}
break;
}
});})(i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
,null,null));
});})(i__38195,assessment_STAR_,pass,c__18621__auto__,size__18622__auto__,b__38196,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
;
return iter__18623__auto__(computed_columns);
})())));
})());

var G__38290 = (i__38195 + (1));
i__38195 = G__38290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38196),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193(cljs.core.chunk_rest(s__38194__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38196),null);
}
} else {
var pass = cljs.core.first(s__38194__$2);
return cljs.core.cons((function (){var assessment_STAR_ = hoplon.app_pages._index_DOT_html.consolidate(cljs.core.cst$kw$assessment.cljs$core$IFn$_invoke$arity$1(pass));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function (p__38265){
var vec__38266 = p__38265;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38266,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pass,k);
});})(assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
,fixed_columns),(function (){var iter__18623__auto__ = ((function (assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38269(s__38270){
return (new cljs.core.LazySeq(null,((function (assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text){
return (function (){
var s__38270__$1 = s__38270;
while(true){
var temp__6503__auto____$1 = cljs.core.seq(s__38270__$1);
if(temp__6503__auto____$1){
var s__38270__$2 = temp__6503__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38270__$2)){
var c__18621__auto__ = cljs.core.chunk_first(s__38270__$2);
var size__18622__auto__ = cljs.core.count(c__18621__auto__);
var b__38272 = cljs.core.chunk_buffer(size__18622__auto__);
if((function (){var i__38271 = (0);
while(true){
if((i__38271 < size__18622__auto__)){
var vec__38281 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__18621__auto__,i__38271);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38281,(0),null);
var comments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38281,(1),null);
cljs.core.chunk_append(b__38272,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(comment_text,(comments.cljs$core$IFn$_invoke$arity$1 ? comments.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : comments.call(null,assessment_STAR_))))));

var G__38291 = (i__38271 + (1));
i__38271 = G__38291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38272),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38269(cljs.core.chunk_rest(s__38270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38272),null);
}
} else {
var vec__38284 = cljs.core.first(s__38270__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38284,(0),null);
var comments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38284,(1),null);
return cljs.core.cons(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(comment_text,(comments.cljs$core$IFn$_invoke$arity$1 ? comments.cljs$core$IFn$_invoke$arity$1(assessment_STAR_) : comments.call(null,assessment_STAR_))))),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193_$_iter__38269(cljs.core.rest(s__38270__$2)));
}
} else {
return null;
}
break;
}
});})(assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
,null,null));
});})(assessment_STAR_,pass,s__38194__$2,temp__6503__auto__,fixed_columns,computed_columns,header_row,comment_text))
;
return iter__18623__auto__(computed_columns);
})())));
})(),hoplon$app_pages$_index_DOT_html$make_csv_$_iter__38193(cljs.core.rest(s__38194__$2)));
}
} else {
return null;
}
break;
}
});})(fixed_columns,computed_columns,header_row,comment_text))
,null,null));
});})(fixed_columns,computed_columns,header_row,comment_text))
;
return iter__18623__auto__(passes);
})();
var csv_text = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_row], null),pass_rows)));
return (new Blob([csv_text],{"type": "text/csv;charset=utf-8;"}));
});
hoplon.app_pages._index_DOT_html.keymap = cljs.core.PersistentHashMap.fromArrays([(110),(99),(108),(100),(97),(112),(78),(120),(98),(80),(49)],[cljs.core.cst$kw$n,cljs.core.cst$kw$c,cljs.core.cst$kw$l,cljs.core.cst$kw$d,cljs.core.cst$kw$a,cljs.core.cst$kw$p,cljs.core.cst$kw$N,cljs.core.cst$kw$x,cljs.core.cst$kw$b,cljs.core.cst$kw$P,cljs.core.cst$kw$one]);
hoplon.app_pages._index_DOT_html.scroll_to = (function hoplon$app_pages$_index_DOT_html$scroll_to(id){
var body = jQuery("body,html");
var elem = (function (){var G__38293 = goog.dom.getElement(id);
return jQuery(G__38293);
})();
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem.offset().top], null)));
});
hoplon.app_pages._index_DOT_html.key_action = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$a,(function (){
return hoplon.app_pages._index_DOT_html.scroll_to("aoa");
}),cljs.core.cst$kw$b,(function (){
return hoplon.app_pages._index_DOT_html.scroll_to("elevation");
}),cljs.core.cst$kw$c,(function (){
return hoplon.app_pages._index_DOT_html.scroll_to("plan");
}),cljs.core.cst$kw$l,(function (){
return hoplon.app_pages._index_DOT_html.load_acmi(null);
}),cljs.core.cst$kw$n,hoplon.app_pages._index_DOT_html.next_pass,cljs.core.cst$kw$p,hoplon.app_pages._index_DOT_html.prev_pass,cljs.core.cst$kw$x,hoplon.app_pages._index_DOT_html.export_csv], null);
hoplon.app_pages._index_DOT_html.keypress = (function hoplon$app_pages$_index_DOT_html$keypress(e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"hoplon.app-pages._index_DOT_html",null,1107,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Key pressed",cljs.core.cst$kw$keycode,e.keyCode], null);
}),null)),null,-263794765);

var temp__6503__auto__ = (function (){var G__38295 = e;
var G__38295__$1 = (((G__38295 == null))?null:G__38295.keyCode);
var G__38295__$2 = (((G__38295__$1 == null))?null:(hoplon.app_pages._index_DOT_html.keymap.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.keymap.cljs$core$IFn$_invoke$arity$1(G__38295__$1) : hoplon.app_pages._index_DOT_html.keymap.call(null,G__38295__$1)));
if((G__38295__$2 == null)){
return null;
} else {
return (hoplon.app_pages._index_DOT_html.key_action.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.key_action.cljs$core$IFn$_invoke$arity$1(G__38295__$2) : hoplon.app_pages._index_DOT_html.key_action.call(null,G__38295__$2));
}
})();
if(cljs.core.truth_(temp__6503__auto__)){
var action = temp__6503__auto__;
return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
} else {
return null;
}
});
/**
 * The credits lightbox
 */
hoplon.app_pages._index_DOT_html.credits = (function (){var G__38296 = cljs.core.cst$kw$id;
var G__38297 = "credits-wrapper";
var G__38298 = cljs.core.cst$kw$css;
var G__38299 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"none"], null);
var G__38300 = (function (){var G__38301 = cljs.core.cst$kw$class;
var G__38302 = ".lightbox";
var G__38303 = cljs.core.cst$kw$id;
var G__38304 = "credits";
var G__38305 = (hoplon.core.h1.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.h1.cljs$core$IFn$_invoke$arity$1("Credits") : hoplon.core.h1.call(null,"Credits"));
var G__38306 = (function (){var G__38307 = cljs.core.cst$kw$id;
var G__38308 = "credits-body";
var G__38309 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$class,"squadron-emblem",cljs.core.cst$kw$src,"images/401st.png") : hoplon.core.img.call(null,cljs.core.cst$kw$class,"squadron-emblem",cljs.core.cst$kw$src,"images/401st.png"));
var G__38310 = (function (){var G__38334 = (function (){var G__38347 = (function (){var G__38352 = cljs.core.cst$kw$class;
var G__38353 = "person";
var G__38354 = (function (){var G__38355 = cljs.core.cst$kw$href;
var G__38356 = (hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$tyrant) : hoplon.app_pages._index_DOT_html.urls.call(null,cljs.core.cst$kw$tyrant));
var G__38357 = "Tyrant";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__38355,G__38356,G__38357) : hoplon.core.a.call(null,G__38355,G__38356,G__38357));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38352,G__38353,G__38354) : hoplon.core.td.call(null,G__38352,G__38353,G__38354));
})();
var G__38348 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1("Design and implementation") : hoplon.core.td.call(null,"Design and implementation"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__38347,G__38348) : hoplon.core.tr.call(null,G__38347,G__38348));
})();
var G__38335 = (function (){var G__38367 = (function (){var G__38372 = cljs.core.cst$kw$class;
var G__38373 = "person";
var G__38374 = (function (){var G__38375 = cljs.core.cst$kw$href;
var G__38376 = (hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flounder) : hoplon.app_pages._index_DOT_html.urls.call(null,cljs.core.cst$kw$flounder));
var G__38377 = "Flounder";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__38375,G__38376,G__38377) : hoplon.core.a.call(null,G__38375,G__38376,G__38377));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38372,G__38373,G__38374) : hoplon.core.td.call(null,G__38372,G__38373,G__38374));
})();
var G__38368 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1("Concept, testing, project management") : hoplon.core.td.call(null,"Concept, testing, project management"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__38367,G__38368) : hoplon.core.tr.call(null,G__38367,G__38368));
})();
var G__38336 = (function (){var G__38387 = (function (){var G__38392 = cljs.core.cst$kw$class;
var G__38393 = "person";
var G__38394 = (function (){var G__38395 = cljs.core.cst$kw$href;
var G__38396 = (hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shady) : hoplon.app_pages._index_DOT_html.urls.call(null,cljs.core.cst$kw$shady));
var G__38397 = "Shady";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__38395,G__38396,G__38397) : hoplon.core.a.call(null,G__38395,G__38396,G__38397));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38392,G__38393,G__38394) : hoplon.core.td.call(null,G__38392,G__38393,G__38394));
})();
var G__38388 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1("Concept, testing, project management") : hoplon.core.td.call(null,"Concept, testing, project management"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__38387,G__38388) : hoplon.core.tr.call(null,G__38387,G__38388));
})();
var G__38337 = (function (){var G__38407 = (function (){var G__38412 = cljs.core.cst$kw$class;
var G__38413 = "person";
var G__38414 = (function (){var G__38415 = cljs.core.cst$kw$href;
var G__38416 = (hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1 ? hoplon.app_pages._index_DOT_html.urls.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$drillin) : hoplon.app_pages._index_DOT_html.urls.call(null,cljs.core.cst$kw$drillin));
var G__38417 = "Drillin";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$3(G__38415,G__38416,G__38417) : hoplon.core.a.call(null,G__38415,G__38416,G__38417));
})();
return (hoplon.core.td.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$3(G__38412,G__38413,G__38414) : hoplon.core.td.call(null,G__38412,G__38413,G__38414));
})();
var G__38408 = (hoplon.core.td.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.td.cljs$core$IFn$_invoke$arity$1("CO, 401st VFS") : hoplon.core.td.call(null,"CO, 401st VFS"));
return (hoplon.core.tr.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.tr.cljs$core$IFn$_invoke$arity$2(G__38407,G__38408) : hoplon.core.tr.call(null,G__38407,G__38408));
})();
return (hoplon.core.table.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.table.cljs$core$IFn$_invoke$arity$4(G__38334,G__38335,G__38336,G__38337) : hoplon.core.table.call(null,G__38334,G__38335,G__38336,G__38337));
})();
var G__38311 = (function (){var G__38418 = "LSOBot was inspired by ";
var G__38419 = (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$href,"http://vlso.blogspot.com/",cljs.core.cst$kw$target,"_blank","vLSO") : hoplon.core.a.call(null,cljs.core.cst$kw$href,"http://vlso.blogspot.com/",cljs.core.cst$kw$target,"_blank","vLSO"));
var G__38420 = ".";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__38418,G__38419,G__38420) : hoplon.core.p.call(null,G__38418,G__38419,G__38420));
})();
var G__38312 = (hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Team LSOBot would also like to thank the members of the 1st VFW and especially of the 401st VFS for their help and support during development.") : hoplon.core.p.call(null,"Team LSOBot would also like to thank the members of the 1st VFW and especially of the 401st VFS for their help and support during development."));
var G__38313 = (function (){var G__38421 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"version"], null);
var G__38422 = "Version: ";
var G__38423 = "v040";
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$3(G__38421,G__38422,G__38423) : hoplon.core.p.call(null,G__38421,G__38422,G__38423));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$7(G__38307,G__38308,G__38309,G__38310,G__38311,G__38312,G__38313) : hoplon.core.div.call(null,G__38307,G__38308,G__38309,G__38310,G__38311,G__38312,G__38313));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$6(G__38301,G__38302,G__38303,G__38304,G__38305,G__38306) : hoplon.core.div.call(null,G__38301,G__38302,G__38303,G__38304,G__38305,G__38306));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__38296,G__38297,G__38298,G__38299,G__38300) : hoplon.core.div.call(null,G__38296,G__38297,G__38298,G__38299,G__38300));
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__38425 = (hoplon.core.title.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.title.cljs$core$IFn$_invoke$arity$1("LSOBot") : hoplon.core.title.call(null,"LSOBot"));
var G__38426 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$rel,"Shortcut Icon",cljs.core.cst$kw$href,"images/favicon.ico",cljs.core.cst$kw$type,"image/x-icon") : hoplon.core.link.call(null,cljs.core.cst$kw$rel,"Shortcut Icon",cljs.core.cst$kw$href,"images/favicon.ico",cljs.core.cst$kw$type,"image/x-icon"));
var G__38427 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$href,"//cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.css",cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"//cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.css",cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$rel,"stylesheet"));
var G__38428 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$8(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$title,"main",cljs.core.cst$kw$type,"text/css") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$title,"main",cljs.core.cst$kw$type,"text/css"));
var G__38429 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$type,"text/css") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$type,"text/css"));
var G__38430 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Kalam",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$type,"text/css") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"https://fonts.googleapis.com/css?family=Kalam",cljs.core.cst$kw$rel,"stylesheet",cljs.core.cst$kw$type,"text/css"));
var G__38431 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,"FileSaver.min.js",cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$charset,"utf-8") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"FileSaver.min.js",cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$charset,"utf-8"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$7 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$7(G__38425,G__38426,G__38427,G__38428,G__38429,G__38430,G__38431) : hoplon.core.head.call(null,G__38425,G__38426,G__38427,G__38428,G__38429,G__38430,G__38431));
})(),(function (){var G__38441 = cljs.core.cst$kw$id;
var G__38442 = "body";
var G__38443 = hoplon.app_pages._index_DOT_html.titlebar;
var G__38444 = javelin.core.formula(((function (G__38441,G__38442,G__38443){
return (function (loading_QMARK_,acmi,acmi_name,passes){
if(cljs.core.truth_(loading_QMARK_)){
var G__38449 = cljs.core.cst$kw$id;
var G__38450 = "loading-placeholder";
var G__38451 = (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,"loading-placeholder-message","Loading...") : hoplon.core.span.call(null,cljs.core.cst$kw$id,"loading-placeholder-message","Loading..."));
var G__38452 = (hoplon.core.img.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.img.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$id,"spinner",cljs.core.cst$kw$src,"images/spinner.gif") : hoplon.core.img.call(null,cljs.core.cst$kw$id,"spinner",cljs.core.cst$kw$src,"images/spinner.gif"));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__38449,G__38450,G__38451,G__38452) : hoplon.core.div.call(null,G__38449,G__38450,G__38451,G__38452));
} else {
var G__38453 = cljs.core.cst$kw$id;
var G__38454 = "loaded-file-controls";
var G__38455 = (hoplon.core.button.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$id,"load-button",cljs.core.cst$kw$click,hoplon.app_pages._index_DOT_html.load_acmi,"Load ACMI") : hoplon.core.button.call(null,cljs.core.cst$kw$id,"load-button",cljs.core.cst$kw$click,hoplon.app_pages._index_DOT_html.load_acmi,"Load ACMI"));
var G__38456 = ((cljs.core.not(acmi))?(hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$id,"load-status","No ACMI file loaded") : hoplon.core.div.call(null,cljs.core.cst$kw$id,"load-status","No ACMI file loaded")):(hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$id,"load-status","Loaded ACMI: ",acmi_name) : hoplon.core.div.call(null,cljs.core.cst$kw$id,"load-status","Loaded ACMI: ",acmi_name)));
var G__38457 = (((cljs.core.count(passes) === (0)))?null:(hoplon.core.button.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.button.cljs$core$IFn$_invoke$arity$5(cljs.core.cst$kw$id,"export-button",cljs.core.cst$kw$click,hoplon.app_pages._index_DOT_html.export_csv,"Export as CSV") : hoplon.core.button.call(null,cljs.core.cst$kw$id,"export-button",cljs.core.cst$kw$click,hoplon.app_pages._index_DOT_html.export_csv,"Export as CSV")));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$5(G__38453,G__38454,G__38455,G__38456,G__38457) : hoplon.core.div.call(null,G__38453,G__38454,G__38455,G__38456,G__38457));
}
});})(G__38441,G__38442,G__38443))
).call(null,hoplon.app_pages._index_DOT_html.loading_QMARK_,hoplon.app_pages._index_DOT_html.acmi,hoplon.app_pages._index_DOT_html.acmi_name,hoplon.app_pages._index_DOT_html.passes);
var G__38445 = hoplon.app_pages._index_DOT_html.assessment(hoplon.app_pages._index_DOT_html.passes,hoplon.app_pages._index_DOT_html.selected_pass,hoplon.app_pages._index_DOT_html.limit_displayed_passes_QMARK_,hoplon.app_pages._index_DOT_html.sort_criteria);
var G__38446 = (function (){var G__38468 = cljs.core.cst$kw$id;
var G__38469 = "graphs";
var G__38470 = (function (){var G__38476 = (function (){var G__38478 = cljs.core.cst$kw$class;
var G__38479 = "graph-label-wrapper";
var G__38480 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"graph-label","Glideslope and AoA") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"graph-label","Glideslope and AoA"));
var G__38481 = hoplon.app_pages._index_DOT_html.help_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$glideslope], null));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__38478,G__38479,G__38480,G__38481) : hoplon.core.div.call(null,G__38478,G__38479,G__38480,G__38481));
})();
var G__38477 = hoplon.app_pages._index_DOT_html.elevation;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__38476,G__38477) : hoplon.core.div.call(null,G__38476,G__38477));
})();
var G__38471 = (function (){var G__38486 = (function (){var G__38488 = cljs.core.cst$kw$class;
var G__38489 = "graph-label-wrapper";
var G__38490 = (hoplon.core.div.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"graph-label","Lineup") : hoplon.core.div.call(null,cljs.core.cst$kw$class,"graph-label","Lineup"));
var G__38491 = hoplon.app_pages._index_DOT_html.help_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lineup], null));
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__38488,G__38489,G__38490,G__38491) : hoplon.core.div.call(null,G__38488,G__38489,G__38490,G__38491));
})();
var G__38487 = hoplon.app_pages._index_DOT_html.plan;
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__38486,G__38487) : hoplon.core.div.call(null,G__38486,G__38487));
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$4(G__38468,G__38469,G__38470,G__38471) : hoplon.core.div.call(null,G__38468,G__38469,G__38470,G__38471));
})();
var G__38447 = hoplon.app_pages._index_DOT_html.credits;
var G__38448 = (hoplon.core.script.cljs$core$IFn$_invoke$arity$6 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$6(cljs.core.cst$kw$src,"//cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.js",cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$charset,"utf-8") : hoplon.core.script.call(null,cljs.core.cst$kw$src,"//cdn.rawgit.com/noelboss/featherlight/1.5.0/release/featherlight.min.js",cljs.core.cst$kw$type,"text/javascript",cljs.core.cst$kw$charset,"utf-8"));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$8 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$8(G__38441,G__38442,G__38443,G__38444,G__38445,G__38446,G__38447,G__38448) : hoplon.core.body.call(null,G__38441,G__38442,G__38443,G__38444,G__38445,G__38446,G__38447,G__38448));
})()], 0));
var body_38492 = goog.dom.getElement("body");
goog.events.removeAll(body_38492,goog.events.EventType.KEYPRESS);

goog.events.listen(body_38492,goog.events.EventType.KEYPRESS,hoplon.app_pages._index_DOT_html.keypress);
taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns_DASH_blacklist,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hoplon.app-pages._index_DOT_html"], null)], null));
