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

    render(){
        let props = this.props

        return (
            <div className={[style.container, props.className].join(" ")} style={props.style}>
                {this.state.songs.map(({image, title, artist, key}) => 
                    (<SongInfo image={image} title={title} artist={artist} key={key}/>)
                )}
            </div>
        )
    }

    componentDidMount(){
        console.log("lamo");
        this.driveInstance = getDriveInstance(this.drivInitListener, this)
    }

    drivInitListener(ctx){
        ctx.driveInstance.changeLoginStatus(false, ctx, ctx.driveLoginListener)
    }

    driveLoginListener(msg, ctx){
        console.log("drive listener", ctx, this)

        let driveInstance = ctx.driveInstance

        if(!driveInstance.getIsLogin()) return driveInstance.changeLoginStatus(true, driveInstance, ctx.driveLoginListener) 

        driveInstance.listMediaFiles(ctx.listFileListener, ctx)
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
