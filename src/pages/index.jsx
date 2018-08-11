/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Parallax, ParallaxLayer } from 'react-spring';
import 'typeface-cantata-one';
import 'typeface-open-sans';

import SEO from '../components/SEO';
import SVG from '../components/SVG';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';

import '../styles/global';

//Images
import avatar from '../images/spain_arch.jpg';
import avatar2 from '../images/group photo.jpg';
import avatar3 from '../images/immre1.jpg';
import avatar4 from '../images/GMSTeam2015.jpg';
import avatar5 from '../images/Viasphoto.jpg'
import avatar6 from '../images/Gradphotos.jpg';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-serif text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-serif text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-1/2 xl:w-1/2 shadow-lg h-full')};
`;

const Picture = styled.img`
  ${tw(' w-1/2 xl:w-1/2 shadow-lg h-full')};
`;

const AboutSub = styled.span`
  ${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;



const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={7}>


      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="triangle" className={hidden} width={48} stroke={colors.orange} left="10%" top="20%" />
          <SVG icon="hexa" width={48} stroke={colors.red} left="60%" top="70%" />
          <SVG icon="box" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>

        </UpDownWide>
        <SVG icon="circle" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
      </Divider>


      <Content speed={0.4} offset={0}>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>Hi! I'm Jenn. I thrive working on projects of all sizes but am most motivated when I can see the impact of my work. Please take a look around.
            </AboutSub>
          </AboutHero>
      </Content>


      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={1} factor={2} />
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1}
        factor={2}
      />


      <Content speed={0.4} offset={.75} factor={2}>
        <Inner>
          <Title>Immersed Games</Title>
          <AboutHero>
            <Picture src={avatar3} alt="John Doe2" />
            <AboutSub>
              Marketing Intern 
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            During my internship at Immersed Games I had the opportunity to be apart of an amazing team. Through mentorship and collaborative projects I was able to see the behind the scenes of a fast paced startup. 
              
              <ul>
                  <li> Created PR kits with the head of marketing and assisted in the curation of engaging Facebook marketing materials. </li>
              
              <li>Edited photos and company headshots. </li>
              </ul>

            
          </AboutDesc>
        </Inner>
      </Content>



      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
      </Divider>


      <Content speed={0.4} offset={2} factor={2}>
        <Inner>
          <Title>Gator Motorsports</Title>
          <AboutHero>
            <Picture src={avatar4} alt="John Doe2" />
            <AboutSub>
              Business Team Member  
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            <ul>
                <li> Assisted in all aspects of marketing, event organization, budgeting, and non profit fundraising. Revamped sponsorship brochure and raised enough funding for annual keynote events. </li>
             
              <li>Implemented a new purchasing system for team apparel that managed the entire acquisition process which resulted in 50% more apparel orders and faster turnaround time for products. </li>
              
              <li>Organized the logistics and scheduling of hotels, meal, and transportation for a two week out of state compeition for 25 students. </li>

              <li>Promotional Video for FSAE Car: <br/>
                          <div className="video-container">
              <iframe width="100%" src="https://www.youtube.com/embed/G4GiR_g9oYI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
              </div></li>
              <li>FSAE CFD Better Designs Faster with STAR CCM+ 1st Place:<br/>
                          <div className="video-container">
              <iframe width="100%"src="https://www.youtube.com/embed/2XfLFndmgv8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
               </div></li>
              <li>2014-2015 FSAE Sponsorship Brochure Link: </li> 
              
                  </ul>
              
          </AboutDesc>
        </Inner>
      </Content>

      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3.5}>
        <UpDown>
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
      </Divider>


      <Content speed={0.4} offset={4} factor={2}>
        <Inner>
          <Title>Filpino Student Assoication</Title>
          <AboutHero>
            <Picture src={avatar5} alt="John Doe2" />
            <AboutSub>
              VP of Multimedia  
            </AboutSub>
          </AboutHero>
          <AboutDesc>
           <ul>
               <li>Created weekly multimedia content for meetings with audiences of about 100. </li>
               
               <li>Facilitating meetings, workshops, and annual events for club.</li>
              
            <li>Student Assembly Video<br/>
            <div className="video-container">
              <iframe width="420" height="315"  src="https://www.youtube.com/embed/ByIDJYM8YBE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </li>
            <li> Promotional Video for Winter Formal <br/> 
            <div className="video-container">
              <iframe width="100%"  src="https://www.youtube.com/embed/-Ng0yTVYZkg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe><br/><br/>
        <br/><br/>
        <br/><br/>
        <br/>
                
                <br/>
        <br/><br/>
        <br/><br/>
        <br/><br/>
        <br/>
             </div>
             </li>
             </ul> 
          </AboutDesc>
        </Inner>
      </Content>

<br/>
        <br/>
        <br/>

      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3.5}>
        <UpDown>
        </UpDown>
        <UpDownWide>
          <SVG icon="arrowUp" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
      </Divider>

     <br/>
        <br/>
        <br/>
        <br/>
        <Content speed={0.4} offset={5.5} factor={2}>
        <Inner>
          <Title>Freelance </Title>
          <AboutHero>
            <Picture src={avatar6} alt="John Doe2" />
            <AboutSub>
              Photography and Videography  
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            <ul>
            <li>Graduation Photos</li>
            <li>Product Photography and Videography</li>
            <li>Event Photography and Videography</li>
</ul>
            
          </AboutDesc>
        </Inner>
      </Content>


      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>

      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="triangle" width={8} stroke={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="triangle" width={12} stroke={colors.white} left="95%" top="50%" />
          <SVG icon="circle" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="upDown" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="circle" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="circle" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="box" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="hexa" width={8} stroke={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>


    </Parallax>
  </React.Fragment>
);

export default Index;


