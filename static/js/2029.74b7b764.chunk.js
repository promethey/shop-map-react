"use strict";(self.webpackChunkshop_map_react=self.webpackChunkshop_map_react||[]).push([[2029],{44070:function(e,t,i){i.d(t,{f:function(){return E}});var r=i(74165),n=i(15861),s=i(15671),a=i(43144),o=i(63780),h=i(32718),c=i(92026),u=i(18722),l=i(37825),_=i(49800),f=i(8548),d=h.Z.getLogger("esri.views.webgl.BufferObject"),E=function(){function e(t,i,r,n){(0,s.Z)(this,e),this._context=t,this.bufferType=i,this.usage=r,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(f._g.BufferObject,this),this._glName=this._context.gl.createBuffer(),(0,l.zu)(this._context.gl),n&&this.setData(n)}return(0,a.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"indexType",get:function(){return this._indexType}},{key:"byteSize",get:function(){return this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER?this._indexType===f.g.UNSIGNED_INT?4*this._size:2*this._size:this._size}},{key:"_isVAOAware",get:function(){return this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER||this.bufferType===f.w0.ARRAY_BUFFER}},{key:"dispose",value:function(){var e;null!==(e=this._context)&&void 0!==e&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(f._g.BufferObject,this),this._context=(0,c.wN)(this._context)):this._glName&&d.warn("Leaked WebGL buffer object")}},{key:"setSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&d.error("Buffer size needs to be positive!"),this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER&&(0,c.pC)(t))switch(this._indexType=t,t){case f.g.UNSIGNED_SHORT:e*=2;break;case f.g.UNSIGNED_INT:e*=4}this._setBufferData(e)}},{key:"setData",value:function(e){if(e){var t=e.byteLength;this.bufferType===f.w0.ELEMENT_ARRAY_BUFFER&&((0,u.Uc)(e)&&(t/=2,this._indexType=f.g.UNSIGNED_SHORT),(0,u.ZY)(e)&&(t/=4,this._indexType=f.g.UNSIGNED_INT)),this._setBufferData(t,e)}}},{key:"_setBufferData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;var i=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var r=this._context.gl;(0,c.pC)(t)?r.bufferData(this.bufferType,t,this.usage):r.bufferData(this.bufferType,e,this.usage),(0,l.zu)(r),this._isVAOAware&&this._context.bindVAO(i)}},{key:"setSubData",value:function(e,t,i,r){if(e){(t<0||t*e.BYTES_PER_ELEMENT>=this.byteSize)&&d.error("offset is out of range!"),i>=r&&d.error("end must be bigger than start!"),(t+(r-i))*e.BYTES_PER_ELEMENT>this.byteSize&&d.error("An attempt to write beyond the end of the buffer!");var n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var s=this._context.gl;if(this._context.type===_.zO.WEBGL2)s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,i,r-i);else{var a=0===i&&r===e.length?e:e.subarray(i,r);s.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,a)}(0,l.zu)(s),this._isVAOAware&&this._context.bindVAO(n)}}},{key:"getSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(this._context.type===_.zO.WEBGL2)if(i<0||r<0)d.error("Problem getting subdata: offset and length were less than zero!");else{var n=function(e){return(0,o.zG)(e)}(e)?e.BYTES_PER_ELEMENT:1;if(n*((null!==i&&void 0!==i?i:0)+(null!==r&&void 0!==r?r:0))>e.byteLength)d.error("Problem getting subdata: offset and length exceeded destination size!");else{t+n*(null!==r&&void 0!==r?r:0)>this.byteSize&&d.warn("Potential problem getting subdata: requested data exceeds buffer size!");var s=this._context.gl;this._context.bindBuffer(this,f.w0.COPY_READ_BUFFER),s.getBufferSubData(f.w0.COPY_READ_BUFFER,t,e,i,r),this._context.unbindBuffer(f.w0.COPY_READ_BUFFER)}}else d.error("Get buffer subdata is supported in WebGL2 only!")}},{key:"getSubDataAsync",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t){var i,n,s,a=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=a.length>1&&void 0!==a[1]?a[1]:0,n=a.length>2?a[2]:void 0,s=a.length>3?a[3]:void 0,this._context.type!==_.zO.WEBGL2){e.next=9;break}return e.next=6,this._context.clientWaitAsync();case 6:this.getSubData(t,i,n,s),e.next=10;break;case 9:d.error("Get buffer subdata is supported in WebGL2 only!");case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}],[{key:"createIndex",value:function(t,i,r){return new e(t,f.w0.ELEMENT_ARRAY_BUFFER,i,r)}},{key:"createVertex",value:function(t,i,r){return new e(t,f.w0.ARRAY_BUFFER,i,r)}},{key:"createUniform",value:function(t,i,r){if(t.type!==_.zO.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new e(t,f.w0.UNIFORM_BUFFER,i,r)}},{key:"createPixelPack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.l1.STREAM_READ,r=arguments.length>2?arguments[2]:void 0;if(t.type!==_.zO.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");var n=new e(t,f.w0.PIXEL_PACK_BUFFER,i);return r&&n.setSize(r),n}},{key:"createPixelUnpack",value:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.l1.STREAM_DRAW,r=arguments.length>2?arguments[2]:void 0;if(t.type!==_.zO.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new e(t,f.w0.PIXEL_UNPACK_BUFFER,i,r)}}]),e}()},53634:function(e,t,i){i.d(t,{X:function(){return b}});var r=i(74165),n=i(15861),s=i(29439),a=i(93433),o=i(1413),h=i(15671),c=i(43144),u=i(32718),l=i(92026),_=i(44070),f=i(37825),d=i(49800),E=i(8548),T=i(15880),R=i(51378),A=i(3384),b=function(){function e(t,i){var r,n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if((0,h.Z)(this,e),this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._depthStencilTexture=null,this._initialized=!1,this._desc=(0,o.Z)({},i),t.instanceCounter.increment(E._g.FramebufferObject,this),(0,l.pC)(s)){Array.isArray(s)||(s=[s]);for(var c=0;c<s.length;++c){var u=s[c],_=E.VY.COLOR_ATTACHMENT0+c,f=void 0;p(u)?(g(u)?(f=u.descriptor,this._colorAttachments.set(_,u)):(f=u,this._colorAttachments.set(_,new R.x(this._context,f))),v(f,this._desc)):(m(u)?(f=u.descriptor,this._colorAttachments.set(_,u)):(f=u,this._colorAttachments.set(_,new T.r(this._context,f))),x(f,this._desc)),this._validateColorAttachmentPoint(_)}}if((0,l.pC)(a))if(p(a))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),g(a)?(n=a.descriptor,this._depthStencilTexture=a):(n=a,this._depthStencilTexture=new R.x(this._context,n)),v(n,this._desc);else{var d;m(a)?(n=a.descriptor,r=a):(n=a,r=new T.r(this._context,n));var A=null!==(d=this._desc.depthStencilTarget)&&void 0!==d?d:E.OU.DEPTH_STENCIL_RENDER_BUFFER;A===E.OU.STENCIL_RENDER_BUFFER?this._stencilAttachment=r:A===E.OU.DEPTH_RENDER_BUFFER||A===E.OU.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=r:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),this._desc.depthStencilTarget=A,x(n,this._desc)}}return(0,c.Z)(e,[{key:"dispose",value:function(){if(this._desc){var e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(E._g.FramebufferObject,this),this._desc=null}}},{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._desc}},{key:"colorTexture",get:function(){var e=this._colorAttachments.get(E.VY.COLOR_ATTACHMENT0);return e&&g(e)?e:null}},{key:"colorAttachment",get:function(){return this._colorAttachments.get(E.VY.COLOR_ATTACHMENT0)}},{key:"depthStencilAttachment",get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}},{key:"depthStencilTexture",get:function(){return this._depthStencilTexture}},{key:"width",get:function(){var e;return null!==(e=this._desc.width)&&void 0!==e?e:0}},{key:"height",get:function(){var e;return null!==(e=this._desc.height)&&void 0!==e?e:0}},{key:"gpuMemoryUsage",get:function(){return(0,a.Z)(this._colorAttachments).reduce((function(e,t){var i=(0,s.Z)(t,2),r=(i[0],i[1]);return e+(0,A.un)(r)}),0)+(0,A.un)(this.depthStencilAttachment)}},{key:"getColorTexture",value:function(e){var t=this._colorAttachments.get(e);return t&&g(t)?t:null}},{key:"attachColorTexture",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.VY.COLOR_ATTACHMENT0;e&&(this._validateColorAttachmentPoint(t),v(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}},{key:"detachColorTexture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.VY.COLOR_ATTACHMENT0,t=this._colorAttachments.get(e);if(g(t)){var i=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),i}}},{key:"setColorTextureTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.VY.COLOR_ATTACHMENT0,i=this._colorAttachments.get(t);g(i)&&this._framebufferTexture2D(i.glName,t,e)}},{key:"attachDepthStencilTexture",value:function(e){if(!(0,l.Wi)(e)){var t=e.descriptor;t.pixelFormat!==E.VI.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==E.Br.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),v(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==E.OU.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=E.OU.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,E.Lu)),this._depthStencilTexture=e}}},{key:"detachDepthStencilTexture",value:function(){var e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,E.Lu)),this._depthStencilTexture=null,e}},{key:"attachDepthStencilBuffer",value:function(e){if(!(0,l.Wi)(e)){var t=e.descriptor;if(t.internalFormat!==E.Tg.DEPTH_STENCIL&&t.internalFormat!==E.Tg.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),x(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===E.Tg.DEPTH_STENCIL?E.OU.DEPTH_STENCIL_RENDER_BUFFER:E.OU.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);var i=this._context.gl,r=this._desc.depthStencilTarget===E.OU.DEPTH_RENDER_BUFFER?i.DEPTH_ATTACHMENT:i.DEPTH_STENCIL_ATTACHMENT;i.framebufferRenderbuffer(E.qi.FRAMEBUFFER,r,i.RENDERBUFFER,e.glName)}this._depthAttachment=e}}},{key:"detachDepthStencilBuffer",value:function(){var e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);var i=this._desc.depthStencilTarget===E.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(E.qi.FRAMEBUFFER,i,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}},{key:"detachAll",value:function(){var e=this;this._colorAttachments.forEach((function(t,i){return e._detachColorAttachment(i)})),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}},{key:"copyToTexture",value:function(e,t,i,r,n,s,a){(e<0||t<0||n<0||s<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");var o=this._desc,h=a.descriptor;a.descriptor.target!==E.No.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(null==(null===o||void 0===o?void 0:o.width)||null==(null===o||void 0===o?void 0:o.height)||null==(null===h||void 0===h?void 0:h.width)||null==(null===h||void 0===h?void 0:h.height)||e+i>o.width||t+r>o.height||n+i>h.width||s+r>h.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");var c=this._context,u=c.bindTexture(a,R.x.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(R.x.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(E.No.TEXTURE_2D,0,n,s,e,t,i,r),c.bindTexture(u,R.x.TEXTURE_UNIT_FOR_UPDATES)}},{key:"readPixels",value:function(e,t,i,r,n,s,a){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),a||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,i,r,n,s,a)}},{key:"readPixelsAsync",value:function(){var e=(0,n.Z)((0,r.Z)().mark((function e(t,i,n,s,a,o,h){var c,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._context.type===d.zO.WEBGL2){e.next=2;break}return e.abrupt("return",((0,f.hZ)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void this.readPixels(t,i,n,s,a,o,h)));case 2:return c=this._context.gl,u=_.f.createPixelPack(this._context,E.l1.STREAM_READ,h.byteLength),this._context.bindBuffer(u),this._context.bindFramebuffer(this),c.readPixels(t,i,n,s,a,o,0),this._context.unbindBuffer(E.w0.PIXEL_PACK_BUFFER),e.next=9,u.getSubDataAsync(h);case 9:u.dispose();case 10:case"end":return e.stop()}}),e,this)})));return function(t,i,r,n,s,a,o){return e.apply(this,arguments)}}()},{key:"resize",value:function(e,t){var i=this._desc;if(i.width!==e||i.height!==t){if(i.width=e,i.height=t,!this._initialized)return this._colorAttachments.forEach((function(i){i&&i.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));this._colorAttachments.forEach((function(i){i&&i.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}},{key:"initializeAndBind",value:function(){var e,t,i,r,n=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E.qi.FRAMEBUFFER,a=this._context.gl;if(this._initialized)a.bindFramebuffer(s,this.glName);else{this._glName&&a.deleteFramebuffer(this._glName);var o=this._context,h=a.createFramebuffer(),c=this._desc,u=null!==(e=c.colorTarget)&&void 0!==e?e:E.Lm.RENDER_BUFFER,l=null!==(t=c.width)&&void 0!==t?t:1,_=null!==(i=c.height)&&void 0!==i?i:1;if(a.bindFramebuffer(s,h),0===this._colorAttachments.size)if(u===E.Lm.TEXTURE||u===E.Lm.CUBEMAP)this._colorAttachments.set(E.VY.COLOR_ATTACHMENT0,function(e,t,i){return new R.x(e,{target:i,pixelFormat:E.VI.RGBA,dataType:E.Br.UNSIGNED_BYTE,samplingMode:E.cw.NEAREST,wrapMode:E.e8.CLAMP_TO_EDGE,width:t.width,height:t.height})}(o,c,this.descriptor.colorTarget===E.Lm.CUBEMAP?E.No.TEXTURE_CUBE_MAP:E.No.TEXTURE_2D));else{var d=new T.r(o,{internalFormat:E.lP.RGBA4,width:l,height:_});this._colorAttachments.set(E.VY.COLOR_ATTACHMENT0,d)}this._colorAttachments.forEach((function(e,t){e&&(g(e)?n._framebufferTexture2D(e.glName,t,N(e),s):a.framebufferRenderbuffer(s,t,a.RENDERBUFFER,e.glName))}));var A=null!==(r=c.depthStencilTarget)&&void 0!==r?r:E.OU.NONE;switch(A){case E.OU.DEPTH_RENDER_BUFFER:case E.OU.DEPTH_STENCIL_RENDER_BUFFER:this._depthAttachment||(this._depthAttachment=new T.r(o,{internalFormat:c.depthStencilTarget===E.OU.DEPTH_RENDER_BUFFER?E.Tg.DEPTH_COMPONENT16:E.Tg.DEPTH_STENCIL,width:l,height:_}));var b=A===E.OU.DEPTH_RENDER_BUFFER?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT;a.framebufferRenderbuffer(s,b,a.RENDERBUFFER,this._depthAttachment.glName);break;case E.OU.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new T.r(o,{internalFormat:E.Tg.STENCIL_INDEX8,width:l,height:_})),a.framebufferRenderbuffer(s,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case E.OU.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){o.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");var m={target:E.No.TEXTURE_2D,pixelFormat:E.VI.DEPTH_STENCIL,dataType:E.Br.UNSIGNED_INT_24_8,samplingMode:E.cw.NEAREST,wrapMode:E.e8.CLAMP_TO_EDGE,width:l,height:_};this._depthStencilTexture=new R.x(o,m)}this._framebufferTexture2D(this._depthStencilTexture.glName,a.DEPTH_STENCIL_ATTACHMENT,N(this._depthStencilTexture),s)}(0,f.hZ)()&&a.checkFramebufferStatus(s)!==a.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=h,this._initialized=!0}}},{key:"_framebufferTexture2D",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E.VY.COLOR_ATTACHMENT0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:E.No.TEXTURE_2D,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:E.qi.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(r,t,i,e,n)}},{key:"_detachColorAttachment",value:function(e){(0,f.hZ)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");var t=this._context.gl,i=this._colorAttachments.get(e);return g(i)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(E.qi.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),i}},{key:"_disposeColorAttachments",value:function(){var e=this;this._colorAttachments.forEach((function(t,i){e._detachColorAttachment(i),t.dispose()})),this._colorAttachments.clear()}},{key:"_disposeDepthStencilAttachments",value:function(){var e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);var t=this._desc.depthStencilTarget===E.OU.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(E.qi.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(E.qi.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}},{key:"_validateColorAttachmentPoint",value:function(t){if(-1===e._MAX_COLOR_ATTACHMENTS){var i=this._context.capabilities.drawBuffers;if(i){var r=this._context.gl;e._MAX_COLOR_ATTACHMENTS=r.getParameter(i.MAX_COLOR_ATTACHMENTS)}else e._MAX_COLOR_ATTACHMENTS=1}var n=t-E.VY.COLOR_ATTACHMENT0;n+1>e._MAX_COLOR_ATTACHMENTS&&u.Z.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject","illegal attachment point for color attachment: ".concat(n+1,". Implementation supports up to ").concat(e._MAX_COLOR_ATTACHMENTS," color attachments"))}}]),e}();function g(e){return null!=e&&"type"in e&&"texture"===e.type}function m(e){return null!=e&&"type"in e&&"renderbuffer"===e.type}function p(e){return g(e)||null!=e&&"pixelFormat"in e}function v(e,t){e.target!==E.No.TEXTURE_2D&&e.target!==E.No.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function x(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function N(e){return e.descriptor.target===E.No.TEXTURE_CUBE_MAP?E.No.TEXTURE_CUBE_MAP_POSITIVE_X:E.No.TEXTURE_2D}b._MAX_COLOR_ATTACHMENTS=-1},15880:function(e,t,i){i.d(t,{r:function(){return h}});var r=i(15671),n=i(43144),s=i(92026),a=i(49800),o=i(8548),h=function(){function e(t,i){(0,r.Z)(this,e),this._context=t,this._desc=i,this.type="renderbuffer",this._context.instanceCounter.increment(o._g.Renderbuffer,this);var n=this._context.gl;this.glName=n.createRenderbuffer(),this._context.bindRenderbuffer(this);var s=i.width,h=i.height,c=i.internalFormat;if(i.multisampled){if(this._context.type!==a.zO.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");n.renderbufferStorageMultisample(n.RENDERBUFFER,this.samples,c,s,h)}else n.renderbufferStorage(n.RENDERBUFFER,c,s,h)}return(0,n.Z)(e,[{key:"descriptor",get:function(){return this._desc}},{key:"samples",get:function(){var e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}},{key:"resize",value:function(e,t){var i=this._desc;if(i.width!==e||i.height!==t){i.width=e,i.height=t;var r=this._context.gl;this._context.bindRenderbuffer(this),i.multisampled?r.renderbufferStorageMultisample(r.RENDERBUFFER,this.samples,i.internalFormat,i.width,i.height):r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}}},{key:"dispose",value:function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(o._g.Renderbuffer,this),this._context=(0,s.wN)(this._context))}}]),e}()},3384:function(e,t,i){i.d(t,{HH:function(){return a},RG:function(){return u},UF:function(){return c},XP:function(){return h},_V:function(){return o},un:function(){return l}});var r=i(37762),n=(i(93169),i(92026)),s=i(8548);function a(e){var t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function o(e,t){return e.vertexBuffers[t].size/function(e){return e[0].stride}(e.layout[t])}function h(e,t,i,n){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=e.gl,o=e.capabilities.instancing;e.bindBuffer(i);var h,c=(0,r.Z)(n);try{for(c.s();!(h=c.n()).done;){var u=h.value,l=t.get(u.name);void 0===l&&console.error("There is no location for vertex attribute '".concat(u.name,"' defined."));var _=s*u.stride;if(u.count<=4)a.vertexAttribPointer(l,u.count,u.type,u.normalized,u.stride,u.offset+_),a.enableVertexAttribArray(l),u.divisor>0&&o&&o.vertexAttribDivisor(l,u.divisor);else if(9===u.count)for(var f=0;f<3;f++)a.vertexAttribPointer(l+f,3,u.type,u.normalized,u.stride,u.offset+12*f+_),a.enableVertexAttribArray(l+f),u.divisor>0&&o&&o.vertexAttribDivisor(l+f,u.divisor);else if(16===u.count)for(var d=0;d<4;d++)a.vertexAttribPointer(l+d,4,u.type,u.normalized,u.stride,u.offset+16*d+_),a.enableVertexAttribArray(l+d),u.divisor>0&&o&&o.vertexAttribDivisor(l+d,u.divisor);else console.error("Unsupported vertex attribute element count: "+u.count)}}catch(E){c.e(E)}finally{c.f()}}function c(e,t,i,n){var a=e.gl,o=e.capabilities.instancing;e.bindBuffer(i);var h,c=(0,r.Z)(n);try{for(c.s();!(h=c.n()).done;){var u=h.value,l=t.get(u.name);if(u.count<=4)a.disableVertexAttribArray(l),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(l,0);else if(9===u.count)for(var _=0;_<3;_++)a.disableVertexAttribArray(l+_),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(l+_,0);else if(16===u.count)for(var f=0;f<4;f++)a.disableVertexAttribArray(l+f),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(l+f,0);else console.error("Unsupported vertex attribute element count: "+u.count)}}catch(d){c.e(d)}finally{c.f()}e.unbindBuffer(s.w0.ARRAY_BUFFER)}function u(e){switch(e){case s.VI.ALPHA:case s.VI.LUMINANCE:case s.VI.RED:case s.VI.RED_INTEGER:case s.lP.R8:case s.lP.R8I:case s.lP.R8UI:case s.lP.R8_SNORM:case s.Tg.STENCIL_INDEX8:return 1;case s.VI.LUMINANCE_ALPHA:case s.VI.RG:case s.VI.RG_INTEGER:case s.lP.RGBA4:case s.lP.R16F:case s.lP.R16I:case s.lP.R16UI:case s.lP.RG8:case s.lP.RG8I:case s.lP.RG8UI:case s.lP.RG8_SNORM:case s.lP.RGB565:case s.lP.RGB5_A1:case s.Tg.DEPTH_COMPONENT16:return 2;case s.VI.DEPTH_COMPONENT:case s.VI.RGB:case s.VI.RGB_INTEGER:case s.lP.RGB8:case s.lP.RGB8I:case s.lP.RGB8UI:case s.lP.RGB8_SNORM:case s.lP.SRGB8:case s.Tg.DEPTH_COMPONENT24:return 3;case s.VI.DEPTH_STENCIL:case s.VI.RGBA:case s.VI.RGBA_INTEGER:case s.lP.RGBA8:case s.lP.R32F:case s.lP.R11F_G11F_B10F:case s.lP.RG16F:case s.lP.R32I:case s.lP.R32UI:case s.lP.RG16I:case s.lP.RG16UI:case s.lP.RGBA8I:case s.lP.RGBA8UI:case s.lP.RGBA8_SNORM:case s.lP.SRGB8_ALPHA8:case s.lP.RGB9_E5:case s.lP.RGB10_A2UI:case s.lP.RGB10_A2:case s.Tg.DEPTH_STENCIL:case s.Tg.DEPTH_COMPONENT32F:case s.Tg.DEPTH24_STENCIL8:return 4;case s.Tg.DEPTH32F_STENCIL8:return 5;case s.lP.RGB16F:case s.lP.RGB16I:case s.lP.RGB16UI:return 6;case s.lP.RG32F:case s.lP.RG32I:case s.lP.RG32UI:case s.lP.RGBA16F:case s.lP.RGBA16I:case s.lP.RGBA16UI:return 8;case s.lP.RGB32F:case s.lP.RGB32I:case s.lP.RGB32UI:return 12;case s.lP.RGBA32F:case s.lP.RGBA32I:case s.lP.RGBA32UI:return 16;case s.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:case s.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case s.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:case s.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case s.q_.COMPRESSED_R11_EAC:case s.q_.COMPRESSED_SIGNED_R11_EAC:case s.q_.COMPRESSED_RGB8_ETC2:case s.q_.COMPRESSED_SRGB8_ETC2:case s.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case s.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case s.q_.COMPRESSED_RG11_EAC:case s.q_.COMPRESSED_SIGNED_RG11_EAC:case s.q_.COMPRESSED_RGBA8_ETC2_EAC:case s.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function l(e){if((0,n.Wi)(e))return 0;if("descriptor"in e)return e.glName?l(e.descriptor):0;var t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;var i="hasMipmap"in e&&e.hasMipmap?1.3:1,r=e.width*e.height;return u(t)*r*i}},45412:function(e,t,i){i.d(t,{U:function(){return u}});var r=i(15671),n=i(43144),s=i(32718),a=i(92026),o=i(8548),h=i(3384),c=s.Z.getLogger("esri.views.webgl.VertexArrayObject"),u=function(){function e(t,i,n,s){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;(0,r.Z)(this,e),this._context=t,this._locations=i,this._layout=n,this._buffers=s,this._indexBuffer=a,this._glName=null,this._initialized=!1,t.instanceCounter.increment(o._g.VertexArrayObject,this)}return(0,n.Z)(e,[{key:"glName",get:function(){return this._glName}},{key:"context",get:function(){return this._context}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){var e=this;return Object.keys(this._buffers).reduce((function(t,i){return t+e._buffers[i].size}),(0,a.pC)(this._indexBuffer)?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}},{key:"dispose",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this._context){if(this._glName){var t,i,r=null===(t=this._context)||void 0===t||null===(i=t.capabilities)||void 0===i?void 0:i.vao;r?(r.deleteVertexArray(this._glName),this._glName=null):c.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var n in this._buffers){var s;null!==(s=this._buffers[n])&&void 0!==s&&s.dispose(),delete this._buffers[n]}this._indexBuffer=(0,a.M2)(this._indexBuffer)}this._context.instanceCounter.decrement(o._g.VertexArrayObject,this),this._context=(0,a.wN)(this._context)}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&c.warn("Leaked WebGL VAO")}},{key:"initialize",value:function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}}},{key:"bind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}},{key:"_bindLayout",value:function(){var e=this._buffers,t=this._layout,i=this._indexBuffer;e||c.error("Vertex buffer dictionary is empty!");var r=this._context.gl;for(var n in e){var s=e[n];s||c.error("Vertex buffer is uninitialized!");var o=t[n];o||c.error("Vertex element descriptor is empty!"),(0,h.XP)(this._context,this._locations,s,o)}(0,a.pC)(i)&&(this._context.capabilities.vao?r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}},{key:"unbind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}},{key:"_unbindLayout",value:function(){var e=this._buffers,t=this._layout;for(var i in e||c.error("Vertex buffer dictionary is empty!"),e){var r=e[i];r||c.error("Vertex buffer is uninitialized!");var n=t[i];(0,h.UF)(this._context,this._locations,r,n)}(0,a.pC)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}]),e}()}}]);
//# sourceMappingURL=2029.74b7b764.chunk.js.map