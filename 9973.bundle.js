(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[9973],{8338:e=>{e.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' version='1.1' height='64' width='64' style='shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;' viewBox='0 0 222.14 392.275' x='0px' y='0px' fill-rule='evenodd' clip-rule='evenodd'%3e %3cdefs%3e %3clinearGradient id='gradient' x2='1' y2='1'%3e %3cstop offset='0%25' stop-color='%23447799' /%3e %3cstop offset='50%25' stop-color='%23224488' /%3e %3cstop offset='100%25' stop-color='%23112266' /%3e %3c/linearGradient%3e %3c/defs%3e %3cg%3e %3cpath fill='url(%23gradient) %23447799' d='M111.07 0c-61.34,0 -111.07,49.73 -111.07,111.07 0,70.61 56.28,148.74 102.39,198.93 4.68,5.08 12.68,5.08 17.36,0 46.11,-50.19 102.39,-128.32 102.39,-198.93 0,-61.34 -49.73,-111.07 -111.07,-111.07zm0 52.68c32.24,0 58.39,26.14 58.39,58.39 0,32.24 -26.15,58.38 -58.39,58.38 -32.24,0 -58.39,-26.14 -58.39,-58.38 0,-32.25 26.15,-58.39 58.39,-58.39z'/%3e %3c/g%3e %3c/svg%3e"},9973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var c=r(7294),n=r(6414),a=r(188),i=(r(2031),r(4897)),o=r(8338),l=r.n(o);function s(){const[e,t]=c.useState(new a.Z((0,n.mi)([0,0]))),[r,o]=c.useState(void 0);return c.createElement(i.rO,{className:"example-map",initial:{center:(0,n.mi)([0,0]),zoom:4}},c.createElement(i.H3,null),c.createElement(i.V5,{tracking:!0,trackingOptions:{enableHighAccuracy:!0},onChange:c.useCallback((function(e){const r=e.target;t(new a.Z(r.getPosition())),o(r.getAccuracyGeometry()),this.context.map.getView().fit(r.getAccuracyGeometry(),{duration:250,maxZoom:15})}),[])}),c.createElement(i.jh,{zIndex:10},c.createElement(i.P_.P_,null,c.createElement(i.P_.JW,{src:l(),anchor:[.5,.8]}),c.createElement(i.P_.c5,{color:"#007bff",width:3})),c.createElement(i.j$,{geometry:e}),c.createElement(i.j$,{geometry:r})))}}}]);