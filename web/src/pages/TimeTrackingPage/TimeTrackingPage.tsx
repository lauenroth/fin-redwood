import styled, { css } from 'styled-components';
import Box from 'src/components/Box';
import MainLayout from 'src/layouts/MainLayout';

const tracking = [6, 7, 7, 6, 5];
const days = ['M', 'T', 'W', 'T', 'F'];

const TimeTrackingPage = () => {
  return (
    <MainLayout title="Time Tracking">
      <Box title="Week 22. - 26.6.">
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
      </Box>
    </MainLayout>
  );
};

const WeekWrapper = styled.section`
  display: grid;
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
  height: 65px;
  justify-content: center;
  width: 65px;

  div {
    font-size: 18px;
    margin-bottom: 3px;
  }
`;

export default TimeTrackingPage;
