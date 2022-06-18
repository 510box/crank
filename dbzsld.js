// ==UserScript==
// @Name             倒班助手立盾卡破解
// @Author           提着轮档追飞机
// @TgChannel         
// @WechatID          
// @
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==


/*[rewrite_local]
^https:\/\/open\.daobanzhushou\.cn\/shiftassistant\/rs\/user\/lidunka url script-response-body dbzsld.js

万能rewrite_local下重新格式，
#xxx我们自定义的名称
^xxx原始请求地址 url script-response-body xxx写好的js文件路径

[mitm]
hostname= ,open.daobanzhushou.cn
*注意前面分割域名要用英文,区分开。

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
