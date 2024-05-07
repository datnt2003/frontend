import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Typography, Image } from 'antd';
import '../pages/Login.css';

// import firebase from '../../firebase/config';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Upload from '../assets/img/upload.png';
const backgroundStyle = {

  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

export default function RegisterPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState(null);

  // Function to handle file input for avatar
  const handleAvatarChange = (e) => {
    if (e.target.files.length > 0) {
      setAvatar(e.target.files[0]);
    }
  };

  const onFinish = (values) => {
    console.log('Received values of form:', values);
    // Here you would typically handle registration logic, e.g., sending data to a server
    // After successful registration, you might want to redirect the user:
    // navigate('/some-path');
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
        <Col style={{ marginBottom: 20 }}>
          <Row justify='center' >
            
            <Col style={{ marginLeft: 10 }}>
              <Title>Sign Up</Title>
            </Col>
          </Row>
          <Row>
            <Form
            
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
            >
              <Form.Item
                name="userName"
                label="User Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your user name!',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder='User Name' onChange={(e) => setName(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder='Password' />
              </Form.Item>
              <Form.Item

                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)} />
              </Form.Item>

             
                
                 <Form.Item>
                <input type="file" id='file' style={{ display: 'none' }} onChange={handleAvatarChange} />
                <label htmlFor="file" className='label-avt' style={{ cursor: 'pointer' }}>
                  <img src={Upload} alt="Add your avatar" width={35} style={{ marginLeft: '50px' }} />
                  <span className='span-avt'>{avatar ? avatar.name : 'Add an avatar'}</span>
                </label>
              </Form.Item>
                  
                

                
                
              
              
              <Row justify="end" style={{ marginBottom: '16px' }}>
                <Col>
                  <Form.Item noStyle>
                    Already have an Account <Link to="/login">Login</Link>?
                  </Form.Item>
                </Col>
              </Row>
              
              <Row>
                <Col offset={8}>
                  <Form.Item {...tailFormItemLayout} >
                    <Button type="primary" htmlType="submit" >
                      Register
                    </Button>
                  </Form.Item>
                </Col>
                <Col>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
