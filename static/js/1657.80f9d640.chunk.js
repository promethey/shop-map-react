"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[1657],{51657:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(1413),i=n(37762),a=n(74165),s=n(15861),u=n(15671),o=n(43144),c=n(76200),l=n(14921),p=n(10064),d=n(32718),f=n(92026),h=n(66978),y=n(77981),v=n(92975),m=n(83406),g=n(97114),b=n(19995),Z=n(14e3),x=n(47615),k=n(63543),_=n(68808),w=n(52410),I=n(85249),F=n(80031),E={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},T=function(){function e(){var t=this;(0,u.Z)(this,e),this._queryEngine=null,this._snapshotFeatures=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._fetch(n);case 2:return r=e.sent,e.abrupt("return",t._createFeatures(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return(0,o.Z)(e,[{key:"destroy",value:function(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}},{key:"load",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,s,u,o,c,l,d,f,h,y,m,b,_,T,S,q,j,P,O,R,C,G,A,D,M,Q,N,z,H,J=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=J.length>1&&void 0!==J[1]?J[1]:{},this._loadOptions={url:t.url,customParameters:t.customParameters},s=[],e.next=5,this._checkProjection(t.spatialReference);case 5:if(u=null,e.t0=t.url,!e.t0){e.next=11;break}return e.next=10,this._fetch(null===n||void 0===n?void 0:n.signal);case 10:u=e.sent;case 11:o=(0,x.my)(u,{geometryType:t.geometryType}),c=t.fields||o.fields||[],l=null!=t.hasZ?t.hasZ:o.hasZ,d=o.geometryType,f=t.objectIdField||o.objectIdFieldName||"__OBJECTID",h=t.spatialReference||v.Zn,y=t.timeInfo,c===o.fields&&o.unknownFields.length>0&&s.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:o.unknownFields}}),(m=new w.Z(c).get(f))?("esriFieldTypeString"!==m.type&&(m.type="esriFieldTypeOID"),m.editable=!1,m.nullable=!1,f=m.name):(m={alias:f,name:f,type:"string"===o.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},c.unshift(m)),b={},_=(0,i.Z)(c),e.prev=20,_.s();case 22:if((T=_.n()).done){e.next=31;break}if(null==(S=T.value).name&&(S.name=S.alias),null==S.alias&&(S.alias=S.name),S.name){e.next=26;break}throw new p.Z("geojson-layer:invalid-field-name","field name is missing",{field:S});case 26:if(I.v.jsonValues.includes(S.type)){e.next=28;break}throw new p.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(S.name,'"'),{field:S});case 28:S.name!==m.name&&void 0!==(q=(0,F.os)(S))&&(b[S.name]=q);case 29:e.next=22;break;case 31:e.next=36;break;case 33:e.prev=33,e.t1=e.catch(20),_.e(e.t1);case 36:return e.prev=36,_.f(),e.finish(36);case 39:return this._fieldsIndex=new w.Z(c),(j=this._fieldsIndex.requiredFields.indexOf(m))>-1&&this._fieldsIndex.requiredFields.splice(j,1),y&&(y.startTimeField&&((P=this._fieldsIndex.get(y.startTimeField))?(y.startTimeField=P.name,P.type="esriFieldTypeDate"):y.startTimeField=null),y.endTimeField&&((O=this._fieldsIndex.get(y.endTimeField))?(y.endTimeField=O.name,O.type="esriFieldTypeDate"):y.endTimeField=null),y.trackIdField&&((R=this._fieldsIndex.get(y.trackIdField))?y.trackIdField=R.name:(y.trackIdField=null,s.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))),y.startTimeField||y.endTimeField||(s.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)),C=d?(0,k.bU)(d):void 0,G={warnings:s,featureErrors:[],layerDefinition:(0,r.Z)((0,r.Z)({},E),{},{drawingInfo:null!==C&&void 0!==C?C:void 0,templates:(0,k.Hq)(b),extent:void 0,geometryType:d,objectIdField:f,fields:c,hasZ:!!l,timeInfo:y})},this._queryEngine=new Z.q({fields:c,geometryType:d,hasM:!1,hasZ:l,objectIdField:f,spatialReference:h,timeInfo:y,featureStore:new g.Z({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,k.Dm)(b,f),e.next=46,this._createFeatures(u);case 46:return A=e.sent,this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,A),D=this._normalizeFeatures(A,G.warnings,G.featureErrors),this._queryEngine.featureStore.addMany(D),e.next=52,this._queryEngine.fetchRecomputedExtents();case 52:return M=e.sent,Q=M.fullExtent,N=M.timeExtent,G.layerDefinition.extent=Q,N&&(z=N.start,H=N.end,G.layerDefinition.timeInfo.timeExtent=[z,H]),e.abrupt("return",G);case 57:case"end":return e.stop()}}),e,this,[[20,33,36,39]])})));return function(t){return e.apply(this,arguments)}}()},{key:"applyEdits",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._queryEngine,r=n.spatialReference,i=n.geometryType,e.next=3,Promise.all([(0,_.b)(r,i),(0,b._W)(t.adds,r),(0,b._W)(t.updates,r)]);case 3:return e.next=5,this._waitSnapshotComplete();case 5:return e.abrupt("return",this._applyEdits(t));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"queryFeatures",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQuery(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryFeatureCount",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForCount(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryObjectIds",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForIds(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"queryExtent",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var t,n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,this._waitSnapshotComplete();case 4:return e.abrupt("return",this._queryEngine.executeQueryForExtent(t,n.signal));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"querySnapping",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,this._waitSnapshotComplete();case 3:return e.abrupt("return",this._queryEngine.executeQueryForSnapping(t,n.signal));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refresh",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,i,s,u=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._loadOptions.customParameters=t,null!==(n=this._snapshotTask)&&void 0!==n&&n.abort(),this._snapshotTask=(0,l.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((function(e){u._queryEngine.featureStore.clear(),u._objectIdGenerator=u._createObjectIdGenerator(u._queryEngine,e);var t=u._normalizeFeatures(e);t&&u._queryEngine.featureStore.addMany(t)}),(function(e){u._queryEngine.featureStore.clear(),(0,h.D_)(e)||d.Z.getLogger("esri.layers.GeoJSONLayer").error(new p.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),e.next=6,this._waitSnapshotComplete();case 6:return e.next=8,this._queryEngine.fetchRecomputedExtents();case 8:return r=e.sent,i=r.fullExtent,s=r.timeExtent,e.abrupt("return",{extent:i,timeExtent:s});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_createFeatures",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,s,u,o,c,l,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t){e.next=2;break}return e.abrupt("return",[]);case 2:if(n=this._queryEngine,r=n.geometryType,s=n.hasZ,u=n.objectIdField,o=(0,x.lG)(t,{geometryType:r,hasZ:s,objectIdField:u}),!(0,v.fS)(this._queryEngine.spatialReference,v.Zn)){c=(0,i.Z)(o);try{for(c.s();!(l=c.n()).done;)p=l.value,(0,f.pC)(p.geometry)&&(p.geometry=(0,m.GH)((0,b.iV)((0,m.di)(p.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),v.Zn,this._queryEngine.spatialReference)))}catch(a){c.e(a)}finally{c.f()}}return e.abrupt("return",o);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_waitSnapshotComplete",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._snapshotTask||this._snapshotTask.finished){e.next=9;break}return e.prev=1,e.next=4,this._snapshotTask.promise;case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.abrupt("return",this._waitSnapshotComplete());case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));return function(){return e.apply(this,arguments)}}()},{key:"_fetch",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,i,s,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this._loadOptions,i=n.url,s=n.customParameters,e.next=5,(0,c.default)(i,{responseType:"json",query:(0,r.Z)({},s),signal:t});case 5:return u=e.sent.data,e.next=8,(0,x.O3)(u);case 8:return e.abrupt("return",u);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_normalizeFeatures",value:function(e,t,n){var r,a=this._queryEngine.objectIdField,s=[],u=(0,i.Z)(e);try{for(u.s();!(r=u.n()).done;){var o=r.value,c=this._createDefaultAttributes(),l=(0,_.O0)(this._fieldsIndex,c,o.attributes,!0,t);l?null===n||void 0===n||n.push(l):(this._assignObjectId(c,o.attributes,!0),o.attributes=c,o.objectId=c[a],s.push(o))}}catch(p){u.e(p)}finally{u.f()}return s}},{key:"_applyEdits",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){var n,r,s,u,o,c,l,p,d,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.adds,r=t.updates,s=t.deletes,u={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}},n&&n.length&&this._applyAddEdits(u,n),r&&r.length&&this._applyUpdateEdits(u,r),s&&s.length){o=(0,i.Z)(s);try{for(o.s();!(c=o.n()).done;)l=c.value,u.deleteResults.push((0,_.d1)(l))}catch(a){o.e(a)}finally{o.f()}this._queryEngine.featureStore.removeManyById(s)}return e.next=4,this._queryEngine.fetchRecomputedExtents();case 4:return p=e.sent,d=p.fullExtent,f=p.timeExtent,e.abrupt("return",{extent:d,timeExtent:f,featureEditResults:u});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_applyAddEdits",value:function(e,t){var n,r=e.addResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,c=a.objectIdField,l=a.spatialReference,p=a.featureStore,d=[],h=(0,i.Z)(t);try{for(h.s();!(n=h.n()).done;){var v=n.value;if(v.geometry&&s!==(0,y.Ji)(v.geometry))r.push((0,_.av)("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),Z=(0,_.O0)(this._fieldsIndex,g,v.attributes);if(Z)r.push(Z);else{if(this._assignObjectId(g,v.attributes),v.attributes=g,null!=v.uid){var x=v.attributes[c];e.uidToObjectId[v.uid]=x}if((0,f.pC)(v.geometry)){var k,w=null!==(k=v.geometry.spatialReference)&&void 0!==k?k:l;v.geometry=(0,b.iV)((0,_.og)(v.geometry,w),w,l)}d.push(v),r.push((0,_.d1)(v.attributes[c]))}}}}catch(I){h.e(I)}finally{h.f()}p.addMany((0,m.Yn)([],d,s,o,u,c))}},{key:"_applyUpdateEdits",value:function(e,t){var n,r=e.updateResults,a=this._queryEngine,s=a.geometryType,u=a.hasM,o=a.hasZ,c=a.objectIdField,l=a.spatialReference,p=a.featureStore,d=(0,i.Z)(t);try{for(d.s();!(n=d.n()).done;){var h=n.value,v=h.attributes,g=h.geometry,Z=v&&v[c];if(null!=Z)if(p.has(Z)){var x=(0,m.EI)(p.getFeature(Z),s,o,u);if((0,f.pC)(g)){var k;if(s!==(0,y.Ji)(g)){r.push((0,_.av)("Incorrect geometry type."));continue}var w=null!==(k=g.spatialReference)&&void 0!==k?k:l;x.geometry=(0,b.iV)((0,_.og)(g,w),w,l)}if(v){var I=(0,_.O0)(this._fieldsIndex,x.attributes,v);if(I){r.push(I);continue}}p.add((0,m.XA)(x,s,o,u,c)),r.push((0,_.d1)(Z))}else r.push((0,_.av)("Feature with object id ".concat(Z," missing")));else r.push((0,_.av)("Identifier field ".concat(c," missing")))}}catch(F){d.e(F)}finally{d.f()}}},{key:"_createObjectIdGenerator",value:function(e,t){var n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return function(){return n.name+"-"+Date.now().toString(16)};var r,a=Number.NEGATIVE_INFINITY,s=(0,i.Z)(t);try{for(s.s();!(r=s.n()).done;){var u=r.value;u.objectId&&(a=Math.max(a,u.objectId))}}catch(o){s.e(o)}finally{s.f()}return a=Math.max(0,a)+1,function(){return a++}}},{key:"_assignObjectId",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this._queryEngine.objectIdField;e[r]=n&&r in t?t[r]:this._objectIdGenerator()}},{key:"_checkProjection",value:function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b._W)(v.Zn,t);case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),new p.Z("geojson-layer","Projection not supported");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()},47615:function(e,t,n){n.d(t,{O3:function(){return I},lG:function(){return E},my:function(){return F},q9:function(){return f}});var r=n(29439),i=n(74165),a=n(37762),s=n(10064),u=n(3182),o=n(80457),c=n(80031),l=(0,i.Z)().mark(h),p=(0,i.Z)().mark(y),d={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function f(e){return d[e]}function h(e){var t,n,r;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:i.t0=e.type,i.next="Feature"===i.t0?3:"FeatureCollection"===i.t0?6:25;break;case 3:return i.next=5,e;case 5:return i.abrupt("break",25);case 6:t=(0,a.Z)(e.features),i.prev=7,t.s();case 9:if((n=t.n()).done){i.next=17;break}if(r=n.value,i.t1=r,!i.t1){i.next=15;break}return i.next=15,r;case 15:i.next=9;break;case 17:i.next=22;break;case 19:i.prev=19,i.t2=i.catch(7),t.e(i.t2);case 22:return i.prev=22,t.f(),i.finish(22);case 25:case"end":return i.stop()}}),l,null,[[7,19,22,25]])}function y(e){var t,n,r,s,u,o,c,l,d;return(0,i.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!e){i.next=57;break}i.t0=e.type,i.next="Point"===i.t0?4:"LineString"===i.t0||"MultiPoint"===i.t0?7:"MultiLineString"===i.t0||"Polygon"===i.t0?9:"MultiPolygon"===i.t0?26:57;break;case 4:return i.next=6,e.coordinates;case 6:return i.abrupt("break",57);case 7:return i.delegateYield(e.coordinates,"t1",8);case 8:return i.abrupt("break",57);case 9:t=(0,a.Z)(e.coordinates),i.prev=10,t.s();case 12:if((n=t.n()).done){i.next=17;break}return r=n.value,i.delegateYield(r,"t2",15);case 15:i.next=12;break;case 17:i.next=22;break;case 19:i.prev=19,i.t3=i.catch(10),t.e(i.t3);case 22:return i.prev=22,t.f(),i.finish(22);case 25:return i.abrupt("break",57);case 26:s=(0,a.Z)(e.coordinates),i.prev=27,s.s();case 29:if((u=s.n()).done){i.next=49;break}o=u.value,c=(0,a.Z)(o),i.prev=32,c.s();case 34:if((l=c.n()).done){i.next=39;break}return d=l.value,i.delegateYield(d,"t4",37);case 37:i.next=34;break;case 39:i.next=44;break;case 41:i.prev=41,i.t5=i.catch(32),c.e(i.t5);case 44:return i.prev=44,c.f(),i.finish(44);case 47:i.next=29;break;case 49:i.next=54;break;case 51:i.prev=51,i.t6=i.catch(27),s.e(i.t6);case 54:return i.prev=54,s.f(),i.finish(54);case 57:case"end":return i.stop()}}),p,null,[[10,19,22,25],[27,51,54,57],[32,41,44,47]])}function v(e){for(var t=0,n=0;n<e.length;n++){var r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t<=0}function m(e){var t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return x(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){x(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}return e}(e,t,n);case"MultiPolygon":return function(e,t,n){var r,i=(0,a.Z)(t.coordinates);try{for(i.s();!(r=i.n()).done;){var s=r.value;b(e,s[0],n);for(var u=1;u<s.length;u++)Z(e,s[u],n)}}catch(o){i.e(o)}finally{i.f()}return e}(e,t,n);case"Point":return function(e,t,n){return _(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){var r=t.coordinates;b(e,r[0],n);for(var i=1;i<r.length;i++)Z(e,r[i],n);return e}(e,t,n)}}function b(e,t,n){var r=m(t);!function(e){return!v(e)}(r)?x(e,r,n):k(e,r,n)}function Z(e,t,n){var r=m(t);!function(e){return v(e)}(r)?x(e,r,n):k(e,r,n)}function x(e,t,n){var r,i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){_(e,r.value,n)}}catch(s){i.e(s)}finally{i.f()}e.lengths.push(t.length)}function k(e,t,n){for(var r=t.length-1;r>=0;r--)_(e,t[r],n);e.lengths.push(t.length)}function _(e,t,n){var i=(0,r.Z)(t,3),a=i[0],s=i[1],u=i[2];e.coords.push(a,s),n.hasZ&&e.coords.push(u||0)}function w(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});var t=e.crs;if(t){var n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!r.test(n))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}}function F(e){var t,n,r,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=[],o=new Set,l=new Set,p=!1,d=null,v=!1,m=s.geometryType,g=void 0===m?null:m,b=!1,Z=(0,a.Z)(h(e));try{var x=function(){var e=i.value,t=e.geometry,n=e.properties,s=e.id;if((!t||(g||(g=f(t.type)),f(t.type)===g))&&(p||(p=function(e){var t,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;)if(t.value.length>2)return!0}catch(r){n.e(r)}finally{n.f()}return!1}(y(t))),v||(v=null!=s)&&(r=typeof s,n&&(d=Object.keys(n).filter((function(e){return n[e]===s})))),n&&d&&v&&null!=s&&(d.length>1?d=d.filter((function(e){return n[e]===s})):1===d.length&&(d=n[d[0]]===s?d:[])),!b&&n)){var h=!0;for(var m in n)if(!o.has(m)){var Z=n[m];if(null!=Z){var x=w(Z);if("unknown"!==x){l.delete(m),o.add(m);var k=(0,c.q6)(m);k&&u.push({name:k,alias:m,type:x})}else l.add(m)}else h=!1,l.add(m)}b=h}};for(Z.s();!(i=Z.n()).done;)x()}catch(E){Z.e(E)}finally{Z.f()}var k=null!==(t=(0,c.q6)(1===(null===(n=d)||void 0===n?void 0:n.length)&&d[0]||null))&&void 0!==t?t:void 0;if(k){var _,I=(0,a.Z)(u);try{for(I.s();!(_=I.n()).done;){var F=_.value;if(F.name===k&&(0,c.H7)(F)){F.type="esriFieldTypeOID";break}}}catch(E){I.e(E)}finally{I.f()}}return{fields:u,geometryType:g,hasZ:p,objectIdFieldName:k,objectIdFieldType:r,unknownFields:Array.from(l)}}function E(e,t){return Array.from(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.Z)().mark((function n(){var r,s,c,l,p,d,h,y,v,m,b,Z;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=t.geometryType,s=t.objectIdField,c=(0,a.Z)(e),n.prev=2,c.s();case 4:if((l=c.n()).done){n.next=17;break}if(d=l.value,h=d.geometry,y=d.properties,v=d.id,!h||f(h.type)===r){n.next=9;break}return n.abrupt("continue",15);case 9:return m=y||{},b=void 0,s&&(b=m[s],null==v||b||(m[s]=b=v)),Z=new u.u_(h?g(new o.Z,h,t):null,m,null,null!==(p=b)&&void 0!==p?p:void 0),n.next=15,Z;case 15:n.next=4;break;case 17:n.next=22;break;case 19:n.prev=19,n.t0=n.catch(2),c.e(n.t0);case 22:return n.prev=22,c.f(),n.finish(22);case 25:case"end":return n.stop()}}),n,null,[[2,19,22,25]])}))()}(h(e),t))}},63543:function(e,t,n){n.d(t,{Dm:function(){return d},Hq:function(){return f},MS:function(){return h},bU:function(){return c}});var r=n(4942),i=n(1413),a=n(93169),s=n(84652),u=n(60480),o=n(76115);function c(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}var l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/,p=1;function d(e,t){if((0,a.Z)("esri-csp-restrictions"))return function(){return(0,i.Z)((0,r.Z)({},t,null),e)};try{var n="this.".concat(t," = null;");for(var s in e)n+="this".concat(l.test(s)?".".concat(s):'["'.concat(s,'"]')," = ").concat(JSON.stringify(e[s]),";");var u=new Function("\n      return class AttributesClass$".concat(p++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return function(){return new u}}catch(o){return function(){return(0,i.Z)((0,r.Z)({},t,null),e)}}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:u.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},68808:function(e,t,n){n.d(t,{O0:function(){return g},av:function(){return f},b:function(){return _},d1:function(){return y},og:function(){return Z}});var r=n(74165),i=n(15861),a=n(37762),s=n(43144),u=n(15671),o=n(92026),c=n(92975),l=n(80031),p=(0,s.Z)((function e(){(0,u.Z)(this,e),this.code=null,this.description=null})),d=(0,s.Z)((function e(t){(0,u.Z)(this,e),this.error=new p,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}));function f(e){return new d(e)}var h=(0,s.Z)((function e(t){(0,u.Z)(this,e),this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}));function y(e){return new h(e)}var v,m=new Set;function g(e,t,n){var r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],s=arguments.length>4?arguments[4]:void 0;for(var u in m.clear(),n){var o=e.get(u);if(o){var c=n[u],p=b(o,c);if(p!==c&&s&&s.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:o,originalValue:c,sanitizedValue:p}}),m.add(o.name),o&&(i||o.editable)){var d=(0,l.Qc)(o,p);if(d)return f((0,l.vP)(d,o,p));t[o.name]=p}}}var h,y=(0,a.Z)(null!==(r=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==r?r:[]);try{for(y.s();!(h=y.n()).done;){var v=h.value;if(!m.has(v.name))return f('missing required field "'.concat(v.name,'"'))}}catch(g){y.e(g)}finally{y.f()}return null}function b(e,t){var n=t;return"string"==typeof t&&(0,l.H7)(e)?n=parseFloat(t):null!=t&&(0,l.qN)(e)&&"string"!=typeof t&&(n=String(t)),(0,l.Pz)(n)}function Z(e,t){if(!e||!(0,c.JY)(t))return e;if("rings"in e||"paths"in e){if((0,o.Wi)(v))throw new TypeError("geometry engine not loaded");return v.simplify(t,e)}return e}function x(){return k.apply(this,arguments)}function k(){return(k=(0,i.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(0,o.Wi)(v),!e.t0){e.next=5;break}return e.next=4,Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309));case 4:v=e.sent;case 5:return e.abrupt("return",v);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)((0,r.Z)().mark((function e(t,n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!(0,c.JY)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n,e.t0){e.next=4;break}return e.next=4,x();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=1657.80f9d640.chunk.js.map