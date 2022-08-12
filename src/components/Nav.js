import { Button, Navbar } from "flowbite-react";
import React from "react";

const Nav = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            TRANSLATOR
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden md:flex">
            <Button className="font-semibold">Login</Button>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="font-semibold">
            About
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
