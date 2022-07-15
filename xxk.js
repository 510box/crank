// ==UserScript==
// @@@@@@@@@@@@@     
// @Name             小星空
// @Author           提着轮档追飞机
// @TgChannel 
// @WechatID                     
// @Attention：‼️仅供学习交流，🈲️商业用途，侵权立删
//             模版资料均来源于网络，本人仅收集加工


/*
【QuanX】
[rewrite_local]

^https？://slb\.orderorigin\.com(\/stars-p\/v2\/vip\/info\/purchase\/detail|\/stars-p\/v1\/user\/user-info|\/stars-p\/v1\/user\/my-info) url script-response-body https://raw.githubusercontent.com/510box/CRANK/QuantumultX/xxk.js




[mitm]
hostname = slb.orderorigin.com,

*/

if ($request.url.indexOf("/stars-p/v2/vip/info/purchase/detail") != -1) {
// 判断请求路径存在则调用函数re()调试该路径下的响应体
  re('"expireTimestamp":-\\d@"status":-\\d@"paymentType":\\w+', '"expireTimestamp":8888888888@"status":2@"paymentType":4') 
// 匹配里若需用到正则的反斜杠语句像\d+、\w+时请用双反斜杆\\d+、\\w+
}

if ($request.url.indexOf("/stars-p/v1/user/user-info") != -1) {
  re('"vipLevel":\\w+@"vipType":\\w+', '"vipLevel":1@"vipType":2')
}

if ($request.url.indexOf("/stars-p/v1/user/my-info") != -1) {
  re('"svip":\\w+', '"svip":true')
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


