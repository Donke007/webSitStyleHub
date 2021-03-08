// ==UserScript==
// @name         zhihu style
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.zhihu.com/question/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    var new_element = document.createElement('link')
    new_element.setAttribute('rel', 'stylesheet');
    new_element.setAttribute("href", "https://donke007.gitee.io/websitstylehub/style/zhihu.css");
    document.head.appendChild(new_element);
    //document.getElementsByClassName('QuestionHeader-title')[0].style.cssText = "color:#fff"
    //document.getElementsByClassName('App-main')[0].style.cssText = "background: #333;"
    // Your code here...
})();