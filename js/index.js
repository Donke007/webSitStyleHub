// ==UserScript==
// @name         Baidu css
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tampermonkey.net/index.php?version=4.7&ext=dhdg&updated=true
// @match        *://*.baidu.com/s?ie=utf-8&wd=*
// @match        *://*.baidu.com/s?*&wd=*
// @match        *://*.baidu.com/*wd=*
// @grant        none
// ==/UserScript==

// var new_element=document.createElement('link')
//    new_element.setAttribute('type','text/javascript');
//    new_element.setAttribute("src","https://donke-c.oss-cn-hangzhou.aliyuncs.com/style/myCSS/Donkebing.css");
//document.head.appendChild(new_element);
(function () {
    'use strict';
    // Your code here...
    var new_element = document.createElement('link')
    new_element.setAttribute('rel', 'stylesheet');
    new_element.setAttribute("href", "https://donke007.gitee.io/websitstylehub/style/myBaidu.css");
    var bg_element = document.createElement('div')
    bg_element.setAttribute("class", "donke-bg-blur bg-bg");
    bg_element.classList.add("bg-bg")
    document.body.appendChild(new_element);
    // document.write('<link rel="stylesheet" href="https://donke007.gitee.io/websitstylehub/style/Donkebing.css"')
    $('#result_logo img').attr('src', 'https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super')
    $("body").prepend("<div class='donke-bg-blur bg-2'></div>");
    $("#form").submit(function (e) {
        setTimeout(function () {
            window.location.reload()
        }, 1000)
    })
    // setTimeout(function(){
    //     if($('.c-container').css('padding') == '0px'){
    //     window.location.reload()
    // }},1000)
})();