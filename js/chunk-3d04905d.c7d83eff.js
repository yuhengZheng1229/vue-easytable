(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d04905d"],{"08e3":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("右键菜单")]),n("Explain"),n("ContextmenuTypes"),n("Base"),n("Custom"),n("API",{attrs:{title:"API",anchor:"API",desc:"contextmenuBodyOption 右键菜单配置"}})],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、有些操作可以通过右键菜单更方便的完成。比如单元格编辑功能，可以通过右键操作很方便的插入行或者移除行"),n("br"),e._v(" 2、当然你也可以自定义右键菜单功能")])])])}],r=n("2877"),c={},d=Object(r["a"])(c,i,a,!1,null,null,null),s=d.exports,u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"右键菜单功能分类",fileName:"contextmenu-types.md"}}),n("p",[e._v("这些右键菜单功能你可以随意选择和组合")]),e._m(0)],1)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"example-table"},[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[e._v("功能")]),n("th",{staticStyle:{"text-align":"left"}},[e._v("类型")])])]),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("分割线")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("SEPARATOR")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("在上方插入行")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("INSERT_ROW_ABOVE")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("在下方插入行")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("INSERT_ROW_BELOW")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("移除该行")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("REMOVE_ROW")])])]),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[e._v("隐藏该列")]),n("td",{staticStyle:{"text-align":"left"}},[n("code",[e._v("HIDE_COLUMN")])])])])])}],m={},p=Object(r["a"])(m,u,y,!1,null,null,null),f=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"基础用法",fileName:"base.md"}}),n("p",[e._v("右键表格区域查看效果")]),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            border-y\n            :contextmenu-body-option="contextmenuBodyOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    // callback for all options\n                    callback: ({ type, selection }) => {\n                        console.log("type::", type);\n                        console.log("selection::", selection);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "INSERT_ROW_ABOVE",\n                        },\n                        {\n                            type: "INSERT_ROW_BELOW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "REMOVE_ROW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "HIDE_COLUMN",\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        operationColumn: true,\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "number",\n                        key: "number",\n                        title: "Number",\n                        align: "right",\n                        width: "30%",\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        number: "32",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        number: "676",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        number: "76",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        number: "7797",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        number: "8978",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},h=[];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"border-y":"","contextmenu-body-option":e.contextmenuBodyOption}})],1)]],2)},t=[],n={data:function(){return{contextmenuBodyOption:{callback:function(e){var t=e.type,n=e.selection;console.log("type::",t),console.log("selection::",n)},contextmenus:[{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"SEPARATOR"},{type:"HIDE_COLUMN"}]},rowStyleOption:{clickHighlight:!1},columns:[{field:"",key:"a",title:"",width:50,align:"center",operationColumn:!0,renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n}},{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%"},{field:"number",key:"number",title:"Number",align:"right",width:"30%"},{field:"address",key:"address",title:"Address",align:"left",width:"40%"}],tableData:[{name:"John",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};return O({render:e,staticRenderFns:t},n)}()}},x=g,_=Object(r["a"])(x,b,h,!1,null,null,null),E=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"自定义右键菜单",fileName:"custom.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :scroll-width="1600"\n            :max-height="500"\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            :virtual-scroll-option="{enable:true}"\n            border-y\n            :contextmenu-body-option="contextmenuBodyOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    // callback for all options\n                    callback: ({ type, selection }) => {\n                        const { rowKey, colKey } = selection;\n\n                        // custom empty row\n                        if (type === "custom-empty-row") {\n                            this.tableData = this.tableData.map((rowData) => {\n                                // empty current row\n                                if (rowData.rowKey === rowKey) {\n                                    Object.keys(rowData).forEach((field) => {\n                                        rowData[field] = "";\n                                    });\n                                }\n                                return rowData;\n                            });\n                        }\n\n                        console.log("type::", type);\n                        console.log("selection::", selection);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "INSERT_ROW_ABOVE",\n                        },\n                        {\n                            type: "INSERT_ROW_BELOW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "custom-empty-row",\n                            label: "empty row(custom)",\n                        },\n                        {\n                            type: "customType1",\n                            label: "custom menu",\n                            children: [\n                                {\n                                    label: "menu5-1",\n                                    type: "menu5-1-type",\n                                    children: [\n                                        {\n                                            label: "menu5-1-1",\n                                            type: "menu5-1-1-type",\n                                        },\n                                        {\n                                            label: "menu5-2-2",\n                                            type: "menu5-2-2-type",\n                                        },\n                                    ],\n                                },\n                                {\n                                    label: "menu5-2",\n                                    disabled: true,\n                                },\n                                {\n                                    type: "SEPARATOR",\n                                },\n                                {\n                                    label: "menu5-3",\n                                    type: "menu5-3-type",\n                                },\n                            ],\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                        edit: true,\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "col2",\n                                title: "col2",\n                                width: 50,\n                                edit: true,\n                            },\n                            {\n                                field: "col3",\n                                key: "col3",\n                                title: "col3",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                        edit: true,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                        edit: true,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "col7",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "col8",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A` + i,\n                        col2: `B` + i,\n                        col3: `C` + i,\n                        col4: `D` + i,\n                        col5: `E` + i,\n                        col6: `F` + i,\n                        col7: `G` + i,\n                        col8: `H` + i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},S=[];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{"scroll-width":1600,"max-height":500,"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"virtual-scroll-option":{enable:!0},"border-y":"","contextmenu-body-option":e.contextmenuBodyOption}})],1)]],2)},t=[],n={data:function(){var e=this;return{contextmenuBodyOption:{callback:function(t){var n=t.type,l=t.selection,o=l.rowKey;l.colKey;"custom-empty-row"===n&&(e.tableData=e.tableData.map((function(e){return e.rowKey===o&&Object.keys(e).forEach((function(t){e[t]=""})),e}))),console.log("type::",n),console.log("selection::",l)},contextmenus:[{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"custom-empty-row",label:"empty row(custom)"},{type:"customType1",label:"custom menu",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type"},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]}]},rowStyleOption:{clickHighlight:!1},columns:[{field:"col1",key:"col1",title:"col1",width:50,fixed:"left",edit:!0},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50,edit:!0},{field:"col3",key:"col3",title:"col3",width:50,edit:!0}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130,edit:!0},{field:"col5",key:"col5",title:"col5",width:140,edit:!0}]},{title:"col6",field:"col6",key:"col6",width:140,edit:!0}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50,edit:!0}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right",edit:!0}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<100;t++)e.push({rowKey:t,col1:"A"+t,col2:"B"+t,col3:"C"+t,col4:"D"+t,col5:"E"+t,col6:"F"+t,col7:"G"+t,col8:"H"+t});this.tableData=e}},created:function(){this.initTableData()}};return A({render:e,staticRenderFns:t},n)}()}},C=j,P=Object(r["a"])(C,k,S,!1,null,null,null),B=P.exports,N=n("dd46"),T={name:"basic-main",components:{Explain:s,ContextmenuTypes:f,Base:E,Custom:B,API:N["a"]}},K=T,I=Object(r["a"])(K,l,o,!1,null,null,null);t["default"]=I.exports},dd46:function(e,t,n){"use strict";var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.contextmenuBodyOption.data,columns:e.db.contextmenuBodyOption.columns}})],1)},o=[],i=n("3ef3"),a=n("d890"),r={components:{tpl:i["a"]},props:{anchor:{type:String,default:"右键菜单配置"},desc:{type:String,default:"contextmenuBodyOption"}},data:function(){return{db:a["a"]}}},c=r,d=n("2877"),s=Object(d["a"])(c,l,o,!1,null,null,null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-3d04905d.c7d83eff.js.map