import * as React from 'react';
import Header from '../../components/Header/Header';

export default class Main extends React.Component{
    render(){
        return (
            <div>
               <Header />
               <div>{this.props.children}</div>
            </div>
        )
    }
}
