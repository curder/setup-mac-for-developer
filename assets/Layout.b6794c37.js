import{r as R,o as n,c,b as k,f as x,i as I,j as p,k as de,h as e,F as D,l as A,m as w,a as g,t as T,n as K,p as X,q as C,w as B,s as ie,v as y,d as U,x as q,y as xe,z as Y,A as J,B as V,C as ve,D as pe,E as P,u as he,g as M,T as _e,G as O,H as Ce,I as j,J as G,K as Te,L as Se,M as Q,N as fe,O as me,e as Be,P as be,Q as Me,R as W,S as Z,U as De,V as Ne,W as Ee}from"./app.cfd636e7.js";import{_ as Ie}from"./plugin-vue_export-helper.21dcd24c.js";const Pe=i=>/^mailto:/.test(i),Re=i=>/^tel:/.test(i),Ae={},He={class:"theme-default-content custom"};function Oe(i,a){const t=R("Content");return n(),c("div",He,[k(t)])}var ze=Ie(Ae,[["render",Oe]]);const Fe={key:0,class:"features"},We=x({setup(i){const a=I(),t=p(()=>de(a.value.features)?a.value.features:[]);return(u,o)=>e(t).length?(n(),c("div",Fe,[(n(!0),c(D,null,A(e(t),_=>(n(),c("div",{key:_.title,class:"feature"},[g("h2",null,T(_.title),1),g("p",null,T(_.details),1)]))),128))])):w("",!0)}}),Ue=["innerHTML"],Ve=["textContent"],je=x({setup(i){const a=I(),t=p(()=>a.value.footer),u=p(()=>a.value.footerHtml);return(o,_)=>e(t)?(n(),c(D,{key:0},[e(u)?(n(),c("div",{key:0,class:"footer",innerHTML:e(t)},null,8,Ue)):(n(),c("div",{key:1,class:"footer",textContent:T(e(t))},null,8,Ve))],64)):w("",!0)}}),Ge=["href","rel","target","aria-label"],Ke=x({inheritAttrs:!1}),E=x({...Ke,props:{item:{type:Object,required:!0}},setup(i){const a=i,t=K(),u=xe(),{item:o}=X(a),_=p(()=>q(o.value.link)),f=p(()=>Pe(o.value.link)||Re(o.value.link)),h=p(()=>{if(!f.value){if(o.value.target)return o.value.target;if(_.value)return"_blank"}}),s=p(()=>h.value==="_blank"),r=p(()=>!_.value&&!f.value&&!s.value),l=p(()=>{if(!f.value){if(o.value.rel)return o.value.rel;if(s.value)return"noopener noreferrer"}}),d=p(()=>o.value.ariaLabel||o.value.text),v=p(()=>{const L=Object.keys(u.value.locales);return L.length?!L.some(m=>m===o.value.link):o.value.link!=="/"}),b=p(()=>v.value?t.path.startsWith(o.value.link):!1),$=p(()=>r.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):b.value:!1);return(L,m)=>{const S=R("RouterLink"),N=R("ExternalLinkIcon");return e(r)?(n(),C(S,ie({key:0,class:{"router-link-active":e($)},to:e(o).link,"aria-label":e(d)},L.$attrs),{default:B(()=>[y(L.$slots,"before"),U(" "+T(e(o).text)+" ",1),y(L.$slots,"after")]),_:3},16,["class","to","aria-label"])):(n(),c("a",ie({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(h),"aria-label":e(d)},L.$attrs),[y(L.$slots,"before"),U(" "+T(e(o).text)+" ",1),e(s)?(n(),C(N,{key:0})):w("",!0),y(L.$slots,"after")],16,Ge))}}}),qe={class:"hero"},Xe={key:0,id:"main-title"},Ye={key:1,class:"description"},Je={key:2,class:"actions"},Qe=x({setup(i){const a=I(),t=Y(),u=J(),o=p(()=>u.value&&a.value.heroImageDark!==void 0?a.value.heroImageDark:a.value.heroImage),_=p(()=>a.value.heroText===null?null:a.value.heroText||t.value.title||"Hello"),f=p(()=>a.value.heroAlt||_.value||"hero"),h=p(()=>a.value.tagline===null?null:a.value.tagline||t.value.description||"Welcome to your VuePress site"),s=p(()=>de(a.value.actions)?a.value.actions.map(({text:l,link:d,type:v="primary"})=>({text:l,link:d,type:v})):[]),r=()=>{if(!o.value)return null;const l=V("img",{src:ve(o.value),alt:f.value});return a.value.heroImageDark===void 0?l:V(pe,l)};return(l,d)=>(n(),c("header",qe,[k(r),e(_)?(n(),c("h1",Xe,T(e(_)),1)):w("",!0),e(h)?(n(),c("p",Ye,T(e(h)),1)):w("",!0),e(s).length?(n(),c("p",Je,[(n(!0),c(D,null,A(e(s),v=>(n(),C(E,{key:v.text,class:P(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):w("",!0)]))}}),Ze={class:"home"},et=x({setup(i){return(a,t)=>(n(),c("main",Ze,[k(Qe),k(We),k(ze),k(je)]))}}),tt=x({setup(i){const a=he(),t=Y(),u=M(),o=J(),_=p(()=>u.value.home||a.value),f=p(()=>t.value.title),h=p(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),s=()=>{if(!h.value)return null;const r=V("img",{class:"logo",src:ve(h.value),alt:f.value});return u.value.logoDark===void 0?r:V(pe,r)};return(r,l)=>{const d=R("RouterLink");return n(),C(d,{to:e(_)},{default:B(()=>[k(s),e(f)?(n(),c("span",{key:0,class:P(["site-name",{"can-hide":e(h)}])},T(e(f)),3)):w("",!0)]),_:1},8,["to"])}}}),ge=x({setup(i){const a=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(n(),C(_e,{name:"dropdown",onEnter:a,onAfterEnter:t,onBeforeLeave:a},{default:B(()=>[y(u.$slots,"default")]),_:3}))}}),nt=["aria-label"],at={class:"title"},st=g("span",{class:"arrow down"},null,-1),ot=["aria-label"],rt={class:"title"},lt={class:"navbar-dropdown"},ut={class:"navbar-dropdown-subtitle"},it={key:1},ct={class:"navbar-dropdown-subitem-wrapper"},dt=x({props:{item:{type:Object,required:!0}},setup(i){const a=i,{item:t}=X(a),u=p(()=>t.value.ariaLabel||t.value.text),o=O(!1),_=K();Ce(()=>_.path,()=>{o.value=!1});const f=s=>{s.detail===0?o.value=!o.value:o.value=!1},h=(s,r)=>r[r.length-1]===s;return(s,r)=>(n(),c("div",{class:P(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:f},[g("span",at,T(e(t).text),1),st],8,nt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:r[0]||(r[0]=l=>o.value=!o.value)},[g("span",rt,T(e(t).text),1),g("span",{class:P(["arrow",o.value?"down":"right"])},null,2)],8,ot),k(ge,null,{default:B(()=>[j(g("ul",lt,[(n(!0),c(D,null,A(e(t).children,l=>(n(),c("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(n(),c(D,{key:0},[g("h4",ut,[l.link?(n(),C(E,{key:0,item:l,onFocusout:d=>h(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(n(),c("span",it,T(l.text),1))]),g("ul",ct,[(n(!0),c(D,null,A(l.children,d=>(n(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[k(E,{item:d,onFocusout:v=>h(d,l.children)&&h(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),C(E,{key:1,item:l,onFocusout:d=>h(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,o.value]])]),_:1})],2))}}),ce=i=>decodeURI(i).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),vt=(i,a)=>{if(a.hash===i)return!0;const t=ce(a.path),u=ce(i);return t===u},ke=(i,a)=>i.link&&vt(i.link,a)?!0:i.children?i.children.some(t=>ke(t,a)):!1,$e=i=>!q(i)||/github\.com/.test(i)?"GitHub":/bitbucket\.org/.test(i)?"Bitbucket":/gitlab\.com/.test(i)?"GitLab":/gitee\.com/.test(i)?"Gitee":null,pt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},ht=({docsRepo:i,editLinkPattern:a})=>{if(a)return a;const t=$e(i);return t!==null?pt[t]:null},_t=({docsRepo:i,docsBranch:a,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const _=ht({docsRepo:i,editLinkPattern:o});return _?_.replace(/:repo/,q(i)?i:`https://github.com/${i}`).replace(/:branch/,a).replace(/:path/,Te(`${Se(t)}/${u}`)):null},ft={key:0,class:"navbar-items"},Le=x({setup(i){const a=()=>{const r=Q(),l=he(),d=Y(),v=M();return p(()=>{var S,N;const b=Object.keys(d.value.locales);if(b.length<2)return[];const $=r.currentRoute.value.path,L=r.currentRoute.value.fullPath;return[{text:(S=v.value.selectLanguageText)!=null?S:"unknown language",ariaLabel:(N=v.value.selectLanguageAriaLabel)!=null?N:"unkown language",children:b.map(H=>{var ne,ae,se,oe,re,le;const z=(ae=(ne=d.value.locales)==null?void 0:ne[H])!=null?ae:{},ee=(oe=(se=v.value.locales)==null?void 0:se[H])!=null?oe:{},te=`${z.lang}`,ye=(re=ee.selectLanguageName)!=null?re:te;let F;if(te===d.value.lang)F=L;else{const ue=$.replace(l.value,H);r.getRoutes().some(we=>we.path===ue)?F=ue:F=(le=ee.home)!=null?le:H}return{text:ye,link:F}})}]})},t=()=>{const r=M(),l=p(()=>r.value.repo),d=p(()=>l.value?$e(l.value):null),v=p(()=>l.value&&!q(l.value)?`https://github.com/${l.value}`:l.value),b=p(()=>v.value?r.value.repoLabel?r.value.repoLabel:d.value===null?"Source":d.value:null);return p(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},u=r=>fe(r)?me(r):r.children?{...r,children:r.children.map(u)}:r,_=(()=>{const r=M();return p(()=>(r.value.navbar||[]).map(u))})(),f=a(),h=t(),s=p(()=>[..._.value,...f.value,...h.value]);return(r,l)=>e(s).length?(n(),c("nav",ft,[(n(!0),c(D,null,A(e(s),d=>(n(),c("div",{key:d.text,class:"navbar-item"},[d.children?(n(),C(dt,{key:0,item:d},null,8,["item"])):(n(),C(E,{key:1,item:d},null,8,["item"]))]))),128))])):w("",!0)}}),mt=["title"],bt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},gt=Be('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),kt=[gt],$t={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Lt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),yt=[Lt],wt=x({setup(i){const a=M(),t=J(),u=()=>{t.value=!t.value};return(o,_)=>(n(),c("button",{class:"toggle-dark-button",title:e(a).toggleDarkMode,onClick:u},[j((n(),c("svg",bt,kt,512)),[[G,!e(t)]]),j((n(),c("svg",$t,yt,512)),[[G,e(t)]])],8,mt))}}),xt=["title"],Ct=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Tt=[Ct],St=x({emits:["toggle"],setup(i){const a=M();return(t,u)=>(n(),c("div",{class:"toggle-sidebar-button",title:e(a).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},Tt,8,xt))}}),Bt=x({emits:["toggle-sidebar"],setup(i){const a=M(),t=O(null),u=O(null),o=O(0),_=p(()=>o.value?{maxWidth:o.value+"px"}:{}),f=p(()=>a.value.darkMode);be(()=>{const r=h(t.value,"paddingLeft")+h(t.value,"paddingRight"),l=()=>{var d;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-r-(((d=u.value)==null?void 0:d.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)});function h(s,r){var v,b,$;const l=($=(b=(v=s==null?void 0:s.ownerDocument)==null?void 0:v.defaultView)==null?void 0:b.getComputedStyle(s,null))==null?void 0:$[r],d=Number.parseInt(l,10);return Number.isNaN(d)?0:d}return(s,r)=>{const l=R("NavbarSearch");return n(),c("header",{ref_key:"navbar",ref:t,class:"navbar"},[k(St,{onToggle:r[0]||(r[0]=d=>s.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[k(tt)],512),g("div",{class:"navbar-items-wrapper",style:Me(e(_))},[y(s.$slots,"before"),k(Le,{class:"can-hide"}),y(s.$slots,"after"),e(f)?(n(),C(wt,{key:0})):w("",!0),k(l)],4)],512)}}}),Mt={class:"page-meta"},Dt={key:0,class:"meta-item edit-link"},Nt={key:1,class:"meta-item last-updated"},Et={class:"meta-item-label"},It={class:"meta-item-info"},Pt={key:2,class:"meta-item contributors"},Rt={class:"meta-item-label"},At={class:"meta-item-info"},Ht=["title"],Ot=U(", "),zt=x({setup(i){const a=()=>{const s=M(),r=W(),l=I();return p(()=>{var N,H,z;if(!((H=(N=l.value.editLink)!=null?N:s.value.editLink)!=null?H:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:$="main",docsDir:L="",editLinkText:m}=s.value;if(!b)return null;const S=_t({docsRepo:b,docsBranch:$,docsDir:L,filePathRelative:r.value.filePathRelative,editLinkPattern:(z=l.value.editLinkPattern)!=null?z:s.value.editLinkPattern});return S?{text:m!=null?m:"Edit this page",link:S}:null})},t=()=>{const s=M(),r=W(),l=I();return p(()=>{var b,$,L,m;return!(($=(b=l.value.lastUpdated)!=null?b:s.value.lastUpdated)!=null?$:!0)||!((L=r.value.git)!=null&&L.updatedTime)?null:new Date((m=r.value.git)==null?void 0:m.updatedTime).toLocaleString()})},u=()=>{const s=M(),r=W(),l=I();return p(()=>{var v,b,$,L;return((b=(v=l.value.contributors)!=null?v:s.value.contributors)!=null?b:!0)&&(L=($=r.value.git)==null?void 0:$.contributors)!=null?L:null})},o=M(),_=a(),f=t(),h=u();return(s,r)=>{const l=R("ClientOnly");return n(),c("footer",Mt,[e(_)?(n(),c("div",Dt,[k(E,{class:"meta-item-label",item:e(_)},null,8,["item"])])):w("",!0),e(f)?(n(),c("div",Nt,[g("span",Et,T(e(o).lastUpdatedText)+": ",1),k(l,null,{default:B(()=>[g("span",It,T(e(f)),1)]),_:1})])):w("",!0),e(h)&&e(h).length?(n(),c("div",Pt,[g("span",Rt,T(e(o).contributorsText)+": ",1),g("span",At,[(n(!0),c(D,null,A(e(h),(d,v)=>(n(),c(D,{key:v},[g("span",{class:"contributor",title:`email: ${d.email}`},T(d.name),9,Ht),v!==e(h).length-1?(n(),c(D,{key:0},[Ot],64)):w("",!0)],64))),128))])])):w("",!0)])}}}),Ft={key:0,class:"page-nav"},Wt={class:"inner"},Ut={key:0,class:"prev"},Vt={key:1,class:"next"},jt=x({setup(i){const a=s=>s===!1?null:fe(s)?me(s):De(s)?s:!1,t=(s,r,l)=>{const d=s.findIndex(v=>v.link===r);if(d!==-1){const v=s[d+l];return v!=null&&v.link?v:null}for(const v of s)if(v.children){const b=t(v.children,r,l);if(b)return b}return null},u=I(),o=Z(),_=K(),f=p(()=>{const s=a(u.value.prev);return s!==!1?s:t(o.value,_.path,-1)}),h=p(()=>{const s=a(u.value.next);return s!==!1?s:t(o.value,_.path,1)});return(s,r)=>e(f)||e(h)?(n(),c("nav",Ft,[g("p",Wt,[e(f)?(n(),c("span",Ut,[k(E,{item:e(f)},null,8,["item"])])):w("",!0),e(h)?(n(),c("span",Vt,[k(E,{item:e(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}}),Gt={class:"page"},Kt={class:"theme-default-content"},qt=x({setup(i){return(a,t)=>{const u=R("Content");return n(),c("main",Gt,[y(a.$slots,"top"),g("div",Kt,[k(u)]),k(zt),k(jt),y(a.$slots,"bottom")])}}}),Xt={class:"sidebar-item-children"},Yt=x({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(i){const a=i,{item:t,depth:u}=X(a),o=K(),_=Q(),f=p(()=>ke(t.value,o)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:t.value.collapsible})),s=O(!0),r=O(void 0);return t.value.collapsible&&(s.value=f.value,r.value=()=>{s.value=!s.value},_.afterEach(()=>{s.value=f.value})),(l,d)=>{var b;const v=R("SidebarItem",!0);return n(),c("li",null,[e(t).link?(n(),C(E,{key:0,class:P(e(h)),item:e(t)},null,8,["class","item"])):(n(),c("p",{key:1,class:P(e(h)),onClick:d[0]||(d[0]=(...$)=>r.value&&r.value(...$))},[U(T(e(t).text)+" ",1),e(t).collapsible?(n(),c("span",{key:0,class:P(["arrow",s.value?"down":"right"])},null,2)):w("",!0)],2)),(b=e(t).children)!=null&&b.length?(n(),C(ge,{key:2},{default:B(()=>[j(g("ul",Xt,[(n(!0),c(D,null,A(e(t).children,$=>(n(),C(v,{key:`${e(u)}${$.text}${$.link}`,item:$,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[G,s.value]])]),_:1})):w("",!0)])}}}),Jt={key:0,class:"sidebar-items"},Qt=x({setup(i){const a=Z();return(t,u)=>e(a).length?(n(),c("ul",Jt,[(n(!0),c(D,null,A(e(a),o=>(n(),C(Yt,{key:o.link||o.text,item:o},null,8,["item"]))),128))])):w("",!0)}}),Zt={class:"sidebar"},en=x({setup(i){return(a,t)=>(n(),c("aside",Zt,[k(Le),y(a.$slots,"top"),k(Qt),y(a.$slots,"bottom")]))}}),an=x({setup(i){const a=W(),t=I(),u=M(),o=p(()=>t.value.navbar!==!1&&u.value.navbar!==!1),_=Z(),f=O(!1),h=m=>{f.value=typeof m=="boolean"?m:!f.value},s={x:0,y:0},r=m=>{s.x=m.changedTouches[0].clientX,s.y=m.changedTouches[0].clientY},l=m=>{const S=m.changedTouches[0].clientX-s.x,N=m.changedTouches[0].clientY-s.y;Math.abs(S)>Math.abs(N)&&Math.abs(S)>40&&(S>0&&s.x<=80?h(!0):h(!1))},d=p(()=>[{"no-navbar":!o.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},t.value.pageClass]);let v;be(()=>{v=Q().afterEach(()=>{h(!1)})}),Ne(()=>{v()});const b=Ee(),$=b.resolve,L=b.pending;return(m,S)=>(n(),c("div",{class:P(["theme-container",e(d)]),onTouchstart:r,onTouchend:l},[y(m.$slots,"navbar",{},()=>[e(o)?(n(),C(Bt,{key:0,onToggleSidebar:h},{before:B(()=>[y(m.$slots,"navbar-before")]),after:B(()=>[y(m.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:S[0]||(S[0]=N=>h(!1))}),y(m.$slots,"sidebar",{},()=>[k(en,null,{top:B(()=>[y(m.$slots,"sidebar-top")]),bottom:B(()=>[y(m.$slots,"sidebar-bottom")]),_:3})]),y(m.$slots,"page",{},()=>[e(t).home?(n(),C(et,{key:0})):(n(),C(_e,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e($),onBeforeLeave:e(L)},{default:B(()=>[(n(),C(qt,{key:e(a).path},{top:B(()=>[y(m.$slots,"page-top")]),bottom:B(()=>[y(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});export{an as default};
