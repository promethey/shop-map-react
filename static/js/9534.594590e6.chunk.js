"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[9534,5164],{18745:function(e,t,r){r.d(t,{a:function(){return s}});var n=r(10064),i=r(32718),a=r(80613),l=r(84319);function s(e){return(0,l.hj)(e.minDataValue)&&(0,l.hj)(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?a.X.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?a.X.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?a.X.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?a.X.SIZE_UNIT_VALUE:(i.Z.getLogger("esri.views.2d.engine.webgl").error(new n.Z("mapview-bad-type","Found invalid size VisualVariable",e)),a.X.NONE)}},85164:function(e,t,r){r.r(t),r.d(t,{createSymbolSchema:function(){return o}});var n=r(1413),i=r(80613),a=r(54815);function l(e){var t;return"line-marker"===e.type?{type:"line-marker",color:null===(t=e.color)||void 0===t?void 0:t.toJSON(),placement:e.placement,style:e.style}:e.constructor.fromJSON(e.toJSON()).toJSON()}function s(e){return(0,a.hF)(e)}function o(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return function(e,t,r){var o=(0,a.jj)(i.LW.FILL,t),u=r?s(o):o,c=e.clone(),p=c.outline,f=(0,a.jy)(t.symbologyType);f||(c.outline=null);var d=(0,n.Z)({materialKey:u,hash:c.hash()},l(c));if(f)return d;var y=[];if(y.push(d),p){var m=(0,a.jj)(i.LW.LINE,(0,n.Z)((0,n.Z)({},t),{},{isOutline:!0})),v=(0,n.Z)({materialKey:r?s(m):m,hash:p.hash()},l(p));y.push(v)}return{type:"composite-symbol",layers:y,hash:y.reduce((function(e,t){return t.hash+e}),"")}}(e,t,r);case"simple-marker":case"picture-marker":return function(e,t,r){var o=(0,a.jj)(i.LW.MARKER,t),u=r?s(o):o,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:t.maxVVSize})}(e,t,r);case"simple-line":return function(e,t,r){var o=(0,a.jy)(t.symbologyType)?i.mD.DEFAULT:t.symbologyType,u=(0,a.jj)(i.LW.LINE,(0,n.Z)((0,n.Z)({},t),{},{symbologyType:o})),c=r?s(u):u,p=e.clone(),f=p.marker;p.marker=null;var d=[];if(d.push((0,n.Z)({materialKey:c,hash:p.hash()},l(p))),f){var y,m=(0,a.jj)(i.LW.MARKER,t),v=r?s(m):m;f.color=null!==(y=f.color)&&void 0!==y?y:p.color,d.push((0,n.Z)({materialKey:v,hash:f.hash(),lineWidth:p.width},l(f)))}return{type:"composite-symbol",layers:d,hash:d.reduce((function(e,t){return t.hash+e}),"")}}(e,t,r);case"text":return function(e,t,r){var o=(0,a.jj)(i.LW.TEXT,t),u=r?s(o):o,c=l(e);return(0,n.Z)((0,n.Z)({materialKey:u,hash:e.hash()},c),{},{angle:e.angle,maxVVSize:t.maxVVSize})}(e,t,r);case"label":return function(e,t,r){var l=e.toJSON(),o=(0,a.jj)(i.LW.LABEL,(0,n.Z)((0,n.Z)({},t),{},{placement:l.labelPlacement}));return(0,n.Z)((0,n.Z)({materialKey:r?s(o):o,hash:e.hash()},l),{},{labelPlacement:l.labelPlacement})}(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return(0,n.Z)((0,n.Z)({},l(e)),{},{type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize});default:throw new Error("symbol not supported ".concat(e.type))}}},69534:function(e,t,r){r.d(t,{MD:function(){return B},Ew:function(){return L},q5:function(){return z}});var n=r(93433),i=r(1413),a=r(37762),l=r(10064),s=r(93169),o=r(32718),u=r(92026),c=r(17842),p=r(76672),f=r(48732),d=r(85116),y=r(80613),m=r(84319),v=r(98029),b=r(18745);function g(e){if(!e)return y.X.NONE;var t,r=0,n=(0,a.Z)(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;if("size"===i.type){var l=(0,b.a)(i);r|=l,"outline"===i.target&&(r|=l<<4)}else"color"===i.type?r|=y.X.COLOR:"opacity"===i.type?r|=y.X.OPACITY:"rotation"===i.type&&(r|=y.X.ROTATION)}}catch(s){n.e(s)}finally{n.f()}return r}var h=r(85164),x=(r(78915),r(691)),S=r(94109);r(95857),r(98125);function Z(e,t){if(!("visualVariables"in e))return 0;if(!e.hasVisualVariables("size"))return 0;var r=e.getVisualVariablesForType("size");if(!r[0])return 0;var n=r[0];if(t&&"cluster_count"===n.field&&"cluster"===t.type)return t.clusterMaxSize;if("outline"===n.target)return 0;if("stops"===n.transformationType)return n.stops.map((function(e){return e.size})).reduce(w,0);if("clamped-linear"===n.transformationType){var i,a;return i="number"==typeof n.maxSize?n.maxSize:n.maxSize.stops.map((function(e){return e.size})).reduce(w,0),a="number"==typeof n.minSize?n.minSize:n.minSize.stops.map((function(e){return e.size})).reduce(w,0),Math.max(i,a)}return"real-world-size"===n.transformationType?30:void 0}S.eF.metrics,new x.Z(0,0,24,24);function w(e,t){return Math.max(e,t)}var T=r(65760),E=r(20478),V=r(31666),F=o.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),I="ValidationError";function z(e,t){var r=0,n=0,i=y.mD.DEFAULT;if((0,u.pC)(e)){if(n=Z(e,t),"visualVariables"in e&&(r=g(e.visualVariables||[]),"dot-density"===e.type&&(i=y.mD.DOT_DENSITY)),"heatmap"===e.type&&(i=y.mD.HEATMAP),"dictionary"===e.type)return{maxVVSize:n,vvFlags:r,symbologyType:y.mD.DEFAULT};if("pie-chart"===e.type)return{maxVVSize:n,vvFlags:r,symbologyType:y.mD.PIE_CHART};if(i!==y.mD.DOT_DENSITY&&i!==y.mD.HEATMAP){var l=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&l.push(e.backgroundFillSymbol);var s,o=!0,c=!0,p=(0,a.Z)(l);try{for(p.s();!(s=p.n()).done;){var f=s.value;if("cim"===f.type&&(c=!1),"simple-fill"===f.type||"picture-fill"===f.type){var d=f.outline,m=d&&"none"!==d.style&&"solid"!==d.style,v="simple-fill"===f.type&&"none"!==f.style&&"solid"!==f.style;m&&(o=!1),("picture-fill"===f.type||v||m)&&(c=!1)}}}catch(b){p.e(b)}finally{p.f()}o?i=c?y.mD.OUTLINE_FILL_SIMPLE:y.mD.OUTLINE_FILL:c&&(i=y.mD.SIMPLE)}}return{vvFlags:r,maxVVSize:n,symbologyType:i}}var k=null;function L(e){if((0,s.Z)("esri-2d-update-debug")){var t=O(e,!0);console.debug("Created new schema",t),console.debug("Schema diff",(0,f.Hg)(k,t)),k=t}return O(e)}function O(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var r,s,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new Array,i=0;return r.push(function(e,t){var r,i,s,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],c={indexCount:0,fields:{}},p="featureReduction"in e&&null!==(r=e.featureReduction)&&void 0!==r?r:void 0,f=p?"aggregate":"feature";if("sublayers"in e){var m,v={type:"subtype",subtypeField:e.subtypeField,renderers:{},symbologyType:y.mD.DEFAULT},b={type:"subtype",mapping:{},target:"feature",subtypeField:e.subtypeField},x={type:"subtype",classes:{}},S={type:"symbol",target:"feature",aggregateFields:[],attributes:c,storage:b,mesh:{matcher:v,aggregateMatcher:null,labels:x,sortKey:null}},Z=new Set,w=0,k=(0,a.Z)(e.sublayers);try{var L=function(){var e=m.value,t=e.renderer,r=e.subtypeCode,n=e.labelingInfo,i=e.labelsVisible,a=0;"visualVariables"in t&&t.visualVariables&&(t.visualVariables.some((function(e){return"rotation"!==e.type}))&&F.warnOnce("SubtypeGroupLayer currently only supports rotation visualVariables. All other visualVariable types will be ignored."),a=g(t.visualVariables.filter((function(e){return"size"!==e.type}))));var s={symbologyType:y.mD.DEFAULT,vvFlags:a,maxVVSize:0},p=B(c,f,t,s,o),d=P(c,f,t),h=i&&n;if("dictionary"===p.type)throw new l.Z(I,"Dictionary renderer is not supported in subtype layers");if("subtype"===p.type)throw new l.Z(I,"Nested subtype renderers is not supported");if((0,u.pC)(d)&&"subtype"===d.type)throw new l.Z(I,"Nested subtype storage is not supported");if((0,u.pC)(d)&&(0,u.pC)(d.attributeMapping))throw new l.Z(I,"Non-visual-variable attributes are not supported in subtype layers");if("heatmap"===p.type)throw new l.Z(I,"Heatmaps are not supported in subtype layers");if("pie-chart"===p.type)throw new l.Z(I,"Pie-charts are not supported in subtype layers");if(Z.has(r))throw new l.Z(I,"Subtype codes for sublayers must be unique");Z.add(r),v.renderers[r]=p,b.mapping[r]=d,h&&(x.classes[r]=h.map((function(e){return _(c,e,"feature",w++,s,o)})))};for(k.s();!(m=k.n()).done;)L()}catch(Y){k.e(Y)}finally{k.f()}return S}if("heatmap"===(null===(i=e.renderer)||void 0===i?void 0:i.type)&&"raster"===(0,T.rk)()){var O=e.renderer,N=O.radius,D=O.fieldOffset,M=O.field;return{type:"heatmap",aggregateFields:[],attributes:c,target:f,storage:null,mesh:{radius:N,fieldOffset:D,field:R(c,{target:f,field:M,resultType:"numeric"}).field}}}var C=function(e,t,r){var i,s,o="featureReduction"in t&&t.featureReduction;if(!o)return{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};var u="aggregate",c=[],p=null,f=(0,V.oq)(t.geometryType),y=[],m=null;if(o)switch(o.type){case"selection":return F.error(new l.Z(I,"Mapview does not support `selection` reduction type",o)),{fields:[],labels:[],matcher:void 0,rendererOverride:void 0};case"cluster":case"binning":if(c.push.apply(c,(0,n.Z)(null!==(i=o.fields)&&void 0!==i?i:[])),"cluster"===o.type?f="esriGeometryPoint":"binning"===o.type&&(f="esriGeometryPolygon"),!o.renderer||null!==(s=o.renderer.authoringInfo)&&void 0!==s&&s.isAutoGenerated){if("cluster"===o.type){if(m=(0,E.S1)(c,t.renderer,o,null,!0),o.symbol){var v=z(m,o);p={type:"simple",symbol:(0,h.createSymbolSchema)(o.symbol,v,r),symbologyType:v.symbologyType}}y=o&&o.labelsVisible&&o.labelingInfo||[]}}else{if("cluster"===o.type)m=(0,E.st)(o.renderer,o,null).renderer;else m=o.renderer;var b=z(o.renderer,o);p=B(e,u,o.renderer,b,r),y=o&&o.labelsVisible&&o.labelingInfo||[]}}return function(e,t){var r,n={mesh:!0,storage:!0},i=(0,a.Z)(t);try{for(i.s();!(r=i.n()).done;){var l=r.value,s=l.name,o=l.onStatisticField,u=l.onStatisticExpression,c=l.statisticType,p=void 0,f=void 0,d="numeric",y="feature";u?f=A(e,{type:"expression",target:y,valueExpression:u.expression,resultType:d}).fieldIndex:p=A(e,{type:"field",target:y,field:o,resultType:d}).field,A(e,{type:"statistic",target:"aggregate",name:s,context:n,inField:p,inFieldIndex:f,statisticType:c})}}catch(Y){i.e(Y)}finally{i.f()}}(e,c),{labels:(0,d.a)(y,"binning"===o.type?"esriGeometryPolygon":f),matcher:p,fields:c,rendererOverride:m}}(c,e,o),K=(0,V.oq)(e.geometryType),U=null!==(s=C.rendererOverride)&&void 0!==s?s:e.renderer,j=z(U,p),J=B(c,f,U,j,o),W=P(c,f,U),H=function(e,t,r,n){if((0,u.pC)(n))return null;if((0,u.pC)(t)&&t.length){t.length>1&&F.warn("Layer rendering currently only supports ordering by 1 orderByInfo, but found ".concat(t.length,". All but the first will be discarded"));var i=t[0],a="ascending"===i.order?"asc":"desc";return i.field?{field:i.field,order:a}:i.valueExpression?{fieldIndex:A(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:a}:(F.error(new l.Z(I,"Expected to find a field or valueExpression for OrderByInfo",i)),null)}if((0,u.pC)(r)&&"unique-value"===r.type&&r.orderByClassesEnabled)return{byRenderer:!0,order:"asc"};return null}(c,e.orderBy,e.renderer,p),X=e.labelsVisible&&e.labelingInfo||[],G=(0,d.a)(X,K),q=0,$=[].concat((0,n.Z)(G.map((function(e){return _(c,e,"feature",q++,j,o)}))),(0,n.Z)(C.labels.map((function(e){return _(c,e,"aggregate",q++,j,o)}))));return{type:"symbol",target:f,attributes:c,aggregateFields:C.fields,storage:W,mesh:{matcher:J,labels:{type:"simple",classes:$},aggregateMatcher:C.matcher,sortKey:H}}}(e,i++,t)),r}(e,t),f=function(e){var t;return"heatmap"===(null===(t=e.renderer)||void 0===t?void 0:t.type)&&"raster"===(0,T.rk)()?{type:"heatmap"}:{type:"symbol"}}(e),m={};o.map((function(t){return function(e,t,r){switch(r.target){case"feature":return void M(e,D(t),r);case"aggregate":if(!("featureReduction"in t))return;var n=t.featureReduction;switch(null===n||void 0===n?void 0:n.type){case"selection":throw new l.Z(I,"Mapview does not support `selection` reduction type",n);case"binning":return M(e,D(t),r),void function(e,t,r,n){var a;e.aggregate||(e.aggregate={name:"aggregate",type:"bin",filters:null,input:"feature",params:{fixedBinLevel:t.fixedBinLevel,fields:(null!==(a=t.fields)&&void 0!==a?a:[]).map((function(e){return(0,i.Z)((0,i.Z)({},e.toJSON()),{},{type:C(e,r)})}))},attributes:{}}),N(e.aggregate,n.attributes.fields)}(e,n,t.fields.map((function(e){return e.toJSON()})),r);case"cluster":return M(e,D(t),r),void function(e,t,r,n){var a,l;e.aggregate||(e.aggregate={name:"aggregate",type:"cluster",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,c.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,c.F2)(t.clusterMaxSize)/64),fields:null===(a=null!==(l=t.fields)&&void 0!==l?l:[])||void 0===a?void 0:a.map((function(e){return(0,i.Z)((0,i.Z)({},e.toJSON()),{},{type:C(e,r)})}))}}),N(e.aggregate,n.attributes.fields)}(e,n,t.fields.map((function(e){return e.toJSON()})),r)}}}(m,e,t)}));var v=(0,u.pC)(e.subtypeCode)?"".concat(e.subtypeField," = ").concat(e.subtypeCode):null;return{source:{definitionExpression:(0,u.Wg)((0,p._)(e.definitionExpression,v)),fields:e.fields.map((function(e){return e.toJSON()})),gdbVersion:e.gdbVersion,historicMoment:null===(r=e.historicMoment)||void 0===r?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null===(s=e.timeExtent)||void 0===s?void 0:s.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:o,tileRenderer:f,targets:m}}catch(b){if(b.fieldName===I)return F.error(b),null;throw b}}function N(e,t){for(var r in t){var n=t[r];if(n.target===e.name){var i=e.attributes[r];if(null!==i&&void 0!==i&&i.context){var a,l,s=i.context;s.mesh=s.mesh||(null===(a=n.context)||void 0===a?void 0:a.mesh),s.storage=s.storage||(null===(l=n.context)||void 0===l?void 0:l.storage)}else e.attributes[r]=n}}return e}function D(e){var t,r,n,i,a;return[null!==(t=null===(r=(0,u.Wg)(e.filter))||void 0===r?void 0:r.toJSON())&&void 0!==t?t:null,null!==(n=null===(i=(0,u.Wg)(null===(a=(0,u.Wg)(e.featureEffect))||void 0===a?void 0:a.filter))||void 0===i?void 0:i.toJSON())&&void 0!==n?n:null]}function M(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),N(e.feature,r.attributes.fields),e}function C(e,t){var r=e.onStatisticExpression,n=e.onStatisticField;switch(e.statisticType){case"min":case"max":case"avg":case"avg_angle":case"sum":case"count":return"esriFieldTypeDouble";case"mode":if(r){var i=r.returnType;return i?"string"===i?"esriFieldTypeString":"esriFieldTypeDouble":(F.error(new l.Z(I,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}var a=t.find((function(e){return e.name===n}));return a?a.type:(F.error(new l.Z(I,"Unable to infer type of aggregateField with onStatisticExpression. ReturnType is not defined",e)),"esriFieldTypeString")}}function R(e,t){return t.field?A(e,(0,i.Z)((0,i.Z)({},t),{},{type:"field",field:t.field})):t.valueExpression?A(e,(0,i.Z)((0,i.Z)({},t),{},{type:"expression",valueExpression:t.valueExpression})):{field:void 0,fieldIndex:void 0}}function A(e,t){switch(t.type){case"expression":var r=t.valueExpression;if(!e.fields[r]){var n=e.indexCount++;e.fields[r]=(0,i.Z)((0,i.Z)({},t),{},{name:r,fieldIndex:n})}return{fieldIndex:e.fields[r].fieldIndex};case"label-expression":var a=JSON.stringify(t.label);if(!e.fields[a]){var l=e.indexCount++;e.fields[a]=(0,i.Z)((0,i.Z)({},t),{},{name:a,fieldIndex:l})}return{fieldIndex:e.fields[a].fieldIndex};case"field":var s=t.field;return"aggregate"===t.target&&e.fields[s]||(e.fields[s]=(0,i.Z)((0,i.Z)({},t),{},{name:s})),{field:s};case"statistic":return e.fields[t.name]=(0,i.Z)({},t),{field:t.name}}}function _(e,t,r,n,a){var l=arguments.length>5&&void 0!==arguments[5]&&arguments[5],s=A(e,{type:"label-expression",target:r,context:{mesh:!0},resultType:"string",label:{labelExpression:t.labelExpression,labelExpressionInfo:t.labelExpressionInfo?{expression:t.labelExpressionInfo.expression}:null,symbol:!!t.symbol,where:t.where}}).fieldIndex;return(0,i.Z)((0,i.Z)({},(0,h.createSymbolSchema)(t,a,l)),{},{fieldIndex:s,target:r,index:n})}function P(e,t,r){var n;switch(r.type){case"simple":case"class-breaks":case"unique-value":case"dictionary":n={visualVariables:!0,attributes:null};break;default:n=(0,v.EJ)(r).getStorageSpec(r)}return function(e,t,r,n){if((0,u.Wi)(r))return null;var i=r.visualVariables,a=r.attributes,l=null;i&&"visualVariables"in n&&(l=function(e,t,r){if(!r||!r.length)return[];var n={storage:!0},i="numeric";return(0,T.tv)(r).map((function(r){var a,l=(0,m.nU)(r.type),s=R(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:n,resultType:i}),o=s.field,u=s.fieldIndex;switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:l,field:o,fieldIndex:u,normalizationField:R(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field,valueRepresentation:null!==(a=r.valueRepresentation)&&void 0!==a?a:null};case"color":return{type:"color",binding:l,field:o,fieldIndex:u,normalizationField:R(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field};case"opacity":return{type:"opacity",binding:l,field:o,fieldIndex:u,normalizationField:R(e,{target:t,field:r.normalizationField,context:n,resultType:i}).field};case"rotation":return{type:"rotation",binding:l,field:o,fieldIndex:u}}})).filter(u.pC)}(e,t,n.visualVariables));var s=(0,u.pC)(l)?4:0,o=null;return(0,u.pC)(a)&&(o=a.map((function(r,n){var i=R(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t}),a=i.field,l=i.fieldIndex;return{binding:n+s,field:a,fieldIndex:l}}))),{type:"simple",target:t,attributeMapping:o,vvMapping:l}}(e,t,n,r)}function B(e,t,r,n){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=(0,u.Pt)(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.getSymbols(),a=i.length?i[0]:null;return{type:"simple",symbol:(0,h.createSymbolSchema)(a,r,n),symbologyType:r.symbologyType}}(o,r,n,s);case"class-breaks":return function(e,t,r,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,s=R(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:a}),o=s.field,u=s.fieldIndex,c=r.normalizationType,p="log"===c?"esriNormalizeByLog":"percent-of-total"===c?"esriNormalizeByPercentOfTotal":"field"===c?"esriNormalizeByField":null,f=r.classBreakInfos.map((function(e){return{symbol:(0,h.createSymbolSchema)(e.symbol,n,i),min:e.minValue,max:e.maxValue}})).sort((function(e,t){return e.min-t.min}));return{type:"interval",attributes:e.fields,field:o,fieldIndex:u,backgroundFillSymbol:(0,h.createSymbolSchema)(l,n,i),defaultSymbol:(0,h.createSymbolSchema)(r.defaultSymbol,n,i),intervals:f,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:p,isMaxInclusive:r.isMaxInclusive,symbologyType:n.symbologyType}}(o,t,r,n,s);case"unique-value":return function(e,t,r,n){var s,o,u=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=[],p=r.backgroundFillSymbol,f={target:t,context:{mesh:!0},resultType:"string"};if(r.field&&"string"!=typeof r.field)throw new l.Z(I,"Expected renderer.field to be a string",r);var d,y=R(e,(0,i.Z)((0,i.Z)({},f),{},{field:r.field,valueExpression:r.valueExpression})),m=y.field,v=y.fieldIndex,b=(0,a.Z)(null!==(o=r.uniqueValueInfos)&&void 0!==o?o:[]);try{for(b.s();!(d=b.n()).done;){var g=d.value;c.push({value:""+g.value,symbol:(0,h.createSymbolSchema)(g.symbol,n,u)})}}catch(x){b.e(x)}finally{b.f()}return{type:"map",attributes:e.fields,field:m,fieldIndex:v,field2:R(e,(0,i.Z)((0,i.Z)({},f),{},{field:r.field2})).field,field3:R(e,(0,i.Z)((0,i.Z)({},f),{},{field:r.field3})).field,fieldDelimiter:null!==(s=r.fieldDelimiter)&&void 0!==s?s:void 0,backgroundFillSymbol:(0,h.createSymbolSchema)(p,n),defaultSymbol:(0,h.createSymbolSchema)(r.defaultSymbol,n),map:c,symbologyType:n.symbologyType}}(o,t,r,n,s);case"dictionary":return function(e,t,r){return{type:"dictionary",config:t.config,fieldMap:t.fieldMap,scaleExpression:t.scaleExpression,url:t.url,symbolOptions:r,symbologyType:r.symbologyType}}(o,r,n,s);case"heatmap":return function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.getSymbols(),a=i.length?i[0]:null;return{type:"heatmap",symbol:(0,h.createSymbolSchema)(a,r,n),symbologyType:r.symbologyType}}(o,r,n,s);case"pie-chart":return function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.getSymbols(),a=i[0],l=i.length>1?i[1]:null;return{type:"pie-chart",markerSymbol:(0,h.createSymbolSchema)(a,r,n),fillSymbol:(0,h.createSymbolSchema)(l,r,n),symbologyType:r.symbologyType}}(o,r,n,s)}}},65760:function(e,t,r){r.d(t,{rk:function(){return Z},TT:function(){return w},aR:function(){return b},tv:function(){return g}});var n=r(93433),i=r(83878),a=r(59199),l=r(40181),s=r(25267);function o(e){return(0,i.Z)(e)||(0,a.Z)(e)||(0,l.Z)(e)||(0,s.Z)()}var u=r(10064),c=r(93169),p=r(32718),f=r(17842),d=r(90316),y=8,m=y-2,v=p.Z.getLogger("esri.views.2d.layers.features.support.rendererUtils"),b=function(e){if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;var t=e.clone(),r=t.visualVariables.map((function(e){return h(e)?x(e):e}));return t.visualVariables=r,t};function g(e){return e.map((function(e){return h(e)?x(e.clone()):e}))}function h(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function x(e){var t;return e.stops=function(e,t){return t.length<=y?t:(v.warn("Found ".concat(t.length," Visual Variable stops, but MapView only supports ").concat(y,". Displayed stops will be simplified.")),t.length>2*y?function(e,t){for(var r=o(t),n=r[0],i=r.slice(1),a=i.pop(),l=i[0].value,s=i[i.length-1].value,u=(s-l)/m,c=[],p=l;p<s;p+=u){for(var d=0;p>=i[d].value;)d++;var y=i[d],v=t[d-1],b=p-v.value,g=y.value===v.value?1:b/(y.value-v.value);if("color"===e){var h=i[d],x=t[d-1],Z=h.color.clone();Z.r=S(x.color.r,Z.r,g),Z.g=S(x.color.g,Z.g,g),Z.b=S(x.color.b,Z.b,g),Z.a=S(x.color.a,Z.a,g),c.push({value:p,color:Z,label:h.label})}else if("size"===e){var w=i[d],T=t[d-1],E=(0,f.t_)(w.size),V=S((0,f.t_)(T.size),E,g);c.push({value:p,size:V,label:w.label})}else{var F=i[d],I=S(t[d-1].opacity,F.opacity,g);c.push({value:p,opacity:I,label:F.label})}}return[n].concat(c,[a])}(e,t):function(e){for(var t=o(e),r=t[0],i=t.slice(1),a=i.pop();i.length>m;){for(var l=0,s=0,u=1;u<i.length;u++){var c=i[u-1],p=i[u],f=Math.abs(p.value-c.value);f>s&&(s=f,l=u)}i.splice(l,1)}return[r].concat((0,n.Z)(i),[a])}(t))}(e.type,null!==(t=e.stops)&&void 0!==t?t:[]),e}function S(e,t,r){return(1-r)*e+r*t}function Z(){if((0,c.Z)("heatmap-force-raster"))return"raster";var e=(0,d.hc)("2d"),t=e.supportsTextureFloat,r=e.supportsTextureHalfFloat,n=e.supportsColorBufferFloat,i=e.supportsColorBufferFloatBlend,a=e.supportsColorBufferHalfFloat;return t&&n&&i||r&&a?"symbol":(0,c.Z)("heatmap-allow-raster-fallback")?"raster":"none"}function w(e){if(!e)return!0;switch(e.type){case"dot-density":if(!(0,d.hc)("2d").supportsTextureFloat)return v.error(new u.Z("webgl-missing-extension","Missing WebGL extension OES_Texture_Float which is required for DotDensity")),!1;break;case"heatmap":var t=Z();if("none"===t||"raster"===t&&!(0,c.Z)("heatmap-force-raster")){var r=(0,d.hc)("2d"),n=["supportsTextureFloat","supportsTextureHalfFloat","supportsColorBufferFloat","supportsColorBufferFloatBlend","supportsColorBufferHalfFloat"].filter((function(e){return!r[e]})).join(", ");if("none"===t)return v.errorOnce(new u.Z("webgl-missing-extension","Missing WebGL".concat(r.type," requirements for Heatmap: ").concat(n))),!1;"raster"===t&&v.warnOnce("Missing WebGL".concat(r.type," requirements for accelerated Heatmap: ").concat(n,". Feature support may be limited."))}}return!0}},95857:function(e,t,r){r.d(t,{I_:function(){return o},XA:function(){return y},Zu:function(){return c},ab:function(){return p},eT:function(){return d},y1:function(){return u},yA:function(){return f}});var n=r(29439),i=(r(75746),r(92026)),a=r(80885),l=r(65156),s=r(92975),o=(r(38999),r(94109),r(47975),512),u=50;function c(e,t){var r=(0,s.C5)(t);if(!r)return null;var i=(0,n.Z)(r.valid,2),a=i[0],o=i[1];return e[2]>o?[(0,l.Ue)([e[0],e[1],o,e[3]]),(0,l.Ue)([a,e[1],a+e[2]-o,e[3]])]:e[0]<a?[(0,l.Ue)([a,e[1],e[2],e[3]]),(0,l.Ue)([o-(a-e[0]),e[1],o,e[3]])]:null}function p(e){return"text"===e||"esriTS"===e}function f(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function d(e){switch((0,i.Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function y(e){if(!e)return null;var t=e.xmin,r=e.ymin,n=e.xmax,i=e.ymax,l=e.spatialReference;return new a.Z({rings:[[[t,r],[t,i],[n,i],[n,r],[t,r]]],spatialReference:l})}},98125:function(e,t,r){r.d(t,{x:function(){return k},B:function(){return I}});var n=r(74165),i=r(15861),a=r(98991),l=r(37762),s=r(15671),o=r(43144),u=r(80613),c=r(54815),p={marker:u.LW.MARKER,fill:u.LW.FILL,line:u.LW.LINE,text:u.LW.TEXT},f=function(){function e(t,r,n,i){(0,s.Z)(this,e);var a={minScale:null===r||void 0===r?void 0:r.minScale,maxScale:null===r||void 0===r?void 0:r.maxScale},o=function(e){return e.minScale||e.maxScale?e.minScale+"-"+e.maxScale:""}(a);this.layers=t,this.data=r,this.hash=this._createHash()+o,this.rendererKey=n;var f,d={isOutline:!1,placement:null,symbologyType:u.mD.DEFAULT,vvFlags:n},y=(0,l.Z)(t);try{for(y.s();!(f=y.n()).done;){var m=f.value,v=p[m.type];d.isOutline="line"===m.type&&m.isOutline,m.materialKey=(0,c.jj)(v,d),m.maxVVSize=i,m.scaleInfo=a,m.templateHash+=o}}catch(b){y.e(b)}finally{y.f()}}return(0,o.Z)(e,[{key:"type",get:function(){return"expanded-cim"}},{key:"_createHash",value:function(){var e,t="",r=(0,l.Z)(this.layers);try{for(r.s();!(e=r.n()).done;){t+=e.value.templateHash}}catch(n){r.e(n)}finally{r.f()}return t}}]),e}();var d=r(71277),y=r(10064),m=r(92026),v=r(66978),b=r(35995),g=r(70032),h=r(53283),x=r(38048);function S(e,t,r){return Z.apply(this,arguments)}function Z(){return Z=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.name){e.next=2;break}throw new y.Z("style-symbol-reference-name-missing","Missing name in style symbol reference");case 2:if(!t.styleName||"Esri2DPointSymbolsStyle"!==t.styleName){e.next=4;break}return e.abrupt("return",w(t,i));case 4:return e.prev=4,e.t0=E,e.next=8,(0,x.n2)(t,r,i);case 8:return e.t1=e.sent,e.t2=t.name,e.t3=r,e.t4=i,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3,e.t4));case 15:return e.prev=15,e.t5=e.catch(4),e.abrupt("return",((0,v.k_)(e.t5),null));case 18:case"end":return e.stop()}}),e,null,[[4,15]])}))),Z.apply(this,arguments)}function w(e,t){return T.apply(this,arguments)}function T(){return T=(0,i.Z)((0,n.Z)().mark((function e(t,r){var i,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=x.wm.replace(/\{SymbolName\}/gi,t.name),e.prev=1,e.next=4,(0,x.EJ)(i,r);case 4:return a=e.sent,e.abrupt("return",(0,x.KV)(a.data));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",((0,v.k_)(e.t0),null));case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),T.apply(this,arguments)}function E(e,t,r,n){return V.apply(this,arguments)}function V(){return V=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){var l,s,o,u,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=t.data,s={portal:i&&(0,m.pC)(i.portal)?i.portal:g.Z.getDefault(),url:(0,b.mN)(t.baseUrl),origin:"portal-item"},o=l.items.find((function(e){return e.name===r}))){e.next=3;break}throw new y.Z("symbolstyleutils:symbol-name-not-found","The symbol name '".concat(r,"' could not be found"),{symbolName:r});case 3:return u=(0,h.f)((0,x.v9)(o,"cimRef"),s),(0,d.XO)()&&(u=(0,d.pJ)(u)),e.prev=5,e.next=8,(0,x.EJ)(u,a);case 8:return c=e.sent,e.abrupt("return",(0,x.KV)(c.data));case 12:return e.prev=12,e.t0=e.catch(5),e.abrupt("return",((0,v.k_)(e.t0),null));case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),V.apply(this,arguments)}var F=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,r,i){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,(0,a.c)(t.data,r,i);case 3:return e.t1=e.sent,e.t2=t.data,e.t3=t.rendererKey,e.t4=t.maxVVSize,e.abrupt("return",new e.t0(e.t1,e.t2,e.t3,e.t4));case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();function I(e,t,r,n){return z.apply(this,arguments)}function z(){return z=(0,i.Z)((0,n.Z)().mark((function e(t,r,i,a){var l,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if("cim"!==t.type){e.next=4;break}return e.abrupt("return",F(t,r,i));case 4:if("web-style"!==t.type){e.next=21;break}return e.next=7,S(t,null,a);case 7:if(e.t1=l=e.sent,e.t0=null!==e.t1,!e.t0){e.next=11;break}e.t0=void 0!==l;case 11:if(!e.t0){e.next=15;break}e.t2=l,e.next=16;break;case 15:e.t2=void 0;case 16:return e.t3=e.t2,e.t4=t.rendererKey,e.t5=t.maxVVSize,s={type:"cim",data:e.t3,rendererKey:e.t4,maxVVSize:e.t5},e.abrupt("return",F(s,r,i));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)}))),z.apply(this,arguments)}function k(e){if(!e)return null;var t=e.avoidSDFRasterization,r=e.type,n=e.cim,i=e.url,a={cim:n,type:r,mosaicHash:e.materialHash,url:i,size:null,dashTemplate:null,path:null,text:null,fontName:null,animatedSymbolProperties:null,avoidSDFRasterization:t};switch(r){case"marker":a.size=e.size,a.path=e.path,a.animatedSymbolProperties=e.animatedSymbolProperties;break;case"line":a.dashTemplate=e.dashTemplate;break;case"text":a.text=e.text,a.fontName=e.fontName}return a}},31666:function(e,t,r){r.d(t,{JV:function(){return a},oq:function(){return i}});var n=new(r(43404).X)({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function i(e){return n.toJSON(e)}function a(e){var t=e.raster.rasterInfo,r=t.bandCount,n=t.attributeTable,i=t.colormap,a=t.pixelType;return 1===r&&(null!=n||null!=i||"u8"===a||"s8"===a)}}}]);
//# sourceMappingURL=9534.594590e6.chunk.js.map