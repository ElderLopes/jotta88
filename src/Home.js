import React, { useState } from "react";

import Logo from './assets/logopng.png'
import ImgHome from './assets/Civic.jpeg'
import ImgPorche from './assets/Porche.jpeg'
import LogService from './assets/polindo.jpeg'
import PoliFarol from './assets/PolimentoFarol.jpeg'
import HigiInt from './assets/ImgInterna.jpeg'
import PolTec from './assets/ferrariJogCaro.jpeg'


import myVideo from './assets/teste.mp4';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Container,
  ContainerHead,
  ImageLogo,
  Menu,
  Submenu,
  SubmenuItem,
  SubmenuLink,
  ContainerSocialNetworks,
  ContainerHome,
  Image,
  Content,
  Paragraph,
  ContainerService,
  ContainerVideo,
  SmallImage


} from './styles';

const Home = () => {

  const [isHoveredAudi, setIsHoveredAudi] = useState(false);
  const [isHoveredPorche, setIsHoveredPorche] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const [hoveredLink, setHoveredLink] = useState(null);


  const handleMenuMouseEnter = () => {
    setIsSubMenuVisible(true);
  };

  const handleMenuMouseLeave = () => {
    setIsSubMenuVisible(false);
  };

  const handleLinkMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink(null);
  };


  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const phoneNumber = "554788085196"; // Substitua pelo número de telefone correto

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <Container>
      <ContainerHead>
        <Menu>
          <ImageLogo src={Logo} alt="Logo" />
          <ul>
            <li
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              style={{
                backgroundColor: isSubMenuVisible ? 'gray' : (hoveredLink === 'servicos' ? 'gray' : 'transparent'),
                transition: 'background-color 0.3s ease-out',
                borderRadius: '50px'
              }}>
              <a href="#service">Serviços</a>

              {isSubMenuVisible && (
                <Submenu isHovered={isSubMenuVisible}>
                  <SubmenuItem>
                    <li onMouseEnter={() => handleLinkMouseEnter('servico1')}
                      onMouseLeave={handleLinkMouseLeave}
                      style={{
                        backgroundColor: hoveredLink === 'servico1' ? 'gray' : 'transparent',
                        transition: 'background-color 0.3s ease-out',
                        borderRadius: '50px'
                      }}>
                      <SubmenuLink
                        href="/servico1">Polimento de Farol</SubmenuLink>
                    </li>
                  </SubmenuItem>
                  <SubmenuItem>
                    <li onMouseEnter={() => handleLinkMouseEnter('servico2')}
                      onMouseLeave={handleLinkMouseLeave}
                      style={{
                        backgroundColor: hoveredLink === 'servico2' ? 'gray' : 'transparent',
                        transition: 'background-color 0.3s ease-out',
                        borderRadius: '50px'
                      }}>
                      <SubmenuLink
                        href="/servico2">Cristalização</SubmenuLink>
                    </li>
                  </SubmenuItem>
                  <SubmenuItem>
                    <li onMouseEnter={() => handleLinkMouseEnter('servico3')}
                      onMouseLeave={handleLinkMouseLeave}
                      style={{
                        backgroundColor: hoveredLink === 'servico3' ? 'gray' : 'transparent',
                        transition: 'background-color 0.3s ease-out',
                        borderRadius: '50px'
                      }}>
                      <SubmenuLink
                        href="/servico3">Higienização Interna</SubmenuLink>
                    </li>
                  </SubmenuItem>
                </Submenu>
              )}
            </li>
            <li
              onMouseEnter={() => handleLinkMouseEnter('assessoria')}
              onMouseLeave={handleLinkMouseLeave}
              style={{
                backgroundColor: hoveredLink === 'assessoria' ? 'gray' : 'transparent',
                transition: 'background-color 0.3s ease-out',
                borderRadius: '50px'
              }} href="/assessoria">Assessoria
            </li>
            <li
              onMouseEnter={() => handleLinkMouseEnter('contato')}
              onMouseLeave={handleLinkMouseLeave}
              style={{
                backgroundColor: hoveredLink === 'contato' ? 'gray' : 'transparent',
                transition: 'background-color 0.3s ease-out',
                borderRadius: '50px'
              }} href="/contato">Contato
            </li>
            <li
              onMouseEnter={() => handleLinkMouseEnter('login')}
              onMouseLeave={handleLinkMouseLeave}
              style={{
                backgroundColor: hoveredLink === 'login' ? 'gray' : 'transparent',
                transition: 'background-color 0.3s ease-out',
                borderRadius: '50px'

              }} href="/login">Login
            </li>
          </ul>
          <ContainerSocialNetworks>
            <FacebookIcon onClick={() => handleLinkClick("https://www.facebook.com/Jonatanneto09")}></FacebookIcon>
            <InstagramIcon onClick={() => handleLinkClick("https://www.instagram.com/jotta88detalhamento/")}></InstagramIcon>
            <WhatsAppIcon onClick={handleWhatsAppClick}></WhatsAppIcon>
          </ContainerSocialNetworks>
        </Menu>
      </ContainerHead>
      <ContainerHome>
        <Image src={ImgHome} alt="Image_Audi"
          onMouseEnter={() => setIsHoveredAudi(true)}
          onMouseLeave={() => setIsHoveredAudi(false)}
          isHovered={isHoveredAudi}
        />
        <Content>
          <img src={Logo} alt="Image_Logo" />
          <Paragraph>
            Seja bem vindo! Não faço milagres, mais faço seu carro brilhar ✨<br>
            </br>
            Aqui na Jotta88 realizamos serviços estéticos automotivos de alto padrão.
            Desde uma lavação Simples até a melhor proteção para seu veículo.
            Somos especializados em detalhamento automotivo e também ministramos cursos.
          </Paragraph>
        </Content>
        <Image src={ImgPorche} alt="Image_Porche"
          onMouseEnter={() => setIsHoveredPorche(true)}
          onMouseLeave={() => setIsHoveredPorche(false)}
          isHovered={isHoveredPorche}
        />
      </ContainerHome>
      <ContainerService id="service" >

        <h1>Alguns de nossos Serviços</h1>
<div>
        <SmallImage src={PoliFarol} alt="Polimento_Farol" />
        <SmallImage src={LogService} alt="Image_Service" />
        <ContainerVideo controls>
          <source src={myVideo} type="video/mp4" />
          Desculpe, o seu navegador não suporta a reprodução de vídeos.
        </ContainerVideo>
        <SmallImage src={PolTec} alt="Polimento_Tecnico" />
        <SmallImage src={HigiInt} alt="Higienização_Interna" />
        
        </div>
      </ContainerService>
    </Container>
  );
};

export default Home