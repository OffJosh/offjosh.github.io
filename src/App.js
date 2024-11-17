import './App.css';
import Main from './Main';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">      
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

function Header(){
  return(
    <header className="headerDiv">
      <Link to="/">
          <img className="headerPhoto" src="./profilePic.JPG" alt="Josh Merrett Profile shot"/>
        </Link>
    </header>
  )
}

function Footer(){
  return(
    <footer>
      <div className="footerDiv">
      </div>
    </footer>
  )
}

export default App;
