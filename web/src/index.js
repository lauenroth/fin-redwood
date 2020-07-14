import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import { ThemeProvider } from 'styled-components';
import FatalErrorPage from 'src/pages/FatalErrorPage';
import Theme from 'src/styles/DefaultTheme';

import GlobalCss from 'src/styles/global';
import Routes from 'src/Routes';

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ThemeProvider theme={Theme}>
        <GlobalCss />
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('app')
);
