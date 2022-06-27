// ==UserScript==
// @Name             vwvgv
// @Author           提着轮档接飞机
// @TgChannel         
// @WechatID          
// @               https://cwvgv.xyz:8080
// @Attention         请在本地使用此脚本，便于填写
// ==/UserScript==


/*[rewrite_local]
^https:\/\/cwvgv\.xyz:8080\/tantan\/mobile\/tantan\/user\/login url script-response-body https://github.com/510box/CRANK/raw/QuantumultX/vwvgv.js



[mitm]
hostname = cwvgv.xyz:8080,

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/tantan/mobile/tantan/user/login';

if (url.indexOf(vip) != -1) {
    obj.data.name = "大哥大";
    obj.data.isVip = "1";
    obj.data.maturityDates = "2999-6-25 18:5:5"
    body = JSON.stringify(obj);
}
$done({body});
