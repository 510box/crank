// ==UserScript==
// @Name             倒班助手立盾卡破解
// @Author           提着轮档追飞机
// @TgChannel         
// @WechatID          
// @
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==


/*
QuanX
[rewrite_local]
^https:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/dbzsld.js
[mitm]
hostname = open.daobanzhushou.cn

moudle

[Script]
http-response ^https:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka requires-body=1,max-size=-1,script-path=https://github.com/510box/CRANK/raw/QuantumultX/dbzsld.js
[mitm]
hostname = open.daobanzhushou.cn

*/



‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var obj = JSON.parse(body);
var data={};
obj.data={
    "status": 1,
    "remainDays": 999,
    "remainMonths": 999,
}
body = JSON.stringify(obj); 

$done({body});
