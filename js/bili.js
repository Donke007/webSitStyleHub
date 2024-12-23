let config = {
  mode: '',
};
let intv = 0
const handleDonkeDarkMode = (init) => {
  $('body').addClass('dark');
  console.log('handleDonkeDarkMode');
  var styleRule = $('#userCSS');
  // console.log('handleDonkeDarkMode', styleRule);

  if (styleRule) {
    styleRule.html(
      'body{ --text1: #e3e3e3;--graph_bg_thick: #5c5c5c;--text2: #c4c4c4;--bg2: #474747;--bg1: #333;--line_light: #5c5c5c;--b_text2: #c4c4c4;--v_bg1_float: #333; --v_line_regular: #5c5c5c;--v_text1: #c4c4c4;--v_bg1: #474747;--v_text2: #c4c4c4;--graph_bg_thin: #474747;--v_graph_bg_regular: #474747  }'
    );
  }
  
  const item = $(
    '<a href="javascript:void(0);" class="right-entry__outside"><svg class="right-entry-icon" width="20px" height="21px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M475.7 173.1c4.8 4.8 10.4 8.5 16.6 11.1 6.2 2.6 12.9 3.9 19.6 3.9 6.7 0 13.4-1.3 19.6-3.9 6.2-2.6 11.9-6.4 16.6-11.1 4.8-4.8 8.5-10.4 11.1-16.6 2.6-6.2 3.9-12.9 3.9-19.6V51.3c0-6.7-1.3-13.4-3.9-19.6S553 19.8 548.3 15c-4.8-4.8-10.4-8.5-16.6-11.1-6.3-2.6-13-3.9-19.7-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1-4.8 4.8-8.5 10.4-11.1 16.6-2.6 6.2-3.9 12.9-3.9 19.6v85.5c0 6.7 1.3 13.4 3.9 19.6 2.5 6.4 6.2 12 11 16.8zM548.3 850.9c-4.8-4.8-10.4-8.5-16.6-11.1-6.2-2.6-12.9-3.9-19.6-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1-4.8 4.8-8.5 10.4-11.1 16.6-2.6 6.2-3.9 12.9-3.9 19.6v85.5c0 13.6 5.4 26.7 15 36.3s22.7 15 36.3 15c13.6 0 26.7-5.4 36.3-15 9.6-9.6 15-22.7 15-36.3v-85.5c0-6.7-1.3-13.4-3.9-19.6-2.8-6.2-6.5-11.9-11.3-16.6zM114.3 186.9l60.5 60.5c4.8 4.8 10.4 8.6 16.6 11.1 6.2 2.6 12.9 3.9 19.6 3.9 10.2 0 20.1-3 28.5-8.6 8.4-5.6 15-13.7 18.9-23 3.9-9.4 4.9-19.7 2.9-29.7-2-10-6.9-19.1-14.1-26.3l-60.5-60.5c-4.8-4.8-10.4-8.5-16.6-11.1-6.2-2.6-12.9-3.9-19.6-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1-4.8 4.8-8.5 10.4-11.1 16.6-2.6 6.2-3.9 12.9-3.9 19.6 0 6.7 1.3 13.4 3.9 19.6 2.6 6.4 6.4 12 11.1 16.8zM909.7 837.1l-60.5-60.5c-4.8-4.8-10.4-8.6-16.6-11.1-6.2-2.6-12.9-3.9-19.6-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1-4.8 4.8-8.5 10.4-11.1 16.6-2.6 6.2-3.9 12.9-3.9 19.6 0 6.7 1.3 13.4 3.9 19.6 2.6 6.2 6.4 11.9 11.1 16.6l60.5 60.5c4.8 4.8 10.4 8.6 16.6 11.1 6.2 2.6 12.9 3.9 19.6 3.9 10.2 0 20.1-3 28.5-8.6 8.4-5.6 15-13.7 18.9-23 3.9-9.4 4.9-19.7 2.9-29.7-2-9.8-6.9-18.9-14.1-26.1zM173.1 548.3c9.6-9.6 15-22.7 15-36.3 0-13.6-5.4-26.7-15-36.3-9.6-9.6-22.7-15-36.3-15H51.3c-13.6 0-26.7 5.4-36.3 15S0 498.4 0 512c0 13.6 5.4 26.7 15 36.3 9.6 9.6 22.7 15 36.3 15h85.5c13.6 0 26.7-5.4 36.3-15zM1009 475.7c-9.6-9.6-22.7-15-36.3-15h-85.5c-13.6 0-26.7 5.4-36.3 15-9.6 9.6-15 22.7-15 36.3 0 13.6 5.4 26.7 15 36.3 9.6 9.6 22.7 15 36.3 15h85.5c13.6 0 26.7-5.4 36.3-15 9.6-9.6 15-22.7 15-36.3 0-13.6-5.4-26.7-15-36.3zM247.4 776.7c-4.8-4.8-10.4-8.6-16.6-11.1-6.2-2.6-12.9-3.9-19.6-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1l-60.5 60.5c-7.2 7.2-12.1 16.3-14.1 26.3s-1 20.3 2.9 29.7c3.9 9.4 10.5 17.4 18.9 23 8.4 5.6 18.4 8.6 28.5 8.6 13.1 0 26.3-5 36.3-15l60.5-60.5c4.8-4.8 8.5-10.4 11.1-16.6 2.6-6.2 3.9-12.9 3.9-19.6 0-6.7-1.3-13.4-3.9-19.6-2.7-6.4-6.5-12.1-11.2-16.8zM784.4 253.8c8.4 5.6 18.4 8.6 28.5 8.6 13.1 0 26.3-5 36.3-15l60.5-60.5c4.8-4.8 8.5-10.4 11.1-16.6 2.6-6.2 3.9-12.9 3.9-19.6 0-6.7-1.3-13.4-3.9-19.6-2.6-6.2-6.4-11.9-11.1-16.6-4.8-4.8-10.4-8.5-16.6-11.1-6.2-2.6-12.9-3.9-19.6-3.9-6.7 0-13.4 1.3-19.6 3.9-6.2 2.6-11.9 6.4-16.6 11.1L776.8 175c-7.2 7.2-12.1 16.3-14.1 26.3s-1 20.3 2.9 29.7c3.8 9.1 10.4 17.1 18.8 22.8zM512 260.1c-138.9 0-251.8 113-251.8 251.8 0 138.9 113 251.8 251.8 251.8 138.9 0 251.8-113 251.8-251.8S650.9 260.1 512 260.1z m0 401.3c-82.3 0-149.4-67.1-149.4-149.4S429.7 362.5 512 362.5c82.3 0 149.4 67.1 149.4 149.4S594.3 661.4 512 661.4z" /><span class="right-entry-text" id="theamModeText">日间</span></a>'
  );
  config.mode = 'dark';
  setDonkeConfig();
  if ($('#changeModeArea')[0]) {
    $('#changeModeArea').html(item);
  } else {
    setTimeout(() => {
      $('#changeModeArea').html(item);
    }, 2100);
  }
};
const handleDonkeLightMode = (init) => {
  $('body').removeClass('dark');
  var styleRule = $('#userCSS');
  console.log('handleDonkeLightMode');
  // console.log($('#changeModeArea'));
  if (styleRule) {
    styleRule.html('');
  }
  const item = $(
    '<a href="javascript:void(0);" class="right-entry__outside"><svg class="right-entry-icon" width="20px" height="21px" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M510.240572 0.448971a37.925879 37.925879 0 0 1 31.977975 19.186785 38.37357 38.37357 0 0 1 0 37.925878 317.157558 317.157558 0 0 0 276.929265 472.762385 311.27361 311.27361 0 0 0 147.930113-36.966539 38.37357 38.37357 0 0 1 37.925879 0.959339 39.716645 39.716645 0 0 1 18.035578 33.257094A511.647603 511.647603 0 1 1 510.240572 0.448971z m416.864884 267.271916a20.082168 20.082168 0 0 1 20.21008 19.762389 55.449809 55.449809 0 0 0 55.577721 54.362558 19.762389 19.762389 0 1 1 0 39.524777 55.449809 55.449809 0 0 0-55.577721 54.362558 20.274036 20.274036 0 0 1-40.484116 0 55.449809 55.449809 0 0 0-55.577721-54.362558 19.762389 19.762389 0 1 1 0-39.524777h2.941974a55.449809 55.449809 0 0 0 52.635747-54.298602 20.082168 20.082168 0 0 1 20.21008-19.762389zM736.069032 0.448971a19.762389 19.762389 0 0 1 19.698433 19.698432 127.911901 127.911901 0 0 0 127.911901 127.911901 19.698433 19.698433 0 1 1 0 39.396866 127.911901 127.911901 0 0 0-127.911901 127.9119 19.698433 19.698433 0 0 1-39.460821 0 127.911901 127.911901 0 0 0-127.911901-127.9119 19.762389 19.762389 0 0 1-19.442609-14.326133 19.762389 19.762389 0 0 1 19.186785-24.303261 127.911901 127.911901 0 0 0 127.911901-127.911901 19.762389 19.762389 0 0 1 20.018212-20.465904z" /></svg><span class="right-entry-text" id="theamModeText">夜间</span></a>'
  );
  config.mode = 'light';
  setDonkeConfig();
  if ($('#changeModeArea')[0]) {
    $('#changeModeArea').html(item);
  } else {
    setTimeout(() => {
      $('#changeModeArea').html(item);
    }, 2100);
  }
};
const handleModeChange = async () => {
  console.log(config.mode);
  
  if (config.mode == 'dark') {
    handleDonkeLightMode();
  } else {
    handleDonkeDarkMode();
  }
};
const getDonkeConfig = () => {
  return new Promise((resolve, reject) => {
    localforage
      .getItem('UserConfig')
      .then(function (value) {
        // 当离线仓库中的值被载入时，此处代码运行
        console.log(value);
        if (value) {
          config = value;
        } else {
          setDonkeConfig();
        }
        resolve(config);
      })
      .catch(function (err) {
        // 当出错时，此处代码运行
        console.log(err);
        setDonkeConfig();
        reject();
      });
  });
};
const setDonkeConfig = () => {
  return new Promise((resolve, reject) => {
    localforage
      .setItem('UserConfig', config)
      .then(function (value) {
        // 当值被存储后，可执行其他操作
        console.log(value);
        resolve(value);
      })
      .catch(function (err) {
        // 当出错时，此处代码运行
        console.log(setErr);
        reject(err);
      });
  });
};
const addModeIcon = () => {
  const topRight = $('.right-entry-item')[0];
  if (topRight) {
    clearInterval(intv);
    const item = $('<li class="right-entry-item" id="changeModeArea"></li>');
    // $(topRight).after(item);
    setTimeout(() => {
      $($('.right-entry-item')[0]).after(item);
      $('#changeModeArea').on('click', handleModeChange);
    }, 2100);
    getDonkeConfig().finally(() => {
      if (config.mode == 'dark') {
        handleDonkeDarkMode(1);
      } else {
        handleDonkeLightMode(1);
      }
    });
  }
};
(function () {
  'use strict';

  $('<style type="text/css" id="userCSS"></style>').appendTo('head');
  // console.log(styleRule);
  console.log($('.right-entry-item')[0]);
  intv = setInterval(addModeIcon, 1000);
})();
