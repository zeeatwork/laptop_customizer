import React from 'react';

import Specs from './Specs';

class MainForm extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Specs currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} featureName="Processor" updateFeatureProp={this.props.updateFeatureProp} feature={this.props.features['Processor']} />
        <Specs currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} featureName="Operating System" updateFeatureProp={this.props.updateFeatureProp} feature={this.props.features['Operating System']} />
        <Specs currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} featureName="Video Card" updateFeatureProp={this.props.updateFeatureProp} feature={this.props.features['Video Card']} />
        <Specs currencyProp={this.props.currencyProp} selectedProp={this.props.selectedProp} featureName="Display" updateFeatureProp={this.props.updateFeatureProp} feature={this.props.features['Display']} />
      </form>
    )
  }
}

export default MainForm;
