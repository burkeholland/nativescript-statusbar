"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common = require("./statusbar-common");
var utils = require("utils/utils");
var frame = require("ui/frame");
var color = require("color");
var StatusBarView;
var StatusBar = (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar(options) {
        return _super.call(this, options) || this;
    }
    StatusBar.prototype.getStatusBarView = function () {
        if (!StatusBarView) {
            var statusBarFrame = utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarFrame;
            StatusBarView = UIView.alloc().initWithFrame(statusBarFrame);
            StatusBarView.autoresizingMask = (UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleBottomMargin);
            StatusBarView.autoresizesSubviews = true;
            frame.topmost().ios.controller.view.superview.addSubview(StatusBarView);
        }
        return StatusBarView;
    };
    StatusBar.prototype.updateBarStyle = function (value) {
        try {
            var navController = frame.topmost().ios.controller;
            var navigationBar = navController.navigationBar;
            navigationBar.barStyle = value;
        }
        catch (err) {
            console.log(err);
        }
    };
    StatusBar.prototype.updateBarColor = function (value) {
        try {
            if (value) {
                this.getStatusBarView().backgroundColor = new color.Color(value).ios;
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    return StatusBar;
}(common.StatusBar));
exports.StatusBar = StatusBar;
