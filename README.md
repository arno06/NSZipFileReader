NSZipFileReader
=========

Nativescript plugin that allows reading string file content within a zip archive without full unzipping

Installation
---------
Cloning the repo
```
git clone https://github.com/arno06/nszipfilereader
```

Add the plugin
```
//From your project dir
tns plugin add ../relative/path/to/nszipfilereader
```

Usage
---------
```javascript
const NSZipFileReader = require("nszipfilereader").NSZipFileReader;
/* ... */
var zipFileReader = new NSZipFileReader("path/to/archive.zip");
zipFileReader.readString("path/to/file.ext")
            .then(function(content){
                console.log(content);
            }).catch(function(e){
                console.error(e);
            });
```

Dependencies
-----
 * iOs : [Zip-Zap](https://github.com/pixelglow/ZipZap)
 * Android : None