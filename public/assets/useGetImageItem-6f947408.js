import{y as I,r as t,x as p}from"./index-602cb982.js";import{g}from"./token-f48d968b.js";import{u as d}from"./useDispatch-c8a5dc75.js";function x(r){const a=I(e=>e.imageItems).find(e=>e.id===r),[u,o]=t.useState(!1),[c,i]=t.useState(a??null),n=t.useRef(!1),m=d();async function f(){const e=await fetch(`${p}/get?id=${r}`,{method:"GET",headers:{Authorization:g()}});if(e.status>299){o(!0);return}const s=await e.json();if(!s){o(!0);return}m({type:"ADD_IMAGE_ITEM",payload:s}),i(s)}return t.useEffect(()=>{n.current||a||(n.current=!0,f())},[]),{isError:u,imageItem:c}}export{x as u};