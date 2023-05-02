"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[2668],{2668:function(e,t,r){r.r(t),r.d(t,{default:function(){return de}});var n,i=r(74165),o=r(29439),a=r(15861),s=r(1413),l=r(15671),p=r(43144),d=r(11752),u=r(61120),c=r(60136),y=r(29388),f=r(27366),m=(r(59486),r(44055)),v=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999)),h=r(28189),b=r(9014),g=r(40464),w=r(76200),I=r(51508),_=r(10064),C=r(42537),S=r(32718),k=r(92026),x=r(97642),Z=r(66978),R=r(49861),j=r(25243),T=(r(63780),r(38511)),F=r(69912),P=r(47492),D=r(27823),N=r(30651),O=r(11936),E=r(6693),U=r(46671),A=r(7632),L=r(64390),M=r(6061),J=r(29598),q=r(71684),z=r(56811),G=r(99063),Q=r(45948),V=r(83040),Y=r(25610),W=r(80031),H=r(77748),B=r(85116),K=r(46784),X=n=function(e){(0,c.Z)(r,e);var t=(0,y.Z)(r);function r(){var e;return(0,l.Z)(this,r),(e=t.apply(this,arguments)).age=null,e.ageReceived=null,e.displayCount=null,e.maxObservations=1,e}return(0,p.Z)(r,[{key:"clone",value:function(){return new n({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}}]),r}(K.wq);(0,f._)([(0,R.Cb)({type:Number,json:{write:!0}})],X.prototype,"age",void 0),(0,f._)([(0,R.Cb)({type:Number,json:{write:!0}})],X.prototype,"ageReceived",void 0),(0,f._)([(0,R.Cb)({type:Number,json:{write:!0}})],X.prototype,"displayCount",void 0),(0,f._)([(0,R.Cb)({type:Number,json:{write:!0}})],X.prototype,"maxObservations",void 0);var $=X=n=(0,f._)([(0,F.j)("esri.layers.support.PurgeOptions")],X),ee=r(21371),te=r(21149),re=r(81085),ne=r(64575),ie=r(78952),oe=r(53866),ae=(0,Y.v)();function se(e,t){return new _.Z("layer:unsupported","Layer (".concat(e.title,", ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t),{layer:e})}var le=function(e){(0,c.Z)(n,e);var t=(0,y.Z)(n);function n(){var e;(0,l.Z)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).copyright=null,e.definitionExpression=null,e.displayField=null,e.elevationInfo=null,e.fields=null,e.fieldsIndex=null,e.geometryDefinition=null,e.geometryType=null,e.labelsVisible=!0,e.labelingInfo=null,e.legendEnabled=!0,e.maxReconnectionAttempts=0,e.maxReconnectionInterval=20,e.maxScale=0,e.minScale=0,e.objectIdField=null,e.operationalLayerType="ArcGISStreamLayer",e.popupEnabled=!0,e.popupTemplate=null,e.purgeOptions=new $,e.screenSizePerspectiveEnabled=!0,e.sourceJSON=null,e.spatialReference=ie.Z.WGS84,e.type="stream",e.url=null,e.updateInterval=300,e.webSocketUrl=null,e}return(0,p.Z)(n,[{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?(0,s.Z)({url:e},t):e}},{key:"load",value:function(e){var t=this;if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new _.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);var r=(0,k.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(Z.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"renderer",set:function(e){(0,W.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"readRenderer",value:function(e,t,r){var n=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(n){var i=(0,b.a)(n,t,r)||void 0;return i||S.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),i}if(t.defaultSymbol)return t.types&&t.types.length?new h.Z({defaultSymbol:pe(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((function(e){return{id:e.id,symbol:pe(e.symbol,e,r)}}))}):new v.Z({symbol:pe(t.defaultSymbol,t,r)})}},{key:"connect",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var n,a,s,l,p,d,u,c,y,f,m,v,h,b,g,w,I,_,S;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([r.e(7463).then(r.bind(r,97463)),this.load()]);case 2:return n=e.sent,a=(0,o.Z)(n,1),s=a[0].createConnection,l=this.geometryType?D.M.toJSON(this.geometryType):null,p=t||this.createConnectionParameters(),d=p.customParameters,u=void 0===d?null:d,c=p.definitionExpression,y=void 0===c?null:c,f=p.geometryDefinition,m=void 0===f?null:f,v=p.maxReconnectionAttempts,h=void 0===v?0:v,b=p.maxReconnectionInterval,g=void 0===b?20:b,w=p.spatialReference,I=void 0===w?this.spatialReference:w,_=s(this.parsedUrl,this.spatialReference,I,l,{geometry:m,where:y},h,g,null!==u&&void 0!==u?u:void 0),S=(0,C.AL)([this.on("send-message-to-socket",(function(e){return _.sendMessageToSocket(e)})),this.on("send-message-to-client",(function(e){return _.sendMessageToClient(e)}))]),e.abrupt("return",(_.once("destroy",S.remove),_));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createConnectionParameters",value:function(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}},{key:"createPopupTemplate",value:function(e){return(0,re.eZ)(this,e)}},{key:"createQuery",value:function(){var e=new te.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}},{key:"getFieldDomain",value:function(e,t){if(!this.fields)return null;var r=null;return this.fields.some((function(t){return t.name===e&&(r=t.domain),!!r})),r}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"serviceSupportsSpatialReference",value:function(e){return!0}},{key:"sendMessageToSocket",value:function(e){this.emit("send-message-to-socket",e)}},{key:"sendMessageToClient",value:function(e){this.emit("send-message-to-client",e)}},{key:"write",value:function(e,t){var r=null===t||void 0===t?void 0:t.messages;return this.webSocketUrl?(null!==r&&void 0!==r&&r.push(se(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?(0,d.Z)((0,u.Z)(n.prototype),"write",this).call(this,e,t):(null!==r&&void 0!==r&&r.push(se(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}},{key:"_fetchService",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t){var r,n,o,a,l,p,d=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.webSocketUrl||!this.parsedUrl){e.next=9;break}if(this.sourceJSON){e.next=7;break}return e.next=4,(0,w.default)(this.parsedUrl.path,{query:(0,s.Z)((0,s.Z)({f:"json"},this.customParameters),this.parsedUrl.query),responseType:"json",signal:t});case 4:n=e.sent,o=n.data,this.sourceJSON=o;case 7:e.next=21;break;case 9:if(null!==(a=this.timeInfo)&&void 0!==a&&a.trackIdField){e.next=11;break}throw new _.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");case 11:if(this.objectIdField){e.next=16;break}if(p=null===(l=this.fields.find((function(e){return"oid"===e.type})))||void 0===l?void 0:l.name,p){e.next=15;break}throw new _.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");case 15:this.objectIdField=p;case 16:if(this.fields){e.next=18;break}throw new _.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");case 18:if(this.fields.some((function(e){return e.name===d.objectIdField}))||this.fields.push(new V.Z({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),this.geometryType){e.next=20;break}throw new _.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");case 20:this.webSocketUrl&&(this.url=this.webSocketUrl);case 21:return e.abrupt("return",(this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:null===(r=this.portalItem)||void 0===r?void 0:r.portal,url:this.parsedUrl}),(0,W.YN)(this.renderer,this.fieldsIndex),(0,W.UF)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),(0,ee.y)(this,{origin:"service"})));case 22:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),n}((0,L.M)((0,A.b)((0,E.h)((0,G.n)((0,z.M)((0,q.Q)((0,O.Y)((0,M.q)((0,J.I)((0,x.R)((0,U.N)(N.Z))))))))))));(0,f._)([(0,R.Cb)({type:String})],le.prototype,"copyright",void 0),(0,f._)([(0,R.Cb)({readOnly:!0})],le.prototype,"defaultPopupTemplate",null),(0,f._)([(0,R.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],le.prototype,"definitionExpression",void 0),(0,f._)([(0,R.Cb)({type:String})],le.prototype,"displayField",void 0),(0,f._)([(0,R.Cb)({type:ne.Z})],le.prototype,"elevationInfo",void 0),(0,f._)([(0,R.Cb)(ae.fields)],le.prototype,"fields",void 0),(0,f._)([(0,R.Cb)(ae.fieldsIndex)],le.prototype,"fieldsIndex",void 0),(0,f._)([(0,R.Cb)({type:oe.Z})],le.prototype,"geometryDefinition",void 0),(0,f._)([(0,R.Cb)({type:D.M.apiValues,json:{read:{reader:D.M.read}}})],le.prototype,"geometryType",void 0),(0,f._)([(0,R.Cb)(Q.iR)],le.prototype,"labelsVisible",void 0),(0,f._)([(0,R.Cb)({type:[H.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:B.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],le.prototype,"labelingInfo",void 0),(0,f._)([(0,R.Cb)(Q.rn)],le.prototype,"legendEnabled",void 0),(0,f._)([(0,R.Cb)({type:["show","hide"]})],le.prototype,"listMode",void 0),(0,f._)([(0,R.Cb)({type:j.z8})],le.prototype,"maxReconnectionAttempts",void 0),(0,f._)([(0,R.Cb)({type:j.z8})],le.prototype,"maxReconnectionInterval",void 0),(0,f._)([(0,R.Cb)(Q.u1)],le.prototype,"maxScale",void 0),(0,f._)([(0,R.Cb)(Q.rO)],le.prototype,"minScale",void 0),(0,f._)([(0,R.Cb)({type:String})],le.prototype,"objectIdField",void 0),(0,f._)([(0,R.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],le.prototype,"operationalLayerType",void 0),(0,f._)([(0,R.Cb)(Q.C_)],le.prototype,"popupEnabled",void 0),(0,f._)([(0,R.Cb)({type:m.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],le.prototype,"popupTemplate",void 0),(0,f._)([(0,R.Cb)({type:$})],le.prototype,"purgeOptions",void 0),(0,f._)([(0,R.Cb)({types:g.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:g.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],le.prototype,"renderer",null),(0,f._)([(0,T.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,T.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],le.prototype,"readRenderer",null),(0,f._)([(0,R.Cb)(Q.YI)],le.prototype,"screenSizePerspectiveEnabled",void 0),(0,f._)([(0,R.Cb)()],le.prototype,"sourceJSON",void 0),(0,f._)([(0,R.Cb)({type:ie.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],le.prototype,"spatialReference",void 0),(0,f._)([(0,R.Cb)({json:{read:!1}})],le.prototype,"type",void 0),(0,f._)([(0,R.Cb)(Q.HQ)],le.prototype,"url",void 0),(0,f._)([(0,R.Cb)({type:Number})],le.prototype,"updateInterval",void 0),(0,f._)([(0,R.Cb)({type:String})],le.prototype,"webSocketUrl",void 0),le=(0,f._)([(0,F.j)("esri.layers.StreamLayer")],le);var pe=(0,P.d)({types:I.QT}),de=le}}]);
//# sourceMappingURL=2668.547a850d.chunk.js.map