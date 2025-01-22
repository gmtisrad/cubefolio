import React from 'react';
import styled from 'styled-components';

const AboutMeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AvatarContainer = styled.div`
  flex-shrink: 0;
  width: 150px;
  height: 150px;
`;

const IntroText = styled.div`
  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 600;
  }
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const TechStack = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const TechColumns = styled.div`
  display: flex;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1.5rem;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: #64ffda;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  img {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;
  }

  a:hover img {
    transform: translateY(-2px);
  }
`;

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer>
      <ProfileSection>
        <AvatarContainer>{/* Keep your existing avatar */}</AvatarContainer>

        <IntroText>
          <h2>Hi, I&apos;m Gabe</h2>
          <p>
            I&apos;m a software engineer based in Portland, OR specializing in
            full-stack web development and DevOps on AWS.
          </p>
        </IntroText>
      </ProfileSection>

      <Section>
        <p>
          My passion lies in coming up with simple solutions to complex problems
          on the back end, front end, and everywhere in between.
        </p>
      </Section>

      <Section>
        <p>
          Currently, I&apos;m contributing to Nike&apos;s Digital Product
          Creation team, developing tools that enhance the product design and
          development process. I focus on building seamless collaboration
          experiences for global design teams.
        </p>
      </Section>

      <TechStack>
        <h3>Here&apos;s what I&apos;ve been working with recently:</h3>
        <TechColumns>
          <ul>
            <li>SSR</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>React Router V7</li>
          </ul>
          <ul>
            <li>GraphQL</li>
            <li>AWS</li>
            <li>TailwindCSS</li>
            <li>Pendo</li>
          </ul>
        </TechColumns>
      </TechStack>

      <SocialLinks>
        <a
          href="https://github.com/gmtisrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github-icon.svg" alt="GitHub" />
        </a>
        <a
          href="https://linkedin.com/in/gabe-m-timm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin-icon.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:Gabe.M.Timm@gmail.com">
          <img src="/email-icon.svg" alt="Email" />
        </a>
      </SocialLinks>
    </AboutMeContainer>
  );
};

export default AboutMe;
