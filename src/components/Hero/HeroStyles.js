import { motion } from 'framer-motion';
import styled from 'styled-components';

export const LeftSection = styled(motion.div)`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 140px;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;
