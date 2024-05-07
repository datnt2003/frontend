
import React, { useState } from 'react';
import { Carousel, Row, Col,Form, Input, Button, Card } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import './Home.css';

const { Meta } = Card;
const contentStyle = {
  height: '30px',
  lineHeight: '15px',
  textAlign: 'left',
  background: '#ccc',
};
export default function HomePage() {
  
// 
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };


  return (
    <div className="home">
      

            <Carousel autoplay className='slide'>
          <div>
            <img src="https://www.baolongan.vn/image/news/2022/20220702/images/1-7-2022%20Hinh%201%20Can%20Giuoc%20doan%20tham%20dinh%20tinh%20tham%20dinh%202%20xa%20My%20Loc%20Phuoc%20Ly%20dat%20xa%20NTM%20nang%20cao.jpg" alt="" />
            <p style={contentStyle}>Thẩm định nông thôn mới nâng cao cho xã Vĩnh Công</p>
          </div>
          <div>
          <img src="https://www.baolongan.vn/image/news/2020/20200526/images/IMG_1853.jpg" alt="" />

            <p style={contentStyle}>Đẩy mạnh công tác TDTT ở thanh thiếu niên</p>
          </div>
          <div>
          <img src="https://www.baolongan.vn/image/news/2022/20220523/images/3.jpg" alt="" />

            <p style={contentStyle}>Xã Vĩnh Công hướng đến nông thôn mới nâng cao</p>
          </div>
          <div>
          <img src="https://www.baolongan.vn/image/news/2021/20210423/images/81.gif" alt="" />

            <p style={contentStyle}>Đẩy mạnh công tác trấn áp tội phạm</p>
          </div>
          
        </Carousel>
      
      <Row style={{marginTop:'50px'}}>
        <Col span={14}>
          <Row style={{justifyContent: 'space-around'}}>
            <Col>
            
            <Card
      className="card"
      hoverable
      style={{
        width: 200, // Đặt chiều rộng là 200px
        height: 200, // Đặt chiều cao là 200px
        overflow: 'hidden' // Ẩn nội dung tràn ra ngoài kích thước của Card
      }}
      cover={
        <img 
          alt="example"
          src="https://bcp.cdnchinhphu.vn/334894974524682240/2024/5/6/cds-1714993683297703904014-0-97-552-980-crop-1714994071383987468362.jpg"
          style={{
            width: '100%', // Đảm bảo ảnh cover chiếm đầy chiều rộng
            height: '100%', // Đảm bảo ảnh cover chiếm đầy chiều cao
            objectFit: 'cover' // Điều chỉnh ảnh để phù hợp và bao phủ hoàn toàn khu vực được chỉ định mà không làm méo
          }}
        />
      }
    >
      <Meta title="Tăng cường đẩy mạnh chuyển đổi số" description="www.instagram.com" />
    </Card>
            </Col>
            <Col>
            
              <Card
      className="card"
      hoverable
      style={{
        width: 200, // Đặt chiều rộng là 200px
        height: 200, // Đặt chiều cao là 200px
        overflow: 'hidden' // Ẩn nội dung tràn ra ngoài kích thước của Card
      }}
      cover={
        <img 
          alt="example"
          src="https://bcp.cdnchinhphu.vn/334894974524682240/2024/5/6/cds-1714993683297703904014-0-97-552-980-crop-1714994071383987468362.jpg"
          style={{
            width: '100%', // Đảm bảo ảnh cover chiếm đầy chiều rộng
            height: '100%', // Đảm bảo ảnh cover chiếm đầy chiều cao
            objectFit: 'cover' // Điều chỉnh ảnh để phù hợp và bao phủ hoàn toàn khu vực được chỉ định mà không làm méo
          }}
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
            </Col>
            <Col>
            
              <Card
      className="card"
      hoverable
      style={{
        width: 200, // Đặt chiều rộng là 200px
        height: 200, // Đặt chiều cao là 200px
        overflow: 'hidden' // Ẩn nội dung tràn ra ngoài kích thước của Card
      }}
      cover={
        <img 
          alt="example"
          src="https://bcp.cdnchinhphu.vn/334894974524682240/2024/5/6/cds-1714993683297703904014-0-97-552-980-crop-1714994071383987468362.jpg"
          style={{
            width: '100%', // Đảm bảo ảnh cover chiếm đầy chiều rộng
            height: '100%', // Đảm bảo ảnh cover chiếm đầy chiều cao
            objectFit: 'cover' // Điều chỉnh ảnh để phù hợp và bao phủ hoàn toàn khu vực được chỉ định mà không làm méo
          }}
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
            </Col>
          </Row>
        </Col>
        <Col span={10}>
        <h3 className='hotNews'>Tin tức nổi bật</h3>
          <ul>

            <li><a href="#">
              Kỷ niệm 70 năm chiến thắng Điện Biên Phủ (7/5/1954 - 7/5/2024)
              </a></li>
            <li><a href="#">
              Tăng cường đẩy mạnh chuyển đổi số
              </a></li>
            <li><a href="#">
              Giá vàng hôm nay 7/5: SJC tăng mạnh
              </a></li>
            <li><a href="#">
              Tổ chức tiêm phòng cho trẻ em
              </a></li>
            <li><a href="#">
              Đẩy mạnh công tác trấn áp tội phạm
              </a></li>
          </ul>
        </Col>
      </Row>

      <Row style={{margin:'20px'}}>
        <img src="https://datafiles.chinhphu.vn/cpp/1/banner/xaydungchinhsach980x50_pc_v3.jpg" width='100%' alt="" />

      </Row>


      {/* <Row> */}
      <Row justify="center">
      <Col span={12}>
        <Form
          name="feedback_form"
          onFinish={onFinish}
          layout="vertical"
          style={{ margin: '40px 0' , width: '800px'}}
        >
          <Form.Item
            name="content"
            label="Nội dung"
            rules={[{ required: true, message: 'Vui lòng nhập nội dung!' }]}
          >
            <Input.TextArea rows={4} placeholder="Nhập nội dung góp ý" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Vui lòng nhập email!' },
              { type: 'email', message: 'Email không hợp lệ!' }
            ]}
          >
            <Input placeholder="Nhập email của bạn" />
          </Form.Item>

          <Form.Item
            name="name"
            label="Họ và tên"
            rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
          >
            <Input placeholder="Nhập họ và tên" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{width:'100%'}}>
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>

      {/* </Row> */}
















    </div>
  );
}
