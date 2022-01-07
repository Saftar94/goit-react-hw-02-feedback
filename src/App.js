import Section from "./components/Section/Section";
import React from "react";
import FeedbackList from "./components/FeedBack/FeedBack";
import Notification from "./components/Notification/Notification";
import Statistics from "./components/Statistics/Statistics";
import { Component } from "react";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  plusIncrement = (feedback) => {
    this.setState((prevState) => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  totalFeedBack = () => {
    const sum = this.state.good + this.state.neutral + this.state.bad;
    return sum;
  };
  PostitveFeedBack = (total) => {
    const PositiveProcent = (this.state.good / total) * 100;
    return PositiveProcent;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeed = this.totalFeedBack();
    const PostitveFeedBack = this.PostitveFeedBack(totalFeed);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackList
            options={["good", "neutral", "bad"]}
            Feedback={this.plusIncrement}
          />
        </Section>
        <Section title="Statistics">
          {!totalFeed ? (
            <Notification nofeed="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeed}
              PostitveFeedBack={PostitveFeedBack}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
