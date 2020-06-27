import styled from 'styled-components';
import MainLayout,  { MainHeader } from 'src/layouts/MainLayout';

const transactions = [
  {
    title: 'Train ticket',
    amount: 19.90,
    date: '24.06.2020',
  },
  {
    title: 'Business lunch',
    amount: 39.00,
    date: '24.06.2020',
  },
  {
    title: 'Internet',
    amount: 34.99,
    date: '23.06.2020',
  },
  {
    title: 'Mobile phone subscription',
    amount: 9.99,
    date: '22.06.2020',
  },
  {
    title: 'Office rent',
    amount: 280.00,
    date: '20.06.2020',
  },
  {
    title: 'Macbook Pro',
    amount: 2699.99,
    date: '20.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
  {
    title: 'Test',
    amount: 9.99,
    date: '19.06.2020',
  },
];

const ReceiptsPage = () => {
  return (
    <MainLayout>
      <MainHeader>
        <h1>Transactions</h1>
      </MainHeader>
      <Transactions>
        {transactions.map(transaction => (
          <li>
            <h4>{transaction.title} <div>{transaction.date}</div></h4>
            <Amount>-{transaction.amount.toFixed(2)} €</Amount>
          </li>
        ))}
      </Transactions>
    </MainLayout>
  );
};

const Transactions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    background-color: rgba(45,55,72,0.6);
    border-bottom: 1px solid #1a202c;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
  }

  h4 {
    font-weight: normal;

    div {
      color: #999;
      font-size: 13px;
      margin-top: 4px;
    }
  }
`;

const Amount = styled.div`
  color: #e33;
`;

export default ReceiptsPage;
