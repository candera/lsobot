// Compiled by ClojureScript 1.9.76 {:static-fns true, :optimize-constants true}
goog.provide('lsobot.help');
goog.require('cljs.core');
goog.require('hoplon.core');
goog.require('hoplon.svg');
goog.require('lsobot.grading');
goog.require('lsobot.svg_fix');
lsobot.svg_fix.fix_svg_BANG_();
lsobot.help.circle = (function lsobot$help$circle(class$){
var G__34331 = cljs.core.cst$kw$attr;
var G__34332 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"help-circle"], null);
var G__34333 = cljs.core.cst$kw$viewBox;
var G__34334 = "-6 -6 52 52";
var G__34335 = (function (){var G__34336 = cljs.core.cst$kw$attr;
var G__34337 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str("approach-path "),cljs.core.str(class$)].join('')], null);
var G__34338 = cljs.core.cst$kw$cx;
var G__34339 = (20);
var G__34340 = cljs.core.cst$kw$cy;
var G__34341 = (20);
var G__34342 = cljs.core.cst$kw$r;
var G__34343 = (20);
return (hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8 ? hoplon.svg.circle.cljs$core$IFn$_invoke$arity$8(G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343) : hoplon.svg.circle.call(null,G__34336,G__34337,G__34338,G__34339,G__34340,G__34341,G__34342,G__34343));
})();
return (hoplon.svg.svg.cljs$core$IFn$_invoke$arity$5 ? hoplon.svg.svg.cljs$core$IFn$_invoke$arity$5(G__34331,G__34332,G__34333,G__34334,G__34335) : hoplon.svg.svg.call(null,G__34331,G__34332,G__34333,G__34334,G__34335));
});
lsobot.help.color_table = (function lsobot$help$color_table(dimension){
var G__34377 = (function (){var G__34389 = lsobot.help.circle("ideal");
var G__34390 = "Green with white outline";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34389,G__34390) : hoplon.core.dt.call(null,G__34389,G__34390));
})();
var G__34378 = (function (){var G__34391 = [cljs.core.str("Perfect - exactly on ideal "),cljs.core.str(dimension),cljs.core.str(".")].join('');
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34391) : hoplon.core.dd.call(null,G__34391));
})();
var G__34379 = (function (){var G__34392 = lsobot.help.circle("good");
var G__34393 = "Green with no outline";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34392,G__34393) : hoplon.core.dt.call(null,G__34392,G__34393));
})();
var G__34380 = (function (){var G__34394 = [cljs.core.str("Good - within desired variance of ideal "),cljs.core.str(dimension),cljs.core.str(".")].join('');
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34394) : hoplon.core.dd.call(null,G__34394));
})();
var G__34381 = (function (){var G__34395 = lsobot.help.circle("minor");
var G__34396 = "Yellow";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34395,G__34396) : hoplon.core.dt.call(null,G__34395,G__34396));
})();
var G__34382 = (function (){var G__34397 = [cljs.core.str("Minor variation from ideal "),cljs.core.str(dimension),cljs.core.str(".")].join('');
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34397) : hoplon.core.dd.call(null,G__34397));
})();
var G__34383 = (function (){var G__34398 = lsobot.help.circle("major");
var G__34399 = "Orange";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34398,G__34399) : hoplon.core.dt.call(null,G__34398,G__34399));
})();
var G__34384 = (function (){var G__34400 = [cljs.core.str("Major variation from ideal "),cljs.core.str(dimension),cljs.core.str(".")].join('');
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34400) : hoplon.core.dd.call(null,G__34400));
})();
var G__34385 = (function (){var G__34401 = lsobot.help.circle("unacceptable");
var G__34402 = "Red";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34401,G__34402) : hoplon.core.dt.call(null,G__34401,G__34402));
})();
var G__34386 = (function (){var G__34403 = [cljs.core.str("Unacceptable variation from ideal "),cljs.core.str(dimension),cljs.core.str(".")].join('');
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34403) : hoplon.core.dd.call(null,G__34403));
})();
var G__34387 = (function (){var G__34404 = lsobot.help.circle("");
var G__34405 = "White";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$2(G__34404,G__34405) : hoplon.core.dt.call(null,G__34404,G__34405));
})();
var G__34388 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Not assessed.") : hoplon.core.dd.call(null,"Not assessed."));
return (hoplon.core.dl.cljs$core$IFn$_invoke$arity$12 ? hoplon.core.dl.cljs$core$IFn$_invoke$arity$12(G__34377,G__34378,G__34379,G__34380,G__34381,G__34382,G__34383,G__34384,G__34385,G__34386,G__34387,G__34388) : hoplon.core.dl.call(null,G__34377,G__34378,G__34379,G__34380,G__34381,G__34382,G__34383,G__34384,G__34385,G__34386,G__34387,G__34388));
});
lsobot.help.content = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$scoresheet,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("Displays the scores. Abbreviations:") : hoplon.core.p.call(null,"Displays the scores. Abbreviations:")),(function (){var G__34409 = (function (){var G__34451 = cljs.core.cst$kw$css;
var G__34452 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_decoration,"underline"], null);
var G__34453 = "OK";
return (hoplon.core.dt.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$3(G__34451,G__34452,G__34453) : hoplon.core.dt.call(null,G__34451,G__34452,G__34453));
})();
var G__34410 = (function (){var G__34454 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_ok_PLUS_.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34454) : hoplon.core.dd.call(null,G__34454));
})();
var G__34411 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("OK") : hoplon.core.dt.call(null,"OK"));
var G__34412 = (function (){var G__34455 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_ok.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34455) : hoplon.core.dd.call(null,G__34455));
})();
var G__34413 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("(OK)") : hoplon.core.dt.call(null,"(OK)"));
var G__34414 = (function (){var G__34456 = "Fair. ";
var G__34457 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_fair.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$2(G__34456,G__34457) : hoplon.core.dd.call(null,G__34456,G__34457));
})();
var G__34415 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("B") : hoplon.core.dt.call(null,"B"));
var G__34416 = (function (){var G__34458 = "Bolter. ";
var G__34459 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_bolter.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$2(G__34458,G__34459) : hoplon.core.dd.call(null,G__34458,G__34459));
})();
var G__34417 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("-") : hoplon.core.dt.call(null,"-"));
var G__34418 = (function (){var G__34460 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_none.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1(G__34460) : hoplon.core.dd.call(null,G__34460));
})();
var G__34419 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("WO") : hoplon.core.dt.call(null,"WO"));
var G__34420 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Waveoff") : hoplon.core.dd.call(null,"Waveoff"));
var G__34421 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("C") : hoplon.core.dt.call(null,"C"));
var G__34422 = (function (){var G__34461 = "Cut pass. ";
var G__34462 = cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$lsobot$grading_SLASH_cut_DASH_pass.cljs$core$IFn$_invoke$arity$1(lsobot.grading.grades));
return (hoplon.core.dd.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$2(G__34461,G__34462) : hoplon.core.dd.call(null,G__34461,G__34462));
})();
var G__34423 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("AW") : hoplon.core.dt.call(null,"AW"));
var G__34424 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("All the way") : hoplon.core.dd.call(null,"All the way"));
var G__34425 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("X") : hoplon.core.dt.call(null,"X"));
var G__34426 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("At the start. The first third of the approach.") : hoplon.core.dd.call(null,"At the start. The first third of the approach."));
var G__34427 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("IM") : hoplon.core.dt.call(null,"IM"));
var G__34428 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("In the middle. The middle third of the appraoch.") : hoplon.core.dd.call(null,"In the middle. The middle third of the appraoch."));
var G__34429 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("IC") : hoplon.core.dt.call(null,"IC"));
var G__34430 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("In close. The last third of the approach.") : hoplon.core.dd.call(null,"In close. The last third of the approach."));
var G__34431 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("AR") : hoplon.core.dt.call(null,"AR"));
var G__34432 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("At the ramp.") : hoplon.core.dd.call(null,"At the ramp."));
var G__34433 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("( )") : hoplon.core.dt.call(null,"( )"));
var G__34434 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Parentheses around any symbol signifies \u201Ca little\u201D (e.g., (F) means \u201Ca little fast\u201D).") : hoplon.core.dd.call(null,"Parentheses around any symbol signifies \u201Ca little\u201D (e.g., (F) means \u201Ca little fast\u201D)."));
var G__34435 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$class,"unacceptable","Comment") : hoplon.core.dt.call(null,cljs.core.cst$kw$class,"unacceptable","Comment"));
var G__34436 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Underline. For emphasis.") : hoplon.core.dd.call(null,"Underline. For emphasis."));
var G__34437 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("F") : hoplon.core.dt.call(null,"F"));
var G__34438 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Fast.") : hoplon.core.dd.call(null,"Fast."));
var G__34439 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("SLO") : hoplon.core.dt.call(null,"SLO"));
var G__34440 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Slow.") : hoplon.core.dd.call(null,"Slow."));
var G__34441 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("H") : hoplon.core.dt.call(null,"H"));
var G__34442 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("High.") : hoplon.core.dd.call(null,"High."));
var G__34443 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("LO") : hoplon.core.dt.call(null,"LO"));
var G__34444 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Low.") : hoplon.core.dd.call(null,"Low."));
var G__34445 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("L") : hoplon.core.dt.call(null,"L"));
var G__34446 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Left.") : hoplon.core.dd.call(null,"Left."));
var G__34447 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("R") : hoplon.core.dt.call(null,"R"));
var G__34448 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Right.") : hoplon.core.dd.call(null,"Right."));
var G__34449 = (hoplon.core.dt.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dt.cljs$core$IFn$_invoke$arity$1("LU") : hoplon.core.dt.call(null,"LU"));
var G__34450 = (hoplon.core.dd.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.dd.cljs$core$IFn$_invoke$arity$1("Lineup.") : hoplon.core.dd.call(null,"Lineup."));
return (hoplon.core.dl.cljs$core$IFn$_invoke$arity$42 ? hoplon.core.dl.cljs$core$IFn$_invoke$arity$42(G__34409,G__34410,G__34411,G__34412,G__34413,G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429,G__34430,G__34431,G__34432,G__34433,G__34434,G__34435,G__34436,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450) : hoplon.core.dl.call(null,G__34409,G__34410,G__34411,G__34412,G__34413,G__34414,G__34415,G__34416,G__34417,G__34418,G__34419,G__34420,G__34421,G__34422,G__34423,G__34424,G__34425,G__34426,G__34427,G__34428,G__34429,G__34430,G__34431,G__34432,G__34433,G__34434,G__34435,G__34436,G__34437,G__34438,G__34439,G__34440,G__34441,G__34442,G__34443,G__34444,G__34445,G__34446,G__34447,G__34448,G__34449,G__34450));
})()], null),cljs.core.cst$kw$glideslope,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("This graph shows glideslope and angle of attack (AoA) for the\n   selected approach. The large circles show the position of the\n   aircraft during the approach, and the colors show how much the\n   approach deviated from the ideal glideslope. Deviations are\n   categorized and colored as follows:") : hoplon.core.p.call(null,"This graph shows glideslope and angle of attack (AoA) for the\n   selected approach. The large circles show the position of the\n   aircraft during the approach, and the colors show how much the\n   approach deviated from the ideal glideslope. Deviations are\n   categorized and colored as follows:")),lsobot.help.color_table("glideslope"),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("The smaller circles show AoA deviation from the ideal via their\n   position relative to the glideslope circles. The farther the AoA\n   circles are from the corresponding glideslope circle, the larger\n   the deviation. For example, an AoA circle that is a long way below\n   the corresponding glideslope circle represents an AoA value that is\n   much lower than the ideal, indicating that the aircraft was too\n   fast at that point on the approach.") : hoplon.core.p.call(null,"The smaller circles show AoA deviation from the ideal via their\n   position relative to the glideslope circles. The farther the AoA\n   circles are from the corresponding glideslope circle, the larger\n   the deviation. For example, an AoA circle that is a long way below\n   the corresponding glideslope circle represents an AoA value that is\n   much lower than the ideal, indicating that the aircraft was too\n   fast at that point on the approach.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("An approach that is precisely on-speed will result in the AoA\n   circles being superimposed on the glideslope circles.") : hoplon.core.p.call(null,"An approach that is precisely on-speed will result in the AoA\n   circles being superimposed on the glideslope circles.")),(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("AoA data is colored using the same categories as the glideslope\n   data, described above.") : hoplon.core.p.call(null,"AoA data is colored using the same categories as the glideslope\n   data, described above."))], null),cljs.core.cst$kw$lineup,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hoplon.core.p.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$1("This graph shows lineup for the selected approach. Circles\n   show the position of the aircraft during the approach, andthe\n   colors show how much the lineup deviated from ideal. Deviations are\n   categorized and colored as follows:") : hoplon.core.p.call(null,"This graph shows lineup for the selected approach. Circles\n   show the position of the aircraft during the approach, andthe\n   colors show how much the lineup deviated from ideal. Deviations are\n   categorized and colored as follows:")),lsobot.help.color_table("lineup")], null)], null);
