import React from 'react';

import Parts from './Parts'; 

class Specs extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>{this.props.featureName}</h3>
        </legend>
        <Parts featureName={this.props.featureName} currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} updateFeatureProp={this.props.updateFeatureProp} partsFeature={this.props.feature} />
      </fieldset>
    )
  }
}

export default Specs;