import React from 'react';
import { Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import 'antd/dist/antd.css';
import './App.css';
import Logo from './assets/img/logo.svg.png';
import Home from './pages/HomePage';
import News from './pages/NewsPage';
// import AdminstrativeProcedure from './pages/AdministrativeProcedurePage';
import IdCard from './pages/IdentityPage';
import PassportCard from './pages/PassportPage';
import APSubMenu from './components/APSubMenu';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';


function App() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <div className="App">




      {/* Heading */}
      
      <div id="header">
        <Row>
          <Col span={4}>
            <img src={Logo} alt="" width={80}/>

          </Col>
          <Col span={20}>
             
            <h1>cổng thông tin hành chính xã Vĩnh Công</h1>
          </Col>
          
        </Row>
      </div>


                
        {/* NavBar */}
      <div id="navbar">
        <Row>
          <Col>
            <ul className='menu'>
              <li>
                <Link to="/">Trang chủ</Link>
                {/* <a href="/">Trang chủ</a> */}
              </li>
              <li>
              <Link to="/news">Tin tức</Link>
                {/* <a href="/news">Tin tức</a> */}
              </li>
              <li className='ap'>
              <a>Thủ tục hành chính </a>
                {/* <a href="/adminstrative-procedure">Thủ tục hành chính</a> */}
                <APSubMenu/>
              </li>

              <li>
                <Link to='/login'>Đăng nhập</Link>
                {/* chưa đăng nhập thì hiển thị ô đăng nhập .
                    khi đã đăng nhập thì hiển thị ô Profile 
                      trong Profile có 2 lựa chọn:
                        1. Thông tin cá nhân
                        2. Đăng xuất
                    */}
              </li>
              
            </ul>
          </Col>
        </Row>
      </div>


      
              {/* Content */}
      <div id="content">
      
        <Row style={{display:'block'}}>
          <Col>
            
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/news" element={<News/>} />
              {/* <Route path="/adminstrative-procedure" element={<AdminstrativeProcedure/>} /> */}
              <Route path="/id-card" element={<IdCard/>} />
              <Route path="/passport-card" element={<PassportCard/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>


          </Col>
        </Row>
      </div>
        






      {/* Footer */}
      <div id="footer">
        <Row>

          
          <Col span={14}>

            
            
            <h3>Thông tin</h3>

            <ul>
              <li>Địa chỉ: UBND xã Vĩnh Công, phường Vĩnh Công, Quận Vĩnh Công, Tỉnh Long An</li>
              <li>Điện thoại: 0397-xxx-068</li>
              <li>Email: vinhcongvn@gmail.com.vn</li>
            </ul>
          
          </Col>
          <Col span={10}>
            <h3>Các website chính phủ</h3>
            <ul>
              <li><a href="https://dichvucong.gov.vn/p/home/dvc-trang-chu.html">Cổng dịch vụ công quốc gia</a></li>
              <li><a href="https://chinhphu.vn/">Cổng thông tin điện tử chính phủ</a></li>
              <li><a href="https://baochinhphu.vn/">Báo điện tử chính phủ</a></li>
            </ul>
          
          </Col>
        </Row>
      </div>


    </div>
  );
}

export default App;
