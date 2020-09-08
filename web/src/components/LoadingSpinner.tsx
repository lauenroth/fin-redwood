import React from 'react';
import styled, { css } from 'styled-components';
import { CircularProgress } from '@material-ui/core';

interface Props {
  backgroundColor?: string;
}

const LoadingSpinner = (props: Props): React.ReactElement => (
  <Wrapper backgroundColor={props.backgroundColor}>
    <CircularProgress />
  </Wrapper>
);

const Wrapper = styled.section<{ backgroundColor: string }>`
  ${({ theme, backgroundColor }) => css`
    align-items: flex-start;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding-top: 120px;

    svg {
      background-color: ${backgroundColor || theme.colors.backgroundPrimary};
    }
  `}
`;

export default LoadingSpinner;
