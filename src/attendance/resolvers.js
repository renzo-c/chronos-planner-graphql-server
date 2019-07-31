export default {
  Attendance: {
    employee: (parent, args, { db }, info) => {
      return db.models.employee.findByPk(parent.employeeUser);
    },
    schedule: (parent, args, { db }, info) => {
      return db.models.schedule.findByPk(parent.scheduleId);
    }
  },
  Query: {
    attendances: (parent, args, { db }, info) => {
      return db.models.attendance.findAll();
    },
    attendance: (parent, { employeeUser, scheduleId }, { db }, info) => {
      return db.models.attendance.findOne({
        where: { employeeUser, scheduleId }
      });
    }
  },
  Mutation: {
    deleteAttendance: (parent, { employeeUser, scheduleId }, { db }, info) => {
      return db.models.attendance
        .findOne({
          where: { employeeUser, scheduleId }
        })
        .then(attendance => {
          attendance.destroy();
          return attendance;
        });
    },
    startAttendance: (parent, args, { db }, info) => {
      console.log("args!!!", args)
      const { employeeUser, scheduleId } = args;
      return db.models.attendance
        .update(args, {
          where: { employeeUser, scheduleId },
          returning: true,
          plain: true
        })
        .then(result => result[1].dataValues);
    }
  }
};
