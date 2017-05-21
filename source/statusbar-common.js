"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("ui/core/view");
var app = require("application");
var BARSTYLE = "barStyle", BARCOLOR = "barColor";
var BarStyle;
(function (BarStyle) {
    BarStyle[BarStyle["default"] = 0] = "default";
    BarStyle[BarStyle["light"] = 1] = "light";
    BarStyle[BarStyle["dark"] = 2] = "dark";
    BarStyle[BarStyle["opaque"] = 3] = "opaque";
})(BarStyle || (BarStyle = {}));
var onBarStylePropertyChanged = function (view, oldValue, newValue) {
    try {
        var statusbar_1 = view;
        var value_1 = newValue;
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
var onBarColorPropertyChanged = function (view, oldValue, newValue) {
    try {
        var statusbar_2 = view;
        var value_2 = newValue;
        setTimeout(function () { statusbar_2.updateBarColor(value_2); });
    }
    catch (err) {
        console.log(err);
    }
};
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(options) {
        return _super.call(this) || this;
    }
    StatusBar.prototype.updateBarStyle = function (value) {
    };
    StatusBar.prototype.updateBarColor = function (value) {
    };
    return StatusBar;
}(view_1.View));
exports.StatusBar = StatusBar;
exports.barStyleProperty = new view_1.Property({
    name: BARSTYLE,
    valueChanged: onBarStylePropertyChanged
});
exports.barStyleProperty.register(StatusBar);
exports.barColorProperty = new view_1.Property({
    name: BARCOLOR,
    valueChanged: onBarColorPropertyChanged
});
exports.barColorProperty.register(StatusBar);
