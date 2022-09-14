(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e339ec1"],{"3dae":function(e,n,t){"use strict";t("4f7a")},"4f7a":function(e,n,t){},"683c":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columns.filterCustomProps.data,columns:e.db.columns.filterCustomProps.columns}})],1)},r=[],o=t("3ef3"),i=t("7eb4"),c={components:{tpl:o["a"]},props:{anchor:{type:String,default:"Filter custom"},desc:{type:String,default:"filterCustom"}},data:function(){return{db:i["a"]}}},s=c,l=t("2877"),d=Object(l["a"])(s,a,r,!1,null,null,null);n["a"]=d.exports},"6a6a":function(e,n,t){"use strict";t("e0f5")},"758e":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Filter Custom")]),t("Explain"),t("SingleFilter"),t("CustomIcon"),t("API",{attrs:{title:"API",anchor:"API",desc:"filterCustom Custom filter option"}})],1)},r=[],o=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、In order to meet the needs of more scenarios, the filtering custom function is opened.Filtering custom needs to implement interaction logic by itself"),t("br"),e._v(" 2、Filter custom functions by setting the 'filterCustom' property of the 'column' object"),t("br")])])])}],c=t("2877"),s={},l=Object(c["a"])(s,o,i,!1,null,null,null),d=l.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Single Condition Filter",fileName:"single-filter.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、"),t("code",[e._v("defaultVisible")]),e._v(" Specifies whether to expand by default"),t("br"),e._v("2、"),t("code",[e._v("render")]),e._v("Render functions,Specifies filtering custom content.The parameter 'showFn' is the display drop-down function、The parameter "),t("code",[e._v("closeFn")]),e._v(" is to close the drop-down function")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                searchValue: "",\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        // filter custom\n                        filterCustom: {\n                            defaultVisible: true,\n                            render: ({ showFn, closeFn }, h) => {\n                                return (\n                                    <div class="custom-name-filter">\n                                        <input\n                                            value={this.searchValue}\n                                            on-input={(e) => (this.searchValue = e.target.value)}\n                                            placeholder="Search name"\n                                        />\n                                        <div class="custom-name-filter-operation">\n                                            <span\n                                                class="name-filter-cancel"\n                                                on-click={() => this.searchCancel(closeFn)}\n                                            >\n                                                Cancel\n                                            </span>\n                                            <span\n                                                class="name-filter-confirm"\n                                                on-click={() => this.searchConfirm(closeFn)}\n                                            >\n                                                Search\n                                            </span>\n                                        </div>\n                                    </div>\n                                );\n                            },\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // search\n            search() {\n                const searchValue = this.searchValue;\n                this.tableData = this.sourceData.filter(\n                    (x) =>\n                        !searchValue.length ||\n                        x.name.toLowerCase().includes(searchValue.toLowerCase()),\n                );\n            },\n\n            // search cancel\n            searchCancel(closeFn) {\n                closeFn();\n            },\n\n            // search cancel\n            searchConfirm(closeFn) {\n                this.search();\n                closeFn();\n            },\n        },\n        created() {\n            this.tableData = this.sourceData.slice(0);\n        },\n    };\n<\/script>\n\n<style>\n    .custom-name-filter {\n        padding: 10px;\n\n        .custom-name-filter-operation {\n            cursor: pointer;\n\n            margin: 10px 10px 0px 0;\n            .name-filter-cancel,\n            .name-filter-confirm {\n                &:hover {\n                    color: #1890ff;\n                }\n            }\n\n            .name-filter-cancel {\n                float: left;\n            }\n\n            .name-filter-confirm {\n                float: right;\n            }\n        }\n    }\n</style>\n')])])])],2)],1)},h=[];function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this;this.$createElement;return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!0,render:function(n,t){n.showFn;var a=n.closeFn;return t("div",{class:"custom-name-filter"},[t("input",{domProps:{value:e.searchValue},on:{input:function(n){return e.searchValue=n.target.value}},attrs:{placeholder:"Search name"}}),t("div",{class:"custom-name-filter-operation"},[t("span",{class:"name-filter-cancel",on:{click:function(){return e.searchCancel(a)}}},["Cancel"]),t("span",{class:"name-filter-confirm",on:{click:function(){return e.searchConfirm(a)}}},["Search"])])])}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{search:function(){var e=this.searchValue;this.tableData=this.sourceData.filter((function(n){return!e.length||n.name.toLowerCase().includes(e.toLowerCase())}))},searchCancel:function(e){e()},searchConfirm:function(e){this.search(),e()}},created:function(){this.tableData=this.sourceData.slice(0)}};return f({render:e,staticRenderFns:n},t)}()}},y=b,g=(t("6a6a"),Object(c["a"])(y,u,h,!1,null,null,null)),v=g.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Custom Icon",fileName:"custom-icon.md"}}),e._m(0),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        rowKeyFieldName="rowKey"\n        :max-height="300"\n        :fixed-header="true"\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                searchValue: "",\n                columns: [\n                    {\n                        field: "name",\n                        key: "a",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        // filter custom\n                        filterCustom: {\n                            defaultVisible: false,\n                            render: ({ showFn, closeFn }, h) => {\n                                return (\n                                    <div class="custom-name-filter">\n                                        <input\n                                            value={this.searchValue}\n                                            on-input={(e) => (this.searchValue = e.target.value)}\n                                            placeholder="Search name"\n                                        />\n                                        <div class="custom-name-filter-operation">\n                                            <span\n                                                class="name-filter-cancel"\n                                                on-click={() => this.searchCancel(closeFn)}\n                                            >\n                                                取消\n                                            </span>\n                                            <span\n                                                class="name-filter-confirm"\n                                                on-click={() => this.searchConfirm(closeFn)}\n                                            >\n                                                查询\n                                            </span>\n                                        </div>\n                                    </div>\n                                );\n                            },\n                            // custom filter icon\n                            filterIcon: () => {\n                                return <ve-icon name="search" />;\n                            },\n                        },\n                    },\n                    {\n                        field: "date",\n                        key: "b",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // real table data\n                tableData: [],\n                // source data\n                sourceData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // search\n            search() {\n                const searchValue = this.searchValue;\n                this.tableData = this.sourceData.filter(\n                    (x) =>\n                        !searchValue.length ||\n                        x.name.toLowerCase().includes(searchValue.toLowerCase()),\n                );\n            },\n\n            // search cancel\n            searchCancel(closeFn) {\n                closeFn();\n            },\n\n            // search cancel\n            searchConfirm(closeFn) {\n                this.search();\n                closeFn();\n            },\n        },\n        created() {\n            this.tableData = this.sourceData.slice(0);\n        },\n    };\n<\/script>\n\n<style>\n    .custom-name-filter {\n        padding: 10px;\n\n        .custom-name-filter-operation {\n            cursor: pointer;\n\n            margin: 10px 10px 0px 0;\n            .name-filter-cancel,\n            .name-filter-confirm {\n                &:hover {\n                    color: #1890ff;\n                }\n            }\n\n            .name-filter-cancel {\n                float: left;\n            }\n\n            .name-filter-confirm {\n                float: right;\n            }\n        }\n    }\n</style>\n')])])])],2)],1)},C=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("p",[e._v("filterIcon function Support to return custom icon. The built-in "),t("code",[e._v('<ve-icon name="search" />')]),e._v(" icon is used here,You can also use other icon libraries")])}];function D(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?D(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){var e=this,n=this.$createElement;return{searchValue:"",columns:[{field:"name",key:"a",title:"Name",align:"left",width:"15%",filterCustom:{defaultVisible:!1,render:function(n,t){n.showFn;var a=n.closeFn;return t("div",{class:"custom-name-filter"},[t("input",{domProps:{value:e.searchValue},on:{input:function(n){return e.searchValue=n.target.value}},attrs:{placeholder:"Search name"}}),t("div",{class:"custom-name-filter-operation"},[t("span",{class:"name-filter-cancel",on:{click:function(){return e.searchCancel(a)}}},["取消"]),t("span",{class:"name-filter-confirm",on:{click:function(){return e.searchConfirm(a)}}},["查询"])])])},filterIcon:function(){return n("ve-icon",{attrs:{name:"search"}})}}},{field:"date",key:"b",title:"Date",align:"left",width:"15%"},{field:"hobby",key:"c",title:"Hobby",align:"center",width:"30%"},{field:"address",key:"d",title:"Address",align:"left",width:"40%"}],tableData:[],sourceData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{search:function(){var e=this.searchValue;this.tableData=this.sourceData.filter((function(n){return!e.length||n.name.toLowerCase().includes(e.toLowerCase())}))},searchCancel:function(e){e()},searchConfirm:function(e){this.search(),e()}},created:function(){this.tableData=this.sourceData.slice(0)}};return O({render:e,staticRenderFns:n},t)}()}},F=k,j=(t("3dae"),Object(c["a"])(F,w,C,!1,null,null,null)),x=j.exports,N=t("683c"),A={name:"basic-main",components:{Explain:d,SingleFilter:v,CustomIcon:x,API:N["a"]}},K=A,V=Object(c["a"])(K,a,r,!1,null,null,null);n["default"]=V.exports},e0f5:function(e,n,t){}}]);
//# sourceMappingURL=chunk-6e339ec1.06decf8c.js.map