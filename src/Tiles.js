import { Link } from "react-router-dom";
import './App.css';


export function Tile({params}) {  
    return (
        <a className="text" href={params[2]} target="_blank">
            <div className="outerTile">
                <div className="tile">
                    <div className="left">
                        <img className="logo" src={params[0]}></img>
                    </div>
                    <div className="right">
                        <a className="text" >{params[1]}</a><br/>
                    </div>      
                </div>
            </div>
        </a>
    );
}

export function SiteTile({params}) {  
    return(
        <Link to="/wallpapers">
            <div className="outerTile">
                <div className="tile">
                    <div className="left">
                        <img className="logo" src={params[0]}></img>
                    </div>
                    <div className="right">
                        <a className="text" >{params[1]}</a><br/>
                    </div>      
                </div>
            </div>
        </Link>
    )
}


export function WallpaperTile({params}) {  
    return (
        <a className="text" href={params[2]} target="_blank">
            <div className="outerTile">
                <div className="tile tileBig">
                    <div className="left">
                        <img className="wallpaper" src={params[0]}></img>
                    </div>
                    <div className="right">
                        <div>
                        <a className="text headerText" >{params[1]}</a><br/>
                        <a className="text descriptionText">{params[3]}</a>
                        </div>
                    </div>      
                </div>
            </div>
        </a>
    );
}

export default Tile;