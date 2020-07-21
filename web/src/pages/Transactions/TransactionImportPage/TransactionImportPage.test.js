import { render } from '@redwoodjs/testing';

import TransactionImportPage from './TransactionImportPage';

describe('TransactionImportPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TransactionImportPage />);
    }).not.toThrow();
  });
});
