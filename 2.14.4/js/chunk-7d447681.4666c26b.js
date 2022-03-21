(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d447681"],{5150:function(e,n,t){"use strict";var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.editOption.data,columns:e.db.editOption.columns}})],1)},a=[],i=t("3ef3"),o=t("d890"),r={components:{tpl:i["a"]},props:{anchor:{type:String,default:"单元格编辑配置"},desc:{type:String,default:"editOption"}},data:function(){return{db:o["a"]}}},d=r,c=t("2877"),s=Object(c["a"])(d,l,a,!1,null,null,null);n["a"]=s.exports},"70b8":function(e,n,t){"use strict";t.r(n);var l=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("单元格编辑")]),t("Explain"),t("ShortCuts"),t("Base"),t("InstanceMethods"),t("CombineColumnFixed"),t("CombineElementUi"),t("API",{attrs:{title:"API",anchor:"API",desc:"eidtOption 单元格编辑配置"}})],1)},a=[],i=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、通过 "),t("code",[e._v("editOption")]),e._v("属性配置单元格编辑功能"),t("br"),e._v(" 2、通过 "),t("code",[e._v("columns")]),e._v(" 对象设置"),t("code",[e._v("edit=true")]),e._v("允许编辑的列"),t("br")])])])}],r=t("2877"),d={},c=Object(r["a"])(d,i,o,!1,null,null,null),s=c.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"快捷键",fileName:"shortcuts.md"}}),t("p",[e._v("可编辑单元格支持以下快捷键（参考 excel 快捷键）：")]),e._m(0)],1)},m=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"example-table"},[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("功能")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("快捷键")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("活动单元格进入编辑状态")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("F2")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("停止编辑状态，并停留在当前单元格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Ctrl")]),e._v(" + "),t("code",[e._v("Enter")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("单元格内文本换行")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Alt")]),e._v(" + "),t("code",[e._v("Enter")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("清空活动单元格内容")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Delete")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("清空活动单元格内容，并进入编辑状态")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("BackSpace")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("清空活动单元格内容并填入空格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Space")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("停止编辑状态并向下移动活动单元格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Enter")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("停止编辑状态并向上移动活动单元格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Shift")]),e._v(" + "),t("code",[e._v("Enter")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("停止编辑状态并向右移动活动单元格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Tab")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("停止编辑状态并向左移动活动单元格")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("Shift")]),e._v(" + "),t("code",[e._v("Tab")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("支持在可编辑单元格直接输入文本并进入编辑状态")]),t("td",{staticStyle:{"text-align":"left"}},[e._v("-")])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("支持长文本输入时，编辑框自动伸缩功能")]),t("td",{staticStyle:{"text-align":"left"}},[e._v("-")])])])])}],f={},b=Object(r["a"])(f,u,m,!1,null,null,null),h=b.exports,y=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"基本用法",fileName:"base.md"}}),t("demo-block",[t("div",[t("p",[e._v("单元格停止编辑后将触发"),t("code",[e._v("cellValueChange")]),e._v("方法，参数"),t("code",[e._v("row")]),e._v("为更新后的行数据信息，参数"),t("code",[e._v("column")]),e._v("为当前编辑的列信息")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            rowKeyFieldName="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :editOption="editOption"\n            :rowStyleOption="rowStyleOption"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                // edit option 可控单元格编辑\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "number",\n                        key: "number",\n                        title: "Number",\n                        align: "right",\n                        width: "30%",\n                        edit: true,\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        number: "32",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        number: "676",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        number: "76",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        number: "7797",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        number: "8978",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},g=[];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,editOption:e.editOption,rowStyleOption:e.rowStyleOption,"border-y":""}})],1)]],2)},n=[],t={data:function(){return{rowStyleOption:{clickHighlight:!1},editOption:{cellValueChange:function(e){var n=e.row,t=e.column;console.log("cellValueChange row::",n),console.log("cellValueChange column::",t)}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"number",key:"number",title:"Number",align:"right",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"John",date:"1900-05-20",number:"32",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",number:"676",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",number:"76",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",number:"7797",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",number:"8978",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}}};return v({render:e,staticRenderFns:n},t)}()}},_=O,C=Object(r["a"])(_,y,g,!1,null,null,null),x=C.exports,k=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"实例方法",fileName:"instance-method.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、通过实例方法"),t("code",[e._v("startEditingCell({ rowKey, colKey, defaultValue })")]),e._v("编辑指定的单元格")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="startEditingCell(0,\'name\')">编辑单元格0-0</button>\n        <button class="button-demo" @click="startEditingCell(2,\'hobby\',\'\')">\n            编辑并清空单元格2-2\n        </button>\n        <br />\n        <br />\n        <ve-table\n            ref="tableRef"\n            rowKeyFieldName="rowKey"\n            :max-height="300"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :editOption="editOption"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // edit option 可控单元格编辑\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        edit: true,\n                    },\n                    {\n                        field: "hobby",\n                        key: "hobby",\n                        title: "Hobby",\n                        align: "left",\n                        width: "30%",\n                        edit: true,\n                    },\n                    {\n                        field: "address",\n                        key: "address",\n                        title: "Address",\n                        align: "left",\n                        width: "40%",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // start editing cell\n            startEditingCell(rowKey, colKey, defaultValue) {\n                this.$refs["tableRef"].startEditingCell({ rowKey, colKey, defaultValue });\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},D=[];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var E={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.startEditingCell(0,"name")}}},[e._v("编辑单元格0-0")]),e._v(" "),t("button",{staticClass:"button-demo",on:{click:function(n){return e.startEditingCell(2,"hobby","")}}},[e._v("\n            编辑并清空单元格2-2\n        ")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{ref:"tableRef",attrs:{rowKeyFieldName:"rowKey","max-height":300,"fixed-header":!0,columns:e.columns,"table-data":e.tableData,editOption:e.editOption,"border-y":""}})],1)]],2)},n=[],t={data:function(){return{editOption:{cellValueChange:function(e){var n=e.row,t=e.column;console.log("cellValueChange row::",n),console.log("cellValueChange column::",t)}},columns:[{field:"",key:"a",title:"",width:50,align:"center",renderBodyCell:function(e,n){e.row,e.column;var t=e.rowIndex;return++t}},{field:"name",key:"name",title:"Name",align:"left",width:"15%",edit:!0},{field:"date",key:"date",title:"Date",align:"left",width:"15%",edit:!0},{field:"hobby",key:"hobby",title:"Hobby",align:"left",width:"30%",edit:!0},{field:"address",key:"address",title:"Address",align:"left",width:"40%",edit:!0}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai",rowKey:0},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing",rowKey:1},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing",rowKey:2},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen",rowKey:3},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen",rowKey:4}]}},methods:{startEditingCell:function(e,n,t){this.$refs["tableRef"].startEditingCell({rowKey:e,colKey:n,defaultValue:t})}}};return K({render:e,staticRenderFns:n},t)}()}},N=E,P=Object(r["a"])(N,k,D,!1,null,null,null),A=P.exports,V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合固定列",fileName:"combine-column-fixed.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :scroll-width="1600"\n            :max-height="500"\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :edit-option="editOption"\n            :row-style-option="rowStyleOption"\n            :virtual-scroll-option="{enable:true}"\n            border-y\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                },\n                // edit option 可控单元格编辑\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {\n                        console.log("cellValueChange row::", row);\n                        console.log("cellValueChange column::", column);\n                    },\n                },\n                columns: [\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                        edit: true,\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "col2",\n                                title: "col2",\n                                width: 50,\n                                edit: true,\n                            },\n                            {\n                                field: "col3",\n                                key: "col3",\n                                title: "col3",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col4-col5-col6",\n                        children: [\n                            {\n                                title: "col4-col5",\n                                children: [\n                                    {\n                                        field: "col4",\n                                        key: "col4",\n                                        title: "col4",\n                                        width: 130,\n                                        edit: true,\n                                    },\n                                    {\n                                        field: "col5",\n                                        key: "col5",\n                                        title: "col5",\n                                        width: 140,\n                                        edit: true,\n                                    },\n                                ],\n                            },\n                            {\n                                title: "col6",\n                                field: "col6",\n                                key: "col6",\n                                width: 140,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "col7",\n                                width: 50,\n                                edit: true,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "col8",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                        edit: true,\n                    },\n                ],\n                // table data\n                tableData: [],\n            };\n        },\n\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A` + i,\n                        col2: `B` + i,\n                        col3: `C` + i,\n                        col4: `D` + i,\n                        col5: `E` + i,\n                        col6: `F` + i,\n                        col7: `G` + i,\n                        col8: `H` + i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},B=[];function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function $(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"scroll-width":1600,"max-height":500,"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"edit-option":e.editOption,"row-style-option":e.rowStyleOption,"virtual-scroll-option":{enable:!0},"border-y":""}})],1)]],2)},n=[],t={data:function(){return{rowStyleOption:{clickHighlight:!1},editOption:{cellValueChange:function(e){var n=e.row,t=e.column;console.log("cellValueChange row::",n),console.log("cellValueChange column::",t)}},columns:[{field:"col1",key:"col1",title:"col1",width:50,fixed:"left",edit:!0},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50,edit:!0},{field:"col3",key:"col3",title:"col3",width:50,edit:!0}]},{title:"col4-col5-col6",children:[{title:"col4-col5",children:[{field:"col4",key:"col4",title:"col4",width:130,edit:!0},{field:"col5",key:"col5",title:"col5",width:140,edit:!0}]},{title:"col6",field:"col6",key:"col6",width:140,edit:!0}]},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50,edit:!0}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right",edit:!0}],tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<100;n++)e.push({rowKey:n,col1:"A"+n,col2:"B"+n,col3:"C"+n,col4:"D"+n,col5:"E"+n,col6:"F"+n,col7:"G"+n,col8:"H"+n});this.tableData=e}},created:function(){this.initTableData()}};return $({render:e,staticRenderFns:n},t)}()}},z=F,G=Object(r["a"])(z,V,B,!1,null,null,null),H=G.exports,R=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"结合 element-ui",fileName:"combine-element-ui.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、你也可以结合 element-ui 组件做日期、数字、下拉等编辑功能")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <button class="button-demo" @click="submit()">提交</button>\n        <br />\n        <br />\n        <ve-table\n            rowKeyFieldName="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :cell-selection-option="cellSelectionOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // submit data\n                submitData: [\n                    // {\n                    //     rowKey: 0,\n                    //     field: "",\n                    //     value: "",\n                    // },\n                ],\n                cellSelectionOption: {\n                    // default true\n                    enable: false,\n                },\n                columns: [\n                    {\n                        field: "name",\n                        key: "name",\n                        title: "Name",\n                        align: "left",\n                        width: "15%",\n                    },\n                    {\n                        field: "date",\n                        key: "date",\n                        title: "Date",\n                        align: "left",\n                        width: "15%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-date-picker\n                                    size="small"\n                                    value={row["date"]}\n                                    on-input={(val) => {\n                                        row["date"] = val;\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                    type="date"\n                                    value-format="yyyy-MM-dd"\n                                    placeholder="选择日期"\n                                ></el-date-picker>\n                            );\n                        },\n                    },\n                    {\n                        field: "age",\n                        key: "age",\n                        title: "Age",\n                        align: "center",\n                        width: "30%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-input-number\n                                    size="small"\n                                    min={1}\n                                    value={row["age"]}\n                                    on-input={(val) => {\n                                        row["age"] = val;\n                                    }}\n                                    on-change={(val) => {\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                ></el-input-number>\n                            );\n                        },\n                    },\n                    {\n                        field: "gender",\n                        key: "gender",\n                        title: "Gender",\n                        align: "left",\n                        width: "40%",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return (\n                                <el-select\n                                    size="small"\n                                    value={row["gender"]}\n                                    on-input={(val) => {\n                                        row["gender"] = val;\n                                        this.cellDataChange(row, column, val);\n                                    }}\n                                    placeholder="请选择"\n                                >\n                                    <el-option label="female" value="female"></el-option>\n                                    <el-option label="male" value="male"></el-option>\n                                </el-select>\n                            );\n                        },\n                    },\n                ],\n                // table data\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        age: 17,\n                        gender: "female",\n                        rowKey: 0,\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        age: 20,\n                        gender: "male",\n                        rowKey: 1,\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        age: 22,\n                        gender: "female",\n                        rowKey: 2,\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        age: 18,\n                        gender: "male",\n                        rowKey: 3,\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        age: 29,\n                        gender: "female",\n                        rowKey: 4,\n                    },\n                ],\n            };\n        },\n        methods: {\n            // submit\n            submit() {\n                alert(JSON.stringify(this.submitData));\n            },\n\n            // cell data change\n            cellDataChange(row, column, cellValue) {\n                const { submitData } = this;\n\n                let currentCell = submitData.find(\n                    (x) => x.rowKey === row["rowKey"] && x.field === column.field,\n                );\n\n                if (currentCell) {\n                    currentCell.value = cellValue;\n                } else {\n                    let newCell = {\n                        rowKey: row["rowKey"],\n                        field: column.field,\n                        value: cellValue,\n                    };\n                    this.submitData.push(newCell);\n                }\n            },\n        },\n    };\n<\/script>\n')])])])],2)],1)},L=[];function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function T(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){q(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("button",{staticClass:"button-demo",on:{click:function(n){return e.submit()}}},[e._v("提交")]),e._v(" "),t("br"),e._v(" "),t("br"),e._v(" "),t("ve-table",{attrs:{rowKeyFieldName:"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"cell-selection-option":e.cellSelectionOption}})],1)]],2)},n=[],t={data:function(){var e=this;this.$createElement;return{submitData:[],cellSelectionOption:{enable:!1},columns:[{field:"name",key:"name",title:"Name",align:"left",width:"15%"},{field:"date",key:"date",title:"Date",align:"left",width:"15%",renderBodyCell:function(n,t){var l=n.row,a=n.column;n.rowIndex;return t("el-date-picker",{attrs:{size:"small",value:l["date"],type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},on:{input:function(n){l["date"]=n,e.cellDataChange(l,a,n)}}})}},{field:"age",key:"age",title:"Age",align:"center",width:"30%",renderBodyCell:function(n,t){var l=n.row,a=n.column;n.rowIndex;return t("el-input-number",{attrs:{size:"small",min:1,value:l["age"]},on:{input:function(e){l["age"]=e},change:function(n){e.cellDataChange(l,a,n)}}})}},{field:"gender",key:"gender",title:"Gender",align:"left",width:"40%",renderBodyCell:function(n,t){var l=n.row,a=n.column;n.rowIndex;return t("el-select",{attrs:{size:"small",value:l["gender"],placeholder:"请选择"},on:{input:function(n){l["gender"]=n,e.cellDataChange(l,a,n)}}},[t("el-option",{attrs:{label:"female",value:"female"}}),t("el-option",{attrs:{label:"male",value:"male"}})])}}],tableData:[{name:"John",date:"1900-05-20",age:17,gender:"female",rowKey:0},{name:"Dickerson",date:"1910-06-20",age:20,gender:"male",rowKey:1},{name:"Larsen",date:"2000-07-20",age:22,gender:"female",rowKey:2},{name:"Geneva",date:"2010-08-20",age:18,gender:"male",rowKey:3},{name:"Jami",date:"2020-09-20",age:29,gender:"female",rowKey:4}]}},methods:{submit:function(){alert(JSON.stringify(this.submitData))},cellDataChange:function(e,n,t){var l=this.submitData,a=l.find((function(t){return t.rowKey===e["rowKey"]&&t.field===n.field}));if(a)a.value=t;else{var i={rowKey:e["rowKey"],field:n.field,value:t};this.submitData.push(i)}}}};return T({render:e,staticRenderFns:n},t)}()}},U=X,Q=Object(r["a"])(U,R,L,!1,null,null,null),W=Q.exports,Y=t("5150"),Z={name:"basic-main",components:{Explain:s,ShortCuts:h,Base:x,InstanceMethods:A,CombineColumnFixed:H,CombineElementUi:W,API:Y["a"]}},ee=Z,ne=Object(r["a"])(ee,l,a,!1,null,null,null);n["default"]=ne.exports}}]);
//# sourceMappingURL=chunk-7d447681.4666c26b.js.map