# A NativeScript plugin to change the style of the status bar.

### Usage

````
npm install nativescript-statusbar
````

Then in your NativeScript project .xml file, add the namespace for the plugin. I'm calling it "x" here, but you can name it anything you want.

iOS only supports a list of settings (default, light, dark, opaque), not a specific color. Android will support any hex background color, but you cannot change the text color on the status bar. 

````
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:x="nativescript-statusbar"> 
      
      <!-- Use the tag with StatusBar to style it 
           Available ios settings:
           default 
           light 
           dark
           opaque
      -->
      <x:StatusBar ios:barStyle="light" android:barStyle="#00C0F5" />
      
</Page>
````

Those settings, combined with an ActionBar that has `background-color: #00C0F5` will give you...

![status-bar-light](https://cdn.rawgit.com/burkeholland/nativescript-statusbar/master/images/status-bar-ios-android.png)

**Note** The StatusBar plugin will not set the color of the StatusBar on iOS if you don't have an ActionBar as well. If you want to set the color of the StatusBar in NativeScript without having an ActionBar, you can set it to the page background color by setting `backgroundSpanUnderStatusBar="true"`. Otherwise you will have a white StatusBar no matter what you do. 


