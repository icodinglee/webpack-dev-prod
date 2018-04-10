/**
 * @desc 方法2: 使用到相应数据的组件可以直接从store引入，可以直接使用并进行相关操作
 */
import * as React from 'react';
import styles from './Header.scss';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import { numStore } from '../../mobx/store';

@observer
class Header extends React.Component{
    render(){
        return (
            <div className={styles.header}>
                <header>
                    <NavLink to="/home/main"><h3>首页 -数量{numStore.num} - 总价{ numStore.total } {numStore.state === 'pending' ? '\n计算中...' : ''}</h3></NavLink>
                    <NavLink to="/login"><span>登陆页</span></NavLink>
                    <NavLink to="/home/cards"><span> 卡片页 </span></NavLink>
                </header>
            </div>
        )
    }
}

export default Header;