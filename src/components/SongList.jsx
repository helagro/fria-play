import React from 'react'
import Survival from "../components/img/survival.jpg"
import SongInfo from "./SongInfo"
import style from "./style/SongList.module.css"
import googleDrive , {getDriveInstance} from "../logic/googleDriveApi"

class SongList extends React.Component{
    constructor(){
        super()

        this.state = {
            songs: []
        }
    }

    driveInstance

    //ANCHOR lifecycle
    render(){
        let props = this.props

        return (
            <div className={[style.container, props.className].join(" ")} style={props.style}>
                {this.state.songs.length > 0 ? 
                    this.state.songs.map(({image, title, artist, key}) => 
                        (<SongInfo image={image} title={title} artist={artist} key={key}/>)) : 
                    (<button onClick={()=>{this.driveInstance.changeLoginStatus()}}>Log in</button>)}
                
            </div>
        )
    }
    componentDidMount(){
        this.driveInstance = getDriveInstance()
        this.driveInstance.addListener(this.driveListener, this)
    }
    componentWillUnmount(){
        this.driveInstance.componentDetached(this)
    }

    //ANCHOR other
    driveListener(event){
        console.log("song list drivelistener", event)
        switch(event.event){
            case "already setup": 
            case "did init": 
            case "sign in changed":return event.ctx.signInCouldHaveChanged(event)
        }
    }
    signInCouldHaveChanged(event){
        let ctx = event.ctx
        let isSignedIn = event.payload ? event.payload.isSignedIn : ctx.driveInstance.getIsLogin()

        if(isSignedIn) ctx.driveInstance.listMediaFiles(ctx.listFileListener, ctx)
    }
    listFileListener(files, ctx){
        console.log("listed:", files)
        ctx.setState({
            songs: ctx.filesToSongs(files)
        })
    }
    filesToSongs(files){
        let songs = []
        for (let file of files){
            songs.push({
                title: file.name,
                artist: "Bill Gates",
                image: Survival,
                key: file.id
            })
        }
        return songs
    }
}

export default SongList
