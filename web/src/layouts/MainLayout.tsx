import React from 'react';
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from '@redwoodjs/auth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MainNavigation from 'src/components/MainNavigation';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface Props {
  title: string;
  hasPadding?: boolean;
  hasBackButton?: boolean;
}

const MainLayout: React.FC<Props> = ({ children, title, hasPadding, hasBackButton }) => {
  const { loading, isAuthenticated, logIn, logOut } = useAuth();

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const [showNavigation, setShowNavigation] = React.useState(false);

  return (
    <Wrapper isMobile={isTabletOrMobileDevice} hasPadding={hasPadding}>
      <AppBar position="fixed">
        <Toolbar>
          {isTabletOrMobileDevice && hasBackButton && (
            <IconButton color="inherit" className="back" onClick={() => window.history.back()}>
              <ChevronLeftIcon />
            </IconButton>
          )}
          <IconButton
            className="show-menu"
            color="inherit"
            aria-label="Open menu"
            onClick={() => setShowNavigation(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <h1>{title}</h1>

          {!isAuthenticated && <Button onClick={logIn}>Sign in</Button>}
        </Toolbar>
      </AppBar>

      <MainNavigation showNavigation={showNavigation} setShowNavigation={setShowNavigation} />

      <main>{children}</main>
    </Wrapper>
  );
};

export const MainFooter = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.backgroundSecondary};
    border-top: 1px solid ${theme.colors.border};
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 20px;
  `}
`;

const Wrapper = styled.div<{ isMobile: boolean; hasPadding: boolean }>`
  ${({ theme, isMobile, hasPadding }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: ${isMobile ? '800px' : '2100px'};
    padding-top: ${isMobile ? '56px' : '64px'};
    width: 100%;

    .MuiToolbar-root button {
      width: auto;
    }

    main {
      margin: 0 auto;
      max-width: 1600px;
      padding: ${hasPadding ? '20px' : 0};
      width: 100%;

      > h2 {
        font-weight: normal;
        font-size: 28px;
        margin: 0 0 20px;
      }
    }

    .back {
      left: 10px;
      position: absolute;
    }

    .MuiAppBar-root,
    .MuiBottomNavigation-root {
      background-color: rgba(45, 55, 72, 0.8);

      h1 {
        font-family: Lobster, Verdana, Geneva, Tahoma, sans-serif;
        font-size: 22px;
        font-weight: normal;
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
      z-index: 100;
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

      .show-menu {
        position: absolute;
        right: 10px;
      }
    }
  `}
`;

export default MainLayout;
