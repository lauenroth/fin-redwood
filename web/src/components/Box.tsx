import styled, { css } from 'styled-components';

interface Props {
  title?: string;
  children?: JSX.Element;
}

const Box = ({ title, children }: Props): JSX.Element => (
  <Wrapper>
    {title && <h3>{title}</h3>}
    {children}
  </Wrapper>
);

const Wrapper = styled.section`
  ${props => css`
    background-color: ${props.theme.colors.primaryDark};
    border-radius: 8px;
    margin: 15px;
    padding: 15px;

    h3 {
      font-weight: normal;
      margin: 0;
    }
  `}
`;

export default Box;
