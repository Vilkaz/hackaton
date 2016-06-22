var ns_=ns_||{};ns_.StreamSense=ns_.StreamSense||function(){function n(t){e=t}function r(e){t=e}function u(t,n){var r=t||"",i=f,u="undefined",a=s.comScore||s.sitestat||function(t){var n="comScore=",r=o.cookie,i="",a="indexOf",f="substring",l="length",c=2048,h,p="&ns_",d="&",v,m,g,y,b=s.encodeURIComponent||escape;if(r[a](n)+1)for(g=0,m=r.split(";"),y=m[l];g<y;g++)v=m[g][a](n),v+1&&(i=d+unescape(m[g][f](v+n[l])));t+=p+"_t="+ +(new Date)+p+"c="+(o.characterSet||o.defaultCharset||"")+i,t[l]>c&&t[a](d)>0&&(h=t[f](0,c-8).lastIndexOf(d),t=(t[f](0,h)+p+"cut="+b(t[f](h+1)))[f](0,c)),e(t),typeof ns_p===u&&(ns_p={src:t}),ns_p.lastMeasurement=t};if(typeof n!==u){var l=[],c=s.encodeURIComponent||escape;for(var h in n)n.hasOwnProperty(h)&&l.push(c(h)+"="+c(n[h]));/[\?\&]$/.test(r)||(r+="&"),r+=l.join("&")}return a(r)}function a(e,t){var n,r=2048,i=s.encodeURIComponent||escape,u=[],a=p.LABELS_ORDER,f=e.split("?"),l=f[0],c=f[1],h=c.split("&");for(var d=0,v=h.length;d<v;d++){var m=h[d].split("="),g=unescape(m[0]),y=unescape(m[1]);g&&(t[g]=y)}var b={};for(var d=0,v=a.length;d<v;d++){var w=a[d];t.hasOwnProperty(w)&&(b[w]=!0,u.push(i(w)+"="+i(t[w])))}for(var w in t){if(b[w])continue;t.hasOwnProperty(w)&&u.push(i(w)+"="+i(t[w]))}return n=l+"?"+u.join("&"),n=n+(n.indexOf("&c8=")<0?"&c8="+i(o.title):"")+(n.indexOf("&c7=")<0?"&c7="+i(o.URL):"")+(n.indexOf("&c9=")<0?"&c9="+i(o.referrer):""),n.length>r&&n.indexOf("&")>0&&(last=n.substr(0,r-8).lastIndexOf("&"),n=(n.substring(0,last)+"&ns_cut="+i(n.substring(last+1))).substr(0,r)),n}var e=function(e,t){},t=function(e,t,n){};n(function(e,t){var n=new Image;n.src=e,t&&setTimeout(t,0)}),r(function(e,t,n){n&&setTimeout(n,0)});var i=typeof window!="undefined"&&typeof document!="undefined",s,o;i?(s=window,o=document):(s={},o={location:{href:""},title:"",URL:"",referrer:"",cookie:""});var f=function(){var e={uid:function(){var e=1;return function(){return+(new Date)+"_"+e++}}(),filter:function(e,t){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n},extend:function(e){var t=arguments.length,n;e=e||{};for(var r=1;r<t;r++){n=arguments[r];if(!n)continue;for(var i in n)n.hasOwnProperty(i)&&(e[i]=n[i])}return e},getString:function(e,t){var n=String(e);return e==null?t||"na":n},getLong:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getInteger:function(e,t){var n=Number(e);return e==null||isNaN(n)?t||0:n},getBoolean:function(e,t){var n=String(e).toLowerCase()=="true";return e==null?t||!1:n},isNotEmpty:function(e){return e!=null&&e.length>0},indexOf:function(t,n){var r=-1;return e.forEach(n,function(e,n){e==t&&(r=n)}),r},forEach:function(e,t,n){try{if(typeof t=="function"){n=typeof n!="undefined"?n:null;if(typeof e["length"]!="number"||typeof e[0]=="undefined"){var r=typeof e.__proto__!="undefined";for(var i in e)(!r||r&&typeof e.__proto__[i]=="undefined")&&typeof e[i]!="function"&&t.call(n,e[i],i)}else for(var i=0,s=e.length;i<s;i++)t.call(n,e[i],i)}}catch(o){}},regionMatches:function(e,t,n,r,i){if(t<0||r<0||t+i>e.length||r+i>n.length)return!1;while(--i>=0){var s=e.charAt(t++),o=n.charAt(r++);if(s!=o)return!1}return!0},size:function(e){var t=0,n;for(var n in e)e.hasOwnProperty(n)&&t++;return t},log:function(e,t){if(typeof t!="undefined"&&t){var n=new Date,r=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();console.log(r,e)}},isTrue:function(e){return typeof e=="undefined"?!1:typeof e=="string"?(e=e.toLowerCase(),e==="true"||e==="1"||e==="on"):e?!0:!1},toString:function(t){if(typeof t=="undefined")return"undefined";if(typeof t=="string")return t;if(Object.prototype.toString.call(t)==="[object Array]")return t.join(",");if(e.size(t)>0){var n="";for(var r in t)t.hasOwnProperty(r)&&(n+=r+":"+t[r]+";");return n}return t.toString()},exists:function(e){return typeof e!="undefined"&&e!=null},firstGreaterThan0:function(){for(var e=0,t=arguments.length;e<t;e++){var n=arguments[e];if(n>0)return n}return 0},cloneObject:function(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}};return e.filterMap=function(t,n){for(var r in t)e.indexOf(r,n)==-1&&delete t[r]},e.getKeys=function(e,t){var n,r=[];for(n in e)(!t||t.test(n))&&e.hasOwnProperty(n)&&(r[r.length]=n);return r},e.getBrowserName=function(){var e=navigator.userAgent,t=navigator.appName,n,r,i;return(r=e.indexOf("Opera"))!=-1?t="Opera":(r=e.indexOf("MSIE"))!=-1?t="Microsoft Internet Explorer":(r=e.indexOf("Android"))!=-1?t="Android":(r=e.indexOf("Chrome"))!=-1?t="Chrome":(r=e.indexOf("Safari"))!=-1?t="Safari":(r=e.indexOf("Firefox"))!=-1?t="Firefox":(r=e.indexOf("Windows NT"))!=-1?t="Microsoft Internet Explorer":(n=e.lastIndexOf(" ")+1)<(r=e.lastIndexOf("/"))&&(t=e.substring(n,r),t.toLowerCase()==t.toUpperCase()&&(t=navigator.appName)),t},e.getBrowserFullVersion=function(){var e=navigator.userAgent,t=""+parseFloat(navigator.appVersion),n=parseInt(navigator.appVersion,10),r,i,s;return(i=e.indexOf("Opera"))!=-1?(t=e.substring(i+6),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("MSIE"))!=-1?t=e.substring(i+5):(i=e.indexOf("Android"))!=-1?t=e.substring(i+8):(i=e.indexOf("Chrome"))!=-1?t=e.substring(i+7):(i=e.indexOf("Safari"))!=-1?(t=e.substring(i+7),(i=e.indexOf("Version"))!=-1&&(t=e.substring(i+8))):(i=e.indexOf("Firefox"))!=-1?t=e.substring(i+8):(i=e.indexOf("Windows NT"))!=-1?(i=e.indexOf("rv:"),t=e.substring(i+3)):(r=e.lastIndexOf(" ")+1)<(i=e.lastIndexOf("/"))&&(t=e.substring(i+1)),(s=t.indexOf(";"))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(" "))!=-1&&(t=t.substring(0,s)),(s=t.indexOf(")"))!=-1&&(t=t.substring(0,s)),n=parseInt(""+t,10),isNaN(n)&&(t=""+parseFloat(navigator.appVersion)),t},e}(),l=function(){var e=["play","pause","end","buffer","keep-alive","hb","custom","ad_play","ad_pause","ad_end","ad_click"];return{PLAY:0,PAUSE:1,END:2,BUFFER:3,KEEP_ALIVE:4,HEART_BEAT:5,CUSTOM:6,AD_PLAY:7,AD_PAUSE:8,AD_END:9,AD_CLICK:10,toString:function(t){return e[t]}}}(),c=function(){var e=[l.END,l.PLAY,l.PAUSE,l.BUFFER];return{IDLE:0,PLAYING:1,PAUSED:2,BUFFERING:3,toEventType:function(t){return e[t]}}}(),h={ADPLAY:l.AD_PLAY,ADPAUSE:l.AD_PAUSE,ADEND:l.AD_END,ADCLICK:l.AD_CLICK},p={STREAMSENSE_VERSION:"4.1408.01",DEFAULT_PLAYERNAME:"streamsense",DEFAULT_HEARTBEAT_INTERVAL:[{playingtime:6e4,interval:1e4},{playingtime:null,interval:6e4}],DEFAULT_KEEP_ALIVE_INTERVAL:12e5,DEFAULT_PAUSED_ON_BUFFERING_INTERVAL:500,C1_VALUE:"19",C10_VALUE:"js",NS_AP_C12M_VALUE:"1",NS_NC_VALUE:"1",PAGE_NAME_LABEL:"name",LABELS_ORDER:["c1","c2","ns_site","ns_vsite","ns_ap_an","ns_ap_pn","ns_ap_pv","c12","name","ns_ak","ns_ap_ec","ns_ap_ev","ns_ap_device","ns_ap_id","ns_ap_csf","ns_ap_bi","ns_ap_pfm","ns_ap_pfv","ns_ap_ver","ns_ap_sv","ns_type","ns_radio","ns_nc","ns_ap_ui","ns_ap_gs","ns_st_sv","ns_st_pv","ns_st_it","ns_st_id","ns_st_ec","ns_st_sp","ns_st_sq","ns_st_cn","ns_st_ev","ns_st_po","ns_st_cl","ns_st_el","ns_st_pb","ns_st_hc","ns_st_mp","ns_st_mv","ns_st_pn","ns_st_tp","ns_st_pt","ns_st_pa","ns_st_ad","ns_st_li","ns_st_ci","ns_ap_jb","ns_ap_res","ns_ap_c12m","ns_ap_install","ns_ap_updated","ns_ap_lastrun","ns_ap_cs","ns_ap_runs","ns_ap_usage","ns_ap_fg","ns_ap_ft","ns_ap_dft","ns_ap_bt","ns_ap_dbt","ns_ap_dit","ns_ap_as","ns_ap_das","ns_ap_it","ns_ap_uc","ns_ap_aus","ns_ap_daus","ns_ap_us","ns_ap_dus","ns_ap_ut","ns_ap_oc","ns_ap_uxc","ns_ap_uxs","ns_ap_lang","ns_ap_miss","ns_ts","ns_st_ca","ns_st_cp","ns_st_er","ns_st_pe","ns_st_ui","ns_st_bc","ns_st_bt","ns_st_bp","ns_st_pc","ns_st_pp","ns_st_br","ns_st_ub","ns_st_vo","ns_st_ws","ns_st_pl","ns_st_pr","ns_st_ep","ns_st_ty","ns_st_cs","ns_st_ge","ns_st_st","ns_st_dt","ns_st_ct","ns_st_de","ns_st_pu","ns_st_cu","ns_st_fee","c3","c4","c5","c6","c10","c11","c12","c13","c14","c15","c16","c7","c8","c9"]},d=function(){var e=function(){function h(e,t){var n=t[e];n!=null&&(a[e]=n)}var e=this,t=0,n=0,r=0,i=0,s=0,o=0,u,a;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},a.hasOwnProperty("ns_st_cl")||(a.ns_st_cl="0"),a.hasOwnProperty("ns_st_pn")||(a.ns_st_pn="1"),a.hasOwnProperty("ns_st_tp")||(a.ns_st_tp="1"),e.setPauses(0),e.setStarts(0),e.setBufferingTime(0),e.setBufferingTimestamp(-1),e.setPlaybackTime(0),e.setPlaybackTimestamp(-1)},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClipId:function(){return(typeof u=="undefined"||u==null)&&e.setClipId("1"),u},setClipId:function(e){u=e},setRegisters:function(i,o){var u=i.ns_st_cn;u!=null&&(e.setClipId(u),delete i.ns_st_cn),u=i.ns_st_bt,u!=null&&(r=Number(u),delete i.ns_st_bt),h("ns_st_cl",i),h("ns_st_pn",i),h("ns_st_tp",i),h("ns_st_ub",i),h("ns_st_br",i);if(o==c.PLAYING||o==null)u=i.ns_st_sq,u!=null&&(n=Number(u),delete i.ns_st_sq);o!=c.BUFFERING&&(u=i.ns_st_pt,u!=null&&(s=Number(u),delete i.ns_st_pt));if(o==c.PAUSED||o==c.IDLE||o==null)u=i.ns_st_pc,u!=null&&(t=Number(u),delete i.ns_st_pc)},createLabels:function(r,i){var s=i||{};s.ns_st_cn=e.getClipId(),s.ns_st_bt=String(e.getBufferingTime());if(r==l.PLAY||r==null)s.ns_st_sq=String(n);if(r==l.PAUSE||r==l.END||r==l.KEEP_ALIVE||r==l.HEART_BEAT||r==null)s.ns_st_pt=String(e.getPlaybackTime()),s.ns_st_pc=String(t);return f.extend(s,e.getLabels()),s},incrementPauses:function(){t++},incrementStarts:function(){n++},getBufferingTime:function(){var e=r;return i>=0&&(e+=+(new Date)-i),e},setBufferingTime:function(e){r=e},getPlaybackTime:function(){var e=s;return o>=0&&(e+=+(new Date)-o),e},setPlaybackTime:function(e){s=e},getPlaybackTimestamp:function(){return o},setPlaybackTimestamp:function(e){o=e},getBufferingTimestamp:function(){return i},setBufferingTimestamp:function(e){i=e},getPauses:function(){return t},setPauses:function(e){t=e},getStarts:function(){return n},setStarts:function(e){n=e}}),a={},e.reset()};return e}(),v=function(){var e=function(){var e=this,t=null,n,r=0,i=0,s=0,o=0,u=0,a,h=0,p=!1;f.extend(this,{reset:function(t){t!=null&&t.length>0?f.filterMap(a,t):a={},e.setPlaylistId(+(new Date)+"_"+h),e.setBufferingTime(0),e.setPlaybackTime(0),e.setPauses(0),e.setStarts(0),e.setRebufferCount(0),p=!1},setLabels:function(t,n){t!=null&&f.extend(a,t),e.setRegisters(a,n)},getLabels:function(){return a},setLabel:function(t,n){var r={};r[t]=n,e.setLabels(r,null)},getLabel:function(e){return a[e]},getClip:function(){return t},getPlaylistId:function(){return n},setPlaylistId:function(e){n=e},setRegisters:function(e,t){var a=e.ns_st_sp;a!=null&&(r=Number(a),delete e.ns_st_sp),a=e.ns_st_bc,a!=null&&(s=Number(a),delete e.ns_st_bc),a=e.ns_st_bp,a!=null&&(o=Number(a),delete e.ns_st_bp),a=e.ns_st_id,a!=null&&(n=a,delete e.ns_st_id),t!=c.BUFFERING&&(a=e.ns_st_pa,a!=null&&(u=Number(a),delete e.ns_st_pa));if(t==c.PAUSED||t==c.IDLE||t==null)a=e.ns_st_pp,a!=null&&(i=Number(a),delete e.ns_st_pp)},createLabels:function(t,o){var u=o||{};u.ns_st_bp=String(e.getBufferingTime()),u.ns_st_sp=String(r),u.ns_st_id=String(n),s>0&&(u.ns_st_bc=String(s));if(t==l.PAUSE||t==l.END||t==l.KEEP_ALIVE||t==l.HEART_BEAT||t==null)u.ns_st_pa=String(e.getPlaybackTime()),u.ns_st_pp=String(i);if(t==l.PLAY||t==null)e.didFirstPlayOccurred()||(u.ns_st_pb="1",e.setFirstPlayOccurred(!0));return f.extend(u,e.getLabels()),u},incrementStarts:function(){r++},incrementPauses:function(){i++,t.incrementPauses()},setPlaylistCounter:function(e){h=e},incrementPlaylistCounter:function(){h++},addPlaybackTime:function(n){if(t.getPlaybackTimestamp()>=0){var r=n-t.getPlaybackTimestamp();t.setPlaybackTimestamp(-1),t.setPlaybackTime(t.getPlaybackTime()+r),e.setPlaybackTime(e.getPlaybackTime()+r)}},addBufferingTime:function(n){if(t.getBufferingTimestamp()>=0){var r=n-t.getBufferingTimestamp();t.setBufferingTimestamp(-1),t.setBufferingTime(t.getBufferingTime()+r),e.setBufferingTime(e.getBufferingTime()+r)}},getBufferingTime:function(){var e=o;return t.getBufferingTimestamp()>=0&&(e+=+(new Date)-t.getBufferingTimestamp()),e},setBufferingTime:function(e){o=e},getPlaybackTime:function(){var e=u;return t.getPlaybackTimestamp()>=0&&(e+=+(new Date)-t.getPlaybackTimestamp()),e},setPlaybackTime:function(e){u=e},getStarts:function(){return r},setStarts:function(e){r=e},getPauses:function(){return i},setPauses:function(e){i=e},getRebufferCount:function(){return s},incrementRebufferCount:function(){s++},setRebufferCount:function(e){s=e},didFirstPlayOccurred:function(){return p},setFirstPlayOccurred:function(e){p=e}}),t=new d,a={},e.reset()};return e}(),m=function(){var t=function(t,i){function U(e){var t=0;if(A!=null)for(var n=0;n<A.length;n++){var r=A[n],i=r.playingtime;if(!i||e<i){t=r.interval;break}}return t}function z(){$();var e=U(S.getClip().getPlaybackTime());if(e>0){var t=_>0?_:e;L=setTimeout(V,t)}_=0}function W(){$();var e=U(S.getClip().getPlaybackTime());_=e-S.getClip().getPlaybackTime()%e,L!=null&&$()}function X(){_=0,P=0,D=0}function V(){D++;var e=yt(l.HEART_BEAT,null);st(e),_=0,z()}function $(){L!=null&&(clearTimeout(L),L=null)}function J(){Q(),k=setTimeout(K,O)}function K(){var e=yt(l.KEEP_ALIVE,null);st(e),E++,J()}function Q(){k!=null&&(clearTimeout(k),k=null)}function G(){Z(),s.isPauseOnBufferingEnabled()&&lt(c.PAUSED)&&(N=setTimeout(Y,M))}function Y(){if(B==c.PLAYING){S.incrementRebufferCount(),S.incrementPauses();var e=yt(l.PAUSE,null);st(e),E++,B=c.PAUSED}}function Z(){N!=null&&(clearTimeout(N),N=null)}function et(e){return e==c.PLAYING||e==c.PAUSED}function tt(){y&&(clearInterval(y),y=null)}function nt(e){return e==l.PLAY?c.PLAYING:e==l.PAUSE?c.PAUSED:e==l.BUFFER?c.BUFFERING:e==l.END?c.IDLE:null}function rt(e,t,n){tt();if(n)y=setInterval(function(){rt(e,t)},n);else if(pt(e)){var r=vt(),i=m,s=ht(t),o=i>=0?s-i:0;at(vt(),t),ft(e,t),mt(vt()),dt(e);for(var u=0,a=q.length;u<a;u++)q[u](r,e,t,o);it(t),S.setRegisters(t,e),S.getClip().setRegisters(t,e);var l=yt(c.toEventType(e),t);f.extend(l,t),lt(w)&&(st(l),B=w,E++)}}function it(e){var t=e.ns_st_mp;t!=null&&(j=t,delete e.ns_st_mp),t=e.ns_st_mv,t!=null&&(F=t,delete e.ns_st_mv),t=e.ns_st_ec,t!=null&&(E=Number(t),delete e.ns_st_ec)}function st(t,n){n===undefined&&(n=!0),n&&ut(t);var r=s.getPixelURL();if(x){if(!ot()){var i=R.am,o=R.et,u=i.newApplicationMeasurement(x,o.HIDDEN,t,r);x.getQueue().offer(u)}}else r&&e(a(r,t))}function ot(){var e=x.getAppContext(),t=x.getSalt(),n=x.getPixelURL();return e==null||t==null||t.length==0||n==null||n.length==0}function ut(e){I=yt(null),f.extend(I,e)}function at(e,t){var n=ht(t);if(e==c.PLAYING)S.addPlaybackTime(n),W(),Q();else if(e==c.BUFFERING)S.addBufferingTime(n),Z();else if(e==c.IDLE){var r=f.getKeys(S.getClip().getLabels());S.getClip().reset(r)}}function ft(e,t){var n=ht(t),r=ct(t);g=r,e==c.PLAYING?(z(),J(),S.getClip().setPlaybackTimestamp(n),lt(e)&&(S.getClip().incrementStarts(),S.getStarts()<1&&S.setStarts(1))):e==c.PAUSED?lt(e)&&S.incrementPauses():e==c.BUFFERING?(S.getClip().setBufferingTimestamp(n),C&&G()):e==c.IDLE&&X()}function lt(e){return e!=c.PAUSED||B!=c.IDLE&&B!=null?e!=c.BUFFERING&&B!=e:!1}function ct(e){var t=-1;return e.hasOwnProperty("ns_st_po")&&(t=f.getInteger(e.ns_st_po)),t}function ht(e){var t=-1;return e.hasOwnProperty("ns_ts")&&(t=Number(e.ns_ts)),t}function pt(e){return e!=null&&vt()!=e}function dt(e){w=e,m=+(new Date)}function vt(){return w}function mt(e){b=e}function gt(){return b}function yt(){var e,t;arguments.length==1?(e=c.toEventType(w),t=arguments[0]):(e=arguments[0],t=arguments[1]);var n={};if(typeof document!="undefined"){var r=document;n.c7=r.URL,n.c8=r.title,n.c9=r.referrer}return t!=null&&f.extend(n,t),n.hasOwnProperty("ns_ts")||(n.ns_ts=String(+(new Date))),e!=null&&!n.hasOwnProperty("ns_st_ev")&&(n.ns_st_ev=l.toString(e)),s.isPersistentLabelsShared()&&x&&f.extend(n,x.getLabels()),f.extend(n,s.getLabels()),bt(e,n),S.createLabels(e,n),S.getClip().createLabels(e,n),n.hasOwnProperty("ns_st_mp")||(n.ns_st_mp=j),n.hasOwnProperty("ns_st_mv")||(n.ns_st_mv=F),n.hasOwnProperty("ns_st_ub")||(n.ns_st_ub="0"),n.hasOwnProperty("ns_st_br")||(n.ns_st_br="0"),n.hasOwnProperty("ns_st_pn")||(n.ns_st_pn="1"),n.hasOwnProperty("ns_st_tp")||(n.ns_st_tp="1"),n.hasOwnProperty("ns_st_it")||(n.ns_st_it="c"),n.ns_st_sv=p.STREAMSENSE_VERSION,n.ns_type="hidden",n}function bt(e,t){var n=t||{};n.ns_st_ec=String(E);if(!n.hasOwnProperty("ns_st_po")){var r=g,i=ht(n);if(e==l.PLAY||e==l.KEEP_ALIVE||e==l.HEART_BEAT||e==null&&w==c.PLAYING)r+=i-S.getClip().getPlaybackTimestamp();n.ns_st_po=f.getInteger(r)}return e==l.HEART_BEAT&&(n.ns_st_hc=String(D)),n}function wt(e){var t=ht(e);t<0&&(e.ns_ts=String(+(new Date)))}function Et(e,t,n){t=t||{},t.ns_st_ad=1,e>=l.AD_PLAY&&e<=l.AD_CLICK&&s.notify(e,t,n)}function St(e,t){s.notify(l.CUSTOM,e,t)}var s=this,o=500,h,d=null,m=0,g=0,y,b,w,E=0,S=null,x,T=!0,N,C=!0,k,L,A=p.DEFAULT_HEARTBEAT_INTERVAL,O=p.DEFAULT_KEEP_ALIVE_INTERVAL,M=p.DEFAULT_PAUSED_ON_BUFFERING_INTERVAL,_=0,D=0,P=0,H=!1,B,j,F,I,q,R={};f.extend(this,{reset:function(e){S.reset(e),S.setPlaylistCounter(0),S.setPlaylistId(+(new Date)+"_1"),S.getClip().reset(e),e!=null&&!e.isEmpty()?f.filterMap(h,e):h={},E=1,D=0,W(),X(),Q(),Z(),tt(),w=c.IDLE,b=null,m=-1,B=null,j=p.DEFAULT_PLAYERNAME,F=p.STREAMSENSE_VERSION,I=null},setPauseOnBufferingInterval:function(e){M=e},getPauseOnBufferingInterval:function(){return M},setKeepAliveInterval:function(e){O=e},getKeepAliveInterval:function(){return O},setHeartbeatIntervals:function(e){A=e},notify:function(){var e,t,n,r;t=arguments[0],arguments.length==3?(n=arguments[1],r=arguments[2]):(n={},r=arguments[1]),e=nt(t);var i=f.extend({},n);wt(i),i.hasOwnProperty("ns_st_po")||(i.ns_st_po=f.getInteger(r).toString());if(t==l.PLAY||t==l.PAUSE||t==l.BUFFER||t==l.END)s.isPausePlaySwitchDelayEnabled()&&et(w)&&et(e)&&(w!=c.PLAYING||e!=c.PAUSED||!!y)?rt(e,i,o):rt(e,i);else{var u=yt(t,i);f.extend(u,i),st(u,!1),E++}},getLabels:function(){return h},getState:function(){return w},setLabels:function(e){e!=null&&(h==null?h=e:f.extend(h,e))},getLabel:function(e){return h[e]},setLabel:function(e,t){t==null?delete h[e]:h[e]=t},setPixelURL:function(e){if(e==null||e.length==0)return null;var t=decodeURIComponent||unescape,n=e.indexOf("?");if(n>=0){if(n<e.length-1){var r=e.substring(n+1).split("&");for(var i=0,o=r.length;i<o;i++){var u=r[i],a=u.split("=");a.length==2?s.setLabel(a[0],t(a[1])):a.length==1&&s.setLabel(p.PAGE_NAME_LABEL,t(a[0]))}e=e.substring(0,n+1)}}else e+="?";return d=e,d},getPixelURL:function(){return d?d:typeof ns_p!="undefined"&&typeof ns_p.src=="string"?d=ns_p.src.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):typeof ns_pixelUrl=="string"?d=ns_pixelUrl.replace(/&amp;/,"&").replace(/&ns__t=\d+/,""):null},isPersistentLabelsShared:function(){return T},setPersistentLabelsShared:function(e){T=e},isPauseOnBufferingEnabled:function(){return C},setPauseOnBufferingEnabled:function(e){C=e},isPausePlaySwitchDelayEnabled:function(){return H},setPausePlaySwitchDelayEnabled:function(e){H=e},setPausePlaySwitchDelay:function(e){e&&e>0&&(o=e)},getPausePlaySwitchDelay:function(){return o},setClip:function(e,t){var n=!1;return w==c.IDLE&&(S.getClip().reset(),S.getClip().setLabels(e,null),t&&S.incrementStarts(),n=!0),n},setPlaylist:function(e){var t=!1;return w==c.IDLE&&(S.incrementPlaylistCounter(),S.reset(),S.getClip().reset(),S.setLabels(e,null),t=!0),t},importState:function(e){reset();var t=f.extend({},e);S.setRegisters(t,null),S.getClip().setRegisters(t,null),it(t),E++},exportState:function(){return I},getVersion:function(){return p.STREAMSENSE_VERSION},addListener:function(e){q.push(e)},removeListener:function(e){q.splice(f.indexOf(e,q),1)},getClip:function(){return S.getClip()},getPlaylist:function(){return S},setHttpGet:n,setHttpPost:r}),f.extend(this,{adNotify:Et,customNotify:St,viewNotify:function(e,t){e=e||s.getPixelURL(),e&&u(e,t)}}),ns_.comScore&&(R=ns_.comScore.exports,x=R.c()),h={},E=1,w=c.IDLE,S=new v,N=null,C=!0,L=null,D=0,X(),k=null,y=null,H=!1,B=null,g=0,q=[],s.reset(),t&&s.setLabels(t),i&&s.setPixelURL(i)};return function(e){function i(e,n){return t[r]||o(e,n)}function s(){r=-1;for(var e=0;e<=n;e++)if(t.hasOwnProperty(e)){r=e;break}return ns_.StreamSense.activeIndex=r,r}function o(e,r){return e=e||null,r=r||null,e&&typeof e=="object"&&(r=e,e=null),t[++n]=new ns_.StreamSense(r,e),s(),t[n]}function u(){var e=!1,n=r;if(typeof arguments[0]=="number"&&isFinite(arguments[0]))n=arguments[0];else if(arguments[0]instanceof ns_.StreamSense)for(var i in t)if(t[i]===arguments[0]){n=i;break}return t.hasOwnProperty(n)&&(e=t[n],delete t[n],e.reset(),s()),e}function a(e){return e=e||{},i().setPlaylist(e),i().getPlaylist()}function l(e,t,n){return e=e||{},typeof t=="number"&&(e.ns_st_cn=t),i().setClip(e,n),i().getClip()}function c(e,t,n){return typeof e=="undefined"?!1:(n=n||null,t=t||{},i().notify(e,t,n))}function h(e){typeof e!="undefined"&&i().setLabels(e)}function p(){return i().getLabels()}function d(e){typeof e!="undefined"&&i().getPlaylist().setLabels(e)}function v(){return i().getPlaylist().getLabels()}function m(e){typeof e!="undefined"&&i().getClip().setLabels(e)}function g(){return i().getClip().getLabels()}function y(e){return i().reset(e||{})}function b(e){return i().getPlaylist().reset(e||{})}function w(e){return i().getClip().reset(e||{})}function E(e){return e=e||{},i().viewNotify(null,e)}function S(e,t){return arguments.length>2&&(e=arguments[1],t=arguments[2]),e=e||{},typeof t=="number"&&(e.ns_st_po=t),i().customNotify(e,t)}function x(){return i().exportState()}function T(e){i().importState(e)}var t={},n=-1,r=-1;f.extend(e,{activeIndex:r,newInstance:o,"new":o,destroyInstance:u,destroy:u,newPlaylist:a,newClip:l,notify:c,setLabels:h,getLabels:p,setPlaylistLabels:d,getPlaylistLabels:v,setClipLabels:m,getClipLabels:g,resetInstance:y,resetPlaylist:b,resetClip:w,viewEvent:E,customEvent:S,exportState:x,importState:T})}(t),t}();return m.AdEvents=h,m.PlayerEvents=l,ns_.StreamingTag=ns_.StreamingTag||function(){var e=function(){var e=function(e){function a(){if(f.exists(e)&&f.exists(e.customerC2)){var t=e.secure?"https://sb":"http"+(document.location.href.charAt(4)=="s"?"s://sb":"://b");u.setPixelURL(t+".scorecardresearch.com/p?c1=2"),u.setLabel("c2",e.customerC2),u.setLabel("ns_st_it","r")}}function h(e){return f.exists(e)||(e={}),f.exists(e.ns_st_ci)||(e.ns_st_ci="0"),f.exists(e.c3)||(e.c3="*null"),f.exists(e.c4)||(e.c4="*null"),f.exists(e.c6)||(e.c6="*null"),e}function p(e){return r>0&&e>=r?i+=e-r:i=0,i}function d(e){u.getState()!=c.IDLE&&u.getState()!=c.PAUSED?u.notify(l.END,p(e)):u.getState()==c.PAUSED&&u.notify(l.END,i)}function v(e){return g("ns_st_ci",s,e)&&g("c3",s,e)&&g("c4",s,e)&&g("c6",s,e)}function g(e,t,n){if(f.exists(e)&&f.exists(t)&&f.exists(n)){var r=t[e],i=n[e];return f.exists(r)&&f.exists(i)&&r===i}return!1}function y(e,t){d(e),n++,u.setClip({ns_st_cn:n,ns_st_pn:"1",ns_st_ct:"vc",ns_st_tp:"0"}),u.getClip().setLabels(t),s=t,r=e,i=0,u.notify(l.PLAY,i)}var t=this,n=0,r=0,i=0,s=null,o=!1,u=new m;f.extend(this,{playAdvertisement:function(){var e=+(new Date);d(e),n++;var t=h(null);t.ns_st_cn=n,t.ns_st_pn="1",t.ns_st_ct="va",t.ns_st_tp="1",t.ns_st_ad="1",u.setClip(t),i=0,u.notify(l.PLAY,i),r=e,o=!1},playContentPart:function(e){var t=+(new Date);e=h(e),o?v(e)?(u.getClip().setLabels(e),u.getState()!=c.PLAYING&&(r=t,u.notify(l.PLAY,i))):y(t,e):y(t,e),o=!0},stop:function(){var e=+(new Date);u.notify(l.PAUSE,p(e))}}),a()};return function(e){}(e),e}();return e}(),m}();
;/*
 * this file is part of
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010-2014, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * 
 * under GNU General Public License
 * http://www.projekktor.com/license/
 * ,------------------------------------------,      .    _  .
 * |  Naaah, love shines through !!1          |      |\_|/__/|
 * |------------------------------------------|     / / \/ \  \
 *                                           \     /__|O||O|__ \
 *                                             \  |/_ \_/\_/ _\ |
 *                                                | | (____) | ||
 *                                                \/\___/\__/  //
 *                                                (_/         ||
 *                                                 |          ||
 *                                                 |          ||\
 *                                                  \        //_/
 *                                                   \______//
 *                                                 __ || __||
 *                                                (____(____)
 */
jQuery(function($) {
var projekktors = [];

// apply IE8 html5 fix - thanx to Remy Sharp - http://remysharp.com/2009/01/07/html5-enabling-script/
if (!!document.createElement('video').canPlayType) {
    (function(){
        if(!/*@cc_on!@*/0) return;
        var e = "audio,video,track,source".split(',');
        for(var i=0;i<e.length;i++) {
            document.createElement(e[i]);
        }
    }
    )();
}

// this object is returned in case multiple player's are requested
function Iterator(arr) {
    this.length = arr.length;
    this.each = function(fn) {$.each(arr, fn);};
    this.size = function() {return arr.length;};
};

// make sure projekktor works with jquery 1.3, 1.4, 1.5, 1.6:
if (!$.fn.prop) {
    $.fn.prop = function(arga, argb) {
        return $(this).attr(arga, argb);
    };
}
    
projekktor = $p = function() {

    var arg = arguments[0],
        instances = [],
        plugins = [];

    if (!arguments.length) {
        return projekktors[0] || null;
    }

    // get instances
    // projekktor(idx:number);
    if (typeof arg == 'number') {
        return projekktors[arg];
    }

    // by string selection unqiue "id" or "*"
    if (typeof arg == 'string') {
    
        // get all instances
        if (arg == '*') {
            return new Iterator(projekktors);
        }

        // get instance by Jquery OBJ, 'containerId' or selector
        for (var i=0; i<projekktors.length; i++) {
            try {
                if (projekktors[i].getId() == arg.id) {
                    instances.push(projekktors[i]);
                    continue;
                }
            } catch(e){}
            try {
                for (var j=0; j<$(arg).length; j++) {
                    if (projekktors[i].env.playerDom.get(0)==$(arg).get(j)) { instances.push(projekktors[i]); continue; }
                }
            } catch(e){}
            try {
                if (projekktors[i].getParent() == arg) {
                    instances.push(projekktors[i]);
                    continue;
                }
            } catch(e){}
            try {
                if (projekktors[i].getId() == arg) {
                    instances.push(projekktors[i]);
                    continue;
                }
            } catch(e){}
        }
    
        if (instances.length>0) {
            return (instances.length==1) ? instances[0] : new Iterator(instances);
        }
    }

    // build instances
    if (instances.length===0) {
        var cfg = arguments[1] || {},
            callback = arguments[2] || {},
            count=0,
            playerA;
            
        if (typeof arg == 'string') {
            $.each($(arg), function() {
                playerA = new PPlayer($(this), cfg, callback);
                projekktors.push(playerA);
                count++;
            });
            return (count>1) ? new Iterator(projekktors) : playerA;
            // arg is a DOM element
        } else if (arg) {
            projekktors.push(new PPlayer(arg, cfg, callback));
            return new Iterator(projekktors);
        }
    }

    return null;

    function PPlayer(srcNode, cfg, onReady) {

    this.config = new projekktorConfig('1.4.00');
    

    this.env = {
        muted: false,
        playerDom: null,
        mediaContainer: null,
        agent: 'standard',
        mouseIsOver: false,
        loading: false,  // important
        className: '',
        onReady: onReady
    };

    this.media = [];
    this._plugins = [];
    this._pluginCache = {};
    this._queue = [];
    this._cuePoints = {};
    this.listeners = [];
    this.playerModel = {};
    this._isReady = false;
    this._maxElapsed = 0;
    this._playlistServer = '';
    this._id = '';
    this._parsers = [];

    this.itemRules = [
        function() {
            return arguments[0].ID != null;
        },
        function() {
            return arguments[0].config.active !== false ;
        },
        function() {
            return arguments[0].config.maxviews == null || arguments[0].viewcount < arguments[0].config.maxviews;
        }        
    ];
    
    this._addItem = function(data, idx, replace) {
        var resultIdx = 0;

        // inject or append:
        if (idx===undefined || idx<0 || idx>this.media.length-1) {
            this.media.push(data);
            resultIdx = this.media.length-1;
        } else {
            this.media.splice(idx, (replace===true) ? 1 : 0,data);
            resultIdx = idx;
        }

        // remove error model in case it is not required:
        if (this.media.length==2) {
            this.media = $.grep(this.media, function(value) {               
                return value.mediaModel != "NA";
            });
            
            if (this.playerModel.modelId=='NA') {
                this.playerModel = null;
                this.setActiveItem(0);
            }
        }
        
        this._promote('scheduleModified', this.getItemCount());
        return resultIdx;
    };

    this._removeItem = function(idx) {
        var resultIdx = 0;

        if (this.media.length===1) {
            // keep "error dummy", nothing to do:
            if (this.media[0].mediaModel=='NA') {
                return 0;
            } else {
                // replace last one with "error dummy"
                this.media[0] = this._prepareMedia({file:''});
                return 0;
            }
        }

        if (idx===undefined || idx<0 || idx>this.media.length-1) {
            this.media.pop();
            resultIdx = this.media.length;
        }
        else {
            this.media.splice(idx, 1);
            resultIdx = idx;
        }

        this._promote('scheduleModified', this.getItemCount(), this.getPlaylist());

        return resultIdx;
    };

    this._canPlay = function(mediaType, platform, streamType) {
        var ref = this,
            checkIn = [],
            checkFor = [],
            st = streamType || 'http',
            pltfrm = (typeof platform=='object') ? platform : [platform],
            type = (mediaType) ? mediaType.replace(/x-/, '') : undefined,
            tm = ref._testMediaSupport();

        $.each(pltfrm, function(nothing, plt) {
            $.each($.extend(tm[st], tm['*'] || []) || [], function(thisPlatform, val) {               
                if (plt!=null) {
                    if (thisPlatform!=plt) {
                        return true;
                    }
                }
                checkIn = $.merge(checkIn, this);
                return true;
            });
        });

        if (checkIn.length===0) {
            return false;
        }

        switch (typeof type) {
            case 'undefined':
                return checkIn.length>0;
            case 'string':                    
                if (type=='*')
                    return checkIn;
                checkFor.push(type);
                break;
            case 'array':
                checkFor = type;
                break;
        }

        for(var i in checkFor) {
            if ($p.mmap.hasOwnProperty(i)) {
                if (typeof checkFor[i] !== 'string') break;
                if ($.inArray( checkFor[i], checkIn)>-1) {
                    return true;
                }
            }
        }

        return false;
    };    
    
    /* apply available data and playout models */
    this._prepareMedia = function(data) {
        var ref = this,
            types = [],
            mediaFiles = [],
            qualities = [],
            extTypes = {},
            typesModels = {},
            modelSets = [],
            result = {},
            extRegEx = [],
            bestMatch = 0;

        // build regex string and filter dublicate extensions and more ...        
        for(var mmapIndex in $p.mmap ) {
            if ($p.mmap.hasOwnProperty(mmapIndex)) {
                platforms = (typeof $p.mmap[mmapIndex].platform=='object') ? $p.mmap[mmapIndex].platform : [ $p.mmap[mmapIndex].platform ];
                $.each(platforms, function(_na, platform) {
                    var k = 0,
                        streamType = 'http';
    
                    for (var j in data.file) {
                        if (data.file.hasOwnProperty(j)) {
                            if (j==='config') continue; 
                            streamType = data.file[j].streamType || data.config.streamType || 'http';

                            if ( ref._canPlay($p.mmap[mmapIndex].type, platform, streamType) ) {
                                k++;
                            }
                            
                            // this platform does not support any of the provided streamtypes:
                            if (k===0) {
                                continue;
                            }

                            // set priority level
                            $p.mmap[mmapIndex].level = $.inArray(platform, ref.config._platforms);
                            $p.mmap[mmapIndex].level = ($p.mmap[mmapIndex].level<0) ? 100 : $p.mmap[mmapIndex].level;
                        
                            // upcoming fun:
                            extRegEx.push( '.'+$p.mmap[mmapIndex].ext );
                            
                            // build extension2filetype map
                            if (!extTypes[$p.mmap[mmapIndex].ext]) {
                                extTypes[$p.mmap[mmapIndex].ext] = [];
                            }                            
                            extTypes[$p.mmap[mmapIndex].ext].push( $p.mmap[mmapIndex] );

                            if ($p.mmap[mmapIndex].streamType===null || $p.mmap[mmapIndex].streamType=='*' || $.inArray(streamType  || [], $p.mmap[mmapIndex].streamType || '')>-1) {

                                if (!typesModels[$p.mmap[mmapIndex].type]) {
                                    typesModels[$p.mmap[mmapIndex].type] = [];
                                }

                                k = -1;
                                for(var ci = 0, len = typesModels[$p.mmap[mmapIndex].type].length; ci < len; ci++) {                           
                                    if (typesModels[$p.mmap[mmapIndex].type][ci].model == $p.mmap[mmapIndex].model) {
                                       k = ci;
                                       break;
                                    }
                                }                                

                                if (k===-1) {
                                    typesModels[$p.mmap[mmapIndex].type].push( $p.mmap[mmapIndex] );                        
                                }
                                
                            }
                            continue;
                        }
                    }
                    return true;
                });                
            }
           
        }
        extRegEx = '^.*\.(' + extRegEx.join('|') + ")$";

        // incoming file is a string only, no array
        if (typeof data.file=='string') {
            data.file = [{'src':data.file}];
            if (typeof data.type=='string') {
                data.file = [{'src':data.file, 'type':data.type}];
            }
        }

        // incoming file is ... bullshit
        if ($.isEmptyObject(data) || data.file===false || data.file === null) {
            data.file = [{'src':null}];
        }

        for(var index in data.file) {
            if (data.file.hasOwnProperty(index)) {

                // meeeep
                if (index=='config') continue;
        
                // just a filename _> go object
                if (typeof data.file[index]=='string') {
                    data.file[index] = {'src':data.file[index]};
                }

                // nothing to do, next one
                if (data.file[index].src==null) {
                    continue;
                }
 
                // get file extension:
                /**
                try {
                    data.file[index].ext = data.file[index].src.match( new RegExp(extRegEx))[1];
                    data.file[index].ext = (!data.file[index].ext) ? 'NaN' : data.file[index].ext.replace('.','');
                } catch(e) { data.file[index].ext='NaN'; }
                */

                // if type is set, get rid of the codec mess
                if ( data.file[index].type!=null && data.file[index].type!=='') {
                    try {
                        var codecMatch = data.file[index].type.split(' ').join('').split(/[\;]codecs=.([a-zA-Z0-9\,]*)[\'|\"]/i);
                        if (codecMatch[1]!=null) {
                            data.file[index].codec = codecMatch[1];                
                        }
                        data.file[index].type = codecMatch[0].replace(/x-/, '');
                        data.file[index].originalType = codecMatch[0];
      
                    } catch(e){}
                }
                else {
                    data.file[index].type = this._getTypeFromFileExtension( data.file[index].src );                   
                }
        
                if (typesModels[data.file[index].type] && typesModels[data.file[index].type].length>0) {
                      
                    typesModels[data.file[index].type].sort(function(a, b) {
                        return a.level - b.level;
                    });
               
                    modelSets.push(typesModels[data.file[index].type] [0]);
                }
            }
        }

        if (modelSets.length===0) {
            modelSets = typesModels['none/none'];
        }
        else {
        
            // find highest priorized playback model
            modelSets.sort(function(a, b) {
                return a.level - b.level;
            });
 
            bestMatch = modelSets[0].level;
            
            modelSets = $.grep(modelSets, function(value) {
                return value.level == bestMatch;
            });
        }

        types = [];
        $.each(modelSets || [], function() {
            types.push(this.type);
        });
            

        var modelSet = (modelSets && modelSets.length>0) ? modelSets[0] : {type:'none/none', model: 'NA', errorCode: data.errorCode || 11, config: data.config};

        types = $p.utils.unique(types);

        for (index in data.file) {
            if (data.file.hasOwnProperty(index)) {
            
                if (!data.availableFiles) {
                    data.availableFiles = data.file;
                }
               
            
                // discard files not matching the selected model
                if (data.file[index].type==null)
                    continue;
                
                if ( ($.inArray( data.file[index].type.replace(/x-/, ''), types)<0) && modelSet.type!='none/none') {
                    continue;
                }
                
                // make srcURL absolute for non-RTMP files
                if ($.isEmptyObject(data.config) || data.config.streamType==null || data.config.streamType.indexOf('rtmp')==-1) {
                    data.file[index].src = $p.utils.toAbsoluteURL(data.file[index].src);
                }
     
                // set "default" quality
                if ( data.file[index].quality==null)
                    data.file[index].quality = 'default';
                
                // add this files quality key to index
                qualities.push(data.file[index].quality)
                
                // add media variant
                mediaFiles.push(data.file[index])        
            }
        }         
    
        if (mediaFiles.length===0) {
            mediaFiles.push({src:null, quality:"default"});
        }
  
        // check quality index against configured index:
        var _setQual = [];
        $.each(this.getConfig('playbackQualities'), function() {
            _setQual.push(this.key || 'default');
        });
            
        result = {
            ID: data.config.id || $p.utils.randomId(8),
            cat: data.config.cat || 'clip',
            file: mediaFiles,
            availableFiles: data.availableFiles,
            platform: modelSet.platform,
            platforms: platforms,
            qualities: $p.utils.intersect($p.utils.unique(_setQual), $p.utils.unique(qualities)),
            mediaModel: modelSet.model || 'NA', 
            errorCode: modelSet.errorCode || data.errorCode || 7,
            viewcount: 0,
            config:  data.config || {}                   
        } 

        return result;
    };
    
    
    /********************************************************************************************
        Event Handlers:   
    *********************************************************************************************/
     
    /* Event Handlers */

    this.displayReadyHandler = function() {
        this._syncPlugins('displayready');
    };
    
    this.modelReadyHandler = function() {
        this._maxElapsed = 0;
        this._promote('item', this.getItemIdx());
    };
    
    this.pluginsReadyHandler = function(obj) {
        switch (obj.callee) {
            
            case 'parserscollected':
                var parser = this._parsers.pop();
                this.setPlaylist(parser(obj.data));
                break;
                if (this.getItemCount()<1) {
                    this.setPlaylist();
                }                
                break;
            
            case 'reelupdate':
                this.setActiveItem(0);
                break;
            
            case 'displayready':
                this._addGUIListeners();
                 this._promote('synchronized');
                if (this.getState('AWAKENING')) {
                    this.playerModel.start(); 
                }
                if (!this._isReady) {
                    this._promote('ready');
                    this._isReady = true;
                }                
                break;
            
            case 'awakening':            
                if (this.getState('AWAKENING')) {
                    this.playerModel.displayItem(true);
                }
                break;
        }
    };
    
    this.readyHandler = function() {
        if (typeof onReady==='function') {
            onReady(this);
        }
    };
    
    this.stateHandler = function(stateValue) { 
        var ref = this,
            modelRef = this.playerModel;
            
        // change player css classes in order to reflect current state:
        var classes = $.map(this.getDC().attr("class").split(" "), function(item) {
            return item.indexOf(ref.getConfig('ns') + "state") === -1 ? item : null;
        });

        classes.push(this.getConfig('ns') + "state" + stateValue.toLowerCase() );
        this.getDC().attr("class", classes.join(" "));
           
        switch (stateValue) {
            case 'STARTING':
                this.getItem().viewcount++;
                break;
            
            case 'AWAKENING':
                this._syncPlugins('awakening');
                break;
        
            case 'ERROR':
                this._addGUIListeners();
                break;
        
            case 'COMPLETED':
                this.setActiveItem('next');
                break;
            
            case 'IDLE':
                if (this.getConfig('leaveFullscreen')) {
                    this.setFullscreen(false);
                }
        }
    };
        
    this.volumeHandler = function(value) {
        this.setConfig({volume: value});
        if (value<=0) {
            this.env.muted = true;
            this._promote('mute', value);
        } else if (this.env.muted===true) {
            this.env.muted = false;
            this._promote('unmute', value);
        }        
    };
    
    this.playlistHandler = function(value) {
        this.setFile(value.file, value.type);      
    };
    
    this.scheduleLoadedHandler = function(xmlDocument) {
        this._parsers.push(
            function (data) {
                return data;
            }
        )        
    };
                
    
    this.fullscreenHandler = function(value) {
        var nativeFullscreen = this.getNativeFullscreenSupport(); 

        if (value===true) {        	
        	if (nativeFullscreen.supportsFullScreen != 'mediaonly') {
	        	this.getDC().addClass('fullscreen');
	            this._enterFullViewport();
        	}
            nativeFullscreen.requestFullScreen();
        }
        else {
            this.getDC().removeClass('fullscreen');
            this._exitFullViewport();
            nativeFullscreen.cancelFullScreen();
        }
    };
    
    this.configHandler = function(value) {
        this.setConfig(value);
    };
    
    this.timeHandler = function(value) {
        if (this._maxElapsed<value) {
            var pct = Math.round(value * 100 / this.getDuration()),
                evt=false;
            
            if (pct < 25) {pct=25;}
            if (pct > 25 && pct < 50) {evt='firstquartile'; pct=50;}
            if (pct > 50 && pct < 75) {evt='midpoint'; pct=75;}
            if (pct > 75 && pct < 100) {evt='thirdquartile'; pct=100;}
            
            if (evt!==false) this._promote(evt, value);
            this._maxElapsed = (this.getDuration() * pct / 100);
        }
    };
    
    this.availableQualitiesChangeHandler = function(value) {
        this.getItem().qualities = value;
    };
    
    this.qualitiyChangeHandler = function(value) {
        this.setConfig({playbackQuality: value});          
    };
    
    this.streamTypeChangeHandler = function(value) {
        if (value=='dvr') {
            this.getDC().addClass(this.getNS() + 'dvr');
        }        
    };
    
    this.errorHandler = function(value) {
        if (this.getConfig('skipTestcard')) {
           this.setActiveItem('next');
        } 
    }; 

    this.doneHandler = function() {
        this.setActiveItem(0, false);
        // prevent player-hangup in sitiations where
        // playlist becomes virtually empty by applied filter rules (e.g. maxviews)
        if (!this.getNextItem()) {
            this.reset();
        }
    };
      
    this._syncPlugins = function(callee, data) {
        // wait for all plugins to re-initialize properly
        var ref = this,
            sync = function() {
            try{
                if (ref._plugins.length>0) {
                    for(var i=0; i<ref._plugins.length; i++) {
                        if (!ref._plugins[i].isReady()) {
                            setTimeout(arguments.callee,50);
                            return;
                        }
                    }
                }
                ref._promote('pluginsReady', {callee: callee, data: data});                        
            } catch(e) {}
        };

        setTimeout(sync, 50);
    };

    this._MD = function(event) {
        projekktor('#'+event.currentTarget.id.replace(/_media$/,''))._playerFocusListener(event);
    };

    /* attach mouse-listeners to GUI elements */
    this._addGUIListeners = function() {
        var ref = this;
        
        this._removeGUIListeners();

        if (this.getDC().get(0).addEventListener) {
            this.getDC().get(0).addEventListener("mousedown", this._MD, true);
        }
        else {
            // IE *sigh*
            this.getDC().mousedown(function(event){ref._playerFocusListener(event);});
        }
        
        this.getDC()
            .mousemove(function(event){ref._playerFocusListener(event);})
            .mouseenter(function(event){ref._playerFocusListener(event);})
            .mouseleave(function(event){ref._playerFocusListener(event);})
            .focus(function(event){ref._playerFocusListener(event);})
            .blur(function(event){ref._playerFocusListener(event);});
            // .bind('touchstart', function(){ref._MD})
        
        if (this.config._preventAutoScaling!=true) {
        	$(window).bind('resize.projekktor'+this.getId(), function() {ref.setSize();})        	
        }
        
        $(window).bind('touchstart', function(){ref._windowTouchListener(event);});

        if (this.config.enableKeyboard===true) {
            $(document).unbind('keydown.pp'+this._id);
            $(document).bind('keydown.pp'+this._id, function(evt){
                ref._keyListener(evt);
            });
        }
        
    };

    /* remove mouse-listeners */
    this._removeGUIListeners = function() {
        $("#"+this.getId()).unbind();
        this.getDC().unbind();

        if (this.getDC().get(0).removeEventListener) {
            this.getDC().get(0).removeEventListener("mousedown", this._MD, true);
        }
        else {
            this.getDC().get(0).detachEvent('onmousedown', this._MD);
        }

        $(window).unbind('resize.projekktor'+this.getId());
    };

    /* add plugin objects to the bubble-event queue */
    this._registerPlugins = function() {
        var plugins = $.merge($.merge([],this.config._plugins), this.config._addplugins),
        pluginName = '',
        pluginObj = null;

        // nothing to do
        if (this._plugins.length>0 || plugins.length===0) {
            return;
        }
        for(var i=0; i<plugins.length; i++) {
            pluginName = "projekktor"+plugins[i].charAt(0).toUpperCase() + plugins[i].slice(1);
            try {typeof eval(pluginName);} catch(e) {alert("Projekktor Error: Plugin '" + plugins[i] + "' malicious or not available."); continue;}
            pluginObj = $.extend(true, {}, new projekktorPluginInterface(), eval(pluginName).prototype);
            pluginObj.name = plugins[i].toLowerCase();
            pluginObj.pp = this;
            pluginObj.playerDom = this.env.playerDom;
            pluginObj._init( this.config['plugin_'+plugins[i].toLowerCase()] || {} );
        
            if (this.config['plugin_'+pluginObj.name]==null)
                this.config['plugin_'+pluginObj.name] = {};
            
            this.config['plugin_'+pluginObj.name] = $.extend(true, {}, pluginObj.config || {});

            for (var propName in pluginObj) {
                if (propName.indexOf('Handler')>1) {
                    if (this._pluginCache[propName]==null) {
                        this._pluginCache[propName]=[];
                    }
                    this._pluginCache[propName].push(pluginObj);
                }
            }
            
            this._plugins.push(pluginObj);
        }
    };

    /* removes some or all eventlisteners from registered plugins */
    this.removePlugins = function(rmvPl) {
        if (this._plugins.length==0) return;

        var pluginsToRemove = rmvPl || $.merge($.merge([],this.config._plugins), this.config._addplugins),
        pluginsRegistered = this._plugins.length;

        for (var j=0; j<pluginsToRemove.length; j++){
            for (var k=0; k<pluginsRegistered; k++){
                if (this._plugins[k]!=undefined) {
                    if (this._plugins[k].name==pluginsToRemove[j].toLowerCase()) {
                        this._plugins[k].deconstruct();
                        this._plugins.splice(k, 1);
                                  
                        for (var events in this._pluginCache){
                            for (var shortcuts=0; shortcuts<this._pluginCache[events].length; shortcuts++){
                                if (this._pluginCache[events][shortcuts].name==pluginsToRemove[j].toLowerCase()){
                                    this._pluginCache[events].splice(shortcuts, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    
    this.getPlugins = function() {
        var result = [];
        $.each(this._plugins, function() {
            result.push({name: this.name, ver: this.version || 'unknown'});
        });
        return result;
    };

    
    /* media element update listener */
    this._modelUpdateListener = function(evtName, value) {
        if (this.playerModel.init) {
            this._promote(evtName, value);
        }
    };
    
    this._promote = function(evt, value) {
        var ref = this;
        this._enqueue(function() { try {ref.__promote(evt, value);} catch(e) {} });
    };
    
    /* promote an event to all registered plugins */
    this.__promote = function(evt, value) {

        var event = evt,
            pluginData={};

        if (typeof event=='object') {        
            if (!event._plugin) return;
            event = 'plugin_' + event._plugin + $p.utils.capitalise(event._event.toUpperCase());
        }

        if (event!='time' && event!='progress' && event!='mousemove') {
            $p.utils.log("Event: ["+event+"]", value, this.listeners);
        }

        // fire on self:
        if (this[evt + 'Handler']) {
            this[evt + 'Handler'](value);
        }

        // fire on plugins
        if (this._pluginCache[event+"Handler"] && this._pluginCache[event+"Handler"].length>0) {
            for (var i = 0; i < this._pluginCache[event+"Handler"].length; i++) {
                if (this.getConfig('debug')) {
                    try {this._pluginCache[event+"Handler"][i][event+"Handler"](value, this);} catch(e) {$p.utils.log(e)}
                } else {
                	try {this._pluginCache[event+"Handler"][i][event+"Handler"](value, this); } catch(e) {}                   
                }
            }
        }

        if (this._pluginCache["eventHandler"] && this._pluginCache["eventHandler"].length>0) {
            for (var i = 0; i < this._pluginCache["eventHandler"].length; i++) {
                if (this.getConfig('debug')) {
                    try {this._pluginCache["eventHandler"][i]["eventHandler"](event, value, this);} catch(e) {$p.utils.log(e)}
                } else {
                	try {this._pluginCache["eventHandler"][i]["eventHandler"](event, value, this);} catch(e) {}
                }
            }
        }

        // fire on custom (3rd party) listeners
        if (this.listeners.length>0) {
            for (var i = 0; i < this.listeners.length; i++) {
                if ( this.listeners[i]['event']==event || this.listeners[i]['event']=='*' ) {
                    if (this.getConfig('debug')) {
                        try {this.listeners[i]['callback'](value, this);} catch(e) {$p.utils.log(e)}
                    } else {
                        this.listeners[i]['callback'](value, this);
                    }
                }
            }
        }
    };

    /* destoy, reset, break down to rebuild */
    this._detachplayerModel = function() {
        this._removeGUIListeners();
        try {
            this.playerModel.destroy();
            this._promote('detach', {});
        } catch(e) {
        // this.playerModel = new playerModel();
        // this.playerModel._init({pp:this, autoplay: false});
        }
    };


    /*******************************
          GUI LISTENERS
    *******************************/
    this._windowTouchListener = function(evt) {
        if (evt.touches) {
            if (evt.touches.length>0) {
                if (  ( $(document.elementFromPoint(evt.touches[0].clientX, evt.touches[0].clientY)).attr('id') || '').indexOf(this.getDC().attr('id'))>-1) {
                    if (this.env.mouseIsOver==false) {
                        this._promote('mouseenter', {});                        
                    }
                    this.env.mouseIsOver = true;
                    
                    this._promote('mousemove', {});
                    evt.stopPropagation();            
                } else if (this.env.mouseIsOver) {
                    this._promote('mouseleave', {});            
                    this.env.mouseIsOver = false;
                }                   
            }
        }
    };
        
        
    this._playerFocusListener = function(evt) {
        var type = evt.type.toLowerCase();
                   
        switch(type) {
            case 'mousedown':
                if (this.env.mouseIsOver==false)
                    break;
        
                // make sure we do not mess with input-overlays here:
                if ( "|TEXTAREA|INPUT".indexOf('|' + evt.target.tagName.toUpperCase()) > -1){        
                    return;
                }
                
                // prevent context-menu
                if (evt.which==3) {
                    if ($(evt.target).hasClass('context')) break;
                    $(document).bind('contextmenu', function(evt){
                        $(document).unbind('contextmenu');
                        return false;
                    });                    
                }
                break;
            
            case 'mousemove':
                if (this.env.mouseX!=evt.clientX && this.env.mouseY!=evt.clientY) {
                    this.env.mouseIsOver = true;
                }
                // prevent strange chrome issues with cursor changes:
                if (this.env.clientX==evt.clientX && this.env.clientY==evt.clientY)
                    return;
                this.env.clientX = evt.clientX;
                this.env.clientY = evt.clientY;
                break;
            
            case 'focus':
            case 'mouseenter':
                this.env.mouseIsOver = true;
                break;
            
            case 'blur':
            case 'mouseleave':
                this.env.mouseIsOver = false;
                break;
        }
        
        this._promote(type, evt);
        
    };

    this._keyListener = function(evt) {
        if (!this.env.mouseIsOver) return;
            
            // make sure we do not mess with input-overlays here:
        if ( "|TEXTAREA|INPUT".indexOf('|' + evt.target.tagName.toUpperCase()) > -1){        
            return;
        }             
    
        var ref = this,
            set = (this.getConfig('keys').length > 0) ? this.getConfig('keys') : [{
                13: function(player) { player.setFullscreen(!player.getInFullscreen()); }, // return;
                32: function(player, evt) {player.setPlayPause(); evt.preventDefault();}, // space
                39: function(player, evt) {player.setPlayhead('+5'); evt.preventDefault();}, // cursor right
                37: function(player, evt) {player.setPlayhead('-5'); evt.preventDefault();},  // cursor left
                38: function(player, evt) {player.setVolume('+0.05'); evt.preventDefault();},  // cursor up 
                40: function(player, evt) {player.setVolume('-0.05'); evt.preventDefault();}, // cursor down
                68: function(player) {player.setDebug();}, // D
                67: function(player) {$p.utils.log('Config Dump', player.config);}, // C
                80: function(player) {$p.utils.log('Schedule Dump', player.media);}, // P
                84: function(player) {$p.utils.log('Cuepoints Dump', player.getCuePoints());} // T
            }];
        
        this._promote('key', evt);

        $.each(  set || [], function() {
            try {this[evt.keyCode](ref, evt);} catch(e) {}
            try {this['*'](ref);} catch(e) {}
        });
    };

    /*******************************
    DOM manipulations
    *******************************/
    /* make player fill the whole window viewport */
    this._enterFullViewport = function(forcePlayer) {

        // get relevant elements
        var win = this.getIframeParent() || $(window),
            target = this.getIframe() || this.getDC(),
            overflow = $(win[0].document.body).css('overflow');

        if (forcePlayer) {
            win = $(window);
            target = this.getDC();
        }

        // prepare target:
        target.data('fsdata', {
            scrollTop: win.scrollTop() || 0,
            scrollLeft: win.scrollLeft() || 0,
            targetStyle: target.attr('style') || '',
            targetWidth: target.width(),
            targetHeight: target.height(),
            bodyOverflow: (overflow=='visible') ? 'auto' : overflow, // prevent IE7 crash
            bodyOverflowX: $(win[0].document.body).css('overflow-x'), // prevent IE7 crash
            bodyOverflowY: $(win[0].document.body).css('overflow-y'), // prevent IE7 crash
            iframeWidth: target.attr('width') || 0,
            iframeHeight: target.attr('height') || 0
        }).addClass('fullviewport');
              
        if ( target.is( this.getIframe()))
    	{
        	target.css({
            	position: 'absolute',
            	top: 0,
            	left: 0,
            	width: '100%',
            	height: '100%',
            	zIndex: 99999
            });	
    	}
        // prepare parent window
        win.scrollTop(0).scrollLeft(0);
        $(win[0].document.body).css({
            overflow: 'hidden',
            overflowX: 'hidden',
            overflowY: 'hidden'
        });
    };

    /* reset player from "full (parent) window viewport" iframe thing */
    this._exitFullViewport = function(forcePlayer) {
        // get relevant elements
        var win = this.getIframeParent() || $(window),
	        target = this.getIframe() || this.getDC(),
	        fsData = target.data('fsdata') || null;

        if (forcePlayer) {
	        win = $(window);
	        target = this.getDC();
        }
        
        // reset
        if (fsData!=null) {
            // rebuild parent window state
            win.scrollTop(fsData.scrollTop).scrollLeft(fsData.scrollLeft);
            $(win[0].document.body).css('overflow', fsData.bodyOverflow);
            $(win[0].document.body).css('overflow-x', fsData.bodyOverflowX);
            $(win[0].document.body).css('overflow-y', fsData.bodyOverflowY);
            
            // rebuild iframe:
            if ( fsData.iframeWidth > 0 && !forcePlayer) {
                target
                    .attr('width', fsData.iframeWidth+"px")
                    .attr('height', fsData.iframeHeight+"px");
            } else {
                target
                    .width(fsData.targetWidth)
                    .height(fsData.targetHeight);
            }
            target
                .attr('style', (fsData.targetStyle==null) ? '' : fsData.targetStyle )
                .removeClass('fullviewport')
                .data('fsdata', null);
        }
    };

    /*******************************
    plugin API wrapper
    *******************************/
    this.pluginAPI = function() {
        var args = Array.prototype.slice.call(arguments) || null,
            dest = args.shift(),
            func = args.shift();
        
        if (dest!=null && func!=null) {
            for (var j=0; j<this._plugins.length; j++){
                if (this._plugins[j].name==dest) {
                    this._plugins[j][func](args[0])
                    return;
                }
            }
        }
    };

    /*******************************
    public (API) methods GETTERS
    *******************************/
    this.getVersion = this.getPlayerVer = function() {
        return this.config._version;
    };
    
    this.getIsLastItem = function() {
        return this.getNextItem()!==false;
    };

    this.getIsFirstItem = function() {
        return this.getPreviousItem()!==false;
    };    
    
    this.getItemConfig = this.getConfig = function() {

        var idx = this.getItemIdx(),
            name = null,
            result = false;
      
        if (typeof arguments[0] == 'string') {
            name = arguments[0];
            result = (this.config['_'+name]!=null) ? this.config['_'+name] : this.config[name];
        }            
        else if (typeof arguments[0] == 'number') {
            idx = arguments[0]; 
        }           
             
        if (name==null) {
            return this.media[idx]['config'];
        }

        // get value from item-specific config (playlist level)
        if (this.config['_'+name]==null) {        
            try {
                if (this.media[idx]['config'][name]!==undefined) {
                    result = this.media[idx]['config'][name];            
                }
            } catch(e){}
            
            
            
        }
        

        if (name.indexOf('plugin_')>-1) {
            try {
                if (this.media[idx]['config'][name]) {
                    result = $.extend(true, {}, this.config[name], this.media[idx]['config'][name]);
                }
            } catch(e){}
        }
                  
                  
        if (result==null)
            return null;
     
        if (typeof result == 'object' && result.length === null) {
            result = $.extend(true, {}, result || {});
        }
        else if (typeof result == 'object') {
            result = $.extend(true, [], result || []);            
        }
     
        if (typeof result == 'string') {
            switch(result) {
                case 'true':
                    result = true;
                    break;
                case 'false':
                    result = false;
                    break;
                case 'NaN':
                case 'undefined':
                case 'null':
                    result = null;
                    break;
            }
        }

        return result;
    };
        
    this.getDC = function() {
        return this.env.playerDom;
    };

    this.getState = function(compare) {
        var result = 'IDLE';
        try {
                result =  this.playerModel.getState();
            } catch(e) {}

        if (compare!=null) {
                return (result==compare.toUpperCase());
            }
        return result;
    };

    this.getLoadProgress = function() {
        try {return this.playerModel.getLoadProgress();}
        catch(e) {return 0;}
    };

    this.getKbPerSec = function() {
        try {return this.playerModel.getKbPerSec();}
        catch(e) {return 0;}
    };

    this._testItem = function(item) {
        for(var r=0; r<this.itemRules.length; r++) {
            if (!this.itemRules[r](item)) {
                return false;
            }
        }       
        return true;
    };
    
    this.getItemAtIdx = function(atidx) {
        var ref = this,
            idx = atidx || 0,
            result = false;

        $.each(this.media.slice(idx), function() {
            if (!ref._testItem(this)) {
                return true;
            }
            result = this;
            return false;
        })
        
        return result;
    };    
    
    this.getNextItem = function() {
        var ref = this,
            idx = this.getItemIdx(),
            result = false;

        $.each(this.media.slice(idx+1), function() {
            if (!ref._testItem(this)) {
                return true;
            }
            result = this;
            return false;
        })
        
        if (this.getConfig('loop') && result===false) {          
            $.each(this.media.slice(), function() {
                if (!ref._testItem(this)) {
                    return true;
                }
                result = this;
                return false;
            })                    
        }        
        
        return result;
    };

    this.getPreviousItem = function() {
        var ref = this,
            idx = this.getItemIdx(),
            result = false;
            
        $.each(this.media.slice(0, idx).reverse(), function() {
            if (!ref._testItem(this)) {
                return true;
            }
            result = this;
            return false;
        })

        if (this.getConfig('loop') && result===false) {          
            $.each(this.media.slice().reverse(), function() {
                if (!ref._testItem(this)) {
                    return true;
                }
                result = this;
                return false;
            })                    
        }
        return result;    
    };
    
    this.getItemCount = function() {
        // ignore NA dummy
        return (this.media.length==1 && this.media[0].mediaModel=='na') ? 0 : this.media.length;
    };
    
    this.getItemId = function(idx) {
        try {
            return this.playerModel.getId();
        } catch(e) {
            return this.getItemAtIdx().ID;
        }
        
    };

    this.getItemIdx = function(itm) {
        var ref = this,
            item = itm || {ID: false};
            
        return $.inArray($.grep(this.media, function(e){ return (item.ID == e.ID || ref.getItemId() == e.ID); })[0], this.media );
    };

    this.getCurrentItem = function() {
        var ref = this;
        return $.grep(this.media, function(e){ return ref.getItemId() == e.ID; })[0] || false;
    };
    
    this.getPlaylist = function() {
        return this.getItem('*');
    };
        
    this.getItem = function(idx) {
        // ignore NA dummy
        if (this.media.length==1 && this.media[0].mediaModel=='na') {
            return null;
        }

        // some shortcuts    
        switch(arguments[0] || 'current') {
            case 'next':
                return this.getNextItem();
            case 'prev':
                return this.getPreviousItem();
            case 'current':
                return this.getCurrentItem();
            case '*':
                return this.media;
            default:
                return this.getItemAtIdx(idx);
        }
    };
        
    this.getVolume = function() {
        return (this.getConfig('fixedVolume')===true)
        ? this.config.volume
        : this.getConfig('volume');
    };

    this.getTrackId = function() {
        if (this.getConfig('trackId')) {
            return this.config.trackId;
        }
        if (this._playlistServer!=null) {
            return "pl"+this._currentItem;
        }
        return null;
    };

    this.getLoadPlaybackProgress = function() {
        try {return this.playerModel.getLoadPlaybackProgress()}
        catch(e) {return 0;}
    };
    
    this.getSource = function() {        
        try {return this.playerModel.getSource()[0].src;}
        catch(e) {return false;}
    };    

    this.getDuration = function() {
        try {return this.playerModel.getDuration();}
        catch(e) {return 0;}
    };

    this.getPosition = function() {
        try {return this.playerModel.getPosition() || 0;}
        catch(e) {return 0;}
    };
        
    this.getMaxPosition = function() {
        try {return this.playerModel.getMaxPosition() || 0;}
        catch(e) {return 0;}
    };
        
    this.getFrame = function() {
        try {return this.playerModel.getFrame() }
        catch(e) {return 0;}
    };        

    this.getTimeLeft = function() {
        try {return this.playerModel.getDuration() - this.playerModel.getPosition();}
        catch(e) {return this.getItem().duration;}
    };

    this.getInFullscreen = function() {
        return this.getNativeFullscreenSupport().isFullScreen();
    }

    this.getIsMuted = function() {
        return this.env.muted;
    }
    
    
    this.getMediaContainer = function() {
        // return "buffered" media container
        if (this.env.mediaContainer==null) {
            this.env.mediaContainer = $('#'+this.getMediaId());
        }
        
        // if mediacontainer does not exist ...
        if (this.env.mediaContainer.length==0 || !$.contains(document.body, this.env.mediaContainer[0])) {
            // and there is a "display", injectz media container
            if ( this.env.playerDom.find('.'+this.getNS()+'display').length>0 ) {
                this.env.mediaContainer = $(document.createElement('div'))
                    .attr({'id':this.getId()+"_media"}) // IMPORTANT IDENTIFIER
                    .css({
                       // position: 'absolute',
                        overflow: 'hidden',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        left: 0,
                        padding: 0,
                        margin: 0,
                        display: 'block'
                    })
                    .appendTo( this.env.playerDom.find('.'+this.getNS()+'display') );
            }    
            // elsewise create a 1x1 pixel dummy somewhere
            else {
                this.env.mediaContainer = $(document.createElement('div'))
                    .attr({id: this.getMediaId()})
                    .css({width: '1px', height: '1px'})
                    .appendTo( $(document.body) );
            }
        }
        
        // go for it
        return this.env.mediaContainer;
    };

    this.getMediaId = function() {
        return this.getId()+"_media";
    };
    

    this.getMediaType = function() {
        // might be called before a model has been initialized
        try {
            return this._getTypeFromFileExtension( this.playerModel.getSrc() ) || 'na/na';
        } catch(e) {
            return 'na/na';
        }
    };

    this.getUsesFlash = function() {
        // return (this.getPlatform)
    };

    this.getModel = function() {
        try {return this.getItem().mediaModel.toUpperCase()} catch(e) {return "NA";}
    };
        
    this.getIframeParent = this.getIframeWindow = function() {      
        try {
            var result = false;
            if(this.config._iframe)            
                result = parent.location.host || false;
            return (result===false) ? false : $(parent.window);                      
        } catch(e) {return false; }        
    };

    this.getIframe = function() {
        try {
        	var result = [];
            if(this.config._iframe)
            	result = window.$(frameElement) || [];
            return (result.length==0) ? false : result;
        } catch(e) { return false; }
        
    };
        
    this.getIframeAllowFullscreen = function() {
        var result = null;
        try {
            result = window.frameElement.attributes.allowFullscreen || window.frameElement.attributes.mozallowFullscreen || window.frameElement.attributes.webkitallowFullscreen || null;
        } catch(e) { result=true; }
        return (result!=null) ? true :  false;
    };

    this.getPlaybackQuality = function() {
        var result = 'default';
        try { result=this.playerModel.getPlaybackQuality();} catch(e) {}
        if (result=='default') result = this.getConfig('playbackQuality');
        if (result=='default' || $.inArray(result, this.getPlaybackQualities())==-1 ) result = this.getAppropriateQuality();
        if ($.inArray(result, this.getPlaybackQualities())==-1) result = 'default';
        return result;
    };
    
    this.getPlaybackQualities = function() {
        try {
            return $.extend(true, [], this.getItem().qualities || []);;
        } catch(e) {}
        return [];
    };    

    this.getIsMobileClient = function(what) {
        var uagent = navigator.userAgent.toLowerCase();

        var mobileAgents = ['android', "windows ce", 'blackberry', 'palm', 'mobile'];

        for (var i=0; i<mobileAgents.length; i++) {
        if (uagent.indexOf(mobileAgents[i])>-1) {
            // if (uagent.indexOf('webkit')>-1) return false;
            return (what) ? (mobileAgents[i].toUpperCase()==what.toUpperCase()) : true;
        }
        }
        return false;
    };
        
    this.getCanPlay = function(type, platform, streamType) {
        return this._canPlay(type, platform, streamType);
    }

        /* kept for historical reasons */
    this.getCanPlayNatively = function(type) {
        return this._canPlay(type, 'native');
    }
    
    this.getPlatform = function() {
        return this.getItem().platform  || 'error';
    };

    this.getPlatforms = function()  {        
        // return $.map($p._platformTableCache, function(n,i){return n.toLowerCase();});
        var ref = this,
            platforms = this._testMediaSupport(true),
            item = this.getItem(),
            cfg = this.getConfig('platforms'),
            tmp = [],
            result = [];

        try {
            for (var i in item.availableFiles) {
                if (item.availableFiles.hasOwnProperty(i)) {
                    for (var j in platforms) {                      
                        if (this._canPlay(item.availableFiles[i].type.replace(/x-/, ''), platforms[j].toLowerCase(), this.getConfig('streamType')) ) {
                            if ($.inArray(platforms[j].toLowerCase(), result)==-1) {
                                result.push(platforms[j].toLowerCase());
                            }
                        }
                    }
                }
            }
        } catch(e) {}

        result.sort(function(a, b) {
            return $.inArray(a, cfg) - $.inArray(b, cfg);
        });

        return result;        
    };

    /*
     Thanx to John Dyer: http://johndyer.name/native-fullscreen-javascript-api-plus-jquery-plugin/
    */
    this.getNativeFullscreenSupport = function() {
        var ref = this,
            fullScreenApi = {
                supportsFullScreen: 'viewport', // viewport=full viewport, media=video only (e.g. iphone), dom=html5 true fullscreen
                isFullScreen: function() {try {return ref.getDC().hasClass('fullscreen');} catch(e){return false;}},
                requestFullScreen: function() {ref.playerModel.applyCommand('fullscreen', true);},
                cancelFullScreen: function() {ref.playerModel.applyCommand('fullscreen', false);},
                prefix: '',
                ref: this
            },
            browserPrefixes = 'webkit moz o ms khtml'.split(' ');

        // return fullScreenApi;
        // check for native support

        // standard conform?
        if (typeof document.cancelFullScreen != 'undefined') {
            fullScreenApi.supportsFullScreen = true;
        } else {
            // (double)-check for fullscreen support by vendor prefix
            for (var i = 0, il = browserPrefixes.length; i < il; i++ ) {
    
                fullScreenApi.prefix = browserPrefixes[i];

                // media element only
                if (typeof document.createElement('video')[fullScreenApi.prefix+"EnterFullscreen"] != 'undefined') {
                    fullScreenApi.supportsFullScreen = 'mediaonly';
                }

                // player container / true fullscreen
                if (typeof document[fullScreenApi.prefix + 'CancelFullScreen' ] != 'undefined' || typeof document[fullScreenApi.prefix + 'ExitFullscreen' ] != 'undefined') {
                
                    fullScreenApi.supportsFullScreen = 'dom';
    
                    // FF8+FF9 double-check
                    if (fullScreenApi.prefix=='moz' && typeof document[fullScreenApi.prefix + 'FullScreenEnabled'] == 'undefined' ) {
                        fullScreenApi.supportsFullScreen = 'viewport';
                    }
                }

                if (fullScreenApi.supportsFullScreen!==false && fullScreenApi.supportsFullScreen!=='viewport') {
                    break;
                }
    
            }
        }
    
        // SEMI:
        // we are done here: full viewport only
        if (fullScreenApi.supportsFullScreen=='viewport' || (fullScreenApi.supportsFullScreen=='dom' && this.getConfig('forceFullViewport'))) {
            return fullScreenApi;
        }

        // MEDIA ONLY:
        // the browser supports true fullscreen for the media element only - this is semi cool
        if (fullScreenApi.supportsFullScreen=='mediaonly') {
            fullScreenApi.requestFullScreen = function(el) {
            	var dest = ref.playerModel.getMediaElement();
            	dest.get(0)[this.prefix+'EnterFullscreen']();                
                dest.unbind(this.prefix + "endfullscreen.projekktor").bind(this.prefix + "endfullscreen.projekktor", function() {
                	ref.playerModel.applyCommand('fullscreen', false);
            	});
           
            }
            fullScreenApi.dest = {};
    
            // cancel fullscreen method
            fullScreenApi.cancelFullScreen = function() {}

            return fullScreenApi;
        }
        
        
        // HTML5 true fullscreen:
        // is in fullscreen check
        fullScreenApi.isFullScreen = function(esc) {
            // * FF and GoogleTV report bullshit here:
            var dest = (ref.getIframe()) ? parent.window.document : document;
            switch (this.prefix) {
                case '':
                    return dest.fullScreen;
                case 'webkit':
                    return dest.webkitIsFullScreen;
                case 'ms':
                    return (dest.msFullscreenElement!=null);
                default:                  
                    return dest[this.prefix + 'FullScreen'];
            }
        }

        // the browser supports true fullscreen for any DOM container - this is ubercool:
        fullScreenApi.requestFullScreen = function() {
            // if (this.isFullScreen()) return;
                    
            var win = ref.getIframeParent() || $(window),
                target = (ref.getIframe()) ? ref.getIframe().get(0) : null || ref.getDC().get(0),
                apiRef = this,
                dest = (ref.getIframe()) ? parent.window.document : document,
                win = ref.getIframeParent() || $(window),
                fschange = function(evt) {
                    if (!apiRef.isFullScreen()) {                        
                        var win = apiRef.ref.getIframeParent() || $(window),
                        fsData = win.data('fsdata');
                        if (fsData!=null) {
                            win.scrollTop(fsData.scrollTop);
                            win.scrollLeft(fsData.scrollLeft);
                            apiRef.ref.playerModel.applyCommand('fullscreen', false);
                        }
                    } else {
                        apiRef.ref.playerModel.applyCommand('fullscreen', true);
                    }
                }
            
            // store scroll positon:
            win.data('fsdata', {
                scrollTop: win.scrollTop(),
                scrollLeft: win.scrollLeft()
            });

            // create fullscreen change listener on the fly:
            $(dest).unbind(this.prefix + "fullscreenchange.projekktor").bind(this.prefix + "fullscreenchange.projekktor", fschange);
            $(dest).unbind("MSFullscreenChange.projekktor").bind("MSFullscreenChange.projekktor", fschange);
            
            if (this.prefix === '') {
                target.requestFullScreen();
            }
            else {
                try {
                    target[this.prefix + 'RequestFullScreen']();
                } catch(e) {
                    target[this.prefix + 'RequestFullscreen'](); // IE fun
                }
            } 
        }

        // cancel fullscreen method
        fullScreenApi.cancelFullScreen = function() {
        	
            var target = ref.getIframe() ? parent.window.document : document,
                win = ref.getIframeParent() || $(window),
                fsData = win.data('fsdata');
                        
            // seems to cause errors in FF           
            if (target.exitFullScreen) {
                target.exitFullScreen();
            }
            else if (this.prefix == '') {
                target.cancelFullScreen();
            }
            else {
                try {
                    target[this.prefix + 'CancelFullScreen']();
                } catch(e) {
                    target[this.prefix + 'ExitFullscreen']();  // IE fun
                }

            }                

            // restore scrollposition
            if (fsData!=null) {
                win.scrollTop(fsData.scrollTop);
                win.scrollLeft(fsData.scrollLeft);
            }
                    
            // ref.playerModel.applyCommand('fullscreen', false);
        }

        return fullScreenApi;
    };

    this.getId = function() {
        return this._id;
    };

    this.getHasGUI = function() {
        try {
            return this.playerModel.getHasGUI();
        } catch(e) { return false;}
    };

    this.getCssPrefix = this.getNS = function() {
        
        return this.config._cssClassPrefix || this.config._ns || 'pp';
    };

    this.getPlayerDimensions = function() {
        return {width: this.getDC().width(), height: this.getDC().height()};
    };

    this.getMediaDimensions = function() {
        return this.playerModel.getMediaDimensions() || {width:0, height:0};
    };
        
   this.getAppropriateQuality = function(qualities) {
        var quals = qualities || this.getPlaybackQualities() || [];
        
        if (quals.length==0)
            return [];
         
        var wid = this.env.mediaContainer.width(),
            hei = this.env.mediaContainer.height(),
            ratio = $p.utils.roundNumber(wid/hei,2),        
            temp = {};

        // find best available quality-config-set by "minHeight"
        $.each( this.getConfig('playbackQualities') || [], function() {
            // not available
            if ($.inArray(this.key, quals)<0)
                return true;
            
            // check player-dim agains minHeight
            if ( (this.minHeight || 0) > hei && temp.minHeight <= hei)        
                return true;
            
            // new set in case of higher resolution
            if( (temp.minHeight || 0) > this.minHeight )
                return true;
                           
            // check against minWidth - simple case:
            if (typeof this.minWidth == 'number') {
                if (this.minWidth===0 && this.minHeight > hei)
                return true;
                
                if (this.minWidth > wid)
                return true;
                
                temp = this;
            }        
            // check against minWidth - aspect ratio
            else if (typeof this.minWidth == 'object') {
                var ref = this;
                $.each(this.minWidth, function() {
                if ( (this.ratio || 100) > ratio)
                    return true;
                if (this.minWidth > wid)
                    return true;
                temp = ref;
                return true;
                })
                
            }        
            return true;
        });

        return ($.inArray('auto', this.getPlaybackQualities())>-1) ? 'auto' : temp.key || 'default';
    };
        
    /* asynchronously loads external XML and JSON data from server */
    this.getFromUrl = function(url, dest, callback, dataType) {
        var data = null,
            ref = this;

        if (callback.substr(0,1)!='_') {
            window[callback] = function(data) {
                try { delete window[callback]; } catch(e) {}
                dest[callback](data);
            };
        } else if (dataType.indexOf('jsonp')>-1) {
            this['_jsonp'+callback] = function(data) {
                dest[callback](data);
            };
        }

        if (dataType) {
            if ($.parseJSON==undefined && dataType.indexOf('json')>-1) {
                alert("Projekktor requires at least jQuery 1.4.2 in order to handle JSON playlists.");
                return this;
            }
            dataType = (dataType.indexOf('/')>-1) ? dataType.split('/')[1] : dataType;
        }
                
        var ajaxConf = {
            url: url,
            complete: function( xhr, status ) {

                if (dataType==undefined) {
                    try {
                        if (xhr.getResponseHeader("Content-Type").indexOf('xml')>-1) dataType = 'xml';
                        if (xhr.getResponseHeader("Content-Type").indexOf('json')>-1) dataType = 'json';
                        if (xhr.getResponseHeader("Content-Type").indexOf('html')>-1) dataType = 'html';
                    } catch(e){}
                }

                data = $p.utils.cleanResponse(xhr.responseText, dataType)
                
                if (status!='error' && dataType!='jsonp') {
                    try {dest[callback](data, xhr.responseText);} catch(e){}
                }
            },
            error: function(data) {
                // bypass jq 1.6.1 issues
                if (dest[callback] && dataType!='jsonp'){
                    dest[callback](false);
                }
            },
            cache: true,
            async: !this.getIsMobileClient(),
            dataType: dataType,
            jsonpCallback: (callback.substr(0,1)!='_') ? false : "projekktor('"+this.getId()+"')._jsonp"+callback,
            jsonp: (callback.substr(0,1)!='_') ? false : 'callback'
        };

        ajaxConf.xhrFields = {withCredentials: false};
        ajaxConf.beforeSend = function(xhr){
              xhr.withCredentials = false;
        };

        $.support.cors = true;
        $.ajax(ajaxConf);            

        return this;
    };


    /*******************************
    public (API) methods SETTERS
    *******************************/
/*
    this.setActiveItem = function(mixedData) {
        var ref = this;
        this._enqueue(function() { try {ref._setActiveItem(mixedData);} catch(e) {} } );    
    };
*/
    this.setActiveItem = function(mixedData, autoplay) {        
        var lastItem = this.getItem(),
            newItem = null,
            ref = this,
            ap = this.config._autoplay;

        if (typeof mixedData=='string') {
            // prev/next shortcuts
            switch(mixedData) {          
                case 'previous':
                    newItem = this.getPreviousItem();
                    break;
                case 'next':
                    newItem = this.getNextItem();
                    break;
            }
        } else if (typeof mixedData=='number') {
            // index number given
            newItem = this.getItemAtIdx(mixedData);
            if (newItem===false) {
                return this;
            }
        } 

        // all items in PL completed:
        if (newItem===false) {
            this._promote('done', {});
            return this;            
        } 
   
        // item change requested...
        if (newItem!=lastItem) {
            // and denied... gnehe
            ap = true;
            if ( this.getConfig('disallowSkip')==true && (!this.getState('COMPLETED') && !this.getState('IDLE')) ) {
                return this;
            }
        }

        // do we have an autoplay situation?
        if (this.getNextItem()!==false && newItem!=lastItem) {
            ap = this.config._continuous;
        } 

        this._detachplayerModel();
        
        // reset player class
        var wasFullscreen = this.getDC().hasClass('fullscreen'),
            wasFullViewport = this.getDC().hasClass('fullviewport');
            
        this.getDC().attr('class', this.env.className)
        if (wasFullscreen) this.getDC().addClass('fullscreen');
        if (wasFullViewport) this.getDC().addClass('fullviewport');

        // create player instance
        var newModel = newItem.mediaModel.toUpperCase();

        // model does not exist or is faulty:
        if ( !$p.models[newModel] ) {
            newModel='NA';
            newItem.mediaModel = newModel;
            newItem.errorCode = 8;
        }
        
        // start model  
        this.playerModel = new playerModel();
        $.extend(this.playerModel, $p.models[newModel].prototype );
              
        this.__promote('synchronizing', 'display');

        this.syncCuePoints();
        // this._enqueue(function() { try {ref._applyCuePoints();} catch(e) {} } );

        this.playerModel._init({
            media: $.extend(true, {}, newItem),
            model: newModel,
            pp: this,
            environment: $.extend(true, {}, this.env),
            autoplay: (autoplay===false) ? false : ap,
            quality: this.getPlaybackQuality(),
            fullscreen: this.getInFullscreen()
            // persistent: (ap || this.config._continuous) && (newModel==nextUp)
        });
    
        // apply item specific class(es) to player
        if (this.getConfig('className', null)!=null) {
            this.getDC().addClass(this.getNS() + this.getConfig('className'))
        }
        this.getDC().addClass(this.getNS() + (this.getConfig('streamType') || 'http') );
            
        if (!$p.utils.cssTransitions()) this.getDC().addClass('notransitions')
        if (this.getIsMobileClient()) this.getDC().addClass('mobile')        

        return this;
    };    
    
    
    /* queue ready */
    this.setPlay = function() {        
        var ref = this;            
        if (this.getConfig('thereCanBeOnlyOne')) {
            projekktor('*').each(function() {
                if (this.getId()!==ref.getId()) {
                    this.setStop();
                }
            });
        }
        this._enqueue('play', false);
        return this;
    };

    /* queue ready */
    this.setPause = function() {
        this._enqueue('pause', false);
        return this;
    };

    /* queue ready */
    this.setStop = function(toZero) {
        var ref = this;

        if (this.getState('IDLE')) {        
            return this;
        }

        if (toZero) {
            this._enqueue(function() {
                ref.setActiveItem(0);
            });
        }
        else {
            this._enqueue('stop', false);
        }

        return this;
    };

    /* queue ready */
    this.setPlayPause = function() {
        if (!this.getState('PLAYING')) {
            this.setPlay();
        } else {
            this.setPause();
        }
        return this;
    };

    /* queue ready */
    this.setVolume = function(vol, fadeDelay) {
        var initalVolume = this.getVolume();            
        if (this.getConfig('fixedVolume')==true) {
            return this;
        }

        switch (typeof vol) {
            case 'string':
                var dir = vol.substr(0,1);
                vol = parseFloat(vol.substr(1));          
                switch(dir) {
                case '+':
                    vol = this.getVolume()+vol;
                    break;
                case '-':
                    vol = this.getVolume()-vol;
                    break;
                default:
                    vol = this.getVolume();
                }        
            case 'number':
                vol = parseFloat(vol);       
                break;
            default:
                return this;        
        }
        
        vol =  (vol>1) ? 1 : vol;
        vol = (vol<0) ? 0 : vol;         
        vol = vol.toFixed(2);
 
        if (vol>initalVolume && fadeDelay) {
            if (vol-initalVolume>0.03) {
                for(var i=initalVolume; i<=vol; i=i+0.03) {
                    this._enqueue('volume', i, fadeDelay);
                }
                this._enqueue('volume', vol, fadeDelay);
                return this;
            }
        }
        else if (vol<initalVolume && fadeDelay) {
            if (initalVolume-vol>0.03) {
                for(var i=initalVolume; i>=vol; i=i-0.03) {
                    this._enqueue('volume', i, fadeDelay);
                }
                this._enqueue('volume', vol, fadeDelay);
                return this;
            }
        }

        this._enqueue('volume', vol);
        return this;
    };

       /* queue ready */
    this.setPlayhead = this.setSeek = function(position) {
        if (this.getConfig('disallowSkip')==true) {
                return this;
        }
        
        if (typeof position == 'string') {
            var dir = position.substr(0,1);
            position = parseFloat(position.substr(1));
    
            if (dir=='+') {
                position = this.getPosition()+position;
            } else if (dir=='-') {
                position = this.getPosition()-position;
            } else {
                position = this.getPosition();
            }
        }
            
        if (typeof position == 'number') {
            this._enqueue('seek', Math.round(position * 100) / 100);
        }
            
        return this;
    };
        
       /* queue ready */
    this.setFrame = function(frame) {

        if (this.getConfig('fps')==null)
            return this;
           
        if (this.getConfig('disallowSkip')==true)
            return this;

        if (typeof frame == 'string') {
            var dir = frame.substr(0,1);
            frame = parseFloat(frame.substr(1));
    
            if (dir=='+') {
                frame = this.getFrame()+frame;
            } else if (dir=='-') {
                frame = this.getFrame()-frame;
            } else {
                frame = this.getFrame();
            }
        }
  
        if (typeof frame == 'number') {
            this._enqueue('frame', frame);
        }
            
        return this;
    };        

    /* queue ready */
    this.setPlayerPoster = function(url) {
        var ref = this;
        this._enqueue(function() {ref.setConfig({poster:url},0);});
        this._enqueue(function() {ref.playerModel.setPosterLive();});
        return this;
    };

    this.setConfig = function() {
        var ref = this,
            args = arguments;
            
        this._enqueue(function() {
            ref._setConfig(args[0] || null, args[1])
        });
            
        return this;
    };

    this._setConfig = function() {
        if (!arguments.length) {
            return result;
        }

        var confObj = arguments[0],
            dest = '*',
            value = false;

        if (typeof confObj != 'object') {
            return this;
        }

        if (arguments[1] == 'string' || arguments[1] == 'number') {
            dest = arguments[1];
        } else {
            dest = this.getItemIdx();
        }
        
        for (var i in confObj) {
            // is constant:
            if (this.config['_'+i]!=null) continue;
    
            try {value = eval(confObj[i]);}
            catch(e) {value = confObj[i];}
    
            if (dest == '*') {
                $.each(this.media, function() {
                    if (this.config == null) {
                        this.config = {};
                    }
                    this.config[i] = value;
                });
                continue;
            }
    
            if (this.media[dest] == undefined) return this;
    
            if (this.media[dest]['config'] == null) {
                this.media[dest]['config'] = {};
            }
    
            this.media[dest]['config'][i] = value;
        }
        return this;
    };

    this.setFullscreen = function(goFull) {        
        var nativeFullscreen = this.getNativeFullscreenSupport();

        goFull = (goFull==null) ? !nativeFullscreen.isFullScreen() : goFull;
        this.playerModel.applyCommand('fullscreen', goFull);
        
        return this;
    };

    this.setSize = function(data) {
        var target = this.getIframe() || this.getDC(),
            fsdata = target.data('fsdata') || null,
            w = (data && data.width!=null) ? data.width : 
                (this.getConfig('width')!=null) ? this.getConfig('width') : target.width(),
            calcw = (isNaN(w)) ? target.width() : w;    
        var h = (data && data.height!=null) ? data.height :
                (this.getConfig('height')==null && this.getConfig('ratio')) ? Math.round( (calcw || this.getDC().width()) / this.getConfig('ratio')) :
                (this.getConfig('height')!=null) ? this.getConfig('height') : false;

        if (this.getInFullscreen() && fsdata!=null) {
            // remember new dims while in FS
            fsdata.targetWidth = w;
            fsdata.targetHeight = h;
            target.data('fsdata', fsdata);
        } else {
            // apply new dims 
            if (w) target.css({width:  w + "px" });
            if (h) target.css({height: h + "px" });        
        }
        
        try {this.playerModel.applyCommand('resize', {width: w, height: h}); } catch(e) {}
        
        return this;
    };

    this.setLoop = function(value) {
        this.config._loop = value || !this.config._loop;
        return this;
    };

    this.setDebug = function(value) {
        $p.utils.logging = (value!==undefined) ? value : !$p.utils.logging;

        if ($p.utils.logging) {
            $p.utils.log('DEBUG MODE #' + this.getId() + " Level: " + this.getConfig('debugLevel') );
        }
        return this;
    };

    this.addListener = function(evt, callback) {
        var ref=this;
        this._enqueue(function() {ref._addListener(evt, callback)});
        return this;
    };
        
    this._addListener = function(event, callback) {
        var evt = (event.indexOf('.')>-1) ? event.split('.') : [event, 'default'];
        this.listeners.push({
            event: evt[0],
            ns: evt[1],
            callback: callback
        });            
        return this;
    };

    /**
    * removes an JS object from the event queue
    *
    * @param {String} name of event to remove
    * @param {Function} [callback]
    * @returns {PPlayer} reference to the current instance of projekktor
    */
    this.removeListener = function(event, callback) {
        var len = this.listeners.length,
            evt = (event.indexOf('.')>-1) ? event.split('.') : [event, '*'],
            toKill = [];

        for (var i=0; i<len;i++) {
            if (this.listeners[i]==undefined) continue;
            if (this.listeners[i].event!=evt[0] && evt[0]!=='*') continue;                
                if ( (this.listeners[i].ns!=evt[1] && evt[1]!=='*') || (this.listeners[i].callback!==callback && callback!=null) ) continue;
                toKill.push(i);                
        }
        
        // than remove them
        for (var i = 0, l=toKill.length; i<l; i++){
            this.listeners.splice(toKill[i]-i,1);
        }
                
        return this;
    };

    this.setItem = function() {
        // arg0 -> item obj
        // arg1 -> position (int)
        // arg2 -> replace (bool)

        var itemData = (arguments[0]) ? this._prepareMedia({file:arguments[0], config:arguments[0].config || {}}) : false,
            affectedIdx = 0;
        if (itemData===false) {
            return false;
        }
        
        if (itemData.mediaModel=='NA') {
            return false;
        }

        this._clearqueue();
   
        if (itemData==null) {
            // remove item
            affectedIdx = this._removeItem(arguments[1]);
            if (affectedIdx===this.getItemIdx()) {
                this.setActiveItem('previous');
            }
        }
        else {
            // add/set item
            affectedIdx = this._addItem( itemData, arguments[1], arguments[2]);
            if (affectedIdx<=this.getItemIdx()) {
                this.setActiveItem(affectedIdx);
            }
        }

        return this;
    };

    this.setFile = function() {

        var fileNameOrObject = arguments[0] || '',
            dataType = arguments[1] || this._getTypeFromFileExtension( fileNameOrObject ),
            result = [{file:{src: fileNameOrObject || '', type: dataType || this._getTypeFromFileExtension( splt[0] )}}];

        this._clearqueue();
        this._detachplayerModel();

        // incoming JSON Object / native Projekktor playlist
        if (typeof fileNameOrObject=='object') {
            $p.utils.log('Applying incoming JS Object', fileNameOrObject);
            this.setPlaylist(fileNameOrObject);
            return this;
        }


        if (result[0].file.type.indexOf('/xml')>-1 || result[0].file.type.indexOf('/json') >-1) {
            // async. loaded playlist
            $p.utils.log('Loading playlist data from '+result[0].file.src+' supposed to be '+result[0].file.type );
            this._promote('scheduleLoading', 1+this.getItemCount());                    
            this._playlistServer = result[0].file.src;
            this.getFromUrl(result[0].file.src, this, '_collectParsers', result[0].file.type );            
        } else {
            // incoming single file:
            $p.utils.log('Applying single resource:'+result[0].file.src, result);
            this.setPlaylist(result);
        }
        
        return this;
    }; 
    
    this._collectParsers = function() {

        this._syncPlugins('parserscollected', arguments);          
        this._promote('scheduleLoaded', arguments);           
    };
    
    this.addParser = function(parser) {
        this._parsers.push(parser)
    };
    
    this.setPlaylist = this.destroy = function(obj) {
        var ref = this,
            itemIdx = null,
            itemId = null,
            itemData = null,            
            data = obj || [{file:{src:'', type:'nane/none'}}],
            files = data.playlist || data[0];
            
        this.media = [];
        
        // gather and set alternate config from reel:
        try {         
            for(var props in data[0].config) {
          	
                if (data[0].config.hasOwnProperty(props)) {
                	try {
	                	if (typeof data[0].config[props].indexOf('objectfunction')>-1) {
	                		continue; // IE SUCKZ
	                	}
                	} catch(e) {}                     
                	this.config[props] =  data[0].config[props];
                    $p.utils.log('Updated config var: '+props+' to '+this.config[props]);
                }
          
            }        
        } catch(e) {console.log(e)}

        // add media items
        $.each(files, function(key) {
        	if (key=='config') {
        		return true;
        	}
            // using try-catch here is not accurate enough but the easiest way to handle parsing issues so far.
            try {
                itemData = ref._prepareMedia({file:this, config:this.config || {}, errorCode: this.errorCode || 0});
                itemIdx = ref._addItem(itemData);
                itemId = itemData.ID;

                ref.setCuePoints(this.cuepoints, itemId);
           
            } catch(e) {

                ref._promote('error', 13);
                return false;
            }
            
            return true;
        });

        this.removeListener('*.cuepointsystem');
        this.addListener('cuepointsAdd.cuepointsystem', this._cuepointsChangeEventHandler);
        this.addListener('cuepointsRemove.cuepointsystem', this._cuepointsChangeEventHandler);
        
        if (itemIdx===null) {
            this._addItem(this._prepareMedia({file:'', config:{}, errorCode: 97}));
        }

        this._syncPlugins('reelupdate');     
    };    
    

    
    this.setPlaybackQuality = function(quality) {
        var qual = quality || this.getAppropriateQuality();         
        if ($.inArray(qual, this.getItem().qualities || [])>-1) {
            this.playerModel.applyCommand('quality', qual);
            this.setConfig({playbackQuality: qual});    
        }
        return this;
    };

    this.openUrl = function(cfg) {
        cfg = cfg || {url:'', target:'', pause: false};
        if (cfg.url=='') return this;
        if (cfg.pause===true) {
            this.setPause();
        }
        window.open(cfg.url, cfg.target).focus();
        return this;
    };


    /**
    * Removes THIS Projekktor and reconstructs original DOM
    *
    * ENQUEUED
    *
    * @public
    * @return {Object} this
    */
    this.selfDestruct = this.destroy = function() {
        var ref = this;
        this._enqueue(function() {ref._destroy();});
        return this;
    },
        
    this._destroy = function() {
        var ref = this;
        
        $(this).unbind();
            
        this.removePlugins();
        this.playerModel.destroy();            
        this._removeGUIListeners();


        $.each(projekktors, function(idx) {
            try {
                if (this.getId() == ref.getId() || this.getId() == ref.getId() || this.getParent() == ref.getId())  {
                projekktors.splice(idx, 1);
                return;
                }
            } catch(e){}
        });

        this.env.playerDom.replaceWith( this.env.srcNode );
     
        this._promote('destroyed')
        this.removeListener('*');
            
        return this;
    }

    /**
    * @public
    * @return {Object} this
    */
    this.reset = function(autoplay) {
        var ref = this;
        try {       
        //    this.addListener('fullscreen.reset', function() {
                ref.removeListener('fullscreen.reset');
                ref._clearqueue();       
                ref._enqueue(function() {
                   ref._reset(autoplay);
               });           
         //   })
            
            this.setFullscreen(false);
        } catch(e) {
            // this needs to be fixed
            // fails with an "this.playerModel.applyCommand is not a function" from time to time
            // ugly workaround to prevent player to hang up: 
            ref.removeListener('fullscreen.reset');
            ref._clearqueue();       
            ref._enqueue(function() {
                ref._reset(autoplay);
            });
         }
        return this;
    },

    this._reset = function(autoplay) {

        var cleanConfig = {},
            ref = this;
              
        // this._isReady = false;
        
        $(this).unbind();
        $((this.getIframe()) ? parent.window.document : document).unbind(".projekktor");
        $(window).unbind('.projekktor'+this.getId());

        this.playerModel.destroy();
        this.playerModel = {};
        this._parsers = [];
            
        this.removePlugins();
        this._removeGUIListeners();
        this.env.mediaContainer = null;

        for (var i in this.config) {
            cleanConfig[(i.substr(0,1)=='_') ? i.substr(1) : i] = this.config[i];
        }

        cleanConfig['autoplay'] = cleanConfig['loop'] || autoplay;

        this._init(this.env.playerDom, cleanConfig);

        return this;
    },


     /********************************************************************************************
        Queue Points
    *********************************************************************************************/
    this.setCuePoint = function(obj, opt, stopProp) {
        var item = (obj.item!==undefined) ? obj.item : this.getItemId(),
            options = $.extend(true, {
                offset: 0
            }, opt),
            ref = this,
            stopPropagation = stopProp || false, //should we propagate cuepointsAdd event after cuepoint was added
        
        cuePoint = {
            id: obj.id || $p.utils.randomId(8),
            group: obj.group || 'default',
            item: item,
            on: ($p.utils.toSeconds(obj.on) || 0) + options.offset,
            off: ($p.utils.toSeconds(obj.off) || $p.utils.toSeconds(obj.on) || 0)  + options.offset,
            value: obj.value || null,
            callback: obj.callback || function(){},
            precision: (obj.precision==null) ? 1 : obj.precision,
            title: (obj.title==null) ? '' : obj.title,
            once: obj.once || false,
            blipEvents: obj.blipEvents || [],
            
            _listeners: [],
            _unlocked: false,
            _active: false,
            _lastTime: 0,
                        
            isAvailable: function() {return this._unlocked;},
                    
            _stateListener: function(state, player) {
                if ('STOPPED|COMPLETED|DESTROYING'.indexOf(state)>-1) {
                    if (this._active){
                        try {  this.callback(false, this, player); } catch(e) {}
                    }
                    this._active = false;
                    this._lastTime = -1;
                    this._unlocked = false;
                }
            },
            
            _timeListener: function(time, player) {

                if (player.getItemId() !== this.item && this.item !== '*')
                    return;

                var timeIdx = (this.precision==0) ? Math.round(time) : $p.utils.roundNumber(time, this.precision),                           
                ref = this;

                // are we already unlocked?
                // consider buffer state to unlock future cuepoints for user interactions
                if (this._unlocked===false) {
                    var approxMaxTimeLoaded = player.getDuration() * player.getLoadProgress() / 100;

                    if (this.on<=approxMaxTimeLoaded || this.on<=timeIdx ) {

                        // trigger unlock-listeners
                        $.each(this._listeners['unlock'] || [], function() {            
                            this(ref, player);
                        });

                        this._unlocked = true;

                    } else { return; }

                }

                // something to do?
                if (this._lastTime==timeIdx)
                    return;

                var nat = (timeIdx-this._lastTime<=1 && timeIdx-this._lastTime>0);

                // trigger ON
                if ( ( (timeIdx >= this.on && timeIdx <= this.off) || (timeIdx >= this.on && this.on == this.off && timeIdx <= this.on+1) ) && this._active!==true) {               

                                this._active = true;
                                $p.utils.log("Cue Point: [ON " + this.on +"] at "+timeIdx,  this);
                                var cp = $.extend(this, {
                                    enabled: true,
                                    seeked: !nat,
                                    player: player});
                                player._promote('cuepoint', cp);
                                try {
                                    this.callback(cp);
                                } 
                                catch (e) {}

                                // remove cue point if it shoud be triggered only once
                                if(this.once){
                                    player.removeCuePointById(this.id, this.item);
                                }
                }
                
                // trigger OFF
                else if ( (timeIdx < this.on || timeIdx > this.off) && this.off!=this.on && this._active==true) {
                                this._active = false;
                                $p.utils.log("Cue Point: [OFF] at " + this.off, this);
                                var cp = $.extend(this, {
                                    enabled: false,
                                    seeked: !nat,
                                    player: player});
                                player._promote('cuepoint', cp);
                                try {
                                    this.callback(cp);
                                } 
                                catch (e) {
                                }

                                // remove cue point if it shoud be triggered only once
                                if(this.once){
                                    player.removeCuePointById(this.id, this.item);
                                }
                }                        

                if ( this.off==this.on && this._active && new Number(timeIdx-this.on).toPrecision(this.precision)>=1 ) {
                    this._active = false;
                }

                this._lastTime = timeIdx;
            },
            
            addListener: function(event, func) {
                if (this._listeners[event]==null)
                    this._listeners[event] = [];
                this._listeners[event].push( func || function(){} );
            }
        }

        if(obj.unlockCallback!=null){
            cuePoint.addListener('unlock', obj.unlockCallback);
        }
                
        // create itemidx key
        if (this._cuePoints[item]==null) {
            this._cuePoints[item] = [];
        }

        this._cuePoints[item].push(cuePoint);
        
        if (!stopPropagation){
            this._promote('cuepointsAdd', [cuePoint]);
        }
        
        return this._cuePoints[item];
    },
            
    this.setCuePoints = function(cp, itmId, forceItmId, options){
        var cuepoints = cp || [],
            itemId = itmId || this.getItemId(),
            forceItemId = forceItmId || false,
            ref = this;
    
        $.each(cuepoints, function() {
                this.item = forceItemId ? itemId : this.item || itemId; // use given itemId if there is no item id specified per cuepoint or forceItemId is true
                ref.setCuePoint(this,options,true); // set cuepoint and suppress event propagation after every addition
        });
        
        if(cuepoints.length){
            this._promote('cuepointsAdd', cuepoints);
        }
        
        return this._cuePoints;
    },
        
    this.setGotoCuePoint = function(cuePointId, itmId) {
        var currentItemId = this.getItemId(),
            itemId = itmId || currentItemId;
        
        if(itemId==currentItemId){
            this.setPlayhead(this.getCuePointById(cuePointId,itemId).on);
        }
        else {
            //TODO: change playlist item and setPlayhead position
        }
        
        return this;
    },        
    
    /**
     * Gets cuepoints for specified playlist item
     * 
     * @param {String} itemId Playlist item ID or wildcard '*' for universal cuepoint added to all of items on the playlist
     * @param {Boolean} withWildcarded Should it get wildcarded ('*') cuepoints too
     * @param {Array} groups Get cuepoints only from given cuepoint groups
     * @returns {Array} Returns array of cuepoints which satisfies the given criteria 
     */
    this.getCuePoints = function(itmId, withWildcarded, groups) {
        var itemId = itmId || this.getItemId(),
            cuePoints = withWildcarded && itemId != '*' ? $.merge($.merge([], this._cuePoints[ itemId ] || [] ), this._cuePoints['*'] || []) : this._cuePoints[itemId] || [],
            cuePointsGroup = [];
            
        if(groups && !$.isEmptyObject(cuePoints)){
            for (var cIdx=0; cIdx < cuePoints.length; cIdx++ ) {
                if ($.inArray(cuePoints[cIdx].group, groups)>-1) {  
                    cuePointsGroup.push(cuePoints[cIdx]);
                }
            }
            return cuePointsGroup;
        }
        
        return cuePoints;
    },
    
    /**
     * Gets cuepoint with given id from specified playlist item
     * 
     * @param {String} cuePointId
     * @param {String} [itemId=currentItemId]
     * @returns {Object} Returns cuepoint object if the cuepoint exists otherwise false
     */
    this.getCuePointById = function(cuePointId, itmId) {
        var result = false,
            itemId = itmId || this.getItemId(),
            cuePoints = this.getCuePoints(itemId);
        
        for (var j=0; j<cuePoints.length; j++){
            if (cuePoints[j].id == cuePointId) {
                result = cuePoints[j];
                break;
            }
        }
        return result;
    },
            
    /**
     * 
     * @param {String} [itemId=currentItemId]
     * @param {Boolean} [withWildcarded=false]
     * @param {Array} [cuePointGroups]
     * @returns {Array} Array of removed cuepoints
     */
    this.removeCuePoints = function(itmId, withWildcarded, cuePointGroups) {
        var itemId = itmId || this.getItemId(),
            cuePoints = this._cuePoints,
            itemKey = {},
            cpForItem = [],
            toKill = [],
            removed = [];        
       
        // remove cuepoints and relevant event listeners
        for(var itemKey in cuePoints){
            if (cuePoints.hasOwnProperty(itemKey) && ( itemKey == itemId || (withWildcarded ? itemKey == '*' : false) ) ){
                cpForItem = cuePoints[itemKey];
                for (var cIdx=0, cL=cpForItem.length; cIdx < cL; cIdx++ ) {
                    if (cuePointGroups === undefined || $.inArray(cpForItem[cIdx].group, cuePointGroups) > -1 ) {
                        this.removeListener('time', cpForItem[cIdx].timeEventHandler);
                        this.removeListener('state', cpForItem[cIdx].stateEventHandler);
                        toKill.push(cIdx);
                    }
                }
                
                for (var i = 0, l=toKill.length; i<l; i++){
                    removed.push( cpForItem.splice(toKill[i]-i,1)[0] );
                }
                
                if(!cpForItem.length){
                    delete cuePoints[itemKey];
                }
                toKill = [];
            }
        }
        
        if(removed.length){
            this._promote('cuepointsRemove', removed);
        }
        
        return removed;
    },
    
    /**
     * Remove cuepoint with given id from specified playlist item
     * 
     * @param {String} cuePointId
     * @param {String} [itemId=currentItemId]
     * @returns {Array} Array with removed cuepoint if it was found or empty array otherwise
     */        
    this.removeCuePointById = function(cuePointId, itmId) {
        if(!cuePointId) {
            return false;
        }
        
        var itemId = itmId || this.getItemId(),
        cuePoints = this.getCuePoints(itemId),
        removed = [];

        for (var cIdx=0; cIdx < cuePoints.length; cIdx++ ) {
            if (cuePoints[cIdx].id == cuePointId) {
                this.removeListener('time', cuePoints[cIdx].timeEventHandler);
                this.removeListener('state', cuePoints[cIdx].stateEventHandler);            
                
                removed = cuePoints.splice(cIdx, 1);
                break;
            }
        }
        
        if(removed.length){
            this._promote('cuepointsRemove', removed);
        }
        
        return removed;
    },
    
    this.syncCuePoints = function() {
        var ref = this;
        this._enqueue(function() { try {ref._applyCuePoints();} catch(e) {} } );
        return this;
    },
            
    this._cuepointsChangeEventHandler = function(cuepoints, player){
        var ref = player;
        ref._enqueue(function() { try {ref._applyCuePoints();} catch(e) {} } );
    },

    this._applyCuePoints = function() {

        var ref = this,
            cuePoints = this.getCuePoints(this.getItemId(),true) || [];

        // remove all cuepoint listeners
        ref.removeListener('*.cuepoint');
        
        $.each( cuePoints, function(key, cuePointObj) {          
            // attach cuepoint event handlers
            cuePointObj.timeEventHandler = function(time, player) {
                try {cuePointObj._timeListener(time, player);} catch(e){}
            };
    
            cuePointObj.stateEventHandler = function(state, player) {
                try {cuePointObj._stateListener(state, player);} catch(e){}
            };
    
            ref.addListener('time.cuepoint', cuePointObj.timeEventHandler);
            ref.addListener('state.cuepoint', cuePointObj.stateEventHandler);
        });
        
        this._promote('cuepointsSync', cuePoints);
    },

    
     /********************************************************************************************
        Command Queue
    *********************************************************************************************/
    this._enqueue = function(command, params, delay)  {
        if (command!=null) {
            this._queue.push({command:command, params:params, delay:delay});
            this._processQueue();
        }
    };

    this._clearqueue = function(command, params)  {        
        if (this._isReady===true) {
            this._queue = [];
        }
    };

    this._processQueue = function() {
        var ref = this,
            modelReady = false;
                
        // if (this._processing===true || this.env.loading===true) return;
        if (this._processing===true) {
            return;
        }
        this._processing = true;

        (function() {
            try {modelReady=ref.playerModel.getIsReady();} catch(e) {}
            modelReady = true;
            
            if (modelReady) {    
                try {
                    var msg = ref._queue.shift();
                    if (msg!=null) {
                        if (typeof msg.command=='string') {
                        if (msg.delay>0)
                            setTimeout(function() {
                                ref.playerModel.applyCommand(msg.command, msg.params);
                            }, msg.delay);
                        else
                            ref.playerModel.applyCommand(msg.command, msg.params);
                        } else {
                            msg.command(ref);
                        }
                    }
                } catch(e) {$p.utils.log("ERROR:", e);}

                if (ref._queue.length==0){                    
                    ref._processing = false;
                    return;
                }
    
                arguments.callee();
                return;
            }
            // setTimeout(arguments.callee,100);
        })();
    };


    /********************************************************************************************
        GENERAL Tools
    *********************************************************************************************/
    this._getTypeFromFileExtension = function(url) {
        var fileExt = '',
            extRegEx = [],
            extTypes = {},
            extRegEx = [],
            plt = null,
            on = true;

        // build regex string and filter dublicate extensions:
        for(var i in $p.mmap ) {
            if ($p.mmap.hasOwnProperty(i)) {
                plt = $p.mmap[i].platform;
                if (typeof plt != 'object') {
                    plt = [plt];
                }
                on = true;
                for(var j=0; j < plt.length; j++) {
                    if (plt[j]!=null) {
                        if (this.getConfig('enable'+plt[j].toUpperCase()+'Platform')===false || $.inArray(plt[j], this.getConfig('platforms'))===-1) {
                            on = false;
                        }
                    }
                }
                if (on===false) continue;        
                extRegEx.push( '\\\.'+$p.mmap[i].ext );
                extTypes[$p.mmap [i].ext] = $p.mmap [i];
            }
        }

        extRegEx = '^.*\.('+extRegEx.join('|')+")";

        try {
            fileExt = url.match( new RegExp(extRegEx))[1];
            fileExt = (!fileExt) ? 'NaN' : fileExt.replace('.','');
        } catch(e) {
            fileExt='NaN';
        }

        return extTypes[fileExt].type;
    };

    /* generates an array of mediatype=>playertype relations depending on browser capabilities */
    this._testMediaSupport = function(getPlatforms) {
        var result = {},
            resultPlatforms = [],
            streamType = '',
            ref = this;

        if (getPlatforms) {
            if ($p._platformTableCache!=null) {
                return $p._platformTableCache;
            }            
        } else {
            if ($p._compTableCache!=null) {
                return $p._compTableCache;
            }
        }
        
        for (var i=0; i < $p.mmap.length; i++ ) {
            if ($p.mmap.hasOwnProperty(i)) {
                platforms = (typeof $p.mmap[i]['platform']=='object') ? $p.mmap[i]['platform'] : [ $p.mmap[i]['platform'] ];
            
                $.each(platforms, function(_na, platform) {
        
                    if (platform==null)
                        return true;
    
                    streamType = $p.mmap[i]['streamType'] || ['http'];

                    $.each(streamType, function(key, st) {
  
                        if (result[st]==null)
                            result[st] = {};        
                        
                        if (result[st][platform]==null) {
                            result[st][platform] = [];
                        }
               
                        // avoid dupes
                        if ( $.inArray($p.mmap[i]['type'], result[st][platform] )>-1 ) {
                            // return true;
                        }
                        
                        
                        var reqPlatformVersion = ($p.models[ $p.mmap[i]['model'].toUpperCase() ].prototype[(platform.toLowerCase()) + 'Version'] || "1").toString();
    
                        // perform version and config check:
                        try {
                            if ( $p.utils.versionCompare($p.platforms[platform.toUpperCase()]($p.mmap[i]['type']), reqPlatformVersion) ) {                                
                                // check if platform is enabled in config
                                if (ref.getConfig('enable'+platform.toUpperCase()+'Platform')!=false && $.inArray(platform.toLowerCase(), ref.getConfig('platforms'))>-1) {                                   
                                    result[st][platform].push($p.mmap[i]['type']);
                                    if ($.inArray(platform.toUpperCase(), resultPlatforms)==-1) {
                                        resultPlatforms.push(platform.toUpperCase());
                                    }
                                }
                                return true;
                            }
                        } catch(e) {
                            $p.utils.log('ERROR', 'platform '+platform+' not defined')
                        }
                        
                        return true;
                    })
                    
                    return true;
                })
            }
        }

        $p._compTableCache = result;
        $p._platformTableCache = resultPlatforms;
        
        return (getPlatforms) ? $p._platformTableCache : $p._compTableCache;
    };
        
    this._readMediaTag = function(domNode) {
        var result = {},
        htmlTag='',
        attr=[],
        ref=this;

        if("VIDEOAUDIO".indexOf(domNode[0].tagName.toUpperCase())==-1)
                return false;


        // gather general config attributes:
        // - Safari does not supply default-bools here:
        if (!this.getConfig('ignoreAttributes')) {
        result = {
            autoplay: ( (domNode.attr('autoplay')!==undefined || domNode.prop('autoplay')!==undefined) && domNode.prop('autoplay')!==false) ? true : false,
            controls: ( (domNode.attr('controls')!==undefined || domNode.prop('controls')!==undefined) && domNode.prop('controls')!==false) ? true : false,
            loop: ( (domNode.attr('autoplay')!==undefined || domNode.prop('loop')!==undefined) && domNode.prop('loop')!==false) ? true : false,
            title: (domNode.attr('title')!==undefined && domNode.attr('title')!==false) ? domNode.attr('title') : '',
            poster: (domNode.attr('poster')!==undefined && domNode.attr('poster')!==false) ? domNode.attr('poster') : '',
            width: (domNode.attr('width')!==undefined && domNode.attr('width')!==false) ? domNode.attr('width') : null,
            height: (domNode.attr('height')!==undefined && domNode.attr('height')!==false) ? domNode.attr('height') : null
        };
        }
        
        // IE7+8 and some other idiots do not keep attributes w/o values:
        htmlTag = $($('<div></div>').html($(domNode).clone())).html();
        attr = ['autoplay', 'controls', 'loop'];

        for (var i=0; i<attr.length; i++) {
            if (htmlTag.indexOf(attr[i])==-1) continue;
            result[attr[i]] = true;
        }


        // get possible media sources:
        result.playlist = [];
        result.playlist[0] = [];
        result.playlist[0]['config'] = {tracks:[]};
       
        // ... from "src" attribute:
        if (domNode.attr('src')) {
            result.playlist[0].push({
                src: domNode.attr('src'),
                type: domNode.attr('type') || this._getTypeFromFileExtension(domNode.attr('src'))
            });
        }

        // ... from media tag children
        // ... within a lame browser (IE <9) ...
        if (!$('<video/>').get(0).canPlayType) {
            var childNode = domNode;
            do {
                                           
                childNode = childNode.next('source,track');
                if (childNode.attr('src')) {
                switch(childNode.get(0).tagName.toUpperCase()) {
                    case 'SOURCE':
                    result.playlist[0].push({
                        src: childNode.attr('src'),
                        type: childNode.attr('type') || this._getTypeFromFileExtension(childNode.attr('src')),
                        quality: childNode.attr('data-quality') || ''
                    });                
                    break;
                    case 'TRACK':
                    if ($(this).attr('src')) {
                        result.playlist[0]['config']['tracks'].push({
                        src: childNode.attr('src'),
                        kind: childNode.attr('kind') || 'subtitle',
                        lang: childNode.attr('srclang') || null,
                        label: childNode.attr('label') || null
                        });
                    }
                    break;
                }
                }
            } while (childNode.attr('src'))
        }
    
        // ... within a good browser ...
        if (result.playlist[0].length==0) {
        domNode.children('source,track').each( function(){
            if ($(this).attr('src')) {
            switch($(this).get(0).tagName.toUpperCase()) {
                case 'SOURCE':
                result.playlist[0].push({
                    src: $(this).attr('src'),
                    type: $(this).attr('type') || ref._getTypeFromFileExtension($(this).attr('src')),
                    quality: $(this).attr('data-quality') || ''
                });                
                break;
                case 'TRACK':
                result.playlist[0]['config']['tracks'].push({
                    src: $(this).attr('src'),
                    kind: $(this).attr('kind') || 'subtitle',
                    lang: $(this).attr('srclang') || null,
                    label: $(this).attr('label') || null
                });                
                break;
            }
            }
        });
        }

        return result;
    };        

    this._init = function(customNode, customCfg) {

        var theNode = customNode || srcNode,
            theCfg = customCfg || cfg,
            cfgByTag = this._readMediaTag(theNode),
            ref = this,
            iframeParent = this.getIframeParent();

        // -----------------------------------------------------------------------------
        // - 1. GENERAL CONFIG ---------------------------------------------------------
        // -----------------------------------------------------------------------------

        // remember original node HTML for reset and reference purposes:
        this.env.srcNode = theNode.wrap('<div></div>').parent().html();
            theNode.unwrap();
            
        // remember initial classes
        this.env.className = theNode.attr('class') || '';
        
        // remember ID
        this._id = theNode[0].id || $p.utils.randomId(8);            

        if (cfgByTag!==false) {
            // swap videotag->playercontainer
            this.env.playerDom = $('<div/>')
                .attr({
                'class': theNode[0].className,
                'style': theNode.attr('style')
                })
            
            theNode.replaceWith( this.env.playerDom );
                
            // destroy theNode            
            theNode.empty().removeAttr('type').removeAttr('src');
            try {
                theNode.get(0).pause();
                theNode.get(0).load();
            } catch(e) {}
            
            $('<div/>').append(theNode).get(0).innerHTML='';
            theNode = null;
                
        } else {
            this.env.playerDom = theNode;    
        }

        // merge configs we got so far:
        theCfg = $.extend(true, {}, cfgByTag, theCfg);
            
        for (var i in theCfg) {
            if (this.config['_'+i]!=null) {
                this.config['_'+i] = theCfg[i];
            } else {
                if (i.indexOf('plugin_')>-1) {
                    this.config[i] = $.extend(this.config[i], theCfg[i]);                    
                }
                else {
                    this.config[i] = theCfg[i];
                }
            }
        }

        this.setDebug(this.getConfig('debug'));
                    
        // initial DOM scaling
        if (this.config._preventAutoScaling!=true) {
        	this.setSize();
        }
            
        // force autoplay false on mobile devices:
        if  (this.getIsMobileClient()) {
            this.config._autoplay = false;
            this.config.fixedVolume = true;
        }

        // -----------------------------------------------------------------------------
        // - 2. TRIM DEST --------------------------------------------------------------
        // -----------------------------------------------------------------------------

        // make sure we can deal with a domID here:
        this.env.playerDom.attr('id', this._id);

        // load and initialize plugins
        this._registerPlugins();

        // set up iframe environment
        if (this.config._iframe === true) {
            if (iframeParent) {
                iframeParent.ready(function() {
                    ref._enterFullViewport(true);
                });
            } else {
                ref._enterFullViewport(true);
            }
        }

            // cross domain
            if (iframeParent===false) {
                this.config._isCrossDomain = true;
            }
     
            // allow fullscreen?
            if (!this.getIframeAllowFullscreen()) {
                this.config.enableFullscreen = false;              
            }
             


        // playlist?
        for (var i in this.config._playlist[0]) {
            // we prefer playlists - search one:
            if (this.config._playlist[0][i].type) {
                if (this.config._playlist[0][i].type.indexOf('/json')>-1 || this.config._playlist[0][i].type.indexOf('/xml')>-1 ) {
                    this.setFile(this.config._playlist[0][i].src, this.config._playlist[0][i].type);
                    return this;
                }
            }
        }
        this._testMediaSupport();
        this.setFile(this.config._playlist);

        return this;
    };

    return this._init();
    };

}

$p.mmap = [];
$p.models = {};
$p.newModel = function(obj, ext) {
    if (typeof obj!='object') return false;
    if (!obj.modelId) return false;

    var result = false,
        extend = ($p.models[ext] && ext!=undefined) ? $p.models[ext].prototype : {};
  
    /* already exists or has been replaced */
    if ($p.models[obj.modelId]) return result;

    /* register new model */
    $p.models[obj.modelId] = function(){};
    $p.models[obj.modelId].prototype = $.extend({}, extend, obj);

    /* add modelname to media map object */
    if (obj.setiLove) {
        obj.setiLove();
    }
    
    /* remove overwritten model from iLove-map */
    $p.mmap = $.grep($p.mmap, function(iLove) {
        var doesNotExist = iLove.model != ((obj.replace) ? obj.replace.toLowerCase() : ''),
            isNotOverwritten = iLove.replaces != obj.modelId;
        return doesNotExist && isNotOverwritten;
    })

    for (var i=0; i< obj.iLove.length; i++) {
        obj.iLove[i].model = obj.modelId.toLowerCase();
        obj.iLove[i].replaces = ((obj.replace) ? obj.replace.toLowerCase() : '');
        $p.mmap.push( obj.iLove[i] );
    }

    return true;
}

});
var projekktorConfig = function(ver){this._version = ver;};

;/*
* this file is part of: 
* projekktor zwei
* http://www.projekktor.com
*
* Copyright 2010-2012, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
* under GNU General Public License
* http://www.filenew.org/projekktor/license/
*/
projekktorConfig.prototype = {
    /**************************************************************
        Config options to be customized prior initialization only:
    ***************************************************************/
        
    _playerName:                    'Projekktor',
        
    _playerHome:                    'http://www.projekktor.com?via=context',
    
    /* sets name of the cookie to store playerinformation in */
    _cookieName:                    'projekktor',
    
    /* days to keep cookie alive */
    _cookieExpiry:                  356,     
    
    /* Plugins to load on instance initialization, plugins are automatically extening the projekktorPluginInterface class.
    The order how the plugins are set here is important because they are added from z-index 0 to n one by one to the player DOM.
    As such it is usefull to add the "Display" plugin always first.
    */
    _plugins:                       ['display', 'controlbar', 'contextmenu', 'settings'],
    
    /* Add one plugin or more plugins to the player. Alternative to "plugins" above. Will be merged with it. */
    _addplugins:                    [], 
    
    /* custom reel parser (data:JSObject), default function(data){return data;} */
    _reelParser:                    null,
    
    /* Prefix prepended to all css-Classnames and data-attributes used by the player in order to avoid conflicts with existing layouts and scripts */ 
    _ns:                            'pp',
    
    /* a priorised array of available platforms */
    _platforms:                     ['browser', 'android', 'ios', 'native', 'flash', 'vlc'],
    
    /* if set to true, projekktor assumes to live within an iframe and will act accordingly (used for embedding) */
    _iframe:                        false,
    
    /* if set to true projekktor will discard native media tag attributes (loop,controls,autoplay,preload etc.pp) */   
    _ignoreAttributes:              false,
        
    /* looping scheduled media elements -  will be overwritten by loop-attribute of a replaced <video> tag. */
    _loop:                          false,
    
    /* automatically start playback once page has loaded -  will be overwritten by autoplay-attribute of a replaced <video> tag. */
    _autoplay:                      false,
    
    /* if more than one item is scheduled, true will automatically start playback of the next item in line once current one completed */ 
    _continuous:                    true,
    
    /* "true" will stop all other player instances but the one the user clicked play on. */
    _thereCanBeOnlyOne:             true, 
    
    /* on "true" try to leave fullscreen on player "complete" - does not seem to work properly in Firefox... yeah! */
    _leaveFullscreen:               true,
            
    /* An array of items to be played. Check http://www.projekktor.com/docs/playlists to learn more */
    _playlist:                      [],
    
    _theme:                         false,
    
    /*'http://www.projekktorxl.com/themegen/api/themes/live/format/jsonp/id/%{id}/version/%{ver}',*/ 
    _themeRepo:                     false, 
        
    /* debug on / off */
    _debug:                         false,
    debugLevel:                     'plugins,events,',
    
    /* the width of the player - >0= overwrite destNodes width, 0= keep dest node width, false=maintain ratio */
    _width:                         null,
    
    /* guess what.... the hight of the player - >0= overwrite destNodes height, 0 = keep height , false=maintain ratio */
    _height:                        null,
    
    /* disables all internal events bound to window.resize */
    _preventAutoScaling:			false,
    
    _ratio:                         false,
    
    /* An array of objects featuring keycode=>function sets for keyboard-controls-customizing */
    _keys: [],          
    
    /* cross domain */
    _isCrossDomain:                 false,
    
    /* foce full viewport if browser supports native media-element-fullscreen (e.g. iPad) */
    _forceFullViewport:             false,
    
    /**************************************************************
        Config options available per playlist item:
    ***************************************************************/
    
    /* unique itemID for the item currently played - dynamically generated if not provided via config */
    id:                             0,
    
    /* a title is a title is a title */ 
    title:                          null,
        
    cat:                            'clip',
        
    /* URL to poster image -  will be overwritten by poster-attribute of the replaced media tag. */
    poster:                         null,   
    
    /* enable/disable controls -  will be overwritten by controls-attribute of the replaced <video> tag. */
    controls:                       true,
    
    /* start offset in seconds for randomly seekable media. (EXPERIMENTAL) */
    start:                          false,
    
    /* stop endpoint in seconds for randomly seekable media. (EXPERIMENTAL) */
    stop:                           false,   
    
    /* initial volume on player-startup, 0=muted, 1=max */
    volume:                         0.5,
    
    /* a cover which will fill the display on audio-only playback */
    cover:                          '',     
            
    /* enable/disable the possibility to PAUSE the video once playback started. */
    disablePause:                   false,
    
    /* enable/disable the possibility to skip the video by hitting NEXT or using the SCRUBBER */
    disallowSkip:                   false,
    
    /* if set to TRUE users can not change the volume of the player - neither via API nor through controls */
    fixedVolume:                    false,
    
    /* scaling used for images (playlist items and posters) "fill", "aspectratio" or "none" */
    imageScaling:                   'aspectratio',
    
    /* scaling used for videos (flash and native, not youtube) "fill", "aspectratio" or "none" */
    videoScaling:                   'aspectratio',
        
    /* path to the MP4 Flash-player fallback component */
    playerFlashMP4:                 '',
        
    /* path to the MP3 Flash-player fallback component */
    playerFlashMP3:                 '',  
            
    /* defines the streamtype of the current item.
        'http':  http  streaming
        'rtmp':  RTMP streaming - requires "flashRTMPServer" to be set.
    */
    streamType:                     'http',
    
    /* it streamType is 'rtmp' you have to provide the serverURL here. */
    streamServer:   '',
        
    startParameter:                 'start',
        
    /* Youtube offers two different player APIs: fLaSh and "iFrame" for HTML5 . Make your choice here:
      For mobile devices this is forced to TRUE
    */
    useYTIframeAPI:                 true,
    
    /* enable/disable fetching of keyboard events - works in "fullscreen" only */
    enableKeyboard:                 true,  
    
    /* enable/disable the possibility to toggle to FULLSCREEN mode */
    enableFullscreen:               true,
    
    /*
    small: Player height is 240px, and player dimensions are at least 320px by 240px for 4:3 aspect ratio.
    medium: Player height is 360px, and player dimensions are 640px by 360px (for 16:9 aspect ratio) or 480px by 360px (for 4:3 aspect ratio).
    large: Player height is 480px, and player dimensions are 853px by 480px (for 16:9 aspect ratio) or 640px by 480px (for 4:3 aspect ratio).
    hd720: Player height is 720px, and player dimensions are 1280px by 720px (for 16:9 aspect ratio) or 960px by 720px (for 4:3 aspect ratio).
    hd1080: Player height is 1080px, and player dimensions are 1920px by 1080px (for 16:9 aspect ratio) or 1440px by 1080px (for 4:3 aspect ratio).
    highres: Player height is greater than 1080px, which means that the player's aspect ratio is greater than 1920px by 1080px.
    */
    playbackQuality:                'default',
    
    _playbackQualities:
    [
        {key: 'small',  minHeight: 240,  minWidth: 240}, 
        {key: 'medium',  minHeight: 360,  minWidth: [{ratio: 1.77, minWidth: 640}, {ratio: 1.33, minWidth: 480}]},
        {key: 'large',  minHeight: 480,  minWidth: [{ratio: 1.77, minWidth: 853}, {ratio: 1.33, minWidth: 640}]},
        {key: 'hd1080',  minHeight: 1080, minWidth: [{ratio: 1.77, minWidth: 1920}, {ratio: 1.33, minWidth: 1440}]},
        {key: 'hd720',  minHeight: 720,  minWidth: [{ratio: 1.77, minWidth: 1280}, {ratio: 1.33, minWidth: 960}]},
        {key: 'highres',  minHeight: 1081, minWidth: 0}  
    ],
    
    /* if testcard is disabled, the player will force a filedowload in case no native- or flashplayer
    is available. oterhwise (enableTestcard=true) a testcard with an errormessage is shown in case of issues */
    enableTestcard:                 true,
    
    /* if the scheduled playlist holds more than one item an "skipTestcard" is set to TRUE in case of an error
    the player will proceed to the next item without showing a testcard */
    skipTestcard:                   false,  
        
    /* (pre-) sets the media-duration / will be overwritten once META data is available */
    duration:                       0,
    
    /* add this CSS classes on startup */
    className:                      ''
    	
};
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com 
 *
 * Copyright 2010-2013 Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
var projekktorPluginInterface = function(){};
jQuery(function($) {
projekktorPluginInterface.prototype = {
    
    pluginReady: false,
    reqVer: null,
    name: '',
    pp: {},
    config: {},
    playerDom: null,
    
    _appliedDOMObj: [],
    _pageDOMContainer: {},
    _childDOMContainer: {},
    
    _init: function(pluginConfig) {        
        this.config = $.extend(true, this.config, pluginConfig);
        if (this.reqVer!=null) {
            if (!$p.utils.versionCompare(this.pp.getPlayerVer(), this.reqVer)) {
                alert("Plugin '" + this.name + "' requires Projekktor v" + this.reqVer + " or later! Please visit http://www.projekktor.com and get the most recent version.");
                this.pluginReady = true;
                return;
            }
        }
        this.initialize();
    },
    
    getConfig: function(idx, defaultValue) {	
        var result = null,
            def = defaultValue || null;
    
        if (this.pp.getConfig('plugin_'+this.name)!=null) {
            result = this.pp.getConfig('plugin_'+this.name)[idx];
        }
    
        if (result==null) {
            result = this.pp.getConfig(idx);
        }
                
        if (result==null) {
            result = this.config[idx];
        }
    
        if (typeof result == 'object' && result.length === null)
            result = $.extend(true, {}, result, this.config[idx]);
        else if (typeof result == 'object') {
            result = $.extend(true, [], this.config[idx] || [], result || [] );
        }
        
        if (idx==undefined) {
            return this.pp.getConfig();
        }
        return (result==null) ? def : result;
    },
    
    getDA: function(name) {
        return 'data-' + this.pp.getNS() + '-' + this.name + '-' + name;        
    },
    
    getCN: function(name) {
        return this.pp.getNS() + name;        
    },    
    
    sendEvent: function(eventName, data) {
        this.pp._promote({_plugin:this.name, _event:eventName}, data);
    },

    deconstruct: function() {
        this.pluginReady = false;
        $.each(this._appliedDOMObj, function() {
            $(this).unbind(); 
        });
    },
    
    i18n: function(str) {
        var results = [],
            re = /%{([^}]+)}/g,
            text,
            custom = $.extend(true, {}, this.getConfig('messages') || {}, {title: this.getConfig('title'), version: this.pp.getVersion()}),
            msg = ''; 

        while(text = re.exec(str)) {
            msg = custom[text[1]] || ((projekktorMessages[text[1]]!=undefined) ? projekktorMessages[text[1]] : text[1]);
            str = str.replace(new RegExp('%{' + text[1] + '}', 'gi'), msg);
        }

        return str;
    },
    
    /**
    * applies a new dom element to the player in case it is not yet present
    * also transparently applies the cssclass prefix as configured
    * 
    * @private
    * @element (Object) the element
    * @fu (String) function, default 'container'
    * @visible (Boolean) display on init, default is 'false'
    * @return (Object) the element
    */
    applyToPlayer: function(element, fu, visible) {
        if (!element) return null;

        var func = fu || 'container',
            tmpClass = '',
            ref = this;
        
        try {tmpClass = element.attr("class") ||  this.name} catch(e){tmpClass = this.name;}

        this._pageDOMContainer[func] = $( "["+this.getDA('host')+"='" + this.pp.getId() + "']["+this.getDA('func')+"='"+func+"']" );
        this._childDOMContainer[func] = this.playerDom.find("[" + this.getDA('func') + "='" + func + "'],." + this.getCN(tmpClass) + ":not([" +this.getDA('func') +"=''])");

        // check if this element aleady exists somewhere on page        
        if ( this._pageDOMContainer[func].length > 0 ) {
            this._pageDOMContainer[func].removeClass('active').addClass('inactive');
            
            $.each(this._pageDOMContainer[func], function() {
                ref._appliedDOMObj.push($(this));
            });
            
            return this._pageDOMContainer[func];
        }
 
        // add new DOM container to the player	
        if (this._childDOMContainer[func].length==0) {
            element
                .removeClass(tmpClass)
                .addClass(this.pp.getNS()+tmpClass)
                .removeClass('active')
                .addClass('inactive')
                .attr(this.getDA('func'), func)
                .appendTo(this.playerDom);
                
            this._childDOMContainer[func] = element;
            this._appliedDOMObj.push(element);
            if (visible===true) {
                element.addClass('active').removeClass('inactive');
            }

            return element;
        } else {            
            $.each(this._childDOMContainer[func], function() {
                $(this).attr(ref.getDA('func'), func)
                ref._appliedDOMObj.push($(this));
            });
        }
            
        if (visible===true) {
            this._childDOMContainer[func].addClass('active').removeClass('inactive');
        }
    
        return $(this._childDOMContainer[func][0]);
    },

    getElement: function(name) {
        return this.pp.env.playerDom.find('.' + this.pp.getNS() + name)
    },

    setInactive: function() {
        $(this._pageDOMContainer['container']).removeClass('active').addClass('inactive');
        $(this._childDOMContainer['container']).removeClass('active').addClass('inactive');
        this.sendEvent('inactive', $.extend(true, {}, this._pageDOMContainer['container'], this._childDOMContainer['container']));
    },
    
    setActive: function(elm, on) {
        var dest = (typeof elm =='object') ? elm : this.getElement(elm);
        
        if (elm==null) {
            this._pageDOMContainer['container'].removeClass('inactive').addClass('active');
            this._childDOMContainer['container'].removeClass('inactive').addClass('active');
            this.sendEvent('active', $.extend(true, {}, this._pageDOMContainer['container'], this._childDOMContainer['container']));
            return dest;
        }
        
        if (on!=false) {
            dest.addClass('active').removeClass('inactive');
        }
        else {
            dest.addClass('inactive').removeClass('active');
        }
        
        dest.css('display', '');
        
        return dest;
    },
    
    getActive: function(elm) {        
        return $(elm).hasClass('active');
    },    
    
    setValueClass: function(el, prefix, value) {        
        var classes = el[0].className.split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
        });
        el[0].className = $.trim(classes.join(" ") + " " + prefix + value );
    },      

    // triggered on plugin-instanciation 
    initialize: function() {},
    
    isReady: function() {
        return this.pluginReady;
    },
    
    clickHandler: function(what) {
        try {
            this.pp[this.getConfig(what+'Click').callback](this.getConfig(what+'Click').value);
        } catch(e){
            try {
                    this.getConfig(what+'Click')(this.getConfig(what+'Click').value);
                } catch(e){}
        }
        return false;    
    },
    
    /**
    * set and get cookie-values for this specific plugin
    * 
    * @public
    * @key (String) variable name / key
    * @value (Mixed) Value to store
    * @ttl (Mixed) Time to live in seconds or "false" for instant deletion
    * @return (Object) the element
    */    
    cookie: function (key, value, ttl) {
        if (document.cookie===undefined || document.cookie===false) return null;
        if (key==null && value!=null) return null;
        if (this.pp.getConfig('cookieExpiry')==0) return null;

        var t = new Date(),
            result = null,
            cookieString = '',
            tmp = storedData = jQuery.parseJSON(eval(result = new RegExp('(?:^|; )' + encodeURIComponent(this.getConfig('cookieName')+"_"+this.name) + '=([^;]*)').exec(document.cookie)) ? decodeURIComponent(result[1]) : null);

        if (typeof storedData!='object' || storedData==null) {
            storedData = {};
            if (key!=null)
                storedData[key] = tmp;
        }
        
        // read cookie
        if (key==null) {
            return storedData;
        }
        
        if (arguments.length==1) {
            return storedData[key];
        }
        
        if (value!=null) {
            storedData[key] = value;
        }
        else {
            delete storedData[key];
        }
      
        if ($.isEmptyObject(storedData)) {
            ttl=0;
            storedData = '';
        }
        else {
            storedData = $p.utils.stringify(storedData)      
        }
       
        // set cookie:
        t.setDate(t.getDate() + (ttl || this.getConfig('cookieExpiry', 0)));
      
        cookieString = encodeURIComponent(this.getConfig('cookieName', 'projekktor')+"_"+this.name)+'='
            +encodeURIComponent(storedData)
            +'; expires=' + ((ttl==false) ? "Thu, 01 Jan 1970 00:00:01 GMT" : t.toUTCString())
   
        if (this.getConfig('cookieDomain', false)) {
            cookieString += '; domain=' + options.domain;
        }

        document.cookie = cookieString;
        return value;
    },
    
    // important
    eventHandler: function() {}  
}
});
;
window.VERS = [];

jQuery(function ($) {
	$p.utils = {

		imageDummy: function () {
			return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi/v//PwNAgAEACQsDAUdpTjcAAAAASUVORK5CYII=';
		},

		/**
		 * Capitalizes a String
		 * @private
		 * @param (Object) da String
		 * @return da result String
		 */
		capitalise: function (string) {
			return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
		},

		/**
		 * blocks text selection attempts by the user for the given obj
		 * @private
		 * @param (Object) Object
		 */
		blockSelection: function (dest) {
			if (dest)
				dest
					.css({
						"-khtml-user-select": "none",
						"-webkit-user-select": "none",
						"MozUserSelect": "none",
						"user-select": "none"
					})
					.attr('unselectable', 'on')
					.bind("selectstart", function () {
						return false;
					});
			return dest;
		},

		unique: function (dest) {
			var uniqueArr = [];
			for (var i = dest.length; i--;) {
				var val = dest[i];
				if ($.inArray(val, uniqueArr) === -1) {
					uniqueArr.unshift(val);
				}
			}
			return uniqueArr;
		},

		intersect: function (array1, array2) {

			var result = [];
			$.each(array1, function (i) {
				// ugly try catch mess thx to IE6-8
				try {
					if ($.inArray(array2, array1[i]) > -1) result.push(array1[i]);
				} catch (e) {}
				try {
					if ($.inArray(array1[i], array2) > -1) result.push(array1[i]);
				} catch (e) {}
			});
			return result;
		},

		roundNumber: function (rnum, rlength) {
			if (rnum <= 0 || isNaN(rnum)) return 0;
			return Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
		},

		/* generates a random string of <length> */
		randomId: function (length) {
			var chars = "abcdefghiklmnopqrstuvwxyz",
				result = '';
			for (var i = 0; i < length; i++) {
				var rnum = Math.floor(Math.random() * chars.length);
				result += chars.substring(rnum, rnum + 1);
			}
			return result;
		},

		toAbsoluteURL: function (s) {
			var l = location,
				h, p, f, i;

			if (s == null || s == '') return '';

			if (/^\w+:/.test(s)) {
				return s;
			}

			h = l.protocol + '//' + l.host;
			if (s.indexOf('/')===0) {
				return h + s;
			}

			p = l.pathname.replace(/\/[^\/]*$/, '');
			f = s.match(/\.\.\//g);
			if (f) {
				s = s.substring(f.length * 3);
				for (i = f.length; i--;) {
					p = p.substring(0, p.lastIndexOf('/'));
				}
			}

			return h + p + '/' + s;
		},

		/**
		 * strips / trims
		 * @public
		 * @param (String) Da string to get processed
		 * @return (String) Da trimmed string
		 */
		strip: function (s) {
			return s.replace(/^\s+|\s+$/g, "");
		},

		/**
		 * strips / trims
		 * @public
		 * @param (String) Da human readable time to parse
		 * @return (Integer) Absolute seconds
		 */
		toSeconds: function (t) {
			var s = 0.0;
			if (typeof t != 'string') return t; 
			if (t) {
				var p = t.split(':');
				if (p.length > 3)
					p = p.slice(0, 3);

				for (var i = 0; i < p.length; i++)
					s = s * 60 + parseFloat(p[i].replace(',', '.'));
			}

			return parseFloat(s);
		},

		toTimeString: function (secs, noSecs) {
			var hours = Math.floor(secs / (60 * 60)),
				divisor_for_minutes = secs % (60 * 60),
				minutes = Math.floor(divisor_for_minutes / 60),
				divisor_for_seconds = divisor_for_minutes % 60,
				seconds = Math.floor(divisor_for_seconds);

			if (hours < 10) {
				hours = "0" + hours;
			}
			if (minutes < 10) {
				minutes = "0" + minutes;
			}
			if (seconds < 10) {
				seconds = "0" + seconds;
			}

			return (noSecs === true) ? hours + ':' + minutes : hours + ':' + minutes + ':' + seconds;
		},

		/* X-Browser flash embedd mess */
		embeddFlash: function (destObj, domOptions, shield, shrinkShield) {

			var flashVars = domOptions.FlashVars || {},
				result = '',
				htmlEmbedObj = '',
				htmlEmbed = '',
				tmpStr = '',
				dest = destObj,
				id = '';

			// add flashVars
			if (domOptions.src.indexOf('?') == -1)
				domOptions.src += "?";
			else
				domOptions.src += "&";



			for (var key in flashVars) {
				if (typeof flashVars[key] != 'function') {
					tmpStr = flashVars[key];

					/*
			    // support "{tags}" to add media properties
			    for(var i in this.media) {
				if (typeof tmpStr != 'string') continue;	    
				tmpStr = tmpStr.replace('{'+i+'}', this.media[i]);
			    }
			    */
					domOptions.src += key + '=' + encodeURIComponent(tmpStr) + '&';
				}
			}
			domOptions.src.replace(/&$/, '');

			// <object> bullshit with redundant "ID" IE extrawurst
			htmlEmbedObj = '<object id="' + domOptions.id + '" codebase="https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0"  name="' + domOptions.name + '" width="' + domOptions.width + '" height="' + domOptions.height + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + '<param name="movie" value="' + domOptions.src + '"></param>' + '<param name="allowScriptAccess" value="' + domOptions.allowScriptAccess + '"></param>' + '<param name="allowFullScreen" value="' + domOptions.allowFullScreen + '"></param>' + '<param name="wmode" value="' + domOptions.wmode + '"></param>';


			// <embed> tag
			htmlEmbed = '<embed ';
			for (var key in domOptions) {
				if (key.toUpperCase() === 'FLASHVARS') continue;
				if (typeof domOptions[key] != 'function') htmlEmbed += key + '="' + domOptions[key] + '" ';
			}
			htmlEmbed += ' pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"></embed>';


			result = htmlEmbedObj + htmlEmbed;
			result += '</object>';

			if (!document.all || window.opera) {
				result = htmlEmbed;
			}

			if (dest === null)
				return result;

			// jquerx 1.4.2 IE flash <object> issue workaround:
			// this does not work in IE: destObj.append(result);
			dest.get(0).innerHTML = result;

			if (shield !== false) {
				dest.append(
					$('<div/>').attr('id', domOptions.id + '_cc')
					.css({
						width: (shrinkShield) ? '1px' : '100%',
						height: (shrinkShield) ? '1px' : '100%',
						backgroundColor: ($p.utils.ieVersion() < 9) ? '#000' : 'transparent',
						filter: 'alpha(opacity = 0.1)',
						position: 'absolute',
						top: 0,
						left: 0
					})
				);
			}

			return $('#' + domOptions.id);
		},

		ieVersion: function () {
			var v = 3,
				div = document.createElement('div'),
				all = div.getElementsByTagName('i');

			while (
				div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				all[0]
			);

			return v > 4 ? v : undefined;
		},

		/**
		 * replaces {}-tags with parameter equialents
		 * @public
		 * @param (String) Da string to get processed
		 * @param (Object) Object holding data to fill in
		 * @return (String) Da parsed string
		 * OBSOLETE
		parseTemplate: function (template, data, encode) {

			if (data === undefined || data.length == 0 || typeof data != 'object') return template;

			for (var i in data) {
				template = template.replace(new RegExp('%{' + i + '}', 'gi'), ((encode === true) ? window.encodeURIComponent(data[i]) : data[i]))
			}
			template = template.replace(/%{(.*?)}/gi, '');
			return template;
		},
		*/

		/**
		 * stretches target to fit into specified dimensions keeping apsect ratio
		 * @public
		 * @param (String) "fill" or "aspectratio" (default)
		 * @param (Object) the Dom-Obj to scale
		 * @param (Float) The maximum available width in px
		 * @param (Float) The maximum available height in px
		 * @param (Float) A forced asumed with of the target object (optional)
		 * @param (Float) A forced asumed height of the target object (optional)
		 * @return (Boolean) Returns TRUE if <target> was resized in any way, otherwise FALSE
		 */
		stretch: function (stretchStyle, target, owid, ohei, twf, thf) {
			var unti = "%",
				wid = owid,
				hei = ohei;
				
			if (target == null)
				return false;

			if ((target instanceof $)===false) {
				target = $(target);
			}

            if (!target.attr("data-od-width")) target.attr("data-od-width",  target.width());
			if (!target.attr("data-od-height")) target.attr("data-od-height", target.height());
				
			var tw = (twf !== undefined) ? twf : target.attr("data-od-width"),
				th = (thf !== undefined) ? thf : target.attr("data-od-height"),
				xsc = (wid / tw),
				ysc = (hei / th),
				rw = wid,
				rh = hei;

			// fill area
			switch (stretchStyle) {
				case 'none':
					wid = tw;
					hei = th;
					unit = "px";
					
					break;
	
				case 'fill':
					if (xsc > ysc) {
						rw = tw * xsc;
						rh = th * xsc;
					} else if (xsc < ysc) {
						rw = tw * ysc;
						rh = th * ysc;
					}
					wid = $p.utils.roundNumber((rw / wid) * 100, 0);
					hei = $p.utils.roundNumber((rh / hei) * 100, 0);
					unit = "%";
					break;
	
				case 'aspectratio':
				default:
					// scale, keep aspect ratio
					if (xsc > ysc) {
						rw = tw * ysc;
						rh = th * ysc;
					} else if (xsc < ysc) {
						rw = tw * xsc;
						rh = th * xsc;
					}
					wid = $p.utils.roundNumber((rw / wid) * 100, 0);
					hei = $p.utils.roundNumber((rh / hei) * 100, 0);
					unit = "%";
					break;
			}

			if (wid===0 || hei===0) {
				return false;
			}

			target.css({
				'margin': 0,
				'padding': 0,
				'width': wid + unit,
				'height': hei + unit,
				'left': ( ((unit=="%") ? 100 : owid) - wid) / 2 + unit,
				'top': ( ((unit=="%") ? 100 : ohei) - hei) / 2 + unit
			});

			if (target.attr("data-od-width") != target.width() || target.attr("data-od-height") != target.height()) {
				return true;
			}

			return false;

		},

		// parseUri 1.2.2
		// (c) Steven Levithan <stevenlevithan.com>
		// MIT License                 
		parseUri: function (str) {
			var o = {
				strictMode: false,
				key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
				q: {
					name: "queryKey",
					parser: /(?:^|&)([^&=]*)=?([^&]*)/g
				},
				parser: {
					strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
					loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
				}
			},
				m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
				uri = {},
				i = 14;

			while (i--) uri[o.key[i]] = m[i] || "";

			uri[o.q.name] = {};
			uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
				if ($1) uri[o.q.name][$1] = $2;
			});

			return uri;
		},

		// usage: log('inside coolFunc',this,arguments);
		// http://paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/                
		log: function () {

			if (this.logging===false) {
				return;
			}

			this.history = this.history || []; // store logs to an array for reference
			this.history.push(arguments);
			if (window.console)
				console.log(Array.prototype.slice.call(arguments));
		},

		cleanResponse: function (responseText, type) {
			var data = false;

			switch (type) {
			case 'html':
			case 'xml':
				// Create the xml document from the responseText string.
				if (window.DOMParser) {
					data = new DOMParser()
					data = data.parseFromString(responseText, "text/xml");
				} else { // Internet Explorer
					data = new ActiveXObject("Microsoft.XMLDOM");
					data.async = "false";
					data.loadXML(responseText);
				}
				break;

			case 'json':
				data = responseText;
				if (typeof data == 'string') {
					data = $.parseJSON(data);
				}
				break;
			case 'jsonp':
				break;
			default:
				data = responseText;
				break;

			}
			return data;
		},

		cssTransitions: function () {
			var m = document.createElement('z'),
				s = m.style;

			function test_props(p) {
				for (var i in p) {
					if (s[p[i]] != null) {
						return true;
					}
				}
				return false;
			}

			function test_props_all(prop) {
				var d = 'Webkit Moz O ms Khtml'.split(' '),
					u = prop.charAt(0).toUpperCase() + prop.substr(1),
					e = (prop + ' ' + d.join(u + ' ') + u).split(' ');
				return test_props(e);
			}
			return test_props_all('animationName');
		},
        
        versionCompare: function (installed, required) {
            var a = installed.split('.'),
                b = required.split('.'),
				i = 0;
    
            for (i = 0; i < a.length; ++i) {
                a[i] = Number(a[i]);
            }
            for (i = 0; i < b.length; ++i) {
                b[i] = Number(b[i]);
            }
            if (a.length == 2) {
                a[2] = 0;
            }
    
            if (a[0] > b[0]) return true;
            if (a[0] < b[0]) return false;
    
            if (a[1] > b[1]) return true;
            if (a[1] < b[1]) return false;
    
            if (a[2] > b[2]) return true;
            if (a[2] < b[2]) return false;
    
            return true;
        },

		/**
		* replaces {}-tags with parameter equialents
		* @public
		* @param (String) Da string to get processed
		* @param (Object) Object holding data to fill in
		* @return (String) Da parsed string
		*/
		parseTemplate: function (template, data, encode) {
			if (data === undefined || data.length == 0 || typeof data != 'object') return template;
			
			for (var i in data) {
				template = template.replace(new RegExp('%{' + i + '}', 'gi'), ((encode === true) ? window.encodeURIComponent(data[i]) : data[i]))
			}
			template = template.replace(/%{(.*?)}/gi, '');
			return template;
		},

		
        /**
         * serializes a simple object to a JSON formatted string.
         * Note: stringify() is different from jQuery.serialize() which URLEncodes form elements
         * CREDITS: http://blogs.sitepointstatic.com/examples/tech/json-serialization/json-serialization.js
         */        
        stringify: function(obj) {         
            if ("JSON" in window) {
                return JSON.stringify(obj);
            }
    
            var t = typeof (obj);
            if (t != "object" || obj === null) {
                // simple data type
                if (t == "string") obj = '"' + obj + '"';
    
                return String(obj);
            } else {
                // recurse array or object
                var n, v, json = [], arr = (obj && obj.constructor == Array);
    
                for (n in obj) {
					if (obj.hasOwnProperty(n)) {
						v = obj[n];
						t = typeof(v);
						if (obj.hasOwnProperty(n)) {
							if (t == "string") {
								v = '"' + v + '"';
							} else if (t == "object" && v !== null){
								v = $p.utils.stringify(v);
							}
		
							json.push((arr ? "" : '"' + n + '":') + String(v));
						}
					}
                }
    
                return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
            }
        },
        
		logging: false
	};
});


jQuery(function ($) {
	$p.platforms = {
			
        VLC: function() {
			try {
				if (navigator.plugins && (navigator.plugins.length > 0)) {
					for(var i=0;i<navigator.plugins.length;++i) {
						if (navigator.plugins[i].name.indexOf("VLC") != -1) {
							if (navigator.plugins[i].version!=null)
								return navigator.plugins[i].version || "0";
							if (navigator.plugins[i].description!=null)
								if (navigator.plugins[i].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0])
									return navigator.plugins[i].description.match(/\d{1,}\.\d{1,}\.\d{1,}/i)[0];
						}
					}
				}
				else {
					return "0"; // no, please, no
				}
			} catch(e) {}
            return "0";
        },

		/* returns the version of the flash player installed on client. returns 0 on none. */
		FLASH: function (typ) {
			
			if (typeof window.VERS ['FLASH'] != 'undefined') {
				return window.VERS ['FLASH'];
			}
			
			try {
				try {
					// avoid fp6 minor version lookup issues
					// see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
					var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
					try {
						axo.AllowScriptAccess = 'always';
					} catch (e) {
						window.VERS['FLASH'] ='6.0.0';
						return $p.platforms.VERS['FLASH'];
					}
				} catch (e) {}
				window.VERS['FLASH'] = (new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].match(/\d+/g)[0]).toString();
				return window.VERS['FLASH'];
			} catch (e) {
				try {
					if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
						window.VERS['FLASH'] = ((navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0] ).toString();
						return window.VERS['FLASH'];
					}
				} catch (e) {}
			}
			return "0";
		},
		
		
		/* returns the version of the flash player installed on client. returns 0 on none. */
		FLASHNA: function (typ) {
			
			if (typeof window.VERS ['FLASH'] != 'undefined') {
				return window.VERS ['FLASH'];
			}
			
			try {
				try {
					// avoid fp6 minor version lookup issues
					// see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
					var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
					try {
						axo.AllowScriptAccess = 'always';
					} catch (e) {
						window.VERS['FLASH'] ='6.0.0';
						return $p.platforms.VERS['FLASH'];
					}
				} catch (e) {}
				window.VERS['FLASH'] = (new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1].match(/\d+/g)[0]).toString();
				return window.VERS['FLASH'];
			} catch (e) {
				try {
					if (navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
						window.VERS['FLASH'] = ((navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].match(/\d+/g)[0] ).toString();
						return window.VERS['FLASH'];
					}
				} catch (e) {}
			}
			return "0";
		},
		
		ANDROID: function (type) {
			try {
				return (navigator.userAgent.toLowerCase().match(/android\s+(([\d\.]+))?/)[1]).toString();
			} catch (e) {}
            return "0";
		},

		IOS: function (type) {
			var agent = navigator.userAgent.toLowerCase(),
				start = agent.indexOf('os ');
			if ((agent.indexOf('iphone') > -1 || agent.indexOf('ipad') > -1) && start > -1) {
				return (agent.substr(start + 3, 3).replace('_', '.')).toString()
			}
			return "0";
		},

		NATIVE: function (type) {
			try {
				var testObject = $((type.indexOf('video')>-1) ? '<video/>' : '<audio/>').get(0);
				if (testObject.canPlayType!=null) {
					if (type==='*') {
						return "1";
					}
					switch (testObject.canPlayType(type)) {
                        case "no":
                        case "":
                            return "0";
                        // case "maybe":			
						// case "probably":
                        default:
                        	return "1";
					}
				}
			} catch (e) {}
            return "0";
		},

		BROWSER: function (type) {
			return "1";
		}
	}
});


;/*
 * Projekktor II Plugin: Contextmenu
 *
 * under GNU General Public License
 * http://www.projekktor.com/license/
 */
var projekktorContextmenu = function(){};
jQuery(function($) {
projekktorContextmenu.prototype = {

    version: '1.1.00',
    reqVer: '1.2.13',

    _dest: null,
    _items: {},
    
    initialize: function() {
        var ref = this,
            target = this.pp.getIframeWindow() || $(window);

        this._dest = $p.utils.blockSelection(this.applyToPlayer($('<ul/>')))
        this._items['player'] = {
            getContextTitle: function() {
                return ref.getConfig('playerName') + ' V' + ref.pp.getPlayerVer();
            },
            open: function() {
                if (ref.getConfig('playerHome')!=null) {
                    target.get(0).location.href = ref.getConfig('playerHome'); 
                    ref.pp.setPause();
                }
            }            
        }
        
        if (this.pp.getConfig('helpHome')) {
            this._items['help'] = {
                getContextTitle: function() {
                    return ref.pp.getConfig('messages')[100]
                },
                open: function() {
                    ref.popup(ref.pp.getConfig('helpHome'), 400, 600);
                }            
            }            
        }
    
        this.pluginReady = true;
    },
   
    mousedownHandler: function(evt) {            
        switch (evt.which) {
            case 3:
                var parentOffset = this.pp.getDC().offset(),
                    yPos = (evt.pageY - parentOffset.top),
                    xPos = (evt.pageX - parentOffset.left);
                    
                if (xPos + this._dest.width() > this.pp.getDC().width())
                    xPos = this.pp.getDC().width() - this._dest.width() - 2;
                    
                if (yPos + this._dest.height() > this.pp.getDC().height())
                    yPos = this.pp.getDC().height() - this._dest.height() - 2;
                    
                this.setActive();               
                this._dest.css({
                    top: yPos + "px",
                    left: xPos+ "px"
                })
                break;
            case 1:                
                try {
                    this._items[$(evt.target).data('plugin')].open();
                } catch(e) {}
            default:               
                this.setInactive();
        }    
    },
    
    mouseleaveHandler: function() {
        this.setInactive();
    },

    eventHandler: function(evt, obj) {
        if (evt.indexOf('Contextmenu')>-1) {
            if (this._items[obj.name]==null) {
                this._items[obj.name] = obj;
            }
        }        
    },
    
    displayReadyHandler: function() {
        var ref = this,
            span = null;
        
        this.setInactive();
        this._dest.html('');        

        for (var i in this._items) {
            span = $('<span/>')
                .data('plugin', i)
                .html(this._items[i].getContextTitle() || i);
            
            try{this._items[i].setContextEntry(span);}catch(e){}
        
            $('<li/>')                
                .append(span)
                .data('plugin', i)
                .appendTo(this._dest)            
        }
    },
    
    popup: function(url, width, height) {
        centeredY = window.screenY + (((window.outerHeight/2) - (height/2)));
        centeredX = window.screenX + (((window.outerWidth/2) - (width/2)));
        window.open(url, 'projekktor', 'height=' + height +',width=' + width +',toolbar=0,scrollbars=0,status=0,resizable=1,location=0,menuBar=0'+',left=' + centeredX +',top=' + centeredY).focus();
    }
}
});

;/*
 * Projekktor II Plugin: Controlbar
 * 
 * DESC: Adds a fully features cb element to the player
 * Copyright 2010-2014 Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 *
 * under GNU General Public License
 * http://www.projekktor.com/license/
 */
var projekktorControlbar = function () {};
jQuery(function ($) {
    projekktorControlbar.prototype = {
    
        version: '1.1.01',

        _cTimer: null,
        _lastPos: -1,
        _isDVR: false,
        _noHide: false,
        _vSliderAct: false,
        
        cb: null,

        controlElements: {},
        controlElementsConfig: {
            'sec_dur': null,
            'min_dur': null,
            'sec_abs_dur': null,
            'min_abs_dur': null,            
            'hr_dur': null,
            'sec_elp': null,
            'min_elp': null,
            'sec_abs_elp': null,
            'min_abs_elp': null,            
            'hr_elp': null,
            'sec_rem': null,
            'min_rem': null,
            'sec_abs_rem': null,
            'min_abs_rem': null,            
            'hr_rem': null,
            'sec_tip': null,
            'min_tip': null,
            'sec_abs_tip': null,
            'min_abs_tip': null,            
            'hr_tip': null,

            'cb': null,

            'playhead': {
                on: null,
                call: null
            },
            'loaded': null, // { on:['touchstart', 'click'], call:'scrubberClk'},
            'golive': [{
                on: ['touchstart', 'click'],
                call: 'goliveClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'scrubber': null, // { on:['touchstart', 'click'], call:'scrubberClk'},
            'scrubbertip': null,
            'scrubberknob': null,
            'scrubberdrag': [{
                on: ['mouseenter'],
                call: 'scrubberShowTooltip'
            }, {
                on: ['mouseout'],
                call: 'scrubberHideTooltip'
            }, {
                on: ['mousemove'],
                call: 'scrubberdragTooltip'
            }, {
                on: ['mousedown'],
                call: 'scrubberdragStartDragListener'
            }],

            'play': [{
                on: ['touchstart', 'click'],
                call: 'playClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'pause': [{
                on: ['touchstart', 'click'],
                call: 'pauseClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'stop': [{
                on: ['touchstart', 'click'],
                call: 'stopClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'prev': [{
                on: ['touchstart', 'click'],
                call: 'prevClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'next': [{
                on: ['touchstart', 'click'],
                call: 'nextClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'rewind': [{
                on: ['touchstart', 'click'],
                call: 'rewindClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'forward': [{
                on: ['touchstart', 'click'],
                call: 'forwardClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],

            'fsexit': [{
                on: ['touchstart', 'click'],
                call: 'exitFullscreenClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'fsenter': [{
                on: ['touchstart', 'click'],
                call: 'enterFullscreenClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],

            'loquality': [{
                on: ['touchstart', 'click'],
                call: 'setQualityClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'hiquality': [{
                on: ['touchstart', 'click'],
                call: 'setQualityClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],

            'vslider': [{
                on: ['touchstart', 'click'],
                call: 'vsliderClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'vmarker': [{
                on: ['touchstart', 'click'],
                call: 'vsliderClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'vknob': {
                on: ['mousedown'],
                call: 'vknobStartDragListener'
            },

            'volumePanel': [{
                on: ['mousemove'],
                call: 'volumeBtnHover'
            }, {
                on: ['mouseout'],
                call: 'volumeBtnOut'
            }],
            'volume': null,

            'mute': [{
                on: ['touchstart', 'click'],
                call: 'muteClk'
            }, {
                on: ['mouseout'],
                call: 'volumeBtnOut'
            }, {
                on: ['mousemove'],
                call: 'volumeBtnHover'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'unmute': [{
                on: ['touchstart', 'click'],
                call: 'unmuteClk'
            }, {
                on: ['mouseout'],
                call: 'volumeBtnOut'
            }, {
                on: ['mousemove'],
                call: 'volumeBtnHover'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'vmax': [{
                on: ['touchstart', 'click'],
                call: 'vmaxClk'
            }, {
                on: ['mouseout'],
                call: 'volumeBtnOut'
            }, {
                on: ['mousemove'],
                call: 'volumeBtnHover'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'vup': [{
                on: ['touchstart', 'click'],
                call: 'vupClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'vdown': [{
                on: ['touchstart', 'click'],
                call: 'vdownClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],            
            'open': [{
                on: ['touchstart', 'click'],
                call: 'openCloseClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'close': [{
                on: ['touchstart', 'click'],
                call: 'openCloseClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'loop': [{
                on: ['touchstart', 'click'],
                call: 'loopClk'
            }, {
                on: ['touchend'],
                call: 'touchEnd'
            }],
            'draghandle': {
                on: ['mousedown'],
                call: 'handleStartDragListener'
            },

            'controls': null,
            'title': null
        },

        config: {
            /* Plugin: cb - enable/disable fade away of overlayed controls */
            toggleMute: false,
            fadeDelay: 2500,
            showOnStart: false,
            showOnIdle: false,
            absoluteEndTime: false,
            
            /* cuepoints */
            showCuePoints: true,
            showCuePointsImmediately: true, // should the cuepoint be displayed immediately after curent playlist item duration is known or only if the relevant part of the playlist item is buffered and ready to be played
            showCuePointGroups: [],
            minCuePointSize: '2px', // minimal cuepoint size
            cuePointEvents: [
               /* { // Sample global blip events config. You can set individual events for every blip within cuepoint blipEvents object.
                 'events': ['click', 'mouseover'],
                 'handler': function(e){ // the event parameter passed to the event handler has data property which contains:
                                         // pp - reference to the current projekktor instance
                                         // cuepoint - reference to the cuepoint represented by current blip
                                         // any other custom data which was passed inside 'data' property described below
                    e.data.pp.setGotoCuePoint(e.data.cuepoint.id);
                    console.log(e.data.test);
                 },
                 'data': {test:'data test'} // you can add any custom data you want
                } */
            ],            

            /* Default layout */
            controlsTemplate: '<ul class="left"><li><div %{play}></div><div %{pause}></div></li></ul><ul class="right"><li><div %{fsexit}></div><div %{fsenter}></div></li><li><div %{settingsbtn}></div></li><li><div %{tracksbtn}></div></li><li><div %{vmax}></div></li><li><div %{vslider}><div %{vmarker}></div><div %{vknob}></div></div></li><li><div %{mute}></div></li><li><div %{timeleft}>%{hr_elp}:%{min_elp}:%{sec_elp} | %{hr_dur}:%{min_dur}:%{sec_dur}</div></li><li><div %{next}></div></li><li><div %{prev}></div></li></ul><ul class="bottom"><li><div %{scrubber}><div %{loaded}></div><div %{playhead}></div><div %{scrubberknob}></div><div %{scrubberdrag}></div></div></li></ul><div %{scrubbertip}>%{hr_tip}:%{min_tip}:%{sec_tip}</div>'
        },

        initialize: function () {

            var ref = this,
                playerHtml = this.playerDom.html(),
                useTemplate = true,
                classPrefix = this.pp.getNS();

            // check if ANY control element already exists        
            for (var i in this.controlElementsConfig) {
                if (playerHtml.match(new RegExp(classPrefix + i, 'gi'))) {
                    useTemplate = false;
                    break;
                }
            }

            if (useTemplate) {
                this.cb = this.applyToPlayer($(('<div/>')).addClass('controls'));
                this.applyTemplate(this.cb, this.getConfig('controlsTemplate'));
            } else {
                this.cb = this.playerDom.find("." + classPrefix + 'controls');
            }

            // find (inter)active elements    
            for (var i in this.controlElementsConfig) {
                this.controlElements[i] = $(this.playerDom).find('.' + classPrefix + i);
                $p.utils.blockSelection($(this.controlElements[i]));
            }

            this.addGuiListeners();
            this.hidecb(true);
            this.pluginReady = true;
        },

        /* parse and apply controls dom-template */
        applyTemplate: function (dest, templateString) {
            var ref = this,
                classPrefix = this.pp.getNS()
                label = '';

            // apply template string if required:
            if (templateString) {
                // replace tags by class derictive
                var tagsUsed = templateString.match(/\%{[a-zA-Z_]*\}/gi);
                if (tagsUsed != null) {
                    $.each(tagsUsed, function (key, value) {
                        var cn = value.replace(/\%{|}/gi, '');
                        if (value.match(/\_/gi)) {
                            // replace with span markup
                            templateString = templateString.replace(value, '<span class="' + classPrefix + cn + '"></span>');
                        } else {
                            templateString = templateString.replace(value, 'class="' + classPrefix + cn + '"' + ref.i18n(' aria-label="%{' + cn + '}" title="%{' + cn + '}" ') );
                        }
                    });
                }

                dest.html(templateString);
            }
        },

        updateDisplay: function () {
            var ref = this,
                state = this.pp.getState();

            // clearTimeout(this._cTimer);

            if (this.pp.getHasGUI()) return;

            // nothing to do
            if (this.getConfig('controls') == false) {
                this.hidecb(true);
                return;
            }

            // prev / next button
            if (this.getConfig('disallowSkip')) {
                this._active('prev', false);
                this._active('next', false);
            } else {
                this._active('prev', this.pp.getPreviousItem()!==false);
                this._active('next', this.pp.getNextItem()!==false);
            }

            // play / pause button
            if (this.getConfig('disablePause')) {
                this._active('play', false);
                this._active('pause', false);
            } else {
                if (state === 'PLAYING') this.drawPauseButton();
                if (state === 'AWAKENING') this.drawPlayButton();
                if (state === 'STARTING') this.drawPlayButton();
                if (state === 'PAUSED') this.drawPlayButton();
                if (state === 'IDLE') this.drawPlayButton();
            }

            // stop button
            this._active('stop', state !== 'IDLE');



            // rewind & forward
            this._active('forward', state !== 'IDLE');
            this._active('rewind', state !== 'IDLE');


            // fullscreen button    
            if (this.pp.getInFullscreen() === true) {
                this.drawExitFullscreenButton();
            } else {
                this.drawEnterFullscreenButton();
            }

            if (!this.getConfig('enableFullscreen')) {
                this._active('fsexit', false);
                this._active('fsenter', false);
            }


            // loop button
            this._active('loop', true);
            this.controlElements.loop
                .addClass( this.pp.getConfig('loop') ? 'on' : 'off' )
                .removeClass( !this.pp.getConfig('loop') ? 'on' : 'off' );

            // hd / sd toggl
            this.displayQualityToggle();

            // init time display
            this.displayTime();

            // init volume display
            this.displayVolume(this._getVolume());
        },
        
        deconstruct: function() {
            this.pluginReady = false;
            $.each(this.controlElements, function () {
                $(this).unbind(); 
            });
            $.each(this._appliedDOMObj, function() {
                $(this).unbind(); 
            });            
        },
                

        /* assign listener methods to controlbar elements */
        addGuiListeners: function () {
            var ref = this;

            // if (!this.getConfig('controls')) return;

            $.each(this.controlElementsConfig, function (key, elmCfg) {
                if (elmCfg == null) {
                    return true;
                }

                if (!(elmCfg instanceof Array)) {
                    elmCfg = [elmCfg]
                }

                for (var subset = 0; subset < elmCfg.length; subset++) {

                    if (elmCfg[subset].on == null) continue;

                    $.each(elmCfg[subset].on, function (evtKey, eventName) {

                        // thanx to FF3.6 this approach became a little complicated:
                        var isSupported = ("on" + eventName in window.document),
                            callback = elmCfg[subset].call;

                        if (!isSupported) {
                            var el = document.createElement('div')
                            el.setAttribute("on" + eventName, 'return;');
                            isSupported = (typeof el["on" + eventName] == 'function');

                        }

                        if (isSupported) {
                            ref.controlElements[key].bind(eventName, function (event) {
                                ref.clickCatcher(event, callback, ref.controlElements[key]);
                            });

                        }

                    });
                }
                return true;                
            });
            this.cb.mousemove(function (event) {
                ref.controlsFocus(event);
            });
            this.cb.mouseout(function (event) {
                ref.controlsBlur(event);
            });
        },

        /* generic click handler for all controlbar buttons */
        clickCatcher: function (evt, callback, element) {
            var ref = this;
            
            evt.stopPropagation();
            evt.preventDefault();
            // $p.utils.log('Controlbar: Click', element, callback, evt)
            this[callback](evt, element);

            return false;
        },


        touchEnd: function () {
            var ref = this;
            this._cTimer = setTimeout(function () {
                ref.hidecb();
            }, this.getConfig('fadeDelay'));
            this._noHide = false;
        },


        /*******************************
        DOM Manipulations
        *******************************/
        drawTitle: function () {
            this.controlElements['title'].html(this.getConfig('title', ''));
        },

        hidecb: function (instant) {

            clearTimeout(this._cTimer);

            if (this.cb == null) return;

            // no controls at all:
            if (this.getConfig('controls') == false) {
                this.cb.removeClass('active').addClass('inactive');
                return;
            }

            if (this.getConfig('showOnIdle') && this.pp.getState('IDLE')) {
                this.showcb(true);
                return;
            }

            if (instant)
                this._noHide = false;

            // do not hide nao
            if (this._noHide || this.cb.hasClass('inactive'))
                return;

            this.cb.removeClass('active').addClass('inactive');
            this.sendEvent('hide', this.cb);

        },

        showcb: function (fade) {

            var ref = this;

            // always clear timeout, stop animations
            clearTimeout(this._cTimer);

            // hide for current playback component
            if (this.pp.getHasGUI() || this.getConfig('controls') == false) {
                this.cb.removeClass('active').addClass('inactive');
                return;
            }

            // player is IDLEing
            if (this.cb == null) return;
            if ("IDLE|AWAKENING|ERROR".indexOf(this.pp.getState()) > -1 && fade != true) return;

            // is visible  restart timer:
            if (this.cb.hasClass('active') && fade !== false) {
                this._cTimer = setTimeout(function () {
                    ref.hidecb();
                }, this.getConfig('fadeDelay'));
                return;
            };

            // show up:
            this.cb.removeClass('inactive').addClass('active');
            this.sendEvent('show', this.cb);
            this._cTimer=setTimeout(
                function() {
                    ref.hidecb();
                }, this.getConfig('fadeDelay')
            );
            
            this.displayProgress();
        },
        
        displayTime: function (pct, dur, pos) {
            if (this.pp.getHasGUI()) return;

            var percent = ((pct || this.pp.getLoadPlaybackProgress() || 0) * 10) / 10,
                duration = dur || this.pp.getDuration() || 0,
                position = pos || this.pp.getPosition() || 0,
                times = $.extend({}, this._clockDigits(duration, 'dur'), this._clockDigits(position, 'elp'), this._clockDigits(duration - position, 'rem'));

            // limit updates
            if (this.controlElements['playhead'].data('pct') != percent) {

                // update scrubber:
                this.controlElements['playhead'].data('pct', percent).css({
                    width: percent + "%"
                });
                this.controlElements['scrubberknob'].css({
                    left: percent + "%"
                });

                // update numeric displays
                for (var key in this.controlElements) {
                    if (key == 'cb')
                        break;

                    if (times[key]) {
                        $.each(this.controlElements[key], function () {
                            $(this).html(times[key]);
                        });
                    }
                }
            }

        },

        displayProgress: function () {
            var percent = Math.round(this.pp.getLoadProgress() * 10) / 10;
            // limit updates
            if (this.controlElements['loaded'].data('pct') == undefined || this.controlElements['loaded'].data('pct') != percent) {                
                this.controlElements['loaded'].data('pct', percent).css("width", percent + "%");
            };
        },

        displayVolume: function (volume) {

            var ref = this,
            	quarter = (Math.round(parseFloat(volume) * 4) / 4).toFixed(2) * 100;

			quarter = (quarter==0 && volume>0) ? 25 : quarter;

            if (this._vSliderAct == true) return;
            if (volume === null) return;

            var isVisible = this.cb.hasClass('active'),
                ref = this,
                fixed = this.getConfig('fixedVolume'),
                toggleMute = (this.controlElements['mute'].hasClass('toggle') || this.controlElements['unmute'].hasClass('toggle') || this.getConfig('toggleMute'));

            // hide volume mess in case volume is fixed
            this._active('mute', !fixed);
            this._active('unmute', !fixed);
            this._active('vmax', !fixed);
            this._active('vknob', !fixed);
            this._active('vmarker', !fixed);
            this._active('vslider', !fixed);

            if (fixed) return;

            // make controls visible in order to allow dom manipulations
            // this.cb.stop(true, true).show();
            if (this.controlElements['vslider'].width() > this.controlElements['vslider'].height()) {
                this.controlElements['vmarker'].css('width', volume * 100 + "%");
                this.controlElements['vknob'].css('left', volume * 100 + "%");
            } else {
                this.controlElements['vmarker'].css('height', volume * 100 + "%");
                this.controlElements['vknob'].css('top', (100 - volume * 100) + "%");
            }

            // "li" hack
            var lis = this.controlElements['volume'].find('li'),
                set = lis.length - Math.ceil((volume * 100) / lis.length);

            for (var i = 0; i <= lis.length; i++) {
                if (i >= set) $(lis[i]).addClass('active');
                else $(lis[i]).removeClass('active');
            }

            
            
            if (toggleMute) {
                switch (parseFloat(volume)) {
                case 0:
	            	this.setValueClass(this._active('mute', false), 'volume', quarter);
	            	this.setValueClass(this._active('unmute', true), 'volume',quarter);
	            	this.setValueClass(this._active('vmax', true), 'volume', quarter);
                    break;

                default:
                	this.setValueClass(this._active('mute', true), 'volume', quarter);
                	this.setValueClass(this._active('unmute', false), 'volume', quarter);
                	this.setValueClass(this._active('vmax', false), 'volume', quarter);
                    //  vknob.css('left', volume*(vslider.width()-(vknob.width()/2))+"px");  
                    break;
                }
            }

            // hide again - if necessary
            if (isVisible) {
                this.cb.fadeTo(1, .99).fadeTo(1, 1, function () {
                    ref.cb.removeAttr('style');
                })
            }
        },

	displayCuePoints: function(immediately) {
            
            if (!this.getConfig('showCuePoints'))
                return;
            
            var ref = this,
                prefix = this.pp.getNS(),
                duration = this.pp.getDuration();

            ref.controlElements['scrubber'].children().remove('.' + prefix + 'cuepoint');

            $.each(this.pp.getCuePoints(this.pp.getItemId(), true) || [], function() {

                // display cuepoins only from given groups or all cuepoints if there are no specyfic groups defined (showCuePointGroups array is empty)
                if (ref.getConfig('showCuePointGroups').length && ref.getConfig('showCuePointGroups').indexOf(this.group) == -1) {
                    return;
                }

                var blipWidth = this.on != this.off ? (((this.off - this.on) / duration) * 100) + '%'  : ref.getConfig('minCuePointSize'),
                    blipPos = (this.on / duration) * 100,
                    blip = $(document.createElement('div'))
                    .addClass(prefix + 'cuepoint')
                    .addClass(prefix + 'cuepoint_group_' + this.group)
                    .addClass(prefix + 'cuepoint_' + this.id)
                    .addClass(immediately ? 'active' : 'inactive')
                    .css('left', blipPos + "%")
                    .css('width', blipWidth),
                    blipEvents = ref.config.cuePointEvents.concat(this.blipEvents);

                if (this.title != '')
                    blip.attr('title', this.title);

                if (!immediately) {
                    this.addListener('unlock', function() {
                        $(blip).removeClass('inactive').addClass('active');
                        ref._bindCuePointBlipEvents(blip, blipEvents, {pp:ref.pp, cuepoint:this});
                    });
                }
                else {
                    ref._bindCuePointBlipEvents(blip, blipEvents, {pp:ref.pp, cuepoint:this});
                }

                ref.controlElements['scrubber'].append(blip);

            });

        },

        drawPauseButton: function (event) {
            this._active('pause', true);
            this._active('play', false);
        },

        drawPlayButton: function (event) {
            this._active('pause', false);
            this._active('play', true);
        },


        drawEnterFullscreenButton: function (event) {
            this._active('fsexit', false);
            this._active('fsenter', true);
        },

        drawExitFullscreenButton: function (event) {
            this._active('fsexit', true);
            this._active('fsenter', false);
        },

        displayQualityToggle: function (qual) {

            var qualsCfg = this.getConfig('playbackQualities'),
                qualsItm = this.pp.getPlaybackQualities(),
                classPrefix = this.pp.getNS();
            best = [];

            // off
            if (qualsItm.length < 2 || qualsCfg.length < 2) {
                this.controlElements['loquality'].removeClass().addClass('inactive').addClass(classPrefix + 'loquality').data('qual', '');
                this.controlElements['hiquality'].removeClass().addClass('inactive').addClass(classPrefix + 'hiquality').data('qual', '');
                return;
            }

            // get two best variants
            qualsCfg.sort(function (a, b) {
                return a.minHeight - b.minHeight;
            });
            for (var i = qualsCfg.length; i--; i > 0) {
                if ($.inArray(qualsCfg[i].key, qualsItm) > -1)
                    best.push(qualsCfg[i].key);
                if (best.length > 1)
                    break;
            }

            this.cb.addClass('qualities');
            if (best[0] == this.pp.getPlaybackQuality()) {
                this._active('loquality', true).addClass('qual' + best[1]).data('qual', best[1]);
                this._active('hiquality', false).addClass('qual' + best[0]).data('qual', best[0]);
            } else {
                this._active('loquality', false).addClass('qual' + best[1]).data('qual', best[1]);
                this._active('hiquality', true).addClass('qual' + best[0]).data('qual', best[0]);
            }
        },


        /*******************************
        Player Event Handlers
        *******************************/
        itemHandler: function (data) {
            $(this.cb).find('.' + this.pp.getNS() + 'cuepoint').remove();
            this.pp.setVolume(this._getVolume())
            this.updateDisplay();
            this.hidecb(true);
            this.drawTitle();
            this.displayQualityToggle();
            this.pluginReady = true;
        },

        startHandler: function () {
            this.pp.setVolume(this._getVolume());
            if (this.getConfig('showOnStart') == true) {
                this.showcb(true);
            } else {
                this.hidecb(true);
            }
        },

        readyHandler: function (data) {
            clearTimeout(this._cTimer);
            if (this.getConfig('showOnIdle')) {
                this.showcb(true);
                this.cb.removeClass('inactive').addClass('active').show();
            }
            this.pluginReady = true;
        },

        stateHandler: function (state) {
            this.updateDisplay();

            if ('STOPPED|AWAKENING|IDLE|DONE'.indexOf(state) > -1) {
                this.displayTime(0, 0, 0);
                this.displayProgress(0);
                if (this.pp.getIsMobileClient()) {
                    this.hidecb(true);
                }
            }

            if ('STOPPED|DONE|IDLE'.indexOf(state) > -1) {
                this.hidecb(true);
                return;
            }

            if ('ERROR'.indexOf(state) > -1) {
                this._noHide = false;
                this.hidecb(true);
            }

            this.displayProgress();
        },

        scheduleModifiedHandler: function () {
            if (this.pp.getState() === 'IDLE') return;
            this.updateDisplay();
            this.displayTime();
            this.displayProgress();
        },

        volumeHandler: function (value) {
            try {
               if (value>0)
                   this.cookie('muted', false);
                   
               if (!this.cookie('muted'))
                   this.cookie('volume', value);
            } catch(e){console.log(e)}
            this.displayVolume(this._getVolume());
        },

        progressHandler: function (obj) {
            this.displayProgress();
        },

        timeHandler: function (obj) {
            this.displayTime();
            this.displayProgress();
        },

        qualityChangeHandler: function (qual) {
            this.displayQualityToggle(qual);
        },
        
        streamTypeChangeHandler: function (streamType) {
            if (streamType=='dvr') {
                this._isDVR = true;
                this.setActive(this.controlElements['golive'], true);
            }
        },
        
        isLiveHandler: function (islive) {
            if (islive) {
                this.controlElements['golive'].addClass('on').removeClass('off');
            } else {
                this.controlElements['golive'].addClass('off').removeClass('on');
            }
        },            

        fullscreenHandler: function (inFullscreen) {

            var ref = this,
                classPrefix = this.pp.getNS();

            clearTimeout(this._cTimer);

            this._noHide = false;
            this._vSliderAct = false;

            if (!this.getConfig('controls')) return;
            if (!this.getConfig('enableFullscreen')) return;

            if (inFullscreen) {
                this.cb.addClass('fullscreen');
                this.drawExitFullscreenButton();
            } else {
                this.cb.removeClass('fullscreen');
                this.drawEnterFullscreenButton();
            }

            if (this.pp.getState() == 'IDLE' && !this.getConfig('showOnIdle'))
                this.hidecb(true);
        },        
        
	durationChangeHandler: function () {
            if(this.pp.getDuration() != 0){
                this.displayCuePoints( this.getConfig('showCuePointsImmediately') );
            }
        },
        
        cuepointsSyncHandler: function(cuepoints){
            if(this.pp.getDuration() != 0){
                this.displayCuePoints( this.getConfig('showCuePointsImmediately') );
            }
        },
        
        errorHandler: function (value) {
            this.hidecb(true);
        },

        leftclickHandler: function () {
            this.mouseleaveHandler();
        },

        focusHandler: function (evt) {
            this.showcb();
        },
        
        mouseenterHandler: function (evt) {
            this.showcb();
        },        

        mousemoveHandler: function (evt) {
            if (this.pp.getState('STARTING')) return;             
            this.showcb();
        },
        
        mouseleaveHandler: function() {},
        
        mousedownHandler: function (evt) {
            this.showcb();     
        },
        
        /*******************************
        ControlUI Event LISTENERS
        *******************************/
        controlsFocus: function (evt) {
            
                this._noHide = true;
        },

        controlsBlur: function (evt) {
            this._noHide = false;
        },

        setQualityClk: function (evt) {
            this.pp.setPlaybackQuality($(evt.currentTarget).data('qual'));
        },

        goliveClk: function (evt) {
            this.pp.setSeek(-1);
        },
        
        playClk: function (evt) {
            this.pp.setPlay();
        },

        pauseClk: function (evt) {
            this.pp.setPause();
        },

        stopClk: function (evt) {
            this.pp.setStop();
        },

        startClk: function (evt) {
            this.pp.setPlay();
        },

        controlsClk: function (evt) {},

        prevClk: function (evt) {
            this.pp.setActiveItem('previous');
        },

        nextClk: function (evt) {
            this.pp.setActiveItem('next');
        },

        forwardClk: function (evt) {
            this.pp.setPlayhead('+10');
        },

        rewindClk: function (evt) {
            this.pp.setPlayhead('-10');
        },

        muteClk: function (evt) {
            this.cookie('muted', true);
            this.pp.setVolume(0);
        },

        unmuteClk: function (evt) {
            this.cookie('muted', false);
            this.pp.setVolume(this._getVolume());
        },

        vmaxClk: function (evt) {
            this.cookie('muted', false);
            this.pp.setVolume(1);
        },
        
        vupClk: function (evt) {
            this.pp.setVolume('+0.1');
        },        
        
        vdownClk: function (evt) {
        	if (this.pp.getVolume()>0.1) {
        		this.pp.setVolume('-0.1');	
        	}           
        },           

        enterFullscreenClk: function (evt) {
            this.pp.setFullscreen(true);
        },

        exitFullscreenClk: function (evt) {
            this.pp.setFullscreen(false);
        },

        loopClk: function (evt) {
            this.pp.setLoop($(evt.currentTarget).hasClass('inactive') || false);
            this.updateDisplay();
        },

        vmarkerClk: function (evt) {
            vsliderClk(evt);
        },

        openCloseClk: function (evt) {
            var ref = this;
            $($(evt.currentTarget).attr('class').split(/\s+/)).each(function (key, value) {
                if (value.indexOf('toggle') == -1) return;
                ref.playerDom.find('.' + value.substring(6)).slideToggle('slow', function () {
                    ref.pp.setSize();
                });
                ref.controlElements['open'].toggle();
                ref.controlElements['close'].toggle()
            });
        },

        volumeBtnHover: function (evt) {
            clearTimeout(this._outDelay);
            this.setActive(this.controlElements['volumePanel'], true);
        },

        volumeBtnOut: function (evt, elm) {
            var ref = this;
            if (evt.currentTarget != elm.get(0)) return;
            if (evt.relatedTarget == elm.get(0)) return;
            this._outDelay = setTimeout(function () {
                ref.setActive(ref.controlElements['volumePanel'], false);
            }, 100);
        },

        vsliderClk: function (evt) {
            if (this._vSliderAct == true) return;


            var slider = $(this.controlElements['vslider']),
                orientation = slider.width() > slider.height() ? 'hor' : 'vert',
                totalDim = (orientation == 'hor') ? slider.width() : slider.height(),
                pageX = (evt.originalEvent.touches) ? evt.originalEvent.touches[0].pageX : evt.pageX,
                pageY = (evt.originalEvent.touches) ? evt.originalEvent.touches[0].pageY : evt.pageY,
                requested = (orientation == 'hor') ? pageX - slider.offset().left : pageY - slider.offset().top,
                result = 0;

            if (requested < 0 || isNaN(requested) || requested == undefined) {
                result = 0;
            } else {
                result = (orientation == 'hor') ? (requested / totalDim) : 1 - (requested / totalDim);
            }

            this.pp.setVolume(result);            
        },

        scrubberShowTooltip: function (event) {
            if (this.pp.getDuration() == 0) return;
            clearTimeout(this._cTimer);
            this.setActive(this.controlElements['scrubbertip'], true)
        },

        scrubberHideTooltip: function (event) {
            this.setActive(this.controlElements['scrubbertip'], false)
        },

        scrubberdragTooltip: function (evt) {

            // IE amd Chrome issues (mouseenter,mouseleave)
            if (this.pp.getDuration() == 0) return;
            this.setActive(this.controlElements['scrubbertip'], true)

            var slider = $(this.controlElements['scrubberdrag'][0]),
                loaded = $(this.controlElements['loaded'][0]),
                tip = $(this.controlElements['scrubbertip']),
                pageX = (evt.originalEvent.touches) ? evt.originalEvent.touches[0].pageX : evt.pageX,
                pageY = (evt.originalEvent.touches) ? evt.originalEvent.touches[0].pageY : evt.pageY,
                newPos = pageX - slider.offset().left - (tip.outerWidth() / 2),
                timeIdx = this.pp.getDuration() / 100 * ((pageX - slider.offset().left) * 100 / slider.width()),
                times = this._clockDigits(timeIdx, 'tip');
                
            if (this._isDVR) { 
                timeIdx =  this.pp.getDuration() - timeIdx; 
                var then = new Date( (new Date().getTime() / 1000 - timeIdx) * 1000), // date minus timeidx
                    then = then.getSeconds() + (60 * then.getMinutes()) + (60 * 60 * then.getHours()); // second of today
                    
                times = this._clockDigits( then , 'tip');
            }
            
            if (this.getConfig('absoluteEndTime')!==false) { 
                timeIdx =  this.pp.getDuration() - timeIdx; 
                var then = new Date( (new Date(this.getConfig('absoluteEndTime')).getTime() / 1000 - timeIdx) * 1000), // date minus timeidx
                    then = then.getSeconds() + (60 * then.getMinutes()) + (60 * 60 * then.getHours()); // second of today
                   
                times = this._clockDigits( then , 'tip');
            }            

            for (var key in this.controlElements) {
                if (key == 'cb')
                    break;

                if (times[key]) {
                    $.each(this.controlElements[key], function () {
                        $(this).html(times[key]);
                    });
                }
            }

            newPos = (newPos < 0) ? 0 : newPos;
            newPos = (newPos > slider.width() - tip.outerWidth()) ? slider.width() - tip.outerWidth() : newPos;

            tip.css({
                left: newPos + "px"
            })
        },

        scrubberdragStartDragListener: function (event) {

            if (this.getConfig('disallowSkip') == true) return;
            this._sSliderAct = true;

            var ref = this,
                slider = $(this.controlElements['scrubberdrag'][0]),
                loaded = $(this.controlElements['loaded'][0]),
                second = 0,
                dx = Math.abs(parseInt(slider.offset().left) - event.clientX),

                applyValue = function (event) {

                    var newPos = Math.abs(slider.offset().left - event.clientX);
                    newPos = (newPos > slider.width()) ? slider.width() : newPos;
                    newPos = (newPos > loaded.width()) ? loaded.width() : newPos;
                    newPos = (newPos < 0) ? 0 : newPos;
                    newPos = Math.abs(newPos / slider.width()) * ref.pp.getDuration();

                    // avoid strange "mouseMove"-flooding in IE7+8
                    if (newPos > 0 && newPos != second) {
                        second = newPos;
                        ref.pp.setPlayhead(second);
                    }

                },

                mouseUp = function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault();

                    ref.playerDom.unbind('mouseup.slider');

                    slider.unbind('mousemove', mouseMove);
                    slider.unbind('mouseup', mouseUp);
                    ref._sSliderAct = false;

                    return false;
                },

                mouseMove = function (evt) {
                    clearTimeout(ref._cTimer);
                    evt.stopPropagation();
                    evt.preventDefault();
                    applyValue(evt);
                    return false;
                };

            this.playerDom.bind('mouseup.slider', mouseUp);
            slider.mouseup(mouseUp);
            slider.mousemove(mouseMove);

            applyValue(event);

        },

        vknobStartDragListener: function (event, domObj) {
            this._vSliderAct = true;

            var ref = this,
                sliderIdx = (this.pp.getInFullscreen() === true && this.controlElements['vslider'].length > 1) ? 1 : 0,
                knob = $(domObj[sliderIdx]),
                slider = $(this.controlElements['vslider'][sliderIdx]),
                dx = Math.abs(parseFloat(knob.position().left) - event.clientX),
                dy = Math.abs(parseFloat(knob.position().top) - event.clientY),
                
                volume = 0,
                mouseUp = function (mouseupevt) {
                    ref.playerDom.unbind('mouseup', mouseUp);
                    slider.unbind('mousemove', mouseMove);
                    slider.unbind('mouseup', mouseUp);
                    knob.unbind('mousemove', mouseMove);
                    knob.unbind('mouseup', mouseUp);
                    ref._vSliderAct = false;

                    return false;
                },

                mouseMove = function (dragevent) {
                    clearTimeout(ref._cTimer);
                    var newXPos = (dragevent.clientX - dx),
                        newXPos = (newXPos > slider.width() - knob.width() / 2) ? slider.width() - (knob.width() / 2) : newXPos,
                        newXPos = (newXPos < 0) ? 0 : newXPos,
                        newYPos = (dragevent.clientY - dy),                        
                        newYPos = (newYPos > slider.height() - knob.height() / 2) ? slider.height() - (knob.height() / 2) : newYPos,
                        newYPos = (newYPos < 0) ? 0 : newYPos;
                    
                    if (ref.controlElements['vslider'].width() > ref.controlElements['vslider'].height()) {                    
                        knob.css('left', newXPos + 'px');
                        volume = Math.abs(newXPos / (slider.width() - (knob.width() / 2)));
                        $(ref.controlElements['vmarker'][sliderIdx]).css('width', volume * 100 + "%");
                    } else {
                        knob.css('top', newYPos + 'px');
                        volume = 1 - Math.abs(newYPos / (slider.height() - (knob.height() / 2)));
                        $(ref.controlElements['vmarker'][sliderIdx]).css('height', volume * 100 + "%");
                    }
                };

            // this.playerDom.mousemove(mouseMove);
            this.playerDom.mouseup(mouseUp);

            slider.mousemove(mouseMove);
            slider.mouseup(mouseUp);

            knob.mousemove(mouseMove);
            knob.mouseup(mouseUp);

        },

        handleStartDragListener: function (evt, domObj) {

            var ref = this,
                dx = Math.abs(parseInt(this.cb.position().left) - evt.clientX),
                dy = Math.abs(parseInt(this.cb.position().top) - evt.clientY);

            /*
    this._initalPosition = {
        top: this.cb.css('top'),
        bottom: this.cb.css('bottom'),
        left: this.cb.css('left'),
        right: this.cb.css('right')
        
    };
    */
            // this._initalPosition = $.extend({}, this.cb.attr('style'), this.cb.css());


            var mouseUp = function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                ref.playerDom.unbind('mouseup', mouseUp);
                ref.playerDom.unbind('mouseout', mouseUp);
                ref.playerDom.unbind('mousemove', mouseMove);
                return false;
            }

            var mouseMove = function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                clearTimeout(ref._cTimer);
                var newXPos = (evt.clientX - dx);
                newXPos = (newXPos > ref.playerDom.width() - ref.cb.width()) ? ref.playerDom.width() - ref.cb.width() : newXPos;
                newXPos = (newXPos < 0) ? 0 : newXPos;
                ref.cb.css('left', newXPos + 'px');
                var newYPos = (evt.clientY - dy);
                newYPos = (newYPos > ref.playerDom.height() - ref.cb.height()) ? ref.playerDom.height() - ref.cb.height() : newYPos;
                newYPos = (newYPos < 0) ? 0 : newYPos;
                ref.cb.css('top', newYPos + 'px');
                return false;
            }

            this.playerDom.mousemove(mouseMove);
            this.playerDom.mouseup(mouseUp);
            // this.playerDom.mouseout(mouseUp);
        },

        /*******************************
            GENERAL HELPERS
        *******************************/
        _getVolume: function() {

            var volume = parseFloat(this.cookie('volume') || this.getConfig('volume') || 0.5),
                muted = this.cookie('muted') || false;
            
            if (this.getConfig('fixedVolume') || volume==null)
                return this.getConfig('volume');
                
            if (muted) return 0;
            
            return volume;
        },
        
        _active: function (elmName, on) {
            var dest = this.controlElements[elmName];
            if (on == true) dest.addClass('active').removeClass('inactive');
            else dest.addClass('inactive').removeClass('active');
            return dest;
        },

        /* convert a num of seconds to a digital-clock like display string */
        _clockDigits: function (secs, postfix) {

            if (secs < 0 || isNaN(secs) || secs == undefined) {
                secs = 0;
            }

            var hr = Math.floor(secs / (60 * 60)),
                divisor_for_minutes = secs % (60 * 60),
                min = Math.floor(divisor_for_minutes / 60),
                min_abs = hr * 60 + min,
                divisor_for_seconds = divisor_for_minutes % 60,
                sec = Math.floor(divisor_for_seconds),
                sec_abs = secs,
                result = {};
                
            result['min_' + postfix] = (min < 10) ? "0" + min : min;
            result['min_abs_' + postfix] = (min_abs < 10) ? "0" + min_abs : min_abs;
            result['sec_' + postfix] = (sec < 10) ? "0" + sec : sec;
            result['sec_abs_' + postfix] = (sec_abs < 10) ? "0" + sec_abs : sec_abs;            
            result['hr_' + postfix] = (hr < 10) ? "0" + hr : hr;
            
            return result;
        },
        
        _bindCuePointBlipEvents: function(blip, events, data){
            if(events.length){ // bind events if there are some
                for(var i=0; i < events.length; i++){
                    var e = events[i]['events'].join(' '),
                        d = $.extend({}, events[i]['data'], data) || {},
                        h = (typeof events[i]['handler'] == 'function' ? events[i]['handler'] : function(e){});
                    blip.bind(e, d, h);
                }
            }
            else { // otherwise make the blip 'invisible' for mouse events (works everywhere but IE up to 10)
                blip.css('pointer-events', 'none');
            }
        }        
    }
});
;/*
 * Projekktor II Plugin: Display
 * 
 * DESC: Provides a standard display for cover-art, video or html content
 * features startbutton, logo-overlay and buffering indicator
 * Copyright 2010-2013, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 *
 * under GNU General Public License
 * http://www.projekktor.com/license/
 */
var projekktorDisplay = function(){};
jQuery(function($) {
projekktorDisplay.prototype = {
    
    version: '1.1.00',
    
    logo: null,
    logoIsFading: false,
    
    display: null,
    
    displayClicks: 0,
    
    buffIcn: null,
    buffIcnSprite: null,
    bufferDelayTimer: null,
    
    _controlsDims: null,
    
    config: {
        displayClick: {callback: 'setPlayPause', value: null},
        displayPlayingClick: {callback: 'setPlayPause', value: null},
        displayDblClick: {callback: null, value: null},
            
        staticControls:     false,
        
        /* time to delay buffering-icon-overlay once "waiting" event has been triggered */
        bufferIconDelay:    700,
            
        /* if set the indicator animation is tinkered from a cssprite - must be horizontal */
        spriteUrl:          '',
        spriteWidth:        50,
        spriteHeight:       50,
        spriteTiles:        25,
        spriteOffset:       1,
        spriteCountUp:      false
    },
    
    
    /* triggered on plugin-instanciation */
    initialize: function() {
        // create the display container itself
        this.display = this.applyToPlayer($('<div/>'));
        
        // create the startbutton
        this.startButton =  this.applyToPlayer( $('<div/>').addClass('start'), 'startbtn');
    
        // create buffericon
        this.buffIcn = this.applyToPlayer( $('<div/>').addClass('buffering'), 'buffericn');

        this.setActive();

        // add spritelayer to buffericon (if required)
        if (this.config.spriteUrl!=='') {
            this.buffIcnSprite = $('<div/>')
                .appendTo(this.buffIcn)
                .css({
                    width: this.config.spriteWidth,
                    height: this.config.spriteHeight,
                    marginLeft: ((this.buffIcn.width()-this.config.spriteWidth) / 2)+"px",
                    marginTop: ((this.buffIcn.height()-this.config.spriteHeight) / 2)+"px",
                    backgroundColor: 'transparent',
                    backgroundImage: 'url('+this.config.spriteUrl+')',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '0 0'
                })
                .addClass('inactive');
        }    
        
        // create a dedicated media container (if none exists)
        this.pp.getMediaContainer();

        this.pluginReady = true;
    },



    /*****************************************
        EVENT HANDLERS
    *****************************************/
    synchronizingHandler: function() {        
        var ref = this;
        this.hideStartButton();
        this.showBufferIcon();
        // the startbutton
        this.startButton.unbind().click(function(){
            ref.pp.setPlay();           
            return false;
        });
    },

    synchronizedHandler: function() {
        this.readyHandler();  
    },
    
        
    readyHandler: function() {
        this.hideBufferIcon();
        if (this.pp.getState('IDLE')) {
            this.showStartButton();        
        }
    },    
    
    bufferHandler: function(state) {
        if (!this.pp.getState('PLAYING') && !this.pp.getState('AWAKENING')) {
            return;
        }
        if (state=='EMPTY') {
        	this.showBufferIcon();
        }
        else {
        	this.hideBufferIcon();
        }
    },    
    
    stateHandler: function(state) {
        switch(state) {
        
            case 'IDLE':
                clearTimeout(this._cursorTimer);
                this.display.css('cursor', 'pointer');
                break;

            case 'PLAYING':
                this.hideBufferIcon();
                this.hideStartButton();
                break;
            
            case 'IDLE':
                this.showStartButton();
                this.hideBufferIcon();
                break;
            
            case 'STARTING':
            case 'AWAKENING':
                this.showBufferIcon();
                this.hideStartButton();
                break;
            
            case 'COMPLETED':
            case 'STOPPED':
                this.hideBufferIcon();
                break;            
            
            default:
                this.hideStartButton();
        }
    },
    
    errorHandler: function(errorCode) {
        this.hideBufferIcon();
        this.hideStartButton();
        if (!this.getConfig('skipTestcard')) {
            this.testCard(errorCode);
        }
       
    },
    
    startHandler: function() {
        this.mousemoveHandler();  
    },
  
    scheduleLoadingHandler: function() {
        this.hideStartButton();
        this.showBufferIcon(); 
    },
    
    scheduledHandler: function() {
        if (!this.getConfig('autoplay')) {
            this.showStartButton();
        }
        this.hideBufferIcon();
    },
 
    plugineventHandler: function(data) {
        if (data.PLUGIN=='controlbar' && data.EVENT=='show' && this.getConfig('staticControls')) {
            var pctCtrl = data.height * 100 / this.pp.getDC().height();
            this.display.height( (100 - pctCtrl) + "%").data('sc', true);
        }
    },
    
    qualityChangeHandler: function() {
        this.hideBufferIcon();
    },

    /*****************************************,
        DISPLAY: Mouse Handling
    *****************************************/    
    mousemoveHandler: function(evt) {
        var dest = this.display;
        if (this.pp.getState('IDLE')) {
            dest.css('cursor', 'pointer');
            return;
        }
        dest.css('cursor', 'auto');
        clearTimeout(this._cursorTimer);
        if ("AWAKENING|ERROR|PAUSED".indexOf(this.pp.getState())==-1)
            this._cursorTimer=setTimeout(function(){dest.css('cursor', 'none');}, 3000);
    },
    
    mousedownHandler: function(evt) {
        var ref = this;     

        if( ($(evt.target).attr('id') || '').indexOf('_media')==-1 && !$(evt.target).hasClass(this.pp.getNS() + 'testcard') )
            return;
    
        clearTimeout(this._cursorTimer);
        this.display.css('cursor', 'auto');                    
                
        if(evt.which!=1)
            return;            

        switch(this.pp.getState()) {
            case 'ERROR':
                this.pp.setConfig({disallowSkip: false});
                this.pp.setActiveItem('next');
                this.display.html('').removeClass(this.pp.getNS() + 'testcard');
                return;
            case 'IDLE':
                this.pp.setPlay();
                return;
        }
    
        if (this.pp.getHasGUI()===true)         
            return;

        this.displayClicks++;
        
        this.pp._promote('displayClick');
    
        if (this.displayClicks > 0) {
            setTimeout(
            function(){            
                if(ref.displayClicks == 1) {
                if (ref.pp.getState()=='PLAYING')
                    ref.clickHandler('displayPlaying');            
                else 
                    ref.clickHandler('display');
                } else if(ref.displayClicks == 2) {
                ref.clickHandler('displayDbl');
                }
                ref.displayClicks = 0;
            }, 250
            );    
        }
        return;
    },
    
    
    /*****************************************
        STARTBUTTON
    *****************************************/      
    showStartButton: function() {
        this.startButton.addClass('active').removeClass('inactive');    
    },
    
    hideStartButton: function() {
        this.startButton.addClass('inactive').removeClass('active');    
    },
    
    
    /*****************************************
        BUFFERICON: fader and animator
    *****************************************/       
    hideBufferIcon: function() {
        clearTimeout(this.bufferDelayTimer);
        this.buffIcn.addClass('inactive').removeClass('active');
    },
        
    showBufferIcon: function(instant) {
        var ref=this;

        clearTimeout(this.bufferDelayTimer);

        if (this.pp.getHasGUI() || this.pp.getState('IDLE')) {
            return;
        }
    
        if ( (this.pp.getModel()==='YTAUDIO' || this.pp.getModel()==='YTVIDEO') && !this.pp.getState('IDLE'))
            instant=true;

        if (instant!==true && this.getConfig('bufferIconDelay')>0) {
            this.bufferDelayTimer=setTimeout(function(){ref.showBufferIcon(true);},this.getConfig('bufferIconDelay'));        
            return;
        }

        if (this.buffIcn.hasClass('active') ) return;
        this.buffIcn.addClass('active').removeClass('inactive');

        if (ref.buffIcnSprite===null) {
        	return;
        }
        
        var startOffset=(ref.config.spriteCountUp===true) ? 0 : (ref.config.spriteHeight + ref.config.spriteOffset)*(ref.config.spriteTiles-1),
            spriteOffset = startOffset;
         
        ref.buffIcnSprite.addClass('active').removeClass('inactive');

        (function() {

            if (!ref.buffIcn.is(':visible')) return;
            ref.buffIcnSprite.css('backgroundPosition', '0px -'+spriteOffset+"px");
            
            if (ref.config.spriteCountUp===true)
                spriteOffset += ref.config.spriteHeight + ref.config.spriteOffset;
            else
                spriteOffset -= ref.config.spriteHeight + ref.config.spriteOffset;
                
            if (spriteOffset > (startOffset+ref.config.spriteHeight)*ref.config.spriteTiles || spriteOffset<ref.config.spriteOffset) spriteOffset = startOffset;
            
    
            setTimeout(arguments.callee,60);
        })(); 
    },
    
    testCard: function(errorCode) {
        
        messages = $.extend(this.getConfig('messages'), this.pp.getConfig('msg')),
        msgTxt = this.i18n("%{error"+errorCode+"}");

        if (this.pp.getItemCount() > 1) {
            // "press next to continue"
            msgTxt += ' ' + this.i18n("%{error99}");
        }

        if (msgTxt.length < 3) {
            msgTxt = 'ERROR #' + errorCode;
        }

        this.display
            .html('')
            .addClass(this.pp.getNS() + 'testcard')
            .html('<p>' + msgTxt + '</p>');
    }
    

};
});
;/*
 * Projekktor II Plugin: Settings Service Menu
 *
 * under GNU General Public License
 * http://www.projekktor.com/license/
 */
var projekktorSettings = function(){};
jQuery(function($) {
projekktorSettings.prototype = {

    reqVer: '1.4.00',
    version: '1.0.00',

    _contextEntry: null,
    _nativeIdx: 0,
    _flashIdx: 0, 

    pluginReady: false,
    
    config: {
        contextTitle: 'Settings',
        feedbackUrl: false,
        settingsMenu:
            '<ul id="tool" class="ppsettingslist active">' +
                '<li class="first">%{help}</li>' +
                '<li data-pp-settings-func="tool_help" class="inactive">%{keyboard controls}</li>' +
                '<li data-pp-settings-func="tool_debug" class="inactive">%{debug}</li>' +
                '<li data-pp-settings-func="tool_version" class="inactive">%{player info}</li>' +
                '<li></li>' +
            '</ul>' +
            '<ul id="platform" class="ppsettingslist active">' +
                '<li class="first">%{platform}</li>' +
                '<li data-pp-settings-func="platform_flash" class="inactive">%{flash}</li>' +
                '<li data-pp-settings-func="platform_native" class="inactive">%{html5}</li>' +
                '<li data-pp-settings-func="platform_vlc" class="inactive">%{vlc}</li>' +
                '<li data-pp-settings-func="platform_auto" class="auto inactive">%{automatic}</li>' +
            '</ul>' +
            '<ul id="quality" class="ppsettingslist active">' +
                '<li class="first">%{quality}</li>' +
                '<li data-pp-settings-func="quality_xl"  class="inactive">%{hd}</li>' +
                '<li data-pp-settings-func="quality_l"  class="inactive">%{high}</li>' +
                '<li data-pp-settings-func="quality_m"  class="inactive">%{medium}</li>' +
                '<li data-pp-settings-func="quality_s"  class="inactive">%{low}</li>' +
                '<li data-pp-settings-func="quality_auto"  class="auto inactive">%{automatic}</li>' +
            '</ul>' +
            '<div class="ppclear"></div>',
            
        versionTpl:
            '<div data-pp-settings-func="toolwindow_version">' +
                '<p>Projekktor V%{version}</p>' + 
                '<p><a class="btn cancel" href="#">%{ok}</a></p>' + 
            '</div>',
            
            
        debugTpl:
            '<div data-pp-settings-func="toolwindow_debug">' + 
                '<div class="wizzard inactive" id="debug_1">' + 
                    '<p><b>%{report}</b></p>' + 
                    '<p><textarea id="message">%{please}</textarea></p>' + 
                    '<p>' + 
                        '<a class="btn cancel" href="#">%{cancel}</a>' + 
                        '<a class="btn next" data-step="2" href="#">%{continue}</a>' + 
                    '</p>' + 
                '</div>' + 
                '<div class="wizzard inactive" id="debug_2">' + 
                    '<p><b>%{sendto}</b></p>' + 
                    '<p><textarea id="result">%{please}</textarea></p>' + 
                    '<p><a class="btn next" href="#" data-step="3">%{ok}</a></p>' + 
                '</div>' + 
                '<div class="wizzard inactive" id="debug_3">' + 
                    '<p>%{thanks}</p>' + 
                    '<p><a class="btn cancel" href="#">%{ok}</a></p>' + 
                '</div>' + 
            '</div>' + 
            '<div data-pp-settings-func="toolwindow_error">' + 
                '<div class="wizzard inactive" id="error_1">' + 
                    '<p><b>%{error}<br/> %{sendto}</b></p>' + 
                    '<p><textarea id="errortxt"></textarea></p>' + 
                    '<p><a class="btn next" href="#" data-step="3">%{ok}</a></p>' + 
                '</div>' + 
                '<div class="wizzard inactive" id="error_2">' + 
                    '<p>%{thanks}</p>' + 
                    '<p><a class="btn cancel" href="#">%{ok}</a></p>' + 
                '</div>' + 
            '</div>',
        
        helpTpl:
            '<div data-pp-settings-func="toolwindow_help">' +
                '<p><b>%{keyboard assignments}</b></p>' +
                '<p class="key">%{help1}</p>' +
                '<p class="key">%{help2}</p>' +
                '<p class="key">%{help3}</p>' +
                '<p>%{help4}</p>' +
                '<p><a class="btn cancel" href="#">%{ok}</a></p>' +
            '</div>' 

    },

    initialize: function() {

        var ref = this,
            _outDelay = 0;

        // button, main container and options
        this.dest = this.applyToPlayer($('<div/>').addClass('settingsmenu').html(this.i18n(this.getConfig('settingsMenu'))));
        this.btn = this.applyToPlayer($('<div/>').addClass('settingsbtn'), 'btn');
        this.tool = this.applyToPlayer($('<div/>').addClass('tool'), 'toolwindow');

        // the platforms hack
        this.platformSet();

        this.setActive(this.btn, true);

        // hide menu
        this.setInactive();
        $p.utils.blockSelection(this.dest);

        // fade in / out
        this.dest.bind('mouseleave', function() {
            clearTimeout(_outDelay);
            _outDelay=setTimeout(function(){
                ref.setInactive();
            } , 200);
        });

        this.dest.bind('mouseenter', function() {
            clearTimeout(_outDelay);
        });

        // enable "settings" button
        this.btn.click(function(evt) {
            if (ref.dest.hasClass('active')) {
                ref.setInactive();
            } else {
                ref.setActive();
            }
            evt.stopPropagation();
            evt.preventDefault();
            return false;
        });

        this.btn.bind('mouseleave', function() {
            $(this).blur();
            clearTimeout(_outDelay);
            _outDelay=setTimeout(function(){
                ref.setInactive();
            } , 200);
        });

        this.btn.bind('mouseenter', function() {
            clearTimeout(_outDelay);
        });
 
        this.pluginReady = true;
    },

    optionSelect: function(dest, func, value) { 
        // visual feedback
        if (this[func + 'Set'](value)===true) {
            dest.parent().find('li').each(function() { 
                if (!$(this).hasClass('first')) {
                    $(this).addClass('off').removeClass('on');
                }
            });
            dest.addClass('on').removeClass('off');
        }
        // set automode: delete cookie
    },

    itemHandler: function() {
        var ref = this,
            pCount = 0,
            menuOptions = [];    

        $.each(this.dest.find("[" + this.getDA('func') + "]"), function() {
            var func = $(this).attr(ref.getDA('func')).split('_');

            if (menuOptions[func[0]]==null) {
                menuOptions[func[0]] = [];
            }

            // check
            if (!ref[func[0] + 'Check'](func[1]) && func[1]!='auto') {
                $(this).addClass('inactive').removeClass('active');
                return true;
            } else {
                $(this).addClass('active').removeClass('inactive');
            }

            menuOptions[func[0]].push(func[1]);

            // visual feedback custom settings
            if (ref.cookie(func[0])==func[1] || ( (ref.cookie(func[0])===false || ref.cookie(func[0])==null) && func[1]=='auto')) {
                $(this).addClass('on').removeClass('off');
            }
            else {
                $(this).addClass('off').removeClass('on');
            }

            $(this).click(function(evt) {
                ref.optionSelect($(this), func[0], func[1]); 
                evt.stopPropagation();
                evt.preventDefault();
                return false;
            }); 

            return true;
        });

        // restore presets:
        for (var i in menuOptions) {   
            if (menuOptions[i].length<3) {
                this.dest.find('#' + i).addClass('inactive').removeClass('active');
            } else {
                this.dest.find('#' + i).addClass('active').removeClass('inactive');
                this[i + 'Set']();
                pCount++;
            }
        }

        // apply "columns" class
        var classes = this.dest.attr("class").split(" ").filter(function(item) {
            return item.lastIndexOf("column", 0) !== 0;
        });
        this.dest.attr("class", classes.join(" "));        
        this.dest.addClass('column' + pCount);

    },

    /*****************************************************
     * Player Event Handlers
     * **************************************************/     
    plugin_controlbarHideHandler: function(controlBar) {
        this.setInactive();
        this.btn.addClass('off').removeClass('on');
    },
    
    availableQualitiesChangeHandler: function(qualities) {
        this.qualitySet();
        this.itemHandler();
    },
    
    errorHandler: function(code) {
        var msg = this.pp.getConfig('messages')[code];
        this.toolSet('error', 1, msg);
    },

    /*****************************************************
     * availability checks
     * **************************************************/
    toolCheck: function(value) {
        return true;
    },

    qualityCheck: function(value) {
        if ($.inArray(value, this.pp.getPlaybackQualities())==-1) {
            return false;
        }
        return true;
    },

    platformCheck: function(value) {
        if ($.inArray(value.toLowerCase(), this.pp.getPlatforms())==-1) return false;
        return true;
    },

    /*****************************************************
     * Config SETTERS
     * **************************************************/
    toolSet: function(func, stp, data) {

        if (func==undefined) {
            return;
        }
        
        var tpl = $('<div/>').appendTo(this.tool), // this.applyToPlayer($('<div/>'), 'toolwindow_' + func),
            step = stp || 1,
            ref = this,
            isPlaying = this.pp.getState('PLAYING');

        if (func=='debug' && this.getConfig('feedbackUrl')) {
        	var target = this.pp.getIframeParent() || $(window);
        	console.log(target)
            target.get(0).location.href = this.getConfig('feedbackUrl');
            return; 
        }
        
        tpl.html(this.i18n(this.getConfig(func + 'Tpl')));
       
        this.tool.html($p.utils.parseTemplate(tpl.html(), this.pp.config) );
        this.tool.find('.wizzard').addClass('inactive').removeClass('active');
        this.tool.find('#' + func + '_' + step).addClass('active').removeClass('inactive');
        this.setActive(this.tool);
 
        if (data==null) {
            this.tool.find('#message').focus(function(){
                $(this).html('').unbind('focus').css({color:'#000'});
            });
            this.tool.find('#message').css({color:'#aaa'});
        } else {
            var debugData = {
                version: this.pp.getPlayerVer(),
                message: data,
                timestamp: new Date().getTime(),
                navigator: navigator.userAgent.toLowerCase(),
                iframe: location.href,
                href: window.parent.location.href,
                modelstate: this.pp.getState(),
                duration: this.pp.getDuration(),
                position: this.pp.getPosition(),
                maxposition: this.pp.getMaxPosition(),
                platforms: this.pp.getPlatforms(),
                platform: this.pp.getPlatform(),
                platformscfg: this.pp.config._platforms,
                plugins: this.pp.config._plugins,
                media: this.pp.media,                
                compTable: this.pp._testMediaSupport(),
                rnd: $p.utils.randomId(22)
            };
            $.each(this.pp.config._platforms, function(key, value) {
                debugData[value + 'ver'] = $p.platforms[value.toUpperCase()]();
            });
                        
            this.tool.find((func=='debug') ? '#result' : '#errortxt')
                .attr({readonly: 'readonly'})
                .val(
                    $p.utils.stringify(debugData)
                )
                .unbind()
                .bind('focus', function() {$(this).select();});
        }

        $(this.pp.getDC().find('.next')).click(function() {
            $(this).unbind();
            ref.toolSet('debug', parseInt($(this).attr('data-step'), 10), ref.tool.find('#message').val() );
            return false;
        });

        $(this.pp.getDC().find('.cancel')).click(function() {
            $(this).unbind();
            ref.setActive(ref.tool, false);
            if (isPlaying) ref.pp.setPlay();
            return false;
        });

        this.tool.css({
            margin: '-'+ (this.tool.outerHeight()/2) + 'px 0 0 -'+ (this.tool.outerWidth()/2) + 'px'
        });

        if (this.pp.getConfig('streamType').toUpperCase().indexOf('LIVE')==-1 && func!=null) {
            this.pp.setPause();
        }

        this.setInactive();
        return false;
    },


    qualitySet: function(val) {

        var value = val || this.cookie('quality') || null;

        if (value=='auto' || !this.qualityCheck(value)) {
            this.cookie('quality', false, true);
            this.pp.setPlaybackQuality(this.pp.getAppropriateQuality());
            return true;
        }

        if (value!==null) {
            this.cookie('quality', value);
            this.pp.setPlaybackQuality(value);
        }

        return true;
    },

    platformSet: function(val) {
        var platforms = this.pp.getConfig('platforms'),
            value = val || this.cookie('platform') || null,
            tmp = platforms[0],
            ref = this,
            pos = ref.pp.getPosition(),
            old = $.inArray(value, platforms);

        if (value=='auto') {
            this.cookie('platform', false, true);
            this.pp.reset(this.pp.getState('PLAYING') || this.pp.getState('PAUSED'));
            return true;
        }

        if (value==null) return null; // bullshit
        if (old==-1 || old===0) return null; // bullshit or already is prefered


        platforms[0] = value;
        platforms[old] = tmp;
        this.pp.config._platforms = platforms;


        if (val!=null) {
            this.cookie('platform', value);
            this.pp.reset(this.pp.getState('PLAYING') || this.pp.getState('PAUSED'));
            setTimeout(function() {ref.pp.setPlayhead(pos);}, 500);
            return true;
        }

        return true;
    },
    
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    
    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
    
        input = this._utf8_encode(input);
    
        while (i < input.length) {
    
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
    
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
    
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
    
            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
    
        }
    
        return output;
    },
    
    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
    
        for (var n = 0; n < string.length; n++) {
    
            var c = string.charCodeAt(n);
    
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
    
        }
    
        return utftext;
    }
};
});

;/*
 * Projekktor AGF Nielsen Plugin
 */
var projekktorAgf = function () {};
jQuery(function ($) {
    projekktorAgf.prototype = {
        reqVer: '1.4.00',
        version: '1.0.0',

        _timer: 0,
        _metaString: '',
        _seekedFrom: false,
        _seeking: false, 
        _relativeTime: false,
        _isLivestream: false,
        _started: false,
        
        config: {
            apiUrl: false,
        	beaconUrl: "//secure-eu.imrworldwide.com/novms/js/2/ggcmb390.js",
            queryInterval: 2
        },

        initialize: function () {
		    var ref = this,
				myEvent = window.attachEvent || window.addEventListener,
				chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload'; 

		    	this.pluginReady = false;
	    
	            myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
	                ref.eventHandler('beforeunload', 0, ref);
	            });

			    try { new gg(); this.pluginReady = true; } catch(e) {
					$.ajax({
					    type: "GET",
					    url: this.getConfig('beaconUrl'),
					    dataType: "script",
					    error: function (XMLHttpRequest, textStatus, errorThrown) {
					    	ref.pluginReady = true;
					    },
					    timeout: 5000,		   
					    cache: true,					   
					    success:function(){
					    	ref.pluginReady = true;
					    }
					});
			    }
        },

        stateHandler: function (state) {
        	if (state=="AWAKENING") {	     
			    this._timer = 0;
			    this._loadMeta();
        	}
        },
        
        _loadMeta: function() {
        	try {this.gg = new gg();} catch(e) {}
        	 
        	 if (this.getConfig('agf-nielsen')!=null) {                 
                 this._agfLoaded(this.getConfig('agf-nielsen'));            
                 return;
             } 
        	 
            if (this.getConfig('apiUrl')!=false) {
                this.pp.getFromUrl(this.getConfig('apiUrl'), this, "_agfLoaded", 'json');                           
                return;
            }
        },        
        
        /**
         * Diese Methode rechnet das Date-Object in fortlaufende Sekunden ab 00:00 um
         */
        _timeCal: function (t) {
            // berechnet die verstrichenen Sekunden des Tages (ab 00:00)
            var seconds = t.getSeconds(),
            	minutes = t.getMinutes() * 60,
            	hour = t.getHours() * 3600,
            	daytimeInSek = seconds + minutes + hour;

            return daytimeInSek;
        },

        /**
         * Diese Methode rechnet die seit 0:00 Uhr vergangenen Sekunden aus und übergibt sie als String
         */
        _realTime: function (t) {
            var sec_num = parseInt(t, 10),
            	hours = Math.floor(sec_num / 3600),
            	minutes = Math.floor((sec_num - (hours * 3600)) / 60),
            	seconds = sec_num - (hours * 3600) - (minutes * 60);

            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            var time = hours + ':' + minutes + ':' + seconds;

            return time;
        },
        
        eventHandler: function (event, value, player) {
            var ggCode = 0,
            	secondValue = false;

            if (!this.pluginReady) return;

            switch(event) {
                case 'state':
                    switch (value) {
                    	case 'STARTING':
                  
                    		try {
	                    		if (this._isLivestream !== false) {
	                    			this._relativeTime = Math.round(this._timeCal((new Date())));
	                    			this.gg.ggPM("3", this.pp.getSource(), 'content', this._metaString);
	                    		} else {
	                    			this.gg.ggPM("15", this.pp.getSource(), 'content', this._metaString);
	                    		}
                				return;
                			} catch (e) {}
                    		break;
                    	case 'PLAYING':
                            ggCode = 5;
                            value = this._relativeTime || this.pp.getPosition();        
                            break;
                        case 'PAUSED':
                            ggCode = 6;
                            value = this._relativeTime || this.pp.getPosition();   
                            break;
                        case 'COMPLETED':
                            ggCode = 7;
                            value = (this._isLivestream) ? Math.round(this._timeCal((new Date()))) : this.pp.getPosition();   
                            break;                             
                    }
                    break;
                case 'start':
          			this._started = true;
                	break;
                case 'resume':
                    ggCode = 5;
                    value = this._relativeTime || this.pp.getPosition();   
                    break;
                case 'fullscreen':
                    ggCode = 10;
                    break;
                case 'mute':
                    ggCode = 9;
                    break;
                case 'seek':
            	    if (value=='SEEKING') {
            	    	this._seeking = true; 
            	    }
                    if (value=='SEEKED' && this._seeking==true) {
                    	this._seeking = false; 
                    	this._seekedFrom = this._relativeTime || this.pp.getPosition();   
                    }
                    break;
                case 'time':
                    if(Math.abs((this._timer - value)) > this.getConfig('queryInterval')){
                        this._timer = value;
                        value = value.toFixed(1);
                        ggCode = 49;
                    }
                    if (this._seekedFrom!=false) {                    	
                    	secondValue = value;
                    	value = this._seekedFrom;
                    	ggCode = 8;
                    	this._seekedFrom = false;
                    	
                    }
                    break;
                case 'error':
                	ggCode = 4;
                	break;
                case 'done':
                    ggCode = 4;
                    value = this.pp.getDuration();
                    break;         
                case 'beforeunload':
                    ggCode = 7;
                    value = (this._isLivestream) ? Math.round(this._timeCal((new Date()))) : this.pp.getPosition();
                	break;
            }

            if (ggCode>1 && this._started==true) {
            	try {
            		this.gg.ggPM(ggCode, value, secondValue);
        		} catch(e) {}
            }
            
           
        },        

        _agfLoaded: function() {
            try {
                var data = arguments[0].metadata_0,
                	ref = this;

            	data.c5 = window.location.href;
            	
            	var nolggGlobalParams = {
        			clientid: data.ci,
        			vcid: data.c6,
        			sfcode: "eu",
                    prod: "vc"
                 };

            	delete data.c6;
            	delete data.ci;
            	
            	data.uurl = window.location.href;
  
            	$.each(data, function(key, value) {
				    try {
	            		key2 = key.replace(/^c/, "p");
	            		switch(key.charAt(0)){
	            			case "c":
	            				if (key !='censuscategory') {
	            					ref._metaString += '<nol_' + key + '>' + key2 +',' + value + '</nol_'+ key +'>';
            						break;
	            				}	            			
	        				default:
	            				ref._metaString += '<' + key + '>' + value + '</'+ key +'>';
	        					if (key=='livestream' && (value!=='' && value!=='0')) {
	        						ref._isLivestream = true;
	        					}
	            		}
				    } catch(e) {}            	                	
                })
                
                nolggGlobalParams = $.extend(true, nolggGlobalParams, data, {});
                this.gg.ggInitialize(nolggGlobalParams, this.getConfig('uid'), false, false);      
                
            } catch(e) {console.log(e)	}

            this.pluginReady = true;
        }
    }
});

;/*
 * Projekktor II Plugin: Tracking
 *
 * DESC: Allows tracking of all player events and states plus some additional client information
 * to any pixelImg based tracker.
 *
 * Copyright 2013, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * all rights reserved
 *
 * Use of this software is NOT free and requires permission of the copyright owner.
 * Unlicensed use is forbidden and subject to severe penalties of law.
 */
var projekktorTracking = function () {};
jQuery(function ($) {
	projekktorTracking.prototype = {

		reqVer: '1.2.31',
		version: '1.1.4',
		
		sessionId: null,
		pixelSeqCount: 0,
		sessionStartTime: 0,
		userStartTime: 0,
		continuousDurations: [],		
		durationNet: 0,
		
		_trackThis: {},
		_data: {},
		_usageDuration: 0,
		_usageDurationOffset: 0,		

		config: {
			permanentUuid: false,
			respectDNT: false,
			track: []
		},

		_getConstants: function () {

			var cpl = this.pp.getCanPlayNatively('*'),
				pltfrms = this.pp.getPlatforms(),
				pltfrm = this.pp.getPlatform(),
				now = new Date();


			cpl = (typeof cpl != 'object') ? '' : cpl.join('.');
			pltfrms = (typeof pltfrms != 'object') ? '' : pltfrms.join('.');

			return {
				uid: this.getTrackingId(), // player s tracking id (via config)
				sid: this.sessionId, // a unique session id
				sst: this.sessionStartTime.getTime(), // session start time (timestamp)
				plyid: this.pp.getId(), // player s DOM id
				r: String(Math.random()).slice(2, 8), // some random string
				url: this.cleanUrl(window.location.href), // page location
				ref: this.cleanUrl(window.location.href), // alias page location
				cpl: cpl, // client can play natively (string of media formats)
				pltfrms: pltfrms, // available platforms on client
				pltfrm: pltfrm, // available platforms on client
				fl: $p.platforms.FLASH(), // installed flash version (if any)
				res: screen.width + 'x' + screen.height // client screen dims 
			};
		},

		_getVariables: function (error) {
			var now = new Date();
			return {
				cat: this.pp.getItem().cat, // clip category (via config, default "clip")
				dur: this.pp.getDuration(), // clip duration in seconds
				durms: this.pp.getDuration() * 1000, // clip duration in milliseconds
				err: (error) ? 1 : 0, // is error
				fs: this.pp.getInFullscreen(), // is in fullscreen
				h: now.getHours(), // IQ TEST
				m: now.getMinutes(), // IQ TEST
				mpos: this.pp.getMaxPosition(), // current playhead position in seconds
				mposms: this.pp.getMaxPosition() * 1000, // current playhead position in milli-seconds				
				mf: this.pp.getMediaType().split('/')[1], // media type (audio/video)
				mt: this.pp.getMediaType().split('/')[0], // media format (mp4/webm/ogg ...)
				mid: this.pp.getItemId(), // media id (via config)
				midx: this.pp.getItemIdx(), // media idx (0=first)
				mod: this.pp.getModel(), // media playback model
				murl: this.pp.getSource() || '', // media URL
				mcontdur: Math.max.apply( Math, this.continuousDurations || [] ), // max. continuous media consume
				pstate: this.pp.getState(), // current player state
				pver: this.pp.getPlayerVer(), // player version
				pos: this.pp.getPosition(), // current playhead position in seconds
				posms: this.pp.getPosition() * 1000, // current playhead position in milli-seconds
				rnd: $p.utils.randomId(8), // random string
				seq: this.pixelSeqCount, // pixel sequence # per session
				s: now.getSeconds(), // IQ TEST
				sdur: now.getTime() - this.sessionStartTime.getTime(), // session duration (milliseconds)
				udur: now.getTime() - this.userStartTime.getTime(), // session duration (milliseconds)
				udurnet: now.getTime() - this.userStartTime.getTime(), // session duration (milliseconds)
				title: this.pp.getItemConfig('title'), // item title (via config)
				ts: now.getTime() // timestamp of NOW
			};
		},

		initialize: function () {
			this.pluginReady = true;
			this.sessionId = this._uuid();
			this.pixelSeqCount = 0;
			this.sessionStartTime = new Date();
		},

		itemHandler: function () {

			var ref = this,
				dnt = navigator.doNotTrack || navigator.msDoNotTrack;
					
			// clean prerior mess       
			$('.' + this.pp.getId() + '_tracking').remove();
			this._trackThis = {};
			this.continuousDurations =  [];
			this._usageDuration = 0;
			this._usageDurationOffset = 0;
			this.durationNet = 0;

			// respect donottrack
			if (this.getConfig('respectDNT') === true && (dnt === 'yes' || dnt === '1'))
				return;

			this.pluginReady = false;

			// gather tracking requests from config
			$.each(this.getConfig('track'), function () {
				// parse URL
				var url = this.url || null,
					post = this.post || null,
					cat = this.cat || 'clip',
					callback = this.callback || null;

				if (ref._trackThis[cat] == null) {
					ref._trackThis[cat] = {};
				}

				$.each(this.events, function (key, value) {

					// buffer / state event`?                
					if (ref._trackThis[cat][value] == null)
						ref._trackThis[cat][value] = [];

					ref._trackThis[cat][value].push({
						url: url,
						post: post,
						callback: callback
					});
				});

				return true;
			});

			this.pluginReady = true;
		},

		eventHandler: function (event, value, player) {

			if ($.isEmptyObject(this._trackThis)) return;

			var evt = event,
				ref = this;
				
			if (this.userStartTime==0) {
				this.userStartTime = new Date();
			}
			switch (event) {
				case 'state':
					evt = event + "." + value.toLowerCase();
					switch (value) {
						case 'AWAKENING':
							this.userStartTime = new Date();
							break;
						case 'COMPLETED':
							this.continuousDurations.push(this._usageDuration);
							this.durationNet += this._usageDuration;
							break;
					}
					break;
				case 'buffering':
						evt = event + "." + value.toLowerCase();
						break;				
				case 'seek':
						if (isNaN(value)) {// temp V1.2.31 bug workaround
							evt = event + "." + value.toLowerCase();
							
							if (value=='SEEKED') {
								this.continuousDurations.push(this._usageDuration);
								this.durationNet += this._usageDuration;
								this._usageDurationOffset = null;
							}
						}
					break;
				case 'time':
					// "seek" does not provide seek-dest values and "getPosition" is still to inaccurate
					if (this._usageDurationOffset===null) {
						this._usageDuration = 0;
						this._usageDurationOffset = value;
					}
					evt = event + "." + value;
					this._usageDuration = value - this._usageDurationOffset;
					break;
				default:
					value = '';
			}

			// TRACK regular events
			try {
				$.each(this._trackThis[this.pp.getItem().cat][evt], function () {
					ref._trackCall(event, this.url, this.post, this.callback);
				});
			} catch (e) {}

		},

		_trackCall: function (event, url, post, callback) {

			var postData = {},
				ref = this,
				aSync = true; // !this.pp.getIsMobileClient();

			this.pixelSeqCount++;

			// trigger callback function
			if (callback != null) {
				callback(this._getConstants(), this._getVariables((event == 'error')), this.pp);
			}

			if (url == null) {
				return;
			}

			// parse URL tags
			url = $p.utils.parseTemplate(url, $.extend({}, this._getConstants(), this._getVariables((event == 'error'))), true);

			// -----------------------------------------
			// no POST: load tracking pixel
			if (post == null) {
				$('body').append(
					$('<img/>')
					.attr('src', $('<p/>').html(url).text())
					.addClass(this.pp.getId() + '_tracking')
					.hide()
				);
				return;
			}

			// parse POST params
			$.each(post, function (key, value) {
				try {
					postData[key] = $p.utils.parseTemplate(value, $.extend({}, ref._getConstants(), ref._getVariables((event == 'error'))), true);
				} catch (e) {
					postData[key] = value;
				}
			});

			// -----------------------------------------
			// CORS Ajax request:
			// The IE family it the most fascinating sort of browser in the whole wide world. 
			if (window.XDomainRequest) {
				// Use Microsoft XDR

				var xdr = new XDomainRequest();
				xdr.open("POST", url, true);
				xdr.onprogress = function () {}; // IE9 caveat
				xdr.onerror = function () {};
				xdr.send($.param(postData));
				return;
			}

			var ajaxConf = {
				url: url,
				type: 'POST',
				data: postData,
				error: function () {},
				success: function () {},
				cache: false,
				async: true,
				// dataType: 'text/html',
				crossDomain: true
			};

			ajaxConf.xhrFields = {
				withCredentials: true
			};
			
			ajaxConf.beforeSend = function (xhr) {
				xhr.withCredentials = true;
			};

			$.support.cors = true;
			$.ajax(ajaxConf);
		},

		cleanUrl: function (url) {
			// remove hash tags, encode URI
			return window.encodeURIComponent(url.replace(new RegExp('#.*'), ''));
		},

		getTrackingId: function () {
			var name = 'prkusruuid',
				uuid = null;

			if (this.getConfig('permanentUuid')===false) {
				this.cookie(name, 'anonymous');
				return this._uuid();
			}

			uuid = this.cookie(name);
			if (uuid == null || uuid == 'anonymous') {
				uuid = this._uuid();
				this.cookie(name, uuid);
			}
			return uuid;
		},

		/* uuid generator Copyright (c) 2010 Robert Kieffer */
		_uuid: function () {
			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
			var uuid = new Array(36),
				rnd = 0,
				r;
			for (var i = 0; i < 36; i++) {
				if (i == 8 || i == 13 || i == 18 || i == 23) {
					uuid[i] = '-';
				} else if (i == 14) {
					uuid[i] = '4';
				} else {
					if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
					r = rnd & 0xf;
					rnd = rnd >> 4;
					uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
				}
			}
			return uuid.join('');
		}
	};
});
;/*
 * Projekktor II Plugin: Tracks
 * VERSION: 1.0.2
 * DESC: Implements <track> support for displaying subtitles and captions.
 * Supports .SRT,.DXFP and EBU-TT
 * Copyright 2012, 2013, 2014 Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 *
 * under GNU General Public License
 * http://www.projekktor.com/license/
 */
var projekktorTracks = function(){};
jQuery(function($) {
projekktorTracks.prototype = {

    reqVer: '1.4.00',
    version: '1.0.3',

    cache: {},
    _selectedLanguage: 'default',
    _isOutside: false,
    _parser: '',
    
    languages: {
        af:'Afrikaans',
        sq:'Albanian',
        ar:'Arabic',
        be:'Belarusian',
        bg:'Bulgarian',
        ca:'Catalan',
        zh:'Chinese',
        hr:'Croatian',
        cs:'Czech',
        da:'Danish',
        nl:'Dutch',
        en:'English',
        et:'Estonian',
        fi:'Finnish',
        fr:'French',
        gl:'Galician',
        de:'German',
        el:'Greek',
        ht:'Haitian Creole',
        iw:'Hebrew',
        hi:'Hindi',
        hu:'Hungarian',
        is:'Icelandic',
        id:'Indonesian',
        ga:'Irish',
        it:'Italian',
        ja:'Japanese',
        ko:'Korean',
        lv:'Latvian',
        lt:'Lithuanian',
        mk:'Macedonian',
        ms:'Malay',
        mt:'Maltese',
        no:'Norwegian',
        fa:'Persian',
        pl:'Polish',
        pt:'Portuguese',
        ro:'Romanian',
        ru:'Russian',
        sr:'Serbian',
        sk:'Slovak',
        sl:'Slovenian',
        es:'Spanish',
        sw:'Swahili',
        sv:'Swedish',
        tl:'Tagalog',
        th:'Thai',
        tr:'Turkish',
        uk:'Ukrainian',
        vi:'Vietnamese',
        cy:'Welsh',
        yi:'Yiddish'
    },
    dest: {},

    config: {
        offset: 0,
        stack: false,
        style: false,
        ttstyle: true,
        ttsoverwrite: true,
        force: false,
        types: {
            DXFP: 'application/xml',
            XML: 'application/xml',
            VTT: 'text/plain',
            SRT: 'text/plain'
        }
    },



    /*
     * triggered on plugin-instanciation
     * set language to navigator language and unlock player
    */
    initialize: function() {
        var ref = this;

        this.dest = this.applyToPlayer($('<div/>'));
        this.btn = this.setActive(this.getElement('tracksbtn'), false);

        this._isOutside = (this.pp.getDC().find(this.dest).length===0);

        // inital activation
        if (this.cookie('on')===true) {
            this.btn.addClass('on').removeClass('off');
             this.setActive();
        }
        else {
            this.btn.addClass('off').removeClass('on');
            this.setInactive();
        }
    
        this.btn.click(function() {
            if ($(this).hasClass('on')) {
                $(this).addClass('off').removeClass('on');
                ref.cookie('on', false, true);
                ref.setInactive();
            } else {
                $(this).addClass('on').removeClass('off');
                ref.cookie('on', true);
                ref.setActive();
            }
            return false;
        });
        this.pluginReady = true;
    },

    /*
     * triggeres on item initialisation
     * get subtitles for default language
    */
    itemHandler: function(itmObj) {
        this.setLanguage('de');
        try {this.dest.css('bottom', this.dest.data('pos') + "px");} catch(e) {}
        if (this.pp.getConfig('tracks') && this.pp.getConfig('tracks').length>0) {
            this.setActive(this.btn, true);
        }
        else {
            this.setActive(this.btn, false);
            this.setInactive();
        }
        this.cache = {};
    },

    startHandler: function() {
        if (this.btn.hasClass('on') || this.getConfig('force')===true) {
            this.setActive();
        }
    },
    
    tracksHandler: function(state) {
    	if (state=="on") {

    		this.dest.hide();
    	}
    },
    
    plugin_tracksLanguageHandler: function() {
        this.plugin_tracksActiveHandler();
    },    

    plugin_controlbarShowHandler: function(controlBar) {
        if (this._isOutside===true) {
            return;
        }
        this.dest.addClass('shifted');
    },

    plugin_controlbarHideHandler: function(controlBar) {
        if (this._isOutside===true){
            return;
        }
        this.dest.removeClass('shifted');
    },

    fullscreenHandler: function (){
        // this.dest.css('bottom', this.dest.data('pos') + "px")
    },

    plugin_tracksInactiveHandler: function() {},

    plugin_tracksActiveHandler: function(langShort) {

        if (arguments.length==0) {
            return
        }

        var tracks = this.pp.getConfig('tracks') || [],
            lang = this._selectedLanguage,
            trackUrl = null,
            possibleUrl = [];

        this.pluginReady = false;
        if (this.cache[lang]==null && this.cache[this._defaultLanguage]==null) {
            $.each(tracks, function() {
                if (this.srclang==lang) {
                    trackUrl = this.src;
                    return false;
                }
                if (this.srclang==null) {
                    possibleUrl.push(this.src);
                }
                return true;
            });

            if (trackUrl==null && possibleUrl.length==0) {
                this.pluginReady = true;
                return;
            }
            this._parser = "_parse" + this._getExtension(trackUrl);
            this.pp.getFromUrl(trackUrl || possibleUrl[0], this, '_trackLoaded', this._getContentTypeByExtension(trackUrl));
        }
        else {
            this._trackLoaded();
        }
    },

    setLanguage: function(lang) {
        var newLang = lang || (window.navigator.userLanguage || window.navigator.language).split('-')[0];
        if(this.languages[newLang]!=null) {
            if(newLang!=this._selectedLanguage) {
                this._selectedLanguage = newLang;
                this.sendEvent('language', newLang);
                return false; 
            }
        }
        return true;
    },

    /*
    Data ready - inject cuepoints
    */
    _trackLoaded: function(responseObj, responseText) { 
        var data = this[this._parser](responseObj, responseText);
        if (data!=null) {
            
            this.cache = $.extend(true, {}, this.cache, data);
            this._setCuepoints();
        }
        this.dest.addClass('shifted');
        this.pluginReady = true;
    },

    _setCuepoints: function() {
        var ref = this,
            itemId = this.pp.getItemId(),
            group = 'subtitles',
            offset = this.getConfig('offset'),
            data = this.cache[this._selectedLanguage] || this.cache[this._defaultLanguage] || [],
            cuepoints = [];

        this.pp.removeCuePoints(itemId, false, [group]);
        this.dest.html("");

        for (var i = 0; i < data.length; i++) {
            cuepoints.push(
                    {
                        item: itemId,
                        group: group,
                        on: data[i].on,
                        off: data[i].off,
                        value: data[i].value,
                        precision: 0,
                        callback: function(cuePoint) {
                            if (cuePoint.enabled) {
                                if (cuePoint.value.stack !== true) {
                                    ref.dest.html('');
                                }
                                            
                                ref.dest.append(
                                        $('<span>')
                                        .attr('id', cuePoint.value.id || cuePoint.id)
                                        .html(cuePoint.value.html)
                                        .css(cuePoint.value.style)
                                        .addClass(cuePoint.value.className)
                                        );
                            } else {
                                $('#' + (cuePoint.value.id || cuePoint.id)).remove();
                            }
                        }
                    });
        }
        this.pp.setCuePoints(cuepoints, itemId, false, {offset: offset});
    },



    /*
    *     Parsers: Timed Text / DXFP
    */
    _parseSRT: function(responseObj, responseText) {
        var result = [],
            strip = function(txt) {
                return txt.replace(/^\s+|\s+$/g,"");
            },
            srt = strip(responseText.replace(/\r\n|\r|\n/g, '\n')).split('\n\n');

        result[ this._selectedLanguage ] = [];
    
        for(var s in srt) {
            st = srt[s].split('\n');
            txt = st[2];
            if(st.length > 2) {
            for(j=3; j<st.length;j++)
                txt += '\n'+st[j];
            }
            result[ this._selectedLanguage ].push({
            on:     strip(st[1].split(' --> ')[0]),
            off:     strip(st[1].split(' --> ')[1]),
            value:    {
                style: {},
                html: txt,
                stack: this.getConfig('stack')
            }
            });
        }
        return result;
    },


    /*
    *     Parsers: Timed Text / DXFP / EBU-TT
    */
    _parseXML: function(responseObj) {
        var result = [],
            txt = '',
            divs = null,
            ref = this,
            styles = {};

        // parse styling here: http://www.w3.org/TR/ttaf1-dfxp/
        if (this.getConfig('style')!==false) {
            $(responseObj).find("style,tt\\:style").each(function() {               
                var id = $(this).attr('id') || $(this).attr('xml:id') || 'default';
                if (styles[id]==null) styles[id] = {};
                $.each(this.attributes, function() {
                    var txt = this.textContent || this.text,
                    name = this.localName || this.name.substr(this.name.indexOf(':')+1);
                    if (name!='id') {
                        styles[id][name] = txt;
                    }
                });
            });
        }

        // grab subtitles
        divs = $(responseObj).find("div,tt\\:body");

        for (var i=0; i<divs.length; i++) {

            var targetDiv = $(divs[i]),
                lang = targetDiv.attr('xml:lang') || 'default',
                paragraphs = null,
                targetPara = null;
    
            if (ref._defaultLanguage==null) {
                ref._defaultLanguage = lang;
            }
    
            result[ lang ] = [];    
            paragraphs = targetDiv.find("p,tt\\:p");
         
            for (var j=0; j<paragraphs.length; j++) {

                var classNames = [],
                    css = {};

                targetPara = $(paragraphs[j]);

                classNames.push(targetPara.attr('style') || '');

                try { txt = $.htmlClean( $('<div>').append( targetPara ).html() );}
                catch(e) { txt = targetPara.get(0).text; }

                if (ref.getConfig('ttstyle')!==false) {
                    $.each(targetPara.get(0).attributes, function() {
                        if ( this.name.indexOf('tts:')> -1 ) {
                            var directive = this.name.substr(this.name.indexOf('tts:')+4);
                            val = this.value.replace(/#/, '');
                            if (ref.getConfig('ttsoverwrite')) {
                                classNames.push( ref.getCN("tt"+val || '') );
                            } else {
                                css[directive] = this.value;
                            }
                        }
                    });
                }

                result[ lang ].push({
                    on:     targetPara.attr('begin'),
                    off:     targetPara.attr('end'),
                    value:    {
                        style: styles[ targetPara.attr('style') ] || css,    // header style
                        className:  classNames.join(' ') || '',         // style ID
                        html: txt,
                        region: targetPara.attr('region') || 'bottom', 
                        stack: this.getConfig('stack'),
                        id: targetPara.attr('id')
                    }
                });
            }
    
        }

        return result;
    },

    _parseDXFP: function(responseObj, responseText) {
        return this._parseXML(responseObj, responseText);
    },


    /*
    Helpers
    */
    _getContentTypeByExtension: function(url) {
        return this.getConfig('types')[ this._getExtension(url) ] || 'application/xml' ;
    },

    _getExtension: function(url) {

        var fileExt = '',
            extRegEx = [],
            cfg = this.getConfig('types');
    
        // build regex string and filter dublicate extensions:
        for(var ext in cfg ) {
            extRegEx.push( '\\\.'+ext );
        }
        extRegEx = '^.*\.('+extRegEx.join('|')+')';

        try {
            fileExt = url.toUpperCase().match( new RegExp(extRegEx))[1];
            fileExt = (!fileExt) ? '' : fileExt.replace('.','');
        } catch(e) {fileExt='XML'; }
    
        return fileExt.toUpperCase();
    }
};
});



/*
HTML Clean for jQuery
Anthony Johnston
http://www.antix.co.uk

version 1.3.0

$Revision: 67 $

requires jQuery http://jquery.com

Use and distibution http://www.opensource.org/licenses/bsd-license.php

2010-04-02 allowedTags/removeTags added (white/black list) thanks to David Wartian (Dwartian)
2010-06-30 replaceStyles added for replacement of bold, italic, super and sub styles on a tag
2012-04-30 allowedAttributes added, an array of attributed allowed on the elements
*/
(function ($) {
    $.fn.htmlClean = function (options) {
        // iterate and html clean each matched element
        return this.each(function () {
            var $this = $(this);
            if (this.value) {
                this.value = $.htmlClean(this.value, options);
            } else {
                this.innerHTML = $.htmlClean(this.innerHTML, options);
            }
        });
    };

    // clean the passed html
    $.htmlClean = function (html, options) {
        options = $.extend({}, $.htmlClean.defaults, options);

        var tagsRE = /<(\/)?(\w+:)?([\w]+)([^>]*)>/gi;
        var attrsRE = /(\w+)=(".*?"|'.*?'|[^\s>]*)/gi;

        var tagMatch;
        var root = new Element();
        var stack = [root];
        var container = root;
        var protect = false;

        if (options.bodyOnly) {
            // check for body tag
            if (tagMatch = /<body[^>]*>((\n|.)*)<\/body>/i.exec(html)) {
                html = tagMatch[1];
            }
        }
        html = html.concat("<xxx>"); // ensure last element/text is found
        var lastIndex;

        while (tagMatch = tagsRE.exec(html)) {
            var tag = new Tag(tagMatch[3], tagMatch[1], tagMatch[4], options);

            // add the text
            var text = html.substring(lastIndex, tagMatch.index);
            if (text.length > 0) {
                var child = container.children[container.children.length - 1];
                if (container.children.length > 0
                        && isText(child = container.children[container.children.length - 1])) {
                    // merge text
                    container.children[container.children.length - 1] = child.concat(text);
                } else {
                    container.children.push(text);
                }
            }
            lastIndex = tagsRE.lastIndex;

            if (tag.isClosing) {
                // find matching container
                if (pop(stack, [tag.name])) {
                    stack.pop();
                    container = stack[stack.length - 1];
                }
            } else {
                // create a new element
                var element = new Element(tag);

                // add attributes
                var attrMatch;
                while (attrMatch = attrsRE.exec(tag.rawAttributes)) {

                    // check style attribute and do replacements
                    if (attrMatch[1].toLowerCase() == "style"
                        && options.replaceStyles) {

                        var renderParent = !tag.isInline;
                        for (var i = 0; i < options.replaceStyles.length; i++) {
                            if (options.replaceStyles[i][0].test(attrMatch[2])) {

                                if (!renderParent) {
                                    tag.render = false;
                                    renderParent = true;
                                }
                                container.children.push(element); // assumes not replaced
                                stack.push(element);
                                container = element; // assumes replacement is a container
                                // create new tag and element
                                tag = new Tag(options.replaceStyles[i][1], "", "", options);
                                element = new Element(tag);
                            }
                        }
                    }

                    if (tag.allowedAttributes != null
                            && (tag.allowedAttributes.length == 0
                            || $.inArray(attrMatch[1], tag.allowedAttributes) > -1)) {
                        element.attributes.push(new Attribute(attrMatch[1], attrMatch[2]));
                    }
                }
                // add required empty ones
                $.each(tag.requiredAttributes, function () {
                    var name = this.toString();
                    if (!element.hasAttribute(name)) element.attributes.push(new Attribute(name, ""));
                });

                // check for replacements
                for (var repIndex = 0; repIndex < options.replace.length; repIndex++) {
                    for (var tagIndex = 0; tagIndex < options.replace[repIndex][0].length; tagIndex++) {
                        var byName = typeof (options.replace[repIndex][0][tagIndex]) == "string";
                        if ((byName && options.replace[repIndex][0][tagIndex] == tag.name)
                                || (!byName && options.replace[repIndex][0][tagIndex].test(tagMatch))) {
                            // don't render this tag
                            tag.render = false;
                            container.children.push(element);
                            stack.push(element);
                            container = element;

                            // render new tag, keep attributes
                            tag = new Tag(options.replace[repIndex][1], tagMatch[1], tagMatch[4], options);
                            element = new Element(tag);
                            element.attributes = container.attributes;

                            repIndex = options.replace.length; // break out of both loops
                            break;
                        }
                    }
                }

                // check container rules
                var add = true;
                if (!container.isRoot) {
                    if (container.tag.isInline && !tag.isInline) {
                        add = false;
                    } else if (container.tag.disallowNest && tag.disallowNest
                                && !tag.requiredParent) {
                        add = false;
                    } else if (tag.requiredParent) {
                        if (add = pop(stack, tag.requiredParent)) {
                            container = stack[stack.length - 1];
                        }
                    }
                }

                if (add) {
                    container.children.push(element);

                    if (tag.toProtect) {
                        // skip to closing tag
                        while (tagMatch2 = tagsRE.exec(html)) {
                            var tag2 = new Tag(tagMatch2[3], tagMatch2[1], tagMatch2[4], options);
                            if (tag2.isClosing && tag2.name == tag.name) {
                                element.children.push(RegExp.leftContext.substring(lastIndex));
                                lastIndex = tagsRE.lastIndex;
                                break;
                            }
                        }
                    } else {
                        // set as current container element
                        if (!tag.isSelfClosing && !tag.isNonClosing) {
                            stack.push(element);
                            container = element;
                        }
                    }
                }
            }
        }

        // render doc
        return $.htmlClean.trim(render(root, options).join(""));
    };

    // defaults
    $.htmlClean.defaults = {
        // only clean the body tagbody
        bodyOnly: true,
        // only allow tags in this array, (white list), contents still rendered
        allowedTags: [],
        // remove tags in this array, (black list), contents still rendered
        removeTags: ["basefont", "center", "dir", "font", "frame", "frameset", "iframe", "isindex", "menu", "noframes", "s", "strike", "u"],
        // array of [attributeName], [optional array of allowed on elements] e.g. [["id"], ["style", ["p", "dl"]]] // allow all elements to have id and allow style on 'p' and 'dl'
        allowedAttributes: [],
        // array of attribute names to remove on all elements in addition to those not in tagAttributes e.g ["width", "height"]
        removeAttrs: [],
        // array of [className], [optional array of allowed on elements] e.g. [["aClass"], ["anotherClass", ["p", "dl"]]]
        allowedClasses: [],
        // format the result
        format: false,
        // format indent to start on
        formatIndent: 0,
        // tags to replace, and what to replace with, tag name or regex to match the tag and attributes
        replace: [
            [["b", "big"], "strong"],
            [["i"], "em"]
        ],
        // styles to replace with tags, multiple style matches supported, inline tags are replaced by the first match blocks are retained
        replaceStyles: [
            [/font-weight:\s*bold/i, "strong"],
            [/font-style:\s*italic/i, "em"],
            [/vertical-align:\s*super/i, "sup"],
            [/vertical-align:\s*sub/i, "sub"]
        ]
    };

    function applyFormat(element, options, output, indent) {
        if (!element.tag.isInline && output.length > 0) {
            output.push("\n");
            for (i = 0; i < indent; i++) output.push("\t");
        }
    }

    function render(element, options) {
        var output = [], empty = element.attributes.length == 0, indent;
        var openingTag = this.name.concat(element.tag.rawAttributes == undefined ? "" : element.tag.rawAttributes);

        // don't render if not in allowedTags or in removeTags
        var renderTag
            = element.tag.render
                && (options.allowedTags.length == 0 || $.inArray(element.tag.name, options.allowedTags) > -1)
                && (options.removeTags.length == 0 || $.inArray(element.tag.name, options.removeTags) == -1);

        if (!element.isRoot && renderTag) {
            // render opening tag
            output.push("<");
            output.push(element.tag.name);
            $.each(element.attributes, function () {
                if ($.inArray(this.name, options.removeAttrs) == -1) {
                    var m = RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value);
                    var value = m[2];
                    var valueQuote = m[1] || "'";

                    // check for classes allowed
                    if (this.name == "class") {
                        value =
                            $.grep(value.split(" "), function (c) {
                                return $.grep(options.allowedClasses, function (a) {
                                    return a[0] == c && (a.length == 1 || $.inArray(element.tag.name, a[1]) > -1);
                                }).length > 0;
                            })
                            .join(" ");
                        valueQuote = "'";
                    }

                    if (value != null && (value.length > 0 || $.inArray(this.name, element.tag.requiredAttributes) > -1)) {
                        output.push(" ");
                        output.push(this.name);
                        output.push("=");
                        output.push(valueQuote);
                        output.push(value);
                        output.push(valueQuote);
                    }
                }
            });
        }

        if (element.tag.isSelfClosing) {
            // self closing
            if (renderTag) output.push(" />");
            empty = false;
        } else if (element.tag.isNonClosing) {
            empty = false;
        } else {
            if (!element.isRoot && renderTag) {
                // close
                output.push(">");
            }

            var indent = options.formatIndent++;

            // render children
            if (element.tag.toProtect) {
                var outputChildren = $.htmlClean.trim(element.children.join("")).replace(/<br>/ig, "\n");
                output.push(outputChildren);
                empty = outputChildren.length == 0;
            } else {
                var outputChildren = [];
                for (var i = 0; i < element.children.length; i++) {
                    var child = element.children[i];
                    var text = $.htmlClean.trim(textClean(isText(child) ? child : child.childrenToString()));
                    if (isInline(child)) {
                        if (i > 0 && text.length > 0
                        && (startsWithWhitespace(child) || endsWithWhitespace(element.children[i - 1]))) {
                            outputChildren.push(" ");
                        }
                    }
                    if (isText(child)) {
                        if (text.length > 0) {
                            outputChildren.push(text);
                        }
                    } else {
                        // don't allow a break to be the last child
                        if (i != element.children.length - 1 || child.tag.name != "br") {
                            if (options.format) applyFormat(child, options, outputChildren, indent);
                            outputChildren = outputChildren.concat(render(child, options));
                        }
                    }
                }
                options.formatIndent--;

                if (outputChildren.length > 0) {
                    if (options.format && outputChildren[0] != "\n") applyFormat(element, options, output, indent);
                    output = output.concat(outputChildren);
                    empty = false;
                }
            }

            if (!element.isRoot && renderTag) {
                // render the closing tag
                if (options.format) applyFormat(element, options, output, indent - 1);
                output.push("</");
                output.push(element.tag.name);
                output.push(">");
            }
        }

        // check for empty tags
        if (!element.tag.allowEmpty && empty) { return []; }

        return output;
    }

    // find a matching tag, and pop to it, if not do nothing
    function pop(stack, tagNameArray, index) {
        index = index || 1;
        if ($.inArray(stack[stack.length - index].tag.name, tagNameArray) > -1) {
            return true;
        } else if (stack.length - (index + 1) > 0
                && pop(stack, tagNameArray, index + 1)) {
            stack.pop();
            return true;
        }
        return false;
    }

    // Element Object
    function Element(tag) {
        if (tag) {
            this.tag = tag;
            this.isRoot = false;
        } else {
            this.tag = new Tag("root");
            this.isRoot = true;
        }
        this.attributes = [];
        this.children = [];

        this.hasAttribute = function (name) {
            for (var i = 0; i < this.attributes.length; i++) {
                if (this.attributes[i].name == name) return true;
            }
            return false;
        };

        this.childrenToString = function () {
            return this.children.join("");
        };

        return this;
    }

    // Attribute Object
    function Attribute(name, value) {
        this.name = name;
        this.value = value;

        return this;
    }

    // Tag object
    function Tag(name, close, rawAttributes, options) {
        this.name = name.toLowerCase();

        this.isSelfClosing = $.inArray(this.name, tagSelfClosing) > -1;
        this.isNonClosing = $.inArray(this.name, tagNonClosing) > -1;
        this.isClosing = (close != undefined && close.length > 0);

        this.isInline = $.inArray(this.name, tagInline) > -1;
        this.disallowNest = $.inArray(this.name, tagDisallowNest) > -1;
        this.requiredParent = tagRequiredParent[$.inArray(this.name, tagRequiredParent) + 1];
        this.allowEmpty = $.inArray(this.name, tagAllowEmpty) > -1;

        this.toProtect = $.inArray(this.name, tagProtect) > -1;

        this.rawAttributes = rawAttributes;
        this.requiredAttributes = tagAttributesRequired[$.inArray(this.name, tagAttributesRequired) + 1];

        if (options) {
            if (!options.tagAttributesCache) options.tagAttributesCache = [];
            if ($.inArray(this.name, options.tagAttributesCache) == -1) {
                var cacheItem = tagAttributes[$.inArray(this.name, tagAttributes) + 1].slice(0);

                // add extra ones from options
                for (var i = 0; i < options.allowedAttributes.length; i++) {
                    var attrName = options.allowedAttributes[i][0];
                    if ((
                            options.allowedAttributes[i].length == 1
                            || $.inArray(this.name, options.allowedAttributes[i][1]) > -1
                            ) && $.inArray(attrName, cacheItem) == -1) {
                        cacheItem.push(attrName);
                    }
                }

                options.tagAttributesCache.push(this.name);
                options.tagAttributesCache.push(cacheItem);
            }

            this.allowedAttributes = options.tagAttributesCache[$.inArray(this.name, options.tagAttributesCache) + 1];
        }

        this.render = true;

        return this;
    }

    function startsWithWhitespace(item) {
        while (isElement(item) && item.children.length > 0) { item = item.children[0] }
        return isText(item) && item.length > 0 && $.htmlClean.isWhitespace(item.charAt(0));
    }
    function endsWithWhitespace(item) {
        while (isElement(item) && item.children.length > 0) { item = item.children[item.children.length - 1] }
        return isText(item) && item.length > 0 && $.htmlClean.isWhitespace(item.charAt(item.length - 1));
    }
    function isText(item) { return item.constructor == String; }
    function isInline(item) { return isText(item) || item.tag.isInline; }
    function isElement(item) { return item.constructor == Element; }
    function textClean(text) {
        return text
            .replace(/&nbsp;|\n/g, " ")
            .replace(/\s\s+/g, " ");
    }

    // trim off white space, doesn't use regex
    $.htmlClean.trim = function (text) {
        return $.htmlClean.trimStart($.htmlClean.trimEnd(text));
    };
    $.htmlClean.trimStart = function (text) {
        return text.substring($.htmlClean.trimStartIndex(text));
    };
    $.htmlClean.trimStartIndex = function (text) {
        for (var start = 0; start < text.length - 1 && $.htmlClean.isWhitespace(text.charAt(start)); start++);
        return start;
    };
    $.htmlClean.trimEnd = function (text) {
        return text.substring(0, $.htmlClean.trimEndIndex(text));
    };
    $.htmlClean.trimEndIndex = function (text) {
        for (var end = text.length - 1; end >= 0 && $.htmlClean.isWhitespace(text.charAt(end)); end--);
        return end + 1;
    };
    // checks a char is white space or not
    $.htmlClean.isWhitespace = function (c) { return $.inArray(c, whitespace) != -1; };

    // tags which are inline
    var tagInline = [
        "a", "abbr", "acronym", "address", "b", "big", "br", "button",
        "caption", "cite", "code", "del", "em", "font",
        "hr", "i", "input", "img", "ins", "label", "legend", "map", "q",
        "s", "samp", "select", "small", "span", "strike", "strong", "sub", "sup",
        "tt", "u", "var"];
    var tagDisallowNest = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "th", "td"];
    var tagAllowEmpty = ["th", "td"];
    var tagRequiredParent = [
        null,
        "li", ["ul", "ol"],
        "dt", ["dl"],
        "dd", ["dl"],
        "td", ["tr"],
        "th", ["tr"],
        "tr", ["table", "thead", "tbody", "tfoot"],
        "thead", ["table"],
        "tbody", ["table"],
        "tfoot", ["table"]
        ];
    var tagProtect = ["script", "style", "pre", "code"];
    // tags which self close e.g. <br />
    var tagSelfClosing = ["br", "hr", "img", "link", "meta"];
    // tags which do not close
    var tagNonClosing = ["!doctype", "?xml"];
    // attributes allowed on tags
    var tagAttributes = [
            ["class"],  // default, for all tags not mentioned
            "?xml", [],
            "!doctype", [],
            "a", ["accesskey", "class", "href", "name", "title", "rel", "rev", "type", "tabindex"],
            "abbr", ["class", "title"],
            "acronym", ["class", "title"],
            "blockquote", ["cite", "class"],
            "button", ["class", "disabled", "name", "type", "value"],
            "del", ["cite", "class", "datetime"],
            "form", ["accept", "action", "class", "enctype", "method", "name"],
            "input", ["accept", "accesskey", "alt", "checked", "class", "disabled", "ismap", "maxlength", "name", "size", "readonly", "src", "tabindex", "type", "usemap", "value"],
            "img", ["alt", "class", "height", "src", "width"],
            "ins", ["cite", "class", "datetime"],
            "label", ["accesskey", "class", "for"],
            "legend", ["accesskey", "class"],
            "link", ["href", "rel", "type"],
            "meta", ["content", "http-equiv", "name", "scheme", "charset"],
            "map", ["name"],
            "optgroup", ["class", "disabled", "label"],
            "option", ["class", "disabled", "label", "selected", "value"],
            "q", ["class", "cite"],
            "script", ["src", "type"],
            "select", ["class", "disabled", "multiple", "name", "size", "tabindex"],
            "style", ["type"],
            "table", ["class", "summary"],
            "th", ["class", "colspan", "rowspan"],
            "td", ["class", "colspan", "rowspan"],
            "textarea", ["accesskey", "class", "cols", "disabled", "name", "readonly", "rows", "tabindex"]
        ];
    var tagAttributesRequired = [[], "img", ["alt"]];
    // white space chars
    var whitespace = [" ", "\t", "\n", "\r", "\f"];

})(jQuery);
;/*
 * Projekktor AGF Nielsen Plugin
 */
var projekktorWaveform = function () {};
jQuery(function ($) {
	projekktorWaveform.prototype = {
        reqVer: '1.4.00',
        version: '1.0.0',
                
        initialize: function () {
        	this.pluginReady = true;
        },

        itemHandler: function (state) {
        	if (this.pp.getConfig('waveform')) {
        		$('.projekktor').addClass('hasEnvelope');
        		$('.ppscrubberdrag').css({
        			'background-image': 'url(' + this.pp.getConfig('waveform') + ')',
        			'background-repeat': 'no-repeat'
        		});        		
        	}
        	
        }
    }
});


;/*
 * this file is part of:
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
 */
var playerModel = function () {};
jQuery(function ($) {
    playerModel.prototype = {

        modelId: 'player',
        iLove: [],

        // all the player states
        _currentState: null,
        _currentBufferState: null,
        _currentSeekState: null,        

        _ap: false, // autday
        _volume: 0, // async
        _quality: 'default',

        _displayReady: false,
        _isPlaying: false,
        _isReady: false,

        _id: null,

        // experimental
        _KbPerSec: 0,
        _bandWidthTimer: null,

        // flags
        _isPoster: false,
        _isFullscreen: false,

        hasGUI: false,
        allowRandomSeek: false,

        flashVerifyMethod: 'api_get',
        mediaElement: null,

        pp: {},

        media: {
            duration: 0,
            position: 0,
            maxpos: 0,
            offset: 0,
            file: false,
            poster: '',
            ended: false,
            loadProgress: 0,
            errorCode: 0
        },

        /*******************************
         *        CORE
         *******************************/
        _init: function (params) {
            this.pp = params.pp || null;
            this.media = $.extend(true, {}, this.media, params.media);
            this.mediaId = params.media.ID;
            this._ap = params.autoplay;
            this._isFullscreen = params.fullscreen;
            this._id = $p.utils.randomId(8);
            this._quality = params.quality || this._quality;
            this._volume = this.pp.getVolume();
            this._playbackQuality = this.pp.getPlaybackQuality();
            this.init();
        },

        init: function (params) {
            this.ready();
        },

        ready: function () {
            this.sendUpdate('modelReady');
            this._isReady = true;
            if (this._ap) {                
                this.sendUpdate('autostart', true);
                this._setState('awakening');
            } else {
                this.displayItem(false);
            }
        },

        /* apply poster while sleeping or get ready for true multi media action */
        displayItem: function (showMedia) {
            // reset
            this._displayReady = false;
            this._isPoster = false;

            this.pp.removeListener('fullscreen.poster');
            this.pp.removeListener('resize.poster');

            // poster 
            if (showMedia !== true || this.getState('STOPPED')) {
                this._setState('idle');
                this.applyImage(this.getPoster(), this.pp.getMediaContainer().html(''));
                this._isPoster = true;
                this.displayReady();
                return;
            }

            // media
            $('#' + this.pp.getMediaId() + "_image").remove();
            // apply media
            this.applyMedia(this.pp.getMediaContainer());
        },

        applyMedia: function () {},

        sendUpdate: function (type, value) {
            // type = type.toLowerCase();
            this.pp._modelUpdateListener(type, value);
            if (type=='error') {
                this.removeListeners();
                this.detachMedia();                            
                this._setState('error');
            }
        },

        /* wait for the playback element to initialize */
        displayReady: function () {
            this._displayReady = true;
            this.pp._modelUpdateListener('displayReady');
        },

        start: function () {
            var ref = this;
            if (this.mediaElement == null && this.modelId != 'PLAYLIST') return;
            if (this.getState('STARTING')) return;

            this._setState('STARTING');

            if (!this.getState('STOPPED')) {
                this.addListeners();
            }

            if (this.pp.getIsMobileClient() && !this.getState('PLAYING')) {
                setTimeout(function () {
                   ref.setPlay();
                }, 150);
            }
            this.setPlay();
        },

        addListeners: function () {},

        removeListeners: function () {
            try {
                this.mediaElement.unbind('.projekktor' + this.pp.getId());
            } catch (e) {}
        },

        detachMedia: function () {},

        destroy: function (silent) {
            
            this.removeListeners();

            if (!this.getState('IDLE'))
                this._setState('destroying');

            this.detachMedia();

            try {
                $('#' + this.mediaElement.id).empty();
            } catch (e) {}
            if (!this.pp.getIsMobileClient()) {
                try {
                    $('#' + this.mediaElement.id).remove();
                } catch (e) {}
                try {
                    this.mediaElement.remove();
                } catch (e) {}
                this.pp.getMediaContainer().html('');
            }
            this.mediaElement = null;

            this.media.loadProgress = 0;
            this.media.playProgress = 0;
            this.media.frame = 0;
            this.media.position = 0;
            this.media.duration = 0;
        },

        /* firefox reinit-issue-workaround-helper-thingy */
        reInit: function () {

            // no FF:
            if (this.flashVersion !== false || !this._isFF() || this.getState('ERROR') || this.pp.getConfig('bypassFlashFFFix') === true) {
                return;
            }
            // elsewise nuke:
            this.sendUpdate('FFreinit');
            this.removeListeners();
            this.displayItem((!this.getState('IDLE')));
        },

        applyCommand: function (command, value) {
            switch (command) {
                case 'quality':
                    this.setQuality(value);
                    break;
                case 'error':
                    this._setState('error');
                    this.pp._modelUpdateListener('error', value);
                    break;
                case 'play':                  
                    if (this.getState('ERROR')) break;
                    if (this.getState('IDLE')) {
                        this._setState('awakening');
                        break;
                    }
                    this.setPlay();
                    break;
                case 'pause':
                    if (this.getState('ERROR')) break;
                    this.setPause();
                    break;
                case 'volume':
                    if (this.getState('ERROR')) break;
                    if (!this.setVolume(value)) {
                        this._volume = value;
                        this.sendUpdate('volume', value);
                    }
                    break;
                case 'stop':
                    this.setStop();
                    break;
                case 'frame':
                    this.setFrame(value);
                    break;
                case 'seek':
                    if (this.getState('ERROR')) break;
                    if (this.getSeekState('SEEKING')) break;
                    if (this.getState('IDLE')) break;
                    if (this.media.loadProgress == -1) break;                   
                    this._setSeekState('seeking', value);               
                    this.setSeek(value);
                    break;
                case 'fullscreen':
                    /* 
                    * It is vital to first tell the controller what happened in order to have an already altered DOM
                    * before processing further scaling processes.
                    * This is a break in the logic but seems to work.
                    */
                    if (this.getState('IDLE')) {
                        this.applyImage(this.getPoster(), this.pp.getMediaContainer().html(''));
                    }
                    
                    if (value != this._isFullscreen) {
                        this._isFullscreen = value;                    
                        this.sendUpdate('fullscreen', this._isFullscreen);
                        this.reInit();
                        this.setFullscreen();
                    }                    
                    break;
                case 'resize':
                    this.setResize();
                    if (this.getState('IDLE')) {
                        this.applyImage(this.getPoster(), this.pp.getMediaContainer().html(''));
                    }
                    this.sendUpdate('resize', value);
                    break;
            }
        },

        /*******************************
         *   PUBLIC ELEMENT SETTERS
         *******************************/
        setFrame: function (frame) {
            var newPos = (frame / this.pp.getConfig('fps')) + 0.00001;
            this.setSeek(newPos);
        },

        setSeek: function (newpos) {},

        setPlay: function () {},

        setPause: function () {},

        setStop: function () {
            this.detachMedia();
            this._setState('stopped');
            // this._ap=false;
            this.displayItem(false);
            
        },

        setVolume: function (volume) {},

        setFullscreen: function(inFullscreen) {
            if (this.element=='audio') return;
            this._scaleVideo();
        }, 

        setResize: function() {
            if (this.element=='audio') return;
            this._scaleVideo(false);
        },

        /*
        setResize: function () {
            var destContainer = this.pp.getMediaContainer();
            this.sendUpdate('scaled', {
                realWidth: this.media.videoWidth || null,
                realHeight: this.media.videoHeight || null,
                displayWidth: destContainer.width(),
                displayHeight: destContainer.height()
            });
        },
*/
        setPosterLive: function () {},

        setQuality: function (quality) {
            if (this._quality == quality) return;
            this._quality = quality;
            
            try {this.applySrc();} catch(e){}

            this.qualityChangeListener();
        },

        /*******************************
            ELEMENT GETTERS 
        *******************************/
        getId: function() {
            return this.mediaId;    
        },
        
        getQuality: function () {
            return this._quality;
        },
        
        getVolume: function () {
            if (this.mediaElement==null) {
                return this._volume;
            }

            return (this.mediaElement.prop('muted')===true) ? 0 : this.mediaElement.prop('volume');
        },

        getLoadProgress: function () {
            return this.media.loadProgress || 0;
        },

        getLoadPlaybackProgress: function () {
            return this.media.playProgress || 0;
        },

        getPosition: function () {
            return this.media.position || 0;
        },

        getFrame: function () {
            return this.media.frame || 0;
        },

        getDuration: function () {
            return this.media.duration || this.pp.getConfig('duration') || 0;
        },

        getMaxPosition: function () {
            return this.media.maxpos || 0;
        },

        getPlaybackQuality: function () {
            return ($.inArray(this._quality, this.media.qualities) > -1) ? this._quality : 'default';
        },

        getInFullscreen: function () {
            return this.pp.getInFullscreen();
        },

        getKbPerSec: function () {
            return this._KbPerSec;
        },

        getState: function (isThis) {
            var result = (this._currentState == null) ? 'IDLE' : this._currentState;
            if (isThis != null) return (result == isThis.toUpperCase());
            return result;
        },
        
        getBufferState: function (isThis) {
            var result = (this._currentBufferState == null) ? 'NONE' : this._currentBufferState;
            if (isThis != null) return (result == isThis.toUpperCase());
            return result;
        },
        
        getSeekState: function (isThis) {
            var result = (this._currentSeekState == null) ? 'NONE' : this._currentSeekState;
            if (isThis != null) return (result == isThis.toUpperCase());
            return result;
        },          

        getSrc: function () {
            try {
                return this.mediaElement.get(0).currentSrc;
            } catch (e) {}
            try {
                return this.media.file[0].src;
            } catch (e) {}
            try {
                return this.getPoster();
            } catch (e) {}
            return null;
        },

        getModelName: function () {
            return this.modelId || null;
        },

        getHasGUI: function () {
            return (this.hasGUI && !this._isPoster);
        },

        getIsReady: function () {
            return this._isReady;
        },

        getPoster: function () {      
            var type = 'poster', 
                result = null,
                cfg = this.pp.getConfig(type),
                qual = 'default',
                quals = [];

            if (typeof cfg != 'object')
                return cfg;

            for (var i in cfg) {
                if (cfg[i].quality) {
                    quals.push(cfg[i].quality);
                }
            }

            qual = this.pp.getAppropriateQuality(quals);
     
            for (var j in cfg) {
                if (cfg[j].src != "" && cfg[j].src != undefined && (cfg[j].quality == qual || result == "" || qual == "default" || qual == "auto"))  {
                    result = cfg[j].src;                  
                }
            }
            return result;
        },

        getMediaElement: function () {
            return this.mediaElement || $('<video/>');
        },

        getMediaDimensions: function () {
            return {
                width: this.media.videoWidth || 0,
                height: this.media.videoHeight || 0
            };
        },

        getSource: function () {

            var resultSrc = [],
                offset = this.media.offset || this.media.position || false,
                ref = this,
                pseudoQuery = (this.pp.getConfig('streamType') == 'pseudo') ? this.pp.getConfig('startParameter') : false;

            $.each(this.media.file || [], function () {

                // set proper quality source
                if (ref._quality!=this.quality && ref._quality!==null)
                    return true;

                // nothing todo 
                if (!pseudoQuery || !offset) {
                    resultSrc.push(this);
                    return true;
                }

                // add offset_GET-parameter
                var u = $p.utils.parseUri(this.src),
                    src = u.protocol + '://' + u.host + u.path,
                    query = [];

                $.each(u.queryKey, function (key, value) {
                    if (key != pseudoQuery) {
                        query.push(key + "=" + value);
                    }
                });

                src += (query.length > 0) ? '?' + query.join('&') + "&" + pseudoQuery + "=" + offset : "?" + pseudoQuery + "=" + offset;
                this.src = src;

                resultSrc.push(this);
                return true;
            });

            if (resultSrc.length === 0)
                return this.media.file;
            else
                return resultSrc;
        },        

        /*******************************
         *      ELEMENT LISTENERS
         *******************************/
        timeListener: function (obj) {
            if (obj == null) return;            

            var position = parseFloat((obj.position || obj.currentTime || this.media.position || 0).toFixed(2)),
                duration = parseFloat((obj.duration || 0).toFixed(2));

            // bypass strange IE flash bug	
            if (isNaN(duration + position)) return;

            // duration has changed:	
            if (duration != 0 && (duration != this.media.duration && !this.isPseudoStream) || (this.isPseudoStream && this.media.duration == 0)) {

                this.media.duration = duration;
                this.sendUpdate('durationChange', duration);
            }
      
            // remember values & concider pseudo stream position offset, bypass some strange position hopping effects during pseudostream:
            if (position==this.media.position) return;
            
            if (this.isPseudoStream && Math.round(position * 100) / 100==Math.round(this.media.offset * 100) / 100) {
                this.media.position = this.media.offset;                
            } else {              
                this.media.position = this.media.offset + position;
            }
           
            this.media.maxpos = Math.max(this.media.maxpos || 0, this.media.position || 0);
            this.media.playProgress = parseFloat((this.media.position > 0 && this.media.duration > 0) ? this.media.position * 100 / this.media.duration : 0);
            this.media.frame = this.media.position * this.pp.getConfig('fps');
      
            this.sendUpdate('time', this.media.position);
            
            this.loadProgressUpdate();
        },

        loadProgressUpdate: function () {

            var me = this.mediaElement.get(0),
                progress = 0;
          
            if (this.media.duration===0) return;
            if (typeof me.buffered!=='object') return;
            if (me.buffered.length===0 &&  me.seekable.length===0) return;
            if (this.media.loadProgress==100) return;

            if (me.seekable && me.seekable.length > 0) {
                progress = Math.round(me.seekable.end(0) * 100 / this.media.duration);
            } else {
                progress = Math.round(me.buffered.end(me.buffered.length - 1) * 100) / this.media.duration;
            }

            if (this.media.loadProgress > progress) return;

            this.media.loadProgress = (this.allowRandomSeek === true) ? 100 : -1;
            this.media.loadProgress = (this.media.loadProgress < 100 || this.media.loadProgress === undefined) ? progress : 100;

            this.sendUpdate('progress', this.media.loadProgress);

        },

        progressListener: function (obj, evt) {

            // we prefer timeranges but keep catching "progress" events by default
            // for historical and compatibility reasons:	
            if (this.mediaElement instanceof jQuery) { // fix this - make sure all instances are jquery objects
                if (typeof this.mediaElement.get(0).buffered == 'object') {
                    if (this.mediaElement.get(0).buffered.length > 0) {
                        this.mediaElement.unbind('progress');
                        return;
                    }
                }
            }

            if (this._bandWidthTimer == null) {
                this._bandWidthTimer = (new Date()).getTime();
            }

            var current = 0,
                total = 0;

            try {
                if (!isNaN(evt.loaded / evt.total)) {
                    current = evt.loaded;
                    total = evt.total;
                } else if (evt.originalEvent && !isNaN(evt.originalEvent.loaded / evt.originalEvent.total)) {
                    current = evt.originalEvent.loaded;
                    total = evt.originalEvent.total;
                }
            } catch (e) {
                if (obj && !isNaN(obj.loaded / obj.total)) {
                    current = obj.loaded;
                    total = obj.total;
                }
            }

            var loadedPercent = (current > 0 && total > 0) ? current * 100 / total : 0;

            if (Math.round(loadedPercent) > Math.round(this.media.loadProgress)) {
                this._KbPerSec = ((current / 1024) / (((new Date()).getTime() - this._bandWidthTimer) / 1000));
            }

            loadedPercent = (this.media.loadProgress !== 100) ? loadedPercent : 100;
            loadedPercent = (this.allowRandomSeek === true) ? 100 : 5 * Math.round(loadedPercent / 5);

            if (this.media.loadProgress != loadedPercent) {
                this.media.loadProgress = loadedPercent;
                this.sendUpdate('progress', loadedPercent);
            }

            // Mac flash fix:
            if (this.media.loadProgress >= 100 && this.allowRandomSeek === false) {
                this._setBufferState('full');
            }
        },

        qualityChangeListener: function () {
            this.sendUpdate('qualityChange', this._quality);
        },

        endedListener: function (obj) {
            if (this.mediaElement === null) return;
            if (this.media.maxpos <= 0) return;
            if (this.getState() == 'STARTING') return;
            this._setState('completed');
        },

        waitingListener: function (event) {
            this._setBufferState('empty');
        },

        canplayListener: function (obj) {
            this._setBufferState('full');
        },

        canplaythroughListener: function (obj) {
            this._setBufferState('full');
        },

        suspendListener: function (obj) {
            this._setBufferState('full'); // hmmmm...
        },

        playingListener: function (obj) {
            this._setState('playing');
        },

        startListener: function (obj) {
            this.applyCommand('volume', this.pp.getConfig('volume'));
            if (!this.isPseudoStream) {
                this.setSeek(this.media.position || 0);
            }

            this._setState('playing');
        },

        pauseListener: function (obj) {
        	// prevent redundant event shortly before "completed"
            if (this.media.duration!=this.media.position) {
            	this._setState('paused');
            }
        },

        seekedListener: function (value) {          
            this._setSeekState('SEEKED', value || this.media.position);
        },

        volumeListener: function (obj) {
            this.sendUpdate('volume', this.getVolume());
        },

        flashReadyListener: function () {
            this._displayReady = true;
        },

        errorListener: function (event, obj) {},

        metaDataListener: function (obj) {
            try {
                this.media.videoWidth = obj.videoWidth;
                this.media.videoHeight = obj.videoHeight;
            } catch (e) {}
            this._scaleVideo();
        },

        applySrc: function () {},
        
        applyImage: function (url, destObj) {

            var imageObj = $('<img/>').hide(),
                currentImageObj = this.pp.getDC().find("." + this.pp.getMediaId() + "_image"); // select by class to workaround timing issues causing multiple <img> of the same ID being present in the DOM
                ref = this;

            $p.utils.blockSelection(imageObj);

            // empty URL... return placeholder
            if (url == null || url === false) {
                currentImageObj.remove();
                return $('<img/>').attr({
                    "id": this.pp.getMediaId() + "_image",
                    "src": $p.utils.imageDummy()
                });
            }

            // no changes
            if ($(currentImageObj[0]).attr('src')==url) {
                if ($p.utils.stretch(ref.pp.getConfig('imageScaling'), $(currentImageObj[0]), destObj.width(), destObj.height())) {
                	if (ref.pp.getConfig('preventAutoScaling')==true) return;
                    try {
                        ref.sendUpdate('scaled', {
                            realWidth: currentImageObj._originalDimensions.width,
                            realHeight: currentImageObj._originalDimensions.height,
                            displayWidth: ref.mediaElement.width(),
                            displayHeight: ref.mediaElement.height()
                        });
                    } catch (e) {}
                }
                return $(currentImageObj[0]);
            }

            imageObj.load(function (event) {
                var target = $(event.currentTarget);

                target.attr("data-od-width", target.get(0).naturalWidth);
                target.attr("data-od-height", target.get(0).naturalHeight);
                
                currentImageObj.remove();
            
                target.show();

                if ($p.utils.stretch(ref.pp.getConfig('imageScaling'), target, destObj.width(), destObj.height())) {
                	if (ref.pp.getConfig('preventAutoScaling')==true) return;
                    try {
                        ref.sendUpdate('scaled', {
                            realWidth: target._originalDimensions.width,
                            realHeight: target._originalDimensions.height,
                            displayWidth: ref.mediaElement.width(),
                            displayHeight: ref.mediaElement.height()
                        });
                    } catch (e) {}
                }
            });
            
            imageObj.error(function() {
                $(this).remove();
                currentImageObj.show();                
            })

            imageObj.attr('id', this.pp.getMediaId() + "_image");

            imageObj.removeData('od');
            
            imageObj.appendTo(destObj).attr({
                "alt": this.pp.getConfig('title') || ''
            }).css({
                position: 'absolute'
            }).addClass(this.pp.getMediaId() + "_image");            
            
            // IE<9 trap:
            imageObj.attr('src', url);
         
            return imageObj;
        },



        /* X-Browser flash embedd mess */
        createFlash: function (domOptions, destObj, shield) {
            this.mediaElement = $p.utils.embeddFlash(destObj.html(''), domOptions, shield, true);
            this._waitforPlayer();
        },

        /* we have to wait for the flash components to load and initialize */
        _waitforPlayer: function () {
            var ref = this,
                counter = 0;
                
            if (this._displayReady === true) {
                return;
            }

            this._setBufferState('empty');

            (function () {

                // this is the most fucked up FF bug sh*t ever:
                if (counter > 6 && ref._isFF()) {
                    counter = 0;
                    var dest = $(ref.mediaElement).parent(),
                        clone = $(ref.mediaElement).clone();
                    dest.html('').append(clone);
                    ref.mediaElement = clone;
                }

                dest = ref.mediaElement;
    
                if (ref.getState('ERROR')) {
                    return;
                }

                counter++;
                try {

                    if (dest === undefined) {
                        setTimeout(arguments.callee, 200);
                    } else if (dest.get(0)[ref.flashVerifyMethod] === undefined) {
                        setTimeout(arguments.callee, 200);
                    } else {
                        ref._setBufferState('full');
                        ref.flashReadyListener();
                        $('#' + $(ref.mediaElement).attr('id') + "_cc").css({
                            width: '100%',
                            height: '100%'
                        });
                    }

                } catch (e) {
                    setTimeout(arguments.callee, 200);
                }

            })();
        },

        _setState: function (state) {
            var ref = this;
                state = state.toUpperCase(),
                old = this._currentState;

            this._currentState = state.toUpperCase();                

            if (old != state && old != 'ERROR') {
                if (old == 'PAUSED' && state == 'PLAYING') {
                    this.sendUpdate('resume', this.media);
                    this._isPlaying = true;
                }

                if ((old== 'IDLE' || old == 'STARTING') && state == 'PLAYING') {                
                    this.sendUpdate('start', this.media);
                    this._isPlaying = true;
                }

                if (state == 'PAUSED')
                    this._isPlaying = false;

                if (state == 'ERROR') {
                    this.setPlay = this.setPause = function () {
                        ref.sendUpdate('start');
                    };
                }

                this.sendUpdate('state', this._currentState);
            }
        },

        _setBufferState: function (state) {
            if (this._currentBufferState != state.toUpperCase()) {
                this._currentBufferState = state.toUpperCase();
                this.sendUpdate('buffer', this._currentBufferState);
            }
        },
        
        _setSeekState: function (state, value) {
            if (this._currentSeekState != state.toUpperCase()) {
                this._currentSeekState = state.toUpperCase();
                this.sendUpdate('seek', this._currentSeekState, value);
            }
        },        

        _scaleVideo: function (promote) {
            var destContainer = this.pp.getMediaContainer();

            if (this.pp.getIsMobileClient()) return;
            if (this.pp.getConfig('preventAutoScaling')==true) return;
            
            try {
                var wid = destContainer.width(),
                    hei = destContainer.height(),
                    tw = this.media.videoWidth,
                    th = this.media.videoHeight;

                if (!this.mediaElement.attr("data-od-width")) this.mediaElement.attr("data-od-width", this.media.videoWidth);
    		if (!this.mediaElement.attr("data-od-height")) this.mediaElement.attr("data-od-height", this.media.videoHeight);                    

                // if ($p.utils.stretch(ref.pp.getConfig('imageScaling'), imageObj, destObj.width(), destObj.height())) {
                if ($p.utils.stretch(this.pp.getConfig('videoScaling'), this.mediaElement, wid, hei)) {
                    this.sendUpdate('scaled', {
                        realWidth: tw,
                        realHeight: th,
                        displayWidth: wid,
                        displayHeight: hei
                    });
                }
            } catch (e) {}
        },

        _isFF: function () {
            return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        }
    };
});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    modelId: 'NA',
    iLove: [
        {ext:'NaN', type:'none/none', platform: 'browser'}
    ],    
    hasGUI: true,
    
    applyMedia: function(destContainer) {
        var ref = this;

        destContainer.html('');
        this.displayReady();

        this.sendUpdate( 'error', (this.media.file[0].src!=null && this.media.errorCode===7) ? 5 : this.media.errorCode );
        
        if (!this.pp.getConfig('enableTestcard')) {
            window.location.href = this.media.file[0].src;      
        }
    }
});
});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://filenew.org/projekktor/
 *
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    
    modelId: 'PLAYLIST',
    
    iLove: [
        {ext:'json', type:'text/json', platform:'browser'},
        {ext:'jsonp', type:'text/jsonp', platform:'browser'},        
        {ext:'xml', type:'text/xml', platform:'browser'},
        {ext:'json', type:'application/json', platform:'browser'},
        {ext:'jsonp', type:'application/jsonp', platform:'browser'},        
        {ext:'xml', type:'application/xml', platform:'browser'}        
    ],
    
    applyMedia: function(destContainer) {
        this.displayReady();
    },
        
    setPlay: function() {
        this.sendUpdate('playlist', this.media);          
    }        
});
});

;/*
 * this file is part of:
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
 */
jQuery(function($) {
$p.newModel({

    modelId: 'OSMFVIDEO',
    replace: 'VIDEOFLASH',
   
    flashVersion: "10.2",
    flashVerifyMethod: 'addEventListener',
    
    iLove: [
        {ext:'flv', type:'video/flv', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'mp4', type:'video/mp4', platform:'flash', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'f4v', type:'video/mp4', platform:'flash', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'mov', type:'video/quicktime', platform:'flash', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'m4v', type:'video/mp4', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'f4m', type:'application/f4m+xml', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        // {ext:'m3u8', type:'application/mpegURL', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        // {ext:'m3u8', type:'application/x-mpegURL', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        // {ext:'m3u8', type:'application/vnd.apple.mpegurl', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'manifest', type:'application/vnd.ms-ss', platform:'flash', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']}
    ],

    hasGUI: false,    
    allowRandomSeek: false,
    isPseudoStream: false,
    streamType: 'http',
    
    availableQualities: {},
    
    _hardwareAcceleration: true,
    _isStream: false,
    _isDVR: false,
    _isMuted: false,
    _isStarted: false,
    _qualitySwitching: false,
    _isDynamicStream: false,
    _volume: 0,

    _eventMap: {
        //  mediaPlayerStateChange: "OSMF_playerStateChange", obsolete
        mediaPlayerCapabilityChange: "OSMF_PlayerCapabilityChange",
        durationChange: "OSMF_durationChange",
        currentTimeChange: "OSMF_currentTimeChange",
        loadStateChange: "OSMF_loadStateChange",
        bufferingChange: "OSMF_bufferingChange",
        bytesLoadedChange: "OSMF_bytesLoadedChange",
        playStateChange: "OSMF_playerStateChange",
        seekingChange: "OSMF_seekingChange",
        canPlayChange: "OSMF_seekingChange",
        isRecordingChange: "OSMF_isRecordingChange",
        complete: "endedListener",
        volumeChange: "volumeListener",
        mediaError: "errorListener",
        MBRItemChange: "OSMF_universal",
        isDynamicStreamChange: "OSMF_updateDynamicStream",
        autoSwitchChange: "OSMF_updateDynamicStream",
        switchingChange: "OSMF_updateDynamicStream",
        canSeekChange: "OSMF_canSeekChange"
    },
    
    _scalingMap: {
        none: 'none',
        fill: 'zoom',
        aspectratio: 'letterbox'
    },
    
    applyMedia: function(destContainer) {
        var ref = this,
            OSMFVars = this.pp.getConfig('OSMFVars'),
            sources = this.getSource();

        if (sources[0].config && sources[0].config) {
            OSMFVars = sources[0].config.OSMFVars;
        }
            
        window['projekktorOSMFReady'+this.pp.getId()] = function() {
            projekktor(ref.pp.getId()).playerModel._OSMFListener(arguments);
        };     

        destContainer
            .html('')
            .css({
                'width': '100%',
                'height': '100%',
                'position': 'absolute',
                'top': 0,
                'left': 0
            })

        var domOptions = {
            id: this.pp.getMediaId()+"_flash",
            name: this.pp.getMediaId()+"_flash",
            src: this.pp.getConfig('playerFlashMP4'),
            width: '100%',
            height: '100%',
            style: "position: absolute;",
            allowScriptAccess: "always",
            quality: "high", 
            menu: false,
            allowFullScreen: 'true',
            wmode: ($p.utils.ieVersion()) ? 'transparent' : 'opaque', // must be either transparent (ie) or opaque in order to allow HTML overlays
            SeamlessTabbing: 'false',
            bgcolor: '#000000',
            FlashVars: $.extend({
                // streamType: this.pp.getConfig('streamType', ''), // "dvr", //  "live" "recorded", "dvr"
                src: this.getSource()[0].src,
                scaleMode: this._scalingMap[this.pp.getConfig('videoScaling')],
                enableStageVideo: this._hardwareAcceleration,
                disableHardwareAcceleration: !this._hardwareAcceleration,
                javascriptCallbackFunction: 'window.projekktorOSMFReady'+this.pp.getId()               
            }, OSMFVars)
        };

        this.createFlash(domOptions, destContainer);
    },
    
    flashReadyListener: function() {},    

    // 
    removeListeners: function() {},
    
    loadProgressUpdate: function () {},
    
    // disable default addListener method
    addListeners: function() {},
        
    applySrc: function() {
        var ref = this,
            sources = this.getSource();

        if (this.mediaElement==null) {
            return;
        }
            
        this.mediaElement.get(0).setMediaResourceURL(sources[0].src);
        
        this.streamType = sources[0].streamType || this.pp.getConfig('streamType') || 'http';
        if (this.getState('PLAYING')) {
            this.setPlay();
            if (ref.isPseudoStream!==true && this.media.position>0) {
                this.setSeek(this.media.position);
            }
        }
        
        if(this.streamType=='pseudo') {
            this.isPseudoStream = true;
            this.allowRandomSeek = true;
            this.media.loadProgress = 100;
        }

        if (this.streamType.indexOf('live')>-1 ) {
            this.allowRandomSeek = true;
            this.media.loadProgress = 100;
        }
    }, 

    _OSMFListener: function() {    
        var event = arguments[0][1],
            value = arguments[0][2],
            ref = this;
 
        this.mediaElement = $('#' +  this.pp.getMediaId()+"_flash"); // IE 10 sucks

        switch(event) {
            case 'onJavaScriptBridgeCreated':
                if (this.mediaElement!==null && (this.getState('AWAKENING') || this.getState('STARTING'))) {                
                    $.each(this._eventMap, function(key, value){
                        ref.mediaElement.get(0).addEventListener(key, "projekktor('"+ref.pp.getId()+"').playerModel." + value);
                    });
                    this.applySrc();
                    this.displayReady();      
                }
                break;
            
            // ther is no public event-hook for this:
            case 'loadedmetadata':
                this.metaDataListener(value);
                break;
                
            case 'progress':
            break;
                this.progressListener({
                    loaded: value.buffered._end,
                    total: this.media.duration
                });
                break;                    
        }           
    },
    
    OSMF_universal: function() {},
    
    OSMF_isRecordingChange: function() {},
    
    OSMF_PlayerCapabilityChange: function(state) {},        
 
    OSMF_bytesLoadedChange: function() {
        var me = this.mediaElement.get(0),
            progress = 0;
            
        progress = me.getBytesLoaded() * 100 / me.getBytesTotal();

        if (this.media.loadProgress > progress) return;

        this.media.loadProgress = (this.allowRandomSeek === true) ? 100 : -1;
        this.media.loadProgress = (this.media.loadProgress < 100 || this.media.loadProgress === undefined) ? progress : 100;

        this.sendUpdate('progress', this.media.loadProgress);
    },
        
    OSMF_durationChange: function(value) {
        if (isNaN(value)) return;
        this.timeListener({position: this.media.position, duration: value || 0 });
        this.seekedListener();
    },
    
    OSMF_currentTimeChange: function(value) {
        if (this._isDVR) {
            this.sendUpdate('isLive', (value+20 >= this.media.duration)); // 20 => default dvr buffer of SMP
        }
        this.timeListener({position: value, duration: this.media.duration || 0 });
    },
    
    OSMF_seekingChange: function(value) {
        this.seekedListener(value);
    },
    
    OSMF_bufferingChange: function(state) {
        if (state===true) 
            this.waitingListener();
        else
            this.canplayListener();
    },    
    
    OSMF_loadStateChange: function(state) {
        switch (state) {
            case 'loading':        
                this.waitListener();
                break;
            case 'ready':
                if (this.getState('awakening')) {
                    // this.displayReady();
                }            
                if (this.getState('starting')) {
                    this.setPlay();
                }
                if (this.mediaElement.get(0).getStreamType().indexOf('dvr')>-1) {
                    this.allowRandomSeek = true;
                    this.media.loadProgress = 100;
                }                        
                break;
            case 'loadError':
                // causes false positive in case of dynamically loaded plugins
                // this.errorListener(80);                
                break;            
        }
    },
    
    /* catching playStateChange and playerStateChange and playerStateChange aaaand... and playerStateChange */
    OSMF_playerStateChange: function(state) {
        var ref = this;        
        // getIsDVR & getIsDVRLive seem to be broken - workaround:
        if (!this._isDVR && this.mediaElement.get(0).getStreamType()=='dvr') {
            this._isDVR = true;
            this.sendUpdate('streamTypeChange', 'dvr');
        }

        switch(state) {
            case 'playing':
                this.playingListener();
                break;
            case 'paused':            
                this.pauseListener();
                if (this._isDVR) {
                    // simulate sliding time window:
                    (function() {
                        if (ref.getState('PAUSED')) {
                            if (ref.media.position>=0.5) {
                                ref.timeListener({position: ref.media.position-0.5, duration: ref.media.duration || 0 });
                                setTimeout(arguments.callee, 500);
                            }
                        }
                    })();
                }
                break;
            case 'stopped':
                if (!this.getSeekState('SEEKING')) {
                    this.endedListener();
                }
                break;                
        }
    },    
    
    OSMF_updateDynamicStream: function() {
        var dynamicStreams = this.mediaElement.get(0).getStreamItems(),
            name = '',
            result = [];
            // switchMode = this.mediaElement.get(0).getAutoDynamicStreamSwitch() ? "Auto" : "Manual";

        for (var index in dynamicStreams) {
            if (dynamicStreams.hasOwnProperty(index) && dynamicStreams[index].bitrate!==undefined) {
                name = dynamicStreams[index].width + "x" + dynamicStreams[index].height;
                if ( this.pp.getConfig('OSMFQualityMap') &&  this.pp.getConfig('OSMFQualityMap')[name] ) {
                    this.availableQualities[ this.pp.getConfig('OSMFQualityMap')[name] ] = index;
                }
                
            }
        }

        $p.utils.log( dynamicStreams );

        $.each( this.availableQualities, function(key, val) {
            result.push(key);
        });
        
        result.push('auto');
     
        this._isDynamicStream = true; // important: set this before sending the update
        this.sendUpdate('availableQualitiesChange', result);        
    },
    
    OSMF_canSeekChange: function(enabled) {
        return;
        if(enabled){
            this.allowRandomSeek = true;        
            this.media.loadProgress = 100;        
        }
        else {
            this.allowRandomSeek = false;
        }
    },

    /* todo */
    switchDynamicStreamIndex: function(index) {
        this.allowRandomSeek = true;        
        this.media.loadProgress = 100;              
        if (index==-1) {
            this.mediaElement.get(0).setAutoDynamicStreamSwitch(true);	
        } else {
            if (this.mediaElement.get(0).getAutoDynamicStreamSwitch()) {
                this.mediaElement.get(0).setAutoDynamicStreamSwitch(false);	
            }
            this.mediaElement.get(0).switchDynamicStreamIndex(index);
        }
    },
    
    errorListener: function() {
        /* todo OSMF MediaErrorCodes mapping http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/org/osmf/events/MediaErrorCodes.html */
        switch (arguments[0]) {
            case 15:
                this.sendUpdate('error', 5);
                break;
            case 16:
                this.sendUpdate('error', 80);
                break;                    
            case 80:
            case 7:
                this.sendUpdate('error', 80);
                break;                
            default:
                // this.sendUpdate('error', 0);
                break;
        }
    },
    
    detachMedia: function() {        
        try{this.mediaElement.get(0).remove();} catch(e){}           
    },
    
    volumeListener: function (volume) {
        this._volume = volume;      
    },    
    
    endedListener: function (obj) {
        if (this.mediaElement === null) return;
        if (this.media.maxpos <= 0) return;
        if (this.getState('STARTING')) return;
        if (this._qualitySwitching===true) return;
        this._setState('completed');
    },    
    
    /************************************************
     * setters
     ************************************************/
    setSeek: function(newpos) {
        if (this.isPseudoStream) {
            this._setSeekState('seeking');
            this.media.offset = newpos;
            this.applySrc();
            return;
        }
        try {
            if (newpos==-1) {
                newpos = this.getDuration();
            }        
            this.mediaElement.get(0).seek(newpos);
        } catch(e) {console.log(e)}
    },
    
    setVolume: function(newvol) {
        if (this.mediaElement===null) 
            this.volumeListener(newvol);
        else
            this.mediaElement.get(0).setVolume(newvol);
    },    
    
    setPause: function(event) {
        this.mediaElement.get(0).pause();
    },      
    
    setPlay: function(event) {     
        this.mediaElement.get(0).play2();
    },
    

    setQuality: function (quality) {
        if (this._quality == quality) return;
        this._quality = quality;
        
        if (this._isDynamicStream === true) {
            this.switchDynamicStreamIndex( (quality=='auto') ? -1 : this.availableQualities[quality] );
            return;
        }
        
        this._qualitySwitching = true;
        this.applySrc();
        this._qualitySwitching = false;
        this.qualityChangeListener();
    },    

    /************************************************
     * getters
     ************************************************/
    getVolume: function() {
        if (this._isMuted===true)
            return 0;
        
        if (this.mediaElement===null)
            return this.media.volume;
    
        return this._volume;
    },
    
    getSrc: function () {
        try {
            return this.mediaElement.get(0).getCurrentSrc();
        } catch(e) {return null;}
    },
    
    getQuality: function () {
        return this._quality;
    }    
    
    /************************************************
     * disablers
     ************************************************/    
    // _scaleVideo: function(){}
    
});

$p.newModel({    

    modelId: 'OSMFVIDEONA',
    iLove: [
        {ext:'flv', type:'video/flv', platform:'flashna', fixed: true, streamType:['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'mp4', type:'video/mp4', platform:'flashna', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'f4v', type:'video/mp4', platform:'flashna', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'mov', type:'video/quicktime', platform:'flashna', streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'m4v', type:'video/mp4', platform:'flashna', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']},
        {ext:'f4m', type:'application/f4m+xml', platform:'flashna', fixed: true, streamType: ['http', 'httpVideo', 'pseudo', 'rtmp', 'httpVideoLive']}   
    ],    
    _hardwareAcceleration: false
}, 'OSMFVIDEO');

/*
 
$p.newModel({    

    modelId: 'OSMFAUDIO',
    replace: 'AUDIOFLASH',
    
    hasGUI: false,
    iLove: [
        {ext:'mp3', type:'audio/mp3', platform:'flash', streamType: ['*']},
        {ext:'m4a', type:'audio/mp4', platform:'flash', streamType: ['*']},
        {ext:'m4a', type:'audio/mpeg', platform:'flash', streamType: ['*']}    
    ],
    
    applyMedia: function(destContainer) {
        var ref = this,
            OSMFVars = this.pp.getConfig('OSMFVars'),
            sources = this.getSource();

        if (sources[0].config && sources[0].config) {
            OSMFVars = sources[0].config.OSMFVars;
        }
        
        $p.utils.blockSelection(destContainer);        

        // create image element
        this.imageElement = this.applyImage(this.getPoster('cover') || this.getPoster('poster'), destContainer);
            
        var flashContainer = $('#'+this.pp.getMediaId()+'_flash_container');
        
        if (flashContainer.length===0) {
            flashContainer = $(document.createElement('div'))
            .css({width: '1px', height: '1px'})
            .attr('id', this.pp.getMediaId()+"_flash_container")
            .prependTo( this.pp.getDC() );        
        }
        
        window['projekktorOSMFReady'+this.pp.getId()] = function() {
            projekktor(ref.pp.getId()).playerModel._OSMFListener(arguments);
        };
            
        
        var domOptions = {
            id: this.pp.getMediaId()+"_flash",
            name: this.pp.getMediaId()+"_flash",
            src: this.pp.getConfig('playerFlashMP4'),
            width: '100%',
            height: '100%',
            allowScriptAccess:"always",
            quality:"height",
            menu: false,
            allowFullScreen: 'true',
            wmode: 'opaque',
            seamlesstabbing: 'false',
            bgcolor: '#ccc',
            FlashVars: $.extend({      
                javascriptCallbackFunction: 'window.projekktorOSMFReady'+this.pp.getId()               
            }, OSMFVars)
            };

        this.createFlash(domOptions, flashContainer, false); 
    }
    
}, 'OSMFVIDEO');
*/
});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    
    modelId: 'VIDEO',
    androidVersion: "2",
    iosVersion: "3",
    nativeVersion: "1",
    iLove: [
        {ext:'mp4', type:'video/mp4', platform:['ios', 'android', 'native'], streamType: ['http', 'pseudo', 'httpVideo'], fixed: 'maybe'},
        {ext:'m4v', type:'video/mp4', platform:['ios', 'android', 'native'], streamType: ['http', 'pseudo', 'httpVideo'], fixed: 'maybe'},        
        {ext:'ogv', type:'video/ogg', platform:'native', streamType: ['http', 'httpVideo']},
        {ext:'webm',type:'video/webm', platform:'native', streamType: ['http', 'httpVideo']},
        {ext:'ogg', type:'video/ogg', platform:'native', streamType: ['http', 'httpVideo']},
        {ext:'anx', type:'video/ogg', platform:'native', streamType: ['http', 'httpVideo']}
    ],
    
    _eventMap: {
        pause:          "pauseListener",
        play:           "playingListener",
        volumechange:   "volumeListener",
        progress:       "progressListener",
        timeupdate:     "timeListener",
        ended:          "_ended",
        waiting:        "waitingListener",
        canplaythrough: "canplayListener",
        canplay:        "canplayListener",
        error:          "errorListener",
        suspend:        "suspendListener",
        seeked:         "seekedListener",
        loadedmetadata: "metaDataListener",
        loadstart:      null        
    },    
    
    isGingerbread: false,
    isAndroid: false, 
    allowRandomSeek: false,
    videoWidth: 0,
    videoHeight: 0,
    wasPersistent: true,
    isPseudoStream: false,
    
    init: function() {
        var ua = navigator.userAgent; // TODO: global platform and feature detection
        if( ua.indexOf("Android") >= 0 ) {
            this.isAndroid = true;
          if (parseFloat(ua.slice(ua.indexOf("Android")+8)) < 3) {
            this.isGingerbread = true;
          }
        }
        
        this.ready();    
    },
        
    applyMedia: function(destContainer) { 
        
        if ($('#'+this.pp.getMediaId()+"_html").length === 0) {
            
            this.wasPersistent = false;
            
            destContainer.html('').append(
                $('<video/>')
                .attr({
                    "id": this.pp.getMediaId()+"_html",         
                    "poster": $p.utils.imageDummy(),
                    "loop": false,
                    "autoplay": false,
                    "preload": "none",
                    "x-webkit-airplay": "allow"
                }).prop({
                    controls: false,
                    volume: this.getVolume()
                }).css({
                    'width': '100%',
                    'height': '100%',
                    'position': 'absolute',
                    'top': 0,
                    'left': 0
                })
            );
        }

        this.mediaElement = $('#'+this.pp.getMediaId()+"_html");

        if ( this.pp.getConfig('tracks') && this.pp.getIsMobileClient()) {
	        this.mediaElement.append(
	        		$('<track/>')
	        			.attr({
	        				label: "deutsche Untertitel",
	    					kind: "subtitles",
							srclang: "de",
							src: this.pp.getConfig('tracks')[0].src.replace('.html', '-vtt.vtt')
	        			})
	        			.prop('default', true)
	        			.bind("load", function() { 
	        				 ref.sendUpdate('tracks', "on");    
	        			}) 	        			

			);
        }	        			

        this.applySrc();
    },
        
    applySrc: function() {
        var ref = this,
            media = this.getSource(),
            wasAwakening = ref.getState('AWAKENING');
        
        /* 
         * Using 'src' attribute directly in <video> element is safer than using it inside <source> elements.
         * Some of the mobile browsers (e.g. Samsung Galaxy S2, S3 Android native browsers <= 4.2.2)
         * will not initialize video playback with <source> elements at all, displaying only gray screen instead.
         * HLS stream on iOS and Android will not work if its URL is defined through <source> 'src' attribute
         * instead of <video> 'src' attribute.
         */
        this.mediaElement.attr('src', media[0].src);
        
        /* Some Android Gingerbread devices will not play video when
         * the <video> 'type' attribute is set explicitly 
         */
        if (!this.isGingerbread) {
            this.mediaElement.attr('type', media[0].originalType );
        }
        
        /*
         * Some of the mobile browsers (e.g. Android native browsers <= 4.2.x, Opera Mobile) 
         * have by default play/pause actions bound directly to click/mousedown events of <video>.
         * That causes conflict with display plugin play/pause actions, which makes it impossible 
         * to pause the currently playing video. Precisely _setState is called twice: 
         * first by pauseListener triggered by <video> default click/mousedown action, 
         * secondly by display plugin actions bound to mousedown events. The result is that 
         * the video is paused by native <video> events and then immediately started by display 
         * plugin that uses the setPlayPause function. setPlayPause function toggles between 
         * "PAUSED" and "PLAYING" states, so when a video is being played, the function causes its pausing.
         */
        this.mediaElement.bind('mousedown.projekktorqs'+this.pp.getId(), this.disableDefaultVideoElementActions);
        this.mediaElement.bind('click.projekktorqs'+this.pp.getId(), this.disableDefaultVideoElementActions);
        
        var func = function(){
            
            ref.mediaElement.unbind('loadstart.projekktorqs'+ref.pp.getId());
            ref.mediaElement.unbind('loadeddata.projekktorqs'+ref.pp.getId());
            ref.mediaElement.unbind('canplay.projekktorqs'+ref.pp.getId());
            
            ref.addListeners('error');
            ref.addListeners('play');
            ref.addListeners('canplay');
            
            ref.mediaElement = $('#'+ref.pp.getMediaId()+"_html");            

            if (wasAwakening) {
                ref.displayReady();                
                return;
            }

            if (ref.getSeekState('SEEKING')) {
                if (ref._isPlaying){
                    ref.setPlay();
                }
                
                ref.seekedListener();
                return;
            }
       
            if (!ref.isPseudoStream) {
                ref.setSeek(ref.media.position || 0);
            }

            if (ref._isPlaying){
                ref.setPlay();
            }
            
        };

        this.mediaElement.bind('loadstart.projekktorqs'+this.pp.getId(), func);
        this.mediaElement.bind('loadeddata.projekktorqs'+this.pp.getId(), func);
        this.mediaElement.bind('canplay.projekktorqs'+this.pp.getId(), func);
        
        this.mediaElement[0].load(); // important especially for iOS devices
        
        // F*CK!!!!
        if (this.isGingerbread)
        {
            func();
        }
        
    },
    
    detachMedia: function() {
        try {
            this.removeListener('error');
            this.removeListener('play');
            this.removeListener('canplay');
            this.mediaElement.unbind('mousedown.projekktorqs'+this.pp.getId()); 
            this.mediaElement.unbind('click.projekktorqs'+this.pp.getId());
            this.mediaElement[0].pause();
            this.mediaElement.attr('src','');
            this.mediaElement[0].load();
        } catch(e){}
    },
   
    /*****************************************
     * Handle Events
     ****************************************/ 
    addListeners: function(evtId, subId) {
        if (this.mediaElement==null) return;
        var id = (subId!=null) ? '.projekktor'+subId+this.pp.getId() : '.projekktor'+this.pp.getId(),
            ref = this,
            evt = (evtId==null) ? '*' : evtId;

        $.each(this._eventMap, function(key, value){
            if ((key==evt || evt=='*') && value!=null) {
                ref.mediaElement.bind(key + id, function(evt) { ref[value](this, evt); });
            }
        });       
    },

    removeListener: function(evt, subId) {        
        if (this.mediaElement==null) return;
        
        var id = (subId!=null) ? '.projekktor'+subId+this.pp.getId() : '.projekktor'+this.pp.getId(),
            ref = this;

        $.each(this._eventMap, function(key, value){
            if (key==evt) {
                ref.mediaElement.unbind(key + id);
            }
        });              
    },
    
    _ended: function() {
        var dur = this.mediaElement[0].duration, // strange android behavior workaround
            complete = (Math.round(this.media.position) === Math.round(dur)),
            fixedEnd = ( (dur-this.media.maxpos) < 2 ) && (this.media.position===0) || false;
            
        if (complete || fixedEnd || this.isPseudoStream) {                   
            this.endedListener(this);
        } else {
            this.pauseListener(this);
        }
    },
    
    playingListener: function(obj) {
        var ref = this;
        if (!this.isGingerbread) {
            (function() {
                try{
                    if (ref.getDuration()===0) {
                        if(ref.mediaElement.get(0).currentSrc!=='' && ref.mediaElement.get(0).networkState==ref.mediaElement.get(0).NETWORK_NO_SOURCE) {
                            ref.sendUpdate('error', 80);
                            return;
                        }
                        setTimeout(arguments.callee, 500);
                        return;
                    }
                } catch(e) {}
            })();
        }
        this._setState('playing'); 
    },

    errorListener: function(obj, evt) {
        try {
            switch (evt.target.error.code) {
                case evt.target.error.MEDIA_ERR_ABORTED:
                    this.sendUpdate('error', 1);
                    break;
                case evt.target.error.MEDIA_ERR_NETWORK:
                    this.sendUpdate('error', 2);        
                    break;
                case evt.target.error.MEDIA_ERR_DECODE:
                    this.sendUpdate('error', 3);        
                    break;
                case evt.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    this.sendUpdate('error', 4);        
                    break;
                default:
                    this.sendUpdate('error', 5);        
                    break;
            }
        } catch(e) {}
    },
    
    canplayListener: function(obj) {
        var ref = this;
        // pseudo streaming
        if (this.pp.getConfig('streamType')=='pseudo') {            
            $.each(this.media.file, function() {
                if (this.src.indexOf(ref.mediaElement[0].currentSrc)>-1) {
                    if (this.type=='video/mp4') {
                        ref.isPseudoStream = true;
                        ref.allowRandomSeek = true;
                        ref.media.loadProgress = 100;
                        return false;
                    }
                }
                return true;
            });
        }        
        this._setBufferState('full');
    },
    
     disableDefaultVideoElementActions: function(evt){
            evt.preventDefault();
            evt.stopPropagation();
    }, 
    
    /*****************************************
     * Setters
     ****************************************/     
    setPlay: function() {
        try{this.mediaElement[0].play();} catch(e){}
    },
    
    setPause: function() {
        try {this.mediaElement[0].pause();} catch(e){}
    },   
            
    setVolume: function(volume) {
        this._volume = volume;
            try {
            this.mediaElement.prop('volume', volume);
        } catch(e){
            return false;
        }
        return volume;
    }, 
     
    setSeek: function(newpos) {
        var ref = this;
        
        if (this.isPseudoStream) {
            this.media.position = 0;
            this.media.offset = newpos;
            this.applySrc();
            return;
        }

        // IE9 somtimes raises INDEX_SIZE_ERR
        (function() {
            try {
                ref.mediaElement[0].currentTime = newpos;
                ref.timeListener({position: newpos});
            } catch(e){
                if (ref.mediaElement!=null) {
                    setTimeout(arguments.callee,100);    
                }
            }
        
        })();
    }
    
});

$p.newModel({
    
    modelId: 'AUDIO',
    
    iLove: [
        {ext:'ogg', type:'audio/ogg', platform:'native', streamType: ['http', 'httpAudio']},
        {ext:'oga', type:'audio/ogg', platform:'native', streamType: ['http', 'httpAudio']},
        {ext:'mp3', type:'audio/mp3', platform:['ios', 'android', 'native'], streamType: ['http', 'httpAudio', 'httpAudioLive']},
        {ext:'mp3', type:'audio/mpeg', platform:['ios', 'android', 'native'], streamType: ['http', 'httpAudio', 'httpAudioLive']}        
    ],
    
    imageElement: {},
    
    applyMedia: function(destContainer) {   

        $p.utils.blockSelection(destContainer);
    
        if ($('#'+this.pp.getMediaId()+"_html").length===0) {
            this.wasPersistent = false;
            destContainer.append(
                $((this.isGingerbread) ? '<video/>' : '<audio/>')
                .attr({
                    "id": this.pp.getMediaId()+"_html",         
                    "poster": $p.utils.imageDummy(),
                    "loop": false,
                    "autoplay": false,
                    "preload": "none",
                    "x-webkit-airplay": "allow"
                }).prop({
                    controls: false,
                    volume: this.getVolume()
                }).css({
                    'width': '1px',
                    'height': '1px',
                    'position': 'absolute',
                    'top': 0,
                    'left': 0
                })
            );
        }
        // create cover image
        this.imageElement = this.applyImage(this.getPoster('cover') || this.getPoster('poster'), destContainer);
        this.imageElement.css({border: '0px'});
        
        this.mediaElement = $('#'+this.pp.getMediaId()+"_html");
        this.applySrc();        
    },    
    
    setPosterLive: function() {
        if (this.imageElement.parent) {
            var dest = this.imageElement.parent(),
            ref = this;

            if (this.imageElement.attr('src') == this.getPoster('cover') || this.getPoster('poster'))
                return;
            
            this.imageElement.fadeOut('fast', function() {
                $(this).remove();
                ref.imageElement = ref.applyImage(ref.getPoster('cover') || ref.getPoster('poster'), dest );
            });
        }
    }
    
}, 'VIDEO');

});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    
    modelId: 'VIDEODASH',
    androidVersion: "5",
    iosVersion: "3",
    nativeVersion: "1",
    iLove: [
        {ext:'mpd', type:'application/dash+xml', platform:['ios', 'android', 'native', 'browser'], streamType: ['http', 'pseudo', 'httpVideo', 'httpVideoLive']}
    ],
        
    applySrc: function() {
        var ref = this,
            media = this.getSource(),
            wasAwakening = ref.getState('AWAKENING'),
            src = "/common/mediaplayer/js/lib/dash-1.4.min.js";
  
        /* DASH 2.0
        var dashplayer = dashjs.MediaPlayer().create();
        dashplayer.getDebug().setLogToBrowserConsole(true);
        dashplayer.initialize( $('#'+this.pp.getMediaId()+"_html").get(0), media[0].src, false );        
        */ 
        
        if (wasAwakening) {
        	$.ajax({
    		    type: "GET",
    		    url: src,
    		    dataType: "script",
    		    error: function (XMLHttpRequest, textStatus, errorThrown) {
    		    	 ref.displayReady();          
    		    },
    		    timeout: 5000,		   
    		    cache: true,					   
    		    success:function(){
    		    	var context = new Dash.di.DashContext(),
    	            	player = new MediaPlayer(context),
    	            	video = document.querySelector("#videoPlayer");

    		    	
    		        var func = function(){
    		            
    		            ref.mediaElement.unbind('loadstart.projekktorqs'+ref.pp.getId());
    		            ref.mediaElement.unbind('loadeddata.projekktorqs'+ref.pp.getId());
    		            ref.mediaElement.unbind('canplay.projekktorqs'+ref.pp.getId());
    		            
    		            ref.addListeners('error');
    		            ref.addListeners('play');
    		            ref.addListeners('canplay');
    		            
    		            ref.mediaElement = $('#'+ref.pp.getMediaId()+"_html");            

    		            if (wasAwakening) {
    		                ref.displayReady();                
    		                return;
    		            }

    		            if (ref.getSeekState('SEEKING')) {
    		                if (ref._isPlaying){
    		                    ref.setPlay();
    		                }
    		                
    		                ref.seekedListener();
    		                return;
    		            }

    		            if (ref._isPlaying){
    		                ref.setPlay();
    		            }
    		            
    		        };

    		        ref.mediaElement.bind('loadstart.projekktorqs'+ref.pp.getId(), func);
    		        ref.mediaElement.bind('loadeddata.projekktorqs'+ref.pp.getId(), func);
    		        ref.mediaElement.bind('canplay.projekktorqs'+ref.pp.getId(), func);
    		        
    		        player.startup();
    		        player.getDebug().setLogToBrowserConsole(false);
    		        player.attachView( $('#'+ref.pp.getMediaId()+"_html").get(0) );
    		        player.attachSource(media[0].src);
    		        
    		    }
    		});          
            return;
        }        
                
        
        this.mediaElement.bind('mousedown.projekktorqs'+this.pp.getId(), this.disableDefaultVideoElementActions);
        this.mediaElement.bind('click.projekktorqs'+this.pp.getId(), this.disableDefaultVideoElementActions);
        

        ref.displayReady();          

        

        
    }
    
}, 'VIDEO');

});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2010, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    
    modelId: 'VIDEOVLC',
    vlcVersion: "2.0.6.0",
    iLove: [],
    
    _eventMap: {
        MediaPlayerPaused: "pauseListener",
        MediaPlayerPlaying: "playingListener",
        MediaPlayerTimeChanged: "_timeListener",
        MediaPlayerEndReached: "endedListener",
        MediaPlayerBuffering: "waitingListener",
        MediaPlayerEncounteredError: "errorListener",
        MediaPlayerSeekableChanged: 'seekableListener'
        // volumechange:   "volumeListener" - not supported
        // progress:       "progressListener", - not supported        
        // suspend:        "suspendListener", - not supported
        // seeked:         "seekedListener", - not supported
        // loadstart:      null - not supported
    },    
    
    allowRandomSeek: false,
    videoWidth: 0,
    videoHeight: 0,
    isPseudoStream: false,
    
    setiLove: function() {
        var model = this;
        if (navigator.plugins && (navigator.plugins.length > 0)) {
            for(var i=0;i<navigator.plugins.length;++i) {
                if (navigator.plugins[i].name.indexOf("VLC")>-1) {               
                    for (var j=0; j<navigator.plugins[i].length; j++) {
                        var ref = navigator.plugins[i][j];
                        if (ref.suffixes!=null && ref.type!=null) {
                            $.each(ref.suffixes.split(','), function(key, value) {
                                model.iLove.push( {ext:value, type: ref.type.replace(/x-/, ''), platform:['vlc'], streamType: ['rtsp', 'http', 'pseudo', 'httpVideo', 'multipart']} );
                            })
                        }
                    }
                    break;
                }
            }
        }
    },
    
    applyMedia: function(destContainer) {
        destContainer.html('').append(
            $('<embed/>')
                .attr({
                    "id": this.pp.getMediaId()+"_vlc",
                    "type": 'application/x-vlc-plugin',
                    "pluginspage": 'http://www.videolan.org',
                    // "version": 'VideoLAN.VLCPlugin.1',
                    "width": '100%',
                    "height": '100%',
                    "events": true,
                    "controls": false,
                    "toolbar": false,
                    "windowless": true,
                    "allowfullscreen": true,
                    "autoplay": false
                }).css({
                    'position': 'absolute',
                    'top': 0,
                    'left': 0
                })
        );
/*
        destContainer.append(
            $('<div/>').attr('id', this.pp.getMediaId()+"_vlc_cc" )
            .css({
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255,0,0,0.1)',
                opacity: '0.1',
                filter: 'alpha(opacity = 0.1)',
                position: 'absolute',
                top: 0,
                left: 0
            })
        )        
  */
  
        this.mediaElement = $('#'+this.pp.getMediaId()+"_vlc");
        this.applySrc();
    },
    
    applySrc: function() {

        var ref = this,
            sources = this.getSource();

        this.mediaElement.get(0).playlist.add(sources[0].src, 'item 1');
        
        if (this.getState('PLAYING')) {
            this.setPlay();
            if (ref.isPseudoStream!==true)
                this.setSeek(this.media.position || 0);
        } else {
            this.displayReady();
        }
    },
    
    detachMedia: function() {
        try {
            this.mediaElement.get(0).playlist.stop();
            this.mediaElement.html('');
        } catch(e){}
    },
        

    
    /*****************************************
     * Handle Events
     ****************************************/ 
    addListeners: function() {
        var ref = this;

        $.each(this._eventMap, function(event, value){
            try {
                if (ref.mediaElement.get(0).attachEvent) {
                    // Microsoft
                    ref.mediaElement.get(0).attachEvent (event, function(evt) {ref[value](this, evt);});
                } else if ( ref.mediaElement.get(0).addEventListener) {
                    // Mozilla: DOM level 2            
                    ref.mediaElement.get(0).addEventListener (event, function(evt) {ref[value](this, evt);}, false);
                } else {            
                    // DOM level 0            
                    ref.mediaElement.get(0)["on" + event] = function(evt) {ref[value](this, evt);};
                }
            } catch(e){}
        });

    },

    removeListener: function(evt, subId) {        
        if (this.mediaElement==null) {
            return;
        }
        var id = (subId!=null) ? '.projekktor'+subId+this.pp.getId() : '.projekktor'+this.pp.getId(),
            ref = this;

        $.each(this._eventMap, function(key, value){
            if (key==evt) {
                ref.mediaElement.unbind(key + id);
            }
        });              
    },
    
    _timeListener: function(obj) {
        this.timeListener({
            position: this.mediaElement.get(0).input.time / 1000,
            duration: this.mediaElement.get(0).input.length / 1000
        });
    },
    
    seekableListener: function() {
        this.allowRandomSeek = true;
        this.media.loadProgress = 100;
    },
    
    errorListener: function(obj, evt) {
        try {
            switch (event.target.error.code) {
                case event.target.error.MEDIA_ERR_ABORTED:
                this.sendUpdate('error', 1);
                break;
            case event.target.error.MEDIA_ERR_NETWORK:
                this.sendUpdate('error', 2);
                break;
            case event.target.error.MEDIA_ERR_DECODE:
                this.sendUpdate('error', 3);
                break;
            case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                this.sendUpdate('error', 4);
                break;
            default:
                this.sendUpdate('error', 5);
                break;
            }
        } catch(e) {}
    },
      

    /*****************************************
     * Setters
     ****************************************/     
    setPlay: function() {
        this.mediaElement.get(0).playlist.play();
    },
    
    setPause: function() {
        this.mediaElement.get(0).playlist.pause();
    },   
            
    setVolume: function(volume) {
        this._volume = volume;
        this.mediaElement.get(0).audio.volume = volume*100;
        // missing volume event workaround
        this.volumeListener(volume);
    }, 
     
    setSeek: function(newpos) {
        this.mediaElement.get(0).input.position = newpos / this.media.duration;
        // missing "seeked" event workaround
        this._setSeekState('seeked', newpos);   
    },    

    setFullscreen: function() {
        // windowless:true rescaling issue workaround
        if (this.mediaElement) {
        pos = this.mediaElement.get(0).input.position;
        this.mediaElement.get(0).playlist.stop();
        this.setPlay();
        this.mediaElement.get(0).input.position = pos;
        if (this.getState('PAUSED'))
            this.setPause();
        }
    },
    
    setResize: function() {
        this._scaleVideo(false);
        if (this.mediaElement) {
            // windowless:true rescaling issue workaround
            pos = this.mediaElement.get(0).input.position;
            this.mediaElement.get(0).playlist.stop();
            this.setPlay();
            this.mediaElement.get(0).input.position = pos;
            if (this.getState('PAUSED'))
                this.setPause();
        }
    }    
    
});
});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://www.projekktor.com
 *
 * Copyright 2014, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
    
$p.newModel({    
    modelId: 'VIDEOHLS',    
    androidVersion: 4,
    iosVersion: 3,    
    iLove: [
        {ext:'m3u8', type:'application/mpegURL', platform: ['ios', 'android'], streamType: ['http','httpVideo', 'httpVideoLive']},
        {ext:'m3u', type:'application/mpegURL', platform: ['ios', 'android'], streamType: ['http', 'httpVideo', 'httpVideoLive']},
        {ext:'m3u8', type:'application/vnd.apple.mpegURL', platform: ['ios', 'android'], streamType: ['http','httpVideo', 'httpVideoLive']},
        {ext:'m3u', type:'application/vnd.apple.mpegURL', platform: ['ios', 'android'], streamType: ['http', 'httpVideo', 'httpVideoLive']},             
        {ext:'m3u8', type:'application/x-mpegURL', platform: ['ios', 'android'], streamType: ['http','httpVideo', 'httpVideoLive']},
        {ext:'m3u', type:'application/x-mpegURL', platform: ['ios', 'android'], streamType: ['http', 'httpVideo', 'httpVideoLive']}    
    ]
    
}, 'VIDEO');

$p.newModel({    
    modelId: 'AUDIOHLS',    
    androidVersion: 4,
    iosVersion: 3,
    iLove: [
        {ext:'m3u8', type:'application/mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'application/mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},
        {ext:'m3u8', type:'application/vnd.apple.mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'application/vnd.apple.mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},             
        {ext:'m3u8', type:'application/x-mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'application/x-mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},    
        {ext:'m3u8', type:'audio/mpegURL', platform: ['ios', 'android'], streamType: ['http','httpAudio', 'httpAudioLive']},
        {ext:'m3u', type:'audio/mpegURL', platform: ['ios', 'android'], streamType: ['http', 'httpAudio', 'httpAudioLive']}
    ]
    
}, 'AUDIO');

});
;/*
 * this file is part of: 
 * projekktor zwei
 * http://filenew.org/projekktor/
 *
 * Copyright 2010, 2011, Sascha Kluger, Spinning Airwhale Media, http://www.spinningairwhale.com
 * under GNU General Public License
 * http://www.filenew.org/projekktor/license/
*/
jQuery(function($) {
$p.newModel({
    
    browserVersion: "1",
    modelId: 'IMAGE',
    iLove: [
        {ext:'jpg', type:'image/jpeg', platform:'browser', streamType: ['http']},
        {ext:'gif', type:'image/gif', platform:'browser', streamType: ['http']},
        {ext:'png', type:'image/png', platform:'browser', streamType: ['http']}
    ],
    
    allowRandomSeek: true,

    _position: 0,
    _duration: 0,
    
    applyMedia: function(destContainer) {
        this.mediaElement = this.applyImage(this.media.file[0].src, destContainer.html(''));
        this._duration = this.pp.getConfig('duration') || 1;
        this._position = -1;
        this.displayReady();
        this._position = -0.5;    
    },    
    
    /* start timer */
    setPlay: function() {

        var ref = this;
    
        this._setBufferState('full');
        this.progressListener(100);
        this.playingListener();    
        
        if (this._duration==0) {
            ref._setState('completed');
            return;
        }
    
        (function() {
            if (ref._position>=ref._duration) {
                ref._setState('completed');
                return;
            }
            
            if (!ref.getState('PLAYING')) {
                return;
            }
            
            ref.timeListener({duration: ref._duration, position:ref._position});
            setTimeout(arguments.callee,200);
            ref._position += 0.2;        
        })();    
    
    },
    
    detachMedia: function() {
        this.mediaElement.remove();
    },
    
    setPause: function() {
        this.pauseListener();
    },   
            
    setSeek: function(newpos) {
        if (newpos<this._duration) {
            this._position = newpos;
            this.seekedListener()
        }
    }
    
});

$p.newModel({
    
    modelId: 'HTML',
    iLove: [
        {ext:'html', type:'text/html', platform:'browser', streamType: ['http']}
    ],
    
   applyMedia: function(destContainer) {
        var ref = this;
         
        this.mediaElement = $(document.createElement('iframe')).attr({
            "id": this.pp.getMediaId()+"_iframe",
            "name": this.pp.getMediaId()+"_iframe",
            "src": this.media.file[0].src,
            "scrolling": 'no',
            "frameborder": "0",
            'width': '100%',
            'height': '100%'
        }).css({
            'overflow': 'hidden',
            'border': '0px',
            "width": '100%',
            "height": '100%'            
        }).appendTo(destContainer.html(''));
        
        this.mediaElement.load(function(event){ref.success();});
        this.mediaElement.error(function(event){ref.remove();});
    
        this._duration = this.pp.getConfig('duration');
        
    },
    
    success: function() {   
        this.displayReady();
    },
    
    remove: function() {
        this.mediaElement.remove();        
    }    
}, 'IMAGE');
});

;projekktorMessages = {
	    // settings 
	    "help": "Hilfe:",
	    "keyboard controls": "Tastatur",
	    "debug": "Fehler melden",
	    "player info": "Player Info",
	    "platform": "Playerformat:",
	    "flash": "Flash",
	    "html5": "HTML5",
	    "vlc": "VLC Plugin",
	    "automatic": "automatisch",
	    "quality": "Qualit&auml;t:",
	    "high": "hoch",
	    "medium": "mittel",
	    "low": "niedrig",

	    // settings
	    'ok': 'OK',
	    'report': 'Fehler melden',
	    'cancel': 'Abbruch',
	    'continue': 'Weiter',
	    'keyboard assignments': 'Tastaturbelegung',
	    'sendto': 'Bitte senden Sie diese Informationen an den Webmaster dieser Seite.',
	    'please': 'Bitte beschreiben Sie das Problem zu pr&auml;ziese wie m&ouml;glich.',
	    'thanks': 'Vielen Dank, dass Sie uns bei der Verbesserung unserer Seite helfen.',
	    'error': 'Es ist ein Fehler aufgetreten',
	    'help1': '<em>Leertaste</em> Play / Pause',
	    'help2': '<em class="icon icon_arrow_up"></em><em class="icon icon_arrow_down"></em> Lautst&auml;rke <em class="icon icon_arrow_left"></em><em class="icon icon_arrow_right"></em> Suche',
	    'help3': '<em>ENTER</em> Vollbild an/aus',
	    'help4': 'Der Mauszeiger muss sich &uuml;ber dem Player befinden.',
	    
	    // error
	    "error0": '#0 Es ist ein (unbekannter) Fehler aufgetreten.',
	    "error1": '#1 Die Medienwiedergabe wurde abgebrochen. ',
	    "error2": '#2 Aufgrund eines Netzwerkfehlers konnte die Datei nicht vollst&auml;ndig geladen werden. ',
	    "error3": '#3 Die Wiedergabe wurde aufgrund einer fehlerhaften Datei abgebrochen. ',
	    "error4": '#4 Das angeforderte Video ist derzeit leider nicht oder nicht mehr verf&uuml;gbar.',
	    "error5": '#5 Ihr Browser unterst&uuml;tzt die Wiedergabe dieser Datei nicht.',
	    "error6": '#6 Bitte bringen Sie Ihr Flashplugin auf den neuesten Stand.',
	    "error7": '#7 Bitte kontaktieren Sie den Webmaster.',
	    "error11": '#11 Bitte installieren sie ein aktuelles Flashplugin.',
	    "error80": '#80 Die angeforderte Datei existiert nicht oder nicht mehr.',
	    "error97": '#97 Bitte kontaktieren Sie den Webmaster.',
	    "error98": '#98 Bitte kontaktieren Sie den Webmaster.',
	    "error99": 'Weiter, hier klicken. ',
	    "error100": 'Keyboard Shortcuts'
};	


;// branding whitelist
var disableBrandingFor = ['172.29.139','.ndr.de','n-joy.de','.sesamstrasse.de','.ndr-net.de','.deutscher-radiopreis.de','auschwitzundich.ard.de','eurovision.de','.sportschau.de','.flyp.tv', 'olympia.ard.de']; 