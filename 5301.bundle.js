(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[5301],{1788:(n,e,o)=>{"use strict";o.d(e,{Z:()=>r});var t=o(3645),l=o.n(t)()((function(n){return n[1]}));l.push([n.id,'.ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 1.5px solid rgb(179,197,219);\n  background-color: rgba(255,255,255,0.4);\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-Index: 10;\n}\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-Index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-Index: 9;\n  box-sizing: border-box;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n.ol-viewport canvas {\n  all: unset;\n}\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing;\n}\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab;\n}\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n  font-size: inherit;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n}\n.ol-attribution a {\n  color: rgba(0,60,136,0.7);\n  text-decoration: none;\n}\n.ol-attribution ul {\n  margin: 0;\n  padding: 1px .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n  font-size: 12px;\n}\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n.ol-attribution li:not(:last-child):after {\n  content: " ";\n}\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n.ol-attribution button {\n  flex-shrink: 0;\n}\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: block;\n}\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n.ol-overviewmap:not(.ol-collapsed) button {\n  bottom: 2px;\n  left: 2px;\n  position: absolute;\n}\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n',""]);const r=l},2031:(n,e,o)=>{"use strict";var t=o(3379),l=o.n(t),r=o(1788);l()(r.Z,{insert:"head",singleton:!1}),r.Z.locals},7863:n=>{n.exports="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='32' height='32' version='1.1' x='0px' y='0px' viewBox='0 0 100 125' enable-background='new 0 0 100 100' xml:space='preserve'%3e %3cpath d='M72.825,97.439L62.234,79.797v-4.25H60.25c-0.597-1.834-3.203-9.893-3.963-13.271h0.782v-4.17h-1.82 c-0.423-4.131-3.366-33.21-3.279-42.153c0.687-1.021,0.964-1.314,0.964-1.314l0.104-0.103l0.038-0.142 c0.365-1.383,0.276-4.369-2.628-5.856L50,2.561l-0.447,5.977c-2.904,1.487-2.993,4.473-2.628,5.856l0.04,0.14l0.098,0.101 c0.002,0.003,0.279,0.296,0.968,1.318c0.087,8.942-2.856,38.022-3.279,42.153h-1.82v4.17h0.783 c-0.761,3.379-3.367,11.438-3.964,13.271h-1.984v4.25l-10.59,17.643h10.707v-0.545c0-6.68,5.437-12.115,12.118-12.115 c6.681,0,12.116,5.436,12.116,12.115v0.545H72.825z M46.891,75.461c0.287-1.947,1.164-7.918,1.477-10.16h3.266 c0.312,2.242,1.189,8.213,1.477,10.16H46.891z'/%3e %3c!-- Created by Randomhero from the Noun Project --%3e %3c/svg%3e"},5301:(n,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>d});var t=o(7294),l=o(6414),r=o(8683),i=o(188),a=(o(2031),o(7863)),c=o.n(a),s=o(692);const m=(0,l.mi)([2.294,48.858]),p=new i.Z(m);function d(){const[n,e]=t.useState(!1);return t.createElement(t.Fragment,null,t.createElement(s.rO,{className:"example-map",initial:{center:(0,l.mi)([2.364,48.82]),zoom:11}},t.createElement(s.H3,null),t.createElement(s.jh,null,t.createElement(s.P_.P_,null,t.createElement(s.P_.JW,{src:c()})),t.createElement(s.j$,{geometry:p})),t.createElement(s.jh,{onChange:t.useCallback((n=>{const o=n.target;(null==o?void 0:o.forEachFeatureAtCoordinateDirect)&&e(o.forEachFeatureAtCoordinateDirect(m,(()=>!0)))}),[])},t.createElement(s.P_.P_,null,t.createElement(s.P_.c5,{color:"#0000ff",width:3}),t.createElement(s.P_.X3,{color:"rgba(0, 0, 0, 0.75)"})),t.createElement(s.kB.UW,{type:"Polygon",condition:r.vY,freehandCondition:r.aj}),t.createElement(s.kB.UW,{type:"Circle",condition:r.Ko,freehandCondition:r.Fi}),t.createElement(s.kB._j,{condition:r.QC,deleteCondition:t.useCallback((n=>(0,r.QC)(n)&&(0,r.OK)(n)),[])}))),t.createElement("div",null,t.createElement("p",{className:"p-0 m-0"},"Hold ",t.createElement("em",null,"Shift")," and click without dragging for a regular polygon"),t.createElement("p",{className:"p-0 m-0"},"Hold ",t.createElement("em",null,"Shift")," and ",t.createElement("em",null,"Alt")," and drag for a freehand polygon"),t.createElement("p",{className:"p-0 m-0"},"Hold ",t.createElement("em",null,"Alt")," and click without dragging for a circle"),t.createElement("p",{className:"p-0 m-0"},"Hold ",t.createElement("em",null,"Ctrl / ⌘")," and drag to move/add a vertex"),t.createElement("p",{className:"p-0 m-0"},"Hold ",t.createElement("em",null,"Ctrl / ⌘")," and double click to remove a vertex")),t.createElement("div",{className:"mx-0 mt-1 mb-3 p-1 w-100 jumbotron shadow shadow"},t.createElement("p",null,"Currently the Eiffel Tower is",n?"":" not"," covered")))}}}]);