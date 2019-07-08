import styled from 'styled-components';
import { device } from './device';
import bgImg from './assets/progamming.jpg';

export const VideoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #000;
  z-index: 0;

  div {
    z-index: 100;
    position: absolute;
    background: rgba(45, 56, 58, 0.5);
    width: 100%;
    height: 100%;
  }

  video {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  h4 {
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: 700;
    font-family: Lato, Arial, sans-serif;
    color: #fff;
    font-size: 50;
    position: relative;
    top: 300px;
    left: 10px;
    text-align: center;
    justify-content: center;
  }
`;

export const Header = styled.section`
  background: url(${bgImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  opacity: 0.9;
  align-content: center;
  justify-content: center;

  @media ${device.mobileM} {
    min-height: 500px;
  }

  h4 {
    margin-bottom: 20px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-align: center;

    @media ${device.desktopL} {
      font-size: 50px;
    }
  }
`;
