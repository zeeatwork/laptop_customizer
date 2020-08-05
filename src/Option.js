import React from 'react';

class Option extends React.Component {
  render() {
    const summary = Object.keys(this.props.selectedProp).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selectedProp[feature];
  
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.currencyProp.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    return (
      <>
        {summary}
      </>
    )
  }
}

export default Option;