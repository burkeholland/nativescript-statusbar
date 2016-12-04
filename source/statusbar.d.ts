/**
 * Contains the StatusBar class, which allows setting of the status bar style on iOS via markup.
 */
declare module "statusbar" {

    import view = require("ui/core/view");
    import * as dependencyObservable from "ui/core/dependency-observable";

    /**
     * Represents a StatusBar widget.
     */
    export class StatusBar extends view.View {

        /*
        * Dependency property used to support binding operations for setting the status bar style. 
        */
        public static barStyleProperty: dependencyObservable.Property;

        /*
        * Dependency property used to support binding operations for setting the status bar color. 
        */
        public static barColorProperty: dependencyObservable.Property;

        /*
        * Updates the style of the status bar to the supplied value
        */
        updateBarStyle(value: string);

        /*
        * Updates the color of the status bar to the supplied value
        */
        updateBarColor(value: string);

        /*
        * Gets or sets the style of the status bar
        */
        barStyle: string;

        /*
        * Gets or sets the color of the status bar
        */
        barColor: string;

        android: any /* android.widget.VideoView */;

        ios: any /* AVPlayerViewController */;
    }

    export interface Options extends view.Options {

        /*
        * Gets or sets the style of the status bar
        */
        barStyle: string;

        /*
        * Gets or sets the color of the status bar
        */
        barColor: string;

    }
}