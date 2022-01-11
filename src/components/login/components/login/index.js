import React from 'react'
import './index.scss';

const index = () => {
    return (
        <form className='login_body'>
            <label>Tên đăng nhập *</label>
            <input type="text" placeholder='lequynhaivan01'/>
            <label>Mật khẩu *</label>
            <input type="password" />
            <p>Quên mật khẩu?</p>
            <button>Đăng nhập</button>
        </form>
    )
}

export default index
