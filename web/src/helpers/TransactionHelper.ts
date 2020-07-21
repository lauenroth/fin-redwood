class TransactionHelper {
  static parse = (transactions, bank: string) => {
    return transactions.map((transaction, index) => {
      console.log(transaction);

      switch (bank) {
        case 'n26':
          return {
            id: index,
            date: transaction.Date,
            amount: parseFloat(transaction['Amount (EUR)']),
            foreignAmount: parseFloat(transaction['Amount (Foreign Currency)']),
            foreignCurrenct: transaction['Type Foreign Currency'],
            account: transaction['Account number'],
            payee: transaction.Payee,
            description: transaction['Payment reference'],
            type: transaction['Transaction type'],
            category: transaction.Category,
          };
        case 'dkb':
          transaction.amount = transaction['Betrag (EUR)'].replace('.', '').replace(',', '.');
          transaction.amount = transaction.amount.includes('-')
            ? parseFloat(transaction.amount.substring(1)) * -1
            : parseFloat(transaction.amount);
          return {
            id: index,
            date: transaction.Buchungstag.split('.').reverse().join('-'),
            amount: transaction.amount,
            account: transaction.Kontonummer,
            payee: transaction['Auftraggeber / Begünstigter'],
            description: transaction.Verwendungszweck,
            type: transaction.Buchungstext, // Lastschrift Kartenzahlung/-abrechnung "Lohn, Gehalt, Rente" Abschluss Gutschrift Dauerauftrag Kartenentgelt Überweisung
            reference: transaction.Kundenreferenz,
          };
      }
    });
  };
}

export default TransactionHelper;
