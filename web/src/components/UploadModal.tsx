import React from 'react';
import styled from 'styled-components';
import { post } from 'axios';
import { Button, InputLabel, FormControl, Select, MenuItem } from '@material-ui/core';
import TransactionHelper from 'src/helpers/TransactionHelper';

const UploadModal = ({ setTransactions }) => {
  const [currentFile, setCurrentFile] = React.useState(null);
  const [type, setType] = React.useState('n26');

  const onChangeFile = event => {
    const newFile = event.target.files[0];
    setCurrentFile(newFile);
    if (newFile && newFile.name.toLowerCase().includes('dkb')) {
      setType('dkb');
    } else {
      setType('n26');
    }
  };

  const onSubmit = async event => {
    event.preventDefault();
    const response = await uploadFile(currentFile);
    const transactions = TransactionHelper.parse(response.data, type);
    console.log(transactions);
    setTransactions(transactions);
  };

  const uploadFile = file => {
    const url = 'https://lnrth.de/csv.php';
    const formData = new FormData();
    formData.append('csv', file);
    if (type === 'dkb') {
      formData.append('skip', '6');
      formData.append('delimiter', ';');
    }
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config);
  };

  return (
    <Wrapper action="http://localhost/services" method="post" encType="multipart/form-data" onSubmit={onSubmit}>
      <label htmlFor="csv">
        {!currentFile && 'Select a file'}
        {currentFile && (
          <div>
            <h4>{currentFile.name}</h4>
            <h6>{Math.floor(currentFile.size / 1024)} KB</h6>
          </div>
        )}
      </label>
      <input type="file" name="csv" id="csv" onChange={onChangeFile} required />
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Bank</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={type}
          onChange={(_event, newType) => setType(newType.props.value)}
        >
          <MenuItem value="n26">N26</MenuItem>
          <MenuItem value="dkb">DKB</MenuItem>
        </Select>
      </FormControl>
      <Button name="upload" type="submit" color="primary" variant="outlined" disabled={!currentFile}>
        Upload
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  background-color: #fff;
  border: 2px solid #dbdbdb;
  color: #3f51b5;
  left: calc(50% - 200px);
  margin: 40px auto;
  max-width: 500px;
  padding: 20px;
  /* position: fixed; */
  top: calc(50% - 200px);
  width: 100%;

  > label {
    align-items: center;
    border: 1px dashed rgba(63, 81, 181, 0.5);
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    height: 200px;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;
  }

  input {
    display: none;
  }
`;

export default UploadModal;
