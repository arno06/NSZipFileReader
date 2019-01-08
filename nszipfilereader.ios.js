const FILE_NOT_FOUND = "File not found withing zip archive";
const BUFFER_SIZE = 1024;
class NSZipFileReader{
    constructor(pPath){
        this.zipFile = new OZZipFile(pPath, OZZipFileModeUnzip);
    }

    readString(pFile){
        var ref = this;
        return new Promise(function(pResolve, pReject){
            if(ref.zipFile.locateFileInZip(pFile)){
                var read = ref.zipFile.readCurrentFileInZip();
                var data;
                var str = "";
                while(true){
                    data = NSMutableData.alloc().initWithLength(BUFFER_SIZE);
                    var bytesRead = read.readDataWithBuffer(data);
                    if(bytesRead<=0)
                        break;
                    str += NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding);
                }
                pResolve(str);
            }else{
                pReject(FILE_NOT_FOUND);
            }
        });
    }
}

exports.NSZipFileReader = NSZipFileReader;