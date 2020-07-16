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
      background-color: ${theme.colors.backgroundPrimary};
      box-sizing: border-box;
      color: ${theme.colors.textPrimary};
      font-size: ${theme.font.size.default};
      height: 100%;
      width: 100%;
    }
    body {
      font-family: ${theme.font.family.mainFont};
      height: 100%;
      margin: 0;
      position: relative;

      &::before {
        align-items: center;
        color: rgba(45, 55, 72, 0.3);
        content: 'Finny';
        display: flex;
        left: calc(50% - 100px);
        font-family: Lobster;
        font-size: 70px;
        height: 100px;
        justify-content: center;
        margin: auto;
        position: fixed;
        transform: scale(0.5);
        top: calc(50% - 50px);
        width: 200px;
      }
    }

    #app {
      display: flex;
      flex-direction: column;
      min-height: calc(100 * var(--vh));
      position: relative;
      z-index: 1;
    }

    .MuiDrawer-docked .MuiDrawer-paper,
    .MuiDrawer-modal .MuiDrawer-paper {
      background-color: rgba(45, 55, 72, 1);
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
