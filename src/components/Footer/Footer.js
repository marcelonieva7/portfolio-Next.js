import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFilePdf } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Celular</LinkTitle>
          <LinkItem href="tel:380-4928129">380-4928129</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:marcelonieva7@gmail.com">marcelonieva7@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Soñando con crear el proximo framework de moda 
            y ser el empleado del mes.
            </Slogan>
        </CompanyContainer>
        <SocialContainer>
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
          </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
