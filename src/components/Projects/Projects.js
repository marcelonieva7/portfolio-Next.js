import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';

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
import { projects } from '../../constants/constants';

const Card = ({ id, title, setId, image }) => (
  <CardLi onClick={()=> setId(id)}>
    <CardContentContainer>
      <CardContent layoutId={`card-container-${id}`}>
        <CardImageContainer layoutId={`card-image-container-${id}`}>
        <Img src={image} alt="project" />
        </CardImageContainer>
        <TitleContainer layoutId={`title-container-${id}`}>
          <HeaderThree isTitle>
            {title}
          </HeaderThree>
        </TitleContainer>
      </CardContent>
    </CardContentContainer>
  </CardLi>
)
const Item = ({ id, wipeId }) => {
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
            <CardInfo>{description}</CardInfo>
            <Hr />
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, id) => (
                <Tag key={id}>{tag}</Tag>
              ))}
            </TagList>
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
const List = ({ selectedId, setId }) => (
  <CardList>
    {projects.map(card => <Card key={card.id} {...card} setId={setId} isSelected={card.id === selectedId} />)}
  </CardList>
)
const Projects = () => {
  const [id, setId] = useState(null)
  const wipeId = () => setId(null)
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Proyectos</SectionTitle>
      <AnimateSharedLayout type="crossfade">
        <List selectedId={id} setId={setId} />
        <AnimatePresence>
          {(id || id === 0) && <Item id={id} wipeId={wipeId} key="item" />}
        </AnimatePresence>
      </AnimateSharedLayout>
    </Section>
  )
}

export default Projects;