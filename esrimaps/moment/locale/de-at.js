//>>built
(function(c,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define("moment/locale/de-at",["../moment"],a):a(c.moment)})(this,function(c){function a(b,e,d,f){b={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[b+" Tage",b+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[b+" Monate",b+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[b+
" Jahre",b+" Jahren"]};return e?b[d][0]:b[d][1]}return c.defineLocale("de-at",{months:"J\u00e4nner Februar M\u00e4rz April Mai Juni Juli August September Oktober November Dezember".split(" "),monthsShort:"J\u00e4n. Feb. M\u00e4rz Apr. Mai Juni Juli Aug. Sep. Okt. Nov. Dez.".split(" "),monthsParseExact:!0,weekdays:"Sonntag Montag Dienstag Mittwoch Donnerstag Freitag Samstag".split(" "),weekdaysShort:"So. Mo. Di. Mi. Do. Fr. Sa.".split(" "),weekdaysMin:"So Mo Di Mi Do Fr Sa".split(" "),weekdaysParseExact:!0,
longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:a,mm:"%d Minuten",h:a,hh:"%d Stunden",d:a,dd:a,w:a,ww:"%d Wochen",M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,
ordinal:"%d.",week:{dow:1,doy:4}})});