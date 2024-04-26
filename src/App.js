
import './App.css';

let discordLogo = "./discord-mark-white.svg";
let instagramLogo = "./Instagram_Glyph_White.svg";
let youtubeLogo = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg";
let githubLogo = "./github-mark-white.svg";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

function Header(){
  return(
    <div className="headerDiv">
      <img className="headerPhoto" src="./kermit512.png"/>
    </div>
  )
}

function Content(){
  return(
    <div>
      <Tile params={[discordLogo, "Discord: offjosh", "https://discord.com/channels/@me"]}/>
      <Tile params={[githubLogo, "GitHub", "https://github.com/OffJosh"]}/>
      <Tile params={[instagramLogo, "Instagram", "https://www.instagram.com/merrettjosh_/"]}/>
    </div>
  )
}

function Tile({params}, alt) {
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


export default App;
