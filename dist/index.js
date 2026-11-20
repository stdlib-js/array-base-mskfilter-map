"use strict";var q=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var P=q(function(B,m){
var h=require('@stdlib/array-base-resolve-getter/dist');function G(a,e,t,v){var c,i,o,r;for(c=h(a),i=h(e),o=[],r=0;r<a.length;r++)i(e,r)&&o.push(t.call(v,c(a,r),r,a));return o}m.exports=G
});var j=q(function(C,y){
var f=require('@stdlib/array-base-arraylike2object/dist');function M(a,e,t,v,c,i,o){var r,s;for(r=c,s=0;s<a.length;s++)e[s]&&(t[r]=i.call(o,a[s],s,a),r+=v);return t}function O(a,e,t,v,c,i,o){var r,s,n,g,d,p,u,l;for(r=a.data,s=e.data,n=t.data,g=a.accessors[0],d=e.accessors[0],p=t.accessors[1],u=c,l=0;l<r.length;l++)d(s,l)&&(p(n,u,i.call(o,g(r,l),l,r)),u+=v);return n}function R(a,e,t,v,c,i,o){var r,s,n;return r=f(a),s=f(e),n=f(t),r.accessorProtocol||s.accessorProtocol||n.accessorProtocol?(O(r,s,n,v,c,i,o),t):(M(a,e,t,v,c,i,o),t)}y.exports=R
});var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=P(),w=j();b(x,"assign",w);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
