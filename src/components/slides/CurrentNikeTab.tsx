import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import NikeLogo from '../../assets/NikeLogo.png';

const CurrentNikeTab: React.FC = () => {
  const nikeDescription =
    "Contributing to Nike's Digital Product Creation team, developing tools that enhance the product design and development process. Focused on building seamless collaboration experiences for global design teams.";

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
      period="March 2022 - Ongoing"
      logoSrc={NikeLogo}
      description={nikeDescription}
      achievements={achievements}
    />
  );
};

export default CurrentNikeTab;
