import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Img = styled.img`
  height:100%;
  overflow: hidden;
`
export const TitleContent = styled(motion.div)`
  text-align: center;
  z-index: 20;
  width: 100%;
  color: #c892db;
  margin-top: 0.7rem;
`
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  font-size: ${(props) => props.isTitle ? '3rem' : '2rem'};
  background-color: rgba(80,78,78,0.5);
`
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #9a04f7;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem  ;
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`
export const ExternalLinks = styled.a`
  color: #FFFFFF;
  font-size: 1.6rem;
  padding:1rem 1.5rem;
  background: #21babe;
  border-radius: 10px;
  transition: 0.5s;
  &:hover{
    background: #126062;
    color:#f0f0f0;
  }
`
export const TagList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 2rem;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0.5rem;
  }
`
export const Tag = styled.li`
  color: #D4ECDD;
  font-size: 1.3rem;
  background-color: #345B63;
  padding: 0.5rem;
  border-radius: 0.5rem;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.md} {
    width: 95px;
  }
`
export const CardLi = styled.li`
  position: relative;
  padding: 25px;
  height: 460px;
  flex: 0 0 40%;
  max-width: 40%;
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    flex: 0 0 60%;
    max-width: 60%;
  }  
  &:nth-child(odd) {
    padding-left: 0;
  }  
  &:nth-child(even) {
    padding-right: 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    flex: 0 0 50%;
    max-width: 50%;
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    flex: 1 0 100%;
    max-width: 100%;
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      flex: 1 0 100%;
      max-width: 100%;
    }
  }
`
export const CardContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position:${({open}) => open ? "fixed" : "relative"};
  display: ${({open}) => open ? "flex" : "block"};
  filter: drop-shadow(3px 3px 20px rgba(80,78,78,0.5));
  ${({open})=> open && (`
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  `)}
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${({open}) => open && "0"};
  }
`
export const Overlay = styled(motion.div)`
  z-index: 1000;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  will-change: opacity;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`
export const CardContent = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  background: #1c1c1e;
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${({open})=> open && (`
    height: auto;
    max-width: 75vh;
    overflow: hidden;
  `)}
`
export const CardImageContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  ${({open})=> open && (`
    z-index: 1000;
    height: 45vh;
  `)}
`
export const TitleContainer = styled(motion.div)`
  position: absolute;
  top: 15px;
  left: 15px;
  max-width: 300px;
  ${({open})=> open && (`
    top: 30px;
    left: 30px;
    z-index: 1000;
  `)}
`

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`
export const ContentContainer = styled(motion.div)`
  padding: 70% 5% 5%;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 100% 5% 5%;
  }
`
export const BtnClose = styled.button`
  background-color: rgba(0,0,0,0.8);
  position: absolute;  
  right: 0;
  z-index: 9999;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`
export const SpanAria = styled.span`
  visibility: hidden;
`
export const SpanClose = styled.span`
  position: relative;
  left: 35%;
  color: white;
`