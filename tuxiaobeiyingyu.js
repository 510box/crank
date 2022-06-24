// ==UserScript==
// @@@@@@@@@@@@@     	
// @Name             兔小贝数学解锁订阅，高级VIP
// @Author           提着轮档追飞机
// @TgChannel 
// @WechatID                     
// @Attention：‼️仅供学习交流，🈲️商业用途，侵权立删
//             模版资料均来源于网络，本人仅收集加工


/*
【QuanX】
[rewrite_local]

^https:\/\/english-api\.tuxiaobei\.com\/v1\/user(\/vip-status|\/verify-token|\/profile) url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/tuxiaobeiyingyu.js



【小火箭】

name = type=http-response,script-path=https://github.com/510box/CRANK/raw/QuantumultX/tuxiaobeiyingyu.js,pattern=^https:\/\/english-api\.tuxiaobei\.com\/v1\/user(\/vip-status|\/verify-token|\/profile),max-size=131072,requires-body=true,timeout=10,enable=true


[mitm]
hostname = english-api.tuxiaobei.com,

*/

if ($request.url.indexOf("/vip-status") != -1) {
// 判断请求路径存在则调用函数re()调试该路径下的响应体
  re('"vip":\\d@"vip_type":".*?"@"vip_expire_at":".*?"', '"vip":1@"vip_type":"2"@"vip_expire_at":"2800000000"') 
// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}

if ($request.url.indexOf("/verify-token") != -1) {
  re('"vip":\\d@"vip_type":".*?"@"vip_expire_at":".*?"', '"vip":1@"vip_type":"2"@"vip_expire_at":"2800000000"')
}
if ($request.url.indexOf("/profile") != -1) {
  re('"vip":\\d@"vip_type":".*?"@"vip_expire_at":".*?"', '"vip":1@"vip_type":"2"@"vip_expire_at":"2800000000"')
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


