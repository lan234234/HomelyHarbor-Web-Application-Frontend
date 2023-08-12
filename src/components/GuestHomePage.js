import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class SearchStays extends React.Component {
  state = {
    loading: false,
    data: [],
  };

  render() {
    return <></>;
  }
}

class GuestHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="Search Stays" key="1">
          Search Stays Content
        </TabPane>
        <TabPane tab="My Reservations" key="2">
          My Reservations Content
        </TabPane>
      </Tabs>
    );
  }
}

export default GuestHomePage;
