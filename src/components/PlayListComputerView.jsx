import React from 'react'
import MyNavBarPc from "./MyNavBarPc"
import SongGrid from "./SongGrid"
import style from "./style/PlayListComputerView.module.css"
import PlayControlsPc from "../components/PlayControlsPc"

function PlayListComputerView() {
    return (
        <div className={style.container}>
            <MyNavBarPc fullWidth={true}/>
            <div className={style.mainContent}>
                <div className={style.infoPart}>
                    <h1>info</h1>
                </div>
                <div className={style.songsPart}>
                    <h1>songs</h1>
                </div>
            </div>
            <PlayControlsPc/>
        </div>
    )
}

export default PlayListComputerView
