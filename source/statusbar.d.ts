/**
 * Contains the StatusBar class, which allows setting of the status bar style on iOS via markup.
 */
declare module "nativescript-statusbar" {

  import { View } from "tns-core-modules/ui/core/view";

  /**
   * Represents a StatusBar widget.
   */
  export class StatusBar extends View {
    /*
    * Updates the style of the status bar to the supplied value
    */
    updateBarStyle(value: string): void;

    /*
    * Updates the color of the status bar to the supplied value
    */
    updateBarColor(value: string): void;

    android: any /* android.widget.VideoView */;

    ios: any /* AVPlayerViewController */;
  }

  export interface Options {

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
