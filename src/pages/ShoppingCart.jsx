import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import empty from '../imgs/empty.png';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('shopping')),
      checkout: false,
    };
  }

  componentDidMount() {
    const { products } = this.state;
    if (products) products.map((obj) => this.setState({ [obj.id]: 1 }));
  }

 handleIncrease = ({ target: { id } }) => {
   const ids = id;
   this.setState((prev) => ({
     [ids]: prev[ids] + 1,
   }));
 }

 handleDecrease = ({ target: { id } }) => {
   const ids = id;
   this.setState((prev) => ({
     [ids]: prev[ids] < 2 ? 1 : prev[ids] - 1,
   }));
 }

handleCheckout = () => {
  this.setState({
    checkout: true,
  });
}

render() {
  const { state } = this;
  return (
    !state.products

      ? (
        <div className="shoppingCart-container">
          <h1
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio
          </h1>
          <img
            src={ empty }
            alt="empty cart"
            className="emptycart"
          />
        </div>
      )
      : (
        <div className="shoppingCart-container">
          <button
            type="submit"
            data-testid="checkout-products"
            className="checkout-btn"
            onClick={ this.handleCheckout }
          >
            Finalizar a compra

          </button>
          { !state.checkout ? null : <Redirect to="/checkout" />}
          {state.products.map((obj, index) => (
            <div key={ index } className="shoppingCart-items">
              <div className="name-and-close">
                <button
                  type="button"
                  id={ obj.id }
                >
                  {' '}
                  X
                  {' '}

                </button>
                <h2 data-testid="shopping-cart-product-name">{ obj.title }</h2>
              </div>

              <div className="img-and-counter">
                <img src={ obj.thumbnail } alt="Thumb" />
                <div>
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    id={ obj.id }
                    onClick={ this.handleIncrease }
                  >
                    {' '}
                    +
                    {' '}

                  </button>
                  <h4 data-testid="shopping-cart-product-quantity">
                    {' '}
                    {state[obj.id]}
                    {' '}
                  </h4>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    id={ obj.id }
                    onClick={ this.handleDecrease }
                  >
                    {' '}
                    -
                    {' '}

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )

  );
}
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shopping: PropTypes.arrayOf(Object),
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
