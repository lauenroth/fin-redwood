import { ReactElement } from 'react';
import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  title?: string;
  children?: ReactNode;
}

const NoData: React.FC = (props: Props) => (
  <Wrapper>
    <img src="/images/undraw_no_data.svg" alt="" />
    {props.title}
  </Wrapper>
);

NoData.defaultProps = {
  title: 'No data yet',
};

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

export default NoData;
