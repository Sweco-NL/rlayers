"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[4520],{4520:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(7294),l=r(6414),n=r(9681),o=(r(2031),r(692)),c=r(8004);const s=111319.49079327358,m={0:{width:6,font:"1.2rem helvetica,sans-serif"},1:{width:5,font:"0.6rem helvetica,sans-serif"},2:{width:3,font:"0.5rem helvetica,sans-serif"},def:{width:1,font:"0.4rem helvetica,sans-serif"}};function i(){const[e,t]=a.useState(""),r={borders:(0,c.yO)(),towns:(0,c.yO)()};return a.createElement(a.Fragment,null,a.createElement(c.P_,{ref:r.borders},a.createElement(c.c5,{color:"#007bff",width:2}),a.createElement(c.X3,{color:"transparent"})),a.createElement(c.In,{ref:r.towns,render:(0,a.useCallback)((e=>{var t;const{width:r,font:l}=null!==(t=m[e.get("p")])&&void 0!==t?t:m.def,n="#ffff"+e.get("c").charAt(0).toString("hex").substring(0,2).padStart(2,"0");return a.createElement(a.Fragment,null,a.createElement(c.P_,{zIndex:10},a.createElement(c.Au,{radius:r},a.createElement(c.c5,{color:"#007bff",width:r}),a.createElement(c.X3,{color:"#007bff"})),a.createElement(c.UM,{font:l,text:e.get("n")},a.createElement(c.c5,{color:"#007bff",width:2}),a.createElement(c.X3,{color:n}))),a.createElement(c.P_,{zIndex:0},a.createElement(c.Au,{radius:1.5*r},a.createElement(c.c5,{color:"#000000",width:1.5*r}),a.createElement(c.X3,{color:"#000000"}))))}),[])}),a.createElement(o.rO,{className:"example-map",initial:{center:(0,l.mi)([2.364,48.82]),zoom:8}},a.createElement(o.zV,{properties:{label:"Watercolor"},url:"http://c.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"}),a.createElement(o.E,{onPointerEnter:a.useCallback((e=>{var r;return(null===(r=e.target)||void 0===r?void 0:r.get)&&t(e.target.get("n")+", "+e.target.get("c"))}),[t]),url:"https://react-layers.meteo.guru/tiles/admin/{z}/{x}/{y}",style:r.borders,format:new n.Z}),a.createElement(o.E,{url:"https://react-layers.meteo.guru/tiles/place/0/{z}/{x}/{y}",maxResolution:.01*s,style:r.towns,format:new n.Z}),a.createElement(o.E,{url:"https://react-layers.meteo.guru/tiles/place/1/{z}/{x}/{y}",maxResolution:.0025*s,style:r.towns,format:new n.Z}),a.createElement(o.E,{url:"https://react-layers.meteo.guru/tiles/place/2/{z}/{x}/{y}",maxResolution:5e-4*s,style:r.towns,format:new n.Z})),a.createElement("div",{className:"mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow"},a.createElement("p",null,"You are now in ",a.createElement("strong",null,e))))}}}]);