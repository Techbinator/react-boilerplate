import React, { Component } from 'react';
import {Link, IndexLink} from 'react-router';
import { Navbar } from 'react-bootstrap';

export default class Header extends Component {
  render(){
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <IndexLink to="/">React boilerplate</IndexLink >
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav navbar-nav">
            <li><Link to="/test">Blog</Link></li>
        </ul>
      </Navbar>
    );
  }
}
