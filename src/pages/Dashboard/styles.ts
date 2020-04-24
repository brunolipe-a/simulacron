import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import BackImage from '../../assets/d9073ya-4bfb7d06-77e3-434b-a398-be8de3366baf.jpg';
import Persona from '../../assets/096ca937e6ec7108dc506c57eab32574.png';

interface IButton {
  color?: string;
  background?: string;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
`;

export const Title = styled.title`
  display: flex;
  align-items: center;
  color: #E7E2E9;
  background: rgba(255, 255, 255, 0.15);
  height: 8vh;
  
  & > p {
    font-size: 17px;
    font-weight: 500;
    margin-left: 14px;
  }
`;

export const News = styled.aside`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  background: #3D3442;
  
  & > div {
    padding: 8px;
    height: 84vh;
    overflow-y: auto;
  }
`;

export const NewsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #FFF;
  border-radius: 4px;
  height: 80px;
  padding: 6px;
  
  & + & {
    margin-top: 8px;
  }
`;

export const NewsTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin-top: -8px;
`;

export const NewsDescription = styled.p`
  margin-top: 3px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CloseButton = styled(MdClose)`
  cursor: pointer;
  z-index: 10;
  align-self: flex-end;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex: 6;
  flex-direction: column;
  min-height: 100%;
  padding: 35px 25px;
  color: #E7E2E9;
`;

export const PageTitle = styled.p`
  font-weight: 500;
  font-size: 20px;
`;

export const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-top: 65px;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 170px;
  background: #8170DC url(${BackImage}) no-repeat 0 45%;
  border-radius: 15px;
  opacity: .9;
  background-size: cover;
  background-blend-mode: multiply;
  padding-left: 25px;
`;

export const HeroTitle = styled.p`
  position: relative;
  font-size: 24px;
  font-weight: 500;
`;

export const HeroP = styled.p`
  position: relative;
  font-size: 15px;
  font-weight: lighter;
  width: 50%;
`;

export const Button = styled.button<IButton>`
  width: 200px;
  height: 38px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.color ?? '#FFF'};
  background: ${props => props.background ?? '#6F5BD7'};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > svg {
    margin-right: 8px;
  }
`;

export const GroupButton = styled.div`
  display: flex;
  margin-top: 10px;
  
  & > button + button {
    margin-left: 10px;
  }
`;


export const ImagePersona = styled.img.attrs({
  src: Persona
})`
  position: absolute;
  z-index: 10;
  width: 350px;
  height: 350px;
  
  object-fit: cover;
  object-position: 0 20px;
`;


export const Friends = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: #5D4F64;
  min-height: 100%;
`; 