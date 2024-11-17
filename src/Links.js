
import './App.css';
import {SiteTile} from './Tiles'
import {Tile} from "./Tiles";
import { useEffect } from "react";

let discordLogo = "./discord-mark-white.svg";
let discordLink = "https://discord.com/channels/@me";

let instagramLogo = "./Instagram_Glyph_White.svg";
let instagramLink = "https://www.instagram.com/merrettjosh_/";

let githubLogo = "./github-mark-white.svg";
let githubLink = "https://github.com/OffJosh";

let wallpapersLogo = "./desktop-512.png"

let simpleOfficeLink = 'https://simpleoffice.uk' 



export function Links(props){
    useEffect(() => {
        document.title = props.title
        return;
    })
    return(
        <div>
        <Tile params={[wallpapersLogo, "SimpleOffice", simpleOfficeLink]}/>
        <Tile params={[instagramLogo, "Instagram", instagramLink]}/>
        <Tile params={[discordLogo, "Discord: offjosh", discordLink]}/>
        <Tile params={[githubLogo, "GitHub", githubLink]}/>
        <SiteTile params={[wallpapersLogo, "Wallpapers", "/wallpapers"]}/>
        </div>
    )
}



export default Links;
