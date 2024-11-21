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
  var script1 = document.createElement('script');
  script1.setAttribute('src', 'https://code.jquery.com/jquery-3.7.1.min.js');
  var script2 = document.createElement('script');
  script2.setAttribute(
    'src',
    'https://donke007.github.io/webSitStyleHub/js/bili.js'
  );
  var script3 = document.createElement('script');
  script3.setAttribute(
    'src',
    'https://donke007.github.io/webSitStyleHub/js/localforage.min.js'
  );
  var link1 = document.createElement('link');
  link1.setAttribute('rel', 'stylesheet').setAttribute('href', 'https://donke007.github.io/webSitStyleHub/style/bili.css').setAttribute('type', 'text/css')
  document.head.appendChild(link1);
  document.head.appendChild(script1);
  document.head.appendChild(script2);
  document.head.appendChild(script3);
})();
