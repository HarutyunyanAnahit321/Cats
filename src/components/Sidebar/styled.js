import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
  flex-basis: 30%;
`;

const Navigation = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  margin: 10px;
  color: darkcyan;
  &.activeNavLink{
    color: yellow;
  }
`;

export { NavWrapper, Navigation };