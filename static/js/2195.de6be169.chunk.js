"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[2195],{95986:function(e,t,i){i.d(t,{y:function(){return U}});var n=i(15671),r=i(43144),o=i(11752),a=i(61120),s=i(60136),l=i(29388),u=i(27366),p=i(40281),c=i(60354),d=i(10064),h=i(94172),y=i(49861),v=(i(25243),i(63780),i(69912)),f=i(33624),g=i(64634),b=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){return(0,n.Z)(this,i),t.apply(this,arguments)}return(0,r.Z)(i,[{key:"version",get:function(){return this.commitVersionProperties(),(this._get("version")||0)+1}}]),i}(i(46784).wq);(0,u._)([(0,y.Cb)({readOnly:!0})],b.prototype,"version",null);var m,w=b=(0,u._)([(0,v.j)("esri.views.layers.support.ClipArea")],b),_=m=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).type="rect",r.left=null,r.right=null,r.top=null,r.bottom=null,r}return(0,r.Z)(i,[{key:"clone",value:function(){return new m({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}},{key:"commitVersionProperties",value:function(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}}]),i}(w);(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"left",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"right",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"top",void 0),(0,u._)([(0,y.Cb)({type:[Number,String],json:{write:!0}})],_.prototype,"bottom",void 0);var C,R=_=m=(0,u._)([(0,v.j)("esri.views.layers.support.ClipRect")],_),Z=(i(59486),i(32238)),k=i(77981),S=i(53866),P=i(80885),q={base:Z.Z,key:"type",typeMap:{extent:S.Z,polygon:P.Z}},O=C=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).type="geometry",r.geometry=null,r}return(0,r.Z)(i,[{key:"clone",value:function(){var e,t;return new C({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}},{key:"commitVersionProperties",value:function(){this.commitProperty("geometry")}}]),i}(w);(0,u._)([(0,y.Cb)({types:q,json:{read:k.im,write:!0}})],O.prototype,"geometry",void 0);var j=O=C=(0,u._)([(0,v.j)("esri.views.layers.support.Geometry")],O),A=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).type="path",r.path=[],r}return(0,r.Z)(i,[{key:"commitVersionProperties",value:function(){this.commitProperty("path")}}]),i}(w);(0,u._)([(0,y.Cb)({type:[[[Number]]],json:{write:!0}})],A.prototype,"path",void 0);var I=A=(0,u._)([(0,v.j)("esri.views.layers.support.Path")],A),V=p.Z.ofType({key:"type",base:null,typeMap:{rect:R,path:I,geometry:j}}),U=function(e){var t=function(e){(0,s.Z)(i,e);var t=(0,l.Z)(i);function i(){var e;return(0,n.Z)(this,i),(e=t.apply(this,arguments)).attached=!1,e.clips=new V,e.lastUpdateId=-1,e.moving=!1,e.updateRequested=!1,e.visibleAtCurrentScale=!1,e.highlightOptions=null,e}return(0,r.Z)(i,[{key:"initialize",value:function(){var e,t,i,n,r=this,o=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&o&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new d.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new f.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,h.YP)((function(){return r.suspended}),(function(e){r.container&&(r.container.visible=!e),r.view&&!e&&r.updateRequested&&r.view.requestUpdate()}),h.tX),(0,h.YP)((function(){var e,t;return null!==(e=null===(t=r.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(function(e){r.container&&(r.container.opacity=e)}),h.tX),(0,h.YP)((function(){return r.layer&&"blendMode"in r.layer?r.layer.blendMode:"normal"}),(function(e){r.container&&(r.container.blendMode=e)}),h.tX),(0,h.YP)((function(){return r.layer&&"effect"in r.layer?r.layer.effect:null}),(function(e){r.container&&(r.container.effect=e)}),h.tX),(0,h.YP)((function(){return r.highlightOptions}),(function(e){return r.container.highlightOptions=e}),h.tX),(0,h.on)((function(){return r.clips}),"change",(function(){r.container&&(r.container.clips=r.clips)}),h.tX),(0,h.YP)((function(){var e;return{scale:null===(e=r.view)||void 0===e?void 0:e.scale,scaleRange:r.layer&&"effectiveScaleRange"in r.layer?r.layer.effectiveScaleRange:null}}),(function(e){var t=e.scale,i=null!=t&&r.isVisibleAtScale(t);i!==r.visibleAtCurrentScale&&r._set("visibleAtCurrentScale",i)}),h.tX)],"constructor"),null!==(n=this.view)&&void 0!==n&&n.whenLayerView?this.view.whenLayerView(this.layer).then((function(e){e===r&&r.processAttach()}),(function(){})):this.when().then((function(){r.processAttach()}),(function(){})))}},{key:"destroy",value:function(){this.processDetach(),this.updateRequested=!1}},{key:"spatialReferenceSupported",get:function(){var e,t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}},{key:"updating",get:function(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this.updatingHandles)||void 0===e||!e.updating))}},{key:"processAttach",value:function(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}},{key:"processDetach",value:function(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}},{key:"isVisibleAtScale",value:function(e){var t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;var i=t.minScale,n=t.maxScale;return(0===i||e<=i)&&(0===n||e>=n)}},{key:"requestUpdate",value:function(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}},{key:"processUpdate",value:function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}},{key:"hitTest",value:function(e,t){return Promise.resolve(null)}},{key:"supportsSpatialReference",value:function(e){return!0}},{key:"canResume",value:function(){return!!this.spatialReferenceSupported&&!!(0,o.Z)((0,a.Z)(i.prototype),"canResume",this).call(this)&&this.visibleAtCurrentScale}},{key:"getSuspendInfo",value:function(){var e=(0,o.Z)((0,a.Z)(i.prototype),"getSuspendInfo",this).call(this),t=!this.spatialReferenceSupported,n=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),n&&(e.outsideScaleRange=n),e}},{key:"addAttachHandles",value:function(e){this.addHandles(e,"attach")}}]),i}(e);return(0,u._)([(0,y.Cb)()],t.prototype,"attached",void 0),(0,u._)([(0,y.Cb)({type:V,set:function(e){var t=(0,c.Z)(e,this._get("clips"),V);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"container",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"moving",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,u._)([(0,y.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"updateRequested",void 0),(0,u._)([(0,y.Cb)()],t.prototype,"updating",null),(0,u._)([(0,y.Cb)()],t.prototype,"view",void 0),(0,u._)([(0,y.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,u._)([(0,y.Cb)({type:g.Z})],t.prototype,"highlightOptions",void 0),t=(0,u._)([(0,v.j)("esri.views.2d.layers.LayerView2D")],t)}},67581:function(e,t,i){i.d(t,{Z:function(){return b}});var n=i(15671),r=i(43144),o=i(60136),a=i(29388),s=i(27366),l=i(85015),u=i(91505),p=i(41691),c=i(79056),d=i(32718),h=i(92026),y=i(67426),v=i(49861),f=(i(25243),i(63780),i(69912)),g=function(e){(0,o.Z)(i,e);var t=(0,a.Z)(i);function i(e){var r;return(0,n.Z)(this,i),(r=t.call(this,e)).layer=null,r.parent=null,r}return(0,r.Z)(i,[{key:"initialize",value:function(){var e=this;this.when().catch((function(t){if("layerview:create-error"!==t.name){var i=e.layer&&e.layer.id||"no id",n=e.layer&&e.layer.title||"no title";d.Z.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),t)}}))}},{key:"fullOpacity",get:function(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}},{key:"suspended",get:function(){return!this.canResume()}},{key:"suspendInfo",get:function(){return this.getSuspendInfo()}},{key:"legendEnabled",get:function(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}},{key:"updating",get:function(){var e;return!((null===(e=this.updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}},{key:"updatingProgress",get:function(){return this.updating?0:1}},{key:"visible",get:function(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)},set:function(e){this._overrideIfSome("visible",e)}},{key:"canResume",value:function(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}},{key:"getSuspendInfo",value:function(){var e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}},{key:"isUpdating",value:function(){return!1}}]),i}((0,p.p)((0,c.IG)((0,y.v)(u.Z.EventedMixin(l.Z)))));(0,s._)([(0,v.Cb)()],g.prototype,"fullOpacity",null),(0,s._)([(0,v.Cb)()],g.prototype,"layer",void 0),(0,s._)([(0,v.Cb)()],g.prototype,"parent",void 0),(0,s._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspended",null),(0,s._)([(0,v.Cb)({readOnly:!0})],g.prototype,"suspendInfo",null),(0,s._)([(0,v.Cb)({readOnly:!0})],g.prototype,"legendEnabled",null),(0,s._)([(0,v.Cb)({type:Boolean,readOnly:!0})],g.prototype,"updating",null),(0,s._)([(0,v.Cb)({readOnly:!0})],g.prototype,"updatingProgress",null),(0,s._)([(0,v.Cb)()],g.prototype,"visible",null),(0,s._)([(0,v.Cb)()],g.prototype,"view",void 0);var b=g=(0,s._)([(0,f.j)("esri.views.layers.LayerView")],g)}}]);
//# sourceMappingURL=2195.de6be169.chunk.js.map