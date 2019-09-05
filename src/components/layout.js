/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'gatsby';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1 className="site-heading">
          <Link
            to="/"
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3 className="site-heading">
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
        <header className="header">{header}</header>
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
