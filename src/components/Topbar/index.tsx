import React from 'react';
import { MdNotificationsNone } from 'react-icons/md';

import { 
  Container, 
  SearchInput, 
  SearchIcon, 
  SideGroup, 
  BellIcon, 
  NotificationDot, 
  AvatarGroup, 
  XP 
} from './styles';

import avatar from '../../assets/avatar6_big@2x.png';

export default function Topbar() {
  return (
    <Container>
      <div>
        <SearchInput>
          <SearchIcon />
          <input placeholder="Pesquise por usuarios, grupos ou qualquer coisa" />
        </SearchInput>

        <SideGroup>
          <BellIcon to="/app/notifications">
            <MdNotificationsNone size={35} color="#493E4E" />
            <NotificationDot />
          </BellIcon>
          <AvatarGroup>
            <img src={avatar} alt="avatar" />
            <div>
              <p>Bruno Felipe</p>
              <div style={{ display: 'flex', marginTop: 5 }}>
                <XP>100 </XP> <p> XP - Aprendiz</p>
              </div>
            </div>
          </AvatarGroup>
        </SideGroup>
      </div>
    </Container>
  );
}
