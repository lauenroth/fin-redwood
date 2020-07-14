import { navigate, routes } from '@redwoodjs/router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const ClientsList = ({ clients }) => (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell width="10%">ID</TableCell>
          <TableCell>Name</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clients.map(client => (
          <TableRow key={client.id} onClick={() => navigate(routes.editClient({ id: client.id }))}>
            <TableCell>{client.id}</TableCell>
            <TableCell>{client.name}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ClientsList;
