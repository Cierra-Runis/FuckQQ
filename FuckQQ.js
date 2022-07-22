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
    var clearFlag = 0;
    var count = 3;                                              // 设置3秒后⾃动消失
    var showModal = function () {
        $("#my-modal-alert").toggle();                          // 显⽰模态框
        $("#my-modal-alert").draggable({                        // 设置模态框可拖动（需要引⼊jquery-ui.min.js）
            handle: ".modal-header"
        });
        clearFlag = self.setInterval("autoClose()", 1000);      // 每过⼀秒调⽤⼀次autoClose⽅法
    }
    var autoClose = function () {
        if (count > 0) {
            $("#num").html(count + "秒后窗⼝将⾃动关闭");
            count--;
        } else if (count <= 0) {
            window.clearInterval(clearFlag);
            $("#num").html("");
            $("#my-modal-alert").fadeOut("slow");
            count = 3;
            $("#my-modal-alert").toggle();
        }
    }

    window.location.href = document.getElementById('url').textContent;
    showModal();
})();