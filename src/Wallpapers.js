import {WallpaperTile} from './Tiles'
import './App.css';
import { useEffect } from "react";

let wallpapersV1DriveLink = "https://drive.google.com/file/d/17WIk5hpwdfNNRMxVxEtvAzvG_QzCtIT9/view?usp=sharing"
let wallpapersV1Logo = "./Honey.png"
let wallpapersV1Description = "Collection of 15 Wallpapers. Wavy design. Multiple colours in 5k."


export function Wallpapers(props){
    useEffect(() => {
        document.title = props.title
        return;
    })
    return(
        <div>
            <WallpaperTile params={[wallpapersV1Logo, "Wallpapers V1", wallpapersV1DriveLink, wallpapersV1Description]}/>
       </div>
    )
}




export default Wallpapers;