import { db } from 'src/lib/db';

export const invoices = () => {
  return db.invoice.findMany();
};

export const invoice = ({ id }) => {
  return db.invoice.findOne({
    where: { id },
  });
};

export const createInvoice = ({ input }) => {
  return db.invoice.create({
    data: input,
  });
};

export const updateInvoice = ({ id, input }) => {
  return db.invoice.update({
    data: input,
    where: { id },
  });
};

export const deleteInvoice = ({ id }) => {
  return db.invoice.delete({
    where: { id },
  });
};

export const Invoice = {
  client: (_obj, { root }) => db.invoice.findOne({ where: { id: root.id } }).client(),
};
