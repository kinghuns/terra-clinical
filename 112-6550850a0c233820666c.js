(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1313:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(0)),r=s(l(3)),i=s(l(931)),n=s(l(963));function s(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(n.default),o=a.default.createElement("p",null,"A Detail List Item"),d=a.default.createElement("p",null,"A Detail List Item to prove float concept when screen readjusts smaller."),c=a.default.createElement("p",null," A sample accessory container "),f=function(){return a.default.createElement(i.default,{title:"Header",secondaryTitles:["secondaryTitle1","secondaryTitle2"],subtitles:["Subtitle 1","Subtitle 2"],graph:a.default.createElement("div",{className:u("graph-content")},"This is where any visualizations would go"),accessory:c,details:[a.default.createElement(i.default.DetailList,{title:"Detail List Title",key:"detailInfo-1"},a.default.createElement(i.default.DetailListItem,{item:o}),a.default.createElement(i.default.DetailListItem,{item:o}),a.default.createElement(i.default.DetailListItem,{item:d}),a.default.createElement(i.default.DetailListItem,{item:o}),a.default.createElement(i.default.DetailListItem,{item:o}))],footer:"Footer Text",isDivided:!1,id:"DetailView",isSmallerTitles:!1})};t.default=f},923:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l(0)),r=s(l(1)),i=s(l(3)),n=s(l(940));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d=i.default.bind(n.default),c={item:r.default.element.isRequired},f=function(e){var t=e.item,l=o(e,["item"]),r=d(["detail-list-item",l.className]);return a.default.createElement("div",u({},l,{className:r}),t)};f.propTypes=c,f.defaultProps={};var m=f;t.default=m},931:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(l(0)),r=c(l(1)),i=c(l(9)),n=c(l(3)),s=c(l(6)),u=c(l(937)),o=c(l(938)),d=c(l(923));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function m(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var _=n.default.bind(u.default),y={title:r.default.string,secondaryTitles:r.default.arrayOf(r.default.string),subtitles:r.default.arrayOf(r.default.string),accessory:r.default.element,graph:r.default.element,details:r.default.arrayOf(r.default.element),footer:r.default.string,isDivided:r.default.bool,isSmallerTitles:r.default.bool},v={title:void 0,secondaryTitles:[],subtitles:[],graph:void 0,accessory:void 0,details:[],footer:void 0,isDivided:!0,isSmallerTitles:!1},b=function(e){var t=e.title,l=e.secondaryTitles,r=e.subtitles,n=e.accessory,u=e.graph,o=e.details,d=e.footer,c=e.isDivided,y=e.isSmallerTitles,v=p(e,["title","secondaryTitles","subtitles","accessory","graph","details","footer","isDivided","isSmallerTitles"]),b=a.default.useContext(s.default),O=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?f(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},v);O.className=(0,i.default)(_("detail-view",b.className),O.className);var h=t?a.default.createElement("h1",{className:_("primary-text")},t):null,w=l.map((function(e,t){return a.default.createElement("div",{className:_("secondary-text"),key:"".concat(t)},e)})),g=r.map((function(e,t){return a.default.createElement("div",{className:_("subtitle"),key:"".concat(t)},e)})),D=n?a.default.createElement("div",{className:_("accessory")},n):null,j=d?a.default.createElement("div",{className:_("footer-text")},d):null,E=null,P=[];if(c){E=a.default.createElement("hr",{className:_("divider")});for(var x=0;x<o.length;x+=1)P.push(o[x]),P.push(E)}else P=o;return a.default.createElement("div",O,a.default.createElement("div",{className:_("titles-section",{"titles-smaller":y})},h,w,g,D),u&&E,u,E,P,j)};b.propTypes=y,b.defaultProps=v,b.DetailList=o.default,b.DetailListItem=d.default;var O=b;t.default=O},937:function(e,t,l){e.exports={"clinical-lowlight-theme":"DetailView-module__clinical-lowlight-theme___1rp7s","orion-fusion-theme":"DetailView-module__orion-fusion-theme___2Rm0N","detail-view":"DetailView-module__detail-view___3dXBb","titles-section":"DetailView-module__titles-section___3AQ7Y","primary-text":"DetailView-module__primary-text___1nLJ8","secondary-text":"DetailView-module__secondary-text___1qD7n",subtitle:"DetailView-module__subtitle___3OjR4",accessory:"DetailView-module__accessory___2jT3V","titles-smaller":"DetailView-module__titles-smaller___1MZ4k","footer-text":"DetailView-module__footer-text___15_yM",divider:"DetailView-module__divider___11xmz"}},938:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(l(0)),r=u(l(1)),i=u(l(3)),n=u(l(939)),s=u(l(923));function u(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)l=i[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=i.default.bind(n.default),f={title:r.default.string,children:r.default.oneOfType([r.default.objectOf(s.default),r.default.arrayOf(r.default.objectOf(s.default))])},m={title:void 0,children:void 0},p=function(e){var t,l=e.title,r=e.children,i=d(e,["title","children"]);return l&&(t=a.default.createElement("div",{className:c("title")},l)),a.default.createElement("div",o({},i,{"data-terra-clincial-detail-list":!0,className:i.className}),t,a.default.createElement("div",{className:c("list")},r))};p.propTypes=f,p.defaultProps=m;var _=p;t.default=_},939:function(e,t,l){e.exports={title:"DetailList-module__title___1XkCA",list:"DetailList-module__list___2DSX7"}},940:function(e,t,l){e.exports={"detail-list-item":"DetailListItem-module__detail-list-item___3OOb_"}},963:function(e,t,l){e.exports={"graph-content":"DetailViewCommon-test-module__graph-content___1pl1w"}}}]);