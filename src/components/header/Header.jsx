import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom'

require('./Header.css');

const mystyle = {
    margin: "0px",
    backgroundColor: "#252525"
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
  };

  render() {
    const rightButtons = (
      <div>
        <Link to='/login'><FlatButton label="Login" className="buttonStyle" /></Link>
        <Link to='/signup'><FlatButton label="Sign Up" className="buttonStyle" /></Link>
      </div>
    );
    return (
    <AppBar
      style={mystyle}
      className="nav-bar"
      iconElementRight={rightButtons}
      title=""
    />
    );
  }
}
