import { Form, Button, Input, InputNumber } from "antd";
import React from "react";

class UploadStay extends React.Component {
  state = {
    loading: false,
  };

  fileInputRef = React.createRef();

  handleSubmit = async (values) => {
    const formData = new FormData();
    const { files } = this.fileInputRef.current;

    // step1
    this.setState({
      loading: true,
    });
    //step2
    //step3
    try {
      await uploadStay(formData);
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
      <Form onFinish={this.handleSubmit}>
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
          <input type="file" ref={this.fileInputRef} />
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
