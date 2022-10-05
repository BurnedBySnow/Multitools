import { motion } from "framer-motion";
import styled from "styled-components";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

export const MainPage = styled(motion.div)`
  display: flex;
  width: 94vw;
  height: 100vh;
  align-items: center;
  flex-direction: row;
`;
export const Menu = styled(motion.div)`
  height: 100vh;
  width: 30%;
  position: relative;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 70%;
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 750px;
  height: 750px;
  z-index: 0;
  margin-left: 200px;
`;

export const WheelDiv = styled(motion.div)`
  width: 750px;
  height: 750px;
  margin-top: 100px;
`;

export const SpinButton = styled(motion.div)`
  border-radius: 100%;
  display: flex;
  width: 150px;
  height: 150px;
  background-color: #23262b;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 36px;
  user-select: none;
  box-shadow: 0 0 3px 4px rgba(0, 0, 0, 0.5);
  margin-top: 100px;
  cursor: pointer;
  z-index: 100;
  ::before {
    content: "";
    position: absolute;
    border-color: transparent transparent #23262b;
    border-style: solid;
    border-width: 25px;
    border-image: none 100% / 1 / 0 stretch;
    left: 50%;
    margin-left: -24.5px;
    top: -45px;
    z-index: 1;
    filter: drop-shadow(0 -5px 3px rgba(0, 0, 0, 0.5));
  }
`;

export const RightSide = styled.div`
  width: 30%;
  height: 100vh;
`;

export const AddContainer = styled.div`
  padding: 30px 30px 10px 30px;
  margin: 0;
  height: 7%;
`;

export const ItemList = styled(motion.div)`
  height: 93%;
  padding: 0 20px 10px 30px;
  margin: 0;
  overflow: auto;
`;

export const ItemContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  width: fit-content;
`;

export const ListItem = styled(motion.input)`
  box-shadow: -2px 3px 3px 1px #00000070;
  display: flex;
  width: 300px;
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  background-color: #2d3136;
  outline: none;
  border: none;
  font-size: 16px;
  :focus {
    outline: solid green 2px;
  }
  margin-right: 10px;
`;

export const CheckBox = styled(motion.div)`
  height: 30px;
  width: 30px;
  position: relative;
  box-shadow: inset -2px 3px 3px 1px #00000070;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
  svg {
    position: absolute;
    transform: rotate(-10deg);
    bottom: 0;
    fill: #038309;
    width: 40px;
    height: 40px;
  }
  :hover {
    svg {
      fill: #03be0d;
    }
  }
`;

export const RemoveItem = styled.div`
  height: 40px;
  width: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    fill: #830303;
    width: 40px;
    height: 40px;
  }
  :hover {
    svg {
      fill: #d10404;
    }
  }
`;

export const Probability = styled.div`
  display: flex;
  width: 150px;
  align-items: center;
`;
export const Range = styled.input`
  background: transparent;
  cursor: pointer;
  width: 150px;
  ::-webkit-slider-runnable-track,
  ::-moz-range-track,
  ::-moz-range-track {
    background: white;
    height: 5px;
    border-radius: 8px;
  }
  ::-webkit-slider-thumb,
  ::-moz-range-thumb {
    background-color: #038309;
  }
  ::-moz-range-progress {
    background-color: #038309;
    border-color: #038309;
    height: 5px;
    border-radius: 8px;
  }
`;

export const ProbValue = styled.div`
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const AddButton = styled(motion.div)`
  height: 40px;
  width: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg {
    fill: #038309;
    width: 40px;
    height: 40px;
  }
  :hover {
    svg {
      fill: #03be0d;
    }
  }
`;

export const WinnerDiv = styled(motion.div)`
  position: relative;
  font-size: 64px;
  font-weight: bold;
  height: 100px;
  margin-left: 400px;
`;
