"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var view_1 = require("ui/core/view");
var dependencyObservable = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var app = require("application");
var BARSTYLE = "barStyle", BARCOLOR = "barColor", STATUSBAR = "StatusBar";
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
        var value_1 = data.newValue;
        if (app.ios) {
            setTimeout(function () { statusbar_1.updateBarStyle(BarStyle[value_1]); });
        }
        if (app.android) {
            setTimeout(function () { statusbar_1.updateBarColor(value_1); });
        }
    }
    catch (err) {
        console.log(err);
    }
};
var onBarColorPropertyChanged = function (data) {
    try {
        var statusbar_2 = data.object;
        var value_2 = data.newValue;
        setTimeout(function () { statusbar_2.updateBarColor(value_2); });
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
    StatusBar.prototype.updateBarStyle = function (value) {
    };
    StatusBar.prototype.updateBarColor = function (value) {
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
    Object.defineProperty(StatusBar.prototype, "barColor", {
        get: function () {
            return this._getValue(StatusBar.barColorProperty);
        },
        set: function (value) {
            this._setValue(StatusBar.barColorProperty, value);
        },
        enumerable: true,
        configurable: true
    });
    StatusBar.barStyleProperty = new dependencyObservable.Property(BARSTYLE, STATUSBAR, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarStylePropertyChanged));
    StatusBar.barColorProperty = new dependencyObservable.Property(BARCOLOR, STATUSBAR, new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarColorPropertyChanged));
    return StatusBar;
}(view_1.View));
exports.StatusBar = StatusBar;
