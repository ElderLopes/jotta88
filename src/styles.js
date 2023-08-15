import styled from "styled-components";
import Backgroud from './assets/Background_Image.jpg';

export const Container = styled.div`
  background: url('${Backgroud}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 100vh;
`;

export const ContainerHead = styled.div`
  color: #fff;
  padding: 5px;
  font-size: 25px;
`;

export const ImageLogo = styled.img`
  width: 250px;
  border-radius: 50px;

`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
 li{
margin-right: 100px;
 }
  ul {
    display: flex;
    
    list-style: none;
    margin: 0;
    padding:0;
    text-decoration: none;
    cursor: pointer;
   
  }
  a {
  text-decoration: none;
  color: white;
}
`;

export const Submenu = styled.ul`
  position: absolute;
  flex-direction: column;
  background-color: none;
  border: none;
  list-style: none;
  padding: 0;
  display: ${props => (props.isHovered ? 'block' : 'nome')};
  z-index: 1;
`;

export const SubmenuItem = styled.li`
padding: 20px;

`;

export const SubmenuLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const ContainerSocialNetworks = styled.image`
width: 100px;
padding: 5px;
cursor: pointer;

`;
export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 60px;
`;

export const Content = styled.div`
  img {
    margin-bottom: 80px;
    margin-left: 300px;
    width: 290px;
    border-radius: 102px;
  }
`;

export const Image = styled.img`
  margin-top: 70px;
  width: 300px;
  border-radius: 25px;
  border: 5px solid black;
  transition: transform 0.5s ease-out;
  transform: ${props => (props.isHovered ? 'scale(1.1)' : 'scale(1)')};
`;

export const Paragraph = styled.p`
  text-align: center;
  color: white;
  font-size: 20px;
`;
export const ContainerService = styled.div`
  margin-top: 50px;
  display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 70px;
  div{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;}
  `;
 export  const ContainerVideo= styled.video`
  width: 300px;
  height: 300px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  grid-column: 2 / 3;
  justify-self: center;
  align-self: center;
`;
export const SmallImage = styled.img`
  width: 300px;
  height: 300px;
`;