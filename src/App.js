
import './App.css';

let discordLogo = "./discord-mark-white.svg";
let discordLink = "https://discord.com/channels/@me";

let instagramLogo = "./Instagram_Glyph_White.svg";
let instagramLink = "https://www.instagram.com/merrettjosh_/";

let youtubeLogo = "https://assets-global.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg";

let githubLogo = "./github-mark-white.svg";
let githubLink = "https://github.com/OffJosh";

let wallpapersV1Link = "https://drive.google.com/drive/folders/1AzI0Lv2Jju-tyaYuTjB503ocl27iXKzp?usp=sharing"

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer />
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

function Footer(){
  return(
    <div className="footerDiv">
    </div>
  )
}

function Content(){
  return(
    <div>
      <Tile params={[discordLogo, "Discord: offjosh", discordLink]}/>
      <Tile params={[githubLogo, "GitHub", githubLink]}/>
      <Tile params={[instagramLogo, "Instagram", instagramLink]}/>
      <Tile params={[null, "Wallpapers", wallpapersV1Link]}/>
    </div>
  )
}

function Tile({params}, alt) {  
  if (params[0] == null){
    return(
    <a className="text" href={params[2]} target="_blank">
      <div className="outerTile">
        <div className="tile">
          <div className="center">
            <a className="text" >{params[1]}</a><br/>
          </div>      
        </div>
      </div>
    </a>
    )
  }
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
