import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product: { title, id, price, thumbnail } } = this.props;
    return (
      <div
        data-testid="product"
        className="cards-div"
      >
        <Link
          to={ { pathname: `/ProductDetails/${id}`,
            state: { title, id, price, thumbnail } } }
          data-testid="product-detail-link "
          style={ { textDecoration: 'none' } }
        >
          <h4
            data-testid="product-detail-name"
            className="cardName"
          >
            {title}

          </h4>
          <div className="card-image-box">
            <img
              src={ thumbnail }
              alt={ id }
              className="card-image"
            />
          </div>
          <h4 className="price">
            R$
            {price}
          </h4>
        </Link>
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
