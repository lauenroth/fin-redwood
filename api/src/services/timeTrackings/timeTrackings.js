import { db } from 'src/lib/db';
import ServiceHelper from 'src/helper/ServiceHelper';

export const timeTrackings = () => {
  return db.timeTracking.findMany({ orderBy: { date: 'desc' } });
};

export const timeTracking = ({ id }) => {
  return db.timeTracking.findOne({
    where: { id },
  });
};

export const createTimeTracking = ({ input }) => {
  return db.timeTracking.create({
    data: ServiceHelper.foreignKeyReplacement(input),
  });
};

export const updateTimeTracking = ({ id, input }) => {
  return db.timeTracking.update({
    data: input,
    where: { id },
  });
};

export const deleteTimeTracking = ({ id }) => {
  return db.timeTracking.delete({
    where: { id },
  });
};

export const TimeTracking = {
  client: (_obj, { root }) => db.timeTracking.findOne({ where: { id: root.id } }).client(),
};
