import * as React from 'react';
import style from './Login.scss';
import { NavLink } from 'react-router-dom';

export default class Login extends React.Component{
    render(){
        return (
            <div className={style.login}>
                <header className={style.loginHeader}>
                    <h3>这是登陆页</h3>
                </header>
                <div className='content'>
                        <NavLink to="/home/main"><span>点我跳转首页</span></NavLink>
                </div>
            </div>
        )
    }
}
