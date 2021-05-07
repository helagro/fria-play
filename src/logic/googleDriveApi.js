var CLIENT_ID = '590519824924-eikjcarl4oun621q3c156krsofr62gbo.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDtRE4dP3eitBDkT4S3RkO5Pp_ZA8CHFuo';
let BLOCK_GOOGLE_DRIVE = false
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
var SCOPES = 'https://www.googleapis.com/auth/drive';

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');


function handleClientLoad() {
    if(BLOCK_GOOGLE_DRIVE)
        return
    gapi.load('client:auth2', initClient);
}
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick = handleSignoutClick;
    }, function(error) {
        console.log(JSON.stringify(error, null, 2));
    });
}
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display = 'block';
        fillWithDriveJson()
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display = 'none';
    }
}


function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}



async function fillWithDriveJson(){
    const fileName = getFilename()
    const docID = await getAppDataFile(fileName)
    const checklistItemsStr = await getAppDataFileContent(docID)
    let s = JSON.stringify(checklistItemsStr.trim())

    try {
        checklistGroups = JSON.parse(JSON.parse(s))   
    } catch (error) {
        alert(error)
        console.log(s)
    }
    main()
}
function getFilename(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fileName = urlParams.get("filename")
    return fileName
}
async function getAppDataFile(fileName) {
    const res = await gapi.client.drive.files.list({
        q: `name="${fileName}"`,
        fields: 'files(id)'
    })
    if (res.result.files.length == 0) {
        alert("file not found")
    }
    return res.result.files[0].id
}
async function getAppDataFileContent(fileId) {
  const res = await gapi.client.drive.files
    .export({
      fileId: fileId,
      mimeType: 'text/plain',
      alt: 'media'
    })
    
    return res.body
};