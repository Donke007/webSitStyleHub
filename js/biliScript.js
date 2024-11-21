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
  const ready = () => {
    document.head.appendChild(script2);
    
  };
  var script1 = document.createElement('script');
  script1.setAttribute('src', 'https://code.jquery.com/jquery-3.7.1.min.js');
  script1.setAttribute('type', 'text/javascript');
  document.head.appendChild(script1);
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
  link1.setAttribute('rel', 'stylesheet');
  link1.setAttribute('href', 'http://127.0.0.1:5500/style/bili.css');
  // link1.setAttribute('href', 'https://donke007.github.io/webSitStyleHub/style/bili.css')
  link1.setAttribute('type', 'text/css');
  document.head.appendChild(link1);
  setTimeout(ready, 500);

  document.head.appendChild(script3);
})();
