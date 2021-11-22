//>>built
define("dojox/gantt/GanttChart","./GanttProjectItem ./GanttResourceItem ./GanttProjectControl ./GanttTaskControl ./GanttTaskItem ./TabMenu dijit/Tooltip dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/date/locale dojo/request dojo/request/util dojo/on dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/dom-geometry dojo/keys dojo/has dojo/_base/window dojo/json dojo/domReady!".split(" "),function(A,G,z,B,C,H,O,I,l,n,y,D,J,q,K,w,k,h,t,E,x,L,M,F){return I("dojox.gantt.GanttChart",
[],{constructor:function(b,a){this.resourceChartHeight=void 0!==b.resourceChartHeight?b.resourceChartHeight:!1;this.withResource=void 0!==b.withResource?b.withResource:!0;this.correctError=void 0!==b.autoCorrectError?b.autoCorrectError:!1;this.isShowConMenu=this.isContentEditable=!b.readOnly;this.withTaskId=void 0!==b.withTaskId?b.withTaskId:!b.readOnly;this.animation=void 0!==b.animation?b.animation:!0;this.saveProgramPath=b.saveProgramPath||"saveGanttData.php";this.dataFilePath=b.dataFilePath||
"gantt_default.json";this.contentHeight=b.height||400;this.contentWidth=b.width||600;this.content=K.byId(a);this.scrollBarWidth=18;this.panelTimeHeight=102;this.maxWidthTaskNames=this.maxWidthPanelNames=150;this.minWorkLength=8;this.heightTaskItem=12;this.heightTaskItemExtra=11;this.pixelsPerDay=24;this.hsPerDay=8;this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay;this.pixelsPerHour=this.pixelsPerDay/24;this.totalDays=this.countDays=0;this.startDate=null;this.contentDataHeight=this.initialPos=
0;this.panelTimeExpandDelta=20;this.tabMenu=this.contentData=this.panelTime=this.panelNames=this.divTimeInfo=null;this.project=[];this.arrProjects=[];this.xmlLoader=null;this.isResizing=this.isMoving=!1;this.animationNodes=[];this.scale=1;this.tempDayInPixels=0;this.resource=null;this.months=y.getNames("months","wide");this._events=[]},getProject:function(b){return l.filter(this.arrProjects,function(a){return a.project.id==b},this)[0]},checkPosPreviousTask:function(b,a){var c=this.getWidthOnDuration(b.duration);
b=this.getPosOnDate(b.startTime);a=this.getPosOnDate(a.startTime);return c+b<=a},correctPosPreviousTask:function(b,a,c){var d=new Date(b.startTime);d.setHours(d.getHours()+b.duration/this.hsPerDay*24);0<d.getHours()&&(d.setHours(0),d.setDate(d.getDate()+1));c?c.setStartTime(d,!0):a.startTime=d;a.parentTask&&!this.checkPosParentTask(a.parentTask,a)&&(b=new Date(a.parentTask.startTime),b.setHours(b.getHours()+a.parentTask.duration/this.hsPerDay*24),a.duration=parseInt(parseInt((b-a.startTime)/36E5)*
this.hsPerDay/24))},correctPosParentTask:function(b,a){a.previousTask?this.correctPosPreviousTask(a.previousTask,a):(b.startTime>a.startTime&&(a.startTime=new Date(b.startTime)),this.checkPosParentTask(b,a)||(a.duration=b.duration))},checkPosParentTaskInTree:function(b){for(var a=!1,c=0;c<b.cldTasks.length;c++){var d=b.cldTasks[c];if(!this.checkPosParentTask(b,d))if(this.correctError)this.correctPosParentTask(b,d);else return!0;if(b.startTime>d.startTime)if(this.correctError)this.correctPosParentTask(b,
d);else return!0;0<d.cldTasks.length&&(a=this.checkPosParentTaskInTree(d))}return a},setPreviousTask:function(b){for(var a=!1,c=0;c<b.parentTasks.length;c++){a=b.parentTasks[c];if(a.previousTaskId){a.previousTask=b.getTaskById(a.previousTaskId);if(!a.previousTask&&!this.correctError)return!0;a.previousTask.cldPreTasks.push(a)}if(a.previousTask&&!this.checkPosPreviousTask(a.previousTask,a))if(this.correctError)this.correctPosPreviousTask(a.previousTask,a);else return!0;a=this.setPreviousTaskInTree(a)}return a},
setPreviousTaskInTree:function(b){for(var a=!1,c=0;c<b.cldTasks.length;c++){var d=b.cldTasks[c];if(d.previousTaskId){d.previousTask=b.project.getTaskById(d.previousTaskId);if(!d.previousTask&&!this.correctError)return!0;if(!this.checkPosPreviousTask(d.previousTask,d))if(this.correctError)this.correctPosPreviousTask(d.previousTask,d);else return!0;d.previousTask.cldPreTasks.push(d)}0<d.cldTasks.length&&(a=this.setPreviousTaskInTree(d))}return a},checkPosParentTask:function(b,a){var c=this.getWidthOnDuration(b.duration);
b=this.getPosOnDate(b.startTime);var d=this.getPosOnDate(a.startTime);a=this.getWidthOnDuration(a.duration);return c+b>=d+a},addProject:function(b){this.project.push(b)},deleteProject:function(b){var a=this.getProject(b);if(a){if(0<a.arrTasks.length)for(;0<a.arrTasks.length;)a.deleteChildTask(a.arrTasks[0]);var c=this.heightTaskItemExtra+this.heightTaskItem;a.nextProject&&a.shiftNextProject(a,-c);this.project=l.filter(this.project,function(d){return d.id!=a.project.id},this);a.previousProject&&a.nextProject&&
(c=a.previousProject,c.nextProject=a.nextProject);a.previousProject&&!a.nextProject&&(c=a.previousProject,c.nextProject=null);!a.previousProject&&a.nextProject&&(a.nextProject.previousProject=null);for(c=0;c<this.arrProjects.length;c++)this.arrProjects[c].project.id==b&&this.arrProjects.splice(c,1);a.projectItem[0].parentNode.removeChild(a.projectItem[0]);a.descrProject.parentNode.removeChild(a.descrProject);a.projectNameItem.parentNode.removeChild(a.projectNameItem);this.contentDataHeight-=this.heightTaskItemExtra+
this.heightTaskItem;0==this.project.length&&(b=new Date(this.startDate),b=new Date(b.setDate(b.getDate()+1)),b=new A({id:1,name:"New Project",startDate:b}),this.project.push(b),a=new z(this,b),a.create(),this.arrProjects.push(a),this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem);this.checkPosition()}},insertProject:function(b,a,c){if(this.startDate>=c||this.getProject(b))return!1;this.checkHeighPanelTasks();b=new A({id:b,name:a,startDate:c});this.project.push(b);b=new z(this,b);
for(a=0;a<this.arrProjects.length;a++){var d=this.arrProjects[a-1],e=this.arrProjects[a+1];if(c<this.arrProjects[a].project.startDate)return this.arrProjects.splice(a,0,b),0<a&&(b.previousProject=d,d.nextProject=b),a+1<=this.arrProjects.length&&(b.nextProject=e,e.previousProject=b,b.shiftNextProject(b,this.heightTaskItem+this.heightTaskItemExtra)),b.create(),b.hideDescrProject(),this.checkPosition(),b}0<this.arrProjects.length&&(this.arrProjects[this.arrProjects.length-1].nextProject=b,b.previousProject=
this.arrProjects[this.arrProjects.length-1]);this.arrProjects.push(b);b.create();b.hideDescrProject();this.checkPosition();return b},openTree:function(b){var a=this.getLastCloseParent(b);this.openNode(a);b.taskItem.id!=a.taskItem.id&&this.openTree(b)},openNode:function(b){b.isExpanded||(w.remove(b.cTaskNameItem[2],"ganttImageTreeExpand"),w.add(b.cTaskNameItem[2],"ganttImageTreeCollapse"),b.isExpanded=!0,b.shiftCurrentTasks(b,b.hideTasksHeight),b.showChildTasks(b,b.isExpanded),b.hideTasksHeight=0)},
getLastCloseParent:function(b){return b.parentTask?b.parentTask.isExpanded&&"none"!=b.parentTask.cTaskNameItem[2].style.display?b:this.getLastCloseParent(b.parentTask):b},getProjectItemById:function(b){return l.filter(this.project,function(a){return a.id==b},this)[0]},clearAll:function(){this.contentDataHeight=0;this.startDate=null;this.clearData();this.clearItems();this.clearEvents()},clearEvents:function(){l.forEach(this._events,function(b){b.remove()});this._events=[]},clearData:function(){this.project=
[];this.arrProjects=[]},clearItems:function(){this.contentData.removeChild(this.contentData.firstChild);this.contentData.appendChild(this.createPanelTasks());this.panelNames.removeChild(this.panelNames.firstChild);this.panelNames.appendChild(this.createPanelNamesTasks());this.panelTime.removeChild(this.panelTime.firstChild)},buildUIContent:function(){this.project.sort(this.sortProjStartDate);this.startDate=this.getStartDate();this.panelTime.appendChild(this.createPanelTime());for(var b=0;b<this.project.length;b++){for(var a=
this.project[b],c=0;c<a.parentTasks.length;c++){var d=a.parentTasks[c];if(d.startTime)this.setStartTimeChild(d);else return;if(this.setPreviousTask(a))return}for(c=0;c<a.parentTasks.length;c++)if(d=a.parentTasks[c],d.startTime<a.startDate||this.checkPosParentTaskInTree(d))return;this.sortTasksByStartTime(a)}for(b=0;b<this.project.length;b++)a=this.project[b],a=new z(this,a),0<this.arrProjects.length&&(c=this.arrProjects[this.arrProjects.length-1],a.previousProject=c,c.nextProject=a),a.create(),this.checkHeighPanelTasks(),
this.arrProjects.push(a),this.createTasks(a);this.resource&&this.resource.reConstruct();this.postLoadData();this.postBindEvents()},loadJSONData:function(b){var a=this;a.dataFilePath=b||a.dataFilePath;D.get(a.dataFilePath,{sync:!0}).then(function(c){a.loadJSONString(c.text);a.buildUIContent();console.log("Successfully! Loaded data from: "+a.dataFilePath)},function(){console.log("Failed! Load error: "+a.dataFilePath)})},loadJSONString:function(b){b&&(this.clearAll(),b=F.parse(b).items,l.forEach(b,function(a){var c=
a.startdate.split("-"),d=new A({id:a.id,name:a.name,startDate:new Date(c[0],parseInt(c[1])-1,c[2])});l.forEach(a.tasks,function(e){var f=e.id,g=e.name,p=e.starttime.split("-"),r=e.duration,v=e.percentage,m=e.previousTaskId,u=e.taskOwner;f=new C({id:f,name:g,startTime:new Date(p[0],parseInt(p[1])-1,p[2]),duration:r,percentage:v,previousTaskId:m,taskOwner:u});e=e.children;0!=e.length&&this.buildChildTasksData(f,e);d.addTask(f)},this);this.addProject(d)},this))},buildChildTasksData:function(b,a){a&&
l.forEach(a,function(c){var d=c.id,e=c.name,f=c.starttime.split("-"),g=c.duration,p=c.percentage,r=c.previousTaskId,v=c.taskOwner;d=new C({id:d,name:e,startTime:new Date(f[0],parseInt(f[1])-1,f[2]),duration:g,percentage:p,previousTaskId:r,taskOwner:v});d.parentTask=b;b.addChildTask(d);c=c.children;0!=c.length&&this.buildChildTasksData(d,c)},this)},getJSONData:function(){var b={identifier:"id",items:[]};l.forEach(this.project,function(a){var c={id:a.id,name:a.name,startdate:a.startDate.getFullYear()+
"-"+(a.startDate.getMonth()+1)+"-"+a.startDate.getDate(),tasks:[]};b.items.push(c);l.forEach(a.parentTasks,function(d){d={id:d.id,name:d.name,starttime:d.startTime.getFullYear()+"-"+(d.startTime.getMonth()+1)+"-"+d.startTime.getDate(),duration:d.duration,percentage:d.percentage,previousTaskId:d.previousTaskId||"",taskOwner:d.taskOwner||"",children:this.getChildTasksData(d.cldTasks)};c.tasks.push(d)},this)},this);return b},getChildTasksData:function(b){var a=[];b&&0<b.length&&l.forEach(b,function(c){c=
{id:c.id,name:c.name,starttime:c.startTime.getFullYear()+"-"+(c.startTime.getMonth()+1)+"-"+c.startTime.getDate(),duration:c.duration,percentage:c.percentage,previousTaskId:c.previousTaskId||"",taskOwner:c.taskOwner||"",children:this.getChildTasksData(c.cldTasks)};a.push(c)},this);return a},saveJSONData:function(b){var a=this;a.dataFilePath=b&&0<n.trim(b).length?b:this.dataFilePath;try{D.post(a.saveProgramPath,{query:{filename:a.dataFilePath,data:F.stringify(a.getJSONData())}}).response.then(function(c){J.checkStatus(c.options.status)||
405==c.options.status?console.log("Successfully! Saved data to "+a.dataFilePath):console.log("Failed! Saved error")})}catch(c){console.log("exception: "+c.message)}},sortTaskStartTime:function(b,a){return b.startTime<a.startTime?-1:b.startTime>a.startTime?1:0},sortProjStartDate:function(b,a){return b.startDate<a.startDate?-1:b.startDate>a.startDate?1:0},setStartTimeChild:function(b){l.forEach(b.cldTasks,function(a){a.startTime||(a.startTime=b.startTime);0!=a.cldTasks.length&&this.setStartTimeChild(a)},
this)},createPanelTasks:function(){var b=k.create("div",{className:"ganttTaskPanel"});h.set(b,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px"});return b},refreshParams:function(b){this.pixelsPerDay=b;this.pixelsPerWorkHour=this.pixelsPerDay/this.hsPerDay;this.pixelsPerHour=this.pixelsPerDay/24},createPanelNamesTasksHeader:function(){var b=k.create("div",{className:"ganttPanelHeader"}),a=k.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttToolbar"},
b),c=a.insertRow(a.rows.length),d=a.insertRow(a.rows.length),e=a.insertRow(a.rows.length);a.insertRow(a.rows.length);a=k.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomIn"},c);var f=n.hitch(this,function(){5<2*this.scale||(this.scale*=2,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomInClickEvent&&this.zoomInClickEvent.remove();this.zoomInClickEvent=q(a,"click",n.hitch(this,f));this.zoomInKeyEvent&&this.zoomInKeyEvent.remove();this.zoomInKeyEvent=q(a,"keydown",
n.hitch(this,function(m){m.keyCode==x.ENTER&&f()}));t.set(a,"tabIndex",0);c=k.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarZoomOut"},c);var g=n.hitch(this,function(){.2>.5*this.scale||(this.scale*=.5,this.switchTeleMicroView(this.pixelsPerDay*this.scale))});this.zoomOutClickEvent&&this.zoomOutClickEvent.remove();this.zoomOutClickEvent=q(c,"click",n.hitch(this,g));this.zoomOutKeyEvent&&this.zoomOutKeyEvent.remove();this.zoomOutKeyEvent=q(c,"keydown",n.hitch(this,function(m){m.keyCode==
x.ENTER&&g()}));t.set(c,"tabIndex",0);var p=k.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarMicro"},d);this.microClickEvent&&this.microClickEvent.remove();this.microClickEvent=q(p,"click",n.hitch(this,this.refresh,this.animation?15:1,0,2));this.microKeyEvent&&this.microKeyEvent.remove();this.microKeyEvent=q(p,"keydown",n.hitch(this,function(m){m.keyCode==x.ENTER&&(p.blur(),this.refresh(this.animation?15:1,0,2))}));t.set(p,"tabIndex",0);var r=k.create("td",{align:"center",vAlign:"middle",
className:"ganttToolbarTele"},d);this.teleClickEvent&&this.teleClickEvent.remove();this.teleClickEvent=q(r,"click",n.hitch(this,this.refresh,this.animation?15:1,0,.5));this.teleKeyEvent&&this.teleKeyEvent.remove();this.teleKeyEvent=q(r,"keydown",n.hitch(this,function(m){m.keyCode==x.ENTER&&(r.blur(),this.refresh(this.animation?15:1,0,.5))}));t.set(r,"tabIndex",0);d=k.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarSave"},e);this.saveClickEvent&&this.saveClickEvent.remove();this.saveClickEvent=
q(d,"click",n.hitch(this,this.saveJSONData,""));this.saveKeyEvent&&this.saveKeyEvent.remove();this.saveKeyEvent=q(d,"keydown",n.hitch(this,function(m){m.keyCode==x.ENTER&&this.saveJSONData("")}));t.set(d,"tabIndex",0);e=k.create("td",{align:"center",vAlign:"middle",className:"ganttToolbarLoad"},e);this.loadClickEvent&&this.loadClickEvent.remove();this.loadClickEvent=q(e,"click",n.hitch(this,this.loadJSONData,""));this.loadKeyEvent&&this.loadKeyEvent.remove();this.loadKeyEvent=q(e,"keydown",n.hitch(this,
function(m){m.keyCode==x.ENTER&&this.loadJSONData("")}));t.set(e,"tabIndex",0);var v="Enlarge timeline;Shrink timeline;Zoom in time zone(microscope view);Zoom out time zone(telescope view);Save gantt data to json file;Load gantt data from json file".split(";");l.forEach([a,c,p,r,d,e],function(m,u){var N=v[u];u=function(){w.add(m,"ganttToolbarActionHover");dijit.showTooltip(N,m,["above","below"])};m.onmouseover=u;m.onfocus=u;u=function(){w.remove(m,"ganttToolbarActionHover");m&&dijit.hideTooltip(m)};
m.onmouseout=u;m.onblur=u},this);return b},createPanelNamesTasks:function(){var b=k.create("div",{innerHTML:"\x26nbsp;",className:"ganttPanelNames"});h.set(b,{height:this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px",width:this.maxWidthPanelNames+"px"});return b},createPanelTime:function(){var b=k.create("div",{className:"ganttPanelTime"}),a=k.create("table",{cellPadding:"0px",border:"0px",cellSpacing:"0px",bgColor:"#FFFFFF",className:"ganttTblTime"},b);this.totalDays=this.countDays;
var c=a.insertRow(a.rows.length),d,e=0;var f=d=(new Date(this.startDate)).getFullYear();for(var g=0;g<this.countDays;g++,e++)f=new Date(this.startDate),f.setDate(f.getDate()+g),f=f.getFullYear(),f!=d&&(this.addYearInPanelTime(c,e,d),e=0,d=f);this.addYearInPanelTime(c,e,f);h.set(c,"display","none");d=a.insertRow(a.rows.length);c=0;f=1970;var p=e=(new Date(this.startDate)).getMonth();for(g=0;g<this.countDays;g++,c++)f=new Date(this.startDate),f.setDate(f.getDate()+g),p=f.getMonth(),f=f.getFullYear(),
p!=e&&(this.addMonthInPanelTime(d,c,e,11!==e?f:f-1),c=0,e=p);this.addMonthInPanelTime(d,c,p,f);d=a.insertRow(a.rows.length);c=0;f=e=y._getWeekOfYear(new Date(this.startDate));for(g=0;g<this.countDays;g++,c++)f=new Date(this.startDate),f.setDate(f.getDate()+g),f=y._getWeekOfYear(f),f!=e&&(this.addWeekInPanelTime(d,c,e),c=0,e=f);this.addWeekInPanelTime(d,c,f);f=a.insertRow(a.rows.length);for(g=0;g<this.countDays;g++)this.addDayInPanelTime(f);a=a.insertRow(a.rows.length);for(g=0;g<this.countDays;g++)this.addHourInPanelTime(a);
h.set(a,"display","none");return b},adjustPanelTime:function(){var b=l.map(this.arrProjects,function(r){return parseInt(r.projectItem[0].style.left)+parseInt(r.projectItem[0].firstChild.style.width)+r.descrProject.offsetWidth+this.panelTimeExpandDelta},this).sort(function(r,v){return v-r})[0];if(this.maxTaskEndPos!=b){for(var a=this.panelTime.firstChild.firstChild.rows,c=0;4>=c;c++)this.removeCell(a[c]);var d=Math.round((b+this.panelTimeExpandDelta)/this.pixelsPerDay);this.totalDays=d;var e,f=0;var g=
e=(new Date(this.startDate)).getFullYear();for(c=0;c<d;c++,f++)g=new Date(this.startDate),g.setDate(g.getDate()+c),g=g.getFullYear(),g!=e&&(this.addYearInPanelTime(a[0],f,e),f=0,e=g);this.addYearInPanelTime(a[0],f,g);e=0;g=1970;var p=f=(new Date(this.startDate)).getMonth();for(c=0;c<d;c++,e++)g=new Date(this.startDate),g.setDate(g.getDate()+c),p=g.getMonth(),g=g.getFullYear(),p!=f&&(this.addMonthInPanelTime(a[1],e,f,11!==f?g:g-1),e=0,f=p);this.addMonthInPanelTime(a[1],e,p,g);e=0;g=f=y._getWeekOfYear(new Date(this.startDate));
for(c=0;c<d;c++,e++)g=new Date(this.startDate),g.setDate(g.getDate()+c),g=y._getWeekOfYear(g),g!=f&&(this.addWeekInPanelTime(a[2],e,f),e=0,f=g);this.addWeekInPanelTime(a[2],e,g);for(c=0;c<d;c++)this.addDayInPanelTime(a[3]);for(c=0;c<d;c++)this.addHourInPanelTime(a[4]);this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*a[3].cells.length+"px";this.contentData.firstChild.style.width=this.pixelsPerDay*a[3].cells.length+"px";this.maxTaskEndPos=b}},addYearInPanelTime:function(b,a,c){c="Year   "+
c;b=k.create("td",{colSpan:a,align:"center",vAlign:"middle",className:"ganttYearNumber",innerHTML:20<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);h.set(b,"width",this.pixelsPerDay*a+"px")},addMonthInPanelTime:function(b,a,c,d){c=this.months[c]+(d?" of "+d:"");b=k.create("td",{colSpan:a,align:"center",vAlign:"middle",className:"ganttMonthNumber",innerHTML:30<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);h.set(b,"width",this.pixelsPerDay*a+"px")},addWeekInPanelTime:function(b,a,c){c="Week   "+c;b=k.create("td",
{colSpan:a,align:"center",vAlign:"middle",className:"ganttWeekNumber",innerHTML:20<this.pixelsPerDay*a?c:"",innerHTMLData:c},b);h.set(b,"width",this.pixelsPerDay*a+"px")},addDayInPanelTime:function(b){var a=new Date(this.startDate);a.setDate(a.getDate()+parseInt(b.cells.length));var c=k.create("td",{align:"center",vAlign:"middle",className:"ganttDayNumber",innerHTML:20<this.pixelsPerDay?a.getDate():"",innerHTMLData:String(a.getDate()),data:b.cells.length},b);h.set(c,"width",this.pixelsPerDay+"px");
5<=a.getDay()&&w.add(c,"ganttDayNumberWeekend");this._events.push(q(c,"mouseover",n.hitch(this,function(d){d=d.target||d.srcElement;var e=new Date(this.startDate.getTime());e.setDate(e.getDate()+parseInt(t.get(d,"data")));dijit.showTooltip(e.getFullYear()+"."+(e.getMonth()+1)+"."+e.getDate(),c,["above","below"])})));this._events.push(q(c,"mouseout",n.hitch(this,function(d){(d=d.target||d.srcElement)&&dijit.hideTooltip(d)})))},addHourInPanelTime:function(b){b=k.create("td",{align:"center",vAlign:"middle",
className:"ganttHourNumber",data:b.cells.length},b);h.set(b,"width",this.pixelsPerDay+"px");b=k.create("table",{cellPadding:"0",cellSpacing:"0"},b);b=b.insertRow(b.rows.length);for(var a=0;a<this.hsPerDay;a++){var c=k.create("td",{className:"ganttHourClass"},b);h.set(c,"width",this.pixelsPerDay/this.hsPerDay+"px");t.set(c,"innerHTMLData",String(9+a));5<this.pixelsPerDay/this.hsPerDay&&t.set(c,"innerHTML",String(9+a));w.add(c,3>=a?"ganttHourNumberAM":"ganttHourNumberPM")}},incHeightPanelTasks:function(b){var a=
this.contentData.firstChild;a.style.height=parseInt(a.style.height)+b+"px"},incHeightPanelNames:function(b){var a=this.panelNames.firstChild;a.style.height=parseInt(a.style.height)+b+"px"},checkPosition:function(){l.forEach(this.arrProjects,function(b){l.forEach(b.arrTasks,function(a){a.checkPosition()},this)},this)},checkHeighPanelTasks:function(){this.contentDataHeight+=this.heightTaskItemExtra+this.heightTaskItem;parseInt(this.contentData.firstChild.style.height)<=this.contentDataHeight&&(this.incHeightPanelTasks(this.heightTaskItem+
this.heightTaskItemExtra),this.incHeightPanelNames(this.heightTaskItem+this.heightTaskItemExtra))},sortTasksByStartTime:function(b){b.parentTasks.sort(this.sortTaskStartTime);for(var a=0;a<b.parentTasks.length;a++)b.parentTasks[a]=this.sortChildTasks(b.parentTasks[a])},sortChildTasks:function(b){b.cldTasks.sort(this.sortTaskStartTime);for(var a=0;a<b.cldTasks.length;a++)0<b.cldTasks[a].cldTasks.length&&this.sortChildTasks(b.cldTasks[a]);return b},refresh:function(b,a,c){0>=this.arrProjects.length||
0>=this.arrProjects[0].arrTasks.length||(!b||a>b?(this.refreshController(),this.resource&&this.resource.refresh(),this.tempDayInPixels=0,this.panelNameHeadersCover&&h.set(this.panelNameHeadersCover,"display","none")):(0==this.tempDayInPixels&&(this.tempDayInPixels=this.pixelsPerDay),this.panelNameHeadersCover&&h.set(this.panelNameHeadersCover,"display",""),this.refreshParams(this.tempDayInPixels+this.tempDayInPixels*(c-1)*Math.pow(a/b,2)),l.forEach(this.arrProjects,function(d){l.forEach(d.arrTasks,
function(e){e.refresh()},this);d.refresh()},this),setTimeout(n.hitch(this,function(){this.refresh(b,++a,c)}),15)))},switchTeleMicroView:function(b){for(var a=this.panelTime.firstChild.firstChild,c=0;5>c;c++)40<b?h.set(a.rows[c],"display",0==c||1==c?"none":""):20>b?h.set(a.rows[c],"display",2==c||4==c?"none":""):h.set(a.rows[c],"display",0==c||4==c?"none":"")},refreshController:function(){this.contentData.firstChild.style.width=Math.max(1200,this.pixelsPerDay*this.totalDays)+"px";this.panelTime.firstChild.style.width=
this.pixelsPerDay*this.totalDays+"px";this.panelTime.firstChild.firstChild.style.width=this.pixelsPerDay*this.totalDays+"px";this.switchTeleMicroView(this.pixelsPerDay);l.forEach(this.panelTime.firstChild.firstChild.rows,function(b){l.forEach(b.childNodes,function(a){var c=parseInt(t.get(a,"colSpan")||1),d=n.trim(t.get(a,"innerHTMLData")||"");0<d.length?t.set(a,"innerHTML",20>this.pixelsPerDay*c?"":d):l.forEach(a.firstChild.rows[0].childNodes,function(e){var f=n.trim(t.get(e,"innerHTMLData")||"");
t.set(e,"innerHTML",10<this.pixelsPerDay/this.hsPerDay?f:"")},this);1==c&&(h.set(a,"width",this.pixelsPerDay*c+"px"),0>=d.length&&l.forEach(a.firstChild.rows[0].childNodes,function(e){h.set(e,"width",this.pixelsPerDay*c/this.hsPerDay+"px")},this))},this)},this)},init:function(){this.startDate=this.getStartDate();h.set(this.content,{width:this.contentWidth+"px",height:this.contentHeight+"px"});this.tableControl=k.create("table",{cellPadding:"0",cellSpacing:"0",className:"ganttTabelControl"});var b=
this.tableControl.insertRow(this.tableControl.rows.length);this.content.appendChild(this.tableControl);this.countDays=this.getCountDays();this.panelTime=k.create("div",{className:"ganttPanelTimeContainer"});h.set(this.panelTime,"height",this.panelTimeHeight+"px");this.panelTime.appendChild(this.createPanelTime());this.contentData=k.create("div",{className:"ganttContentDataContainer"});h.set(this.contentData,"height",this.contentHeight-this.panelTimeHeight+"px");this.contentData.appendChild(this.createPanelTasks());
var a=k.create("td",{vAlign:"top"});this.panelNameHeaders=k.create("div",{className:"ganttPanelNameHeaders"},a);h.set(this.panelNameHeaders,{height:this.panelTimeHeight+"px",width:this.maxWidthPanelNames+"px"});this.panelNameHeaders.appendChild(this.createPanelNamesTasksHeader());this.panelNames=k.create("div",{className:"ganttPanelNamesContainer"},a);this.panelNames.appendChild(this.createPanelNamesTasks());b.appendChild(a);a=k.create("td",{vAlign:"top"});var c=k.create("div",{className:"ganttDivCell"});
c.appendChild(this.panelTime);c.appendChild(this.contentData);a.appendChild(c);b.appendChild(a);h.set(this.panelNames,"height",this.contentHeight-this.panelTimeHeight-this.scrollBarWidth+"px");h.set(this.panelNames,"width",this.maxWidthPanelNames+"px");h.set(this.contentData,"width",this.contentWidth-this.maxWidthPanelNames+"px");h.set(this.contentData.firstChild,"width",this.pixelsPerDay*this.countDays+"px");h.set(this.panelTime,"width",this.contentWidth-this.maxWidthPanelNames-this.scrollBarWidth+
"px");h.set(this.panelTime.firstChild,"width",this.pixelsPerDay*this.countDays+"px");this.isShowConMenu&&(this.tabMenu=new H(this));var d=this;this.contentData.onscroll=function(){d.panelTime.scrollLeft=this.scrollLeft;d.panelNames&&(d.panelNames.scrollTop=this.scrollTop,d.isShowConMenu&&d.tabMenu.hide());d.resource&&(d.resource.contentData.scrollLeft=this.scrollLeft)};this.project.sort(this.sortProjStartDate);for(b=0;b<this.project.length;b++){a=this.project[b];for(c=0;c<a.parentTasks.length;c++){var e=
a.parentTasks[c];e.startTime||(e.startTime=a.startDate);this.setStartTimeChild(e);if(this.setPreviousTask(a))return}for(c=0;c<a.parentTasks.length;c++){e=a.parentTasks[c];if(e.startTime<a.startDate)if(this.correctError)e.startTime=a.startDate;else return;if(this.checkPosParentTaskInTree(e))return}this.sortTasksByStartTime(a)}for(b=0;b<this.project.length;b++)a=this.project[b],a=new z(this,a),0<this.arrProjects.length&&(c=this.arrProjects[this.arrProjects.length-1],a.previousProject=c,c.nextProject=
a),a.create(),this.checkHeighPanelTasks(),this.arrProjects.push(a),this.createTasks(a);this.withResource&&(this.resource=new G(this),this.resource.create());this.postLoadData();this.postBindEvents();return this},postLoadData:function(){l.forEach(this.arrProjects,function(a){l.forEach(a.arrTasks,function(c){c.postLoadData()},this);a.postLoadData()},this);var b=E.getMarginBox(this.panelNameHeaders);this.panelNameHeadersCover||(this.panelNameHeadersCover=k.create("div",{className:"ganttHeaderCover"},
this.panelNameHeaders.parentNode),h.set(this.panelNameHeadersCover,{left:b.l+"px",top:b.t+"px",height:b.h+"px",width:b.w+"px",display:"none"}))},postBindEvents:function(){var b=E.position(this.tableControl,!0);L("dom-addeventlistener")&&this._events.push(q(this.tableControl,"mousemove",n.hitch(this,function(a){var c=a.srcElement||a.target;if(c==this.panelNames.firstChild||c==this.contentData.firstChild)c=this.heightTaskItem+this.heightTaskItemExtra,a=parseInt(a.layerY/c)*c+this.panelTimeHeight-this.contentData.scrollTop,
a!=this.oldHLTop&&a<b.h-50&&(this.highLightDiv?h.set(this.highLightDiv,"top",b.y+a+"px"):(this.highLightDiv=k.create("div",{className:"ganttRowHighlight"},M.body()),h.set(this.highLightDiv,{top:b.y+a+"px",left:b.x+"px",width:b.w-20+"px",height:c+"px"}))),this.oldHLTop=a})))},getStartDate:function(){l.forEach(this.project,function(b){this.startDate?b.startDate<this.startDate&&(this.startDate=new Date(b.startDate)):this.startDate=new Date(b.startDate)},this);this.initialPos=24*this.pixelsPerHour;return this.startDate?
new Date(this.startDate.setHours(this.startDate.getHours()-24)):new Date},getCountDays:function(){return parseInt((this.contentWidth-this.maxWidthPanelNames)/(24*this.pixelsPerHour))},createTasks:function(b){l.forEach(b.project.parentTasks,function(a,c){0<c&&(b.project.parentTasks[c-1].nextParentTask=a,a.previousParentTask=b.project.parentTasks[c-1]);c=new B(a,b,this);b.arrTasks.push(c);c.create();this.checkHeighPanelTasks();0<a.cldTasks.length&&this.createChildItemControls(a.cldTasks,b)},this)},
createChildItemControls:function(b,a){b&&l.forEach(b,function(c,d){0<d&&(c.previousChildTask=b[d-1],b[d-1].nextChildTask=c);(new B(c,a,this)).create();this.checkHeighPanelTasks();0<c.cldTasks.length&&this.createChildItemControls(c.cldTasks,a)},this)},getPosOnDate:function(b){return(b-this.startDate)/36E5*this.pixelsPerHour},getWidthOnDuration:function(b){return Math.round(this.pixelsPerWorkHour*b)},getLastChildTask:function(b){return 0<b.childTask.length?this.getLastChildTask(b.childTask[b.childTask.length-
1]):b},removeCell:function(b){for(;b.cells[0];)b.deleteCell(b.cells[0])}})});