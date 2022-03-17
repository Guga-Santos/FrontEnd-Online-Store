import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Categories extends Component {
  render() {
    const { products, onClick } = this.props;
    return (
      <div className="categories-big-container">
        <h3>Categorias:</h3>
        <div className="categories-container">
          {
            products.map((obj) => (
              <button
                data-testid="category"
                className="categories-btn"
                type="button"
                key={ obj.id }
                onClick={ onClick }
                id={ obj.id }
              >
                {obj.name}
              </button>
            ))
          }
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Categories;
