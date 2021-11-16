import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './navbar.scss';

interface navbarProps {
  logo?: string;
}

const NavBar: React.FC<navbarProps> = props => {
  const { logo } = props;
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="animate-navbar nav-theme"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {/* <div className="slider"></div> */}
            <Nav.Link href="#home">主页</Nav.Link>
            <Nav.Link href="#about">关于</Nav.Link>
            <Nav.Link href="#skills">技能</Nav.Link>
            <Nav.Link href="#projects">项目</Nav.Link>
            <Nav.Link href="#blogs">文章</Nav.Link>
            <Nav.Link href="#contact">联系我</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
