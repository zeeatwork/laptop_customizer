import React from 'react';

class Disply extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Display</h3>
        </legend>
        {this.props.optionsProp}
      </fieldset>
    )
  }
}

export default Disply;