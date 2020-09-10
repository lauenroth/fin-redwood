import styled, { css } from 'styled-components';
import { useMutation, useFlash } from '@redwoodjs/web';
import { Link, routes, navigate } from '@redwoodjs/router';
import { Avatar } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import InfoIcon from '@material-ui/icons/Info';

const DELETE_CLIENT_MUTATION = gql`
  mutation DeleteClientMutation($id: Int!) {
    deleteClient(id: $id) {
      id
    }
  }
`;

const Client = ({ client }) => {
  const { addMessage } = useFlash();
  const [deleteClient] = useMutation(DELETE_CLIENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.clients());
      addMessage('Client deleted.', { classes: 'rw-flash-success' });
    },
  });

  const onDeleteClick = id => {
    if (confirm('Are you sure you want to delete client ' + id + '?')) {
      deleteClient({ variables: { id } });
    }
  };

  return (
    <Wrapper>
      <Avatar src={client.logo} alt={client.name} />
      <header>
        <h2>{client.name}</h2>
        {client.vat && <h5>VAT: {client.vat}</h5>}
        <ul>
          {client.email && (
            <li>
              <a href={`mailto:${client.email}`}>
                <EmailIcon />
              </a>
            </li>
          )}
          {client.website && (
            <li>
              <a href={client.website} target="_blank" rel="noreferrer">
                <LanguageIcon />
              </a>
            </li>
          )}
          {client.phone && (
            <li>
              <a href={`tel:${client.phone}`}>
                <PhoneIcon />
              </a>
            </li>
          )}
        </ul>
      </header>
      {(client.address || client.notes) && (
        <section>
          <dl>
            {client.address && (
              <>
                <dt>
                  <BusinessIcon />
                </dt>
                <dd>
                  <address>
                    <pre>{client.address}</pre>
                  </address>
                </dd>
              </>
            )}
            {client.notes && (
              <>
                <dt>
                  <InfoIcon />
                </dt>
                <dd>
                  <pre>{client.notes}</pre>
                </dd>
              </>
            )}
          </dl>
        </section>
      )}
      <Link to={routes.editClient({ id: client.id })} className="button">
        Edit
      </Link>
      <button className="danger" onClick={() => onDeleteClick(client.id)}>
        Delete
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-direction: column;

    .MuiAvatar-root {
      border: 2px solid #fff;
      height: 90px;
      position: relative;
      width: 90px;
      z-index: 10;
    }

    header {
      align-items: center;
      background-color: ${theme.colors.backgroundSecondary};
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      margin: -45px 0 20px;
      padding: 55px 20px 20px;
      width: 100%;

      > :not(:last-child) {
        margin-bottom: 15px;
      }

      h2 {
        font-weight: normal;
        margin: 0;
        text-align: center;
      }

      h5 {
        font-weight: normal;
        margin: 0;
      }

      ul {
        display: flex;
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
        padding: 0 15px;
      }
    }

    > section {
      background-color: ${theme.colors.backgroundSecondary};
      border-radius: 4px;
      margin: 0 0 20px;
      padding: 20px;
      width: 100%;

      dl {
        margin: 0;
      }

      dt {
        flex-basis: 40px;
      }
      dd {
        flex-basis: calc(100% - 40px);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  `}
`;

export default Client;
