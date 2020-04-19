import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface INavLink {
  selected: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #352D39;
  min-height: 100%;
  color: #FFF;
  width: 80px
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
  height: 65px;
  ${props => props.selected && 
    css`
      border-left: 5px solid #FFFFFF;
      background-color: #615866;
    `}
  
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
  height: 50px;
  width: 50px;
  background-color: #6F5BD7;
  margin-top: 20px;
  transition: 0.3s background-color;

  &:hover {
    background-color: #7660e6;
  }
`;