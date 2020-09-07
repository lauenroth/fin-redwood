import { createGlobalStyle, css } from 'styled-components';

const GlobalCss = createGlobalStyle`
  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      font-family: ${theme.font.family.mainFont};
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

    a {
      color: ${theme.colors.textPrimary};

      &:hover {
        text-decoration: none;
      }
    }

    dl {
      display: flex;
      flex-wrap: wrap;
    }
    dt {
      flex-basis: 200px;
      margin-bottom: 10px;
    }
    dd {
      flex-basis: calc(100% - 200px);
      margin: 0 0 10px;
    }

    pre {
      margin: 0;
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

    address {
      font-style: inherit;
    }

    form .MuiFormControl-root {
      width: 100%;
    }

    form .MuiFormLabel-root,
    form .MuiInputBase-input {
      ${'' /* color: #dbdbdb; */}
    }

    form .MuiOutlinedInput-input {
      background-color: rgba(255, 255, 255, 0.12);
      color: #dbdbdb;

      label {
        color: #dbdbdb;
      }
    }

    .button,
    button {
      align-items: center;
      background-color: rgba(51, 102, 153, 0.7);
      border: 0;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      display: flex;
      font-size: 18px;
      height: 55px;
      justify-content: center;
      margin-bottom: 20px;
      text-decoration: none;
      transition: 0.2s background-color;
      width: 100%;

      &:hover,
      &:focus {
        background-color: rgb(51, 102, 153);
      }

      &.danger {
        background-color: rgba(221, 68, 68, 0.7);

        &:hover,
        &:focus {
          background-color: rgb(221, 68, 68);
        }
      }
    }

    .danger {
      background-color: rgb(221, 68, 68);
    }

    label {
      display: block;
      margin-bottom: 5px;
    }

    input,
    textarea {
      background-color: rgba(250, 250, 250, 0.8);
      border: none;
      border-radius: 4px;
      font-size: 1em;
      font-family: ${theme.font.family.mainFont};
      margin-bottom: 20px;
      padding: 10px;
      transition: 0.2s background-color;
      width: 100%;

      &:hover,
      &:focus,
      &:active {
        background-color: rgb(250, 250, 250);
      }
    }

    body .MuiFormLabel-root {
      color: #fff;
      transform: scale(0.75);
    }
    body .MuiInputBase-input {
      padding: 15px;
    }

    .MuiInput-root {
      background-color: rgba(250, 250, 250, 0.8);
      margin-bottom: 20px;
      width: 100%;

      &:hover,
      &:focus,
      &:active {
        background-color: rgb(250, 250, 250);
      }

      > div {
        padding: 15px;
      }
    }

    ${theme.mediaQuery.phone} {
      dt {
        flex-basis: 100%;
        margin-bottom: 5px;
      }
      dd {
        margin-bottom: 20px;
      }
    }
  `}
`;

export default GlobalCss;
