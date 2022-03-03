import React from "react";
import Container from "./styles/Container.styled";
import Flex from "./styles/Flex.styled";

const Footer = (props) => {
  return (
    <div>
      <Container>
        <img src="./images/logo-white.svg" alt="footer-logo" />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </Flex>
        <p>&copy; 2022 Hubble. All right reserved</p>
      </Container>
    </div>
  );
};

export default Footer;