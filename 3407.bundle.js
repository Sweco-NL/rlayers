"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[3407],{3407:(e,n,r)=>{r.r(n),r.d(n,{default:()=>o});const o="import React from 'react';\nimport {RMap, RContextType} from 'rlayers';\nimport {default as RLayer, RLayerProps} from 'rlayers/layer/RLayer';\n\nimport LayerTile from 'ol/layer/WebGLTile.js';\nimport {GeoTIFF} from 'ol/source';\nimport 'ol/ol.css';\n\nimport proj4 from 'proj4';\nimport {register} from 'ol/proj/proj4';\n\n// This projection is used in the example\nproj4.defs('EPSG:32636', '+proj=utm +zone=36 +ellps=WGS84 +datum=WGS84 +units=m +no_defs');\nregister(proj4);\n\n/**\n * @propsfor RLayerGeoTIFF\n */\nexport interface RLayerGeoTIFFProps extends RLayerProps {\n    /** URLs of the GeoTIFFs, there must be at least one */\n    urls: string[];\n}\n\n/**\n * This example shows how to extend RLayers with a component\n * that renders a layer from a COG (Cloud-Optimized GeoTIFF)\n *\n * It implements the Openlayers example from\n * https://openlayers.org/en/latest/examples/cog.html\n *\n * Requires an `RMap` context\n */\nclass RLayerGeoTIFF extends RLayer<RLayerGeoTIFFProps> {\n    ol: LayerTile;\n    source: GeoTIFF;\n\n    constructor(props: Readonly<RLayerGeoTIFFProps>, context: React.Context<RContextType>) {\n        super(props, context);\n        this.createSource();\n        this.ol = new LayerTile({source: this.source});\n        this.eventSources = [this.ol, this.source];\n    }\n\n    createSource(): void {\n        this.source = new GeoTIFF({\n            sources: this.props.urls.map((u) => ({url: u}))\n        });\n        this.eventSources = [this.ol, this.source];\n    }\n\n    // This is needed only if you want to automatically import\n    // the GeoTIFF metadata into a View\n    componentDidMount(): void {\n        super.componentDidMount();\n        this.context.map.setView(this.source.getView());\n    }\n\n    refresh(prevProps?: RLayerGeoTIFFProps): void {\n        super.refresh(prevProps);\n        if (\n            prevProps?.urls?.length === this.props.urls.length &&\n            this.props.urls.every((e, i) => e === prevProps?.urls?.[i])\n        )\n            return;\n\n        this.createSource();\n        this.ol.setSource(this.source);\n        this.attachOldEventHandlers(this.source);\n    }\n}\n\nexport default function Example(): JSX.Element {\n    return (\n        <RMap width={'100%'} height={'60vh'} initial={{center: [0, 0], zoom: 1}}>\n            <RLayerGeoTIFF\n                properties={{label: 'GeoTIFF'}}\n                urls={[\n                    'https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif'\n                ]}\n            />\n        </RMap>\n    );\n}\n"}}]);