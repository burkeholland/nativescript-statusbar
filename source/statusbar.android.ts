import * as common from "./statusbar-common";
import * as definition from "statusbar";
import * as platform from "platform";
import * as color from "color";
import * as app from "application";

export class StatusBar extends common.StatusBar {

    public updateBarColor(value: string) {
        try {
            if (value && platform.device.sdkVersion >= "21") {
                var nativeColor = new color.Color(value).android;
                var window = app.android.startActivity.getWindow();
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
