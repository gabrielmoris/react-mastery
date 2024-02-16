import styled from "styled-components";
import { Link as RouterLink, LinkProps } from "react-router-dom";
import { ReactNode } from "react";

// Create a new component that forwards all props to the Link component
const Link = ({ children, ...props }: LinkProps & { children?: ReactNode }) => <RouterLink {...props}>{children}</RouterLink>;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
