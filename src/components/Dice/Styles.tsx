import { motion } from "framer-motion";
import styled from "styled-components";

export const MainPage = styled(motion.div)`
  position: absolute;
  display: flex;
  width: 94vw;
  height: 100vh;
  justify-content: center;
`;

export const Container = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70vw;
  min-width: 50vw;
  margin-bottom: 120px;
`;

export const Button = styled(motion.div)`
  border-radius: 8px;
  border: 2px solid white;
  padding: 16px;
  width: 125px;
  height: fit-content;
  font-size: 20px;
  font-weight: bold;
  margin: 0 20px 100px 20px;
  box-shadow: -2px 4px 3px 1px #00000070;
  cursor: pointer;
  user-select: none;
  background-color: #ab1a1a;
  border-color: #ab1a1a;
  text-align: center;
`;

export const Result = styled(motion.h1)`
  font-size: 64px;
`;

export const DieContainer = styled.section`
  cursor: pointer;
  width: 200px;
  height: 200px;
  position: relative;
  z-index: 20;
  margin: 20px 120px 0 0;
  perspective: 1000px;
  perspective-origin: 50% 100%;
  :last-child {
    margin-right: 0;
  }
`;

export const StyledDie = styled(motion.div)`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 3s ease-out;
  border-radius: 20px;
  & > div {
    border-radius: 20px;
    background: hsla(0, 85%, 50%, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #ab1a1a;

    margin: 0 auto;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 500%;
    text-align: center;
  }
  span {
    display: block;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 100%;
  }
`;

export const DieOne = styled.div`
  transform: translateZ(100px);
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const DieTwo = styled.div`
  transform: rotateX(-90deg) translateZ(100px);
  div {
    display: flex;
    justify-content: space-evenly;
    :first-child {
      display: flex;
      justify-content: flex-start;
      padding: 20px 0 0 20px;
      height: 50%;
    }
    :last-child {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0 20px 20px 0;
      height: 50%;
    }
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const DieThree = styled.div`
  transform: rotateY(90deg) translateZ(100px);
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    :nth-child(1) {
      align-items: flex-start;
      padding: 20px 0 0 20px;
      height: 33%;
    }
    :nth-child(2) {
      align-items: center;
      height: 33%;
    }
    :nth-child(3) {
      align-items: flex-end;
      padding: 0 20px 20px 0;
      height: 33%;
    }
  }
`;
export const DieFour = styled.div`
  transform: rotateY(-90deg) translateZ(100px);
  div {
    display: flex;
    justify-content: space-between;
    :first-child {
      height: 50%;
      padding: 20px 20px 0 20px;
    }
    :last-child {
      height: 50%;
      padding: 0 20px 20px 20px;
      align-items: flex-end;
    }
  }
`;
export const DieFive = styled.div`
  transform: rotateX(90deg) translateZ(100px);
  div {
    display: flex;
    justify-content: space-between;
    :nth-child(1) {
      height: 33%;
      padding: 20px 20px 0 20px;
    }
    :nth-child(2) {
      height: 33%;
      align-items: center;
      justify-content: center;
    }
    :nth-child(3) {
      height: 33%;
      padding: 0 20px 0px 20px;
    }
  }
`;
export const DieSix = styled.div`
  transform: rotateX(-180deg) translateZ(100px);
  div {
    display: flex;
    justify-content: space-between;
    :nth-child(1) {
      height: 33%;
      padding: 20px 20px 0 20px;
    }
    :nth-child(2) {
      height: 33%;
      align-items: center;
      padding: 0 20px 0 20px;
    }
    :nth-child(3) {
      height: 33%;
      padding: 0 20px 20px 20px;
    }
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
