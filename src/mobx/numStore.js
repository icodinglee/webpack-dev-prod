import React,{Component} from 'react'
import { observable,  action, runInAction, computed, autorun} from 'mobx';
import { resolve } from 'url';

// useStrict(true);

function getNum(ms) {
    return new Promise(resolve => setTimeout(()=> resolve(100), ms))
  }

class NumState {
    @observable num = 1;
    @observable price = 2.5;
    @observable state = 'done'; // 'pending' 'done' 'error'

    @action.bound addNum(){
        this.num++;  // 'this' 永远都是正确的
    }

    @action.bound decNum(){
        this.state = 'pending';
        setTimeout(()=>{ 
            this.num--;
            this.state = 'done';
         }, 500);
    }

    @computed get total() { // 计算属性
        return this.num * this.price;
    }

    @action async initNum(){  // 异步操作
        this.state = 'pending';
        const num = await getNum(2000);
        this.state = 'done';
        
        runInAction("说明一下这个action是干什么的。不写也可以", () => {
            this.num = num;
        })
    }
    
}

const numState = new NumState();

export default numState;