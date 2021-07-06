import React from 'react';
import { contactItems } from './data/contactInfo';

export default function Footer(): JSX.Element {
  return (
    <div className='footer'>
      <div className='footer-contact'>
        {contactItems
          .slice(0, 3)
          .map(({ area, staffName, phone, email }, index) => (
            <div key={index}>
              <ul>
                <li className='area-font'>{area}</li>
                <li className='name-font'>{staffName}</li>
                <li className='contact-font'>{phone}</li>
                <li className='contact-font'>
                  <a href={'mailto:' + email}>{email}</a>
                </li>
              </ul>
            </div>
          ))}
      </div>
      <div className='map-container'>
        <div>
          <ul>
            <li className='area-font'>Visit Us</li>
            <li className='contact-font'>Shop 46, The Italian Forum,</li>
            <li className='contact-font'>23 Norton St,</li>
            <li className='contact-font'>Leichhardt, NSW 2040</li>
          </ul>
        </div>
        <div className='map-frame-responsive'>
          <iframe
            width='400'
            height='300'
            frameBorder='0'
            allowFullScreen
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.099807435643!2d151.1562735511391!3d-33.88708328055624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b01beeeaf38b%3A0x38eed21711952ccf!2sThe%20Italian%20Forum!5e0!3m2!1sen!2sau!4v1625442005632!5m2!1sen!2sau'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
