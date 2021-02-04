(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(268)),c={id:"default_composition_order",title:"Changes to default composition order"},i={unversionedId:"upgrades/1.0_to_1.1/default_composition_order",id:"upgrades/1.0_to_1.1/default_composition_order",isDocsHomePage:!1,title:"Changes to default composition order",description:"Default composition order is changing in Hydra 1.1.",source:"@site/docs/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",slug:"/upgrades/1.0_to_1.1/default_composition_order",permalink:"/docs/next/upgrades/1.0_to_1.1/default_composition_order",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/1.0_to_1.1/changes_to_default_composition_order.md",version:"current",lastUpdatedBy:"J\xe9r\xe9my Rapin",lastUpdatedAt:1612476846,sidebar:"docs",previous:{title:"Release process",permalink:"/docs/next/development/release"},next:{title:"Defaults List Overrides",permalink:"/docs/next/upgrades/1.0_to_1.1/defaults_list_override"}},l=[{value:"Migration",id:"migration",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Default composition order is changing in Hydra 1.1."),Object(o.b)("p",null,"For this example, let's assume the following two configs:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - foo: bar\n\nfoo:\n  x: 10\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="foo/bar.yaml"',title:'"foo/bar.yaml"'}),"# @package _group_\nx: 20\n\n\n\n")))),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col"},Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Hydra 1.0"),", configs from the Defaults List are overriding ",Object(o.b)("em",{parentName:"p"},"config.yaml"),", resulting in the following output:")),Object(o.b)("div",{className:"col  col--4"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2}","{2}":!0}),"foo:\n  x: 20\n")))),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col"},Object(o.b)("p",null,"As of ",Object(o.b)("strong",{parentName:"p"},"Hydra 1.1"),", ",Object(o.b)("em",{parentName:"p"},"config.yaml")," is overriding configs from the Defaults List, resulting in the following output:")),Object(o.b)("div",{className:"col  col--4"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:"{2}","{2}":!0}),"foo:\n  x: 10\n")))),Object(o.b)("h3",{id:"migration"},"Migration"),Object(o.b)("p",null,"For the majority of applications, this will not cause issues. If your application requires the previous behavior,\nyou can achieve it by adding ",Object(o.b)("inlineCode",{parentName:"p"},"_self_")," as the first item in your Defaults List:"),Object(o.b)("div",{className:"row"},Object(o.b)("div",{className:"col col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0}),"defaults:\n  - _self_\n  - foo: bar\n\nfoo:\n  x: 10\n"))),Object(o.b)("div",{className:"col  col--6"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Output config"',title:'"Output','config"':!0}),"foo:\n  x: 20\n\n\n\n\n")))),Object(o.b)("p",null,"The Defaults List is described ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/advanced/defaults_list"}),"here"),"."))}p.isMDXComponent=!0}}]);