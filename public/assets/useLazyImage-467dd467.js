import{r,x as u,j as n,S as $}from"./index-a2d7adc7.js";const x="_spinner_18e7i_36",w="_image_18e7i_12",N="_loaded_18e7i_61",h="_visible_18e7i_61",s={"image-wrapper":"_image-wrapper_18e7i_12","loading-img":"_loading-img_18e7i_15","loading-image":"_loading-image_18e7i_1","spinner-wrapper":"_spinner-wrapper_18e7i_36",spinner:x,image:w,loaded:N,visible:h},R=new Set,p=(i,t)=>{const e=new Image;e.src=i,R.add(e),t&&(e.onload=t)},z=(i,t,e={wrapperClassName:"",imageClassName:"",loadingImageClassName:"",size:"large",defaultImageShouldLoad:!1})=>{const[f,_]=r.useState(!1),[l,v]=r.useState(e.defaultImageShouldLoad??!1),c=`${u}/get-image?id=${i}&size=small`,g=`${u}/get-image?id=${i}&size=${e.size??"large"}`,a=r.useRef(null),m=r.useRef(!1),o=r.useRef(new IntersectionObserver(([b])=>{v(b.isIntersecting)},{root:null,rootMargin:"0px",threshold:.1}));r.useEffect(()=>{m.current||(p(c),l&&(p(g,()=>{_(!0)}),m.current=!0))},[i,l]),r.useEffect(()=>(a.current&&o.current.observe(a.current),()=>{a.current&&o.current.unobserve(a.current)}),[]);const I=()=>{a.current&&(o.current.unobserve(a.current),o.current.observe(a.current))};let d=n.jsx("img",{alt:t,src:g,loading:"lazy",className:`${e.imageClassName} ${s.image} ${l?s.visible:""} ${f?s.loaded:""}`});return!l&&!m.current&&(d=null),[n.jsxs("div",{ref:a,className:`${e.wrapperClassName} ${s["image-wrapper"]}`,children:[n.jsx("div",{className:`${s["loading-img"]} ${e.loadingImageClassName}`,children:n.jsx("img",{src:c,alt:t})}),n.jsx("div",{className:s["spinner-wrapper"],children:n.jsx($,{className:s.spinner,variant:"primary",animation:"border"})}),d]}),I]};export{z as u};
