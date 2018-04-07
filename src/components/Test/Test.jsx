import * as React from 'react';
import styles from './Test.scss';
// import bg from '../../static/images/banner.png';

export default class Test extends React.Component{
    render(){
        return (
            <div className={styles.test}>
                <h2>App</h2>
                <div className="color-red">
                    <p>red</p>
                    {/* <img src={bg} alt=""/> */}
                </div>
            </div>
        )
    }
}