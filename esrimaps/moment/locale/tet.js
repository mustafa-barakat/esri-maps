//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/tet",["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("tet",{months:"Janeiru Fevereiru Marsu Abril Maiu Ju\u00f1u Jullu Agustu Setembru Outubru Novembru Dezembru".split(" "),monthsShort:"Jan Fev Mar Abr Mai Jun Jul Ago Set Out Nov Dez".split(" "),weekdays:"Domingu Segunda Tersa Kuarta Kinta Sesta Sabadu".split(" "),
weekdaysShort:"Dom Seg Ters Kua Kint Sest Sab".split(" "),weekdaysMin:"Do Seg Te Ku Ki Ses Sa".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"segundu balun",ss:"segundu %d",m:"minutu ida",mm:"minutu %d",
h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(a){var c=a%10;return a+(1===~~(a%100/10)?"th":1===c?"st":2===c?"nd":3===c?"rd":"th")},week:{dow:1,doy:4}})});