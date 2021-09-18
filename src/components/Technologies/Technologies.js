import React from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle main>Tecnologías</SectionTitle>
    <SectionText>
      Tecnologias que domino desde el back hasta el diseño del front.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Fornt-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React, Redux, Context, Styled Components, Tailwind
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            Node, Express, Mongo DB, JOI, Passport, Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiAndroid size="3rem"/>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
