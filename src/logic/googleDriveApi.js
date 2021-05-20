import { gapi } from 'gapi-script';

var driveInstance

export function getDriveInstance(){
    if(driveInstance == null) driveInstance=GoogleDriveHandler()

    return driveInstance
}

export class GoogleDriveHandler{
    CLIENT_ID = '590519824924-eikjcarl4oun621q3c156krsofr62gbo.apps.googleusercontent.com';
    API_KEY = 'AIzaSyDtRE4dP3eitBDkT4S3RkO5Pp_ZA8CHFuo';
    DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    SCOPES = 'https://www.googleapis.com/auth/drive';


    constructor(){
        this.loadClient()
    }

    //ANCHOR loading
    loadClient() {
        gapi.load('client:auth2', this.initClient);
    }
    initClient() {
        gapi.client.init({
            apiKey: this.API_KEY,
            clientId: this.CLIENT_ID,
            discoveryDocs: this.DISCOVERY_DOCS,
            scope: this.SCOPES
        }).then(function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

            // Handle the initial sign-in state.
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function(error) {
            console.log(JSON.stringify(error, null, 2));
        });
    }

    
    updateSigninStatus(isSignedIn) {
    }
    handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
    }
    handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
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
