// import { GraphQLDateTime } from "graphql-iso-date";

export default {
  // DateTime: GraphQLDateTime, //pending point to check if it is used
  Schedule: {
    employee: (parent, args, { db }, info) => {
      return db.models.employee.findOne({
        where: { user: parent.employeeUser }
      });
    }
  },
  Query: {
    schedules: (parent, args, { db }, info) => db.models.schedule.findAll(),
    schedule: (parent, { id }, { db }, info) => db.models.schedule.findByPk(id)
  },

  Mutation: {
    createSchedule: (parent, args, { db }, info) =>
      db.models.schedule.create(args),
    updateSchedule: (parent, args, { db }, info) =>
      db.models.schedule
        .update(args, {
          where: { id: args.id },
          returning: true,
          plain: true
        })
        .then(schedule => schedule[1].dataValues),
    deleteSchedule: (parent, args, { db }, info) =>
      db.models.schedule.findByPk(args.id).then(schedule => {
        db.models.schedule.destroy({ where: { id: args.id } });
        return schedule;
      })
  }
};
