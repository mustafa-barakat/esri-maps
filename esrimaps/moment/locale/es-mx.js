//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/es-mx",["../moment"],a):a(b.moment)})(this,function(b){var a="ene. feb. mar. abr. may. jun. jul. ago. sep. oct. nov. dic.".split(" "),f="ene feb mar abr may jun jul ago sep oct nov dic".split(" "),c=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],e=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
return b.defineLocale("es-mx",{months:"enero febrero marzo abril mayo junio julio agosto septiembre octubre noviembre diciembre".split(" "),monthsShort:function(d,g){return d?/-MMM-/.test(g)?f[d.month()]:a[d.month()]:a},monthsRegex:e,monthsShortRegex:e,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:c,longMonthsParse:c,
shortMonthsParse:c,weekdays:"domingo lunes martes mi\u00e9rcoles jueves viernes s\u00e1bado".split(" "),weekdaysShort:"dom. lun. mar. mi\u00e9. jue. vie. s\u00e1b.".split(" "),weekdaysMin:"do lu ma mi ju vi s\u00e1".split(" "),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\u00f1ana a la"+
(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\u00eda",dd:"%d d\u00edas",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",
y:"un a\u00f1o",yy:"%d a\u00f1os"},dayOfMonthOrdinalParse:/\d{1,2}\u00ba/,ordinal:"%d\u00ba",week:{dow:0,doy:4},invalidDate:"Fecha inv\u00e1lida"})});