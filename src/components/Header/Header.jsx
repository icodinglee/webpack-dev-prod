import * as React from 'react';
import styles from './Header.scss';
import { NavLink } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
            <div className={styles.header}>
                <header>
                    <NavLink to="/home/main"><h3>首页</h3></NavLink>
                    <NavLink to="/login"><span>登陆页</span></NavLink>
                    <NavLink to="/home/cards"><span> 卡片页 </span></NavLink>
                </header>
            </div>
        )
    }
}

export default Header;