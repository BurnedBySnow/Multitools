import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import { ReactComponent as Heads } from "../../assets/heads.svg";
import { ReactComponent as Tails } from "../../assets/tails.svg";
import {
  MainPage,
  Container,
  SvgContainer,
  HeadsDiv,
  TailsDiv,
  LeftContainer,
  Middle,
  Result,
  PrevResults,
  PrevResult,
  Total,
} from "./Styles";

const CoinFlip = () => {
  const controls = useAnimationControls();
  const [side, setSide] = useState<"heads" | "tails">("heads");
  const [flipping, setFlipping] = useState<boolean>(false);
  const [results, setResults] = useState<("Heads" | "Tails")[]>([]);
  const [total, setTotal] = useState<{ heads: number; tails: number }>({
    heads: 0,
    tails: 0,
  });
  const [showPrevResults, setShowPrevResults] = useState<boolean>(false);
  const parent = useRef(null);

  const flipCoin = () => {
    if (!flipping) {
      setFlipping(true);
      let i = Math.floor(Math.random() * 2);
      controls.set({ rotateY: side === "heads" ? 0 : 180 });
      if (i) {
        setSide("heads");
        setTimeout(() => {
          controls.start({ rotateY: 2160 });
        }, 100);
      } else {
        setSide("tails");
        setTimeout(() => {
          controls.start({ rotateY: 1980 });
        }, 100);
      }
      setTimeout(() => {
        i ? addToResults("Heads") : addToResults("Tails");
        setFlipping(false);
      }, 3200);
    }
  };

  const addToResults = (result: "Heads" | "Tails") => {
    setResults([...results, result]);
    result === "Heads"
      ? setTotal({ ...total, heads: total.heads + 1 })
      : setTotal({ ...total, tails: total.tails + 1 });
  };

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  return (
    <MainPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LeftContainer>
        <Result ref={parent}>
          <div
            onClick={() => setShowPrevResults(!showPrevResults)}
            style={{
              paddingBottom: "20px",
              borderBottom: "3px solid #454b53",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            Previous: {results[results.length - 2]}
          </div>
          {showPrevResults && (
            <div>
              <PrevResults>
                {results.map((result) => (
                  <PrevResult>{result}</PrevResult>
                ))}
              </PrevResults>
              <Total>
                Heads: {total.heads} Tails: {total.tails}
              </Total>
            </div>
          )}
        </Result>
      </LeftContainer>

      <Container>
        {
          <div style={{ height: "110px", marginBottom: "50px" }}>
            {!flipping && (
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: "bold",
                }}
              >
                Press coin to flip!
              </h1>
            )}
          </div>
        }
        <SvgContainer
          animate={controls}
          transition={{ duration: 3, ease: "easeOut" }}
          onClick={flipCoin}
          flipping={flipping}
        >
          <HeadsDiv>
            <Heads />
          </HeadsDiv>
          <TailsDiv>
            <Tails />
          </TailsDiv>
        </SvgContainer>
      </Container>
    </MainPage>
  );
};

export default CoinFlip;
