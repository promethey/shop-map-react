"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[2200],{82200:function(t,e,r){r.r(e),r.d(e,{executeTopFeaturesQuery:function(){return p}});var n=r(74165),u=r(1413),o=r(15861),i=r(23084),s=r(88031),a=r(49818),l=r(54307);function p(t,e,r,n){return c.apply(this,arguments)}function c(){return c=(0,o.Z)((0,n.Z)().mark((function t(e,r,o,p){var c,d,f,y;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=(0,i.en)(e),d=(0,u.Z)({},p),t.next=4,(0,s.IJ)(c,l.Z.from(r),o,d);case 4:return f=t.sent,y=f.data,t.abrupt("return",a.Z.fromJSON(y));case 7:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}},88031:function(t,e,r){r.d(e,{IJ:function(){return y},m5:function(){return F},vB:function(){return x},w7:function(){return h}});var n=r(74165),u=r(1413),o=r(15861),i=r(76200),s=r(92026),a=r(35995),l=r(77981),p=r(91340),c=r(22585),d=r(68620),f="Layer does not support extent calculation.";function y(t,e,r,n){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,n.Z)().mark((function t(e,r,u,o){var i;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e,r,"json",o);case 2:return i=t.sent,t.abrupt("return",((0,d.p)(r,u,i.data),i));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,e,r){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)((0,n.Z)().mark((function t(e,r,u){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.pC)(r.timeExtent)&&r.timeExtent.isEmpty?{data:{objectIds:[]}}:w(e,r,"json",u,{returnIdsOnly:!0}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function F(t,e,r){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)((0,n.Z)().mark((function t(e,r,u){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,s.pC)(r.timeExtent)&&r.timeExtent.isEmpty?{data:{count:0,extent:null}}:w(e,r,"json",u,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(t){var e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(f);if(e.hasOwnProperty("count"))throw new Error(f);return t})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,e,r){return(0,s.pC)(e.timeExtent)&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):w(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function w(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},d="string"==typeof t?(0,a.mN)(t):t,f=e.geometry?[e.geometry]:[];return n.responseType="pbf"===r?"array-buffer":"json",(0,p.aX)(f,null,n).then((function(t){var p=t&&t[0];(0,s.pC)(p)&&((e=e.clone()).geometry=p);var f=(0,c.A)((0,u.Z)((0,u.Z)((0,u.Z)({},d.query),{},{f:r},o),function(t,e){var r,n,u=t.geometry,o=t.toJSON(),i=o;if((0,s.pC)(u)&&(i.geometry=JSON.stringify(u),i.geometryType=(0,l.Ji)(u),i.inSR=u.spatialReference.wkid||JSON.stringify(u.spatialReference)),null!==(r=o.topFilter)&&void 0!==r&&r.groupByFields&&(i.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),null!==(n=o.topFilter)&&void 0!==n&&n.orderByFields&&(i.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(i.topFilter=JSON.stringify(i.topFilter)),o.objectIds&&(i.objectIds=o.objectIds.join(",")),o.orderByFields&&(i.orderByFields=o.orderByFields.join(",")),o.outFields&&!(null!==e&&void 0!==e&&e.returnCountOnly||null!==e&&void 0!==e&&e.returnExtentOnly||null!==e&&void 0!==e&&e.returnIdsOnly)?o.outFields.includes("*")?i.outFields="*":i.outFields=o.outFields.join(","):delete i.outFields,o.outSR?i.outSR=o.outSR.wkid||JSON.stringify(o.outSR):u&&o.returnGeometry&&(i.outSR=i.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){var a=o.timeExtent,p=a.start,c=a.end;null==p&&null==c||(i.time=p===c?p:"".concat(null!==p&&void 0!==p?p:"null",",").concat(null!==c&&void 0!==c?c:"null")),delete o.timeExtent}return i}(e,o)));return(0,i.default)((0,a.v_)(d.path,"queryTopFeatures"),(0,u.Z)((0,u.Z)({},n),{},{query:(0,u.Z)((0,u.Z)({},f),n.query)}))}))}}}]);
//# sourceMappingURL=2200.dc86f125.chunk.js.map