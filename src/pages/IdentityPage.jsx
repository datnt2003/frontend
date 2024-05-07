import React from 'react';
import { Form, Input, Radio, Row, Col, Button, Select } from 'antd';
import './ID.css'
const { Option } = Select;

export default function IdentityCardForm() {
  

  
  const onFinish = (values) => {
    console.log('Form data:', values);
  };





  return (
    <div className='id'>
      <h1>Tờ khai căn cước công dân trực tuyến</h1>
      <Form
      onFinish={onFinish}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: '95%', margin: '0 auto' }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Row >
          <Col span={12}>
            <Form.Item
              label="Họ và tên: "
              name="fullname"
              rules={[{ required: true, message: 'Please input your fullname!' }]}
            >
              <Input placeholder='Nhập họ và tên' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Giới tính: "
              name="gender"
              rules={[{ required: true, message: 'Please select your gender!' }]}
            >
              <Radio.Group defaultValue={'male'} style={{ display: 'flex' }}>
                <Radio value={'male'} style={{ width: 80 }}>Nam</Radio>
                <Radio value={'female'} style={{ width: 80 }}>Nữ</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col span={12}>
            <Form.Item
              label="Ngày sinh: "
              name="dob"
              rules={[{ required: true, message: 'Please input your date of birth!' }]}
            >
              <Input type='date' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Nơi sinh: "
              name="placeOfBirth"
              rules={[{ required: true, message: 'Please input your place of birth!' }]}
            >
              <Select placeholder='Chọn nơi đăng ký khai sinh'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col span={12}>
            <Form.Item
              label="Số CCCD/CMND: "
              name="idNumber"
              rules={[{ required: true, message: 'Please input your ID number!' }]}
            >
              <Input type='text' placeholder='Nhập số CCCD/CMND' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Dân tộc: "
              name="ethnicity"
              rules={[{ required: true, message: 'Please input your ethnicity!' }]}
            >
              <Select placeholder='Chọn dân tộc'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col span={12}>
            <Form.Item
              label="Tôn giáo: "
              name="religion"
              rules={[{ required: true, message: 'Please input your religion!' }]}
            >
              <Select placeholder='Chọn tôn giáo'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Quốc tịch: "
              name="nationality"
              rules={[{ required: true, message: 'Please input your nationality!' }]}
            >
              <Select placeholder='Chọn quốc tịch'>
                <Option value="option1">Option 1</Option>
                <Option value="option2">Option 2</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col >
            <Form.Item
              label="Tình trạng hôn nhân: "
              name="maritalStatus"
              rules={[{ required: true, message: 'Please select your marital status!' }]}
            >
              <Radio.Group defaultValue={'single'} style={{ display: 'flex' }}>
                <Radio value={'single'}  style={{ width: 100 }}>Độc thân</Radio>
                <Radio value={'married'} >Đã kết hôn</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row >
          <Col span={12}>
            <Form.Item
              label="Quê quán: "
              name="hometown"
              rules={[{ required: true, message: 'Please input your hometown!' }]}
            >
              <Input placeholder='Nhập quê quán' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Nơi thường trú: "
              name="permanentAddress"
              rules={[{ required: true, message: 'Please input your permanent address!' }]}
            >
              <Input placeholder='Nhập nơi thường trú' />
            </Form.Item>
          </Col>
        </Row>
        

            
        {/* <Row > */}
          
            <Form.Item
              label="Nơi ở hiện tại / Nơi ở tạm trú: "
              // style={{width: '300px'}}
              name="currentAddress"
              className='currentAddress'
              rules={[{ required: true, message: 'Please input your current address!' }]}
            >
              <Input style={{maxWidth:'600px'}}  placeholder='Nhập nơi ở hiện tại' />
            </Form.Item>
          
        {/* </Row> */}
        <Row justify="center">
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button  type="primary" htmlType="submit">Nộp đơn</Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
}
