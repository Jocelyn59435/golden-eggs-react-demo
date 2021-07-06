import React from 'react';
import { contactItems } from './data/contactInfo';

export default function Contacts(): JSX.Element {
  return (
    <div className='contact-us-container'>
      <div className='contacts-header-container'>
        <h1>Contact Golden Eggs</h1>
        <h1>
          <a href='tel:02 8095 9251'>02 8095 9251</a>
        </h1>
        <p>
          At Golden Eggs, we would love to understand your situation and long
          term needs, to see how we might be able to help educate you and give
          you the confidence to make great decisions.
        </p>
      </div>
      <div className='contacts-container'>
        {contactItems.map(
          ({ area, staffName, phone, email, appointment, img }, index) => (
            <div key={index} className='contact-item-container'>
              <ul>
                <li className='contact-area'>{area}</li>
                <li className='contact-name'>{staffName}</li>
                <li className='contact-phone'>
                  <a href={'tel:' + phone}>{phone}</a>
                </li>
                <li className='contact-email'>
                  <a href={'mailto:' + email}>{email}</a>
                </li>
                {appointment ? (
                  <li className='contact-appointment'>
                    <a href='https://calendly.com/goldeneggsmax'>
                      Book an Appointment.
                    </a>
                  </li>
                ) : null}
              </ul>
              <img src={img} alt='staff image' />
            </div>
          )
        )}
      </div>
    </div>
  );
}
