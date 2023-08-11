import React from "react";
import { Tabs } from "antd";

class HostHomePage extends React.Component {
  render() {
    return (
      <Tabs>
        <Tabs.TabPane>My Stays</Tabs.TabPane>
        <Tabs.TabPane>Upload Stays</Tabs.TabPane>
      </Tabs>
    );
  }
}

export default HostHomePage;
