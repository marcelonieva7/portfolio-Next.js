import React, { useState, useEffect } from 'react';
import { AnimatePresence, AnimateSharedLayout, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";

import {
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  CardLi,
  CardContentContainer,
  CardContent,
  CardImageContainer,
  TitleContainer,
  Overlay,
  CardList,
  ContentContainer,
  BtnClose,
  SpanAria,
  SpanClose
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Card = ({ id, title, setId, image }) => {
  const cardVariants = {
    visible: {
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 1.1,
        type: "spring",
        ease: "anticipate"
      }
    },
    hidden: {
      opacity: 0,
      scaleX: 0.65,
      scaleY: 0.65
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.65,
        type: "spring",
        ease: "easeIn"
      }
    }
  };
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -35,
      x: -35
    },
    hover: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.75,
        type: "spring",
        ease: "easeIn"
      }
    }
  }
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <CardLi
      style={{ originX: id % 2 ? 0.5 : 0, originY: 0.5 }}
      ref={ref}
      animate={controls}
      initial="hidden"
      whileHover="hover"
      variants={cardVariants}
      onClick={()=> setId(id)}
    >
      <CardContentContainer>
        <CardContent layoutId={`card-container-${id}`}>
          <CardImageContainer layoutId={`card-image-container-${id}`}>
          <Img src={image} alt="project" />
          </CardImageContainer>
          <TitleContainer
            layoutId={`title-container-${id}`}
            variants={titleVariants}
          >
            <HeaderThree isTitle>
              {title}
            </HeaderThree>
          </TitleContainer>
        </CardContent>
      </CardContentContainer>
    </CardLi>
  )
}
const Item = ({ id, wipeId, projects }) => {
  const { description, image, visit, title, tags, source } = projects.find(item => item.id === id)
  return (
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      />
      <CardContentContainer open>
        <CardContent open layoutId={`card-container-${id}`}>
          <BtnClose onClick={wipeId}>
            <SpanClose aria-hidden="true">X</SpanClose>
            <SpanAria>Close</SpanAria>
          </BtnClose>
          <CardImageContainer open layoutId={`card-image-container-${id}`}>
            <Img src={image}/>
          </CardImageContainer>
          <TitleContainer open layoutId={`title-container-${id}`}>
            <HeaderThree isTitle>
              {title}
            </HeaderThree>
          </TitleContainer>
          <ContentContainer animate>
            <TagList>
              {tags.map((tag, id) => (
                <Tag key={id}>{tag}</Tag>
              ))}
            </TagList>
            <CardInfo>{description}</CardInfo>
            <UtilityList>
              {visit && <ExternalLinks target="_blank" href={visit}>Source</ExternalLinks>}
              <ExternalLinks target="_blank" href={source}>Code</ExternalLinks>
            </UtilityList>
          </ContentContainer>
        </CardContent>
      </CardContentContainer>
    </>
  )
}
const List = ({ selectedId, setId, projects }) => (
  <CardList>
    {projects.map(card => <Card key={card.id} {...card} setId={setId} isSelected={card.id === selectedId} />)}
  </CardList>
)
const Projects = ({projects}) => {
  const [id, setId] = useState(null)
  const wipeId = () => setId(null)
  const titleVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
    hidden: { opacity: 0, x: -75 }
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle
        main
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={titleVariants}
      >
        Proyectos
      </SectionTitle>
      <AnimateSharedLayout type="crossfade">
        <List selectedId={id} setId={setId} projects={projects}/>
        <AnimatePresence>
          {(id || id === 0) && <Item id={id} wipeId={wipeId} key="item" projects={projects} />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Section>
  )
}

export default Projects;