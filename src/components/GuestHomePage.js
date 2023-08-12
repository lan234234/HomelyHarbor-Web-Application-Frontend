import {
  Button,
  Card,
  Carousel,
  DatePicker,
  Form,
  Image,
  InputNumber,
  List,
  Modal,
  Tabs,
  message,
} from "antd";
import React from "react";
import { bookStay, searchStays } from "../utils";
import Text from "antd/lib/typography/Text";
import { StayDetailInfoButton } from "./HostHomePage";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

const { TabPane } = Tabs;

class BookStayButton extends React.Component {
  state = {
    loading: false,
    modalVisible: false,
  };

  render() {
    const { stay } = this.props;
    return (
      <>
        <Button onClick={this.handleBookStay} shape="round" type="primary">
          Book Stay
        </Button>
        <Modal
          destroyOnClose={true}
          title={stay.name}
          visible={this.state.modalVisible}
          footer={null}
          onCancel={this.handleCancel}
        >
          <Form
            preserve={false}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={this.handleSubmit}
          >
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
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button
                loading={this.state.loading}
                type="primary"
                htmlType="submit"
              >
                Book
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}

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
            <Button
              loading={this.state.loading}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <List
          loading={this.state.loading}
          grid={{
            gutter: 16,
            xs: 1,
            sm: 3,
            md: 3,
            lg: 3,
            xl: 4,
            xxl: 4,
          }}
          dataSource={this.state.data}
          renderItem={(item) => (
            <List.Item>
              <Card
                key={item.id}
                title={
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Text ellipsis={true} style={{ maxWidth: 150 }}>
                      {item.name}
                    </Text>
                    <StayDetailInfoButton stay={item} />
                  </div>
                }
                actions={[]}
                extra={<BookStayButton stay={item} />}
              >
                <Carousel
                  dots={false}
                  arrows={true}
                  prevArrow={<LeftCircleFilled />}
                  nextArrow={<RightCircleFilled />}
                >
                  {item.images.map((image, index) => (
                    <div key={index}>
                      <Image src={image.url} width="100%" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </List.Item>
          )}
        />
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
          <div>My Reservations</div>
        </TabPane>
      </Tabs>
    );
  }
}

export default GuestHomePage;