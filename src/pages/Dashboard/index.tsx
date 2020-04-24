import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

import { 
  Container, 
  DashboardContent, 
  Friends, 
  News, 
  NewsItem, 
  Title, 
  CloseButton, 
  NewsDescription, 
  NewsTitle, 
  Hero,
  HeroContent,
  HeroTitle,
  HeroP,
  Button,
  GroupButton,
  ImagePersona,
  PageTitle
} from './styles';

const newsArray = [
  {
    id: 1,
    title: 'Nova Atualização 1',
    description: 'Lorem ipsum dolor sit amet, consectetur\n' +
      '              adipiscing elit. Phasellus a dui justo.\n' +
      '              Donec volutpat faucibus rhoncus [...]'
  },
  {
    id: 2,
    title: 'Nova Atualização 2',
    description: 'Lorem ipsum dolor sit amet, consectetur\n' +
      '              adipiscing elit. Phasellus a dui justo.\n' +
      '              Donec volutpat faucibus rhoncus [...]'
  },
  {
    id: 3,
    title: 'Nova Atualização 3',
    description: 'Lorem ipsum dolor sit amet, consectetur\n' +
      '              adipiscing elit. Phasellus a dui justo.\n' +
      '              Donec volutpat faucibus rhoncus [...]'
  },
];

export default function Dashboard() {
  const [newsData, setNews] = useState(newsArray);
  
  function handleRemoveNews(id: number) {
    const news = newsData.filter((newData) => {
      if (newData.id !== id) {
        return newData;
      }
      
      return null;
    });
    
    setNews(news);
  }
  
  return (
    <Container>
      <News>
        <Title>
          <p>Novidades</p>
        </Title>
        <div>
          {newsData.map(({ id, title, description }) => (
            <NewsItem key={id}>
              <CloseButton size={15} color="#A6A6A6" onClick={() => handleRemoveNews(id)} />
              <NewsTitle>{title}</NewsTitle>
              <NewsDescription>{description}</NewsDescription>
            </NewsItem>
          ))}
        </div>
      </News>
      <DashboardContent>
        <PageTitle>Dashboard</PageTitle>
        <Hero>
          <ImagePersona />
          <HeroContent>
            <HeroTitle>Crie a sua aventura!</HeroTitle>
            <HeroP>Com o Simulacron sua partida de RPG fica bem mais completa. Se precisar, temos o tutorial pelo site.</HeroP>
            <GroupButton>
              <Button>
                <FaPlus size={16} color="#FFF" />
                Nova Aventura
              </Button>
              <Button color="#6F5BD7" background="#E6E6E6">Tutorial</Button>
            </GroupButton>
          </HeroContent>
        </Hero>
      </DashboardContent>
      <Friends />
    </Container>
  );
}
