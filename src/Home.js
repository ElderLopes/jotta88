import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'

import Logo from './assets/logopng.png'
import LogService from './assets/polindo.jpeg'
import PoliFarol from './assets/PolimentoFarol.jpeg'
import HigiInt from './assets/ImgInterna.jpeg'
import PolTec from './assets/ferrariJogCaro.jpeg'
import Img1 from './assets/AudisLogo.jpeg'
import Img2 from './assets/Civic.jpeg'
import Img3 from './assets/Porche.jpeg'
import Img4 from './assets/ferrariJogCaro.jpeg'
import Img5 from './assets/imagcelularporche.jpeg'
import Img6 from './assets/ImgInterna.jpeg'

import myVideo from './assets/teste.mp4';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Container,
  ContainerHead,
  ContLogo,
  Menu,
  Submenu,
  SubmenuItem,
  SubmenuLink,
  ContainerSocialNetworks,
  ContainerHome,
  Carousel,
  ContText,
  ContainerService,
  ContainerVideo,
  SmallImage


} from './styles';

const Home = () => {

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

  const phoneNumber = "554788085196";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

const carousel = useRef();
const [ width, setWidth] = useState(0)


useEffect (() => {
console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth);
setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
},[])

  const carouselItems = [Img1, Img2, Img3, Img4, Img5, Img6];



  return (
    <Container>
      <ContainerHead>
        <Menu>

          <ul>
            <li
              onMouseEnter={handleMenuMouseEnter}
              onMouseLeave={handleMenuMouseLeave}
              style={{
                boxShadow: isSubMenuVisible ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                transition: 'box-shadow 0.3s ease-out',
                borderRadius: '50px'
              }}>
              <a href="#service">Serviços</a>

              {isSubMenuVisible && (
                <Submenu isHovered={isSubMenuVisible}>
                  <SubmenuItem>
                    <li onMouseEnter={() => handleLinkMouseEnter('servico1')}
                      onMouseLeave={handleLinkMouseLeave}
                      style={{
                        boxShadow: hoveredLink === 'servico1' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                        transition: 'box-shadow 0.3s ease-out',
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
                        boxShadow: hoveredLink === 'servico2' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                        transition: 'box-shadow 0.3s ease-out',
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
                        boxShadow: hoveredLink === 'servico3' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                        transition: 'box-shadow 0.3s ease-out',
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
                boxShadow: hoveredLink === 'assessoria' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                transition: 'box-shadow 0.3s ease-out',
              }} href="/assessoria">Assessoria
            </li>
            <li
              onMouseEnter={() => handleLinkMouseEnter('contato')}
              onMouseLeave={handleLinkMouseLeave}
              style={{
                boxShadow: hoveredLink === 'contato' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                transition: 'box-shadow 0.3s ease-out',
                borderRadius: '50px'
              }} href="/contato">Contato
            </li>
            <li
              onMouseEnter={() => handleLinkMouseEnter('login')}
              onMouseLeave={handleLinkMouseLeave}
              style={{
                boxShadow: hoveredLink === 'login' ? '0px 10px 15px rgba(133, 98, 61)' : (hoveredLink === 'servicos' ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'),
                transition: 'box-shadow 0.3s ease-out',
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
        <ContLogo>
          <img src={Logo} alt="Image_Logo" />
        </ContLogo>
        <Carousel>
          <motion.div ref={carousel} className='carousel' whileTap={{ cursor: 'grabbing' }}>
            <motion.div className='inner'
              drag='x'
              dragConstraints = {{right: 0, left:-width}}
            >
              {carouselItems.map(image => (
                <motion.div className='imgCarousel' key={image} >
                  <img src={image} alt='Imagem de Servicos' />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Carousel>
        <ContText>
          <p>
            Seja bem vindo! Não faço milagres, mais faço seu carro brilhar ✨<br>
            </br>
            Aqui na Jotta88 realizamos serviços estéticos automotivos de alto padrão.
            Desde uma lavação Simples até a melhor proteção para seu veículo.
            Somos especializados em detalhamento automotivo e também ministramos cursos.
          </p>
        </ContText>

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