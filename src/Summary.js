import React from 'react';

import Option from './Option';
import Total from './Total';

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your Summary</h2>
        <Option selectedProp={this.props.selectedProp} currencyProp={this.props.currencyProp} />
        <Total currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} />
      </section>
    )
  }
}

export default Summary;