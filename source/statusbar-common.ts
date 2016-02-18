var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_1 = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var app = require("application");
var BARSTYLE = "barStyle", STATUSBAR = "StatusBar";
var BarStyle;
(function (BarStyle) {
    BarStyle[BarStyle["default"] = 0] = "default";
    BarStyle[BarStyle["light"] = 1] = "light";
    BarStyle[BarStyle["dark"] = 2] = "dark";
    BarStyle[BarStyle["opaque"] = 3] = "opaque";
})(BarStyle || (BarStyle = {}));
var onBarStylePropertyChanged = function (data) {
    try {
        var statusbar_1 = data.object;
        var value = data.newValue;
        if (app.ios) {
            setTimeout(function () { statusbar_1.update(BarStyle[value]); });
        }
        if (app.android) {
            setTimeout(function () { statusbar_1.update(value); });
        }
    }
    catch (err) {
        console.log(err);
    }
};
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(options) {
        _super.call(this, options);
    }
    StatusBar.prototype.update = function (value) {
    };
    Object.defineProperty(StatusBar.prototype, "barStyle", {
        get: function () {
            return this._getValue(StatusBar.barStyleProperty);
        },
        set: function (value) {
            this._setValue(StatusBar.barStyleProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    StatusBar.barStyleProperty = new dependencyObservable.Property(BARSTYLE, STATUSBAR, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarStylePropertyChanged));
    return StatusBar;
})(view_1.View);
exports.StatusBar = StatusBar;
