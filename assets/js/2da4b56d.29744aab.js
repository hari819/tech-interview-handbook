(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9856],{2122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},9756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4050:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"stack",title:"Stack"},l={unversionedId:"algorithms/stack",id:"algorithms/stack",isDocsHomePage:!1,title:"Stack",description:"Sample questions",source:"@site/../contents/algorithms/stack.md",sourceDirName:"algorithms",slug:"/algorithms/stack",permalink:"/algorithms/stack",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/stack.md",version:"current",lastUpdatedBy:"Author",lastUpdatedAt:1539502055,formattedLastUpdatedAt:"10/14/2018",frontMatter:{id:"stack",title:"Stack"},sidebar:"docs",previous:{title:"Sorting and Searching",permalink:"/algorithms/sorting-searching"},next:{title:"String",permalink:"/algorithms/string"}},c=[{value:"Sample questions",id:"sample-questions",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"sample-questions"},"Sample questions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implementation of an interpreter for a small language that does multiplication/addition/etc."),(0,i.kt)("li",{parentName:"ul"},"Design a ",(0,i.kt)("inlineCode",{parentName:"li"},"MinStack")," data structure that supports a ",(0,i.kt)("inlineCode",{parentName:"li"},"min()")," operation that returns the minimum value in the stack in O(1) time."),(0,i.kt)("li",{parentName:"ul"},"Write an algorithm to determine if all of the delimiters in an expression are matched and closed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"E.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"{ac[bb]}"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"[dklf(df(kl))d]{}")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"{[[[]]]}")," are matched. But ",(0,i.kt)("inlineCode",{parentName:"li"},"{3234[fd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"{df][d}")," are not."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://blog.gainlo.co/index.php/2016/09/30/uber-interview-question-delimiter-matching/"},"Source")))),(0,i.kt)("li",{parentName:"ul"},"Sort a stack in ascending order using an additional stack.")))}s.isMDXComponent=!0}}]);