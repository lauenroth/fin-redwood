import styled, { css } from 'styled-components';
import { navigate, routes } from '@redwoodjs/router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const ClientsList = ({ clients }) => {
  const letters = [];
  const groupedClients = {};

  clients.forEach(client => {
    const letter = client.name[0];
    if (!letters.includes(letter)) {
      letters.push(letter);
    }
    if (!groupedClients[letter]) {
      groupedClients[letter] = [client];
    } else {
      groupedClients[letter].push(client);
    }
  });

  return (
    <Wrapper>
      <List subheader={<li />}>
        {letters.sort().map(letter => (
          <li key={`section-${letter}`}>
            <ListSubheader>{letter}</ListSubheader>
            <ul>
              {groupedClients[letter].sort().map(client => (
                <ListItem
                  key={`client-${letter}-${client.id}`}
                  onClick={() => navigate(routes.editClient({ id: client.id }))}
                >
                  <ListItemText primary={client.name} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${({ theme }) => css`
    max-height: calc(100 * var(--vh) - 64px);
    overflow: auto;
    padding: 0 20px;

    ul {
      margin: 0;
      padding: 0;
    }

    .MuiListSubheader-root {
      align-items: center;
      background-color: ${theme.colors.backgroundPrimary};
      color: ${theme.colors.textSecondary};
      display: flex;
      height: 35px;
    }

    .MuiListItem-root {
      background-color: ${theme.colors.backgroundSecondary};
      cursor: pointer;

      &:not(:last-child) {
        border-bottom: 1px solid ${theme.colors.border};
      }
    }

    ${theme.mediaQuery.phone} {
      padding: 0;

      .MuiListItem-root {
        padding: 16px;

        .MuiTypography-root {
          font-size: 18px;
        }
      }
    }
  `}
`;

export default ClientsList;
