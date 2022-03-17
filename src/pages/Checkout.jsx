import React, { Component } from 'react';
import Card from '../components/Card';

class Checkout extends Component {
  constructor() {
    super();

    this.state = {
      cartItems: JSON.parse(localStorage.getItem('shopping')),
    };
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <div className="cartItems">
          { !cartItems ? '' : cartItems.map((obj) => (<Card
            product={ obj }
            key={ Math.random() }
          />))}
        </div>
        <div>
          <form className="checkout-form">
            <label htmlFor="inputName">
              Nome:
              <input
                className="checkout-input"
                type="text"
                id="inputName"
                data-testid="checkout-fullname"
              />
            </label>
            <label htmlFor="inputEmail">
              Email:
              <input
                className="checkout-input"
                type="text"
                id="inputEmail"
                data-testid="checkout-email"
              />
            </label>
            <label htmlFor="inputCPF">
              CPF:
              <input
                className="checkout-input"
                type="text"
                id="inputCPF"
                data-testid="checkout-cpf"
              />
            </label>
            <label htmlFor="inputPhone">
              Telefone:
              <input
                className="checkout-input"
                type="text"
                id="inputPhone"
                data-testid="checkout-phone"
              />
            </label>
            <label htmlFor="inputCEP">
              Cep:
              <input
                className="checkout-input"
                type="text"
                id="inputCEP"
                data-testid="checkout-cep"
              />
            </label>
            <label htmlFor="inputAddress">
              Endereço:
              <input
                className="checkout-input"
                type="text"
                id="inputAddress"
                data-testid="checkout-address"
              />
            </label>
            <button type="submit">Finalizar Compra</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Checkout;
