import { Form, Button, Input, InputNumber } from "antd";
import React from "react";

class UploadStay extends React.Component {
  state = {
    loading: false,
  };

  render() {
    return (
      <Form>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Address">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Guest number">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Picture">
          <input type="file" />
        </Form.Item>
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
