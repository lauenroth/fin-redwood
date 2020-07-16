import { useMutation, useFlash } from '@redwoodjs/web';
import { navigate, routes } from '@redwoodjs/router';
import TransactionForm from 'src/components/TransactionForm';

const CREATE_TRANSACTION_MUTATION = gql`
  mutation CreateTransactionMutation($input: CreateTransactionInput!) {
    createTransaction(input: $input) {
      id
    }
  }
`;

const NewTransaction = () => {
  const { addMessage } = useFlash();
  const [createTransaction, { loading, error }] = useMutation(CREATE_TRANSACTION_MUTATION, {
    onCompleted: () => {
      navigate(routes.transactions());
      addMessage('Transaction created.', { classes: 'rw-flash-success' });
    },
  });

  const onSave = input => {
    createTransaction({ variables: { input } });
  };

  return (
    <>
      <h2>New Transaction</h2>
      <TransactionForm onSave={onSave} loading={loading} error={error} />
    </>
  );
};

export default NewTransaction;
