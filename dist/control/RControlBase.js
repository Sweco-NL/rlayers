"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = require("../context");
var REvent_1 = require("../REvent");
var RControlBase = (function (_super) {
    __extends(RControlBase, _super);
    function RControlBase(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (!_this.context || !_this.context.addControl)
            throw new Error('A control must be part of a map');
        return _this;
    }
    RControlBase.prototype.toOLProps = function (props) {
        var _a;
        return {
            target: (_a = props.target) === null || _a === void 0 ? void 0 : _a.current
        };
    };
    RControlBase.prototype.refresh = function () {
        _super.prototype.refresh.call(this);
        this.ol.setProperties(this.toOLProps(this.props));
    };
    RControlBase.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.context.addControl(this.ol);
    };
    RControlBase.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.context.removeControl(this.ol);
    };
    RControlBase.contextType = context_1.RMapContext;
    return RControlBase;
}(REvent_1.ReactLayersBase));
exports.default = RControlBase;
//# sourceMappingURL=RControlBase.js.map