# A NativeScript plugin to change the style of the status bar.

<strong>Currently iOS Only</strong>

### Usage

````
npm install nativescript-statusbar
````

Then in your NativeScript project .xml file, add the namespace for the plugin. I'm calling it "x" here, but you can name it anything you want.

````
<Page xmlns="http://schemas.nativescript.org/tns.xsd"
      xmlns:x="nativescript-statusbar"> 
      
      <!-- Use the tag with StatusBar to style it 
           Available styles:
           default 
           light 
           dark
           opaque
      -->
      <x:StatusBar barStyle="light" />
      
</Page>
````

This changes the text of the iOS status bar from dark to light...

![status-bar-light](https://github.com/burkeholland/nativescript-statusbar/blob/master/images/status-bar.png)

And that's all! Enjoy your nice styled StatusBar. 


