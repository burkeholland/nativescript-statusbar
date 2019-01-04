# NativeScript Status Bar

A NativeScript plugin to change the style of the status bar.

## Usage

````
npm install nativescript-statusbar --save
````

Then in your NativeScript project .xml file, add the namespace for the plugin. I'm calling it "x" here, but you can name it anything you want.

iOS only supports a list of settings (default, light, dark, opaque), not a specific color. Android will support any hex background color, but you cannot change the text color on the status bar. 

```` XML
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:x="nativescript-statusbar"> 
      
      <!-- Use the tag with StatusBar to style it 
           Available ios settings:
           default 
           light 
           dark
           opaque
      -->
      <x:StatusBar ios:barStyle="light" barColor="#00A7DC" />
</Page>
````

Those settings, combined with an ActionBar that has `background-color: #00C0F5` will give you...

![status-bar-light](https://cdn.rawgit.com/burkeholland/nativescript-statusbar/master/images/status-bar-ios-android.png)

**Note** The StatusBar plugin will not set the color of the StatusBar on iOS if you don't have an ActionBar as well. If you want to set the color of the StatusBar in NativeScript without having an ActionBar, you can set it to the page background color by setting `backgroundSpanUnderStatusBar="true"`. Otherwise you will have a white StatusBar no matter what you do. 

## With Vue.js

In your root `app.js`:

```
Vue.registerElement('StatusBar', () => require('nativescript-statusbar').StatusBar)
```

In your component:
```html
<Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
      <StatusBar barColor="#32475b" />
<Page/>
```

That's is.

## Webpack

To use the NativeScript status bar plugin with webpack, you must add the following line of code to your app’s `app/bundle-config.js` file.

``` JavaScript
global.registerModule("nativescript-statusbar", function() { return require("nativescript-statusbar"); });
```

## Development workflow

If you would like to contribute to this plugin in order to enabled the repositories code for development follow this steps:

- Fork the repository locally
- Open the repository in your favorite terminal
- Navigate to the src code that contains the plugin's code `cd /src`
- Execute the npm script `nmp run build.wrappers` or `npm run build.wrappers.watch`
- When running the Vanila NativeScript demo app execute: `npm run demo.android` or `npm run demo.ios`
- When running the Angular NativeScript demo app execute: `npm run demo.angular.android` or `npm run demo.angular.ios`
