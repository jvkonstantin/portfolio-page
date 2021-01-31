import React from 'react';
import PicLogo from './img/pfp.jpg';
import './App.css';




function App() {
  return (
    <div className="App-header">
      <div style={{position: "absolute", left: "23px", top:"23px"}}>
        
      </div>
      <div className="width-limiter">
          <div className="App-disc">
            <p id="underline" style={{fontSize: "20px", marginBottom: "0"}}>  
              <a href="https://unnamedsoftware.com/kappa/blog">Blog</a>  <a href="https://unnamedsoftware.com/kappa/portfolio">Portfolio</a>
            </p>
            <h1 className="App-title">Kappa C0dex</h1>
            <code>
              <p>
          
                  <div>This is me. Or is it? <br/></div>
                  <div>I am a front-end backend React , Python and Javascript developer</div>
                  <div>Maily based in <a className="Location" href="https://unnamedsoftware.com/locations"> Greece, Athens </a> </div>
             
                <div className="Social-links"> 
              
                {`[`}
                  <a href="https://unnamedsoftware.com/kappa/github" style={{marginLeft: "-5px"}} target="__blank"> <i className="fab fa-github" /></a>         
                  <a href="https://unnamedsoftware.com/kappa/twitter" target="__blank"><i className="fab fa-twitter" /></a> 
                  <a href="https://unnamedsoftware.com/kappa/discordprofile"><i className="fab fa-discord"></i></a>
                  <a href="https://unnamedsoftware.com/developers"><i className="fas fa-laptop-code" /></a>           
                {`]`}
                </div>
              </p>
            </code>
          </div>     
            <img src={PicLogo} className="App-logo"  alt="pfp" />
        </div>
        <footer>
          <div><h1> Kappa™ • 2021 </h1></div>
          <div>
            <h1>
              <span /> <a href="https://unnamedsoftware.com/kappa/spotify" target="__blank"><i className="fab fa-spotify" /></a> •
              <span /> <a href="https://unnamedsoftware.com/kappa/contact" target="__blank"><i className="fas fa-envelope" /></a> •
              <span /> <a href="https://unnamedsoftware.com/kappa/github"  target="__blank"> <i className="fab fa-github" /></a> •
              <span /> <a href="https://unnamedsoftware.com/kappa/twitter" target="__blank"><i className="fab fa-twitter" /></a> •
              <span /> <a href="https://unnamedsoftware.com/kappa/discordprofile" target="__blank"><i className="fab fa-discord"></i></a> 
            </h1>
          </div>
        </footer>
    </div>
  );
}

export default App;
