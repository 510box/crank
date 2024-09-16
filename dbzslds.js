// ==UserScript==
// @Name             
// @Author           
// @TgChannel         
// @WechatID          
// @
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==


/*

[rewrite_local]
^https://open.daobanzhushou.cn/shiftassistant/rs/user/lidunka url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/dbzslds.js

[mitm]
hostname=open.daobanzhushou.cn

‼️规则完全免费，仅供学习交流，🈲️商业用途
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/shiftassistant/rs/user/lidunka';

if (url.indexOf(vip) != -1) {
    obj.data.status = 1;
    obj.data.remainDays = 999;
    obj.data.remainMonths = 999;
    body = JSON.stringify(obj);
}
$done({body});

