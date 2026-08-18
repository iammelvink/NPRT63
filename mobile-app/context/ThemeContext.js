import React, { createContext, useContext, useMemo, useState } from 'react';

import colors from '../theme/colors';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState('dark');

  const toggleTheme = () => {
    setMode((previous) => (previous === 'dark' ? 'light' : 'dark'));
  };

  const theme = useMemo(() => {
    return {
      mode,
      colors,
      toggleTheme,
      isDark: mode === 'dark',
    };
  }, [mode]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}