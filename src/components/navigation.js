import React, { Component } from 'react';
import { Link } from 'gatsby';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavHidden: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isNavHidden: !prevState.isNavHidden,
    }));
  }

  render() {
    const { isNavHidden } = this.state;
    return (
      <div className="main-nav">
        <button
          className="main-nav__toggle"
          onClick={this.handleClick}
          type="button"
        >
        Menu
        </button>
        <div
          className="main-nav__container"
          aria-hidden={isNavHidden}
        >
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to="/" className="main-nav__link">Home</Link>
            </li>
            <li className="main-nav__item">
              <Link to="/about/" className="main-nav__link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
