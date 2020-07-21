import React from 'react';
import styled, { css } from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Checkbox, Select, MenuItem } from '@material-ui/core';

const categories = {
  expenses: [
    'ATM',
    'Bars & Restaurants',
    'Education',
    'Healthcare & Drug Stores',
    'Household & Utilities',
    'Insurances & Finances',
    'Leisure & Entertainment',
    'Media & Electronics',
    'Shopping',
    'Subscriptions & Donations',
    'Tax & Fines',
    'Transport & Car',
    'Miscellaneous',
  ],
  income: ['Salary', 'Tax Return', 'Miscellaneous'],
};

const TransactionImportList = ({ transactions }) => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [selected, setSelected] = React.useState<string[]>([]);

  const currency = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  return (
    <Wrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" padding="checkbox">
              <Checkbox checked={false} />
            </TableCell>
            <TableCell component="th" style={{ width: '125px' }}>
              Date
            </TableCell>
            <TableCell component="th" style={{ width: '110px' }}>
              Amount
            </TableCell>
            <TableCell component="th" style={{ maxWidth: '300px' }}>
              Payee
            </TableCell>
            <TableCell component="th">Category</TableCell>
            <TableCell component="th">Description</TableCell>
            <TableCell component="th">Business</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(transaction => {
            const isExpense = transaction.amount < 0;
            const options = categories[isExpense ? 'expenses' : 'income'];
            const isRowSelected = isSelected(transaction.id.toString());

            return (
              <TableRow
                key={`transaction-${transaction.id}`}
                role="checkbox"
                selected={isRowSelected}
                tabIndex={-1}
                hover
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isRowSelected}
                    // inputProps={{ 'aria-labelledby': labelId }}
                    onClick={event => handleClick(event, transaction.id.toString())}
                  />
                </TableCell>
                <TableCell style={{ width: '125px' }}>{transaction.date}</TableCell>
                <TableCell align="right" className={isExpense ? 'paid' : 'received'} style={{ width: '110px' }}>
                  {currency.format(transaction.amount)}
                </TableCell>
                <TableCell style={{ maxWidth: '300px' }}>{transaction.payee}</TableCell>
                <TableCell style={{ maxWidth: '250px' }}>
                  <Select value={transaction.category} displayEmpty>
                    {options.map(option => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </TableCell>
                <TableCell style={{ maxWidth: '350px' }}>{transaction.description}</TableCell>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={false}
                    // inputProps={{ 'aria-labelledby': labelId }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <tfoot>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              rowsPerPage={rowsPerPage}
              count={transactions.length}
              page={page}
              onChangePage={(_event, newPage) => setPage(newPage)}
              onChangeRowsPerPage={event => setRowsPerPage(parseInt(event.target.value, 10))}
            />
          </TableRow>
        </tfoot>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    td,
    th {
      background-color: ${theme.colors.backgroundSecondary};
      color: ${theme.colors.textPrimary};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .paid {
      color: ${theme.colors.red};
    }

    .received {
      color: ${theme.colors.green};
    }
  `}
`;

export default TransactionImportList;
