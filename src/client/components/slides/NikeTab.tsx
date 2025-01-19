import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const NikeTab: React.FC = () => {
  const nikeDescription =
    'Led development of enterprise data solutions at Nike, bridging modern and legacy systems to enable efficient product line planning. Focused on creating scalable data aggregation platforms and analytics tools to drive business decisions.';

  const achievements = [
    'Designed and built data aggregation platform that unified modern and legacy product planning systems',
    'Architected complex data models enabling seamless integration between disparate systems',
    'Developed automated Excel processing pipeline reducing data validation time by 75%',
    'Created composable analytics dashboard with visx, providing real-time insights for product teams',
    'Implemented comprehensive system monitoring using Pendo analytics',
    'Established data migration and deprecation strategy for legacy platform transition',
  ];

  return (
    <BaseExperienceTab
      companyName="Nike"
      role="Senior Software Engineer"
      period="April 2022 - December 2023"
      logoSrc={NikeLogo}
      description={nikeDescription}
      achievements={achievements}
    />
  );
};

export default NikeTab;
