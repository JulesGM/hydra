"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4500],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return f},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){return function(n){var r=d(n.components);return t.createElement(e,i({},n,{components:r}))}},d=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,h=s["".concat(l,".").concat(c)]||s[c]||m[c]||i;return r?t.createElement(h,o(o({ref:n},p),{},{components:r})):t.createElement(h,o({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},93899:function(e,n,r){r.d(n,{Z:function(){return u},T:function(){return p}});var t=r(87462),a=r(67294),i=r(39960),l=r(52263),o=r(80907);function u(e){return a.createElement(i.default,(0,t.Z)({},e,{to:(n=e.to,u=(0,o.useActiveVersion)(),(0,l.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(r=null==u?void 0:u.name)?r:"current"]+n),target:"_blank"}));var n,r,u}function p(e){var n,r=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(u,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+r+"-informational",alt:"Example (Click Here)"}))}},35090:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),l=r(93899),o=["components"],u={id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},p=void 0,s={unversionedId:"plugins/rq_launcher",id:"plugins/rq_launcher",title:"RQ Launcher plugin",description:"PyPI",source:"@site/docs/plugins/rq_launcher.md",sourceDirName:"plugins",slug:"/plugins/rq_launcher",permalink:"/docs/next/plugins/rq_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/plugins/rq_launcher.md",tags:[],version:"current",lastUpdatedBy:"Jasha",lastUpdatedAt:1656096540,formattedLastUpdatedAt:"6/24/2022",frontMatter:{id:"rq_launcher",title:"RQ Launcher plugin",sidebar_label:"RQ Launcher plugin"},sidebar:"docs",previous:{title:"Ray Launcher plugin",permalink:"/docs/next/plugins/ray_launcher"},next:{title:"Submitit Launcher plugin",permalink:"/docs/next/plugins/submitit_launcher"}},d=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3}],c={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-rq-launcher/"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-rq-launcher",alt:"PyPI"})),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-rq-launcher",alt:"PyPI - License"}),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-rq-launcher",alt:"PyPI - Python Version"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-rq-launcher"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-rq-launcher.svg",alt:"PyPI - Downloads"})),(0,i.mdx)(l.T,{text:"Example application",to:"plugins/hydra_rq_launcher/examples",mdxType:"ExampleGithubLink"}),(0,i.mdx)(l.T,{text:"Plugin source",to:"plugins/hydra_rq_launcher",mdxType:"ExampleGithubLink"})),(0,i.mdx)("p",null,"The RQ Launcher plugin provides a launcher for distributed execution and job queuing based on ",(0,i.mdx)("a",{parentName:"p",href:"https://python-rq.org"},"Redis Queue (RQ)"),"."),(0,i.mdx)("p",null,"RQ launcher allows parallelizing across multiple nodes and scheduling jobs in queues. Usage of this plugin requires a ",(0,i.mdx)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),". When parallelisation on a single node is intended, the Joblib launcher may be preferable, since it works without a database."),(0,i.mdx)("h3",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-rq-launcher --upgrade\n")),(0,i.mdx)("p",null,"Usage of this plugin requires a ",(0,i.mdx)("a",{parentName:"p",href:"https://redis.io/topics/quickstart"},"Redis server"),"."),(0,i.mdx)("p",null,"Note that RQ does ",(0,i.mdx)("a",{parentName:"p",href:"https://python-rq.org/docs/#limitations"},"not support Windows"),"."),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Once installed, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher=rq")," to your command line. Alternatively, override ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/launcher: rq\n")),(0,i.mdx)("p",null,"The default configuration is as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/launcher=rq --cfg hydra -p hydra.launcher"',title:'"$',python:!0,"your_app.py":!0,"hydra/launcher":"rq","--cfg":!0,hydra:!0,"-p":!0,'hydra.launcher"':!0},"# @package hydra.launcher\n_target_: hydra_plugins.hydra_rq_launcher.rq_launcher.RQLauncher\nenqueue:\n  job_timeout: null\n  ttl: null\n  result_ttl: null\n  failure_ttl: null\n  at_front: false\n  job_id: null\n  description: null\nqueue: default \nredis:\n  host: ${oc.env:REDIS_HOST,localhost}\n  port: ${oc.env:REDIS_PORT,6379}\n  db: ${oc.env:REDIS_DB,0}\n  password: ${oc.env:REDIS_PASSWORD,null}\n  ssl: ${oc.env:REDIS_SSL,False}\n  ssl_ca_certs: ${oc.env:REDIS_SSL_CA_CERTS,null\n  mock: ${oc.env:REDIS_MOCK,False}\nstop_after_enqueue: false\nwait_polling: 1.0\n")),(0,i.mdx)("p",null,"Further descriptions on the variables can be found in the plugin config file, defined ",(0,i.mdx)(l.Z,{to:"plugins/hydra_rq_launcher/hydra_plugins/hydra_rq_launcher/config.py",mdxType:"GithubLink"},"here"),". There are several standard approaches for configuring plugins. Check ",(0,i.mdx)("a",{parentName:"p",href:"/docs/next/patterns/configuring_plugins"},"this page")," for more information."),(0,i.mdx)("p",null,"The plugin is using environment variables to store Redis connection information. The environment variables ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_HOST"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_PORT"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_DB"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_PASSWORD"),", are used for the host address, port, database, and password of the server, respectively. Support for Redis SSL connections is controlled through ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_SSL")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"REDIS_SSL_CA_CERTS"),"; see ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/andymccurdy/redis-py#ssl-connections"},"redis-py")," documentation."),(0,i.mdx)("p",null,"For example, they might be set as follows when using ",(0,i.mdx)("inlineCode",{parentName:"p"},"bash")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"zsh")," as a shell:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},'export REDIS_HOST="localhost"\nexport REDIS_PORT="6379"\nexport REDIS_DB="0"\nexport REDIS_PASSWORD=""\n')),(0,i.mdx)("p",null,"Enable SSL by setting the relevant environment variables. e.g:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"export REDIS_SSL=true\nexport REDIS_SSL_CA_CERTS=/etc/ssl/certs/ca-certificates.crt\n")),(0,i.mdx)("p",null,"Assuming configured environment variables, workers connecting to the Redis server can be launched using:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"rq worker --url redis://:$REDIS_PASSWORD@$REDIS_HOST:$REDIS_PORT/$REDIS_DB\n")),(0,i.mdx)("p",null,"An ",(0,i.mdx)(l.Z,{to:"plugins/hydra_rq_launcher/example",mdxType:"GithubLink"},"example application")," using this launcher is provided in the plugin repository."),(0,i.mdx)("p",null,"Starting the app with ",(0,i.mdx)("inlineCode",{parentName:"p"},"python my_app.py --multirun task=1,2,3,4,5")," will enqueue five jobs to be processed by worker instances:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --multirun task=1,2,3,4,5\n\n[HYDRA] RQ Launcher is enqueuing 5 job(s) in queue : default\n[HYDRA] Sweep output dir : multirun/2020-06-15/18-00-00\n[HYDRA] Enqueued 13b3da4e-03f7-4d16-9ca8-cfb3c48afeae\n[HYDRA]     #1 : task=1\n[HYDRA] Enqueued 00c6a32d-e5a4-432c-a0f3-b9d4ef0dd585\n[HYDRA]     #2 : task=2\n[HYDRA] Enqueued 63b90f27-0711-4c95-8f63-70164fd850df\n[HYDRA]     #3 : task=3\n[HYDRA] Enqueued b1d49825-8b28-4516-90ca-8106477e1eb1\n[HYDRA]     #4 : task=4\n[HYDRA] Enqueued ed96bdaa-087d-4c7f-9ecb-56daf948d5e2\n[HYDRA]     #5 : task=5\n[HYDRA] Finished enqueuing\n[HYDRA] Polling job statuses every 1.0 sec\n")),(0,i.mdx)("p",null,"Note that any dependencies need to be installed in the Python environment used to run the RQ worker. For serialization of jobs ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cloudpickle/cloudpickle"},(0,i.mdx)("inlineCode",{parentName:"a"},"cloudpickle"))," is used."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://python-rq.org/"},"RQ documentation")," holds further information on ",(0,i.mdx)("a",{parentName:"p",href:"http://python-rq.org/docs/monitoring/"},"job monitoring"),", which can be done via console or ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/nvie/rq-dashboard"},"web interfaces"),", and provides ",(0,i.mdx)("a",{parentName:"p",href:"https://python-rq.org/patterns/"},"patterns")," for worker and exception handling."))}m.isMDXComponent=!0}}]);