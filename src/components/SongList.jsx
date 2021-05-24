import React from 'react'
import Survival from "../components/img/survival.jpg"
import SongInfo from "./SongInfo"
import style from "./style/SongList.module.css"
import googleDrive , {getDriveInstance} from "../logic/googleDriveApi"

class SongList extends React.Component{
    constructor(){
        super()

        this.driveInstance = getDriveInstance(this.driveListener, this)

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

        console.log("weird", this.state.songs)

        return (
            <div className={[style.container, props.className].join(" ")} style={props.style}>
                {this.state.songs.map(({image, title, artist}) => 
                    (<SongInfo image={image} title={title} artist={artist}/>)
                )}
            </div>
        )
    }

    driveListener(containerCtx){
        containerCtx.setState({
            
        })
    }
}

export default SongList
