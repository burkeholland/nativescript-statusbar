import * as common from "./statusbar-common";
import * as definition from "./";
import * as utils from "tns-core-modules/utils/utils";
import * as frame from "tns-core-modules/ui/frame";
import * as color from "tns-core-modules/color";

declare var UIApplication, UIView, UIViewAutoresizingFlexibleWidth, UIViewAutoresizingFlexibleBottomMargin: any;

let StatusBarView;

export class StatusBar extends common.StatusBar {

    private getStatusBarView() {
        if (!StatusBarView) {
            var statusBarFrame = utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarFrame;
            StatusBarView = UIView.alloc().initWithFrame(statusBarFrame);
            StatusBarView.autoresizingMask = (UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleBottomMargin);
            StatusBarView.autoresizesSubviews = true;
            frame.topmost().ios.controller.view.superview.addSubview(StatusBarView);
        }
        return StatusBarView;
    }

    public updateBarStyle(value: string) {
        try {
            var navController = frame.topmost().ios.controller;
            var navigationBar = navController.navigationBar;
            navigationBar.barStyle = value;
        }
        catch (err) {
            console.log(err);
        }
    }

    public updateBarColor(value: string) {
        try {
            if (value) {
                this.getStatusBarView().backgroundColor = new color.Color(value).ios;
            }
        } catch (err) {
            console.log(err);
        }
    }

    constructor(options?: definition.Options) {
        super(options);
    }
}