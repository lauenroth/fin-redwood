import React from 'react';
import { ThemeProvider } from 'styled-components';
import DarkTheme from 'src/styles/DefaultTheme';
import LightTheme from 'src/styles/LightTheme';

import GlobalCss from 'src/styles/global';
import Routes from 'src/Routes';

import { useLocalStorage } from './helpers/hooks';

const App = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = window.localStorage.getItem('darkMode') !== 'false';
  const [darkMode] = useLocalStorage('darkMode', isDarkMode || prefersDarkMode);
  const theme = DarkTheme;
  // if (!darkMode) theme = LightTheme;
  // console.log(darkMode, isDarkMode, theme.colors.backgroundPrimary);

  return (
    <ThemeProvider theme={theme}>
      <GlobalCss />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
