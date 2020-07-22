import React from 'react';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import MainLayout from 'src/layouts/MainLayout';
import { useLocalStorage } from 'src/helpers/hooks';
import { Select, MenuItem, InputLabel } from '@material-ui/core';

const SettingsPage = () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', prefersDarkMode);

  return (
    <MainLayout title="Settings" hasPadding>
      <Wrapper>
        <label htmlFor="darkmode">Dark mode</label>
        <Switch id="darkmode" checked={darkMode} color="primary" onChange={() => setDarkMode(!darkMode)} />

        <fieldset>
          <legend>Localization</legend>

          <InputLabel id="currency-label">Currency</InputLabel>
          <Select id="currency" labelId="currency-label" name="currency" value="EUR">
            <MenuItem value="AUD">Australian Dollar</MenuItem>
            <MenuItem value="BRL">Brazilian Real</MenuItem>
            <MenuItem value="GBP">British Pound Sterling</MenuItem>
            <MenuItem value="CAD">Canadian Dollar</MenuItem>
            <MenuItem value="CNY">Chinese Yuan</MenuItem>
            <MenuItem value="EUR">Euro</MenuItem>
            <MenuItem value="HUF">Forint</MenuItem>
            <MenuItem value="INR">Indian Rupee</MenuItem>
            <MenuItem value="JPY">Japanese Yen</MenuItem>
            <MenuItem value="ROL">Leu</MenuItem>
            <MenuItem value="MXN">Mexican Peso</MenuItem>
            <MenuItem value="NZD">New Zealand Dollar</MenuItem>
            <MenuItem value="NOK">Norwegian Krone</MenuItem>
            <MenuItem value="PLN">Polish Zloty</MenuItem>
            <MenuItem value="RUR">Russian Ruble</MenuItem>
            <MenuItem value="CHF">Swiss Franc</MenuItem>
            <MenuItem value="SEK">Swedish Krona</MenuItem>
            <MenuItem value="USD">US Dollar</MenuItem>
          </Select>

          <InputLabel id="date-format-label">Date Format</InputLabel>
          <Select id="date-format" labelId="date-format-label" name="date-format" value="DD.MM.YYYY">
            <MenuItem value="DD.MM.YYYY">31.12.2020</MenuItem>
            <MenuItem value="DD-MM-YYYY">31-12-2020</MenuItem>
            <MenuItem value="DD/MM/YYYY">31/12/2020</MenuItem>
            <MenuItem value="MM/DD/YYYY">12/31/2020</MenuItem>
            <MenuItem value="YYYY-MM-DD">2020-12-31</MenuItem>
          </Select>
        </fieldset>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
`;

export default SettingsPage;
