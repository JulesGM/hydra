"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4878],{3905:function(e,n,a){a.r(n),a.d(n,{MDXContext:function(){return d},MDXProvider:function(){return f},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=t.createContext({}),c=function(e){return function(n){var a=m(n.components);return t.createElement(e,o({},n,{components:a}))}},m=function(e){var n=t.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},f=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),f=r,p=c["".concat(i,".").concat(f)]||c[f]||u[f]||o;return a?t.createElement(p,s(s({ref:n},d),{},{components:a})):t.createElement(p,s({ref:n},d))}));function g(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},93899:function(e,n,a){a.d(n,{Z:function(){return l},T:function(){return d}});var t=a(87462),r=a(67294),o=a(39960),i=a(52263),s=a(80907);function l(e){return r.createElement(o.default,(0,t.Z)({},e,{to:(n=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(a=null==l?void 0:l.name)?a:"current"]+n),target:"_blank"}));var n,a,l}function d(e){var n,a=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(l,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+a+"-informational",alt:"Example (Click Here)"}))}},93409:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(93899),s=["components"],l={id:"schema",title:"Structured Config schema"},d=void 0,c={unversionedId:"tutorials/structured_config/schema",id:"version-1.2/tutorials/structured_config/schema",title:"Structured Config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/versioned_docs/version-1.2/tutorials/structured_config/5_schema.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/schema",permalink:"/docs/1.2/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.2/tutorials/structured_config/5_schema.md",tags:[],version:"1.2",lastUpdatedBy:"P\xe1draig Brady",lastUpdatedAt:1664891228,formattedLastUpdatedAt:"10/4/2022",sidebarPosition:5,frontMatter:{id:"schema",title:"Structured Config schema"},sidebar:"docs",previous:{title:"Defaults List",permalink:"/docs/1.2/tutorials/structured_config/defaults"},next:{title:"Extending Configs",permalink:"/docs/1.2/patterns/extending_configs"}},m=[{value:"Validating against a schema in the same config group",id:"validating-against-a-schema-in-the-same-config-group",children:[],level:3},{value:"Validating against a schema from a different config group",id:"validating-against-a-schema-from-a-different-config-group",children:[],level:3},{value:"A Note about composition order",id:"a-note-about-composition-order",children:[],level:3}],f={toc:m};function u(e){var n=e.components,a=(0,r.Z)(e,s);return(0,o.mdx)("wrapper",(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).\nTo achieve this, we will follow the common pattern of ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.2/patterns/extending_configs"},"Extending Configs")," - but instead of extending another config file,\nwe will extend a Structured Config."),(0,o.mdx)("p",null,"This page shows how to validate the config files ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/postgresql.yaml"),"\nagainst a Structured Config schema."),(0,o.mdx)("h3",{id:"validating-against-a-schema-in-the-same-config-group"},"Validating against a schema in the same config group"),(0,o.mdx)(i.T,{to:"examples/tutorials/structured_configs/5.1_structured_config_schema_same_config_group",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"Given the config directory structure:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,o.mdx)("p",null,"We will add Structured Config schema for each of the config files above and store in the\nConfig Store as ",(0,o.mdx)("inlineCode",{parentName:"p"},"base_config"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/base_mysql")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"db/base_postgresql"),"."),(0,o.mdx)("p",null,"Then, we will use the Defaults List in each config to specify its base config as follows:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml" {2}',title:'"config.yaml"',"{2}":!0},"defaults:\n  - base_config\n  - db: mysql\n  # See composition order note\n  - _self_\n\ndebug: true\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - base_mysql\n\nuser: omry\npassword: secret\n\n\n"))),(0,o.mdx)("div",{className:"col col--4"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml" {2}',title:'"db/postgresql.yaml"',"{2}":!0},"defaults:\n  - base_postgresql\n\nuser: postgres_user\npassword: drowssap\n\n\n")))),(0,o.mdx)("p",null,"One difference in the source code is that we have removed the Defaults List from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Config")," dataclass.\nThe primary Defaults List will come from ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"my_app.py (Click to expand)"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:"{28-30}","{28-30}":!0},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    db: DBConfig = MISSING\n    debug: bool = False\n\ncs = ConfigStore.instance()\ncs.store(name="base_config", node=Config)\ncs.store(group="db", name="base_mysql", node=MySQLConfig)\ncs.store(group="db", name="base_postgresql", node=PostGreSQLConfig)\n\n@hydra.main(version_base=None, config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n'))),(0,o.mdx)("br",null),(0,o.mdx)("p",null,"When Hydra composes the final config object it will use the config schemas as specified in the Default Lists.",(0,o.mdx)("br",{parentName:"p"}),"\n","Like before, Hydra will catch user errors in the command line:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        object_type=MySQLConfig\n")),(0,o.mdx)("details",null,(0,o.mdx)("summary",null,"Use ",(0,o.mdx)("b",null,"--info")," commands to see how a config was composed (",(0,o.mdx)("b",null,"Expand"),")"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --info defaults-tree\n\nDefaults Tree\n*************\n<root>:\n  hydra/config:\n    hydra/output: default\n    hydra/launcher: basic\n    hydra/sweeper: basic\n    hydra/help: default\n    hydra/hydra_help: default\n    hydra/hydra_logging: default\n    hydra/job_logging: default\n    _self_\n  config:\n    base_config\n    db: mysql:\n      db/base_mysql\n      _self_\n    _self_\n\n$ python my_app.py --info defaults\n\nDefaults List\n*************\n| Config path                 | Package             | _self_ | Parent       | \n------------------------------------------------------------------------------\n| hydra/output/default        | hydra               | False  | hydra/config |\n| hydra/launcher/basic        | hydra.launcher      | False  | hydra/config |\n| hydra/sweeper/basic         | hydra.sweeper       | False  | hydra/config |\n| hydra/help/default          | hydra.help          | False  | hydra/config |\n| hydra/hydra_help/default    | hydra.hydra_help    | False  | hydra/config |\n| hydra/hydra_logging/default | hydra.hydra_logging | False  | hydra/config |\n| hydra/job_logging/default   | hydra.job_logging   | False  | hydra/config |\n| hydra/config                | hydra               | True   | <root>       |\n| base_config                 |                     | False  | config       |\n| db/base_mysql               | db                  | False  | db/mysql     |\n| db/mysql                    | db                  | True   | config       |\n| config                      |                     | True   | <root>       |\n------------------------------------------------------------------------------\n"))),(0,o.mdx)("h3",{id:"validating-against-a-schema-from-a-different-config-group"},"Validating against a schema from a different config group"),(0,o.mdx)(i.T,{to:"examples/tutorials/structured_configs/5.2_structured_config_schema_different_config_group",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"In the above example, the schema we used was stored in the same config group.\nThis is not always the case, for example - A library might provide schemas in its own config group."),(0,o.mdx)("p",null,"Here is a modified version of the example above, where a mock database_lib is providing the schemas\nwe want to validate against."),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\nimport database_lib\n\n\n@dataclass\nclass Config:\n    db: database_lib.DBConfig = MISSING\n    debug: bool = False\n\ncs = ConfigStore.instance()\ncs.store(name="base_config", node=Config)\n\n# database_lib registers its configs\n# in database_lib/db\ndatabase_lib.register_configs()\n\n\n@hydra.main(\n    config_path="conf",\n    config_name="config",\n)\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n'))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="database_lib.py" {17,22}',title:'"database_lib.py"',"{17,22}":!0},'from dataclasses import dataclass\n\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass DBConfig:\n  ...\n\n@dataclass\nclass MySQLConfig(DBConfig):\n  ...\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n  ...\n\n\ndef register_configs() -> None:\n    cs = ConfigStore.instance()\n    cs.store(\n        group="database_lib/db",\n        name="mysql",\n        node=MySQLConfig,\n    )\n    cs.store(\n        group="database_lib/db",\n        name="postgresql",\n        node=PostGreSQLConfig,\n    )\n\n')))),(0,o.mdx)("p",null,"The Defaults List entry for the base config is slightly different:"),(0,o.mdx)("div",{className:"row"},(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {2}',title:'"db/mysql.yaml"',"{2}":!0},"defaults:\n  - /database_lib/db/mysql@_here_\n\nuser: omry\npassword: secret\n"))),(0,o.mdx)("div",{className:"col col--6"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/postgresql.yaml" {2}',title:'"db/postgresql.yaml"',"{2}":!0},"defaults:\n  - /database_lib/db/postgresql@_here_\n  # See composition order note  \n  - _self_\n\nuser: postgres_user\npassword: drowssap\n")))),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"We refer to the config with an absolute path because it is outside the subtree of the db config group. "),(0,o.mdx)("li",{parentName:"ul"},"we override the package to ",(0,o.mdx)("inlineCode",{parentName:"li"},"_here_")," to ensure that the package of the schema is the same as the package\nof the config it's validating.")),(0,o.mdx)("h3",{id:"a-note-about-composition-order"},"A Note about composition order"),(0,o.mdx)("p",null," By default, Hydra 1.1 appends ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," to the end of the Defaults List.\nThis behavior is new in Hydra 1.1 and different from previous Hydra versions. As such Hydra 1.1  issues a warning if ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," is not specified ",(0,o.mdx)("strong",{parentName:"p"},"in the primary config"),", asking you to add ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," and thus indicate the desired composition order.\nTo address the warning while maintaining the new behavior, append ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," to the end of the Defaults List. Note that in some cases it may instead be desirable to add ",(0,o.mdx)("inlineCode",{parentName:"p"},"_self_")," directly after the schema and before other Defaults List elements. "),(0,o.mdx)("p",null,"See ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.2/advanced/defaults_list#composition-order"},"Composition Order")," for more information."))}u.isMDXComponent=!0}}]);