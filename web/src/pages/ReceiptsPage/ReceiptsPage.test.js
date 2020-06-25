import { render } from '@redwoodjs/testing';

import ReceiptsPage from './ReceiptsPage';

describe('ReceiptsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReceiptsPage />);
    }).not.toThrow();
  });
});
