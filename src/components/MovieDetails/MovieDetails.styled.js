import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  /* padding: 50px 80px 50px; */
  padding: 0 100px;
`;

export const SectionStyled = styled.section`
  margin-top: 10px;
  padding: 80px;
  display: flex;
`;

export const ImageStyled = styled.img`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Info = styled.div`
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-family: 'Arial';
  color: #000000d1;
  display: block;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  padding: 0 20px;
  margin-bottom: 15px;
  background-color: #fafab1;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
