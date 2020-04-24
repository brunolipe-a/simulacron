import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { MdDashboard, MdChatBubbleOutline } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import LogoAlt from '../../assets/LogoAlt';

import { Container, Logo, Nav, NavLink, AddButton } from './styles';

const sidebar = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    Icon: MdDashboard,
    selected: false,
  },
  {
    title: 'Procurar',
    path: '/search',
    Icon: AiOutlineSearch,
    selected: false,
  },
  {
    title: 'Chat',
    path: '/chat',
    Icon: MdChatBubbleOutline,
    selected: false,
  },
  {
    title: 'Configurações',
    path: '/settings',
    Icon: FiSettings,
    selected: false,
  },
];

export default function Sidebar() {
  const [navlinks, setNavLinks] = useState(sidebar);
  const { pathname } = useLocation();

  useEffect(() => {
    const newNavLinks = navlinks.map( navlin => {
      navlin.selected = pathname.indexOf(navlin.path) >= 0;

      return navlin;
    });

    setNavLinks(newNavLinks);
  }, [pathname]);

  return (
    <Container open={true}>
      <Logo to="/app">
        <LogoAlt scale={1.1} />
      </Logo>
      <Nav>
        {navlinks.map(({ title, path, Icon, selected }) => (
          <NavLink key={title} selected={selected} to={`/app${path}`} data-tip={title}>
            <Icon size={27} />
          </NavLink>
        ))}
        <AddButton data-tip="Adicionar">
          <FaPlus color="#FFF" size={20}  />
        </AddButton>
      </Nav>
      <ReactTooltip place="right" effect="solid" />
    </Container>
  );
}
