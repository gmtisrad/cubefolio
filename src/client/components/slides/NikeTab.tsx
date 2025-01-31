import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const NikeTab: React.FC = () => {
  const nikeDescription =
    'Contributed to enterprise data solutions at Nike, driving initiatives that bridge modern and legacy systems for efficient product line planning. Focused on developing scalable data aggregation platforms and analytics tools to support business decisions.';

  const achievements = [
    'Developing React-based design system components used across multiple enterprise applications',
    'Maintained Java services to support global consumer customization operations',
    'Implemented collaboration features enabling simultaneous work by distributed design teams',
    'Contributing to testing and CI/CD pipelines, improving deployment reliability',
    'Optimizing application performance',
    'Participating in code reviews and helping establish best practices across team',
    'Observability and monitoring using Splunk/SignalFX',
  ];

  return (
    <BaseExperienceTab
      companyName="Nike"
      role="Senior Applications Engineer"
      period="April 2022 - December 2023"
      logoSrc={NikeLogo}
      description={nikeDescription}
      achievements={achievements}
    />
  );
};

export default NikeTab;
