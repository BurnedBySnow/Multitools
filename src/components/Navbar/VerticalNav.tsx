import { Tool } from "../../types/Interfaces";
import { Navbar, NavItem } from "./NavStyles";

const VerticalNav = (props: {
  tools: Tool[];
  setActiveTool: (toolName: string) => void;
}) => {
  return (
    <Navbar>
      {props.tools.map((tool) => (
        <NavItem
          onClick={() => props.setActiveTool(tool.name)}
          active={tool.active}
        >
          {tool.name}
        </NavItem>
      ))}
    </Navbar>
  );
};

export default VerticalNav;
