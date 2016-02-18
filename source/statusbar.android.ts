import common = require("./statusbar-common");
import definition = require("statusbar");
import platform = require("platform");
import app = require("application");
import color = require("color");

export class StatusBar extends common.StatusBar {
    
    public update(value: string) {
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
