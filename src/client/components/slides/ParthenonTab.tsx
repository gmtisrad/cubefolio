import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import ParthenonLogo from '../../assets/ParthenonLogo.png';

const ParthenonTab: React.FC = () => {
  const parthenonDescription =
    'At Parthenon Software Group, I worked as a Software Developer focusing on building robust web applications for various clients. I specialized in developing scalable solutions using modern web technologies and best practices in software development.';

  const achievements = [
    'Developed and maintained multiple client-facing web applications using React and TypeScript',
    'Implemented RESTful APIs using Node.js and Express',
    'Created automated deployment pipelines using Jenkins and Docker',
    'Optimized database queries and improved application performance',
    'Led technical discussions and architecture planning sessions',
    'Mentored junior developers and conducted code reviews',
    'Implemented comprehensive testing strategies using Jest and React Testing Library',
    'Collaborated with clients to gather requirements and provide technical solutions',
  ];

  return (
    <BaseExperienceTab
      companyName="Parthenon Software Group"
      role="Software Developer"
      period="June 2019 - March 2021"
      logoSrc={ParthenonLogo}
      description={parthenonDescription}
      achievements={achievements}
    />
  );
};

export default ParthenonTab;
