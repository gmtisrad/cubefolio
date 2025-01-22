import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const CurrentNikeTab: React.FC = () => {
  const nikeDescription =
    "Contributing to Nike's Digital Product Creation team, developing tools that enhance the product design and development process. Focused on building seamless collaboration experiences for global design teams.";

  const achievements = [
    'Developing React-based design system components used across multiple enterprise applications',
    'Building scalable microservices using Node.js and TypeScript to support global design operations',
    'Implementing real-time collaboration features enabling simultaneous work by distributed design teams',
    'Contributing to testing and CI/CD pipelines, improving deployment reliability by 90%',
    'Optimizing application performance, achieving 40% reduction in load times through caching strategies',
    'Participating in code reviews and helping establish best practices across team',
  ];

  return (
    <BaseExperienceTab
      companyName="Nike"
      role="Senior Applications Engineer"
      period="January 2024 - Ongoing"
      logoSrc={NikeLogo}
      description={nikeDescription}
      achievements={achievements}
    />
  );
};

export default CurrentNikeTab;
