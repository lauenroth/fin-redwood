import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '@redwoodjs/auth';
import { isBrowser } from '@redwoodjs/prerender/browserUtils';
import { FatalErrorBoundary } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';
import netlifyIdentity from 'netlify-identity-widget';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import DarkTheme from 'src/styles/DefaultTheme';
// import LightTheme from 'src/styles/LightTheme';
import GlobalCss from 'src/styles/global';

import { useLocalStorage } from './helpers/hooks';

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});

if (isBrowser) {
  netlifyIdentity.init();
}

const App = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDarkMode = window.localStorage.getItem('darkMode') !== 'false';
  const [darkMode] = useLocalStorage('darkMode', isDarkMode || prefersDarkMode);
  const theme = DarkTheme;
  // if (!darkMode) theme = LightTheme;
  // console.log(darkMode, isDarkMode, theme.colors.backgroundPrimary);
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <AuthProvider client={netlifyIdentity} type="netlify">
        <RedwoodApolloProvider>
          <ThemeProvider theme={theme}>
            <GlobalCss />
            <Routes />
          </ThemeProvider>
        </RedwoodApolloProvider>
      </AuthProvider>
    </FatalErrorBoundary>
  );
};

export default App;
