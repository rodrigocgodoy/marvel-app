import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare
} from 'react-icons/all';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="infos">
        <span>Copyright © 2020 all rights reserved</span>
        <span>
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/rodrigo-correia-godoy/"
            target="blank"
          >
            Rodrigo Godoy
          </a>
        </span>
      </div>
      <div className="redes-sociais">
        <a href="https://github.com/rodrigocgodoy" target="blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-correia-godoy/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/rodrigogodoy.dev/" target="blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/rodrigogodoydeveloper/"
          target="blank"
        >
          <FaFacebookSquare />
        </a>
        <a href="https://twitter.com/rodrigogodoy__" target="blank">
          <FaTwitterSquare />
        </a>
      </div>
    </Container>
  );
}
