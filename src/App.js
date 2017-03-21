import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './file.css';

const GIT_URL_FOR_USER_DETAILS = 'https://api.github.com/users/';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      userName:'',
      dataKeys: [],
      data: ''
    };

    this.update = this.update.bind(this);
    this.click = this.click.bind(this);
  }

  update(e) {
    this.setState({userName: e.target.value})
  }

  click() {
    fetch(GIT_URL_FOR_USER_DETAILS + this.state.userName)
        .then((response) => response.json())
        .then((userDetails) => this.setState({dataKeys: Object.keys(userDetails),data: userDetails}))
  }

  render() {
    return (
        <div>
          <h1>Learn React-Webpack-CSSModules</h1>
          <input type="text"
                 onChange={this.update}/>
          <button onClick={this.click}>Search</button>
          <p>{this.state.userName}</p>
            <ul>
                {this.state.dataKeys.map((listValue) => {
                    return <li>{listValue} : {this.state.data[listValue]}</li>;
                })}
            </ul>
        </div>
    );
  }
}

export default CSSModules(App, styles);
