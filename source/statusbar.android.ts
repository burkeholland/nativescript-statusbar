import common = require("./statusbar-common");
import definition = require("statusbar");
import app = require("application");
import color = require("color");

export class StatusBar extends common.StatusBar {
    
    public update(value: string) {
        try {
            if (value) {
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
