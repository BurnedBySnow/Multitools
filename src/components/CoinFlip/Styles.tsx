import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

export const MainPage = styled(motion.div)`
  display: absolute;
  width: 100vw;
  height: 100vh;
  justify-content: flex-start;
`;

export const Middle = styled.div`
  display: flex;
  width: 70%;
  position: relative;
`;

export const Container = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftContainer = styled.div`
  height: 100vh;
  width: 30%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Result = styled.div`
  margin: 40px;
  padding: 20px;
  font-size: 40px;
  border-radius: 20px;
  background-color: #161619;
  width: 340px;
  max-height: 50vh;
`;

export const PrevResults = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  max-height: 35vh;
  overflow: auto;
`;

export const Total = styled.div`
  font-size: 30px;
  text-align: center;
  padding: 20px 20px 0 20px;
  border-top: 3px solid #454b53;
`;

export const PrevResult = styled.div``;

export const SvgContainer = styled(motion.div)<{ flipping: boolean }>`
  transform-style: preserve-3d;
  width: 600px;
  height: 600px;
  cursor: ${(p) => (p.flipping ? "default" : "pointer")};
  user-select: none;
  svg {
    width: 600px;
    height: 600px;
  }
`;

export const HeadsDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;
export const TailsDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
