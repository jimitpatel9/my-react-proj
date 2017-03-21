import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './app.css';

const GIT_URL_FOR_USER_DETAILS = 'https://api.github.com/users/';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            userDataKeys: [],
            userData: ''
        };

        this.update = this.update.bind(this);
        this.getGithubInfo = this.getGithubInfo.bind(this);
    }

    /**
     * Gets the username from input box and updates username state
     * @param {Object} e event
     */
    update(e) {
        this.setState({userName: e.target.value})
    }

    /**
     * Fetches the user details from github api
     */
    getGithubInfo() {
        fetch(GIT_URL_FOR_USER_DETAILS + this.state.userName)
            .then((response) => response.json())
            .then((userDetails) => this.setState({userDataKeys: Object.keys(userDetails), userData: userDetails}))
    }

    render() {
        return (
            <div>
                <h1 styleName="text-center">Learning React-Webpack-CSSModules</h1>
                <label styleName="block-with-margin-lr" htmlFor="username">Enter Github Username</label>
                <input type="text"
                       onChange={this.update}
                       id="username"
                       styleName="margin-lr-10" />
                <button styleName="margin-lr-10"
                        onClick={this.getGithubInfo}>Get Info</button>
                <ul styleName="no-style-and-padding">
                    {this.state.userDataKeys.map((key) => {
                        return <li key={key}>{key} : {this.state.userData[key]}</li>;
                    })}
                </ul>
            </div>
        );
    }
}

export default CSSModules(App, styles);
