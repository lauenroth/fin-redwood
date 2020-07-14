import { render } from '@redwoodjs/testing';

import TransactionsPage from './TransactionsPage';

describe('TransactionsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionsPage />);
    }).not.toThrow();
  });
});
