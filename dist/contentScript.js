!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({30:function(e,t,n){"use strict";var o=function(e){var t=document.getElementsByClassName("btn-gacha"),n=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0){a.value.style.visibility=e?"hidden":""}}catch(e){o=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw r}}};e.exports={init_gacha:function(){chrome.extension.sendMessage({message:"is_eunuch"},function(e){var t=e.status,n=null;location.hash.includes("gacha")&&(n=setInterval(function(){document.getElementsByClassName("btn-gacha").length>0&&(o(t),clearInterval(n))},800))})},control_gacha:o}},31:function(e,t,n){"use strict";var o=n(5);e.exports={get_battle_room_href:function(e,t){var n={special_token:null,battle_key:e};(0,o.dispatch_content_script_to_inject)({message:"get_battle_room_href",data:JSON.stringify(n),url:"/quest/battle_key_check"})},use_bp:function(e){chrome.extension.sendMessage({message:"get_user_id"},function(t){t.user_id;var n={special_token:null,num:e,item_id:"5"};(0,o.dispatch_content_script_to_inject)({message:"to_use_bp",data:JSON.stringify(n),url:"/item/use_normal_item"})})},listen_clip_board_battle_check:function(){var e=null;e=setInterval(function(){var t=document.getElementsByClassName("gbfrf-tweets");if(t.length>0){var n=!0,o=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done);n=!0)a.value.addEventListener("click",function(e){chrome.extension.sendMessage({message:"listen_clip_board_battle_check"})})}catch(e){o=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw r}}clearInterval(e)}},800)}}},32:function(e,t,n){"use strict";var o=null,r=function(e){var t=document.getElementsByClassName("prt-wanted-list")[0];t&&(o||((o=new MutationObserver(function(n){for(var o=document.getElementsByClassName("txt-room-comment"),r=[],a=0,c=o.length;a<c;a++)for(var i=o[a].innerText,s=e.split(";"),l=0,u=s.length;l<u;l++){var d=s[l];i.includes(d)&&l==u-1&&r.push(a)}for(var m=0,_=t.children.length;m<_;m++){var f=t.children[m];f.style.display="none";for(var h=0,g=r.length;h<g;h++)m==r[h]&&(f.style.display="")}})).observe(t,{attributes:!0,childList:!0,characterData:!0}),console.log("observer start")))},a=function(e){e.disconnect(),console.log("observer end")};e.exports={roomObserve:r,roomObserveBreaker:a,initRoomSearch:function(){location.href.includes("coopraid")&&chrome.extension.sendMessage({message:"get_search"},function(e){var t=e.search,n=new MutationObserver(function(e){document.getElementsByClassName("prt-wanted-list")[0]&&(r(t),a(n))});n.observe(document.getElementsByTagName("body")[0],{attributes:!0,childList:!0,characterData:!0})})},is_character_page:function(){return!!document.getElementsByClassName("btn-lis-user").length},check_characters:function(){var e=[],t=!0,n=!1,o=void 0;try{for(var r,a=document.getElementsByClassName("btn-lis-user")[Symbol.iterator]();!(t=(r=a.next()).done);t=!0){var c=r.value.dataset,i=c.nickName,s=c.userId,l=c.userRank;e.push({nickName:i,userId:s,userRank:l})}}catch(e){n=!0,o=e}finally{try{!t&&a.return&&a.return()}finally{if(n)throw o}}return e}}},33:function(e,t,n){"use strict";var o=function(){var e=document.getElementById("liver-collection-container"),t=document.createElement("div");t.id="scrollHoverContainer",t.style.cssText="position:fixed;right:0px;top:0px;width:30px;height:100%;",e.appendChild(t),t.addEventListener("mouseover",r.bind(void 0),!1)},r=function(e){var t=document.getElementById("scrollHoverContainer"),n=document.getElementById("liver-collection-container")||document.getElementById("liver-collection-container-hover");n.id="liver-collection-container-hover",t.style.display="none",setTimeout(function(){n.id="liver-collection-container",t.style.display="block"},3e3)},a=function(e){var t=document.getElementById("mobage-game-container").parentNode.parentNode.firstChild,n=document.getElementById("mobage-game-container").parentNode;e?(t.style.display="block",n.style.marginLeft="64px"):(t.style.display="none",n.style.marginLeft="0px")},c=function(e){document.getElementById("submenu").style.display=e?"block":"none"},i=function(e){var t=document.getElementById("mobage-game-container");t&&(t.style.zoom=e)};e.exports={initStyles:function(){document.getElementById("mobage-game-container")&&(document.getElementById("mobage-game-container").parentNode.id="liver-collection-container",chrome.extension.sendMessage({message:"get_scroll_options"},function(e){e.status&&o()}),chrome.extension.sendMessage({message:"get_sider_options"},function(e){var t=e.left,n=e.right;!t&&a(t),!n&&c(n)}))},initZoom:function(){chrome.extension.sendMessage({message:"get_zoom"},function(e){var t=e.zoom;i(t)})},setZoom:i,controlLeftSider:a,controlRightSider:c,initScrollHoverContainer:o,removeEvent:function(){var e=document.getElementById("scrollHoverContainer");e.parentNode.removeChild(e)}}},34:function(e,t,n){"use strict";var o=n(33),r=n(32),a=n(31),c=n(30);!function(e){var t=document.getElementsByTagName("body")[0],n=document.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("src",e);var o=document.createElement("script");o.id="init_window",t.appendChild(n),t.appendChild(o)}(chrome.extension.getURL("/inject.js")),(0,o.initStyles)(),(0,o.initZoom)(),(0,r.initRoomSearch)(),(0,c.init_gacha)(),location.href.includes("raidfinder")&&(0,a.listen_clip_board_battle_check)(),document.getElementById("init_window").addEventListener("inject_to_content_script",function(e){var t=e.detail,n=t.message,o=t.data,r=t.url,c=t.count;switch(n){case"get_battle_room_href":chrome.extension.sendMessage({message:"battle_room_href",url:r});break;case"to_use_bp":(0,a.use_bp)(c);break;case"do_use_bp":chrome.extension.sendMessage({message:"redo_battle_room_href_check"});break;case"notify_error":chrome.extension.sendMessage({message:"notify_error",data:o})}}),chrome.runtime.onConnect.addListener(function(e){switch(e.name){case"popup_to_content":e.onMessage.addListener(function(t){var n=t.zoom,i=t.message,s=t.search,l=t.type,u=t.status,d=t.battleId,m=t.userId;t.event;switch(i){case"set_zoom":(0,o.setZoom)(n);break;case"open_coopraid_search":(0,r.roomObserve)(s);break;case"close_coopraid_search":break;case"is_character_page":e.postMessage({flag:(0,r.is_character_page)()});break;case"check_ub_characters":e.postMessage({datas:(0,r.check_characters)()});break;case"sider_status":"is_left_sider_show"==l?(0,o.controlLeftSider)(u):(0,o.controlRightSider)(u);break;case"check_black_list":e.postMessage({datas:(0,r.check_characters)()});break;case"scroll_style_status":u?(0,o.initScrollHoverContainer)():(0,o.removeEvent)();break;case"battle_key_check":(0,a.get_battle_room_href)(d,m);break;case"to_be_a_eunuch":(0,c.control_gacha)(u);break;case"init_eunuch":(0,c.init_gacha)()}})}})},5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.upload_to_server=function(e,t,n){if(e){var o={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};o=Object.assign(o,t),fetch(e,o).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.get_by_cookie=function(e,t,n){if(e){var o={credentials:"include"};o=Object.assign(o,t),fetch(e,o).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){console.log(e)})}},t.post_by_cookie=function(e,t,n){if(e){var o={method:"POST",credentials:"include",headers:{"Content-Type":"application/json; charset=UTF-8"}};o=Object.assign(o,t),fetch(e,o).then(function(e){return console.log(e),e.text()}).then(function(e){console.log(e),n(JSON.parse(e))}).catch(function(e){console.log(e)})}},t.dispatch_inject_to_content_script=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("inject_to_content_script",{detail:e}))},t.dispatch_content_script_to_inject=function(e){return document.getElementById("init_window").dispatchEvent(new CustomEvent("content_script_to_inject",{detail:e}))}}});