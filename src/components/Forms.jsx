import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      description: '',
    };
  }

  componentDidMount() {
    const oldList = localStorage.getItem('avaliation');
    const parseItem = JSON.parse(oldList);

    this.setState({
      ratings: parseItem,
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    localStorage.setItem('email', JSON.stringify(e.target.value));
  }

  handleDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
    localStorage.setItem('description', JSON.stringify(e.target.value));
  }

  handleClick = (e) => {
    const { state } = this;
    const { ratings } = state;
    e.preventDefault();
    this.setState((before) => ({
      ratings: !ratings ? [state] : [...before.ratings, state],
    }), () => this.setState({
      email: '',
      description: '',
    }, () => {
      localStorage.setItem('avaliation', JSON.stringify(!ratings
        ? [state]
        : [...ratings, state]));
    }));
  }

  render() {
    const { email, description, ratings } = this.state;
    return (
      <div>
        <section className="forms-container">
          <h2>Formulário de Qualidade</h2>
          <label htmlFor="email" className="label">
            Digite seu email:
            <input
              type="email"
              name="email"
              id="email"
              data-testid="product-detail-email"
              onChange={ this.handleEmailChange }
              value={ email }
            />
          </label>
          <form className="label-rating">
            Avalie este produto:
            <label htmlFor="rating-1">
              1
              <input
                type="radio"
                name="rating"
                id="rating-1"
                data-testid="1-rating"
              />
            </label>
            <label htmlFor="rating-2">
              2
              <input
                type="radio"
                name="rating"
                id="rating-2"
                data-testid="2-rating"
              />
            </label>
            <label htmlFor="rating-3">
              3
              <input
                type="radio"
                name="rating"
                id="rating-3"
                data-testid="3-rating"
              />
            </label>
            <label htmlFor="rating-4">
              4
              <input
                type="radio"
                name="rating"
                id="rating-4"
                data-testid="4-rating"
              />
            </label>
            <label htmlFor="rating-5">
              5
              <input
                type="radio"
                name="rating"
                id="rating-5"
                data-testid="5-rating"
              />
            </label>
          </form>
          <label
            htmlFor="product-detail-evaluation"
            className="label"
          >
            Descreva:
            <textarea
              name="text-area"
              id="product-detail-evaluation"
              cols="30"
              rows="10"
              data-testid="product-detail-evaluation"
              onChange={ this.handleDescription }
              value={ description }
            />
          </label>
          <button
            type="submit"
            data-testid="submit-review-btn"
            onClick={ this.handleClick }
          >
            {' '}
            Submit
            {' '}

          </button>
          { !ratings ? null : ratings
            .map((obj) => (
              <div key={ Math.random() }>
                <h3>{ obj.email }</h3>
                <h3>{ obj.description }</h3>
              </div>
            ))}
        </section>
      </div>
    );
  }
}

export default Forms;
