/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';
import IconLinkedin from '../../assets/img/linkedin.svg';
import IconGithub from '../../assets/img/github.svg';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Hiroflix" />
      </a>
      <p>

        Luis Mazaro

        <p style={{ display: 'flex', justifyContent: 'center' }}>
          <a target="_blank" href="https://www.linkedin.com/in/luis-mazaro-781260136/"><img alt="Linkedin" style={{ width: '32px', margin: '4px' }} src={IconLinkedin} /></a>
          <a target="_blank" href="https://github.com/Mazaro-bot"><img alt="Github" style={{ width: '32px', margin: '4px' }} src={IconGithub} /></a>
        </p>
        <p style={{ fontSize: '.6em' }}>

          Ícones feitos por
          {' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a>
          {' '}
          e
          {' '}
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>
          {' '}
          em
          {' '}
          <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </p>
      </p>
    </FooterBase>
  );
}

export default Footer;
