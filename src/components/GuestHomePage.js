import { DatePicker, InputNumber, message } from "antd";
import React from "react";
import { Tabs, Form, Button } from "antd";
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
    return (
      <>
        <Form onFinish={this.search} layout="inline">
          <Form.Item
            label="Guest Number"
            name="guest_number"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            label="Checkin Date"
            name="checkin_date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Checkout Date"
            name="checkout_date"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <Button loading={this.state.loading} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

class GuestHomePage extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
        <TabPane tab="Search Stays" key="1">
          <SearchStays />
        </TabPane>
        <TabPane tab="My Reservations" key="2">
          My Reservations Content
        </TabPane>
      </Tabs>
    );
  }
}

export default GuestHomePage;
