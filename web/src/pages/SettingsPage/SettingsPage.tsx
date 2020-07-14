import React from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import MainLayout from 'src/layouts/MainLayout';
import { useLocalStorage } from 'src/helpers/hooks';

const SettingsPage = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', prefersDarkMode);

  return (
    <MainLayout title="Settings" hasPadding>
      <Wrapper>
        <label htmlFor="darkmode">Dark mode</label>
        <Switch id="darkmode" checked={darkMode} color="primary" onChange={() => setDarkMode(!darkMode)} />
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
`;

export default SettingsPage;
