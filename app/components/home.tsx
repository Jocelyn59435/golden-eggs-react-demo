import React from 'react';

export default function Home(): JSX.Element {
  return (
    <div className='home-container'>
      <div className='link-container'>
        <button>
          <a>MONEY COACHING WORKSHOP BOOK NOW</a>
        </button>
      </div>
      <div className='introduction-container-background'>
        <div className='introduction-container'>
          <div>
            <img
              src='../../assets/golden-eggs-home-loans-hero.jpg'
              alt='intro-image for Golden Eggs'
            />
          </div>
          <div>
            <p className='introduction-font'>
              We Help People on a career path who love&nbsp;
              <i>property and travel</i>;
            </p>
            <p className='introduction-font'>
              By guiding them on&nbsp;
              <i>property investing and finance structuring&nbsp;</i>
            </p>
            <p className='introduction-font'>
              To <i>end their money worries</i> and get on the path to financial
              freedom.
            </p>
            <p>
              <a href='/contact-us'>» Find Out More</a>
            </p>
          </div>
        </div>
      </div>
      <div className='eggs-container'>
        <div>
          <img src='../../assets/goldegg.png' alt='golden-egg-image' />
          <span>
            <a>Get Some Free Advice</a>
          </span>
        </div>

        <div>
          <img src='../../assets/goldegg.png' alt='golden-egg-image' />
          <span>
            <a>About Golden Eggs</a>
          </span>
        </div>
        <div>
          <img src='../../assets/goldegg.png' alt='golden-egg-image' />
          <span>
            <a>Client Feedback</a>
          </span>
        </div>
      </div>
      <div className='media-container'>
        <div>
          <h2>We are Golden Eggs Home Loans</h2>
          <p>
            It’s simple. We love property and we love securing it for our
            clients.
          </p>
          <p>
            More importantly, we love to educate, guide and develop tailored
            loan strategies that help our clients buy and hold more property
            over the longer term.
          </p>
          <p>
            This passion, experience and enthusiasm means our clients benefit
            from a level of experience not commonly seen in the lending
            industry. We are all about the long-term relationships.
          </p>
          <p>We are different.</p>
          <button>
            <a>MONEY COACHING WORKSHOP BOOK NOW</a>
          </button>
        </div>
        <div>
          <iframe
            src='https://www.youtube.com/embed/0429tt-gDAc'
            title='Invite friends who need to prepare to invest in property next year.'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
          <iframe
            loading='lazy'
            title='Are you spending Too Much?'
            src='https://www.youtube.com/embed/POrc9v8UXW4?feature=oembed'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
          <iframe
            src='https://www.youtube.com/embed/Y4C0-U6wVns'
            title='Maxs Money Coaching story'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
        <div>
          <p>
            To see how you can help us to help others, check out our giving page
            at B1G1
          </p>
        </div>
      </div>
    </div>
  );
}
