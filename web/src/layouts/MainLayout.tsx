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
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <MainNavigation showNavigation={showNavigation} setShowNavigation={setShowNavigation} />

      <main>{children}</main>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isMobile: boolean; hasPadding: boolean }>`
  ${({ isMobile, hasPadding }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: ${isMobile ? '800px' : '2100px'};
    padding-top: ${isMobile ? '56px' : '64px'};
    width: 100%;

    main {
      padding: ${hasPadding ? '20px' : 0};
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

    :not(.MuiSpeedDial-root) > .MuiFab-root,
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
  `}
`;

const MainHeader = styled.header`
  h1 {
    font-size: 24px;
    font-weight: normal;
    text-align: center;
  }
`;

export { MainHeader };

export default MainLayout;
