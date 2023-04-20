import React, { Component } from 'react';
import shortid from 'shortid';

export default class Statistics extends Component {

  render() {
    const dataPairs = Object.entries(this.props);
    dataPairs[4][0] = 'Positive feedback';
    dataPairs[4][1] += "%";
    return (
      <div>
        {dataPairs.map(dataPair => (
          <li key={shortid.generate()}>
            {dataPair[0]}: {dataPair[1]}
          </li>
        ))}
      </div>
    );
  }
}
