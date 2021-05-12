import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
} from 'antd';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const onFinish = async (values) => {
    try {
      const { data } = await axios.post('/auth', values);

      if (data.success) {
        localStorage.setItem('user-auth', JSON.stringify({ auth: true, name: data.username }));
        history.push('/');
      }
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.error);
    }
    // console.log('Success:', values);
  };

  const onFill = () => {
    form.setFieldsValue({
      email: 'test@testmail.com',
      password: '12345',
    });
  };

  return (
    <Form
      form={form}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        type="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        help={errorMessage}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="link" htmlType="button" onClick={onFill}>
          Fill test login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
