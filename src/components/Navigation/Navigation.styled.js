import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 64px;
  width: 100%;
  color: #fff;
  background-color: #fafab1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const LinkStyled = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: black;
  font-size: 18px;

  &.active {
    color: blue;
  }
`;
