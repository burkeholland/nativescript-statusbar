import * as definition from "statusbar";
import { View, Property } from "ui/core/view";
import * as app from "application";

let BARSTYLE = "barStyle",
    BARCOLOR = "barColor";

enum BarStyle {
    default,
    light,
    dark,
    opaque
}

let onBarStylePropertyChanged = (view, oldValue, newValue) => {
    try {
        let statusbar = <StatusBar>view;
        let value = newValue;

        if (app.ios) {
            setTimeout(() => { statusbar.updateBarStyle(BarStyle[value]); });
        }

        // backward compatibility
        if (app.android) {
            setTimeout(() => { statusbar.updateBarColor(value); });
        }
    }
    catch (err) {
        console.log(err);
    }
}

let onBarColorPropertyChanged = (view, oldValue, newValue) => {
    try {
        let statusbar = <StatusBar>view;
        let value = newValue;
        setTimeout(() => { statusbar.updateBarColor(value); });
    }
    catch (err) {
        console.log(err);
    }
}

export class StatusBar extends View implements definition.StatusBar {

     constructor(options?: definition.Options) {
        super();
        //TODO: super(options);
    }

    public updateBarStyle(value: string) {

    }

    public updateBarColor(value: string) {

    }
}

export const barStyleProperty = new Property<StatusBar, string>({
    name: BARSTYLE,
    valueChanged: onBarStylePropertyChanged
});
barStyleProperty.register(StatusBar);
 
export const barColorProperty = new Property<StatusBar, string>({
    name: BARCOLOR,
    valueChanged: onBarColorPropertyChanged
});
barColorProperty.register(StatusBar);
   
