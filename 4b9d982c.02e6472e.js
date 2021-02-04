(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(8),i=(n(0),n(268)),o=n(277),c={id:"fair-cluster",title:"Hydra on the FAIR cluster"},u={unversionedId:"fb/fair-cluster",id:"fb/fair-cluster",isDocsHomePage:!1,title:"Hydra on the FAIR cluster",description:"Hydra 1.0rc is available on FAIR Cluster. The recommended way for installation is via meta package hydra-fair-plugin.",source:"@site/docs/fb/fair-cluster.md",slug:"/fb/fair-cluster",permalink:"/docs/next/fb/fair-cluster",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/fb/fair-cluster.md",version:"current",lastUpdatedBy:"J\xe9r\xe9my Rapin",lastUpdatedAt:1612476846},s=[{value:"Hydra FAIR Plugins",id:"hydra-fair-plugins",children:[{value:"Installation",id:"installation",children:[]},{value:"Clean Install",id:"clean-install",children:[]},{value:"Clean Install",id:"clean-install-1",children:[]},{value:"Upgrade from stable",id:"upgrade-from-stable",children:[]},{value:"Usage",id:"usage",children:[]}]}],l={toc:s};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hydra 1.0rc is available on FAIR Cluster. The recommended way for installation is via meta package ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins"}),"hydra-fair-plugin"),"."),Object(i.b)("h2",{id:"hydra-fair-plugins"},"Hydra FAIR Plugins"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"It brings the correct Hydra dependency and has been tested on the FAIR Cluster."),Object(i.b)("li",{parentName:"ol"},"It provides FAIR Cluster specific defaults overrides (for example, ",Object(i.b)("inlineCode",{parentName:"li"},"hydra.sweep.dir")," is set to be ",Object(i.b)("inlineCode",{parentName:"li"},"/checkpoint/${env:USER}/outputs/${now:%Y-%m-%d}/${now:%H-%M-%S}"),")"),Object(i.b)("li",{parentName:"ol"},"It provides a ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/fairinternal/fairtask"}),"fairtask")," launcher plugin."),Object(i.b)("li",{parentName:"ol"},"It installs ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit")," launcher plugin by default.")),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("details",null,Object(i.b)("summary",null,"0.3.1 (stable), compatible with Hydra 0.11"),Object(i.b)("h3",{id:"clean-install"},"Clean Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-fair-plugins\n")),Object(i.b)("p",null,"The dependency installed looks like"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip freeze | grep hydra\nhydra-core==0.11.3\nhydra-fair-cluster==0.1.4\nhydra-fair-plugins==0.3.1\nhydra-fairtask==0.1.8\nhydra-submitit==0.2.0\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.0 (Release candidate), compatible with Hydra 1.0rc"),Object(i.b)("p",null,"With ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),Object(i.b)("inlineCode",{parentName:"a"},"Submitit"))," open sourced, the corresponding plugin has been moved "),Object(i.b)(o.b,{to:"plugins/hydra_submitit_launcher",mdxType:"GithubLink"},"here"),". Read this [doc](/docs/plugins/submitit_launcher) on installation/usage info.",Object(i.b)("h3",{id:"clean-install-1"},"Clean Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-fair-plugins  --pre --upgrade --upgrade-strategy=eager\n")),Object(i.b)("h3",{id:"upgrade-from-stable"},"Upgrade from stable"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"# Remove legacy fair internal submitit launcher plugin\npip uninstall hydra-submitit -y\npip install hydra-fair-plugins  --pre --upgrade --upgrade-strategy=eager\n")),Object(i.b)("p",null,"Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/plugins/submitit_launcher"}),"Hydra documentation")," for  more info on ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit")," launcher plugin."),Object(i.b)("p",null,"The depedency looks like "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip freeze | grep hydra\nhydra-core==1.0.0rc1\nhydra-fair-cluster==1.0.0rc1\nhydra-fair-plugins==1.0.0rc1\nhydra-fairtask==1.0.0rc1\nhydra-submitit-launcher==1.0.0rc3\n")),Object(i.b)("p",null,"Please refer to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/upgrades/0.11_to_1.0/config_path_changes"}),"Hydra upgrades")," on what changes are needed for your app for upgrading to Hydra 1.0")),Object(i.b)("details",null,Object(i.b)("summary",null,"Downgrade From 1.0rc to stable"),Object(i.b)("p",null,"Downgrade to stable in case you run into issues and need to be unblocked immediately."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip freeze | grep hydra | xargs pip uninstall -y\npip install hydra-fair-plugins\n"))),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("details",null,Object(i.b)("summary",null,"0.3.1 (stable)"),"Once the plugins are installed, you can launch to the FAIR cluster by appending hydra/launcher=fairtask or hydra/launcher=submitit for example:",Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{})," python my_app.py -m hydra/launcher=submitit db=mysql,postgresql\n# or\n python my_app.py -m hydra/launcher=fairtask db=mysql,postgresql\n")),Object(i.b)("p",null,"Both hydra-submitit and hydra-fairtask are providing sensible defaults for their configuration (",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins/blob/master/plugins/hydra-submitit/hydra_plugins/submitit/conf/hydra/launcher/submitit.yaml"}),"Submitit"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fairinternal/hydra-fair-plugins/blob/master/plugins/hydra-fairtask/hydra_plugins/fairtask/conf/hydra/launcher/fairtask.yaml"}),"fairtask"),")"),Object(i.b)("p",null,"You can customize fairtask/submitit behavior much like you can customize anything else, from the command line or by overriding in your config file or composing in alternative launcher configuration.\nYou can view the Hydra config (which includes the config for submitit or fairtask) with this command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"python my_app.py hydra/launcher=submitit --cfg=hydra\n"))),Object(i.b)("details",null,Object(i.b)("summary",null,"1.0 (Release Candidate)"),Object(i.b)("p",null,"For 1.0, ",Object(i.b)("inlineCode",{parentName:"p"},"fairtask")," usage remains the same. To use ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit"),", the command changes to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"python my_app.py -m hydra/launcher=submitit_slurm db=mysql,postgresql\n")),Object(i.b)("p",null,"More info on ",Object(i.b)("inlineCode",{parentName:"p"},"Submitit")," launcher can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://hydra.cc/docs/plugins/submitit_launcher"}),"here"))))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,f=d["".concat(o,".").concat(p)]||d[p]||b[p]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},270:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},271:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(11),o=n(269),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(272),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,p=e.to,f=e.href,m=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),D=p||f,k=Object(o.a)(D),N=null==D?void 0:D.replace("pathname://",""),A=void 0!==N?(n=N,v&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),C=b?i.e:i.c,x=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&k&&window.docusaurus.prefetch(A),function(){x&&d&&d.disconnect()}}),[A,x,k]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,E=!A||!k||V;return A&&k&&!V&&!g&&w.collectLink(A),E?a.a.createElement("a",Object.assign({href:A},D&&!k&&{target:"_blank",rel:"noopener noreferrer"},O)):a.a.createElement(C,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(A),P.current=!0)},innerRef:function(e){var t,n;x&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:A||""},b&&{isActive:h,activeClassName:m}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(21),a=n(269);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(r){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(270),a=n(275),i=n(276);t.useAllDocsData=function(){return a.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return a.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),a=r.useLocation().pathname;return i.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),a=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,a)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveVersion(n,a)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getActiveDocContext(n,a)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),a=r.useLocation().pathname;return i.getDocVersionSuggestions(n,a)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var r=n(21);function a(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=a()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var a=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var a=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==a})),[a]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var a,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(a=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===a&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),i=a.activeVersion!==r;return{latestDocSuggestion:i?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),a=n(0),i=n.n(a),o=n(271),c=n(21),u=n(273);function s(e){return i.a.createElement(o.a,Object(r.a)({},e,{to:(t=e.to,a=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==a?void 0:a.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,a}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return i.a.createElement(s,e,i.a.createElement("span",null,"\xa0"),i.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);