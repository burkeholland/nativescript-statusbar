import definition = require("statusbar");
import { View } from "ui/core/view";
import * as dependencyObservable from "ui/core/dependency-observable";
import * as proxy from "ui/core/proxy";

let BARSTYLE = "barStyle",
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
        
        setTimeout(() => { statusbar.update(BarStyle[value]); });
    }
    catch (err) {
        console.log(err);
    }
}

export class StatusBar extends View implements definition.StatusBar {  
    
    public static  barStyleProperty = new dependencyObservable.Property(
        BARSTYLE,
        STATUSBAR,
        new proxy.PropertyMetadata(undefined, dependencyObservable.PropertyMetadataSettings.None, onBarStylePropertyChanged)
    );
    
    constructor(options?: definition.Options) {
        super(options);
    }
    
    public update(value: string) {
        
    }
    
    get barStyle(): any {
        return this._getValue(StatusBar.barStyleProperty);
    }
    set barStyle(value: any) {
        this._setValue(StatusBar.barStyleProperty, value);
    }
}