import React from 'react';
import { cx } from '@emotion/css';
import { avatarWrapperStyle } from '../styles';
import Gabemoji from './Gabemoji.png';

export const MyAvatar: React.FC = () => {
  return (
    <div className={cx(avatarWrapperStyle, 'avatar-wrapper')}>
      <img alt="my-avatar" src={Gabemoji} />
    </div>
  );
};

export default MyAvatar;
