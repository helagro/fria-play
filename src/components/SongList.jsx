import React from 'react'
import Survival from "../components/img/survival.jpg"
import SongInfo from "./SongInfo"
import style from "./style/SongList.module.css"
import {getDriveInstance} from "../logic/googleDriveApi"
import {getSongHandlerInstance} from "../logic/songHandler"

class SongList extends React.Component{
    constructor(){
        super()

        this.state = {
            songs: []
        }
    }

    driveInstance
    songHandlerInstance

    //ANCHOR lifecycle
    render(){
        let props = this.props

        return (
            <div className={[style.container, props.className].join(" ")} style={props.style}>
                {this.getSongsAreaContent()}
            </div>
        )
    }
    getSongsAreaContent(){
        if(this.state.songs.length > 0) {
            return (this.state.songs.map(({image, title, artist, key}) => 
                (<SongInfo image={image} title={title} artist={artist} key={key}/>)))
        } 
        else if(!this.driveInstance || this.driveInstance.getIsLogin()){
            return (<p>Loading...</p>)
        }
        else{
            return (<button onClick={()=>{this.driveInstance.changeLoginStatus()}}>Log in</button>)
        }
    }
    componentDidMount(){
        this.songHandlerInstance = getSongHandlerInstance()

        this.driveInstance = getDriveInstance()
        this.driveInstance.addListener(this.driveListener, this)
    }
    componentWillUnmount(){
        this.driveInstance.componentDetached(this)
    }

    //ANCHOR other
    driveListener(event){
        switch(event.event){
            case "already setup":
            case "did init": 
            case "sign in changed": return event.ctx.signInCouldHaveChanged(event)
        }
    }
    signInCouldHaveChanged(event){
        let ctx = event.ctx
        let isSignedIn = event.payload ? event.payload.isSignedIn : ctx.driveInstance.getIsLogin()

        if(!isSignedIn) {
            ctx.setState({songs:[]})
            ctx.songHandlerInstance.removeAll()
        } else if(ctx.songHandlerInstance.hasSongs()) {
            if(ctx.state.songs.length === 0) ctx.setState({songs: ctx.songHandlerInstance.songs})
        } else {
            ctx.driveInstance.listMediaFiles(ctx.listFileListener, ctx)
        }
    }
    async listFileListener(files, ctx){
        //TODO possible memory leak
        await ctx.songHandlerInstance.addSongsFromFiles(files, ctx, ctx.songsisAddedListener)
    }

    songsisAddedListener(ctx){
        ctx.setState({songs: ctx.songHandlerInstance.songs})
    }

}

export default SongList
