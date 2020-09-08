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
    data: foreignKeyReplacement(input),
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

const foreignKeyReplacement = input => {
  let output = input;
  const foreignKeys = Object.keys(input).filter(k => k.match(/Id$/));
  foreignKeys.forEach(key => {
    const modelName = key.replace(/Id$/, '');
    const value = input[key];
    delete output[key];
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    });
  });
  return output;
};
