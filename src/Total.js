import React from 'react';

class Total extends React.Component {
  render() {
    const total = Object.keys(this.props.selectedProp).reduce(
      (acc, curr) => acc + this.props.selectedProp[curr].cost,
      0
    );
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.currencyProp.format(total)}
        </div>
      </div>
    )
  }
}

export default Total;