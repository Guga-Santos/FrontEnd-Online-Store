import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../imgs/cart.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopping: JSON.parse(localStorage.getItem('shopping')),
    };
  }

  render() {
    const { shopping } = this.state;
    const { length } = this.props;
    return (
      <div className="header-container">
        <div className="logo">
          <Link
            to="/"
            style={ { textDecoration: 'none' } }
          >
            <h1 className="logoName">TryBay</h1>
          </Link>

          <div className="cart-counter">
            <h2 className="counter">{length}</h2>
            <Link
              to={ { pathname: '/shoppingCart', state: { shopping } } }
              data-testid="shopping-cart-button"
            >
              <img src={ cart } alt="asd" className="logo-img" />
            </Link>
          </div>
        </div>
        <div className="login">
          <label htmlFor="input-email">
            Email:
            <input type="email" id="input-email" />
          </label>
          <label htmlFor="input-pass">
            Senha:
            <input type="password" id="input-pass" />
          </label>
          <button
            type="button"
            className="submit-btn"
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Header;
