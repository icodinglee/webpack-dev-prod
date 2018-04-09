import * as React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Card.scss';

export default class Cards extends React.Component{
    render(){
        return (
            <div className='content'>
               <NavLink to="/home/cards"><span className={style.gray}>灰色卡片</span></NavLink>
               <NavLink to="/home/cards/colorfulcard"><span className={style.color}>彩色卡片</span></NavLink>
               <div>{this.props.children}</div>
            </div>
        )
    }
}
