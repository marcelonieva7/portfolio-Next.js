import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBotton: '20px'}}>
          <DiCssdeck size='3rem' /><Span>MN Dev</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons download href="/CarlosMarceloNieva_CV.pdf">
        <AiFillFilePdf size ="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://github.com/marcelonieva7">
        <AiFillGithub size ="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://www.linkedin.com/in/marcelo-nieva/">
        <AiFillLinkedin size ="3rem" />
      </SocialIcons>
      <SocialIcons target="_blank" href="https://t.me/MarceloNieva7">
        <FaTelegramPlane size ="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
