import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = ({title}) => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.1, delay: 0.45 } },
    hidden: { opacity: 0, x: -75 }
  };
  return (
    <Section row noppading>
      <LeftSection
        animate="visible"
        initial="hidden"
        variants={variants}
      >
        <SectionTitle main center>
          Hola, bienvenido a<br/>
          Mi Portfolio
        </SectionTitle>
        <SectionText>
          {title}
        </SectionText>
        <Button href="mailto:marcelonieva7@gmail.com">Enviame un Email</Button>
      </LeftSection>
    </Section>
  )
}

export default Hero;