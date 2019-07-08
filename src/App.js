/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { Reset } from 'styled-reset';
import Typed from 'react-typed';
import { VideoContainer, Container } from './styles';
// import bgImage from './assets/progamming.jpg';

const heart = '&hearts';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Reset />
        <div>
          <VideoContainer>
            <div />
            <video autoPlay loop>
              <source
                src="https://dyupuz6787mty.cloudfront.net/assets/vid/Hello-World.mp4"
                type="video/mp4"
              />
            </video>
          </VideoContainer>

          <Container>
            <h4>Hi, I'm Guilherme Strutzki</h4>
            <h4>
              <Typed
                strings={[
                  "I'm front end developer.",
                  'I transform images and templates in websites.',
                  'I create apps Android and iOS.',
                  'And I love do it ❤',
                ]}
                typeSpeed={60}
                backSpeed={50}
                loop
                backDelay={1000}
              />
            </h4>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
