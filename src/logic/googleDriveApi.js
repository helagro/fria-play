import { gapi } from 'gapi-script';

var driveInstance

export function getDriveInstance(){
    if(driveInstance == null) driveInstance=new GoogleDriveHandler()

    return driveInstance
}



export class GoogleDriveHandler{
    constructor(){
        this.loadClient()
    }

    tiedListenerObjects = []

    //ANCHOR listen
    addListener(listener, ctx){
        this.tiedListenerObjects.push({listener:listener, ctx:ctx})
        if (gapi.auth2) this.callListeners("already setup")
    }
    callListeners(event, payload){
        for(let listenerObj of this.tiedListenerObjects){
            listenerObj.listener({ctx:listenerObj.ctx, event:event, payload:payload})
        }
    }
    signinListener(isSignedIn){
        driveInstance.callListeners("sign in changed", {isSignedIn:isSignedIn})
    }


    //ANCHOR loading
    loadClient() {
        gapi.load('client:auth2', this.initClient);
    }
    initClient() {
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
            gapi.auth2.getAuthInstance().isSignedIn.listen(driveInstance.signinListener);
            driveInstance.callListeners("did init")
        }, function(error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }

    //ANCHOR pubics
    changeLoginStatus(){
        let isLoggedIn = this.getIsLogin()

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
        gapi.client.drive.files.list({
          'fields': "nextPageToken, files(id, name)"
        }).then(function(response) {
          var files = response.result.files;
          if (files && files.length > 0) {
              console.log("else forever", files)
            files = files.filter(file => file.name.endsWith(".mp3"))  
            listener(files, ctx)
          }
        });
    }
    componentDetatched(){

    }
}
