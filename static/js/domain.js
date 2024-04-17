
// 单空间、多域名时，需要把domain.js 引入主页js
switch (location.host) {
  case "jianli.zhuanglei.top":
    location.href = "http://zhuanglei.top/jianli/";
    break;
}



// switch (location.host) {
//   case "52kiss.cn":
//     location.href = "http://52kiss.cn/sale/";
//     break;
// }

// switch (location.host) {
//   case "52rn.com":
//     location.href = "http://52rn.com/sale/";
//     break;
// }
// switch (location.host) {
//   case "52af.com":
//     location.href = "http://52af.com/sale/";
//     break;
// }