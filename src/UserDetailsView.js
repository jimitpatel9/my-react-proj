import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';

class UserDetailsView extends React.Component{
    render(){
        return (
            <ul styleName="no-style-and-padding">
                {Object.keys(this.props.userDetails).map((key) => {
                    return <li key={key}>{key} : {this.props.userDetails[key]}</li>;
                })}
            </ul>
        )
    }
}

export default CSSModules(UserDetailsView, styles);