import { motion } from "framer-motion";
import styled from "styled-components";

export const Navbar = styled.div`
  height: 100vh;
  width: fit-content;
  background-color: #161619;
  z-index: 10;
  width: 125px;
`;

export const NavItem = styled(motion.div)<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  height: 100px;
  padding: 0 10px 0 10px;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  cursor: pointer;
  :hover::before {
    transform: translate(-73%, -50%) scale(0.5);
  }
  ::before {
    content: "";
    width: 100%;
    height: ${(p) => (p.active ? "100%" : "70%")};
    background-color: white;
    position: absolute;
    border-radius: 5px;
    top: 50%;
    transform: ${(p) =>
      p.active
        ? "translate(-73%, -50%) scale(0.5)"
        : "translate(-73%, -50%) scale(0)"};
    transition: transform 180ms;
  }
`;
