// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_nl",{"dojo/cldr/nls/number":{decimal:",",group:".",list:";",percentSign:"%",plusSign:"+",minusSign:"-",approximatelySign:"~",exponential:"E",superscriptingExponent:"\u00d7",perMille:"\u2030",infinity:"\u221e",nan:"NaN",timeSeparator:":",decimalFormat:"#,##0.###","decimalFormat-long":"000 biljoen","decimalFormat-short":"000\u00a0bln'.'",scientificFormat:"#E0",percentFormat:"#,##0%","currencySpacing-beforeCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]",
"currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-insertBetween":"\u00a0","currencySpacing-afterCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-afterCurrency-insertBetween":"\u00a0",currencyFormat:"\u00a4\u00a0#,##0.00;(\u00a4\u00a0#,##0.00)","currencyFormat-short":"\u00a4\u00a0000\u00a0bln'.'",_localized:{}},"dojo/cldr/nls/gregorian":{"months-format-abbr":"jan. feb. mrt. apr. mei jun. jul. aug. sep. okt. nov. dec.".split(" "),
"months-format-narrow":"JFMAMJJASOND".split(""),"months-format-wide":"januari februari maart april mei juni juli augustus september oktober november december".split(" "),"months-standAlone-abbr":"jan. feb. mrt. apr. mei jun. jul. aug. sep. okt. nov. dec.".split(" "),"months-standAlone-narrow":"JFMAMJJASOND".split(""),"months-standAlone-wide":"januari februari maart april mei juni juli augustus september oktober november december".split(" "),"days-format-abbr":"zo ma di wo do vr za".split(" "),"days-format-narrow":"ZMDWDVZ".split(""),
"days-format-short":"zo ma di wo do vr za".split(" "),"days-format-wide":"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),"days-standAlone-abbr":"zo ma di wo do vr za".split(" "),"days-standAlone-narrow":"ZMDWDVZ".split(""),"days-standAlone-short":"zo ma di wo do vr za".split(" "),"days-standAlone-wide":"zondag maandag dinsdag woensdag donderdag vrijdag zaterdag".split(" "),"quarters-format-abbr":["K1","K2","K3","K4"],"quarters-format-narrow":["1","2","3","4"],"quarters-format-wide":["1e kwartaal",
"2e kwartaal","3e kwartaal","4e kwartaal"],"quarters-standAlone-abbr":["K1","K2","K3","K4"],"quarters-standAlone-narrow":["1","2","3","4"],"quarters-standAlone-wide":["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"],"dayPeriods-format-abbr-am":"a.m.","dayPeriods-format-abbr-pm":"p.m.","dayPeriods-format-narrow-am":"a.m.","dayPeriods-format-narrow-pm":"p.m.","dayPeriods-format-wide-am":"a.m.","dayPeriods-format-wide-pm":"p.m.","dayPeriods-standAlone-abbr-am":"a.m.","dayPeriods-standAlone-abbr-pm":"p.m.",
"dayPeriods-standAlone-narrow-am":"a.m.","dayPeriods-standAlone-narrow-pm":"p.m.","dayPeriods-standAlone-wide-am":"a.m.","dayPeriods-standAlone-wide-pm":"p.m.",eraNames:["voor Christus","na Christus"],eraAbbr:["v.Chr.","n.Chr."],eraNarrow:["v.C.","vgj","n.C.","gj"],"dateFormat-full":"EEEE d MMMM y","dateFormat-long":"d MMMM y","dateFormat-medium":"d MMM y","dateFormat-short":"dd-MM-y","timeFormat-full":"HH:mm:ss zzzz","timeFormat-long":"HH:mm:ss z","timeFormat-medium":"HH:mm:ss","timeFormat-short":"HH:mm",
"dateTimeFormat-full":"{1} 'om' {0}","dateTimeFormat-long":"{1} 'om' {0}","dateTimeFormat-medium":"{1} {0}","dateTimeFormat-short":"{1} {0}","dateFormatItem-Bh":"h B","dateFormatItem-Bhm":"h:mm B","dateFormatItem-Bhms":"h:mm:ss B","dateFormatItem-d":"d","dateFormatItem-E":"ccc","dateFormatItem-EBhm":"E h:mm B","dateFormatItem-EBhms":"E h:mm:ss B","dateFormatItem-Ed":"E d","dateFormatItem-Ehm":"E h:mm a","dateFormatItem-EHm":"E HH:mm","dateFormatItem-Ehms":"E h:mm:ss a","dateFormatItem-EHms":"E HH:mm:ss",
"dateFormatItem-Gy":"y G","dateFormatItem-GyMMM":"MMM y G","dateFormatItem-GyMMMd":"d MMM y G","dateFormatItem-GyMMMEd":"E d MMM y G","dateFormatItem-h":"h a","dateFormatItem-H":"HH","dateFormatItem-hm":"h:mm a","dateFormatItem-Hm":"HH:mm","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hmsv":"h:mm:ss a v","dateFormatItem-Hmsv":"HH:mm:ss v","dateFormatItem-hmv":"h:mm a v","dateFormatItem-Hmv":"HH:mm v","dateFormatItem-M":"L","dateFormatItem-Md":"d-M","dateFormatItem-MEd":"E d-M",
"dateFormatItem-MMM":"LLL","dateFormatItem-MMMd":"d MMM","dateFormatItem-MMMEd":"E d MMM","dateFormatItem-MMMMd":"d MMMM","dateFormatItem-MMMMW":"'week' W 'van' MMMM","dateFormatItem-ms":"mm:ss","dateFormatItem-y":"y","dateFormatItem-yM":"M-y","dateFormatItem-yMd":"d-M-y","dateFormatItem-yMEd":"E d-M-y","dateFormatItem-yMMM":"MMM y","dateFormatItem-yMMMd":"d MMM y","dateFormatItem-yMMMEd":"E d MMM y","dateFormatItem-yMMMM":"MMMM y","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yQQQQ":"QQQQ y","dateFormatItem-yw":"'week' w 'in' Y",
"dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateTimeFormats-appendItem-Era":"{1} {0}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Year":"{1} {0}","field-era":"tijdperk","field-era-short":"tijdperk","field-era-narrow":"tijdperk","field-year":"jaar","field-year-relative+-1":"vorig jaar","field-year-relative+0":"dit jaar","field-year-relative+1":"volgend jaar","field-year-short":"jr","field-year-short-relative+-1":"vorig jaar","field-year-short-relative+0":"dit jaar","field-year-short-relative+1":"volgend jaar","field-year-narrow":"jr","field-year-narrow-relative+-1":"vorig jaar","field-year-narrow-relative+0":"dit jaar",
"field-year-narrow-relative+1":"volgend jaar","field-quarter":"kwartaal","field-quarter-relative+-1":"vorig kwartaal","field-quarter-relative+0":"dit kwartaal","field-quarter-relative+1":"volgend kwartaal","field-quarter-short":"kwartaal","field-quarter-short-relative+-1":"vorig kwartaal","field-quarter-short-relative+0":"dit kwartaal","field-quarter-short-relative+1":"volgend kwartaal","field-quarter-narrow":"kwartaal","field-quarter-narrow-relative+-1":"vorig kwartaal","field-quarter-narrow-relative+0":"dit kwartaal",
"field-quarter-narrow-relative+1":"volgend kwartaal","field-month":"maand","field-month-relative+-1":"vorige maand","field-month-relative+0":"deze maand","field-month-relative+1":"volgende maand","field-month-short":"mnd","field-month-short-relative+-1":"vorige maand","field-month-short-relative+0":"deze maand","field-month-short-relative+1":"volgende maand","field-month-narrow":"mnd","field-month-narrow-relative+-1":"vorige maand","field-month-narrow-relative+0":"deze maand","field-month-narrow-relative+1":"volgende maand",
"field-week":"week","field-week-relative+-1":"vorige week","field-week-relative+0":"deze week","field-week-relative+1":"volgende week","field-week-short":"wk","field-week-short-relative+-1":"vorige week","field-week-short-relative+0":"deze week","field-week-short-relative+1":"volgende week","field-week-narrow":"wk","field-week-narrow-relative+-1":"vorige week","field-week-narrow-relative+0":"deze week","field-week-narrow-relative+1":"volgende week","field-weekOfMonth":"week van de maand","field-weekOfMonth-short":"wk van de mnd",
"field-weekOfMonth-narrow":"wk v.d. mnd","field-day":"dag","field-day-relative+-1":"gisteren","field-day-relative+0":"vandaag","field-day-relative+1":"morgen","field-day-short":"dag","field-day-short-relative+-1":"gisteren","field-day-short-relative+0":"vandaag","field-day-short-relative+1":"morgen","field-day-narrow":"dag","field-day-narrow-relative+-1":"gisteren","field-day-narrow-relative+0":"vandaag","field-day-narrow-relative+1":"morgen","field-dayOfYear":"dag van het jaar","field-dayOfYear-short":"dag van het jr",
"field-dayOfYear-narrow":"dag v.h. jr","field-weekday":"dag van de week","field-weekday-short":"dag van de wk","field-weekday-narrow":"dag v.d. wk","field-weekdayOfMonth":"weekdag van de maand","field-weekdayOfMonth-short":"wkdag van de mnd","field-weekdayOfMonth-narrow":"wkdag v.d. mnd","field-sun-relative+-1":"afgelopen zondag","field-sun-relative+0":"deze zondag","field-sun-relative+1":"volgende week zondag","field-sun-short-relative+-1":"afgelopen zon.","field-sun-short-relative+0":"deze zon.",
"field-sun-short-relative+1":"volgende week zon.","field-sun-narrow-relative+-1":"afgelopen zo","field-sun-narrow-relative+0":"deze zo","field-sun-narrow-relative+1":"volgende week zo","field-mon-relative+-1":"afgelopen maandag","field-mon-relative+0":"deze maandag","field-mon-relative+1":"volgende week maandag","field-mon-short-relative+-1":"afgelopen maan.","field-mon-short-relative+0":"deze maan.","field-mon-short-relative+1":"volgende week maan.","field-mon-narrow-relative+-1":"afgelopen ma",
"field-mon-narrow-relative+0":"deze ma","field-mon-narrow-relative+1":"volgende week ma","field-tue-relative+-1":"afgelopen dinsdag","field-tue-relative+0":"deze dinsdag","field-tue-relative+1":"volgende week dinsdag","field-tue-short-relative+-1":"afgelopen dins.","field-tue-short-relative+0":"deze dins.","field-tue-short-relative+1":"volgende week dins.","field-tue-narrow-relative+-1":"afgelopen di","field-tue-narrow-relative+0":"deze di","field-tue-narrow-relative+1":"volgende week di","field-wed-relative+-1":"afgelopen woensdag",
"field-wed-relative+0":"deze woensdag","field-wed-relative+1":"volgende week woensdag","field-wed-short-relative+-1":"afgelopen woens.","field-wed-short-relative+0":"deze woens.","field-wed-short-relative+1":"volgende week woens.","field-wed-narrow-relative+-1":"afgelopen wo","field-wed-narrow-relative+0":"deze wo","field-wed-narrow-relative+1":"volgende week wo","field-thu-relative+-1":"afgelopen donderdag","field-thu-relative+0":"deze donderdag","field-thu-relative+1":"volgende week donderdag",
"field-thu-short-relative+-1":"afgelopen donder.","field-thu-short-relative+0":"deze donder.","field-thu-short-relative+1":"volgende week donder.","field-thu-narrow-relative+-1":"afgelopen do","field-thu-narrow-relative+0":"deze do","field-thu-narrow-relative+1":"volgende week do","field-fri-relative+-1":"afgelopen vrijdag","field-fri-relative+0":"deze vrijdag","field-fri-relative+1":"volgende week vrijdag","field-fri-short-relative+-1":"afgelopen vrij.","field-fri-short-relative+0":"deze vrij.",
"field-fri-short-relative+1":"volgende week vrij.","field-fri-narrow-relative+-1":"afgelopen vr","field-fri-narrow-relative+0":"deze vr","field-fri-narrow-relative+1":"volgende week vr","field-sat-relative+-1":"afgelopen zaterdag","field-sat-relative+0":"deze zaterdag","field-sat-relative+1":"volgende week zaterdag","field-sat-short-relative+-1":"afgelopen zater.","field-sat-short-relative+0":"deze zater.","field-sat-short-relative+1":"volgende week zater.","field-sat-narrow-relative+-1":"afgelopen za",
"field-sat-narrow-relative+0":"deze za","field-sat-narrow-relative+1":"volgende week za","field-dayperiod-short":"a.m./p.m.","field-dayperiod":"a.m./p.m.","field-dayperiod-narrow":"a.m./p.m.","field-hour":"uur","field-hour-relative+0":"binnen een uur","field-hour-short":"uur","field-hour-short-relative+0":"binnen een uur","field-hour-narrow":"u","field-hour-narrow-relative+0":"binnen een uur","field-minute":"minuut","field-minute-relative+0":"binnen een minuut","field-minute-short":"min","field-minute-short-relative+0":"binnen een minuut",
"field-minute-narrow":"min","field-minute-narrow-relative+0":"binnen een minuut","field-second":"seconde","field-second-relative+0":"nu","field-second-short":"sec","field-second-short-relative+0":"nu","field-second-narrow":"s","field-second-narrow-relative+0":"nu","field-zone":"tijdzone","field-zone-short":"zone","field-zone-narrow":"zone","dayPeriods-format-abbr-midnight":"middernacht","dayPeriods-format-abbr-morning1":"\u2019s ochtends","dayPeriods-format-abbr-afternoon1":"\u2019s middags","dayPeriods-format-abbr-evening1":"\u2019s avonds",
"dayPeriods-format-abbr-night1":"\u2019s nachts","dayPeriods-format-narrow-midnight":"middernacht","dayPeriods-format-narrow-morning1":"\u2019s ochtends","dayPeriods-format-narrow-afternoon1":"\u2019s middags","dayPeriods-format-narrow-evening1":"\u2019s avonds","dayPeriods-format-narrow-night1":"\u2019s nachts","dayPeriods-format-wide-midnight":"middernacht","dayPeriods-format-wide-morning1":"\u2019s ochtends","dayPeriods-format-wide-afternoon1":"\u2019s middags","dayPeriods-format-wide-evening1":"\u2019s avonds",
"dayPeriods-format-wide-night1":"\u2019s nachts","dayPeriods-standAlone-abbr-midnight":"middernacht","dayPeriods-standAlone-abbr-morning1":"ochtend","dayPeriods-standAlone-abbr-afternoon1":"middag","dayPeriods-standAlone-abbr-evening1":"avond","dayPeriods-standAlone-abbr-night1":"nacht","dayPeriods-standAlone-narrow-midnight":"middernacht","dayPeriods-standAlone-narrow-morning1":"ochtend","dayPeriods-standAlone-narrow-afternoon1":"middag","dayPeriods-standAlone-narrow-evening1":"avond","dayPeriods-standAlone-narrow-night1":"nacht",
"dayPeriods-standAlone-wide-midnight":"middernacht","dayPeriods-standAlone-wide-morning1":"ochtend","dayPeriods-standAlone-wide-afternoon1":"middag","dayPeriods-standAlone-wide-evening1":"avond","dayPeriods-standAlone-wide-night1":"nacht","field-day-relative+-2":"eergisteren","field-day-relative+2":"overmorgen","field-day-short-relative+-2":"eergisteren","field-day-short-relative+2":"overmorgen","field-day-narrow-relative+-2":"eergisteren","field-day-narrow-relative+2":"overmorgen",_localized:{}}});