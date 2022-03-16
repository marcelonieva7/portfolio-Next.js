import React, { useEffect } from 'react';
import { DiFirebase, DiReact, DiAndroid } from 'react-icons/di';
import { useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  {
  const sectionVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        staggerChildren: 0.435
      }
    },
    hidden: { opacity: 0, x: -75 }
  };
  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.435
      }
    }
  }
  const listItemVariant = {
    hidden: { opacity: 0, y: -25, scaleY: 0.93 },
    visible: { opacity: 1, y: 0, scaleY: 1 }
  }
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Section
      id="tech"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
    >
      <SectionDivider variants={item} />
      <SectionTitle variants={item} main>Tecnologías</SectionTitle>
      <SectionText variants={item}>
        Tecnologias que domino desde el back hasta el diseño del front.
      </SectionText>
      <List variants={listVariants}>
        <ListItem variants={listItemVariant}>
          <DiReact size="3rem"/>
          <ListContainer>
            <ListTitle>Fornt-End</ListTitle>
            <ListParagraph>
              Experiencia con <br />
              React, Redux, Context, Styled Components, Tailwind
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem variants={listItemVariant}>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experiencia con <br />
              Node, Express, Mongo DB, JOI, Passport, Firebase.
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem variants={listItemVariant}>
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
    </Section>
  )
}

export default Technologies;
