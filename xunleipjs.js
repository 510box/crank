// ==UserScript==
// @Name             迅雷破解会员
// @Author           提着轮档追飞机
// @TgChannel         
// @WechatID          
// @
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==
//https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo

/*
【QuanX】
[rewrite_local]
^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/xunleipjs.js


【小火箭】

迅雷破解 = type=http-response,script-path=https://github.com/510box/CRANK/raw/QuantumultX/xunleipjs.js,pattern=^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo,max-size=131072,requires-body=true,timeout=10,enable=true


[mitm]
hostname=xluser-ssl.xunlei.com


‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var obj = JSON.parse(body);
var vipList=[{}];
obj.vipList=[{
      "expireDate": "20991022",
      "isAutoDeduct": "1",
      "isVip": "1",
      "isYear": "1",
      "payId": "5",
      "payName": "510",
      "register": "20990617",
      "vasid": "2",
      "vasType": "3",
      "vipDayGrow": "18",
      "vipGrow": "40010",
      "vipLevel": "8"
}]
body = JSON.stringify(obj); 
$done({body});




