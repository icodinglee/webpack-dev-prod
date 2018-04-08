import * as React from 'react';
import styles from './Test.scss';
// import bg from '../../static/images/banner.png';

export default class Test extends React.Component{
    componentWillMount(){
        console.log('jquery', $);
        console.log(__DEV__);
    }
    render(){
        return (
            <div className={styles.test}>
                <div className="color-white">
                    <p>欢迎到来</p>
                </div>
            </div>
        )
    }
}