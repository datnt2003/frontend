import React from 'react'
import { Card } from 'antd';
import { Row , Col} from 'antd';
import './News.css'
const { Meta } = Card;

export default function NewsPage() {

  const now = new Date(); 
  const nowDate = now.getDate(); 
  const nowMonth = now.getMonth() + 1; 
  const nowYear = now.getFullYear(); 

  return (
    <div className='news'>
      
      <Row>
      <h3>
        xã Vĩnh Công, ngày {nowDate} tháng {nowMonth} năm {nowYear}
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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

      <Row>
      <h3>
          Thời sự
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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


      <Row>
      <h3>
        Chính Trị
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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


      <Row>
      <h3>
        Kinh Tế
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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


      <Row>
      <h3>
        Giáo Dục
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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


      <Row>
      <h3>
        Y Tế
      </h3>
      </Row>
      <Row style={{justifyContent: 'space-around'}}> 
        <Col>
        <Card
      className="card"
      hoverable
      style={{
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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
        width: 240, // Đặt chiều rộng là 200px
        height: 226, // Đặt chiều cao là 200px
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

    </div>
  )
}
