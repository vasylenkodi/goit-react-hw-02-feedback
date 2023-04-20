import React, { Component } from 'react';
import shortid from 'shortid';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback(button) {
    this.setState(prevState => {
      const counter = prevState[button] + 1;
      return {
        [button]: counter,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  countTotalFeedback() {
    this.setState(prevState => {
      const { good, neutral, bad } = prevState;
      return {
        total: good + neutral + bad,
      };
    });
  }

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      const { good, total } = prevState;
      const positive = ((good / total) * 100).toFixed(0);
      return {
        positivePercentage: positive,
      };
    });
  }

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    const feedbackIsPresent = good + neutral + bad;
    const feedbacksButtonsTitle = 'Please leave feedback';
    const statisticsTitle = 'Statistics';
    return [
      <Section key={shortid.generate()} title={feedbacksButtonsTitle}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.countFeedback.bind(this)}
        />
      </Section>,
      feedbackIsPresent ? (
        <Section key={shortid.generate()} title={statisticsTitle}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <p key={shortid.generate()}>There is no feedback</p>
      ),
    ];
  }
}
