"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[4994],{58971:function(e,t,n){n.d(t,{G6:function(){return S},Ie:function(){return P},J9:function(){return x},RF:function(){return y},U1:function(){return R},vY:function(){return s},ym:function(){return b}});var r=n(29439),i=n(92026),a=n(77981);var o=function(e,t,n){return[t,n]},u=function(e,t,n){return[t,n,e[2]]},c=function(e,t,n){return[t,n,e[2],e[3]]};function s(e){return e?{originPosition:"upper-left"===e.originPosition?"upperLeft":"lower-left"===e.originPosition?"lowerLeft":e.originPosition,scale:e.tolerance?[e.tolerance,e.tolerance]:[1,1],translate:(0,i.pC)(e.extent)?[e.extent.xmin,e.extent.ymax]:[0,0]}:null}function l(e,t){var n=e.scale,r=e.translate;return Math.round((t-r[0])/n[0])}function f(e,t){var n=e.scale,r=e.translate;return Math.round((r[1]-t)/n[1])}function h(e,t,n){for(var r,i,a,o,u=[],c=0;c<n.length;c++){var s=n[c];c>0?(a=l(e,s[0]),o=f(e,s[1]),a===r&&o===i||(u.push(t(s,a-r,o-i)),r=a,i=o)):(r=l(e,s[0]),i=f(e,s[1]),u.push(t(s,r,i)))}return u.length>0?u:null}function d(e,t){var n=e.scale,r=e.translate;return t*n[0]+r[0]}function g(e,t){var n=e.scale;return e.translate[1]-t*n[1]}function p(e,t,n){var i=new Array(n.length);if(!n.length)return i;var a=(0,r.Z)(e.scale,2),o=a[0],u=a[1],c=d(e,n[0][0]),s=g(e,n[0][1]);i[0]=t(n[0],c,s);for(var l=1;l<n.length;l++){var f=n[l];c+=f[0]*o,s-=f[1]*u,i[l]=t(f,c,s)}return i}function m(e,t,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=p(e,t,n[i]);return r}function v(e,t,n,r,i){var a;return t.points=null!==(a=function(e,t,n,r){return h(e,n?r?c:u:r?u:o,t)}(e,n.points,r,i))&&void 0!==a?a:[],t}function y(e,t,n,r,i){return t.x=l(e,n.x),t.y=f(e,n.y),t!==n&&(r&&(t.z=n.z),i&&(t.m=n.m)),t}function w(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?c:u:r?u:o,s=0;s<t.length;s++){var l=h(e,a,t[s]);l&&l.length>=3&&i.push(l)}return i.length?i:null}(e,n.rings,r,i);return a?(t.rings=a,t):null}function C(e,t,n,r,i){var a=function(e,t,n,r){for(var i=[],a=n?r?c:u:r?u:o,s=0;s<t.length;s++){var l=h(e,a,t[s]);l&&l.length>=2&&i.push(l)}return i.length?i:null}(e,n.paths,r,i);return a?(t.paths=a,t):null}function b(e,t){return e&&t?(0,a.wp)(t)?y(e,{},t,!1,!1):(0,a.l9)(t)?C(e,{},t,!1,!1):(0,a.oU)(t)?w(e,{},t,!1,!1):(0,a.aW)(t)?v(e,{},t,!1,!1):(0,a.YX)(t)?function(e,t,n,r,i){return t.xmin=l(e,n.xmin),t.ymin=f(e,n.ymin),t.xmax=l(e,n.xmax),t.ymax=f(e,n.ymax),t!==n&&(r&&(t.zmin=n.zmin,t.zmax=n.zmax),i&&(t.mmin=n.mmin,t.mmax=n.mmax)),t}(e,{},t,!1,!1):null:null}function x(e,t,n,r,a){return(0,i.pC)(n)&&(t.points=function(e,t,n,r){return p(e,n?r?c:u:r?u:o,t)}(e,n.points,r,a)),t}function R(e,t,n,r,a){return(0,i.Wi)(n)||(t.x=d(e,n.x),t.y=g(e,n.y),t!==n&&(r&&(t.z=n.z),a&&(t.m=n.m))),t}function P(e,t,n,r,a){return(0,i.pC)(n)&&(t.rings=function(e,t,n,r){return m(e,n?r?c:u:r?u:o,t)}(e,n.rings,r,a)),t}function S(e,t,n,r,a){return(0,i.pC)(n)&&(t.paths=function(e,t,n,r){return m(e,n?r?c:u:r?u:o,t)}(e,n.paths,r,a)),t}},17653:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(1413),i=n(74165),a=n(15861),o=n(15671),u=n(43144),c=n(76200),s=n(10064),l=n(66978),f=n(37762),h=n(52522),d=n(38499);function g(e,t){return p.apply(this,arguments)}function p(){return p=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o,u,c,s,g,p,m,v,y,w,C,b;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=(0,h.p)(t))instanceof Error)){e.next=3;break}throw r;case 3:return e.next=5,r.createImages();case 5:(0,l.k_)(n),a=r.frames,o=r.width,u=r.height,(c=document.createElement("canvas")).width=o,c.height=u,s=c.getContext("2d",{willReadFrequently:!0}),g=[],p=[],m=(0,f.Z)(a);try{for(m.s();!(v=m.n()).done;)y=v.value,p.push((0,d.HA)(y.delay||100)),w=y.imageElement,0===y.blendOp?s.globalCompositeOperation="copy":s.globalCompositeOperation="source-over",C=2===y.disposeOp?s.getImageData(y.left,y.top,y.width,y.height):void 0,s.drawImage(w,y.left,y.top),b=s.getImageData(0,0,o,u),g.push(b),0===y.disposeOp||(1===y.disposeOp?s.clearRect(y.left,y.top,y.width,y.height):2===y.disposeOp&&s.putImageData(C,y.left,y.top))}catch(i){m.e(i)}finally{m.f()}return e.abrupt("return",{frameDurations:p,getFrame:function(e){return g[e]},width:o,height:u});case 12:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}var m=[137,80,78,71,13,10,26,10];function v(e){var t=new Uint8Array(e);return!m.some((function(e,n){return e!==t[n]}))}function y(e){if(!v(e))return!1;var t,n=new DataView(e),r=new Uint8Array(e),i=8;do{var a=n.getUint32(i);if("acTL"===(t=String.fromCharCode.apply(String,Array.prototype.slice.call(r.subarray(i+4,i+8)))))return!0;i+=12+a}while("IEND"!==t&&i<r.length);return!1}var w=n(91958),C=n(47191);function b(e,t){return x.apply(this,arguments)}function x(){return x=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o,u,c,s,l,h,g,p,m,v,y,b,x,R;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=(0,C.p)(t),a=(0,C.d)(r,!0),o=r.lsd,u=o.width,c=o.height,(s=document.createElement("canvas")).width=u,s.height=c,l=s.getContext("2d",{willReadFrequently:!0}),h=[],g=[],p=(0,f.Z)(a);try{for(p.s();!(m=p.n()).done;)v=m.value,g.push((0,d.HA)(v.delay||100)),y=new ImageData(v.patch,v.dims.width,v.dims.height),b=(0,w.E0)(y),x=3===v.disposalType?l.getImageData(v.dims.left,v.dims.top,v.dims.width,v.dims.height):void 0,l.drawImage(b,v.dims.left,v.dims.top),R=l.getImageData(0,0,u,c),h.push(R),1===v.disposalType||(2===v.disposalType?l.clearRect(v.dims.left,v.dims.top,v.dims.width,v.dims.height):3===v.disposalType&&l.putImageData(x,v.dims.left,v.dims.top))}catch(n){p.e(n)}finally{p.f()}return e.abrupt("return",{frameDurations:g,getFrame:function(e){return h[e]},width:u,height:c});case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var R=[71,73,70];function P(e){if(!function(e){var t=new Uint8Array(e);return!R.some((function(e,n){return e!==t[n]}))}(e))return!1;for(var t=new DataView(e),n=t.getUint8(10),r=13+(128&n?3*Math.pow(2,1+(7&n)):0),i=0,a=!1;!a;){switch(t.getUint8(r++)){case 33:if(!o())return!1;break;case 44:u();break;case 59:a=!0;break;default:return!1}if(i>1)return!0}function o(){switch(t.getUint8(r++)){case 249:r++,r+=4,c();break;case 1:i++,r++,r+=12,c();break;case 254:c();break;case 255:r++,r+=8,r+=3,c();break;default:return!1}return!0}function u(){i++,r+=8;var e=t.getUint8(r++);r+=128&e?3*Math.pow(2,1+(7&e)):0,r++,c()}function c(){for(var e;e=t.getUint8(r++);)r+=e}return!1}var S=function(){function e(){(0,o.Z)(this,e),this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}return(0,u.Z)(e,[{key:"destroy",value:function(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}},{key:"getResource",value:function(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}},{key:"fetchResource",value:function(){var e=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o=this;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=this._resourceMap.get(t))){e.next=3;break}return e.abrupt("return",{width:r.width,height:r.height});case 3:return a=this._inFlightResourceMap.get(t),e.abrupt("return",a?a.then((function(e){return{width:e.width,height:e.height}})):(a=k(t,n),this._inFlightResourceMap.set(t,a),a.then((function(e){return o._inFlightResourceMap.delete(t),o._resourceMap.set(t,e),{width:e.width,height:e.height}}),(function(){return{width:0,height:0}}))));case 5:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteResource",value:function(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}}]),e}();function M(e,t){return T.apply(this,arguments)}function T(){return T=(0,a.Z)((0,i.Z)().mark((function e(t,n){var a,o,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.URL.createObjectURL(t),e.prev=1,e.next=4,(0,c.default)(a,(0,r.Z)((0,r.Z)({},n),{},{responseType:"image"}));case 4:return o=e.sent,u=o.data,e.abrupt("return",u);case 9:if(e.prev=9,e.t0=e.catch(1),(0,l.D_)(e.t0)){e.next=13;break}throw new s.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(a));case 13:throw e.t0;case 14:return e.prev=14,window.URL.revokeObjectURL(a),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,9,14,17]])}))),T.apply(this,arguments)}function k(e,t){return L.apply(this,arguments)}function L(){return L=(0,a.Z)((0,i.Z)().mark((function e(t,n){var r,a,o,u;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t,n);case 2:if(r=e.sent,a=r.arrayBuffer,o=r.mediaType,u="image/png"===o,"image/gif"!==o||!P(a)){e.next=8;break}return e.abrupt("return",b(a));case 8:if(!u||!y(a)){e.next=10;break}return e.abrupt("return",g(a,n));case 10:return e.abrupt("return",M(new Blob([a],{type:o}),n));case 11:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function A(e,t){return D.apply(this,arguments)}function D(){return D=(0,a.Z)((0,i.Z)().mark((function e(t,n){var a,o,u,f,h,d,g,p,m,v;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=";base64,",!t.includes(o)){e.next=7;break}for(u=t.indexOf(o),f=t.indexOf(o)+8,h=t.substring(f),d=atob(h),g=new Uint8Array(d.length),p=0;p<d.length;p++)g[p]=d.charCodeAt(p);a={arrayBuffer:g.buffer,mediaType:t.substring(0,u).replace("data:","")},e.next=19;break;case 7:return e.prev=7,e.next=10,(0,c.default)(t,(0,r.Z)({responseType:"array-buffer"},n));case 10:m=e.sent,v=m.data,a={arrayBuffer:v,mediaType:m.getHeader("Content-Type")},e.next=19;break;case 15:if(e.prev=15,e.t0=e.catch(7),(0,l.D_)(e.t0)){e.next=19;break}throw new s.Z("mapview-invalid-resource","Could not fetch requested resource at ".concat(t));case 19:return e.abrupt("return",a);case 20:case"end":return e.stop()}}),e,null,[[7,15]])}))),D.apply(this,arguments)}},48202:function(e,t,n){var r,i,a,o,u,c,s,l,f,h,d,g,p,m,v,y,w,C,b,x,R,P,S,M,T,k,L,A,D,B,F,I,O,_,z,Z,E,N,U,W,H,X,G,Y,J,q,V,j,Q,K,$,ee,te,ne,re,ie,ae,oe,ue,ce,se;n.d(t,{$y:function(){return P},AH:function(){return i},CS:function(){return V},DD:function(){return l},Dd:function(){return D},Em:function(){return R},JS:function(){return J},Ky:function(){return f},Lh:function(){return j},Qb:function(){return ae},RL:function(){return r},RS:function(){return ue},TF:function(){return x},Tx:function(){return u},UR:function(){return w},UX:function(){return ie},bj:function(){return q},eZ:function(){return s},id:function(){return T},kP:function(){return Z},of:function(){return d},r4:function(){return W},sj:function(){return E},v2:function(){return a},zQ:function(){return A},zV:function(){return y}}),function(e){e[e.BUTT=0]="BUTT",e[e.ROUND=1]="ROUND",e[e.SQUARE=2]="SQUARE",e[e.UNKNOWN=4]="UNKNOWN"}(r||(r={})),function(e){e[e.BEVEL=0]="BEVEL",e[e.ROUND=1]="ROUND",e[e.MITER=2]="MITER",e[e.UNKNOWN=4]="UNKNOWN"}(i||(i={})),function(e){e[e.SCREEN=0]="SCREEN",e[e.MAP=1]="MAP"}(a||(a={})),function(e){e[e.Tint=0]="Tint",e[e.Ignore=1]="Ignore",e[e.Multiply=99]="Multiply"}(o||(o={})),function(e){e.Both="Both",e.JustBegin="JustBegin",e.JustEnd="JustEnd",e.None="None"}(u||(u={})),function(e){e[e.Mosaic=0]="Mosaic",e[e.Centered=1]="Centered"}(c||(c={})),function(e){e[e.Normal=0]="Normal",e[e.Superscript=1]="Superscript",e[e.Subscript=2]="Subscript"}(s||(s={})),function(e){e[e.MSSymbol=0]="MSSymbol",e[e.Unicode=1]="Unicode"}(l||(l={})),function(e){e[e.Unspecified=0]="Unspecified",e[e.TrueType=1]="TrueType",e[e.PSOpenType=2]="PSOpenType",e[e.TTOpenType=3]="TTOpenType",e[e.Type1=4]="Type1"}(f||(f={})),function(e){e[e.Display=0]="Display",e[e.Map=1]="Map"}(h||(h={})),function(e){e.None="None",e.Loop="Loop",e.Oscillate="Oscillate"}(d||(d={})),function(e){e[e.Z=0]="Z",e[e.X=1]="X",e[e.Y=2]="Y"}(g||(g={})),function(e){e[e.XYZ=0]="XYZ",e[e.ZXY=1]="ZXY",e[e.YXZ=2]="YXZ"}(p||(p={})),function(e){e[e.Rectangle=0]="Rectangle",e[e.RoundedRectangle=1]="RoundedRectangle",e[e.Oval=2]="Oval"}(m||(m={})),function(e){e[e.None=0]="None",e[e.Alpha=1]="Alpha",e[e.Screen=2]="Screen",e[e.Multiply=3]="Multiply",e[e.Add=4]="Add"}(v||(v={})),function(e){e[e.TTB=0]="TTB",e[e.RTL=1]="RTL",e[e.BTT=2]="BTT"}(y||(y={})),function(e){e[e.None=0]="None",e[e.SignPost=1]="SignPost",e[e.FaceNearPlane=2]="FaceNearPlane"}(w||(w={})),function(e){e[e.Float=0]="Float",e[e.String=1]="String",e[e.Boolean=2]="Boolean"}(C||(C={})),function(e){e[e.Intersect=0]="Intersect",e[e.Subtract=1]="Subtract"}(b||(b={})),function(e){e.OpenEnded="OpenEnded",e.Block="Block",e.Crossed="Crossed"}(x||(x={})),function(e){e.FullGeometry="FullGeometry",e.PerpendicularFromFirstSegment="PerpendicularFromFirstSegment",e.ReversedFirstSegment="ReversedFirstSegment",e.PerpendicularToSecondSegment="PerpendicularToSecondSegment",e.SecondSegmentWithTicks="SecondSegmentWithTicks",e.DoublePerpendicular="DoublePerpendicular",e.OppositeToFirstSegment="OppositeToFirstSegment",e.TriplePerpendicular="TriplePerpendicular",e.HalfCircleFirstSegment="HalfCircleFirstSegment",e.HalfCircleSecondSegment="HalfCircleSecondSegment",e.HalfCircleExtended="HalfCircleExtended",e.OpenCircle="OpenCircle",e.CoverageEdgesWithTicks="CoverageEdgesWithTicks",e.GapExtentWithDoubleTicks="GapExtentWithDoubleTicks",e.GapExtentMidline="GapExtentMidline",e.Chevron="Chevron",e.PerpendicularWithArc="PerpendicularWithArc",e.ClosedHalfCircle="ClosedHalfCircle",e.TripleParallelExtended="TripleParallelExtended",e.ParallelWithTicks="ParallelWithTicks",e.Parallel="Parallel",e.PerpendicularToFirstSegment="PerpendicularToFirstSegment",e.ParallelOffset="ParallelOffset",e.OffsetOpposite="OffsetOpposite",e.OffsetSame="OffsetSame",e.CircleWithArc="CircleWithArc",e.DoubleJog="DoubleJog",e.PerpendicularOffset="PerpendicularOffset",e.LineExcludingLastSegment="LineExcludingLastSegment",e.MultivertexArrow="MultivertexArrow",e.CrossedArrow="CrossedArrow",e.ChevronArrow="ChevronArrow",e.ChevronArrowOffset="ChevronArrowOffset",e.PartialFirstSegment="PartialFirstSegment",e.Arch="Arch",e.CurvedParallelTicks="CurvedParallelTicks",e.Arc90Degrees="Arc90Degrees"}(R||(R={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square",e.TrueBuffer="TrueBuffer"}(P||(P={})),function(e){e.ClosePath="ClosePath",e.ConvexHull="ConvexHull",e.RectangularBox="RectangularBox"}(S||(S={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(M||(M={})),function(e){e.Mitered="Mitered",e.Bevelled="Bevelled",e.Rounded="Rounded",e.Square="Square"}(T||(T={})),function(e){e.Fast="Fast",e.Accurate="Accurate"}(k||(k={})),function(e){e.BeginningOfLine="BeginningOfLine",e.EndOfLine="EndOfLine"}(L||(L={})),function(e){e.Sinus="Sinus",e.Square="Square",e.Triangle="Triangle",e.Random="Random"}(A||(A={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Force=2]="Force"}(D||(D={})),function(e){e[e.Buffered=0]="Buffered",e[e.Left=1]="Left",e[e.Right=2]="Right",e[e.AlongLine=3]="AlongLine"}(B||(B={})),function(e){e[e.Linear=0]="Linear",e[e.Rectangular=1]="Rectangular",e[e.Circular=2]="Circular",e[e.Buffered=3]="Buffered"}(F||(F={})),function(e){e[e.Discrete=0]="Discrete",e[e.Continuous=1]="Continuous"}(I||(I={})),function(e){e[e.AcrossLine=0]="AcrossLine",e[e.AloneLine=1]="AloneLine"}(O||(O={})),function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Center=2]="Center",e[e.Justify=3]="Justify"}(_||(_={})),function(e){e[e.Base=0]="Base",e[e.MidPoint=1]="MidPoint",e[e.ThreePoint=2]="ThreePoint",e[e.FourPoint=3]="FourPoint",e[e.Underline=4]="Underline",e[e.CircularCW=5]="CircularCW",e[e.CircularCCW=6]="CircularCCW"}(z||(z={})),function(e){e.Butt="Butt",e.Round="Round",e.Square="Square"}(Z||(Z={})),function(e){e.NoConstraint="NoConstraint",e.HalfPattern="HalfPattern",e.HalfGap="HalfGap",e.FullPattern="FullPattern",e.FullGap="FullGap",e.Custom="Custom"}(E||(E={})),function(e){e[e.None=-1]="None",e[e.Custom=0]="Custom",e[e.Circle=1]="Circle",e[e.OpenArrow=2]="OpenArrow",e[e.ClosedArrow=3]="ClosedArrow",e[e.Diamond=4]="Diamond"}(N||(N={})),function(e){e[e.ExtraLeading=0]="ExtraLeading",e[e.Multiple=1]="Multiple",e[e.Exact=2]="Exact"}(U||(U={})),function(e){e.Bevel="Bevel",e.Round="Round",e.Miter="Miter"}(W||(W={})),function(e){e[e.Default=0]="Default",e[e.String=1]="String",e[e.Numeric=2]="Numeric"}(H||(H={})),function(e){e[e.InsidePolygon=0]="InsidePolygon",e[e.PolygonCenter=1]="PolygonCenter",e[e.RandomlyInsidePolygon=2]="RandomlyInsidePolygon"}(X||(X={})),function(e){e[e.Tint=0]="Tint",e[e.Replace=1]="Replace",e[e.Multiply=2]="Multiply"}(G||(G={})),function(e){e[e.ClipAtBoundary=0]="ClipAtBoundary",e[e.RemoveIfCenterOutsideBoundary=1]="RemoveIfCenterOutsideBoundary",e[e.DoNotTouchBoundary=2]="DoNotTouchBoundary",e[e.DoNotClip=3]="DoNotClip"}(Y||(Y={})),function(e){e.NoConstraint="NoConstraint",e.WithMarkers="WithMarkers",e.WithFullGap="WithFullGap",e.WithHalfGap="WithHalfGap",e.Custom="Custom"}(J||(J={})),function(e){e.Fixed="Fixed",e.Random="Random",e.RandomFixedQuantity="RandomFixedQuantity"}(q||(q={})),function(e){e.LineMiddle="LineMiddle",e.LineBeginning="LineBeginning",e.LineEnd="LineEnd",e.SegmentMidpoint="SegmentMidpoint"}(V||(V={})),function(e){e.OnPolygon="OnPolygon",e.CenterOfMass="CenterOfMass",e.BoundingBoxCenter="BoundingBoxCenter"}(j||(j={})),function(e){e[e.Low=0]="Low",e[e.Medium=1]="Medium",e[e.High=2]="High"}(Q||(Q={})),function(e){e[e.MarkerCenter=0]="MarkerCenter",e[e.MarkerBounds=1]="MarkerBounds"}(K||(K={})),function(e){e[e.None=0]="None",e[e.PropUniform=1]="PropUniform",e[e.PropNonuniform=2]="PropNonuniform",e[e.DifUniform=3]="DifUniform",e[e.DifNonuniform=4]="DifNonuniform"}($||($={})),function(e){e.Tube="Tube",e.Strip="Strip",e.Wall="Wall"}(ee||(ee={})),function(e){e[e.Random=0]="Random",e[e.Increasing=1]="Increasing",e[e.Decreasing=2]="Decreasing",e[e.IncreasingThenDecreasing=3]="IncreasingThenDecreasing"}(te||(te={})),function(e){e[e.Relative=0]="Relative",e[e.Absolute=1]="Absolute"}(ne||(ne={})),function(e){e[e.Normal=0]="Normal",e[e.LowerCase=1]="LowerCase",e[e.Allcaps=2]="Allcaps"}(re||(re={})),function(e){e[e.LTR=0]="LTR",e[e.RTL=1]="RTL"}(ie||(ie={})),function(e){e.Draft="Draft",e.Picture="Picture",e.Text="Text"}(ae||(ae={})),function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Baseline=2]="Baseline",e[e.Bottom=3]="Bottom"}(oe||(oe={})),function(e){e[e.Right=0]="Right",e[e.Upright=1]="Upright"}(ue||(ue={})),function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"}(ce||(ce={})),function(e){e[e.Calm=0]="Calm",e[e.Rippled=1]="Rippled",e[e.Slight=2]="Slight",e[e.Moderate=3]="Moderate"}(se||(se={}))},60975:function(e,t,n){n.r(t),n.d(t,{previewCIMSymbol:function(){return O}});var r,i,a=n(74165),o=n(15861),u=n(17842),c=n(78915),s=n(37762),l=n(15671),f=n(43144),h=n(51995),d=n(76200),g=n(92026),p=n(66978),m=n(98991),v=n(17653),y=n(66726),w=n(16285),C=n(22532),b=n(31027),x=n(49729),R=n(83748);(i=r||(r={})).Legend="legend",i.Preview="preview";var P=function(e){return e&&e.scaleFactor?e.scaleFactor:1},S=function(){function e(t,n){(0,l.Z)(this,e),this._spatialReference=t,this._avoidSDF=n,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new C.Z,this._cimResourceManager=new v.Z,this._rasterizer=new w.Z(this._cimResourceManager)}return(0,f.Z)(e,[{key:"resourceManager",get:function(){return this._cimResourceManager}},{key:"rasterizeCIMSymbolAsync",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,n,r,i,o,u,s,l){var f,h,d,g,p,m,v,w,C,x,R,P,S,T,k,L,A,D,B,F,I,O,_,z,Z,E;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:if((f=t.data)&&"CIMSymbolReference"===f.type&&f.symbol){e.next=5;break}return e.abrupt("return",null);case 5:return h=f.symbol,u||(u=(0,b.JW)(h)),e.next=9,c.E0.resolveSymbolOverrides(f,n,this._spatialReference,o,u,s,l);case 9:if(d=e.sent,this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),g=this._imageDataCanvas,p=this._cimResourceManager,m=[],c.B$.fetchResources(d,p,m),e.t0=m.length>0,!e.t0){e.next=17;break}return e.next=17,Promise.all(m);case 17:if(v=r.width,w=r.height,C=M(u,v,w,i),x=c.B$.getEnvelope(d,C,p)){e.next=20;break}return e.abrupt("return",null);case 20:R=1.3333333333333333*(window.devicePixelRatio||1),P=1,S=0,T=0,e.t1=h.type,e.next="CIMPointSymbol"===e.t1||"CIMTextSymbol"===e.t1?25:"CIMLineSymbol"===e.t1?30:"CIMPolygonSymbol"===e.t1?36:39;break;case 25:return k=1,x.width>v&&(k=v/x.width),L=1,x.height>w&&(L=w/x.height),"preview"===i&&(x.width<v&&(k=v/x.width),x.height<w&&(L=w/x.height)),P=Math.min(k,L),S=x.x+x.width/2,T=x.y+x.height/2,e.abrupt("break",39);case 30:return A=1,x.height>w&&(A=w/x.height),P=A,T=x.y+x.height/2,D=x.x*P+v/2,B=(x.x+x.width)*P+v/2,D<0&&(C.paths[0][0][0]-=D),B>v&&(C.paths[0][2][0]-=B-v),e.abrupt("break",39);case 36:S=x.x+x.width/2,T=x.y+x.height/2,F=x.x*P+v/2,I=(x.x+x.width)*P+v/2,O=x.y*P+w/2,_=(x.y+x.height)*P+w/2,z=C.rings,F<0&&(z[0][0][0]-=F,z[0][3][0]-=F,z[0][4][0]-=F),O<0&&(z[0][0][1]+=O,z[0][1][1]+=O,z[0][4][1]+=O),I>v&&(z[0][1][0]-=I-v,z[0][2][0]-=I-v),_>w&&(z[0][2][1]+=_-w,z[0][3][1]+=_-w);case 39:return g.width=v*R,g.height=w*R,1,g.width+=2,g.height+=2,Z=g.getContext("2d"),(E=y.zA.createIdentity()).translate(-S,-T),E.scale(P*R,-P*R),E.translate(v*R/2+1,w*R/2+1),Z.clearRect(0,0,g.width,g.height),e.abrupt("return",(new y.cD(Z,p,E,!0).drawSymbol(d,C),Z.getImageData(0,0,g.width,g.height)));case 45:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a,o,u,c){return e.apply(this,arguments)}}()},{key:"analyzeCIMSymbol",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,n,r,i,o){var u,c,s,l,f,h;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],c=n?{geometryType:i,spatialReference:this._spatialReference,fields:n}:null,e.next=3,(0,m.c)(t.data,c,this._cimResourceManager,u,this._avoidSDF);case 3:for((0,p.k_)(o),l=0,f=u;l<f.length;l++)"CIMPictureMarker"!==(h=f[l]).cim.type&&"CIMPictureFill"!==h.cim.type&&"CIMPictureStroke"!==h.cim.type||(s||(s=[]),s.push(this._fetchPictureMarkerResource(h,o))),r&&"text"===h.type&&"string"==typeof h.text&&h.text.includes("[")&&(h.text=(0,b.Qs)(r,h.text,h.cim.textCase));if(e.t0=s,!e.t0){e.next=9;break}return e.next=9,Promise.all(s);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),e,this)})));return function(t,n,r,i,a){return e.apply(this,arguments)}}()},{key:"rasterizeCIMSymbol3D",value:function(e,t,n,r,i,a){var o,u=[],c=(0,s.Z)(e);try{for(c.s();!(o=c.n()).done;){var l=o.value;r&&"function"==typeof r.scaleFactor&&(r.scaleFactor=r.scaleFactor(t,i,a));var f=this._getRasterizedResource(l,t,n,r,i,a);if(f){var h=0,d=f.anchorX||0,g=f.anchorY||0,p=!1,m=0,v=0;if("esriGeometryPoint"===n){var y=P(r);if(m=(0,b.hf)(l.offsetX,t,i,a)*y||0,v=(0,b.hf)(l.offsetY,t,i,a)*y||0,"marker"===l.type)h=(0,b.hf)(l.rotation,t,i,a)||0,p=!!l.rotateClockwise&&l.rotateClockwise;else if("text"===l.type){if(h=(0,b.hf)(l.angle,t,i,a)||0,void 0!==l.horizontalAlignment)switch(l.horizontalAlignment){case"left":d=-.5;break;case"right":d=.5;break;default:d=0}if(void 0!==l.verticalAlignment)switch(l.verticalAlignment){case"top":g=.5;break;case"bottom":g=-.5;break;case"baseline":g=-.25;break;default:g=0}}}null!=f&&u.push({angle:h,rotateClockWise:p,anchorX:d,anchorY:g,offsetX:m,offsetY:v,rasterizedResource:f})}}}catch(w){c.e(w)}finally{c.f()}return this.getSymbolImage(u)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),n=(0,g.s3)(t.getContext("2d")),r=0,i=0,a=0,o=0,c=[],s=0;s<e.length;s++){var l=e[s],f=l.rasterizedResource;if(f){var h=f.size,d=l.offsetX,p=l.offsetY,m=l.anchorX,v=l.anchorY,y=l.rotateClockWise||!1,w=l.angle,C=(0,u.F2)(d)-h[0]*(.5+m),b=(0,u.F2)(p)-h[1]*(.5+v),x=C+h[0],P=b+h[1];if(w){y&&(w=-w);var S=Math.sin(w*Math.PI/180),M=Math.cos(w*Math.PI/180),T=C*M-b*S,k=C*S+b*M,L=C*M-P*S,A=C*S+P*M,D=x*M-P*S,B=x*S+P*M,F=x*M-b*S,I=x*S+b*M;C=Math.min(T,L,D,F),b=Math.min(k,A,B,I),x=Math.max(T,L,D,F),P=Math.max(k,A,B,I)}r=C<r?C:r,i=b<i?b:i,a=x>a?x:a,o=P>o?P:o;var O=n.createImageData(f.size[0],f.size[1]);O.data.set(new Uint8ClampedArray(f.image.buffer));var _={offsetX:d,offsetY:p,rotateClockwise:y,angle:w,rasterizedImage:O,anchorX:m,anchorY:v};c.push(_)}}t.width=a-r,t.height=o-i;for(var z=-r,Z=o,E=0;E<c.length;E++){var N=c[E],U=this._imageDataToCanvas(N.rasterizedImage),W=N.rasterizedImage.width,H=N.rasterizedImage.height,X=z-W*(.5+N.anchorX),G=Z-H*(.5-N.anchorY);if(N.angle){var Y=(360-N.angle)*Math.PI/180;n.save(),n.translate((0,u.F2)(N.offsetX),-(0,u.F2)(N.offsetY)),n.translate(z,Z),n.rotate(Y),n.translate(-z,-Z),n.drawImage(U,X,G),n.restore()}else n.drawImage(U,X+(0,u.F2)(N.offsetX),G-(0,u.F2)(N.offsetY))}var J=new R.e({x:z/t.width-.5,y:Z/t.height-.5});return{imageData:0!==t.width&&0!==t.height?n.getImageData(0,0,t.width,t.height):n.createImageData(1,1),anchorPosition:J}}},{key:"_fetchPictureMarkerResource",value:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t,n){var r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.materialHash,this._pictureMarkerCache.get(r)){e.next=6;break}return e.next=4,(0,d.default)(t.cim.url,{responseType:"image",signal:n&&n.signal});case 4:i=e.sent.data,this._pictureMarkerCache.set(r,i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,n=(0,g.s3)(t.getContext("2d"));return t.width=e.width,t.height=e.height,n.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,n,r){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var i=this._imageDataCanvas,a=(0,g.s3)(i.getContext("2d"));if(i.width=t,i.height=n,a.drawImage(e,0,0,t,n),r){a.save();var o=new h.Z(r);a.fillStyle=o.toHex(),a.globalCompositeOperation="multiply",a.fillRect(0,0,t,n),a.globalCompositeOperation="destination-atop",a.drawImage(e,0,0,t,n),a.restore()}return new Uint32Array(a.getImageData(0,0,t,n).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,n,r,i,a){var o,u,c;if("text"===e.type)return this._rasterizeTextResource(e,t,r,i,a);var s=function(e,t,n,r){var i,a;"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,n,r),a=(0,m.S)(e.cim,e.materialOverrides)):(i=e.materialHash,a=e.cim);return{analyzedCIM:a,hash:i}}(e,t,i,a);o=s.analyzedCIM,u=s.hash;var l=P(r);if("CIMPictureMarker"===e.cim.type){var f=(0,b.hf)(e.size,t,i,a)*l,h=(0,g.s3)(this._getPictureResource(e,f,(0,b.hf)(e.color,t,i,a)));return c={image:h.image,size:[h.width,h.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}(0,x.FW)(o,l,{preserveOutlineWidth:!1});var d=o;u+=n,r&&(u+=JSON.stringify(r));var p=this._resourceCache;return p.has(u)?p.get(u):(c=this._rasterizer.rasterizeJSONResource({cim:d,type:e.type,url:e.url,mosaicHash:u,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),p.set(u,c),c)}},{key:"_rasterizeTextResource",value:function(e,t,n,r,i){var a=P(n),o=(0,b.hf)(e.text,t,r,i);if(!o||0===o.length)return null;var u=(0,b.hf)(e.fontName,t,r,i),c=(0,b.hf)(e.style,t,r,i),s=(0,b.hf)(e.weight,t,r,i),l=(0,b.hf)(e.decoration,t,r,i),f=(0,b.hf)(e.size,t,r,i)*a,h=(0,b.hf)(e.horizontalAlignment,t,r,i),d=(0,b.hf)(e.verticalAlignment,t,r,i),g=(0,b.nn)((0,b.hf)(e.color,t,r,i)),p=(0,b.nn)((0,b.hf)(e.outlineColor,t,r,i)),m={color:g,size:f,horizontalAlignment:h,verticalAlignment:d,font:{family:u,style:c,weight:s,decoration:l},halo:{size:(0,b.hf)(e.outlineSize,t,r,i)||0,color:p,style:c},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,m)}},{key:"_getPictureResource",value:function(e,t,n){var r=this._pictureMarkerCache.get(e.materialHash);if(!r)return null;var i=r.height/r.width,a=t?i>1?(0,u.F2)(t):(0,u.F2)(t)/i:r.width,o=t?i>1?(0,u.F2)(t)*i:(0,u.F2)(t):r.height;return{image:this._imageTo32Array(r,a,o,n),width:a,height:o}}}]),e}();function M(e,t,n,r){var i=-t/2+1,a=t/2-1,o=n/2-1,u=-n/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[i,0],[0,0],[a,0]]]};default:return"legend"===r?{rings:[[[i,o],[a,0],[a,u],[i,u],[i,o]]]}:{rings:[[[i,o],[a,o],[a,u],[i,u],[i,o]]]}}}var T=n(37817),k=n(69157),L=new S(null,!0),A=(0,u.Wz)(T.b_.size),D=(0,u.Wz)(T.b_.maxSize),B=(0,u.Wz)(T.b_.lineWidth),F=1;function I(e){var t=null===e||void 0===e?void 0:e.size;return"number"==typeof t?{width:t,height:t}:{width:null!=t&&"object"==typeof t&&"width"in t?t.width:null,height:null!=t&&"object"==typeof t&&"height"in t?t.height:null}}function O(e){return _.apply(this,arguments)}function _(){return _=(0,o.Z)((0,a.Z)().mark((function e(t){var n,i,o,s,l,f,h,d,g,p,m,v,y,w,C,x,R,P,S,M,T,O,_,z,Z,E,N=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=(o=N.length>1&&void 0!==N[1]?N[1]:{}).node,l=o.opacity,f=o.symbolConfig,h="object"==typeof f&&"isSquareFill"in f&&f.isSquareFill,d=o.cimOptions||o,g=d.geometryType||(0,b.JW)(null===(n=t)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.symbol),p=I(o),m=d.feature,v=d.fieldMap,null!=p.width&&null!=p.height){e.next=17;break}return e.next=5,c.E0.resolveSymbolOverrides(t.data,m,null,v,g);case 5:if(y=e.sent){e.next=8;break}return e.abrupt("return",null);case 8:if((t=t.clone()).data={type:"CIMSymbolReference",symbol:y},t.data.primitiveOverrides=void 0,w=[],c.B$.fetchResources(y,L.resourceManager,w),e.t0=w.length>0,!e.t0){e.next=15;break}return e.next=15,Promise.all(w);case 15:C=c.B$.getEnvelope(y,null,L.resourceManager),x=null===C||void 0===C?void 0:C.width,R=null===C||void 0===C?void 0:C.height,p.width="esriGeometryPolygon"===g?A:"esriGeometryPolyline"===g?B:null!=x&&isFinite(x)?Math.min(x,D):A,p.height="esriGeometryPolygon"===g?A:null!=R&&isFinite(R)?Math.max(Math.min(R,D),F):A;case 17:return e.next=19,L.rasterizeCIMSymbolAsync(t,m,p,h||"esriGeometryPolygon"!==g?r.Preview:r.Legend,v,g);case 19:if(P=e.sent){e.next=22;break}return e.abrupt("return",null);case 22:return S=P.width,M=P.height,(T=document.createElement("canvas")).width=S,T.height=M,T.getContext("2d").putImageData(P,0,0),O=(0,u.F2)(p.width),_=(0,u.F2)(p.height),(z=new Image(O,_)).src=T.toDataURL(),null!=l&&(z.style.opacity="".concat(l)),Z=z,null!=o.effectView&&(E={shape:{type:"image",x:0,y:0,width:O,height:_,src:z.src},fill:null,stroke:null,offset:[0,0]},Z=(0,k.wh)([[E]],[O,_],{effectView:o.effectView})),e.abrupt("return",(s&&Z&&s.appendChild(Z),Z));case 30:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}},38999:function(e,t,n){var r,i;function a(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function o(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function u(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[r.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[r.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[r.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[r.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[r.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[r.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[r.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[r.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[r.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[r.Center,i.Center]}}function c(e){switch(e){case r.Right:return-1;case r.Center:return 0;case r.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function s(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function l(e){switch(e){case"left":return r.Left;case"right":return r.Right;case"center":return r.Center}}function f(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}n.d(t,{Hd:function(){return l},M7:function(){return r},NS:function(){return f},TR:function(){return i},b7:function(){return o},g:function(){return c},kH:function(){return a},qv:function(){return u},tf:function(){return s}}),function(e){e[e.Left=-1]="Left",e[e.Center=0]="Center",e[e.Right=1]="Right"}(r||(r={})),function(e){e[e.Top=1]="Top",e[e.Center=0]="Center",e[e.Bottom=-1]="Bottom",e[e.Baseline=2]="Baseline"}(i||(i={}))},94109:function(e,t,n){n.d(t,{$0:function(){return o},AI:function(){return r},Al:function(){return d},By:function(){return w},C1:function(){return X},CQ:function(){return Y},CU:function(){return Z},D3:function(){return h},Ex:function(){return s},I_:function(){return a},Ic:function(){return g},Ij:function(){return v},Ip:function(){return W},Iv:function(){return j},Iw:function(){return l},Jw:function(){return R},MI:function(){return H},QU:function(){return x},SD:function(){return K},Tz:function(){return J},Uh:function(){return G},V4:function(){return z},XD:function(){return re},XJ:function(){return U},Xj:function(){return b},Zd:function(){return F},_5:function(){return M},_6:function(){return Q},a:function(){return E},aK:function(){return L},dn:function(){return _},e0:function(){return V},eF:function(){return f},eV:function(){return u},f2:function(){return y},fL:function(){return N},iJ:function(){return p},iV:function(){return I},jk:function(){return $},kF:function(){return P},lK:function(){return A},m4:function(){return D},mx:function(){return C},nM:function(){return m},nb:function(){return ne},oK:function(){return q},pU:function(){return k},ru:function(){return i},tQ:function(){return O},u4:function(){return te},uG:function(){return B},vw:function(){return ee},xl:function(){return T},xm:function(){return c},yP:function(){return S}});var r=1e-30,i=4294967295,a=512,o=8,u=10,c=29,s=24,l=8,f={metrics:{width:15,height:17,left:0,top:-7,advance:14}},h=0,d=0,g=0,p=1,m=2,v=3,y=4,w=5,C=6,b=12,x=5,R=6,P=5,S=6,M=0,T=1,k=2,L=3,A=4,D=2,B=1,F=2,I=4,O=1.05,_=3,z=5,Z=6,E=1.15,N=2,U=8,W=500,H=10,X=1024,G=2,Y=0,J=1,q=4,V=8,j=16,Q=4,K=1,$=4,ee=8,te=128,ne=4,re=2},73271:function(e,t,n){n.d(t,{Au:function(){return i},Jz:function(){return o},UJ:function(){return a}});var r=new Float32Array(1);new Uint32Array(r.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function a(e,t){return 65535&e|t<<16}function o(e,t,n,r){return 255&e|(255&t)<<8|(255&n)<<16|r<<24}}}]);
//# sourceMappingURL=4994.70cb8c30.chunk.js.map