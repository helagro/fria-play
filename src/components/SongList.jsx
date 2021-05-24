import React from 'react'
import Survival from "../components/img/survival.jpg"
import SongInfo from "./SongInfo"
import style from "./style/SongList.module.css"
import googleDrive , {getDriveInstance} from "../logic/googleDriveApi"

class SongList extends React.Component{
    constructor(){
        super()

        this.driveInstance = getDriveInstance(this.drivInitListener, this) 

        this.state = {
            songs: [{
                image: Survival,
                title: "testtes",
                artist: "init"
            }]
        }
    }

    driveInstance

    render(){
        let props = this.props

        return (
            <div className={[style.container, props.className].join(" ")} style={props.style}>
                {this.state.songs.map(({image, title, artist}) => 
                    (<SongInfo image={image} title={title} artist={artist}/>)
                )}
            </div>
        )
    }

    componentDidMount(){

        console.log("lamo");
    }

    drivInitListener(componentCtx){
        componentCtx.driveInstance.changeLoginStatus(false, componentCtx, componentCtx.driveLoginListener)
    }

    driveLoginListener(msg, componentCtx){
        console.log("drive listener", componentCtx, this)

        let driveInstance = componentCtx.driveInstance

        if(!driveInstance.getIsLogin()) return driveInstance.changeLoginStatus(true, driveInstance, componentCtx.driveLoginListener) 

        driveInstance.listFiles(componentCtx.listFileListener, componentCtx)
    }

    listFileListener(files, containerCtx){
        console.log("listed:", files)
        containerCtx.setState({
            songs: this.filesToSongs(files)
        })
    }

    filesToSongs(files){
        let songs = []
        for (let file of files){
            songs.push({name: file.name})
        }
        return songs
    }
}

export default SongList
