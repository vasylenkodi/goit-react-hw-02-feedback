import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './statistics.module.css';

export default class Statistics extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.string,
  };

  render() {
    const dataPairs = Object.entries(this.props);
    dataPairs[4][0] = 'Positive feedback';
    dataPairs[4][1] += '%';
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
