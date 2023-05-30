"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[2766],{2766:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});const l="import React from 'react';\nimport {get} from 'ol/proj';\nimport {getCenter} from 'ol/extent';\nimport 'ol/ol.css';\n\nimport {RMap, RLayerImage, RLayerGraticule, RStyle} from 'rlayers';\n\nexport default function Simple(): JSX.Element {\n    const proj = get('EPSG:4326');\n    const extent = proj.getWorldExtent();\n    const center = getCenter(extent);\n    const [graticule, setGraticule] = React.useState<boolean>(true);\n    const [labels, setLabels] = React.useState<boolean>(false);\n    const [space, setSpace] = React.useState<boolean>(true);\n    const style = RStyle.useRStyle();\n    const lonSpace = React.useCallback(\n        (lon: number) => ((lon + 360) % 360).toLocaleString() + '°',\n        []\n    );\n    const lonGeo = React.useCallback((lon: number) => lon.toLocaleString() + '°', []);\n    return (\n        <React.Fragment>\n            <button\n                className='btn btn-secondary m-2'\n                onClick={() => setGraticule((graticule) => !graticule)}\n            >\n                Click here to {graticule ? 'hide' : 'show'} graticule\n            </button>\n            <button\n                className='btn btn-secondary m-2'\n                onClick={() => setLabels((labels) => !labels)}\n            >\n                Click here to {labels ? 'hide' : 'show'} labels\n            </button>\n            <button className='btn btn-secondary m-2' onClick={() => setSpace((space) => !space)}>\n                Click here to use {space ? 'geographical' : 'space'} longitude\n            </button>\n            <RStyle.RStyle ref={style}>\n                <RStyle.RStroke color='red' width={4} />\n                <RStyle.RText text='' scale={2} offsetY={-10} offsetX={-10}>\n                    <RStyle.RStroke color='green' width={2} />\n                    <RStyle.RFill color='black' />\n                </RStyle.RText>\n            </RStyle.RStyle>\n            <RMap\n                width={'100%'}\n                height={'60vh'}\n                initial={{center: center, zoom: 1}}\n                projection={proj}\n                extent={extent}\n            >\n                <RLayerImage\n                    url={\n                        'https://upload.wikimedia.org/wikipedia/commons/1/17/Plate_Carr%C3%A9e_with_Tissot%27s_Indicatrices_of_Distortion.svg'\n                    }\n                    extent={extent}\n                />\n                {/* RLayerGraticule does not support inline styles nor dynamically updating styles */}\n                <RLayerGraticule\n                    visible={graticule}\n                    showLabels={labels}\n                    strokeStyle={style}\n                    latLabelStyle={style}\n                    lonLabelStyle={style}\n                    lonLabelFormatter={space ? lonSpace : lonGeo}\n                />\n            </RMap>\n        </React.Fragment>\n    );\n}\n"}}]);