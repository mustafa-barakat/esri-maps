//>>built
define("dojox/calendar/time",["dojo/_base/lang","dojo/date","dojo/cldr/supplemental","dojo/date/stamp"],function(m,g,h,k){var f={newDate:function(a,c){c=c||Date;if("number"==typeof a)return new c(a);if(a.getTime)return new c(a.getTime());if(a.toGregorian){var b=a.toGregorian();c!==Date&&(b=new c(b.getTime()));return b}if("string"==typeof a){b=k.fromISOString(a);if(null===b)throw Error("Cannot parse date string ("+a+'), specify a "decodeDate" function that translates this string into a Date object');
c!==Date&&(b=new c(b.getTime()));return b}},floorToDay:function(a,c,b){b=b||Date;c||(a=f.newDate(a,b));a.setHours(0,0,0,0);return a},floorToMonth:function(a,c,b){b=b||Date;c||(a=f.newDate(a,b));a.setDate(1);a.setHours(0,0,0,0);return a},floorToWeek:function(a,c,b,d,e){c=c||Date;b=b||g;d=void 0==d||0>d?h.getFirstDayOfWeek(e):d;e=a.getDay();return e==d?a:f.floorToDay(b.add(a,"day",e>d?-e+d:-e+d-7),!0,c)},floor:function(a,c,b,d,e){d=f.floorToDay(a,d,e);switch(c){case "week":return f.floorToWeek(d,firstDayOfWeek,
dateModule,locale);case "minute":d.setHours(a.getHours());d.setMinutes(Math.floor(a.getMinutes()/b)*b);break;case "hour":d.setHours(Math.floor(a.getHours()/b)*b)}return d},isStartOfDay:function(a,c,b){b=b||g;return 0==b.compare(this.floorToDay(a,!1,c),a)},isToday:function(a,c){c=c||Date;c=new c;return a.getFullYear()==c.getFullYear()&&a.getMonth()==c.getMonth()&&a.getDate()==c.getDate()},isOverlapping:function(a,c,b,d,e,l){if(null==c||null==d||null==b||null==e)return!1;a=a.dateModule;if(l){if(1==
a.compare(c,e)||1==a.compare(d,b))return!1}else if(-1!=a.compare(c,e)||-1!=a.compare(d,b))return!1;return!0}};return f});