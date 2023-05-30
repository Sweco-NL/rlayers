"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3831],{3831:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const p='<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RMap<span class="token punctuation">,</span> RContextType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">default</span> <span class="token keyword">as</span> RLayer<span class="token punctuation">,</span> RLayerProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers/layer/RLayer"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> LayerTile <span class="token keyword">from</span> <span class="token string">"ol/layer/WebGLTile.js"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> GeoTIFF <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/source"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"ol/ol.css"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> proj4 <span class="token keyword">from</span> <span class="token string">"proj4"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> register <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/proj/proj4"</span><span class="token punctuation">;</span>\n\n<span class="token comment">// This projection is used in the example</span>\nproj4<span class="token punctuation">.</span><span class="token function">defs</span><span class="token punctuation">(</span>\n  <span class="token string">"EPSG:32636"</span><span class="token punctuation">,</span>\n  <span class="token string">"+proj=utm +zone=36 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">register</span><span class="token punctuation">(</span>proj4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/**\n * @propsfor RLayerGeoTIFF\n */</span>\n<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RLayerGeoTIFFProps</span> <span class="token keyword">extends</span> <span class="token class-name">RLayerProps</span> <span class="token punctuation">{</span>\n  <span class="token comment">/** URLs of the GeoTIFFs, there must be at least one */</span>\n  urls<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/**\n * This example shows how to extend RLayers with a component\n * that renders a layer from a COG (Cloud-Optimized GeoTIFF)\n *\n * It implements the Openlayers example from\n * https://openlayers.org/en/latest/examples/cog.html\n *\n * Requires an `RMap` context\n */</span>\n<span class="token keyword">class</span> <span class="token class-name">RLayerGeoTIFF</span> <span class="token keyword">extends</span> <span class="token class-name">RLayer<span class="token operator">&lt;</span>RLayerGeoTIFFProps<span class="token operator">></span></span> <span class="token punctuation">{</span>\n  ol<span class="token operator">:</span> LayerTile<span class="token punctuation">;</span>\n  source<span class="token operator">:</span> GeoTIFF<span class="token punctuation">;</span>\n\n  <span class="token function">constructor</span><span class="token punctuation">(</span>\n    props<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span>RLayerGeoTIFFProps<span class="token operator">></span><span class="token punctuation">,</span>\n    context<span class="token operator">:</span> React<span class="token punctuation">.</span>Context<span class="token operator">&lt;</span>RContextType<span class="token operator">></span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>ol <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LayerTile</span><span class="token punctuation">(</span><span class="token punctuation">{</span> source<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>source <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>eventSources <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>ol<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">createSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GeoTIFF</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      sources<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>urls<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>u<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token operator">:</span> u <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>eventSources <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>ol<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// This is needed only if you want to automatically import</span>\n  <span class="token comment">// the GeoTIFF metadata into a View</span>\n  <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>context<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">setView</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">.</span><span class="token function">getView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">refresh</span><span class="token punctuation">(</span>prevProps<span class="token operator">?</span><span class="token operator">:</span> RLayerGeoTIFFProps<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>\n      prevProps<span class="token operator">?.</span>urls<span class="token operator">?.</span>length <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>urls<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>urls<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> e <span class="token operator">===</span> prevProps<span class="token operator">?.</span>urls<span class="token operator">?.</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n      <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>ol<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">attachOldEventHandlers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RMap</span></span> <span class="token attr-name">width</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"100%"</span><span class="token punctuation">}</span></span> <span class="token attr-name">height</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">"60vh"</span><span class="token punctuation">}</span></span> <span class="token attr-name">initial</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> center<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> zoom<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerGeoTIFF</span></span>\n        <span class="token attr-name">properties</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">"GeoTIFF"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">urls</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>\n          <span class="token string">"https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RMap</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}]);