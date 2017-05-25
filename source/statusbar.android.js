"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./statusbar-common");
var platform = require("platform");
var color = require("color");
var app = require("application");
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(options) {
        return _super.call(this, options) || this;
    }
    StatusBar.prototype.updateBarColor = function (value) {
        try {
            if (value && platform.device.sdkVersion >= "21") {
                var nativeColor = new color.Color(value).android;
                var window = app.android.startActivity.getWindow();
                window.setStatusBarColor(nativeColor);
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    return StatusBar;
}(common.StatusBar));
exports.StatusBar = StatusBar;
