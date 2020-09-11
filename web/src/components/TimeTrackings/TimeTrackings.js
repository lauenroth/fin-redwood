import { Avatar } from '@material-ui/core';
import styled, { css } from 'styled-components';
import TimeHelper from 'src/helpers/TimeHelper';

const TimeTrackingsList = ({ timeTrackings }) => {
  return (
    <Tracking>
      {timeTrackings.map(timeTracking => (
        <li key={`tracking-${timeTracking.id}`}>
          <Avatar src={timeTracking.client.logo} />
          <div>
            <h4>{timeTracking.client.name}</h4>
            <p>{TimeHelper.getDate(timeTracking.date)}</p>
          </div>
          <div>{timeTracking.hours}h</div>
        </li>
      ))}
    </Tracking>
  );
};

const Tracking = styled.ul`
  ${props => css`
    margin: 0 0 20px;
    padding: 0 15px;

    li {
      align-items: center;
      background-color: ${props.theme.colors.primaryDark};
      border-radius: 4px;
      display: flex;
      list-style: none;
      margin-bottom: 15px;
      padding: 15px;

      .MuiAvatar-root {
        margin-right: 15px;
      }

      > :last-child {
        font-size: 22px;
        margin-left: auto;
      }

      h4 {
        font-weight: normal;
        margin: 0;
      }
      p {
        font-size: 12px;
        margin: 0;
      }
    }
  `}
`;

export default TimeTrackingsList;
