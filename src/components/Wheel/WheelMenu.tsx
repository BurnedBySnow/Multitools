import { Item } from "../../types/Interfaces";
import {
  AddButton,
  AddContainer,
  CheckBox,
  ItemContainer,
  ItemList,
  ListItem,
  Menu,
  Probability,
  ProbValue,
  Range,
  RemoveItem,
} from "./Styles";
import { ReactComponent as XIcon } from "../../assets/x.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence } from "framer-motion";

const WheelMenu = (props: {
  items: Item[];
  setItems: Dispatch<SetStateAction<Item[]>>;
}) => {
  const [newInput, setNewInput] = useState<string>("");

  const handleOnChange = (text: string, itemId: number) => {
    const arr = props.items.map((obj) =>
      obj.id === itemId ? { ...obj, label: text } : obj
    );
    props.setItems(arr);
  };

  const toggleItem = (itemId: number) => {
    const arr = props.items.map((obj) =>
      obj.id === itemId ? { ...obj, enabled: !obj.enabled } : obj
    );
    props.setItems(arr);
  };

  const addItem = (text: string) => {
    if (text !== "") {
      const itemId = props.items[props.items.length - 1].id + 1;
      const item: Item = {
        id: itemId,
        label: text,
        probability: 1,
        enabled: true,
      };
      props.setItems([...props.items, item]);
    }
  };

  const removeItem = (itemId: number) => {
    const arr = props.items.filter((item) => item.id !== itemId);
    props.setItems(arr);
  };

  const updateProb = (value: number, itemId: number) => {
    const arr = props.items.map((obj) =>
      obj.id === itemId ? { ...obj, probability: value } : obj
    );
    props.setItems(arr);
  };

  return (
    <Menu>
      <AddContainer>
        <ItemContainer style={{ justifyContent: "flex-start" }}>
          <ListItem
            placeholder="New Item"
            style={{
              backgroundColor: "#454b53",
              borderRadius: 4,
              marginRight: 5,
            }}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <AddButton
            whileTap={{ scale: 0.95 }}
            onClick={(e) => addItem(newInput)}
          >
            <Plus />
          </AddButton>
        </ItemContainer>
      </AddContainer>
      <ItemList layout>
        <AnimatePresence>
          {props.items.map((item) => {
            return (
              <ItemContainer
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ListItem
                  defaultValue={item.label}
                  onChange={(e) => handleOnChange(e.target.value, item.id)}
                />
                <CheckBox onClick={() => toggleItem(item.id)}>
                  {item.enabled && <CheckIcon />}
                </CheckBox>
                <RemoveItem onClick={() => removeItem(item.id)}>
                  <XIcon />
                </RemoveItem>
                <Probability>
                  <Range
                    type="range"
                    min="1"
                    max="10"
                    value={item.probability}
                    onChange={(e) => updateProb(+e.target.value, item.id)}
                  />
                  <ProbValue>{item.probability}</ProbValue>
                </Probability>
              </ItemContainer>
            );
          })}
        </AnimatePresence>
      </ItemList>
    </Menu>
  );
};

export default WheelMenu;
