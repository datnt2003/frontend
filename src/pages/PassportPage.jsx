import React from 'react';
import { Form, Input, Radio, DatePicker, Button, Row, Col, Select } from 'antd';
import './ID.css'

const { Option } = Select;


export default function Passport() {
  


  const onFinish = (values) => {
    console.log('Form data:', values);
  };



  return (
    <div className='id'>
      <h1>Đăng ký hộ chiếu trực tuyến</h1>
      <Form
      onFinish={onFinish}
        name="passport_registration"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: '95%', margin: '0 auto' }}
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

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Số CCCD/CMND"
              name="idNumber"
              rules={[{ required: true, message: 'Please input your ID number!' }]}
            >
              <Input type="text" placeholder="Nhập số CCCD/CMND" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Ngày cấp"
              name="issueDate"
              rules={[{ required: true, message: 'Please input issue date!' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
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
        </Row>


        <Row gutter={16}>
          <Col span={12}>
          <Form.Item
          label="Nơi thường trú"
          name="permanentAddress"
          rules={[{ required: true, message: 'Please input your permanent address!' }]}
          >
          <Input placeholder="Nhập nơi thường trú" />
        </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
          label="Số điện thoại"
          name="phoneNumber"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input type="number" placeholder="Nhập số điện thoại" />
        </Form.Item>
          </Col>
        </Row>
        
        <Row justify="center">
          <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
            <Button  type="primary" htmlType="submit" >Nộp đơn</Button>
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
}



// import React from 'react';
// import { Form, Input, Radio, DatePicker, Button, Row, Col, Select } from 'antd';

// const { Option } = Select;

// export default function Passport() {
//   // Hàm được gọi khi form được submit một cách hợp lệ
//   const onFinish = (values) => {
//     console.log('Form data:', values);
//   };

//   return (
//     <div className='id'>
//       <h1>Đăng ký hộ chiếu trực tuyến</h1>
//       <Form
//         name="passport_registration"
//         onFinish={onFinish}
//         labelCol={{ span: 8 }}
//         wrapperCol={{ span: 16 }}
//         style={{ width: '80%', margin: '0 auto' }}
//       >
//         <Row>
//           <Col span={12}>
//             <Form.Item
//               label="Họ và tên: "
//               name="fullname"
//               rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
//             >
//               <Input placeholder='Nhập họ và tên' />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Giới tính: "
//               name="gender"
//               rules={[{ required: true, message: 'Vui lòng chọn giới tính!' }]}
//             >
//               <Radio.Group style={{ display: 'flex' }}>
//                 <Radio value={'male'} style={{ width: 80 }}>Nam</Radio>
//                 <Radio value={'female'} style={{ width: 80 }}>Nữ</Radio>
//               </Radio.Group>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row>
//           <Col span={12}>
//             <Form.Item
//               label="Ngày sinh: "
//               name="dob"
//               rules={[{ required: true, message: 'Vui lòng nhập ngày sinh!' }]}
//             >
//               <DatePicker style={{ width: '100%' }} />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Nơi sinh: "
//               name="placeOfBirth"
//               rules={[{ required: true, message: 'Vui lòng nhập nơi sinh!' }]}
//             >
//               <Select placeholder='Chọn nơi sinh'>
//                 <Option value="option1">Option 1</Option>
//                 <Option value="option2">Option 2</Option>
//               </Select>
//             </Form.Item>
//           </Col>
//         </Row>
//         <Row gutter={16}>
//           <Col span={12}>
//             <Form.Item
//               label="Số CCCD/CMND"
//               name="idNumber"
//               rules={[{ required: true, message: 'Vui lòng nhập số CCCD/CMND!' }]}
//             >
//               <Input placeholder="Nhập số CCCD/CMND" />
//             </Form.Item>
//           </Col>
//           <Col span={12}>
//             <Form.Item
//               label="Ngày cấp"
//               name="issueDate"
//               rules={[{ required: true, message: 'Vui lòng nhập ngày cấp!' }]}
//               >
// <DatePicker style={{ width: '100%' }} />
// </Form.Item>
// </Col>
// </Row>
// <Row gutter={16}>
// <Col span={12}>
//   <Form.Item
//     label="Dân tộc: "
//     name="ethnicity"
//     rules={[{ required: true, message: 'Vui lòng nhập dân tộc!' }]}
//   >
//     <Select placeholder='Chọn dân tộc'>
//       <Option value="option1">Option 1</Option>
//       <Option value="option2">Option 2</Option>
//     </Select>
//   </Form.Item>
// </Col>
// <Col span={12}>
//   <Form.Item
//     label="Tôn giáo: "
//     name="religion"
//     rules={[{ required: true, message: 'Vui lòng nhập tôn giáo!' }]}
//   >
//     <Select placeholder='Chọn tôn giáo'>
//       <Option value="option1">Option 1</Option>
//       <Option value="option2">Option 2</Option>
//     </Select>
//   </Form.Item>
// </Col>
// </Row>

// <Row gutter={16}>
// <Col span={12}>
//   <Form.Item
//     label="Nơi thường trú"
//     name="permanentAddress"
//     rules={[{ required: true, message: 'Vui lòng nhập nơi thường trú!' }]}
//   >
//     <Input placeholder="Nhập nơi thường trú" />
//   </Form.Item>
// </Col>
// <Col span={12}>
//   <Form.Item
//     label="Số điện thoại"
//     name="phoneNumber"
//     rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
//   >
//     <Input type="number" placeholder="Nhập số điện thoại" />
//   </Form.Item>
// </Col>
// </Row>

// <Row justify="center">
// <Col span={24}>
//   <Form.Item>
//     <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
//       Nộp đơn
//     </Button>
//   </Form.Item>
// </Col>
// </Row>
// </Form>
// </div>
// );
// }