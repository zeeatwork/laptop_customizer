import React from 'react';
import slugify from 'slugify';

class Parts extends React.Component {
  render() {
    const option = this.props.partsFeature.map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.featureName)}
            checked={item.name === this.props.selectedProp[this.props.featureName].name}
            onChange={e => this.props.updateFeatureProp(this.props.featureName, item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.props.currencyProp.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <>
        {option}
      </>
    )
  }
}

export default Parts;