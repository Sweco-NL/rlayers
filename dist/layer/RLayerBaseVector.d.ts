import React from 'react';
import { Map, Feature, MapBrowserEvent } from 'ol';
import { VectorSourceEvent } from 'ol/source/Vector';
import RenderEvent from 'ol/render/Event';
import BaseVector from 'ol/layer/BaseVector';
import { Vector as SourceVector } from 'ol/source';
import FeatureFormat from 'ol/format/Feature';
import { StyleLike } from 'ol/style/Style';
import { default as RLayer, RLayerProps } from './RLayer';
export interface RLayerBaseVectorProps extends RLayerProps {
    url?: string;
    renderBuffer?: number;
    features?: Feature[];
    format?: FeatureFormat;
    style?: StyleLike;
    onClick?: (e: MapBrowserEvent) => boolean | void;
    onAddFeature?: (e: VectorSourceEvent) => boolean | void;
    onPointerMove?: (e: MapBrowserEvent) => boolean | void;
    onPointerEnter?: (e: MapBrowserEvent) => boolean | void;
    onPointerLeave?: (e: MapBrowserEvent) => boolean | void;
    onPostRender?: (e: RenderEvent) => boolean | void;
    onPreRender?: (e: RenderEvent) => boolean | void;
}
export default class RLayerBaseVector<P extends RLayerBaseVectorProps> extends RLayer<P> {
    ol: BaseVector;
    source: SourceVector;
    context: Map;
    constructor(props: Readonly<P>, context: React.Context<Map>);
    newFeature: (e: VectorSourceEvent) => void;
    attachNewFeatureHandlers(RFeatures: Feature[]): void;
    attachExistingFeatureHandlers(prevProps?: P): void;
    eventRelay: (e: MapBrowserEvent) => boolean;
    componentWillUnmount(): void;
    refresh(prevProps?: P): void;
    render(): JSX.Element;
}
//# sourceMappingURL=RLayerBaseVector.d.ts.map