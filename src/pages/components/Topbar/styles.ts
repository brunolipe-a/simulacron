import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #F3F1F4;
  height: 60px
`;

export const SearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  height: 38px;
  width: 400px;
  margin-left: 50px;

  & input {
    width: 100%;
    color: #666;
    font-size: 15px;
  }
`;

export const SearchIcon = styled(AiOutlineSearch).attrs({
  size: 20,
  color: '#A6A6A6'
})`
  margin: 0 8px 0 11px;
`;

export const BellIcon = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotificationDot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #EC1313;
  border-radius: 50%;
  bottom: 0;
  right: 3px;
`;

export const SideGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;

  & img {
    margin: 0 15px 0 18px;
    width: 45px;
    border-radius: 50%
  }

  & p {
    color: #404040;
  }
`;

export const XP = styled.p`
  color: #5236E2 !important;
`;