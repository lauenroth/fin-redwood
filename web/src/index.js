import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import FatalErrorPage from 'src/pages/FatalErrorPage';

import App from './App';

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <App />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('app')
);
