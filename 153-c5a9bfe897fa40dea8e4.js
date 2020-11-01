(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1293:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));n(0);var a=n(291),l=n(959);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function s(e){var t=e.components,n=c(e,["components"]);return Object(a.mdx)("wrapper",o({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"selectable-implementation"},"Selectable Implementation"),Object(a.mdx)("p",null,"The Item Collection provides the foundation to be rendered as a selectable component when a selection event is provided to the collection and items are indicated as selectable. The selection state management is then controlled by the component rendering the Item Collection. When an item receives a click or keydown event, the event and item key is returned such that the desired selection logic can be applied before updating the item's selection state. This means that the Item Collection is capable of being a single- or multi- selectable component."),Object(a.mdx)("h3",{id:"implementation-details"},"Implementation Details"),Object(a.mdx)("p",null,"To create a Selectable Item Collection, add the following to a static Item Collection implementation:"),Object(a.mdx)("ol",null,Object(a.mdx)("li",{parentName:"ol"},"Pass an ",Object(a.mdx)("inlineCode",{parentName:"li"},"onSelect")," function to the ItemCollection. This function will handle selection state updates."),Object(a.mdx)("li",{parentName:"ol"},"Add the ",Object(a.mdx)("inlineCode",{parentName:"li"},"isSelectable")," prop to each Item that should have selectable behavior.",Object(a.mdx)("ol",{parentName:"li"},Object(a.mdx)("li",{parentName:"ol"},"When adding ",Object(a.mdx)("inlineCode",{parentName:"li"},"isSelectable"),", the following attributes are added to the item: hover and focus styles, tabIndex=0, onClick and onKeyDown events. These events use the onSelect function passed to the ItemCollection."))),Object(a.mdx)("li",{parentName:"ol"},"Add a unique key to each item. These keys should be managed to handle selection state."),Object(a.mdx)("li",{parentName:"ol"},"Add the ",Object(a.mdx)("inlineCode",{parentName:"li"},"isSelected")," prop to the items that have a selected state.",Object(a.mdx)("ol",{parentName:"li"},Object(a.mdx)("li",{parentName:"ol"},"When adding ",Object(a.mdx)("inlineCode",{parentName:"li"},"isSelected"),", the selected styles are applied.")))),Object(a.mdx)("h3",{id:"selectable-item-collection-example"},"Selectable Item Collection Example"),Object(a.mdx)("pre",null,Object(a.mdx)("code",o({parentName:"pre"},{className:"language-diff"}),'import React from \'react\';\nimport ItemCollection from \'terra-clinical-item-collection\';\n\nclass SelectableExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n+     selectedKey: //add logic that determines the selected index\n    };\n+   this.handleOnSelect = this.handleOnSelect.bind(this);\n  }\n\n+ handleOnSelect(event, selectedKey) {\n+   if ( // add logic to determine if selection should occur ) {\n+     event.preventDefault();\n+     this.setState({ selectedKey });\n+   }\n+ }\n\n  render() {\n    return (\n      <ItemCollection\n        breakpoint="tiny"\n        hasStartAccessory\n        numberOfDisplays={3}\n        hasComment\n        hasEndAccessory\n+       onSelect={this.handleOnSelect}                      // Step 1\n      >\n        <ItemCollection.Item\n+         isSelectable                                      // Step 2\n+         key="key-1"                                       // Step 3\n+         isSelected={this.state.selectedKey === \'key-1\'}   // Step 4\n          startAccessory={<Icon/>}\n          comment={<ItemCollection.Comment text="Comment" />}\n          endAccessory={<Icon/>}\n        >\n          <ItemCollection.Display text="Display 1" />\n          <ItemCollection.Display text="Display 2" />\n          <ItemCollection.Display text="Display 3" />\n        </ItemCollection.Item>\n        <ItemCollection.Item\n+         isSelectable                                      // Step 2\n+         key="key-2"                                       // Step 3\n+         isSelected={this.state.selectedKey === \'key-2\'}   // Step 4\n          startAccessory={<Icon/>}\n          comment={<ItemCollection.Comment text="Comment" />}\n          endAccessory={<Icon/>}\n        >\n          <ItemCollection.Display text="Display 1" />\n          <ItemCollection.Display text="Display 2" />\n        </ItemCollection.Item>\n      </ItemCollection>\n    );\n  }\n}\n\nexport default SelectableExample;\n')))}s.isMDXComponent=!0},907:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(1)),o=i(n(3)),c=i(n(910));function i(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(c.default),r={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,l=e.url,o=e.version,c=a.default.createElement("a",{className:s("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:s("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:s("badge-version")},"v".concat(o))),i=t?a.default.createElement("a",{className:s("badge"),href:t},a.default.createElement("span",{className:s("badge-name")},"github"),a.default.createElement("span",{className:s("badge-version")},"source")):void 0;return a.default.createElement("div",{className:s("badge-container")},c,i)};d.propTypes=r;var m=d;t.default=m},910:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},959:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),l=n.n(a),o=n(907),c=n.n(o),i=function(e){var t=e.url;return l.a.createElement(c.a,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-collection",name:"terra-clinical-item-collection",version:"4.25.0",url:t})}}}]);