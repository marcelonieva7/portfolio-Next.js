import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Proyectos</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree isTitle>
              {title}
            </HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, id) => (
                <Tag key={id}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {visit && <ExternalLinks target="_blank" href={visit}>Source</ExternalLinks>}
            <ExternalLinks target="_blank" href={source}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))} 
    </GridContainer>
  </Section>
);

export default Projects;