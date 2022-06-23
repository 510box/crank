// ==UserScript==
// @@@@@@@@@@@@@     多路径模版
// @Name             
// @Author           提着轮档追飞机
// @TgChannel 
// @WechatID                     
// @Attention：‼️仅供学习交流，🈲️商业用途，侵权立删
//             模版资料均来源于网络，本人仅收集加工


/*
【QuanX】
[rewrite_local]

^https:\/\/pinyin-api\.tuxiaobei\.com\/v1(\/top\/follow|\/user\/verify-token) url script-response-body tuxiaobeipinyin.js



[mitm]
hostname = userapi.hpplay.cn,

*/

if ($request.url.indexOf("/top/follow") != -1) {
// 判断请求路径存在则调用函数re()调试该路径下的响应体
  re('"vip":\\d', '"vip":1') 
// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}

if ($request.url.indexOf("/user/verify-token") != -1) {
  re('"vip":\\d', '"vip":1')
}

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
}


