import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./config/teststeps";
import "./App.css";
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-md">
            <a class="navbar-brand" href="/">
              <h2>한세대학교 BTS</h2>
            </a>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="검색..."
                aria-label="Search"
              />
              <button type="button" class="btn btn-secondary" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="container content">
          <div className="row justify-content-md-center">
            <div className="col">
              <ThemeProvider theme={chat_styles}>
                <ChatBot
                  steps={steps}
                  headerTitle="Hansei - Bot! Tell me Something"
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
          <p className="copy">From Bitcoin-Team.</p>
          {/* <p className="copy">Created by <a href="http://stayregular.net" className="stayregular"><img src={logo_stayregular} alt="Stay Regular" /></a> using the <a href="http://kushy.net" className="kushyapi"><img src={logo_kushyapi} alt="Kushy API" /></a>.</p> */}
          {/* <p className="credit">Shoutout to <a href="https://lucasbassetti.com.br/react-simple-chatbot/" className="chatbot"><img src={logo_chatbot} alt="React Simple Chatbot" /></a>.</p> */}
        </footer>
      </div>
    );
  }
}

export default App;
