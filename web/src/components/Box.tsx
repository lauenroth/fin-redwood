import styled from 'styled-components';

const Box = ({ title, children }) => (
  <Wrapper>
    <h3>{title}</h3>
    {children}
  </Wrapper>
);

const Wrapper = styled.section`
  background-color: rgba(45, 55, 72, 0.6);
  border-radius: 8px;
  margin: 15px;
  padding: 15px;

  h3 {
    font-weight: normal;
    margin: 0;
  }
`;

export default Box;
