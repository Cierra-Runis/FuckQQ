// ==UserScript==
// @name         FuckQQ
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  拦你妈呢死妈 QQ 管家
// @author       You
// @match        https://c.pc.qq.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=qq.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    window.location.href = document.getElementById('url').textContent
})();