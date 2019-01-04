import * as common from "./statusbar-common";
import * as definition from "./";
import * as platform from "tns-core-modules/platform";
import * as color from "tns-core-modules/color";
import * as app from "tns-core-modules/application";

export class StatusBar extends common.StatusBar {

    public updateBarColor(value: string) {
        try {
            if (value && platform.device.sdkVersion >= "21") {
                var nativeColor = new color.Color(value).android;
                var window = app.android.foregroundActivity.getWindow();
                window.setStatusBarColor(nativeColor);
            }
        } catch (err) {
            console.log(err);
        }
    }

    constructor(options?: definition.Options) {
        super(options);
    }
}
