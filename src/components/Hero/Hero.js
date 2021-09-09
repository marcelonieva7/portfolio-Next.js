import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noppading>
    <LeftSection>
      <SectionTitle main center>
        Hola, bienvenido a<br/>
        Mi Portfolio
      </SectionTitle>
      <SectionText>
        Creando cosas que viven en la web.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:marcelonieva7@gmail.com'}>Enviame un Email</Button>
    </LeftSection>
  </Section>
);

export default Hero;