(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{68:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",function(){return i}),r.d(n,"rightToc",function(){return u}),r.d(n,"default",function(){return c});r(0);var t=r(78);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run example"},u=[],p={rightToc:u},l="wrapper";function c(e){var n=e.components,r=o(e,["components"]);return Object(t.b)(l,a({},p,r,{components:n,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Hydra can run the same job multiple time with different arguments in each run using a mode called multirun.\nTo turn on multi-run, use -m or --multirun and pass comma separated list for each value you want\nto sweep over, for example:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-text"}),"$ python demos/5_config_groups/experiment.py -m optimizer=adam,nesterov\n[2019-09-03 17:47:21,646] - Launching 2 jobs locally\n[2019-09-03 17:47:21,646] - Sweep output dir : multirun/2019-09-03/17-47-21\n[2019-09-03 17:47:21,646] -     #0 : optimizer=adam\noptimizer:\n  beta: 0.01\n  lr: 0.1\n  type: adam\n\n[2019-09-03 17:47:21,720] -     #1 : optimizer=nesterov\noptimizer:\n  lr: 0.001\n  type: nesterov\n")),Object(t.b)("p",null,"The default launcher runs the jobs locally and serially, but you can switch to other launchers like fairtask and submitit:"),Object(t.b)("p",null,"For example:"),Object(t.b)("pre",null,Object(t.b)("code",a({parentName:"pre"},{className:"language-text"}),"> python demos/6_sweep/experiment.py -m optimizer=nesterov,adam random_seed=1,2,3 hydra/launcher=fairtask\n[2019-09-03 17:58:19,452] - Sweep output dir : multirun/2019-09-03/17-58-19\n[2019-09-03 17:58:19,775] - Launching 6 jobs to slurm queue\n[2019-09-03 17:58:19,776] -     #0 : optimizer=nesterov random_seed=1\n[2019-09-03 17:58:19,776] -     #1 : optimizer=nesterov random_seed=2\n[2019-09-03 17:58:19,776] -     #2 : optimizer=nesterov random_seed=3\n[2019-09-03 17:58:19,776] -     #3 : optimizer=adam random_seed=1\n[2019-09-03 17:58:19,776] -     #4 : optimizer=adam random_seed=2\n[2019-09-03 17:58:19,776] -     #5 : optimizer=adam random_seed=3\n")),Object(t.b)("p",null,"Sweep support is currently very basic and this area will improve further."),Object(t.b)("p",null,"Check the ",Object(t.b)("a",a({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/demos/6_sweep"}),"runnable example"),"."))}c.isMDXComponent=!0},78:function(e,n,r){"use strict";r.d(n,"a",function(){return u}),r.d(n,"b",function(){return m});var t=r(0),a=r.n(t),o=a.a.createContext({}),i=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},u=function(e){var n=i(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},c=Object(t.forwardRef)(function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,u=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),c=i(r),m=t,s=c[u+"."+m]||c[m]||l[m]||o;return r?a.a.createElement(s,Object.assign({},{ref:n},p,{components:r})):a.a.createElement(s,Object.assign({},{ref:n},p))});function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,i=new Array(o);i[0]=c;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u[p]="string"==typeof e?e:t,i[1]=u;for(var m=2;m<o;m++)i[m]=r[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);