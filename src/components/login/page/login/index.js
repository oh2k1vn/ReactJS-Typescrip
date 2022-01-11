import React from 'react'
import baner_login from '../../../../assets/img/baner_login.png';
import Logo from '../../../../assets/img/Logo_alta.png';
import './index.scss';

import Index from '../../components/login';

const index = () => {
    return (
        <div className='login'>
            <div className='login_body'>
                <div className='login_body_logo'>
                    <img src={Logo} alt='' />
                </div>
                <div className='login_body_center'>
                    <Index />
                </div>

            </div>
            <div className='login_baner'>
                <img src={baner_login} alt='' height="614,06px" width='605px' />
                <div className='login_baner_title'>
                    <p className='login_baner_title_top'>Hệ thống</p>
                    <p className='login_baner_title_bottom'>QUẢN LÝ XẾP HÀNG</p>
                </div>
            </div>
        </div>
    )
}

export default index
