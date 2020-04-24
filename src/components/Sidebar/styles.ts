import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { device } from '../../utils/devices';

interface INavLink {
  selected: boolean;
}

interface IContainer {
  open: boolean;
}

export const Container = styled.section<IContainer>`
  top: 8vh;
  position: sticky;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #352D39;
  height: 92vh;
  color: #FFF;
  width: 65px;
  transition: 0.5s display;
  
  @media ${device.mobileL} {
      ${props => !props.open &&
  css`
      display: none;
    `};
  }
`;

export const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 45px 0 30px 3px;
  cursor: pointer;
`;

export const Nav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavLink = styled(Link)<INavLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  ${props => props.selected && 
    css`
      border-left: 5px solid #FFFFFF;
      background-color: #615866;
    `};
  width: 100%;
  transition: 0.3s background-color;

  &:hover {
    ${props => !props.selected && 
    css`
      background-color: #49424D
    `}
  }
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  background-color: #6F5BD7;
  margin-top: 25px;
  transition: 0.3s background-color;

  &:hover {
    background-color: #7660e6;
  }
`;