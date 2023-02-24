"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3433],{3433:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});const r="/*\n * This example illustrates using vector tiles\n * and\n * layers that appear only when zoomed in\n */\n\nimport React, {useCallback} from 'react';\nimport {Feature} from 'ol';\nimport {fromLonLat} from 'ol/proj';\nimport {MVT} from 'ol/format';\nimport 'ol/ol.css';\n\nimport {RMap, RLayerTile, RLayerVectorTile} from 'rlayers';\nimport {useRStyle, RStyle, RStyleArray, RStroke, RFill, RCircle, RText} from 'rlayers/style';\nimport {Geometry} from 'ol/geom';\n\nconst degree = 111319.49079327358;\nconst fonts = {\n    0: {width: 6, font: '1.2rem helvetica,sans-serif'},\n    1: {width: 5, font: '0.6rem helvetica,sans-serif'},\n    2: {width: 3, font: '0.5rem helvetica,sans-serif'},\n    def: {width: 1, font: '0.4rem helvetica,sans-serif'}\n};\n\n/*\n * If you know about any open and free to use vector tile services, please let me know\n * This example uses the velivole.fr administrative boundary server which serves EPSG:4326\n *\n * You can also find a primitive pbf tile server based on geojson-vt\n * at https://github.com/mmomtchev/geojson-vt-server.git\n */\nexport default function VectorTiles(): JSX.Element {\n    const [country, setCountry] = React.useState('');\n    const towns = useRStyle();\n    return (\n        <React.Fragment>\n            <RStyleArray\n                ref={towns}\n                render={useCallback((feature: Feature<Geometry>) => {\n                    /* This is a the towns style\n                     *\n                     * This examples illustrates superposing two image elements (two circles)\n                     *\n                     * This is a dynamic style that creates a new object\n                     * every time it is access\n                     * Use with care\n                     */\n\n                    const {width, font} = fonts[feature.get('p')] ?? fonts.def;\n                    const color =\n                        '#ffff' +\n                        feature.get('c').charAt(0).toString('hex').substring(0, 2).padStart(2, '0');\n                    return (\n                        <React.Fragment>\n                            <RStyle zIndex={10}>\n                                <RCircle radius={width}>\n                                    <RStroke color={'#007bff'} width={width} />\n                                    <RFill color={'#007bff'} />\n                                </RCircle>\n                                <RText font={font} text={feature.get('n')}>\n                                    <RStroke color={'#007bff'} width={2} />\n                                    <RFill color={color} />\n                                </RText>\n                            </RStyle>\n                            <RStyle zIndex={0}>\n                                <RCircle radius={width * 1.5}>\n                                    <RStroke color={'#000000'} width={width * 1.5} />\n                                    <RFill color={'#000000'} />\n                                </RCircle>\n                            </RStyle>\n                        </React.Fragment>\n                    );\n                }, [])}\n            />\n            <RMap\n                className='example-map'\n                initial={{center: fromLonLat([2.364, 48.82], 'EPSG:4326'), zoom: 8}}\n                projection='EPSG:4326'\n            >\n                {/* This is the background raster map */}\n                <RLayerTile\n                    properties={{label: 'Watercolor'}}\n                    projection='EPSG:3857'\n                    url='https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg'\n                />\n                {/* These are the administrative borders */}\n                <RLayerVectorTile\n                    onPointerEnter={React.useCallback(\n                        (e) =>\n                            e.target?.get &&\n                            setCountry(e.target.get('n') + ', ' + e.target.get('c')),\n                        [setCountry]\n                    )}\n                    url='https://velivole.b-cdn.net/tiles/admin/{z}/{x}/{y}.pbf'\n                    projection='EPSG:4326'\n                    format={new MVT()}\n                >\n                    <RStyle>\n                        {/* This is the borders style */}\n                        <RStroke color='#007bff' width={2} />\n                        <RFill color='transparent' />\n                    </RStyle>\n                </RLayerVectorTile>\n                {/* These are the cities */}\n                <RLayerVectorTile\n                    url='https://velivole.b-cdn.net/tiles/place/0/{z}/{x}/{y}.pbf'\n                    projection='EPSG:4326'\n                    maxResolution={0.01}\n                    style={towns}\n                    format={new MVT()}\n                />\n                {/* The towns visible only when zoomed in */}\n                <RLayerVectorTile\n                    url='https://velivole.b-cdn.net/tiles/place/1/{z}/{x}/{y}.pbf'\n                    projection='EPSG:4326'\n                    maxResolution={0.0025}\n                    style={towns}\n                    format={new MVT()}\n                />\n                {/* The small villages at maximum resolution */}\n                <RLayerVectorTile\n                    url='https://velivole.b-cdn.net/tiles/place/2/{z}/{x}/{y}.pbf'\n                    projection='EPSG:4326'\n                    maxResolution={0.0005}\n                    style={towns}\n                    format={new MVT()}\n                />\n            </RMap>\n            <div className='mx-0 mt-0 mb-3 p-1 w-100 jumbotron shadow shadow'>\n                <p>\n                    You are now in <strong>{country}</strong>\n                </p>\n            </div>\n        </React.Fragment>\n    );\n}\n"}}]);