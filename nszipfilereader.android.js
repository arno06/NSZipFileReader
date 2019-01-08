class NSZipFileReader{
    constructor(pPath){
        this.zipFile = new java.util.zip.ZipFile(pPath);
    }

    readString(pFile){
        var ref = this;
        return new Promise(function(pResolve, pReject){
            var zipEntry = ref.zipFile.getEntry(pFile);
            var is = ref.zipFile.getInputStream(zipEntry);
            var os = new java.io.ByteArrayOutputStream();
            var buffer = Array.create("byte", 1024);
            var length;
            while ((length = is.read(buffer)) != -1) {
                os.write(buffer, 0, length);
            }
            var str = os.toString("UTF-8");
            pResolve(str);
        });
    }
}

exports.NSZipFileReader = NSZipFileReader;