import * as React from 'react';
import style from './Main.scss';
import { connect } from 'react-redux';
import store from '../../redux/store.js';
import { addNumber, decNumber } from '../../redux/action/numberActions';

class Main extends React.Component{
    addNum(){
        this.props.addNumber()
    }
    decNum(){
        this.props.decNumber();
    }
    resetNum(){
        store.dispatch({ type:"RESET_NUMBER", number: 25 })
    }
    render(){
        const { number } = this.props;
        return (
            <div className={style.main}>
                <div className="content">
                     { number }
                </div>
                <div className={style.buttonContainer}>
                    <span onClick={()=> this.addNum()}> asy + </span>
                    <span onClick={()=> this.decNum()}> - </span>
                    <span onClick={()=> this.resetNum()}> reset </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    number: state.NumberStore.number
})

export default connect(mapStateToProps, {
    addNumber, 
    decNumber
})(Main);