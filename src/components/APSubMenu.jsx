import React from 'react'
import { Link } from 'react-router-dom';

export default function APSubMenu() {
  return (
    <div className='apsub'>
        <ul>
            <li style={{borderBottom:"1px solid #ccc"}}>
                <Link to="/id-card">Đăng ký CCCD</Link>
            </li>
            <li>
                <Link to="/passport-card">Đăng ký Hộ chiếu</Link>
            </li>
        </ul>
    </div>
  )
}
