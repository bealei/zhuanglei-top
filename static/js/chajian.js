
//网站运行时间代码
function countdown(date, id) {
	var star = new Date(date);
	var now = new Date();
	var res1 = (now - star) / (24 * 60 * 60 * 1000);
	var res2 = Math.ceil(res1)
	document.getElementById(id).innerHTML = res2 + " ";
}
var starDate = '2023-11-11 00:00:00';
var setId = 'showdate';
var res = countdown(starDate, setId);

// countdown();






//51la 统计 v6
// document.write(
// 	"<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"JP6lKgA8gnJILx9Z\",ck:\"JP6lKgA8gnJILx9Z\"});</script>"
// )
