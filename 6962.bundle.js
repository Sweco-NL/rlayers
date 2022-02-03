"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[6962],{6962:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var a=o(7294);const s=a.memo((function(){return a.createElement("div",{dangerouslySetInnerHTML:{__html:'<h1 id="rlayers---react-components-for-openlayers-6">rlayers - React Components for OpenLayers 6+</h1> <p><a href="https://github.com/mmomtchev/rlayers/blob/master/LICENSE"><img src="https://img.shields.io/github/license/mmomtchev/rlayers" alt="License: ISC"></a> <a href="https://www.npmjs.com/package/rlayers"><img src="https://img.shields.io/npm/v/rlayers" alt="npm version"></a> <a href="https://github.com/mmomtchev/rlayers/actions?query=workflow%3A%22Node.js+CI%22"><img src="https://github.com/mmomtchev/rlayers/workflows/Node.js%20CI/badge.svg" alt="Node.js CI"></a> <a href="https://codecov.io/gh/mmomtchev/rlayers"><img src="https://codecov.io/gh/mmomtchev/rlayers/branch/master/graph/badge.svg" alt="codecov"></a></p> <p><em>rlayers</em> is an opinionated set of <em>React</em> components for <em>OpenLayers</em>.</p> <p>It&#39;s design policy is:</p> <ul> <li>Fully Typescript-typed</li> <li>Do everything that faces the user the <strong><em>React</em> way</strong> and not the <em>OpenLayers</em> way - <code>onClick</code> and <code>onPointerEnter</code>/<code>onPoinerLeave</code> handlers are typical examples</li> <li>If it does not face the user, it does not need to be <em>React</em> way - internally it uses inheritance, following the <em>OpenLayers</em> classes, over composition</li> <li>Simple things should be simple to do, performance optimizations should not get in the way unless needed</li> <li>If taking shortcuts when updating the components, always err on the safe side but do provide an override method that allows to come close to the raw OpenLayers performance</li> <li>Expose all the advanced <em>OpenLayers</em> features</li> <li>Try to be as much SSR-friendly as possible (this feature is currently in POC stage, see below)</li> <li>The current target is <em>OpenLayers</em> 6+</li> <li>Avoid dependencies when built except for <em>React</em> and OpenLayers (the examples have some dependencies) - currently the single one is <a href="https://www.npmjs.com/package/lru-cache"><code>lru-cache</code></a> at 8Kbytes</li> </ul> <p>It has nothing to do with <em>react-openlayers</em> which stopped at <em>OpenLayers</em> 3. In fact, it is more inspired by <em>react-leaflet</em> than <em>react-openlayers</em>.</p> <p><img src="https://gist.githubusercontent.com/mmomtchev/e789dfa545b97c7ae97770f1b5606172/raw/79b486bcc8c45b069e3a8f552c82360de80febff/ref1.png" alt="© OpenStreetMap contributors"> <img src="https://gist.githubusercontent.com/mmomtchev/e789dfa545b97c7ae97770f1b5606172/raw/79b486bcc8c45b069e3a8f552c82360de80febff/ref2.png" alt="Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)"></p> <h2 id="installation">Installation</h2> <pre><code class="language-bash">npm --save install rlayers ol react react-dom\n</code></pre> <h3 id="compatibility-matrix">Compatibility Matrix</h3> <p><em>OpenLayers</em> and <em>React</em> are peer dependencies and should be installed separately.</p> <p><em>React</em> is supported from version 16.8.0.</p> <hr> <table> <thead> <tr> <th>rlayers</th> <th>Unit-tested <em>OpenLayers</em> versions</th> <th>Unit-tested <em>React</em> versions</th> </tr> </thead> <tbody><tr> <td>1.0 (<em>obsolete</em>)</td> <td>6.0</td> <td>16.8, 16.14, 17.0.2</td> </tr> <tr> <td>1.1 (<em>obsolete</em>)</td> <td>6.6, 6.7, 6.8, 6.9</td> <td>16.8, 16.14, 17.0.2</td> </tr> <tr> <td>1.2</td> <td>6.6, 6.7, 6.8, 6.9</td> <td>16.8, 16.14, 17.0.2</td> </tr> <tr> <td>1.3 <code>(@latest)</code></td> <td>6.10, 6.11, 6.12</td> <td>16.8, 16.14, 17.0.2</td> </tr> </tbody></table> <hr> <h2 id="usage">Usage</h2> <p><em>rlayers</em> is a set of reusable <em>React</em> components that can be nested in various ways to create map applications for the web through <em>React</em> composition in the true <strong>spirit of <em>React</em></strong>. The components are based on a simplified model of the <em>OpenLayers</em> classes: for example the layers and the sources abstraction levels have been fused into one single level and the map and the view are also represented by a single component.</p> <p>In order to avoid confusion between the <em>OpenLayers</em> classes and the <em>rlayers</em> classes which sometimes have the same names - all <em>rlayers</em> classes are prefixed with <strong>R</strong>. If a class begins with <strong>R</strong>, it is from <em>rlayers</em>, otherwise it is an <em>OpenLayers</em> class.</p> <p>The most important element is the <code>&lt;RMap&gt;</code>. Every other element, except <code>&lt;RStyle&gt;</code>, requires a parent to function - an <code>&lt;RLayer&gt;</code> must be part of a map, an <code>&lt;RFeature&gt;</code> must be part of an <code>&lt;RLayerVector&gt;</code>, an <code>&lt;RControl&gt;</code> must also be part of a map. </p> <h3 id="simple-step-by-step-example">Simple step-by-step example</h3> <p>This is the simple overlay example - <a href="https://mmomtchev.github.io/rlayers/#/overlays">https://mmomtchev.github.io/rlayers/#/overlays</a></p> <pre><code class="language-jsx">import React from &#39;react&#39;;\nimport {fromLonLat} from &#39;ol/proj&#39;;\nimport {Point} from &#39;ol/geom&#39;;\nimport &#39;ol/ol.css&#39;;\n\nimport {RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle} from &#39;rlayers&#39;;\nimport locationIcon from &#39;./svg/location.svg&#39;;\n \n// Create a map, its size is set in the CSS class example-map\n&lt;RMap className=&#39;example-map&#39; center={fromLonLat([2.364, 48.82])} zoom={11}&gt;\n    {/* Use an OpenStreetMap background */}\n    &lt;ROSM /&gt;\n    {/* Create a single layer for holding vector features */}\n    &lt;RLayerVector zIndex={10}&gt;\n        {/* Create a style for rendering the features */}\n        &lt;RStyle.RStyle&gt;\n            {/* Consisting of a single icon, that is slightly offset\n             * so that its center falls over the center of the feature */}\n            &lt;RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} /&gt;\n        &lt;/RStyle.RStyle&gt;\n        {/* Create a single feature in the vector layer */}\n        &lt;RFeature\n            {/* Its geometry is a point geometry over the monument */}\n            geometry={new Point(fromLonLat([2.295, 48.8737]))}\n            {/* Bind an onClick handler */}\n            onClick={(e) =&gt;\n                {/* e.map is the underlying OpenLayers map - we call getView().fit()\n                to pan/zoom the map over the monument with a small animation */}\n                e.map.getView().fit(e.target.getGeometry().getExtent(), {\n                    duration: 250,\n                    maxZoom: 15\n                })\n            }\n        &gt;\n            {/* The icon is an SVG image that represents the feature on the map\n            while an overlay allows us to add a normal HTML element over the feature */}\n            &lt;ROverlay className=&#39;example-overlay&#39;&gt;\n                Arc de Triomphe\n                &lt;br /&gt;\n                &lt;em&gt;&amp;#11017; click to zoom&lt;/em&gt;\n            &lt;/ROverlay&gt;\n        &lt;/RFeature&gt;\n    &lt;/RLayerVector&gt;\n&lt;/RMap&gt;\n</code></pre> <h4 id="contexts">Contexts</h4> <p>Composition works by using <em>React</em> Contexts. Every nested element uses the context of its nearest parent.</p> <p>Currently a context has an <code>RContextType</code> and can contain the following elements:</p> <ul> <li><code>RContext.map</code> provided by a map, every other element, except an <code>RStyle</code> must have a map parent</li> <li><code>RContext.layer</code> and <code>RContext.source</code> provided by all layers - not required for anything at the moment, but can be used to access the underlying <em>OpenLayers</em> objects</li> <li><code>RContext.vectorlayer</code> and <code>RContext.vectorsource</code> provided by vector layers only - required for <code>&lt;RFeature&gt;</code></li> <li><code>RContext.location</code> and <code>RContext.feature</code> provided by a map feature - required for <code>&lt;ROverlay&gt;</code> and <code>&lt;RPopup&gt;</code></li> <li><code>RContext.style</code> provided by a style definition - the only one which can be outside of a map</li> </ul> <h4 id="accessing-the-underlying-openlayers-objects-and-api">Accessing the underlying <em>OpenLayers</em> objects and API</h4> <p>The underlying <em>OpenLayers</em> objects can be accessed in a number of different ways:</p> <ul> <li>Through the context objects by using <code>React.Context.Consumer</code> - <a href="https://mmomtchev.github.io/rlayers/#/controls">the custom controls example</a> contains an example for using the <em>OpenLayers</em> <code>map</code> from <code>RContext</code></li> <li>In an event handler, when it is a normal function and not an arrow lambda, <code>this</code> will contain the <em>rlayers</em> component and <code>this.context</code> will contain the context - <a href="https://mmomtchev.github.io/rlayers/#/geolocation">the geolocation example</a> accesses <code>this.context.map</code> to adjust the view</li> <li>In all event handlers, <em>OpenLayers</em> will pass the target object in <code>event.target</code> and the map in <code>event.map</code> - <a href="https://mmomtchev.github.io/rlayers/#/popups">the popups example</a> uses this method</li> <li>And finally, accessing arbitrary elements, even outside their contexts, is possible by using React references - <code>React.RefObject</code>s. <a href="https://mmomtchev.github.io/rlayers/#/igc">The high performance example</a> contains an example of this. The underlying <em>OpenLayers</em> objects can be accessed through the <code>ol</code> property of every component. Additionaly, for <code>layer</code> objects, the underlying <em>OpenLayers</em> source can be accessed through <code>source</code>:<pre><code class="language-ts">const layerRef = React.createRef() as React.RefObject&lt;RLayerVector&gt;;\n</code></pre> Then after rendering:<pre><code class="language-jsx">&lt;RLayerVector ref={layerRef} /&gt;\n</code></pre> <code>layerRef.current.ol</code> will contain the <em>OpenLayers</em> layer and <code>layerRef.current.source</code> will contain the source. This is the only way of accessing the object outside its context.</li> </ul> <h3 id="styles">Styles</h3> <p>Style definitions can be placed anywhere inside the DOM and can be referenced with a <em>React</em> reference. rlayers includes two special types for dealing with styles:</p> <ul> <li><code>RStyleRef</code> which is an alias to <code>React.RefObject&lt;RStyle&gt;</code> is a <em>React</em> reference to an <code>&lt;RStyle&gt;</code> element. It can be transparently used everywhere where a classical <em>OpenLayers</em> <code>StyleLike</code> is required</li> <li><code>RStyleLike</code> is the new union type that allows for <code>StyleLike</code> or a <code>RStyleRef</code></li> </ul> <p>A style placed inside a vector layer will be automatically applied to that vector layer.</p> <p>A style can either be static or dynamic. A static style depends only on its properties. A dynamic style is a function that takes an <em>OpenLayers</em> <code>Feature</code> object as its input and returns a <code>Style</code>. A dynamic style creates a new object for every rendered feature, so this must be taken into account. A simple caching mechanism is also provided, based on a user-supplied hash function. It can greatly improve performance when the majority of the features use relatively few different styles.</p> <p>You can refer to</p> <ul> <li><a href="https://mmomtchev.github.io/rlayers/#/features">https://mmomtchev.github.io/rlayers/#/features</a> for a basic example with static styles;</li> <li><a href="https://mmomtchev.github.io/rlayers/#/vectortiles">https://mmomtchev.github.io/rlayers/#/vectortiles</a> for a more complete example with dynamic styles;</li> <li><a href="https://mmomtchev.github.io/rlayers/#/cluster">https://mmomtchev.github.io/rlayers/#/cluster</a> for the use of caching.</li> </ul> <p>Classical <em>OpenLayers</em> <code>StyleLike</code> objects are supported too, but this is not the <strong><em>React</em> way</strong>. Still, if you need every last bit of performance, writing an optimized <em>OpenLayers</em> style function is the best solution.</p> <h3 id="performance">Performance</h3> <p>React is a wonderful framework that makes it very easy to write complex web applications without having to manually handle all the interdependencies between the various components. This is the reason why it is called <em>React</em> - components automatically <em>React</em> to changes in other components. In the true spirit of <em>React</em>, <em>rlayers</em> prefers to err on the safe side - always updating when there is a chance that the component needs updating - making it easy on the beginner who wants simple interface while still allowing the experienced engineer to achieve the performance he needs. </p> <p>When high performance is required, particular care must be taken that the component properties do not change without a reason. This is especially true when the <code>pointermove</code> event is used. In these cases one should avoid using anonymous objects, arrays or functions as properties. </p> <p>Take for example this:</p> <pre><code class="language-jsx">&lt;RFeature\n    geometry={new Point(fromLonLat([2.295, 48.858])}\n    onClick={(e: MapBrowserEvent) =&gt; process(e.target)}\n/&gt;\n</code></pre> <p>This is a feature that will be re-evaluated at every frame. Its geometry appears to be a constant, but it is in fact an anonymous object that is created at every frame - even if it always holds the same value. Passing a constant is one way around this, but the true <em>React way</em> is using the two tools <em>React</em> provides: <code>React.useMemo</code> and <code>React.useCallback</code>. They memoize the value and take care to always return a reference to the same object unless one of the listed dependencies is modified.</p> <p>This is a much better performing code that won&#39;t rerender the feature component:</p> <pre><code class="language-jsx">&lt;RFeature\n    geometry={React.useMemo(new Point(fromLonLat([2.295, 48.858]), [/* no deps */])}\n    onClick={React.useCallback((e: MapBrowserEvent) =&gt; process(e.target), [/* no deps */])}\n/&gt;\n</code></pre> <p>Anonymous objects, arrays and <strong>especially lambdas</strong> in the properties of a component are prime candidates for memoization. Sometimes, you can also memoize whole components or groups of components - for a very significant performance boost.</p> <p>Generally, if you are binding code to the <code>pointermove</code> event and your performance is not good enough, this is the first thing you should be looking at - which components update at every <code>pointermove</code> and why.</p> <p>These 3 examples run code on various high-frequency events, take a look at them:</p> <ul> <li><a href="https://mmomtchev.github.io/rlayers/#/cluster">Clustering</a> runs the styling function every time the map is panned or zoomed</li> <li><a href="https://mmomtchev.github.io/rlayers/#/pindrop">Drop a pin</a> runs code on every <code>pointermove</code> that carefully avoids rerendering</li> <li><a href="https://mmomtchev.github.io/rlayers/#/geodata">Geo data</a> updates components at every <code>pointerenter</code>/<code>pointerleave</code></li> <li><a href="https://mmomtchev.github.io/rlayers/#/igc">The high performance example</a> is a complex example that runs lots of code and updates components at every <code>pointermove</code></li> </ul> <h2 id="examples">Examples</h2> <p>The examples can be found here: <a href="https://mmomtchev.github.io/rlayers/">https://mmomtchev.github.io/rlayers/</a></p> <h2 id="server-side-rendering">Server-Side Rendering</h2> <p>Server-side rendering of map components is difficult - there is still no comprehensive solution. Besides the obvious complexities of rendering on canvas outside the browser, one of the major issues is that server-side rendering runs before the browser layout flowing - and thus must work independent of layout and resolution.</p> <p>The best solution is to use a WMS-compatible server (such as Geoserver) and to serve prerendered maps over WMS - eventually replacing the initial image by a canvas.</p> <p>An intermediate solution, which does not require extensive server-side investment (such as Geoserver), but is limited to static layout(s), is to prerender one (or one per screen size) image to be used as a temporary place-holder until the map is loading. In this case, at least some devices, will get an ugly looking map for the first few seconds.</p> <p>Pushing the initial tiles is also an option:</p> <ul> <li>when combined with a WMS-server it could deliver pixel-perfect maps with on the first HTTP request</li> <li>without a WMS-server it could still avoid doing a large number of HTTP requests on the first load</li> </ul> <p>Currently, server-side rendering of raster layers on fixed map sizes has reached POC status and an online demo is accessible at <a href="https://rlayers-ssr.meteo.guru/">https://rlayers-ssr.meteo.guru/</a>. The code can be found in the <code>ssr</code> branch of this project. The <code>next.js</code> project can be found at <a href="https://github.com/mmomtchev/rlayers-ssr-demo.git">https://github.com/mmomtchev/rlayers-ssr-demo.git</a>. <em>This is still not a user-friendly, install-and-run project.</em> Take a look at <code>pages/index.js</code> if you want see how it is meant to be used.</p> <h2 id="api">API</h2> <p>You can browse the full documentation at <a href="https://mmomtchev.github.io/rlayers/api">https://mmomtchev.github.io/rlayers/api</a></p> <h2 id="license">License</h2> <p><a href="https://choosealicense.com/licenses/isc/">ISC</a></p> '}})}))}}]);