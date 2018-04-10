/**
 * @desc 方法1: 使用provider + inject的方式  使store中的数据以props 的形式传入
 */
import * as React from 'react';
import Header from '../Header/Header';
import style from './Main.scss';
import { observer, inject } from 'mobx-react';

@inject('numStore') @observer
class Main extends React.Component{
    render(){
        const { numStore } = this.props;
        return (
            <div className={style.main}>
                <div className="content">
                    {numStore.num}
                </div>
                <div className={style.buttonContainer}>
                    <span onClick={()=>numStore.addNum()}>+</span>
                    <span onClick={()=>numStore.decNum()}>asy -</span>
                    <span onClick={()=>numStore.initNum()}>reset</span>
                </div>
            </div>
        )
    }
}

export default Main;