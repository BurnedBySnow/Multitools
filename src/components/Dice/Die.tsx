import { AnimationControls, useAnimationControls } from "framer-motion";
import { DieType } from "../../types/Interfaces";
import {
  DieContainer,
  DieFive,
  DieFour,
  DieOne,
  DieSix,
  DieThree,
  DieTwo,
  StyledDie,
} from "./Styles";

const Die = (props: {
  dice: DieType[];
  setDice: React.Dispatch<React.SetStateAction<DieType[]>>;
  dieId: number;
  removeDie: (dieId: number) => void;
}) => {
  return (
    <DieContainer onClick={() => props.removeDie(props.dieId)}>
      <StyledDie id={"cube" + props.dieId}>
        <DieOne>
          <div>
            <span />
          </div>
        </DieOne>
        <DieTwo>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </DieTwo>
        <DieThree>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
          </div>
        </DieThree>
        <DieFour>
          <div>
            <span />
            <span />
          </div>
          <div>
            <span />
            <span />
          </div>
        </DieFour>
        <DieFive>
          <div>
            <span />
            <span />
          </div>
          <div>
            <span />
          </div>
          <div>
            <span />
            <span />
          </div>
        </DieFive>
        <DieSix>
          <div>
            <span />
            <span />
          </div>
          <div>
            <span />
            <span />
          </div>
          <div>
            <span />
            <span />
          </div>
        </DieSix>
      </StyledDie>
    </DieContainer>
  );
};

export default Die;
