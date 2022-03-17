import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Forms from '../components/Forms';
import { addItem, getProductFromID } from '../services/api';

class ProductDetail extends Component {
  async componentDidMount() {
    const { location: { state } } = this.props;
    const fetched = await getProductFromID(state.id);
    console.log(fetched);
  }

  handleClick = () => {
    const { location: { state } } = this.props;
    addItem(state);
  }

  render() {
    const { location: { state } } = this.props;
    return (
      <div className="big-container">
        <div className="product-details-container">
          <p data-testid="product-detail-name">{state.title}</p>
          <div className="image-box">
            <img
              src={ state.thumbnail }
              alt="product-thumb"
              className="detail-img"
            />
          </div>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
        <div className="form-container">
          <Forms />
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
