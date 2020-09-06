import { AuthProvider } from '@redwoodjs/auth';
import netlifyIdentity from 'netlify-identity-widget';
// import GoTrue from 'gotrue-js';
import ReactDOM from 'react-dom';
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web';
import FatalErrorPage from 'src/pages/FatalErrorPage';

import App from './App';

document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
window.addEventListener('resize', () => {
  document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
});

// const goTrue = new GoTrue({
//   APIUrl: 'https://finny.lnrth.de/.netlify/identity',
//   setCookie: true,
// });

netlifyIdentity.init();

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    {/* <AuthProvider client={goTrue} type="goTrue"> */}
    <AuthProvider client={netlifyIdentity} type="netlify">
      <RedwoodProvider>
        <App />
      </RedwoodProvider>
    </AuthProvider>
    {/* </AuthProvider> */}
  </FatalErrorBoundary>,
  document.getElementById('app')
);
