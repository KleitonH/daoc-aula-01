import { NavLink } from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <Navbar className="bg-info-subtle rounded border border-primary p-2 border-opacity-25">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand className='d-flex align-items-center' href="#home">
          <img
            alt=""
            src="https://s3-alpha-sig.figma.com/img/4e6d/9066/93eb1349338b462dfd3d37994b677eb4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vd3ef85J9Js~o78btzEAiW2X322fW0WkAUGATHX-5SSxZ1UZrh1Vd7EtNt6NwDZqFT67fEYgIHPAKevut6ILi53xhN5SgfYXqQSHdOuuetR7cLfes7ZxbS8NtStGjvFMNIVm5b7a9fJb2AmDqZoYbJCEPFFwqHkDy3esb7ar~eHvRpYX1ogmX0HwN0ubRdogxOTbJPl0tl2csWhzVbjjv1Hv7-~QRgC32Y7yfP3EXcgrr5ZuAazhs0EPO6RHd0EXlHiWVKQgHj~mPZkLuFOmwA5evy~HckaEcLhZ4Ys79ShSwIRoFM9-RYk1-0r3cVBTiaSjleyRthD7uwg2dYXfJA__"
            width="60"
            height="60"
            className="rounded-circle mx-4"
          />
        <h4>Computacao</h4>
        </Navbar.Brand>
        <Nav>
          <NavLink className='nav-link' to="/location">Localização</NavLink>
          <NavLink className='nav-link' to="/cards">Cadastro</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}


export default Header
