// ==UserScript==
// @Name             倒班助手立盾卡破解
// @Author           提着轮档追飞机
// @TgChannel         
// @WechatID          
// @Attention         请在本地使用此脚本，便于填写



/*
QuanX
[rewrite_local]
^https:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/dbzsld.js
火箭
[Script]
倒班助手立盾会员 = type=http-response,script-path=https://github.com/510box/CRANK/raw/QuantumultX/dbzsld.js,pattern=^https:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka,max-size=131072,requires-body=true,timeout=10,enable=true
[mitm]
hostname = open.daobanzhushou.cn
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
