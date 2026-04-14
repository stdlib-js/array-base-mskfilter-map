"use strict";var q=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var P=q(function(B,m){
var h=require('@stdlib/array-base-resolve-getter/dist');function G(a,e,s,v){var c,i,o,r;for(c=h(a),i=h(e),o=[],r=0;r<a.length;r++)i(e,r)&&o.push(s.call(v,c(a,r),r,a));return o}m.exports=G
});var j=q(function(C,y){
var f=require('@stdlib/array-base-arraylike2object/dist');function M(a,e,s,v,c,i,o){var r,t;for(r=c,t=0;t<a.length;t++)e[t]&&(s[r]=i.call(o,a[t],t,a),r+=v);return s}function O(a,e,s,v,c,i,o){var r,t,n,g,d,p,u,l;for(r=a.data,t=e.data,n=s.data,g=a.accessors[0],d=e.accessors[0],p=s.accessors[1],u=c,l=0;l<r.length;l++)d(t,l)&&(p(n,u,i.call(o,g(r,l),l,r)),u+=v);return n}function R(a,e,s,v,c,i,o){var r,t,n;return r=f(a),t=f(e),n=f(s),r.accessorProtocol||t.accessorProtocol||n.accessorProtocol?(O(r,t,n,v,c,i,o),s):(M(a,e,s,v,c,i,o),s)}y.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),w=j();b(x,"assign",w);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
