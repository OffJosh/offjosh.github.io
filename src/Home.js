import { Link } from "react-router-dom";
import './App.css';
import {SiteTile} from './Tiles'
import {Tile} from "./Tiles";
import { useEffect } from "react";

let wallpapersLogo = "./hamburger2.png"



export function Home(props){
    useEffect(() => {
        document.title = props.title
        return;
    })
    return(
        <div>
        <SiteTile params={[wallpapersLogo, "Links", "/links"]}/>
        </div>
    )
}



export default Home;
