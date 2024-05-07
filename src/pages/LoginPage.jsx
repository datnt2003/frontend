import React, { useState } from 'react';
import { Button, Form, Input, Row, Col, Image, Typography, Modal } from 'antd';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';
// import firebase from '../../firebase/config';
import ForgotPassword from '../components/ForgotPassword';

const { Title } = Typography;

const backgroundStyle = {

  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the forgot password modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission success
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  // Handle form submission failure
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='formClass' style={backgroundStyle}>
      <Row style={{
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        border: '1px solid #fff',
        padding: '10px',
        backgroundColor: '#fff',
        paddingTop: '50px'
      }}>
        <Col style={{marginBottom:20}}>
          <Row justify='center' >
            
            <Col style={{marginLeft:10}}>
              <Title>Login</Title>
            </Col>
          </Row>
          <Row justify='center'>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>
              <Row justify="space-between" align="middle" style={{marginBottom:'20px'}}>
                <Col>
                  <Form.Item noStyle> 
                    Don't have an account? <Link to="/register">Register</Link>
                  </Form.Item>
                </Col>
                <Col >
                  <Form.Item noStyle>
                    
                    <a className="login-form-forgot" onClick={showModal}>Forgot password</a>
                  </Form.Item>
                </Col>
              </Row>
              <ForgotPassword visible={isModalOpen} closeModal={closeModal} />
              <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit" >Submit</Button>
              </Form.Item>
            </Form>

          </Row>
        </Col>
      </Row>
      {/* Modal ForgotPassword */}
      <ForgotPassword isModalOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}
