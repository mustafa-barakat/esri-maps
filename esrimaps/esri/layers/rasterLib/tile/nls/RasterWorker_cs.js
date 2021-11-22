// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/tile/nls/RasterWorker_cs",{"dojo/cldr/nls/number":{decimal:",",group:"\u00a0",list:";",percentSign:"%",plusSign:"+",minusSign:"-",approximatelySign:"~",exponential:"E",superscriptingExponent:"\u00d7",perMille:"\u2030",infinity:"\u221e",nan:"NaN",timeSeparator:":",decimalFormat:"#,##0.###","decimalFormat-long":"000 bilion\u016f","decimalFormat-short":"000\u00a0bil'.'",scientificFormat:"#E0",percentFormat:"#,##0\u00a0%","currencySpacing-beforeCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]",
"currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-insertBetween":"\u00a0","currencySpacing-afterCurrency-currencyMatch":"[[:^S:]\x26[:^Z:]]","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-afterCurrency-insertBetween":"\u00a0",currencyFormat:"#,##0.00\u00a0\u00a4","currencyFormat-short":"000\u00a0bil'.'\u00a0\u00a4",_localized:{}},"dojo/cldr/nls/gregorian":{"months-format-abbr":"led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),
"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"months-format-wide":"ledna \u00fanora b\u0159ezna dubna kv\u011btna \u010dervna \u010dervence srpna z\u00e1\u0159\u00ed \u0159\u00edjna listopadu prosince".split(" "),"months-standAlone-abbr":"led \u00fano b\u0159e dub kv\u011b \u010dvn \u010dvc srp z\u00e1\u0159 \u0159\u00edj lis pro".split(" "),"months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"months-standAlone-wide":"leden \u00fanor b\u0159ezen duben kv\u011bten \u010derven \u010dervenec srpen z\u00e1\u0159\u00ed \u0159\u00edjen listopad prosinec".split(" "),
"days-format-abbr":"ne po \u00fat st \u010dt p\u00e1 so".split(" "),"days-format-narrow":"NP\u00daS\u010cPS".split(""),"days-format-short":"ne po \u00fat st \u010dt p\u00e1 so".split(" "),"days-format-wide":"ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),"days-standAlone-abbr":"ne po \u00fat st \u010dt p\u00e1 so".split(" "),"days-standAlone-narrow":"NP\u00daS\u010cPS".split(""),"days-standAlone-short":"ne po \u00fat st \u010dt p\u00e1 so".split(" "),
"days-standAlone-wide":"ned\u011ble pond\u011bl\u00ed \u00fater\u00fd st\u0159eda \u010dtvrtek p\u00e1tek sobota".split(" "),"quarters-format-abbr":["Q1","Q2","Q3","Q4"],"quarters-format-narrow":["1","2","3","4"],"quarters-format-wide":["1. \u010dtvrtlet\u00ed","2. \u010dtvrtlet\u00ed","3. \u010dtvrtlet\u00ed","4. \u010dtvrtlet\u00ed"],"quarters-standAlone-abbr":["Q1","Q2","Q3","Q4"],"quarters-standAlone-narrow":["1","2","3","4"],"quarters-standAlone-wide":["1. \u010dtvrtlet\u00ed","2. \u010dtvrtlet\u00ed",
"3. \u010dtvrtlet\u00ed","4. \u010dtvrtlet\u00ed"],"dayPeriods-format-abbr-am":"dop.","dayPeriods-format-abbr-pm":"odp.","dayPeriods-format-narrow-am":"dop.","dayPeriods-format-narrow-pm":"odp.","dayPeriods-format-wide-am":"dop.","dayPeriods-format-wide-pm":"odp.","dayPeriods-standAlone-abbr-am":"dop.","dayPeriods-standAlone-abbr-pm":"odp.","dayPeriods-standAlone-narrow-am":"dop.","dayPeriods-standAlone-narrow-pm":"odp.","dayPeriods-standAlone-wide-am":"dop.","dayPeriods-standAlone-wide-pm":"odp.",
eraNames:["p\u0159ed na\u0161\u00edm letopo\u010dtem","na\u0161eho letopo\u010dtu"],eraAbbr:["p\u0159. n. l.","n. l."],eraNarrow:["p\u0159.n.l.","n.l."],"dateFormat-full":"EEEE d. MMMM y","dateFormat-long":"d. MMMM y","dateFormat-medium":"d. M. y","dateFormat-short":"dd.MM.yy","timeFormat-full":"H:mm:ss zzzz","timeFormat-long":"H:mm:ss z","timeFormat-medium":"H:mm:ss","timeFormat-short":"H:mm","dateTimeFormat-full":"{1} {0}","dateTimeFormat-long":"{1} {0}","dateTimeFormat-medium":"{1} {0}","dateTimeFormat-short":"{1} {0}",
"dateFormatItem-Bh":"h B","dateFormatItem-Bhm":"h:mm B","dateFormatItem-Bhms":"h:mm:ss B","dateFormatItem-d":"d.","dateFormatItem-E":"ccc","dateFormatItem-EBhm":"E h:mm B","dateFormatItem-EBhms":"E h:mm:ss B","dateFormatItem-Ed":"E d.","dateFormatItem-Ehm":"E h:mm a","dateFormatItem-EHm":"E H:mm","dateFormatItem-Ehms":"E h:mm:ss a","dateFormatItem-EHms":"E H:mm:ss","dateFormatItem-Gy":"y G","dateFormatItem-GyMMM":"LLLL y G","dateFormatItem-GyMMMd":"d. M. y G","dateFormatItem-GyMMMEd":"E d. M. y G",
"dateFormatItem-h":"h a","dateFormatItem-H":"H","dateFormatItem-hm":"h:mm a","dateFormatItem-Hm":"H:mm","dateFormatItem-hms":"h:mm:ss a","dateFormatItem-Hms":"H:mm:ss","dateFormatItem-hmsv":"h:mm:ss a v","dateFormatItem-Hmsv":"H:mm:ss v","dateFormatItem-hmv":"h:mm a v","dateFormatItem-Hmv":"H:mm v","dateFormatItem-M":"L","dateFormatItem-Md":"d. M.","dateFormatItem-MEd":"E d. M.","dateFormatItem-MMM":"LLL","dateFormatItem-MMMd":"d. M.","dateFormatItem-MMMEd":"E d. M.","dateFormatItem-MMMMd":"d. MMMM",
"dateFormatItem-MMMMW":"W. 't\u00fdden' MMMM","dateFormatItem-ms":"mm:ss","dateFormatItem-y":"y","dateFormatItem-yM":"M/y","dateFormatItem-yMd":"d. M. y","dateFormatItem-yMEd":"E d. M. y","dateFormatItem-yMMM":"LLLL y","dateFormatItem-yMMMd":"d. M. y","dateFormatItem-yMMMEd":"E d. M. y","dateFormatItem-yMMMM":"LLLL y","dateFormatItem-yQQQ":"QQQ y","dateFormatItem-yQQQQ":"QQQQ y","dateFormatItem-yw":"w. 't\u00fdden' 'roku' Y","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}",
"dateTimeFormats-appendItem-Era":"{1} {0}","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dateTimeFormats-appendItem-Timezone":"{0} {1}","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})","dateTimeFormats-appendItem-Year":"{1} {0}","field-era":"letopo\u010det","field-era-short":"letop.",
"field-era-narrow":"let.","field-year":"rok","field-year-relative+-1":"minul\u00fd rok","field-year-relative+0":"tento rok","field-year-relative+1":"p\u0159\u00ed\u0161t\u00ed rok","field-year-short":"r.","field-year-short-relative+-1":"minul\u00fd rok","field-year-short-relative+0":"tento rok","field-year-short-relative+1":"p\u0159\u00ed\u0161t\u00ed rok","field-year-narrow":"r.","field-year-narrow-relative+-1":"minul\u00fd rok","field-year-narrow-relative+0":"tento rok","field-year-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed rok",
"field-quarter":"\u010dtvrtlet\u00ed","field-quarter-relative+-1":"minul\u00e9 \u010dtvrtlet\u00ed","field-quarter-relative+0":"toto \u010dtvrtlet\u00ed","field-quarter-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtlet\u00ed","field-quarter-short":"Q","field-quarter-short-relative+-1":"minul\u00e9 \u010dtvrtlet\u00ed","field-quarter-short-relative+0":"toto \u010dtvrtlet\u00ed","field-quarter-short-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtlet\u00ed","field-quarter-narrow":"Q","field-quarter-narrow-relative+-1":"minul\u00e9 \u010dtvrtlet\u00ed",
"field-quarter-narrow-relative+0":"toto \u010dtvrtlet\u00ed","field-quarter-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtlet\u00ed","field-month":"m\u011bs\u00edc","field-month-relative+-1":"minul\u00fd m\u011bs\u00edc","field-month-relative+0":"tento m\u011bs\u00edc","field-month-relative+1":"p\u0159\u00ed\u0161t\u00ed m\u011bs\u00edc","field-month-short":"m\u011bs.","field-month-short-relative+-1":"minul\u00fd m\u011bs.","field-month-short-relative+0":"tento m\u011bs.","field-month-short-relative+1":"p\u0159\u00ed\u0161t\u00ed m\u011bs.",
"field-month-narrow":"m\u011bs.","field-month-narrow-relative+-1":"minul\u00fd m\u011bs.","field-month-narrow-relative+0":"tento m\u011bs.","field-month-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed m\u011bs.","field-week":"t\u00fdden","field-week-relative+-1":"minul\u00fd t\u00fdden","field-week-relative+0":"tento t\u00fdden","field-week-relative+1":"p\u0159\u00ed\u0161t\u00ed t\u00fdden","field-week-short":"t\u00fdd.","field-week-short-relative+-1":"minul\u00fd t\u00fdd.","field-week-short-relative+0":"tento t\u00fdd.",
"field-week-short-relative+1":"p\u0159\u00ed\u0161t\u00ed t\u00fdd.","field-week-narrow":"t\u00fdd.","field-week-narrow-relative+-1":"minul\u00fd t\u00fdd.","field-week-narrow-relative+0":"tento t\u00fdd.","field-week-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed t\u00fdd.","field-weekOfMonth":"t\u00fdden v m\u011bs\u00edci","field-weekOfMonth-short":"t\u00fdd. v m.","field-weekOfMonth-narrow":"t\u00fdd. v m.","field-day":"den","field-day-relative+-1":"v\u010dera","field-day-relative+0":"dnes","field-day-relative+1":"z\u00edtra",
"field-day-short":"den","field-day-short-relative+-1":"v\u010dera","field-day-short-relative+0":"dnes","field-day-short-relative+1":"z\u00edtra","field-day-narrow":"den","field-day-narrow-relative+-1":"v\u010dera","field-day-narrow-relative+0":"dnes","field-day-narrow-relative+1":"z\u00edtra","field-dayOfYear":"den v roce","field-dayOfYear-short":"den v r.","field-dayOfYear-narrow":"d. v r.","field-weekday":"den v t\u00fddnu","field-weekday-short":"den v t\u00fdd.","field-weekday-narrow":"d. v t\u00fdd.",
"field-weekdayOfMonth":"den t\u00fddne v m\u011bs\u00edci","field-weekdayOfMonth-short":"den t\u00fdd. v m\u011bs.","field-weekdayOfMonth-narrow":"d. t\u00fdd. v m\u011bs.","field-sun-relative+-1":"minulou ned\u011bli","field-sun-relative+0":"tuto ned\u011bli","field-sun-relative+1":"p\u0159\u00ed\u0161t\u00ed ned\u011bli","field-sun-short-relative+-1":"minulou ned\u011bli","field-sun-short-relative+0":"tuto ned\u011bli","field-sun-short-relative+1":"p\u0159\u00ed\u0161t\u00ed ned\u011bli","field-sun-narrow-relative+-1":"minulou ned\u011bli",
"field-sun-narrow-relative+0":"tuto ned\u011bli","field-sun-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed ned\u011bli","field-mon-relative+-1":"minul\u00e9 pond\u011bl\u00ed","field-mon-relative+0":"toto pond\u011bl\u00ed","field-mon-relative+1":"p\u0159\u00ed\u0161t\u00ed pond\u011bl\u00ed","field-mon-short-relative+-1":"minul\u00e9 pond\u011bl\u00ed","field-mon-short-relative+0":"toto pond\u011bl\u00ed","field-mon-short-relative+1":"p\u0159\u00ed\u0161t\u00ed pond\u011bl\u00ed","field-mon-narrow-relative+-1":"minul\u00e9 pond\u011bl\u00ed",
"field-mon-narrow-relative+0":"toto pond\u011bl\u00ed","field-mon-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed pond\u011bl\u00ed","field-tue-relative+-1":"minul\u00e9 \u00fater\u00fd","field-tue-relative+0":"toto \u00fater\u00fd","field-tue-relative+1":"p\u0159\u00ed\u0161t\u00ed \u00fater\u00fd","field-tue-short-relative+-1":"minul\u00e9 \u00fater\u00fd","field-tue-short-relative+0":"toto \u00fater\u00fd","field-tue-short-relative+1":"p\u0159\u00ed\u0161t\u00ed \u00fater\u00fd","field-tue-narrow-relative+-1":"minul\u00e9 \u00fater\u00fd",
"field-tue-narrow-relative+0":"toto \u00fater\u00fd","field-tue-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed \u00fater\u00fd","field-wed-relative+-1":"minulou st\u0159edu","field-wed-relative+0":"tuto st\u0159edu","field-wed-relative+1":"p\u0159\u00ed\u0161t\u00ed st\u0159edu","field-wed-short-relative+-1":"minulou st\u0159edu","field-wed-short-relative+0":"tuto st\u0159edu","field-wed-short-relative+1":"p\u0159\u00ed\u0161t\u00ed st\u0159edu","field-wed-narrow-relative+-1":"minulou st\u0159edu",
"field-wed-narrow-relative+0":"tuto st\u0159edu","field-wed-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed st\u0159edu","field-thu-relative+-1":"minul\u00fd \u010dtvrtek","field-thu-relative+0":"tento \u010dtvrtek","field-thu-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtek","field-thu-short-relative+-1":"minul\u00fd \u010dtvrtek","field-thu-short-relative+0":"tento \u010dtvrtek","field-thu-short-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtek","field-thu-narrow-relative+-1":"minul\u00fd \u010dtvrtek",
"field-thu-narrow-relative+0":"tento \u010dtvrtek","field-thu-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed \u010dtvrtek","field-fri-relative+-1":"minul\u00fd p\u00e1tek","field-fri-relative+0":"tento p\u00e1tek","field-fri-relative+1":"p\u0159\u00ed\u0161t\u00ed p\u00e1tek","field-fri-short-relative+-1":"minul\u00fd p\u00e1tek","field-fri-short-relative+0":"tento p\u00e1tek","field-fri-short-relative+1":"p\u0159\u00ed\u0161t\u00ed p\u00e1tek","field-fri-narrow-relative+-1":"minul\u00fd p\u00e1tek",
"field-fri-narrow-relative+0":"tento p\u00e1tek","field-fri-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed p\u00e1tek","field-sat-relative+-1":"minulou sobotu","field-sat-relative+0":"tuto sobotu","field-sat-relative+1":"p\u0159\u00ed\u0161t\u00ed sobotu","field-sat-short-relative+-1":"minulou sobotu","field-sat-short-relative+0":"tuto sobotu","field-sat-short-relative+1":"p\u0159\u00ed\u0161t\u00ed sobotu","field-sat-narrow-relative+-1":"minulou sobotu","field-sat-narrow-relative+0":"tuto sobotu",
"field-sat-narrow-relative+1":"p\u0159\u00ed\u0161t\u00ed sobotu","field-dayperiod-short":"\u010d\u00e1st dne","field-dayperiod":"\u010d\u00e1st dne","field-dayperiod-narrow":"\u010d\u00e1st d.","field-hour":"hodina","field-hour-relative+0":"tuto hodinu","field-hour-short":"h","field-hour-short-relative+0":"tuto hodinu","field-hour-narrow":"h","field-hour-narrow-relative+0":"tuto hodinu","field-minute":"minuta","field-minute-relative+0":"tuto minutu","field-minute-short":"min","field-minute-short-relative+0":"tuto minutu",
"field-minute-narrow":"min","field-minute-narrow-relative+0":"tuto minutu","field-second":"sekunda","field-second-relative+0":"nyn\u00ed","field-second-short":"s","field-second-short-relative+0":"nyn\u00ed","field-second-narrow":"s","field-second-narrow-relative+0":"nyn\u00ed","field-zone":"\u010dasov\u00e9 p\u00e1smo","field-zone-short":"\u010das. p\u00e1smo","field-zone-narrow":"p\u00e1smo","dayPeriods-format-abbr-midnight":"p\u016fln.","dayPeriods-format-abbr-noon":"pol.","dayPeriods-format-abbr-morning1":"r.",
"dayPeriods-format-abbr-morning2":"dop.","dayPeriods-format-abbr-afternoon1":"odp.","dayPeriods-format-abbr-evening1":"ve\u010d.","dayPeriods-format-abbr-night1":"v n.","dayPeriods-format-narrow-midnight":"p\u016fl.","dayPeriods-format-narrow-noon":"pol.","dayPeriods-format-narrow-morning1":"r.","dayPeriods-format-narrow-morning2":"d.","dayPeriods-format-narrow-afternoon1":"o.","dayPeriods-format-narrow-evening1":"v.","dayPeriods-format-narrow-night1":"n.","dayPeriods-format-wide-midnight":"p\u016flnoc",
"dayPeriods-format-wide-noon":"poledne","dayPeriods-format-wide-morning1":"r\u00e1no","dayPeriods-format-wide-morning2":"dopoledne","dayPeriods-format-wide-afternoon1":"odpoledne","dayPeriods-format-wide-evening1":"ve\u010der","dayPeriods-format-wide-night1":"v noci","dayPeriods-standAlone-abbr-midnight":"p\u016flnoc","dayPeriods-standAlone-abbr-noon":"poledne","dayPeriods-standAlone-abbr-morning1":"r\u00e1no","dayPeriods-standAlone-abbr-morning2":"dopoledne","dayPeriods-standAlone-abbr-afternoon1":"odpoledne",
"dayPeriods-standAlone-abbr-evening1":"ve\u010der","dayPeriods-standAlone-abbr-night1":"noc","dayPeriods-standAlone-narrow-midnight":"p\u016fl.","dayPeriods-standAlone-narrow-noon":"pol.","dayPeriods-standAlone-narrow-morning1":"r\u00e1no","dayPeriods-standAlone-narrow-morning2":"dop.","dayPeriods-standAlone-narrow-afternoon1":"odp.","dayPeriods-standAlone-narrow-evening1":"ve\u010d.","dayPeriods-standAlone-narrow-night1":"noc","dayPeriods-standAlone-wide-midnight":"p\u016flnoc","dayPeriods-standAlone-wide-noon":"poledne",
"dayPeriods-standAlone-wide-morning1":"r\u00e1no","dayPeriods-standAlone-wide-morning2":"dopoledne","dayPeriods-standAlone-wide-afternoon1":"odpoledne","dayPeriods-standAlone-wide-evening1":"ve\u010der","dayPeriods-standAlone-wide-night1":"noc","dateFormatItem-GyMMMMd":"d. MMMM y G","dateFormatItem-GyMMMMEd":"E d. MMMM y G","dateFormatItem-MMMMEd":"E d. MMMM","dateFormatItem-yMMMMd":"d. MMMM y","dateFormatItem-yMMMMEd":"E d. MMMM y","field-day-relative+-2":"p\u0159edev\u010d\u00edrem","field-day-relative+2":"poz\u00edt\u0159\u00ed",
"field-day-short-relative+-2":"p\u0159edev\u010d\u00edrem","field-day-short-relative+2":"poz\u00edt\u0159\u00ed","field-day-narrow-relative+-2":"p\u0159edev\u010d\u00edrem","field-day-narrow-relative+2":"poz\u00edt\u0159\u00ed",_localized:{}}});