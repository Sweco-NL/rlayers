"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[2930],{2930:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var a,n=r(7294),o=r(6414),c=r(1090),s=r(2450),l=r(2083),i=r(3475),u=r(9646),d=(a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},a(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),p="none",m=/^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,f=/^H.([A-Z]{3}).*?:(.*)/,g=/^HFDTE(\d{2})(\d{2})(\d{2})/,h=/\r\n|\r|\n/;const y=function(e){function t(t){var r=e.call(this)||this,a=t||{};return r.dataProjection=(0,o.U2)("EPSG:4326"),r.altitudeMode_=a.altitudeMode?a.altitudeMode:p,r}return d(t,e),t.prototype.readFeatureFromText=function(e,t){var r,a,n=this.altitudeMode_,o=e.split(h),i={},d=[],y=2e3,C=0,b=1,v=-1;for(r=0,a=o.length;r<a;++r){var w=o[r],E=void 0;if("B"==w.charAt(0)){if(E=m.exec(w)){var P=parseInt(E[1],10),x=parseInt(E[2],10),S=parseInt(E[3],10),T=parseInt(E[4],10)+parseInt(E[5],10)/6e4;"S"==E[6]&&(T=-T);var I=parseInt(E[7],10)+parseInt(E[8],10)/6e4;if("W"==E[9]&&(I=-I),d.push(I,T),n!=p){var M;M="gps"==n?parseInt(E[11],10):"barometric"==n?parseInt(E[12],10):0,d.push(M)}var _=Date.UTC(y,C,b,P,x,S);_<v&&(_=Date.UTC(y,C,b+1,P,x,S)),d.push(_/1e3),v=_}}else"H"==w.charAt(0)&&((E=g.exec(w))?(b=parseInt(E[1],10),C=parseInt(E[2],10)-1,y=2e3+parseInt(E[3],10)):(E=f.exec(w))&&(i[E[1]]=E[2].trim()))}if(0===d.length)return null;var F=n==p?s.Z.XYM:s.Z.XYZM,k=new l.Z(d,F),O=new c.Z((0,u.fI)(k,!1,t));return O.setProperties(i,!0),O},t.prototype.readFeaturesFromText=function(e,t){var r=this.readFeatureFromText(e,t);return r?[r]:[]},t}(i.Z);var C=r(5069),b=r(6101),v=r(6234),w=r(188),E=r(692),P=r(8004);r(2031);const x=[{c:"rgba(0, 0, 250, 0.7)",i:r.p+"35f98571579c799828e73f3e7cfc5634.igc"},{c:"rgba(0, 50, 200, 0.7)",i:r.p+"08d341a63428255a9f42d1dad7e19df5.igc"},{c:"rgba(0, 100, 150, 0.7)",i:r.p+"6634c672e2855bfb2def3ad33d01b0e4.igc"},{c:"rgba(0, 150, 200, 0.7)",i:r.p+"dbecb26a49a66da3c0a27ee0ad994925.igc"},{c:"rgba(0, 200, 50, 0.7)",i:r.p+"5f9b60a43fcd910126e0dff92120e4d7.igc"}],S=(0,o.mi)([6,45.7]);function T(){const[e,t]=n.useState(""),[r,a]=n.useState(null),[c,s]=n.useState(null),[i,u]=n.useState(0),[d,p]=n.useState([]),[m,f]=n.useState({start:1/0,stop:-1/0,duration:0}),[g,h]=n.useState((()=>(Promise.all(x.map((e=>fetch(e.i).then((e=>e.text()))))).then((e=>h(e))),[]))),T={redCircle:(0,P.yO)(),blueCircle:(0,P.yO)(),flightPath:n.useRef([])},I=n.useRef(),M=n.useRef();return n.createElement(n.Fragment,null,n.useMemo((()=>x.map(((e,t)=>n.createElement(P.P_,{key:t,ref:e=>T.flightPath.current[t]=e},n.createElement(P.c5,{color:e.c,width:3}))))),[T.flightPath]),n.createElement(P.P_,{ref:T.redCircle},n.createElement(P.c5,{color:"red",width:1}),n.createElement(P.Au,{radius:6},n.createElement(P.X3,{color:"red"}))),n.createElement(P.P_,{ref:T.blueCircle},n.createElement(P.Au,{radius:6},n.createElement(P.X3,{color:"blue"}))),n.createElement(E.rO,{className:"example-map",initial:{center:S,zoom:9},onPointerMove:(0,n.useCallback)((e=>{const r=I.current.source.getClosestFeatureToCoordinate(e.coordinate);if(null===r)return;const n=r.getGeometry().getClosestPoint(e.coordinate),o=new Date(1e3*n[2]);a(new w.Z(n)),s(new l.Z([e.coordinate,[n[0],n[1]]])),t("<strong>"+r.get("PLT")+"</strong><br><em>"+o.toUTCString()+"</em>"),e.map.render()}),[I])},n.createElement(E.zV,{zIndex:5,url:"https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png",attributions:"Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)"}),n.createElement(E.jh,{zIndex:10,ref:I,onAddFeature:(0,n.useCallback)((e=>{const t=e.feature.getGeometry();m.start=Math.min(m.start,t.getFirstCoordinate()[2]),m.stop=Math.max(m.stop,t.getLastCoordinate()[2]),m.duration=m.stop-m.start,f({...m})}),[m]),onPostRender:(0,n.useCallback)((e=>{const t=function(e){if(!(e.context instanceof CanvasRenderingContext2D))throw new Error("Only works for render events from Canvas 2D layers");var t,r=e.inversePixelTransform[0],a=e.frameState,n=(0,b.Jp)(e.inversePixelTransform.slice(),a.coordinateToPixelTransform),c=(0,v.se)(a.viewState.resolution,r),s=(0,o.Cs)();return s&&(t=(0,o.WO)(s,a.viewState.projection)),new C.Z(e.context,r,a.extent,n,a.viewState.rotation,c,t)}(e);t.setStyle(P.P_.getStyleStatic(T.redCircle)),r&&c&&(t.drawGeometry(r),t.drawGeometry(c))}),[r,c,T.redCircle])},n.useMemo((()=>n.createElement(n.Fragment,null,g.map(((e,t)=>n.createElement(E.j$,{key:t,feature:(new y).readFeatures(e,{featureProjection:"EPSG:3857"})[0],style:T.flightPath.current[t]}))))),[g,T.flightPath,T.flightPath.current[0]])),n.createElement(E.jh,{zIndex:10,ref:M,style:T.blueCircle},n.useMemo((()=>n.createElement(n.Fragment,null,d.map(((e,t)=>n.createElement(E.j$,{key:t,geometry:new w.Z(e)}))))),[d]))),n.createElement("div",{className:"d-flex flex-row mb-3 align-items-center"},n.createElement("div",{className:"jumbotron py-1 px-3 m-0 me-3 w-50",dangerouslySetInnerHTML:{__html:e}}),n.createElement("div",{className:"w-50"},n.createElement("input",{type:"range",className:"range-slider range-slider--primary w-100",min:"0",max:"100",value:i,onChange:(0,n.useCallback)((function(e){const t=parseInt(e.currentTarget.value);u(t);const r=I.current.source,a=m.start+m.duration*t/100,n=[];r.forEachFeature((e=>{if(!e.get("PLT"))return;const t=e.getGeometry().getCoordinateAtM(a,!0);n.push(t)})),p(n)}),[I,m])}))))}}}]);