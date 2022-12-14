import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ChartConfiguration,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Item } from "../../types/Interfaces";
import {
  Container,
  MainPage,
  Middle,
  RightSide,
  SpinButton,
  WheelDiv,
  WinnerDiv,
} from "./Styles";
import ChartDataLabels, { Context } from "chartjs-plugin-datalabels";
import { useAnimationControls } from "framer-motion";
import WheelMenu from "./WheelMenu";

interface LineProps {
  options: ChartOptions<"pie">;
  data: ChartData<"pie">;
}

const Wheel = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [winner, setWinner] = useState<{ text: string; show: boolean }>({
    text: "",
    show: false,
  });
  const [spinning, setSpinning] = useState<boolean>(false);

  const controls = useAnimationControls();

  ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

  const setTextRotation = () => {
    const tempItems = items.filter((item) => item.enabled);
    let arr: Array<number> = [];
    let totalProb = 0;
    tempItems.forEach((item) => {
      totalProb += item.probability;
    });
    let i = 0;
    tempItems.forEach((item) => {
      let angle = (item.probability / totalProb) * 360;
      arr.push(-180 + 90 + angle / 2 + i);
      i += angle;
    });
    return arr;
  };

  const spinWheel = () => {
    if (spinning) return;
    setSpinning(true);
    setWinner({ ...winner, show: false });
    const tempItems = items.filter((item) => item.enabled);
    const max = 4680;
    const min = 4320;
    let arrLength = tempItems.length;
    let totalProb = 0;
    tempItems.forEach((item) => {
      totalProb += item.probability;
    });
    const gap: number[] = [0];
    for (let i = 0; i < arrLength - 1; i++) {
      let angle = (tempItems[i].probability / totalProb) * 360;
      gap.push(angle + gap[i]);
    }
    gap.push(360);
    let rotation = Math.floor(Math.random() * (max - min + 1)) + min;
    if (gap.includes(rotation - 4320)) {
      rotation += 1;
    }
    controls.set({ rotate: 0 });
    controls.start({ rotate: rotation });
    setTimeout(() => {
      let calc = max - rotation;
      for (let i = 0; i < arrLength; i++) {
        if (calc >= gap[i] && calc <= gap[i + 1]) {
          setWinner({ text: tempItems[i].label + " Wins!", show: true });
        }
      }
      setSpinning(false);
    }, 8500);
  };

  const getData = () => {
    let arr = items
      .filter((item) => item.enabled)
      .map((item) => item.probability);
    if (arr.length === 0) {
      arr = [1, 1, 1, 1];
    }
    return arr;
  };

  const getLabels = () => {
    let arr = items.filter((item) => item.enabled).map((item) => item.label);
    if (arr.length === 0) {
      arr = ["yes", "no", "yes", "no"];
    }
    return arr;
  };

  const data = {
    labels: getLabels(),
    datasets: [
      {
        data: getData(),
        backgroundColor: ["red", "blue", "green", "orange"],
      },
    ],
  };

  const options: ChartOptions = {
    events: [],
    responsive: true,
    animation: {
      duration: 500,
      easing: "easeOutCirc",
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value: number, context: Context) => {
          if (context.chart.data.labels) {
            return context.chart.data.labels[context.dataIndex];
          }
        },
        rotation: setTextRotation(),
        color: "white",
        font: {
          size: 42,
          family: "sans-serif",
          weight: "bold",
        },
      },
    },
  };

  useEffect(() => {
    setItems([
      { id: 1, label: "Basse", probability: 1, enabled: true },
      { id: 2, label: "Torres", probability: 1, enabled: true },
      { id: 3, label: "Tobbe", probability: 1, enabled: true },
      { id: 4, label: "Olof", probability: 1, enabled: true },
      { id: 5, label: "Lasse", probability: 1, enabled: true },
    ]);
  }, []);

  useEffect(() => {
    setTextRotation();
  }, [items]);

  return (
    <MainPage
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <WheelMenu items={items} setItems={setItems} />
      <Middle>
        <div style={{ height: "100px" }}>
          <WinnerDiv animate={{ opacity: winner.show ? 1 : 0 }}>
            {winner.text}
          </WinnerDiv>
        </div>
        <Container>
          <SpinButton onClick={() => spinWheel()} spinning={spinning}>
            Spin
          </SpinButton>
          <WheelDiv
            animate={controls}
            transition={{ duration: 8, ease: "easeOut" }}
          >
            <Pie data={data} options={options} />
          </WheelDiv>
        </Container>
      </Middle>
    </MainPage>
  );
};

export default Wheel;
