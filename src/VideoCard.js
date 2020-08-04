import React from 'react';

class VideoCard extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <legend className="feature__name">
          <h3>Video Card</h3>
        </legend>
        {this.props.optionsProp}
      </fieldset>
    )
  }
}

export default VideoCard;