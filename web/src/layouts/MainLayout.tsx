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

    main {
      margin: 0 auto;
      max-width: 1600px;
      padding: ${hasPadding ? '20px' : 0};
      width: 100%;
    }

    .show-menu {
      ${isMobile &&
      css`
        position: absolute;
        right: 10px;
      `}
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
    }
  `}
`;

export default MainLayout;
