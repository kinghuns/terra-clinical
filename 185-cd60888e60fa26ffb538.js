(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1349:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(0)),o=u(n(898)),a=u(n(950));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?p(t):e}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(f,t);var e,n,u,i=s(f);function f(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),e=i.call(this,t),o.default.now=function(){return new Date(2016,8,20)},e.state={precision:"before",granularity:"year",onsetDate:(0,o.default)("2013-02-14").format("YYYY-MM-DD")},e.handleOnset=e.handleOnset.bind(p(e)),e.handleSubmit=e.handleSubmit.bind(p(e)),e}return e=f,(n=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Onset picker with onChange handlers, birthdate of 2011-09-20 (5 years)."),r.default.createElement("p",null,"Current date is locked to September 20, 2016"),r.default.createElement("p",null,"Testing returns from handlers are correct, if they are the json object should get updated on changes."),r.default.createElement("p",null,"Also tests age caps for months and years."),r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement(a.default,{birthdate:(0,o.default)("2011-09-20").format("YYYY-MM-DD"),granularity:this.state.granularity,id:"test",legend:"Date of Onset",precision:this.state.precision,onsetDate:this.state.onsetDate,onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit")),r.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(e.prototype,n),u&&l(e,u),f}(r.default.Component);e.default=y}}]);