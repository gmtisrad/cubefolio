import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import StreamYardLogo from '../../assets/StreamYardLogo.png';

const StreamYardTab: React.FC = () => {
  const streamYardDescription =
    'Led key growth and platform initiatives at StreamYard, a professional live streaming platform. Focused on enhancing user experience, optimizing conversion metrics, and building robust streaming infrastructure to support rapid user growth.';

  const achievements = [
    'Architected and implemented drag-and-drop asset management system, increasing producer workflow efficiency by 40%',
    'Reduced platform churn by 15% through targeted retention strategies and optimized unsubscribe flow',
    'Built comprehensive analytics infrastructure using Segment and Amplitude to drive data-informed product decisions',
    'Developed cross-platform hotkey system improving accessibility and user experience',
    'Led OAuth integration efforts for multiple streaming platforms including YouTube, Facebook, and Twitch',
    'Enhanced platform stability through FFmpeg and WebRTC optimizations',
  ];

  return (
    <BaseExperienceTab
      companyName="StreamYard"
      role="Senior Full-Stack Engineer (Growth)"
      period="March 2021 - April 2022"
      logoSrc={StreamYardLogo}
      description={streamYardDescription}
      achievements={achievements}
    />
  );
};

export default StreamYardTab;
