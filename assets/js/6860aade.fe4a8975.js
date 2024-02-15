"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8894],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return l}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){return function(t){var n=s(t.components);return r.createElement(e,a({},t,{components:n}))}},s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(n),m=o,v=l["".concat(i,".").concat(m)]||l[m]||u[m]||a;return n?r.createElement(v,d(d({ref:t},c),{},{components:n})):r.createElement(v,d({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=v;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return m}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],d={id:"overview",title:"Developer Guide Overview"},p=void 0,c={unversionedId:"development/overview",id:"version-1.2/development/overview",title:"Developer Guide Overview",description:"This guide assumes you have checked-out the repository.",source:"@site/versioned_docs/version-1.2/development/overview.md",sourceDirName:"development",slug:"/development/overview",permalink:"/docs/1.2/development/overview",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/development/overview.md",tags:[],version:"1.2",lastUpdatedBy:"Santiago Castro",lastUpdatedAt:1708023390,formattedLastUpdatedAt:"2/15/2024",frontMatter:{id:"overview",title:"Developer Guide Overview"},sidebar:"docs",previous:{title:"Re-run",permalink:"/docs/1.2/experimental/rerun"},next:{title:"Testing",permalink:"/docs/1.2/development/testing"}},l=[{value:"Environment setup",id:"environment-setup",children:[],level:2}],s={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"This guide assumes you have checked-out the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra"},"repository"),".\nIt is recommended that you install Hydra in a virtual environment like ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/"},"conda")," or ",(0,a.mdx)("a",{parentName:"p",href:"https://virtualenv.pypa.io/en/latest/"},"virtualenv"),"."),(0,a.mdx)("h2",{id:"environment-setup"},"Environment setup"),(0,a.mdx)("p",null,"Install ",(0,a.mdx)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," and create an empty Conda environment with:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"conda create -n hydra38 python=3.8 -qy\n")),(0,a.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"The core Hydra framework supports Python 3.6 or newer. You may need to create additional environments for different Python versions if CI detect issues on a supported version of Python."))),(0,a.mdx)("p",null,"Activate the environment:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"conda activate hydra38\n")),(0,a.mdx)("p",null,"From the source tree, install Hydra in development mode with the following commands:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"# install development dependencies\npip install -r requirements/dev.txt\n# install Hydra in development (editable) mode\npip install -e .\n")))}m.isMDXComponent=!0}}]);