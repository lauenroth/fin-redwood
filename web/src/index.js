import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FatalErrorPage from 'src/pages/FatalErrorPage';

import Routes from 'src/Routes';

import './index.css';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#262626',
    },
    secondary: {
      main: '#369',
    },
  },
});

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ThemeProvider theme={darkTheme}>
        <Routes />
      </ThemeProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('app')
);
