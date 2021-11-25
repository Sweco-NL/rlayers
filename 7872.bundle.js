"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[7872],{7872:(n,s,a)=>{a.r(s),a.d(s,{default:()=>t});const t='<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">"react"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> fromLonLat <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/proj"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Geometry<span class="token punctuation">,</span> Point <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/geom"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Feature <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Coordinate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ol/coordinate"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">"ol/ol.css"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> monument <span class="token keyword">from</span> <span class="token string">"./svg/monument.svg"</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> RMap<span class="token punctuation">,</span> <span class="token constant">ROSM</span><span class="token punctuation">,</span> RLayerVector<span class="token punctuation">,</span> RStyle<span class="token punctuation">,</span> RFeature<span class="token punctuation">,</span> ROverlay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"rlayers"</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> coords<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> Coordinate<span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">"Arc de Triomphe"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.295</span><span class="token punctuation">,</span> <span class="token number">48.8737</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"Place d\'Italie"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.355</span><span class="token punctuation">,</span> <span class="token number">48.831</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  Bastille<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.369</span><span class="token punctuation">,</span> <span class="token number">48.853</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"Tour Eiffel"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.294</span><span class="token punctuation">,</span> <span class="token number">48.858</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  Montmartre<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">2.342</span><span class="token punctuation">,</span> <span class="token number">48.887</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">let</span> unique_id <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Interactions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">JSX</span><span class="token punctuation">.</span>Element <span class="token punctuation">{</span>\n  <span class="token comment">// The features must be part of the state as they will be modified</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>features<span class="token punctuation">,</span> setFeatures<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>coords<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n      <span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n        <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          geometry<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token function">fromLonLat</span><span class="token punctuation">(</span>coords<span class="token punctuation">[</span>f<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          name<span class="token operator">:</span> f<span class="token punctuation">,</span>\n          uid<span class="token operator">:</span> unique_id<span class="token operator">++</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> vectorRef <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> React<span class="token punctuation">.</span>RefObject<span class="token operator">&lt;</span>RLayerVector<span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RMap</span></span>\n        <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example-map<span class="token punctuation">"</span></span>\n        <span class="token attr-name">initial</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> center<span class="token operator">:</span> <span class="token function">fromLonLat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2.364</span><span class="token punctuation">,</span> <span class="token number">48.82</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> zoom<span class="token operator">:</span> <span class="token number">11</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token keyword">const</span> coords <span class="token operator">=</span> e<span class="token punctuation">.</span>map<span class="token punctuation">.</span><span class="token function">getCoordinateFromPixel</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>pixel<span class="token punctuation">)</span><span class="token punctuation">;</span>\n          features<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>\n            <span class="token keyword">new</span> <span class="token class-name">Feature</span><span class="token punctuation">(</span><span class="token punctuation">{</span> geometry<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span>coords<span class="token punctuation">)</span><span class="token punctuation">,</span> uid<span class="token operator">:</span> unique_id<span class="token operator">++</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n          <span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token comment">// Why not setFeatures(features) ?</span>\n          <span class="token comment">// Because it won\'t have any effect -</span>\n          <span class="token comment">// unless you artificially create a new array</span>\n          <span class="token comment">// React won\'t know that something changed</span>\n          <span class="token function">setFeatures</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>features<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ROSM</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RLayerVector</span></span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>vectorRef<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyle.RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RStyle.RIcon</span></span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>monument<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token plain-text">\n          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RStyle.RStyle</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n          </span><span class="token punctuation">{</span>features<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">f</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">RFeature</span></span>\n              <span class="token comment">// This is the very important part: if we are going to be</span>\n              <span class="token comment">// adding or deleting features, we must have a key field</span>\n              <span class="token comment">// that won\'t be transient - we can\'t use the array index, as</span>\n              <span class="token comment">// it will change every time we delete a feature in the middle</span>\n              <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>f<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uid"</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n              <span class="token attr-name">feature</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>f<span class="token punctuation">}</span></span>\n              <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                <span class="token comment">// This the deletion</span>\n                <span class="token keyword">const</span> idx <span class="token operator">=</span> features<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>\n                  <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=></span>\n                    x<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uid"</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>target <span class="token keyword">as</span> Feature<span class="token operator">&lt;</span>Geometry<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uid"</span><span class="token punctuation">)</span>\n                <span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>idx <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                  features<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>idx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token function">setFeatures</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>features<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token comment">// It is very important to return false to stop the</span>\n                  <span class="token comment">// event propagation - otherwise that same event will</span>\n                  <span class="token comment">// also trigger the Map onClick</span>\n                  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n              <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">ROverlay</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>f<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"uid"</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n              </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">ROverlay</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RFeature</span></span><span class="token punctuation">></span></span>\n          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RLayerVector</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">RMap</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n          Click an empty space to add a monument or click a monument to delete\n          it.\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">React.Fragment</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}]);