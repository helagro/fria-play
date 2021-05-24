import { gapi } from 'gapi-script';

var driveInstance

export function getDriveInstance(initListener, ctx){
    if(driveInstance == null) driveInstance=new GoogleDriveHandler(initListener, ctx)

    return driveInstance
}



export class GoogleDriveHandler{
    constructor(initListener, ctx){
        this.loadClient(ctx, initListener)
    }

    lol="fea"

    //ANCHOR loading
    loadClient(ctx, initListener) {
        gapi.load('client:auth2', ()=>this.initClient(ctx, initListener));
    }
    initClient(ctx, initListener) {
        const CLIENT_ID = '590519824924-eikjcarl4oun621q3c156krsofr62gbo.apps.googleusercontent.com';
        const API_KEY = 'AIzaSyDtRE4dP3eitBDkT4S3RkO5Pp_ZA8CHFuo';
        const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
        const SCOPES = 'https://www.googleapis.com/auth/drive';

        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES
        }).then(function () {
            //driveInstance.changeLoginStatus(false, ctx)
            initListener(ctx)
        }, function(error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }
    changeLoginStatus(shouldChange, ctx, mlistener){
        if(!gapi.auth2) return 

        let isLoggedIn = this.getIsLogin()

        function updateSigninStatus(isSignedIn) {mlistener(isSignedIn ? "signed_in" : "signed_out", ctx)}
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        if (!shouldChange) return updateSigninStatus(isLoggedIn)

        if (isLoggedIn){
            gapi.auth2.getAuthInstance().signOut()
        } else {
            gapi.auth2.getAuthInstance().signIn();
        }
    }


    getIsLogin(){
        return gapi.auth2.getAuthInstance().isSignedIn.get()
    }

    
    listMediaFiles(listener, ctx) {
        var hife = "DWEa"
        gapi.client.drive.files.list({
          'pageSize': 10,
          'fields': "nextPageToken, files(id, name)"
        }).then(function(response) {
          var files = response.result.files;
          if (files && files.length > 0) {
            files = files.filter(file => file.name.endsWith(".mp3"))  
            listener(files, ctx)
          }
        });
      }


    getFilename(){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const fileName = urlParams.get("filename")
        return fileName
    }
    async getAppDataFile(fileName) {
        const res = await gapi.client.drive.files.list({
            q: `name="${fileName}"`,
            fields: 'files(id)'
        })
        if (res.result.files.length == 0) {
            alert("file not found")
        }
        return res.result.files[0].id
    }
    async getAppDataFileContent(fileId) {
    const res = await gapi.client.drive.files
        .export({
            fileId: fileId,
            mimeType: 'text/plain',
            alt: 'media'
        })
        
        return res.body
    };
}
