import React from 'react';
import { feedbackData } from './data/feedbackData';

export default function Testimonials(): JSX.Element {
  const [count, setCount] = React.useState(0);
  const [slideDirection, setSlideDirection] = React.useState('right');
  const shownIndex = Math.abs(count) % feedbackData.length;
  const { client, feedback } = feedbackData[shownIndex];

  return (
    <div>
      <div className='feedback-banner-container'>
        <div className='feedback-header-container'>
          <p>Client Feedback:</p>
          <i>Giving you the confidence to make great decisions.</i>
        </div>
        <img
          src='../../assets/introduction-banner.png'
          alt='banner for golden eggs'
        />
      </div>
      <div className='feedback-slider-container'>
        <div>
          <span
            onClick={() => {
              setCount(count - 1);
              setSlideDirection('left');
            }}
          >
            <img src='../../assets/test-arrow-left.png' />
          </span>
        </div>
        <div
          key={count}
          className={
            slideDirection === 'left'
              ? 'slide-transition-to-left'
              : 'slide-transition-to-right'
          }
        >
          <i>{feedback}</i>
          <p>{client}</p>
        </div>

        <div>
          <span
            onClick={() => {
              setCount(count + 1);
              setSlideDirection('right');
            }}
          >
            <img src='../../assets/test-arrow-right.png' />
          </span>
        </div>
      </div>
    </div>
  );
}
