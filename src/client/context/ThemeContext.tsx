import React, { useState } from 'react';

const ThemeContext = React.createContext({
  standardView: true,
  toggleView: () => {},
});

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const ThemeProvider: React.FC<Props> = (props: Props) => {
  const [standardView, setStandardView] = useState(true);

  const toggleView = (): void => {
    setStandardView(!standardView);
  };

  const contextValues = {
    standardView,
    toggleView,
  };

  return (
    <ThemeContext.Provider value={contextValues}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
