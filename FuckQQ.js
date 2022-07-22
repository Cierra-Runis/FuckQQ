// ==UserScript==
// @name            FuckQQ
// @namespace       https://github.com/Cierra-Runis/FuckQQ
// @version         0.2
// @description     拦你妈呢死妈 QQ 管家
// @updateURL       https://raw.githubusercontent.com/Cierra-Runis/FuckQQ/master/FuckQQ.js
// @downloadURL     https://raw.githubusercontent.com/Cierra-Runis/FuckQQ/master/FuckQQ.js
// @connect         raw.githubusercontent.com
// @connect         github.com
// @connect         cdn.jsdelivr.net
// @author          https://github.com/Cierra-Runis
// @match           https://c.pc.qq.com/*
// @icon            https://github.com/Cierra-Runis/FuckQQ/blob/master/favicon.png?raw=truedomain=qq.com
// @grant           none
// ==/UserScript==

(function () {
    'use strict';
    function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
                return;
        }
    }

    window.location.href = document.getElementById('url').textContent;
    window.alert("已跳转");
    sleep(3000);
    window.close();
})();