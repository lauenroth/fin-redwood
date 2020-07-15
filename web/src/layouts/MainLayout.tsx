import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MainNavigation from 'src/components/MainNavigation';

interface Props {
  title: string;
  hasPadding?: boolean;
}

const MainLayout: React.FC<Props> = ({ children, title, hasPadding }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const [showNavigation, setShowNavigation] = React.useState(false);

  return (
    <Wrapper isMobile={isTabletOrMobileDevice} hasPadding={hasPadding}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            className="show-menu"
            color="inherit"
            aria-label="open drawer"
            onClick={() => setShowNavigation(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <h1>{title}</h1>
        </Toolbar>
      </AppBar>

      <MainNavigation showNavigation={showNavigation} setShowNavigation={setShowNavigation} />

      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean; hasPadding: boolean }>`
  ${({ theme, isMobile, hasPadding }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: ${isMobile ? '800px' : '2100px'};
    padding-top: ${isMobile ? '56px' : '64px'};
    width: 100%;

    main {
      margin: 0 auto;
      max-width: 1600px;
      padding: ${hasPadding ? '20px' : 0};
      position: relative;
      width: 100%;

      &::before {
        align-items: center;
        border: 5px solid rgba(45, 55, 72, 0.3);
        border-radius: 10px;
        color: rgba(45, 55, 72, 0.3);
        content: 'Finny';
        display: flex;
        left: calc(50% - 100px);
        font-family: Lobster;
        font-size: 70px;
        height: 200px;
        justify-content: center;
        margin: auto;
        position: absolute;
        top: calc(50vh - 140px);
        width: 200px;
      }
    }

    .show-menu {
      ${isMobile &&
      css`
        position: absolute;
        right: 0;
      `}
    }

    .MuiAppBar-root,
    .MuiBottomNavigation-root {
      background-color: rgba(45, 55, 72, 0.8);

      h1 {
        font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
        font-size: 22px;
      }
    }

    .MuiBottomNavigationAction-root {
      color: #a0aec0;
      opacity: 0.7;
      transition: 0.25s;
    }

    .MuiBottomNavigationAction-root.Mui-selected {
      color: #dbdbdb;
      opacity: 1;
    }

    .MuiFab-root:not(.MuiSpeedDialAction-fab),
    .MuiSpeedDial-root {
      bottom: 20px;
      position: fixed;
      right: 20px;
    }

    .MuiFab-root:not(.MuiSpeedDialAction-fab) {
      background-color: rgba(45, 55, 72, 0.8);

      &:hover {
        background-color: rgba(45, 55, 72, 1);
      }
    }

    #Submenu-actions {
      margin-bottom: 20px;
    }

    ${theme.mediaQuery.phone} {
      .MuiToolbar-root {
        text-align: center;

        h1 {
          width: 100%;
        }
      }
    }
  `}
`;

export default MainLayout;
