// import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import { projects, frontTitle } from '../constants/constants'

const Home = () => {
  const frontProjects = projects.filter(({role}) => role.includes("Front"))
  return (
    <Layout role="front">
      <Section fullh grid>
        <Hero title={frontTitle}/>
        <BgAnimation />
      </Section>
      <Projects projects={frontProjects}/>
      <Technologies />
      <Timeline />
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
