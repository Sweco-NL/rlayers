(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[2434],{22434:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>r});const r="import React from 'react';\nimport {fromLonLat} from 'ol/proj';\nimport 'ol/ol.css';\n\nimport {RMap, ROSM, RControl} from 'rlayers';\n\nconst origin = [2.364, 48.82];\n\n// Most of the customization is in the example-overview CSS class\n// Include the OpenLayers built-in .ol-overviewmap to avoid recreating everything from scratch\n\nexport default function Overview(): JSX.Element {\n    return (\n        <RMap className='example-map' center={fromLonLat(origin)} zoom={11}>\n            <ROSM />\n            <RControl.ROverviewMap className='ol-overviewmap example-overview'>\n                <ROSM />\n            </RControl.ROverviewMap>\n        </RMap>\n    );\n}\n"}}]);