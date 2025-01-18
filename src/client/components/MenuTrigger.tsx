import { Menu } from '@styled-icons/boxicons-regular';
import { motion } from 'framer';
import React, { useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { getBackgroundColor, getTextColor } from '../utils/styleUtils';
import ThemeSwitcher from './ThemeSwitcher';
import ViewSwitcher from './VeiwSwitcher';
import { menuTriggerStyle } from '../styles';

export const MenuTrigger = (): JSX.Element => {
  const DesktopMenu = (
    <>
      <ViewSwitcher />
    </>
  );
  return DesktopMenu;
};
