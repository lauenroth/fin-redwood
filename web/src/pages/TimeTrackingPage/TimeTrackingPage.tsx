import styled, { css } from 'styled-components';
import MainLayout from 'src/layouts/MainLayout';

const TimeTrackingPage = () => {
  return (
    <MainLayout>
      <WeekWrapper>
        <Week>
          <li>
            <Hours time={6}>
              <span>6.5h</span>
            </Hours>{' '}
            M
          </li>
          <li>
            <Hours time={0}>
              <span>0h</span>
            </Hours>{' '}
            T
          </li>
          <li>
            <Hours time={8}>
              <span>8h</span>
            </Hours>{' '}
            W
          </li>
          <li>
            <Hours time={12} isToday>
              <span>12h</span>
            </Hours>{' '}
            T
          </li>
          <li>
            <Hours time={0} /> F
          </li>
        </Week>
        <Total>
          <div>26.5h</div>
          Total
        </Total>
      </WeekWrapper>
    </MainLayout>
  );
};

const WeekWrapper = styled.section`
  display: grid;
  padding: 20px;
  grid-template-columns: 6fr 1fr;
`;

const Week = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: flex-end;
    list-style: none;
    text-align: center;
    width: 15px;
  }
`;

const Hours = styled.div<{ time?: number; isToday?: boolean }>`
  ${props => css`
    align-items: flex-start;
    display: flex;
    height: ${props.time * 13}px;
    justify-content: center;
    margin-bottom: 10px;
    min-height: 15px;
    position: relative;
    width: 6px;

    &::before {
      background-color: ${props.isToday ? '#549cfe' : '#79708c'};
      border-radius: 3px;
      content: '';
      height: calc(100% - 25px);
      left: calc(50% - 3px);
      position: absolute;
      bottom: 0;
      width: 6px;
    }

    span {
      color: ${props.isToday ? '#549cfe' : '#79708c'};
      font-size: 0.9rem;
      transform: rotate(-90deg);
    }
  `}
`;

const Total = styled.div`
  align-items: center;
  border: 2px solid #549cfe;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 80px;
  justify-content: center;
  margin: auto;
  width: 80px;

  div {
    font-size: 18px;
    margin-bottom: 3px;
  }
`;

export default TimeTrackingPage;
