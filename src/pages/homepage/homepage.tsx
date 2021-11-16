import React from 'react';
import NavBar from '../../components/navbar/navbar';
import Logo from '../../assets/img/logo.png';
import CustomCarousal from '../../components/carousal/carousal';
import NameCard from '../../components/name-card/name-card';

const Portfolio: React.FC = () => {
  return (
    <div>
      <NavBar logo={Logo} />
      <CustomCarousal />
      <NameCard />
    </div>
  );
};

export default Portfolio;
