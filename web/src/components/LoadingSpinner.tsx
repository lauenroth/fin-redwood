import styled, { css } from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const LoadingSpinner = ({ backgroundColor }) => (
  <Wrapper backgroundColor={backgroundColor}>
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
