import React from 'react';
import styled, { css } from 'styled-components';
import MainLayout, { MainFooter } from 'src/layouts/MainLayout';
import UploadModal from 'src/components/UploadModal';
import { Stepper, Step, StepLabel, Button } from '@material-ui/core';

import TransactionImportList from './TransactionImportList';

const steps = ['Upload CSV', 'Select transactions', 'Confirm'];

const TransactionImportPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [transactions, setTransactions] = React.useState();

  const canGoNext = () => {
    if (activeStep === 2 || (activeStep === 0 && !transactions)) {
      return false;
    }
    return true;
  };

  const onSetTransactions = newTransactions => {
    setTransactions(newTransactions);
    setActiveStep(1);
  };

  return (
    <MainLayout title="Transaction import">
      <Wrapper>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <section>
          {activeStep === 0 && <UploadModal setTransactions={onSetTransactions} />}
          {activeStep === 1 && transactions && <TransactionImportList transactions={transactions} />}
        </section>

        <MainFooter>
          {activeStep > 0 && (
            <Button color="primary" variant="contained" onClick={() => setActiveStep(activeStep - 1)}>
              Back
            </Button>
          )}
          <Button
            color="primary"
            variant="contained"
            onClick={() => setActiveStep(activeStep + 1)}
            disabled={!canGoNext()}
            style={{ marginLeft: 'auto' }}
          >
            {activeStep > 0 ? 'Next' : 'Upload'}
          </Button>
        </MainFooter>
      </Wrapper>
    </MainLayout>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: calc(100 * var(--vh) - 64px);

    section {
      display: flex;
      height: calc(100 * var(--vh) - 250px);
      overflow: auto;
    }

    ${theme.mediaQuery.phone} {
      min-height: calc(100 * var(--vh) - 56px);

      section {
        height: calc(100 * var(--vh) - 262px);
      }
    }
  `}
`;

export default TransactionImportPage;
