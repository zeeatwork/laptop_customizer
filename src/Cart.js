import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {this.props.summaryProp}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {this.props.currencyProp.format(this.props.totalProp)}
          </div>
        </div>
      </section>
    )
  }
}

export default Cart;