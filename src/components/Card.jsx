import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product: { title, id, price, thumbnail } } = this.props;
    return (
      <div
        data-testid="product"
      >
        <Link
          to={ { pathname: `/ProductDetails/${id}`,
            state: { title, id, price, thumbnail } } }
          data-testid="product-detail-link "
        >
          <h3
            data-testid="product-detail-name"
          >
            {title}

          </h3>
          <img
            src={ thumbnail }
            alt={ id }
            className="card-image"
          />
          <h4>{price}</h4>
        </Link>
        {/* <button
          type="button"
          data-testid="product-add-to-cart"
          id={ id }
          onClick={ onClick }
        >
          Adicionar ao carrinho
        </button> */}
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
