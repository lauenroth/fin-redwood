import styled, { css } from 'styled-components';
import MainLayout from 'src/layouts/MainLayout';

const tracking = [6, 7, 7, 4, 0];
const days = ['M', 'T', 'W', 'T', 'F'];

const TimeTrackingPage = () => {
  return (
    <MainLayout>
      <WeekWrapper>
        <Week>
          {tracking.map((time, index) => (
            <li key={`week-${index}`}>
              <Hours time={time} isToday>
                {time > 0 && <span>{time}h</span>}
              </Hours>{' '}
              {days[index]}
            </li>
          ))}
        </Week>
        <Total>
          <div>{tracking.reduce((acc, val) => acc + val, 0)}h</div>
          Total
        </Total>
      </WeekWrapper>
    </MainLayout>
  );
};

const WeekWrapper = styled.section`
  background-color: #161a2f;
  display: grid;
  margin: 15px;
  padding: 15px;
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
  border: 3px solid #549cfe;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  height: 70px;
  justify-content: center;
  margin: auto;
  width: 70px;

  div {
    font-size: 18px;
    margin-bottom: 3px;
  }
`;

export default TimeTrackingPage;
