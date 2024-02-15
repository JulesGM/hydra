"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9795],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return u},withMDXComponents:function(){return p}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){return function(t){var n=u(t.components);return i.createElement(e,o({},t,{components:n}))}},u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||m[d]||o;return n?i.createElement(f,c(c({ref:t},l),{},{components:n})):i.createElement(f,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return l}});var i=n(87462),r=n(67294),o=n(39960),a=n(52263),c=n(80907);function s(e){return r.createElement(o.default,(0,i.Z)({},e,{to:(t=e.to,s=(0,c.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},78429:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(87462),r=n(63366),o=(n(67294),n(3905)),a=n(93899),c=["components"],s={id:"unit_testing",title:"Hydra in Unit Tests"},l=void 0,p={unversionedId:"advanced/unit_testing",id:"advanced/unit_testing",title:"Hydra in Unit Tests",description:"Use initialize(), initializeconfigmodule() or initializeconfigdir() in conjunction with compose()",source:"@site/docs/advanced/unit_testing.md",sourceDirName:"advanced",slug:"/advanced/unit_testing",permalink:"/docs/advanced/unit_testing",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/advanced/unit_testing.md",tags:[],version:"current",lastUpdatedBy:"Santiago Castro",lastUpdatedAt:1708023390,formattedLastUpdatedAt:"2/15/2024",frontMatter:{id:"unit_testing",title:"Hydra in Unit Tests"},sidebar:"docs",previous:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/advanced/jupyter_notebooks"},next:{title:"Introduction",permalink:"/docs/experimental/intro"}},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.mdx)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Use ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize()"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize_config_module()")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"initialize_config_dir()")," in conjunction with ",(0,o.mdx)("inlineCode",{parentName:"p"},"compose()"),"\nto compose configs inside your unit tests.",(0,o.mdx)("br",{parentName:"p"}),"\n","Be sure to read the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/advanced/compose_api"},"Compose API documentation"),"."),(0,o.mdx)("p",null,"The Hydra example application contains an ",(0,o.mdx)(a.Z,{to:"examples/advanced/hydra_app_example/tests/test_example.py",mdxType:"GithubLink"},"example test"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="Testing example with initialize()"',title:'"Testing',example:!0,with:!0,'initialize()"':!0},'from hydra import initialize, compose\n# 1. initialize will add config_path the config search path within the context\n# 2. The module with your configs should be importable. \n#    it needs to have a __init__.py (can be empty).\n# 3. THe config path is relative to the file calling initialize (this file)\ndef test_with_initialize() -> None:\n    with initialize(version_base=None, config_path="../hydra_app/conf"):\n        # config is relative to a module\n        cfg = compose(config_name="config", overrides=["app.user=test_user"])\n        assert cfg == {\n            "app": {"user": "test_user", "num1": 10, "num2": 20},\n            "db": {"host": "localhost", "port": 3306},\n        }\n')),(0,o.mdx)("p",null,"For an idea about how to modify Hydra's search path when using ",(0,o.mdx)("inlineCode",{parentName:"p"},"compose")," in\nunit tests, see the page on\n",(0,o.mdx)("a",{parentName:"p",href:"/docs/advanced/search_path#overriding-hydrasearchpath-config"},"overriding the ",(0,o.mdx)("inlineCode",{parentName:"a"},"hydra.searchpath")," config"),"."))}m.isMDXComponent=!0}}]);