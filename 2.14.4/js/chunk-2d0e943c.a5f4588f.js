(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e943c"],{"8d93":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("h2",[e._v("Column fixed")]),t("Explain"),t("div",[t("anchor",{attrs:{label:""}}),t("ColumnFixedLeft")],1),t("div",[t("anchor",{attrs:{label:""}}),t("ColumnFixedRight")],1),t("div",[t("anchor",{attrs:{label:""}}),t("ColumnFixedLeftRight")],1),t("div",[t("anchor",{attrs:{label:""}}),t("ColumnFixedAutoWidth")],1)],1)},n=[],c=function(){var e=this,l=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、The property "),t("code",[e._v("scroll-width")]),e._v(" is the width of the scroll area"),t("br"),e._v(" 2、The attribute "),t("code",[e._v("scroll-width")]),e._v(" is the width of the scroll area. When the outer container width is less than the "),t("code",[e._v("scroll-width")]),e._v(" value, a horizontal scroll bar will appear; when the outer container width is greater than the "),t("code",[e._v("scroll-width")]),e._v(" value, it will follow the container"),t("br"),e._v(" 3、Column width can not be set, or set to percentage, or pixel value (PX)"),t("br"),e._v(" 4、The "),t("code",[e._v("scroll-width")]),e._v(" attribute is set, and the column width unit "),t("strong",[e._v("is strongly recommended to be consistent!")]),t("br")])])])}],r=t("2877"),a={},d=Object(r["a"])(a,c,i,!1,null,null,null),f=d.exports,s=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Left column fixed",fileName:"column-fixed-left.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、Set the width of the scroll area through "),t("code",[e._v('scroll-width="1200"')]),e._v(",Via "),t("code",[e._v('style="width:900px"')]),e._v(" set outer container width"),t("br"),e._v("2、Via "),t("code",[e._v('style="width:900px"')]),e._v("set the width of the outer container. Use "),t("code",[e._v('fixed:"left"')]),e._v(" to set the left column that needs to be fixed")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    { field: "col9", key: "i", title: "Title9" },\n                    { field: "col10", key: "j", title: "Title10" },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function h(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function b(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?h(Object(t),!0).forEach((function(l){p(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function p(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9"},{field:"col10",key:"j",title:"Title10"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return b({render:e,staticRenderFns:l},t)}()}},m=y,v=Object(r["a"])(m,s,u,!1,null,null,null),w=v.exports,k=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Right column fixed",fileName:"column-fixed-right.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、Set the width of the scroll area through "),t("code",[e._v('scroll-width="1200"')]),e._v(",Via "),t("code",[e._v('style="width:900px"')]),e._v("set outer container width"),t("br"),e._v("2、Set the right column to be fixed through "),t("code",[e._v('fixed:"right"')])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1" },\n                    { field: "col2", key: "b", title: "Title2" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},T=[];function g(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function O(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?g(Object(t),!0).forEach((function(l){_(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function _(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var x={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1"},{field:"col2",key:"b",title:"Title2"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return O({render:e,staticRenderFns:l},t)}()}},j=x,P=Object(r["a"])(j,k,T,!1,null,null,null),D=P.exports,E=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Fixed left and right columns",fileName:"column-fixed-left-right.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、Set the width of the scroll area through "),t("code",[e._v('scroll-width="1200"')]),e._v("，Via "),t("code",[e._v('style="width:900px"')]),e._v("set outer container width"),t("br"),e._v("2、Set the left column to be fixed by "),t("code",[e._v('fixed:"left"')]),e._v("; set the right column to be fixed by"),t("code",[e._v('fixed:"right"')])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:900px"\n        :scroll-width="1200"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n                tableData: [\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                    {\n                        col1: "1",\n                        col2: "2",\n                        col3: "3",\n                        col4: "4",\n                        col5: "5",\n                        col6: "6",\n                        col7: "7",\n                        col8: "8",\n                        col9: "9",\n                        col10: "10",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},C=[];function S(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function F(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?S(Object(t),!0).forEach((function(l){$(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function $(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var R={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{"scroll-width":1200,"border-y":"",columns:e.columns,"table-data":e.tableData}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}],tableData:[{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"},{col1:"1",col2:"2",col3:"3",col4:"4",col5:"5",col6:"6",col7:"7",col8:"8",col9:"9",col10:"10"}]}}};return F({render:e,staticRenderFns:l},t)}()}},K=R,N=Object(r["a"])(K,E,C,!1,null,null,null),L=N.exports,W=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Container adaptive column fixed",fileName:"column-fixed-auto-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、Set the width of the scroll area through "),t("code",[e._v('scroll-width="1600"')]),t("br"),e._v("2、The outer container width is not set. Equivalent to settings "),t("code",[e._v('style="width:100%"')]),t("br"),e._v("3、Try changing the browser width.When the container width is less than "),t("code",[e._v("scroll-width")]),e._v(", the scroll bar will appear；When it is greater than "),t("code",[e._v("scroll-width")]),e._v(", it will follow the container adaptation")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :scroll-width="1600"\n        border-y\n        :columns="columns"\n        :table-data="tableData"\n        rowKeyFieldName="rowKey"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "col1", key: "a", title: "Title1", fixed: "left" },\n                    { field: "col2", key: "b", title: "Title2", fixed: "left" },\n                    { field: "col3", key: "c", title: "Title3" },\n                    { field: "col4", key: "d", title: "Title4" },\n                    { field: "col5", key: "e", title: "Title5" },\n                    { field: "col6", key: "f", title: "Title6" },\n                    { field: "col7", key: "g", title: "Title7" },\n                    { field: "col8", key: "h", title: "Title8" },\n                    {\n                        field: "col9",\n                        key: "i",\n                        title: "Title9",\n                        fixed: "right",\n                    },\n                    {\n                        field: "col10",\n                        key: "j",\n                        title: "Title10",\n                        fixed: "right",\n                    },\n                ],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 10; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: i,\n                        col2: i,\n                        col3: i,\n                        col4: i,\n                        col5: i,\n                        col6: i,\n                        col7: i,\n                        col8: i,\n                        col9: i,\n                        col10: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},V=[];function A(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function J(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?A(Object(t),!0).forEach((function(l){q(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function q(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}var z={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[[t("ve-table",{attrs:{"scroll-width":1600,"border-y":"",columns:e.columns,"table-data":e.tableData,rowKeyFieldName:"rowKey"}})]],2)},l=[],t={data:function(){return{columns:[{field:"col1",key:"a",title:"Title1",fixed:"left"},{field:"col2",key:"b",title:"Title2",fixed:"left"},{field:"col3",key:"c",title:"Title3"},{field:"col4",key:"d",title:"Title4"},{field:"col5",key:"e",title:"Title5"},{field:"col6",key:"f",title:"Title6"},{field:"col7",key:"g",title:"Title7"},{field:"col8",key:"h",title:"Title8"},{field:"col9",key:"i",title:"Title9",fixed:"right"},{field:"col10",key:"j",title:"Title10",fixed:"right"}]}},methods:{initTableData:function(){for(var e=[],l=0;l<10;l++)e.push({rowKey:l,col1:l,col2:l,col3:l,col4:l,col5:l,col6:l,col7:l,col8:l,col9:l,col10:l});this.tableData=e}},created:function(){this.initTableData()}};return J({render:e,staticRenderFns:l},t)}()}},U=z,X=Object(r["a"])(U,W,V,!1,null,null,null),B=X.exports,G={name:"basic-main",components:{Explain:f,ColumnFixedLeft:w,ColumnFixedRight:D,ColumnFixedLeftRight:L,ColumnFixedAutoWidth:B}},H=G,I=Object(r["a"])(H,o,n,!1,null,null,null);l["default"]=I.exports}}]);
//# sourceMappingURL=chunk-2d0e943c.a5f4588f.js.map