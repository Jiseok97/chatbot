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
import Footer from "./Componet/Footer";

const formSubmit = (e) => {
  e.preventDefault();
  alert("도움말 내용");
};

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
              <button type="button" class="btn btn-dark" type="submit">
                도움말
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
                  headerTitle="Please Bot! Tell me Something"
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
        <footer className="Footer">{/* <Footer /> */}</footer>
      </div>
    );
  }
}

export default App;
