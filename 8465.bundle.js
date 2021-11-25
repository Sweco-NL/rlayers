"use strict";(self.webpackChunkrlayers=self.webpackChunkrlayers||[]).push([[8465],{9646:(e,t,r)=>{r.d(t,{ZP:()=>s,fI:()=>u});var o=r(8375),n=r(4187),i=r(9374),a=r(6414);const s=function(){function e(){this.dataProjection=void 0,this.defaultFeatureProjection=void 0,this.supportedMediaTypes=null}return e.prototype.getReadOptions=function(e,t){var r;if(t){var n=t.dataProjection?(0,a.U2)(t.dataProjection):this.readProjection(e);t.extent&&n&&n.getUnits()===o.ZP.TILE_PIXELS&&(n=(0,a.U2)(n)).setWorldExtent(t.extent),r={dataProjection:n,featureProjection:t.featureProjection}}return this.adaptOptions(r)},e.prototype.adaptOptions=function(e){return(0,i.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},e)},e.prototype.getType=function(){return(0,n.O3)()},e.prototype.readFeature=function(e,t){return(0,n.O3)()},e.prototype.readFeatures=function(e,t){return(0,n.O3)()},e.prototype.readGeometry=function(e,t){return(0,n.O3)()},e.prototype.readProjection=function(e){return(0,n.O3)()},e.prototype.writeFeature=function(e,t){return(0,n.O3)()},e.prototype.writeFeatures=function(e,t){return(0,n.O3)()},e.prototype.writeGeometry=function(e,t){return(0,n.O3)()},e}();function u(e,t,r){var o,n=r?(0,a.U2)(r.featureProjection):null,i=r?(0,a.U2)(r.dataProjection):null;if(o=n&&i&&!(0,a.OP)(n,i)?(t?e.clone():e).transform(t?n:i,t?i:n):e,t&&r&&void 0!==r.decimals){var s=Math.pow(10,r.decimals);o===e&&(o=e.clone()),o.applyTransform((function(e){for(var t=0,r=e.length;t<r;++t)e[t]=Math.round(e[t]*s)/s;return e}))}return o}},8465:(e,t,r)=>{r.d(t,{Z:()=>C});var o,n=r(1090),i=r(5487),a=r(1694),s=r(4754),u=r(8641),c=r(5818),p=(o=function(e,t){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},o(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)});function f(e){for(var t=[],r=0,o=e.length;r<o;++r)t.push(e[r].clone());return t}const y=function(e){function t(t){var r=e.call(this)||this;return r.geometries_=t||null,r.changeEventsKeys_=[],r.listenGeometriesChange_(),r}return p(t,e),t.prototype.unlistenGeometriesChange_=function(){this.changeEventsKeys_.forEach(c.bN),this.changeEventsKeys_.length=0},t.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var e=0,t=this.geometries_.length;e<t;++e)this.changeEventsKeys_.push((0,c.oL)(this.geometries_[e],i.Z.CHANGE,this.changed,this))},t.prototype.clone=function(){var e=new t(null);return e.setGeometries(this.geometries_),e.applyProperties(this),e},t.prototype.closestPointXY=function(e,t,r,o){if(o<(0,u.qf)(this.getExtent(),e,t))return o;for(var n=this.geometries_,i=0,a=n.length;i<a;++i)o=n[i].closestPointXY(e,t,r,o);return o},t.prototype.containsXY=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)if(r[o].containsXY(e,t))return!0;return!1},t.prototype.computeExtent=function(e){(0,u.YN)(e);for(var t=this.geometries_,r=0,o=t.length;r<o;++r)(0,u.l7)(e,t[r].getExtent());return e},t.prototype.getGeometries=function(){return f(this.geometries_)},t.prototype.getGeometriesArray=function(){return this.geometries_},t.prototype.getGeometriesArrayRecursive=function(){for(var e=[],t=this.geometries_,r=0,o=t.length;r<o;++r)t[r].getType()===this.getType()?e=e.concat(t[r].getGeometriesArrayRecursive()):e.push(t[r]);return e},t.prototype.getSimplifiedGeometry=function(e){if(this.simplifiedGeometryRevision!==this.getRevision()&&(this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),e<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&e<this.simplifiedGeometryMaxMinSquaredTolerance)return this;for(var r=[],o=this.geometries_,n=!1,i=0,a=o.length;i<a;++i){var s=o[i],u=s.getSimplifiedGeometry(e);r.push(u),u!==s&&(n=!0)}if(n){var c=new t(null);return c.setGeometriesArray(r),c}return this.simplifiedGeometryMaxMinSquaredTolerance=e,this},t.prototype.getType=function(){return s.Z.GEOMETRY_COLLECTION},t.prototype.intersectsExtent=function(e){for(var t=this.geometries_,r=0,o=t.length;r<o;++r)if(t[r].intersectsExtent(e))return!0;return!1},t.prototype.isEmpty=function(){return 0===this.geometries_.length},t.prototype.rotate=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].rotate(e,t);this.changed()},t.prototype.scale=function(e,t,r){var o=r;o||(o=(0,u.qg)(this.getExtent()));for(var n=this.geometries_,i=0,a=n.length;i<a;++i)n[i].scale(e,t,o);this.changed()},t.prototype.setGeometries=function(e){this.setGeometriesArray(f(e))},t.prototype.setGeometriesArray=function(e){this.unlistenGeometriesChange_(),this.geometries_=e,this.listenGeometriesChange_(),this.changed()},t.prototype.applyTransform=function(e){for(var t=this.geometries_,r=0,o=t.length;r<o;++r)t[r].applyTransform(e);this.changed()},t.prototype.translate=function(e,t){for(var r=this.geometries_,o=0,n=r.length;o<n;++o)r[o].translate(e,t);this.changed()},t.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),e.prototype.disposeInternal.call(this)},t}(a.Z);var l=r(9646),h=r(6617),m=r(4187),d=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();function g(e){return"string"==typeof e?JSON.parse(e)||null:null!==e?e:null}const O=function(e){function t(){return e.call(this)||this}return d(t,e),t.prototype.getType=function(){return h.Z.JSON},t.prototype.readFeature=function(e,t){return this.readFeatureFromObject(g(e),this.getReadOptions(e,t))},t.prototype.readFeatures=function(e,t){return this.readFeaturesFromObject(g(e),this.getReadOptions(e,t))},t.prototype.readFeatureFromObject=function(e,t){return(0,m.O3)()},t.prototype.readFeaturesFromObject=function(e,t){return(0,m.O3)()},t.prototype.readGeometry=function(e,t){return this.readGeometryFromObject(g(e),this.getReadOptions(e,t))},t.prototype.readGeometryFromObject=function(e,t){return(0,m.O3)()},t.prototype.readProjection=function(e){return this.readProjectionFromObject(g(e))},t.prototype.readProjectionFromObject=function(e){return(0,m.O3)()},t.prototype.writeFeature=function(e,t){return JSON.stringify(this.writeFeatureObject(e,t))},t.prototype.writeFeatureObject=function(e,t){return(0,m.O3)()},t.prototype.writeFeatures=function(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))},t.prototype.writeFeaturesObject=function(e,t){return(0,m.O3)()},t.prototype.writeGeometry=function(e,t){return JSON.stringify(this.writeGeometryObject(e,t))},t.prototype.writeGeometryObject=function(e,t){return(0,m.O3)()},t}(l.ZP);var _=r(2083),v=r(7403),j=r(6259),G=r(5063),P=r(188),b=r(3083),w=r(9515),F=r(9374),T=r(6414),E=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},e(t,r)};return function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function o(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(o.prototype=r.prototype,new o)}}();function N(e,t){if(!e)return null;var r;switch(e.type){case s.Z.POINT:r=function(e){return new P.Z(e.coordinates)}(e);break;case s.Z.LINE_STRING:r=function(e){return new _.Z(e.coordinates)}(e);break;case s.Z.POLYGON:r=function(e){return new b.ZP(e.coordinates)}(e);break;case s.Z.MULTI_POINT:r=function(e){return new j.Z(e.coordinates)}(e);break;case s.Z.MULTI_LINE_STRING:r=function(e){return new v.Z(e.coordinates)}(e);break;case s.Z.MULTI_POLYGON:r=function(e){return new G.Z(e.coordinates)}(e);break;case s.Z.GEOMETRY_COLLECTION:r=function(e,t){var r=e.geometries.map((function(e){return N(e,undefined)}));return new y(r)}(e);break;default:throw new Error("Unsupported GeoJSON type: "+e.type)}return(0,l.fI)(r,!1,t)}function I(e,t){var r,o=(e=(0,l.fI)(e,!0,t)).getType();switch(o){case s.Z.POINT:r=function(e,t){return{type:"Point",coordinates:e.getCoordinates()}}(e);break;case s.Z.LINE_STRING:r=function(e,t){return{type:"LineString",coordinates:e.getCoordinates()}}(e);break;case s.Z.POLYGON:r=function(e,t){var r;return t&&(r=t.rightHanded),{type:"Polygon",coordinates:e.getCoordinates(r)}}(e,t);break;case s.Z.MULTI_POINT:r=function(e,t){return{type:"MultiPoint",coordinates:e.getCoordinates()}}(e);break;case s.Z.MULTI_LINE_STRING:r=function(e,t){return{type:"MultiLineString",coordinates:e.getCoordinates()}}(e);break;case s.Z.MULTI_POLYGON:r=function(e,t){var r;return t&&(r=t.rightHanded),{type:"MultiPolygon",coordinates:e.getCoordinates(r)}}(e,t);break;case s.Z.GEOMETRY_COLLECTION:r=function(e,t){return{type:"GeometryCollection",geometries:e.getGeometriesArray().map((function(e){var r=(0,F.f0)({},t);return delete r.featureProjection,I(e,r)}))}}(e,t);break;case s.Z.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}const C=function(e){function t(t){var r=this,o=t||{};return(r=e.call(this)||this).dataProjection=(0,T.U2)(o.dataProjection?o.dataProjection:"EPSG:4326"),o.featureProjection&&(r.defaultFeatureProjection=(0,T.U2)(o.featureProjection)),r.geometryName_=o.geometryName,r.extractGeometryName_=o.extractGeometryName,r.supportedMediaTypes=["application/geo+json","application/vnd.geo+json"],r}return E(t,e),t.prototype.readFeatureFromObject=function(e,t){var r,o=N((r="Feature"===e.type?e:{type:"Feature",geometry:e,properties:null}).geometry,t),i=new n.Z;return this.geometryName_?i.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&i.setGeometryName(r.geometry_name),i.setGeometry(o),"id"in r&&i.setId(r.id),r.properties&&i.setProperties(r.properties,!0),i},t.prototype.readFeaturesFromObject=function(e,t){var r=null;if("FeatureCollection"===e.type){r=[];for(var o=e.features,n=0,i=o.length;n<i;++n)r.push(this.readFeatureFromObject(o[n],t))}else r=[this.readFeatureFromObject(e,t)];return r},t.prototype.readGeometryFromObject=function(e,t){return N(e,t)},t.prototype.readProjectionFromObject=function(e){var t,r=e.crs;return r?"name"==r.type?t=(0,T.U2)(r.properties.name):"EPSG"===r.type?t=(0,T.U2)("EPSG:"+r.properties.code):(0,w.h)(!1,36):t=this.dataProjection,t},t.prototype.writeFeatureObject=function(e,t){t=this.adaptOptions(t);var r={type:"Feature",geometry:null,properties:null},o=e.getId();if(void 0!==o&&(r.id=o),!e.hasProperties())return r;var n=e.getProperties(),i=e.getGeometry();return i&&(r.geometry=I(i,t),delete n[e.getGeometryName()]),(0,F.xb)(n)||(r.properties=n),r},t.prototype.writeFeaturesObject=function(e,t){t=this.adaptOptions(t);for(var r=[],o=0,n=e.length;o<n;++o)r.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:r}},t.prototype.writeGeometryObject=function(e,t){return I(e,this.adaptOptions(t))},t}(O)}}]);