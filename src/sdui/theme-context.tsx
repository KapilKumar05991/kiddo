import { Theme } from '@/types/theme';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface UITheme {
  theme: Theme,
  setTheme: (theme:Theme) => void
}

const uiTheme: Theme = {
  primary: '#FF9933',
  secondary: '#00BFFF',
  background: '#FFF5E6',
  surface: '#FFF5E6',
  border: '#E5E5E5',
};

const initialTheme: UITheme = {
  theme: uiTheme,
  setTheme: () => {}
}

export const ThemeContext = createContext<UITheme>(initialTheme);

export const ThemeProvider: React.FC<{ initialTheme?: Theme; children: React.ReactNode }> = ({ 
  initialTheme, 
  children 
}) => {
  const [theme, setNewTheme] = useState<Theme>(initialTheme!);

  useEffect(() => {
    if (initialTheme) setNewTheme(initialTheme);
  }, [initialTheme]);

  const setTheme = (newTheme: Theme) => setNewTheme(newTheme);
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};