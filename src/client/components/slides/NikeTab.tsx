import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const NikeTab: React.FC = () => {
  const nikeDescription =
    'Contributed to enterprise data solutions at Nike, driving initiatives that bridge modern and legacy systems for efficient product line planning. Focused on developing scalable data aggregation platforms and analytics tools to support business decisions.';

  const achievements = [
    'Contributed to data aggregation platform development, unifying modern and legacy product planning systems',
    'Implemented complex data models enabling seamless integration between disparate systems',
    'Developed automated Excel processing pipeline reducing data validation time by 75%',
    'Built composable analytics dashboard with visx, providing real-time insights for product teams',
    'Integrated system monitoring using Pendo analytics',
    'Collaborated on data migration and deprecation strategy for legacy platform transition',
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
