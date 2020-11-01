(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1337:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(293)),o=i(n(294)),l=i(n(3)),s=i(n(927)),c=i(n(964));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(c.default),d=a.default.createElement(s.default.Display,{text:"Display for context"}),m=[d,d,d,d,d,d],_=function(){return a.default.createElement("div",{className:u("accessory-itemview-wrapper")},a.default.createElement("p",null,"Applied width of 700px to show the start and end accessory alignment."),a.default.createElement("h2",null,"Start Acessory"),a.default.createElement(s.default,{startAccessory:a.default.createElement(r.default,{id:"StartAccessory"}),id:"test-start-accessory"}),a.default.createElement("h2",null,"End Acessory"),a.default.createElement(s.default,{endAccessory:a.default.createElement(o.default,{id:"EndAccessory"}),id:"test-end-accessory"}),a.default.createElement("h2",null,"Start and End Acessory"),a.default.createElement(s.default,{startAccessory:a.default.createElement(r.default,{id:"StartAccessory2"}),displays:m,endAccessory:a.default.createElement("button",{type:"button",id:"EndAccessory2",size:"medium"},"Disclose"),layout:"twoColumns",accessoryAlignment:"alignTop",id:"test-both-accessory-top"}),a.default.createElement("h2",null,"Reserve Start Acessory Space"),a.default.createElement(s.default,{reserveStartAccessorySpace:!0,displays:m,endAccessory:a.default.createElement("button",{type:"button",id:"EndAccessory3",size:"medium"},"Disclose"),layout:"twoColumns",id:"test-reserve-start-accessory"}),a.default.createElement("h2",null,"Start Accessory with Font Size 100px"),a.default.createElement("ul",null,a.default.createElement("li",null,a.default.createElement("h3",null,"The max-height and max-width of 40px is maintained"))),a.default.createElement(s.default,{startAccessory:a.default.createElement(r.default,null),id:"test-scale",className:u("itemview-fontsize")}))};t.default=_},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(0)),r=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};s.displayName="IconComment",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=s;t.default=c},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var a=i(n(0)),r=i(n(1)),o=i(n(9)),l=i(n(3)),s=i(n(6)),c=i(n(917));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=l.default.bind(c.default),f={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=f;var y={text:r.default.string,textStyle:r.default.oneOf(Object.values(f)),isTruncated:r.default.bool,isDisabled:r.default.bool,icon:r.default.element,iconAlignment:r.default.oneOf(["center","top","inline"])},p={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n=e.text,r=e.textStyle,l=e.isTruncated,c=e.isDisabled,i=e.icon,y=e.iconAlignment,p=m(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),v=a.default.useContext(s.default),w=(0,o.default)(_("item-display",{"is-disabled":c},d({},"icon-".concat(y),i),v.className),p.className),h=_(["text",{"is-truncated":l},d({},"".concat(r),r===f.SECONDARY),d({},"".concat(r),r===f.ATTENTION),d({},"".concat(r),r===f.STRONG),{"strike-through":r===f.STRIKETHROUGH}]);return i&&(t=a.default.createElement("div",{className:_("icon")},i)),a.default.createElement("div",u({},p,{className:w,"aria-disabled":c}),t,a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:h},n))};v.propTypes=y,v.defaultProps=p;var w=v;t.default=w},917:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___3PFvw","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___1Yt2B","item-display":"ItemDisplay-module__item-display___3yi9q",text:"ItemDisplay-module__text___c-QUG",icon:"ItemDisplay-module__icon___SD1FM","icon-center":"ItemDisplay-module__icon-center___2_JkX","icon-top":"ItemDisplay-module__icon-top___19Qjs","icon-inline":"ItemDisplay-module__icon-inline___28SMk","is-truncated":"ItemDisplay-module__is-truncated___2UWjL","is-disabled":"ItemDisplay-module__is-disabled___1nKWv",secondary:"ItemDisplay-module__secondary___3UcUl",attention:"ItemDisplay-module__attention___3lc20",strong:"ItemDisplay-module__strong___EtBtH","strike-through":"ItemDisplay-module__strike-through___1ixOq"}},925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),r=d(n(1)),o=d(n(9)),l=d(n(3)),s=d(n(6)),c=d(n(906)),i=d(n(914)),u=d(n(926));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=l.default.bind(u.default),y={text:r.default.string,isTruncated:r.default.bool},p=function(e){var t=e.text,n=e.isTruncated,r=_(e,["text","isTruncated"]),l=a.default.useContext(s.default),u=(0,o.default)(f("item-comment",l.className),r.className);return a.default.createElement(i.default,m({text:t,isTruncated:n,icon:a.default.createElement(c.default,{className:f("inline-icon")})},r,{className:u}))};p.propTypes=y,p.defaultProps={text:"",isTruncated:!1};var v=p;t.default=v},926:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___bfjk8","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___2IKgp","item-comment":"ItemComment-module__item-comment___3CMDj","inline-icon":"ItemComment-module__inline-icon___3zuUm"}},927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccessoryAlignments=t.TextEmphasisTypes=t.Layouts=t.default=void 0;var a=d(n(0)),r=d(n(1)),o=d(n(9)),l=d(n(3)),s=d(n(6)),c=d(n(914)),i=d(n(925)),u=d(n(935));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=l.default.bind(u.default),y={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"};t.Layouts=y;var p={DEFAULT:"default",START:"start"};t.TextEmphasisTypes=p;var v={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"};t.AccessoryAlignments=v;var w={layout:r.default.oneOf(["oneColumn","twoColumns"]),textEmphasis:r.default.oneOf(["default","start"]),isTruncated:r.default.bool,accessoryAlignment:r.default.oneOf(["alignTop","alignCenter"]),startAccessory:r.default.node,reserveStartAccessorySpace:r.default.bool,endAccessory:r.default.node,displays:r.default.arrayOf(r.default.element),comment:r.default.node,refCallback:r.default.func},h={layout:y.ONE_COLUMN,textEmphasis:p.DEFAULT,isTruncated:!1,accessoryAlignment:v.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},O=function(e,t,n,r){var o;if(e||t){var l=f("accessory","".concat(r,"-accessory"),{"accessory-align-center":n===v.ALIGN_CENTER},{"accessory-align-top":n===v.ALIGN_TOP});o=a.default.createElement("div",{className:l},e)}return o},b=function(e,t){var n="content-primary-size",a="content-primary-color";return e>0&&(n="content-secondary-size"),(2===t&&1===e||e>=2)&&(a="content-secondary-color"),[n,a]},E=function(e,t,n,a){var r;return r=a===p.START?function(e,t,n){return 1===n?["content-secondary-size","content-secondary-color"]:b(e,t)}(e,t,n):b(e,t),["content"].concat(r)},g=function(e,t,n){if(null!=e&&e.length){for(var r=[],o=e.slice(0,8),l=t===y.TWO_COLUMNS?2:1;o.length;)r.push(o.splice(0,l));return a.default.createElement("div",{className:f("row-container")},r.map((function(e,t){return function(e,t,n,r){var o=t;return a.default.createElement("div",{className:f("row"),key:o},e.map((function(e,o){var l=o,s=E(t,n,o,r);return a.default.createElement("div",{className:f(s),key:l},e)})))}(e,t,r.length,n)})))}},I=function(e){var t=e.layout,n=e.textEmphasis,r=e.isTruncated,l=e.accessoryAlignment,c=e.startAccessory,i=e.reserveStartAccessorySpace,u=e.endAccessory,d=e.displays,p=e.comment,v=e.refCallback,w=_(e,["layout","textEmphasis","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"]),h=a.default.useContext(s.default),b=(0,o.default)(f("item-view",{"is-truncated":r},{"one-column":t===y.ONE_COLUMN},{"two-columns":t===y.TWO_COLUMNS},h.className),w.className);return a.default.createElement("div",m({},w,{className:b,ref:v}),O(c,i,l,"start"),a.default.createElement("div",{className:f("body")},g(d,t,n),p),O(u,!1,l,"end"))};I.propTypes=w,I.defaultProps=h,I.Display=c.default,I.Comment=i.default;var A=I;t.default=A},935:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___BRJFI","orion-fusion-theme":"ItemView-module__orion-fusion-theme___33TOR","item-view":"ItemView-module__item-view___61CR3",accessory:"ItemView-module__accessory___3Htik","start-accessory":"ItemView-module__start-accessory___2waGL","end-accessory":"ItemView-module__end-accessory___iFidE","accessory-align-top":"ItemView-module__accessory-align-top___2gmqS","accessory-align-center":"ItemView-module__accessory-align-center___1DO3t",body:"ItemView-module__body___SD0Vl",row:"ItemView-module__row___1_JaL",content:"ItemView-module__content___3wPtn","is-truncated":"ItemView-module__is-truncated___1duic","one-column":"ItemView-module__one-column___2LPcY","row-container":"ItemView-module__row-container___3YCG9","two-columns":"ItemView-module__two-columns___rwj9b","content-primary-color":"ItemView-module__content-primary-color___3af5E","content-primary-size":"ItemView-module__content-primary-size___3xYXg","content-secondary-color":"ItemView-module__content-secondary-color___3j2Dv","content-secondary-size":"ItemView-module__content-secondary-size___2MzM9"}},964:function(e,t,n){e.exports={"itemview-wrapper":"ItemViewCommon-test-module__itemview-wrapper___vwriQ","comment-itemview-wrapper":"ItemViewCommon-test-module__comment-itemview-wrapper___3T5sf","overflow-displays-itemview":"ItemViewCommon-test-module__overflow-displays-itemview___bEzf0","accessory-itemview-wrapper":"ItemViewCommon-test-module__accessory-itemview-wrapper___3pRu-","itemview-fontsize":"ItemViewCommon-test-module__itemview-fontsize___1hIMC"}}}]);