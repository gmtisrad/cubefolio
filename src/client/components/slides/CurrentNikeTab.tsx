import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const CurrentNikeTab: React.FC = () => {
  const nikeDescription =
    "Leading development initiatives on Nike's Digital Product Creation team, architecting and building tools that revolutionize the product design and development process. Focused on creating seamless collaboration experiences for global design teams.";

  const achievements = [
    'Architected and implemented React-based design system powering multiple enterprise applications',
    'Built scalable microservices architecture using Node.js and TypeScript to support global design operations',
    'Developed real-time collaboration features enabling simultaneous work by distributed design teams',
    'Established comprehensive testing and CI/CD pipelines, improving deployment reliability by 90%',
    'Reduced application load times by 40% through performance optimization and caching strategies',
    'Led technical mentorship program and established code review best practices across team',
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
