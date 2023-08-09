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

  componentDidMount() {
    const authToken = localStorage.getItem("authToken");
    const asHost = localStorage.getItem("asHost") === "true";
    this.setState({
      authed: authToken !== null,
      asHost,
    });
  }

  handleLoginSuccess = (token, asHost) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("asHost", asHost);
    this.setState({
      authed: true,
      asHost,
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("asHost");
    this.setState({
      authed: false,
    });
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

  userMenu = (
    <Menu>
      <Menu.Item key="logout" onClick={this.handleLogOut}>
        Log Out
      </Menu.Item>
    </Menu>
  );

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
