import React from 'react';
import './scroll-button.scss';
import { FcExpand } from 'react-icons/fc';
import { Typography } from 'antd';

const ScrollButton: React.FC = () => {
  return (
    <div className="scroll-button">
      <Typography.Link href="#about" className="turn nav-link">
        <FcExpand />
      </Typography.Link>
    </div>
  );
};

export default ScrollButton;
