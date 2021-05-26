import React, { useState, useContext } from 'react';
import { UserContext } from 'contexts/UserContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
  Alert,
} from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(null);

  const onFinish = async (values) => {
    try {
      const { data } = await axios.post('/auth', values);

      if (data.success) {
        localStorage.setItem('user-auth', JSON.stringify({ auth: true, name: data.username }));
        setUser({ auth: true, name: data.username });
        history.push('/');
      }
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.response.data.error);
    }
  };

  const onFill = () => {
    form.setFieldsValue({
      email: 'test@testmail.com',
      password: '12345',
    });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {errorMessage && (
        <Form.Item {...tailLayout}>
          <Alert message={errorMessage} type="error" showIcon />
        </Form.Item>
      )}

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
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button block type="link" htmlType="button" onClick={onFill}>
          Fill test login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
