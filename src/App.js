import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

class App extends React.Component {
  state = {
    authed: false,
    asHost: false,
  };
  renderContent = () => {
    if (!this.state.authed) {
      return <div>login page</div>; //login page is just a place holder
    }

    if (this.state.asHost) {
      return <div>host home page</div>;
    }

    return <div>guest home page</div>;
  };

  render() {
    return (
      <Layout>
        <Header></Header>
        <Content>{this.renderContent()}</Content>
      </Layout>
    );
  }
}

export default App;
