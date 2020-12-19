import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import steps from "./config/steps";
import "./App.css";
import Hansei from "./assets/images/Hansei.PNG";
import user from "./assets/images/user.PNG";
import "./assets/css/main.css";
import "./assets/css/bootstrap-grid.min.css";
import chat_styles from "./config/chatstyles";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  ButtonOnClick(event) {
    event.preventDefault();
    alert(
      '첫 화면으로 돌아가길 원하시면 "처음으로" 버튼을 눌러주세요. \n궁금하신 내용을 아래 입력란에 입력해보세요 :)'
    );
  }

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-md">
            <a class="navbar-brand" href="/">
              <h2>한세 Chatbot - BTS</h2>
            </a>
            <form class="d-flex">
              <a href="/" type="button" class="btn btn-dark">
                처음으로
              </a>
              <button
                type="button"
                class="btn btn-dark"
                onClick={this.ButtonOnClick}
              >
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
                  placeholder="내용을 입력해주세요..."
                  customDelay="500"
                  botAvatar={Hansei}
                  userAvatar={user}
                  style={{ height: "105%", width: "105%" }}
                />
              </ThemeProvider>
            </div>
          </div>
        </div>
        <footer className="Footer" />
      </div>
    );
  }
}

export default App;
