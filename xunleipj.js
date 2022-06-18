// ==UserScript==
// @Name             迅雷破解会员
// @Author           提着轮档追飞机
// @TgChannel         
// @WechatID          
// @
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==
https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo

/*
【QuanX】
[rewrite_local]
^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/xunleipj.js


【小火箭】

迅雷破解 = type=http-response,script-path=https://github.com/510box/CRANK/raw/QuantumultX/xunleipj.js,pattern=^https:\/\/xluser-ssl\.xunlei\.com\/xluser\.core\.login\/v3\/getuserinfo,max-size=131072,requires-body=true,timeout=10,enable=true


[mitm]
hostname=xluser-ssl.xunlei.com

‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/xluser.core.login/v3/getuserinfo';

if (url.indexOf(vip) != -1) {
    obj.vipList.expireDate = 2050-10-22;
    obj.vipList.vipLevel = 8;
    obj.vipList.vipGrow = 40010;
    obj.vipList.vipDayGrow = 18;
    obj.vipList.vasType = 3;
    obj.vipList.register = 2050-01-01;
    obj.vipList.isVip = 1;
    obj.vipList.isYear = 1;
    obj.vipList.payId = 5;
    obj.vipList.isRemind = 1;
    body = JSON.stringify(obj);
}
$done({body});
