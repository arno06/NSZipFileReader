const FILE_NOT_FOUND = "File not found withing zip archive";
class NSZipFileReader{
    constructor(pPath){
        let error = null;
        this.zipFile = ZZArchive.archiveWithURLError(NSURL.fileURLWithPath(pPath), error);
    }

    readString(pFile){
        let ref = this;
        return new Promise(function(pResolve, pReject){
            for(let k = 0; k < ref.zipFile.entries.count; k++){
                let e = ref.zipFile.entries.objectAtIndex(k);
                if(e.fileName === pFile){
                    let error = null;
                    let data = NSString.alloc().initWithDataEncoding(e.newDataWithError(error), NSUTF8StringEncoding);
                    pResolve(data.toString());
                    break;
                }
            }

            if (data === undefined) {
                pReject(FILE_NOT_FOUND);
            }
        });
    }
}

exports.NSZipFileReader = NSZipFileReader;