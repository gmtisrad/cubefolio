import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import ParthenonLogo from '../../assets/ParthenonLogo.png';
import { css } from '@emotion/css';

const invertedLogoStyle = css`
  filter: invert(1);
`;

const ParthenonTab: React.FC = () => {
  const parthenonDescription =
    'Delivered high-impact client solutions at Parthenon Software Group, specializing in modern web applications and system integrations. Led development of scalable, enterprise-grade solutions across diverse business domains.';

  const achievements = [
    'Led development of real-time centralized screen sharing application, improving frame rate from 25 FPS to 60 FPS',
    'Built React-based AWS-hosted Learning Management System serving thousands of users',
    'Designed and implemented scalable microservices architecture using Node.js and Docker',
    'Created advanced DOM manipulation library for dynamic HTML content management',
    'Established CI/CD pipelines using Jenkins, improving deployment efficiency by 50%',
    'Collaborated in agile environment using Jira, Scrum, and Git for effective team coordination',
  ];

  return (
    <BaseExperienceTab
      companyName="Parthenon Software Group"
      role="Software Developer"
      period="March 2019 - March 2021"
      logoSrc={ParthenonLogo}
      description={parthenonDescription}
      achievements={achievements}
      logoClassName={invertedLogoStyle}
    />
  );
};

export default ParthenonTab;
