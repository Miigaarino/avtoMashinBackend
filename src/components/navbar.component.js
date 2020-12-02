import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light  bg-light  navbar-expand-lg">
        <Link to="/" className="navbar-brand">АЗҮБСистем</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Машинууд</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Машины мэдээлэл нэмэх</Link>
          </li>
          <li className="navbar-item">
          <Link to="/car" className="nav-link">Машин нэмэх</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}