import { useState } from "react";
import { DieType } from "../../types/Interfaces";
import Die from "./Die";
import { Container, DiceContainer, Button, MainPage, Result } from "./Styles";

const Dice = () => {
  const [dice, setDice] = useState<DieType[]>([
    { id: 1, value: 1 },
    { id: 2, value: 1 },
  ]);
  const [rolling, setRolling] = useState<boolean>(false);

  const calcTotal = () => {
    let total = 0;
    dice.forEach((die) => {
      total += die.value;
    });
    return total;
  };

  const rollDice = () => {
    if (dice.length > 0) {
      setRolling(true);
      let dieRes: number[] = [];
      dice.forEach((die) => {
        let cube = document.getElementById("cube" + die.id);
        let result = Math.floor(Math.random() * 6 + 1);
        let x: number = 0,
          y: number = 0;
        switch (result) {
          case 1:
            x = 1440;
            y = 1440;
            break;
          case 2:
            x = 1530;
            y = 1440;
            break;
          case 3:
            x = 1440;
            y = 1350;
            break;
          case 4:
            x = 1440;
            y = 1530;
            break;
          case 5:
            x = 1350;
            y = 1440;
            break;
          case 6:
            x = 1620;
            y = 1440;
            break;
        }
        dieRes.push(result);
        if (cube) {
          cube.style.transition = "none";
          cube.style.transform = "rotateX(" + 0 + "deg) rotateY(" + 0 + "deg)";
        }
        setTimeout(() => {
          if (cube) {
            cube.style.transition = "transform 3s ease-out";
            cube.style.transform =
              "rotateX(" + x + "deg) rotateY(" + y + "deg)";
          }
        }, 50);
      });
      setTimeout(() => {
        const arr = dice.map((die, index) => {
          return { ...die, value: dieRes[index] };
        });
        setDice(arr);
        setRolling(false);
      }, 3100);
    }
  };

  const addDie = () => {
    if (dice.length < 10) {
      let dieId;
      if (dice.length === 0) {
        dieId = 1;
      } else {
        dieId = dice[dice.length - 1].id + 1;
      }
      const die: DieType = {
        id: dieId,
        value: 1,
      };
      setDice([...dice, die]);
    }
  };

  const removeDie = (dieId: number) => {
    const arr = dice.filter((die) => die.id !== dieId);
    setDice(arr);
  };

  return (
    <MainPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container>
        <div style={{ display: "flex", height: "200px" }}>
          {!rolling && (
            <Button
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={rollDice}
            >
              Roll Dice
            </Button>
          )}
          {!rolling && (
            <Button
              onClick={addDie}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Add Die
            </Button>
          )}
        </div>
        {dice.map((obj, index) => {
          if (index % 5 === 0) {
            return (
              <DiceContainer>
                {dice.map(
                  (die) =>
                    dice.indexOf(die) >= index &&
                    dice.indexOf(die) < index + 5 && (
                      <Die
                        key={die.id}
                        dieId={die.id}
                        dice={dice}
                        setDice={setDice}
                        removeDie={removeDie}
                      ></Die>
                    )
                )}
              </DiceContainer>
            );
          }
        })}
        {!rolling && (
          <Result
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {calcTotal()}
          </Result>
        )}
      </Container>
    </MainPage>
  );
};

export default Dice;
