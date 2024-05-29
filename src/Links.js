import { Link } from "react-router-dom";
import './App.css';
import {SiteTile} from './Tiles'
import {Tile} from "./Tiles";
import { useEffect } from "react";

let discordLogo = "./discord-mark-white.svg";
let discordLink = "https://discord.com/channels/@me";

let instagramLogo = "./Instagram_Glyph_White.svg";
let instagramLink = "https://www.instagram.com/merrettjosh_/";

let youtubeLogo = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg";

let githubLogo = "./github-mark-white.svg";
let githubLink = "https://github.com/OffJosh";

let wallpapersLogo = "./desktop-512.png"



export function Links(props){
    useEffect(() => {
        document.title = props.title
        return;
    })
    return(
        <div>
        <Tile params={[discordLogo, "Discord: offjosh", discordLink]}/>
        <Tile params={[githubLogo, "GitHub", githubLink]}/>
        <Tile params={[instagramLogo, "Instagram", instagramLink]}/>
        <SiteTile params={[wallpapersLogo, "Wallpapers", "/wallpapers"]}/>
        </div>
    )
}



export default Links;
