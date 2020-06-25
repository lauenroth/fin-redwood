import { render } from '@redwoodjs/testing';

import TimeTrackingPage from './TimeTrackingPage';

describe('TimeTrackingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TimeTrackingPage />);
    }).not.toThrow();
  });
});
