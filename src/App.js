import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Layout } from "antd";

const { Header, Content } = Layout;

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    );
  }
}

export default App;
