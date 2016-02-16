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
        * Updates the style of the status bar to the supplied value
        */
        update(value: string);

        /*
        * Gets or sets the style of the status bar
        */
        barStyle: string;         
         
        android: any /* android.widget.VideoView */;

        ios: any /* AVPlayerViewController */;
    }
    
    export interface Options extends view.Options {
    
        /*
        * Gets or sets the style of the status bar
        */
        barStyle: string;
  
    }
}