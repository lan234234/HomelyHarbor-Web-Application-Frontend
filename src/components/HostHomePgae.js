import React from "react";
import { Tabs } from "antd";
import UploadStay from "./UploadStay";

const { TabPane } = Tabs;

class HostHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="My Stays" key="1">
          <div>My Stays Content</div>
        </TabPane>
        <TabPane tab="Upload Stay" key="2">
          <UploadStay />
        </TabPane>
      </Tabs>
    );
  }
}

export default HostHomePage;
