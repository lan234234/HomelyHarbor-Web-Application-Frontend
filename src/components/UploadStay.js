import { Button } from "antd";
import React from "react";

class UploadStay extends React.Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <Form>
        <Form.Item></Form.Item>
        <Form.Item></Form.Item>
        <Form.Item></Form.Item>
        <Form.Item></Form.Item>
        <Form.Item></Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={this.state.loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default UploadStay;
