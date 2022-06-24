// ==UserScript==
// @@@@@@@@@@@@@     
// @Name             丝社（破解会员积分更改等级，可无限观看）
// @Author           提着轮档追飞机
// @TgChannel 
// @WechatID                     
// @Attention：‼️仅供学习交流，🈲️商业用途，侵权立删
//             模版资料均来源于网络，本人仅收集加工


/*
【QuanX】
[rewrite_local]

^https:\/\/www\.ssalegs\.store\/cms\/Appapi\/username\/username url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/sishepojie.js



【小火箭】

name = type=http-response,script-path=https://github.com/510box/CRANK/raw/QuantumultX/sishepojie.js,pattern=^https:\/\/www\.ssalegs\.store\/cms\/Appapi\/username\/username,max-size=131072,requires-body=true,timeout=10,enable=true


[mitm]
hostname = ssalegs.store,

*/


if ($request.url.indexOf("/cms/Appapi/username/username") != -1) {
  re('"username":"\\w+"@"overduedate":\\d+@"overduedate2":\\d+@"point":\\d@"mobile":"\\d+"@"groupname":"\\w+"@"jomkenylv":"\\d"', '"username":"大屌哥"@"overduedate":2028214025@"overduedate2":2028214025@"point":99999@"mobile":"18888888888"@"groupname":"官方认证"@"jomkenylv":"99"')
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


