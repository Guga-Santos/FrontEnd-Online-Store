import React, { Component } from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories';
import {
  getCategories, getProductsfromCategory, getProductsFromTerm,
} from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      value: '',
      fetched: false,
      products: [],
      shopping: [],
    };
  }

  componentDidMount() {
    this.handleFetchCategories();
  }

  handleFetchCategories = async () => {
    const getFetch = await getCategories();
    this.setState({
      products: [...getFetch],
    });
  }

  handleFetch = async () => {
    const { value } = this.state;
    const getfetch = await getProductsFromTerm(value);
    this.setState({
      query: getfetch.results,
    });
  }

  handleClick = async () => {
    await this.handleFetch();
    this.setState({
      fetched: true,
    });
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }

  handleCategories = async ({ target }) => {
    const teste = await getProductsfromCategory(target.id);
    this.setState({
      query: teste.results,
    }, () => this.setState({
      fetched: true,
    }));
  }

  getCardFromClick = (e) => {
    const { query, shopping } = this.state;

    const shop = query.filter((obj) => obj.id === e.target.id);
    this.setState((before) => ({
      shopping: [...before.shopping, ...shop],
    }), () => {
      localStorage.setItem('shopping', JSON.stringify([...shopping, ...shop]));
    });
  }

  renderCard = () => {
    const { query } = this.state;
    return (
      query.length < 1
        ? <h3>Nenhum produto foi encontrado</h3>
        : query
          .map((obj) => (
            <div key={ obj.id } className="card-container">
              <Card
                product={ obj }
                onClick={ this.getCardFromClick }
              />
              <button
                type="button"
                data-testid="product-add-to-cart"
                id={ obj.id }
                onClick={ this.getCardFromClick }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))
    );
  }

  render() {
    const { value, fetched, products } = this.state;
    return (
      <div className="home-container">
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>

        <div className="input-btn-container">
          <input
            type="text"
            className="search-input"
            data-testid="query-input"
            onChange={ this.handleChange }
            value={ value }
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.handleClick }
          >
            Pesquisar

          </button>
        </div>
        <Categories products={ products } onClick={ this.handleCategories } />
        <div className="home-card-box">
          {!fetched ? '' : this.renderCard()}
        </div>
      </div>
    );
  }
}

export default Home;
