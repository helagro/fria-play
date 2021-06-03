let songHandlerInstance

export function getSongHandlerInstance(){
    if (songHandlerInstance == null) songHandlerInstance = new SongHandler()
    return songHandlerInstance
}

export class SongHandler{

    songs = []
    albums = []

    albumCoverSig = 0
    possibleArtists = ["Bill Gates", "Steve Jobs", "Elon Musk", "Jeff Bezos"]
    possibleAlbumNames = ["Album 1", "Album 2", "Album 3", "Album 4"]


    hasSongs(){
        return this.songs.length != 0
    }
    async addSongsFromFiles(files, ctx, allSongsAreAdded){
        let amountToFinish = 0
        const addedSongCallback = () => {
            amountToFinish--
            if(amountToFinish < 1) allSongsAreAdded(ctx)
        }

        for (let file of files){
            amountToFinish ++
            this.addSong(file.name, file.id, addedSongCallback)
            console.log("sent")
        }
    }



    async addSong(name, id, addedSongCallback){
        const songInfo = this.getSongInfo(name)

        this.songs.push({
            title: name,
            artist: songInfo.artist,
            album:  songInfo.albumName,
            image: await songInfo.image,
            key: id
        })

        addedSongCallback()
    }
    removeAll(){
        this.songs = []
        this.albums = []
        this.albumCoverSig = 0
    }

    //Should get info from internet in the final product
    getSongInfo(songName){
        const artist = this.possibleArtists[Math.floor(Math.random() * this.possibleArtists.length)];
        const albumName = this.possibleAlbumNames[Math.floor(Math.random() * this.possibleAlbumNames.length)];
        const image = this.getAlbumCover(artist, albumName)

        return {artist, albumName, image}
    }
    getAlbumCover(artist, albumName){
        for(const albumObj of this.albums){
            if(albumObj.artist === artist && albumObj.albumName === albumName) return albumObj.albumCover
        }

        let albumCover = this.generateAlbumCover()
        this.albums.push({artist: artist, albumName: albumName, albumCover: albumCover})
        return albumCover
    }
    generateAlbumCover() {
        return new Promise(resolve => {
            this.albumCoverSig++
            let imageUrl = "https://source.unsplash.com/random/100x100?sig=" + this.albumCoverSig

            var xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(this.getResponseHeader("content-type") === "image/jpeg"){
                    var response = xhr.responseText;
                    var binary = ""
                    
                    for(let i=0;i<response.length;i++){
                        binary += String.fromCharCode(response.charCodeAt(i) & 0xff);
                    }

                    let imageString = 'data:image/jpeg;base64,' + btoa(binary);
                    resolve(imageString)
                } else{
                    resolve("invalid contet-type")
                }
            }
        
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
            xhr.open("GET", imageUrl, true);
            xhr.send();

            const onTimeOut = () => resolve("timed out")
            setTimeout(onTimeOut, 5000)
        })
      }
}