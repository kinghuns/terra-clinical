(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(925));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return a.default.createElement(i.default,{text:"test comment",id:"ItemComment"})}},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),i=l(n(17));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r=function(e){var t=o({},e);return a.default.createElement(i.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};r.displayName="IconComment",r.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=r;t.default=u},914:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var a=c(n(0)),i=c(n(1)),l=c(n(9)),o=c(n(3)),r=c(n(6)),u=c(n(917));function c(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var _=o.default.bind(u.default),f={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=f;var p={text:i.default.string,textStyle:i.default.oneOf(Object.values(f)),isTruncated:i.default.bool,isDisabled:i.default.bool,icon:i.default.element,iconAlignment:i.default.oneOf(["center","top","inline"])},y={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},v=function(e){var t,n=e.text,i=e.textStyle,o=e.isTruncated,u=e.isDisabled,c=e.icon,p=e.iconAlignment,y=m(e,["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"]),v=a.default.useContext(r.default),b=(0,l.default)(_("item-display",{"is-disabled":u},d({},"icon-".concat(p),c),v.className),y.className),O=_(["text",{"is-truncated":o},d({},"".concat(i),i===f.SECONDARY),d({},"".concat(i),i===f.ATTENTION),d({},"".concat(i),i===f.STRONG),{"strike-through":i===f.STRIKETHROUGH}]);return c&&(t=a.default.createElement("div",{className:_("icon")},c)),a.default.createElement("div",s({},y,{className:b,"aria-disabled":u}),t,a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:O},n))};v.propTypes=p,v.defaultProps=y;var b=v;t.default=b},917:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___3PFvw","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___1Yt2B","item-display":"ItemDisplay-module__item-display___3yi9q",text:"ItemDisplay-module__text___c-QUG",icon:"ItemDisplay-module__icon___SD1FM","icon-center":"ItemDisplay-module__icon-center___2_JkX","icon-top":"ItemDisplay-module__icon-top___19Qjs","icon-inline":"ItemDisplay-module__icon-inline___28SMk","is-truncated":"ItemDisplay-module__is-truncated___2UWjL","is-disabled":"ItemDisplay-module__is-disabled___1nKWv",secondary:"ItemDisplay-module__secondary___3UcUl",attention:"ItemDisplay-module__attention___3lc20",strong:"ItemDisplay-module__strong___EtBtH","strike-through":"ItemDisplay-module__strike-through___1ixOq"}},925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(0)),i=d(n(1)),l=d(n(9)),o=d(n(3)),r=d(n(6)),u=d(n(906)),c=d(n(914)),s=d(n(926));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f=o.default.bind(s.default),p={text:i.default.string,isTruncated:i.default.bool},y=function(e){var t=e.text,n=e.isTruncated,i=_(e,["text","isTruncated"]),o=a.default.useContext(r.default),s=(0,l.default)(f("item-comment",o.className),i.className);return a.default.createElement(c.default,m({text:t,isTruncated:n,icon:a.default.createElement(u.default,{className:f("inline-icon")})},i,{className:s}))};y.propTypes=p,y.defaultProps={text:"",isTruncated:!1};var v=y;t.default=v},926:function(e,t,n){e.exports={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___bfjk8","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___2IKgp","item-comment":"ItemComment-module__item-comment___3CMDj","inline-icon":"ItemComment-module__inline-icon___3zuUm"}}}]);