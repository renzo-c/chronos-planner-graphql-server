export default {
  Schedule: {
    employee: (parent, args, { db }, info) => {
      return parent.getEmployees();
    }
  },
  Query: {
    schedules: (parent, args, { db }, info) => {
      return db.models.schedule
        .findAll({
          include: [
            {
              model: db.models.employee
            }
          ]
        })
        .then(result => result);
    },
    schedule: (parent, { id }, { db }, info) => {
      // db.models.schedule
      //   .findByPk(id)
      //   .then(result => console.log("result", Object.keys(result.__proto__)));
      return db.models.schedule.findByPk(id);
    }
  },

  Mutation: {
    createSchedule: (parent, args, { db }, info) => {
      return db.models.schedule.create(args);
    },
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
      }),
    addEmployeeToSchedule: (
      parent,
      { scheduleId, employeeUser },
      { db },
      info
    ) => {
      return db.models.schedule
        .findOne({
          where: { id: scheduleId },
          include: { model: db.models.employee }
        })
        .then(result => result.addEmployee(employeeUser))
        .then(() => {
          return db.models.attendance.findOne({
            where: { scheduleId, employeeUser }
          });
        });
    },
    removeEmployeeToSchedule: (
      parent,
      { scheduleId, employeeUser },
      { db },
      info
    ) => {
      return (
        db.models.schedule
          .findOne({
            where: { id: scheduleId },
            include: { model: db.models.employee }
          })
          // .then(result => console.log("result", Object.keys(result.__proto__)));
          .then(result => result.removeEmployee(employeeUser))
          .then(() => {
            return db.models.schedule.findOne({
              where: { id: scheduleId }
            });
          })
      );
    }
  }
};
