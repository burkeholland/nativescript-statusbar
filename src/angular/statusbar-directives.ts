import {
    Component,
    NgModule,
    NO_ERRORS_SCHEMA
} from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { StatusBar } from './../';

@Component({
    selector: "StatusBar",
    template: ``
})
export class StatusBarComponent {
        
}
export const STATUSBAR_DIRECTIVES = [StatusBarComponent];

declare var global: any;
if (!global.isListViewRegistered) {
    registerElement('StatusBar', () => <any>StatusBar);
    global.isListViewRegistered = true;
}

@NgModule({
    declarations: [STATUSBAR_DIRECTIVES],
    exports: [STATUSBAR_DIRECTIVES],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class NativeScriptStatusBarModule {
}

