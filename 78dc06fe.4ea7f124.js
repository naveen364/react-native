(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1017:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,u=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},551:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(1017)),o={id:"layoutanimation",title:"LayoutAnimation"},l={unversionedId:"layoutanimation",id:"version-0.60/layoutanimation",isDocsHomePage:!1,title:"LayoutAnimation",description:"Automatically animates views to their new positions when the next layout happens.",source:"@site/versioned_docs/version-0.60/layoutanimation.md",slug:"/layoutanimation",permalink:"/docs/0.60/layoutanimation",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/layoutanimation.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"Layout Props",permalink:"/docs/0.60/layout-props"},next:{title:"Linking",permalink:"/docs/0.60/linking"}},b=[{value:"Methods",id:"methods",children:[{value:"<code>configureNext()</code>",id:"configurenext",children:[]},{value:"<code>create()</code>",id:"create",children:[]}]},{value:"Properties",id:"properties",children:[{value:"Types",id:"types",children:[]},{value:"Properties",id:"properties-1",children:[]},{value:"Presets",id:"presets",children:[]},{value:"<code>easeInEaseOut()</code>",id:"easeineaseout",children:[]},{value:"<code>linear()</code>",id:"linear",children:[]},{value:"<code>spring()</code>",id:"spring",children:[]}]}],c={toc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Automatically animates views to their new positions when the next layout happens."),Object(i.b)("p",null,"A common way to use this API is to call it before calling ",Object(i.b)("inlineCode",{parentName:"p"},"setState"),"."),Object(i.b)("p",null,"Note that in order to get this to work on ",Object(i.b)("strong",{parentName:"p"},"Android")," you need to set the following flags via ",Object(i.b)("inlineCode",{parentName:"p"},"UIManager"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"if (Platform.OS === 'android') {\n  if (UIManager.setLayoutAnimationEnabledExperimental) {\n    UIManager.setLayoutAnimationEnabledExperimental(true);\n  }\n}\n")),Object(i.b)("p",null,"Example usage:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport {\n  View,\n  Text,\n  TouchableOpacity,\n  Platform,\n  UIManager\n} from 'react-native';\n\nif (\n  Platform.OS === 'android' &&\n  UIManager.setLayoutAnimationEnabledExperimental\n) {\n  UIManager.setLayoutAnimationEnabledExperimental(true);\n}\nclass AnimatedCollapsible extends React.Component {\n  state = { expanded: false };\n  render() {\n    return (\n      <View style={{ overflow: 'hidden' }}>\n        <TouchableOpacity\n          onPress={() => {\n            LayoutAnimation.configureNext(\n              LayoutAnimation.Presets.spring\n            );\n            this.setState({ expanded: !this.state.expanded });\n          }}>\n          <Text>\n            Press me to{' '}\n            {this.state.expanded ? 'collapse' : 'expand'}!\n          </Text>\n        </TouchableOpacity>\n        {this.state.expanded && (\n          <Text>I disappear sometimes!</Text>\n        )}\n      </View>\n    );\n  }\n}\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"configurenext"},Object(i.b)("inlineCode",{parentName:"h3"},"configureNext()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static configureNext(config, onAnimationDidEnd?)\n")),Object(i.b)("p",null,"Schedules an animation to happen on the next layout."),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Required"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"config"),Object(i.b)("td",{parentName:"tr",align:null},"object"),Object(i.b)("td",{parentName:"tr",align:null},"Yes"),Object(i.b)("td",{parentName:"tr",align:null},"See config description below.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"onAnimationDidEnd"),Object(i.b)("td",{parentName:"tr",align:null},"function"),Object(i.b)("td",{parentName:"tr",align:null},"No"),Object(i.b)("td",{parentName:"tr",align:null},"Called when the animation finished. Only supported on iOS.")))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"config")," parameter is an object with the keys below. ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#create"},Object(i.b)("inlineCode",{parentName:"a"},"create"))," returns a valid object for ",Object(i.b)("inlineCode",{parentName:"p"},"config"),", and the ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#presets"},Object(i.b)("inlineCode",{parentName:"a"},"Presets"))," objects can also all be passed as the ",Object(i.b)("inlineCode",{parentName:"p"},"config"),"."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"duration")," in milliseconds"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"create"),", optional config for animating in new views"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"update"),", optional config for animating views that have been updated"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delete"),", optional config for animating views as they are removed")),Object(i.b)("p",null,"The config that's passed to ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," has the following keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type"),", the ",Object(i.b)("a",{parentName:"li",href:"/docs/0.60/layoutanimation#types"},"animation type")," to use"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"property"),", the ",Object(i.b)("a",{parentName:"li",href:"/docs/0.60/layoutanimation#properties"},"layout property")," to animate (optional, but recommended for ",Object(i.b)("inlineCode",{parentName:"li"},"create")," and ",Object(i.b)("inlineCode",{parentName:"li"},"delete"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"springDamping")," (number, optional and only for use with ",Object(i.b)("inlineCode",{parentName:"li"},"type: Type.spring"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"initialVelocity")," (number, optional)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"delay")," (number, optional)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"duration")," (number, optional)")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"create"},Object(i.b)("inlineCode",{parentName:"h3"},"create()")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"static create(duration, type, creationProp)\n")),Object(i.b)("p",null,"Helper that creates an object (with ",Object(i.b)("inlineCode",{parentName:"p"},"create"),", ",Object(i.b)("inlineCode",{parentName:"p"},"update"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"delete")," fields) to pass into ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#configurenext"},Object(i.b)("inlineCode",{parentName:"a"},"configureNext")),". The ",Object(i.b)("inlineCode",{parentName:"p"},"type")," parameter is an ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#types"},"animation type"),", and the ",Object(i.b)("inlineCode",{parentName:"p"},"creationProp")," parameter is a ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#properties"},"layout property"),"."),Object(i.b)("p",null,"Example usage:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"LayoutAnimation.configureNext(\n  LayoutAnimation.create(\n    500,\n    LayoutAnimation.Types.spring,\n    LayoutAnimation.Properties.scaleXY\n  )\n);\n")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"types"},"Types"),Object(i.b)("p",null,"An enumeration of animation types to be used in the ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#create"},Object(i.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(i.b)("inlineCode",{parentName:"p"},"create"),"/",Object(i.b)("inlineCode",{parentName:"p"},"update"),"/",Object(i.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#configurenext"},Object(i.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(i.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Types.easeIn"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Types"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"spring")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"linear")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"easeInEaseOut")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"easeIn")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"easeOut")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"keyboard")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"properties-1"},"Properties"),Object(i.b)("p",null,"An enumeration of layout properties to be animated to be used in the ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#create"},Object(i.b)("inlineCode",{parentName:"a"},"create"))," method, or in the ",Object(i.b)("inlineCode",{parentName:"p"},"create"),"/",Object(i.b)("inlineCode",{parentName:"p"},"update"),"/",Object(i.b)("inlineCode",{parentName:"p"},"delete")," configs for ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#configurenext"},Object(i.b)("inlineCode",{parentName:"a"},"configureNext")),". (example usage: ",Object(i.b)("inlineCode",{parentName:"p"},"LayoutAnimation.Properties.opacity"),")"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Properties"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"opacity")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"scaleX")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"scaleY")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"scaleXY")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"presets"},"Presets"),Object(i.b)("p",null,"A set of predefined animation configs to pass into ",Object(i.b)("a",{parentName:"p",href:"/docs/0.60/layoutanimation#configurenext"},Object(i.b)("inlineCode",{parentName:"a"},"configureNext")),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Presets"),Object(i.b)("th",{parentName:"tr",align:null},"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"easeInEaseOut"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"create(300, 'easeInEaseOut', 'opacity')"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"linear"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"create(500, 'linear', 'opacity')"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"spring"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"{ duration: 700, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }"))))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"easeineaseout"},Object(i.b)("inlineCode",{parentName:"h3"},"easeInEaseOut()")),Object(i.b)("p",null,"Calls ",Object(i.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Presets.easeInEaseOut"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"linear"},Object(i.b)("inlineCode",{parentName:"h3"},"linear()")),Object(i.b)("p",null,"Calls ",Object(i.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Presets.linear"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"spring"},Object(i.b)("inlineCode",{parentName:"h3"},"spring()")),Object(i.b)("p",null,"Calls ",Object(i.b)("inlineCode",{parentName:"p"},"configureNext()")," with ",Object(i.b)("inlineCode",{parentName:"p"},"Presets.spring"),"."))}p.isMDXComponent=!0}}]);