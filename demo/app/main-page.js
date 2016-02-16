var vmModule = require("./main-view-model");
var StatusBar = require("nativescript-statusbar");

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.mainViewModel;
}
exports.pageLoaded = pageLoaded;
