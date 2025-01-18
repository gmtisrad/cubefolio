import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NBYLogo from '../../assets/NBYLogo.jpg';

const NikeTab: React.FC = () => {
  const nikeDescription =
    'At Nike, I worked on the Digital Product Creation team, focusing on building tools to streamline the product creation process. I developed and maintained applications that helped designers and product teams collaborate more efficiently, reducing the time from concept to market.';

  const achievements = [
    'Led development of a React-based design system used across multiple applications',
    'Built and maintained microservices using Node.js and TypeScript',
    'Implemented real-time collaboration features using WebSocket technology',
    'Created automated testing pipelines to ensure code quality and reliability',
    'Optimized application performance, reducing load times by 40%',
    'Mentored junior developers and conducted code reviews',
    'Collaborated with UX team to improve application accessibility',
    'Integrated third-party APIs for enhanced functionality',
  ];

  return (
    <BaseExperienceTab
      companyName="Nike"
      role="Senior Applications Engineer"
      period="April 2022 - January 2024"
      logoSrc={NBYLogo}
      description={nikeDescription}
      achievements={achievements}
    />
  );
};

export default NikeTab;
