import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./config/teststeps";
import "./App.css";
import logo from "./assets/images/HeaderHansei.png";
import Hansei from "./assets/images/Hansei.PNG";
import user from "./assets/images/user.PNG";
import "./assets/css/main.css";
import "./assets/css/bootstrap-grid.min.css";
import chat_styles from "./config/chatstyles";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
        </header>
        <div className="container content">
          <div className="row justify-content-md-center">
            <div className="col">
              <ThemeProvider theme={chat_styles}>
                <ChatBot
                  steps={steps}
                  headerTitle="한세대학교 챗봇"
                  placeholder="내용을 입력해주세요"
                  customDelay="500"
                  botAvatar={Hansei}
                  userAvatar={user}
                  style={{ height: "105%", width: "105%" }}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
        <footer className="Footer">
          <p className="copy">Create by Jiseok.Lee</p>
          <p className="copy">From Bitcoin-Team.</p>
          {/* <p className="copy">Created by <a href="http://stayregular.net" className="stayregular"><img src={logo_stayregular} alt="Stay Regular" /></a> using the <a href="http://kushy.net" className="kushyapi"><img src={logo_kushyapi} alt="Kushy API" /></a>.</p> */}
          {/* <p className="credit">Shoutout to <a href="https://lucasbassetti.com.br/react-simple-chatbot/" className="chatbot"><img src={logo_chatbot} alt="React Simple Chatbot" /></a>.</p> */}
        </footer>
      </div>
    );
  }
}

export default App;
