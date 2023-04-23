import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import css from './feedbackOptions.module.css';

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  }

  render() {
    const { options } = this.props;
    const { onLeaveFeedback } = this.props;
    return (
      <ul
        className={css.feedbackButtons__list}
        onClick={event => {
          onLeaveFeedback(event.target.textContent);
        }}
      >
        {options.map(option => (
          <li
            className={css.feedbackButtons__listItem}
            key={shortid.generate()}
          >
            <button className={css.feedbackButton} type="button">
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
