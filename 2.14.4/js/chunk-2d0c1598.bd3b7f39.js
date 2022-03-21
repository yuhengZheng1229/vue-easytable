(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1598"],{4655:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("h2",[n._v("结合 Loading 组件")]),t("Explain"),t("basic")],1)},o=[],i=function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[n._v("1、Table 组件开启 Loading 效果是非常简单的，请求数据时开启 Loading 即可"),t("br")])])])}],d=t("2877"),c={},s=Object(d["a"])(c,i,r,!1,null,null,null),l=s.exports,u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"示例",fileName:"basic.md"}}),n._m(0),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[n._v('<template>\n    <div>\n        <button class="button-demo" @click="show()">开启 Loading</button>\n        <button class="button-demo" @click="close()">关闭 Loading</button>\n        <br />\n        <br />\n        <ve-table id="loading-container" :columns="columns" :table-data="tableData" />\n    </div>\n</template>\n<script>\n    export default {\n        data() {\n            return {\n                loadingInstance: null,\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "right",\n                    },\n                    { field: "address", key: "d", title: "Address" },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n        methods: {\n            show() {\n                this.loadingInstance.show();\n            },\n            close() {\n                this.loadingInstance.close();\n            },\n        },\n        mounted() {\n            this.loadingInstance = this.$veLoading({\n                target: document.querySelector("#loading-container"),\n                // 等同于\n                // target:"#loading-container"\n                name: "wave",\n            });\n            this.show();\n        },\n        destroyed() {\n            this.loadingInstance.destroy();\n        },\n    };\n<\/script>\n')])])])],2)],1)},b=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[n._v("更多 Loading 使用方法，请参考 "),t("a",{attrs:{href:"#/zh/doc/base/loading"}},[n._v("Loading 组件")])])}];function g(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){h(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function h(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var p={name:"component-doc",components:{"element-demo0":function(){var n=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(e){return n.show()}}},[n._v("开启 Loading")]),n._v(" "),t("button",{staticClass:"button-demo",on:{click:function(e){return n.close()}}},[n._v("关闭 Loading")]),n._v(" "),t("br"),n._v(" "),t("br"),n._v(" "),t("ve-table",{attrs:{id:"loading-container",columns:n.columns,"table-data":n.tableData}})],1)]],2)},e=[],t={data:function(){return{loadingInstance:null,columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"right"},{field:"address",key:"d",title:"Address"}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}},methods:{show:function(){this.loadingInstance.show()},close:function(){this.loadingInstance.close()}},mounted:function(){this.loadingInstance=this.$veLoading({target:document.querySelector("#loading-container"),name:"wave"}),this.show()},destroyed:function(){this.loadingInstance.destroy()}};return m({render:n,staticRenderFns:e},t)}()}},f=p,y=Object(d["a"])(f,u,b,!1,null,null,null),v=y.exports,_={name:"basic-main",components:{Explain:l,Basic:v}},w=_,O=Object(d["a"])(w,a,o,!1,null,null,null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-2d0c1598.bd3b7f39.js.map