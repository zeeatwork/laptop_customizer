import React from 'react';

class OperatingSystem extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Operating System</h3>
        </legend>
        {this.props.optionsProp}
      </fieldset>
    )
  }
}

export default OperatingSystem;