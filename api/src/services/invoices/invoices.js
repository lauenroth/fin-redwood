import { db } from 'src/lib/db';
import ServiceHelper from 'src/helper/ServiceHelper';

export const invoices = () => {
  return db.invoice.findMany({ orderBy: { date: 'desc' } });
};

export const invoice = ({ id }) => {
  return db.invoice.findUnique({
    where: { id },
  });
};

export const createInvoice = ({ input }) => {
  return db.invoice.create({
    data: ServiceHelper.foreignKeyReplacement(input),
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
  client: (_obj, { root }) => db.invoice.findUnique({ where: { id: root.id } }).client(),
};
