/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'gatsby';
import Navigation from './navigation';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let heading;

    if (location.pathname === rootPath) {
      heading = (
        <h1 className="header__site-heading">
          <Link
            to="/"
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      heading = (
        <h3 className="header__site-heading">
          <Link
            to="/"
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div className="layout">
        <header className="header">
          {heading}
          <Navigation />
        </header>
        <main className="content">{children}</main>
        <footer className="footer">
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Nerd Girls Book Club
        </footer>
      </div>
    );
  }
}

export default Layout;
