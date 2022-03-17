import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      length: 0,
    };
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('shopping'));
    this.setState({
      length: !storage ? 0 : storage.length,
    });
  }

  render() {
    const { length } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <header>
              <Header length={ length } />
              <Route
                exact
                path="/"
                render={ (props) => <Home { ...props } /> }
              />
              <Route
                path="/shoppingcart"
                render={ (props) => <ShoppingCart { ...props } /> }
              />
              <Route
                path="/productDetails"
                render={ (props) => <ProductDetail { ...props } /> }
              />
              <Route
                exact
                path="/checkout"
                render={ (props) => <Checkout { ...props } /> }
              />
            </header>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
