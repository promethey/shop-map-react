"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[8405],{58405:function(e,t,r){r.r(t),r.d(t,{default:function(){return P}});var i=r(37762),n=r(74165),a=r(15861),h=r(15671),u=r(43144),s=r(60136),o=r(29388),c=r(27366),l=r(40281),p=r(77178),d=r(92026),f=r(94172),g=r(49861),_=(r(25243),r(63780),r(69912)),v=r(40653),y=r(54889),w=r(16406),k=r(44745),m=r(21604),Z=r(99821),b=r(70491),C=r(95986),M=r(75391),I=r(34035),V=r(67581),G=Object.freeze({remove:function(){},pause:function(){},resume:function(){}}),H=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],F={graphic:null,property:null,oldValue:null,newValue:null};function x(e){return e instanceof v.Z||e instanceof y.Z||e instanceof w.Z||e instanceof k.Z||e instanceof m.Z||e instanceof Z.Z||e instanceof b.Z}var U=function(e){(0,s.Z)(r,e);var t=(0,o.Z)(r);function r(){var e;return(0,h.Z)(this,r),(e=t.apply(this,arguments))._graphics=new l.Z,e._highlightIds=new Map,e._networkFeatureMap=new Map,e._networkGraphicMap=new Map,e}return(0,u.Z)(r,[{key:"_routeItems",get:function(){var e=this;return new p.Z({getCollections:function(){return(0,d.pC)(e.layer)&&!e.destroyed?[(0,d.pC)(e.layer.routeInfo)?new l.Z([e.layer.routeInfo]):null,e.layer.directionLines,e.layer.directionPoints,e.layer.polygonBarriers,e.layer.polylineBarriers,e.layer.pointBarriers,e.layer.stops]:[]}})}},{key:"initialize",value:function(){var e=this;this.updatingHandles.addOnCollectionChange((function(){return e._routeItems}),(function(t){return e._routeItemsChanged(t)}),f.nn)}},{key:"destroy",value:function(){var e;this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),null===(e=this._get("_routeItems"))||void 0===e||e.destroy()}},{key:"attach",value:function(){this._createGraphicsView()}},{key:"detach",value:function(){this._destroyGraphicsView()}},{key:"fetchPopupFeatures",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._graphicsView.hitTest(t).filter((function(e){return!!e.popupTemplate})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"highlight",value:function(e){var t=this,r=(x(e)?[this._getNetworkFeatureUid(e)]:function(e){return Array.isArray(e)&&e.length>0&&x(e[0])}(e)?e.map((function(e){return t._getNetworkFeatureUid(e)})):function(e){return l.Z.isCollection(e)&&e.length&&x(e.getItemAt(0))}(e)?e.map((function(e){return t._getNetworkFeatureUid(e)})).toArray():[e.uid]).filter(d.pC);return r.length?(this._addHighlight(r),{remove:function(){return t._removeHighlight(r)}}):G}},{key:"hitTest",value:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t,r){var i,a,h=this;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.suspended){e.next=2;break}return e.abrupt("return",null);case 2:if((i=this._graphicsView.hitTest(t).filter(d.pC).map((function(e){return h._networkGraphicMap.get(e)}))).length){e.next=5;break}return e.abrupt("return",null);case 5:return a=this.layer,e.abrupt("return",i.reverse().map((function(e){return{type:"route",layer:a,mapPoint:t,networkFeature:e}})));case 7:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"isUpdating",value:function(){return this._graphicsView.updating}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"update",value:function(e){this._graphicsView.processUpdate(e)}},{key:"viewChange",value:function(){this._graphicsView.viewChange()}},{key:"_addHighlight",value:function(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n);this._highlightIds.set(n,a+1)}else this._highlightIds.set(n,1)}}catch(h){r.e(h)}finally{r.f()}this._updateHighlight()}},{key:"_createGraphic",value:function(e){var t=e.toGraphic();return t.layer=this.layer,t.sourceLayer=this.layer,t}},{key:"_createGraphicsView",value:function(){var e=this,t=this.view,r=new M.Z(t.featuresTilingScheme);this._graphicsView=new I.Z({container:r,graphics:this._graphics,requestUpdateCallback:function(){return e.requestUpdate()},view:t}),this.container.addChild(r),this._updateHighlight()}},{key:"_destroyGraphicsView",value:function(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}},{key:"_getDrawOrder",value:function(e){var t=this._networkGraphicMap.get(e);return H.indexOf(t.type)}},{key:"_getNetworkFeatureUid",value:function(e){return this._networkFeatureMap.has(e)?this._networkFeatureMap.get(e).uid:null}},{key:"_removeHighlight",value:function(e){var t,r=(0,i.Z)(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(this._highlightIds.has(n)){var a=this._highlightIds.get(n)-1;0===a?this._highlightIds.delete(n):this._highlightIds.set(n,a)}}}catch(h){r.e(h)}finally{r.f()}this._updateHighlight()}},{key:"_routeItemsChanged",value:function(e){var t=this;if(e.removed.length){this._graphics.removeMany(e.removed.map((function(e){var r=t._networkFeatureMap.get(e);return t._networkFeatureMap.delete(e),t._networkGraphicMap.delete(r),r})));var r,n=(0,i.Z)(e.removed);try{for(n.s();!(r=n.n()).done;){var a=r.value;this.removeHandles(a)}}catch(o){n.e(o)}finally{n.f()}}if(e.added.length){this._graphics.addMany(e.added.map((function(e){var r=t._createGraphic(e);return(0,d.Wi)(r.symbol)?null:(t._networkFeatureMap.set(e,r),t._networkGraphicMap.set(r,e),r)})).filter(d.pC));var h,u=(0,i.Z)(e.added);try{var s=function(){var e=h.value;t.addHandles([(0,f.YP)((function(){return e.geometry}),(function(r,i){t._updateGraphic(e,"geometry",r,i)})),(0,f.YP)((function(){return e.symbol}),(function(r,i){t._updateGraphic(e,"symbol",r,i)}))],e)};for(u.s();!(h=u.n()).done;)s()}catch(o){u.e(o)}finally{u.f()}this._graphics.sort((function(e,r){return t._getDrawOrder(e)-t._getDrawOrder(r)}))}}},{key:"_updateGraphic",value:function(e,t,r,i){if(!this._networkFeatureMap.has(e)){var n=this._createGraphic(e);return this._networkFeatureMap.set(e,n),this._networkGraphicMap.set(n,e),void this._graphics.add(n)}var a=this._networkFeatureMap.get(e);a[t]=r,F.graphic=a,F.property=t,F.oldValue=i,F.newValue=r,this._graphicsView.graphicUpdateHandler(F)}},{key:"_updateHighlight",value:function(){var e=Array.from(this._highlightIds.keys());this._graphicsView.setHighlight(e)}}]),r}((0,C.y)(V.Z));(0,c._)([(0,g.Cb)()],U.prototype,"_graphics",void 0),(0,c._)([(0,g.Cb)()],U.prototype,"_routeItems",null);var P=U=(0,c._)([(0,_.j)("esri.views.2d.layers.RouteLayerView2D")],U)},75391:function(e,t,r){r.d(t,{Z:function(){return c}});var i=r(15671),n=r(43144),a=r(11752),h=r(61120),u=r(60136),s=r(29388),o=r(80613),c=function(e){(0,u.Z)(r,e);var t=(0,s.Z)(r);function r(){return(0,i.Z)(this,r),t.apply(this,arguments)}return(0,n.Z)(r,[{key:"renderChildren",value:function(e){this.attributeView.update(),this.children.some((function(e){return e.hasData}))&&(this.attributeView.bindTextures(e.context,!1),(0,a.Z)((0,h.Z)(r.prototype),"renderChildren",this).call(this,e),e.drawPhase===o.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===o.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}},{key:"_renderHighlight",value:function(e){var t=e.painter.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()}}]),r}(r(82022).Z)}}]);
//# sourceMappingURL=8405.4e24dec9.chunk.js.map