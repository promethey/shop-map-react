"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[2170,2463],{92463:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return c}});var r=t(53866),i=t(77577),a=t(585),u=t(80885),o=t(29909),c={convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){var r=e.hasZ(n),i=e.hasM(n),u=new a.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return r&&(u.z=e.getPointZ(n)),i&&(u.m=e.getPointM(n)),u.cache._geVersion=n,u},exportPolygon:function(e,n,t){var r=new u.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportPolyline:function(e,n,t){var r=new o.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportMultipoint:function(e,n,t){var r=new i.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return r.cache._geVersion=n,r},exportExtent:function(e,n,t){var i=e.hasZ(n),a=e.hasM(n),u=new r.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(i){var o=e.getZExtent(n);u.zmin=o.vmin,u.zmax=o.vmax}if(a){var c=e.getMExtent(n);u.mmin=c.vmin,u.mmax=c.vmax}return u.cache._geVersion=n,u}}},2170:function(e,n,t){t.r(n),t.d(n,{buffer:function(){return z},changeDefaultSpatialReferenceTolerance:function(){return K},clearDefaultSpatialReferenceTolerance:function(){return Q},clip:function(){return l},contains:function(){return p},convexHull:function(){return V},crosses:function(){return y},cut:function(){return h},densify:function(){return I},difference:function(){return P},disjoint:function(){return m},distance:function(){return v},equals:function(){return g},extendedSpatialReferenceInfo:function(){return s},flipHorizontal:function(){return J},flipVertical:function(){return N},generalize:function(){return O},geodesicArea:function(){return q},geodesicBuffer:function(){return E},geodesicDensify:function(){return X},geodesicLength:function(){return B},intersect:function(){return _},intersectLinesToPoints:function(){return F},intersects:function(){return G},isSimple:function(){return R},nearestCoordinate:function(){return L},nearestVertex:function(){return b},nearestVertices:function(){return k},offset:function(){return T},overlaps:function(){return w},planarArea:function(){return Y},planarLength:function(){return j},relate:function(){return Z},rotate:function(){return H},simplify:function(){return M},symmetricDifference:function(){return S},touches:function(){return A},union:function(){return D},within:function(){return x}});var r=t(43144),i=t(15671),a=t(60136),u=t(29388),o=t(98737),c=t(99058),f=t(92463);function d(e){return Array.isArray(e)?e[0].spatialReference:e&&e.spatialReference}function s(e){return c.G.extendedSpatialReferenceInfo(e)}function l(e,n){return c.G.clip(f.hydratedAdapter,d(e),e,n)}function h(e,n){return c.G.cut(f.hydratedAdapter,d(e),e,n)}function p(e,n){return c.G.contains(f.hydratedAdapter,d(e),e,n)}function y(e,n){return c.G.crosses(f.hydratedAdapter,d(e),e,n)}function v(e,n,t){return c.G.distance(f.hydratedAdapter,d(e),e,n,t)}function g(e,n){return c.G.equals(f.hydratedAdapter,d(e),e,n)}function G(e,n){return c.G.intersects(f.hydratedAdapter,d(e),e,n)}function A(e,n){return c.G.touches(f.hydratedAdapter,d(e),e,n)}function x(e,n){return c.G.within(f.hydratedAdapter,d(e),e,n)}function m(e,n){return c.G.disjoint(f.hydratedAdapter,d(e),e,n)}function w(e,n){return c.G.overlaps(f.hydratedAdapter,d(e),e,n)}function Z(e,n,t){return c.G.relate(f.hydratedAdapter,d(e),e,n,t)}function R(e){return c.G.isSimple(f.hydratedAdapter,d(e),e)}function M(e){return c.G.simplify(f.hydratedAdapter,d(e),e)}function V(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return c.G.convexHull(f.hydratedAdapter,d(e),e,n)}function P(e,n){return c.G.difference(f.hydratedAdapter,d(e),e,n)}function S(e,n){return c.G.symmetricDifference(f.hydratedAdapter,d(e),e,n)}function _(e,n){return c.G.intersect(f.hydratedAdapter,d(e),e,n)}function D(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return c.G.union(f.hydratedAdapter,d(e),e,n)}function T(e,n,t,r,i,a){return c.G.offset(f.hydratedAdapter,d(e),e,n,t,r,i,a)}function z(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c.G.buffer(f.hydratedAdapter,d(e),e,n,t,r)}function E(e,n,t,r,i,a){return c.G.geodesicBuffer(f.hydratedAdapter,d(e),e,n,t,r,i,a)}function L(e,n){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return c.G.nearestCoordinate(f.hydratedAdapter,d(e),e,n,t)}function b(e,n){return c.G.nearestVertex(f.hydratedAdapter,d(e),e,n)}function k(e,n,t,r){return c.G.nearestVertices(f.hydratedAdapter,d(e),e,n,t,r)}function C(e){var n,t;return"xmin"in e?"center"in e?e.center:null:"x"in e?e:"extent"in e&&null!==(n=null===(t=e.extent)||void 0===t?void 0:t.center)&&void 0!==n?n:null}function H(e,n,t){var r;if(null==e)throw new U;var i=e.spatialReference;if(null==(t=null!==(r=t)&&void 0!==r?r:C(e)))throw new U;var a=e.constructor.fromJSON(c.G.rotate(e,n,t));return a.spatialReference=i,a}function J(e,n){var t;if(null==e)throw new U;var r=e.spatialReference;if(null==(n=null!==(t=n)&&void 0!==t?t:C(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipHorizontal(e,n));return i.spatialReference=r,i}function N(e,n){var t;if(null==e)throw new U;var r=e.spatialReference;if(null==(n=null!==(t=n)&&void 0!==t?t:C(e)))throw new U;var i=e.constructor.fromJSON(c.G.flipVertical(e,n));return i.spatialReference=r,i}function O(e,n,t,r){return c.G.generalize(f.hydratedAdapter,d(e),e,n,t,r)}function I(e,n,t){return c.G.densify(f.hydratedAdapter,d(e),e,n,t)}function X(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return c.G.geodesicDensify(f.hydratedAdapter,d(e),e,n,t,r)}function Y(e,n){return c.G.planarArea(f.hydratedAdapter,d(e),e,n)}function j(e,n){return c.G.planarLength(f.hydratedAdapter,d(e),e,n)}function q(e,n,t){return c.G.geodesicArea(f.hydratedAdapter,d(e),e,n,t)}function B(e,n,t){return c.G.geodesicLength(f.hydratedAdapter,d(e),e,n,t)}function F(e,n){return c.G.intersectLinesToPoints(f.hydratedAdapter,d(e),e,n)}function K(e,n){c.G.changeDefaultSpatialReferenceTolerance(e,n)}function Q(e){c.G.clearDefaultSpatialReferenceTolerance(e)}var U=function(e){(0,a.Z)(t,e);var n=(0,u.Z)(t);function t(){return(0,i.Z)(this,t),n.call(this,"Illegal Argument Exception")}return(0,r.Z)(t)}((0,o.Z)(Error))}}]);
//# sourceMappingURL=2170.4caeebbc.chunk.js.map