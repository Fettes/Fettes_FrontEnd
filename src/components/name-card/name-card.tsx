import React from 'react';
import Typewriter from 'typewriter-effect';

import './name-card.scss';

const NameCard = () => (
  <div className="titleMessage">
    <div className="heading">
      <div className="main text-center mb-3">
        Hi, I am
        <br />
        <span>
          <strong>Fettes👋</strong>
        </span>
      </div>
      <div className="sub">
        <Typewriter
          options={{
            strings: ['Front-End Developer', 'Johns Hopkins Graduates', 'ByteDancer'],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
    </div>
  </div>
);

export default NameCard;
