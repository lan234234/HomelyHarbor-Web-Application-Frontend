import { message } from "antd";
import React from "react";
import { Tabs } from "antd";
import { searchStays } from "../utils";

const { TabPane } = Tabs;

class SearchStays extends React.Component {
  state = {
    loading: false,
    data: [],
  };

  search = async (query) => {
    this.setState({
      loading: true,
    });

    try {
      const resp = await searchStays(query);
      this.setState({
        data: resp,
      });
    } catch (error) {
      message.error(error.message);
    } finally {
      this.setState({
        loading: false,
      });
    }
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
