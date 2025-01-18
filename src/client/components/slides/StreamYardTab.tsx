import React from 'react';
import BaseExperienceTab from './BaseExperienceTab';
import StreamYardLogo from '../../assets/StreamYardLogo.png';

const StreamYardTab: React.FC = () => {
  const streamYardDescription =
    'StreamYard is a professional live streaming and recording studio in your browser. As a Senior Full-Stack Engineer on the Growth team, I focused on implementing key features to enhance user experience and platform analytics. My work spanned from improving live-stream production tools to optimizing platform metrics and ensuring accessibility across all features. I worked closely with product and design teams to create intuitive solutions for complex streaming workflows.';

  const achievements = [
    'Implemented a drag and drop system for producers to manage and order their assets during live-streams',
    'Instrumented our platform with Segment, Amplitude, and various other analytics platforms to track KPIs',
    "Reduced churn by modifying the 'unsubscribe flow'",
    'Debugged FFmpeg and WebRTC integrations',
    'Designed and Implemented a hotkey system, improving accessibility in our application',
    'Worked closely with project manager to run A/B tests and optimize KPIs',
    'Owned all OAuth integrations',
    'Developed all features with full accessibility in mind',
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
