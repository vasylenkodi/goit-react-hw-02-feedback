import React, { Component } from 'react';
import shortid from 'shortid';

export default class FeedbackOptions extends Component {

  render() {
    const { options } = this.props;
    const { onLeaveFeedback } = this.props;
    return (
      <div
        onClick={(event) => {
          onLeaveFeedback(event.target.textContent);
        }}
      >
        {options.map(option => (
          <li key={shortid.generate()}>
            <button type="button">{option}</button>
          </li>
        ))}
      </div>
    );
  }
}
