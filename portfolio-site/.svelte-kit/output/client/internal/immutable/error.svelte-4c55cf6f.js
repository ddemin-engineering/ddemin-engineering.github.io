import{S as y,i as z,s as A,e as E,t as v,c as d,a as b,h as P,d as o,g as n,H as R,j as H,k as N,l as q,m as S,n as C}from"./chunks/index-d08d1e46.js";function h(r){let l,t=r[1].frame+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(o)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].frame+"")&&H(a,t)},d(f){f&&o(l)}}}function w(r){let l,t=r[1].stack+"",a;return{c(){l=E("pre"),a=v(t)},l(f){l=d(f,"PRE",{});var s=b(l);a=P(s,t),s.forEach(o)},m(f,s){n(f,l,s),R(l,a)},p(f,s){s&2&&t!==(t=f[1].stack+"")&&H(a,t)},d(f){f&&o(l)}}}function B(r){let l,t,a,f,s=r[1].message+"",c,k,u,p,i=r[1].frame&&h(r),_=r[1].stack&&w(r);return{c(){l=E("h1"),t=v(r[0]),a=N(),f=E("pre"),c=v(s),k=N(),i&&i.c(),u=N(),_&&_.c(),p=q()},l(e){l=d(e,"H1",{});var m=b(l);t=P(m,r[0]),m.forEach(o),a=S(e),f=d(e,"PRE",{});var j=b(f);c=P(j,s),j.forEach(o),k=S(e),i&&i.l(e),u=S(e),_&&_.l(e),p=q()},m(e,m){n(e,l,m),R(l,t),n(e,a,m),n(e,f,m),R(f,c),n(e,k,m),i&&i.m(e,m),n(e,u,m),_&&_.m(e,m),n(e,p,m)},p(e,[m]){m&1&&H(t,e[0]),m&2&&s!==(s=e[1].message+"")&&H(c,s),e[1].frame?i?i.p(e,m):(i=h(e),i.c(),i.m(u.parentNode,u)):i&&(i.d(1),i=null),e[1].stack?_?_.p(e,m):(_=w(e),_.c(),_.m(p.parentNode,p)):_&&(_.d(1),_=null)},i:C,o:C,d(e){e&&o(l),e&&o(a),e&&o(f),e&&o(k),i&&i.d(e),e&&o(u),_&&_.d(e),e&&o(p)}}}function G({error:r,status:l}){return{props:{error:r,status:l}}}function D(r,l,t){let{status:a}=l,{error:f}=l;return r.$$set=s=>{"status"in s&&t(0,a=s.status),"error"in s&&t(1,f=s.error)},[a,f]}class I extends y{constructor(l){super(),z(this,l,D,B,A,{status:0,error:1})}}export{I as default,G as load};
