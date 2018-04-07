import * as React from 'react';
import styles from './App.scss';
import Test from '../../components/Test/Test.jsx';

export default class App extends React.Component{
    render(){
        return (
            <div className={styles.app}>
                <div id="root">root</div>
                <div className={styles.root_below}>root_below</div>
                <h2>App</h2>
                <Test />
            </div>
        )
    }
}