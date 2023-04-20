import React, { Component } from 'react';
import shortid from 'shortid';
import css from './statistics.module.css';

export default class Statistics extends Component {

  render() {
    const dataPairs = Object.entries(this.props);
    dataPairs[4][0] = 'Positive feedback';
    dataPairs[4][1] += "%";
    return (
      <ul className={css.statisticsList}>
        {dataPairs.map(dataPair => (
          <li className={css.statisticsListItem} key={shortid.generate()}>
            {dataPair[0]}: {dataPair[1]}
          </li>
        ))}
      </ul>
    );
  }
}
