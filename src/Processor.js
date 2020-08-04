import React from 'react';

class Processor extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Processor</h3>
        </legend>
        {this.props.optionsProp}
      </fieldset>
    )
  }
}

export default Processor;