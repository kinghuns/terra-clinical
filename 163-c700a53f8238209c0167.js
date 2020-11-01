(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{1298:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return d}));t(0);var a=t(291),i=t(973);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c={};function d(e){var n=e.components,t=l(e,["components"]);return Object(a.mdx)("wrapper",r({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-clinical-onset-picker-upgrade-guide"},"Terra Clinical Onset Picker Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-30-to-40"},"Changes from 3.0 to 4.0"),Object(a.mdx)("h3",{id:"breaking-changes"},"Breaking Changes"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"granularitySelectOnChange")),Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"precisionSelectOnChange")),Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"onsetDateInputOnChange")),Object(a.mdx)("li",{parentName:"ul"},"Condensed onChange function props into a single prop (",Object(a.mdx)("inlineCode",{parentName:"li"},"onsetOnChange"),") that returns an Object for the onsetDate.")),Object(a.mdx)("h3",{id:"changes-for-onsetonchange"},"Changes for onsetOnChange"),Object(a.mdx)("pre",null,Object(a.mdx)("code",r({parentName:"pre"},{className:"language-diff"}),"-  this.handleGranularity = this.handleGranularity.bind(this);\n-  this.handlePrecision = this.handlePrecision.bind(this);\n-  handleGranularity(granularity) {\n-    this.setState({ granularity });\n-  }\n\n- handlePrecision(precision) {\n-    this.setState({ precision });\n-  }\n\n-  handleOnset(onsetDate) {\n-    this.setState({ onsetDate });\n+  handleOnset(onsetObject) {\n+    this.setState({\n+      precision: onsetObject.precision,\n+      granularity: onsetObject.granularity,\n+      onsetDate: onsetObject.onsetDate,\n+      ageUnit: onsetObject.ageUnit,\n+    });\n        <OnsetPicker\n          birthdate={moment().subtract(6, 'years').format()}\n          granularity={this.state.granularity}\n-         granularitySelectOnChange={this.handleGranularity}\n          id=\"doogs-supplied\"\n          precision={this.state.precision}\n-         precisionSelectOnChange={this.handlePrecision}\n          onsetDate={this.state.onsetDate}\n-         onsetDateInputOnChange={this.handleOnset}\n+         onsetOnChange={this.handleOnset}\n        />\n")),Object(a.mdx)("h3",{id:"new-feature"},"New Feature"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Added support for age units. Use new ",Object(a.mdx)("inlineCode",{parentName:"li"},"ageUnit")," prop to pass default age unit values, accepted values are ",Object(a.mdx)("inlineCode",{parentName:"li"},"weeks"),", ",Object(a.mdx)("inlineCode",{parentName:"li"},"months"),", or ",Object(a.mdx)("inlineCode",{parentName:"li"},"years")," ")),Object(a.mdx)("h3",{id:"new-props"},"New Props"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"New prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"ageUnit")),Object(a.mdx)("li",{parentName:"ul"},"New prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"onsetOnChange"))),Object(a.mdx)("h2",{id:"changes-from-20-to-30"},"Changes from 2.0 to 3.0"),Object(a.mdx)("h3",{id:"breaking-changes-1"},"Breaking Changes"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"New required prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"id")),Object(a.mdx)("li",{parentName:"ul"},"Removed exported enums ",Object(a.mdx)("inlineCode",{parentName:"li"},"OnsetPicker.Opts.Granularities")," and ",Object(a.mdx)("inlineCode",{parentName:"li"},"OnsetPicker.Opts.Precisions")),Object(a.mdx)("li",{parentName:"ul"},"Removed default prop values for ",Object(a.mdx)("inlineCode",{parentName:"li"},"granularity")," and ",Object(a.mdx)("inlineCode",{parentName:"li"},"precision")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"onChange")," functions can now return blank values"),Object(a.mdx)("li",{parentName:"ul"},"Visual updates from switching to ",Object(a.mdx)("inlineCode",{parentName:"li"},"terra-form-field"),", ",Object(a.mdx)("inlineCode",{parentName:"li"},"terra-form-fieldset"),", ",Object(a.mdx)("inlineCode",{parentName:"li"},"terra-form-input"),", and ",Object(a.mdx)("inlineCode",{parentName:"li"},"terra-form-select"))),Object(a.mdx)("h3",{id:"new-features"},"New Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"CSS themeable variables")),Object(a.mdx)("h3",{id:"removed-props"},"Removed props"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"granularitySelectName")),Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"precisionSelectName")),Object(a.mdx)("li",{parentName:"ul"},"Removed prop ",Object(a.mdx)("inlineCode",{parentName:"li"},"precisionSelectName"))),Object(a.mdx)("h3",{id:"css-variables"},"CSS Variables"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-field-margin-right"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-field-margin-bottom"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-precision-select-min-width"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-granularity-select-min-width"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-month-select-min-width"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-age-granularity-select-min-width"),Object(a.mdx)("li",{parentName:"ul"},"--terra-clinical-onset-picker-age-input-width")))}d.isMDXComponent=!0},907:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t(0)),i=c(t(1)),r=c(t(3)),l=c(t(910));function c(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(l.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var n=e.src,t=e.name,i=e.url,r=e.version,l=a.default.createElement("a",{className:d("badge"),href:i||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},a.default.createElement("span",{className:d("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(r))),c=n?a.default.createElement("a",{className:d("badge"),href:n},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},l,c)};s.propTypes=o;var m=s;n.default=m},910:function(e,n,t){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},973:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(0),i=t.n(a),r=t(907),l=t.n(r),c=function(e){var n=e.url;return i.a.createElement(l.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-onset-picker",name:"terra-clinical-onset-picker",version:"4.24.0",url:n})}}}]);