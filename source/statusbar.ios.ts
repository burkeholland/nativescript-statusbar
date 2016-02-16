import common = require("./statusbar-common");
import definition = require("statusbar");
import * as frame from "ui/frame";

export class StatusBar extends common.StatusBar {
    
    public update(value: string) {        
        try {
            var navController = frame.topmost().ios.controller;
            var navigationBar = navController.navigationBar;
            
            navigationBar.barStyle = value;    
        }
        catch (err) {
            console.log(err);
        }
        
    }
    
    constructor(options?: definition.Options) {
        super(options);
    }
}