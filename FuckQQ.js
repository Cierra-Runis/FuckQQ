// ==UserScript==
// @name         FuckQQ
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  拦你妈呢死妈 QQ 管家
// @author       https://github.com/Cierra-Runis
// @match        https://c.pc.qq.com/*
// @icon         https://github.com/Cierra-Runis/FuckQQ/blob/master/favicon.png?raw=truedomain=qq.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    window.location.href = document.getElementById('url').textContent
})();