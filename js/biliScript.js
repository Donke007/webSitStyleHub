// ==UserScript==
// @name         bilibili样式优化
// @namespace    bili_style
// @version      1.0.0
// @description  样式优化。
// @author       donke
// @icon         
// @match        *://*.bilibili.com/*

// ==/UserScript==


(function () {
  'use strict';
  var script1 = document.createElement('script')
  script1.setAttribute(
    'src',
    'https://code.jquery.com/jquery-3.7.1.slim.min.js'
  );
  var script2 = document.createElement('script')
  script1.setAttribute(
    'src',
    'https://donke007.github.io/webSitStyleHub/js/bili.js'
  );
  document.head.appendChild(script1);
  document.head.appendChild(script2);
  
})();
