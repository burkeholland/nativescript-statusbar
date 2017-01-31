import * as definition from "statusbar";
import { View } from "ui/core/view";
import * as dependencyObservable from "ui/core/dependency-observable";
import * as proxy from "ui/core/proxy";
import * as app from "application";

let BARSTYLE = "barStyle",
    BARCOLOR = "barColor",
    STATUSBAR = "StatusBar";

enum BarStyle {
    default,
    light,
    dark,
    opaque
}

let onBarStylePropertyChanged = (data: dependencyObservable.PropertyChangeData) => {
    try {
        let statusbar = <StatusBar>data.object;
        let value = data.newValue;

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

let onBarColorPropertyChanged = (data: dependencyObservable.PropertyChangeData) => {
    try {
        let statusbar = <StatusBar>data.object;
        let value = data.newValue;
        setTimeout(() => { statusbar.updateBarColor(value); });
    }
    catch (err) {
        console.log(err);
    }
}

export class StatusBar extends View implements definition.StatusBar {

    public static barStyleProperty = new dependencyObservable.Property(
        BARSTYLE,
        STATUSBAR,
        new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarStylePropertyChanged)
    );

    public static barColorProperty = new dependencyObservable.Property(
        BARCOLOR,
        STATUSBAR,
        new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarColorPropertyChanged)
    );

    constructor(options?: definition.Options) {
        super(options);
    }

    public updateBarStyle(value: string) {

    }

    public updateBarColor(value: string) {

    }

    get barStyle(): any {
        return this._getValue(StatusBar.barStyleProperty);
    }

    set barStyle(value: any) {
        this._setValue(StatusBar.barStyleProperty, value);
    }

    get barColor(): any {
        return this._getValue(StatusBar.barColorProperty);
    }

    set barColor(value: any) {
        this._setValue(StatusBar.barColorProperty, value);
    }
}
