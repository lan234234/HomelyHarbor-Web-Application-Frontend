import React from "react";
import { Tabs } from "antd";

class HostHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="2">
        <Tabs.TabPane tab="My Stays" key="1">
          My Stays
        </Tabs.TabPane>
        <Tabs.TabPane tab="Upload Stay" key="2">
          Upload Stays
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

export default HostHomePage;
