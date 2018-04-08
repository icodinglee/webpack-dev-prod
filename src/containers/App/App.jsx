import * as React from 'react';
import styles from './App.scss';
import Test from '../../components/Test/Test.jsx';

export default class App extends React.Component{
    render(){
        return (
            <div className={styles.app}>
                <Test />
                <h2>Hello World!</h2>
            </div>
        )
    }
}