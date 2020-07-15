import { createGlobalStyle, css } from 'styled-components';

const GlobalCss = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      outline: none;
      text-rendering: optimizeLegibility;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
    }

    ::placeholder,
    ::-webkit-input-placeholder,
    ::-moz-placeholder,
    :-ms-input-placeholder,
    :-moz-placeholder {
      color: ${theme.colors.darkGrey};
    }

    :-webkit-autofill {
      box-shadow: 0 0 0 1000px white inset;
    }

    html {
      box-sizing: border-box;
      font-size: ${theme.font.size.default};
      height: 100%;
      width: 100%;
    }
    body {
      font-family: ${theme.font.family.mainFont};
      height: 100%;
      margin: 0;
    }

    #app {
      background-color: ${theme.colors.backgroundPrimary};
      color: ${theme.colors.textPrimary};
      display: flex;
      flex-direction: column;
      height: calc(100 * var(--vh));
    }

    .MuiDrawer-docked .MuiDrawer-paper,
    .MuiDrawer-modal .MuiDrawer-paper {
      background-color: rgba(45, 55, 72, 0.9);
      color: #dbdbdb;
      width: 225px;
    }

    .MuiDrawer-docked .MuiListItemIcon-root,
    .MuiDrawer-modal .MuiListItemIcon-root {
      color: #dbdbdb;
    }

    .MuiListItemIcon-root .MuiDivider-root,
    .MuiDrawer-modal .MuiDivider-root {
      background-color: rgba(255, 255, 255, 0.12);
    }
  `}
`;

export default GlobalCss;
