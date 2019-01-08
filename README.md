NSZipFileReader
=========

Nativescript plugin that allows reading string file content within a zip archive without full unzipping

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
 * iOs : [Objective-Zip](https://github.com/gianlucabertani/Objective-Zip)
 * Android : None