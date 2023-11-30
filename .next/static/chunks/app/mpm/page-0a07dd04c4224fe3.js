(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[562],{5982:function(e,t,a){Promise.resolve().then(a.bind(a,9806))},9806:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var s=a(7437),r=a(5887),i=a(2265),n=a(6701),l=a(5278);function o(){let[e,t]=(0,i.useState)(),[a,o]=(0,i.useState)(0),[c,m]=(0,i.useState)({intro:"",intro2:"","3dsim":"","3dcomp":""}),[x,d]=(0,i.useState)(new Float32Array(129e3)),u=(0,i.useRef)(),p=(0,i.useRef)(),h=(0,i.useRef)(),j=(0,i.useRef)();return(0,i.useEffect)(()=>{let e=async()=>{let e=await (await fetch("/3d.json")).json(),a=await (await fetch("mpm_text.json")).json();m(a),t(e),console.log("data fetched"),u.current.geometry.attributes.position.array=new Float32Array(e[Object.keys(e)[0]].data),u.current.geometry.attributes.position.needsUpdate=!0};e()},[]),(0,s.jsxs)("div",{className:"w-full h-full py-20 px-5 justify-center space-y-5",children:[(0,s.jsxs)("div",{className:"flex justify-center flex-col",children:[(0,s.jsx)("h1",{className:"text-4xl text-center mx-auto pb-10",children:"MPM modelling of subaerial and underwater landslides"}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-center text-xl",children:c.intro}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("h1",{className:"mx-auto w-4/6 text-2xl underline",children:"3D asymmetric simulation"}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-lg font-bold",children:"Interactive simulation results"}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-lg pt-4",children:c["3dsim"]})]}),(0,s.jsxs)("div",{className:"w-4/6 mx-auto outline outline-1 p-3",children:[(0,s.jsx)("input",{type:"range",className:"transparent inline-block h-1.5 w-60 cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200",min:"0",max:"120",step:"4",defaultValue:0,onChange:t=>{let{target:{value:a}}=t;u.current.geometry.attributes.position.array=new Float32Array(e[a.toString()].data),u.current.geometry.attributes.position.needsUpdate=!0,o(a)}}),(0,s.jsxs)("p",{className:"inline-block px-5",children:["Elapsed time: ",Math.round(1e3*a/120)," ms"]}),(0,s.jsx)("div",{id:"canvas-container",className:"w-full h-96",children:(0,s.jsxs)(r.Xz,{camera:{fov:75,position:[600,400,200]},children:[(0,s.jsx)("perspectiveCamera",{}),(0,s.jsx)(n.z,{enableZoom:!0,maxDistance:900,enableRotate:!0,enablePan:!0}),(0,s.jsx)("pointLight",{position:[1,5,1]}),(0,s.jsxs)("points",{ref:u,children:[(0,s.jsx)("bufferGeometry",{attach:"geometry",children:(0,s.jsx)("bufferAttribute",{attach:"attributes-position",count:x.length/3,array:x,itemSize:3})}),(0,s.jsx)("pointsMaterial",{color:"#5786F5",size:2,sizeAttenuation:!0})]}),(0,s.jsxs)("mesh",{ref:p,position:[200,10,50],children:[(0,s.jsx)("boxGeometry",{attach:"geometry",args:[20,20,100]}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"#964B00",opacity:.8,transparent:!0})]}),(0,s.jsxs)("mesh",{ref:h,position:[200,0,75],children:[(0,s.jsx)("boxGeometry",{attach:"geometry",args:[400,1,150]}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"#964B00",opacity:.04,transparent:!0})]}),(0,s.jsxs)("mesh",{ref:j,position:[0,150,75],children:[(0,s.jsx)("boxGeometry",{attach:"geometry",args:[1,300,150]}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"#964B00",opacity:.04,transparent:!0})]}),(0,s.jsxs)("mesh",{position:[200,150,150],children:[(0,s.jsx)("boxGeometry",{attach:"geometry",args:[400,300,1]}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"#964B00",opacity:.04,transparent:!0})]}),(0,s.jsxs)("mesh",{position:[200,150,0],children:[(0,s.jsx)("boxGeometry",{attach:"geometry",args:[400,300,1]}),(0,s.jsx)("meshStandardMaterial",{attach:"material",color:"#964B00",opacity:.04,transparent:!0})]})]})})]}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-lg font-bold pt-5",children:"Simulation paramater comparison"}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-lg",children:c["3dcomp"]}),(0,s.jsx)("div",{className:"w-2/6 mx-auto",children:(0,s.jsxs)(l.lr,{autoPlay:!0,infiniteLoop:!0,children:[(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/cross3d10.png"})}),(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/cross3d34.png"})}),(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/cross3d107.png"})}),(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/cross3d137.png"})})]})}),(0,s.jsx)("h1",{className:"mx-auto w-4/6 text-2xl underline pt-10",children:"2D simulation"}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-lg",children:"Below is the comparison of the simulation results with the equivalent real-world lab results."}),(0,s.jsx)("div",{className:"w-2/6 mx-auto",children:(0,s.jsxs)(l.lr,{autoPlay:!0,infiniteLoop:!0,children:[(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/labresults.png"})}),(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/labresultspoly.png"})})]})}),(0,s.jsx)("h1",{className:"mx-auto w-4/6 text-2xl underline pt-10",children:"2D submarine simulation"}),(0,s.jsxs)("p",{className:"mx-auto w-4/6 text-lg",children:["A similar collapse in water was simulated, and compared to the empirical results obtained from Pinzon and Cabrera in their paper ",(0,s.jsx)("a",{href:"https://doi.org/10.1063/1.5099494",className:"underline text-blue-800",children:"Planar collapse of a submerged granular column"}),"."]}),(0,s.jsx)("div",{className:"w-2/6 mx-auto",children:(0,s.jsxs)(l.lr,{autoPlay:!0,infiniteLoop:!0,children:[(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/Picture1.png"})}),(0,s.jsx)("div",{className:"p-15",children:(0,s.jsx)("img",{src:"/Picture2.png"})})]})}),(0,s.jsx)("p",{className:"mx-auto w-4/6 text-center pt-10",children:c.intro2})]})}a(4797)}},function(e){e.O(0,[689,193,971,472,744],function(){return e(e.s=5982)}),_N_E=e.O()}]);