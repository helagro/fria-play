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


    filesToSongs(files){
        for (let file of files){
            this.addSong(file.name, file.id)
        }
        return this.songs
    }

    addSong(name, id){
        const songInfo = this.getSongInfo(name)

        this.songs.push({
            title: name,
            artist: songInfo.artist,
            album:  songInfo.albumName,
            image: songInfo.image,
            key: id
        })
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

        const albumCover = "https://source.unsplash.com/random/100x100?sig=" + this.albumCoverSig
        this.albumCoverSig++
        this.albums.push({artist: artist, albumName: albumName, albumCover: albumCover})
        
        return albumCover
    }
}