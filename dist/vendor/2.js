(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(r);n(353);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.render=function(){return o.default.createElement("div",{className:"white-space"})},n.state={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=a},13:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this;this.get=function(t){if(name="store."+e.name+"."+t,null!==localStorage.getItem(name))try{return JSON.parse(localStorage.getItem(name))}catch(e){return null}},this.set=function(t,n){if(void 0===n)e.remove(t);else{if("function"==typeof n)n=null;else try{n=JSON.stringify(n)}catch(e){n=null}localStorage.setItem("store."+e.name+"."+t,n)}return e},this.remove=function(t){return localStorage.removeItem("store."+e.name+"."+t),e},this.removeAll=function(){for(var t="store."+e.name+".",n=localStorage.length-1;n>=0;n--)localStorage.key(n).substring(0,t.length)===t&&localStorage.removeItem(localStorage.key(n));return e},this.toObject=function(){for(var t={},n=void 0,r=void 0,o="store."+e.name+".",a=localStorage.length-1;a>=0;a--)localStorage.key(a).substring(0,o.length)===o&&(n=localStorage.key(a).substring(o.length),void 0!==(r=e.get(n))&&(t[n]=r));return t},this.fromObject=function(t,n){for(var r in!0!==n&&e.removeAll(),t)t.hasOwnProperty(r)&&e.set(r,t[r]);return e}};t.default=function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.call(this),this.name=t,void 0!==n)for(var o in n)n.hasOwnProperty(o)&&void 0===this.get(o)&&this.set(o,n[o])}},181:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".Popup {\r\n    width: 450px;\r\n    height: 300px;\r\n    text-align: center;\r\n    padding: 8px;\r\n    background: #B0E0E6;\r\n    font-size: 14px;\r\n}",""])},182:function(e,t,n){var r=n(181);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},183:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".CheckCharacters{}",""])},184:function(e,t,n){var r=n(183);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(88)),o=u(n(159)),a=u(n(322));n(83),n(151),n(202);var i=n(1),c=u(i),l=n(6);function u(e){return e&&e.__esModule?e:{default:e}}n(184);var s="http://game.granbluefantasy.jp/profile/content/index/",f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});t.postMessage({message:"is_character_page"}),t.onMessage.addListener(function(e){var t=e.flag;n.setState({disabled:!t})})})},n.handle_check_ub_characters=function(){chrome.tabs.query({active:!0,currentWindow:!0},function(e){var t=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});n.setState({check_ub_characters_btn_loading:!0}),t.postMessage({message:"check_ub_characters"}),t.onMessage.addListener(function(e){var t=e.datas,r=!0,i=!1,l=void 0;try{for(var u,f=t[Symbol.iterator]();!(r=(u=f.next()).done);r=!0){var h=u.value,_=h.userId,y=void 0===_?1:_;h.url=s+y,h.hasCharacter=""}}catch(e){i=!0,l=e}finally{try{!r&&f.return&&f.return()}finally{if(i)throw l}}n.recursion_request(t,0,function(e){var t=!0,r=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(t=(l=u.next()).done);t=!0){var s=l.value,f=s.data,h=!0,_=!1,y=void 0;try{for(var m,v=f.split("http%3A%2F%2Fgame-a.granbluefantasy.jp%2Fassets%2Fimg_light%2Fsp%2Fassets%2Fnpc%2Fquest")[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){var b=m.value,g=!0,w=!1,O=void 0;try{for(var E,j=d[Symbol.iterator]();!(g=(E=j.next()).done);g=!0){var k=E.value,x=k.key,S=k.url;b.includes(S)&&(s.hasCharacter+=x+",")}}catch(e){w=!0,O=e}finally{try{!g&&j.return&&j.return()}finally{if(w)throw O}}}}catch(e){_=!0,y=e}finally{try{!h&&v.return&&v.return()}finally{if(_)throw y}}}}catch(e){r=!0,i=e}finally{try{!t&&u.return&&u.return()}finally{if(r)throw i}}var P=c.default.createElement(a.default,{columns:p,dataSource:e,pagination:!1,key:"table"});o.default.open({message:"红茶已泡好，跟谁喝自便，但请注意卫生",description:P,duration:null}),n.setState({check_ub_characters_btn_loading:!1})})})})},n.recursion_request=function(e,t,r){if(t>=e.length)r(e);else{var o=e[t],a=o.url;(0,l.get_by_cookie)(a,{},function(a){var i=a.data,c=void 0===i?"":i;o.data=decodeURI(c),n.recursion_request(e,++t,r)})}},n.render=function(){var e=n.state,t=e.check_ub_characters_btn_loading,o=e.disabled;return c.default.createElement("div",{className:"CheckCharacters"},c.default.createElement(r.default,{type:"primary",loading:t,disabled:o,onClick:!o&&n.handle_check_ub_characters,style:{width:"90%"}},"严格检查骑空士队友是否失格"))},n.state={check_ub_characters_btn_loading:!1,disabled:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}();t.default=f;var d=[{key:1,name:"",url:"3040030000"},{key:2,name:"",url:"3040031000"},{key:3,name:"",url:"3040032000"},{key:4,name:"",url:"3040033000"},{key:5,name:"",url:"3040034000"},{key:6,name:"",url:"3040035000"},{key:7,name:"",url:"3040036000"},{key:8,name:"",url:"3040037000"},{key:9,name:"",url:"3040038000"},{key:10,name:"",url:"3040039000"}],p=[{title:"姓名",dataIndex:"nickName",key:"nickName"},{title:"年龄",dataIndex:"userRank",key:"userRank"},{title:"天人",dataIndex:"hasCharacter",key:"hasCharacter"}]},324:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".SetZoom{}",""])},325:function(e,t,n){var r=n(324);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},336:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(335));n(328);var o=n(1),a=l(o),i=l(n(101)),c=l(n(13));function l(e){return e&&e.__esModule?e:{default:e}}n(325);var u=(chrome.extension?chrome.extension.getBackgroundPage():{store:new c.default}).store,s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_zoom=function(e){u.set("zoom",e),chrome.tabs.query({active:!0,currentWindow:!0},function(t){chrome.tabs.connect(t[0].id,{name:"popup_to_content"}).postMessage({zoom:e,message:"set_zoom"})})},n.render=function(){var e=n.state.defaultZoom;return a.default.createElement("div",{className:"SetZoom"},a.default.createElement("div",{style:{margin:"0 6%",textAlign:"left"}},a.default.createElement("span",{style:{color:"#666"}},"调节窗口大小"),a.default.createElement(r.default,{step:.01,min:.3,max:1.5,defaultValue:e,onChange:n.handle_zoom})),a.default.createElement(i.default,null))},n.state={defaultZoom:u.get("zoom")},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),t}();t.default=s},337:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".CoopraidSearch{}",""])},338:function(e,t,n){var r=n(337);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},349:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(100)),o=s(n(346)),a=s(n(161));n(149),n(341),n(82);var i=n(1),c=s(i),l=s(n(101)),u=s(n(13));function s(e){return e&&e.__esModule?e:{default:e}}n(338);var f=(chrome.extension?chrome.extension.getBackgroundPage():{store:new u.default}).store,d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));p.call(n);var r=f.get("search")||"";return n.state={coopraid_search_value:r,coopraid_switch_checked:!!r},r&&n.handle_search(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),t}(),p=function(){var e=this;this.componentDidMount=function(){},this.handle_search=function(){var t=e.state.coopraid_search_value;chrome.tabs.query({active:!0,currentWindow:!0},function(e){var n=chrome.tabs.connect(e[0].id,{name:"popup_to_content"});f.set("search",t),n.postMessage({message:"open_coopraid_search",search:t})})},this.handle_coopraid_search=function(t){return e.setState({coopraid_search_value:t.target.value})},this.handle_coopraid_switch=function(t){t?e.handle_search():(f.remove("search"),e.setState({coopraid_search_value:""})),e.setState({coopraid_switch_checked:t})},this.render=function(){var t=e.state,n=t.coopraid_search_value,i=t.coopraid_switch_checked;return c.default.createElement("div",{className:"CoopraidSearch"},c.default.createElement(a.default,{style:{width:"90%"},onChange:e.handle_coopraid_search,value:n,placeholder:"这里填房间描述"}),c.default.createElement(l.default,null),c.default.createElement("div",{style:{marginLeft:"6%"}},c.default.createElement(r.default,{title:"看见上面的文本框了么，填了这个你才能开启搜索"},c.default.createElement("span",{style:{float:"left",color:"#666"}},"是否开启共斗搜索"),c.default.createElement(o.default,{disabled:!n,onChange:e.handle_coopraid_switch,checked:i,style:{float:"right",marginRight:"6%"}}),c.default.createElement("div",{style:{clear:"both"}}))),c.default.createElement(l.default,null))}};t.default=d},350:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".UploadItems{}",""])},351:function(e,t,n){var r=n(350);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},352:function(e,t,n){(e.exports=n(45)(!1)).push([e.i,".white-space {\r\n    margin-top: 8px;\r\n}",""])},353:function(e,t,n){var r=n(352);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(44)(r,o);r.locals&&(e.exports=r.locals)},36:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=u(r),a=u(n(415)),i=u(n(349)),c=u(n(336)),l=u(n(323));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}n(182);var f=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,f=Array(u),d=0;d<u;d++)f[d]=arguments[d];return n=r=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),r.render=function(){return o.default.createElement("div",{className:"Popup"},o.default.createElement(a.default,null),o.default.createElement(i.default,null),o.default.createElement(c.default,null),o.default.createElement(l.default,null))},s(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),t}();t.default=f},415:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=d(n(88)),o=d(n(161)),a=d(n(159)),i=d(n(106));n(83),n(82),n(151),n(150);var c=n(1),l=d(c),u=d(n(101)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6)),f=d(n(13));function d(e){return e&&e.__esModule?e:{default:e}}function p(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(351);var h=i.default.Option,_=(chrome.extension?chrome.extension.getBackgroundPage():{store:new f.default}).store,y="http://game.granbluefantasy.jp/item/article_list_by_filter_mode",m="http://game.granbluefantasy.jp/item/recovery_and_evolution_list_by_filter_mode",v=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.componentDidMount=function(){},n.handle_address=function(e){return n.setState({address:e.target.value})},n.handle_head_address=function(e){return n.setState({head_address:e})},n.handle_upload=function(){var e=n.state,t=e.head_address,r=e.address;n.setState({btn_loading:!0});var o=_.get("userId");if(!o)return a.default.open({message:"非法操作",description:"没获得到userId",duration:3}),void n.setState({btn_loading:!1});s.get_by_cookie(y,{},function(e){s.get_by_cookie(m,{},function(i){i=n.steam_roller(i),e=[].concat(p(e),p(i));var c="user_id="+o+"&data="+JSON.stringify(e);s.upload_to_server(""+t+r+"/Memo/gbf/i_item.do",{body:c},function(e){"success"==e&&a.default.open({message:"上传成功",description:"",duration:3}),n.setState({btn_loading:!1})})})})},n.steam_roller=function(e){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var l=i.value;Array.isArray(l)?t.push.apply(t,n.steam_roller(l)):t.push(l)}}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return t},n.render=function(){var e=n.state,t=e.address,a=(e.head_address,e.btn_loading),c=l.default.createElement(i.default,{defaultValue:"http://",style:{width:90},onChange:n.handle_head_address},l.default.createElement(h,{value:"http://"},"http://"),l.default.createElement(h,{value:"https://"},"https://"),l.default.createElement(h,{value:"ftp://"},"ftp://"));return l.default.createElement("div",{className:"UploadItems"},l.default.createElement(o.default,{addonBefore:c,style:{width:"90%"},onChange:n.handle_address,value:t}),l.default.createElement(u.default,null),l.default.createElement(r.default,{type:"primary",loading:a,onClick:n.handle_upload,style:{width:"90%"}},"上传素材"),l.default.createElement(u.default,null))},n.state={address:"localhost:8023",head_address:"http://",btn_loading:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.Component),t}();t.default=v},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.upload_to_server=function(e,t,n){if(e){var r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.text()}).then(function(e){return n(e)}).catch(function(e){})}},t.get_by_cookie=function(e,t,n){if(e){var r={credentials:"include"};r=Object.assign(r,t),fetch(e,r).then(function(e){return e.json()}).then(function(e){return n(e)}).catch(function(e){})}}}}]);