import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  children?: ReactNode;
}

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;

  img {
    margin-bottom: 20px;
    width: 40vw;
  }
`;

const NoData: React.FC<Props> = ({ title }) => (
  <Wrapper>
    <img src="/images/undraw_no_data.svg" alt="" />
    {title}
  </Wrapper>
);

NoData.defaultProps = {
  title: 'No data yet',
};

export default NoData;
