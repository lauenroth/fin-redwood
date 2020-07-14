import React from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import MainLayout from 'src/layouts/MainLayout';

const SettingsPage = () => {
  const [settings, setSettings] = React.useState({
    darkMode: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [event.target.name]: event.target.checked });
  };

  return (
    <MainLayout title="Settings" hasPadding>
      <Wrapper>
        <label htmlFor="darkmode">Dark mode</label>
        <Switch id="darkmode" name="darkMode" checked={settings.darkMode} color="primary" onChange={handleChange} />
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
`;

export default SettingsPage;
